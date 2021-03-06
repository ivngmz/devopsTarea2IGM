# Caso práctico número 2 – Despliegue de Cluster k8s en Azure

## ¿Como desplegar?

Para este despliegue de configuraciones, he tenido que desplegar terraform con Azure CLI desde Centos 8 Stream.

Los requisitos previos serían:

- ansible
```
dnf install epel-release -y
dnf install ansible -y
dnf install python36 -y
```

- terraform
```
yum install -y yum-utils
yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
yum -y install terraform
```

- git
```
dnf install ansible git tree jq -y
```

- jq
```
dnf install jq -y
```

- azure cli
```
rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[azure-cli]
name=Azure CLI
baseurl=https://packages.microsoft.com/yumrepos/azure-cli
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/azure-cli.repo
sudo dnf install azure-cli
```

Las dependecias de módulos de Ansible requieren la instalación de:

- Módulo community.general
```
ansible-galaxy collection install community.general
```

- Módulo ansible-posix
```
ansible-galaxy collection install ansible.posix
```

Una vez que todo esté instalado:

- Clonar repositorio :
```
git clone https://github.com/ivngmz/devopsTarea2IGM.git
```

- Crear una clave ssh:
```
ssh-keygen -t rsa -b 4096 -C "usuario@dominio.com"
```

- Crear un service principal:
```
az ad sp create-for-rbac --role="Contributor"
```

Almacenar los datos de subscripción para el siguiente paso.

## Despliegue de la Infraestructura
Acceder a la ruta Terraform/2vm/ del repositorio descargado y configurar el fichero Terraform/providers.tf con los datos obtenidos en la creacion del service provider de Azure (previamente indicado), mover a Terraform/2vm/providers.tf.

El siguiente paso puede ser omitido si se ejecuta el script Ansible/deploy.sh con éxito:

- Una vez configurado se puede ejecutar terraform init, terraform apply (opcional terraform apply --auto-approve, si se desea omitir comprobaciones del orden de ejecución) y validar el orden de ejecución antes de validar escribiendo "yes".

Se indica posteriormente razón por la que no se ha respetado el despliegue de 4 máquinas (Problemas encontrados - Número de máquinas para el cluster).

Se realiza el despliegue de dos máquinas con las siguientes características:
```
master-vm -> 2 procesadores y 8G de memoria
worker1-vm -> 2 procesadores y 4G de memoria
```
## Desplegar el cluster con Ansible

Ejecutar ./Ansible/deploy.sh en el repositorio.
Aunque no debería fallar (está muy comprobado), en caso de fallo:

- El problema puede estar relacionado con la recuperación de las IPs publicas. Sería necesario entonces grabar las IPs publicas en el inventario Ansible/inventory. ( Explicación: Para el despliegue del cluster con Ansible he preparado unos scripts que recogen la ip de cada nodo, modifican el inventario y lanzan una conexión de prueba para modificar knownhosts). Ejecutar entonces:
```
ansible-playbook -i inventory playbook.yaml
```

Modo alternativo de obtención de IPs públicas: Inicialmente he localizado el modo de extraer el dato de terraform.tfstate ("cat terraform.tfstate | jq '.resources[].instances[].attributes | {"nodeIP": .public\_ip\_address, "name": .computer\_name} | select(.name != null)'")

## Modificando security rules
Si todo va bien en la ejecución de Ansible/deploy.sh no es necesario tener esto en cuenta. Esto también ha sido finalmente automatizado. En otro caso, para que el despliegue sea completo es necesario modificar el puerto habilitado en security rules de Azure para escucha de peticiones externas.  Solo de este modo los servicios del cluster quedarán expuestos para el acceso de clientes.

## Comprobar la aplicación
Para el test final he incluido un script que genera endpoints, en la salida de la task de ansible genera las URLs de las aplicaciones desplegadas. El resultado debe quedar disponible en la ruta: Ansible/informacionCheckeo.txt tras la finalización correcta del script.


En el caso de que sea realizado un procedimiento alternativo a la ejecución del mencionado script, para poder probar los endpoints, es necesario volver a lanzar terraform con la configuración que ha sido modificada por el playbook de Ansible en security.tf (puerto e IP de ingress Haproxy)

# Problemas encontrados:

## Numero de máquinas para el cluster
No ha sido posible el despliegue de las 4 máquinas sugeridas en originalmente. No me está permitido por la licencia estudiante. La salida de terraform muestra lo siguiente:

### Despliegue de 4 máquinas
`
│ Error: creating Linux Virtual Machine "worker2-vm" (Resource Group "kubernetes\_rg"): compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=0 -- Original Error: autorest/azure: Service returned an error. Status=<nil> Code="OperationNotAllowed" Message="Operation could not be completed as it results in exceeding approved standardBSFamily Cores quota. Additional details - Deployment Model: Resource Manager, Location: westeurope, Current Limit: 4, Current Usage: 4, Additional Required: 2, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/#blade/Microsoft\_Azure\_Capacity/UsageAndQuota.ReactView/Parameters/%7B%22subscriptionId%22:%22b32052cd-407e-4571-ad05-c3a40dcec58c%22,%22command%22:%22openQuotaApprovalBlade%22,%22quotas%22:[%7B%22location%22:%22westeurope%22,%22providerId%22:%22Microsoft.Compute%22,%22resourceName%22:%22standardBSFamily%22,%22quotaRequest%22:%7B%22properties%22:%7B%22limit%22:6,%22unit%22:%22Count%22,%22name%22:%7B%22value%22:%22standardBSFamily%22%7D%7D%7D%7D]%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests"
`

### Despliegue de 3 máquinas
`
│ Error: creating Linux Virtual Machine "worker1-vm" (Resource Group "kubernetes\_rg"): compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=0 -- Original Error: autorest/azure: Service returned an error. Status=<nil> Code="OperationNotAllowed" Message="Operation could not be completed as it results in exceeding approved standardBSFamily Cores quota. Additional details - Deployment Model: Resource Manager, Location: westeurope, Current Limit: 4, Current Usage: 4, Additional Required: 2, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/#blade/Microsoft\_Azure\_Capacity/UsageAndQuota.ReactView/Parameters/%7B%22subscriptionId%22:%22b32052cd-407e-4571-ad05-c3a40dcec58c%22,%22command%22:%22openQuotaApprovalBlade%22,%22quotas%22:[%7B%22location%22:%22westeurope%22,%22providerId%22:%22Microsoft.Compute%22,%22resourceName%22:%22standardBSFamily%22,%22quotaRequest%22:%7B%22properties%22:%7B%22limit%22:6,%22unit%22:%22Count%22,%22name%22:%7B%22value%22:%22standardBSFamily%22%7D%7D%7D%7D]%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests"
`

En consecuencia he desplegado el cluster en dos máquinas, con un Master que a la vez hace de servidor NFS y Worker (taint).

De cara a ser fiel al espíritu de la práctica he intentado que las tareas queden delimitadas por funciones, de modo que se hiciera posible con otras cuotas menos restrictivas implementar la creacion del cluster de 4 máquinas.
## Problema con acceso a ingress
Durante el desarrollo de la práctica estuve atascado debido a que ingres no tomaba las ips dentro de la subnet elegida en la variable CIDR del init. Inicialmente retrasé el momento de levantar ingres hasta después de que el worker estuviera unido al cluster. Como no tenía el compportamiento deseado, finalmente incluí una tarea que realizaba un borrado de los pods ha afectados para que se recrearan con el rango de red correcto. De este modo solventé el problema.

## Problema al desplegar Wordpress
El primer problema estaba relacionado con falta de permisos del usuario mysql en la ruta compartida NFS. Para solventarlo comprobé que se podía dar permisos extrayendo inicialmente el uid y gid del user en el contenedor, aún con todo he tenido problemas. Dos tipos de mensajes: “Database connection error” con NFS. Sin NFS “too many redirections”. Aparte de revisar recusos varios y probar soluciones encontradas en foros varios…, he revisado troubleshooting de kubernetes:

- conectividad entre pods
- habilitado logs en coredns y revisión
- eventos del namespace
- logs de los pod
- logs dentro de máquina
- revisando conectividad desde haproxy ingress una vez que se ha inscrito en haproxy.cfg

Enlaces revisados:

<https://kubernetes.io/docs/tasks/debug-application-cluster/troubleshooting/>

<https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/>

<https://www.youtube.com/watch?v=JyLtg_SJ1lo>

<https://www.youtube.com/watch?v=NFApeJRXos4>

<https://www.youtube.com/watch?v=40VfZ_nIFWI>

Entiendo que la causa debería estar en la SDN, comunicacion entre pods o dns.

Finalmente , aunque el despliegue de wordpress lo he incluido, me falta encontrar el fallo y actualmente no queda en estado running. Como compensación dejé la aplicación webapp-volumes que demuestra funcionamiento de nfs con persistent volume. Elimino namespace wordpress y pvs relacionados en los pantallazos del anexo. Me gustaría saber cual es la causa. Seguiré trabajando en ello.

En cualquier caso, incluyo un despliegue propio que ha sido creado a partir de codigo Spring Boot de un Api. Este codigo ha sido creado a partir de codigo fuente de ejemplo, dockerizado y subido a mi Docker Hub.

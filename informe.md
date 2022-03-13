# Caso práctico numero 2 – Despliegue de Cluster k8s en Azure

## ¿Como desplegar?

Para este despliegue de configuraciones, he tenido que desplegar terraform con Azure CLI desde Centos 8 Stream.

Los requisitos previos serían: 
- ansible
- terraform
- git
- jq.
- azure cli
```
dnf install epel-release -y
dnf install ansible git tree jq -y
dnf install python36 -y
yum install -y yum-utils
yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
yum -y install terraform
rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[azure-cli]
name=Azure CLI
baseurl=https://packages.microsoft.com/yumrepos/azure-cli
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/azure-cli.repo
sudo dnf install azure-cli
```

Las dependecias de modulos de ansible requieren la instalacion de:

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

---

## Despliegue de la Infraestructura

Acceder a la ruta Terraform/2vm/ del repositorio descargado y configurar en Terraform el fichero providers.tf.mod con los datos obtenidos en la creacion del service provider, renombrar a providers.tf.

El siguiente paso puede ser omitido si se ejecuta el script Ansible/deploy.sh:
- Una vez configurado se puede ejecutar `terraform init`, `terraform apply` (opcional `terraform apply --auto-approve`, si se desea omitir comprobaciones del orden de ejecución) y validar el orden de ejecución antes de validar escribiendo "yes".

---

Se indica posteriormente razón por la que no se ha respetado el despliegue de 4 máquinas (Problemas encontrados: Numero de máquinas para el cluster).

Se realiza el despliegue de dos máquinas con las siguientes características:

```
master-vm -> 2 procesadores y 8G de memoria
worker1-vm -> 2 procesadores y 4G de memoria
```
## Desplegar el cluster con Ansible

Ejecutar ./Ansible/deploy.sh en el repositorio.
En caso de fallo:
- El problema está relacionado con la recuperacion de las IPs publicas. Sería necesario entonces grabar las IPs publicas en el inventario Ansible/inventory. ( Explicacion: Para el despliegue del cluster con Ansible he preparado unos scripts que recogen la ip de cada nodo, modifican el inventario y lanzan una conexion de prueba para modificar knownhosts.). Ejecutar entonces:
```
ansible-playbook -i inventory playbook.yaml
```

Modo alternativo de obtencion de IPs públicas: Inicialmente he localizado el modo de extraer el dato de terraform.tfstate ("cat terraform.tfstate | jq '.resources[].instances[].attributes | {"nodeIP": .public_ip_address, "name": .computer_name} | select(.name != null)'") Sin embargo en mi caso al intentar realizar el despliegue ansible desde Azure-Cloud, encuentro status incorrecto en algunas tasks. De modo que al final he optado por automatizar en base a consulta por azure-cli. En caso de fall, es necesario grabar las IPs publicas en el inventario Ansible/inventory

--- 

## Modificando security rules

Para que el despliegue sea completo es necesario modificar el puerto habilitado en security rules de Azure para escucha de peticiones externas. Esto también ha sido finalmente automatizado. 

---

## Comprobar la aplicacion

Para el test final he incluido un script que genera endpoints, en la salida de la task de ansible genera las URLs de las aplicaciones desplegadas.
Para poder probarlas es necesario volver a lanzar terraform con la configuracion que ha sido modificada por el playbook de Ansible en security.tf (puerto e IP de ingress HAproxy)

---

# Problemas encontrados:

## Numero de máquinas para el cluster

No ha sido posible el despliegue de las 4 máquinas sugeridas en originalmente. No me está permitido por la licencia estudiante. La salida de terraform muestra lo siguiente:

### Despliegue de 4 máquinas

`│ Error: creating Linux Virtual Machine "worker2-vm" (Resource Group "kubernetes_rg"): compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=0 -- Original Error: autorest/azure: Service returned an error. Status=<nil> Code="OperationNotAllowed" Message="Operation could not be completed as it results in exceeding approved standardBSFamily Cores quota. Additional details - Deployment Model: Resource Manager, Location: westeurope, Current Limit: 4, Current Usage: 4, Additional Required: 2, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/#blade/Microsoft_Azure_Capacity/UsageAndQuota.ReactView/Parameters/%7B%22subscriptionId%22:%22b32052cd-407e-4571-ad05-c3a40dcec58c%22,%22command%22:%22openQuotaApprovalBlade%22,%22quotas%22:[%7B%22location%22:%22westeurope%22,%22providerId%22:%22Microsoft.Compute%22,%22resourceName%22:%22standardBSFamily%22,%22quotaRequest%22:%7B%22properties%22:%7B%22limit%22:6,%22unit%22:%22Count%22,%22name%22:%7B%22value%22:%22standardBSFamily%22%7D%7D%7D%7D]%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests"`

### Despliegue de 3 máquinas

`
│ Error: creating Linux Virtual Machine "worker1-vm" (Resource Group "kubernetes_rg"): compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=0 -- Original Error: autorest/azure: Service returned an error. Status=<nil> Code="OperationNotAllowed" Message="Operation could not be completed as it results in exceeding approved standardBSFamily Cores quota. Additional details - Deployment Model: Resource Manager, Location: westeurope, Current Limit: 4, Current Usage: 4, Additional Required: 2, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/#blade/Microsoft_Azure_Capacity/UsageAndQuota.ReactView/Parameters/%7B%22subscriptionId%22:%22b32052cd-407e-4571-ad05-c3a40dcec58c%22,%22command%22:%22openQuotaApprovalBlade%22,%22quotas%22:[%7B%22location%22:%22westeurope%22,%22providerId%22:%22Microsoft.Compute%22,%22resourceName%22:%22standardBSFamily%22,%22quotaRequest%22:%7B%22properties%22:%7B%22limit%22:6,%22unit%22:%22Count%22,%22name%22:%7B%22value%22:%22standardBSFamily%22%7D%7D%7D%7D]%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests"
`

En consecuencia he desplegado el cluster en dos máquinas, con un Master que a la vez hace de servidor NFS y Worker (taint).

De cara a ser fiel al espíritu de la práctica he intentado que las tareas queden delimitadas por funciones, de modo que se hiciera posible con otras cuotas menos restrictivas implementar la creacion del cluster de 4 máquinas.

## Problema con acceso a ingress

Durante el desarrollo de la práctica estuve atascado debido a que ingres no tomaba las ips dentro de la subnet elegida en la variable CIDR del init. Inicialmente retrasé el momento de levantar ingres hasta después de que el worker estuviera unido al cluster. Como no tenía el compportamiento deseado, finalmente incluí una tarea que realizaba un borrado de los pods ha afectados para que se recrearan con el rango de red correcto. De este modo solventé el problema.

## Problema al desplegar Wordpress

El primer problema estaba relacionado con falta de permisos del usuario mysql en la ruta compartida NFS. Para solventarlo comprobé que se podía dar permisos extrayendo inicialmente el uid y gid del user en el contenedor, aún con todo he tenido problemas, he revisado troubleshooting de terraform: 
- conectividad entre pods
- habilitado logs en coredns
- eventos del namespace

Finalmente , aunque el despliegue de wordpress lo he incluido, me falta encontrar el fallo. Como compensación dejé la aplicacion webapp-volumes que demuestra funcionamiento de nfs con persistent volume.

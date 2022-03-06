# Caso práctico numero 2 – Despliegue de Cluster k8s en Azure

## ¿Como desplegar?

Para el despliegue se debe abrir Cloud Shell. una vez que se acceda:

- clonar repositorio :
```
git clone https://github.com/ivngmz/devopsTarea2IGM.git
```
- Crear una clave ssh: 
```
ssh-keygen -t rsa -b 4096 -C "usuario@dominio.com"
```
- Crear un service principal:
```
az login
az account set --subscription=<subscriptionid>
```

## Despliegue de la Infraestructura

Configurar en Terraform el fichero providers.tf con los datos obtenidos en la creacion del service provider.

Una vez configurado se puede ejecutar `terraform init`, `terraform apply` y validar el orden de ejecución antes de validar escribiendo "yes".

## Desplegar el cluster con Ansible

Se desplegarán dos máquinas con las características:
```
master-vm
worker1-vm
```

Para el despliegue del cluster he preparado unos scripts que recogen la ip de cada nodo, modifican el inventario y lanzan una conexionde prueba para modificar knownhosts.

## Modificando security rules

Para que el despliegue sea completo es necesario modificar el puerto habilitado en security rules de Azure para escucha de peticiones externas.

## Comprobar la aplicacion


Para el test final he incluido un script que genera el endpoint final de modo que solo sea necesario ejecutarlo, para que devuelva la URL.


# Problemas encontrados:

## Numero de máquinas para el cluster

No ha sido posible el despliegue de las 4 máquinas sugeridas en originalmente. No me está permitido por la licencia estudiante. La salida de terraform muestra lo siguiente:

### Despliegue de 4 máquinas

`│ Error: creating Linux Virtual Machine "worker2-vm" (Resource Group "kubernetes_rg"): compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=0 -- Original Error: autorest/azure: Service returned an error. Status=<nil> Code="OperationNotAllowed" Message="Operation could not be completed as it results in exceeding approved standardBSFamily Cores quota. Additional details - Deployment Model: Resource Manager, Location: westeurope, Current Limit: 4, Current Usage: 4, Additional Required: 2, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/#blade/Microsoft_Azure_Capacity/UsageAndQuota.ReactView/Parameters/%7B%22subscriptionId%22:%22b32052cd-407e-4571-ad05-c3a40dcec58c%22,%22command%22:%22openQuotaApprovalBlade%22,%22quotas%22:[%7B%22location%22:%22westeurope%22,%22providerId%22:%22Microsoft.Compute%22,%22resourceName%22:%22standardBSFamily%22,%22quotaRequest%22:%7B%22properties%22:%7B%22limit%22:6,%22unit%22:%22Count%22,%22name%22:%7B%22value%22:%22standardBSFamily%22%7D%7D%7D%7D]%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests"`

### Despliegue de 3 máquinas

`
│ Error: creating Linux Virtual Machine "worker1-vm" (Resource Group "kubernetes_rg"): compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=0 -- Original Error: autorest/azure: Service returned an error. Status=<nil> Code="OperationNotAllowed" Message="Operation could not be completed as it results in exceeding approved standardBSFamily Cores quota. Additional details - Deployment Model: Resource Manager, Location: westeurope, Current Limit: 4, Current Usage: 4, Additional Required: 2, (Minimum) New Limit Required: 6. Submit a request for Quota increase at https://aka.ms/ProdportalCRP/#blade/Microsoft_Azure_Capacity/UsageAndQuota.ReactView/Parameters/%7B%22subscriptionId%22:%22b32052cd-407e-4571-ad05-c3a40dcec58c%22,%22command%22:%22openQuotaApprovalBlade%22,%22quotas%22:[%7B%22location%22:%22westeurope%22,%22providerId%22:%22Microsoft.Compute%22,%22resourceName%22:%22standardBSFamily%22,%22quotaRequest%22:%7B%22properties%22:%7B%22limit%22:6,%22unit%22:%22Count%22,%22name%22:%7B%22value%22:%22standardBSFamily%22%7D%7D%7D%7D]%7D by specifying parameters listed in the ‘Details’ section for deployment to succeed. Please read more about quota limits at https://docs.microsoft.com/en-us/azure/azure-supportability/per-vm-quota-requests"
`

En consecuencia he dewsplegado el clster en dos máquinas, con un Master que a la vez hace de servidor NFS y un Worker.
De cara a ser fiel al espíritu de la práctica he intentado que las tareas queden delimitadas por funciones, de modo que se hiciera posible con otras cuotas menos restrictivas implementar la creacion del cluster de 4 máquinas.

### Problema con acceso a ingress

Durante el desarrollo de la práctica estuve atascado debido a que ingres no tomaba las ips dentro de la subnet elegida en la variable CIDR del init. Inicialmente retrasé el momento de levantar ingres hasta después de que el worker estuviera unido al cluster. Como no tenía el compportamiento deseado, finalmente incluí una tarea que realizaba un borrado de los pods ha afectados para que se recrearan con el rango de red correcto. De este modo solventé el problema.



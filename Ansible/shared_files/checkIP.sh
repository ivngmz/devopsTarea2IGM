# Recuperar ip publica
az account set --subscription=b32052cd-407e-4571-ad05-c3a40dcec58c;
az vm list-ip-addresses --resource-group KUBERNETES_RG --name master-vm | jq '.[0].virtualMachine.network.publicIpAddresses[0].ipAddress'
az vm list-ip-addresses --resource-group KUBERNETES_RG --name worker1-vm | jq '.[0].virtualMachine.network.publicIpAddresses[0].ipAddress'


# Modificar inventario


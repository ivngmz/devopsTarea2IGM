# Recuperar ip publica
az account set --subscription=b32052cd-407e-4571-ad05-c3a40dcec58c;


masterip=$(az vm list-ip-addresses --resource-group KUBERNETES_RG --name master-vm | jq '.[0].virtualMachine.network.publicIpAddresses[0].ipAddress')

workerip=$(az vm list-ip-addresses --resource-group KUBERNETES_RG --name worker1-vm | jq '.[0].virtualMachine.network.publicIpAddresses[0].ipAddress')


# Modificar inventario

sed -i "s/^MasterIP=.*/MasterIP=$masterip/g" test
sed -i "s/^MasterIP=.*/Worker1=$workerip/g" test


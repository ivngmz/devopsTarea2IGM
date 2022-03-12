# Recuperar ip publica
az login

az account set --subscription=b32052cd-407e-4571-ad05-c3a40dcec58c

# Como alternativa a las queries posteriores
# az vm list-ip-addresses -g KUBERNETES_RG  -n master-vm --query [0].virtualMachine.network.publicIpAddresses[0].ipAddress

masterip=$(az vm list-ip-addresses --subscription=b32052cd-407e-4571-ad05-c3a40dcec58c --resource-group KUBERNETES_RG --name master-vm | jq -r '.[0].virtualMachine.network.publicIpAddresses[0].ipAddress')

worker1ip=$(az vm list-ip-addresses --subscription=b32052cd-407e-4571-ad05-c3a40dcec58c --resource-group KUBERNETES_RG --name worker1-vm | jq -r '.[0].virtualMachine.network.publicIpAddresses[0].ipAddress')


echo $worker1ip
echo $worker1ip

# Modificar inventario

sed -i "s/^masterIP=.*/masterIP=$masterip/g" inventory 
sed -i "s/^worker1IP=.*/worker1IP=$worker1ip/g" inventory


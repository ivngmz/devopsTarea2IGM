#!/bin/sh

# Declaracion de variables

tfFile="../Terraform/2vms/security.tf"  			# fichero configuracion terraorm
srcDataFile="shared_files/nodeport" 				# Dato previamente extraido de HAproxy

nodeport=`grep 'nodeport:' $srcDataFile | awk '{print $2}'` 	# autocomentado
node=`grep 'node:' $srcDataFile | cut -d '"' -f2` 		# auto comentado
nodeIP= 							# será utilizada posteriormente
currentfileIP= 							# será utilizada posteriormente

# Modifico el puerto en el archivo de terraform para habilitar acceso
sed -i -E '27,31 s/[[:digit:]]{5}/'$nodeport'/g' $tfFile


# Comparo variable extraida para determinar nodo
if [ "$node" = "worker1-vm.tarea2.unir" ]
  then
    nodeIP=`grep 'worker1IP=' inventory | cut -d '=' -f2`
elif [ "$node" = "worker1-vm.tarea2.unir" ]
  then
    nodeIP=`grep 'masterIP=' inventory | cut -d '=' -f2`
else
  echo "Tenemos un problema"
  exit 255
fi

# Almaceno IP pública

echo "\npublicIP: " $nodeIP >> $srcDataFile

# Extraigo dato de configuracion actual terraform
currentfileIP=`grep -n destination_address_prefix $tfFile | grep 30 | cut -d '"' -f2`

# Realizo modificacion de IP en archivo de terraform según nodo detectado
sed -i -E '27,31 s/'"$currentfileIP"'/'"$nodeIP"'/g' $tfFile



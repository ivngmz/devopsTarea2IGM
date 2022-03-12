#!/bin/sh

# Levanta la infraestructura con terraform
cd ../Terraform/2vms/; terraform apply --auto-approve; cd -

# Recupero los datos de las IPs públicas y modifico inventario
sh shared_files/checkIP.sh

# Realizo conexiones de pruva para validar en knownhosts
sh shared_files/sshConnections.sh

# Comienza la ejecucion de playbook y despliegue
ansible-playbook -i inventory playbook.yaml

# Realiza el cambio en la regal del grupo de seguridad de azure
cd ../Terraform/2vms/; terraform apply --auto-approve; cd -

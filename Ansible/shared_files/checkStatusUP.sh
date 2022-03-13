#!/bin/bash

# Example curl -I -H 'Host: foo.bar' 'http://192.168.1.110:31826/webapp-routed'

# Variables:

srcDataFile="shared_files/nodeport"
file=$1
domain=`grep -A20 'kind: Ingress' $1 | grep host | awk '{print $3}'`
destinationIP=`grep 'publicIP:' $srcDataFile | awk '{print $2}'`
nodeport=`grep 'nodeport' $srcDataFile | awk '{print $2}'`
resource=`grep -A20 'kind: Ingress' $file | grep "path: " | awk '{print $3}' | cut -d '"' -f 2`

# Realizo prueba de conexion - Esto debería ejecutarse correctamente si se pudiera forzar en local terraform desde el mismo playbook.
# curl -I -H "Host: $domain" "http://${destinationIP}:${nodeport}${resource}"

# Muestro URLs de acceso:
echo "Por favor habilite en la consola de azure el puerto indicado: " $nodeport > informacionCheckeo.txt
echo "Es necesario relacionar en fichero hosts: " $domain " " $destinationIP >> informacionCheckeo.txt
echo "La URL de acceso:" >> informacionCheckeo.txt
echo "http://"${domain}:${nodeport}${resource} >> informacionCheckeo.txt
echo "También se puede utilizar: curl -I -H \"Host: "$domain"\" \"http://"${destinationIP}:${nodeport}${resource}\" >> informacionCheckeo.txt

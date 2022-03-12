#!/bin/sh

# Expresionn que extrae el puerto para actualizar security rule de Azure
nodePort=`kubectl get svc haproxy-kubernetes-ingress -n haproxy-controller -o json | jq '.spec.ports[0].nodePort'`

echo "nodeport: " $nodePort 

# Expresion que extrae el nodo actual del controlador haproxy
node=`kubectl get pods -A -o json | jq '.items[] | {"name": .metadata.name, "nodeName": .spec.nodeName} | select(.name | contains ("haproxy-kubernetes-ingress")) | select(.name | contains ("default") | not) ' | jq '.nodeName'`

echo "node: " $node
echo ""

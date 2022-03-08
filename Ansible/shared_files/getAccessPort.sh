#!/bin/bash

kubectl get svc -A | grep 'haproxy-kubernetes-ingress '| cut -d ":" -f2 | cut -d "/" -f 1

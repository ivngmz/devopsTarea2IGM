#!/bin/bash
outsiderHAPods=$(kubectl get pods -A -o wide | grep haproxy | awk '{print $7}' | grep '192.16' | wc -l)
if [[ -n "$outsiderHAPods" ]]
then
for i in $(kubectl get pods -A -o wide | grep haproxy | awk '{print $2}'); do kubectl delete pod $i -n haproxy-controller;done
fi

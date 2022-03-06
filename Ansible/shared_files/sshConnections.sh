#!/bin/bash

workdir=`pwd`

masterip=`grep 'masterIP=' $(echo $workdir"/inventory") | cut -d '=' -f2`
workerip=`grep 'worker1IP=' $(echo $workdir"/inventory") | cut -d '=' -f2`
ssh adminDevOps@$masterip -o "StrictHostKeyChecking no" exit
ssh adminDevOps@$workerip -o "StrictHostKeyChecking no" exit

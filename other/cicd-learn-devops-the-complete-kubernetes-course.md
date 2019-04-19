# Learn DevOps: The Complete Kubernetes Course (Part 1)

> Github Repositories

- [learn-devops-the-complete-kubernetes-course](https://github.com/peelmicro/learn-devops-the-complete-kubernetes-course).
- [on-prem-or-cloud-agnostic-kubernetes](https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes).
- [kubernetes-coursee](https://github.com/peelmicro/kubernetes-course).
- [http-echo](https://github.com/peelmicro/http-echo).

The [Learn DevOps: The Complete Kubernetes Course ](https://www.udemy.com/learn-devops-the-complete-kubernetes-course//) Udemy course helps learn how Kubernetes will run and manage your containerized applications and to build, deploy, use, and maintain Kubernetes.

> Other parts:

- [Learn DevOps: The Complete Kubernetes Course (Part 2)](./cicd-learn-devops-the-complete-kubernetes-course-2.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 3)](./cicd-learn-devops-the-complete-kubernetes-course-3.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 4)](./cicd-learn-devops-the-complete-kubernetes-course-4.md)

> Table of contents
[[toc]]

## What I've learned

- Install and configure Kubernetes (on your laptop/desktop or production grade cluster on AWS)
- Use Docker Client (with kubernetes), kubeadm, kops, or minikube to setup your cluster
- Be able to run stateless and stateful applications on Kubernetes
- Use Healthchecks, Secrets, ConfigMaps, placement strategies using Node/Pod affinity / anti-affinity
- Use StatefulSets to deploy a Cassandra cluster on Kubernetes
- Add users, set quotas/limits, do node maintenance, setup monitoring
- Use Volumes to provide persistence to your containers
- Be able to scale your apps using metrics
- Package applications with Helm and write your own Helm charts for your applications
- Automatically build and deploy your own Helm Charts using Jenkins
- Install and use kubeless to run functions (Serverless) on Kubernetes
- Install and use Istio to deploy a service mesh on Kubernetes
- Deployment concepts in Kubernetes by using HELM and HELMFILE

## Section: 0. Introduction

### 1. Course Introduction

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CourseIntroduction.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CourseIntroduction2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CourseIntroduction3.png)

### 2. Support and Course Materials

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/SupportAndCourseMaterials.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/SupportAndCourseMaterials2.png)

### 3. Procedure Document

**Kubernetes Procedure Document**
_Github repository [Read this first]_

- Download all the course material from: https://github.com/wardviaene/kubernetes-course

- Kubernetes releases minor version updates of its distribution every 3 months

  - Rather than updating the scripts in the video lectures, the repository in Github is updated if any script need changes

  - The changes are often very minor, the API is very stable. Often API versions like v1betaX change to v1betaX+1 or to v1 (stable)

  - All the scripts you can find in the repository should work with the latest version of Kubernetes, if you have any issues, contact me through one of the channels listed below

_Slides_
The slides can be downloaded from: https://d3jb1lt6v0nddd.cloudfront.net/udemy/Learn+DevOps+-+Kubernetes.pdf

_Questions?_

- Send me a message

- Use Q&A

- Join our facebook group: https://www.facebook.com/groups/840062592768074/

_Download Kubectl_

- Linux: https://storage.googleapis.com/kubernetes-release/release/v1.11.0/bin/linux/amd64/kubectl

- MacOS: https://storage.googleapis.com/kubernetes-release/release/v1.11.0/bin/darwin/amd64/kubectl

- Windows: https://storage.googleapis.com/kubernetes-release/release/v1.11.0/bin/windows/amd64/kubectl.exe

- Or use a packaged version for your OS: see https://kubernetes.io/docs/tasks/tools/install-kubectl/

_Minikube_

- Project URL: https://github.com/kubernetes/minikube

- Latest Release and download instructions: https://github.com/kubernetes/minikube/releases

- VirtualBox: http://www.virtualbox.org

_Minikube on windows:_

- Download the latest minikube-version.exe

- Rename the file to minikube.exe and put it in C:\minikube

- Open a cmd (search for the app cmd or powershell)

- Run: cd C:\minikube and enter minikube start

_Test your cluster commands_
Make sure your cluster is running, you can check with **minikube status**.

If your cluster is not running, enter **minikube start** first.

kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.4 --port=8080
kubectl expose deployment hello-minikube --type=NodePort

minikube service hello-minikube --url

`open a browser and go to that url`

_Kops_
Project URL

- https://github.com/kubernetes/kops

_Free DNS Service_

- Sign up at http://freedns.afraid.org/

  - Choose for subdomain hosting

  - Enter the AWS nameservers given to you in route53 as nameservers for the subdomain

- http://www.dot.tk/ provides a free .tk domain name you can use and you can point it to the amazon AWS nameservers

- Namecheap.com often has promotions for tld’s like .co for just a couple of bucks

_Cluster Commands_

- kops create cluster --name=kubernetes.newtech.academy --state=s3://kops-state-b429b --zones=eu-west-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.newtech.academy

- kops update cluster kubernetes.newtech.academy --yes --state=s3://kops-state-b429b

- kops delete cluster --name kubernetes.newtech.academy --state=s3://kops-state-b429b

- kops delete cluster --name kubernetes.newtech.academy --state=s3://kops-state-b429b --yes

_Kubernetes from scratch_

- You can setup your cluster manually from scratch

- If you’re planning to deploy on AWS / Google / Azure, use the tools that are fit for these platforms

- If you have an unsupported cloud platform, and you still want Kubernetes, you can install it manually

- CoreOS + Kubernetes: ###a href="https://coreos.com/kubernetes/docs/latest/getting-started.html">https://coreos.com/kubernetes/docs/latest/getting-started.html

_Docker_
You can download Docker Engine for:

- Windows: https://docs.docker.com/engine/installation/windows/

- MacOS: https://docs.docker.com/engine/installation/mac/

- Linux: https://docs.docker.com/engine/installation/linux/

_DevOps box_

- Virtualbox: http://www.virtualbox.org

- Vagrant: http://www.vagrantup.com

- DevOps box: https://github.com/wardviaene/devops-box

- Launch commands (in terminal / cmd / powershell):

  - cd devops-box/

  - vagrant up

- Launch commands for a plain ubuntu box:

  - mkdir ubuntu

  - vagrant init ubuntu/xenial64

  - vagrant up

_Cheatsheet: Docker commands_
| description | command |
|-------------|---------|
|Build image| docker build.|
|Build & Tag| docker build -t wardviaene/k8s-demo:latest .|
|Tag image| docker tag imageid wardviaene/k8s-demo|
|Push image| docker push wardviaene/k8s-demo|
|List images| docker images|
|List all containers| docker ps -a

_Cheatsheet: Kubernetes commands_
| command | description |
|-------------|---------|
|kubectl get pod| Get information about all running pods|
|kubectl describe pod `<pod>`| Describe one pod|
|kubectl expose pod `<pod>` --port=444 --name=frontend| Expose the port of a pod (creates a new service)|
|kubectl port-forward `<pod>` 8080| Port forward the exposed pod port to your local machine|
|kubectl attach `<podname>` -i| Attach to the pod|
|kubectl exec `<pod>` -- command| Execute a command on the pod|
|kubectl label pods `<pod>` mylabel=awesome| Add a new label to a pod|
|kubectl run -i --tty busybox --image=busybox --restart=Never -- sh| Run a shell in a pod - very |useful for debugging|
|kubectl get deployments| Get information on current deployments|
|kubectl get rs| Get information about the replica sets|
|kubectl get pods --show-labels| get pods, and also show labels attached to those pods|
|kubectl rollout status deployment/helloworld-deployment| Get deployment status|
|kubectl set image deployment/helloworld-deployment k8s-demo=k8s-demo:2| Run k8s-demo with the image label version 2|
|kubectl edit deployment/helloworld-deployment| Edit the deployment object|
|kubectl rollout status deployment/helloworld-deployment| Get the status of the rollout|
|kubectl rollout history deployment/helloworld-deployment| Get the rollout history|
|kubectl rollout undo deployment/helloworld-deployment| Rollback to previous version|
|kubectl rollout undo deployment/helloworld-deployment --to-revision=n| Rollback to any version version|

_AWS Commands_

- aws ec2 create-volume --size 10 --region us-east-1 --availability-zone us-east-1a --volume-type gp2

_Certificates_
| description | command |
|-------------|---------|
| Creating a new key for a new user| openssl genrsa -out myuser.pem 2048|
| Creating a certificate request| openssl req -new -key myuser.pem -out myuser-csr.pem -subj "/CN=myuser/O=myteam/"|
| Creating a certificate| openssl x509 -req -in myuser-csr.pem -CA /path/to/kubernetes/ca.crt -CAkey /path/to/kubernetes/ca.key -CAcreateserial -out myuser.crt -days 10000|

_Abbreviations used_
|Resource type| Abbreviated alias|
|-------------|------------------|
|configmaps| cm|
|customresourcedefinition| crd|
|daemonsets| ds|
|deployments| deploy|
|horizontalpodautoscalers| hpa|
|ingresses| ing|
|limitranges| limits|
|namespaces| ns|
|nodes| no|
|persistentvolumeclaims| pvc|
|persistentvolumes| pv|
|pods| po|
|replicasets| rs|
|replicationcontrollers| rc|
|resourcequotas| quota|
|serviceaccounts| sa|
|services| svc|

## Section: 1. Introduction to Kubernetes

### 4. Kubernetes Introduction

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/KubernetesIntroduction.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/KubernetesIntroduction2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/KubernetesIntroduction3.png)

### 5. Containers Introduction

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ContainersIntroduction.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ContainersIntroduction2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ContainersIntroduction3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ContainersIntroduction4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ContainersIntroduction5.png)

### 6. Kubernetes Setup

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/KubernetesSetup.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/KubernetesSetup2.png)

### 7. Local Setup with minikube

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/LocalSetupWithMinikube.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/LocalSetupWithMinikube2.png)

### 8. Demo: Minikube

- We need to go to [minikube](https://github.com/kubernetes/minikube)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube2.png)

- I'm going to install Minikube using [Chocolatey](https://chocolatey.org/)

- The package will be [Minikube: Run Kubernetes locally](https://chocolatey.org/packages/Minikube)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube3.png)

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>choco install minikube
Chocolatey v0.10.11
Installing the following packages:
minikube
By installing you accept licenses for the packages.
Progress: Downloading kubernetes-cli 1.13.3... 100%
Progress: Downloading Minikube 0.34.1... 100%

kubernetes-cli v1.13.3 [Approved]
kubernetes-cli package files install completed. Performing other installation steps.
The package kubernetes-cli wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): Y

Extracting 64-bit C:\ProgramData\chocolatey\lib\kubernetes-cli\tools\kubernetes-client-windows-amd64.tar.gz to C:\ProgramData\chocolatey\lib\kubernetes-cli\tools...
C:\ProgramData\chocolatey\lib\kubernetes-cli\tools
Extracting 64-bit C:\ProgramData\chocolatey\lib\kubernetes-cli\tools\kubernetes-client-windows-amd64.tar to C:\ProgramData\chocolatey\lib\kubernetes-cli\tools...
C:\ProgramData\chocolatey\lib\kubernetes-cli\tools
 ShimGen has successfully created a shim for kubectl.exe
 The install of kubernetes-cli was successful.
  Software installed to 'C:\ProgramData\chocolatey\lib\kubernetes-cli\tools'

Minikube v0.34.1 [Approved]
minikube package files install completed. Performing other installation steps.
 ShimGen has successfully created a shim for minikube.exe
 The install of minikube was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

Chocolatey installed 2/2 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
```

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>minikube
Minikube is a CLI tool that provisions and manages single-node Kubernetes clusters optimized for development workflows.

Usage:
  minikube [command]

Available Commands:
  addons         Modify minikube's kubernetes addons
  cache          Add or delete an image from the local cache.
  completion     Outputs minikube shell completion for the given shell (bash or zsh)
  config         Modify minikube config
  dashboard      Access the kubernetes dashboard running within the minikube cluster
  delete         Deletes a local kubernetes cluster
  docker-env     Sets up docker env variables; similar to '$(docker-machine env)'
  help           Help about any command
  ip             Retrieves the IP address of the running cluster
  logs           Gets the logs of the running instance, used for debugging minikube, not user code
  mount          Mounts the specified directory into minikube
  profile        Profile sets the current minikube profile
  service        Gets the kubernetes URL(s) for the specified service in your local cluster
  ssh            Log into or run a command on a machine with SSH; similar to 'docker-machine ssh'
  ssh-key        Retrieve the ssh identity key path of the specified cluster
  start          Starts a local kubernetes cluster
  status         Gets the status of a local kubernetes cluster
  stop           Stops a running local kubernetes cluster
  tunnel         tunnel makes services of type LoadBalancer accessible on localhost
  update-check   Print current and latest version number
  update-context Verify the IP address of the running cluster in kubeconfig.
  version        Print the version of minikube

Flags:
      --alsologtostderr                  log to standard error as well as files
  -b, --bootstrapper string              The name of the cluster bootstrapper that will set up the kubernetes cluster. (default "kubeadm")
  -h, --help                             help for minikube
      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)
      --log_dir string                   If non-empty, write log files in this directory
      --logtostderr                      log to standard error instead of files
  -p, --profile string                   The name of the minikube VM being used.
                                                This can be modified to allow for multiple minikube instances to be run independently (default "minikube")
      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)
  -v, --v Level                          log level for V logs
      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging

Use "minikube [command] --help" for more information about a command.
```

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>minikube start
o   minikube v0.34.1 on windows (amd64)
>   Creating virtualbox VM (CPUs=2, Memory=2048MB, Disk=20000MB) ...
@   Downloading Minikube ISO ...
 184.30 MB / 184.30 MB [============================================] 100.00% 0s
!   Unable to start VM: create: precreate: VBoxManage not found. Make sure VirtualBox is installed and VBoxManage is in the path

*   Sorry that minikube crashed. If this was unexpected, we would love to hear from you:
-   https://github.com/kubernetes/minikube/issues/new
```

::: Warning
The previous error is happening because we have Hyper-V installed that is needed to have Docker installed in Windows
:::

- We need to follow the next steps:

1. Identify physical network adapters ( Ethernet and/or Wifi) using the `Get-NetAdapter` command from the `PowerShell command line`

```powershell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Citrix Virtual Adapter    Microsoft KM-TEST Loopback Adapter           23 Up           02-00-4C-4F-4F-50       1.2 Gbps
WiFi                      Intel(R) Dual Band Wireless-AC 8260          21 Up           E4-B3-18-1A-4B-4A      57.8 Mbps
Bluetooth Network Conn... Bluetooth Device (Personal Area Netw...      20 Disconnected E4-B3-18-1A-4B-4E         3 Mbps
vEthernet (DockerNAT)     Hyper-V Virtual Ethernet Adapter #2          52 Up           00-15-5D-F7-32-04        10 Gbps
vEthernet (Default Swi... Hyper-V Virtual Ethernet Adapter             32 Up           3A-15-9D-D2-EE-71        10 Gbps
Npcap Loopback Adapter    Npcap Loopback Adapter                       13 Up           02-00-4C-4F-4F-50       1.2 Gbps
Ethernet 2                TAP Adapter OAS NDIS 6.0                     11 Disconnected 00-FF-46-D0-98-F6       100 Mbps
Ethernet 3                Cisco AnyConnect Secure Mobility Cli...       5 Disabled     00-05-9A-3C-7A-00     862.4 Mbps
Ethernet                  Intel(R) Ethernet Connection I219-LM          3 Disconnected 84-7B-EB-38-FE-EB          0 bps
```

2. Create external-virtual-switch using the following command

`New-VMSwitch -Name MyMinikubeCluster -AllowManagement $True -NetAdapterName WiFi`

```powershell
PS C:\Windows\system32> New-VMSwitch -Name MyMinikubeCluster -AllowManagement $True -NetAdapterName WiFi

Name              SwitchType NetAdapterInterfaceDescription
----              ---------- ------------------------------
MyMinikubeCluster External   Intel(R) Dual Band Wireless-AC 8260
```

3. Execute the following command

`minikube start --vm-driver=hyperv --hyperv-virtual-switch=MyMinikubeCluster`

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>minikube start --vm-driver=hyperv --hyperv-virtual-switch=MyMinikubeCluster
o   minikube v0.34.1 on windows (amd64)
>   Creating hyperv VM (CPUs=2, Memory=2048MB, Disk=20000MB) ...
```

- If `BitWise SSH Server` server is running on Windows it must be stopped.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube5.png)

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>minikube start --vm-driver=hyperv --hyperv-virtual-switch=MyMinikubeCluster
o   minikube v0.34.1 on windows (amd64)
>   Creating hyperv VM (CPUs=2, Memory=2048MB, Disk=20000MB) ...
-   "minikube" IP address is 192.168.0.112
-   Configuring Docker as the container runtime ...
-   Preparing Kubernetes environment ...
@   Downloading kubelet v1.13.3
@   Downloading kubeadm v1.13.3
!   Failed to update cluster: downloading binaries: copy: wait: remote command exited without exit status or exit signal

*   Sorry that minikube crashed. If this was unexpected, we would love to hear from you:
-   https://github.com/kubernetes/minikube/issues/new

```

- It is retried

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>minikube start --vm-driver=hyperv --hyperv-virtual-switch=MyMinikubeCluster
o   minikube v0.34.1 on windows (amd64)
i   Tip: Use 'minikube start -p <name>' to create a new cluster, or 'minikube delete' to delete this one.
:   Re-using the currently running hyperv VM for "minikube" ...
:   Waiting for SSH access ...
-   "minikube" IP address is 192.168.1.145
-   Configuring Docker as the container runtime ...
-   Preparing Kubernetes environment ...
!   Failed to update cluster: downloading binaries: copy: wait: remote command exited without exit status or exit signal

*   Sorry that minikube crashed. If this was unexpected, we would love to hear from you:
-   https://github.com/kubernetes/minikube/issues/new
```

- The minikube VM cannot be deleted from `hyperv`

```bash
C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>minikube delete
-   Powering off "minikube" via SSH ...
x   Deleting "minikube" from hyperv ...
!   Failed to delete cluster: exit status 1

*   Sorry that minikube crashed. If this was unexpected, we would love to hear from you:
-   https://github.com/kubernetes/minikube/issues/new
```

- After rebooting the computer.

```bash
C:\Windows\system32>minikube start --vm-driver=hyperv --hyperv-virtual-switch=MyMinikubeCluster
o   minikube v0.34.1 on windows (amd64)
i   Tip: Use 'minikube start -p <name>' to create a new cluster, or 'minikube delete' to delete this one.
:   Restarting existing hyperv VM for "minikube" ...
:   Waiting for SSH access ...
-   "minikube" IP address is 192.168.0.119
-   Configuring Docker as the container runtime ...
-   Preparing Kubernetes environment ...
-   Pulling images required by Kubernetes v1.13.3 ...
:   Relaunching Kubernetes v1.13.3 using kubeadm ...
:   Waiting for kube-proxy to come back up ...
!   Error restarting cluster: restarting kube-proxy: waiting for kube-proxy to be up for configmap update: timed out waiting for the condition

*   Sorry that minikube crashed. If this was unexpected, we would love to hear from you:
-   https://github.com/kubernetes/minikube/issues/new
```

- I delete `Minikube` from `hyperv`

```bash
C:\Windows\system32>minikube delete
-   Powering off "minikube" via SSH ...
x   Deleting "minikube" from hyperv ...
-   The "minikube" cluster has been deleted.
```

- It is created again

```bash
C:\Windows\system32>minikube start --vm-driver=hyperv --hyperv-virtual-switch=MyMinikubeCluster
o   minikube v0.34.1 on windows (amd64)
>   Creating hyperv VM (CPUs=2, Memory=2048MB, Disk=20000MB) ...
-   "minikube" IP address is 192.168.0.120
-   Configuring Docker as the container runtime ...
-   Preparing Kubernetes environment ...
-   Pulling images required by Kubernetes v1.13.3 ...
-   Launching Kubernetes v1.13.3 using kubeadm ...
-   Configuring cluster permissions ...
-   Verifying component health .....
+   kubectl is now configured to use "minikube"
=   Done! Thank you for using minikube!
```

```bash
C:\Windows\system32>minikube status
host: Running
kubelet: Running
apiserver: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.108
```

- Check if `kubectl` is working properly

```bash
C:\Windows\system32>kubectl
kubectl controls the Kubernetes cluster manager.

Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/

Basic Commands (Beginner):
  create         Create a resource from a file or from stdin.
  expose         Take a replication controller, service, deployment or pod and expose it as a new Kubernetes Service
  run            Run a particular image on the cluster
  set            Set specific features on objects
  run-container  Run a particular image on the cluster. This command is deprecated, use "run" instead

Basic Commands (Intermediate):
  get            Display one or many resources
  explain        Documentation of resources
  edit           Edit a resource on the server
  delete         Delete resources by filenames, stdin, resources and names, or by resources and label selector

Deploy Commands:
  rollout        Manage the rollout of a resource
  rolling-update Perform a rolling update of the given ReplicationController
  scale          Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job
  autoscale      Auto-scale a Deployment, ReplicaSet, or ReplicationController

Cluster Management Commands:
  certificate    Modify certificate resources.
  cluster-info   Display cluster info
  top            Display Resource (CPU/Memory/Storage) usage.
  cordon         Mark node as unschedulable
  uncordon       Mark node as schedulable
  drain          Drain node in preparation for maintenance
  taint          Update the taints on one or more nodes

Troubleshooting and Debugging Commands:
  describe       Show details of a specific resource or group of resources
  logs           Print the logs for a container in a pod
  attach         Attach to a running container
  exec           Execute a command in a container
  port-forward   Forward one or more local ports to a pod
  proxy          Run a proxy to the Kubernetes API server
  cp             Copy files and directories to and from containers.
  auth           Inspect authorization

Advanced Commands:
  apply          Apply a configuration to a resource by filename or stdin
  patch          Update field(s) of a resource using strategic merge patch
  replace        Replace a resource by filename or stdin
  convert        Convert config files between different API versions

Settings Commands:
  label          Update the labels on a resource
  annotate       Update the annotations on a resource
  completion     Output shell completion code for the specified shell (bash or zsh)

Other Commands:
  api-versions   Print the supported API versions on the server, in the form of "group/version"
  config         Modify kubeconfig files
  help           Help about any command
  plugin         Runs a command-line plugin
  version        Print the client and server version information

Usage:
  kubectl [flags] [options]

Use "kubectl <command> --help" for more information about a given command.
Use "kubectl options" for a list of global command-line options (applies to all commands).
```

- Run the following command to see if it's working properly

```bash
C:\Windows\system32>kubectl run hello-minikube --image=grc.io/google_containers/echoserver:1.4 --port=8080
deployment.apps "hello-minikube" created
```

- Expose the image now

```bash
C:\Windows\system32>kubectl expose deployment hello-minikube --type=NodePort
service "hello-minikube" exposed
```

- Service it with `minikube`

```bash
C:\Windows\system32>minikube service hello-minikube --url
http://192.168.0.120:31247
```

- It is not working

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube6.png)

- It should be something like this:

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube7.png)

```bash
C:\Windows\system32>minikube status
host: Running
kubelet: Running
apiserver: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.108

C:\Windows\system32>kubectl run hello-minikube --image=grc.io/google_containers/echoserver:1.4 --port=8080
Error from server (AlreadyExists): deployments.extensions "hello-minikube" already exists

C:\Windows\system32>kubectl expose deployment hello-minikube --type=NodePort
Error from server (AlreadyExists): services "hello-minikube" already exists

C:\Windows\system32>minikube service hello-minikube --url
http://192.168.0.108:31247

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS             RESTARTS   AGE
hello-minikube-6d4b4cd58f-4ntdb   0/1       ImagePullBackOff   0          9h
```

```bash
C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS             RESTARTS   AGE
hello-minikube-6d4b4cd58f-4ntdb   0/1       ImagePullBackOff   0          9h

C:\Windows\system32>kubectl delete pod hello-minikube-6d4b4cd58f-4ntdb
pod "hello-minikube-6d4b4cd58f-4ntdb" deleted

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS             RESTARTS   AGE
hello-minikube-6d4b4cd58f-tjpfw   0/1       ImagePullBackOff   0          3s

C:\Windows\system32>kubectl get services
NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
hello-minikube   NodePort    10.104.203.11   <none>        8080:31247/TCP   9h
kubernetes       ClusterIP   10.96.0.1       <none>        443/TCP          11h

C:\Windows\system32>kubectl delete service hello-minikube
service "hello-minikube" deleted

C:\Windows\system32>kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   11h

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS             RESTARTS   AGE
hello-minikube-6d4b4cd58f-tjpfw   0/1       ImagePullBackOff   0          1m

C:\Windows\system32>kubectl delete pod hello-minikube-6d4b4cd58f-4ntdb
Error from server (NotFound): pods "hello-minikube-6d4b4cd58f-4ntdb" not found

C:\Windows\system32>kubectl delete pod hello-minikube-6d4b4cd58f-tjpfw
pod "hello-minikube-6d4b4cd58f-tjpfw" deleted

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS         RESTARTS   AGE
hello-minikube-6d4b4cd58f-b99dq   0/1       ErrImagePull   0          3s
hello-minikube-6d4b4cd58f-tjpfw   0/1       Terminating    0          1m

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS             RESTARTS   AGE
hello-minikube-6d4b4cd58f-b99dq   0/1       ImagePullBackOff   0          8s

C:\Windows\system32>kubectl get deployments
NAME             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
hello-minikube   1         1         1            0           9h

C:\Windows\system32>kubectl delete deployment hello-minikube
deployment.extensions "hello-minikube" deleted

C:\Windows\system32>kubectl get deployments
No resources found.

C:\Windows\system32>kubectl get pods
No resources found.
```

- The problem is related to the image

```bash
C:\Windows\system32>kubectl run hello-minikube --image=grc.io/google_containers/echoserver:1.4 --port=8080
deployment.apps "hello-minikube" created

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS         RESTARTS   AGE
hello-minikube-6d4b4cd58f-2776d   0/1       ErrImagePull   0          4s
```

- Trying with the example copied from [kubectl for Docker Users](https://kubernetes.io/docs/reference/kubectl/docker-cli-to-kubectl/)

```bash
C:\Windows\system32>kubectl run hello-minikube --image=gcr.io/hello-minikube-zero-install/hello-node --port=8080
deployment.apps "hello-minikube" created
C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS              RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   0/1       ContainerCreating   0          7s
C:\Windows\system32>kubectl get deployments
NAME             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
hello-minikube   1         1         1            1           2m

C:\Windows\system32>kubectl get pods
NAME                              READY     STATUS    RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running   0          2m

C:\Windows\system32>kubectl expose deployment hello-minikube --type=NodePort
service "hello-minikube" exposed

C:\Windows\system32>minikube service hello-minikube --url
http://192.168.0.108:32101
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMinikube8.png)

- If we want to stop `minikube` we have to use `minikube stop`.

```bash
C:\Windows\system32>minikube stop
:   Stopping "minikube" in hyperv ...
:   Stopping "minikube" in hyperv ...
```

- If it doesn't work we can use:

```bash
$ minikube ssh "sudo poweroff"
```

### 9. Installing Kubernetes using the Docker Client

- We can install `Windows Docker Client` from [Install Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InstallingKubernetesUsingTheDockerClient.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InstallingKubernetesUsingTheDockerClient2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InstallingKubernetesUsingTheDockerClient3.png)

```bash
C:\Windows\system32>kubectl get nodes
NAME       STATUS    ROLES     AGE       VERSION
minikube   Ready     master    12h       v1.13.3
```

```bash
C:\Windows\system32>kubectl config get-contexts
CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
*         minikube   minikube   minikube
```

### 10. Minikube vs Docker Client vs Kops vs Kubeadm

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/MinikubeVsDockerClientVsKopsVsKubeadm.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/MinikubeVsDockerClientVsKopsVsKubeadm2.png)

### 11. Introduction to Kops

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKops.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKops2.png)

### 12. Demo: Preparing kops install

- It can be installed only in `Linux` and `Mac`. We need have `vagrant` previously installed.

- Exeute the `vagrant init ubuntu/xenial64` command

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPreparingKopsInstall.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPreparingKopsInstall2.png)

- Execute `vagrant ssh-config` for Linux that needs an `IdentifyFile`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPreparingKopsInstall3.png)

- On `Mac` we can execute `vagrant ssh`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPreparingKopsInstall4.png)

::: warning
Have a look at Section: 8. Installing Kubernetes using kubeadm. We are going to use the Digital Ocean server from now on.
:::

### 13. Demo: Preparing AWS for kops install

What is kops?
We like to think of it as kubectl for clusters.

[kops](https://github.com/kubernetes/kops) helps you create, destroy, upgrade and maintain production-grade, highly available, Kubernetes clusters from the command line. AWS (Amazon Web Services) is currently officially supported, with GCE in beta support , and VMware vSphere in alpha, and other platforms planned.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPreparingAwsForKopsInstall.png)

- `Installing kops` is explained in the [9. Install kops](http://localhost:8080/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_9-install-kops) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

- Ensure that `kops` is working properly.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops
kops is Kubernetes ops.

kops is the easiest way to get a production grade Kubernetes cluster up and running. We like to think of it as kubectl for clusters.

kops helps you create, destroy, upgrade and maintain production-grade, highly available, Kubernetes clusters from the command line.  AWS (Amazon Web Services) is currently officially supported, with GCE and VMware vSphere in alpha support.

Usage:
  kops [command]

Available Commands:
  completion     Output shell completion code for the given shell (bash or zsh).
  create         Create a resource by command line, filename or stdin.
  delete         Delete clusters,instancegroups, or secrets.
  describe       Describe a resource.
  edit           Edit clusters and other resources.
  export         Export configuration.
  get            Get one or many resources.
  help           Help about any command
  import         Import a cluster.
  replace        Replace cluster resources.
  rolling-update Rolling update a cluster.
  set            Set fields on clusters and other resources.
  toolbox        Misc infrequently used commands.
  update         Update a cluster.
  upgrade        Upgrade a kubernetes cluster.
  validate       Validate a kops cluster.
  version        Print the kops version information.

Flags:
      --alsologtostderr                  log to standard error as well as files
      --config string                    yaml config file (default is $HOME/.kops.yaml)
  -h, --help                             help for kops
      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)
      --log_dir string                   If non-empty, write log files in this directory
      --logtostderr                      log to standard error instead of files (default false)
      --name string                      Name of cluster. Overrides KOPS_CLUSTER_NAME environment variable
      --state string                     Location of state storage (kops 'config' file). Overrides KOPS_STATE_STORE environment variable
      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)
  -v, --v Level                          log level for V logs
      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging

Use "kops [command] --help" for more information about a command.
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- `Installing awscli` is explained in the [4. Install aws utility](https://documentation.peelmicro.info/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_4-install-aws-utility) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

- Ensure `awscli` is working properly:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws --version
aws-cli/1.16.116 Python/3.6.7 Linux/4.15.0-46-generic botocore/1.12.106
```

- `Creating and IAM user and configuring awscli` is explained in the [5. Configure aws with proper credentials](https://documentation.peelmicro.info/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_5-configure-aws-with-proper-credentials) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

- Ensure the awscli is configured correctly

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls -ahl ~/.aws/
total 16K
drwxr-xr-x  2 root root 4.0K Mar  4 19:46 .
drwx------ 17 root root 4.0K Mar 14 06:06 ..
-rw-r--r--  1 root root   39 Mar  4 19:46 config
-rw-r--r--  1 root root  112 Mar  4 19:45 credentials
```

- `Creating the S3 bucket` is explained in the [15. How to use kops and create Kubernetes cluster](https://documentation.peelmicro.info/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_15-how-to-use-kops-and-create-kubernetes-cluster) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

- `Creating the Route53 DNS` is explained in the [16. How to use kops and create Kubernetes cluster (Continue) - Why hosted zone](https://documentation.peelmicro.info/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_16-how-to-use-kops-and-create-kubernetes-cluster-continue-why-hosted-zone) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

### 14. Demo: DNS Troubleshooting (Optional)

- Install `host` if it is not already installed

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt install bind9-host
Reading package lists... Done
Building dependency tree
Reading state information... Done
bind9-host is already the newest version (1:9.11.3+dfsg-1ubuntu1.5).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 16 not upgraded.
```

- Execute the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# host -t NS kops.peelmicro.com
kops.peelmicro.com name server ns-1540.awsdns-00.co.uk.
kops.peelmicro.com name server ns-228.awsdns-28.com.
kops.peelmicro.com name server ns-795.awsdns-35.net.
kops.peelmicro.com name server ns-1072.awsdns-06.org.
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# whois peelmicro.com

Command 'whois' not found, but can be installed with:

apt install whois

root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt install whois
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following NEW packages will be installed:
  whois
0 upgraded, 1 newly installed, 0 to remove and 16 not upgraded.
Need to get 43.7 kB of archives.
After this operation, 262 kB of additional disk space will be used.
Get:1 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 whois amd64 5.3.0 [43.7 kB]
Fetched 43.7 kB in 1s (83.3 kB/s)
Selecting previously unselected package whois.
(Reading database ... 97507 files and directories currently installed.)
Preparing to unpack .../archives/whois_5.3.0_amd64.deb ...
Unpacking whois (5.3.0) ...
Setting up whois (5.3.0) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
root@ubuntu-s-1vcpu-2gb-lon1-01:~# whois peelmicro.com
   Domain Name: PEELMICRO.COM
   Registry Domain ID: 2337209531_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.acens.net
   Registrar URL: http://https://www.acens.com
   Updated Date: 2019-03-06T19:56:04Z
   Creation Date: 2018-11-26T21:27:15Z
   Registry Expiry Date: 2019-11-26T21:27:15Z
   Registrar: Acens Technologies, S.L.U.
   Registrar IANA ID: 140
   Registrar Abuse Contact Email: abuse@acens.net
   Registrar Abuse Contact Phone: 911418583
   Domain Status: ok https://icann.org/epp#ok
   Name Server: NS-1072.AWSDNS-06.ORG
   Name Server: NS-1540.AWSDNS-00.CO.UK
   Name Server: NS-228.AWSDNS-28.COM
   Name Server: NS-795.AWSDNS-35.NET
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of whois database: 2019-03-14T17:48:51Z <<<

For more information on Whois status codes, please visit https://icann.org/epp

NOTICE: The expiration date displayed in this record is the date the
registrar's sponsorship of the domain name registration in the registry is
currently set to expire. This date does not necessarily reflect the expiration
date of the domain name registrant's agreement with the sponsoring
registrar.  Users may consult the sponsoring registrar's Whois database to
view the registrar's reported date of expiration for this registration.

TERMS OF USE: You are not authorized to access or query our Whois
database through the use of electronic processes that are high-volume and
automated except as reasonably necessary to register domain names or
modify existing registrations; the Data in VeriSign Global Registry
Services' ("VeriSign") Whois database is provided by VeriSign for
information purposes only, and to assist persons in obtaining information
about or related to a domain name registration record. VeriSign does not
guarantee its accuracy. By submitting a Whois query, you agree to abide
by the following terms of use: You agree that you may use this Data only
for lawful purposes and that under no circumstances will you use this Data
to: (1) allow, enable, or otherwise support the transmission of mass
unsolicited, commercial advertising or solicitations via e-mail, telephone,
or facsimile; or (2) enable high volume, automated, electronic processes
that apply to VeriSign (or its computer systems). The compilation,
repackaging, dissemination or other use of this Data is expressly
prohibited without the prior written consent of VeriSign. You agree not to
use electronic processes that are automated and high-volume to access or
query the Whois database except as reasonably necessary to register
domain names or modify existing registrations. VeriSign reserves the right
to restrict your access to the Whois database in its sole discretion to ensure
operational stability.  VeriSign may restrict or terminate your access to the
Whois database for failure to abide by these terms of use. VeriSign
reserves the right to modify these terms at any time.

The Registry database contains ONLY .COM, .NET, .EDU domains and
Registrars.

Domain Name: peelmicro.com
Registrar WHOIS Server: whois.acens.net
Registrar URL: http://www.acens.com/
Updated Date: 2019-03-06T20:38:28Z
Creation Date: 2018-11-26T22:27:15Z
Registrar Registration Expiration Date: 2019-11-26T22:27:15Z
Registrar: acens Technologies, S.L.U.
Registrar IANA ID: 140
Registrar Abuse Contact Email: abuse@acens.net
Registrar Abuse Contact Phone:+34.911418583
Domain Status: ok http://www.icann.org/epp#ok
Registrant Organization: Juan Pablo Perez Martin de la Fuente
Registrant State/Province: Madrid
Registrant Country: ES
Name Server: ns-228.awsdns-28.com
Name Server: ns-795.awsdns-35.net
Name Server: ns-1540.awsdns-00.co.uk
Name Server: ns-1072.awsdns-06.org
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
>>> Last update of WHOIS database:2019-03-06T20:38:28Z<<<
For more information on Whois status codes, please visit
https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en

acens's WHOIS database is provided by acens Technologies for information
purposes only, proving information about or related to a domain name
registration record.
Acens makes this information available "as is," and does not guarantee
its accuracy.
By submitting a WHOIS query, you agree that you will use this data only for
lawful purposes and that, under no circumstances will you use this data to:
(1) allow, enable, or otherwise support the transmission of mass unsolicited,
commercial advertising or solicitations via direct mail, electronic mail, or
by telephone; or (2) enable high volume, automated, electronic processes that
apply to acens (or its systems).  The compilation, repackaging,
dissemination or other use of this data is expressly prohibited without the
prior written consent of acens.
acens  reserves the right to modify these terms at any time. By
submitting this query, you agree to abide by these terms.
NOTE: THE WHOIS DATABASE IS A CONTACT DATABASE ONLY. LACK OF A DOMAIN RECORD

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

### 15. Demo: Cluster setup on AWS using kops

- `Installing kubectl` is explained in the [7. Install kubectl](https://documentation.peelmicro.info/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_7-install-kubectl) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

- Ensure `kubectl` is working properly:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl
kubectl controls the Kubernetes cluster manager.

Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/

Basic Commands (Beginner):
  create         Create a resource from a file or from stdin.
  expose         Take a replication controller, service, deployment or pod and expose it as a new Kubernetes Service
  run            Run a particular image on the cluster
  set            Set specific features on objects

Basic Commands (Intermediate):
  explain        Documentation of resources
  get            Display one or many resources
  edit           Edit a resource on the server
  delete         Delete resources by filenames, stdin, resources and names, or by resources and label selector

Deploy Commands:
  rollout        Manage the rollout of a resource
  scale          Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job
  autoscale      Auto-scale a Deployment, ReplicaSet, or ReplicationController

Cluster Management Commands:
  certificate    Modify certificate resources.
  cluster-info   Display cluster info
  top            Display Resource (CPU/Memory/Storage) usage.
  cordon         Mark node as unschedulable
  uncordon       Mark node as schedulable
  drain          Drain node in preparation for maintenance
  taint          Update the taints on one or more nodes

Troubleshooting and Debugging Commands:
  describe       Show details of a specific resource or group of resources
  logs           Print the logs for a container in a pod
  attach         Attach to a running container
  exec           Execute a command in a container
  port-forward   Forward one or more local ports to a pod
  proxy          Run a proxy to the Kubernetes API server
  cp             Copy files and directories to and from containers.
  auth           Inspect authorization

Advanced Commands:
  diff           Diff live version against would-be applied version
  apply          Apply a configuration to a resource by filename or stdin
  patch          Update field(s) of a resource using strategic merge patch
  replace        Replace a resource by filename or stdin
  wait           Experimental: Wait for a specific condition on one or many resources.
  convert        Convert config files between different API versions

Settings Commands:
  label          Update the labels on a resource
  annotate       Update the annotations on a resource
  completion     Output shell completion code for the specified shell (bash or zsh)

Other Commands:
  api-resources  Print the supported API resources on the server
  api-versions   Print the supported API versions on the server, in the form of "group/version"
  config         Modify kubeconfig files
  plugin         Provides utilities for interacting with plugins.
  version        Print the client and server version information

Usage:
  kubectl [flags] [options]

Use "kubectl <command> --help" for more information about a given command.
Use "kubectl options" for a list of global command-line options (applies to all commands).
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- `Generating the ssh keys` is explained in the [16. How to use kops and create Kubernetes cluster (Continue) - Why hosted zone](https://documentation.peelmicro.info/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform.html#_16-how-to-use-kops-and-create-kubernetes-cluster-continue-why-hosted-zone) chapter of the [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course.

- Execute the following command to create the `kubernetes.peelmicro.com` cluster.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kops.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kops.peelmicro.com
I0314 19:34:10.887881   16716 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0314 19:34:11.015019   16716 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
Previewing changes that will be made:


SSH public key must be specified when running with AWS (create with `kops create secret --name kubernetes.peelmicro.com sshpublickey admin -i ~/.ssh/id_rsa.pub`)
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kops.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kops.peelmicro.com --ssh-public-key=~/.ssh/udemy_devopsinuse.pub
I0314 19:34:38.567654   16726 create_cluster.go:1351] Using SSH public key: /root/.ssh/udemy_devopsinuse.pub

cluster "kubernetes.peelmicro.com" already exists; use 'kops update cluster' to apply changes
```

- We can edit the cluster with the command:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops edit cluster kubernetes.peelmicro.com --state=s3://kops.peelmicro.com
Edit cancelled, no changes made.
```

```yaml
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.
#
apiVersion: kops/v1alpha2
kind: Cluster
metadata:
  creationTimestamp: 2019-03-14T19:34:11Z
  name: kubernetes.peelmicro.com
spec:
  api:
    dns: {}
  authorization:
    rbac: {}
  channel: stable
  cloudProvider: aws
  configBase: s3://kops.peelmicro.com/kubernetes.peelmicro.com
  dnsZone: kops.peelmicro.com
  etcdClusters:
    - etcdMembers:
        - instanceGroup: master-eu-central-1a
          name: a
      name: main
    - etcdMembers:
        - instanceGroup: master-eu-central-1a
          name: a
      name: events
  iam:
    allowContainerRegistry: true
    legacy: false
  kubernetesApiAccess:
    - 0.0.0.0/0
  kubernetesVersion: 1.10.12
  masterInternalName: api.internal.kubernetes.peelmicro.com
  masterPublicName: api.kubernetes.peelmicro.com
  networkCIDR: 172.20.0.0/16
  networking:
    kubenet: {}
  nonMasqueradeCIDR: 100.64.0.0/10
  sshAccess:
    - 0.0.0.0/0
  subnets:
    - cidr: 172.20.32.0/19
      name: eu-central-1a
      type: Public
      zone: eu-central-1a
  topology:
    dns:
      type: Public
    masters: public
    nodes: public
```

- We can apply the changes bu running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --state=s3://kops.peelmicro.com --yes

SSH public key must be specified when running with AWS (create with `kops create secret --name kubernetes.peelmicro.com sshpublickey admin -i ~/.ssh/id_rsa.pub`)
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --state=s3://kops.peelmicro.com --yes --ssh-public-key=~/.ssh/udemy_devopsinuse.pub
--ssh-public-key on update is deprecated - please use `kops create secret --name kubernetes.peelmicro.com sshpublickey admin -i ~/.ssh/id_rsa.pub` instead
I0314 19:42:48.235944   16850 update_cluster.go:194] Using SSH public key: /root/.ssh/udemy_devopsinuse.pub
I0314 19:42:49.919270   16850 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0314 19:42:50.842222   16850 vfs_castore.go:735] Issuing new certificate: "ca"
I0314 19:42:51.046608   16850 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0314 19:42:51.278184   16850 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0314 19:42:53.400536   16850 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0314 19:42:53.478418   16850 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0314 19:42:53.846653   16850 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0314 19:42:54.037072   16850 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0314 19:42:54.052120   16850 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0314 19:42:54.130151   16850 vfs_castore.go:735] Issuing new certificate: "kops"
I0314 19:42:54.168203   16850 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0314 19:42:54.173589   16850 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0314 19:42:54.215336   16850 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0314 19:42:54.453859   16850 vfs_castore.go:735] Issuing new certificate: "master"
I0314 19:42:54.763595   16850 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0314 19:42:55.041665   16850 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0314 19:42:55.049094   16850 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0314 19:43:05.438629   16850 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0314 19:43:06.005742   16850 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0314 19:43:06.005985   16850 dns.go:153] Pre-creating DNS records
W0314 19:43:06.544176   16850 apply_cluster.go:871] unable to pre-create DNS records - cluster startup may be slower: Error pre-creating DNS records: InvalidChangeBatch: [RRSet with DNS name etcd-a.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name etcd-events-a.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name api.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name api.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com.]
        status code: 400, request id: 637d2987-4691-11e9-b83a-f7a972cb8e1e
I0314 19:43:06.702979   16850 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get node
Unable to connect to the server: dial tcp: lookup api.kubernetes.peelmicro.com on 127.0.0.53:53: server misbehaving
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get node
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster kubernetes.peelmicro.com --state=s3://kops.peelmicro.com
Validating cluster kubernetes.peelmicro.com


unexpected error during validation: unable to resolve Kubernetes cluster API URL dns: lookup api.kubernetes.peelmicro.com on 127.0.0.53:53: server misbehaving
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kubernetes.peelmicro.com --state=s3://kops.peelmicro.com
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190314194254                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190314194254
autoscaling-config      nodes.kubernetes.peelmicro.com-20190314194254                                           nodes.kubernetes.peelmicro.com-20190314194254
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-0b3961207ed2a4293
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-05be1b77d432406a6
instance                nodes.kubernetes.peelmicro.com                                                          i-0779d823131099d08
instance                nodes.kubernetes.peelmicro.com                                                          i-0f7cc4411d2cb68df
internet-gateway        kubernetes.peelmicro.com                                                                igw-08d2b2b3f9d3ceced
keypair                 kubernetes.kubernetes.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26     kubernetes.kubernetes.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26
route-table             kubernetes.peelmicro.com                                                                rtb-097d41b0935bfc9bc
security-group          masters.kubernetes.peelmicro.com                                                        sg-0e075cff6f3e32f9a
security-group          nodes.kubernetes.peelmicro.com                                                          sg-0ef870833df6cb1d1
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-078a1178da1bf3bf9
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0ca4d5f45f3bd2bb7
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-0f8e14474af8c38be
vpc                     kubernetes.peelmicro.com                                                                vpc-02860679234152f4d

Must specify --yes to delete cluster
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kubernetes.peelmicro.com --state=s3://kops.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190314194254                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190314194254
autoscaling-config      nodes.kubernetes.peelmicro.com-20190314194254                                           nodes.kubernetes.peelmicro.com-20190314194254
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-0b3961207ed2a4293
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-05be1b77d432406a6
instance                nodes.kubernetes.peelmicro.com                                                          i-0779d823131099d08
instance                nodes.kubernetes.peelmicro.com                                                          i-0f7cc4411d2cb68df
internet-gateway        kubernetes.peelmicro.com                                                                igw-08d2b2b3f9d3ceced
keypair                 kubernetes.kubernetes.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26     kubernetes.kubernetes.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26
route-table             kubernetes.peelmicro.com                                                                rtb-097d41b0935bfc9bc
security-group          masters.kubernetes.peelmicro.com                                                        sg-0e075cff6f3e32f9a
security-group          nodes.kubernetes.peelmicro.com                                                          sg-0ef870833df6cb1d1
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-078a1178da1bf3bf9
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0ca4d5f45f3bd2bb7
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-0f8e14474af8c38be
vpc                     kubernetes.peelmicro.com                                                                vpc-02860679234152f4d

autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
keypair:kubernetes.kubernetes.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26     ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
instance:i-05be1b77d432406a6    ok
instance:i-0f7cc4411d2cb68df    ok
instance:i-0779d823131099d08    ok
internet-gateway:igw-08d2b2b3f9d3ceced  still has dependencies, will retry
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-role:masters.kubernetes.peelmicro.com       ok
iam-role:nodes.kubernetes.peelmicro.com ok
autoscaling-config:nodes.kubernetes.peelmicro.com-20190314194254        ok
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190314194254 ok
subnet:subnet-078a1178da1bf3bf9 still has dependencies, will retry
volume:vol-0f8e14474af8c38be    still has dependencies, will retry
volume:vol-0ca4d5f45f3bd2bb7    still has dependencies, will retry
security-group:sg-0ef870833df6cb1d1     still has dependencies, will retry
security-group:sg-0e075cff6f3e32f9a     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        subnet:subnet-078a1178da1bf3bf9
        volume:vol-0ca4d5f45f3bd2bb7
        security-group:sg-0e075cff6f3e32f9a
        security-group:sg-0ef870833df6cb1d1
        internet-gateway:igw-08d2b2b3f9d3ceced
        volume:vol-0f8e14474af8c38be
        route-table:rtb-097d41b0935bfc9bc
        vpc:vpc-02860679234152f4d
        dhcp-options:dopt-0b3961207ed2a4293
volume:vol-0f8e14474af8c38be    still has dependencies, will retry
volume:vol-0ca4d5f45f3bd2bb7    still has dependencies, will retry
subnet:subnet-078a1178da1bf3bf9 still has dependencies, will retry
internet-gateway:igw-08d2b2b3f9d3ceced  still has dependencies, will retry
security-group:sg-0e075cff6f3e32f9a     still has dependencies, will retry
security-group:sg-0ef870833df6cb1d1     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-0b3961207ed2a4293
        volume:vol-0ca4d5f45f3bd2bb7
        subnet:subnet-078a1178da1bf3bf9
        security-group:sg-0e075cff6f3e32f9a
        vpc:vpc-02860679234152f4d
        security-group:sg-0ef870833df6cb1d1
        internet-gateway:igw-08d2b2b3f9d3ceced
        volume:vol-0f8e14474af8c38be
        route-table:rtb-097d41b0935bfc9bc
volume:vol-0f8e14474af8c38be    still has dependencies, will retry
volume:vol-0ca4d5f45f3bd2bb7    still has dependencies, will retry
subnet:subnet-078a1178da1bf3bf9 still has dependencies, will retry
internet-gateway:igw-08d2b2b3f9d3ceced  still has dependencies, will retry
security-group:sg-0e075cff6f3e32f9a     still has dependencies, will retry
security-group:sg-0ef870833df6cb1d1     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-0b3961207ed2a4293
        subnet:subnet-078a1178da1bf3bf9
        volume:vol-0ca4d5f45f3bd2bb7
        security-group:sg-0e075cff6f3e32f9a
        internet-gateway:igw-08d2b2b3f9d3ceced
        volume:vol-0f8e14474af8c38be
        route-table:rtb-097d41b0935bfc9bc
        vpc:vpc-02860679234152f4d
        security-group:sg-0ef870833df6cb1d1
subnet:subnet-078a1178da1bf3bf9 still has dependencies, will retry
volume:vol-0ca4d5f45f3bd2bb7    still has dependencies, will retry
internet-gateway:igw-08d2b2b3f9d3ceced  still has dependencies, will retry
volume:vol-0f8e14474af8c38be    still has dependencies, will retry
security-group:sg-0ef870833df6cb1d1     still has dependencies, will retry
security-group:sg-0e075cff6f3e32f9a     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        volume:vol-0ca4d5f45f3bd2bb7
        subnet:subnet-078a1178da1bf3bf9
        security-group:sg-0e075cff6f3e32f9a
        route-table:rtb-097d41b0935bfc9bc
        vpc:vpc-02860679234152f4d
        security-group:sg-0ef870833df6cb1d1
        internet-gateway:igw-08d2b2b3f9d3ceced
        volume:vol-0f8e14474af8c38be
        dhcp-options:dopt-0b3961207ed2a4293
subnet:subnet-078a1178da1bf3bf9 still has dependencies, will retry
volume:vol-0f8e14474af8c38be    still has dependencies, will retry
volume:vol-0ca4d5f45f3bd2bb7    still has dependencies, will retry
internet-gateway:igw-08d2b2b3f9d3ceced  ok
security-group:sg-0ef870833df6cb1d1     still has dependencies, will retry
security-group:sg-0e075cff6f3e32f9a     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-0e075cff6f3e32f9a
        vpc:vpc-02860679234152f4d
        security-group:sg-0ef870833df6cb1d1
        volume:vol-0f8e14474af8c38be
        route-table:rtb-097d41b0935bfc9bc
        dhcp-options:dopt-0b3961207ed2a4293
        volume:vol-0ca4d5f45f3bd2bb7
        subnet:subnet-078a1178da1bf3bf9
volume:vol-0f8e14474af8c38be    ok
volume:vol-0ca4d5f45f3bd2bb7    ok
subnet:subnet-078a1178da1bf3bf9 ok
security-group:sg-0ef870833df6cb1d1     ok
security-group:sg-0e075cff6f3e32f9a     ok
route-table:rtb-097d41b0935bfc9bc       ok
vpc:vpc-02860679234152f4d       ok
dhcp-options:dopt-0b3961207ed2a4293     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops2.png)

- create the standard `id_rsa` key pair.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keygen -f .ssh/id_rsa
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in .ssh/id_rsa.
Your public key has been saved in .ssh/id_rsa.pub.
The key fingerprint is:
SHA256:4XAQxQGcmEUodyCcUrCxcuG1PTUuTN3Eiqmk3B5Dbpc root@ubuntu-s-1vcpu-2gb-lon1-01
The key's randomart image is:
+---[RSA 2048]----+
|o++.oOBB==.      |
|.=++==++o.o      |
|+.oo..*o+.       |
|..  o o*..       |
| . * . .S        |
|  o B E          |
|   o +           |
|    .            |
|                 |
+----[SHA256]-----+
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Create the missing DNS records remove by mistake:

| Name                                      | Type | Value         |
| ----------------------------------------- | ---- | ------------- |
| api.kops.peelmicro.com                    | A    | 3.120.179.89  |
| api.internal.kops.peelmicro.com           | A    | 172.20.45.184 |
| etcd-a.internal.kops.peelmicro.com        | A    | 172.20.45.184 |
| etcd-events-a.internal.kops.peelmicro.com | A    | 172.20.45.184 |

- With the following command it shows what it is going to create but it doesn't create anything yet.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kops.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kops.peelmicro.com
I0315 05:59:35.451940   31325 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0315 05:59:35.561569   31325 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0315 05:59:35.966584   31325 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0315 05:59:37.701485   31325 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0315 05:59:38.118814   31325 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0315 05:59:38.312099   31325 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0315 05:59:38.470466   31325 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0315 05:59:38.509213   31325 executor.go:103] Tasks: 73 done / 73 total; 0 can run
Will create resources:
  AutoscalingGroup/master-eu-central-1a.masters.kubernetes.peelmicro.com
        MinSize                 1
        MaxSize                 1
        Subnets                 [name:eu-central-1a.kubernetes.peelmicro.com]
        Tags                    {k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: master-eu-central-1a, k8s.io/role/master: 1, Name: master-eu-central-1a.masters.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:master-eu-central-1a.masters.kubernetes.peelmicro.com

  AutoscalingGroup/nodes.kubernetes.peelmicro.com
        MinSize                 2
        MaxSize                 2
        Subnets                 [name:eu-central-1a.kubernetes.peelmicro.com]
        Tags                    {k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: nodes, k8s.io/role/node: 1, Name: nodes.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:nodes.kubernetes.peelmicro.com

  DHCPOptions/kubernetes.peelmicro.com
        DomainName              eu-central-1.compute.internal
        DomainNameServers       AmazonProvidedDNS
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  EBSVolume/a.etcd-events.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/events: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-events.kubernetes.peelmicro.com}

  EBSVolume/a.etcd-main.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {k8s.io/etcd/main: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-main.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

  IAMInstanceProfile/masters.kubernetes.peelmicro.com
        Shared                  false

  IAMInstanceProfile/nodes.kubernetes.peelmicro.com
        Shared                  false

  IAMInstanceProfileRole/masters.kubernetes.peelmicro.com
        InstanceProfile         name:masters.kubernetes.peelmicro.com id:masters.kubernetes.peelmicro.com
        Role                    name:masters.kubernetes.peelmicro.com

  IAMInstanceProfileRole/nodes.kubernetes.peelmicro.com
        InstanceProfile         name:nodes.kubernetes.peelmicro.com id:nodes.kubernetes.peelmicro.com
        Role                    name:nodes.kubernetes.peelmicro.com

  IAMRole/masters.kubernetes.peelmicro.com
        ExportWithID            masters

  IAMRole/nodes.kubernetes.peelmicro.com
        ExportWithID            nodes

  IAMRolePolicy/masters.kubernetes.peelmicro.com
        Role                    name:masters.kubernetes.peelmicro.com

  IAMRolePolicy/nodes.kubernetes.peelmicro.com
        Role                    name:nodes.kubernetes.peelmicro.com

  InternetGateway/kubernetes.peelmicro.com
        VPC                     name:kubernetes.peelmicro.com
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  Keypair/apiserver-aggregator
        Signer                  name:apiserver-aggregator-ca id:cn=apiserver-aggregator-ca
        Subject                 cn=aggregator
        Type                    client
        Format                  v1alpha2

  Keypair/apiserver-aggregator-ca
        Subject                 cn=apiserver-aggregator-ca
        Type                    ca
        Format                  v1alpha2

  Keypair/apiserver-proxy-client
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=apiserver-proxy-client
        Type                    client
        Format                  v1alpha2

  Keypair/ca
        Subject                 cn=kubernetes
        Type                    ca
        Format                  v1alpha2

  Keypair/kops
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:masters,cn=kops
        Type                    client
        Format                  v1alpha2

  Keypair/kube-controller-manager
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-controller-manager
        Type                    client
        Format                  v1alpha2

  Keypair/kube-proxy
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-proxy
        Type                    client
        Format                  v1alpha2

  Keypair/kube-scheduler
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-scheduler
        Type                    client
        Format                  v1alpha2

  Keypair/kubecfg
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:masters,cn=kubecfg
        Type                    client
        Format                  v1alpha2

  Keypair/kubelet
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:nodes,cn=kubelet
        Type                    client
        Format                  v1alpha2

  Keypair/kubelet-api
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=kubelet-api
        Type                    client
        Format                  v1alpha2

  Keypair/master
        AlternateNames          [100.64.0.1, 127.0.0.1, api.internal.kubernetes.peelmicro.com, api.kubernetes.peelmicro.com, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local]
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=kubernetes-master
        Type                    server
        Format                  v1alpha2

  LaunchConfiguration/master-eu-central-1a.masters.kubernetes.peelmicro.com
        ImageID                 kope.io/k8s-1.10-debian-jessie-amd64-hvm-ebs-2018-08-17
        InstanceType            t2.micro
        SSHKey                  name:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e id:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        SecurityGroups          [name:masters.kubernetes.peelmicro.com]
        AssociatePublicIP       true
        IAMInstanceProfile      name:masters.kubernetes.peelmicro.com id:masters.kubernetes.peelmicro.com
        RootVolumeSize          64
        RootVolumeType          gp2
        SpotPrice

  LaunchConfiguration/nodes.kubernetes.peelmicro.com
        ImageID                 kope.io/k8s-1.10-debian-jessie-amd64-hvm-ebs-2018-08-17
        InstanceType            t2.micro
        SSHKey                  name:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e id:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        SecurityGroups          [name:nodes.kubernetes.peelmicro.com]
        AssociatePublicIP       true
        IAMInstanceProfile      name:nodes.kubernetes.peelmicro.com id:nodes.kubernetes.peelmicro.com
        RootVolumeSize          128
        RootVolumeType          gp2
        SpotPrice

  ManagedFile/kubernetes.peelmicro.com-addons-bootstrap
        Location                addons/bootstrap-channel.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-core.addons.k8s.io
        Location                addons/core.addons.k8s.io/v1.4.0.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-dns-controller.addons.k8s.io-k8s-1.6
        Location                addons/dns-controller.addons.k8s.io/k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-dns-controller.addons.k8s.io-pre-k8s-1.6
        Location                addons/dns-controller.addons.k8s.io/pre-k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-kube-dns.addons.k8s.io-k8s-1.6
        Location                addons/kube-dns.addons.k8s.io/k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-kube-dns.addons.k8s.io-pre-k8s-1.6
        Location                addons/kube-dns.addons.k8s.io/pre-k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-limit-range.addons.k8s.io
        Location                addons/limit-range.addons.k8s.io/v1.5.0.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-rbac.addons.k8s.io-k8s-1.8
        Location                addons/rbac.addons.k8s.io/k8s-1.8.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-storage-aws.addons.k8s.io-v1.6.0
        Location                addons/storage-aws.addons.k8s.io/v1.6.0.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-storage-aws.addons.k8s.io-v1.7.0
        Location                addons/storage-aws.addons.k8s.io/v1.7.0.yaml

  Route/0.0.0.0/0
        RouteTable              name:kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        InternetGateway         name:kubernetes.peelmicro.com

  RouteTable/kubernetes.peelmicro.com
        VPC                     name:kubernetes.peelmicro.com
        Shared                  false
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, kubernetes.io/kops/role: public, Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

  RouteTableAssociation/eu-central-1a.kubernetes.peelmicro.com
        RouteTable              name:kubernetes.peelmicro.com
        Subnet                  name:eu-central-1a.kubernetes.peelmicro.com

  SSHKey/kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        KeyFingerprint          9a:fa:b7:ad:4e:62:1b:16:a4:6b:a5:8f:8f:86:59:f6

  Secret/admin

  Secret/kube

  Secret/kube-proxy

  Secret/kubelet

  Secret/system:controller_manager

  Secret/system:dns

  Secret/system:logging

  Secret/system:monitoring

  Secret/system:scheduler

  SecurityGroup/masters.kubernetes.peelmicro.com
        Description             Security group for masters
        VPC                     name:kubernetes.peelmicro.com
        RemoveExtraRules        [port=22, port=443, port=2380, port=2381, port=4001, port=4002, port=4789, port=179]
        Tags                    {KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: masters.kubernetes.peelmicro.com}

  SecurityGroup/nodes.kubernetes.peelmicro.com
        Description             Security group for nodes
        VPC                     name:kubernetes.peelmicro.com
        RemoveExtraRules        [port=22]
        Tags                    {Name: nodes.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  SecurityGroupRule/all-master-to-master
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        SourceGroup             name:masters.kubernetes.peelmicro.com

  SecurityGroupRule/all-master-to-node
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        SourceGroup             name:masters.kubernetes.peelmicro.com

  SecurityGroupRule/all-node-to-node
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/https-external-to-master-0.0.0.0/0
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                443
        ToPort                  443

  SecurityGroupRule/master-egress
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Egress                  true

  SecurityGroupRule/node-egress
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Egress                  true

  SecurityGroupRule/node-to-master-tcp-1-2379
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                tcp
        FromPort                1
        ToPort                  2379
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/node-to-master-tcp-2382-4000
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                tcp
        FromPort                2382
        ToPort                  4000
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/node-to-master-tcp-4003-65535
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                tcp
        FromPort                4003
        ToPort                  65535
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/node-to-master-udp-1-65535
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                udp
        FromPort                1
        ToPort                  65535
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/ssh-external-to-master-0.0.0.0/0
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                22
        ToPort                  22

  SecurityGroupRule/ssh-external-to-node-0.0.0.0/0
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                22
        ToPort                  22

  Subnet/eu-central-1a.kubernetes.peelmicro.com
        ShortName               eu-central-1a
        VPC                     name:kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        CIDR                    172.20.32.0/19
        Shared                  false
        Tags                    {Name: eu-central-1a.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, kubernetes.io/role/elb: 1, SubnetType: Public}

  VPC/kubernetes.peelmicro.com
        CIDR                    172.20.0.0/16
        EnableDNSHostnames      true
        EnableDNSSupport        true
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  VPCDHCPOptionsAssociation/kubernetes.peelmicro.com
        VPC                     name:kubernetes.peelmicro.com
        DHCPOptions             name:kubernetes.peelmicro.com

Must specify --yes to apply changes

Cluster configuration has been created.

Suggestions:
 * list clusters with: kops get cluster
 * edit this cluster with: kops edit cluster kubernetes.peelmicro.com
 * edit your node instance group: kops edit ig --name=kubernetes.peelmicro.com nodes
 * edit your master instance group: kops edit ig --name=kubernetes.peelmicro.com master-eu-central-1a

Finally configure your cluster with: kops update cluster kubernetes.peelmicro.com --yes

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- To edit the cluster before executing it run the following command:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~#  kops edit cluster kubernetes.peelmicro.com  --state=s3://kops.peelmicro.com
Edit cancelled, no changes made.
```

```yaml
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.
#
apiVersion: kops/v1alpha2
kind: Cluster
metadata:
  creationTimestamp: 2019-03-15T05:59:35Z
  name: kubernetes.peelmicro.com
spec:
  api:
    dns: {}
  authorization:
    rbac: {}
  channel: stable
  cloudProvider: aws
  configBase: s3://kops.peelmicro.com/kubernetes.peelmicro.com
  dnsZone: kops.peelmicro.com
  etcdClusters:
    - etcdMembers:
        - instanceGroup: master-eu-central-1a
          name: a
      name: main
    - etcdMembers:
        - instanceGroup: master-eu-central-1a
          name: a
      name: events
  iam:
    allowContainerRegistry: true
    legacy: false
  kubernetesApiAccess:
    - 0.0.0.0/0
  kubernetesVersion: 1.10.12
  masterInternalName: api.internal.kubernetes.peelmicro.com
  masterPublicName: api.kubernetes.peelmicro.com
  networkCIDR: 172.20.0.0/16
  networking:
    kubenet: {}
  nonMasqueradeCIDR: 100.64.0.0/10
  sshAccess:
    - 0.0.0.0/0
  subnets:
    - cidr: 172.20.32.0/19
      name: eu-central-1a
      type: Public
      zone: eu-central-1a
  topology:
    dns:
      type: Public
    masters: public
    nodes: public
```

- In order to apply the cluster we have to execute the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kops.peelmicro.com
I0315 06:06:19.969004   31457 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0315 06:06:20.795247   31457 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0315 06:06:20.962766   31457 vfs_castore.go:735] Issuing new certificate: "ca"
I0315 06:06:21.198285   31457 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0315 06:06:23.606091   31457 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0315 06:06:23.853815   31457 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0315 06:06:24.320451   31457 vfs_castore.go:735] Issuing new certificate: "master"
I0315 06:06:24.611536   31457 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0315 06:06:24.678239   31457 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0315 06:06:24.911438   31457 vfs_castore.go:735] Issuing new certificate: "kops"
I0315 06:06:25.486939   31457 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0315 06:06:25.961948   31457 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0315 06:06:26.040222   31457 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0315 06:06:26.129737   31457 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0315 06:06:26.498300   31457 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0315 06:06:26.813014   31457 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0315 06:06:26.826593   31457 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0315 06:06:37.250927   31457 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0315 06:06:37.762177   31457 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0315 06:06:37.762423   31457 dns.go:153] Pre-creating DNS records
W0315 06:06:38.315581   31457 apply_cluster.go:871] unable to pre-create DNS records - cluster startup may be slower: Error pre-creating DNS records: InvalidChangeBatch: [RRSet with DNS name api.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name api.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name etcd-a.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name etcd-events-a.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com.]
        status code: 400, request id: 7ea43b4c-46e8-11e9-a52b-9fefea2a2694
I0315 06:06:38.532333   31457 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pods
Unable to connect to the server: dial tcp: lookup api.kubernetes.peelmicro.com on 127.0.0.53:53: server misbehaving
```

- It didn't work, so delete the `hosted zone` and create it again

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops6.png)

- Change the DNS nameservers on Acens

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops8.png)

- Follow the previous steps to create the cluster again.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kops.peelmicro.com
I0315 06:47:31.962699     307 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0315 06:47:33.896810     307 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0315 06:47:33.969253     307 vfs_castore.go:735] Issuing new certificate: "ca"
I0315 06:47:34.213611     307 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0315 06:47:36.015025     307 vfs_castore.go:735] Issuing new certificate: "kops"
I0315 06:47:36.423941     307 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0315 06:47:37.080563     307 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0315 06:47:37.600369     307 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0315 06:47:37.695464     307 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0315 06:47:37.891994     307 vfs_castore.go:735] Issuing new certificate: "master"
I0315 06:47:38.176659     307 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0315 06:47:38.192629     307 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0315 06:47:38.217366     307 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0315 06:47:38.525086     307 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0315 06:47:38.769445     307 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0315 06:47:39.034301     307 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0315 06:47:39.090557     307 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0315 06:47:49.477530     307 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0315 06:47:50.027669     307 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0315 06:47:50.027736     307 dns.go:153] Pre-creating DNS records
W0315 06:47:50.568273     307 apply_cluster.go:871] unable to pre-create DNS records - cluster startup may be slower: Error pre-creating DNS records: InvalidChangeBatch: [RRSet with DNS name api.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name api.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name etcd-a.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com., RRSet with DNS name etcd-events-a.internal.kubernetes.peelmicro.com. is not permitted in zone kops.peelmicro.com.]
        status code: 400, request id: 4034e612-46ee-11e9-8e59-35695a65fb32
I0315 06:47:50.781722     307 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster --state=s3://kops.peelmicro.com
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com


unexpected error during validation: unable to resolve Kubernetes cluster API URL dns: lookup api.kubernetes.peelmicro.com on 127.0.0.53:53: server misbehaving
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- It didn't work again.

- The problem is that the cluster name must be the same as the Zone name.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kops.peelmicro.com --state=s3://kops.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kops.peelmicro.com
I0315 07:01:34.184447     702 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0315 07:01:34.274274     702 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0315 07:01:34.631661     702 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0315 07:01:36.209573     702 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0315 07:01:36.552601     702 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0315 07:01:36.784523     702 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0315 07:01:36.896606     702 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0315 07:01:36.924368     702 executor.go:103] Tasks: 73 done / 73 total; 0 can run
Will create resources:
  AutoscalingGroup/master-eu-central-1a.masters.kops.peelmicro.com
        MinSize                 1
        MaxSize                 1
        Subnets                 [name:eu-central-1a.kops.peelmicro.com]
        Tags                    {k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: master-eu-central-1a, k8s.io/role/master: 1, Name: master-eu-central-1a.masters.kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:master-eu-central-1a.masters.kops.peelmicro.com

  AutoscalingGroup/nodes.kops.peelmicro.com
        MinSize                 2
        MaxSize                 2
        Subnets                 [name:eu-central-1a.kops.peelmicro.com]
        Tags                    {KubernetesCluster: kops.peelmicro.com, k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: nodes, k8s.io/role/node: 1, Name: nodes.kops.peelmicro.com}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:nodes.kops.peelmicro.com

  DHCPOptions/kops.peelmicro.com
        DomainName              eu-central-1.compute.internal
        DomainNameServers       AmazonProvidedDNS
        Shared                  false
        Tags                    {kubernetes.io/cluster/kops.peelmicro.com: owned, Name: kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com}

  EBSVolume/a.etcd-events.kops.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {k8s.io/etcd/events: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kops.peelmicro.com: owned, Name: a.etcd-events.kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com}

  EBSVolume/a.etcd-main.kops.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {k8s.io/etcd/main: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kops.peelmicro.com: owned, Name: a.etcd-main.kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com}

  IAMInstanceProfile/masters.kops.peelmicro.com
        Shared                  false

  IAMInstanceProfile/nodes.kops.peelmicro.com
        Shared                  false

  IAMInstanceProfileRole/masters.kops.peelmicro.com
        InstanceProfile         name:masters.kops.peelmicro.com id:masters.kops.peelmicro.com
        Role                    name:masters.kops.peelmicro.com

  IAMInstanceProfileRole/nodes.kops.peelmicro.com
        InstanceProfile         name:nodes.kops.peelmicro.com id:nodes.kops.peelmicro.com
        Role                    name:nodes.kops.peelmicro.com

  IAMRole/masters.kops.peelmicro.com
        ExportWithID            masters

  IAMRole/nodes.kops.peelmicro.com
        ExportWithID            nodes

  IAMRolePolicy/masters.kops.peelmicro.com
        Role                    name:masters.kops.peelmicro.com

  IAMRolePolicy/nodes.kops.peelmicro.com
        Role                    name:nodes.kops.peelmicro.com

  InternetGateway/kops.peelmicro.com
        VPC                     name:kops.peelmicro.com
        Shared                  false
        Tags                    {Name: kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com, kubernetes.io/cluster/kops.peelmicro.com: owned}

  Keypair/apiserver-aggregator
        Signer                  name:apiserver-aggregator-ca id:cn=apiserver-aggregator-ca
        Subject                 cn=aggregator
        Type                    client
        Format                  v1alpha2

  Keypair/apiserver-aggregator-ca
        Subject                 cn=apiserver-aggregator-ca
        Type                    ca
        Format                  v1alpha2

  Keypair/apiserver-proxy-client
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=apiserver-proxy-client
        Type                    client
        Format                  v1alpha2

  Keypair/ca
        Subject                 cn=kubernetes
        Type                    ca
        Format                  v1alpha2

  Keypair/kops
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:masters,cn=kops
        Type                    client
        Format                  v1alpha2

  Keypair/kube-controller-manager
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-controller-manager
        Type                    client
        Format                  v1alpha2

  Keypair/kube-proxy
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-proxy
        Type                    client
        Format                  v1alpha2

  Keypair/kube-scheduler
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-scheduler
        Type                    client
        Format                  v1alpha2

  Keypair/kubecfg
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:masters,cn=kubecfg
        Type                    client
        Format                  v1alpha2

  Keypair/kubelet
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:nodes,cn=kubelet
        Type                    client
        Format                  v1alpha2

  Keypair/kubelet-api
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=kubelet-api
        Type                    client
        Format                  v1alpha2

  Keypair/master
        AlternateNames          [100.64.0.1, 127.0.0.1, api.internal.kops.peelmicro.com, api.kops.peelmicro.com, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local]
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=kubernetes-master
        Type                    server
        Format                  v1alpha2

  LaunchConfiguration/master-eu-central-1a.masters.kops.peelmicro.com
        ImageID                 kope.io/k8s-1.10-debian-jessie-amd64-hvm-ebs-2018-08-17
        InstanceType            t2.micro
        SSHKey                  name:kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e id:kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        SecurityGroups          [name:masters.kops.peelmicro.com]
        AssociatePublicIP       true
        IAMInstanceProfile      name:masters.kops.peelmicro.com id:masters.kops.peelmicro.com
        RootVolumeSize          64
        RootVolumeType          gp2
        SpotPrice

  LaunchConfiguration/nodes.kops.peelmicro.com
        ImageID                 kope.io/k8s-1.10-debian-jessie-amd64-hvm-ebs-2018-08-17
        InstanceType            t2.micro
        SSHKey                  name:kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e id:kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        SecurityGroups          [name:nodes.kops.peelmicro.com]
        AssociatePublicIP       true
        IAMInstanceProfile      name:nodes.kops.peelmicro.com id:nodes.kops.peelmicro.com
        RootVolumeSize          128
        RootVolumeType          gp2
        SpotPrice

  ManagedFile/kops.peelmicro.com-addons-bootstrap
        Location                addons/bootstrap-channel.yaml

  ManagedFile/kops.peelmicro.com-addons-core.addons.k8s.io
        Location                addons/core.addons.k8s.io/v1.4.0.yaml

  ManagedFile/kops.peelmicro.com-addons-dns-controller.addons.k8s.io-k8s-1.6
        Location                addons/dns-controller.addons.k8s.io/k8s-1.6.yaml

  ManagedFile/kops.peelmicro.com-addons-dns-controller.addons.k8s.io-pre-k8s-1.6
        Location                addons/dns-controller.addons.k8s.io/pre-k8s-1.6.yaml

  ManagedFile/kops.peelmicro.com-addons-kube-dns.addons.k8s.io-k8s-1.6
        Location                addons/kube-dns.addons.k8s.io/k8s-1.6.yaml

  ManagedFile/kops.peelmicro.com-addons-kube-dns.addons.k8s.io-pre-k8s-1.6
        Location                addons/kube-dns.addons.k8s.io/pre-k8s-1.6.yaml

  ManagedFile/kops.peelmicro.com-addons-limit-range.addons.k8s.io
        Location                addons/limit-range.addons.k8s.io/v1.5.0.yaml

  ManagedFile/kops.peelmicro.com-addons-rbac.addons.k8s.io-k8s-1.8
        Location                addons/rbac.addons.k8s.io/k8s-1.8.yaml

  ManagedFile/kops.peelmicro.com-addons-storage-aws.addons.k8s.io-v1.6.0
        Location                addons/storage-aws.addons.k8s.io/v1.6.0.yaml

  ManagedFile/kops.peelmicro.com-addons-storage-aws.addons.k8s.io-v1.7.0
        Location                addons/storage-aws.addons.k8s.io/v1.7.0.yaml

  Route/0.0.0.0/0
        RouteTable              name:kops.peelmicro.com
        CIDR                    0.0.0.0/0
        InternetGateway         name:kops.peelmicro.com

  RouteTable/kops.peelmicro.com
        VPC                     name:kops.peelmicro.com
        Shared                  false
        Tags                    {Name: kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com, kubernetes.io/cluster/kops.peelmicro.com: owned, kubernetes.io/kops/role: public}

  RouteTableAssociation/eu-central-1a.kops.peelmicro.com
        RouteTable              name:kops.peelmicro.com
        Subnet                  name:eu-central-1a.kops.peelmicro.com

  SSHKey/kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        KeyFingerprint          9a:fa:b7:ad:4e:62:1b:16:a4:6b:a5:8f:8f:86:59:f6

  Secret/admin

  Secret/kube

  Secret/kube-proxy

  Secret/kubelet

  Secret/system:controller_manager

  Secret/system:dns

  Secret/system:logging

  Secret/system:monitoring

  Secret/system:scheduler

  SecurityGroup/masters.kops.peelmicro.com
        Description             Security group for masters
        VPC                     name:kops.peelmicro.com
        RemoveExtraRules        [port=22, port=443, port=2380, port=2381, port=4001, port=4002, port=4789, port=179]
        Tags                    {Name: masters.kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com, kubernetes.io/cluster/kops.peelmicro.com: owned}

  SecurityGroup/nodes.kops.peelmicro.com
        Description             Security group for nodes
        VPC                     name:kops.peelmicro.com
        RemoveExtraRules        [port=22]
        Tags                    {KubernetesCluster: kops.peelmicro.com, kubernetes.io/cluster/kops.peelmicro.com: owned, Name: nodes.kops.peelmicro.com}

  SecurityGroupRule/all-master-to-master
        SecurityGroup           name:masters.kops.peelmicro.com
        SourceGroup             name:masters.kops.peelmicro.com

  SecurityGroupRule/all-master-to-node
        SecurityGroup           name:nodes.kops.peelmicro.com
        SourceGroup             name:masters.kops.peelmicro.com

  SecurityGroupRule/all-node-to-node
        SecurityGroup           name:nodes.kops.peelmicro.com
        SourceGroup             name:nodes.kops.peelmicro.com

  SecurityGroupRule/https-external-to-master-0.0.0.0/0
        SecurityGroup           name:masters.kops.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                443
        ToPort                  443

  SecurityGroupRule/master-egress
        SecurityGroup           name:masters.kops.peelmicro.com
        CIDR                    0.0.0.0/0
        Egress                  true

  SecurityGroupRule/node-egress
        SecurityGroup           name:nodes.kops.peelmicro.com
        CIDR                    0.0.0.0/0
        Egress                  true

  SecurityGroupRule/node-to-master-tcp-1-2379
        SecurityGroup           name:masters.kops.peelmicro.com
        Protocol                tcp
        FromPort                1
        ToPort                  2379
        SourceGroup             name:nodes.kops.peelmicro.com

  SecurityGroupRule/node-to-master-tcp-2382-4000
        SecurityGroup           name:masters.kops.peelmicro.com
        Protocol                tcp
        FromPort                2382
        ToPort                  4000
        SourceGroup             name:nodes.kops.peelmicro.com

  SecurityGroupRule/node-to-master-tcp-4003-65535
        SecurityGroup           name:masters.kops.peelmicro.com
        Protocol                tcp
        FromPort                4003
        ToPort                  65535
        SourceGroup             name:nodes.kops.peelmicro.com

  SecurityGroupRule/node-to-master-udp-1-65535
        SecurityGroup           name:masters.kops.peelmicro.com
        Protocol                udp
        FromPort                1
        ToPort                  65535
        SourceGroup             name:nodes.kops.peelmicro.com

  SecurityGroupRule/ssh-external-to-master-0.0.0.0/0
        SecurityGroup           name:masters.kops.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                22
        ToPort                  22

  SecurityGroupRule/ssh-external-to-node-0.0.0.0/0
        SecurityGroup           name:nodes.kops.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                22
        ToPort                  22

  Subnet/eu-central-1a.kops.peelmicro.com
        ShortName               eu-central-1a
        VPC                     name:kops.peelmicro.com
        AvailabilityZone        eu-central-1a
        CIDR                    172.20.32.0/19
        Shared                  false
        Tags                    {SubnetType: Public, Name: eu-central-1a.kops.peelmicro.com, KubernetesCluster: kops.peelmicro.com, kubernetes.io/cluster/kops.peelmicro.com: owned, kubernetes.io/role/elb: 1}

  VPC/kops.peelmicro.com
        CIDR                    172.20.0.0/16
        EnableDNSHostnames      true
        EnableDNSSupport        true
        Shared                  false
        Tags                    {KubernetesCluster: kops.peelmicro.com, kubernetes.io/cluster/kops.peelmicro.com: owned, Name: kops.peelmicro.com}

  VPCDHCPOptionsAssociation/kops.peelmicro.com
        VPC                     name:kops.peelmicro.com
        DHCPOptions             name:kops.peelmicro.com

Must specify --yes to apply changes

Cluster configuration has been created.

Suggestions:
 * list clusters with: kops get cluster
 * edit this cluster with: kops edit cluster kops.peelmicro.com
 * edit your node instance group: kops edit ig --name=kops.peelmicro.com nodes
 * edit your master instance group: kops edit ig --name=kops.peelmicro.com master-eu-central-1a

Finally configure your cluster with: kops update cluster kops.peelmicro.com --yes

root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kops.peelmicro.com --yes --state=s3://kops.peelmicro.com
I0315 07:02:00.469051     718 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0315 07:02:01.130528     718 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0315 07:02:01.302613     718 vfs_castore.go:735] Issuing new certificate: "ca"
I0315 07:02:01.603961     718 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0315 07:02:03.524865     718 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0315 07:02:04.844099     718 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0315 07:02:05.030435     718 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0315 07:02:05.062336     718 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0315 07:02:05.236813     718 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0315 07:02:05.485524     718 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0315 07:02:05.558822     718 vfs_castore.go:735] Issuing new certificate: "master"
I0315 07:02:05.696382     718 vfs_castore.go:735] Issuing new certificate: "kops"
I0315 07:02:05.814310     718 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0315 07:02:05.993621     718 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0315 07:02:06.351035     718 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0315 07:02:06.585725     718 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kops.peelmicro.com" to be ready
I0315 07:02:06.626082     718 launchconfiguration.go:380] waiting for IAM instance profile "masters.kops.peelmicro.com" to be ready
I0315 07:02:16.975715     718 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0315 07:02:17.513135     718 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0315 07:02:17.513372     718 dns.go:153] Pre-creating DNS records
I0315 07:02:18.229085     718 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kops.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kops.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get nodes --show-labels
Unable to connect to the server: dial tcp 203.0.113.123:443: i/o timeout
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster --state=s3://kops.peelmicro.com
Using cluster from kubectl context: kops.peelmicro.com

Validating cluster kops.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1       eu-central-1a
nodes                   Node    t2.micro        2       2       eu-central-1a

NODE STATUS
NAME    ROLE    READY

VALIDATION ERRORS
KIND    NAME            MESSAGE
dns     apiserver       Validation Failed

The dns-controller Kubernetes deployment has not updated the Kubernetes cluster's API DNS entry to the correct IP address.  The API DNS IP address is the placeholder address that kops creates: 203.0.113.123.  Please wait about 5-10 minutes for a master to start, dns-controller to launch, and DNS to propagate.  The protokube container and dns-controller deployment logs may contain more diagnostic information.  Etcd and the API DNS entries must be updated for a kops Kubernetes cluster to start.

Validation Failed
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- 24 hours later

```bash
Last login: Fri Mar 15 05:33:50 2019 from 80.28.75.169
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get nod
Unable to connect to the server: dial tcp 203.0.113.123:443: i/o timeout
```

- I'm going to remove the `kops.peelmicro.com` dns-zone and create the `kubernetes.peelmicro.com` dns-zone and cluster.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kops.peelmicro.com --state=s3://kops.peelmicro.com --yes
TYPE                    NAME                                                                            ID
autoscaling-config      master-eu-central-1a.masters.kops.peelmicro.com-20190315070206                  master-eu-central-1a.masters.kops.peelmicro.com-20190315070206
autoscaling-config      nodes.kops.peelmicro.com-20190315070206                                         nodes.kops.peelmicro.com-20190315070206
autoscaling-group       master-eu-central-1a.masters.kops.peelmicro.com                                 master-eu-central-1a.masters.kops.peelmicro.com
autoscaling-group       nodes.kops.peelmicro.com                                                        nodes.kops.peelmicro.com
dhcp-options            kops.peelmicro.com                                                              dopt-0a174bfae4163a28a
iam-instance-profile    masters.kops.peelmicro.com                                                      masters.kops.peelmicro.com
iam-instance-profile    nodes.kops.peelmicro.com                                                        nodes.kops.peelmicro.com
iam-role                masters.kops.peelmicro.com                                                      masters.kops.peelmicro.com
iam-role                nodes.kops.peelmicro.com                                                        nodes.kops.peelmicro.com
instance                master-eu-central-1a.masters.kops.peelmicro.com                                 i-049d4f9daa591e0a9
instance                nodes.kops.peelmicro.com                                                        i-092842f21303ae639
instance                nodes.kops.peelmicro.com                                                        i-0f7db0075fca04f2b
internet-gateway        kops.peelmicro.com                                                              igw-0956b52a6fc5efada
keypair                 kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e   kubernetes.kops.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
route-table             kops.peelmicro.com                                                              rtb-064097f46ec644f3f
route53-record          api.internal.kops.peelmicro.com.                                                ZA2AOBDZWGHL7/api.internal.kops.peelmicro.com.
route53-record          api.kops.peelmicro.com.                                                         ZA2AOBDZWGHL7/api.kops.peelmicro.com.
route53-record          etcd-a.internal.kops.peelmicro.com.                                             ZA2AOBDZWGHL7/etcd-a.internal.kops.peelmicro.com.
route53-record          etcd-events-a.internal.kops.peelmicro.com.                                      ZA2AOBDZWGHL7/etcd-events-a.internal.kops.peelmicro.com.
security-group          masters.kops.peelmicro.com                                                      sg-0a2c260e541aafb91
security-group          nodes.kops.peelmicro.com                                                        sg-015222bcad3a423d6
subnet                  eu-central-1a.kops.peelmicro.com                                                subnet-083074dcc6696347e
volume                  a.etcd-events.kops.peelmicro.com                                                vol-0f4c7f6c18ceac731
volume                  a.etcd-main.kops.peelmicro.com                                                  vol-01e376576befe73db
vpc                     kops.peelmicro.com                                                              vpc-07336fb28f2d20ad7
W0316 05:15:09.897240   24864 aws_cloud.go:468] Skipping ASG arn:aws:autoscaling:eu-central-1:972569889348:autoScalingGroup:86cd242e-4516-4490-af51-24e23da33e49:autoScalingGroupName/master-eu-central-1a.masters.kops.peelmicro.com (which matches tags): Delete in progress
W0316 05:15:09.897407   24864 aws_cloud.go:468] Skipping ASG arn:aws:autoscaling:eu-central-1:972569889348:autoScalingGroup:10fd97ce-d79e-4d6e-9143-bab15c2ee2d0:autoScalingGroupName/nodes.kops.peelmicro.com (which matches tags): Delete in progress
TYPE                    NAME                                    ID
dhcp-options            kops.peelmicro.com                      dopt-0a174bfae4163a28a
internet-gateway        kops.peelmicro.com                      igw-0956b52a6fc5efada
route-table             kops.peelmicro.com                      rtb-064097f46ec644f3f
security-group          masters.kops.peelmicro.com              sg-0a2c260e541aafb91
security-group          nodes.kops.peelmicro.com                sg-015222bcad3a423d6
subnet                  eu-central-1a.kops.peelmicro.com        subnet-083074dcc6696347e
volume                  a.etcd-events.kops.peelmicro.com        vol-0f4c7f6c18ceac731
volume                  a.etcd-main.kops.peelmicro.com          vol-01e376576befe73db
vpc                     kops.peelmicro.com                      vpc-07336fb28f2d20ad7

volume:vol-01e376576befe73db    ok
volume:vol-0f4c7f6c18ceac731    ok
subnet:subnet-083074dcc6696347e ok
security-group:sg-015222bcad3a423d6     ok
security-group:sg-0a2c260e541aafb91     ok
internet-gateway:igw-0956b52a6fc5efada  ok
route-table:rtb-064097f46ec644f3f       ok
vpc:vpc-07336fb28f2d20ad7       ok
dhcp-options:dopt-0a174bfae4163a28a     ok
Deleted kubectl config for kops.peelmicro.com

Deleted cluster: "kops.peelmicro.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Remove the `kops.peelmicro.zone`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops10.png)

- Create the `kubernetes.peelmicro.com` zone

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops11.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops12.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops13.png)

- Modify DNS servers

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops14.png)

- Delete the `kops.peelmicro.com` S3 bucket

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops15.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops16.png)

- Create the `kubernetes.peelmicro.com` S3 bucket

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops17.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops18.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops19.png)

- Prepare the `kubernetes.peelmicro.com` cluster

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0316 05:45:23.412106   25346 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0316 05:45:23.531993   25346 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0316 05:45:23.865561   25346 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0316 05:45:25.887880   25346 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0316 05:45:26.237685   25346 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0316 05:45:26.444459   25346 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0316 05:45:26.573473   25346 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0316 05:45:26.597711   25346 executor.go:103] Tasks: 73 done / 73 total; 0 can run
Will create resources:
  AutoscalingGroup/master-eu-central-1a.masters.kubernetes.peelmicro.com
        MinSize                 1
        MaxSize                 1
        Subnets                 [name:eu-central-1a.kubernetes.peelmicro.com]
        Tags                    {Name: master-eu-central-1a.masters.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: master-eu-central-1a, k8s.io/role/master: 1}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:master-eu-central-1a.masters.kubernetes.peelmicro.com

  AutoscalingGroup/nodes.kubernetes.peelmicro.com
        MinSize                 2
        MaxSize                 2
        Subnets                 [name:eu-central-1a.kubernetes.peelmicro.com]
        Tags                    {k8s.io/role/node: 1, Name: nodes.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: nodes}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:nodes.kubernetes.peelmicro.com

  DHCPOptions/kubernetes.peelmicro.com
        DomainName              eu-central-1.compute.internal
        DomainNameServers       AmazonProvidedDNS
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  EBSVolume/a.etcd-events.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-events.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/events: a/a, k8s.io/role/master: 1}

  EBSVolume/a.etcd-main.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-main.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/main: a/a}

  IAMInstanceProfile/masters.kubernetes.peelmicro.com
        Shared                  false

  IAMInstanceProfile/nodes.kubernetes.peelmicro.com
        Shared                  false

  IAMInstanceProfileRole/masters.kubernetes.peelmicro.com
        InstanceProfile         name:masters.kubernetes.peelmicro.com id:masters.kubernetes.peelmicro.com
        Role                    name:masters.kubernetes.peelmicro.com

  IAMInstanceProfileRole/nodes.kubernetes.peelmicro.com
        InstanceProfile         name:nodes.kubernetes.peelmicro.com id:nodes.kubernetes.peelmicro.com
        Role                    name:nodes.kubernetes.peelmicro.com

  IAMRole/masters.kubernetes.peelmicro.com
        ExportWithID            masters

  IAMRole/nodes.kubernetes.peelmicro.com
        ExportWithID            nodes

  IAMRolePolicy/masters.kubernetes.peelmicro.com
        Role                    name:masters.kubernetes.peelmicro.com

  IAMRolePolicy/nodes.kubernetes.peelmicro.com
        Role                    name:nodes.kubernetes.peelmicro.com

  InternetGateway/kubernetes.peelmicro.com
        VPC                     name:kubernetes.peelmicro.com
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  Keypair/apiserver-aggregator
        Signer                  name:apiserver-aggregator-ca id:cn=apiserver-aggregator-ca
        Subject                 cn=aggregator
        Type                    client
        Format                  v1alpha2

  Keypair/apiserver-aggregator-ca
        Subject                 cn=apiserver-aggregator-ca
        Type                    ca
        Format                  v1alpha2

  Keypair/apiserver-proxy-client
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=apiserver-proxy-client
        Type                    client
        Format                  v1alpha2

  Keypair/ca
        Subject                 cn=kubernetes
        Type                    ca
        Format                  v1alpha2

  Keypair/kops
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:masters,cn=kops
        Type                    client
        Format                  v1alpha2

  Keypair/kube-controller-manager
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-controller-manager
        Type                    client
        Format                  v1alpha2

  Keypair/kube-proxy
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-proxy
        Type                    client
        Format                  v1alpha2

  Keypair/kube-scheduler
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=system:kube-scheduler
        Type                    client
        Format                  v1alpha2

  Keypair/kubecfg
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:masters,cn=kubecfg
        Type                    client
        Format                  v1alpha2

  Keypair/kubelet
        Signer                  name:ca id:cn=kubernetes
        Subject                 o=system:nodes,cn=kubelet
        Type                    client
        Format                  v1alpha2

  Keypair/kubelet-api
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=kubelet-api
        Type                    client
        Format                  v1alpha2

  Keypair/master
        AlternateNames          [100.64.0.1, 127.0.0.1, api.internal.kubernetes.peelmicro.com, api.kubernetes.peelmicro.com, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local]
        Signer                  name:ca id:cn=kubernetes
        Subject                 cn=kubernetes-master
        Type                    server
        Format                  v1alpha2

  LaunchConfiguration/master-eu-central-1a.masters.kubernetes.peelmicro.com
        ImageID                 kope.io/k8s-1.10-debian-jessie-amd64-hvm-ebs-2018-08-17
        InstanceType            t2.micro
        SSHKey                  name:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e id:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        SecurityGroups          [name:masters.kubernetes.peelmicro.com]
        AssociatePublicIP       true
        IAMInstanceProfile      name:masters.kubernetes.peelmicro.com id:masters.kubernetes.peelmicro.com
        RootVolumeSize          64
        RootVolumeType          gp2
        SpotPrice

  LaunchConfiguration/nodes.kubernetes.peelmicro.com
        ImageID                 kope.io/k8s-1.10-debian-jessie-amd64-hvm-ebs-2018-08-17
        InstanceType            t2.micro
        SSHKey                  name:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e id:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        SecurityGroups          [name:nodes.kubernetes.peelmicro.com]
        AssociatePublicIP       true
        IAMInstanceProfile      name:nodes.kubernetes.peelmicro.com id:nodes.kubernetes.peelmicro.com
        RootVolumeSize          128
        RootVolumeType          gp2
        SpotPrice

  ManagedFile/kubernetes.peelmicro.com-addons-bootstrap
        Location                addons/bootstrap-channel.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-core.addons.k8s.io
        Location                addons/core.addons.k8s.io/v1.4.0.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-dns-controller.addons.k8s.io-k8s-1.6
        Location                addons/dns-controller.addons.k8s.io/k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-dns-controller.addons.k8s.io-pre-k8s-1.6
        Location                addons/dns-controller.addons.k8s.io/pre-k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-kube-dns.addons.k8s.io-k8s-1.6
        Location                addons/kube-dns.addons.k8s.io/k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-kube-dns.addons.k8s.io-pre-k8s-1.6
        Location                addons/kube-dns.addons.k8s.io/pre-k8s-1.6.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-limit-range.addons.k8s.io
        Location                addons/limit-range.addons.k8s.io/v1.5.0.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-rbac.addons.k8s.io-k8s-1.8
        Location                addons/rbac.addons.k8s.io/k8s-1.8.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-storage-aws.addons.k8s.io-v1.6.0
        Location                addons/storage-aws.addons.k8s.io/v1.6.0.yaml

  ManagedFile/kubernetes.peelmicro.com-addons-storage-aws.addons.k8s.io-v1.7.0
        Location                addons/storage-aws.addons.k8s.io/v1.7.0.yaml

  Route/0.0.0.0/0
        RouteTable              name:kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        InternetGateway         name:kubernetes.peelmicro.com

  RouteTable/kubernetes.peelmicro.com
        VPC                     name:kubernetes.peelmicro.com
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, kubernetes.io/kops/role: public}

  RouteTableAssociation/eu-central-1a.kubernetes.peelmicro.com
        RouteTable              name:kubernetes.peelmicro.com
        Subnet                  name:eu-central-1a.kubernetes.peelmicro.com

  SSHKey/kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
        KeyFingerprint          9a:fa:b7:ad:4e:62:1b:16:a4:6b:a5:8f:8f:86:59:f6

  Secret/admin

  Secret/kube

  Secret/kube-proxy

  Secret/kubelet

  Secret/system:controller_manager

  Secret/system:dns

  Secret/system:logging

  Secret/system:monitoring

  Secret/system:scheduler

  SecurityGroup/masters.kubernetes.peelmicro.com
        Description             Security group for masters
        VPC                     name:kubernetes.peelmicro.com
        RemoveExtraRules        [port=22, port=443, port=2380, port=2381, port=4001, port=4002, port=4789, port=179]
        Tags                    {Name: masters.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  SecurityGroup/nodes.kubernetes.peelmicro.com
        Description             Security group for nodes
        VPC                     name:kubernetes.peelmicro.com
        RemoveExtraRules        [port=22]
        Tags                    {KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: nodes.kubernetes.peelmicro.com}

  SecurityGroupRule/all-master-to-master
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        SourceGroup             name:masters.kubernetes.peelmicro.com

  SecurityGroupRule/all-master-to-node
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        SourceGroup             name:masters.kubernetes.peelmicro.com

  SecurityGroupRule/all-node-to-node
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/https-external-to-master-0.0.0.0/0
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                443
        ToPort                  443

  SecurityGroupRule/master-egress
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Egress                  true

  SecurityGroupRule/node-egress
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Egress                  true

  SecurityGroupRule/node-to-master-tcp-1-2379
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                tcp
        FromPort                1
        ToPort                  2379
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/node-to-master-tcp-2382-4000
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                tcp
        FromPort                2382
        ToPort                  4000
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/node-to-master-tcp-4003-65535
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                tcp
        FromPort                4003
        ToPort                  65535
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/node-to-master-udp-1-65535
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        Protocol                udp
        FromPort                1
        ToPort                  65535
        SourceGroup             name:nodes.kubernetes.peelmicro.com

  SecurityGroupRule/ssh-external-to-master-0.0.0.0/0
        SecurityGroup           name:masters.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                22
        ToPort                  22

  SecurityGroupRule/ssh-external-to-node-0.0.0.0/0
        SecurityGroup           name:nodes.kubernetes.peelmicro.com
        CIDR                    0.0.0.0/0
        Protocol                tcp
        FromPort                22
        ToPort                  22

  Subnet/eu-central-1a.kubernetes.peelmicro.com
        ShortName               eu-central-1a
        VPC                     name:kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        CIDR                    172.20.32.0/19
        Shared                  false
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, kubernetes.io/role/elb: 1, SubnetType: Public, Name: eu-central-1a.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

  VPC/kubernetes.peelmicro.com
        CIDR                    172.20.0.0/16
        EnableDNSHostnames      true
        EnableDNSSupport        true
        Shared                  false
        Tags                    {Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

  VPCDHCPOptionsAssociation/kubernetes.peelmicro.com
        VPC                     name:kubernetes.peelmicro.com
        DHCPOptions             name:kubernetes.peelmicro.com

Must specify --yes to apply changes

Cluster configuration has been created.

Suggestions:
 * list clusters with: kops get cluster
 * edit this cluster with: kops edit cluster kubernetes.peelmicro.com
 * edit your node instance group: kops edit ig --name=kubernetes.peelmicro.com nodes
 * edit your master instance group: kops edit ig --name=kubernetes.peelmicro.com master-eu-central-1a

Finally configure your cluster with: kops update cluster kubernetes.peelmicro.com --yes

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Create the `kubernetes.peelmicro.com` cluster

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0316 05:47:12.589233   25370 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0316 05:47:13.322607   25370 vfs_castore.go:735] Issuing new certificate: "ca"
I0316 05:47:13.435291   25370 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0316 05:47:13.641075   25370 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0316 05:47:14.974859   25370 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0316 05:47:15.366786   25370 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0316 05:47:15.383256   25370 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0316 05:47:15.524266   25370 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0316 05:47:15.648660   25370 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0316 05:47:15.908861   25370 vfs_castore.go:735] Issuing new certificate: "kops"
I0316 05:47:16.321465   25370 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0316 05:47:17.489512   25370 vfs_castore.go:735] Issuing new certificate: "master"
I0316 05:47:17.575189   25370 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0316 05:47:17.703109   25370 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0316 05:47:17.909414   25370 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0316 05:47:18.176181   25370 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0316 05:47:18.211084   25370 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0316 05:47:28.543002   25370 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0316 05:47:29.015228   25370 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0316 05:47:29.015389   25370 dns.go:153] Pre-creating DNS records
I0316 05:47:29.768092   25370 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.

root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Check if it has been created with success

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster --state=s3://kubernetes.peelmicro.com
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1       eu-central-1a
nodes                   Node    t2.micro        2       2       eu-central-1a

NODE STATUS
NAME    ROLE    READY

VALIDATION ERRORS
KIND    NAME            MESSAGE
dns     apiserver       Validation Failed

The dns-controller Kubernetes deployment has not updated the Kubernetes cluster's API DNS entry to the correct IP address.  The API DNS IP address is the placeholder address that kops creates: 203.0.113.123.  Please wait about 5-10 minutes for a master to start, dns-controller to launch, and DNS to propagate.  The protokube container and dns-controller deployment logs may contain more diagnostic information.  Etcd and the API DNS entries must be updated for a kops Kubernetes cluster to start.

Validation Failed
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- After a few minutes

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster --state=s3://kubernetes.peelmicro.com
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1       eu-central-1a
nodes                   Node    t2.micro        2       2       eu-central-1a

NODE STATUS
NAME                                            ROLE    READY
ip-172-20-37-219.eu-central-1.compute.internal  node    True
ip-172-20-45-237.eu-central-1.compute.internal  master  True
ip-172-20-55-21.eu-central-1.compute.internal   node    True

Your cluster kubernetes.peelmicro.com is ready
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get node
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-37-219.eu-central-1.compute.internal   Ready    node     5m    v1.10.12
ip-172-20-45-237.eu-central-1.compute.internal   Ready    master   6m    v1.10.12
ip-172-20-55-21.eu-central-1.compute.internal    Ready    node     5m    v1.10.12
```

- Test if we can deploy an image in the new cluster

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl run hello-minikube --image=k8s.grc.io/echoserver:1.4 --port=8080
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/hello-minikube created
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Expose it externaly assigning a `NodePort` type. It exposes it to `every node` but not to `master`.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl expose deployment hello-minikube --type=NodePort
service/hello-minikube exposed
```

- We can check if the service and the pod is running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get services,pod
NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    100.66.193.128   <none>        8080:30045/TCP   1m
service/kubernetes       ClusterIP   100.64.0.1       <none>        443/TCP          13m

NAME                                  READY   STATUS             RESTARTS   AGE
pod/hello-minikube-5cd4996f86-sd7nc   0/1     ImagePullBackOff   0          4m
```

- We can check if the instance are running by browsing to https://eu-central-1.console.aws.amazon.com/ec2/v2/home?region=eu-central-1

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops19b.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops19c.png)

- We can see the nodes going to `Auto Scaling Groups`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops19d.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops19e.png)

- Access the security group of the one of the nodes

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops20.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops21.png)

- Open the `30045` port

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops22.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops23.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops24.png)

- Browse to http://18.185.238.155:30045/

- ![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops25.png)

- It doesn't work because the pod has not been created properly.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get services,pod
NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    100.66.193.128   <none>        8080:30045/TCP   18m
service/kubernetes       ClusterIP   100.64.0.1       <none>        443/TCP          30m

NAME                                  READY   STATUS             RESTARTS   AGE
pod/hello-minikube-5cd4996f86-sd7nc   0/1     ImagePullBackOff   0          20m
```

- Remove it and create it again

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                                  READY   STATUS             RESTARTS   AGE
pod/hello-minikube-5cd4996f86-pmcfw   0/1     ImagePullBackOff   0          4m

NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    100.66.193.128   <none>        8080:30045/TCP   25m
service/kubernetes       ClusterIP   100.64.0.1       <none>        443/TCP          37m

NAME                             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hello-minikube   1         1         1            0           28m

NAME                                        DESIRED   CURRENT   READY   AGE
replicaset.apps/hello-minikube-5cd4996f86   1         1         0       28m
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl delete deployment.apps/hello-minikube
deployment.apps "hello-minikube" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    100.66.193.128   <none>        8080:30045/TCP   26m
service/kubernetes       ClusterIP   100.64.0.1       <none>        443/TCP          38m
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl delete service/hello-minikube
service "hello-minikube" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   39m
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- try with a new version.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.10 --port=8080
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/hello-minikube created
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pod,svc
NAME                                  READY   STATUS              RESTARTS   AGE
pod/hello-minikube-7c77b68cff-j58rm   0/1     ContainerCreating   0          4s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   3h
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pod,svc
NAME                                  READY   STATUS    RESTARTS   AGE
pod/hello-minikube-7c77b68cff-j58rm   1/1     Running   0          7s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   3h
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl expose deployment hello-minikube --type=NodePort
service/hello-minikube exposed
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pod,svc
NAME                                  READY   STATUS    RESTARTS   AGE
pod/hello-minikube-7c77b68cff-j58rm   1/1     Running   0          43s

NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    100.65.179.124   <none>        8080:31654/TCP   7s
service/kubernetes       ClusterIP   100.64.0.1       <none>        443/TCP          3h
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Update port to open `31654` instead.

- ![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops26.png)

- ![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops27.png)

- ![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops28.png)

- Delete the cluster created:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190316054718                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190316054718
autoscaling-config      nodes.kubernetes.peelmicro.com-20190316054718                                           nodes.kubernetes.peelmicro.com-20190316054718
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-027089d02315d1701
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-07ec71351c375e11b
instance                nodes.kubernetes.peelmicro.com                                                          i-013b73b3ccb3475c8
instance                nodes.kubernetes.peelmicro.com                                                          i-06df1e9c4daa1b8a7
internet-gateway        kubernetes.peelmicro.com                                                                igw-01651dd29ac96747c
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
route-table             kubernetes.peelmicro.com                                                                rtb-035bf1b6f57fc288d
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group          masters.kubernetes.peelmicro.com                                                        sg-0483e837c3da32348
security-group          nodes.kubernetes.peelmicro.com                                                          sg-0b5bbef3e0e7591b8
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-093f91a92007ad158
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0c503050728ece318
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-0d04a01a4ab74dce6
vpc                     kubernetes.peelmicro.com                                                                vpc-0e992983ffe364f28

autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
route53-record:Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.  ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
instance:i-013b73b3ccb3475c8    ok
instance:i-07ec71351c375e11b    ok
internet-gateway:igw-01651dd29ac96747c  still has dependencies, will retry
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-role:nodes.kubernetes.peelmicro.com ok
instance:i-06df1e9c4daa1b8a7    ok
iam-role:masters.kubernetes.peelmicro.com       ok
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190316054718 ok
subnet:subnet-093f91a92007ad158 still has dependencies, will retry
autoscaling-config:nodes.kubernetes.peelmicro.com-20190316054718        ok
volume:vol-0c503050728ece318    still has dependencies, will retry
volume:vol-0d04a01a4ab74dce6    still has dependencies, will retry
security-group:sg-0483e837c3da32348     still has dependencies, will retry
security-group:sg-0b5bbef3e0e7591b8     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        vpc:vpc-0e992983ffe364f28
        volume:vol-0c503050728ece318
        volume:vol-0d04a01a4ab74dce6
        dhcp-options:dopt-027089d02315d1701
        internet-gateway:igw-01651dd29ac96747c
        security-group:sg-0b5bbef3e0e7591b8
        route-table:rtb-035bf1b6f57fc288d
        subnet:subnet-093f91a92007ad158
        security-group:sg-0483e837c3da32348
volume:vol-0d04a01a4ab74dce6    still has dependencies, will retry
volume:vol-0c503050728ece318    still has dependencies, will retry
subnet:subnet-093f91a92007ad158 still has dependencies, will retry
internet-gateway:igw-01651dd29ac96747c  still has dependencies, will retry
security-group:sg-0483e837c3da32348     still has dependencies, will retry
security-group:sg-0b5bbef3e0e7591b8     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-0b5bbef3e0e7591b8
        route-table:rtb-035bf1b6f57fc288d
        subnet:subnet-093f91a92007ad158
        security-group:sg-0483e837c3da32348
        vpc:vpc-0e992983ffe364f28
        volume:vol-0c503050728ece318
        volume:vol-0d04a01a4ab74dce6
        dhcp-options:dopt-027089d02315d1701
        internet-gateway:igw-01651dd29ac96747c
volume:vol-0c503050728ece318    still has dependencies, will retry
subnet:subnet-093f91a92007ad158 still has dependencies, will retry
volume:vol-0d04a01a4ab74dce6    still has dependencies, will retry
internet-gateway:igw-01651dd29ac96747c  still has dependencies, will retry
security-group:sg-0483e837c3da32348     still has dependencies, will retry
security-group:sg-0b5bbef3e0e7591b8     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-0b5bbef3e0e7591b8
        security-group:sg-0483e837c3da32348
        route-table:rtb-035bf1b6f57fc288d
        subnet:subnet-093f91a92007ad158
        vpc:vpc-0e992983ffe364f28
        volume:vol-0c503050728ece318
        volume:vol-0d04a01a4ab74dce6
        internet-gateway:igw-01651dd29ac96747c
        dhcp-options:dopt-027089d02315d1701
subnet:subnet-093f91a92007ad158 still has dependencies, will retry
volume:vol-0d04a01a4ab74dce6    ok
internet-gateway:igw-01651dd29ac96747c  still has dependencies, will retry
volume:vol-0c503050728ece318    ok
security-group:sg-0483e837c3da32348     still has dependencies, will retry
security-group:sg-0b5bbef3e0e7591b8     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-0b5bbef3e0e7591b8
        route-table:rtb-035bf1b6f57fc288d
        subnet:subnet-093f91a92007ad158
        security-group:sg-0483e837c3da32348
        vpc:vpc-0e992983ffe364f28
        dhcp-options:dopt-027089d02315d1701
        internet-gateway:igw-01651dd29ac96747c
subnet:subnet-093f91a92007ad158 still has dependencies, will retry
internet-gateway:igw-01651dd29ac96747c  still has dependencies, will retry
security-group:sg-0b5bbef3e0e7591b8     still has dependencies, will retry
security-group:sg-0483e837c3da32348     ok
Not all resources deleted; waiting before reattempting deletion
        vpc:vpc-0e992983ffe364f28
        internet-gateway:igw-01651dd29ac96747c
        dhcp-options:dopt-027089d02315d1701
        security-group:sg-0b5bbef3e0e7591b8
        route-table:rtb-035bf1b6f57fc288d
        subnet:subnet-093f91a92007ad158
subnet:subnet-093f91a92007ad158 still has dependencies, will retry
internet-gateway:igw-01651dd29ac96747c  ok
security-group:sg-0b5bbef3e0e7591b8     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-027089d02315d1701
        security-group:sg-0b5bbef3e0e7591b8
        route-table:rtb-035bf1b6f57fc288d
        subnet:subnet-093f91a92007ad158
        vpc:vpc-0e992983ffe364f28
subnet:subnet-093f91a92007ad158 ok
security-group:sg-0b5bbef3e0e7591b8     ok
route-table:rtb-035bf1b6f57fc288d       ok
vpc:vpc-0e992983ffe364f28       ok
dhcp-options:dopt-027089d02315d1701     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
```

- Ensure there is nothing running.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoClusterSetupOnAwsUsingKops29.png)

### 16. Building docker images

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/BuildingDockerImages.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/BuildingDockerImages2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/BuildingDockerImages3.png)

### 17. Demo: Building docker images

- `Installing Docker in Ubuntu` is explained in the [8. Demo: Jenkins installation](https://documentation.peelmicro.info/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker.html#_8-demo-jenkins-installation) chapter of the [Learn DevOps: CI/CD with Jenkins using Pipelines and Docker](https://www.udemy.com/learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/) Udemy course.

- Ensure `Docker` is install.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker

Usage:  docker COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default "/root/.docker")
  -D, --debug              Enable debug mode
      --help               Print usage
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Management Commands:
  container   Manage containers
  image       Manage images
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker COMMAND --help' for more information on a command.
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker --version
Docker version 17.05.0-ce, build 89658be

```

- Clone the Docker demo repository

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training# mkdir learn-devops-the-complete-kubernetes-course
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training# cd learn-devops-the-complete-kubernetes-course
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course# ls
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course# git clone https://github.com/peelmicro/docker-demo
Cloning into 'docker-demo'...
remote: Enumerating objects: 67, done.
remote: Total 67 (delta 0), reused 0 (delta 0), pack-reused 67
Unpacking objects: 100% (67/67), done.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course# cd docker-demo/
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# ll
total 68
drwxr-xr-x 5 root root  4096 Mar 16 10:36 ./
drwxr-xr-x 3 root root  4096 Mar 16 10:36 ../
drwxr-xr-x 8 root root  4096 Mar 16 10:36 .git/
-rw-r--r-- 1 root root    80 Mar 16 10:36 Dockerfile
-rw-r--r-- 1 root root   356 Mar 16 10:36 docker-compose.yml
-rw-r--r-- 1 root root  1055 Mar 16 10:36 index-db.js
-rw-r--r-- 1 root root   316 Mar 16 10:36 index.js
drwxr-xr-x 2 root root  4096 Mar 16 10:36 misc/
-rw-r--r-- 1 root root 26116 Mar 16 10:36 package-lock.json
-rw-r--r-- 1 root root   397 Mar 16 10:36 package.json
drwxr-xr-x 2 root root  4096 Mar 16 10:36 test/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# cat Dockerfile
FROM node:4.6
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo#
```

- Create the Docker image

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker build .
Sending build context to Docker daemon  207.9kB
Step 1/6 : FROM node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8e946524c73a
Step 3/6 : ADD . /app
 ---> 595ace78154c
Removing intermediate container 1b9f8f0e5126
Step 4/6 : RUN npm install
 ---> Running in 6dc811c981eb
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info preinstall myapp@0.0.1
npm info attempt registry request try #1 at 10:49:16 AM
.
.
.
npm info build /app/node_modules/express
npm info linkStuff express@4.16.4
npm info install express@4.16.4
npm info postinstall express@4.16.4
npm info build /app
npm info linkStuff myapp@0.0.1
npm info install myapp@0.0.1
npm info postinstall myapp@0.0.1
npm info prepublish myapp@0.0.1
ms@2.1.1 node_modules/ms

inherits@2.0.3 node_modules/inherits

http-errors@1.7.2 node_modules/http-errors
+-- toidentifier@1.0.0
+-- setprototypeof@1.1.1
+-- statuses@1.5.0
+-- depd@1.1.2

mysql@2.16.0 node_modules/mysql
+-- safe-buffer@5.1.2
+-- sqlstring@2.3.1
+-- bignumber.js@4.1.0
+-- readable-stream@2.3.6 (process-nextick-args@2.0.0, string_decoder@1.1.1, util-deprecate@1.0.2, core-util-is@1.0.2, isarray@1.0.0)

mocha@5.2.0 node_modules/mocha
+-- browser-stdout@1.3.1
+-- escape-string-regexp@1.0.5
+-- commander@2.15.1
+-- he@1.1.1
+-- growl@1.10.5
+-- supports-color@5.4.0 (has-flag@3.0.0)
+-- debug@3.1.0 (ms@2.0.0)
+-- diff@3.5.0
+-- minimatch@3.0.4 (brace-expansion@1.1.11)
+-- glob@7.1.2 (path-is-absolute@1.0.1, fs.realpath@1.0.0, inflight@1.0.6, once@1.4.0)
+-- mkdirp@0.5.1 (minimist@0.0.8)

express@4.16.4 node_modules/express
+-- escape-html@1.0.3
+-- array-flatten@1.1.1
+-- setprototypeof@1.1.0
+-- cookie-signature@1.0.6
+-- utils-merge@1.0.1
+-- content-type@1.0.4
+-- encodeurl@1.0.2
+-- merge-descriptors@1.0.1
+-- methods@1.1.2
+-- content-disposition@0.5.2
+-- cookie@0.3.1
+-- etag@1.8.1
+-- range-parser@1.2.0
+-- parseurl@1.3.2
+-- fresh@0.5.2
+-- vary@1.1.2
+-- path-to-regexp@0.1.7
+-- serve-static@1.13.2
+-- safe-buffer@5.1.2
+-- statuses@1.4.0
+-- depd@1.1.2
+-- qs@6.5.2
+-- on-finished@2.3.0 (ee-first@1.1.1)
+-- finalhandler@1.1.1 (unpipe@1.0.0)
+-- proxy-addr@2.0.4 (forwarded@0.1.2, ipaddr.js@1.8.0)
+-- send@0.16.2 (ms@2.0.0, destroy@1.0.4, http-errors@1.6.3, mime@1.4.1)
+-- debug@2.6.9 (ms@2.0.0)
+-- accepts@1.3.5 (negotiator@0.6.1, mime-types@2.1.22)
+-- type-is@1.6.16 (media-typer@0.3.0, mime-types@2.1.22)
+-- body-parser@1.18.3 (http-errors@1.6.3, bytes@3.0.0, raw-body@2.3.3, iconv-lite@0.4.23)
npm info ok
 ---> 585eaca1e7f7
Removing intermediate container 6dc811c981eb
Step 5/6 : EXPOSE 3000
 ---> Running in e1a3b503a2a7
 ---> 7135564b26ba
Removing intermediate container e1a3b503a2a7
Step 6/6 : CMD npm start
 ---> Running in d33b69a19a40
 ---> 50cc90a8726f
Removing intermediate container d
```

- Run the docker container created

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker run -p 3000:3000 -t 50cc90a8726f
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info prestart myapp@0.0.1
npm info start myapp@0.0.1

> myapp@0.0.1 start /app
> node index.js
```

- Open another terminal and run this `curl` command to ensure the container is running properly

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl localhost:3000
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

### 18. Docker Image Registry

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DockerImageRegistry.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DockerImageRegistry2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DockerImageRegistry3.png)

- We can get more tips about docker on [The Twelve-Facto App](https://12factor.net/)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DockerImageRegistry4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DockerImageRegistry5.png)

### 19. Demo: Pushing Docker Image

- Login to the `Docker Hub`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: peelmicro
Password:
Login Succeeded
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo
```

- We are going to use the `docker-nodejs-demo` repository created on [Docker Hub](https://hub.docker.com/)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPushingDockerImage.png)

- Rename the current image to the name of the repository on Docker Hub.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker tag 50cc90a8726f peelmicro/docker-nodejs-demo
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker images
REPOSITORY                     TAG                                        IMAGE ID            CREATED             SIZE
peelmicro/docker-nodejs-demo   latest                                     50cc90a8726f        18 minutes ago      659MB
```

- Push the current image to `Docker Hub`

```bash
76526b7f3f7a: Pushed
fd47db2e8842: Pushed
04edcc0615ff: Layer already exists
e1da644611ce: Layer already exists
d79093d63949: Layer already exists
87cbe568afdd: Layer already exists
787c930753b4: Layer already exists
9f17712cba0b: Layer already exists
223c0d04a137: Layer already exists
fe4c16cbf7a4: Layer already exists
latest: digest: sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f size: 2421
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPushingDockerImage2.png)

DemoPushingDockerImage3

DemoPushingDockerImage4

### 20. Running first app on Kubernetes

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RunningFirstAppOnKubernetes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RunningFirstAppOnKubernetes2.png)

- Useful commands

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RunningFirstAppOnKubernetes3.png)

### 21. Demo: Running first app on Kubernetes

- From now on, we are going to use the `cluster` created on the `Section: 8. Installing Kubernetes using kubeadm` of this course.

- Access the master server from the `Digital Ocean` server:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey ubuntu@167.99.192.20
Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 4.4.0-142-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

35 packages can be updated.
8 updates are security updates.


*** System restart required ***
Last login: Wed Feb 27 18:41:51 2019 from 68.183.44.204
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$ kubectl get pod,svc
NAME                                  READY   STATUS    RESTARTS   AGE
pod/hello-minikube-5c856cbf98-hh6j4   1/1     Running   0          16d

NAME                     TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    10.100.159.91   <none>        8080:32101/TCP   16d
service/kubernetes       ClusterIP   10.96.0.1       <none>        443/TCP          16d
```

- Fork the `https://github.com/wardviaene/kubernetes-course` repository

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningFirstAppOnKubernetes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningFirstAppOnKubernetes2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningFirstAppOnKubernetes3.png)

- Clone the new forked repository in the master server.

```bash
ubuntu@kubernetes-master:~$ mkdir training
ubuntu@kubernetes-master:~$ cd training
ubuntu@kubernetes-master:~/training$ mkdir learn-devops-the-complete-kubernetes-course
ubuntu@kubernetes-master:~/training$ cd learn-devops-the-complete-kubernetes-course
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course$ git clone https://github.com/peelmicro/kubernetes-course
Cloning into 'kubernetes-course'...
remote: Enumerating objects: 14, done.
remote: Counting objects: 100% (14/14), done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 322 (delta 4), reused 14 (delta 4), pack-reused 308
Receiving objects: 100% (322/322), 63.34 KiB | 0 bytes/s, done.
Resolving deltas: 100% (111/111), done.
Checking connectivity... done.
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course$ cd kubernetes-course/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ ll
ll: command not found
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ ls
affinity     configmap  deployment  external-dns  helm     istio     LICENSE         pod-lifecycle  postgres-operator  replication-controller  service-discovery  tolerations  volumes    wordpress-volumes
autoscaling  dashboard  elb-tls     first-app     ingress  kubeless  metrics-server  pod-presets    README.md          resourcequotas          statefulset        users        wordpress
```

- Edit the `helloworld.yml` kubernetes yaml file used to create the pod to put the `peelmicro` image.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ cat first-app/helloworld.yml
apiVersion: v1
kind: Pod
metadata:
  name: nodehelloworld.example.com
  labels:
    app: helloworld
spec:
  containers:
  - name: k8s-demo
    image: wardviaene/k8s-demo
    ports:
    - name: nodejs-port
      containerPort: 3000
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ vi first-app/helloworld.yml
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ cat first-app/helloworld.yml
apiVersion: v1
kind: Pod
metadata:
  name: nodehelloworld.example.com
  labels:
    app: helloworld
spec:
  containers:
  - name: k8s-demo
    image: peelmicro/docker-nodejs-demo
    ports:
    - name: nodejs-port
      containerPort: 3000
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- Create the pod using the following command

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f first-app/helloworld.yml
pod/nodehelloworld.example.com created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                              READY   STATUS    RESTARTS   AGE
hello-minikube-5c856cbf98-hh6j4   1/1     Running   0          16d
nodehelloworld.example.com        1/1     Running   0          22s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod nodehelloworld.example.com
Name:               nodehelloworld.example.com
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Sat, 16 Mar 2019 11:48:48 +0000
Labels:             app=helloworld
Annotations:        cni.projectcalico.org/podIP: 10.244.1.3/32
Status:             Running
IP:                 10.244.1.3
Containers:
  k8s-demo:
    Container ID:   docker://efdecb37f1c09214b8df698168fe1b0653c286cc4cae79060da253b084d06035
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sat, 16 Mar 2019 11:49:09 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age   From                         Message
  ----    ------     ----  ----                         -------
  Normal  Scheduled  110s  default-scheduler            Successfully assigned default/nodehelloworld.example.com to kubernetes-node-01
  Normal  Pulling    109s  kubelet, kubernetes-node-01  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled     90s   kubelet, kubernetes-node-01  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created    90s   kubelet, kubernetes-node-01  Created container
  Normal  Started    89s   kubelet, kubernetes-node-01  Started container
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can use `port-forward` to expose the pod on port `8081`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl port-forward nodehelloworld.example.com 8081:3000
Forwarding from 127.0.0.1:8081 -> 3000
Forwarding from [::1]:8081 -> 3000
```

- From other shell:

```bash
ubuntu@kubernetes-master:~$ curl localhost:8081
Hello World!ubuntu@kubernetes-master:~$
```

- We can also use a service to expose the pod.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl expose pod nodehelloworld.example.com --type=NodePort
The Service "nodehelloworld.example.com" is invalid: metadata.name: Invalid value: "nodehelloworld.example.com": a DNS-1035 label must consist of lower case alphanumeric characters or '-', start with an alphabetic character, and end with an alphanumeric character (e.g. 'my-name',  or 'abc-123', regex used for validation is '[a-z]([-a-z0-9]*[a-z0-9])?')
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl expose pod nodehelloworld.example.com --type=NodePort --name nodehelloworld-service
service/nodehelloworld-service exposed
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod,svc
NAME                                  READY   STATUS    RESTARTS   AGE
pod/hello-minikube-5c856cbf98-hh6j4   1/1     Running   0          16d
pod/nodehelloworld.example.com        1/1     Running   0          13m

NAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube           NodePort    10.100.159.91   <none>        8080:32101/TCP   16d
service/kubernetes               ClusterIP   10.96.0.1       <none>        443/TCP          16d
service/nodehelloworld-service   NodePort    10.96.89.244    <none>        3000:32410/TCP   105s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- From other shell:

```bash
ubuntu@kubernetes-master:~$ curl localhost:32410
Hello World!ubuntu@kubernetes-master:~$
```

- We can also access to the IP of the `master`: http://167.99.192.20:32410/

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningFirstAppOnKubernetes4.png)

- We can also access to the IP of the `node`: http://167.99.202.93:32410/

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningFirstAppOnKubernetes5.png)

### 22. Demo: Useful commands

- If we want to run a process (pod) that is not currently running with can start it by executing `kubectl attach podname`

```bash
ubuntu@kubernetes-master:~$ kubectl attach nodehelloworld.example.com
Defaulting container name to k8s-demo.
Use 'kubectl describe pod/ -n default' to see all of the containers in this pod.
If you don't see a command prompt, try pressing enter.
```

- If we want to execute something inside a pod (container) we can run the `kubectl exec podname -- command`

```bash
ubuntu@kubernetes-master:~$ kubectl exec nodehelloworld.example.com -- ls /app
Dockerfile
docker-compose.yml
index-db.js
index.js
misc
node_modules
package-lock.json
package.json
test
ubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$ kubectl exec nodehelloworld.example.com -- touch /app/test.txt
ubuntu@kubernetes-master:~$ kubectl exec nodehelloworld.example.com -- ls /app
Dockerfile
docker-compose.yml
index-db.js
index.js
misc
node_modules
package-lock.json
package.json
test
test.txt
```

- In order to get information about a service we can use `kubectl describe service`

```bash
ubuntu@kubernetes-master:~$ kubectl get service
NAME                     TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
hello-minikube           NodePort    10.100.159.91   <none>        8080:32101/TCP   17d
kubernetes               ClusterIP   10.96.0.1       <none>        443/TCP          17d
nodehelloworld-service   NodePort    10.96.89.244    <none>        3000:32410/TCP   17h
ubuntu@kubernetes-master:~$ kubectl describe service nodehelloworld-service
Name:                     nodehelloworld-service
Namespace:                default
Labels:                   app=helloworld
Annotations:              <none>
Selector:                 app=helloworld
Type:                     NodePort
IP:                       10.96.89.244
Port:                     <unset>  3000/TCP
TargetPort:               3000/TCP
NodePort:                 <unset>  32410/TCP
Endpoints:                10.244.1.3:3000
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
ubuntu@kubernetes-master:~$
```

- We are going to run another pod by using the following command that allows us to run a shell pod and access it

```bash
ubuntu@kubernetes-master:~$ kubectl run -i --tty busybox --image=busybox --restart=Never -- sh
If you don't see a command prompt, try pressing enter.
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # telnet 10.244.1.3 3000
GET /

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
Date: Sun, 17 Mar 2019 05:34:44 GMT
Connection: close

Hello World!Connection closed by foreign host
/ # exit
pod default/busybox terminated (Error)
ubuntu@kubernetes-master:~$
```

### 23. Service with LoadBalancer

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ServiceWithLoadBalancer.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ServiceWithLoadBalancer2.png)

### 24. Demo: Service with AWS ELB LoadBalancer

```bash
ubuntu@kubernetes-master:~$ cd training/
ubuntu@kubernetes-master:~/training$ ls
learn-devops-the-complete-kubernetes-course
ubuntu@kubernetes-master:~/training$ cd learn-devops-the-complete-kubernetes-course/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course$ ls
kubernetes-course
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course$ cd kubernetes-course/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ ls
affinity     configmap  deployment  external-dns  helm     istio     LICENSE         pod-lifecycle  postgres-operator  replication-controller  service-discovery  tolerations  volumes    wordpress-volumes
autoscaling  dashboard  elb-tls     first-app     ingress  kubeless  metrics-server  pod-presets    README.md          resourcequotas          statefulset        users        wordpress
```

We have the `helloworld.yml` file to create the helloworld pod.

> first-app/helloworld.yml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nodehelloworld.example.com
  labels:
    app: helloworld
spec:
  containers:
    - name: k8s-demo
      image: peelmicro/docker-nodejs-demo
      ports:
        - name: nodejs-port
          containerPort: 3000
```

- And the `helloworld-service.yml` document to create the LoadBalancer service

> first-app/helloworld-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: helloworld-service
spec:
  ports:
    - port: 80
      targetPort: nodejs-port
      protocol: TCP
  selector:
    app: helloworld
  type: LoadBalancer
```

- As the pod is already create we need to create the LoadBalancer one

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f first-app/helloworld-service.yml
service/helloworld-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can check if the service has been executed

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get service
NAME                     TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
hello-minikube           NodePort       10.100.159.91    <none>        8080:32101/TCP   17d
helloworld-service       LoadBalancer   10.101.189.107   <pending>     80:30321/TCP     4m17s
kubernetes               ClusterIP      10.96.0.1        <none>        443/TCP          17d
nodehelloworld-service   NodePort       10.96.89.244     <none>        3000:32410/TCP   18h
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe service helloworld-service
Name:                     helloworld-service
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=helloworld
Type:                     LoadBalancer
IP:                       10.101.189.107
Port:                     <unset>  80/TCP
TargetPort:               nodejs-port/TCP
NodePort:                 <unset>  30321/TCP
Endpoints:                10.244.1.3:3000
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

- Open another shell and check if the service is running

```bash
ubuntu@kubernetes-master:~$ curl localhost:30321
Hello World!ubuntu@kubernetes-master:~$
```

- We can check if the service is running from the Master (http://167.99.192.20:30321/)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoServiceWithAwsElbLoadBalancer.png)

- And also from the Node (http://167.99.202.93:30321/)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoServiceWithAwsElbLoadBalancer2.png)

- `Installing LoadBalancer using Helm Charts with AWS` is explained in the [54. LoadBalancer Grafana Service](https://documentation.peelmicro.info/other/cicd-learn-devops-helm-helmfile-kubernetes-deployment.html#_54-loadbalancer-grafana-service) chapter of the [Learn DevOps Helm/Helmfile Kubernetes deployment](https://www.udemy.com/learn-devops-helm-helmfile-kubernetes-deployment/) Udemy course.

### 25. Recap: introduction to Kubernetes

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RecapIntroductionToKubernetes8.png)

## Section: 2. Kubernetes Basics

### 26. Node Architecture

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/NodeArchitecture.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/NodeArchitecture2.png)

### 27. Replication Controller

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ReplicationController.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ReplicationController2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ReplicationController3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ReplicationController4.png)

### 28. Demo: Replication Controller

- We need to start the minikube cluster on Windows

```powershell
PS C:\Windows\system32> minikube ip
There is a newer version of minikube available (v0.35.0).  Download it here:
https://github.com/kubernetes/minikube/releases/tag/v0.35.0

To disable this notification, run the following:
minikube config set WantUpdateNotification false
192.168.1.137
PS C:\Windows\system32> kubectl get nodes
Unable to connect to the server: dial tcp 192.168.0.108:8443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
PS C:\Windows\system32> kubectl config get-contexts
CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
*         minikube   minikube   minikube
PS C:\Windows\system32> minikube status
host: Running
kubelet:
apiserver: Stopped
kubectl: Misconfigured: pointing to stale minikube-vm.
To fix the kubectl context, run minikube update-context
PS C:\Windows\system32> minikube start
o   minikube v0.34.1 on windows (amd64)

!   Ignoring --vm-driver=virtualbox, as the existing "minikube" VM was created using the hyperv driver.
!   To switch drivers, you may create a new VM using `minikube start -p <name> --vm-driver=virtualbox`
!   Alternatively, you may delete the existing VM using `minikube delete -p minikube`

:   Re-using the currently running hyperv VM for "minikube" ...
:   Waiting for SSH access ...
-   "minikube" IP address is 192.168.1.137
-   Configuring Docker as the container runtime ...
-   Preparing Kubernetes environment ...
-   Pulling images required by Kubernetes v1.13.3 ...
:   Relaunching Kubernetes v1.13.3 using kubeadm ...
:   Waiting for kube-proxy to come back up ...
-   Verifying component health ......
+   kubectl is now configured to use "minikube"
=   Done! Thank you for using minikube!
PS C:\Windows\system32>
```

```powershell
PS C:\Windows\system32> kubectl get node
NAME       STATUS    ROLES     AGE       VERSION
minikube   Ready     master    19d       v1.13.3
```

- We need to modify the `replication-controller\helloworld-repl-controller.yml` document to put the peelmicro image.

> replication-controller\helloworld-repl-controller.yml

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: helloworld-controller
spec:
  replicas: 2
  selector:
    app: helloworld
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

- Create the pod by using the following command

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl create -f .\replication-controller\helloworld-repl-controller.yml
replicationcontroller "helloworld-controller" created
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>
```

- We can see now there are two pods created

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods
NAME                              READY     STATUS              RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running             1          19d
helloworld-controller-4rpd7       0/1       ContainerCreating   0          15h
helloworld-controller-gk9fg       0/1       ContainerCreating   0          15h
```

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods
NAME                              READY     STATUS    RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running   1          19d
helloworld-controller-4rpd7       1/1       Running   0          15h
helloworld-controller-gk9fg       1/1       Running   0          15h
```

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl describe pod helloworld-controller-4rpd7
Name:               helloworld-controller-4rpd7
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               minikube/192.168.1.137
Start Time:         Sun, 17 Mar 2019 01:59:49 +0000
Labels:             app=helloworld
Annotations:        <none>
Status:             Running
IP:                 172.17.0.6
Controlled By:      ReplicationController/helloworld-controller
Containers:
  docker-nodejs-demo:
    Container ID:   docker://bfafe9f086eae8bfe41ffd3d1803dd5db74b473d951b70663c5b380b34ded9aa
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 17 Mar 2019 02:01:59 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-hdz2x (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-hdz2x:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-hdz2x
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  16h   default-scheduler  Successfully assigned default/helloworld-controller-4rpd7 to minikube
  Normal  Pulling    16h   kubelet, minikube  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled     15h   kubelet, minikube  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created    15h   kubelet, minikube  Created container
  Normal  Started    15h   kubelet, minikube  Started container
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>
```

- If we remove one of the nodes, the replica controller automatically creates it again.

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl delete pod helloworld-controller-4rpd7
pod "helloworld-controller-4rpd7" deleted
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods                            NAME                              READY     STATUS        RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running       1          19d
helloworld-controller-4rpd7       1/1       Terminating   0          16h
helloworld-controller-gk9fg       1/1       Running       0          16h
helloworld-controller-ksqh6       1/1       Running       0          15h
```

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods
NAME                              READY     STATUS    RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running   1          19d
helloworld-controller-gk9fg       1/1       Running   0          16h
helloworld-controller-ksqh6       1/1       Running   0          15h
```

- We can scale to use more replicas by using the following command:

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl scale --replicas=4 -f .\replication-controller\helloworld-repl-controller.yml
replicationcontroller "helloworld-controller" scaled
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods
NAME                              READY     STATUS              RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running             1          19d
helloworld-controller-gk9fg       1/1       Running             0          16h
helloworld-controller-ksqh6       1/1       Running             0          15h
helloworld-controller-rp65x       1/1       Running             0          15h
helloworld-controller-xpjdp       0/1       ContainerCreating   0          15h
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>
```

- We can scale as well by using the following command:

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get rc
NAME                    DESIRED   CURRENT   READY     AGE
helloworld-controller   4         4         4         16h
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl scale --replicas=1 rc/helloworld-controller
replicationcontroller "helloworld-controller" scaled
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods
NAME                              READY     STATUS        RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running       1          19d
helloworld-controller-gk9fg       1/1       Running       0          16h
helloworld-controller-ksqh6       1/1       Terminating   0          16h
helloworld-controller-rp65x       1/1       Terminating   0          15h
helloworld-controller-xpjdp       1/1       Terminating   0          15h
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>
```

- We can remove the replica controller and the pods by using the following command:

```powershell
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl delete rc/helloworld-controller
replicationcontroller "helloworld-controller" deleted
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course> kubectl get pods
NAME                              READY     STATUS        RESTARTS   AGE
hello-minikube-574f46546c-9s7sk   1/1       Running       1          19d
helloworld-controller-gk9fg       1/1       Terminating   0          16h
PS C:\Work\Training\Pre\Docker\learn-devops-the-complete-kubernetes-course>
```

#### Replication Controller using Ubuntu

- Check if the cluster is running properly

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course$ kubectl get node
NAME                 STATUS   ROLES    AGE   VERSION
kubernetes-master    Ready    master   18d   v1.13.3
kubernetes-node-01   Ready    <none>   17d   v1.13.3
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course$
```

- We need to modify the `replication-controller\helloworld-repl-controller.yml` document to put the peelmicro image.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ vi replication-controller/helloworld-repl-controller.yml
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

> replication-controller/helloworld-repl-controller.yml

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: helloworld-controller
spec:
  replicas: 2
  selector:
    app: helloworld
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

- Create the pod by using the following command

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f replication-controller/helloworld-repl-controller.yml
replicationcontroller/helloworld-controller created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can see now there are two pods created

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
helloworld-controller-f9rmj       1/1     Running   0          100s
nodehelloworld.example.com        1/1     Running       0          41h
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod helloworld-controller-f9rmj
Name:               helloworld-controller-f9rmj
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Sun, 17 Mar 2019 18:20:05 +0000
Labels:             app=helloworld
Annotations:        cni.projectcalico.org/podIP: 10.244.1.5/32
Status:             Running
IP:                 10.244.1.5
Controlled By:      ReplicationController/helloworld-controller
Containers:
  docker-nodejs-demo:
    Container ID:   docker://4eb2f1cabfa2af502cdab06909997810e8579532683f4f2be4ab4a90aa733b56
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 17 Mar 2019 18:20:07 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age    From                         Message
  ----    ------     ----   ----                         -------
  Normal  Scheduled  2m55s  default-scheduler            Successfully assigned default/helloworld-controller-f9rmj to kubernetes-node-01
  Normal  Pulling    2m54s  kubelet, kubernetes-node-01  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled     2m53s  kubelet, kubernetes-node-01  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created    2m53s  kubelet, kubernetes-node-01  Created container
  Normal  Started    2m53s  kubelet, kubernetes-node-01  Started container
```

- If we remove one of the nodes, the replica controller automatically creates it again.

```bash
ubuntu@kubernetes-master:~$ kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
helloworld-controller-f9rmj       1/1     Running   0          11h
ubuntu@kubernetes-master:~$ kubectl delete pod helloworld-controller-f9rmj
pod "helloworld-controller-f9rmj" deleted
ubuntu@kubernetes-master:~$ kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
helloworld-controller-twhbs       1/1     Running   0          36s
nodehelloworld.example.com        1/1     Running       0          41h
ubuntu@kubernetes-master:~$
```

- We can scale to use more replicas by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl scale --replicas=4 -f replication-controller/helloworld-repl-controller.yml
replicationcontroller/helloworld-controller scaled
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
helloworld-controller-4rjtk       1/1     Running   0          13s
helloworld-controller-rcw6s       1/1     Running   0          13s
helloworld-controller-twhbs       1/1     Running   0          3m46s
nodehelloworld.example.com        1/1     Running       0          41h
```

- We can scale as well by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get rc
NAME                    DESIRED   CURRENT   READY   AGE
helloworld-controller   4         4         4       11h
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl scale --replicas=1 rc/helloworld-controller
replicationcontroller/helloworld-controller scaled
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                              READY   STATUS        RESTARTS   AGE
helloworld-controller-4rjtk       1/1     Terminating   0          2m16s
helloworld-controller-rcw6s       1/1     Terminating   0          2m16s
helloworld-controller-twhbs       1/1     Terminating   0          5m49s
nodehelloworld.example.com        1/1     Running       0          41h
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$

```

- We can tell that the `nodehelloworld.example.com` pod was the same as the `helloworld-controller-xxxxx` ones, because if we remove it, it is created automatically

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete pod nodehelloworld.example.com
pod "nodehelloworld.example.com" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                              READY   STATUS    RESTARTS   AGE
busybox                           0/1     Error     0          24h
hello-minikube-5c856cbf98-hh6j4   1/1     Running   0          18d
helloworld-controller-ggh5f       1/1     Running   0          44s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can remove the replica controller and the pods by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete rc/helloworld-controller
replicationcontroller "helloworld-controller" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                              READY   STATUS        RESTARTS   AGE
busybox                           0/1     Error         0          24h
hello-minikube-5c856cbf98-hh6j4   1/1     Running       0          18d
helloworld-controller-ggh5f       1/1     Terminating   0          2m48s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 29. Deployments

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Deployments.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Deployments2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Deployments3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Deployments4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Deployments5.png)

### 30. Demo: Deployments

- Modify the `deployment/helloworld.yml` document to put the `docker-nodejs-demo` image and create the deployment

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

```bash
ubuntu@kubernetes-master:~$ cd training/learn-devops-the-complete-kubernetes-course/kubernetes-course/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ vi deployment/helloworld.yml
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld.yml
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                                     READY   STATUS    RESTARTS   AGE
helloworld-deployment-78988ff857-2v897   1/1     Running   0          8s
helloworld-deployment-78988ff857-b9n54   1/1     Running   0          8s
helloworld-deployment-78988ff857-s5scd   1/1     Running   0          8s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get deployments
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
helloworld-deployment   3/3     3            3           29s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can get the `replica set` that are created when a `deployment` is executed.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get rs
NAME                               DESIRED   CURRENT   READY   AGE
helloworld-deployment-78988ff857   3         3         3       3m21s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can add the `--show-labels` parameter to see the labels for each 'pod`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods --show-labels
NAME                                     READY   STATUS    RESTARTS   AGE     LABELS
helloworld-deployment-78988ff857-2v897   1/1     Running   0          6m23s   app=helloworld,pod-template-hash=78988ff857
helloworld-deployment-78988ff857-b9n54   1/1     Running   0          6m23s   app=helloworld,pod-template-hash=78988ff857
helloworld-deployment-78988ff857-s5scd   1/1     Running   0          6m23s   app=helloworld,pod-template-hash=78988ff857
```

- We can see the `rollout` of the `deployment`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout status deployment/helloworld-deployment
deployment "helloworld-deployment" successfully rolled out
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to create a new version of the `peelmicro/docker-nodejs-demo` image.

- Modify the `index.js` document

```js
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World! V2");
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("V2 Example app listening at http://%s:%s", host, port);
});
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker build -t peelmicro/docker-nodejs-demo:v2 .
Sending build context to Docker daemon  207.9kB
Step 1/6 : FROM node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8e946524c73a
Step 3/6 : ADD . /app
 ---> Using cache
 ---> 2c48457434dc
Step 4/6 : RUN npm install
 ---> Using cache
 ---> e6b5c8b2c4de
Step 5/6 : EXPOSE 3000
 ---> Using cache
 ---> 3f25df3d30a5
Step 6/6 : CMD npm start
 ---> Using cache
 ---> 643a154d7603
Successfully built 643a154d7603
Successfully tagged peelmicro/docker-nodejs-demo:v2
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/docker-demo# docker push peelmicro/docker-nodejs-demo:v2
The push refers to a repository [docker.io/peelmicro/docker-nodejs-demo]
e178e71ecfc9: Pushed
e990dac00b29: Pushed
04edcc0615ff: Layer already exists
e1da644611ce: Layer already exists
d79093d63949: Layer already exists
87cbe568afdd: Layer already exists
787c930753b4: Layer already exists
9f17712cba0b: Layer already exists
223c0d04a137: Layer already exists
fe4c16cbf7a4: Layer already exists
v2: digest: sha256:cba57597a6440f798628e0d830d6789393442810e8832824495a53e9028c8be1 size: 2421
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDeployments.png)

- Expose the deployment to check what version is running

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl expose deployment helloworld-deployment --type=NodePort
service/helloworld-deployment exposed
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get service
NAME                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
helloworld-deployment   NodePort    10.103.247.249   <none>        3000:32689/TCP   48s
kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          18d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe service helloworld-deployment
Name:                     helloworld-deployment
Namespace:                default
Labels:                   app=helloworld
Annotations:              <none>
Selector:                 app=helloworld
Type:                     NodePort
IP:                       10.103.247.249
Port:                     <unset>  3000/TCP
TargetPort:               3000/TCP
NodePort:                 <unset>  32689/TCP
Endpoints:                10.244.1.10:3000,10.244.1.11:3000,10.244.1.12:3000
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can see it is showing `Hello World!`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://167.99.192.20:32689
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$

```

- We can update the image of the deployment.

```bash
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl set image deployment/helloworld-deployment docker-nodejs-demo=peelmicro/docker-nodejs-demo:V2
deployment.extensions/helloworld-deployment image updated
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout status deployment/helloworld-deployment
Waiting for deployment "helloworld-deployment" rollout to finish: 2 out of 3 new replicas have been updated...
```

- The problem was the tag is `v2` not `V2`. Putting the proper tag it works correctly.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl set image deployment/helloworld-deployment docker-nodejs-demo=peelmicro/docker-nodejs-demo:v2
deployment.extensions/helloworld-deployment image updated
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout status deployment/helloworld-deployment
deployment "helloworld-deployment" successfully rolled out
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://167.99.192.20:32689
Hello World! V2ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS    RESTARTS   AGE
pod/helloworld-deployment-6666d94d7-4w6th   1/1     Running   0          2m
pod/helloworld-deployment-6666d94d7-76lr4   1/1     Running   0          116s
pod/helloworld-deployment-6666d94d7-hrgfp   1/1     Running   0          2m

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/helloworld-deployment   NodePort    10.103.247.249   <none>        3000:32689/TCP   19m
service/kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          18d

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   3/3     3            3           47m

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-6666d94d7    3         3         3       2m
replicaset.apps/helloworld-deployment-6b4c967cf    0         0         0       8m53s
replicaset.apps/helloworld-deployment-78988ff857   0         0         0       47m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can the history of the deployment by executing:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout history deployment/helloworld-deployment
deployment.extensions/helloworld-deployment
REVISION  CHANGE-CAUSE
1         <none>
2         <none>
3         <none>

ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can undo the new version of the deployment by using

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout undo deployment/helloworld-deployment
deployment.extensions/helloworld-deployment rolled back
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://167.99.192.20:32689
Hello World! V2ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS             RESTARTS   AGE
pod/helloworld-deployment-6666d94d7-4w6th   1/1     Running            0          6m7s
pod/helloworld-deployment-6666d94d7-76lr4   1/1     Terminating        0          6m3s
pod/helloworld-deployment-6666d94d7-hrgfp   1/1     Running            0          6m7s
pod/helloworld-deployment-6b4c967cf-dkmmt   0/1     ImagePullBackOff   0          25s
pod/helloworld-deployment-6b4c967cf-nwzqv   0/1     ImagePullBackOff   0          25s

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/helloworld-deployment   NodePort    10.103.247.249   <none>        3000:32689/TCP   23m
service/kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          18d

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   2/3     2            2           51m

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-6666d94d7    2         2         2       6m8s
replicaset.apps/helloworld-deployment-6b4c967cf    2         2         0       13m
replicaset.apps/helloworld-deployment-78988ff857   0         0         0       51m
```

- We have to undo again to get the original version.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout undo deployment/helloworld-deployment
deployment.extensions/helloworld-deployment rolled back
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://167.99.192.20:32689
Hello World! V2ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS    RESTARTS   AGE
pod/helloworld-deployment-6666d94d7-4w6th   1/1     Running   0          6m29s
pod/helloworld-deployment-6666d94d7-8cz5x   1/1     Running   0          8s
pod/helloworld-deployment-6666d94d7-hrgfp   1/1     Running   0          6m29s

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/helloworld-deployment   NodePort    10.103.247.249   <none>        3000:32689/TCP   23m
service/kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          18d

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   3/3     3            3           52m

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-6666d94d7    3         3         3       6m29s
replicaset.apps/helloworld-deployment-6b4c967cf    0         0         0       13m
replicaset.apps/helloworld-deployment-78988ff857   0         0         0       52m
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout history deployment/helloworld-deployment
deployment.extensions/helloworld-deployment
REVISION  CHANGE-CAUSE
1         <none>
4         <none>
5         <none>

ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to leave only 2 revisions by editing the deployment

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDeployments2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDeployments3.png)

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl edit deployment/helloworld-deployment
deployment.extensions/helloworld-deployment edited
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl set image deployment/helloworld-deployment docker-nodejs-demo=peelmicro/docker-nodejs-demo:2
deployment.extensions/helloworld-deployment image updated
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout history deployment/helloworld-deployment
deployment.extensions/helloworld-deployment
REVISION  CHANGE-CAUSE
1         <none>
4         <none>
5         <none>
6         <none>

ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl rollout undo deployment/helloworld-deployment --to-revision=1
deployment.extensions/helloworld-deployment rolled back
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://167.99.192.20:32689
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 31. Services

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Services.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Services2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Services3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Services4.png)

### 32. Demo: Services

- Ensure nothing is running apart from the kubernetes service.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   18d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
apiVersion: v1
kind: Pod
metadata:
  name: nodehelloworld.example.com
  labels:
    app: helloworld
spec:
  containers:
  - name: docker-nodejs-demo
    image: peelmicro/docker-nodejs-demo
    ports:
    - name: nodejs-port
      containerPort: 3000
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f first-app/helloworld.yml
pod/nodehelloworld.example.com created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods
NAME                         READY   STATUS    RESTARTS   AGE
nodehelloworld.example.com   1/1     Running   0          13s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod nodehelloworld.example.com
Name:               nodehelloworld.example.com
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Mon, 18 Mar 2019 09:38:08 +0000
Labels:             app=helloworld
Annotations:        cni.projectcalico.org/podIP: 10.244.1.28/32
Status:             Running
IP:                 10.244.1.28
Containers:
  docker-nodejs-demo:
    Container ID:   docker://883cdcb4c97a342fe93858f184e6f43ffe9ab1e4bb30ad338159811ede461f3f
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 18 Mar 2019 09:38:10 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age   From                         Message
  ----    ------     ----  ----                         -------
  Normal  Scheduled  95s   default-scheduler            Successfully assigned default/nodehelloworld.example.com to kubernetes-node-01
  Normal  Pulling    94s   kubelet, kubernetes-node-01  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled     93s   kubelet, kubernetes-node-01  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created    93s   kubelet, kubernetes-node-01  Created container
  Normal  Started    93s   kubelet, kubernetes-node-01  Started container
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to execute the `first-app/helloworld-nodeport-service.yml` service

> first-app/helloworld-nodeport-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: helloworld-service
spec:
  ports:
    - port: 31001
      nodePort: 31001
      targetPort: nodejs-port
      protocol: TCP
  selector:
    app: helloworld
  type: NodePort
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f first-app/helloworld-nodeport-service.yml
service/helloworld-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods,svc
NAME                             READY   STATUS    RESTARTS   AGE
pod/nodehelloworld.example.com   1/1     Running   0          9m15s

NAME                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)           AGE
service/helloworld-service   NodePort    10.103.223.93   <none>        31001:31001/TCP   113s
service/kubernetes           ClusterIP   10.96.0.1       <none>        443/TCP           18d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- Ensure the services is running in `http://167.99.192.20:31001`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://167.99.192.20:31001
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe svc helloworld-service
Name:                     helloworld-service
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=helloworld
Type:                     NodePort
IP:                       10.103.223.93
Port:                     <unset>  31001/TCP
TargetPort:               nodejs-port/TCP
NodePort:                 <unset>  31001/TCP
Endpoints:                10.244.1.28:3000
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can also access the Endpoint created by the service inside the server where the cluster is running:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$  curl http://10.244.1.28:3000
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- If we delete the service and create it again the NodePort is the same, althought the IP is not the same one:

```bash
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete svc helloworld-service
service "helloworld-service" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f first-app/helloworld-nodeport-service.yml
service/helloworld-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe svc helloworld-service
Name:                     helloworld-service
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=helloworld
Type:                     NodePort
IP:                       10.105.234.147
Port:                     <unset>  31001/TCP
TargetPort:               nodejs-port/TCP
NodePort:                 <unset>  31001/TCP
Endpoints:                10.244.1.28:3000
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- Delete the service and the pod.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete svc helloworld-service
service "helloworld-service" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete pod/nodehelloworld.example.com
pod "nodehelloworld.example.com" deleted
```

### 33. Labels

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Labels.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Labels2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Labels3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Labels4.png)

### 34. Demo: NodeSelector using Labels

- We are going to use the `deployment/helloworld-nodeselector.yml` document to execute the `helloworld-deployment` deployment in the node with `hardware` iqual to `high-spec`

> deployment/helloworld-nodeselector.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
      nodeSelector:
        hardware: high-spec
```

- We can check the lables for the nodes by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get nodes --show-labels
NAME                 STATUS   ROLES    AGE   VERSION   LABELS
kubernetes-master    Ready    master   18d   v1.13.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=kubernetes-master,node-role.kubernetes.io/master=
kubernetes-node-01   Ready    <none>   18d   v1.13.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=kubernetes-node-01
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- As the `high-spec` label is none of the current labels, when the deployment is executed, even though the pods are created they are not available:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld-nodeselector.yml
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get deployments
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
helloworld-deployment   0/3     3            0           20s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe deployment helloworld-deployment
Name:                   helloworld-deployment
Namespace:              default
CreationTimestamp:      Mon, 18 Mar 2019 10:45:02 +0000
Labels:                 app=helloworld
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               app=helloworld
Replicas:               3 desired | 3 updated | 3 total | 0 available | 3 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  1 max unavailable, 1 max surge
Pod Template:
  Labels:  app=helloworld
  Containers:
   docker-nodejs-demo:
    Image:        peelmicro/docker-nodejs-demo
    Port:         3000/TCP
    Host Port:    0/TCP
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      False   MinimumReplicasUnavailable
OldReplicaSets:  <none>
NewReplicaSet:   helloworld-deployment-7965b99fdd (3/3 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  117s  deployment-controller  Scaled up replica set helloworld-deployment-7965b99fdd to 3
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get deployments
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
helloworld-deployment   0/3     3            0           2m53s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods
NAME                                     READY   STATUS    RESTARTS   AGE
helloworld-deployment-7965b99fdd-br4fn   0/1     Pending   0          3m5s
helloworld-deployment-7965b99fdd-dbsnq   0/1     Pending   0          3m5s
helloworld-deployment-7965b99fdd-m542q   0/1     Pending   0          3m5s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can see why the pod is not created and is running: `0/2 nodes are available: 2 node(s) didn't match node selector.`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod helloworld-deployment-7965b99fdd-br4fn
Name:               helloworld-deployment-7965b99fdd-br4fn
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               <none>
Labels:             app=helloworld
                    pod-template-hash=7965b99fdd
Annotations:        <none>
Status:             Pending
IP:
Controlled By:      ReplicaSet/helloworld-deployment-7965b99fdd
Containers:
  docker-nodejs-demo:
    Image:        peelmicro/docker-nodejs-demo
    Port:         3000/TCP
    Host Port:    0/TCP
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  hardware=high-spec
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                 From               Message
  ----     ------            ----                ----               -------
  Warning  FailedScheduling  48s (x8 over 4m9s)  default-scheduler  0/2 nodes are available: 2 node(s) didn't match node selector.
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can add the label to one of the nodes:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl label nodes kubernetes-node-01 hardware=high-spec
node/kubernetes-node-01 labeled
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get nodes --show-labels
NAME                 STATUS   ROLES    AGE   VERSION   LABELS
kubernetes-master    Ready    master   18d   v1.13.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=kubernetes-master,node-role.kubernetes.io/master=
kubernetes-node-01   Ready    <none>   18d   v1.13.3   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,hardware=high-spec,kubernetes.io/hostname=kubernetes-node-01
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- After a litte bit the deployment is executed and the pods are running

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get deployments
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
helloworld-deployment   3/3     3            3           10m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods
NAME                                     READY   STATUS    RESTARTS   AGE
helloworld-deployment-7965b99fdd-br4fn   1/1     Running   0          11m
helloworld-deployment-7965b99fdd-dbsnq   1/1     Running   0          11m
helloworld-deployment-7965b99fdd-m542q   1/1     Running   0          11m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod helloworld-deployment-7965b99fdd-br4fn
Name:               helloworld-deployment-7965b99fdd-br4fn
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Mon, 18 Mar 2019 10:54:13 +0000
Labels:             app=helloworld
                    pod-template-hash=7965b99fdd
Annotations:        cni.projectcalico.org/podIP: 10.244.1.30/32
Status:             Running
IP:                 10.244.1.30
Controlled By:      ReplicaSet/helloworld-deployment-7965b99fdd
Containers:
  docker-nodejs-demo:
    Container ID:   docker://6db93379c012ea023985ee643470ad07b61037a8b4dff23d741483d47fb20626
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 18 Mar 2019 10:54:16 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  hardware=high-spec
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                   From                         Message
  ----     ------            ----                  ----                         -------
  Warning  FailedScheduling  3m22s (x16 over 11m)  default-scheduler            0/2 nodes are available: 2 node(s) didn't match node selector.
  Normal   Scheduled         2m32s                 default-scheduler            Successfully assigned default/helloworld-deployment-7965b99fdd-br4fn to kubernetes-node-01
  Normal   Pulling           2m31s                 kubelet, kubernetes-node-01  pulling image "peelmicro/docker-nodejs-demo"
  Normal   Pulled            2m29s                 kubelet, kubernetes-node-01  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal   Created           2m29s                 kubelet, kubernetes-node-01  Created container
  Normal   Started           2m29s                 kubelet, kubernetes-node-01  Started container
```

- We can see which node the pos is running by executing:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods --output=wide
NAME                                     READY   STATUS    RESTARTS   AGE   IP            NODE                 NOMINATED NODE   READINESS GATES
helloworld-deployment-7965b99fdd-br4fn   1/1     Running   0          12m   10.244.1.30   kubernetes-node-01   <none>           <none>
helloworld-deployment-7965b99fdd-dbsnq   1/1     Running   0          12m   10.244.1.31   kubernetes-node-01   <none>           <none>
helloworld-deployment-7965b99fdd-m542q   1/1     Running   0          12m   10.244.1.29   kubernetes-node-01   <none>           <none>
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete deployment helloworld-deployment
deployment.extensions "helloworld-deployment" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods,deployment,svc
NAME                                         READY   STATUS        RESTARTS   AGE
pod/helloworld-deployment-7965b99fdd-br4fn   1/1     Terminating   0          15m
pod/helloworld-deployment-7965b99fdd-dbsnq   1/1     Terminating   0          15m
pod/helloworld-deployment-7965b99fdd-m542q   1/1     Terminating   0          15m

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   18d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 35. Healthchecks

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Healthchecks.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Healthchecks2.png)

### 36. Demo: Healthchecks

- We are going to use the `deployment/helloworld-healthcheck.yml` document to create the `livenessProbe` healthcheck.

> deployment/helloworld-healthcheck.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
          livenessProbe:
            httpGet:
              path: /
              port: nodejs-port
            initialDelaySeconds: 15
            timeoutSeconds: 30
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld-healthcheck.yml
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get deployment,pod
NAME                                          READY   UP-TO-DATE   AVAILABLE   AGE
deployment.extensions/helloworld-deployment   3/3     3            3           23s

NAME                                         READY   STATUS    RESTARTS   AGE
pod/helloworld-deployment-6ff6d65449-7sj47   1/1     Running   0          23s
pod/helloworld-deployment-6ff6d65449-kmt66   1/1     Running   0          23s
pod/helloworld-deployment-6ff6d65449-qdgqv   1/1     Running   0          23s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod/helloworld-deployment-6ff6d65449-7sj47
Name:               helloworld-deployment-6ff6d65449-7sj47
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Mon, 18 Mar 2019 12:23:59 +0000
Labels:             app=helloworld
                    pod-template-hash=6ff6d65449
Annotations:        cni.projectcalico.org/podIP: 10.244.1.32/32
Status:             Running
IP:                 10.244.1.32
Controlled By:      ReplicaSet/helloworld-deployment-6ff6d65449
Containers:
  docker-nodejs-demo:
    Container ID:   docker://aec4204aa23f386074885c4e4e2adc7c608325fff28862229a7e1de4ce17f53c
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 18 Mar 2019 12:24:01 +0000
    Ready:          True
    Restart Count:  0
    Liveness:       http-get http://:nodejs-port/ delay=15s timeout=30s period=10s #success=1 #failure=3
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age   From                         Message
  ----    ------     ----  ----                         -------
  Normal  Scheduled  79s   default-scheduler            Successfully assigned default/helloworld-deployment-6ff6d65449-7sj47 to kubernetes-node-01
  Normal  Pulling    78s   kubelet, kubernetes-node-01  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled     77s   kubelet, kubernetes-node-01  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created    77s   kubelet, kubernetes-node-01  Created container
  Normal  Started    77s   kubelet, kubernetes-node-01  Started container
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can edit the settings of the deployemnt using edit as usual:

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHealthchecks.png)

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl edit deployment.extensions/helloworld-deployment
Edit cancelled, no changes made.
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 37. Readiness Probe

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ReadinessProbe.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ReadinessProbe2.png)

ReadinessProbe3
ReadinessProbe4
ReadinessProbe5

### 38. Demo: Liveness and Readiness probe

- If we execute the the creation of a deployment with `livenessProbe` we can see that the pods are inmediatelly ready. There is no initial check with `livenessProbe`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld-healthcheck.yml && watch -n1 kubectl get pods
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoLivenessAndReadinessProbe.png)

- The `Readinessprobe` first waits if the `Readiness Probe` succeeds and the starts it.

- We are going to execute the `deployment/helloworld-liveness-readiness.yml` deployment.

> deployment/helloworld-liveness-readiness.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-readiness
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
          livenessProbe:
            httpGet:
              path: /
              port: nodejs-port
            initialDelaySeconds: 15
            timeoutSeconds: 30
          readinessProbe:
            httpGet:
              path: /
              port: nodejs-port
            initialDelaySeconds: 15
            timeoutSeconds: 30
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld-liveness-readiness.yml && watch -n1 kubectl get pods
deployment.extensions/helloworld-readiness created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoLivenessAndReadinessProbe2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoLivenessAndReadinessProbe3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoLivenessAndReadinessProbe4.png)

### 39. Pod State

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodState7.png)

### 40. Pod Lifecycle

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodLifecycle.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodLifecycle2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodLifecycle3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodLifecycle4.png)

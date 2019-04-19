# Learn DevOps: The Complete Kubernetes Course (Part 3)

> Github Repositories

- [learn-devops-the-complete-kubernetes-course](https://github.com/peelmicro/learn-devops-the-complete-kubernetes-course).
- [on-prem-or-cloud-agnostic-kubernetes](https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes).
- [kubernetes-coursee](https://github.com/peelmicro/kubernetes-course).
- [http-echo](https://github.com/peelmicro/http-echo).

The [Learn DevOps: The Complete Kubernetes Course ](https://www.udemy.com/learn-devops-the-complete-kubernetes-course//) Udemy course helps learn how Kubernetes will run and manage your containerized applications and to build, deploy, use, and maintain Kubernetes.

> Other parts:

- [Learn DevOps: The Complete Kubernetes Course (Part 1)](./cicd-learn-devops-the-complete-kubernetes-course-1.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 2)](./cicd-learn-devops-the-complete-kubernetes-course-2.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 4)](./cicd-learn-devops-the-complete-kubernetes-course-4.md)

> Table of contents
> [[toc]]

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

## Section: 4. Kubernetes Administration

### 80. The Kubernetes Master Services

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheKubernetesMasterServices.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheKubernetesMasterServices2.png)

### 81. Resource Quotas

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceQuotas.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceQuotas2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceQuotas3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceQuotas4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceQuotas5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceQuotas6.png)

### 82. Namespaces

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Namespaces.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Namespaces2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Namespaces3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Namespaces4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Namespaces5.png)

### 83. Demo: Namespace quotas

- We are going to use the `resourcequotas/resourcequota.yml` document to create the `myspace` namespace and the `compute-couta` and `object-couta` types of `ResourceQuota` pod.

> resourcequotas/resourcequota.yml

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: myspace
---
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: myspace
spec:
  hard:
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi
---
apiVersion: v1
kind: ResourceQuota
metadata:
  name: object-quota
  namespace: myspace
spec:
  hard:
    configmaps: "10"
    persistentvolumeclaims: "4"
    replicationcontrollers: "20"
    secrets: "10"
    services: "10"
    services.loadbalancers: "2"
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl create -f resourcequota.ymlnamespace/myspace created
resourcequota/compute-quota created
resourcequota/object-quota created
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get namespace
NAME          STATUS   AGE
default       Active   33d
kube-public   Active   33d
kube-system   Active   33d
myspace       Active   48s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get resourcequota
No resources found.
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get resourcequota --namespace=myspace
NAME            CREATED AT
compute-quota   2019-04-02T05:02:50Z
object-quota    2019-04-02T05:02:50Z
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$
```

- We are going to use the `resourcequotas/helloworld-no-quotas.yml` document to create a `deployment` with no quotas defined.

> resourcequotas/helloworld-no-quotas.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
  namespace: myspace
spec:
  replicas: 3
  template:
    metadata:
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
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl create -f helloworld-no-quotas.yml
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get deploy --namespace=myspace
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
helloworld-deployment   0/3     0            0           44s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get rs --namespace=myspace
NAME                              DESIRED   CURRENT   READY   AGE
helloworld-deployment-969d5cbd5   3         0         0       2m49s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl describe rs/helloworld-deployment-969d5cbd5 --namespace=myspace
Name:           helloworld-deployment-969d5cbd5
Namespace:      myspace
Selector:       app=helloworld,pod-template-hash=969d5cbd5
Labels:         app=helloworld
                pod-template-hash=969d5cbd5
Annotations:    deployment.kubernetes.io/desired-replicas: 3
                deployment.kubernetes.io/max-replicas: 4
                deployment.kubernetes.io/revision: 1
Controlled By:  Deployment/helloworld-deployment
Replicas:       0 current / 3 desired
Pods Status:    0 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=helloworld
           pod-template-hash=969d5cbd5
  Containers:
   k8s-demo:
    Image:        wardviaene/k8s-demo
    Port:         3000/TCP
    Host Port:    0/TCP
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type             Status  Reason
  ----             ------  ------
  ReplicaFailure   True    FailedCreate
Events:
  Type     Reason        Age                  From                   Message
  ----     ------        ----                 ----                   -------
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-226vp" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-msrr7" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-7nmct" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-l2t2z" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-8l75l" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-vskfw" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-l5kmc" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m57s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-jxb7q" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  3m56s                replicaset-controller  Error creating: pods "helloworld-deployment-969d5cbd5-h8sls" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
  Warning  FailedCreate  74s (x7 over 3m55s)  replicaset-controller  (combined from similar events): Error creating: pods "helloworld-deployment-969d5cbd5-5vvlm" is forbidden: failed quota: compute-quota: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl delete deploy/helloworld-deployment --namespace=myspace
deployment.extensions "helloworld-deployment" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get rs --namespace=myspace                        No resources found.
```

- We are going to use the `resourcequotas/helloworld-with-quotas.yml` document to create a `deployment` with quotas defined.

> resourcequotas/helloworld-with-quotas.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
  namespace: myspace
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
          resources:
            requests:
              cpu: 200m
              memory: 0.5Gi
            limits:
              cpu: 400m
              memory: 1Gi
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl create -f helloworld-with-quotas.yml              deployment.extensions/helloworld-deployment created
```

- Even though 3 replicas were required only 2 have been created because the third one is outside the boundaries defined in the `ResourceQuota`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get pod --namespace=myspace
NAME                                    READY   STATUS    RESTARTS   AGE
helloworld-deployment-bbf665cb8-nxsmh   1/1     Running   0          24s
helloworld-deployment-bbf665cb8-sn27t   1/1     Running   0          24s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get rs --namespace=myspace
NAME                              DESIRED   CURRENT   READY   AGE
helloworld-deployment-bbf665cb8   3         2         2       3m57s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl describe rs/helloworld-deployment-bbf665cb8 --namespace=myspace
Name:           helloworld-deployment-bbf665cb8
Namespace:      myspace
Selector:       app=helloworld,pod-template-hash=bbf665cb8
Labels:         app=helloworld
                pod-template-hash=bbf665cb8
Annotations:    deployment.kubernetes.io/desired-replicas: 3
                deployment.kubernetes.io/max-replicas: 4
                deployment.kubernetes.io/revision: 1
Controlled By:  Deployment/helloworld-deployment
Replicas:       2 current / 3 desired
Pods Status:    2 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=helloworld
           pod-template-hash=bbf665cb8
  Containers:
   k8s-demo:
    Image:      wardviaene/k8s-demo
    Port:       3000/TCP
    Host Port:  0/TCP
    Limits:
      cpu:     400m
      memory:  1Gi
    Requests:
      cpu:        200m
      memory:     512Mi
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type             Status  Reason
  ----             ------  ------
  ReplicaFailure   True    FailedCreate
Events:
  Type     Reason            Age                  From                   Message
  ----     ------            ----                 ----                   -------
  Normal   SuccessfulCreate  4m26s                replicaset-controller  Created pod: helloworld-deployment-bbf665cb8-nxsmh
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-mkzww" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Normal   SuccessfulCreate  4m26s                replicaset-controller  Created pod: helloworld-deployment-bbf665cb8-sn27t
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-9wz9z" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-nmqkc" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-vrf27" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-vhd94" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-5mpf2" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m26s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-fbm29" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m25s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-62hdr" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      4m25s                replicaset-controller  Error creating: pods "helloworld-deployment-bbf665cb8-7mthr" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
  Warning  FailedCreate      96s (x8 over 4m25s)  replicaset-controller  (combined from similar events): Error creating: pods "helloworld-deployment-bbf665cb8-cg8bx" is forbidden: exceeded quota: compute-quota, requested: limits.memory=1Gi,requests.memory=512Mi, used: limits.memory=2Gi,requests.memory=1Gi, limited: limits.memory=2Gi,requests.memory=1Gi
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get quota --namespace=myspace
NAME            CREATED AT
compute-quota   2019-04-02T05:02:50Z
object-quota    2019-04-02T05:02:50Z
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl describe quota/compute-quota --namespace=myspace  Name:            compute-quota
Namespace:       myspace
Resource         Used  Hard
--------         ----  ----
limits.cpu       800m  2
limits.memory    2Gi   2Gi
requests.cpu     400m  1
requests.memory  1Gi   1Gi
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl delete -f helloworld-with-quotas.yml              deployment.extensions "helloworld-deployment" deleted
```

- We are going to use the `resourcequotas/defaults.yml` document to create a `LimitRange` with quotas defined.

> resourcequotas/defaults.yml

```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: limits
  namespace: myspace
spec:
  limits:
    - default:
        cpu: 200m
        memory: 512Mi
      defaultRequest:
        cpu: 100m
        memory: 256Mi
      type: Container
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl create -f defaults.yml                            limitrange/limits created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl describe limits/limits --namespace=myspace        Name:       limits
Namespace:  myspace
Type        Resource  Min  Max  Default Request  Default Limit  Max Limit/Request Ratio
----        --------  ---  ---  ---------------  -------------  -----------------------
Container   memory    -    -    256Mi            512Mi          -
Container   cpu       -    -    100m             200m           -
```

- The deployment with no quotas has now been created with success:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl create -f helloworld-no-quotas.yml
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl get pods --namespace=myspace                      NAME                                    READY   STATUS    RESTARTS   AGE
helloworld-deployment-969d5cbd5-57g9j   1/1     Running   0          22s
helloworld-deployment-969d5cbd5-qchpx   1/1     Running   0          22s
helloworld-deployment-969d5cbd5-zp655   1/1     Running   0          23s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl delete -f helloworld-no-quotas.yml
deployment.extensions "helloworld-deployment" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl delete -f defaults.yml
limitrange "limits" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/resourcequotas$ kubectl delete -f resourcequota.yml
namespace "myspace" deleted
resourcequota "compute-quota" deleted
resourcequota "object-quota" deleted
```

### 84. User Management

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/UserManagement.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/UserManagement2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/UserManagement3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/UserManagement4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/UserManagement5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/UserManagement6.png)

### 85. Demo: Adding Users

- We are going to generate a new RSA key

```bash
ubuntu@kubernetes-master:~$ openssl genrsa -out edward.pem 2048
Generating RSA private key, 2048 bit long modulus
...+++
........................................................................+++
e is 65537 (0x10001)
```

- We are going to create a new certificate request where the login has been specified the user login and group

```bash
ubuntu@kubernetes-master:~$ openssl req -new -key edward.pem -out edward-csr.pem -subj "/CN=edward/O=myteam/"
ubuntu@kubernetes-master:~$
```

- We are going to create a new certificate

```bash
openssl x509 -req -in edward-csr.pem -CA ca.crt -CAkey ca.key -CAcreateserial -out edward.crt -days 10000
```

- It is not working in this server becuase `ca.crt` cannot be found

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers.png)

- We need to copy the certificate and the private key created

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers2.png)

- We need to modify the `~./kube/config` document to use the new certificate and key

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers4.png)

- We need to paste the key in the `~/.minikube/edward.key` document

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers6.png)

- We need to paste the key in the `~/.minikube/edward.crt` document

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers8.png)

- Now the cluster is using the new user and the new certificate

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAddingUsers10.png)

### 86. RBAC

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBAC10.png)

### 87. Demo: RBAC

- We need to create the AWS Cluster again.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0403 04:22:30.149454   27605 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0403 04:22:30.268815   27605 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0403 04:22:30.922684   27605 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0403 04:22:32.892966   27605 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0403 04:22:33.269317   27605 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0403 04:22:33.461266   27605 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0403 04:22:33.594023   27605 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0403 04:22:33.630235   27605 executor.go:103] Tasks: 73 done / 73 total; 0 can run
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
        Tags                    {k8s.io/role/node: 1, Name: nodes.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: nodes}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:nodes.kubernetes.peelmicro.com

  DHCPOptions/kubernetes.peelmicro.com
        DomainName              eu-central-1.compute.internal
        DomainNameServers       AmazonProvidedDNS
        Shared                  false
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

  EBSVolume/a.etcd-events.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {k8s.io/etcd/events: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-events.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

  EBSVolume/a.etcd-main.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-main.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/main: a/a, k8s.io/role/master: 1}

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
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

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
        Tags                    {KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, kubernetes.io/role/elb: 1, SubnetType: Public, Name: eu-central-1a.kubernetes.peelmicro.com}

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
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0403 04:23:56.983165   27629 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0403 04:23:57.528369   27629 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0403 04:23:57.632754   27629 vfs_castore.go:735] Issuing new certificate: "ca"
I0403 04:23:57.965406   27629 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0403 04:23:59.952092   27629 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0403 04:24:00.310394   27629 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0403 04:24:00.544302   27629 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0403 04:24:00.908811   27629 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0403 04:24:01.691687   27629 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0403 04:24:01.738193   27629 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0403 04:24:01.781742   27629 vfs_castore.go:735] Issuing new certificate: "master"
I0403 04:24:01.967105   27629 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0403 04:24:02.044968   27629 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0403 04:24:02.186049   27629 vfs_castore.go:735] Issuing new certificate: "kops"
I0403 04:24:02.441478   27629 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0403 04:24:02.745208   27629 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0403 04:24:02.755869   27629 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0403 04:24:13.189545   27629 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0403 04:24:13.766228   27629 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0403 04:24:13.766469   27629 dns.go:153] Pre-creating DNS records
I0403 04:24:16.386262   27629 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.
```

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
```

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
ip-172-20-36-108.eu-central-1.compute.internal  node    True
ip-172-20-43-235.eu-central-1.compute.internal  master  True
ip-172-20-56-84.eu-central-1.compute.internal   node    True

Your cluster kubernetes.peelmicro.com is ready
```

- We need to retrieve the key and certificate from kops

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws s3 sync s3://kubernetes.peelmicro.com/kubernetes.peelmicro.com/pki/private/ca/ ca-key
download: s3://kubernetes.peelmicro.com/kubernetes.peelmicro.com/pki/private/ca/6675519223935684468666002372.key to ca-key/6675519223935684468666002372.key
download: s3://kubernetes.peelmicro.com/kubernetes.peelmicro.com/pki/private/ca/keyset.yaml to ca-key/keyset.yaml
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws s3 sync s3://kubernetes.peelmicro.com/kubernetes.peelmicro.com/pki/issued/ca/ ca-crt
download: s3://kubernetes.peelmicro.com/kubernetes.peelmicro.com/pki/issued/ca/6675519223935684468666002372.crt to ca-crt/6675519223935684468666002372.crt
download: s3://kubernetes.peelmicro.com/kubernetes.peelmicro.com/pki/issued/ca/keyset.yaml to ca-crt/keyset.yaml
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mv ca-key/*.key ca.key
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mv ca-crt/*.crt ca.crt
```

- Ensure `openssl` is installed

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt install openssl
Reading package lists... Done
Building dependency tree
Reading state information... Done
openssl is already the newest version (1.1.0g-2ubuntu4.3).
0 upgraded, 0 newly installed, 0 to remove and 35 not upgraded.
```

- Create a new RSA key

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# openssl genrsa -out juan.pem 2048
Generating RSA private key, 2048 bit long modulus
.....................................+++
..................................................................+++
e is 65537 (0x010001)
```

- Create a new certificate request

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# openssl req -new -key juan.pem -out juan-csr.pem -subj "/CN=juan/O=myteam/"
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls juan*
juan-csr.pem  juan.pem
```

- Assign the new certificate using the key

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# openssl x509 -req -in juan-csr.pem -CA ca.crt -CAkey ca.key -CAcreateserial -out juan.crt -days 10000
Signature ok
subject=CN = juan, O = myteam
Getting CA Private Key
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls juan*
juan-csr.pem  juan.crt  juan.pem
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We new to create a new context by adding entries to the kube config file.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config set-credentials juan --client-certificate=juan.crt --client-key=juan.pem
User "juan" set.
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config set-context juan --cluster=kubernetes.peelmicro.com --user juan
Context "juan" created.
```

- We can see the config file

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config view
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://api.kubernetes.peelmicro.com
  name: kubernetes.peelmicro.com
contexts:
- context:
    cluster: kubernetes.peelmicro.com
    user: juan
  name: juan
- context:
    cluster: kubernetes.peelmicro.com
    user: kubernetes.peelmicro.com
  name: kubernetes.peelmicro.com
current-context: kubernetes.peelmicro.com
kind: Config
preferences: {}
users:
- name: juan
  user:
    client-certificate: /root/juan.crt
    client-key: /root/juan.pem
- name: kubernetes.peelmicro.com
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
    password: EORkXBPe2xemfZljk9y01buyVTeLv1vc
    username: admin
- name: kubernetes.peelmicro.com-basic-auth
  user:
    password: EORkXBPe2xemfZljk9y01buyVTeLv1vc
    username: admin
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We can see the contexts available

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config get-contexts
CURRENT   NAME                       CLUSTER                    AUTHINFO                   NAMESPACE
          juan                       kubernetes.peelmicro.com   juan
*         kubernetes.peelmicro.com   kubernetes.peelmicro.com   kubernetes.peelmicro.com

```

- We are still using the `admin` user, for instance when executing the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get nodes
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-36-108.eu-central-1.compute.internal   Ready    node     19m   v1.10.13
ip-172-20-43-235.eu-central-1.compute.internal   Ready    master   20m   v1.10.13
ip-172-20-56-84.eu-central-1.compute.internal    Ready    node     19m   v1.10.13
```

- We can change the user by executing the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config use-context juan
Switched to context "juan".
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config get-contexts
CURRENT   NAME                       CLUSTER                    AUTHINFO                   NAMESPACE
*         juan                       kubernetes.peelmicro.com   juan
          kubernetes.peelmicro.com   kubernetes.peelmicro.com   kubernetes.peelmicro.com
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get nodes
Error from server (Forbidden): nodes is forbidden: User "juan" cannot list nodes at the cluster scope
```

- If we have to try to see the cluster we are not allowed because the user `juan` doesn't have permission yet. The user as authenticated but is not authorised yet.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get nodes
Error from server (Forbidden): nodes is forbidden: User "juan" cannot list nodes at the cluster scope.
```

- We need to change contexts again to use an user that can give permission to the user `juan`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config use-context  kubernetes.peelmicro.com
Switched to context "kubernetes.peelmicro.com".
```

- We are going to use the `users/admin-user.yaml` document to grant `admin` role permissions to the user `juan`

> users/admin-user.yaml

```bash
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: User
    name: "juan"
    apiGroup: rbac.authorization.k8s.io
```

- We need to execute it:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl create -f admin-user.yaml
clusterrolebinding.rbac.authorization.k8s.io/admin-user created
```

- If we change contexts to `juan` we can see the user has permission to see the nodes.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config use-context  juan
Switched to context "juan".
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config get-contexts
CURRENT   NAME                       CLUSTER                    AUTHINFO                   NAMESPACE
*         juan                       kubernetes.peelmicro.com   juan
          kubernetes.peelmicro.com   kubernetes.peelmicro.com   kubernetes.peelmicro.com
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get nodes
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-36-108.eu-central-1.compute.internal   Ready    node     32m   v1.10.13
ip-172-20-43-235.eu-central-1.compute.internal   Ready    master   34m   v1.10.13
ip-172-20-56-84.eu-central-1.compute.internal    Ready    node     32m   v1.10.13
```

- We are going to delete the `ClusterRoleBinding` created.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl config use-context  kubernetes.peelmicro.com
Switched to context "kubernetes.peelmicro.com".
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl delete -f admin-user.yaml
clusterrolebinding.rbac.authorization.k8s.io "admin-user" deleted
```

- We are going to use the `users/user.yaml` document to create the `pod-reader` role and assign it to the user `juan`

> users/user.yaml

```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: default
  name: pod-reader
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "watch", "list", "create", "update", "patch", "delete"]
  - apiGroups: ["extensions", "apps"]
    resources: ["deployments"]
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
---
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: read-pods
  namespace: default
subjects:
  - kind: User
    name: juan
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl create -f user.yaml
role.rbac.authorization.k8s.io/pod-reader created
rolebinding.rbac.authorization.k8s.io/read-pods created
```

- If we change the context to the user `juan` we can see what this user can do now.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl config use-context juan
Switched to context "juan".
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl get nodes
Error from server (Forbidden): nodes is forbidden: User "juan" cannot list nodes at the cluster scope
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl get pod
No resources found.
```

- The user can only manage `pods` in the `default` environment

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/users# kubectl get pod -n kube-system
Error from server (Forbidden): pods is forbidden: User "juan" cannot list pods in the namespace "kube-system"
```

### 88. Networking

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Networking.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Networking2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Networking3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Networking4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Networking5.png)

### 89. Node Maintenance

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/NodeMaintenance.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/NodeMaintenance2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/NodeMaintenance3.png)

### 90. Demo: Node Maintenance

- We have just one node

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodeMaintenance.png)

- We are going to create a deployment

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodeMaintenance2.png)

- We are going to drain the node by using `kubectl drain nameofnode`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodeMaintenance3.png)

- The pods and deployments belonging to the node are disabled

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodeMaintenance4.png)

### 91. High Availability

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/HighAvailability.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/HighAvailability2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/HighAvailability3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/HighAvailability4.png)

### 92. Demo: High Availability

- We can use kops to create a master in different zones:

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHighAvailability7.png)

### 93. TLS on ELB using Annotations

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TLSonELBUsingAnnotations.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TLSonELBUsingAnnotations2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TLSonELBUsingAnnotations3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TLSonELBUsingAnnotations4.png)

### 94. Demo: TLS on ELB

- We need to create a SSL Certificate. Browse to [AWS Management Console](https://eu-central-1.console.aws.amazon.com/console) and search for `certificate`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB3.png)

- We are going to create `helloworld.kubernetes.peelmicro.com`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB9.png)

- We can go to [Route 53](https://console.aws.amazon.com/route53/) to ensure the DNS has been created.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB11.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB12.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB13.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB14.png)

- We need to copy the ARN value.

- We are going to use the `elb-tls/helloworld.yml` document to create a new deployment.

> elb-tls/helloworld.yml

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
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

- We are going to use the `elb-tls/helloworld-service.yml` document to create a new deployment.

> elb-tls/helloworld-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: helloworld-service
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-ssl-cert: "arn:aws:acm:eu-central-1:972569889348:certificate/1d4a1720-51fd-4e58-8095-cc8abddfca96" #replace this value
    service.beta.kubernetes.io/aws-load-balancer-backend-protocol: "http"
    service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "443"
    service.beta.kubernetes.io/aws-load-balancer-connection-draining-enabled: "true"
    service.beta.kubernetes.io/aws-load-balancer-connection-draining-timeout: "60"
    service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags: "environment=dev,app=helloworld"
spec:
  ports:
    - name: http
      port: 80
      targetPort: nodejs-port
      protocol: TCP
    - name: https
      port: 443
      targetPort: nodejs-port
      protocol: TCP
  selector:
    app: helloworld
  type: LoadBalancer
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/elb-tls# kubectl create -f helloworld.yml
deployment.extensions/helloworld-deployment created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/elb-tls# kubectl create -f helloworld-service.yml
service/helloworld-service created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/elb-tls# kubectl get services -o wide
NAME                 TYPE           CLUSTER-IP      EXTERNAL-IP                                                                  PORT(S)                      AGE   SELECTOR
helloworld-service   LoadBalancer   100.65.230.45   aa2d72468563011e99626028dd101c9a-1591821906.eu-central-1.elb.amazonaws.com   80:32136/TCP,443:30539/TCP   56s   app=helloworld
kubernetes           ClusterIP      100.64.0.1      <none>                                                                       443/TCP                      12h   <none>
```

- We have to go back to `Route 53`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB15.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB16.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB17.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB18.png)

- We can go now to the Load Balancer

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB19.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB20.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB21.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB22.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB23.png)

- We can now test it

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/elb-tls# curl aa2d72468563011e99626028dd101c9a-1591821906.eu-central-1.elb.amazonaws.com
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/elb-tls#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/elb-tls# curl https://aa2d72468563011e99626028dd101c9a-1591821906.eu-central-1.elb.amazonaws.com
curl: (51) SSL: no alternative certificate subject name matches target host name 'aa2d72468563011e99626028dd101c9a-159Connection reset by 68.183.44.204 port 22
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl https://aa2d72468563011e99626028dd101c9a-1591821906.eu-central-1.elb.amazonaws.com -k
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl https://helloworld.kubernetes.peelmicro.com
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl helloworld.kubernetes.peelmicro.com
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We need to terminate the cluster:

```bash
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~# ^C
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190403042402                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190403042402
autoscaling-config      nodes.kubernetes.peelmicro.com-20190403042402                                           nodes.kubernetes.peelmicro.com-20190403042402
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-07b67c9820a785fc3
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-0c5bfab9c749d5e77
instance                nodes.kubernetes.peelmicro.com                                                          i-059d9c1b4bcee543a
instance                nodes.kubernetes.peelmicro.com                                                          i-0f52868b09694d1a6
internet-gateway        kubernetes.peelmicro.com                                                                igw-083b4c97ec6d31f8c
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
load-balancer                                                                                                   aa2d72468563011e99626028dd101c9a
route-table             kubernetes.peelmicro.com                                                                rtb-007ab600d9cbcdb90
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group                                                                                                  sg-00b854161b4394ca5
security-group          masters.kubernetes.peelmicro.com                                                        sg-0e2ec7830d974a5ff
security-group          nodes.kubernetes.peelmicro.com                                                          sg-078a333d7c9f90aec
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-04e232bdbfe5689cf
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0bcf3603d4ebaebaa
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-07fb28cb26783cc8e
vpc                     kubernetes.peelmicro.com                                                                vpc-0c0a521ef7c515096

load-balancer:aa2d72468563011e99626028dd101c9a  ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
route53-record:Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com. ok
.
.
.
        dhcp-options:dopt-07b67c9820a785fc3
        route-table:rtb-007ab600d9cbcdb90
        internet-gateway:igw-083b4c97ec6d31f8c
        vpc:vpc-0c0a521ef7c515096
subnet:subnet-04e232bdbfe5689cf ok
security-group:sg-00b854161b4394ca5     ok
internet-gateway:igw-083b4c97ec6d31f8c  ok
route-table:rtb-007ab600d9cbcdb90       ok
vpc:vpc-0c0a521ef7c515096       ok
dhcp-options:dopt-07b67c9820a785fc3     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTLSonELB24.png)

## Section: 5. Packaging and Deploying on Kubernetes

### 95. Introduction to Helm

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToHelm.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToHelm2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToHelm3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToHelm4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToHelm5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToHelm6.png)

### 96. Demo: Helm

- `Installing HELM` is initially explained in the [25. Materials: Install HELM binary and activate HELM user account in your cluster](https://documentation.peelmicro.info/other/cicd-learn-devops-helm-helmfile-kubernetes-deployment.html#_25-materials-install-helm-binary-and-activate-helm-user-account-in-your-cluster) chapter of the [Learn DevOps Helm/Helmfile Kubernetes deployment](https://www.udemy.com/learn-devops-helm-helmfile-kubernetes-deployment/) Udemy course.

- It can be also be installed by executing

**1. Install helm**

```
wget https://storage.googleapis.com/kubernetes-helm/helm-v2.11.0-linux-amd64.tar.gz
tar -xzvf helm-v2.11.0-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin/helm
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm.png)

```bash
ubuntu@kubernetes-master:~$ wget https://storage.googleapis.com/kubernetes-helm/helm-v2.11.0-linux-amd64.tar.gz
--2019-03-24 17:46:01--  https://storage.googleapis.com/kubernetes-helm/helm-v2.11.0-linux-amd64.tar.gz
Resolving storage.googleapis.com (storage.googleapis.com)... 216.58.214.16, 2a00:1450:4009:804::2010
Connecting to storage.googleapis.com (storage.googleapis.com)|216.58.214.16|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 19149273 (18M) [application/x-tar]
Saving to: ‘helm-v2.11.0-linux-amd64.tar.gz’

helm-v2.11.0-linux-amd64.tar.gz            100%[=======================================================================================>]  18.26M  46.3MB/s    in 0.4s

2019-03-24 17:46:02 (46.3 MB/s) - ‘helm-v2.11.0-linux-amd64.tar.gz’ saved [19149273/19149273]

ubuntu@kubernetes-master:~$ tar -xzvf helm-v2.11.0-linux-amd64.tar.gz
linux-amd64/
linux-amd64/tiller
linux-amd64/README.md
linux-amd64/helm
linux-amd64/LICENSE
ubuntu@kubernetes-master:~$ sudo mv linux-amd64/helm /usr/local/bin/helm
```

```bash
ubuntu@kubernetes-master:~$ helm -h
The Kubernetes package manager

To begin working with Helm, run the 'helm init' command:

        $ helm init

This will install Tiller to your running Kubernetes cluster.
It will also set up any necessary local configuration.

Common actions from this point include:

- helm search:    search for charts
- helm fetch:     download a chart to your local directory to view
- helm install:   upload the chart to Kubernetes
- helm list:      list releases of charts

Environment:
  $HELM_HOME          set an alternative location for Helm files. By default, these are stored in ~/.helm
  $HELM_HOST          set an alternative Tiller host. The format is host:port
  $HELM_NO_PLUGINS    disable plugins. Set HELM_NO_PLUGINS=1 to disable plugins.
  $TILLER_NAMESPACE   set an alternative Tiller namespace (default "kube-system")
  $KUBECONFIG         set an alternative Kubernetes configuration file (default "~/.kube/config")

Usage:
  helm [command]

Available Commands:
  completion  Generate autocompletions script for the specified shell (bash or zsh)
  create      create a new chart with the given name
  delete      given a release name, delete the release from Kubernetes
  dependency  manage a chart's dependencies
  fetch       download a chart from a repository and (optionally) unpack it in local directory
  get         download a named release
  history     fetch release history
  home        displays the location of HELM_HOME
  init        initialize Helm on both client and server
  inspect     inspect a chart
  install     install a chart archive
  lint        examines a chart for possible issues
  list        list releases
  package     package a chart directory into a chart archive
  plugin      add, list, or remove Helm plugins
  repo        add, list, remove, update, and index chart repositories
  reset       uninstalls Tiller from a cluster
  rollback    roll back a release to a previous revision
  search      search for a keyword in charts
  serve       start a local http web server
  status      displays the status of the named release
  template    locally render templates
  test        test a release
  upgrade     upgrade a release
  verify      verify that a chart at the given path has been signed and is valid
  version     print the client/server version information

Flags:
      --debug                           enable verbose output
      --home string                     location of your Helm config. Overrides $HELM_HOME (default "/root/.helm")
      --host string                     address of Tiller. Overrides $HELM_HOST
      --kube-context string             name of the kubeconfig context to use
      --tiller-connection-timeout int   the duration (in seconds) Helm will wait to establish a connection to tiller (default 300)
      --tiller-namespace string         namespace of Tiller (default "kube-system")

Use "helm [command] --help" for more information about a command.
```

**2. Initialize helm**

```
kubectl create -f helm-rbac.yaml
helm init --service-account tiller
```

> helm-rbac.yaml

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: tiller
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: tiller
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: tiller
    namespace: kube-system
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm2.png)

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ kubectl create -f helm-rbac.yaml
serviceaccount/tiller created
clusterrolebinding.rbac.authorization.k8s.io/tiller created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ helm init --service-account tiller
Creating /home/ubuntu/.helm
Creating /home/ubuntu/.helm/repository
Creating /home/ubuntu/.helm/repository/cache
Creating /home/ubuntu/.helm/repository/local
Creating /home/ubuntu/.helm/plugins
Creating /home/ubuntu/.helm/starters
Creating /home/ubuntu/.helm/cache/archive
Creating /home/ubuntu/.helm/repository/repositories.yaml
Adding stable repo with URL: https://kubernetes-charts.storage.googleapis.com
Adding local repo with URL: http://127.0.0.1:8879/charts
$HELM_HOME has been configured at /home/ubuntu/.helm.

Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.

Please note: by default, Tiller is deployed with an insecure 'allow unauthenticated users' policy.
To prevent this, run `helm init` with the --tiller-tls-verify flag.
For more information on securing your installation see: https://docs.helm.sh/using_helm/#securing-your-helm-installation
Happy Helming!
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm3.png)

```bash
ubuntu@kubernetes-master:~$ kubectl get pods -n kube-system
NAME                                        READY   STATUS    RESTARTS   AGE
canal-8chhh                                 3/3     Running   0          24d
canal-nrqm4                                 3/3     Running   0          24d
coredns-86c58d9df4-h8wc5                    1/1     Running   0          24d
coredns-86c58d9df4-x8tbh                    1/1     Running   0          24d
etcd-kubernetes-master                      1/1     Running   0          24d
kube-apiserver-kubernetes-master            1/1     Running   0          24d
kube-controller-manager-kubernetes-master   1/1     Running   0          24d
kube-proxy-7mttf                            1/1     Running   0          24d
kube-proxy-s42q6                            1/1     Running   0          24d
kube-scheduler-kubernetes-master            1/1     Running   0          24d
kubernetes-dashboard-57df4db6b-h8bzd        1/1     Running   0          5d12h
tiller-deploy-6cf89f5895-ktwfs              1/1     Running   0          2m5s
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm4.png)

```bash
ubuntu@kubernetes-master:~$ helm search redis
NAME                                    CHART VERSION   APP VERSION     DESCRIPTION
stable/prometheus-redis-exporter        1.0.2           0.28.0          Prometheus exporter for Redis metrics
stable/redis                            6.4.3           4.0.14          Open source, advanced key-value store. It is often referr...
stable/redis-ha                         3.3.3           5.0.3           Highly available Kubernetes implementation of Redis
stable/sensu                            0.2.3           0.28            Sensu monitoring framework backed by the Redis transport
```

- We can install `redis` by executing

```bash
ubuntu@kubernetes-master:~$ helm install stable/redis
NAME:   joyous-eagle
LAST DEPLOYED: Sun Mar 24 17:58:01 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME                AGE
joyous-eagle-redis  0s

==> v1/ConfigMap
joyous-eagle-redis         0s
joyous-eagle-redis-health  0s

==> v1/Service
joyous-eagle-redis-master  0s
joyous-eagle-redis-slave   0s

==> v1beta1/Deployment
joyous-eagle-redis-slave  0s

==> v1beta2/StatefulSet
joyous-eagle-redis-master  0s

==> v1/Pod(related)

NAME                                       READY  STATUS             RESTARTS  AGE
joyous-eagle-redis-slave-75677ddbf5-2fwm4  0/1    ContainerCreating  0         0s
joyous-eagle-redis-master-0                0/1    Pending            0         0s


NOTES:
** Please be patient while the chart is being deployed **
Redis can be accessed via port 6379 on the following DNS names from within your cluster:

joyous-eagle-redis-master.default.svc.cluster.local for read/write operations
joyous-eagle-redis-slave.default.svc.cluster.local for read-only operations


To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default joyous-eagle-redis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default joyous-eagle-redis-client --rm --tty -i --restart='Never' \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:4.0.14 -- bash

2. Connect using the Redis CLI:
   redis-cli -h joyous-eagle-redis-master -a $REDIS_PASSWORD
   redis-cli -h joyous-eagle-redis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/joyous-eagle-redis 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD
```

- We can assign a name to the deployment by using `--name deploymentname`. It we don't assign a name a random name is assigned

```bash
ubuntu@kubernetes-master:~$ helm install --name myredis stable/redis
NAME:   myredis
LAST DEPLOYED: Sun Mar 24 18:01:14 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME     AGE
myredis  0s

==> v1/ConfigMap
myredis         0s
myredis-health  0s

==> v1/Service
myredis-master  0s
myredis-slave   0s

==> v1beta1/Deployment
myredis-slave  0s

==> v1beta2/StatefulSet
myredis-master  0s

==> v1/Pod(related)

NAME                            READY  STATUS             RESTARTS  AGE
myredis-slave-6d77cc8cdf-4hw59  0/1    ContainerCreating  0         0s
myredis-master-0                0/1    Pending            0         0s


NOTES:
** Please be patient while the chart is being deployed **
Redis can be accessed via port 6379 on the following DNS names from within your cluster:

myredis-master.default.svc.cluster.local for read/write operations
myredis-slave.default.svc.cluster.local for read-only operations


To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default myredis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default myredis-client --rm --tty -i --restart='Never' \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:4.0.14 -- bash

2. Connect using the Redis CLI:
   redis-cli -h myredis-master -a $REDIS_PASSWORD
   redis-cli -h myredis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/myredis 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD
```

- Get the `redis password` by executing:

```bash
ubuntu@kubernetes-master:~$ kubectl get secret --namespace default myredis -o yaml
```

```yaml
apiVersion: v1
data:
  redis-password: WEF3QUY4T09OWg==
kind: Secret
metadata:
  creationTimestamp: "2019-03-24T18:01:14Z"
  labels:
    app: redis
    chart: redis-6.4.3
    heritage: Tiller
    release: myredis
  name: myredis
  namespace: default
  resourceVersion: "2808511"
  selfLink: /api/v1/namespaces/default/secrets/myredis
  uid: d08bef97-4e5e-11e9-abeb-babbda5ce12f
type: Opaque
```

```bash
ubuntu@kubernetes-master:~$ echo 'WEF3QUY4T09OWg==' | base64 --decode
XAwAF8OONZubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$  kubectl run --namespace default myredis-client --rm --tty -i --restart='Never' --env REDIS_PASSWORD=XAwAF8OONZ --image docker.io/bit:4.0.14 -- bash
If you don't see a command prompt, try pressing enter.
I have no name!@myredis-client:/$ echo $REDIS_PASSWORD
XAwAF8OONZ
```

```bash
I have no name!@myredis-client:/$ redis-cli -h myredis-master -a $REDIS_PASSWORD
Warning: Using a password with '-a' option on the command line interface may not be safe.
```

```bash
I have no name!@myredis-client:/$ redis-cli -h myredis-slave -a $REDIS_PASSWORD
Warning: Using a password with '-a' option on the command line interface may not be safe.
```

```bash
I have no name!@myredis-client:/$ redis-cli -h myredis-redis -a $REDIS_PASSWORD
Warning: Using a password with '-a' option on the command line interface may not be safe.
Could not connect to Redis at myredis-redis:6379: Name or service not known
Could not connect to Redis at myredis-redis:6379: Name or service not known
not connected> exit
```

```bash
not connected> exit
I have no name!@myredis-client:/$ exit
exit
pod "myredis-client" deleted
```

```bash
ubuntu@kubernetes-master:~$ helm list
NAME            REVISION        UPDATED                         STATUS          CHART           APP VERSION     NAMESPACE
joyous-eagle    1               Sun Mar 24 17:58:01 2019        DEPLOYED        redis-6.4.3     4.0.14          default
myredis         1               Sun Mar 24 18:01:14 2019        DEPLOYED        redis-6.4.3     4.0.14          default
```

```bash
ubuntu@kubernetes-master:~$ helm delete joyous-eagle --purge
release "joyous-eagle" deleted
ubuntu@kubernetes-master:~$ helm delete myredis --purge
release "myredis" deleted
```

- We are going to use [Redis-ha](https://github.com/helm/charts/tree/master/stable/redis-ha) instead.

```bash
ubuntu@kubernetes-master:~$ helm install --name myredis stable/redis-ha
NAME:   myredis
LAST DEPLOYED: Sun Mar 24 18:21:13 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                        AGE
myredis-redis-ha-configmap  0s
myredis-redis-ha-probes     0s

==> v1/ServiceAccount
myredis-redis-ha  0s

==> v1/Role
myredis-redis-ha  0s

==> v1/RoleBinding
myredis-redis-ha  0s

==> v1/Service
myredis-redis-ha-announce-2  0s
myredis-redis-ha-announce-0  0s
myredis-redis-ha-announce-1  0s
myredis-redis-ha             0s

==> v1/StatefulSet
myredis-redis-ha-server  0s

==> v1/Pod(related)

NAME                       READY  STATUS   RESTARTS  AGE
myredis-redis-ha-server-0  0/2    Pending  0         0s


NOTES:
Redis can be accessed via port 6379 and Sentinel can be accessed via port 26379 on the following DNS name from within your cluster:
myredis-redis-ha.default.svc.cluster.local

To connect to your Redis server:
1. Run a Redis pod that you can use as a client:

   kubectl exec -it myredis-redis-ha-server-0 sh -n default

2. Connect using the Redis CLI:

  redis-cli -h myredis-redis-ha.default.svc.cluster.local
```

```bash
ubuntu@kubernetes-master:~$ kubectl exec -it myredis-redis-ha-server-0 sh -n default
Defaulting container name to redis.
Use 'kubectl describe pod/myredis-redis-ha-server-0 -n default' to see all of the containers in this pod.
Error from server (BadRequest): pod myredis-redis-ha-server-0 does not have a host assigned
ubuntu@kubernetes-master:~$ kubectl get all
NAME                            READY   STATUS    RESTARTS   AGE
pod/myredis-redis-ha-server-0   0/2     Pending   0          2m15s

NAME                                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)              AGE
service/kubernetes                    ClusterIP   10.96.0.1        <none>        443/TCP              25d
service/myredis-redis-ha              ClusterIP   None             <none>        6379/TCP,26379/TCP   2m15s
service/myredis-redis-ha-announce-0   ClusterIP   10.106.76.104    <none>        6379/TCP,26379/TCP   2m15s
service/myredis-redis-ha-announce-1   ClusterIP   10.96.243.207    <none>        6379/TCP,26379/TCP   2m15s
service/myredis-redis-ha-announce-2   ClusterIP   10.106.146.214   <none>        6379/TCP,26379/TCP   2m15s

NAME                                       READY   AGE
statefulset.apps/myredis-redis-ha-server   0/3     2m15s
ubuntu@kubernetes-master:~$ kubectl describe pod/myredis-redis-ha-server-0
Name:               myredis-redis-ha-server-0
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               <none>
Labels:             app=redis-ha
                    controller-revision-hash=myredis-redis-ha-server-76b8874455
                    release=myredis
                    statefulset.kubernetes.io/pod-name=myredis-redis-ha-server-0
Annotations:        checksum/init-config: 4466b6b67be4f1cb8366cac314fdc99c24d55025f5f89ae85eed09c156984ed4
                    checksum/probe-config: 80af60df01676bc55ee405936d1c7022090ff46275f2dbea0a2b358b4c60cb56
Status:             Pending
IP:
Controlled By:      StatefulSet/myredis-redis-ha-server
Init Containers:
  config-init:
    Image:      redis:5.0.3-alpine
    Port:       <none>
    Host Port:  <none>
    Command:
      sh
    Args:
      /readonly-config/init.sh
    Environment:
      SENTINEL_ID_0:  8db94befdf51eca7be3ac3b5fe0612be19e1ebac
      SENTINEL_ID_1:  ec73f3dfc6ad50c811d535db5b7a4ae8fb22c7f1
      SENTINEL_ID_2:  54db059996613c2317efe089f8a543150446479c
    Mounts:
      /data from data (rw)
      /readonly-config from config (ro)
      /var/run/secrets/kubernetes.io/serviceaccount from myredis-redis-ha-token-ss7z5 (ro)
Containers:
  redis:
    Image:      redis:5.0.3-alpine
    Port:       6379/TCP
    Host Port:  0/TCP
    Command:
      redis-server
    Args:
      /data/conf/redis.conf
    Liveness:     exec [sh /probes/readiness.sh 6379] delay=15s timeout=1s period=5s #success=1 #failure=3
    Readiness:    exec [sh /probes/readiness.sh 6379] delay=15s timeout=1s period=5s #success=1 #failure=3
    Environment:  <none>
    Mounts:
      /data from data (rw)
      /probes from probes (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from myredis-redis-ha-token-ss7z5 (ro)
  sentinel:
    Image:      redis:5.0.3-alpine
    Port:       26379/TCP
    Host Port:  0/TCP
    Command:
      redis-sentinel
    Args:
      /data/conf/sentinel.conf
    Liveness:     exec [sh /probes/readiness.sh 26379] delay=15s timeout=1s period=5s #success=1 #failure=3
    Readiness:    exec [sh /probes/readiness.sh 26379] delay=15s timeout=1s period=5s #success=1 #failure=3
    Environment:  <none>
    Mounts:
      /data from data (rw)
      /probes from probes (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from myredis-redis-ha-token-ss7z5 (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  data-myredis-redis-ha-server-0
    ReadOnly:   false
  config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      myredis-redis-ha-configmap
    Optional:  false
  probes:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      myredis-redis-ha-probes
    Optional:  false
  myredis-redis-ha-token-ss7z5:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  myredis-redis-ha-token-ss7z5
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                  From               Message
  ----     ------            ----                 ----               -------
  Warning  FailedScheduling  11s (x7 over 2m54s)  default-scheduler  pod has unbound immediate PersistentVolumeClaims
```

```bash
ubuntu@kubernetes-master:~$ helm list
NAME    REVISION        UPDATED                         STATUS          CHART           APP VERSION     NAMESPACE
myredis 1               Sun Mar 24 18:21:13 2019        DEPLOYED        redis-ha-3.3.3  5.0.3           default
ubuntu@kubernetes-master:~$ helm delete myredis --purge
release "myredis" deleted
```

```bash
ubuntu@kubernetes-master:~$ helm install --name myredis --set password=secretpassword stable/redis
NAME:   myredis
LAST DEPLOYED: Sun Mar 24 18:30:05 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Pod(related)
NAME                            READY  STATUS             RESTARTS  AGE
myredis-slave-7bbcb87c49-s6nd2  0/1    ContainerCreating  0         0s
myredis-master-0                0/1    Pending            0         0s

==> v1/Secret

NAME     AGE
myredis  0s

==> v1/ConfigMap
myredis         0s
myredis-health  0s

==> v1/Service
myredis-master  0s
myredis-slave   0s

==> v1beta1/Deployment
myredis-slave  0s

==> v1beta2/StatefulSet
myredis-master  0s


NOTES:
** Please be patient while the chart is being deployed **
Redis can be accessed via port 6379 on the following DNS names from within your cluster:

myredis-master.default.svc.cluster.local for read/write operations
myredis-slave.default.svc.cluster.local for read-only operations


To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default myredis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default myredis-client --rm --tty -i --restart='Never' \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:4.0.14 -- bash

2. Connect using the Redis CLI:
   redis-cli -h myredis-master -a $REDIS_PASSWORD
   redis-cli -h myredis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/myredis 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD
```

```bash
ubuntu@kubernetes-master:~$ kubectl get all
NAME                                 READY   STATUS    RESTARTS   AGE
pod/myredis-master-0                 0/1     Pending   0          62s
pod/myredis-slave-7bbcb87c49-r4s5v   0/1     Running   1          62s

NAME                     TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/kubernetes       ClusterIP   10.96.0.1       <none>        443/TCP    25d
service/myredis-master   ClusterIP   10.96.149.24    <none>        6379/TCP   62s
service/myredis-slave    ClusterIP   10.100.25.139   <none>        6379/TCP   62s

NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/myredis-slave   0/1     1            0           62s

NAME                                       DESIRED   CURRENT   READY   AGE
replicaset.apps/myredis-slave-7bbcb87c49   1         1         0       62s

NAME                              READY   AGE
statefulset.apps/myredis-master   0/1     62s
ubuntu@kubernetes-master:~$ kubectl describe pod/myredis-master-0
Name:               myredis-master-0
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               <none>
Labels:             app=redis
                    chart=redis-6.4.3
                    controller-revision-hash=myredis-master-5f6b5bf9bf
                    release=myredis
                    role=master
                    statefulset.kubernetes.io/pod-name=myredis-master-0
Annotations:        checksum/configmap: c92f352d86d371bb0ac0b9fdd5f02dd9db0fb69d41b566285c947b04fc60bef4
                    checksum/health: b6589c4253f94b406dbf11e74458aa9db1130ff2c197bb55561e44336c284115
                    checksum/secret: 3b6ab146b056c9161667115cfc051caf64f062657480b71ed7ce67c8db23c090
Status:             Pending
IP:
Controlled By:      StatefulSet/myredis-master
Containers:
  myredis:
    Image:      docker.io/bitnami/redis:4.0.14
    Port:       6379/TCP
    Host Port:  0/TCP
    Command:
      /bin/bash
      -c
      if [[ -n $REDIS_PASSWORD_FILE ]]; then
        password_aux=`cat ${REDIS_PASSWORD_FILE}`
        export REDIS_PASSWORD=$password_aux
      fi
      ARGS=("--port" "${REDIS_PORT}")
      ARGS+=("--requirepass" "${REDIS_PASSWORD}")
      ARGS+=("--include" "/opt/bitnami/redis/etc/redis.conf")
      ARGS+=("--include" "/opt/bitnami/redis/etc/master.conf")
      /run.sh ${ARGS[@]}

    Liveness:   exec [sh -c /health/ping_local.sh 5] delay=5s timeout=5s period=5s #success=1 #failure=5
    Readiness:  exec [sh -c /health/ping_local.sh 5] delay=5s timeout=1s period=5s #success=1 #failure=5
    Environment:
      REDIS_REPLICATION_MODE:  master
      REDIS_PASSWORD:          <set to the key 'redis-password' in secret 'myredis'>  Optional: false
      REDIS_PORT:              6379
    Mounts:
      /data from redis-data (rw)
      /health from health (rw)
      /opt/bitnami/redis/etc from config (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  redis-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  redis-data-myredis-master-0
    ReadOnly:   false
  health:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      myredis-health
    Optional:  false
  config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      myredis
    Optional:  false
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  12s (x2 over 85s)  default-scheduler  pod has unbound immediate PersistentVolumeClaims
```

```bash
ubuntu@kubernetes-master:~$ kubectl get pv,pvc
NAME                                                           STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/data-myredis-redis-ha-server-0           Pending                                                     22m
persistentvolumeclaim/redis-data-joyous-eagle-redis-master-0   Pending                                                     45m
persistentvolumeclaim/redis-data-myredis-master-0              Pending                                                     42m
ubuntu@kubernetes-master:~$ kubectl describe persistentvolumeclaim/redis-data-myredis-master-0
Name:          redis-data-myredis-master-0
Namespace:     default
StorageClass:
Status:        Pending
Volume:
Labels:        app=redis
               release=myredis
               role=master
Annotations:   <none>
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:
Access Modes:
VolumeMode:    Filesystem
Events:
  Type       Reason         Age                    From                         Message
  ----       ------         ----                   ----                         -------
  Normal     FailedBinding  2m31s (x163 over 42m)  persistentvolume-controller  no persistent volumes available for this claim and no storage class is set
Mounted By:  myredis-master-0
ubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$ kubectl delete persistentvolumeclaim/redis-data-myredis-master-0
persistentvolumeclaim "redis-data-myredis-master-0" deleted
ubuntu@kubernetes-master:~$ kubectl delete persistentvolumeclaim/redis-data-joyous-eagle-redis-master-0
persistentvolumeclaim "redis-data-joyous-eagle-redis-master-0" deleted
ubuntu@kubernetes-master:~$ kubectl delete persistentvolumeclaim/data-myredis-redis-ha-server-0
persistentvolumeclaim "data-myredis-redis-ha-server-0" deleted
```

```bash
ubuntu@kubernetes-master:~$ helm delete myredis --purge
release "myredis" deleted
```

- The problem is that there is no `default storage class` created:

```bash
ubuntu@kubernetes-master:~$ kubectl get storageclass
No resources found.
```

- We can see more information on [Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/)

* We are gooing to use the `storage-class.yaml` document to create the standard StoreClass with `Digital Ocean`

> storage-class.yaml

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard
provisioner: kubernetes.io/digitalocean-volume
reclaimPolicy: Retain
mountOptions:
  - debug
volumeBindingMode: Immediate
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/storage-class$ kubectl create -f storage-class.yaml
storageclass.storage.k8s.io/standard created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/storage-class$ kubectl get storageclass
NAME       PROVISIONER                         AGE
standard   kubernetes.io/digitalocean-volume   38s
```

- We are going to try to create the `redis helm` again:

```bash
ubuntu@kubernetes-master:~$ helm install --name myredis --set password=secretpassword stable/redis
NAME:   myredis
LAST DEPLOYED: Sun Mar 24 19:32:29 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME     AGE
myredis  0s

==> v1/ConfigMap
myredis         0s
myredis-health  0s

==> v1/Service
myredis-master  0s
myredis-slave   0s

==> v1beta1/Deployment
myredis-slave  0s

==> v1beta2/StatefulSet
myredis-master  0s

==> v1/Pod(related)

NAME                            READY  STATUS             RESTARTS  AGE
myredis-slave-7bbcb87c49-6c7hz  0/1    ContainerCreating  0         0s
myredis-master-0                0/1    Pending            0         0s


NOTES:
** Please be patient while the chart is being deployed **
Redis can be accessed via port 6379 on the following DNS names from within your cluster:

myredis-master.default.svc.cluster.local for read/write operations
myredis-slave.default.svc.cluster.local for read-only operations


To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default myredis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default myredis-client --rm --tty -i --restart='Never' \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:4.0.14 -- bash

2. Connect using the Redis CLI:
   redis-cli -h myredis-master -a $REDIS_PASSWORD
   redis-cli -h myredis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/myredis 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD
```

```bash
ubuntu@kubernetes-master:~$ kubectl get all
NAME                                 READY   STATUS    RESTARTS   AGE
pod/myredis-master-0                 0/1     Pending   0          69s
pod/myredis-slave-7bbcb87c49-6c7hz   0/1     Running   1          69s

NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
service/kubernetes       ClusterIP   10.96.0.1      <none>        443/TCP    25d
service/myredis-master   ClusterIP   10.96.29.45    <none>        6379/TCP   69s
service/myredis-slave    ClusterIP   10.97.16.137   <none>        6379/TCP   69s

NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/myredis-slave   0/1     1            0           69s

NAME                                       DESIRED   CURRENT   READY   AGE
replicaset.apps/myredis-slave-7bbcb87c49   1         1         0       69s

NAME                              READY   AGE
statefulset.apps/myredis-master   0/1     69s
ubuntu@kubernetes-master:~$ kubectl describe pod/myredis-master-0
Name:               myredis-master-0
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               <none>
Labels:             app=redis
                    chart=redis-6.4.3
                    controller-revision-hash=myredis-master-5f6b5bf9bf
                    release=myredis
                    role=master
                    statefulset.kubernetes.io/pod-name=myredis-master-0
Annotations:        checksum/configmap: c92f352d86d371bb0ac0b9fdd5f02dd9db0fb69d41b566285c947b04fc60bef4
                    checksum/health: b6589c4253f94b406dbf11e74458aa9db1130ff2c197bb55561e44336c284115
                    checksum/secret: 3b6ab146b056c9161667115cfc051caf64f062657480b71ed7ce67c8db23c090
Status:             Pending
IP:
Controlled By:      StatefulSet/myredis-master
Containers:
  myredis:
    Image:      docker.io/bitnami/redis:4.0.14
    Port:       6379/TCP
    Host Port:  0/TCP
    Command:
      /bin/bash
      -c
      if [[ -n $REDIS_PASSWORD_FILE ]]; then
        password_aux=`cat ${REDIS_PASSWORD_FILE}`
        export REDIS_PASSWORD=$password_aux
      fi
      ARGS=("--port" "${REDIS_PORT}")
      ARGS+=("--requirepass" "${REDIS_PASSWORD}")
      ARGS+=("--include" "/opt/bitnami/redis/etc/redis.conf")
      ARGS+=("--include" "/opt/bitnami/redis/etc/master.conf")
      /run.sh ${ARGS[@]}

    Liveness:   exec [sh -c /health/ping_local.sh 5] delay=5s timeout=5s period=5s #success=1 #failure=5
    Readiness:  exec [sh -c /health/ping_local.sh 5] delay=5s timeout=1s period=5s #success=1 #failure=5
    Environment:
      REDIS_REPLICATION_MODE:  master
      REDIS_PASSWORD:          <set to the key 'redis-password' in secret 'myredis'>  Optional: false
      REDIS_PORT:              6379
    Mounts:
      /data from redis-data (rw)
      /health from health (rw)
      /opt/bitnami/redis/etc from config (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  redis-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  redis-data-myredis-master-0
    ReadOnly:   false
  health:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      myredis-health
    Optional:  false
  config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      myredis
    Optional:  false
  default-token-rtvbw:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-rtvbw
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                 From               Message
  ----     ------            ----                ----               -------
  Warning  FailedScheduling  13s (x4 over 101s)  default-scheduler  pod has unbound immediate PersistentVolumeClaims
```

```bash
ubuntu@kubernetes-master:~$ kubectl get pv,pvc
NAME                                                STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/redis-data-myredis-master-0   Pending                                                     2m55s
```

```bash
ubuntu@kubernetes-master:~$ kubectl describe persistentvolumeclaim/redis-data-myredis-master-0
Name:          redis-data-myredis-master-0
Namespace:     default
StorageClass:
Status:        Pending
Volume:
Labels:        app=redis
               release=myredis
               role=master
Annotations:   <none>
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:
Access Modes:
VolumeMode:    Filesystem
Events:
  Type       Reason         Age                   From                         Message
  ----       ------         ----                  ----                         -------
  Normal     FailedBinding  10s (x16 over 3m36s)  persistentvolume-controller  no persistent volumes available for this claim and no storage class is set
Mounted By:  myredis-master-0
```

```bash
ubuntu@kubernetes-master:~$ kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
storageclass.storage.k8s.io/standard patched
ubuntu@kubernetes-master:~$ kubectl get storageclass
NAME                 PROVISIONER                         AGE
standard (default)   kubernetes.io/digitalocean-volume   14m
```

```bash
ubuntu@kubernetes-master:~$ kubectl delete persistentvolumeclaim/redis-data-myredis-master-0
persistentvolumeclaim "redis-data-myredis-master-0" deleted
ubuntu@kubernetes-master:~$ helm delete myredis --purge
release "myredis" deleted
ubuntu@kubernetes-master:~$ helm list
ubuntu@kubernetes-master:~$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   25d
```

```bash
ubuntu@kubernetes-master:~$ helm install --name myredis --set password=secretpassword stable/redis
NAME:   myredis
LAST DEPLOYED: Sun Mar 24 19:41:11 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME            AGE
myredis         0s
myredis-health  0s

==> v1/Service
myredis-master  0s
myredis-slave   0s

==> v1beta1/Deployment
myredis-slave  0s

==> v1beta2/StatefulSet
myredis-master  0s

==> v1/Pod(related)

NAME                            READY  STATUS             RESTARTS  AGE
myredis-slave-7bbcb87c49-zdtnz  0/1    ContainerCreating  0         0s
myredis-master-0                0/1    Pending            0         0s

==> v1/Secret

NAME     AGE
myredis  0s


NOTES:
** Please be patient while the chart is being deployed **
Redis can be accessed via port 6379 on the following DNS names from within your cluster:

myredis-master.default.svc.cluster.local for read/write operations
myredis-slave.default.svc.cluster.local for read-only operations


To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default myredis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default myredis-client --rm --tty -i --restart='Never' \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:4.0.14 -- bash

2. Connect using the Redis CLI:
   redis-cli -h myredis-master -a $REDIS_PASSWORD
   redis-cli -h myredis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/myredis 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD

ubuntu@kubernetes-master:~$ kubectl get pv,pvc
NAME                                                STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/redis-data-myredis-master-0   Pending                                      standard       13s
ubuntu@kubernetes-master:~$ kubectl describe persistentvolumeclaim/redis-data-myredis-master-0
Name:          redis-data-myredis-master-0
Namespace:     default
StorageClass:  standard
Status:        Pending
Volume:
Labels:        app=redis
               release=myredis
               role=master
Annotations:   <none>
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:
Access Modes:
VolumeMode:    Filesystem
Events:
  Type       Reason              Age                From                         Message
  ----       ------              ----               ----                         -------
  Warning    ProvisioningFailed  13s (x2 over 27s)  persistentvolume-controller  no volume plugin matched
Mounted By:  myredis-master-0
ubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$ kubectl delete persistentvolumeclaim/redis-data-myredis-master-0
persistentvolumeclaim "redis-data-myredis-master-0" deleted
ubuntu@kubernetes-master:~$ helm delete myredis --purge
release "myredis" deleted
```

::: warning
We are going to use the AWS cluster so that the volumes are created automatically
:::

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm6.png)

- We can delete the char using `helm delete`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoHelm8.png)

### 97. Creating your own Helm Charts

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CreatingYourOwnHelmCharts.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CreatingYourOwnHelmCharts2.png)

### 98. Demo: Creating your own Helm Charts

- Create the `mychart` chart example by executing

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ helm create mychart
Creating mychart
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ cd mychart/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/mychart$ ls
charts  Chart.yaml  templates  values.yaml
```

> Chart.yaml

```yaml
apiVersion: v1
appVersion: "1.0"
description: A Helm chart for Kubernetes
name: mychart
version: 0.1.0
```

> values.yaml

```yaml
# Default values for mychart.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

replicaCount: 1

image:
  repository: nginx
  tag: stable
  pullPolicy: IfNotPresent

nameOverride: ""
fullnameOverride: ""

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: false
  annotations:
    {}
    # kubernetes.io/ingress.class: nginx
    # kubernetes.io/tls-acme: "true"
  path: /
  hosts:
    - chart-example.local
  tls: []
  #  - secretName: chart-example-tls
  #    hosts:
  #      - chart-example.local

resources:
  {}
  # We usually recommend not to specify default resources and to leave this as a conscious
  # choice for the user. This also increases chances charts run on environments with little
  # resources, such as Minikube. If you do want to specify resources, uncomment the following
  # lines, adjust them as necessary, and remove the curly braces after 'resources:'.
  # limits:
  #  cpu: 100m
  #  memory: 128Mi
  # requests:
  #  cpu: 100m
  #  memory: 128Mi

nodeSelector: {}

tolerations: []

affinity: {}
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/mychart/templates$ ls
deployment.yaml  _helpers.tpl  ingress.yaml  NOTES.txt  service.yaml
```

> templates/deployment.yaml

```yaml
apiVersion: apps/v1beta2
kind: Deployment
metadata:
  name: {{ include "mychart.fullname" . }}
  labels:
    app.kubernetes.io/name: {{ include "mychart.name" . }}
    helm.sh/chart: {{ include "mychart.chart" . }}
    app.kubernetes.io/instance: {{ .Release.Name }}
    app.kubernetes.io/managed-by: {{ .Release.Service }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app.kubernetes.io/name: {{ include "mychart.name" . }}
      app.kubernetes.io/instance: {{ .Release.Name }}
  template:
    metadata:
      labels:
        app.kubernetes.io/name: {{ include "mychart.name" . }}
        app.kubernetes.io/instance: {{ .Release.Name }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
          livenessProbe:
            httpGet:
              path: /
              port: http
          readinessProbe:
            httpGet:
              path: /
              port: http
          resources:
{{ toYaml .Values.resources | indent 12 }}
    {{- with .Values.nodeSelector }}
      nodeSelector:
{{ toYaml . | indent 8 }}
    {{- end }}
    {{- with .Values.affinity }}
      affinity:
{{ toYaml . | indent 8 }}
    {{- end }}
    {{- with .Values.tolerations }}
      tolerations:
{{ toYaml . | indent 8 }}
    {{- end }}
```

> template/ \_helpers.tpl

```yaml
{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "mychart.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "mychart.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "mychart.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
```

> templates/ingress.yaml

```yaml
{{- if .Values.ingress.enabled -}}
{{- $fullName := include "mychart.fullname" . -}}
{{- $ingressPath := .Values.ingress.path -}}
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: {{ $fullName }}
  labels:
    app.kubernetes.io/name: {{ include "mychart.name" . }}
    helm.sh/chart: {{ include "mychart.chart" . }}
    app.kubernetes.io/instance: {{ .Release.Name }}
    app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- with .Values.ingress.annotations }}
  annotations:
{{ toYaml . | indent 4 }}
{{- end }}
spec:
{{- if .Values.ingress.tls }}
  tls:
  {{- range .Values.ingress.tls }}
    - hosts:
      {{- range .hosts }}
        - {{ . | quote }}
      {{- end }}
      secretName: {{ .secretName }}
  {{- end }}
{{- end }}
  rules:
  {{- range .Values.ingress.hosts }}
    - host: {{ . | quote }}
      http:
        paths:
          - path: {{ $ingressPath }}
            backend:
              serviceName: {{ $fullName }}
              servicePort: http
  {{- end }}
{{- end }}
```

> templates/service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: { { include "mychart.fullname" . } }
  labels:
    app.kubernetes.io/name: { { include "mychart.name" . } }
    helm.sh/chart: { { include "mychart.chart" . } }
    app.kubernetes.io/instance: { { .Release.Name } }
    app.kubernetes.io/managed-by: { { .Release.Service } }
spec:
  type: { { .Values.service.type } }
  ports:
    - port: { { .Values.service.port } }
      targetPort: http
      protocol: TCP
      name: http
  selector:
    app.kubernetes.io/name: { { include "mychart.name" . } }
    app.kubernetes.io/instance: { { .Release.Name } }
```

> templates/deployment.yaml

```yaml
apiVersion: apps/v1beta2
kind: Deployment
metadata:
  name: {{ include "mychart.fullname" . }}
  labels:
    app.kubernetes.io/name: {{ include "mychart.name" . }}
    helm.sh/chart: {{ include "mychart.chart" . }}
    app.kubernetes.io/instance: {{ .Release.Name }}
    app.kubernetes.io/managed-by: {{ .Release.Service }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app.kubernetes.io/name: {{ include "mychart.name" . }}
      app.kubernetes.io/instance: {{ .Release.Name }}
  template:
    metadata:
      labels:
        app.kubernetes.io/name: {{ include "mychart.name" . }}
        app.kubernetes.io/instance: {{ .Release.Name }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
          livenessProbe:
            httpGet:
              path: /
              port: http
          readinessProbe:
            httpGet:
              path: /
              port: http
          resources:
{{ toYaml .Values.resources | indent 12 }}
    {{- with .Values.nodeSelector }}
      nodeSelector:
{{ toYaml . | indent 8 }}
    {{- end }}
    {{- with .Values.affinity }}
      affinity:
{{ toYaml . | indent 8 }}
    {{- end }}
    {{- with .Values.tolerations }}
      tolerations:
{{ toYaml . | indent 8 }}
    {{- end }}
```

- We can deploy the `mychart` chart example by executing

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ helm install mychart/
NAME:   invincible-maltese
LAST DEPLOYED: Mon Mar 25 18:20:47 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Service
NAME                        AGE
invincible-maltese-mychart  0s

==> v1beta2/Deployment
invincible-maltese-mychart  0s

==> v1/Pod(related)

NAME                                         READY  STATUS   RESTARTS  AGE
invincible-maltese-mychart-5d4757ddbf-2xgzz  0/1    Pending  0         0s


NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=mychart,app.kubernetes.io/instance=invincible-maltese" -o jsonpath="{.items[0].metadata.name}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl port-forward $POD_NAME 8080:80
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ kubectl get all
NAME                                              READY   STATUS    RESTARTS   AGE
pod/invincible-maltese-mychart-5d4757ddbf-2xgzz   1/1     Running   0          88s

NAME                                 TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE
service/invincible-maltese-mychart   ClusterIP   10.99.107.9   <none>        80/TCP    88s
service/kubernetes                   ClusterIP   10.96.0.1     <none>        443/TCP   26d

NAME                                         READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/invincible-maltese-mychart   1/1     1            1           88s

NAME                                                    DESIRED   CURRENT   READY   AGE
replicaset.apps/invincible-maltese-mychart-5d4757ddbf   1         1         1       88s
```

- We can test it is working by using:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=mychart,app.kubernetes.io/instance=invincible-maltese" -o jsonpath="{.items[0].metadata.name}")
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$   echo "Visit http://127.0.0.1:8080 to use your application"
Visit http://127.0.0.1:8080 to use your application
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ kubectl port-forward $POD_NAME 8080:80
Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
^Cubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ echo $POD_NAME
invincible-maltese-mychart-5d4757ddbf-2xgzz
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ kubectl port-forward $POD_NAME 8080:80
Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
^Z
[1]+  Stopped                 kubectl port-forward $POD_NAME 8080:80
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ bg
[1]+ kubectl port-forward $POD_NAME 8080:80 &
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ curl 127.0.0.1:8080
Handling connection for 8080
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ fg
kubectl port-forward $POD_NAME 8080:80
^Cubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ curl 127.0.0.1:8080
curl: (7) Failed to connect to 127.0.0.1 port 8080: Connection refused
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ helm list
NAME                    REVISION        UPDATED                         STATUS          CHART           APP VERSION     NAMESPACE
invincible-maltese      1               Mon Mar 25 18:20:47 2019        DEPLOYED        mychart-0.1.0   1.0             default
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ helm delete invincible-maltese
release "invincible-maltese" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   26d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$
```

### 99. Demo: nodejs app Helm Chart

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm$ cd demo-chart/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ ls
Chart.yaml  README.md  requirements.lock  requirements.yaml  templates  values.yaml
```

> Chart.yaml

```yaml
apiVersion: v1
appVersion: "1.0"
description: A Helm chart for Kubernetes
name: demo-chart
version: 0.0.1
```

> requirements.yaml

```yaml
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ cat requirements.yaml
dependencies:
- name: mariadb
  version: 4.x.x
  repository: https://kubernetes-charts.storage.googleapis.com/
  condition: mariadb.enabled
  tags:
    - node-app-database
```

> values.yaml

```yaml
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ cat values.yaml
# Default values for demo-chart.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

replicaCount: 3

image:
  repository: wardviaene/node-demo-app
  tag: v0.0.1
  pullPolicy: IfNotPresent

service:
  type: LoadBalancer
  port: 80

ingress:
  enabled: false
  annotations: {}
    # kubernetes.io/ingress.class: nginx
    # kubernetes.io/tls-acme: "true"
  path: /
  hosts:
    - node-demo-app.newtech.academy
  tls: []
  #  - secretName: chart-example-tls
  #    hosts:
  #      - chart-example.local

resources: {}
  # We usually recommend not to specify default resources and to leave this as a conscious
  # choice for the user. This also increases chances charts run on environments with little
  # resources, such as Minikube. If you do want to specify resources, uncomment the following
  # lines, adjust them as necessary, and remove the curly braces after 'resources:'.
  # limits:
  #  cpu: 100m
  #  memory: 128Mi
  # requests:
  #  cpu: 100m
  #  memory: 128Mi

nodeSelector: {}

tolerations: []

affinity: {}

##
## MariaDB chart configuration
##
mariadb:
  enabled: true
  replication:
    enabled: false
  db:
    name: app
    user: app-user
  master:
    persistence:
      enabled: true
      accessMode: ReadWriteOnce
      size: 8Gi
```

> README.md

```md
# Node demo app Chart

## Download dependencies

helm dependency update

## Install Chart

helm install .

## Upgrade Chart

helm upgrade --set image.tag=v0.0.2,mariadb.db.password=\$DB_APP_PASS RELEASE .
```

> index.js

```js
var express = require("express");
var app = express();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// mysql code

con.connect(function(err) {
  if (err) {
    console.log("Error connecting to db: ", err);
    return;
  }
  console.log("Connection to db established");
  con.query(
    "CREATE TABLE IF NOT EXISTS visits (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, ts BIGINT)",
    function(err) {
      if (err) throw err;
    }
  );
});

// Request handling
app.get("/", function(req, res) {
  // create table if not exist
  con.query("INSERT INTO visits (ts) values (?)", Date.now(), function(
    err,
    dbRes
  ) {
    if (err) throw err;
    res.send("Hello World! You are visitor number " + dbRes.insertId);
  });
});

// server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app running");
});
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ cd templates/
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart/templates$ ls
deployment.yaml  _helpers.tpl  ingress.yaml  NOTES.txt  service.yaml
```

> template/deployment.yaml

```yaml
apiVersion: apps/v1beta2
kind: Deployment
metadata:
  name: {{ template "demo-chart.fullname" . }}
  labels:
    app: {{ template "demo-chart.name" . }}
    chart: {{ template "demo-chart.chart" . }}
    release: {{ .Release.Name }}
    heritage: {{ .Release.Service }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ template "demo-chart.name" . }}
      release: {{ .Release.Name }}
  template:
    metadata:
      labels:
        app: {{ template "demo-chart.name" . }}
        release: {{ .Release.Name }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 3000
              protocol: TCP
          env:
          - name: MYSQL_HOST
          {{- if .Values.mariadb.enabled }}
            value: {{ template "mariadb.fullname" . }}
          {{- else }}
            value: unknown
          {{- end }}
          - name: MYSQL_USER
          {{- if .Values.mariadb.enabled }}
            value: {{ .Values.mariadb.db.user | quote }}
          {{- else }}
            value: unknown
          {{- end }}
          - name: MYSQL_DATABASE
          {{- if .Values.mariadb.enabled }}
            value: {{ .Values.mariadb.db.name | quote }}
          {{- else }}
            value: unknown
          {{- end }}
          - name: MYSQL_PASSWORD
            valueFrom:
              secretKeyRef:
              {{- if .Values.mariadb.enabled }}
                name: {{ template "mariadb.fullname" . }}
                key: mariadb-password
              {{- else }}
                name: unknown
                key: db-password
              {{- end }}
          livenessProbe:
            httpGet:
              path: /
              port: http
          readinessProbe:
            httpGet:
              path: /
              port: http
          resources:
{{ toYaml .Values.resources | indent 12 }}
    {{- with .Values.nodeSelector }}
      nodeSelector:
{{ toYaml . | indent 8 }}
    {{- end }}
    {{- with .Values.affinity }}
      affinity:
{{ toYaml . | indent 8 }}
    {{- end }}
    {{- with .Values.tolerations }}
      tolerations:
{{ toYaml . | indent 8 }}
    {{- end }}
```

> template/ \_helpers.tpl

```yaml
{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "demo-chart.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "demo-chart.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "demo-chart.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "mariadb.fullname" -}}
{{- printf "%s-%s" .Release.Name "mariadb" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
```

- The fisrt step is to update the dependecies by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ helm dependency update
Hang tight while we grab the latest from your chart repositories...
...Unable to get an update from the "local" chart repository (http://127.0.0.1:8879/charts):
        Get http://127.0.0.1:8879/charts/index.yaml: dial tcp 127.0.0.1:8879: connect: connection refused
...Successfully got an update from the "stable" chart repository
Update Complete. ?Happy Helming!?
Saving 1 charts
Downloading mariadb from repo https://kubernetes-charts.storage.googleapis.com/
Deleting outdated charts
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$
```

- It has downloaded mariabdb

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ ls charts
mariadb-4.4.2.tgz
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$
```

- Once all the dependecies have been updated and downloaded we have to install the helm chart.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ helm install .
NAME:   righteous-beetle
LAST DEPLOYED: Tue Mar 26 05:31:05 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Pod(related)
NAME                                          READY  STATUS             RESTARTS  AGE
righteous-beetle-demo-chart-64b5bdfcb7-bvffx  0/1    ContainerCreating  0         0s
righteous-beetle-demo-chart-64b5bdfcb7-rmpbc  0/1    ContainerCreating  0         0s
righteous-beetle-demo-chart-64b5bdfcb7-x7twx  0/1    ContainerCreating  0         0s
righteous-beetle-mariadb-0                    0/1    Pending            0         0s

==> v1/Secret

NAME                      AGE
righteous-beetle-mariadb  0s

==> v1/ConfigMap
righteous-beetle-mariadb-init-scripts  0s
righteous-beetle-mariadb               0s
righteous-beetle-mariadb-tests         0s

==> v1/Service
righteous-beetle-mariadb     0s
righteous-beetle-demo-chart  0s

==> v1beta2/Deployment
righteous-beetle-demo-chart  0s

==> v1beta1/StatefulSet
righteous-beetle-mariadb  0s


NOTES:
1. Get the application URL by running these commands:
     NOTE: It may take a few minutes for the LoadBalancer IP to be available.
           You can watch the status of by running 'kubectl get svc -w righteous-beetle-demo-chart'
  export SERVICE_IP=$(kubectl get svc --namespace default righteous-beetle-demo-chart -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  echo http://$SERVICE_IP:80

```

- Have a look at the secrets

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ kubectl get secret righteous-beetle-mariadb -o yaml
apiVersion: v1
data:
  mariadb-password: a2ZJS2VlSnhQSg==
  mariadb-root-password: cnFlREhLaUxmUw==
kind: Secret
metadata:
  creationTimestamp: "2019-03-26T05:31:05Z"
  labels:
    app: mariadb
    chart: mariadb-4.4.2
    heritage: Tiller
    release: righteous-beetle
  name: righteous-beetle-mariadb
  namespace: default
  resourceVersion: "2975280"
  selfLink: /api/v1/namespaces/default/secrets/righteous-beetle-mariadb
  uid: 59dcafe9-4f88-11e9-abeb-babbda5ce12f
type: Opaque
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ echo 'a2ZJS2VlSnhQSg==' | base64 --decode
kfIKeeJxPJubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ echo 'a2ZJS2VlSnhQSg==' | base64 --decode
kfIKeeJxPJubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/helm/demo-chart$ kubectl get all
NAME                                               READY   STATUS             RESTARTS   AGE
pod/righteous-beetle-demo-chart-64b5bdfcb7-bvffx   0/1     CrashLoopBackOff   5          4m45s
pod/righteous-beetle-demo-chart-64b5bdfcb7-rmpbc   0/1     CrashLoopBackOff   5          4m45s
pod/righteous-beetle-demo-chart-64b5bdfcb7-x7twx   0/1     CrashLoopBackOff   5          4m45s
pod/righteous-beetle-mariadb-0                     0/1     Pending            0          4m45s

NAME                                  TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/kubernetes                    ClusterIP      10.96.0.1        <none>        443/TCP        26d
service/righteous-beetle-demo-chart   LoadBalancer   10.111.175.136   <pending>     80:30026/TCP   4m45s
service/righteous-beetle-mariadb      ClusterIP      10.102.249.62    <none>        3306/TCP       4m45s

NAME                                          READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/righteous-beetle-demo-chart   0/3     3            0           4m45s

NAME                                                     DESIRED   CURRENT   READY   AGE
replicaset.apps/righteous-beetle-demo-chart-64b5bdfcb7   3         3         0       4m45s

NAME                                        READY   AGE
statefulset.apps/righteous-beetle-mariadb   0/1     4m45s
```

::: Warning
With the current cluster cleated in Digital Ocean the persistent volumes are not automatically created. So we cannot use it for this test.
The best approach is to create and use the AWS Cluster again
:::

- We need to create the AWS Cluster again.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0326 17:36:47.573527   10972 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0326 17:36:47.695923   10972 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0326 17:36:48.075512   10972 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0326 17:36:49.286591   10972 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0326 17:36:49.640899   10972 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0326 17:36:49.837864   10972 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0326 17:36:49.953286   10972 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0326 17:36:49.987421   10972 executor.go:103] Tasks: 73 done / 73 total; 0 can run
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
        Tags                    {k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-events.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/events: a/a}

  EBSVolume/a.etcd-main.kubernetes.peelmicro.com
        AvailabilityZone        eu-central-1a
        VolumeType              gp2
        SizeGB                  20
        Encrypted               false
        Tags                    {KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/main: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: a.etcd-main.kubernetes.peelmicro.com}

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
        Tags                    {kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}

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
        Tags                    {kubernetes.io/kops/role: public, Name: kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

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
        Tags                    {kubernetes.io/role/elb: 1, SubnetType: Public, Name: eu-central-1a.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

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
```

- Now we have to deploy the cluster:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0326 17:38:58.413761   11009 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0326 17:38:58.962664   11009 vfs_castore.go:735] Issuing new certificate: "ca"
I0326 17:38:59.324558   11009 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0326 17:38:59.548882   11009 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0326 17:39:00.551582   11009 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0326 17:39:00.748883   11009 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0326 17:39:02.109117   11009 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0326 17:39:02.134272   11009 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0326 17:39:02.191454   11009 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0326 17:39:02.347876   11009 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0326 17:39:02.418847   11009 vfs_castore.go:735] Issuing new certificate: "master"
I0326 17:39:02.522071   11009 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0326 17:39:03.771625   11009 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0326 17:39:03.827560   11009 vfs_castore.go:735] Issuing new certificate: "kops"
I0326 17:39:04.036896   11009 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0326 17:39:04.341432   11009 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0326 17:39:04.363265   11009 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0326 17:39:14.757190   11009 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0326 17:39:15.286783   11009 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0326 17:39:15.287243   11009 dns.go:153] Pre-creating DNS records
I0326 17:39:17.010508   11009 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.
```

- Finally to have to ensure the cluster is valid (correctly created).

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
```

- Check again after a few minutes:

```bash
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1       eu-central-1a
nodes                   Node    t2.micro        2       2       eu-central-1a

NODE STATUS
NAME                                            ROLE    READY
ip-172-20-48-160.eu-central-1.compute.internal  node    True
ip-172-20-53-129.eu-central-1.compute.internal  node    True
ip-172-20-58-205.eu-central-1.compute.internal  master  True

Your cluster kubernetes.peelmicro.com is ready
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get node
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-48-160.eu-central-1.compute.internal   Ready    node     1m    v1.10.13
ip-172-20-53-129.eu-central-1.compute.internal   Ready    node     1m    v1.10.13
ip-172-20-58-205.eu-central-1.compute.internal   Ready    master   3m    v1.10.13
```

- The fisrt step is to update the dependecies by using the following command:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# helm dependency update
Hang tight while we grab the latest from your chart repositories...
...Unable to get an update from the "local" chart repository (http://127.0.0.1:8879/charts):
        Get http://127.0.0.1:8879/charts/index.yaml: dial tcp 127.0.0.1:8879: connect: connection refused
...Successfully got an update from the "incubator" chart repository
...Successfully got an update from the "stable" chart repository
Update Complete. ?Happy Helming!?
Saving 1 charts
Downloading mariadb from repo https://kubernetes-charts.storage.googleapis.com/
Deleting outdated charts
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart#
```

- mariabdb has been downloaded

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# ls charts
mariadb-4.4.2.tgz
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart#
```

- Once all the dependecies have been updated and downloaded we have to install the helm chart.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# helm install .
Error: could not find tiller
```

- We need to execute `helm init`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# helm init
$HELM_HOME has been configured at /root/.helm.

Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.

Please note: by default, Tiller is deployed with an insecure 'allow unauthenticated users' policy.
For more information on securing your installation see: https://docs.helm.sh/using_helm/#securing-your-helm-installation
Happy Helming!
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# helm install .
Error: no available release name found
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# cd ..
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl create -f helm-rbac.yaml
serviceaccount/tiller created
clusterrolebinding.rbac.authorization.k8s.io/tiller created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm init --service-account tiller
$HELM_HOME has been configured at /root/.helm.
Warning: Tiller is already installed in the cluster.
(Use --client-only to suppress this message, or --upgrade to upgrade Tiller to the current version.)
Happy Helming!
```

- I've had to do the following

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl create rolebinding tiller-rule --role=tiller --serviceaccount=kube-system:tiller
rolebinding.rbac.authorization.k8s.io/tiller-rule created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'deployment.extensions/tiller-deploy patched
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl create rolebinding tiller-edit-rights -n default --clusterrole=edit --serviceaccount=kube-system:tiller                       rolebinding.rbac.authorization.k8s.io/tiller-edit-rights created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm init --service-account tiller --upgrade
$HELM_HOME has been configured at /root/.helm.

Tiller (the Helm server-side component) has been upgraded to the current version.
Happy Helming!
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm update repo .
Command "update" is deprecated, use 'helm repo update'

Hang tight while we grab the latest from your chart repositories...
...Skip local chart repository
...Successfully got an update from the "incubator" chart repository
...Successfully got an update from the "stable" chart repository
Update Complete. ? Happy Helming!?
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm repo update
Hang tight while we grab the latest from your chart repositories...
...Skip local chart repository
...Successfully got an update from the "incubator" chart repository
...Successfully got an update from the "stable" chart repository
Update Complete. ? Happy Helming!?
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# helm install .
NAME:   iron-mink
LAST DEPLOYED: Tue Mar 26 18:49:54 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME               TYPE    DATA  AGE
iron-mink-mariadb  Opaque  2     1s

==> v1/ConfigMap
NAME                            DATA  AGE
iron-mink-mariadb-init-scripts  1     1s
iron-mink-mariadb               1     1s
iron-mink-mariadb-tests         1     1s

==> v1/Service
NAME                  TYPE          CLUSTER-IP     EXTERNAL-IP  PORT(S)       AGE
iron-mink-mariadb     ClusterIP     100.68.150.64  <none>       3306/TCP      1s
iron-mink-demo-chart  LoadBalancer  100.71.57.161  <pending>    80:32146/TCP  1s

==> v1beta2/Deployment
NAME                  DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
iron-mink-demo-chart  3        3        3           0          1s

==> v1beta1/StatefulSet
NAME               DESIRED  CURRENT  AGE
iron-mink-mariadb  1        1        1s

==> v1/Pod(related)
NAME                                   READY  STATUS             RESTARTS  AGE
iron-mink-demo-chart-7b4d4dbbd7-r72dl  0/1    ContainerCreating  0         0s
iron-mink-demo-chart-7b4d4dbbd7-xtpf9  0/1    ContainerCreating  0         0s
iron-mink-demo-chart-7b4d4dbbd7-xz4b8  0/1    ContainerCreating  0         0s
iron-mink-mariadb-0                    0/1    Pending            0         0s


NOTES:
1. Get the application URL by running these commands:
     NOTE: It may take a few minutes for the LoadBalancer IP to be available.
           You can watch the status of by running 'kubectl get svc -w iron-mink-demo-chart'
  export SERVICE_IP=$(kubectl get svc --namespace default iron-mink-demo-chart -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  echo http://$SERVICE_IP:80
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl get pvc,pv
NAME                                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/data-iron-mink-mariadb-0   Bound    pvc-f234d2fb-4ff7-11e9-aded-029786647150   8Gi        RWO            gp2            1m

NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                              STORAGECLASS   REASON   AGE
persistentvolume/pvc-f234d2fb-4ff7-11e9-aded-029786647150   8Gi        RWO            Delete           Bound    default/data-iron-mink-mariadb-0   gp2                     1m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl get all
NAME                                        READY   STATUS             RESTARTS   AGE
pod/iron-mink-demo-chart-7b4d4dbbd7-r72dl   0/1     CrashLoopBackOff   3          1m
pod/iron-mink-demo-chart-7b4d4dbbd7-xtpf9   0/1     Running            4          1m
pod/iron-mink-demo-chart-7b4d4dbbd7-xz4b8   0/1     Running            4          1m
pod/iron-mink-mariadb-0                     1/1     Running            0          1m

NAME                           TYPE           CLUSTER-IP      EXTERNAL-IP                                                                PORT(S)        AGE
service/iron-mink-demo-chart   LoadBalancer   100.71.57.161   af21406214ff711e9aded02978664715-67939971.eu-central-1.elb.amazonaws.com   80:32146/TCP   1m
service/iron-mink-mariadb      ClusterIP      100.68.150.64   <none>                                                                     3306/TCP       1m
service/kubernetes             ClusterIP      100.64.0.1      <none>                                                                     443/TCP        1h

NAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/iron-mink-demo-chart   3         3         3            0           1m

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/iron-mink-demo-chart-7b4d4dbbd7   3         3         0       1m

NAME                                 DESIRED   CURRENT   AGE
statefulset.apps/iron-mink-mariadb   1         1         1m
```

- Get the password ny using:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl get secret iron-mink-mariadb -o yaml
apiVersion: v1
data:
  mariadb-password: anljTkpTOUlmdg==
  mariadb-root-password: YTdHbEJQVkI2Sg==
kind: Secret
metadata:
  creationTimestamp: "2019-03-26T18:49:54Z"
  labels:
    app: mariadb
    chart: mariadb-4.4.2
    heritage: Tiller
    release: iron-mink
  name: iron-mink-mariadb
  namespace: default
  resourceVersion: "5687"
  selfLink: /api/v1/namespaces/default/secrets/iron-mink-mariadb
  uid: f20c3e4d-4ff7-11e9-aded-029786647150
type: Opaque
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# echo 'anljTkpTOUlmdg==' | base64 --decode
jycNJS9Ifvroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart#
```

```bash
jycNJS9Ifvroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl get pod
NAME                                    READY   STATUS    RESTARTS   AGE
iron-mink-demo-chart-7b4d4dbbd7-r72dl   1/1     Running   4          8m
iron-mink-demo-chart-7b4d4dbbd7-xtpf9   1/1     Running   4          8m
iron-mink-demo-chart-7b4d4dbbd7-xz4b8   1/1     Running   4          8m
iron-mink-mariadb-0                     1/1     Running   0          8m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl logs iron-mink-demo-chart-7b4d4dbbd7-r72dl

> node-demo-app@0.0.1 start /app
> node index.js

Example app running
Connection to db established
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl get svc -o wide
NAME                   TYPE           CLUSTER-IP      EXTERNAL-IP                                                                PORT(S)        AGE   SELECTOR
iron-mink-demo-chart   LoadBalancer   100.71.57.161   af21406214ff711e9aded02978664715-67939971.eu-central-1.elb.amazonaws.com   80:32146/TCP   35m   app=demo-chart,release=iron-mink
iron-mink-mariadb      ClusterIP      100.68.150.64   <none>                                                                     3306/TCP       35m   app=mariadb,component=master,release=iron-mink
kubernetes             ClusterIP      100.64.0.1      <none>                                                                     443/TCP        1h    <none>
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# curl af21406214ff711e9aded02978664715-67939971.eu-central-1.elb.amazonaws.com
Hello World! You are visitor number 1262root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart#
```

- We are going to upgrade the helm chart by using:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# helm upgrade --set image.tag=v0.0.2,mariadb.db.password=jycNJS9If iron-mink .
Release "iron-mink" has been upgraded. Happy Helming!
LAST DEPLOYED: Tue Mar 26 19:37:03 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Pod(related)
NAME                                   READY  STATUS             RESTARTS  AGE
iron-mink-demo-chart-6ff778cf94-r8kbf  0/1    ContainerCreating  0         0s
iron-mink-demo-chart-7b4d4dbbd7-r72dl  1/1    Running            4         47m
iron-mink-demo-chart-7b4d4dbbd7-xtpf9  1/1    Running            4         47m
iron-mink-demo-chart-7b4d4dbbd7-xz4b8  1/1    Running            4         47m
iron-mink-mariadb-0                    1/1    Running            0         47m

==> v1/Secret
NAME               TYPE    DATA  AGE
iron-mink-mariadb  Opaque  2     47m

==> v1/ConfigMap
NAME                            DATA  AGE
iron-mink-mariadb-init-scripts  1     47m
iron-mink-mariadb               1     47m
iron-mink-mariadb-tests         1     47m

==> v1/Service
NAME                  TYPE          CLUSTER-IP     EXTERNAL-IP       PORT(S)       AGE
iron-mink-mariadb     ClusterIP     100.68.150.64  <none>            3306/TCP      47m
iron-mink-demo-chart  LoadBalancer  100.71.57.161  af21406214ff7...  80:32146/TCP  47m

==> v1beta2/Deployment
NAME                  DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
iron-mink-demo-chart  3        4        1           3          47m

==> v1beta1/StatefulSet
NAME               DESIRED  CURRENT  AGE
iron-mink-mariadb  1        1        47m


NOTES:
1. Get the application URL by running these commands:
     NOTE: It may take a few minutes for the LoadBalancer IP to be available.
           You can watch the status of by running 'kubectl get svc -w iron-mink-demo-chart'
  export SERVICE_IP=$(kubectl get svc --namespace default iron-mink-demo-chart -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  echo http://$SERVICE_IP:80

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart#
```

- It doesn't work

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart# kubectl get pods
NAME                                    READY   STATUS             RESTARTS   AGE
iron-mink-demo-chart-6ff778cf94-g9rdl   0/1     CrashLoopBackOff   6          10m
iron-mink-demo-chart-7b4d4dbbd7-r72dl   1/1     Running            4          1h
iron-mink-demo-chart-7b4d4dbbd7-xtpf9   1/1     Running            4          1h
iron-mink-demo-chart-7b4d4dbbd7-xz4b8   1/1     Running            4          1h
iron-mink-mariadb-0                     1/1     Running            0          1h
```

- After a few hours it still doesn't work:

```bash
Last login: Tue Mar 26 16:59:32 2019 from 95.16.77.35
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                                        READY   STATUS             RESTARTS   AGE
pod/iron-mink-demo-chart-6ff778cf94-g9rdl   0/1     CrashLoopBackOff   142        9h
pod/iron-mink-demo-chart-7b4d4dbbd7-r72dl   1/1     Running            4          10h
pod/iron-mink-demo-chart-7b4d4dbbd7-xtpf9   1/1     Running            4          10h
pod/iron-mink-demo-chart-7b4d4dbbd7-xz4b8   1/1     Running            4          10h
pod/iron-mink-mariadb-0                     1/1     Running            0          10h

NAME                           TYPE           CLUSTER-IP      EXTERNAL-IP                                                                PORT(S)        AGE
service/iron-mink-demo-chart   LoadBalancer   100.71.57.161   af21406214ff711e9aded02978664715-67939971.eu-central-1.elb.amazonaws.com   80:32146/TCP   10h
service/iron-mink-mariadb      ClusterIP      100.68.150.64   <none>                                                                     3306/TCP       10h
service/kubernetes             ClusterIP      100.64.0.1      <none>                                                                     443/TCP        11h

NAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/iron-mink-demo-chart   3         4         1            3           10h

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/iron-mink-demo-chart-6ff778cf94   1         1         0       9h
replicaset.apps/iron-mink-demo-chart-7b4d4dbbd7   3         3         3       10h

NAME                                 DESIRED   CURRENT   AGE
statefulset.apps/iron-mink-mariadb   1         1         10h
```

- I'm going to delete the demo-chart

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# helm list
NAME            REVISION        UPDATED                         STATUS          CHART                   NAMESPACE
iron-mink       2               Tue Mar 26 19:37:03 2019        DEPLOYED        demo-chart-0.0.1        default
root@ubuntu-s-1vcpu-2gb-lon1-01:~# helm delete iron-mink
release "iron-mink" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                                        READY   STATUS        RESTARTS   AGE
pod/iron-mink-demo-chart-7b4d4dbbd7-r72dl   0/1     Terminating   5          10h

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   11h
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   11h
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodejsAppHelmChart.png)

- We can use `helm history` to see what versions were installed:

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodejsAppHelmChart2.png)

- We can use `helm rollback` to go back to a previous version

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodejsAppHelmChart3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodejsAppHelmChart4.png)

- We can delete a chart with `helm delete`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoNodejsAppHelmChart5.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# helm list --all
NAME            REVISION        UPDATED                         STATUS  CHART                   NAMESPACE
iron-mink       2               Tue Mar 26 19:37:03 2019        DELETED demo-chart-0.0.1        default
root@ubuntu-s-1vcpu-2gb-lon1-01:~# helm delete iron-mink --purge
release "iron-mink" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~# helm list --all
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pv,pvc
NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                              STORAGECLASS   REASON   AGE
persistentvolume/pvc-f234d2fb-4ff7-11e9-aded-029786647150   8Gi        RWO            Delete           Bound    default/data-iron-mink-mariadb-0   gp2                     10h

NAME                                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/data-iron-mink-mariadb-0   Bound    pvc-f234d2fb-4ff7-11e9-aded-029786647150   8Gi        RWO            gp2            10h
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl delete persistentvolumeclaim/data-iron-mink-mariadb-0
persistentvolumeclaim "data-iron-mink-mariadb-0" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pv,pvc
No resources found.
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

### 100. Demo: Setting up a Helm Repository on S3

- We need to use `helm/setup-s3-helm-repo.sh` to set up the s3 repository

> helm/setup-s3-helm-repo.sh

```bash
#!/bin/bash

set -e

# create random string
RANDOM_STRING=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | tr '[:upper:]' '[:lower:]' | head -n 1)

# it's important to set the AWS_REGION if not set. Change the default
DEFAULT_REGION="eu-central-1"
AWS_REGION="${AWS_REGION:-${DEFAULT_REGION}}"

export AWS_REGION

# create s3 bucket
if [ "$AWS_REGION" == "us-east-1" ] ; then
  aws s3api create-bucket --bucket helm-${RANDOM_STRING}
else
  aws s3api create-bucket --bucket helm-${RANDOM_STRING} --region $AWS_REGION --create-bucket-configuration LocationConstraint=${AWS_REGION}
fi

# install helm s3 plugin
helm plugin install https://github.com/hypnoglow/helm-s3.git

# initialize s3 bucket
helm s3 init s3://helm-${RANDOM_STRING}/charts

# add repository to helm
helm repo add my-charts s3://helm-${RANDOM_STRING}/charts
```

- Ensure the aws has been set correctly by executing

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws sts get-caller-identity
{
    "UserId": "MyUserId ....",
    "Account": "My Account ...",
    "Arn": "arn:aws:iam::My Account ...:user/devopsinuse"
}
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We need to run the following to set up the S3 helm repository

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# ./setup-s3-helm-repo.sh
-bash: ./setup-s3-helm-repo.sh: Permission denied
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# chmod +x ./setup-s3-helm-repo.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# ./setup-s3-helm-repo.sh
{
    "Location": "http://helm-i6zskv3g.s3.amazonaws.com/"
}
Downloading and installing helm-s3 v0.8.0 ...
Checksum is valid.
Installed plugin: s3
Initialized empty repository at s3://helm-i6zskv3g/charts
"my-charts" has been added to your repositories
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm repo list
NAME            URL
stable          https://kubernetes-charts.storage.googleapis.com
local           http://127.0.0.1:8879/charts
incubator       http://storage.googleapis.com/kubernetes-charts-incubator
my-charts       s3://helm-i6zskv3g/charts
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

- We have to package the chart by using

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm package demo-chart
Successfully packaged chart and saved it to: /root/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/demo-chart-0.0.1.tgz
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# ls
README.md  demo-chart  demo-chart-0.0.1.tgz  helm-rbac.yaml  helm-role.yaml  jenkins  put-bucket-policy.sh  setup-s3-helm-repo.sh
```

- We can push it to the S3 repository by using

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# export AWS_REGION=eu-central-1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm s3 push ./demo-chart-0.0.1.tgz my-charts
check if chart already exists in the repository: head s3 object: BucketRegionError: incorrect region, the bucket is not in 'eu-central-1' region
        status code: 301, request id: , host id:
Error: plugin "s3" exited with error
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# export AWS_REGION=eu-west-1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm s3 push ./demo-chart-0.0.1.tgz my-charts
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoSettingUpAHelmRepositoryOnS3.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm search demo-chart
NAME                    CHART VERSION   APP VERSION     DESCRIPTION
local/demo-chart        0.0.1           1.0             A Helm chart for Kubernetes
my-charts/demo-chart    0.0.1           1.0             A Helm chart for Kubernetes
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm install my-charts/demo-chart
NAME:   listless-dog
LAST DEPLOYED: Wed Mar 27 16:47:22 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Service
NAME                     TYPE          CLUSTER-IP      EXTERNAL-IP  PORT(S)       AGE
listless-dog-mariadb     ClusterIP     100.69.171.81   <none>       3306/TCP      0s
listless-dog-demo-chart  LoadBalancer  100.69.144.228  <pending>    80:31500/TCP  0s

==> v1beta2/Deployment
NAME                     DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
listless-dog-demo-chart  3        0        0           0          0s

==> v1beta1/StatefulSet
NAME                  DESIRED  CURRENT  AGE
listless-dog-mariadb  1        1        0s

==> v1/Pod(related)
NAME                                      READY  STATUS   RESTARTS  AGE
listless-dog-demo-chart-74d7789979-cwfbp  0/1    Pending  0         0s
listless-dog-demo-chart-74d7789979-kkxf6  0/1    Pending  0         0s
listless-dog-demo-chart-74d7789979-nnr5g  0/1    Pending  0         0s
listless-dog-mariadb-0                    0/1    Pending  0         0s

==> v1/Secret
NAME                  TYPE    DATA  AGE
listless-dog-mariadb  Opaque  2     0s

==> v1/ConfigMap
NAME                               DATA  AGE
listless-dog-mariadb-init-scripts  1     0s
listless-dog-mariadb               1     0s
listless-dog-mariadb-tests         1     0s


NOTES:
1. Get the application URL by running these commands:
     NOTE: It may take a few minutes for the LoadBalancer IP to be available.
           You can watch the status of by running 'kubectl get svc -w listless-dog-demo-chart'
  export SERVICE_IP=$(kubectl get svc --namespace default listless-dog-demo-chart -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  echo http://$SERVICE_IP:80

```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm list
NAME            REVISION        UPDATED                         STATUS          CHART                   NAMESPACE
listless-dog    1               Wed Mar 27 16:47:22 2019        DEPLOYED        demo-chart-0.0.1        default
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm delete listless-dog
release "listless-dog" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all
NAME                                           READY   STATUS        RESTARTS   AGE
pod/listless-dog-demo-chart-74d7789979-cwfbp   0/1     Terminating   3          2m
pod/listless-dog-demo-chart-74d7789979-kkxf6   0/1     Terminating   3          2m
pod/listless-dog-demo-chart-74d7789979-nnr5g   0/1     Terminating   3          2m

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   23h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get pvc,pv
NAME                                                STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/data-listless-dog-mariadb-0   Bound    pvc-fe457255-50af-11e9-aded-029786647150   8Gi        RWO            gp2            2m

NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                 STORAGECLASS   REASON   AGE
persistentvolume/pvc-fe457255-50af-11e9-aded-029786647150   8Gi        RWO            Delete           Bound    default/data-listless-dog-mariadb-0   gp2                     2m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl delete persistentvolumeclaim/data-listless-dog-mariadb-0
persistentvolumeclaim "data-listless-dog-mariadb-0" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get pvc,pv                 No resources found.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all                    NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   23h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

### 101. Demo: Building and Deploying Helm Charts with Jenkins

- We need to install the `jenkins chart`

- We are going to use the `helm/jenkins/serviceaccount.yaml` document to create the `jenkins-helm` ServiceAccount and the `jenkins-helm` ClusterRoleBinding

> helm/jenkins/serviceaccount.yaml

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins-helm
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: jenkins-helm
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: jenkins-helm
    namespace: default
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/jenkins# kubectl create -f serviceaccount.yaml
serviceaccount/jenkins-helm created
clusterrolebinding.rbac.authorization.k8s.io/jenkins-helm created
```

- We can install the jenkins chart by using the following command:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/jenkins# helm install --name jenkins --set rbac.install=true,Master.RunAsUser=1000,Master.FsGroup=1000 stable/jenkins
NAME:   jenkins
LAST DEPLOYED: Wed Mar 27 17:02:05 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1beta1/ClusterRoleBinding
NAME                  AGE
jenkins-role-binding  0s

==> v1/Service
NAME           TYPE          CLUSTER-IP      EXTERNAL-IP  PORT(S)         AGE
jenkins-agent  ClusterIP     100.68.128.216  <none>       50000/TCP       0s
jenkins        LoadBalancer  100.68.146.77   <pending>    8080:32358/TCP  0s

==> v1/Deployment
NAME     DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
jenkins  1        1        1           0          0s

==> v1/Pod(related)
NAME                      READY  STATUS   RESTARTS  AGE
jenkins-5cfdc96f56-z4ks5  0/1    Pending  0         0s

==> v1/Secret
NAME     TYPE    DATA  AGE
jenkins  Opaque  2     0s

==> v1/ConfigMap
NAME           DATA  AGE
jenkins        5     0s
jenkins-tests  1     0s

==> v1/PersistentVolumeClaim
NAME     STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE
jenkins  Pending  gp2     0s

==> v1/ServiceAccount
NAME     SECRETS  AGE
jenkins  1        0s


NOTES:
#### This chart is undergoing work which may result in breaking changes. ####
#### Please consult the following table and the README ####

Master.HostName --> Master.ingress.hostName
New value - Master.ingress.enabled
Master.Ingress.ApiVersion - Deprecated
Master.Ingress.Annotations --> Master.ingress.annotations
Master.Ingress.Labels --> Master.ingress.labels
Master.Ingress.Path --> Master.ingress.path
Master.Ingress.TLS --> Master.ingress.tls
Master.OwnSshKey, a bool, has been replaced with Master.AdminSshKey, which is expected to be a string containing the actual key

1. Get your 'admin' user password by running:
  printf $(kubectl get secret --namespace default jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
2. Get the Jenkins URL to visit by running these commands in the same shell:
  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        You can watch the status of by running 'kubectl get svc --namespace default -w jenkins'
  export SERVICE_IP=$(kubectl get svc --namespace default jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
  echo http://$SERVICE_IP:8080/login

3. Login with the password from step 1 and the username: admin


For more information on running Jenkins on Kubernetes, visit:
https://cloud.google.com/solutions/jenkins-on-container-engine
Configure the Kubernetes plugin in Jenkins to use the following Service Account name jenkins using the following steps:
  Create a Jenkins credential of type Kubernetes service account with service account name jenkins
  Under configure Jenkins -- Update the credentials config in the cloud section to use the service account credential you created in the step above.
```

- We can obtain the `admin` password by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/jenkins# printf $(kubectl get secret --namespace default jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
uGlvV0ll2W
```

- We can obtain the URL by executing the following command:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/jenkins# export SERVICE_IP=$(kubectl get svc --namespace default jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm/jenkins# echo http://$SERVICE_IP:8080/login
http://a0cd3170b50b211e9aded02978664715-799733272.eu-central-1.elb.amazonaws.com:8080/login

```

- Browse to http://a0cd3170b50b211e9aded02978664715-799733272.eu-central-1.elb.amazonaws.com:8080/login

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins5.png)

- We need to give Jenkins permission to access the `S3 chart repository`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# aws iam list-roles |grep kubernetes.peelmicro.com
            "RoleName": "masters.kubernetes.peelmicro.com",
            "Arn": "arn:aws:iam::972569889348:role/masters.kubernetes.peelmicro.com",
            "RoleName": "nodes.kubernetes.peelmicro.com",
            "Arn": "arn:aws:iam::972569889348:role/nodes.kubernetes.peelmicro.com",
```

- We are going to use the `helm/put-bucket-policy.sh` document to give Jenkins permission to access.

> helm/put-bucket-policy.sh

```bash
#!/bin/bash
DEFAULT_REGION="eu-central-1a"
AWS_REGION="${AWS_REGION:-${DEFAULT_REGION}}"

BUCKET="helm-i6zskv3g"
NODE_ROLE_ARN="arn:aws:iam::972569889348:role/nodes.kubernetes.peelmicro.com"

export AWS_REGION

aws s3api put-bucket-policy --bucket ${BUCKET} --policy '{
   "Statement": [
      {
         "Effect": "Allow",
         "Principal": {
            "AWS": "'${NODE_ROLE_ARN}'"
          },
         "Action": [
          "s3:GetObject",
          "s3:PutObject"
          ],
         "Resource": "arn:aws:s3:::'${BUCKET}'/*"
      },
      {
         "Effect": "Allow",
         "Principal": {
            "AWS": "'${NODE_ROLE_ARN}'"
          },
         "Action": "s3:ListBucket",
         "Resource": "arn:aws:s3:::'${BUCKET}'"
      }
  ]
}'
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# chmod +x ./put-bucket-policy.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# ./put-bucket-policy.sh

An error occurred (MalformedPolicy) when calling the PutBucketPolicy operation: Invalid principal in policy
```

- I imagine it is because the S3 bucket is created in a different region to the cluster one.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm repo remove my-charts
"my-charts" has been removed from your repositories
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm repo list
NAME            URL
stable          https://kubernetes-charts.storage.googleapis.com
local           http://127.0.0.1:8879/charts
incubator       http://storage.googleapis.com/kubernetes-charts-incubator
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# cat setup-s3-helm-repo.sh
#!/bin/bash

set -e

# create random string
#RANDOM_STRING=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | tr '[:upper:]' '[:lower:]' | head -n 1)

RANDOM_STRING="kubernetescourse-peelmicro"

# it's important to set the AWS_REGION if not set. Change the default
DEFAULT_REGION="eu-central-1"
AWS_REGION="${AWS_REGION:-${DEFAULT_REGION}}"

export AWS_REGION

# create s3 bucket
if [ "$AWS_REGION" == "us-east-1" ] ; then
  aws s3api create-bucket --bucket helm-${RANDOM_STRING}
else
  aws s3api create-bucket --bucket helm-${RANDOM_STRING} --region $AWS_REGION --create-bucket-configuration LocationConstraint=${AWS_REGION}
fi

# install helm s3 plugin
# :qwhelm plugin install https://github.com/hypnoglow/helm-s3.git

# initialize s3 bucket
helm s3 init s3://helm-${RANDOM_STRING}/charts

# add repository to helm
helm repo add my-charts s3://helm-${RANDOM_STRING}/charts

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# ./setup-s3-helm-repo.sh
{
    "Location": "http://helm-kubernetes-course-peelmicro.s3.amazonaws.com/"
}
Initialized empty repository at s3://helm-kubernetescourse-peelmicro/charts
"my-charts" has been added to your repositories
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm repo list
NAME            URL
stable          https://kubernetes-charts.storage.googleapis.com
local           http://127.0.0.1:8879/charts
incubator       http://storage.googleapis.com/kubernetes-charts-incubator
my-charts       s3://helm-kubernetescourse-peelmicro/charts
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# cat put-bucket-policy.sh
#!/bin/bash
DEFAULT_REGION="eu-central-1"
AWS_REGION="${AWS_REGION:-${DEFAULT_REGION}}"

BUCKET="helm-kubernetescourse-peelmicro"
NODE_ROLE_ARN="arn:aws:iam::972569889348:role/nodes.kubernetes.peelmicro.com"

export AWS_REGION

aws s3api put-bucket-policy --bucket ${BUCKET} --policy '{
   "Statement": [
      {
         "Effect": "Allow",
         "Principal": {
            "AWS": "'${NODE_ROLE_ARN}'"
          },
         "Action": [
          "s3:GetObject",
          "s3:PutObject"
          ],
         "Resource": "arn:aws:s3:::'${BUCKET}'/*"
      },
      {
         "Effect": "Allow",
         "Principal": {
            "AWS": "'${NODE_ROLE_ARN}'"
          },
         "Action": "s3:ListBucket",
         "Resource": "arn:aws:s3:::'${BUCKET}'"
      }
  ]
}'
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# chmod +x ./put-bucket-policy.sh    root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# ./put-bucket-policy.sh
```

- There are no errors now.

- We need to create a new job

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins9.png)

- We could copy it from a Git repository but we can paste the script as well. We are going to use the `helm/jenkins/Jenkinsfile.build` document.

> helm/jenkins/Jenkinsfile.build

```groovy
pipeline {
  agent {
    kubernetes {
      label 'helm-pod'
      containerTemplate {
        name 'helm'
        image 'wardviaene/helm-s3'
        ttyEnabled true
        command 'cat'
      }
    }
  }
  stages {
    stage('Run helm') {
      steps {
        container('helm') {
          git url: 'git://github.com/wardviaene/kubernetes-course.git', branch: 'master'
          sh '''
          HELM_BUCKET=helm-kubernetescourse-peelmicro
          PACKAGE=demo-chart
          export AWS_REGION=eu-central-1

          cp -r /home/helm/.helm ~
          helm repo add my-charts s3://${HELM_BUCKET}/charts
          cd helm/${PACKAGE}
          helm dependency update
          helm package .
          helm s3 push --force ${PACKAGE}-*.tgz my-charts
          '''
        }
      }
    }
  }
}
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins11.png)

```
Started by user admin
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Still waiting to schedule task
‘helm-pod-hqt3g-1m8mh’ is offline
Agent helm-pod-hqt3g-1m8mh is provisioned from template Kubernetes Pod Template
Agent specification [Kubernetes Pod Template] (helm-pod):
* [helm] wardviaene/helm-s3

Running on helm-pod-hqt3g-1m8mh in /home/jenkins/workspace/demo-chart-build
[Pipeline] {
[Pipeline] container
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Run helm)
[Pipeline] container
[Pipeline] {
[Pipeline] git
No credentials specified
Cloning the remote Git repository
Cloning repository git://github.com/wardviaene/kubernetes-course.git
 > git init /home/jenkins/workspace/demo-chart-build # timeout=10
Fetching upstream changes from git://github.com/wardviaene/kubernetes-course.git
 > git --version # timeout=10
 > git fetch --tags --force --progress git://github.com/wardviaene/kubernetes-course.git +refs/heads/*:refs/remotes/origin/*
 > git config remote.origin.url git://github.com/wardviaene/kubernetes-course.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url git://github.com/wardviaene/kubernetes-course.git # timeout=10
Fetching upstream changes from git://github.com/wardviaene/kubernetes-course.git
 > git fetch --tags --force --progress git://github.com/wardviaene/kubernetes-course.git +refs/heads/*:refs/remotes/origin/*
Checking out Revision c056b0eee0c2d3e64fc03d951a8057c00b46b423 (refs/remotes/origin/master)
Commit message: "Merge pull request #12 from sdelrio/pr-fix-format-kubeless-md"
First time build. Skipping changelog.
[Pipeline] sh
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f c056b0eee0c2d3e64fc03d951a8057c00b46b423
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b master c056b0eee0c2d3e64fc03d951a8057c00b46b423
+ HELM_BUCKET=helm-kubernetescourse-peelmicro
+ PACKAGE=demo-chart
+ export 'AWS_REGION=eu-central-1'
+ cp -r /home/helm/.helm /home/jenkins
+ helm repo add my-charts s3://helm-kubernetescourse-peelmicro/charts
"my-charts" has been added to your repositories
+ cd helm/demo-chart
+ helm dependency update
Hang tight while we grab the latest from your chart repositories...
...Unable to get an update from the "local" chart repository (http://127.0.0.1:8879/charts):
	Get http://127.0.0.1:8879/charts/index.yaml: dial tcp 127.0.0.1:8879: connect: connection refused
...Successfully got an update from the "my-charts" chart repository
...Successfully got an update from the "stable" chart repository
Update Complete. ⎈Happy Helming!⎈
Saving 1 charts
Downloading mariadb from repo https://kubernetes-charts.storage.googleapis.com/
Deleting outdated charts
+ helm package .
Successfully packaged chart and saved it to: /home/jenkins/workspace/demo-chart-build/helm/demo-chart/demo-chart-0.0.1.tgz
+ helm s3 push --force demo-chart-0.0.1.tgz my-charts
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // node
[Pipeline] }
[Pipeline] // podTemplate
[Pipeline] End of Pipeline
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins12.png)

- We need to create a new `pipeline` for the deployment.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins13.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins14.png)

- We are going to use the `helm/jenkins/Jenkinsfile.deploy` document to create the deployment.

> helm/jenkins/Jenkinsfile.deploy

```groovy
pipeline {
  agent {
    kubernetes {
      label 'helm-pod'
      serviceAccount 'jenkins-helm'
      containerTemplate {
        name 'helm-pod'
        image 'wardviaene/helm-s3'
        ttyEnabled true
        command 'cat'
      }
    }
  }
  stages {
    stage('Run helm') {
      steps {
        container('helm-pod') {
          git url: 'git://github.com/wardviaene/kubernetes-course.git', branch: 'master'
          sh '''
          HELM_BUCKET=helm-kubernetescourse-peelmicro
          PACKAGE=demo-chart
          export AWS_REGION=eu-central-1

          cp -r /home/helm/.helm ~
          helm repo add my-charts s3://${HELM_BUCKET}/charts
          DEPLOYED=$(helm list |grep -E "^${PACKAGE}" |grep DEPLOYED |wc -l)
          if [ $DEPLOYED == 0 ] ; then
            helm install --name ${PACKAGE} my-charts/${PACKAGE}
          else
            helm upgrade ${PACKAGE} my-charts/${PACKAGE}
          fi
          echo "deployed!"
          '''
        }
      }
    }
  }
}
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins15.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins16.png)

```
Console Output
Started by user admin
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Still waiting to schedule task
‘helm-pod-wchm9-gxdg6’ is offline
Agent helm-pod-wchm9-gxdg6 is provisioned from template Kubernetes Pod Template
Agent specification [Kubernetes Pod Template] (helm-pod):
* [helm-pod] wardviaene/helm-s3

Running on helm-pod-wchm9-gxdg6 in /home/jenkins/workspace/demo-chart deploy
[Pipeline] {
[Pipeline] container
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Run helm)
[Pipeline] container
[Pipeline] {
[Pipeline] git
No credentials specified
Cloning the remote Git repository
Cloning repository git://github.com/wardviaene/kubernetes-course.git
 > git init /home/jenkins/workspace/demo-chart deploy # timeout=10
Fetching upstream changes from git://github.com/wardviaene/kubernetes-course.git
 > git --version # timeout=10
 > git fetch --tags --force --progress git://github.com/wardviaene/kubernetes-course.git +refs/heads/*:refs/remotes/origin/*
Checking out Revision c056b0eee0c2d3e64fc03d951a8057c00b46b423 (refs/remotes/origin/master)
 > git config remote.origin.url git://github.com/wardviaene/kubernetes-course.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url git://github.com/wardviaene/kubernetes-course.git # timeout=10
Fetching upstream changes from git://github.com/wardviaene/kubernetes-course.git
 > git fetch --tags --force --progress git://github.com/wardviaene/kubernetes-course.git +refs/heads/*:refs/remotes/origin/*
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f c056b0eee0c2d3e64fc03d951a8057c00b46b423
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b master c056b0eee0c2d3e64fc03d951a8057c00b46b423
Commit message: "Merge pull request #12 from sdelrio/pr-fix-format-kubeless-md"
First time build. Skipping changelog.
[Pipeline] sh
+ HELM_BUCKET=helm-kubernetescourse-peelmicro
+ PACKAGE=demo-chart
+ export 'AWS_REGION=eu-central-1'
+ cp -r /home/helm/.helm /home/jenkins
+ helm repo add my-charts s3://helm-kubernetescourse-peelmicro/charts
"my-charts" has been added to your repositories
+ wc -l
+ grep DEPLOYED
+ grep -E ^demo-chart
+ helm list
+ DEPLOYED=0
+ '[' 0 '==' 0 ]
+ helm install --name demo-chart my-charts/demo-chart
NAME:   demo-chart
LAST DEPLOYED: Wed Mar 27 19:30:40 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                             DATA  AGE
demo-chart-mariadb-init-scripts  1     0s
demo-chart-mariadb               1     0s
demo-chart-mariadb-tests         1     0s

==> v1/Service
NAME                TYPE          CLUSTER-IP     EXTERNAL-IP  PORT(S)       AGE
demo-chart-mariadb  ClusterIP     100.71.89.40   <none>       3306/TCP      0s
demo-chart          LoadBalancer  100.68.228.41  <pending>    80:30268/TCP  0s

==> v1beta2/Deployment
NAME        DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
demo-chart  3        0        0           0          0s

==> v1beta1/StatefulSet
NAME                DESIRED  CURRENT  AGE
demo-chart-mariadb  1        0        0s

==> v1/Pod(related)
NAME                        READY  STATUS   RESTARTS  AGE
demo-chart-8b6bdc4ff-2xx28  0/1    Pending  0         0s
demo-chart-8b6bdc4ff-4qh28  0/1    Pending  0         0s
demo-chart-8b6bdc4ff-xcmn6  0/1    Pending  0         0s
demo-chart-mariadb-0        0/1    Pending  0         0s

==> v1/Secret
NAME                TYPE    DATA  AGE
demo-chart-mariadb  Opaque  2     1s


NOTES:
1. Get the application URL by running these commands:
     NOTE: It may take a few minutes for the LoadBalancer IP to be available.
           You can watch the status of by running 'kubectl get svc -w demo-chart'
  export SERVICE_IP=$(kubectl get svc --namespace default demo-chart -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  echo http://$SERVICE_IP:80

+ echo 'deployed!'
deployed!
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // node
[Pipeline] }
[Pipeline] // podTemplate
[Pipeline] End of Pipeline
Finished: SUCCESS
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all
NAME                             READY   STATUS    RESTARTS   AGE
pod/demo-chart-8b6bdc4ff-2xx28   1/1     Running   4          1m
pod/demo-chart-8b6bdc4ff-4qh28   1/1     Running   4          1m
pod/demo-chart-8b6bdc4ff-xcmn6   1/1     Running   4          1m
pod/demo-chart-mariadb-0         1/1     Running   0          1m
pod/jenkins-5cfdc96f56-z4ks5     1/1     Running   0          2h

NAME                         TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)          AGE
service/demo-chart           LoadBalancer   100.68.228.41    ace8e940150c611e9aded02978664715-1873495111.eu-central-1.elb.amazonaws.com   80:30268/TCP     1m
service/demo-chart-mariadb   ClusterIP      100.71.89.40     <none>                                                                       3306/TCP         1m
service/jenkins              LoadBalancer   100.68.146.77    a0cd3170b50b211e9aded02978664715-799733272.eu-central-1.elb.amazonaws.com    8080:32358/TCP   2h
service/jenkins-agent        ClusterIP      100.68.128.216   <none>                                                                       50000/TCP        2h
service/kubernetes           ClusterIP      100.64.0.1       <none>                                                                       443/TCP          1d

NAME                         DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo-chart   3         3         3            3           1m
deployment.apps/jenkins      1         1         1            1           2h

NAME                                   DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-chart-8b6bdc4ff   3         3         3       1m
replicaset.apps/jenkins-5cfdc96f56     1         1         1       2h

NAME                                  DESIRED   CURRENT   AGE
statefulset.apps/demo-chart-mariadb   1         1         1m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get svc -o wide
NAME                 TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)          AGE   SELECTOR
demo-chart           LoadBalancer   100.68.228.41    ace8e940150c611e9aded02978664715-1873495111.eu-central-1.elb.amazonaws.com   80:30268/TCP     3m    app=demo-chart,release=demo-chart
demo-chart-mariadb   ClusterIP      100.71.89.40     <none>                                                                       3306/TCP         3m    app=mariadb,component=master,release=demo-chart
jenkins              LoadBalancer   100.68.146.77    a0cd3170b50b211e9aded02978664715-799733272.eu-central-1.elb.amazonaws.com    8080:32358/TCP   2h    component=jenkins-jenkins-master
jenkins-agent        ClusterIP      100.68.128.216   <none>                                                                       50000/TCP        2h    component=jenkins-jenkins-master
kubernetes           ClusterIP      100.64.0.1       <none>                                                                       443/TCP          1d    <none>
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# curl  ace8e940150c611e9aded02978664715-1873495111.eu-central-1.elb.amazonaws.com
Hello World! You are visitor number 91root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

- We can run the `pipeline` again to force to deploy it again.

```bash
In progressConsole Output
Started by user admin
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Still waiting to schedule task
‘helm-pod-5q9sh-2c142’ is offline
Agent helm-pod-5q9sh-2c142 is provisioned from template Kubernetes Pod Template
Agent specification [Kubernetes Pod Template] (helm-pod):
* [helm-pod] wardviaene/helm-s3

Running on helm-pod-5q9sh-2c142 in /home/jenkins/workspace/demo-chart deploy
[Pipeline] {
[Pipeline] container
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Run helm)
[Pipeline] container
[Pipeline] {
[Pipeline] git
No credentials specified
Cloning the remote Git repository
Cloning repository git://github.com/wardviaene/kubernetes-course.git
 > git init /home/jenkins/workspace/demo-chart deploy # timeout=10
Fetching upstream changes from git://github.com/wardviaene/kubernetes-course.git
 > git --version # timeout=10
 > git fetch --tags --force --progress git://github.com/wardviaene/kubernetes-course.git +refs/heads/*:refs/remotes/origin/*
Checking out Revision c056b0eee0c2d3e64fc03d951a8057c00b46b423 (refs/remotes/origin/master)
 > git config remote.origin.url git://github.com/wardviaene/kubernetes-course.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url git://github.com/wardviaene/kubernetes-course.git # timeout=10
Fetching upstream changes from git://github.com/wardviaene/kubernetes-course.git
 > git fetch --tags --force --progress git://github.com/wardviaene/kubernetes-course.git +refs/heads/*:refs/remotes/origin/*
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f c056b0eee0c2d3e64fc03d951a8057c00b46b423
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b master c056b0eee0c2d3e64fc03d951a8057c00b46b423
Commit message: "Merge pull request #12 from sdelrio/pr-fix-format-kubeless-md"
[Pipeline] sh
 > git rev-list --no-walk c056b0eee0c2d3e64fc03d951a8057c00b46b423 # timeout=10
+ HELM_BUCKET=helm-kubernetescourse-peelmicro
+ PACKAGE=demo-chart
+ export 'AWS_REGION=eu-central-1'
+ cp -r /home/helm/.helm /home/jenkins
+ helm repo add my-charts s3://helm-kubernetescourse-peelmicro/charts
"my-charts" has been added to your repositories
+ wc -l
+ grep DEPLOYED
+ grep -E ^demo-chart
+ helm list
+ DEPLOYED=1
+ '[' 1 '==' 0 ]
+ helm upgrade demo-chart my-charts/demo-chart
Release "demo-chart" has been upgraded. Happy Helming!
LAST DEPLOYED: Wed Mar 27 19:37:01 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME                TYPE    DATA  AGE
demo-chart-mariadb  Opaque  2     6m

==> v1/ConfigMap
NAME                             DATA  AGE
demo-chart-mariadb-init-scripts  1     6m
demo-chart-mariadb               1     6m
demo-chart-mariadb-tests         1     6m

==> v1/Service
NAME                TYPE          CLUSTER-IP     EXTERNAL-IP       PORT(S)       AGE
demo-chart-mariadb  ClusterIP     100.71.89.40   <none>            3306/TCP      6m
demo-chart          LoadBalancer  100.68.228.41  ace8e940150c6...  80:30268/TCP  6m

==> v1beta2/Deployment
NAME        DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
demo-chart  3        3        3           3          6m

==> v1beta1/StatefulSet
NAME                DESIRED  CURRENT  AGE
demo-chart-mariadb  1        1        6m

==> v1/Pod(related)
NAME                        READY  STATUS   RESTARTS  AGE
demo-chart-8b6bdc4ff-2xx28  1/1    Running  4         6m
demo-chart-8b6bdc4ff-4qh28  1/1    Running  4         6m
demo-chart-8b6bdc4ff-xcmn6  1/1    Running  4         6m
demo-chart-mariadb-0        1/1    Running  0         6m


NOTES:
1. Get the application URL by running these commands:
     NOTE: It may take a few minutes for the LoadBalancer IP to be available.
           You can watch the status of by running 'kubectl get svc -w demo-chart'
  export SERVICE_IP=$(kubectl get svc --namespace default demo-chart -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  echo http://$SERVICE_IP:80

+ echo 'deployed!'
deployed!
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // node
[Pipeline] }
[Pipeline] // podTemplate
[Pipeline] End of Pipeline
Finished: SUCCESS
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all
NAME                             READY   STATUS        RESTARTS   AGE
pod/demo-chart-8b6bdc4ff-2xx28   1/1     Running       4          7m
pod/demo-chart-8b6bdc4ff-4qh28   1/1     Running       4          7m
pod/demo-chart-8b6bdc4ff-xcmn6   1/1     Running       4          7m
pod/demo-chart-mariadb-0         1/1     Running       0          7m
pod/helm-pod-5q9sh-2c142         0/2     Terminating   0          1m
pod/jenkins-5cfdc96f56-z4ks5     1/1     Running       0          2h

NAME                         TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)          AGE
service/demo-chart           LoadBalancer   100.68.228.41    ace8e940150c611e9aded02978664715-1873495111.eu-central-1.elb.amazonaws.com   80:30268/TCP     7m
service/demo-chart-mariadb   ClusterIP      100.71.89.40     <none>                                                                       3306/TCP         7m
service/jenkins              LoadBalancer   100.68.146.77    a0cd3170b50b211e9aded02978664715-799733272.eu-central-1.elb.amazonaws.com    8080:32358/TCP   2h
service/jenkins-agent        ClusterIP      100.68.128.216   <none>                                                                       50000/TCP        2h
service/kubernetes           ClusterIP      100.64.0.1       <none>                                                                       443/TCP          1d

NAME                         DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo-chart   3         3         3            3           7m
deployment.apps/jenkins      1         1         1            1           2h

NAME                                   DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-chart-8b6bdc4ff   3         3         3       7m
replicaset.apps/jenkins-5cfdc96f56     1         1         1       2h

NAME                                  DESIRED   CURRENT   AGE
statefulset.apps/demo-chart-mariadb   1         1         7m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all
NAME                             READY   STATUS    RESTARTS   AGE
pod/demo-chart-8b6bdc4ff-2xx28   1/1     Running   4          8m
pod/demo-chart-8b6bdc4ff-4qh28   1/1     Running   4          8m
pod/demo-chart-8b6bdc4ff-xcmn6   1/1     Running   4          8m
pod/demo-chart-mariadb-0         1/1     Running   0          8m
pod/jenkins-5cfdc96f56-z4ks5     1/1     Running   0          2h

NAME                         TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)          AGE
service/demo-chart           LoadBalancer   100.68.228.41    ace8e940150c611e9aded02978664715-1873495111.eu-central-1.elb.amazonaws.com   80:30268/TCP     8m
service/demo-chart-mariadb   ClusterIP      100.71.89.40     <none>                                                                       3306/TCP         8m
service/jenkins              LoadBalancer   100.68.146.77    a0cd3170b50b211e9aded02978664715-799733272.eu-central-1.elb.amazonaws.com    8080:32358/TCP   2h
service/jenkins-agent        ClusterIP      100.68.128.216   <none>                                                                       50000/TCP        2h
service/kubernetes           ClusterIP      100.64.0.1       <none>                                                                       443/TCP          1d

NAME                         DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo-chart   3         3         3            3           8m
deployment.apps/jenkins      1         1         1            1           2h

NAME                                   DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-chart-8b6bdc4ff   3         3         3       8m
replicaset.apps/jenkins-5cfdc96f56     1         1         1       2h

NAME                                  DESIRED   CURRENT   AGE
statefulset.apps/demo-chart-mariadb   1         1         8m
```

- We need to terminate everything.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm list
NAME            REVISION        UPDATED                         STATUS          CHART                   NAMESPACE
demo-chart      2               Wed Mar 27 19:37:01 2019        DEPLOYED        demo-chart-0.0.1        default
jenkins         1               Wed Mar 27 17:02:05 2019        DEPLOYED        jenkins-0.36.2          default
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm delete demo-chart --purge
release "demo-chart" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# helm delete jenkins --purge
release "jenkins" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all
NAME                             READY   STATUS        RESTARTS   AGE
pod/demo-chart-8b6bdc4ff-2xx28   0/1     Terminating   5          13m
pod/demo-chart-8b6bdc4ff-4qh28   0/1     Terminating   5          13m
pod/demo-chart-8b6bdc4ff-xcmn6   0/1     Terminating   5          13m
pod/jenkins-5cfdc96f56-z4ks5     0/1     Terminating   0          2h

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   1d
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get pvc,pv
NAME                                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/data-demo-chart-mariadb-0   Bound    pvc-ceab46d2-50c6-11e9-aded-029786647150   8Gi        RWO            gp2            13m

NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                               STORAGECLASS   REASON   AGE
persistentvolume/pvc-ceab46d2-50c6-11e9-aded-029786647150   8Gi        RWO            Delete           Bound    default/data-demo-chart-mariadb-0   gp2                     13m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get pvc,pv --all-namespacesNAMESPACE   NAME                                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
default     persistentvolumeclaim/data-demo-chart-mariadb-0   Bound    pvc-ceab46d2-50c6-11e9-aded-029786647150   8Gi        RWO            gp2            14m

NAMESPACE   NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                               STORAGECLASS   REASON   AGE
            persistentvolume/pvc-ceab46d2-50c6-11e9-aded-029786647150   8Gi        RWO            Delete           Bound    default/data-demo-chart-mariadb-0   gp2                     14m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl delete  persistentvolumeclaim/data-demo-chart-mariadb-0
persistentvolumeclaim "data-demo-chart-mariadb-0" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get pvc,pv --all-namespacesNo resources found.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   1d
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190326173904                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190326173904
autoscaling-config      nodes.kubernetes.peelmicro.com-20190326173904                                           nodes.kubernetes.peelmicro.com-20190326173904
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-003347e9934b1d341
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-05c7dfb2a25bf8047
instance                nodes.kubernetes.peelmicro.com                                                          i-09ef0b585d711bc20
instance                nodes.kubernetes.peelmicro.com                                                          i-0c125796ebb6ed22a
internet-gateway        kubernetes.peelmicro.com                                                                igw-01c292e8d3f2e6274
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
route-table             kubernetes.peelmicro.com                                                                rtb-0b39b02cc565176a4
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group          masters.kubernetes.peelmicro.com                                                        sg-0137af3658d051de7
security-group          nodes.kubernetes.peelmicro.com                                                          sg-07c53fecc5dc97fdd
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-0c477c0e02d3433d1
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-08fc6d0f3ced38a38
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-096a79c5186a1918e
vpc                     kubernetes.peelmicro.com                                                                vpc-0f7691613fc903e17

autoscaling-group:nodes.kubernetes.peelmicro.com        ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
instance:i-0c125796ebb6ed22a    ok
instance:i-05c7dfb2a25bf8047    ok
instance:i-09ef0b585d711bc20    ok
internet-gateway:igw-01c292e8d3f2e6274  still has dependencies, will retry
route53-record:Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.  ok
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-role:nodes.kubernetes.peelmicro.com ok
iam-role:masters.kubernetes.peelmicro.com       ok
autoscaling-config:nodes.kubernetes.peelmicro.com-20190326173904        ok
subnet:subnet-0c477c0e02d3433d1 still has dependencies, will retry
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190326173904 ok
volume:vol-096a79c5186a1918e    still has dependencies, will retry
volume:vol-08fc6d0f3ced38a38    still has dependencies, will retry
security-group:sg-07c53fecc5dc97fdd     still has dependencies, will retry
security-group:sg-0137af3658d051de7     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-0137af3658d051de7
        internet-gateway:igw-01c292e8d3f2e6274
        route-table:rtb-0b39b02cc565176a4
        subnet:subnet-0c477c0e02d3433d1
        vpc:vpc-0f7691613fc903e17
        security-group:sg-07c53fecc5dc97fdd
        volume:vol-08fc6d0f3ced38a38
        dhcp-options:dopt-003347e9934b1d341
        volume:vol-096a79c5186a1918e
subnet:subnet-0c477c0e02d3433d1 still has dependencies, will retry
volume:vol-08fc6d0f3ced38a38    still has dependencies, will retry
volume:vol-096a79c5186a1918e    still has dependencies, will retry
internet-gateway:igw-01c292e8d3f2e6274  still has dependencies, will retry
security-group:sg-07c53fecc5dc97fdd     still has dependencies, will retry
security-group:sg-0137af3658d051de7     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        internet-gateway:igw-01c292e8d3f2e6274
        security-group:sg-0137af3658d051de7
        volume:vol-08fc6d0f3ced38a38
        route-table:rtb-0b39b02cc565176a4
        subnet:subnet-0c477c0e02d3433d1
        vpc:vpc-0f7691613fc903e17
        security-group:sg-07c53fecc5dc97fdd
        dhcp-options:dopt-003347e9934b1d341
        volume:vol-096a79c5186a1918e
subnet:subnet-0c477c0e02d3433d1 still has dependencies, will retry
volume:vol-096a79c5186a1918e    ok
internet-gateway:igw-01c292e8d3f2e6274  still has dependencies, will retry
volume:vol-08fc6d0f3ced38a38    ok
security-group:sg-0137af3658d051de7     ok
security-group:sg-07c53fecc5dc97fdd     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-003347e9934b1d341
        internet-gateway:igw-01c292e8d3f2e6274
        security-group:sg-07c53fecc5dc97fdd
        route-table:rtb-0b39b02cc565176a4
        subnet:subnet-0c477c0e02d3433d1
        vpc:vpc-0f7691613fc903e17
subnet:subnet-0c477c0e02d3433d1 still has dependencies, will retry
internet-gateway:igw-01c292e8d3f2e6274  ok
security-group:sg-07c53fecc5dc97fdd     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-07c53fecc5dc97fdd
        route-table:rtb-0b39b02cc565176a4
        subnet:subnet-0c477c0e02d3433d1
        vpc:vpc-0f7691613fc903e17
        dhcp-options:dopt-003347e9934b1d341
subnet:subnet-0c477c0e02d3433d1 ok
security-group:sg-07c53fecc5dc97fdd     ok
route-table:rtb-0b39b02cc565176a4       ok
vpc:vpc-0f7691613fc903e17       ok
dhcp-options:dopt-003347e9934b1d341     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/helm#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoBuildingAndDeployingHelmChartsWithJenkins17.png)

## Section: 6. Serverless on Kubernetes

### 102. Introduction to Serverless

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToServerless.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToServerless2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToServerless3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToServerless4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToServerless5.png)

### 103. Introduction to Kubeless

- We can get more information about it on [Kubeless](https://github.com/kubeless/kubeless).

`kubeless` is a Kubernetes-native serverless framework that lets you deploy small bits of code without having to worry about the underlying infrastructure plumbing. It leverages Kubernetes resources to provide auto-scaling, API routing, monitoring, troubleshooting and more.

Kubeless stands out as we use a Custom Resource Definition to be able to create functions as custom kubernetes resources. We then run an in-cluster controller that watches these custom resources and launches runtimes on-demand. The controller dynamically injects the functions code into the runtimes and make them available over HTTP or via a PubSub mechanism.

Kubeless is purely open-source and non-affiliated to any commercial organization.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeless.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeless2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeless3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeless4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeless5.png)

### 104. Demo: Creating Functions with Kubeless

- We can check the latest release available

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless.png)

- We need to download and install the CLI

```bash
ubuntu@kubernetes-master:~$ wget https://github.com/kubeless/kubeless/releases/download/v1.0.2/kubeless_linux-amd64.zip
--2019-04-03 17:46:54--  https://github.com/kubeless/kubeless/releases/download/v1.0.2/kubeless_linux-amd64.zip
Resolving github.com (github.com)... 140.82.118.3, 140.82.118.4
Connecting to github.com (github.com)|140.82.118.3|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://github-production-release-asset-2e65be.s3.amazonaws.com/73902337/6fe95b80-2880-11e9-9258-483c0fa1c77e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190403T174654Z&X-Amz-Expires=300&X-Amz-Signature=22dab5e21f09fdd92aeddbfeb581ed1d94014dd8bfe5ed13f03b228cc3e1028b&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3Dkubeless_linux-amd64.zip&response-content-type=application%2Foctet-stream [following]
--2019-04-03 17:46:54--  https://github-production-release-asset-2e65be.s3.amazonaws.com/73902337/6fe95b80-2880-11e9-9258-483c0fa1c77e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190403T174654Z&X-Amz-Expires=300&X-Amz-Signature=22dab5e21f09fdd92aeddbfeb581ed1d94014dd8bfe5ed13f03b228cc3e1028b&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3Dkubeless_linux-amd64.zip&response-content-type=application%2Foctet-stream
Resolving github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)... 52.216.178.203
Connecting to github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)|52.216.178.203|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 8072713 (7.7M) [application/octet-stream]
Saving to: ‘kubeless_linux-amd64.zip’

kubeless_linux-amd64.zip                   100%[========================================================================================>]   7.70M  6.72MB/s    in 1.1s

2019-04-03 17:46:56 (6.72 MB/s) - ‘kubeless_linux-amd64.zip’ saved [8072713/8072713]
```

```bash
ubuntu@kubernetes-master:~$ unzip kubeless_linux-amd64.zip
The program 'unzip' is currently not installed. You can install it by typing:
sudo apt install unzip
ubuntu@kubernetes-master:~$ sudo apt install unzip
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'sudo apt autoremove' to remove it.
Suggested packages:
  zip
The following NEW packages will be installed:
  unzip
0 upgraded, 1 newly installed, 0 to remove and 36 not upgraded.
Need to get 158 kB of archives.
After this operation, 530 kB of additional disk space will be used.
Get:1 http://mirrors.digitalocean.com/ubuntu xenial/main amd64 unzip amd64 6.0-20ubuntu1 [158 kB]
Fetched 158 kB in 0s (2,491 kB/s)
Selecting previously unselected package unzip.
(Reading database ... 110882 files and directories currently installed.)
Preparing to unpack .../unzip_6.0-20ubuntu1_amd64.deb ...
Unpacking unzip (6.0-20ubuntu1) ...
Processing triggers for mime-support (3.59ubuntu1) ...
Processing triggers for man-db (2.7.5-1) ...
Setting up unzip (6.0-20ubuntu1) ...
ubuntu@kubernetes-master:~$ unzip kubeless_linux-amd64.zip
Archive:  kubeless_linux-amd64.zip
   creating: bundles/kubeless_linux-amd64/
  inflating: bundles/kubeless_linux-amd64/kubeless
```

```bash
ubuntu@kubernetes-master:~$ sudo mv bundles/kubeless_linux-amd64/kubeless /usr/local/bin
ubuntu@kubernetes-master:~$ rm -r bundles/
```

- We can ensure if it works by executing `kubeless`

```bash
ubuntu@kubernetes-master:~$ kubeless
Serverless framework for Kubernetes

Usage:
  kubeless [command]

Available Commands:
  autoscale         manage autoscale to function on Kubeless
  completion        Output shell completion code for the specified shell.
  function          function specific operations
  get-server-config Print the current configuration of the controller
  help              Help about any command
  topic             manage message topics in Kubeless
  trigger           trigger specific operations
  version           Print the version of Kubeless

Flags:
  -h, --help   help for kubeless

Use "kubeless [command] --help" for more information about a command.
```

- We are going to install kubeless in the kubernetes cluster.

```bash
ubuntu@kubernetes-master:~$ kubectl create ns kubeless
namespace/kubeless created
ubuntu@kubernetes-master:~$ kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.2/kubeless-v1.0.2.yaml
configmap/kubeless-config created
deployment.apps/kubeless-controller-manager created
serviceaccount/controller-acct created
clusterrole.rbac.authorization.k8s.io/kubeless-controller-deployer created
clusterrolebinding.rbac.authorization.k8s.io/kubeless-controller-deployer created
customresourcedefinition.apiextensions.k8s.io/functions.kubeless.io created
customresourcedefinition.apiextensions.k8s.io/httptriggers.kubeless.io created
customresourcedefinition.apiextensions.k8s.io/cronjobtriggers.kubeless.io created
```

- We can ensure it is running by executing:

```bash
ubuntu@kubernetes-master:~$ kubectl get pods -n kubeless
NAME                                          READY   STATUS    RESTARTS   AGE
kubeless-controller-manager-596d48745-4bngh   3/3     Running   0          80s
```

- We are going to deploy the `kubeless/python-example/example.py` python method.

> kubeless/python-example/example.py

```py
def hello(event, context):
  print event
  return event['data']
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function deploy hello --runtime python2.7 \
>                                --from-file python-example/example.py \
>                                --handler test.hello
INFO[0000] Deploying function...
INFO[0000] Function hello submitted for deployment
INFO[0000] Check the deployment status executing 'kubeless function ls hello'
```

- We are also going to deploy the `kubeless/node-example/example.js` node method.

> kubeless/node-example/example.js

```js
module.exports = {
  myfunction: function(event, context) {
    console.log(event);
    return "Hello world!";
  }
};
```

> kubeless/node-example/package.json

```json
{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node example.js"
  },
  "engines": {
    "node": "^6.14.4"
  },
  "dependencies": {}
}
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function deploy myfunction --runtime nodejs6 \
>                                 --dependencies node-example/package.json \
>                                 --handler test.myfunction \
>                                 --from-file node-example/example.js
INFO[0000] Deploying function...
INFO[0000] Function myfunction submitted for deployment
INFO[0000] Check the deployment status executing 'kubeless function ls myfunction'
```

- We can see the functions available by executing

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function ls
NAME            NAMESPACE       HANDLER         RUNTIME         DEPENDENCIES    STATUS
hello           default         test.hello      python2.7                       1/1 READY
myfunction      default         test.myfunction nodejs6                         1/1 READY
```

- We can see that every function is a pod by executing

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
hello-664d855785-dr7lz        1/1     Running   0          7m58s
myfunction-64fd588b5c-f98dk   1/1     Running   0          4m24s
```

- We can call a function by executing

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function call myfunction --data 'This is some data'
Hello world!
```

- We can see the logs of the Pod

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubectl logs myfunction-64fd588b5c-f98dk
::ffff:167.99.202.93 - - [03/Apr/2019:18:02:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:02:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:03:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:03:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:04:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:04:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:05:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:05:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:06:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:06:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:07:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:07:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
{ 'event-type': 'application/x-www-form-urlencoded',
  'event-id': 'G0h4WVkr7jRmqcQ',
  'event-time': '2019-04-03T18:07:46Z',
  'event-namespace': 'cli.kubeless.io',
  data: 'This is some data',
  extensions:
   { request:
      IncomingMessage {
        _readableState: [Object],
        readable: false,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/',
        method: 'POST',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: true,
        _dumped: false,
        next: [Function: next],
        baseUrl: '',
        originalUrl: '/',
        _parsedUrl: [Object],
        params: [Object],
        query: {},
        res: [Object],
        _startAt: [Object],
        _startTime: 2019-04-03T18:07:46.563Z,
        _remoteAddress: '::ffff:10.244.0.0',
        body: <Buffer 54 68 69 73 20 69 73 20 73 6f 6d 65 20 64 61 74 61>,
        _body: true,
        length: undefined,
        read: [Function],
        route: [Object] },
     response:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Object],
        connection: [Object],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Object],
        locals: {},
        _startAt: undefined,
        _startTime: undefined,
        writeHead: [Function: writeHead],
        __onFinished: [Object] } } }
::ffff:10.244.0.0 - - [03/Apr/2019:18:07:46 +0000] "POST / HTTP/1.1" 200 - "-" "kubeless/v0.0.0 (linux/amd64) kubernetes/$Format"
::ffff:167.99.202.93 - - [03/Apr/2019:18:08:08 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
::ffff:167.99.202.93 - - [03/Apr/2019:18:08:38 +0000] "GET /healthz HTTP/1.1" 200 2 "-" "kube-probe/1.13"
```

- We are going to use the `kubeless/nginx-ingress-controller-with-elb.yml` document to create deployemnt, service, configmap, etc. to test a kubeless function with `AWS ELB`.

> kubeless/nginx-ingress-controller-with-elb.yml

```yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: ingress-nginx
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: default-http-backend
  labels:
    app.kubernetes.io/name: default-http-backend
    app.kubernetes.io/part-of: ingress-nginx
  namespace: ingress-nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: default-http-backend
  template:
    metadata:
      labels:
        app.kubernetes.io/name: default-http-backend
        app.kubernetes.io/part-of: ingress-nginx
    spec:
      terminationGracePeriodSeconds: 60
      containers:
        - name: default-http-backend
          # Any image is permissible as long as:
          # 1. It serves a 404 page at /
          # 2. It serves 200 on a /healthz endpoint
          image: gcr.io/google_containers/defaultbackend:1.4
          livenessProbe:
            httpGet:
              path: /healthz
              port: 8080
              scheme: HTTP
            initialDelaySeconds: 30
            timeoutSeconds: 5
          ports:
            - containerPort: 8080
          resources:
            limits:
              cpu: 10m
              memory: 20Mi
            requests:
              cpu: 10m
              memory: 20Mi
---
apiVersion: v1
kind: Service
metadata:
  name: default-http-backend
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: default-http-backend
    app.kubernetes.io/part-of: ingress-nginx
spec:
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app.kubernetes.io/name: default-http-backend
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: nginx-configuration
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
data:
  use-proxy-protocol: "true"
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: tcp-services
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: udp-services
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nginx-ingress-serviceaccount
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: nginx-ingress-clusterrole
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
rules:
  - apiGroups:
      - ""
    resources:
      - configmaps
      - endpoints
      - nodes
      - pods
      - secrets
    verbs:
      - list
      - watch
  - apiGroups:
      - ""
    resources:
      - nodes
    verbs:
      - get
  - apiGroups:
      - ""
    resources:
      - services
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - "extensions"
    resources:
      - ingresses
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - ""
    resources:
      - events
    verbs:
      - create
      - patch
  - apiGroups:
      - "extensions"
    resources:
      - ingresses/status
    verbs:
      - update

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: Role
metadata:
  name: nginx-ingress-role
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
rules:
  - apiGroups:
      - ""
    resources:
      - configmaps
      - pods
      - secrets
      - namespaces
    verbs:
      - get
  - apiGroups:
      - ""
    resources:
      - configmaps
    resourceNames:
      # Defaults to "<election-id>-<ingress-class>"
      # Here: "<ingress-controller-leader>-<nginx>"
      # This has to be adapted if you change either parameter
      # when launching the nginx-ingress-controller.
      - "ingress-controller-leader-nginx"
    verbs:
      - get
      - update
  - apiGroups:
      - ""
    resources:
      - configmaps
    verbs:
      - create
  - apiGroups:
      - ""
    resources:
      - endpoints
    verbs:
      - get

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: RoleBinding
metadata:
  name: nginx-ingress-role-nisa-binding
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: nginx-ingress-role
subjects:
  - kind: ServiceAccount
    name: nginx-ingress-serviceaccount
    namespace: ingress-nginx

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: nginx-ingress-clusterrole-nisa-binding
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: nginx-ingress-clusterrole
subjects:
  - kind: ServiceAccount
    name: nginx-ingress-serviceaccount
    namespace: ingress-nginx
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: nginx-ingress-controller
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: ingress-nginx
  template:
    metadata:
      labels:
        app.kubernetes.io/name: ingress-nginx
      annotations:
        prometheus.io/port: "10254"
        prometheus.io/scrape: "true"
    spec:
      serviceAccountName: nginx-ingress-serviceaccount
      containers:
        - name: nginx-ingress-controller
          image: quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.18.0
          args:
            - /nginx-ingress-controller
            - --default-backend-service=$(POD_NAMESPACE)/default-http-backend
            - --configmap=$(POD_NAMESPACE)/nginx-configuration
            - --tcp-services-configmap=$(POD_NAMESPACE)/tcp-services
            - --udp-services-configmap=$(POD_NAMESPACE)/udp-services
            - --publish-service=$(POD_NAMESPACE)/ingress-nginx
            - --annotations-prefix=nginx.ingress.kubernetes.io
          securityContext:
            capabilities:
              drop:
                - ALL
              add:
                - NET_BIND_SERVICE
            # www-data -> 33
            runAsUser: 33
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: POD_NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          ports:
            - name: http
              containerPort: 80
            - name: https
              containerPort: 443
          livenessProbe:
            failureThreshold: 3
            httpGet:
              path: /healthz
              port: 10254
              scheme: HTTP
            initialDelaySeconds: 10
            periodSeconds: 10
            successThreshold: 1
            timeoutSeconds: 1
          readinessProbe:
            failureThreshold: 3
            httpGet:
              path: /healthz
              port: 10254
              scheme: HTTP
            periodSeconds: 10
            successThreshold: 1
            timeoutSeconds: 1
---
kind: Service
apiVersion: v1
metadata:
  name: ingress-nginx
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
  annotations:
    # Enable PROXY protocol
    service.beta.kubernetes.io/aws-load-balancer-proxy-protocol: "*"
    # Increase the ELB idle timeout to avoid issues with WebSockets or Server-Sent Events.
    service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout: "3600"
spec:
  type: LoadBalancer
  selector:
    app.kubernetes.io/name: ingress-nginx
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https
```

- We can create the pods by executing it.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless2.png)

- We can see how the ingress service is running

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless3.png)

- We can deploy a function in the `ingress` service

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless4.png)

- We can add the endpoint to `Route 53`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCreatingFunctionsWithKubeless11.png)

### 105. Demo: Triggering Kubeless Functions with Kafka

- We can get more information on

- We need to install Kafka.

```bash
ubuntu@kubernetes-master:~$ export RELEASE=$(curl -s https://api.github.com/repos/kubeless/kafka-trigger/releases/latest | grep tag_name | cut -d '"' -f 4)
ubuntu@kubernetes-master:~$ kubectl create -f https://github.com/kubeless/kafka-trigger/releases/download/$RELEASE/kafka-zookeeper-$RELEASE.yaml
clusterrolebinding.rbac.authorization.k8s.io/kafka-controller-deployer created
statefulset.apps/kafka created
service/kafka created
statefulset.apps/zoo created
service/zoo created
service/zookeeper created
deployment.apps/kafka-trigger-controller created
clusterrole.rbac.authorization.k8s.io/kafka-controller-deployer created
customresourcedefinition.apiextensions.k8s.io/kafkatriggers.kubeless.io created
service/broker created
```

- We can see the pods running

```bash
ubuntu@kubernetes-master:~$ kubectl get pods --all-namespaces
NAMESPACE     NAME                                          READY   STATUS    RESTARTS   AGE
default       hello-664d855785-dr7lz                        1/1     Running   0          11h
default       myfunction-64fd588b5c-f98dk                   1/1     Running   0          10h
kube-system   canal-8chhh                                   3/3     Running   0          35d
kube-system   canal-nrqm4                                   3/3     Running   0          35d
kube-system   coredns-86c58d9df4-h8wc5                      1/1     Running   0          35d
kube-system   coredns-86c58d9df4-x8tbh                      1/1     Running   0          35d
kube-system   etcd-kubernetes-master                        1/1     Running   0          35d
kube-system   kube-apiserver-kubernetes-master              1/1     Running   0          35d
kube-system   kube-controller-manager-kubernetes-master     1/1     Running   0          35d
kube-system   kube-proxy-7mttf                              1/1     Running   0          35d
kube-system   kube-proxy-s42q6                              1/1     Running   0          35d
kube-system   kube-scheduler-kubernetes-master              1/1     Running   0          35d
kube-system   kubernetes-dashboard-57df4db6b-h8bzd          1/1     Running   0          15d
kube-system   tiller-deploy-6cf89f5895-ktwfs                1/1     Running   0          10d
kubeless      kafka-0                                       0/1     Pending   0          77s
kubeless      kafka-trigger-controller-6858c97b87-cpbfc     1/1     Running   0          77s
kubeless      kubeless-controller-manager-596d48745-4bngh   3/3     Running   0          11h
kubeless      zoo-0                                         0/1     Pending   0          77s
```

It is not going to work on the `Digital Ocean cluster` becuase it needs a Persistent Volume

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubectl describe pod/kafka-0 -n kubeless
Name:               kafka-0
Namespace:          kubeless
Priority:           0
PriorityClassName:  <none>
Node:               <none>
Labels:             controller-revision-hash=kafka-6865cbbc6b
                    kubeless=kafka
                    statefulset.kubernetes.io/pod-name=kafka-0
Annotations:        <none>
Status:             Pending
IP:
Controlled By:      StatefulSet/kafka
Init Containers:
  volume-permissions:
    Image:      busybox
    Port:       <none>
    Host Port:  <none>
    Command:
      sh
      -c
      chmod -R g+rwX /bitnami
    Environment:  <none>
    Mounts:
      /bitnami/kafka/data from datadir (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-5qndk (ro)
Containers:
  broker:
    Image:      bitnami/kafka:1.1.0-r0
    Port:       9092/TCP
    Host Port:  0/TCP
    Liveness:   tcp-socket :9092 delay=30s timeout=1s period=10s #success=1 #failure=3
    Environment:
      KAFKA_ADVERTISED_HOST_NAME:  broker.kubeless
      KAFKA_ADVERTISED_PORT:       9092
      KAFKA_PORT:                  9092
      KAFKA_DELETE_TOPIC_ENABLE:   true
      KAFKA_ZOOKEEPER_CONNECT:     zookeeper.kubeless:2181
      ALLOW_PLAINTEXT_LISTENER:    yes
    Mounts:
      /bitnami/kafka/data from datadir (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-5qndk (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  datadir:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  datadir-kafka-0
    ReadOnly:   false
  default-token-5qndk:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-5qndk
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                 From               Message
  ----     ------            ----                ----               -------
  Warning  FailedScheduling  35s (x24 over 12m)  default-scheduler  pod has unbound immediate PersistentVolumeClaims
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$
```

- We are going use the `kubeless/node-example/uppercase.js` document to deploy a function.

> kubeless/node-example/uppercase.js

```js
module.exports = {
  uppercase: function(event, context) {
    str = event["data"].toUpperCase();
    console.log(str);
    return str;
  }
};
```

- We can deploy the function.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function deploy uppercase --runtime nodejs6 \
>                                 --dependencies node-example/package.json \
>                                 --handler test.uppercase \
>                                 --from-file node-example/uppercase.js
INFO[0000] Deploying function...
INFO[0000] Function uppercase submitted for deployment
INFO[0000] Check the deployment status executing 'kubeless function ls uppercase'
```

- We can ensure it is running

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function ls
NAME            NAMESPACE       HANDLER         RUNTIME         DEPENDENCIES    STATUS
hello           default         test.hello      python2.7                       1/1 READY
myfunction      default         test.myfunction nodejs6                         1/1 READY
uppercase       default         test.uppercase  nodejs6                         1/1 READY
```

- We need to link the function to kafka by using:

1. Trigger

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless trigger kafka create test --function-selector created-by=kubeless,function=uppercase --trigger-topic uppercase
INFO[0000] Kafka trigger test created in namespace default successfully!
```

2. Publish

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless topic publish --topic uppercase --data "this message will be converted to uppercase"
FATA[0000] websocket.Dial wss://167.99.192.20:6443/api/v1/namespaces/kubeless/pods/kafka-0/exec?command=bash&command=%2Fopt%2Fbitnami%2Fkafka%2Fbin%2Fkafka-console-producer.sh&command=--broker-list&command=localhost%3A9092&command=--topic&command=uppercase&container=broker&stderr=true&stdin=true&stdout=true&tty=true: bad status
```

- It doesn't work becuase `kafka` is not running.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTriggeringKubelessFunctionsWithKafka.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTriggeringKubelessFunctionsWithKafka2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTriggeringKubelessFunctionsWithKafka3.png)

- We can delete kafka by using

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubectl delete -f https://github.com/kubeless/kafka-trigger/releases/download/$RELEASE/kafka-zookeeper-$RELEASE.yaml
clusterrolebinding.rbac.authorization.k8s.io "kafka-controller-deployer" deleted
statefulset.apps "kafka" deleted
service "kafka" deleted
statefulset.apps "zoo" deleted
service "zoo" deleted
service "zookeeper" deleted
deployment.apps "kafka-trigger-controller" deleted
clusterrole.rbac.authorization.k8s.io "kafka-controller-deployer" deleted
customresourcedefinition.apiextensions.k8s.io "kafkatriggers.kubeless.io" deleted
service "broker" deleted
```

- We can delete the functions by using:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function ls
NAME            NAMESPACE       HANDLER         RUNTIME         DEPENDENCIES    STATUS
hello           default         test.hello      python2.7                       1/1 READY
myfunction      default         test.myfunction nodejs6                         1/1 READY
uppercase       default         test.uppercase  nodejs6                         1/1 READY
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function delete hello
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function delete myfunction
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function delete uppercase
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$ kubeless function ls
NAME    NAMESPACE       HANDLER RUNTIME DEPENDENCIES    STATUS
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/kubeless$
```

# Learn DevOps: The Complete Kubernetes Course (Part 4)

> Github Repositories

- [learn-devops-the-complete-kubernetes-course](https://github.com/peelmicro/learn-devops-the-complete-kubernetes-course).
- [on-prem-or-cloud-agnostic-kubernetes](https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes).
- [kubernetes-coursee](https://github.com/peelmicro/kubernetes-course).
- [http-echo](https://github.com/peelmicro/http-echo).

The [Learn DevOps: The Complete Kubernetes Course ](https://www.udemy.com/learn-devops-the-complete-kubernetes-course//) Udemy course help learn how Kubernetes will run and manage your containerized applications and to build, deploy, use, and maintain Kubernetes.

> Other parts:

- [Learn DevOps: The Complete Kubernetes Course (Part 1)](./cicd-learn-devops-the-complete-kubernetes-course-1.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 2)](./cicd-learn-devops-the-complete-kubernetes-course-3.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 3)](./cicd-learn-devops-the-complete-kubernetes-course-4.md)

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

## Section: 7. Microservices

### 106. Introduction to Istio

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio6.png)

- We can add a `proxy` to comunicate between apps (microservices). It is called `sidecar`.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio7.png)

- We can add a `management interface`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio8.png)

- With `Istio` we have this solution.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToIstio9.png)

### 107. Demo: Istio Installation

- We need to create the AWS Cluster again, but, in this case, we are going to use `--node-size=t2.medium` because `Istio` needs a lot of memory to start.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.medium --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0406 05:00:44.737226   26361 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0406 05:00:44.889229   26361 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0406 05:00:45.245895   26361 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0406 05:00:47.048995   26361 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0406 05:00:47.422697   26361 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0406 05:00:47.618628   26361 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0406 05:00:47.764220   26361 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0406 05:00:47.798288   26361 executor.go:103] Tasks: 73 done / 73 total; 0 can run
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
        Tags                    {Name: a.etcd-events.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/etcd/events: a/a, k8s.io/role/master: 1, kubernetes.io/cluster/kubernetes.peelmicro.com: owned}

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
        Tags                    {KubernetesCluster: kubernetes.peelmicro.com, kubernetes.io/cluster/kubernetes.peelmicro.com: owned, Name: kubernetes.peelmicro.com}

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
        InstanceType            t2.medium
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

- We have to edit the cluster before executing it adding the following

```
  kubeAPIServer:
    admissionControl:
    - NamespaceLifecycle
    - LimitRanger
    - ServiceAccount
    - PersistentVolumeLabel
    - DefaultStorageClass
    - DefaultTolerationSeconds
    - MutatingAdmissionWebhook
    - ValidatingAdmissionWebhook
    - ResourceQuota
    - NodeRestriction
    - Priority
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops edit cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoIstioInstallation.png)

- We have to execute the cluster by using:

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0406 05:10:00.102613   26433 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0406 05:10:01.144577   26433 vfs_castore.go:735] Issuing new certificate: "ca"
I0406 05:10:01.154530   26433 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0406 05:10:01.558879   26433 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0406 05:10:03.082048   26433 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0406 05:10:03.342839   26433 vfs_castore.go:735] Issuing new certificate: "master"
I0406 05:10:03.540417   26433 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0406 05:10:03.555470   26433 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0406 05:10:03.578749   26433 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0406 05:10:03.745253   26433 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0406 05:10:03.749764   26433 vfs_castore.go:735] Issuing new certificate: "kops"
I0406 05:10:03.898014   26433 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0406 05:10:04.011317   26433 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0406 05:10:04.512692   26433 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0406 05:10:04.720408   26433 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0406 05:10:05.001087   26433 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0406 05:10:05.017806   26433 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0406 05:10:15.403451   26433 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0406 05:10:15.923006   26433 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0406 05:10:15.923178   26433 dns.go:153] Pre-creating DNS records
I0406 05:10:18.348414   26433 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.
```

- We can check in a few minutes if everything is ok by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster --state=s3://kubernetes.peelmicro.com
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1       eu-central-1a
nodes                   Node    t2.medium       2       2       eu-central-1a

NODE STATUS
NAME                                            ROLE    READY
ip-172-20-43-50.eu-central-1.compute.internal   node    True
ip-172-20-58-123.eu-central-1.compute.internal  node    True
ip-172-20-60-85.eu-central-1.compute.internal   master  True

Your cluster kubernetes.peelmicro.com is ready
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We can install `Istio` by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# wget https://github.com/istio/istio/releases/download/1.0.2/istio-1.0.2-linux.tar.gz
--2019-04-06 05:22:19--  https://github.com/istio/istio/releases/download/1.0.2/istio-1.0.2-linux.tar.gz
Resolving github.com (github.com)... 140.82.118.4, 140.82.118.3
Connecting to github.com (github.com)|140.82.118.4|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://github-production-release-asset-2e65be.s3.amazonaws.com/74175805/2ff05080-b1dc-11e8-8efe-74ef7e0233a0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190406T052219Z&X-Amz-Expires=300&X-Amz-Signature=9ff23decd341e473a378cf5627c65cd9997ef2fa2b12ab458af03960bf41a688&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3Distio-1.0.2-linux.tar.gz&response-content-type=application%2Foctet-stream [following]
--2019-04-06 05:22:19--  https://github-production-release-asset-2e65be.s3.amazonaws.com/74175805/2ff05080-b1dc-11e8-8efe-74ef7e0233a0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190406T052219Z&X-Amz-Expires=300&X-Amz-Signature=9ff23decd341e473a378cf5627c65cd9997ef2fa2b12ab458af03960bf41a688&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3Distio-1.0.2-linux.tar.gz&response-content-type=application%2Foctet-stream
Resolving github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)... 52.216.0.32
Connecting to github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)|52.216.0.32|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 14862866 (14M) [application/octet-stream]
Saving to: ‘istio-1.0.2-linux.tar.gz’

istio-1.0.2-linux.tar.gz                   100%[========================================================================================>]  14.17M  16.4MB/s    in 0.9s

2019-04-06 05:22:20 (16.4 MB/s) - ‘istio-1.0.2-linux.tar.gz’ saved [14862866/14862866]

root@ubuntu-s-1vcpu-2gb-lon1-01:~# tar -xzvf istio-1.0.2-linux.tar.gz
cd istio-1.0.2istio-1.0.2/
istio-1.0.2/samples/
istio-1.0.2/samples/websockets/
istio-1.0.2/samples/websockets/app.yaml
istio-1.0.2/samples/websockets/README.md
istio-1.0.2/samples/websockets/route.yaml
istio-1.0.2/samples/sleep/
istio-1.0.2/samples/sleep/sleep.yaml
istio-1.0.2/samples/sleep/README.md
istio-1.0.2/samples/httpbin/
istio-1.0.2/samples/httpbin/README.md
istio-1.0.2/samples/httpbin/httpbin.yaml
istio-1.0.2/samples/httpbin/destinationpolicies/
istio-1.0.2/samples/httpbin/destinationpolicies/httpbin-circuit-breaker.yaml
istio-1.0.2/samples/httpbin/routerules/
istio-1.0.2/samples/httpbin/routerules/httpbin-v1.yaml
istio-1.0.2/samples/httpbin/sample-client/
istio-1.0.2/samples/httpbin/sample-client/fortio-deploy.yaml
istio-1.0.2/samples/https/
istio-1.0.2/samples/https/default.conf
istio-1.0.2/samples/https/nginx-app.yaml
istio-1.0.2/samples/CONFIG-MIGRATION.md
istio-1.0.2/samples/certs/
istio-1.0.2/samples/certs/root-cert.pem
istio-1.0.2/samples/certs/ca-cert.pem
istio-1.0.2/samples/certs/cert-chain.pem
istio-1.0.2/samples/certs/ca-key.pem
istio-1.0.2/samples/README.md
istio-1.0.2/samples/rawvm/
istio-1.0.2/samples/rawvm/README.md
istio-1.0.2/samples/helloworld/
istio-1.0.2/samples/helloworld/helloworld.yaml
istio-1.0.2/samples/helloworld/README.md
istio-1.0.2/samples/kubernetes-blog/
istio-1.0.2/samples/kubernetes-blog/bookinfo-reviews-v2.yaml
istio-1.0.2/samples/kubernetes-blog/bookinfo-v1.yaml
istio-1.0.2/samples/kubernetes-blog/bookinfo-ratings.yaml
istio-1.0.2/samples/bookinfo/
istio-1.0.2/samples/bookinfo/policy/
istio-1.0.2/samples/bookinfo/policy/mixer-rule-additional-telemetry.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-kubernetesenv-telemetry.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-productpage-ratelimit.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-ratings-denial.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-ratings-ratelimit.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-deny-serviceaccount.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-ingress-denial.yaml
istio-1.0.2/samples/bookinfo/policy/mixer-rule-deny-label.yaml
istio-1.0.2/samples/bookinfo/networking/
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-test-v2.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-ratings-mysql-vm.yaml
istio-1.0.2/samples/bookinfo/networking/certmanager-gateway.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-ratings-test-abort.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-50-v3.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-ratings-db.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-jason-v2-v3.yaml
istio-1.0.2/samples/bookinfo/networking/destination-rule-reviews.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-details-v2.yaml
istio-1.0.2/samples/bookinfo/networking/ROUTING_RULE_MIGRATION.md
istio-1.0.2/samples/bookinfo/networking/virtual-service-ratings-test-delay.yaml
istio-1.0.2/samples/bookinfo/networking/bookinfo-gateway.yaml
istio-1.0.2/samples/bookinfo/networking/destination-rule-all.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-all-v1.yaml
istio-1.0.2/samples/bookinfo/networking/destination-rule-all-mtls.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-v2-v3.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-80-20.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-ratings-mysql.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-90-10.yaml
istio-1.0.2/samples/bookinfo/networking/egress-rule-google-apis.yaml
istio-1.0.2/samples/bookinfo/networking/virtual-service-reviews-v3.yaml
istio-1.0.2/samples/bookinfo/swagger.yaml
istio-1.0.2/samples/bookinfo/platform/
istio-1.0.2/samples/bookinfo/platform/consul/
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-reviews-test-v2.yaml
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-ratings-test-abort.yaml
istio-1.0.2/samples/bookinfo/platform/consul/bookinfo.yaml
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-reviews-50-v3.yaml
istio-1.0.2/samples/bookinfo/platform/consul/bookinfo.sidecars.yaml
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-ratings-test-delay.yaml
istio-1.0.2/samples/bookinfo/platform/consul/README.md
istio-1.0.2/samples/bookinfo/platform/consul/destination-rule-all.yaml
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-all-v1.yaml
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-reviews-v2-v3.yaml
istio-1.0.2/samples/bookinfo/platform/consul/virtual-service-reviews-v3.yaml
istio-1.0.2/samples/bookinfo/platform/consul/cleanup.sh
istio-1.0.2/samples/bookinfo/platform/kube/
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-mysql.yaml
istio-1.0.2/samples/bookinfo/platform/kube/istio-rbac-enable.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-db.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-details-v2.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-certificate.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-add-serviceaccount.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-ratings-v2-mysql-vm.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-reviews-v2.yaml
istio-1.0.2/samples/bookinfo/platform/kube/rbac/
istio-1.0.2/samples/bookinfo/platform/kube/rbac/details-reviews-policy.yaml
istio-1.0.2/samples/bookinfo/platform/kube/rbac/productpage-policy.yaml
istio-1.0.2/samples/bookinfo/platform/kube/rbac/rbac-config-ON.yaml
istio-1.0.2/samples/bookinfo/platform/kube/rbac/namespace-policy.yaml
istio-1.0.2/samples/bookinfo/platform/kube/rbac/ratings-policy.yaml
istio-1.0.2/samples/bookinfo/platform/kube/istio-rbac-namespace.yaml
istio-1.0.2/samples/bookinfo/platform/kube/README.md
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-ratings-v2.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-ingress.yaml
istio-1.0.2/samples/bookinfo/platform/kube/istio-rbac-ratings.yaml
istio-1.0.2/samples/bookinfo/platform/kube/istio-rbac-details-reviews.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-details.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-ratings-v2-mysql.yaml
istio-1.0.2/samples/bookinfo/platform/kube/istio-rbac-productpage.yaml
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-ratings.yaml
istio-1.0.2/samples/bookinfo/platform/kube/cleanup.sh
istio-1.0.2/samples/bookinfo/platform/kube/bookinfo-ratings-discovery.yaml
istio-1.0.2/samples/bookinfo/README.md
istio-1.0.2/samples/health-check/
istio-1.0.2/samples/health-check/liveness-http.yaml
istio-1.0.2/samples/health-check/liveness-command.yaml
istio-1.0.2/bin/
istio-1.0.2/bin/istioctl
istio-1.0.2/LICENSE
istio-1.0.2/tools/
istio-1.0.2/tools/license/
istio-1.0.2/tools/license/get_dep_licenses.go
istio-1.0.2/tools/license/README.md
istio-1.0.2/tools/convert_perf_results.py
istio-1.0.2/tools/hyperistio/
istio-1.0.2/tools/hyperistio/hyperistio.go
istio-1.0.2/tools/hyperistio/README.md
istio-1.0.2/tools/hyperistio/index.html
istio-1.0.2/tools/hyperistio/hyperistio_test.go
istio-1.0.2/tools/deb/
istio-1.0.2/tools/deb/istio.mk
istio-1.0.2/tools/deb/Dockerfile
istio-1.0.2/tools/deb/deb_test.sh
istio-1.0.2/tools/deb/istio-iptables.sh
istio-1.0.2/tools/deb/istio.service
istio-1.0.2/tools/deb/istio-node-agent-start.sh
istio-1.0.2/tools/deb/postinst.sh
istio-1.0.2/tools/deb/istio-start.sh
istio-1.0.2/tools/deb/sidecar.env
istio-1.0.2/tools/deb/istio-auth-node-agent.service
istio-1.0.2/tools/deb/envoy_bootstrap_v2.json
istio-1.0.2/tools/deb/istio-ca.sh
istio-1.0.2/tools/perf_istio_rules.yaml
istio-1.0.2/tools/setup_run
istio-1.0.2/tools/perf_k8svcs.yaml
istio-1.0.2/tools/setup_perf_cluster.sh
istio-1.0.2/tools/README.md
istio-1.0.2/tools/update_all
istio-1.0.2/tools/cache_buster.yaml
istio-1.0.2/tools/perf_setup.svg
istio-1.0.2/tools/vagrant/
istio-1.0.2/tools/vagrant/Vagrantfile
istio-1.0.2/tools/vagrant/provision-vagrant.sh
istio-1.0.2/tools/istio-docker.mk
istio-1.0.2/tools/githubContrib/
istio-1.0.2/tools/githubContrib/Contributions.txt
istio-1.0.2/tools/rules.yml
istio-1.0.2/tools/run_canonical_perf_tests.sh
istio-1.0.2/tools/dump_kubernetes.sh
istio-1.0.2/README.md
istio-1.0.2/istio.VERSION
istio-1.0.2/install/
istio-1.0.2/install/kubernetes/
istio-1.0.2/install/kubernetes/ansible/
istio-1.0.2/install/kubernetes/ansible/main.yml
istio-1.0.2/install/kubernetes/ansible/README.md
istio-1.0.2/install/kubernetes/ansible/ansible.cfg
istio-1.0.2/install/kubernetes/ansible/istio/
istio-1.0.2/install/kubernetes/ansible/istio/defaults/
istio-1.0.2/install/kubernetes/ansible/istio/defaults/main.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/
istio-1.0.2/install/kubernetes/ansible/istio/tasks/add_to_path.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/delete_resources.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/main.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/simple_sample_cmd.j2
istio-1.0.2/install/kubernetes/ansible/istio/tasks/change_scc.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/create_namespace_free_definition_file.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/install_on_cluster.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/install_addons.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/bookinfo_cmd.j2
istio-1.0.2/install/kubernetes/ansible/istio/tasks/set_istio_distro_vars.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/install_sample.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/assert_oc_admin.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/set_appropriate_cmd_path.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/safely_create_namespace.yml
istio-1.0.2/install/kubernetes/ansible/istio/tasks/install_samples.yml
istio-1.0.2/install/kubernetes/ansible/istio/vars/
istio-1.0.2/install/kubernetes/ansible/istio/vars/main.yml
istio-1.0.2/install/kubernetes/ansible/istio/meta/
istio-1.0.2/install/kubernetes/ansible/istio/meta/main.yml
istio-1.0.2/install/kubernetes/istio-citadel-standalone.yaml
istio-1.0.2/install/kubernetes/istio-citadel-with-health-check.yaml
istio-1.0.2/install/kubernetes/helm/
istio-1.0.2/install/kubernetes/helm/helm-service-account.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/mutatingwebhook.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/sidecarInjectorWebhook/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/enable-mesh-mtls.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/templates/cleanup-secrets.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/charts/security/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/_affinity.tpl
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/endpoints.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/sidecar-injector-configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/values.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/README.md
istio-1.0.2/install/kubernetes/helm/istio-remote/requirements.yaml
istio-1.0.2/install/kubernetes/helm/istio-remote/Chart.yaml
istio-1.0.2/install/kubernetes/helm/README.md
istio-1.0.2/install/kubernetes/helm/istio/
istio-1.0.2/install/kubernetes/helm/istio/values-istio-one-namespace-auth.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/validatingwehookconfiguration.yaml.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/galley/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/clusterrolebindings.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/autoscale.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/gateways/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/autoscale.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/ingress/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/meshexpansion.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/gateway.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/autoscale.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/pilot/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/mutatingwebhook.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/sidecarInjectorWebhook/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/clusterrolebindings.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/prometheus/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/ingress.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/ingress-jaeger.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/templates/service-jaeger.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/tracing/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/statsdtoprom.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/config.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/autoscale.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/mixer/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/ingress.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/secrets.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/kiali/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/templates/ingress.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/servicegraph/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/crds.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/issuer.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/templates/rbac.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/certmanager/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/telemetry-gateway/
istio-1.0.2/install/kubernetes/helm/istio/charts/telemetry-gateway/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/telemetry-gateway/templates/gateway.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/telemetry-gateway/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/serviceaccount.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/meshexpansion.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/clusterrolebinding.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/create-custom-resources-job.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/clusterrole.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/enable-mesh-mtls.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/templates/cleanup-secrets.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/security/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/deployment.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/create-custom-resources-job.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/pvc.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/grafana-ports-mtls.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/secret.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/templates/service.yaml
istio-1.0.2/install/kubernetes/helm/istio/charts/grafana/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/templates/
istio-1.0.2/install/kubernetes/helm/istio/templates/_helpers.tpl
istio-1.0.2/install/kubernetes/helm/istio/templates/crds.yaml
istio-1.0.2/install/kubernetes/helm/istio/templates/configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/templates/_affinity.tpl
istio-1.0.2/install/kubernetes/helm/istio/templates/install-custom-resources.sh.tpl
istio-1.0.2/install/kubernetes/helm/istio/templates/sidecar-injector-configmap.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-galley.yaml
istio-1.0.2/install/kubernetes/helm/istio/values.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-demo-auth.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-demo.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-auth.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-one-namespace.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-auth-galley.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio.yaml
istio-1.0.2/install/kubernetes/helm/istio/README.md
istio-1.0.2/install/kubernetes/helm/istio/requirements.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-gateways.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-auth-multicluster.yaml
istio-1.0.2/install/kubernetes/helm/istio/Chart.yaml
istio-1.0.2/install/kubernetes/helm/istio/values-istio-multicluster.yaml
istio-1.0.2/install/kubernetes/README.md
istio-1.0.2/install/kubernetes/addons/
istio-1.0.2/install/kubernetes/istio-demo.yaml
istio-1.0.2/install/kubernetes/istio-demo-auth.yaml
istio-1.0.2/install/kubernetes/mesh-expansion.yaml
istio-1.0.2/install/kubernetes/istio-citadel-plugin-certs.yaml
istio-1.0.2/install/kubernetes/namespace.yaml
istio-1.0.2/install/tools/
istio-1.0.2/install/tools/setupIstioVM.sh
istio-1.0.2/install/tools/setupMeshEx.sh
istio-1.0.2/install/consul/
istio-1.0.2/install/consul/README.md
istio-1.0.2/install/consul/kubeconfig
istio-1.0.2/install/consul/istio.yaml
istio-1.0.2/install/README.md
istio-1.0.2/install/gcp/
istio-1.0.2/install/gcp/deployment_manager/
istio-1.0.2/install/gcp/deployment_manager/istio-cluster.yaml
istio-1.0.2/install/gcp/deployment_manager/README.md
istio-1.0.2/install/gcp/deployment_manager/istio-cluster.jinja.schema
istio-1.0.2/install/gcp/deployment_manager/istio-cluster.jinja.display
istio-1.0.2/install/gcp/deployment_manager/istio-cluster.jinja
istio-1.0.2/install/gcp/README.md
```

- Update the \$PATH

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# echo 'export PATH="$PATH:/root/istio-1.0.2/bin"' >> ~/.profile
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- If we don't want to log oout and log in again:

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~# export PATH="$PATH:/root/istio-1.0.2/bin"
root@ubuntu-s-1vcpu-2gb-lon1-01:~# istioctl

Istio configuration command line utility.

Create, list, modify, and delete configuration resources in the Istio
system.

Available routing and traffic management configuration types:

        [virtualservice gateway destinationrule serviceentry httpapispec httpapispecbinding quotaspec quotaspecbinding servicerole servicerolebinding policy]

See https://istio.io/docs/reference/ for an overview of Istio routing.

Usage:
  istioctl [command]

Available Commands:
  authn          Interact with Istio authentication policies
  context-create Create a kubeconfig file suitable for use with istioctl in a non kubernetes environment
  create         Create policies and rules
  delete         Delete policies or rules
  deregister     De-registers a service instance
  experimental   Experimental commands that may be modified or deprecated
  gen-deploy     Generates the configuration for Istio's control plane.
  get            Retrieve policies and rules
  help           Help about any command
  kube-inject    Inject Envoy sidecar into Kubernetes pod resources
  proxy-config   Retrieve information about proxy configuration from Envoy [kube only]
  proxy-status   Retrieves the synchronization status of each Envoy in the mesh [kube only]
  register       Registers a service instance (e.g. VM) joining the mesh
  replace        Replace existing policies and rules
  version        Prints out build version information

Flags:
      --context string                The name of the kubeconfig context to use
  -h, --help                          help for istioctl
  -i, --istioNamespace string         Istio system namespace (default "istio-system")
  -c, --kubeconfig string             Kubernetes configuration file
      --log_as_json                   Whether to format output as JSON or in plain console-friendly format
      --log_caller string             Comma-separated list of scopes for which to include caller information, scopes can be any of [ads, default, model, rbac]
      --log_output_level string       Comma-separated minimum per-scope logging level of messages to output, in the form of <scope>:<level>,<scope>:<level>,... where scope can be one of [ads, default, model, rbac] and level can be one of [debug, info, warn, error, none] (default "default:info")
      --log_rotate string             The path for the optional rotating log file
      --log_rotate_max_age int        The maximum age in days of a log file beyond which the file is rotated (0 indicates no limit) (default 30)
      --log_rotate_max_backups int    The maximum number of log file backups to keep before older files are deleted (0 indicates no limit) (default 1000)
      --log_rotate_max_size int       The maximum size in megabytes of a log file beyond which the file is rotated (default 104857600)
      --log_stacktrace_level string   Comma-separated minimum per-scope logging level at which stack traces are captured, in the form of <scope>:<level>,<scope:level>,... where scope can be one of [ads, default, model, rbac] and level can be one of [debug, info, warn, error, none] (default "default:none")
      --log_target stringArray        The set of paths where to output the log. This can be any path as well as the special values stdout and stderr (default [stdout])
  -n, --namespace string              Config namespace
  -p, --platform string               Istio host platform (default "kube")

Use "istioctl [command] --help" for more information about a command.
```

- We are going to apply CRDs ([Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)) by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl apply -f ~/istio-1.0.2/install/kubernetes/helm/istio/templates/crds.yaml
customresourcedefinition.apiextensions.k8s.io/virtualservices.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/destinationrules.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/serviceentries.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/gateways.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/envoyfilters.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/policies.authentication.istio.io created
customresourcedefinition.apiextensions.k8s.io/meshpolicies.authentication.istio.io created
customresourcedefinition.apiextensions.k8s.io/httpapispecbindings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/httpapispecs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/quotaspecbindings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/quotaspecs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/rules.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/attributemanifests.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/bypasses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/circonuses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/deniers.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/fluentds.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/kubernetesenvs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/listcheckers.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/memquotas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/noops.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/opas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/prometheuses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/rbacs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/redisquotas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/servicecontrols.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/signalfxs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/solarwindses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/stackdrivers.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/statsds.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/stdios.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/apikeys.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/authorizations.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/checknothings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/kuberneteses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/listentries.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/logentries.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/edges.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/metrics.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/quotas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/reportnothings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/servicecontrolreports.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/tracespans.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/rbacconfigs.rbac.istio.io created
customresourcedefinition.apiextensions.k8s.io/serviceroles.rbac.istio.io created
customresourcedefinition.apiextensions.k8s.io/servicerolebindings.rbac.istio.io created
customresourcedefinition.apiextensions.k8s.io/adapters.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/instances.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/templates.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/handlers.config.istio.io created
```

- Ensure the CRDs are running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get crds
NAME                                    CREATED AT
adapters.config.istio.io                2019-04-06T05:41:16Z
apikeys.config.istio.io                 2019-04-06T05:41:16Z
attributemanifests.config.istio.io      2019-04-06T05:41:15Z
authorizations.config.istio.io          2019-04-06T05:41:16Z
bypasses.config.istio.io                2019-04-06T05:41:15Z
checknothings.config.istio.io           2019-04-06T05:41:16Z
circonuses.config.istio.io              2019-04-06T05:41:15Z
deniers.config.istio.io                 2019-04-06T05:41:15Z
destinationrules.networking.istio.io    2019-04-06T05:41:15Z
edges.config.istio.io                   2019-04-06T05:41:16Z
envoyfilters.networking.istio.io        2019-04-06T05:41:15Z
fluentds.config.istio.io                2019-04-06T05:41:15Z
gateways.networking.istio.io            2019-04-06T05:41:15Z
handlers.config.istio.io                2019-04-06T05:41:16Z
httpapispecbindings.config.istio.io     2019-04-06T05:41:15Z
httpapispecs.config.istio.io            2019-04-06T05:41:15Z
instances.config.istio.io               2019-04-06T05:41:16Z
kubernetesenvs.config.istio.io          2019-04-06T05:41:15Z
kuberneteses.config.istio.io            2019-04-06T05:41:16Z
listcheckers.config.istio.io            2019-04-06T05:41:15Z
listentries.config.istio.io             2019-04-06T05:41:16Z
logentries.config.istio.io              2019-04-06T05:41:16Z
memquotas.config.istio.io               2019-04-06T05:41:15Z
meshpolicies.authentication.istio.io    2019-04-06T05:41:15Z
metrics.config.istio.io                 2019-04-06T05:41:16Z
noops.config.istio.io                   2019-04-06T05:41:15Z
opas.config.istio.io                    2019-04-06T05:41:16Z
policies.authentication.istio.io        2019-04-06T05:41:15Z
prometheuses.config.istio.io            2019-04-06T05:41:16Z
quotas.config.istio.io                  2019-04-06T05:41:16Z
quotaspecbindings.config.istio.io       2019-04-06T05:41:15Z
quotaspecs.config.istio.io              2019-04-06T05:41:15Z
rbacconfigs.rbac.istio.io               2019-04-06T05:41:16Z
rbacs.config.istio.io                   2019-04-06T05:41:16Z
redisquotas.config.istio.io             2019-04-06T05:41:16Z
reportnothings.config.istio.io          2019-04-06T05:41:16Z
rules.config.istio.io                   2019-04-06T05:41:15Z
servicecontrolreports.config.istio.io   2019-04-06T05:41:16Z
servicecontrols.config.istio.io         2019-04-06T05:41:16Z
serviceentries.networking.istio.io      2019-04-06T05:41:15Z
servicerolebindings.rbac.istio.io       2019-04-06T05:41:16Z
serviceroles.rbac.istio.io              2019-04-06T05:41:16Z
signalfxs.config.istio.io               2019-04-06T05:41:16Z
solarwindses.config.istio.io            2019-04-06T05:41:16Z
stackdrivers.config.istio.io            2019-04-06T05:41:16Z
statsds.config.istio.io                 2019-04-06T05:41:16Z
stdios.config.istio.io                  2019-04-06T05:41:16Z
templates.config.istio.io               2019-04-06T05:41:16Z
tracespans.config.istio.io              2019-04-06T05:41:16Z
virtualservices.networking.istio.io     2019-04-06T05:41:15Z
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We are going to install `Istio` in the cluster with `no mutual TLS authentication` by executing

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl apply -f ~/istio-1.0.2/install/kubernetes/istio-demo.yaml
namespace/istio-system created
configmap/istio-galley-configuration created
configmap/istio-grafana-custom-resources created
configmap/istio-statsd-prom-bridge created
configmap/prometheus created
configmap/istio-security-custom-resources created
configmap/istio created
configmap/istio-sidecar-injector created
serviceaccount/istio-galley-service-account created
serviceaccount/istio-egressgateway-service-account created
serviceaccount/istio-ingressgateway-service-account created
serviceaccount/istio-grafana-post-install-account created
clusterrole.rbac.authorization.k8s.io/istio-grafana-post-install-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-grafana-post-install-role-binding-istio-system created
job.batch/istio-grafana-post-install created
serviceaccount/istio-mixer-service-account created
serviceaccount/istio-pilot-service-account created
serviceaccount/prometheus created
serviceaccount/istio-cleanup-secrets-service-account created
clusterrole.rbac.authorization.k8s.io/istio-cleanup-secrets-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-cleanup-secrets-istio-system created
job.batch/istio-cleanup-secrets created
serviceaccount/istio-citadel-service-account created
serviceaccount/istio-sidecar-injector-service-account created
customresourcedefinition.apiextensions.k8s.io/virtualservices.networking.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/destinationrules.networking.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/serviceentries.networking.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/gateways.networking.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/envoyfilters.networking.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/httpapispecbindings.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/httpapispecs.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/quotaspecbindings.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/quotaspecs.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/rules.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/attributemanifests.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/bypasses.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/circonuses.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/deniers.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/fluentds.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/kubernetesenvs.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/listcheckers.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/memquotas.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/noops.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/opas.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/prometheuses.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/rbacs.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/redisquotas.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/servicecontrols.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/signalfxs.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/solarwindses.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/stackdrivers.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/statsds.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/stdios.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/apikeys.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/authorizations.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/checknothings.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/kuberneteses.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/listentries.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/logentries.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/edges.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/metrics.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/quotas.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/reportnothings.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/servicecontrolreports.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/tracespans.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/rbacconfigs.rbac.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/serviceroles.rbac.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/servicerolebindings.rbac.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/adapters.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/instances.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/templates.config.istio.io unchanged
customresourcedefinition.apiextensions.k8s.io/handlers.config.istio.io unchanged
clusterrole.rbac.authorization.k8s.io/istio-galley-istio-system created
clusterrole.rbac.authorization.k8s.io/istio-egressgateway-istio-system created
clusterrole.rbac.authorization.k8s.io/istio-ingressgateway-istio-system created
clusterrole.rbac.authorization.k8s.io/istio-mixer-istio-system created
clusterrole.rbac.authorization.k8s.io/istio-pilot-istio-system created
clusterrole.rbac.authorization.k8s.io/prometheus-istio-system created
clusterrole.rbac.authorization.k8s.io/istio-citadel-istio-system created
clusterrole.rbac.authorization.k8s.io/istio-sidecar-injector-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-galley-admin-role-binding-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-egressgateway-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-ingressgateway-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-mixer-admin-role-binding-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-pilot-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/prometheus-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-citadel-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-sidecar-injector-admin-role-binding-istio-system created
service/istio-galley created
service/istio-egressgateway created
service/istio-ingressgateway created
service/grafana created
service/istio-policy created
service/istio-telemetry created
service/istio-statsd-prom-bridge created
deployment.extensions/istio-statsd-prom-bridge created
service/istio-pilot created
service/prometheus created
service/istio-citadel created
service/servicegraph created
service/istio-sidecar-injector created
deployment.extensions/istio-galley created
deployment.extensions/istio-egressgateway created
deployment.extensions/istio-ingressgateway created
deployment.extensions/grafana created
deployment.extensions/istio-policy created
deployment.extensions/istio-telemetry created
deployment.extensions/istio-pilot created
deployment.extensions/prometheus created
deployment.extensions/istio-citadel created
deployment.extensions/servicegraph created
deployment.extensions/istio-sidecar-injector created
deployment.extensions/istio-tracing created
gateway.networking.istio.io/istio-autogenerated-k8s-ingress created
horizontalpodautoscaler.autoscaling/istio-egressgateway created
horizontalpodautoscaler.autoscaling/istio-ingressgateway created
horizontalpodautoscaler.autoscaling/istio-policy created
horizontalpodautoscaler.autoscaling/istio-telemetry created
horizontalpodautoscaler.autoscaling/istio-pilot created
service/jaeger-query created
service/jaeger-collector created
service/jaeger-agent created
service/zipkin created
service/tracing created
mutatingwebhookconfiguration.admissionregistration.k8s.io/istio-sidecar-injector created
attributemanifest.config.istio.io/istioproxy created
attributemanifest.config.istio.io/kubernetes created
stdio.config.istio.io/handler created
logentry.config.istio.io/accesslog created
logentry.config.istio.io/tcpaccesslog created
rule.config.istio.io/stdio created
rule.config.istio.io/stdiotcp created
metric.config.istio.io/requestcount created
metric.config.istio.io/requestduration created
metric.config.istio.io/requestsize created
metric.config.istio.io/responsesize created
metric.config.istio.io/tcpbytesent created
metric.config.istio.io/tcpbytereceived created
prometheus.config.istio.io/handler created
rule.config.istio.io/promhttp created
rule.config.istio.io/promtcp created
kubernetesenv.config.istio.io/handler created
rule.config.istio.io/kubeattrgenrulerule created
rule.config.istio.io/tcpkubeattrgenrulerule created
kubernetes.config.istio.io/attributes created
destinationrule.networking.istio.io/istio-policy created
destinationrule.networking.istio.io/istio-telemetry created
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We can check if everything is working by executing

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pod -n istio-system
NAME                                        READY   STATUS      RESTARTS   AGE
grafana-6cbdcfb45-kglcz                     1/1     Running     0          1m
istio-citadel-6b6fdfdd6f-hfd2q              1/1     Running     0          1m
istio-cleanup-secrets-dnnph                 0/1     Completed   0          1m
istio-egressgateway-56bdd5fcfb-rt92n        1/1     Running     0          1m
istio-galley-96464ff6-wdf6j                 1/1     Running     0          1m
istio-grafana-post-install-zf8qg            0/1     Completed   0          1m
istio-ingressgateway-7f4dd7d699-gg6x5       1/1     Running     0          1m
istio-pilot-6f8d49d4c4-c8gtd                2/2     Running     0          1m
istio-policy-67f4d49564-bgh55               2/2     Running     0          1m
istio-sidecar-injector-69c4bc7974-pjpxd     1/1     Running     0          1m
istio-statsd-prom-bridge-7f44bb5ddb-4xmhb   1/1     Running     0          1m
istio-telemetry-76869cd64f-8wjjz            2/2     Running     0          1m
istio-tracing-ff94688bb-fp548               1/1     Running     0          1m
prometheus-84bd4b9796-bwtdz                 1/1     Running     0          1m
servicegraph-c6456d6f5-wskrk                1/1     Running     0          1m
```

### 108. Demo: An Istio enabled app

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAnIstioEnabledApp.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAnIstioEnabledApp2.png)

- We are going to use the `istio/helloworld.yaml` document to create 3 deployments with their services.

- The image used is created using the https://github.com/peelmicro/http-echo repository. It has a `GO` app that allows to echo a message and call another app after the message is shown.

> main.go

```go
package main

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/lestrrat-go/jwx/jwk"

	"crypto/rsa"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

type Login struct {
	Login string `json:"login" binding:"required"`
}

type Jwks struct {
	Keys []JwksKeys `json:"keys"`
}
type JwksKeys struct {
	E   string `json:"e"`
	Kid string `json:"kid"`
	Kty string `json:"kty"`
	N   string `json:"n"`
}

var (
	publicKey *rsa.PublicKey
	signKey   *rsa.PrivateKey
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		latency := os.Getenv("LATENCY")
		if latency != "" {
			i, err := strconv.ParseInt(latency, 10, 64)
			if err != nil {
				fmt.Fprintf(w, "Env LATENCY needs to be a number")
				return
			}
			time.Sleep(time.Duration(i) * time.Second)
		}
		text := os.Getenv("TEXT")
		if text == "" {
			fmt.Fprintf(w, "set env TEXT to display something")
			return
		}
		next := os.Getenv("NEXT")
		if next == "" {
			fmt.Fprintf(w, "%s", text)
		} else {
			// initialize client
			client := &http.Client{}
			req, _ := http.NewRequest("GET", "http://"+next+"/", nil)

			// get headirs
			for k, _ := range r.Header {
				for _, otHeader := range otHeaders {
					if strings.ToLower(otHeader) == strings.ToLower(k) {
						req.Header.Set(k, r.Header.Get(k))
					}
				}
			}

			// do request
			resp, err := client.Do(req)
			if err != nil {
				fmt.Fprintf(w, "Couldn't connect to http://%s/", next)
				fmt.Printf("Error: %s", err)
				return
			}
			defer resp.Body.Close()
			body, err := ioutil.ReadAll(resp.Body)
			fmt.Fprintf(w, "%s %s\n", text, body)
		}
	})

	// load keys for JWT
	initKeys()

	// handle login
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		// read body
		decoder := json.NewDecoder(r.Body)
		var l Login
		err := decoder.Decode(&l)
		if err != nil {
			fmt.Fprintf(w, "No login supplied")
			return
		}
		// generate jwt token
		token := jwt.NewWithClaims(jwt.GetSigningMethod("RS256"), jwt.MapClaims{
			"login":  l.Login,
			"groups": "users",
			"iss":    "http-echo@http-echo.kubernetes.newtech.academy",
			"sub":    "http-echo@http-echo.kubernetes.newtech.academy",
			"exp":    time.Now().Add(time.Hour * 72).Unix(),
			"iat":    time.Now().Unix(),
		})

		token.Header["kid"] = "mykey"

		tokenString, err := token.SignedString(signKey)

		if err != nil {
			fmt.Fprintf(w, "Could not sign jwt token")
			return
		}

		fmt.Fprintf(w, "JWT token: %s \n", tokenString)
	})

	// jwks.json
	http.HandleFunc("/.well-known/jwks.json", func(w http.ResponseWriter, r *http.Request) {
		key, err := jwk.New(publicKey)
		if err != nil {
			log.Printf("failed to create JWK: %s", err)
			return
		}

		key.Set("kid", "mykey")

		jsonbuf, err := json.MarshalIndent(key, "", "  ")
		if err != nil {
			log.Printf("failed to generate JSON: %s", err)
			return
		}

		var k JwksKeys

		if err := json.Unmarshal(jsonbuf, &k); err != nil {
			log.Printf("failed to unmarshal JSON: %s", err)
			return
		}

		j := &Jwks{Keys: []JwksKeys{k}}

		jsonbuf2, err := json.Marshal(j)
		if err != nil {
			log.Printf("failed to generate JSON: %s", err)
			return
		}

		fmt.Fprintf(w, "%s", jsonbuf2)
	})

	// start server
	fmt.Printf("Listening on port 8080\n")
	http.ListenAndServe(":8080", nil)
}

func fatal(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func initKeys() {
	createKeys()

	signBytes, err := ioutil.ReadFile("private.pem")
	fatal(err)

	signKey, err = jwt.ParseRSAPrivateKeyFromPEM(signBytes)
	fatal(err)

	publicBytes, err := ioutil.ReadFile("public.pem")
	fatal(err)

	publicKey, err = jwt.ParseRSAPublicKeyFromPEM(publicBytes)
	fatal(err)
}
```

> istio/helloworld.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: hello
        version: v1
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: hello
            - name: NEXT
              value: "world:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello
  labels:
    app: hello
spec:
  selector:
    app: hello
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: world
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: world
        version: v1
    spec:
      containers:
        - name: world
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: world
            - name: NEXT
              value: "world-2:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: world
  labels:
    app: world
spec:
  selector:
    app: world
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: world-2
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: world-2
        version: v1
    spec:
      containers:
        - name: world-2
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: "!!!"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: world-2
  labels:
    app: world-2
spec:
  selector:
    app: world-2
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---

```

- We can see what `istio` is going to do by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# istioctl kube-inject -f helloworld.yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  creationTimestamp: null
  name: hello
spec:
  replicas: 3
  strategy: {}
  template:
    metadata:
      annotations:
        sidecar.istio.io/status: '{"version":"666176cf119f5520023f04b79663e0d1ebeaf2aece1864b5abf1547879b22129","initContainers":["istio-init"],"containers":["istio-proxy"],"volumes":["istio-envoy","istio-certs"],"imagePullSecrets":null}'
      creationTimestamp: null
      labels:
        app: hello
        version: v1
    spec:
      containers:
      - env:
        - name: TEXT
          value: hello
        - name: NEXT
          value: world:8080
        image: wardviaene/http-echo
        name: hello
        ports:
        - containerPort: 8080
          name: http
        resources: {}
      - args:
        - proxy
        - sidecar
        - --configPath
        - /etc/istio/proxy
        - --binaryPath
        - /usr/local/bin/envoy
        - --serviceCluster
        - hello
        - --drainDuration
        - 45s
        - --parentShutdownDuration
        - 1m0s
        - --discoveryAddress
        - istio-pilot.istio-system:15007
        - --discoveryRefreshDelay
        - 1s
        - --zipkinAddress
        - zipkin.istio-system:9411
        - --connectTimeout
        - 10s
        - --statsdUdpAddress
        - istio-statsd-prom-bridge.istio-system:9125
        - --proxyAdminPort
        - "15000"
        - --controlPlaneAuthPolicy
        - NONE
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: INSTANCE_IP
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
        - name: ISTIO_META_POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: ISTIO_META_INTERCEPTION_MODE
          value: REDIRECT
        image: gcr.io/istio-release/proxyv2:1.0.2
        imagePullPolicy: IfNotPresent
        name: istio-proxy
        resources:
          requests:
            cpu: 10m
        securityContext:
          readOnlyRootFilesystem: true
          runAsUser: 1337
        volumeMounts:
        - mountPath: /etc/istio/proxy
          name: istio-envoy
        - mountPath: /etc/certs/
          name: istio-certs
          readOnly: true
      initContainers:
      - args:
        - -p
        - "15001"
        - -u
        - "1337"
        - -m
        - REDIRECT
        - -i
        - '*'
        - -x
        - ""
        - -b
        - 8080,
        - -d
        - ""
        image: gcr.io/istio-release/proxy_init:1.0.2
        imagePullPolicy: IfNotPresent
        name: istio-init
        resources: {}
        securityContext:
          capabilities:
            add:
            - NET_ADMIN
      volumes:
      - emptyDir:
          medium: Memory
        name: istio-envoy
      - name: istio-certs
        secret:
          optional: true
          secretName: istio.default
status: {}
---
apiVersion: v1
kind: Service
metadata:
  name: hello
  labels:
    app: hello
spec:
  selector:
    app: hello
  ports:
  - name: http
    port: 8080
    targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  creationTimestamp: null
  name: world
spec:
  replicas: 3
  strategy: {}
  template:
    metadata:
      annotations:
        sidecar.istio.io/status: '{"version":"666176cf119f5520023f04b79663e0d1ebeaf2aece1864b5abf1547879b22129","initContainers":["istio-init"],"containers":["istio-proxy"],"volumes":["istio-envoy","istio-certs"],"imagePullSecrets":null}'
      creationTimestamp: null
      labels:
        app: world
        version: v1
    spec:
      containers:
      - env:
        - name: TEXT
          value: world
        - name: NEXT
          value: world-2:8080
        image: wardviaene/http-echo
        name: world
        ports:
        - containerPort: 8080
          name: http
        resources: {}
      - args:
        - proxy
        - sidecar
        - --configPath
        - /etc/istio/proxy
        - --binaryPath
        - /usr/local/bin/envoy
        - --serviceCluster
        - world
        - --drainDuration
        - 45s
        - --parentShutdownDuration
        - 1m0s
        - --discoveryAddress
        - istio-pilot.istio-system:15007
        - --discoveryRefreshDelay
        - 1s
        - --zipkinAddress
        - zipkin.istio-system:9411
        - --connectTimeout
        - 10s
        - --statsdUdpAddress
        - istio-statsd-prom-bridge.istio-system:9125
        - --proxyAdminPort
        - "15000"
        - --controlPlaneAuthPolicy
        - NONE
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: INSTANCE_IP
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
        - name: ISTIO_META_POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: ISTIO_META_INTERCEPTION_MODE
          value: REDIRECT
        image: gcr.io/istio-release/proxyv2:1.0.2
        imagePullPolicy: IfNotPresent
        name: istio-proxy
        resources:
          requests:
            cpu: 10m
        securityContext:
          readOnlyRootFilesystem: true
          runAsUser: 1337
        volumeMounts:
        - mountPath: /etc/istio/proxy
          name: istio-envoy
        - mountPath: /etc/certs/
          name: istio-certs
          readOnly: true
      initContainers:
      - args:
        - -p
        - "15001"
        - -u
        - "1337"
        - -m
        - REDIRECT
        - -i
        - '*'
        - -x
        - ""
        - -b
        - 8080,
        - -d
        - ""
        image: gcr.io/istio-release/proxy_init:1.0.2
        imagePullPolicy: IfNotPresent
        name: istio-init
        resources: {}
        securityContext:
          capabilities:
            add:
            - NET_ADMIN
      volumes:
      - emptyDir:
          medium: Memory
        name: istio-envoy
      - name: istio-certs
        secret:
          optional: true
          secretName: istio.default
status: {}
---
apiVersion: v1
kind: Service
metadata:
  name: world
  labels:
    app: world
spec:
  selector:
    app: world
  ports:
  - name: http
    port: 8080
    targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  creationTimestamp: null
  name: world-2
spec:
  replicas: 3
  strategy: {}
  template:
    metadata:
      annotations:
        sidecar.istio.io/status: '{"version":"666176cf119f5520023f04b79663e0d1ebeaf2aece1864b5abf1547879b22129","initContainers":["istio-init"],"containers":["istio-proxy"],"volumes":["istio-envoy","istio-certs"],"imagePullSecrets":null}'
      creationTimestamp: null
      labels:
        app: world-2
        version: v1
    spec:
      containers:
      - env:
        - name: TEXT
          value: '!!!'
        image: wardviaene/http-echo
        name: world-2
        ports:
        - containerPort: 8080
          name: http
        resources: {}
      - args:
        - proxy
        - sidecar
        - --configPath
        - /etc/istio/proxy
        - --binaryPath
        - /usr/local/bin/envoy
        - --serviceCluster
        - world-2
        - --drainDuration
        - 45s
        - --parentShutdownDuration
        - 1m0s
        - --discoveryAddress
        - istio-pilot.istio-system:15007
        - --discoveryRefreshDelay
        - 1s
        - --zipkinAddress
        - zipkin.istio-system:9411
        - --connectTimeout
        - 10s
        - --statsdUdpAddress
        - istio-statsd-prom-bridge.istio-system:9125
        - --proxyAdminPort
        - "15000"
        - --controlPlaneAuthPolicy
        - NONE
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: INSTANCE_IP
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
        - name: ISTIO_META_POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: ISTIO_META_INTERCEPTION_MODE
          value: REDIRECT
        image: gcr.io/istio-release/proxyv2:1.0.2
        imagePullPolicy: IfNotPresent
        name: istio-proxy
        resources:
          requests:
            cpu: 10m
        securityContext:
          readOnlyRootFilesystem: true
          runAsUser: 1337
        volumeMounts:
        - mountPath: /etc/istio/proxy
          name: istio-envoy
        - mountPath: /etc/certs/
          name: istio-certs
          readOnly: true
      initContainers:
      - args:
        - -p
        - "15001"
        - -u
        - "1337"
        - -m
        - REDIRECT
        - -i
        - '*'
        - -x
        - ""
        - -b
        - 8080,
        - -d
        - ""
        image: gcr.io/istio-release/proxy_init:1.0.2
        imagePullPolicy: IfNotPresent
        name: istio-init
        resources: {}
        securityContext:
          capabilities:
            add:
            - NET_ADMIN
      volumes:
      - emptyDir:
          medium: Memory
        name: istio-envoy
      - name: istio-certs
        secret:
          optional: true
          secretName: istio.default
status: {}
---
apiVersion: v1
kind: Service
metadata:
  name: world-2
  labels:
    app: world-2
spec:
  selector:
    app: world-2
  ports:
  - name: http
    port: 8080
    targetPort: 8080
---
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We cannot use the normal `kubectl app -f` to execute the document. We have to inject inside `Istio` by using:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld.yaml)
deployment.extensions/hello created
service/hello created
deployment.extensions/world created
service/world created
deployment.extensions/world-2 created
service/world-2 created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We can check if they are running by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
hello-c56ccdb87-fghvx     2/2     Running   0          39s
hello-c56ccdb87-gf5z4     2/2     Running   0          39s
hello-c56ccdb87-tsg7v     2/2     Running   0          39s
world-2-66f86dff7-7g5mv   2/2     Running   0          39s
world-2-66f86dff7-sgqjl   2/2     Running   0          39s
world-2-66f86dff7-w62wz   2/2     Running   0          39s
world-595f57b9f8-9r4kd    2/2     Running   0          39s
world-595f57b9f8-npf86    2/2     Running   0          39s
world-595f57b9f8-w7q6g    2/2     Running   0          39s
```

- We are going to use the `istio/helloworld-gw.yaml` document to create a `gateway` and a `VirtualService` that is going to allow is to access the pods.

> istio/helloworld-gw.yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: helloworld-gateway
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
    - port:
        number: 80
        name: http
        protocol: HTTP
      hosts:
        - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld
spec:
  hosts:
    - "*"
  gateways:
    - helloworld-gateway
  http:
    - match:
        - uri:
            prefix: /hello
      route:
        - destination:
            host: hello.default.svc.cluster.local
            port:
              number: 8080
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-gw.yaml
gateway.networking.istio.io/helloworld-gateway created
virtualservice.networking.istio.io/helloworld created
```

- We can have a look at the `istio services` running by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -n istio-system -o wide
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                 PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    ClusterIP      100.67.210.224   <none>                                                                      3000/TCP                                                                                                                  30m   app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                      8060/TCP,9093/TCP                                                                                                         30m   istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                      80/TCP,443/TCP                                                                                                            30m   app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                      443/TCP,9093/TCP                                                                                                          30m   istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com   80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   30m   app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                      15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     30m   istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                      9091/TCP,15004/TCP,9093/TCP                                                                                               30m   istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                      443/TCP                                                                                                                   30m   istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                      9102/TCP,9125/UDP                                                                                                         30m   istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                      9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     30m   istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                      5775/UDP,6831/UDP,6832/UDP                                                                                                30m   app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                      14267/TCP,14268/TCP                                                                                                       30m   app=jaeger
jaeger-query               ClusterIP      100.65.10.155    <none>                                                                      16686/TCP                                                                                                                 30m   app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                      9090/TCP                                                                                                                  30m   app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                      8088/TCP                                                                                                                  30m   app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                      80/TCP                                                                                                                    30m   app=jaeger
```

- we can see the `a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com` url where we can access the `load balancer`. So we can use that url with the name of the vitual service to access it.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!
```

- So the virtual service has called the first pod (`hello`), the pod has called the second pod (`world`) and the second pod has called the third one (`!!!`).

### 109. Demo: Advanced routing with Istio

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAdvancedRoutingWithIstio.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAdvancedRoutingWithIstio2.png)

- We are going to use the `istio/helloworld-v2.yaml` document to create a new deployment of hello but with `v2` version that is going to call the `world-2` pod.

> istio/helloworld-v2.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello-v2
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: hello
        version: v2
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: hello, this is v2
            - name: NEXT
              value: "world-2:8080"
          ports:
            - name: http
              containerPort: 8080
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-v2.yaml)
deployment.extensions/hello-v2 created
```

- We are going to use `istio/helloworld-v2-routing.yaml` document to create a new DestinationRule and it's going to overwrite the `helloworld` VirtualService that is going to call `v2` version of the deployment pod.

> istio/helloworld-v2-routing.yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: hello
spec:
  host: hello.default.svc.cluster.local
  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld
spec:
  hosts:
    - "hello.example.com"
  gateways:
    - helloworld-gateway
  http:
    - match:
        - headers:
            end-user:
              exact: john
      route:
        - destination:
            host: hello.default.svc.cluster.local
            subset: v2 # match v2 only
            port:
              number: 8080
    - route: # default route for hello.example.com
        - destination:
            host: hello.default.svc.cluster.local
            subset: v1 # match v1 only
            port:
              number: 8080
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-v2-routing.yaml
destinationrule.networking.istio.io/hello created
virtualservice.networking.istio.io/helloworld configured
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- It is not working anymore because we have a new virtual service.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get virtualservice
NAME         CREATED AT
helloworld   21m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello -v
*   Trying 18.195.144.112...
* TCP_NODELAY set
* Connected to a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com (18.195.144.112) port 80 (#0)
> GET /hello HTTP/1.1
> Host: a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 404 Not Found
< date: Sat, 06 Apr 2019 06:38:17 GMT
< server: envoy
< content-length: 0
<
* Connection #0 to host a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com left intact
```

- We need to define the host by using:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello.example.com"
hello world !!!

```

- Se we add the header `-H "end-user: john"` it is going to call the `v2` version.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello.example.com" -H "end-user: john"
hello, this is v2 !!!
```

### 110. Demo: Canary Deployments

- Instead of using the `header` to route the traffic we are going to use a `Canary Deployment`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCanaryDeployments.png)

- We are going to use `istio/helloworld-v2-canary.yaml` document to overwrite the `hello` DestinationRule and the `helloworld` VirtualService that is going to call `v2` version of the deployment pod based on the `weight` value.

> istio/helloworld-v2-canary.yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: hello
spec:
  host: hello.default.svc.cluster.local
  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld
spec:
  hosts:
    - "hello.example.com"
  gateways:
    - helloworld-gateway
  http:
    - route:
        - destination:
            host: hello.default.svc.cluster.local
            subset: v1
            port:
              number: 8080
          weight: 90
        - destination:
            host: hello.default.svc.cluster.local
            subset: v2
            port:
              number: 8080
          weight: 10
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-v2-canary.yaml
destinationrule.networking.istio.io/hello unchanged
virtualservice.networking.istio.io/helloworld configured
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get virtualservice        NAME         CREATED AT
helloworld   33m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl describe virtualservice helloworld
Name:         helloworld
Namespace:    default
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration:
                {"apiVersion":"networking.istio.io/v1alpha3","kind":"VirtualService","metadata":{"annotations":{},"name":"helloworld","namespace":"default...
API Version:  networking.istio.io/v1alpha3
Kind:         VirtualService
Metadata:
  Cluster Name:
  Creation Timestamp:  2019-04-06T06:16:00Z
  Generation:          1
  Resource Version:    9277
  Self Link:           /apis/networking.istio.io/v1alpha3/namespaces/default/virtualservices/helloworld
  UID:                 72ddc236-5833-11e9-b668-026e61515d9c
Spec:
  Gateways:
    helloworld-gateway
  Hosts:
    hello.example.com
  Http:
    Route:
      Destination:
        Host:  hello.default.svc.cluster.local
        Port:
          Number:  8080
        Subset:    v1
      Weight:      90
      Destination:
        Host:  hello.default.svc.cluster.local
        Port:
          Number:  8080
        Subset:    v2
      Weight:      10
Events:            <none>
```

- We are going to execute `curl` 10 times to see how it works.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# for ((i=1;i<=10;i++)); do curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/ -H "host: hello.example.com" ; done
hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello, this is v2 !!!
hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello, this is v2 !!!
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# for ((i=1;i<=10;i++)); do curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/ -H "host: hello.example.com" ; done
hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# for ((i=1;i<=10;i++)); do curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/ -H "host: hello.example.com" ; done
hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello world !!!

hello, this is v2 !!!
hello world !!!

hello world !!!
```

### 111. Demo: Retries

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRetries.png)

- We are going to use the `istio/helloworld-v3.yaml` document to create the `hello-v3` deployment and the `hello-v3-latency` deployment, it is going to update the `hello` DestinationRule and create the `helloworld-v3` VirtualService.

> istio/helloworld-v3.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello-v3
spec:
  replicas: 2
  template:
    metadata:
      labels:
        app: hello
        version: v3
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: MY_POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: TEXT
              value: hello, this is $(MY_POD_NAME)
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello-v3-latency
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello
        version: v3
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: MY_POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: TEXT
              value: hello, this is $(MY_POD_NAME)
            - name: LATENCY
              value: "5"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: hello
spec:
  host: hello.default.svc.cluster.local
  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
    - name: v3
      labels:
        version: v3
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld-v3
spec:
  hosts:
    - "hello-v3.example.com"
  gateways:
    - helloworld-gateway
  http:
    - route: # default route for hello.example.com
        - destination:
            host: hello.default.svc.cluster.local
            subset: v3 # match v3 only
            port:
              number: 8080
      timeout: 10s
      retries:
        attempts: 2
        perTryTimeout: 2s
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-v3.yaml deployment.extensions/hello-v3 created
deployment.extensions/hello-v3-latency created
destinationrule.networking.istio.io/hello configured
virtualservice.networking.istio.io/helloworld-v3 created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get destinationrule
NAME    CREATED AT
hello   36m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl describe destinationrule hello
Name:         hello
Namespace:    default
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration:
                {"apiVersion":"networking.istio.io/v1alpha3","kind":"DestinationRule","metadata":{"annotations":{},"name":"hello","namespace":"default"},"...
API Version:  networking.istio.io/v1alpha3
Kind:         DestinationRule
Metadata:
  Cluster Name:
  Creation Timestamp:  2019-04-06T06:34:49Z
  Generation:          1
  Resource Version:    11186
  Self Link:           /apis/networking.istio.io/v1alpha3/namespaces/default/destinationrules/hello
  UID:                 13d64736-5836-11e9-b668-026e61515d9c
Spec:
  Host:  hello.default.svc.cluster.local
  Subsets:
    Labels:
      Version:  v1
    Name:       v1
    Labels:
      Version:  v2
    Name:       v2
    Labels:
      Version:  v3
    Name:       v3
Events:         <none>
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get virtualservice          NAME            CREATED AT
helloworld      56m
helloworld-v3   1m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
NAME                               READY   STATUS    RESTARTS   AGE
hello-c56ccdb87-fghvx              2/2     Running   0          1h
hello-c56ccdb87-gf5z4              2/2     Running   0          1h
hello-c56ccdb87-tsg7v              2/2     Running   0          1h
hello-v2-85f9786b79-9m7pz          2/2     Running   0          39m
hello-v2-85f9786b79-mpndj          2/2     Running   0          39m
hello-v2-85f9786b79-wcmqk          2/2     Running   0          39m
hello-v3-c5d5f9cc8-bkn5b           1/1     Running   0          2m
hello-v3-c5d5f9cc8-gn7bs           1/1     Running   0          2m
hello-v3-latency-b579ddb58-2pwzk   1/1     Running   0          2m
world-2-66f86dff7-7g5mv            2/2     Running   0          1h
world-2-66f86dff7-sgqjl            2/2     Running   0          1h
world-2-66f86dff7-w62wz            2/2     Running   0          1h
world-595f57b9f8-9r4kd             2/2     Running   0          1h
world-595f57b9f8-npf86             2/2     Running   0          1h
world-595f57b9f8-w7q6g             2/2     Running   0          1h
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello-v3.example.com"
hello, this is hello-v3-c5d5f9cc8-gn7bsroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# for ((i=1;i<=10;i++)); do time curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/ -H "host: hello-v3.example.com" ; done
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.060s
user    0m0.014s
sys     0m0.000s
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.047s
user    0m0.004s
sys     0m0.007s
hello, this is hello-v3-c5d5f9cc8-gn7bs
real    0m2.053s
user    0m0.007s
sys     0m0.004s
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.052s
user    0m0.006s
sys     0m0.006s
hello, this is hello-v3-c5d5f9cc8-gn7bs
real    0m2.061s
user    0m0.008s
sys     0m0.004s
hello, this is hello-v3-c5d5f9cc8-gn7bs
real    0m2.072s
user    0m0.014s
sys     0m0.000s
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.047s
user    0m0.012s
sys     0m0.000s
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.045s
user    0m0.003s
sys     0m0.007s
hello, this is hello-v3-c5d5f9cc8-gn7bs
real    0m3.086s
user    0m0.006s
sys     0m0.006s
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.047s
user    0m0.012s
sys     0m0.001s
```

- We are going to remove `retry`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# vim helloworld-v3.yaml
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRetries2.png)

- We are going to apply it again.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-v3.yaml deployment.extensions/hello-v3 unchanged
deployment.extensions/hello-v3-latency unchanged
destinationrule.networking.istio.io/hello unchanged
virtualservice.networking.istio.io/helloworld-v3 configured
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# time curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello-v3.example.com"
hello, this is hello-v3-c5d5f9cc8-bkn5b
real    0m0.102s
user    0m0.004s
sys     0m0.004s
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# time curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello-v3.example.com"
hello, this is hello-v3-latency-b579ddb58-2pwzk
real    0m5.057s
user    0m0.011s
sys     0m0.000s
```

### 112. Mutual TLS

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/MutualTLS.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/MutualTLS2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/MutualTLS3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/MutualTLS4.png)

### 113. Demo: Mutual TLS

We are going to use the `istio/helloworld-tls.yaml` document to create 2 `namespaces` along with 4 new `deployment` pods with their 4 new `services`. It is also going to create a `gateway` along with 2 `Destination Rules` and 2 `Virtual Services`.

> istio/helloworld-tls.yaml

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ns1
---
apiVersion: v1
kind: Namespace
metadata:
  name: ns2
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello-tls
  namespace: ns1
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello
        version: v1-tls
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: hello
            - name: NEXT
              value: "world.ns2:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: world-tls
  namespace: ns2
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: world
        version: v1-tls
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: world
            - name: NEXT
              value: "end.legacy:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: world-reverse-tls
  namespace: ns2
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: world-reverse
        version: v1-tls
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: world
            - name: NEXT
              value: "end-reverse.ns1:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: end-reverse-tls
  namespace: ns1
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: end-reverse
        version: v1-tls
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: "!!!"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello
  namespace: ns1
  labels:
    app: hello
spec:
  selector:
    app: hello
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: world
  namespace: ns2
  labels:
    app: world
spec:
  selector:
    app: world
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: world-reverse
  namespace: ns2
  labels:
    app: world-reverse
spec:
  selector:
    app: world-reverse
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: end-reverse
  namespace: ns1
  labels:
    app: end-reverse
spec:
  selector:
    app: end-reverse
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: helloworld-gateway
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
    - port:
        number: 80
        name: http
        protocol: HTTP
      hosts:
        - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: hello
spec:
  host: hello.ns1.svc.cluster.local
  # uncomment to enable mutual TLS
  #trafficPolicy:
  #  tls:
  #    mode: ISTIO_MUTUAL
  subsets:
    - name: v1-tls
      labels:
        version: v1-tls
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: hello-reverse
spec:
  host: hello-reverse.legacy.svc.cluster.local
  # uncomment to enable mutual TLS
  #trafficPolicy:
  #  tls:
  #    mode: ISTIO_MUTUAL
  subsets:
    - name: v1-tls
      labels:
        version: v1-tls
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld-tls
spec:
  hosts:
    - "hello-tls.example.com"
  gateways:
    - helloworld-gateway
  http:
    - route:
        - destination:
            host: hello.ns1.svc.cluster.local
            subset: v1-tls # match v3 only
            port:
              number: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld-tls-reverse
spec:
  hosts:
    - "hello-tls-reverse.example.com"
  gateways:
    - helloworld-gateway
  http:
    - route:
        - destination:
            host: hello-reverse.legacy.svc.cluster.local
            subset: v1-tls
            port:
              number: 8080
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-tls.yaml)
namespace/ns1 created
namespace/ns2 created
deployment.extensions/hello-tls created
deployment.extensions/world-tls created
deployment.extensions/world-reverse-tls created
deployment.extensions/end-reverse-tls created
service/hello created
service/world created
service/world-reverse created
service/end-reverse created
gateway.networking.istio.io/helloworld-gateway unchanged
destinationrule.networking.istio.io/hello configured
destinationrule.networking.istio.io/hello-reverse created
virtualservice.networking.istio.io/helloworld-tls created
virtualservice.networking.istio.io/helloworld-tls-reverse created
```

- We are also going to use the `istio/helloworld-tls-legacy.yaml` document to create 1 `namespace` along with 2 new `deployment` pods with their 2 new `services`.

> istio/helloworld-tls-legacy.yaml

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: legacy
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: end-tls
  namespace: legacy
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: end
        version: v1-tls
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: "!!!"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello-reverse-tls
  namespace: legacy
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello-reverse
        version: v1-tls
    spec:
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: hello
            - name: NEXT
              value: "world-reverse.ns2:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: end
  namespace: legacy
  labels:
    app: end
spec:
  selector:
    app: end
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello-reverse
  namespace: legacy
  labels:
    app: hello-reverse
spec:
  selector:
    app: hello-reverse
  ports:
    - name: http
      port: 8080
      targetPort: 8080
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-tls-legacy.yaml
namespace/legacy created
deployment.extensions/end-tls created
deployment.extensions/hello-reverse-tls created
service/end created
service/hello-reverse created
```

- Remove any previous pod

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-v2-canary.yaml
virtualservice.networking.istio.io "helloworld" deleted
Error from server (NotFound): error when deleting "helloworld-v2-canary.yaml": destinationrules.networking.istio.io "hello" not found
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld.yaml   deployment.extensions "hello" deleted
service "hello" deleted
deployment.extensions "world" deleted
service "world" deleted
deployment.extensions "world-2" deleted
service "world-2" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-v2.yamldeployment.extensions "hello-v2" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-v2-routing.yaml
Error from server (NotFound): error when deleting "helloworld-v2-routing.yaml": destinationrules.networking.istio.io "hello" not found
Error from server (NotFound): error when deleting "helloworld-v2-routing.yaml": virtualservices.networking.istio.io "helloworld" not found
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
NAME                        READY   STATUS        RESTARTS   AGE
hello-v2-85f9786b79-9m7pz   0/2     Terminating   0          1h
hello-v2-85f9786b79-mpndj   0/2     Terminating   0          1h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
No resources found.
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -o wide -n istio-system
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                 PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    ClusterIP      100.67.210.224   <none>                                                                      3000/TCP                                                                                                                  1h    app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                      8060/TCP,9093/TCP                                                                                                         1h    istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                      80/TCP,443/TCP                                                                                                            1h    app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                      443/TCP,9093/TCP                                                                                                          1h    istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com   80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   1h    app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                      15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     1h    istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                      9091/TCP,15004/TCP,9093/TCP                                                                                               1h    istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                      443/TCP                                                                                                                   1h    istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                      9102/TCP,9125/UDP                                                                                                         1h    istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                      9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     1h    istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                      5775/UDP,6831/UDP,6832/UDP                                                                                                1h    app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                      14267/TCP,14268/TCP                                                                                                       1h    app=jaeger
jaeger-query               ClusterIP      100.65.10.155    <none>                                                                      16686/TCP                                                                                                                 1h    app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                      9090/TCP                                                                                                                  1h    app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                      8088/TCP                                                                                                                  1h    app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                      80/TCP                                                                                                                    1h    app=jaeger
zipkin                     ClusterIP      100.68.135.195   <none>                                                                      9411/TCP                                                                                                                  1h    app=jaeger
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods -n legacy
NAME                                 READY   STATUS    RESTARTS   AGE
end-tls-7c5985ffd5-fxvxw             1/1     Running   0          9m
hello-reverse-tls-78c5cd4854-xqkp4   1/1     Running   0          9m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods -n ns1
NAME                               READY   STATUS    RESTARTS   AGE
end-reverse-tls-6bc9dd84dd-54rzc   2/2     Running   0          11m
hello-tls-bbf4d574d-jz2hg          2/2     Running   0          11m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods -n ns2
NAME                                 READY   STATUS    RESTARTS   AGE
world-reverse-tls-77d9466fb7-7dg45   2/2     Running   0          11m
world-tls-675b89cd65-5sxdg           2/2     Running   0          11m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls.example.com" -v
* Rebuilt URL to: a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/
*   Trying 18.195.144.112...
* TCP_NODELAY set
* Connected to a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com (18.195.144.112) port 80 (#0)
> GET / HTTP/1.1
> Host: hello-tls.example.com
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 503 Service Unavailable
< date: Sat, 06 Apr 2019 07:50:35 GMT
< server: envoy
< content-length: 0
<
* Connection #0 to host a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com left intact
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-tls-legacy.yaml
namespace/legacy unchanged
deployment.extensions/end-tls unchanged
deployment.extensions/hello-reverse-tls unchanged
service/end unchanged
service/hello-reverse unchanged
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-tls.yaml)
namespace/ns1 unchanged
namespace/ns2 unchanged
deployment.extensions/hello-tls configured
deployment.extensions/world-tls configured
deployment.extensions/world-reverse-tls configured
deployment.extensions/end-reverse-tls configured
service/hello unchanged
service/world unchanged
service/world-reverse unchanged
service/end-reverse unchanged
gateway.networking.istio.io/helloworld-gateway unchanged
destinationrule.networking.istio.io/hello created
destinationrule.networking.istio.io/hello-reverse unchanged
virtualservice.networking.istio.io/helloworld-tls unchanged
virtualservice.networking.istio.io/helloworld-tls-reverse unchanged
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls.example.com"
hello world !!!
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls-reverse.example.com"
hello world !!!
```

- We are now going to enable `mutual-tls` by executing the `istio/helloworld-tls-enable.yaml` document.

> istio/helloworld-tls-enable.yaml

```yaml
apiVersion: authentication.istio.io/v1alpha1
kind: "MeshPolicy"
metadata:
  name: "default"
spec:
  peers:
    - mtls: {}
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "enable-mtls"
  namespace: "default" # even though we specify a namespace, this rule applies to all namespaces
spec:
  host: "*.local"
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "api-server"
spec:
  host: "kubernetes.default.svc.cluster.local"
  trafficPolicy:
    tls:
      mode: DISABLE
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "legacy"
spec:
  host: "end.legacy.svc.cluster.local"
  trafficPolicy:
    tls:
      mode: DISABLE
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-tls-enable.yaml
meshpolicy.authentication.istio.io/default created
destinationrule.networking.istio.io/enable-mtls created
destinationrule.networking.istio.io/api-server created
destinationrule.networking.istio.io/legacy created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls.example.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls-reverse.example.com"
Couldn't connect to http://world-reverse.ns2:8080/root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We need to modify the `istio/helloworld-tls.yaml` to comment out the `trafficPolicy` from the `Destination Rules`.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# vim helloworld-tls.yaml
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMutualTLS.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-tls.yaml)
namespace/ns1 unchanged
namespace/ns2 unchanged
deployment.extensions/hello-tls configured
deployment.extensions/world-tls configured
deployment.extensions/world-reverse-tls configured
deployment.extensions/end-reverse-tls configured
service/hello unchanged
service/world unchanged
service/world-reverse unchanged
service/end-reverse unchanged
gateway.networking.istio.io/helloworld-gateway unchanged
destinationrule.networking.istio.io/hello configured
destinationrule.networking.istio.io/hello-reverse configured
virtualservice.networking.istio.io/helloworld-tls unchanged
virtualservice.networking.istio.io/helloworld-tls-reverse unchanged
```

- We can see that we have access now:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls.example.com"
hello world !!!

```

- But if we enable mutual TLS we cannot have access to legacy apps.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls-reverse.example.com"
upstream connect error or disconnect/reset before headersroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We are going to comment out the `trafficPolicy` from the `hello-reverse` DestinationRule.

```bash

```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoMutualTLS2.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-tls.yaml)
namespace/ns1 unchanged
namespace/ns2 unchanged
deployment.extensions/hello-tls configured
deployment.extensions/world-tls configured
deployment.extensions/world-reverse-tls configured
deployment.extensions/end-reverse-tls configured
service/hello unchanged
service/world unchanged
service/world-reverse unchanged
service/end-reverse unchanged
gateway.networking.istio.io/helloworld-gateway unchanged
destinationrule.networking.istio.io/hello unchanged
destinationrule.networking.istio.io/hello-reverse configured
virtualservice.networking.istio.io/helloworld-tls unchanged
virtualservice.networking.istio.io/helloworld-tls-reverse unchanged
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls.example.com"
hello world !!!
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "Host: hello-tls-reverse.example.com"
Couldn't connect to http://world-reverse.ns2:8080/root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

### 114. RBAC with Istio

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/RBACwithIstio7.png)

### 115. Demo: RBAC with Istio

- We need to delete the previous `pods`

```bash
oot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f <(istioctl kube-inject -f helloworld-tls.yaml)
namespace "ns1" deleted
namespace "ns2" deleted
deployment.extensions "hello-tls" deleted
deployment.extensions "world-tls" deleted
deployment.extensions "world-reverse-tls" deleted
deployment.extensions "end-reverse-tls" deleted
service "hello" deleted
service "world" deleted
service "world-reverse" deleted
service "end-reverse" deleted
gateway.networking.istio.io "helloworld-gateway" deleted
destinationrule.networking.istio.io "hello" deleted
destinationrule.networking.istio.io "hello-reverse" deleted
virtualservice.networking.istio.io "helloworld-tls" deleted
virtualservice.networking.istio.io "helloworld-tls-reverse" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-tls-enable.yaml

error when deleting "helloworld-tls-enable.yaml": Delete https://api.kubernetes.peelmicro.com/apis/authentication.istio.io/v1alpha1/meshpolicies/default: net/http: TLS handshake timeout
error when deleting "helloworld-tls-enable.yaml": Delete https://api.kubernetes.peelmicro.com/apis/networking.istio.io/v1alpha3/namespaces/default/destinationrules/enable-mtls: net/http: TLS handshake timeout
error when deleting "helloworld-tls-enable.yaml": Delete https://api.kubernetes.peelmicro.com/apis/networking.istio.io/v1alpha3/namespaces/default/destinationrules/api-server: net/http: TLS handshake timeout
error when deleting "helloworld-tls-enable.yaml": Delete https://api.kubernetes.peelmicro.com/apis/networking.istio.io/v1alpha3/namespaces/default/destinationrules/legacy: net/http: TLS handshake timeout
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-tls-legacy.yaml
error when deleting "helloworld-tls-legacy.yaml": Delete https://api.kubernetes.peelmicro.com/api/v1/namespaces/legacy: read tcp 68.183.44.204:44762->52.59.197.23:443: read: connection reset by peer
error when deleting "helloworld-tls-legacy.yaml": Delete https://api.kubernetes.peelmicro.com/apis/extensions/v1beta1/namespaces/legacy/deployments/end-tls: dial tcp 52.59.197.23:443: connect: connection refused
error when deleting "helloworld-tls-legacy.yaml": Delete https://api.kubernetes.peelmicro.com/apis/extensions/v1beta1/namespaces/legacy/deployments/hello-reverse-tls: dial tcp 52.59.197.23:443: connect: connection refused
error when deleting "helloworld-tls-legacy.yaml": Delete https://api.kubernetes.peelmicro.com/api/v1/namespaces/legacy/services/end: dial tcp 52.59.197.23:443: connect: connection refused
error when deleting "helloworld-tls-legacy.yaml": Delete https://api.kubernetes.peelmicro.com/api/v1/namespaces/legacy/services/hello-reverse: dial tcp 52.59.197.23:443: connect: connection refused
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-tls-legacy.yaml
namespace "legacy" deleted
deployment.extensions "end-tls" deleted
deployment.extensions "hello-reverse-tls" deleted
service "end" deleted
service "hello-reverse" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-tls-enable.yaml
meshpolicy.authentication.istio.io "default" deleted
destinationrule.networking.istio.io "enable-mtls" deleted
destinationrule.networking.istio.io "api-server" deleted
destinationrule.networking.istio.io "legacy" deleted
```

- We are going to use the `istio/helloworld-rbac.yaml` document to create 3 new `deployment` pods with their 3 new `services`. It is also going to create a `gateway` along with 1 `Destination Rules` and 1 `Virtual Services`. It is going to create 3 `service roles` with their 3 `service role bindings` and 2 `service accounts` as well.

> istio/helloworld-rbac.yaml

```yaml
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRole
metadata:
  name: hello-viewer
  namespace: default
spec:
  rules:
    - services: ["hello.default.svc.cluster.local"]
      methods: ["GET", "HEAD"]
---
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRole
metadata:
  name: world-viewer
  namespace: default
spec:
  rules:
    - services: ["world.default.svc.cluster.local"]
      methods: ["GET", "HEAD"]
---
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRole
metadata:
  name: world-2-viewer
  namespace: default
spec:
  rules:
    - services: ["world-2.default.svc.cluster.local"]
      methods: ["GET", "HEAD"]
---
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRoleBinding
metadata:
  name: istio-ingress-binding
  namespace: default
spec:
  subjects:
    - properties:
        source.namespace: "istio-system"
  roleRef:
    kind: ServiceRole
    name: "hello-viewer"
---
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRoleBinding
metadata:
  name: hello-user-binding
  namespace: default
spec:
  subjects:
    - user: "cluster.local/ns/default/sa/hello"
  roleRef:
    kind: ServiceRole
    name: "world-viewer"
---
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRoleBinding
metadata:
  name: world-user-binding
  namespace: default
spec:
  subjects:
    - user: "cluster.local/ns/default/sa/world"
  roleRef:
    kind: ServiceRole
    name: "world-2-viewer"
---
###
### Kubernetes Service accounts
###
apiVersion: v1
kind: ServiceAccount
metadata:
  name: hello
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: world
---
###
### helloworld.yaml deployments, including a serviceaccount
### for the hello deployment and the world deployment
###
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello
        version: v1
    spec:
      serviceAccountName: hello # service account
      containers:
        - name: hello
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: hello
            - name: NEXT
              value: "world:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello
  labels:
    app: hello
spec:
  selector:
    app: hello
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: world
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: world
        version: v1
    spec:
      serviceAccountName: world # service account
      containers:
        - name: world
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: world
            - name: NEXT
              value: "world-2:8080"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: world
  labels:
    app: world
spec:
  selector:
    app: world
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: world-2
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: world-2
        version: v1
    spec:
      containers:
        - name: world-2
          image: wardviaene/http-echo
          env:
            - name: TEXT
              value: "!!!"
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: world-2
  labels:
    app: world-2
spec:
  selector:
    app: world-2
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: helloworld-gateway
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
    - port:
        number: 80
        name: http
        protocol: HTTP
      hosts:
        - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld
spec:
  hosts:
    - "hello-rbac.example.com"
  gateways:
    - helloworld-gateway
  http:
    - route:
        - destination:
            host: hello.default.svc.cluster.local
            subset: v1
            port:
              number: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: hello
spec:
  host: hello.default.svc.cluster.local
  # uncomment to enable mutual TLS
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
  subsets:
    - name: v1
      labels:
        version: v1
```

- We are also going to use `istio/helloworld-rbac-enable.yaml` document to create 1 `rbac Config`, 1 `mesh policy` and 2 `Destination Rules`

> istio/helloworld-rbac-enable.yaml

```yaml
apiVersion: "rbac.istio.io/v1alpha1"
kind: RbacConfig
metadata:
  name: default
spec:
  mode: "ON_WITH_INCLUSION"
  inclusion:
    namespaces: ["default"]
---
apiVersion: authentication.istio.io/v1alpha1
kind: "MeshPolicy"
metadata:
  name: "default"
spec:
  peers:
    - mtls: {}
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "enable-mtls"
  namespace: "default" # even though we specify a namespace, this rule applies to all namespaces
spec:
  host: "*.local"
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "api-server"
spec:
  host: "kubernetes.default.svc.cluster.local"
  trafficPolicy:
    tls:
      mode: DISABLE
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl create -f helloworld-rbac-enable.yaml
rbacconfig.rbac.istio.io/default created
meshpolicy.authentication.istio.io/default created
destinationrule.networking.istio.io/enable-mtls created
destinationrule.networking.istio.io/api-server created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-rbac.yaml)
servicerole.rbac.istio.io/hello-viewer created
servicerole.rbac.istio.io/world-viewer created
servicerole.rbac.istio.io/world-2-viewer created
servicerolebinding.rbac.istio.io/istio-ingress-binding created
servicerolebinding.rbac.istio.io/hello-user-binding created
servicerolebinding.rbac.istio.io/world-user-binding created
serviceaccount/hello created
serviceaccount/world created
deployment.extensions/hello created
service/hello created
deployment.extensions/world created
service/world created
deployment.extensions/world-2 created
service/world-2 created
gateway.networking.istio.io/helloworld-gateway created
virtualservice.networking.istio.io/helloworld created
destinationrule.networking.istio.io/hello created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
hello-79dd77dcfb-b7qcg    2/2     Running   0          57s
world-2-66f86dff7-9955s   2/2     Running   0          57s
world-77645cfc4f-8whzf    2/2     Running   0          57s
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -o wide -n istio-system
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                 PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    ClusterIP      100.67.210.224   <none>                                                                      3000/TCP                                                                                                                  3h    app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                      8060/TCP,9093/TCP                                                                                                         3h    istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                      80/TCP,443/TCP                                                                                                            3h    app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                      443/TCP,9093/TCP                                                                                                          3h    istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com   80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   3h    app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                      15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     3h    istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                      9091/TCP,15004/TCP,9093/TCP                                                                                               3h    istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                      443/TCP                                                                                                                   3h    istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                      9102/TCP,9125/UDP                                                                                                         3h    istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                      9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     3h    istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                      5775/UDP,6831/UDP,6832/UDP                                                                                                3h    app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                      14267/TCP,14268/TCP                                                                                                       3h    app=jaeger
jaeger-query               ClusterIP      100.65.10.155    <none>                                                                      16686/TCP                                                                                                                 3h    app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                      9090/TCP                                                                                                                  3h    app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                      8088/TCP                                                                                                                  3h    app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                      80/TCP                                                                                                                    3h    app=jaeger
zipkin                     ClusterIP      100.68.135.195   <none>                                                                      9411/TCP                                                                                                                  3h    app=jaeger
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello-rbac.example.com"
hello world !!!
```

- We are going to log in to the `world-2` pod where we can check we don't have access to any of the servcies.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl exec -it world-2-66f86dff7-9955s -- sh
Defaulting container name to world-2.
Use 'kubectl describe pod/world-2-66f86dff7-9955s -n default' to see all of the containers in this pod.
/app $ get hello:8080
sh: get: not found
/app $ wget hello:8080
Connecting to hello:8080 (100.68.136.152:8080)
wget: server returned error: HTTP/1.1 403 Forbidden
/app $ wget world:8080
Connecting to world:8080 (100.67.107.250:8080)
wget: server returned error: HTTP/1.1 403 Forbidden
/app $ wget world-2:8080
Connecting to world-2:8080 (100.69.72.158:8080)
wget: server returned error: HTTP/1.1 403 Forbidden
/app $ wget localhost:8080
Connecting to localhost:8080 (127.0.0.1:8080)
index.html           100% |*****************************************************************************************************************************|     3   0:00:00 ETA
/app $ cat index.html
!!!/app $ exit
```

- We are going to log in to the `hello` pod where we can check that we have access to the `world` service but not to the other servcies.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl exec -it hello-79dd77dcfb-b7qcg -- sh
Defaulting container name to hello.
Use 'kubectl describe pod/hello-79dd77dcfb-b7qcg -n default' to see all of the containers in this pod.
/app $ wget world:8080
Connecting to world:8080 (100.67.107.250:8080)
index.html           100% |*****************************************************************************************************************************|    10   0:00:00 ETA
/app $ cat index.html
world !!!
/app $ wget world-2:8080
Connecting to world-2:8080 (100.69.72.158:8080)
wget: server returned error: HTTP/1.1 403 Forbidden
/app $ wget hellp:8080
wget: bad address 'hellp:8080'
/app $ wget hello:8080
Connecting to hello:8080 (100.68.136.152:8080)
wget: server returned error: HTTP/1.1 403 Forbidden
/app $ exit
command terminated with exit code 1
```

### 116. End-user authentication with istio (JWT)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/EndUserAuthenticationWithIstioJWT9.png)

EndUserAuthenticationWithIstioJWT10

### 117. Demo: End-user authentication with istio (JWT)

- We need to modify the `http-echo/main.go` to change the domain.

```bash
Microsoft Windows [Version 10.0.17763.379]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32>cd C:\Work\Training\Pre\Docker

C:\Work\Training\Pre\Docker>git clone https://github.com/peelmicro/http-echo.git
Cloning into 'http-echo'...
remote: Enumerating objects: 38, done.
remote: Total 38 (delta 0), reused 0 (delta 0), pack-reused 38
Unpacking objects: 100% (38/38), done.

C:\Work\Training\Pre\Docker>cd http-echo

C:\Work\Training\Pre\Docker\http-echo>code .
```

- The `main.go` application must be changed.

> http-echo/main.go

```go
package main

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/lestrrat-go/jwx/jwk"

	"crypto/rsa"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

type Login struct {
	Login string `json:"login" binding:"required"`
}

type Jwks struct {
	Keys []JwksKeys `json:"keys"`
}
type JwksKeys struct {
	E   string `json:"e"`
	Kid string `json:"kid"`
	Kty string `json:"kty"`
	N   string `json:"n"`
}

var (
	publicKey *rsa.PublicKey
	signKey   *rsa.PrivateKey
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		latency := os.Getenv("LATENCY")
		if latency != "" {
			i, err := strconv.ParseInt(latency, 10, 64)
			if err != nil {
				fmt.Fprintf(w, "Env LATENCY needs to be a number")
				return
			}
			time.Sleep(time.Duration(i) * time.Second)
		}
		text := os.Getenv("TEXT")
		if text == "" {
			fmt.Fprintf(w, "set env TEXT to display something")
			return
		}
		next := os.Getenv("NEXT")
		if next == "" {
			fmt.Fprintf(w, "%s", text)
		} else {
			// initialize client
			client := &http.Client{}
			req, _ := http.NewRequest("GET", "http://"+next+"/", nil)

			// get headirs
			for k, _ := range r.Header {
				for _, otHeader := range otHeaders {
					if strings.ToLower(otHeader) == strings.ToLower(k) {
						req.Header.Set(k, r.Header.Get(k))
					}
				}
			}

			// do request
			resp, err := client.Do(req)
			if err != nil {
				fmt.Fprintf(w, "Couldn't connect to http://%s/", next)
				fmt.Printf("Error: %s", err)
				return
			}
			defer resp.Body.Close()
			body, err := ioutil.ReadAll(resp.Body)
			fmt.Fprintf(w, "%s %s\n", text, body)
		}
	})

	// load keys for JWT
	initKeys()

	// handle login
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		// read body
		decoder := json.NewDecoder(r.Body)
		var l Login
		err := decoder.Decode(&l)
		if err != nil {
			fmt.Fprintf(w, "No login supplied")
			return
		}
		// generate jwt token
		token := jwt.NewWithClaims(jwt.GetSigningMethod("RS256"), jwt.MapClaims{
			"login":  l.Login,
			"groups": "users",
			"iss":    "http-echo@http-echo.kubernetes.peelmicro.com",
			"sub":    "http-echo@http-echo.kubernetes.peelmicro.com",
			"exp":    time.Now().Add(time.Hour * 72).Unix(),
			"iat":    time.Now().Unix(),
		})

		token.Header["kid"] = "mykey"

		tokenString, err := token.SignedString(signKey)

		if err != nil {
			fmt.Fprintf(w, "Could not sign jwt token")
			return
		}

		fmt.Fprintf(w, "JWT token: %s \n", tokenString)
	})

	// jwks.json
	http.HandleFunc("/.well-known/jwks.json", func(w http.ResponseWriter, r *http.Request) {
		key, err := jwk.New(publicKey)
		if err != nil {
			log.Printf("failed to create JWK: %s", err)
			return
		}

		key.Set("kid", "mykey")

		jsonbuf, err := json.MarshalIndent(key, "", "  ")
		if err != nil {
			log.Printf("failed to generate JSON: %s", err)
			return
		}

		var k JwksKeys

		if err := json.Unmarshal(jsonbuf, &k); err != nil {
			log.Printf("failed to unmarshal JSON: %s", err)
			return
		}

		j := &Jwks{Keys: []JwksKeys{k}}

		jsonbuf2, err := json.Marshal(j)
		if err != nil {
			log.Printf("failed to generate JSON: %s", err)
			return
		}

		fmt.Fprintf(w, "%s", jsonbuf2)
	})

	// start server
	fmt.Printf("Listening on port 8080\n")
	http.ListenAndServe(":8080", nil)
}

func fatal(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func initKeys() {
	createKeys()

	signBytes, err := ioutil.ReadFile("private.pem")
	fatal(err)

	signKey, err = jwt.ParseRSAPrivateKeyFromPEM(signBytes)
	fatal(err)

	publicBytes, err := ioutil.ReadFile("public.pem")
	fatal(err)

	publicKey, err = jwt.ParseRSAPublicKeyFromPEM(publicBytes)
	fatal(err)
}
```

- We need to create the Docker image

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/Docker/http-echo (master)
$ docker build .
Sending build context to Docker daemon    128kB
Step 1/11 : FROM golang:1.11-alpine as go-builder
1.11-alpine: Pulling from library/golang
8e402f1a9c57: Pull complete
ce7779d8bfe3: Pull complete
de1a1e452942: Pull complete
6839d05a3509: Pull complete
516e7dd7d013: Pull complete
Digest: sha256:f719b86c5e89626525014f36d55370461b15ba8f0f0d614a251b3e4dd3ced1b3
Status: Downloaded newer image for golang:1.11-alpine
 ---> 4c8728956777
Step 2/11 : WORKDIR /go/src/github.com/in4it/http-echo/
 ---> Running in 07babafdc361
Removing intermediate container 07babafdc361
 ---> b812010fa5b8
Step 3/11 : COPY . .
 ---> 6d0e9440d62a
Step 4/11 : RUN apk add -u -t build-tools curl git &&     curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh &&     dep ensure &&     apk del build-tools &&     rm -rf /var/cache/apk/*
 ---> Running in e8470f8459a8
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
(1/10) Upgrading libcrypto1.1 (1.1.1a-r1 -> 1.1.1b-r1)
(2/10) Upgrading libssl1.1 (1.1.1a-r1 -> 1.1.1b-r1)
(3/10) Installing nghttp2-libs (1.35.1-r0)
(4/10) Installing libssh2 (1.8.2-r0)
(5/10) Installing libcurl (7.64.0-r1)
(6/10) Installing curl (7.64.0-r1)
(7/10) Installing expat (2.2.6-r0)
(8/10) Installing pcre2 (10.32-r1)
(9/10) Installing git (2.20.1-r0)
(10/10) Installing build-tools (0)
Executing busybox-1.29.3-r10.trigger
Executing ca-certificates-20190108-r0.trigger
OK: 20 MiB in 23 packages
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
1ARCH = amd640     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
00  52OS = linux
30  100  5230    0     0  18034      0 --:--:-- --:--:-- --:--:-- 18096
Will install into /go/bin
Fetching https://github.com/golang/dep/releases/latest..
Release Tag = v0.5.1
Fetching https://github.com/golang/dep/releases/tag/v0.5.1..
Fetching https://github.com/golang/dep/releases/download/v0.5.1/dep-linux-amd64..
Setting executable permissions.
Moving executable to /go/bin/dep
(1/8) Purging build-tools (0)
(2/8) Purging curl (7.64.0-r1)
(3/8) Purging git (2.20.1-r0)
(4/8) Purging libcurl (7.64.0-r1)
(5/8) Purging nghttp2-libs (1.35.1-r0)
(6/8) Purging libssh2 (1.8.2-r0)
(7/8) Purging expat (2.2.6-r0)
(8/8) Purging pcre2 (10.32-r1)
Executing busybox-1.29.3-r10.trigger
OK: 6 MiB in 15 packages
Removing intermediate container e8470f8459a8
 ---> 892a388183c7
Step 5/11 : RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o http-echo *.go
 ---> Running in dfb91ec53956
Removing intermediate container dfb91ec53956
 ---> 71a931d657a1
Step 6/11 : FROM alpine:latest
latest: Pulling from library/alpine
8e402f1a9c57: Already exists
Digest: sha256:644fcb1a676b5165371437feaa922943aaf7afcfa8bfee4472f6860aad1ef2a0
Status: Downloaded newer image for alpine:latest
 ---> 5cb3aa00f899
Step 7/11 : RUN mkdir -p /app &&     addgroup -S app && adduser -S app -G app &&     chown app:app /app
 ---> Running in 22b603c3c7e7
Removing intermediate container 22b603c3c7e7
 ---> 8b5826eae579
Step 8/11 : WORKDIR /app
 ---> Running in 1f2b3b122bac
Removing intermediate container 1f2b3b122bac
 ---> 6c9989bf0e81
Step 9/11 : COPY --from=go-builder /go/src/github.com/in4it/http-echo/http-echo .
 ---> 03cd1233853e
Step 10/11 : USER app
 ---> Running in d991091b4d4c
Removing intermediate container d991091b4d4c
 ---> 7e1e9500440e
Step 11/11 : CMD ["./http-echo"]
 ---> Running in 65a2ca8a525b
Removing intermediate container 65a2ca8a525b
 ---> cb1c2a8a67fa
Successfully built cb1c2a8a67fa
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

- We need to push the image to `Docker hub`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/Docker/http-echo (master)
$ docker push peelmicro/http-echo
The push refers to repository [docker.io/peelmicro/http-echo]
An image does not exist locally with the tag: peelmicro/http-echo
```

- We need to create the image with a name

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/Docker/http-echo (master)
$ docker build -t peelmicro/http-echo .
Sending build context to Docker daemon    128kB
Step 1/11 : FROM golang:1.11-alpine as go-builder
 ---> 4c8728956777
Step 2/11 : WORKDIR /go/src/github.com/in4it/http-echo/
 ---> Using cache
 ---> b812010fa5b8
Step 3/11 : COPY . .
 ---> Using cache
 ---> 6d0e9440d62a
Step 4/11 : RUN apk add -u -t build-tools curl git &&     curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh &&     dep ensure &&     apk del build-tools &&     rm -rf /var/cache/apk/*
 ---> Using cache
 ---> 892a388183c7
Step 5/11 : RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o http-echo *.go
 ---> Using cache
 ---> 71a931d657a1
Step 6/11 : FROM alpine:latest
 ---> 5cb3aa00f899
Step 7/11 : RUN mkdir -p /app &&     addgroup -S app && adduser -S app -G app &&     chown app:app /app
 ---> Using cache
 ---> 8b5826eae579
Step 8/11 : WORKDIR /app
 ---> Using cache
 ---> 6c9989bf0e81
Step 9/11 : COPY --from=go-builder /go/src/github.com/in4it/http-echo/http-echo .
 ---> Using cache
 ---> 03cd1233853e
Step 10/11 : USER app
 ---> Using cache
 ---> 7e1e9500440e
Step 11/11 : CMD ["./http-echo"]
 ---> Using cache
 ---> cb1c2a8a67fa
Successfully built cb1c2a8a67fa
Successfully tagged peelmicro/http-echo:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/Docker/http-echo (master)
$ docker push peelmicro/http-echo
The push refers to repository [docker.io/peelmicro/http-echo]
dba4b1b3f874: Pushed
4c914d0627dd: Pushed
bcf2f368fe23: Mounted from library/alpine
latest: digest: sha256:ea1fa087b1724be1e8933245497d00d435314ec5c478165bbffa9c534c2b1499 size: 947
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT.png)

- We need to delete the previous pods

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-rbac.yaml
servicerole.rbac.istio.io "hello-viewer" deleted
servicerole.rbac.istio.io "world-viewer" deleted
servicerole.rbac.istio.io "world-2-viewer" deleted
servicerolebinding.rbac.istio.io "istio-ingress-binding" deleted
servicerolebinding.rbac.istio.io "hello-user-binding" deleted
servicerolebinding.rbac.istio.io "world-user-binding" deleted
serviceaccount "hello" deleted
serviceaccount "world" deleted
deployment.extensions "hello" deleted
service "hello" deleted
deployment.extensions "world" deleted
service "world" deleted
deployment.extensions "world-2" deleted
service "world-2" deleted
virtualservice.networking.istio.io "helloworld" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-rbac-enable.yaml
rbacconfig.rbac.istio.io "default" deleted
meshpolicy.authentication.istio.io "default" deleted
destinationrule.networking.istio.io "enable-mtls" deleted
destinationrule.networking.istio.io "api-server" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
No resources found.
```

- We are going to use the `istio/helloworld-jwt.yaml` document to create 2 new `deployment` pods with their 2 new `services`. It is also going to create a `gateway` along with 2 `Destination Rules` and 2 `Virtual Services`. It is going to create 1 `Mesh Policy` as well.

> istio/helloworld-jwt.yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: helloworld-gateway
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
    - port:
        number: 80
        name: http
        protocol: HTTP
      hosts:
        - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld-auth
spec:
  hosts:
    - "auth.kubernetes.peelmicro.com"
  gateways:
    - helloworld-gateway
  http:
    - route:
        - destination:
            host: auth.default.svc.cluster.local
            port:
              number: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: helloworld-hello
spec:
  hosts:
    - "hello.kubernetes.peelmicro.com"
  gateways:
    - helloworld-gateway
  http:
    - route:
        - destination:
            host: hello.default.svc.cluster.local
            port:
              number: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: auth
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: auth
        version: v1
    spec:
      containers:
        - name: auth
          image: peelmicro/http-echo
          env:
            - name: TEXT
              value: this is the authentication service
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: auth
  labels:
    app: auth
spec:
  selector:
    app: auth
  ports:
    - name: http
      port: 8080
      targetPort: 8080
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hello
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello
        version: v1
    spec:
      containers:
        - name: hello
          image: peelmicro/http-echo
          env:
            - name: TEXT
              value: Hello, you can only reach this service when authenticated
          ports:
            - name: http
              containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello
  labels:
    app: hello
spec:
  selector:
    app: hello
  ports:
    - name: http
      port: 8080
      targetPort: 8080
###
### Enable TLS
###
---
apiVersion: authentication.istio.io/v1alpha1
kind: "MeshPolicy"
metadata:
  name: "default"
spec:
  peers:
    - mtls: {}
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "enable-mtls"
  namespace: "default" # even though we specify a namespace, this rule applies to all namespaces
spec:
  host: "*.local"
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: "api-server"
spec:
  host: "kubernetes.default.svc.cluster.local"
  trafficPolicy:
    tls:
      mode: DISABLE
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld-jwt.yaml)
gateway.networking.istio.io/helloworld-gateway created
virtualservice.networking.istio.io/helloworld-auth created
virtualservice.networking.istio.io/helloworld-hello created
deployment.extensions/auth created
service/auth created
deployment.extensions/hello created
service/hello created
meshpolicy.authentication.istio.io/default created
destinationrule.networking.istio.io/enable-mtls created
destinationrule.networking.istio.io/api-server created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
NAME                     READY   STATUS    RESTARTS   AGE
auth-5b7965f897-6dkhl    2/2     Running   0          9s
hello-775b85bf57-fpsgn   2/2     Running   0          9s
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernete
```

- We need to create access to `auth.kubernetes.peelmicro.com` record from [Route 53](https://console.aws.amazon.com/route53)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT7.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -o wide -n istio-systemNAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                 PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    ClusterIP      100.67.210.224   <none>                                                                      3000/TCP                                                                                                                  10h   app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                      8060/TCP,9093/TCP                                                                                                         10h   istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                      80/TCP,443/TCP                                                                                                            10h   app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                      443/TCP,9093/TCP                                                                                                          10h   istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com   80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   10h   app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                      15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     10h   istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                      9091/TCP,15004/TCP,9093/TCP                                                                                               10h   istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                      443/TCP                                                                                                                   10h   istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                      9102/TCP,9125/UDP                                                                                                         10h   istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                      9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     10h   istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                      5775/UDP,6831/UDP,6832/UDP                                                                                                10h   app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                      14267/TCP,14268/TCP                                                                                                       10h   app=jaeger
jaeger-query               ClusterIP      100.65.10.155    <none>                                                                      16686/TCP                                                                                                                 10h   app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                      9090/TCP                                                                                                                  10h   app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                      8088/TCP                                                                                                                  10h   app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                      80/TCP                                                                                                                    10h   app=jaeger
zipkin                     ClusterIP      100.68.135.195   <none>                                                                      9411/TCP                                                                                                                  10h   app=jaeger
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello.kubernetes.peelmicro.com"
Hello, you can only reach this service when authenticatedroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We are going to use the `istio/helloworld-jwt-enable.yaml` document to create 1 `Policy`.

> istio/helloworld-jwt-enable.yaml

```yaml
apiVersion: "authentication.istio.io/v1alpha1"
kind: "Policy"
metadata:
  name: "jwt-example"
spec:
  targets:
    - name: hello
  peers:
    - mtls: {}
  origins:
    - jwt:
        issuer: "http-echo@http-echo.kubernetes.peelmicro.com"
        jwksUri: "http://auth.kubernetes.peelmicro.com/.well-known/jwks.json"
  principalBinding: USE_ORIGIN
---

```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl create -f helloworld-jwt-enable.yaml
policy.authentication.istio.io/jwt-example created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl http://auth.kubernetes.peelmicro.com/login
No login suppliedroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We can obtain the token by executing

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl http://auth.kubernetes.peelmicro.com/login -d '{"login": "juan"}'
JWT token: eyJhbGciOiJSUzI1NiIsImtpZCI6Im15a2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTQ4MjgzMzEsImdyb3VwcyI6InVzZXJzIiwiaWF0IjoxNTU0NTY5MTMxLCJpc3MiOiJodHRwLWVjaG9AaHR0cC1lY2hvLmt1YmVybmV0ZXMucGVlbG1pY3JvLmNvbSIsImxvZ2luIjoianVhbiIsInN1YiI6Imh0dHAtZWNob0BodHRwLWVjaG8ua3ViZXJuZXRlcy5wZWVsbWljcm8uY29tIn0.njE3EeSN0OUp5QOAlaANP8NGDtzh1ZfM3EB26MDH69Zvfefv_DnHxYH5Bv0G_mej0D71cwzigQVR7hdAPmuvstL5eV-Twd9tDhmfW2udc8l5Y4E0Tu9DB3ZT1iPi99behUNWtp-kwTUa_AwnTZ5JwBM7at6F3sdjJfULRsQhCPfstfIj5Z-HaQPWaMa2200HIp01ylJW5x6VTLBItbLU6Q8nzOTvUflKugzjz-oXJ0IEGm_3IjWkKDiSYU3EVng5EPVMK8MObR56bC2wyRxkWdusYb_r3_u860jcugTfydwMFlqc49_KGyCRn9lu5IonrFu7s0es43pEhOX3oDyTlw
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello.kubernetes.peelmicro.com"
Origin authentication failed.root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# TOKEN="eyJhbGciOiJSUzI1NiIsImtpZCI6Im15a2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTQ4MjgzMzEsImdyb3VwcyI6InVzZJpc3MiOiJodHRwLWVjaG9AaHR0cC1lY2hvLmt1YmVybmV0ZXMucGVlbG1pY3JvLmNvbSIsImxvZ2luIjoianVhbiIsInN1YiI6Imh0dHAtZWNob0BodHRwLWVjaG8ua3ViZXJuZXRlcy5wZWVsbWljcm8uY29tIn0.njE3EeSN0OUp5QOAlaANP8NGDtzh1ZfM3EB26MDH69Zvfefv_DnHxYH5Bv0G_mej0D71cwzigQVR7hdAPmuvstL5eV-Twd9tDhmfW2udc8l5Y4E0Tu9DB3ZT1iPi99behUNWtp-kwTUa_AwnTZ5JwBM7at6F3sdjJfULRsQhCPfstfIj5Z-HaQPWaMa2200HIp01ylJW5x6VTLBItbLU6Q8nzOTvUflKugzjz-oXJ0IEGm_3IjWkKDiSYU3EVng5EPVMK8MObR56bC2wyRxkWdusYb_r3_u860jcugTfydwMFlqc49_KGyCRn9lu5IonrFu7s0es43pEhOX3oDyTlw"
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We can try to access the `hello.kubernetes.peelmicro.com` host with the token and it works.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com -H "host: hello.kubernetes.peelmicro.com" -H "Authorization: Bearer $TOKEN"
Hello, you can only reach this service when authenticatedroot@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We can investigate more about the token from [JWT.IO](https://jwt.io/)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT9.png)

- We can obtain the public key by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl http://auth.kubernetes.peelmicro.com/.well-known/jwks.json
{"keys":[{"e":"AQAB","kid":"mykey","kty":"RSA","n":"waxNBXO3gtJlb4ksB9T7C9oCnmReP4QFHe0hHrFD6OI7JqjrK6WaGrJv46PMKN6NDtNyNWCWjbfYQkOcl6wOi9XbV55nei19mOzGxm5T6fhjzh2cmM70BL4CnHUY_IEG2vO4ZzD4VdpC3CrRWrNXZVUEQE644WcGvEGshBxJUftIuN8tEcRT_ZWkJgTLeTACNQwQpoK0GWmX0DeGbEa8jA_A-iCnurPCooVmyyGW-nar54BC0uYw-7C8JVPWG0Cu84fRggS5DvMZiiV1LsjIYQatJr7i8GAH3dJr8R0AJNhysDlTnTrl4EzViepsTsk0sBUNK_cbxuW1y5R1_tbrVw"}]}root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We can paste it in `JWT.IO`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT10.png)

- We need to convert the public key to the format that `JWT.IO` is expecting or obtain it from the pod.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pod
NAME                     READY   STATUS    RESTARTS   AGE
auth-5b7965f897-6dkhl    2/2     Running   0          34m
hello-775b85bf57-fpsgn   2/2     Running   0          34m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl exec -it auth-5b7965f897-6dkhl -- sh
Defaulting container name to auth.
Use 'kubectl describe pod/auth-5b7965f897-6dkhl -n default' to see all of the containers in this pod.
/app $ ls
http-echo    private.key  private.pem  public.key   public.pem
/app $ cat public.pem
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwaxNBXO3gtJlb4ksB9T7
C9oCnmReP4QFHe0hHrFD6OI7JqjrK6WaGrJv46PMKN6NDtNyNWCWjbfYQkOcl6wO
i9XbV55nei19mOzGxm5T6fhjzh2cmM70BL4CnHUY/IEG2vO4ZzD4VdpC3CrRWrNX
ZVUEQE644WcGvEGshBxJUftIuN8tEcRT/ZWkJgTLeTACNQwQpoK0GWmX0DeGbEa8
jA/A+iCnurPCooVmyyGW+nar54BC0uYw+7C8JVPWG0Cu84fRggS5DvMZiiV1LsjI
YQatJr7i8GAH3dJr8R0AJNhysDlTnTrl4EzViepsTsk0sBUNK/cbxuW1y5R1/tbr
VwIDAQAB
-----END PUBLIC KEY-----
/app $ exit
```

- We can paste it in `JWT.IO`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoEndUserAuthenticationWithIstioJWT11.png)

- If anything goes wrong the best way to debug is by accesing the logs.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~#  kubectl get pod
NAME                     READY   STATUS    RESTARTS   AGE
auth-5b7965f897-6dkhl    2/2     Running   0          41m
hello-775b85bf57-fpsgn   2/2     Running   0          41m
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl logs hello-775b85bf57-fpsgn
Error from server (BadRequest): a container name must be specified for pod hello-775b85bf57-fpsgn, choose one of: [hello istio-proxy] or one of the init containers: [istio-init]
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl logs hello-775b85bf57-fpsgn -c istio-proxy
2019-04-06T16:28:41.055733Z     info    Version root@66ce69d4a51e-docker.io/istio-1.0.2-d639408fded355fb906ef2a1f9e8ffddc24c3d64-Clean
2019-04-06T16:28:41.056049Z     info    Proxy role: model.Proxy{ClusterID:"", Type:"sidecar", IPAddress:"100.96.1.31", ID:"hello-775b85bf57-fpsgn.default", Domain:"default.svc.cluster.local", Metadata:map[string]string(nil)}
2019-04-06T16:28:41.056089Z     info    Attempting to lookup address: istio-statsd-prom-bridge.istio-system
2019-04-06T16:28:41.058988Z     info    Addr resolved to: 100.69.134.154:9125
2019-04-06T16:28:41.059024Z     info    Finished lookup of address: istio-statsd-prom-bridge.istio-system
2019-04-06T16:28:41.059488Z     info    Effective config: binaryPath: /usr/local/bin/envoy
configPath: /etc/istio/proxy
connectTimeout: 10s
discoveryAddress: istio-pilot.istio-system:15007
discoveryRefreshDelay: 1s
drainDuration: 45s
parentShutdownDuration: 60s
proxyAdminPort: 15000
serviceCluster: hello
statsdUdpAddress: 100.69.134.154:9125
zipkinAddress: zipkin.istio-system:9411

2019-04-06T16:28:41.059534Z     info    Monitored certs: []envoy.CertSource{envoy.CertSource{Directory:"/etc/certs/", Files:[]string{"cert-chain.pem", "key.pem", "root-cert.pem"}}}
2019-04-06T16:28:41.059820Z     info    Starting proxy agent
2019-04-06T16:28:41.059866Z     info    Received new config, resetting budget
2019-04-06T16:28:41.059891Z     info    Reconciling configuration (budget 10)
2019-04-06T16:28:41.059915Z     info    Epoch 0 starting
2019-04-06T16:28:41.060507Z     info    Envoy command: [-c /etc/istio/proxy/envoy-rev0.json --restart-epoch 0 --drain-time-s 45 --parent-shutdown-time-s 60 --service-cluster hello --service-node sidecar~100.96.1.31~hello-775b85bf57-fpsgn.default~default.svc.cluster.local --max-obj-name-len 189 --allow-unknown-fields -l warn --v2-config-only]
[2019-04-06 16:28:41.076][10][info][main] external/envoy/source/server/server.cc:190] initializing epoch 0 (hot restart version=10.200.16384.256.options=capacity=16384, num_slots=8209 hash=228984379728933363 size=4882536)
[2019-04-06 16:28:41.076][10][info][main] external/envoy/source/server/server.cc:192] statically linked extensions:
[2019-04-06 16:28:41.076][10][info][main] external/envoy/source/server/server.cc:194]   access_loggers: envoy.file_access_log,envoy.http_grpc_access_log
[2019-04-06 16:28:41.086][10][info][main] external/envoy/source/server/server.cc:197]   filters.http: envoy.buffer,envoy.cors,envoy.ext_authz,envoy.fault,envoy.filters.http.header_to_metadata,envoy.filters.http.jwt_authn,envoy.filters.http.rbac,envoy.grpc_http1_bridge,envoy.grpc_json_transcoder,envoy.grpc_web,envoy.gzip,envoy.health_check,envoy.http_dynamo_filter,envoy.ip_tagging,envoy.lua,envoy.rate_limit,envoy.router,envoy.squash,istio_authn,jwt-auth,mixer
[2019-04-06 16:28:41.088][10][info][main] external/envoy/source/server/server.cc:200]   filters.listener: envoy.listener.original_dst,envoy.listener.proxy_protocol,envoy.listener.tls_inspector
[2019-04-06 16:28:41.088][10][info][main] external/envoy/source/server/server.cc:203]   filters.network: envoy.client_ssl_auth,envoy.echo,envoy.ext_authz,envoy.filters.network.rbac,envoy.filters.network.thrift_proxy,envoy.http_connection_manager,envoy.mongo_proxy,envoy.ratelimit,envoy.redis_proxy,envoy.tcp_proxy,mixer
[2019-04-06 16:28:41.088][10][info][main] external/envoy/source/server/server.cc:205]   stat_sinks: envoy.dog_statsd,envoy.metrics_service,envoy.stat_sinks.hystrix,envoy.statsd
[2019-04-06 16:28:41.088][10][info][main] external/envoy/source/server/server.cc:207]   tracers: envoy.dynamic.ot,envoy.lightstep,envoy.zipkin
[2019-04-06 16:28:41.088][10][info][main] external/envoy/source/server/server.cc:210]   transport_sockets.downstream: alts,envoy.transport_sockets.capture,raw_buffer,tls
[2019-04-06 16:28:41.088][10][info][main] external/envoy/source/server/server.cc:213]   transport_sockets.upstream: alts,envoy.transport_sockets.capture,raw_buffer,tls
[2019-04-06 16:28:41.096][10][info][config] external/envoy/source/server/configuration_impl.cc:50] loading 0 static secret(s)
[2019-04-06 16:28:41.099][10][warning][upstream] external/envoy/source/common/config/grpc_mux_impl.cc:240] gRPC config stream closed: 14, no healthy upstream
[2019-04-06 16:28:41.099][10][warning][upstream] external/envoy/source/common/config/grpc_mux_impl.cc:41] Unable to establish new stream
[2019-04-06 16:28:41.099][10][info][config] external/envoy/source/server/configuration_impl.cc:60] loading 0 listener(s)
[2019-04-06 16:28:41.099][10][info][config] external/envoy/source/server/configuration_impl.cc:94] loading tracing configuration
[2019-04-06 16:28:41.099][10][info][config] external/envoy/source/server/configuration_impl.cc:103]   loading tracing driver: envoy.zipkin
[2019-04-06 16:28:41.099][10][info][config] external/envoy/source/server/configuration_impl.cc:116] loading stats sink configuration
[2019-04-06 16:28:41.100][10][info][main] external/envoy/source/server/server.cc:432] starting main dispatch loop
[2019-04-06 16:28:41.107][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:130] cm init: initializing cds
[2019-04-06 16:28:41.193][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|443||kubernetes.default.svc.cluster.local during init
[2019-04-06 16:28:41.194][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|53||kube-dns.kube-system.svc.cluster.local during init
[2019-04-06 16:28:41.196][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|3000||grafana.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.197][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9102||istio-statsd-prom-bridge.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.198][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|443||istio-galley.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.200][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9093||istio-galley.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.201][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|80||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.202][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|443||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.203][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|31400||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.205][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15011||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.206][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|8060||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.207][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|853||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.209][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15030||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.210][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15031||istio-ingressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.210][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9091||istio-policy.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.210][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15004||istio-policy.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.210][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9093||istio-policy.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.212][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|80||istio-egressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.213][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|443||istio-egressgateway.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.213][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9091||istio-telemetry.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.213][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15004||istio-telemetry.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.213][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9093||istio-telemetry.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.213][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|42422||istio-telemetry.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.215][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|8060||istio-citadel.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.216][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9093||istio-citadel.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.217][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|8088||servicegraph.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.218][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9090||prometheus.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.220][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|443||istio-sidecar-injector.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.221][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15010||istio-pilot.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.222][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|15011||istio-pilot.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.224][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|8080||istio-pilot.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.225][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9093||istio-pilot.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.226][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|16686||jaeger-query.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.227][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|14267||jaeger-collector.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.229][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|14268||jaeger-collector.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.230][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|9411||zipkin.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.231][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|80||tracing.istio-system.svc.cluster.local during init
[2019-04-06 16:28:41.232][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|8080||auth.default.svc.cluster.local during init
[2019-04-06 16:28:41.234][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster outbound|8080||hello.default.svc.cluster.local during init
[2019-04-06 16:28:41.234][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster inbound|8080||hello.default.svc.cluster.local during init
[2019-04-06 16:28:41.234][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:494] add/update cluster BlackHoleCluster during init
[2019-04-06 16:28:41.234][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:111] cm init: initializing secondary clusters
[2019-04-06 16:28:41.236][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:134] cm init: all clusters initialized
[2019-04-06 16:28:41.236][10][info][main] external/envoy/source/server/server.cc:401] all clusters initialized. initializing init manager
[2019-04-06 16:28:41.276][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.96.1.31_8080'
[2019-04-06 16:28:41.276][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.71.17.81_15011'
[2019-04-06 16:28:41.277][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.71.17.81_8060'
[2019-04-06 16:28:41.277][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.64.87.140_443'
[2019-04-06 16:28:41.278][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.64.0.10_53'
[2019-04-06 16:28:41.278][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.69.226.93_443'
[2019-04-06 16:28:41.278][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.70.233.3_42422'
[2019-04-06 16:28:41.279][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.71.17.81_443'
[2019-04-06 16:28:41.279][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.71.17.81_853'
[2019-04-06 16:28:41.279][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.71.84.179_443'
[2019-04-06 16:28:41.280][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.69.160.139_15011'
[2019-04-06 16:28:41.280][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.64.0.1_443'
[2019-04-06 16:28:41.280][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.65.10.155_16686'
[2019-04-06 16:28:41.281][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.68.93.244_14267'
[2019-04-06 16:28:41.281][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.69.134.154_9102'
[2019-04-06 16:28:41.282][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.68.93.244_14268'
[2019-04-06 16:28:41.282][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.71.17.81_31400'
[2019-04-06 16:28:41.283][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_15004'
[2019-04-06 16:28:41.284][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_80'
[2019-04-06 16:28:41.285][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_15031'
[2019-04-06 16:28:41.286][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_3000'
[2019-04-06 16:28:41.287][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_9093'
[2019-04-06 16:28:41.288][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_15010'
[2019-04-06 16:28:41.289][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_9091'
[2019-04-06 16:28:41.290][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_9090'
[2019-04-06 16:28:41.291][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_8060'
[2019-04-06 16:28:41.292][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_8088'
[2019-04-06 16:28:41.293][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_9411'
[2019-04-06 16:28:41.294][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_15030'
[2019-04-06 16:28:41.295][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '0.0.0.0_8080'
[2019-04-06 16:28:41.295][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener 'virtual'
[2019-04-06 16:28:41.309][10][info][config] external/envoy/source/server/listener_manager_impl.cc:908] all dependencies initialized. starting workers
[2019-04-06 16:28:41.343][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:500] add/update cluster outbound|8080||hello.default.svc.cluster.local starting warming
[2019-04-06 16:28:41.345][10][info][upstream] external/envoy/source/common/upstream/cluster_manager_impl.cc:512] warming cluster outbound|8080||hello.default.svc.cluster.local complete
[2019-04-06 16:29:41.306][10][info][main] external/envoy/source/server/drain_manager_impl.cc:63] shutting down parent after drain
[libprotobuf INFO src/istio/mixerclient/check_cache.cc:160] Add a new Referenced for check cache: Absence-keys: source.ip, Exact-keys: context.protocol, context.reporter.kind, destination.namespace, destination.port, destination.service, destination.uid, source.uid,
[2019-04-06T16:39:16.685Z] "GET / HTTP/1.1" 200 - 0 57 2 0 "100.96.2.1" "curl/7.58.0" "5f9fe895-d9fe-953b-988b-f7f4b1fc1868" "hello.kubernetes.peelmicro.com" "127.0.0.1:8080"
[2019-04-06 16:41:09.596][10][info][upstream] external/envoy/source/server/lds_api.cc:80] lds: add/update listener '100.96.1.31_8080'
[2019-04-06T16:46:45.872Z] "GET / HTTP/1.1" 401 - 0 29 0 - "100.96.2.1" "curl/7.58.0" "135090a2-135a-9bd1-9a8b-b78095918049" "hello.kubernetes.peelmicro.com" "-"
[libprotobuf INFO src/istio/mixerclient/check_cache.cc:160] Add a new Referenced for check cache: Absence-keys: source.ip, Exact-keys: context.protocol, context.reporter.kind, destination.namespace, destination.port, destination.service, destination.uid, source.uid,
[2019-04-06T16:49:29.666Z] "GET / HTTP/1.1" 200 - 0 57 2 0 "172.20.43.50" "curl/7.58.0" "6a5dba5e-b632-9102-bcee-7c0868e056f1" "hello.kubernetes.peelmicro.com" "127.0.0.1:8080"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We have to delete all the pods.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-jwt-enable.yaml
policy.authentication.istio.io "jwt-example" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f helloworld-jwt.yaml
gateway.networking.istio.io "helloworld-gateway" deleted
virtualservice.networking.istio.io "helloworld-auth" deleted
virtualservice.networking.istio.io "helloworld-hello" deleted
deployment.extensions "auth" deleted
service "auth" deleted
deployment.extensions "hello" deleted
service "hello" deleted
meshpolicy.authentication.istio.io "default" deleted
destinationrule.networking.istio.io "enable-mtls" deleted
destinationrule.networking.istio.io "api-server" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
No resources found.
```

### 118. Demo: Istio Egress traffic

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoIstioEgressTraffic.png)

- We are going to deploy the `helloworld.yaml` previously used.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld.yaml)
deployment.extensions/hello created
service/hello created
deployment.extensions/world created
service/world created
deployment.extensions/world-2 created
service/world-2 created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
hello-c56ccdb87-45dj4     2/2     Running   0          1m
hello-c56ccdb87-bmdxc     2/2     Running   0          1m
hello-c56ccdb87-pz48d     2/2     Running   0          1m
world-2-66f86dff7-6999d   2/2     Running   0          1m
world-2-66f86dff7-6dqn9   2/2     Running   0          1m
world-2-66f86dff7-g5prb   2/2     Running   0          1m
world-595f57b9f8-6nspf    2/2     Running   0          1m
world-595f57b9f8-8sblh    2/2     Running   0          1m
world-595f57b9f8-xjlkc    2/2     Running   0          1m
```

- We are going to login to the first one to check we don't have external access:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl exec -it hello-c56ccdb87-45dj4 -- sh
Defaulting container name to hello.
Use 'kubectl describe pod/hello-c56ccdb87-45dj4 -n default' to see all of the containers in this pod.
/app $ wget worl-2:8080
wget: bad address 'worl-2:8080'
/app $ wget world-2:8080
Connecting to world-2:8080 (100.70.104.88:8080)
index.html           100% |******************************************************************************************************************************************************************************************************************************|     3   0:00:00 ETA
/app $ cat index.html
/app $ rm index.html
/app $ wget ifconfig.co
Connecting to ifconfig.co (104.28.19.94:80)
wget: server returned error: HTTP/1.1 404 Not Found
/app $ wget www.google.com
Connecting to www.google.com (216.58.207.36:80)
wget: server returned error: HTTP/1.1 404 Not Found
/app $ exit
command terminated with exit code 1
```

- We are going to use the `istio/external-service.yaml` documentto create 2 `Service Entries` and 1 `Virtual Service` that is going to allow us to have external access from the pods.

> istio/external-service.yaml

```yaml
#
# http
#
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: ifconfig-co-http
spec:
  hosts:
    - ifconfig.co
  ports:
    - number: 80
      name: http
      protocol: HTTP
  resolution: DNS
  location: MESH_EXTERNAL
---
#
# https
#
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: ifconfig-co-https
spec:
  hosts:
    - ifconfig.co
  ports:
    - number: 443
      name: https
      protocol: HTTPS
  resolution: DNS
  location: MESH_EXTERNAL
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ifconfig-co
spec:
  hosts:
    - ifconfig.co
  tls:
    - match:
        - port: 443
          sni_hosts:
            - ifconfig.co
      route:
        - destination:
            host: ifconfig.co
            port:
              number: 443
          weight: 100
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f external-service.yaml
serviceentry.networking.istio.io/ifconfig-co-http created
serviceentry.networking.istio.io/ifconfig-co-https created
virtualservice.networking.istio.io/ifconfig-co created
```

- We can check now that we have access to the defined hosts:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl exec -it hello-c56ccdb87-45dj4 -- sh
Defaulting container name to hello.
Use 'kubectl describe pod/hello-c56ccdb87-45dj4 -n default' to see all of the containers in this pod.
/app $ wget ifconfig.co
Connecting to ifconfig.co (104.28.18.94:80)
index.html           100% |******************************************************************************************************************************************************************************************************************************|    14   0:00:00 ETA
/app $ cat index.html
18.185.17.213
/app $ rm index.html
/app $ wget https://ifconfig.co
Connecting to ifconfig.co (104.28.18.94:443)
index.html           100% |******************************************************************************************************************************************************************************************************************************|    14   0:00:00 ETA
/app $ cat index.html
18.185.17.213
/app $ rm index.html
/app $ wget www.google.com
Connecting to www.google.com (172.217.16.132:80)
wget: server returned error: HTTP/1.1 404 Not Found
/app $ wget https://www.google.com
Connecting to www.google.com (172.217.16.132:443)
ssl_client: www.google.com: handshake failed: Connection reset by peer
wget: error getting response: Connection reset by peer
/app $ exit
command terminated with exit code 1
```

- We need to delete the pods

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f external-service.yaml
serviceentry.networking.istio.io "ifconfig-co-http" deleted
serviceentry.networking.istio.io "ifconfig-co-https" deleted
virtualservice.networking.istio.io "ifconfig-co" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl delete -f <(istioctl kube-inject -f helloworld.yaml)
deployment.extensions "hello" deleted
service "hello" deleted
deployment.extensions "world" deleted
service "world" deleted
deployment.extensions "world-2" deleted
service "world-2" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pods
No resources found.
```

### 119. Demo: Distributed Tracing with Jaeger

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger.png)

- `Jaeger` is automatically installed by `istio`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get pod -n istio-system
NAME                                        READY   STATUS      RESTARTS   AGE
grafana-6cbdcfb45-kglcz                     1/1     Running     0          11h
istio-citadel-6b6fdfdd6f-hfd2q              1/1     Running     0          11h
istio-cleanup-secrets-dnnph                 0/1     Completed   0          11h
istio-egressgateway-56bdd5fcfb-rt92n        1/1     Running     0          11h
istio-galley-96464ff6-wdf6j                 1/1     Running     0          11h
istio-grafana-post-install-zf8qg            0/1     Completed   0          11h
istio-ingressgateway-7f4dd7d699-gg6x5       1/1     Running     0          11h
istio-pilot-6f8d49d4c4-c8gtd                2/2     Running     0          11h
istio-policy-67f4d49564-bgh55               2/2     Running     0          11h
istio-sidecar-injector-69c4bc7974-pjpxd     1/1     Running     0          11h
istio-statsd-prom-bridge-7f44bb5ddb-4xmhb   1/1     Running     0          11h
istio-telemetry-76869cd64f-8wjjz            2/2     Running     0          11h
istio-tracing-ff94688bb-fp548               1/1     Running     0          11h
prometheus-84bd4b9796-bwtdz                 1/1     Running     0          11h
servicegraph-c6456d6f5-wskrk                1/1     Running     0          11h
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -n istio-system
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                 PORT(S)                                                                                                                   AGE
grafana                    ClusterIP      100.67.210.224   <none>                                                                      3000/TCP                                                                                                                  11h
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                      8060/TCP,9093/TCP                                                                                                         11h
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                      80/TCP,443/TCP                                                                                                            11h
istio-galley               ClusterIP      100.69.226.93    <none>                                                                      443/TCP,9093/TCP                                                                                                          11h
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com   80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   11h
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                      15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     11h
istio-policy               ClusterIP      100.65.212.80    <none>                                                                      9091/TCP,15004/TCP,9093/TCP                                                                                               11h
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                      443/TCP                                                                                                                   11h
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                      9102/TCP,9125/UDP                                                                                                         11h
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                      9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     11h
jaeger-agent               ClusterIP      None             <none>                                                                      5775/UDP,6831/UDP,6832/UDP                                                                                                11h
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                      14267/TCP,14268/TCP                                                                                                       11h
jaeger-query               ClusterIP      100.65.10.155    <none>                                                                      16686/TCP                                                                                                                 11h
prometheus                 ClusterIP      100.69.33.141    <none>                                                                      9090/TCP                                                                                                                  11h
servicegraph               ClusterIP      100.68.219.120   <none>                                                                      8088/TCP                                                                                                                  11h
tracing                    ClusterIP      100.66.223.31    <none>                                                                      80/TCP                                                                                                                    11h
zipkin                     ClusterIP      100.68.135.195   <none>                                                                      9411/TCP                                                                                                                  11h
```

- We are going to change the `jaeger-query` type from `ClusterIP` to `LoadBalancer` so that we have access from outside.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger2.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl edit svc jaeger-query -n istio-system
service/jaeger-query edited
```

- We are going to deploy the `helloworld.yaml` and `helloworld-gw.yaml` previously used.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f <(istioctl kube-inject -f helloworld.yaml)
deployment.extensions/hello created
service/hello created
deployment.extensions/world created
service/world created
deployment.extensions/world-2 created
service/world-2 created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl apply -f helloworld-gw.yaml
gateway.networking.istio.io/helloworld-gateway created
virtualservice.networking.istio.io/helloworld created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -n istio-system -o wide
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    ClusterIP      100.67.210.224   <none>                                                                       3000/TCP                                                                                                                  12h   app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                       8060/TCP,9093/TCP                                                                                                         12h   istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                       80/TCP,443/TCP                                                                                                            12h   app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                       443/TCP,9093/TCP                                                                                                          12h   istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com    80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   12h   app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                       15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     12h   istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                       9091/TCP,15004/TCP,9093/TCP                                                                                               12h   istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                       443/TCP                                                                                                                   12h   istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                       9102/TCP,9125/UDP                                                                                                         12h   istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                       9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     12h   istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                       5775/UDP,6831/UDP,6832/UDP                                                                                                12h   app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                       14267/TCP,14268/TCP                                                                                                       12h   app=jaeger
jaeger-query               LoadBalancer   100.65.10.155    a80da2047582f11e9b668026e61515d9-1394692987.eu-central-1.elb.amazonaws.com   16686:31503/TCP                                                                                                           12h   app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                       9090/TCP                                                                                                                  12h   app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                       8088/TCP                                                                                                                  12h   app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                       80/TCP                                                                                                                    12h   app=jaeger
zipkin                     ClusterIP      100.68.135.195   <none>                                                                       9411/TCP                                                                                                                  12h   app=jaeger
```

- We are going to generate sobre trace data by executing some times

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!
```

- We can see the headers that are going to be included by checking the `http-echo/tracing.go` document

> http-echo/tracing.go

```go
package main

var otHeaders = []string{
	"x-request-id",
	"x-b3-traceid",
	"x-b3-spanid",
	"x-b3-parentspanid",
	"x-b3-sampled",
	"x-b3-flags",
	"x-ot-span-context",
}
```

- We can access now to the `jaeger-query` LoadBalancer on http://a80da2047582f11e9b668026e61515d9-1394692987.eu-central-1.elb.amazonaws.com:16686

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoDistributedTracingWithJaeger11.png)

### 120. Istio's Grafana Metrics

- `Grafana` is also installed by `istio`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -n istio-system -o wide
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    ClusterIP      100.67.210.224   <none>                                                                       3000/TCP                                                                                                                  12h   app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                       8060/TCP,9093/TCP                                                                                                         12h   istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                       80/TCP,443/TCP                                                                                                            12h   app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                       443/TCP,9093/TCP                                                                                                          12h   istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com    80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   12h   app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                       15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     12h   istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                       9091/TCP,15004/TCP,9093/TCP                                                                                               12h   istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                       443/TCP                                                                                                                   12h   istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                       9102/TCP,9125/UDP                                                                                                         12h   istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                       9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     12h   istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                       5775/UDP,6831/UDP,6832/UDP                                                                                                12h   app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                       14267/TCP,14268/TCP                                                                                                       12h   app=jaeger
jaeger-query               LoadBalancer   100.65.10.155    a80da2047582f11e9b668026e61515d9-1394692987.eu-central-1.elb.amazonaws.com   16686:31503/TCP                                                                                                           12h   app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                       9090/TCP                                                                                                                  12h   app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                       8088/TCP                                                                                                                  12h   app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                       80/TCP                                                                                                                    12h   app=jaeger
zipkin                     ClusterIP      100.68.135.195   <none>                                                                       9411/TCP                                                                                                                  12h   app=jaeger
```

- We are going to change the `grafana` type from `ClusterIP` to `LoadBalancer` so that we have access from outside.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl edit svc grafana -n istio-system
service/grafana edited
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kubectl get svc -n istio-system -o wide
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP                                                                  PORT(S)                                                                                                                   AGE   SELECTOR
grafana                    LoadBalancer   100.67.210.224   a7f7cff92582f11e9b668026e61515d9-1255080586.eu-central-1.elb.amazonaws.com   3000:30224/TCP                                                                                                            12h   app=grafana
istio-citadel              ClusterIP      100.69.173.18    <none>                                                                       8060/TCP,9093/TCP                                                                                                         12h   istio=citadel
istio-egressgateway        ClusterIP      100.71.84.179    <none>                                                                       80/TCP,443/TCP                                                                                                            12h   app=istio-egressgateway,istio=egressgateway
istio-galley               ClusterIP      100.69.226.93    <none>                                                                       443/TCP,9093/TCP                                                                                                          12h   istio=galley
istio-ingressgateway       LoadBalancer   100.71.17.81     a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com    80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:30746/TCP,8060:30648/TCP,853:32541/TCP,15030:32610/TCP,15031:30764/TCP   12h   app=istio-ingressgateway,istio=ingressgateway
istio-pilot                ClusterIP      100.69.160.139   <none>                                                                       15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     12h   istio=pilot
istio-policy               ClusterIP      100.65.212.80    <none>                                                                       9091/TCP,15004/TCP,9093/TCP                                                                                               12h   istio-mixer-type=policy,istio=mixer
istio-sidecar-injector     ClusterIP      100.64.87.140    <none>                                                                       443/TCP                                                                                                                   12h   istio=sidecar-injector
istio-statsd-prom-bridge   ClusterIP      100.69.134.154   <none>                                                                       9102/TCP,9125/UDP                                                                                                         12h   istio=statsd-prom-bridge
istio-telemetry            ClusterIP      100.70.233.3     <none>                                                                       9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     12h   istio-mixer-type=telemetry,istio=mixer
jaeger-agent               ClusterIP      None             <none>                                                                       5775/UDP,6831/UDP,6832/UDP                                                                                                12h   app=jaeger
jaeger-collector           ClusterIP      100.68.93.244    <none>                                                                       14267/TCP,14268/TCP                                                                                                       12h   app=jaeger
jaeger-query               LoadBalancer   100.65.10.155    a80da2047582f11e9b668026e61515d9-1394692987.eu-central-1.elb.amazonaws.com   16686:31503/TCP                                                                                                           12h   app=jaeger
prometheus                 ClusterIP      100.69.33.141    <none>                                                                       9090/TCP                                                                                                                  12h   app=prometheus
servicegraph               ClusterIP      100.68.219.120   <none>                                                                       8088/TCP                                                                                                                  12h   app=servicegraph
tracing                    ClusterIP      100.66.223.31    <none>                                                                       80/TCP                                                                                                                    12h   app=jaeger
zipkin                     ClusterIP      100.68.135.195   <none>                                                                       9411/TCP                                                                                                                  12h   app=jaeger
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio#
```

- We can access `grafana` on http://a7f7cff92582f11e9b668026e61515d9-1255080586.eu-central-1.elb.amazonaws.com:3000

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics4.png)

- We need to generate data by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# curl a7f72a02c582f11e9b668026e61515d9-746101808.eu-central-1.elb.amazonaws.com/hello
hello world !!!
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics8.png)

- We need to terminate the cluster:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/istio# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190406051004                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190406051004
autoscaling-config      nodes.kubernetes.peelmicro.com-20190406051004                                           nodes.kubernetes.peelmicro.com-20190406051004
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-05a141da136cb139a
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-0012017ca6d8ed3bb
instance                nodes.kubernetes.peelmicro.com                                                          i-01f8dc07623307d98
instance                nodes.kubernetes.peelmicro.com                                                          i-0f523059808fe4978
internet-gateway        kubernetes.peelmicro.com                                                                igw-0d9b0a947aa57c1c7
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
load-balancer                                                                                                   a7f72a02c582f11e9b668026e61515d9
load-balancer                                                                                                   a7f7cff92582f11e9b668026e61515d9
load-balancer                                                                                                   a80da2047582f11e9b668026e61515d9
route-table             kubernetes.peelmicro.com                                                                rtb-0d7f1d70dc190ac3d
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group                                                                                                  sg-01fc072d66b9b5326
security-group                                                                                                  sg-0985a1834e3ca3d5e
security-group                                                                                                  sg-0d15a48f5268838bd
security-group          masters.kubernetes.peelmicro.com                                                        sg-0261f41c910e2a2ac
security-group          nodes.kubernetes.peelmicro.com                                                          sg-0dc207e4181e66a99
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-0dde59602ffd2fa9b
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0ddd6a6b252d43c6d
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-06b05d146cfc8ad17
vpc                     kubernetes.peelmicro.com                                                                vpc-0754bca84ef60ba44

load-balancer:a7f7cff92582f11e9b668026e61515d9  ok
autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
load-balancer:a80da2047582f11e9b668026e61515d9  ok
load-balancer:a7f72a02c582f11e9b668026e61515d9  ok
instance:i-01f8dc07623307d98    ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
route53-record:Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.  ok
instance:i-0f523059808fe4978    ok
instance:i-0012017ca6d8ed3bb    ok
internet-gateway:igw-0d9b0a947aa57c1c7  still has dependencies, will retry
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-role:nodes.kubernetes.peelmicro.com ok
iam-role:masters.kubernetes.peelmicro.com       ok
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190406051004 ok
autoscaling-config:nodes.kubernetes.peelmicro.com-20190406051004        ok
subnet:subnet-0dde59602ffd2fa9b still has dependencies, will retry
volume:vol-06b05d146cfc8ad17    still has dependencies, will retry
volume:vol-0ddd6a6b252d43c6d    still has dependencies, will retry
security-group:sg-0dc207e4181e66a99     still has dependencies, will retry
security-group:sg-01fc072d66b9b5326     still has dependencies, will retry
security-group:sg-0985a1834e3ca3d5e     still has dependencies, will retry
security-group:sg-0261f41c910e2a2ac     still has dependencies, will retry
security-group:sg-0d15a48f5268838bd     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        volume:vol-06b05d146cfc8ad17
        security-group:sg-01fc072d66b9b5326
        security-group:sg-0dc207e4181e66a99
        security-group:sg-0d15a48f5268838bd
        internet-gateway:igw-0d9b0a947aa57c1c7
        route-table:rtb-0d7f1d70dc190ac3d
        security-group:sg-0261f41c910e2a2ac
        security-group:sg-0985a1834e3ca3d5e
        vpc:vpc-0754bca84ef60ba44
        volume:vol-0ddd6a6b252d43c6d
        dhcp-options:dopt-05a141da136cb139a
        subnet:subnet-0dde59602ffd2fa9b
subnet:subnet-0dde59602ffd2fa9b still has dependencies, will retry
volume:vol-0ddd6a6b252d43c6d    still has dependencies, will retry
volume:vol-06b05d146cfc8ad17    still has dependencies, will retry
internet-gateway:igw-0d9b0a947aa57c1c7  still has dependencies, will retry
security-group:sg-0d15a48f5268838bd     still has dependencies, will retry
security-group:sg-0261f41c910e2a2ac     still has dependencies, will retry
security-group:sg-0985a1834e3ca3d5e     still has dependencies, will retry
security-group:sg-01fc072d66b9b5326     still has dependencies, will retry
security-group:sg-0dc207e4181e66a99     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        route-table:rtb-0d7f1d70dc190ac3d
        security-group:sg-0261f41c910e2a2ac
        security-group:sg-0985a1834e3ca3d5e
        vpc:vpc-0754bca84ef60ba44
        volume:vol-0ddd6a6b252d43c6d
        subnet:subnet-0dde59602ffd2fa9b
        dhcp-options:dopt-05a141da136cb139a
        security-group:sg-0d15a48f5268838bd
        volume:vol-06b05d146cfc8ad17
        security-group:sg-01fc072d66b9b5326
        security-group:sg-0dc207e4181e66a99
        internet-gateway:igw-0d9b0a947aa57c1c7
subnet:subnet-0dde59602ffd2fa9b still has dependencies, will retry
volume:vol-06b05d146cfc8ad17    ok
volume:vol-0ddd6a6b252d43c6d    ok
internet-gateway:igw-0d9b0a947aa57c1c7  still has dependencies, will retry
security-group:sg-0dc207e4181e66a99     still has dependencies, will retry
security-group:sg-0261f41c910e2a2ac     ok
security-group:sg-0d15a48f5268838bd     still has dependencies, will retry
security-group:sg-01fc072d66b9b5326     still has dependencies, will retry
security-group:sg-0985a1834e3ca3d5e     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-05a141da136cb139a
        subnet:subnet-0dde59602ffd2fa9b
        security-group:sg-01fc072d66b9b5326
        security-group:sg-0dc207e4181e66a99
        security-group:sg-0d15a48f5268838bd
        internet-gateway:igw-0d9b0a947aa57c1c7
        route-table:rtb-0d7f1d70dc190ac3d
        security-group:sg-0985a1834e3ca3d5e
        vpc:vpc-0754bca84ef60ba44
subnet:subnet-0dde59602ffd2fa9b still has dependencies, will retry
internet-gateway:igw-0d9b0a947aa57c1c7  still has dependencies, will retry
security-group:sg-0dc207e4181e66a99     still has dependencies, will retry
security-group:sg-01fc072d66b9b5326     still has dependencies, will retry
security-group:sg-0985a1834e3ca3d5e     ok
security-group:sg-0d15a48f5268838bd     ok
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-05a141da136cb139a
        subnet:subnet-0dde59602ffd2fa9b
        security-group:sg-01fc072d66b9b5326
        security-group:sg-0dc207e4181e66a99
        internet-gateway:igw-0d9b0a947aa57c1c7
        route-table:rtb-0d7f1d70dc190ac3d
        vpc:vpc-0754bca84ef60ba44
subnet:subnet-0dde59602ffd2fa9b still has dependencies, will retry
internet-gateway:igw-0d9b0a947aa57c1c7  still has dependencies, will retry
security-group:sg-01fc072d66b9b5326     still has dependencies, will retry
security-group:sg-0dc207e4181e66a99     ok
Not all resources deleted; waiting before reattempting deletion
        subnet:subnet-0dde59602ffd2fa9b
        dhcp-options:dopt-05a141da136cb139a
        security-group:sg-01fc072d66b9b5326
        internet-gateway:igw-0d9b0a947aa57c1c7
        route-table:rtb-0d7f1d70dc190ac3d
        vpc:vpc-0754bca84ef60ba44
subnet:subnet-0dde59602ffd2fa9b still has dependencies, will retry
internet-gateway:igw-0d9b0a947aa57c1c7  ok
security-group:sg-01fc072d66b9b5326     ok
Not all resources deleted; waiting before reattempting deletion
        route-table:rtb-0d7f1d70dc190ac3d
        vpc:vpc-0754bca84ef60ba44
        subnet:subnet-0dde59602ffd2fa9b
        dhcp-options:dopt-05a141da136cb139a
subnet:subnet-0dde59602ffd2fa9b ok
route-table:rtb-0d7f1d70dc190ac3d       ok
vpc:vpc-0754bca84ef60ba44       ok
dhcp-options:dopt-05a141da136cb139a     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IstiosGrafanaMetrics9.png)

## Section: 8. Installing Kubernetes using kubeadm

### 121. Introduction to kubeadm

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeadm.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeadm2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeadm3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IntroductionToKubeadm4.png)

### 122. Demo: kubeadm (part I)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI11.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI12.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartI13.png)

- `kubernetes-node-01`: 209.97.132.0

- `kubernetes-master`: 167.99.204.220

### 123. Demo: kubeadm (part II)

- Connect to the new `kubernetes-master` server

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey root@167.99.204.220
The authenticity of host '167.99.204.220 (167.99.204.220)' can't be established.
ECDSA key fingerprint is SHA256:+8y6C1nng4s0oStonQXcB7KTQbM/qCn32d4JK+R5y4A.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '167.99.204.220' (ECDSA) to the list of known hosts.
Welcome to Ubuntu 18.04.2 LTS (GNU/Linux 4.15.0-45-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Feb 27 05:08:15 UTC 2019

  System load:  0.0               Processes:           80
  Usage of /:   2.0% of 48.29GB   Users logged in:     0
  Memory usage: 5%                IP address for eth0: 167.99.204.220
  Swap usage:   0%

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

0 packages can be updated.
0 updates are security updates.

root@kubernetes-master:~#
```

- We need to clone the [on-prem-or-cloud-agnostic-kubernetes](https://github.com/wardviaene/on-prem-or-cloud-agnostic-kubernetes) Github repository because it has a script to install kubernetes.

- We need to fork the repository because we need to make some changes to the scripts.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII3.png)

> Original: install-kubernetes.sh

```bash
#!/bin/bash

echo "installing docker"
apt-get update
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository \
   "deb https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
   $(lsb_release -cs) \
   stable"
apt-get update && apt-get install -y docker-ce=$(apt-cache madison docker-ce | grep 17.03 | head -1 | awk '{print $3}')

echo "installing kubernetes"
apt-get update && apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl

# DigitalOcean without firewall (IP-in-IP allowed) - or any other cloud / on-prem that supports IP-in-IP traffic
# echo "deploying kubernetes (with calico)..."
# kubeadm init --pod-network-cidr=192.168.0.0/16 # add --apiserver-advertise-address="ip" if you want to use a different IP address than the main server IP
# export KUBECONFIG=/etc/kubernetes/admin.conf
# kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/rbac-kdd.yaml
# kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml


# DigitalOcean with firewall (VxLAN with Flannel) - could be resolved in the future by allowing IP-in-IP in the firewall settings
echo "deploying kubernetes (with canal)..."
kubeadm init --pod-network-cidr=10.244.0.0/16 # add --apiserver-advertise-address="ip" if you want to use a different IP address than the main server IP
export KUBECONFIG=/etc/kubernetes/admin.conf
kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/canal/rbac.yaml
kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/canal/canal.yaml
```

- We need modify the `scripts/install-kubernetes.sh` to comment out the deployment with `canal` and comment in the deployment with `calico`

> Updated: install-kubernetes.sh

```bash
#!/bin/bash

echo "installing docker"
apt-get update
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository \
   "deb https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
   $(lsb_release -cs) \
   stable"
apt-get update && apt-get install -y docker-ce=$(apt-cache madison docker-ce | grep 17.03 | head -1 | awk '{print $3}')

echo "installing kubernetes"
apt-get update && apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl

# DigitalOcean without firewall (IP-in-IP allowed) - or any other cloud / on-prem that supports IP-in-IP traffic
 echo "deploying kubernetes (with calico)..."
 kubeadm init --pod-network-cidr=192.168.0.0/16 # add --apiserver-advertise-address="ip" if you want to use a different IP address than the main server IP
 export KUBECONFIG=/etc/kubernetes/admin.conf
 kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/rbac-kdd.yaml
 kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml


# DigitalOcean with firewall (VxLAN with Flannel) - could be resolved in the future by allowing IP-in-IP in the firewall settings
# echo "deploying kubernetes (with canal)..."
# kubeadm init --pod-network-cidr=10.244.0.0/16 # add --apiserver-advertise-address="ip" if you want to use a different IP address than the main server IP
# export KUBECONFIG=/etc/kubernetes/admin.conf
# kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/canal/rbac.yaml
# ubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/canal/canal.yaml
```

- Clone the repository in the `kubernetes-master` server.

```
root@kubernetes-master:~# git clone https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes.git
Cloning into 'on-prem-or-cloud-agnostic-kubernetes'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 263 (delta 0), reused 0 (delta 0), pack-reused 259
Receiving objects: 100% (263/263), 41.50 KiB | 512.00 KiB/s, done.
Resolving deltas: 100% (114/114), done.
root@kubernetes-master:~# cd on-prem-or-cloud-agnostic-kubernetes/
root@kubernetes-master:~/on-prem-or-cloud-agnostic-kubernetes#
```

- The `install-kubernetes.sh` script installs `Docker`, then it installs `kubernetes` and finally it deploys `kubernetes` using `calico`.

- Run the `install-kubernetes.sh` script in the `kubernetes-master` server.

```bash
root@kubernetes-master:~# cd on-prem-or-cloud-agnostic-kubernetes/
root@kubernetes-master:~/on-prem-or-cloud-agnostic-kubernetes# scripts/install-kubernetes.sh
installing docker
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Hit:2 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Get:3 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:4 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:5 http://mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 Packages [531 kB]
Get:6 http://mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 Packages [737 kB]
Fetched 1521 kB in 3s (443 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
ca-certificates is already the newest version (20180409).
curl is already the newest version (7.58.0-2ubuntu3.6).
software-properties-common is already the newest version (0.96.24.32.7).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following NEW packages will be installed:
  apt-transport-https
0 upgraded, 1 newly installed, 0 to remove and 22 not upgraded.
Need to get 1692 B of archives.
After this operation, 153 kB of additional disk space will be used.
Get:1 http://mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 apt-transport-https all 1.6.8 [1692 B]
Fetched 1692 B in 0s (74.4 kB/s)
Selecting previously unselected package apt-transport-https.
(Reading database ... 60071 files and directories currently installed.)
Preparing to unpack .../apt-transport-https_1.6.8_all.deb ...
Unpacking apt-transport-https (1.6.8) ...
Setting up apt-transport-https (1.6.8) ...
OK
Hit:1 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:2 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Get:3 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:4 https://download.docker.com/linux/ubuntu bionic InRelease [64.4 kB]
Get:5 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:6 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages [4696 B]
Fetched 232 kB in 1s (332 kB/s)
Reading package lists... Done
Hit:1 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:2 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:3 https://download.docker.com/linux/ubuntu bionic InRelease
Get:4 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:5 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Fetched 163 kB in 1s (301 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Version '' for 'docker-ce' was not found
installing kubernetes
Hit:1 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:5 https://download.docker.com/linux/ubuntu bionic InRelease
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:4 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
apt-transport-https is already the newest version (1.6.8).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 22 not upgraded.
OK
Hit:1 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:2 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:3 https://download.docker.com/linux/ubuntu bionic InRelease
Get:4 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:5 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:6 https://packages.cloud.google.com/apt kubernetes-xenial InRelease [8993 B]
Get:7 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 Packages [23.8 kB]
Fetched 196 kB in 1s (271 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  conntrack cri-tools kubernetes-cni socat
The following NEW packages will be installed:
  conntrack cri-tools kubeadm kubectl kubelet kubernetes-cni socat
0 upgraded, 7 newly installed, 0 to remove and 22 not upgraded.
Need to get 45.9 MB of archives.
After this operation, 264 MB of additional disk space will be used.
Get:1 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 conntrack amd64 1:1.4.4+snapshot20161117-6ubuntu2 [30.6 kB]
Get:2 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 socat amd64 1.7.3.2-2ubuntu2 [342 kB]
Get:3 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 cri-tools amd64 1.12.0-00 [5343 kB]
Get:4 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubernetes-cni amd64 0.6.0-00 [5910 kB]
Get:5 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubelet amd64 1.13.3-00 [19.0 MB]
Get:6 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubectl amd64 1.13.3-00 [7852 kB]
Get:7 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubeadm amd64 1.13.3-00 [7364 kB]
Fetched 45.9 MB in 3s (17.7 MB/s)
Selecting previously unselected package conntrack.
(Reading database ... 60075 files and directories currently installed.)
Preparing to unpack .../0-conntrack_1%3a1.4.4+snapshot20161117-6ubuntu2_amd64.deb ...
Unpacking conntrack (1:1.4.4+snapshot20161117-6ubuntu2) ...
Selecting previously unselected package cri-tools.
Preparing to unpack .../1-cri-tools_1.12.0-00_amd64.deb ...
Unpacking cri-tools (1.12.0-00) ...
Selecting previously unselected package kubernetes-cni.
Preparing to unpack .../2-kubernetes-cni_0.6.0-00_amd64.deb ...
Unpacking kubernetes-cni (0.6.0-00) ...
Selecting previously unselected package socat.
Preparing to unpack .../3-socat_1.7.3.2-2ubuntu2_amd64.deb ...
Unpacking socat (1.7.3.2-2ubuntu2) ...
Selecting previously unselected package kubelet.
Preparing to unpack .../4-kubelet_1.13.3-00_amd64.deb ...
Unpacking kubelet (1.13.3-00) ...
Selecting previously unselected package kubectl.
Preparing to unpack .../5-kubectl_1.13.3-00_amd64.deb ...
Unpacking kubectl (1.13.3-00) ...
Selecting previously unselected package kubeadm.
Preparing to unpack .../6-kubeadm_1.13.3-00_amd64.deb ...
Unpacking kubeadm (1.13.3-00) ...
Setting up conntrack (1:1.4.4+snapshot20161117-6ubuntu2) ...
Setting up kubernetes-cni (0.6.0-00) ...
Setting up cri-tools (1.12.0-00) ...
Setting up socat (1.7.3.2-2ubuntu2) ...
Setting up kubelet (1.13.3-00) ...
Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service ? /lib/systemd/system/kubelet.service.
Setting up kubectl (1.13.3-00) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up kubeadm (1.13.3-00) ...
deploying kubernetes (with calico)...
[init] Using Kubernetes version: v1.13.3
[preflight] Running pre-flight checks
[preflight] WARNING: Couldn't create the interface used for talking to the container runtime: docker is required for container runtime: exec: "docker": executable file not found in $PATH
error execution phase preflight: [preflight] Some fatal errors occurred:
        [ERROR NumCPU]: the number of available CPUs 1 is less than the required 2
        [ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables does not exist
        [ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/rbac-kdd.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/rbac-kdd.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused
unable to recognize "https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml": Get http://localhost:8080/api?timeout=32s: dial tcp 127.0.0.1:8080: connect: connection refused

```

- The `install-node.sh` must be installed in the `kubernetes-node-01` server.

> install-node.sh

```
#!/bin/bash
echo "installing docker"
apt-get update
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository \
   "deb https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
   $(lsb_release -cs) \
   stable"
apt-get update && apt-get install -y docker-ce=$(apt-cache madison docker-ce | grep 17.03 | head -1 | awk '{print $3}')

echo "installing kubeadm and kubectl"
apt-get update && apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl
```

- The script installs `docker`, `kubeadm` and `kubectl`

- Connect to the new `kubernetes-node-01` on another terminal

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey root@209.97.132.0
The authenticity of host '209.97.132.0 (209.97.132.0)' can't be established.
ECDSA key fingerprint is SHA256:pzA6nY73jAIyD2OYpRf+rnAh8AkFgcyg68u/X300//w.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '209.97.132.0' (ECDSA) to the list of known hosts.
Welcome to Ubuntu 18.04.2 LTS (GNU/Linux 4.15.0-45-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Feb 27 05:12:32 UTC 2019

  System load:  0.0               Processes:           80
  Usage of /:   2.0% of 48.29GB   Users logged in:     0
  Memory usage: 5%                IP address for eth0: 209.97.132.0
  Swap usage:   0%

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

0 packages can be updated.
0 updates are security updates.



The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

root@kubernetes-node-01:~#
```

- Clone the repository in the `kubernetes-node-01` server.

```
root@kubernetes-node-01:~# git clone https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes.git
Cloning into 'on-prem-or-cloud-agnostic-kubernetes'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 263 (delta 0), reused 0 (delta 0), pack-reused 259
Receiving objects: 100% (263/263), 41.50 KiB | 518.00 KiB/s, done.
Resolving deltas: 100% (114/114), done.
root@kubernetes-node-01:~# cd on-prem-or-cloud-agnostic-kubernetes/
root@kubernetes-node-01:~/on-prem-or-cloud-agnostic-kubernetes#
```

- We need to execute the script.

```sh
root@kubernetes-node-01:~# cd on-prem-or-cloud-agnostic-kubernetes/
root@kubernetes-node-01:~/on-prem-or-cloud-agnostic-kubernetes# scripts/install-node.sh
installing docker
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Hit:2 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Get:3 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:4 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:5 http://mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 Packages [531 kB]
Get:6 http://mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 Packages [737 kB]
Fetched 1521 kB in 2s (705 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
ca-certificates is already the newest version (20180409).
curl is already the newest version (7.58.0-2ubuntu3.6).
software-properties-common is already the newest version (0.96.24.32.7).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following NEW packages will be installed:
  apt-transport-https
0 upgraded, 1 newly installed, 0 to remove and 22 not upgraded.
Need to get 1692 B of archives.
After this operation, 153 kB of additional disk space will be used.
Get:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 apt-transport-https all 1.6.8 [1692 B]
Fetched 1692 B in 0s (91.0 kB/s)
Selecting previously unselected package apt-transport-https.
(Reading database ... 60071 files and directories currently installed.)
Preparing to unpack .../apt-transport-https_1.6.8_all.deb ...
Unpacking apt-transport-https (1.6.8) ...
Setting up apt-transport-https (1.6.8) ...
OK
Hit:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Get:4 https://download.docker.com/linux/ubuntu bionic InRelease [64.4 kB]
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Get:5 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Get:6 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages [4696 B]
Fetched 158 kB in 1s (283 kB/s)
Reading package lists... Done
Hit:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:4 https://download.docker.com/linux/ubuntu bionic InRelease
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Get:5 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Fetched 88.7 kB in 1s (170 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Version '' for 'docker-ce' was not found
installing kubeadm and kubectl
Hit:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:4 https://download.docker.com/linux/ubuntu bionic InRelease
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Get:5 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Fetched 88.7 kB in 1s (158 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
apt-transport-https is already the newest version (1.6.8).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 22 not upgraded.
OK
Hit:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:4 https://download.docker.com/linux/ubuntu bionic InRelease
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Get:5 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Get:6 https://packages.cloud.google.com/apt kubernetes-xenial InRelease [8993 B]
Get:7 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 Packages [23.8 kB]
Fetched 121 kB in 1s (181 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  conntrack cri-tools kubernetes-cni socat
The following NEW packages will be installed:
  conntrack cri-tools kubeadm kubectl kubelet kubernetes-cni socat
0 upgraded, 7 newly installed, 0 to remove and 22 not upgraded.
Need to get 45.9 MB of archives.
After this operation, 264 MB of additional disk space will be used.
Get:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 conntrack amd64 1:1.4.4+snapshot20161117-6ubuntu2 [30.6 kB]
Get:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 socat amd64 1.7.3.2-2ubuntu2 [342 kB]
Get:3 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 cri-tools amd64 1.12.0-00 [5343 kB]
Get:4 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubernetes-cni amd64 0.6.0-00 [5910 kB]
Get:5 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubelet amd64 1.13.3-00 [19.0 MB]
Get:6 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubectl amd64 1.13.3-00 [7852 kB]
Get:7 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubeadm amd64 1.13.3-00 [7364 kB]
Fetched 45.9 MB in 2s (22.3 MB/s)
Selecting previously unselected package conntrack.
(Reading database ... 60075 files and directories currently installed.)
Preparing to unpack .../0-conntrack_1%3a1.4.4+snapshot20161117-6ubuntu2_amd64.deb ...
Unpacking conntrack (1:1.4.4+snapshot20161117-6ubuntu2) ...
Selecting previously unselected package cri-tools.
Preparing to unpack .../1-cri-tools_1.12.0-00_amd64.deb ...
Unpacking cri-tools (1.12.0-00) ...
Selecting previously unselected package kubernetes-cni.
Preparing to unpack .../2-kubernetes-cni_0.6.0-00_amd64.deb ...
Unpacking kubernetes-cni (0.6.0-00) ...
Selecting previously unselected package socat.
Preparing to unpack .../3-socat_1.7.3.2-2ubuntu2_amd64.deb ...
Unpacking socat (1.7.3.2-2ubuntu2) ...
Selecting previously unselected package kubelet.
Preparing to unpack .../4-kubelet_1.13.3-00_amd64.deb ...
Unpacking kubelet (1.13.3-00) ...
Selecting previously unselected package kubectl.
Preparing to unpack .../5-kubectl_1.13.3-00_amd64.deb ...
Unpacking kubectl (1.13.3-00) ...
Selecting previously unselected package kubeadm.
Preparing to unpack .../6-kubeadm_1.13.3-00_amd64.deb ...
Unpacking kubeadm (1.13.3-00) ...
Setting up conntrack (1:1.4.4+snapshot20161117-6ubuntu2) ...
Setting up kubernetes-cni (0.6.0-00) ...
Setting up cri-tools (1.12.0-00) ...
Setting up socat (1.7.3.2-2ubuntu2) ...
Setting up kubelet (1.13.3-00) ...
Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service ? /lib/systemd/system/kubelet.service.
Setting up kubectl (1.13.3-00) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up kubeadm (1.13.3-00) ...
root@kubernetes-node-01:~/on-prem-or-cloud-agnostic-kubernetes#
```

::: warning
It seems there is a problem with Ubuntu 18, Ubuntu 16 must be used instead.
:::

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII8.png)

- Create them again

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoKubeadmPartII11.png)

- `kubernetes-master`: 167.99.192.20
- `kubernetes-node-01`: 167.99.202.93

- Access the new server, clone the repository and run the `install-kubernetes.sh` script on the `kubernetes-master` server.

```bash
root@kubernetes-master:~# git clone https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes.git
Cloning into 'on-prem-or-cloud-agnostic-kubernetes'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 264 (delta 0), reused 0 (delta 0), pack-reused 259
Receiving objects: 100% (264/264), 42.04 KiB | 0 bytes/s, done.
Resolving deltas: 100% (114/114), done.
Checking connectivity... done.
root@kubernetes-master:~# cd on-prem-or-cloud-agnostic-kubernetes/
root@kubernetes-master:~/on-prem-or-cloud-agnostic-kubernetes# scripts/install-kubernetes.sh
installing docker
Get:1 http://security.ubuntu.com/ubuntu xenial-security InRelease [109 kB]
Hit:2 http://mirrors.digitalocean.com/ubuntu xenial InRelease
Get:3 http://mirrors.digitalocean.com/ubuntu xenial-updates InRelease [109 kB]
Get:4 http://security.ubuntu.com/ubuntu xenial-security/main Sources [144 kB]
Get:5 http://security.ubuntu.com/ubuntu xenial-security/restricted Sources [2,116 B]
Get:6 http://security.ubuntu.com/ubuntu xenial-security/universe Sources [102 kB]
Get:7 http://security.ubuntu.com/ubuntu xenial-security/multiverse Sources [3,420 B]
Get:8 http://security.ubuntu.com/ubuntu xenial-security/main amd64 Packages [616 kB]
Get:9 http://mirrors.digitalocean.com/ubuntu xenial-backports InRelease [107 kB]
Get:10 http://security.ubuntu.com/ubuntu xenial-security/main Translation-en [255 kB]
Get:11 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 Packages [427 kB]
Get:12 http://security.ubuntu.com/ubuntu xenial-security/universe Translation-en [172 kB]
Get:13 http://security.ubuntu.com/ubuntu xenial-security/multiverse amd64 Packages [5,600 B]
Get:14 http://security.ubuntu.com/ubuntu xenial-security/multiverse Translation-en [2,676 B]
Get:15 http://mirrors.digitalocean.com/ubuntu xenial/main Sources [868 kB]
Get:16 http://mirrors.digitalocean.com/ubuntu xenial/restricted Sources [4,808 B]
Get:17 http://mirrors.digitalocean.com/ubuntu xenial/universe Sources [7,728 kB]
Get:18 http://mirrors.digitalocean.com/ubuntu xenial/multiverse Sources [179 kB]
Get:19 http://mirrors.digitalocean.com/ubuntu xenial/universe amd64 Packages [7,532 kB]
Get:20 http://mirrors.digitalocean.com/ubuntu xenial/universe Translation-en [4,354 kB]
Get:21 http://mirrors.digitalocean.com/ubuntu xenial/multiverse amd64 Packages [144 kB]
Get:22 http://mirrors.digitalocean.com/ubuntu xenial/multiverse Translation-en [106 kB]
Get:23 http://mirrors.digitalocean.com/ubuntu xenial-updates/main Sources [331 kB]
Get:24 http://mirrors.digitalocean.com/ubuntu xenial-updates/restricted Sources [2,528 B]
Get:25 http://mirrors.digitalocean.com/ubuntu xenial-updates/universe Sources [248 kB]
Get:26 http://mirrors.digitalocean.com/ubuntu xenial-updates/multiverse Sources [8,764 B]
Get:27 http://mirrors.digitalocean.com/ubuntu xenial-updates/main amd64 Packages [915 kB]
Get:28 http://mirrors.digitalocean.com/ubuntu xenial-updates/main Translation-en [369 kB]
Get:29 http://mirrors.digitalocean.com/ubuntu xenial-updates/universe amd64 Packages [734 kB]
Get:30 http://mirrors.digitalocean.com/ubuntu xenial-updates/universe Translation-en [304 kB]
Get:31 http://mirrors.digitalocean.com/ubuntu xenial-updates/multiverse amd64 Packages [16.6 kB]
Get:32 http://mirrors.digitalocean.com/ubuntu xenial-updates/multiverse Translation-en [8,440 B]
Get:33 http://mirrors.digitalocean.com/ubuntu xenial-backports/main Sources [4,848 B]
Get:34 http://mirrors.digitalocean.com/ubuntu xenial-backports/universe Sources [6,740 B]
Get:35 http://mirrors.digitalocean.com/ubuntu xenial-backports/main amd64 Packages [7,280 B]
Get:36 http://mirrors.digitalocean.com/ubuntu xenial-backports/main Translation-en [4,456 B]
Get:37 http://mirrors.digitalocean.com/ubuntu xenial-backports/universe amd64 Packages [7,804 B]
Get:38 http://mirrors.digitalocean.com/ubuntu xenial-backports/universe Translation-en [4,184 B]
Fetched 25.9 MB in 18s (1,395 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
apt-transport-https is already the newest version (1.2.29ubuntu0.1).
ca-certificates is already the newest version (20170717~16.04.2).
curl is already the newest version (7.47.0-1ubuntu2.12).
software-properties-common is already the newest version (0.96.20.8).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 29 not upgraded.
OK
Hit:4 http://security.ubuntu.com/ubuntu xenial-security InRelease
Hit:1 http://lon1.mirrors.digitalocean.com/ubuntu xenial InRelease
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu xenial-updates InRelease
Hit:3 http://lon1.mirrors.digitalocean.com/ubuntu xenial-backports InRelease
Get:5 https://download.docker.com/linux/ubuntu xenial InRelease [66.2 kB]
Get:6 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages [6,860 B]
Fetched 73.1 kB in 0s (103 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  aufs-tools cgroupfs-mount libltdl7
Suggested packages:
  mountall
The following NEW packages will be installed:
  aufs-tools cgroupfs-mount docker-ce libltdl7
0 upgraded, 4 newly installed, 0 to remove and 29 not upgraded.
Need to get 19.5 MB of archives.
After this operation, 89.4 MB of additional disk space will be used.
Get:1 https://download.docker.com/linux/ubuntu xenial/stable amd64 docker-ce amd64 17.03.3~ce-0~ubuntu-xenial [19.4 MB]
Get:2 http://mirrors.digitalocean.com/ubuntu xenial/universe amd64 aufs-tools amd64 1:3.2+20130722-1.1ubuntu1 [92.9 kB]
Get:3 http://mirrors.digitalocean.com/ubuntu xenial/universe amd64 cgroupfs-mount all 1.2 [4,970 B]
Get:4 http://mirrors.digitalocean.com/ubuntu xenial/main amd64 libltdl7 amd64 2.4.6-0.1 [38.3 kB]
Fetched 19.5 MB in 0s (21.3 MB/s)
Selecting previously unselected package aufs-tools.
(Reading database ... 54504 files and directories currently installed.)
Preparing to unpack .../aufs-tools_1%3a3.2+20130722-1.1ubuntu1_amd64.deb ...
Unpacking aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../cgroupfs-mount_1.2_all.deb ...
Unpacking cgroupfs-mount (1.2) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../libltdl7_2.4.6-0.1_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-0.1) ...
Selecting previously unselected package docker-ce.
Preparing to unpack .../docker-ce_17.03.3~ce-0~ubuntu-xenial_amd64.deb ...
Unpacking docker-ce (17.03.3~ce-0~ubuntu-xenial) ...
Processing triggers for libc-bin (2.23-0ubuntu10) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Setting up aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Setting up cgroupfs-mount (1.2) ...
Setting up libltdl7:amd64 (2.4.6-0.1) ...
Setting up docker-ce (17.03.3~ce-0~ubuntu-xenial) ...
Processing triggers for libc-bin (2.23-0ubuntu10) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Processing triggers for ureadahead (0.100.0-19) ...
installing kubernetes
Hit:1 http://security.ubuntu.com/ubuntu xenial-security InRelease
Hit:2 https://download.docker.com/linux/ubuntu xenial InRelease
Hit:3 http://mirrors.digitalocean.com/ubuntu xenial InRelease
Hit:4 http://mirrors.digitalocean.com/ubuntu xenial-updates InRelease
Hit:5 http://mirrors.digitalocean.com/ubuntu xenial-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
apt-transport-https is already the newest version (1.2.29ubuntu0.1).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 30 not upgraded.
OK
Hit:1 http://security.ubuntu.com/ubuntu xenial-security InRelease
Hit:2 https://download.docker.com/linux/ubuntu xenial InRelease
Hit:4 http://mirrors.digitalocean.com/ubuntu xenial InRelease
Hit:5 http://mirrors.digitalocean.com/ubuntu xenial-updates InRelease
Get:3 https://packages.cloud.google.com/apt kubernetes-xenial InRelease [8,993 B]
Hit:6 http://mirrors.digitalocean.com/ubuntu xenial-backports InRelease
Get:7 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 Packages [23.8 kB]
Fetched 32.8 kB in 0s (40.6 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  conntrack cri-tools ebtables kubernetes-cni socat
The following NEW packages will be installed:
  conntrack cri-tools ebtables kubeadm kubectl kubelet kubernetes-cni socat
0 upgraded, 8 newly installed, 0 to remove and 30 not upgraded.
Need to get 45.9 MB of archives.
After this operation, 264 MB of additional disk space will be used.
Get:2 http://mirrors.digitalocean.com/ubuntu xenial/main amd64 conntrack amd64 1:1.4.3-3 [27.3 kB]
Get:1 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 cri-tools amd64 1.12.0-00 [5,343 kB]
Get:7 http://mirrors.digitalocean.com/ubuntu xenial-updates/main amd64 ebtables amd64 2.0.10.4-3.4ubuntu2.16.04.2 [79.9 kB]
Get:3 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubernetes-cni amd64 0.6.0-00 [5,910 kB]
Get:8 http://mirrors.digitalocean.com/ubuntu xenial/universe amd64 socat amd64 1.7.3.1-1 [321 kB]
Get:4 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubelet amd64 1.13.3-00 [19.0 MB]
Get:5 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubectl amd64 1.13.3-00 [7,852 kB]
Get:6 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubeadm amd64 1.13.3-00 [7,364 kB]
Fetched 45.9 MB in 2s (18.1 MB/s)
Selecting previously unselected package conntrack.
(Reading database ... 54779 files and directories currently installed.)
Preparing to unpack .../conntrack_1%3a1.4.3-3_amd64.deb ...
Unpacking conntrack (1:1.4.3-3) ...
Selecting previously unselected package cri-tools.
Preparing to unpack .../cri-tools_1.12.0-00_amd64.deb ...
Unpacking cri-tools (1.12.0-00) ...
Selecting previously unselected package ebtables.
Preparing to unpack .../ebtables_2.0.10.4-3.4ubuntu2.16.04.2_amd64.deb ...
Unpacking ebtables (2.0.10.4-3.4ubuntu2.16.04.2) ...
Selecting previously unselected package kubernetes-cni.
Preparing to unpack .../kubernetes-cni_0.6.0-00_amd64.deb ...
Unpacking kubernetes-cni (0.6.0-00) ...
Selecting previously unselected package socat.
Preparing to unpack .../socat_1.7.3.1-1_amd64.deb ...
Unpacking socat (1.7.3.1-1) ...
Selecting previously unselected package kubelet.
Preparing to unpack .../kubelet_1.13.3-00_amd64.deb ...
Unpacking kubelet (1.13.3-00) ...
Selecting previously unselected package kubectl.
Preparing to unpack .../kubectl_1.13.3-00_amd64.deb ...
Unpacking kubectl (1.13.3-00) ...
Selecting previously unselected package kubeadm.
Preparing to unpack .../kubeadm_1.13.3-00_amd64.deb ...
Unpacking kubeadm (1.13.3-00) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Processing triggers for ureadahead (0.100.0-19) ...
Setting up conntrack (1:1.4.3-3) ...
Setting up cri-tools (1.12.0-00) ...
Setting up ebtables (2.0.10.4-3.4ubuntu2.16.04.2) ...
update-rc.d: warning: start and stop actions are no longer supported; falling back to defaults
Setting up kubernetes-cni (0.6.0-00) ...
Setting up socat (1.7.3.1-1) ...
Setting up kubelet (1.13.3-00) ...
Setting up kubectl (1.13.3-00) ...
Setting up kubeadm (1.13.3-00) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Processing triggers for ureadahead (0.100.0-19) ...
deploying kubernetes (with canal)...
[init] Using Kubernetes version: v1.13.3
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Activating the kubelet service
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [kubernetes-master kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 167.99.192.20]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [kubernetes-master localhost] and IPs [167.99.192.20 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [kubernetes-master localhost] and IPs [167.99.192.20 127.0.0.1 ::1]
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 24.503266 seconds
[uploadconfig] storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config-1.13" in namespace kube-system with the configuration for the kubelets in the cluster
[patchnode] Uploading the CRI Socket information "/var/run/dockershim.sock" to the Node API object "kubernetes-master" as an annotation
[mark-control-plane] Marking the node kubernetes-master as control-plane by adding the label "node-role.kubernetes.io/master=''"
[mark-control-plane] Marking the node kubernetes-master as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]
[bootstrap-token] Using token: 0tibg3.t4o1eo9ymmrcapv7
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstraptoken] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstraptoken] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstraptoken] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstraptoken] creating the "cluster-info" ConfigMap in the "kube-public" namespace
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes master has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now join any number of machines by running the following on each node
as root:

  kubeadm join 167.99.192.20:6443 --token 0tibg3.t4o1eo9ymmrcapv7 --discovery-token-ca-cert-hash sha256:c561fe843ffd6b7daeb2f16b2a12ab64b38e26130fb140a7e3aa074718e3eff0

clusterrole.rbac.authorization.k8s.io/calico created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/canal-flannel created
clusterrolebinding.rbac.authorization.k8s.io/canal-calico created
configmap/canal-config created
daemonset.extensions/canal created
customresourcedefinition.apiextensions.k8s.io/felixconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/bgpconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ippools.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/clusterinformations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/globalnetworkpolicies.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/networkpolicies.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/globalnetworksets.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/hostendpoints.crd.projectcalico.org created
serviceaccount/canal created
```

- Access the new server, clone the repository and run the `install-node.sh` script on the `kubernetes-node-01` server.

```bash
root@kubernetes-node-01:~# git clone https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes.git
Cloning into 'on-prem-or-cloud-agnostic-kubernetes'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 264 (delta 0), reused 0 (delta 0), pack-reused 259
Receiving objects: 100% (264/264), 42.04 KiB | 0 bytes/s, done.
Resolving deltas: 100% (114/114), done.
Checking connectivity... done.
root@kubernetes-node-01:~# cd on-prem-or-cloud-agnostic-kubernetes/
root@kubernetes-node-01:~/on-prem-or-cloud-agnostic-kubernetes# scripts/install-node.sh
installing docker
Get:1 http://security.ubuntu.com/ubuntu xenial-security InRelease [109 kB]
Hit:2 http://mirrors.digitalocean.com/ubuntu xenial InRelease
Get:3 http://mirrors.digitalocean.com/ubuntu xenial-updates InRelease [109 kB]
Get:4 http://security.ubuntu.com/ubuntu xenial-security/main Sources [144 kB]
Get:5 http://security.ubuntu.com/ubuntu xenial-security/restricted Sources [2,116 B]
Get:6 http://security.ubuntu.com/ubuntu xenial-security/universe Sources [102 kB]
Get:7 http://security.ubuntu.com/ubuntu xenial-security/multiverse Sources [3,420 B]
Get:8 http://security.ubuntu.com/ubuntu xenial-security/main amd64 Packages [616 kB]
Get:9 http://security.ubuntu.com/ubuntu xenial-security/main Translation-en [255 kB]
Get:10 http://mirrors.digitalocean.com/ubuntu xenial-backports InRelease [107 kB]
Get:11 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 Packages [427 kB]
Get:12 http://security.ubuntu.com/ubuntu xenial-security/universe Translation-en [172 kB]
Get:13 http://security.ubuntu.com/ubuntu xenial-security/multiverse amd64 Packages [5,600 B]
Get:14 http://security.ubuntu.com/ubuntu xenial-security/multiverse Translation-en [2,676 B]
Get:15 http://mirrors.digitalocean.com/ubuntu xenial/main Sources [868 kB]
Get:16 http://mirrors.digitalocean.com/ubuntu xenial/restricted Sources [4,808 B]
Get:17 http://mirrors.digitalocean.com/ubuntu xenial/universe Sources [7,728 kB]
Get:18 http://mirrors.digitalocean.com/ubuntu xenial/multiverse Sources [179 kB]
Get:19 http://mirrors.digitalocean.com/ubuntu xenial/universe amd64 Packages [7,532 kB]
Get:20 http://mirrors.digitalocean.com/ubuntu xenial/universe Translation-en [4,354 kB]
Get:21 http://mirrors.digitalocean.com/ubuntu xenial/multiverse amd64 Packages [144 kB]
Get:22 http://mirrors.digitalocean.com/ubuntu xenial/multiverse Translation-en [106 kB]
Get:23 http://mirrors.digitalocean.com/ubuntu xenial-updates/main Sources [331 kB]
Get:24 http://mirrors.digitalocean.com/ubuntu xenial-updates/restricted Sources [2,528 B]
Get:25 http://mirrors.digitalocean.com/ubuntu xenial-updates/universe Sources [248 kB]
Get:26 http://mirrors.digitalocean.com/ubuntu xenial-updates/multiverse Sources [8,764 B]
Get:27 http://mirrors.digitalocean.com/ubuntu xenial-updates/main amd64 Packages [915 kB]
Get:28 http://mirrors.digitalocean.com/ubuntu xenial-updates/main Translation-en [369 kB]
Get:29 http://mirrors.digitalocean.com/ubuntu xenial-updates/universe amd64 Packages [734 kB]
Get:30 http://mirrors.digitalocean.com/ubuntu xenial-updates/universe Translation-en [304 kB]
Get:31 http://mirrors.digitalocean.com/ubuntu xenial-updates/multiverse amd64 Packages [16.6 kB]
Get:32 http://mirrors.digitalocean.com/ubuntu xenial-updates/multiverse Translation-en [8,440 B]
Get:33 http://mirrors.digitalocean.com/ubuntu xenial-backports/main Sources [4,848 B]
Get:34 http://mirrors.digitalocean.com/ubuntu xenial-backports/universe Sources [6,740 B]
Get:35 http://mirrors.digitalocean.com/ubuntu xenial-backports/main amd64 Packages [7,280 B]
Get:36 http://mirrors.digitalocean.com/ubuntu xenial-backports/main Translation-en [4,456 B]
Get:37 http://mirrors.digitalocean.com/ubuntu xenial-backports/universe amd64 Packages [7,804 B]
Get:38 http://mirrors.digitalocean.com/ubuntu xenial-backports/universe Translation-en [4,184 B]
Fetched 25.9 MB in 27s (935 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
apt-transport-https is already the newest version (1.2.29ubuntu0.1).
ca-certificates is already the newest version (20170717~16.04.2).
curl is already the newest version (7.47.0-1ubuntu2.12).
software-properties-common is already the newest version (0.96.20.8).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 29 not upgraded.
OK
Hit:1 http://security.ubuntu.com/ubuntu xenial-security InRelease
Get:3 https://download.docker.com/linux/ubuntu xenial InRelease [66.2 kB]
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu xenial InRelease
Hit:4 http://lon1.mirrors.digitalocean.com/ubuntu xenial-updates InRelease
Get:5 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages [6,860 B]
Hit:6 http://lon1.mirrors.digitalocean.com/ubuntu xenial-backports InRelease
Fetched 73.1 kB in 0s (163 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  aufs-tools cgroupfs-mount libltdl7
Suggested packages:
  mountall
The following NEW packages will be installed:
  aufs-tools cgroupfs-mount docker-ce libltdl7
0 upgraded, 4 newly installed, 0 to remove and 29 not upgraded.
Need to get 19.5 MB of archives.
After this operation, 89.4 MB of additional disk space will be used.
Get:1 https://download.docker.com/linux/ubuntu xenial/stable amd64 docker-ce amd64 17.03.3~ce-0~ubuntu-xenial [19.4 MB]
Get:2 http://lon1.mirrors.digitalocean.com/ubuntu xenial/universe amd64 aufs-tools amd64 1:3.2+20130722-1.1ubuntu1 [92.9 kB]
Get:3 http://lon1.mirrors.digitalocean.com/ubuntu xenial/universe amd64 cgroupfs-mount all 1.2 [4,970 B]
Get:4 http://lon1.mirrors.digitalocean.com/ubuntu xenial/main amd64 libltdl7 amd64 2.4.6-0.1 [38.3 kB]
Fetched 19.5 MB in 1s (18.6 MB/s)
Selecting previously unselected package aufs-tools.
(Reading database ... 54504 files and directories currently installed.)
Preparing to unpack .../aufs-tools_1%3a3.2+20130722-1.1ubuntu1_amd64.deb ...
Unpacking aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../cgroupfs-mount_1.2_all.deb ...
Unpacking cgroupfs-mount (1.2) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../libltdl7_2.4.6-0.1_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-0.1) ...
Selecting previously unselected package docker-ce.
Preparing to unpack .../docker-ce_17.03.3~ce-0~ubuntu-xenial_amd64.deb ...
Unpacking docker-ce (17.03.3~ce-0~ubuntu-xenial) ...
Processing triggers for libc-bin (2.23-0ubuntu10) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Setting up aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Setting up cgroupfs-mount (1.2) ...
Setting up libltdl7:amd64 (2.4.6-0.1) ...
Setting up docker-ce (17.03.3~ce-0~ubuntu-xenial) ...
Processing triggers for libc-bin (2.23-0ubuntu10) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Processing triggers for ureadahead (0.100.0-19) ...
installing kubeadm and kubectl
Hit:1 https://download.docker.com/linux/ubuntu xenial InRelease
Hit:2 http://security.ubuntu.com/ubuntu xenial-security InRelease
Hit:3 http://mirrors.digitalocean.com/ubuntu xenial InRelease
Hit:4 http://mirrors.digitalocean.com/ubuntu xenial-updates InRelease
Hit:5 http://mirrors.digitalocean.com/ubuntu xenial-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
apt-transport-https is already the newest version (1.2.29ubuntu0.1).
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 30 not upgraded.
OK
Hit:1 https://download.docker.com/linux/ubuntu xenial InRelease
Hit:2 http://security.ubuntu.com/ubuntu xenial-security InRelease
Hit:4 http://mirrors.digitalocean.com/ubuntu xenial InRelease
Hit:5 http://mirrors.digitalocean.com/ubuntu xenial-updates InRelease
Hit:6 http://mirrors.digitalocean.com/ubuntu xenial-backports InRelease
Get:3 https://packages.cloud.google.com/apt kubernetes-xenial InRelease [8,993 B]
Get:7 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 Packages [23.8 kB]
Fetched 32.8 kB in 0s (41.4 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  conntrack cri-tools ebtables kubernetes-cni socat
The following NEW packages will be installed:
  conntrack cri-tools ebtables kubeadm kubectl kubelet kubernetes-cni socat
0 upgraded, 8 newly installed, 0 to remove and 30 not upgraded.
Need to get 45.9 MB of archives.
After this operation, 264 MB of additional disk space will be used.
Get:3 http://mirrors.digitalocean.com/ubuntu xenial/main amd64 conntrack amd64 1:1.4.3-3 [27.3 kB]
Get:1 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 cri-tools amd64 1.12.0-00 [5,343 kB]
Get:7 http://mirrors.digitalocean.com/ubuntu xenial-updates/main amd64 ebtables amd64 2.0.10.4-3.4ubuntu2.16.04.2 [79.9 kB]
Get:2 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubernetes-cni amd64 0.6.0-00 [5,910 kB]
Get:4 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubelet amd64 1.13.3-00 [19.0 MB]
Get:8 http://mirrors.digitalocean.com/ubuntu xenial/universe amd64 socat amd64 1.7.3.1-1 [321 kB]
Get:5 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubectl amd64 1.13.3-00 [7,852 kB]
Get:6 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubeadm amd64 1.13.3-00 [7,364 kB]
Fetched 45.9 MB in 2s (18.9 MB/s)
Selecting previously unselected package conntrack.
(Reading database ... 54779 files and directories currently installed.)
Preparing to unpack .../conntrack_1%3a1.4.3-3_amd64.deb ...
Unpacking conntrack (1:1.4.3-3) ...
Selecting previously unselected package cri-tools.
Preparing to unpack .../cri-tools_1.12.0-00_amd64.deb ...
Unpacking cri-tools (1.12.0-00) ...
Selecting previously unselected package ebtables.
Preparing to unpack .../ebtables_2.0.10.4-3.4ubuntu2.16.04.2_amd64.deb ...
Unpacking ebtables (2.0.10.4-3.4ubuntu2.16.04.2) ...
Selecting previously unselected package kubernetes-cni.
Preparing to unpack .../kubernetes-cni_0.6.0-00_amd64.deb ...
Unpacking kubernetes-cni (0.6.0-00) ...
Selecting previously unselected package socat.
Preparing to unpack .../socat_1.7.3.1-1_amd64.deb ...
Unpacking socat (1.7.3.1-1) ...
Selecting previously unselected package kubelet.
Preparing to unpack .../kubelet_1.13.3-00_amd64.deb ...
Unpacking kubelet (1.13.3-00) ...
Selecting previously unselected package kubectl.
Preparing to unpack .../kubectl_1.13.3-00_amd64.deb ...
Unpacking kubectl (1.13.3-00) ...
Selecting previously unselected package kubeadm.
Preparing to unpack .../kubeadm_1.13.3-00_amd64.deb ...
Unpacking kubeadm (1.13.3-00) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Processing triggers for ureadahead (0.100.0-19) ...
Setting up conntrack (1:1.4.3-3) ...
Setting up cri-tools (1.12.0-00) ...
Setting up ebtables (2.0.10.4-3.4ubuntu2.16.04.2) ...
update-rc.d: warning: start and stop actions are no longer supported; falling back to defaults
Setting up kubernetes-cni (0.6.0-00) ...
Setting up socat (1.7.3.1-1) ...
Setting up kubelet (1.13.3-00) ...
Setting up kubectl (1.13.3-00) ...
Setting up kubeadm (1.13.3-00) ...
Processing triggers for systemd (229-4ubuntu21.15) ...
Processing triggers for ureadahead (0.100.0-19) ...
```

- We need to run the following script on the `kubernetes-node-01` machine.

```bash
You can now join any number of machines by running the following on each node
as root:

  kubeadm join 167.99.192.20:6443 --token 0tibg3.t4o1eo9ymmrcapv7 --discovery-token-ca-cert-hash sha256:c561fe843ffd6b7daeb2f16b2a12ab64b38e26130fb140a7e3aa074718e3eff0
```

```bash
root@kubernetes-node-01:~/on-prem-or-cloud-agnostic-kubernetes# kubeadm join 167.99.192.20:6443 --token 0tibg3.t4o1eo9ymmrcapv7 --discovery-token-ca-cert-hash sha256:c561fe843ffd6b7daeb2f16b2a12ab64b38e26130fb140a7e3aa074718e3eff0
[preflight] Running pre-flight checks
[discovery] Trying to connect to API Server "167.99.192.20:6443"
[discovery] Created cluster-info discovery client, requesting info from "https://167.99.192.20:6443"
[discovery] Requesting info from "https://167.99.192.20:6443" again to validate TLS against the pinned public key
[discovery] Cluster info signature and contents are valid and TLS certificate validates against pinned roots, will use API Server "167.99.192.20:6443"
[discovery] Successfully established connection with API Server "167.99.192.20:6443"
[join] Reading configuration from the cluster...
[join] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -oyaml'
[kubelet] Downloading configuration for the kubelet from the "kubelet-config-1.13" ConfigMap in the kube-system namespace
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Activating the kubelet service
[tlsbootstrap] Waiting for the kubelet to perform the TLS Bootstrap...
[patchnode] Uploading the CRI Socket information "/var/run/dockershim.sock" to the Node API object "kubernetes-node-01" as an annotation

This node has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.

Run 'kubectl get nodes' on the master to see this node join the cluster.
```

- We need to create a user on the `kubernetes-master` by executing the `create-user.sh` script.

> create-user.sh

```bash
#!/bin/bash
groupadd ubuntu
useradd -g ubuntu -G admin -s /bin/bash -d /home/ubuntu ubuntu
mkdir -p /home/ubuntu
cp -r /root/.ssh /home/ubuntu/.ssh
chown -R ubuntu:ubuntu /home/ubuntu
echo "ubuntu ALL=(ALL:ALL) NOPASSWD:ALL" >> /etc/sudoers

# create .kube/config
mkdir -p ~ubuntu/.kube
cp -i /etc/kubernetes/admin.conf ~ubuntu/.kube/config
chown ubuntu:ubuntu ~ubuntu/.kube/config
```

- Execute the script

```bash
root@kubernetes-master:~/on-prem-or-cloud-agnostic-kubernetes# scripts/create-user.sh
root@kubernetes-master:~/on-prem-or-cloud-agnostic-kubernetes#
```

- Logout

```
root@kubernetes-master:~/on-prem-or-cloud-agnostic-kubernetes# logout
Connection to 167.99.192.20 closed.
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Login again

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey ubuntu@167.99.192.20
Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 4.4.0-142-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

33 packages can be updated.
19 updates are security updates.

New release '18.04.2 LTS' available.
Run 'do-release-upgrade' to upgrade to it.



The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@kubernetes-master:~$
```

- We need to execute the part of the script to create the user on the `kubernetes-node-01` machine:

```bash
#!/bin/bash
groupadd ubuntu
useradd -g ubuntu -G admin -s /bin/bash -d /home/ubuntu ubuntu
mkdir -p /home/ubuntu
cp -r /root/.ssh /home/ubuntu/.ssh
chown -R ubuntu:ubuntu /home/ubuntu
echo "ubuntu ALL=(ALL:ALL) NOPASSWD:ALL" >> /etc/sudoers
```

```bash
root@kubernetes-node-01:~# groupadd ubuntu
groupadd: group 'ubuntu' already exists
root@kubernetes-node-01:~# useradd -g ubuntu -G admin -s /bin/bash -d /home/ubuntu ubuntu
useradd: user 'ubuntu' already exists
root@kubernetes-node-01:~# mkdir -p /home/ubuntu
root@kubernetes-node-01:~# cp -r /root/.ssh /home/ubuntu/.ssh
root@kubernetes-node-01:~# chown -R ubuntu:ubuntu /home/ubuntu
root@kubernetes-node-01:~# echo "ubuntu ALL=(ALL:ALL) NOPASSWD:ALL" >> /etc/sudoers
```

- logout

```bash
root@kubernetes-node-01:~# logout
Connection to 167.99.202.93 closed.
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Login again with the `ubuntu` user

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey ubuntu@167.99.202.93
Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 4.4.0-142-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

33 packages can be updated.
19 updates are security updates.

New release '18.04.2 LTS' available.
Run 'do-release-upgrade' to upgrade to it.



The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@kubernetes-node-01:~$
```

- Check if the clusters are up running the following command on the `kubernetes-master` server.

```bash
ubuntu@kubernetes-master:~$ kubectl get nodes
NAME                 STATUS   ROLES    AGE   VERSION
kubernetes-master    Ready    master   29m   v1.13.3
kubernetes-node-01   Ready    <none>   22m   v1.13.3
```

- Ensure it works running checking if the following image is working

```bash
ubuntu@kubernetes-master:~$ kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.4 --port=8080
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/hello-minikube created
ubuntu@kubernetes-master:~$ kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
hello-minikube-5c856cbf98-hh6j4   1/1     Running   0          29s
ubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$ kubectl expose deployment hello-minikube --type=NodePort
service/hello-minikube exposed
ubuntu@kubernetes-master:~$ kubectl get svc
NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
hello-minikube   NodePort    10.100.159.91   <none>        8080:32101/TCP   101s
kubernetes       ClusterIP   10.96.0.1       <none>        443/TCP          35m
ubuntu@kubernetes-master:~$
```

- It has opened the `32101` port. So we have to check the `kubernetes-node-01` IP (`167.99.202.93`) with that port to see if it works. We can do that on another terminal. It has to be done from the machine that has been put on the `Firewall`, otherwise it won't have access.

```bash
Last login: Wed Feb 27 18:41:13 2019 from 80.30.89.65
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl 167.99.202.93:32101
CLIENT VALUES:
client_address=167.99.202.93
command=GET
real path=/
query=nil
request_version=1.1
request_uri=http://167.99.202.93:8080/

SERVER VALUES:
server_version=nginx: 1.10.0 - lua: 10001

HEADERS RECEIVED:
accept=*/*
host=167.99.202.93:32101
user-agent=curl/7.58.0
BODY:
-no body in request-root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl 167.99.202.93:32101/directory
CLIENT VALUES:
client_address=167.99.202.93
command=GET
real path=/directory
query=nil
request_version=1.1
request_uri=http://167.99.202.93:8080/directory

SERVER VALUES:
server_version=nginx: 1.10.0 - lua: 10001

HEADERS RECEIVED:
accept=*/*
host=167.99.202.93:32101
user-agent=curl/7.58.0
BODY:
-no body in request-root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

## Section: 9. On-Prem or Cloud Agnostic Kubernetes

### 124. Managing TLS Certs with Cert-Manager

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ManagingTLSCertsWithCertManager.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ManagingTLSCertsWithCertManager2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ManagingTLSCertsWithCertManager3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ManagingTLSCertsWithCertManager4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ManagingTLSCertsWithCertManager5.png)

### 125. Demo: Cert-Manager (Part I)

- We can find more information about installing helm on the `96. Demo: Helm` chapter.

- We need to install ingress:

```bash
ubuntu@kubernetes-master:~$ helm install --name my-ingress stable/nginx-ingress --set controller.kind=Daemon.Set --set controller.service.type=NodePort --set controller.hostNetwork=true
NAME:   my-ingress
LAST DEPLOYED: Sun Apr  7 05:26:03 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1beta1/Deployment
NAME                                      AGE
my-ingress-nginx-ingress-default-backend  0s

==> v1/Pod(related)

NAME                                                       READY  STATUS             RESTARTS  AGE
my-ingress-nginx-ingress-default-backend-6cd569777d-tdqz5  0/1    ContainerCreating  0         0s

==> v1beta1/ClusterRole

NAME                      AGE
my-ingress-nginx-ingress  0s

==> v1beta1/ClusterRoleBinding
my-ingress-nginx-ingress  0s

==> v1beta1/Role
my-ingress-nginx-ingress  0s

==> v1/Service
my-ingress-nginx-ingress-controller       0s
my-ingress-nginx-ingress-default-backend  0s

==> v1/ConfigMap
my-ingress-nginx-ingress-controller  0s

==> v1/ServiceAccount
my-ingress-nginx-ingress  0s

==> v1beta1/RoleBinding
my-ingress-nginx-ingress  0s


NOTES:
The nginx-ingress controller has been installed.
Get the application URL by running these commands:
  export HTTP_NODE_PORT=$(kubectl --namespace default get services -o jsonpath="{.spec.ports[0].nodePort}" my-ingress-nginx-ingress-controller)
  export HTTPS_NODE_PORT=$(kubectl --namespace default get services -o jsonpath="{.spec.ports[1].nodePort}" my-ingress-nginx-ingress-controller)
  export NODE_IP=$(kubectl --namespace default get nodes -o jsonpath="{.items[0].status.addresses[1].address}")

  echo "Visit http://$NODE_IP:$HTTP_NODE_PORT to access your application via HTTP."
  echo "Visit https://$NODE_IP:$HTTPS_NODE_PORT to access your application via HTTPS."

An example Ingress that makes use of the controller:

  apiVersion: extensions/v1beta1
  kind: Ingress
  metadata:
    annotations:
      kubernetes.io/ingress.class: nginx
    name: example
    namespace: foo
  spec:
    rules:
      - host: www.example.com
        http:
          paths:
            - backend:
                serviceName: exampleService
                servicePort: 80
              path: /
    # This section is only required if TLS is to be enabled for the Ingress
    tls:
        - hosts:
            - www.example.com
          secretName: example-tls

If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

  apiVersion: v1
  kind: Secret
  metadata:
    name: example-tls
    namespace: foo
  data:
    tls.crt: <base64 encoded cert>
    tls.key: <base64 encoded key>
  type: kubernetes.io/tls

```

```bash
ubuntu@kubernetes-master:~$ kubectl get pod
NAME                                                        READY   STATUS    RESTARTS   AGE
my-ingress-nginx-ingress-default-backend-6cd569777d-tdqz5   1/1     Running   0          108s
ubuntu@kubernetes-master:~$
```

### 126. Demo: Cert-Manager (Part II)

- We need to open the ports

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII7.png)

- We are going to use the `cert-manager/myapp.yaml` document to create a `deployment` with its `service`.

> cert-manager/myapp.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  ports:
    - port: 3000
      targetPort: 3000
      protocol: TCP
  selector:
    app: myapp
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl apply -f myapp.yaml
deployment.extensions/myapp created
service/myapp created
```

- We are going to use the `cert-manager/myapp-ingress.yaml` document to create an `Ingress` pod.

> cert-manager/myapp-ingress.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
  name: myapp
  namespace: default
spec:
  # tls:
  # - secretName: my-app-tls-staging
  #   hosts:
  #     - myapp.peelmicro.com
  rules:
    - host: myapp.peelmicro.com
      http:
        paths:
          - backend:
              serviceName: myapp
              servicePort: 3000
            path: /
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl apply -f myapp-ingress.yaml
ingress.extensions/myapp created
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl get all
NAME                                                            READY   STATUS    RESTARTS   AGE
pod/my-ingress-nginx-ingress-default-backend-6cd569777d-tdqz5   1/1     Running   0          45m
pod/myapp-856785997-ncx88                                       1/1     Running   0          3m5s

NAME                                               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
service/kubernetes                                 ClusterIP   10.96.0.1        <none>        443/TCP                      38d
service/my-ingress-nginx-ingress-controller        NodePort    10.106.2.183     <none>        80:32346/TCP,443:32392/TCP   45m
service/my-ingress-nginx-ingress-default-backend   ClusterIP   10.110.246.231   <none>        80/TCP                       45m
service/myapp                                      ClusterIP   10.104.28.148    <none>        3000/TCP                     3m5s

NAME                                                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/my-ingress-nginx-ingress-default-backend   1/1     1            1           45m
deployment.apps/myapp                                      1/1     1            1           3m5s

NAME                                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/my-ingress-nginx-ingress-default-backend-6cd569777d   1         1         1       45m
replicaset.apps/myapp-856785997                                       1         1         1       3m5s
```

- We need to add the `kubernetes-node` droplet IP to the `myapp.peelmicro.com` DNS.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII9.png)

167.99.202.93

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII11.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII12.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII13.png)

- Even though I open the 80 port I receive the following error:

```bash
ubuntu@kubernetes-master:~$ curl 167.99.202.93
curl: (7) Failed to connect to 167.99.202.93 port 80: Connection refused
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ curl myapp.peelmicro.com
curl: (6) Could not resolve host: myapp.peelmicro.com
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII14.png)

- We are going to install `cert-manager`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ helm install --name cert-manager --namespace kube-system stable/cert-manager
Error: validation failed: [unable to recognize "": no matches for kind "Certificate" in version "certmanager.k8s.io/v1alpha1", unable to recognize "": no matches for kind "Certificate" in version "certmanager.k8s.io/v1alpha1", unable to recognize "": no matches for kind "Issuer" in version "certmanager.k8s.io/v1alpha1", unable to recognize "": no matches for kind "Issuer" in version "certmanager.k8s.io/v1alpha1"]
```

- We need to execute the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.6/deploy/manifests/00-crds.yaml
customresourcedefinition.apiextensions.k8s.io/certificates.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/issuers.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/clusterissuers.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/orders.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/challenges.certmanager.k8s.io created
```

- It should work now.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ helm install --name cert-manager --namespace kube-system stable/cert-manager
NAME:   cert-manager
LAST DEPLOYED: Sun Apr  7 07:03:12 2019
NAMESPACE: kube-system
STATUS: DEPLOYED

RESOURCES:
==> v1beta1/ClusterRole
NAME                          AGE
cert-manager-webhook-ca-sync  0s
cert-manager                  0s

==> v1/Pod(related)

NAME                                   READY  STATUS             RESTARTS  AGE
cert-manager-webhook-67cfb86d56-t2l6s  0/1    ContainerCreating  0         0s
cert-manager-67884fcbfc-hslwp          0/1    ContainerCreating  0         0s
cert-manager-webhook-ca-sync-tmmgb     0/1    ContainerCreating  0         0s

==> v1beta1/RoleBinding

NAME                                                AGE
cert-manager-webhook:webhook-authentication-reader  0s

==> v1beta1/Deployment
cert-manager-webhook  0s
cert-manager          0s

==> v1beta1/APIService
v1beta1.admission.certmanager.k8s.io  0s

==> v1/ConfigMap
cert-manager-webhook-ca-sync  1s

==> v1/Service
cert-manager-webhook  0s

==> v1/Job
cert-manager-webhook-ca-sync  0s

==> v1beta1/ValidatingWebhookConfiguration
cert-manager-webhook  0s

==> v1alpha1/Certificate
cert-manager-webhook-webhook-tls  0s
cert-manager-webhook-ca           0s

==> v1alpha1/Issuer
cert-manager-webhook-ca        0s
cert-manager-webhook-selfsign  0s

==> v1/ServiceAccount
cert-manager-webhook-ca-sync  1s
cert-manager-webhook          1s
cert-manager                  1s

==> v1/ClusterRole
cert-manager-webhook:webhook-requester  0s
cert-manager-view                       0s
cert-manager-edit                       0s

==> v1beta1/ClusterRoleBinding
cert-manager-webhook-ca-sync         0s
cert-manager-webhook:auth-delegator  0s
cert-manager                         0s

==> v1beta1/CronJob
cert-manager-webhook-ca-sync  0s


NOTES:
cert-manager has been deployed successfully!

In order to begin issuing certificates, you will need to set up a ClusterIssuer
or Issuer resource (for example, by creating a 'letsencrypt-staging' issuer).

More information on the different types of issuers and how to configure them
can be found in our documentation:

https://cert-manager.readthedocs.io/en/latest/reference/issuers.html

For information on how to configure cert-manager to automatically provision
Certificates for Ingress resources, take a look at the `ingress-shim`
documentation:

https://cert-manager.readthedocs.io/en/latest/reference/ingress-shim.html
```

- We are going to use `cert-manager/issuer-staging.yaml` and the `cert-manager/issuer-prod.yaml` documents to create an `Issuer` pod.

> cert-manager/issuer-staging.yaml

```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: Issuer
metadata:
  name: myapp-letsencrypt-staging
  namespace: default
spec:
  acme:
    # The ACME server URL
    server: https://acme-stating.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: juanp_perez@msn.com
    privateKeySecretRef:
      name: myapp-letsencrypt-staging
    # Enable HTTP01 validations
    http01: {}
```

> cert-manager/issuer-prod.yaml

```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: Issuer
metadata:
  name: myapp-letsencrypt-prod
spec:
  acme:
    # The ACME server URL
    server: https://acme-v01.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: juanp_perez@msn.com
    privateKeySecretRef:
      name: myapp-letsencrypt-prod
    # Enable HTTP01 validations
    http01: {}
```

- It is not working.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl create -f issuer-staging.yaml
Error from server (InternalError): error when creating "issuer-staging.yaml": Internal error occurred: failed calling webhook "issuers.admission.certmanager.k8s.io": the server is currently unable to handle the request
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl create -f issuer-prod.yaml
Error from server (InternalError): error when creating "issuer-prod.yaml": Internal error occurred: failed calling webhook "issuers.admission.certmanager.k8s.io": the server is currently unable to handle the request
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII15.png)

- We are going to use `cert-manager/certificate-staging.yaml` and the `cert-manager/certificate-prod.yaml` documents to create a `Certificate` pod.

> cert-manager/certificate-staging.yaml

```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata:
  name: myapp
  namespace: default
spec:
  secretName: myapp-tls-staging
  issuerRef:
    name: myapp-letsencrypt-staging
  commonName: myapp.peelmicro.com
  # dnsNames:
  # - www.myapp.peelmicro.com
  acme:
    config:
      - http01:
        ingress: myapp
    domains:
      - myapp.peelmicro.com
    # - www.myapp.peelmicro.com
```

> cert-manager/certificate-prod.yaml

```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata:
  name: myapp
  namespace: default
spec:
  secretName: myapp-tls-prod
  issuerRef:
    name: myapp-letsencrypt-prod
  commonName: myapp.peelmicro.com
  # dnsNames:
  # - www.myapp.peelmicro.com
  acme:
    config:
      - http01:
        ingress: myapp
    domains:
      - myapp.peelmicro.com
    # - www.myapp.peelmicro.com
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/cert-manager$ kubectl create -f certificate-staging.yaml
Error from server (InternalError): error when creating "certificate-staging.yaml": Internal error occurred: failed calling webhook "certificates.admission.certmanager.k8s.io": the server is currently unable to handle the request
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII16.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII17.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII18.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII19.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII20.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII21.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII22.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII23.png)

- We need to use the production certificate to make `Google Chrome` recognises it.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII24.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII25.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII26.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII27.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII28.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII29.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII25.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII30.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII31.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII32.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII33.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII34.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII35.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII36.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII37.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoCertManagerPartII38.png)

## Section: 10. Course Completion

### 127. Congratulations

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Congratulations.png)

### 128. Bonus Lecture: Advanced Kubernetes Usage Course

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AdvancedKubernetesUsageCourse.png)

- [Edward Viaene](https://www.udemy.com/user/ward-viaene/)

- [Learn DevOps: On-Prem or Cloud Agnostic Kubernetes](https://www.udemy.com/learn-devops-on-prem-or-cloud-agnostic-kubernetes/)

- [Learn DevOps: Advanced Kubernetes Usage](https://www.udemy.com/learn-devops-advanced-kubernetes-usage/)

- We need to delete the `kubernetes droplets` from `Digital Ocean`

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TheEnd8.png)

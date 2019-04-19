# Learn DevOps: The Complete Kubernetes Course (Part 2)

> Github Repositories

- [learn-devops-the-complete-kubernetes-course](https://github.com/peelmicro/learn-devops-the-complete-kubernetes-course).
- [on-prem-or-cloud-agnostic-kubernetes](https://github.com/peelmicro/on-prem-or-cloud-agnostic-kubernetes).
- [kubernetes-coursee](https://github.com/peelmicro/kubernetes-course).
- [http-echo](https://github.com/peelmicro/http-echo).

The [Learn DevOps: The Complete Kubernetes Course ](https://www.udemy.com/learn-devops-the-complete-kubernetes-course//) Udemy course helps learn how Kubernetes will run and manage your containerized applications and to build, deploy, use, and maintain Kubernetes.

> Other parts:

- [Learn DevOps: The Complete Kubernetes Course (Part 1)](./cicd-learn-devops-the-complete-kubernetes-course-1.md)
- [Learn DevOps: The Complete Kubernetes Course (Part 3)](./cicd-learn-devops-the-complete-kubernetes-course-3.md)
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

### 41. Demo: Pod Lifecycle

- We are going to execute the `pod-lifecycle/lifecycle.yaml` deployment

> pod-lifecycle/lifecycle.yaml

```yaml
kind: Deployment
apiVersion: apps/v1beta1
metadata:
  name: lifecycle
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: lifecycle
    spec:
      initContainers:
        - name: init
          image: busybox
          command: ["sh", "-c", "sleep 10"]
      containers:
        - name: lifecycle-container
          image: busybox
          command:
            [
              "sh",
              "-c",
              'echo $(date +%s): Running >> /timing && echo "The app is running!" && /bin/sleep 120',
            ]
          readinessProbe:
            exec:
              command:
                ["sh", "-c", "echo $(date +%s): readinessProbe >> /timing"]
            initialDelaySeconds: 35
          livenessProbe:
            exec:
              command:
                ["sh", "-c", "echo $(date +%s): livenessProbe >> /timing"]
            initialDelaySeconds: 35
            timeoutSeconds: 30
          lifecycle:
            postStart:
              exec:
                command:
                  [
                    "sh",
                    "-c",
                    "echo $(date +%s): postStart >> /timing && sleep 10 && echo $(date +%s): end postStart >> /timing",
                  ]
            preStop:
              exec:
                command:
                  [
                    "sh",
                    "-c",
                    "echo $(date +%s): preStop >> /timing && sleep 10",
                  ]
```

- On one shell execute

```bash
kubernetes-course$ watch -n1 kubectl get pods
```

```
NAME                         READY   STATUS     RESTARTS   AGE
lifecycle-79655dfc59-d5njq   0/1     Init:0/1   0          6s
```

```bash
Every 1.0s: kubectl get pods                                                             Mon Mar 18 18:32:21 2019

NAME                         READY   STATUS    RESTARTS   AGE
lifecycle-79655dfc59-d5njq   0/1     Running   0          45s

```

```bash
Every 1.0s: kubectl get pods                                                             Mon Mar 18 18:33:08 2019

NAME                         READY   STATUS    RESTARTS   AGE
lifecycle-79655dfc59-d5njq   1/1     Running   0          91s
```

```bash
Every 1.0s: kubectl get pods                                                             Mon Mar 18 18:36:15 2019

NAME                         READY   STATUS             RESTARTS   AGE
lifecycle-79655dfc59-d5njq   0/1     CrashLoopBackOff   1          4m38s
```

```bash
Every 1.0s: kubectl get pods                                                             Mon Mar 18 18:36:38 2019

NAME                         READY   STATUS    RESTARTS   AGE
lifecycle-79655dfc59-d5njq   0/1     Running   2          5m1s
```

```bash
Every 1.0s: kubectl get pods                                                             Mon Mar 18 18:37:22 2019

NAME                         READY   STATUS    RESTARTS   AGE
lifecycle-79655dfc59-d5njq   1/1     Running   2          5m45s
```

- On the other shell create the deployment

```bash
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   19d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f pod-lifecycle/lifecycle.yaml
deployment.apps/lifecycle created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl exec -t lifecycle-79655dfc59-d5njq -- cat /timing
1552934034: Running
1552934034: postStart
1552934044: end postStart
1552934069: livenessProbe
1552934078: readinessProbe
1552934079: livenessProbe
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 42. Secrets

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Secrets.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Secrets2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Secrets3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Secrets4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Secrets5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Secrets6.png)

### 43. Demo: Credentials using Volumes

- We are going to use the `deployment/helloworld-secrets.yml` document to create the deployment.

> deployment/helloworld-secrets.yml

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secrets
type: Opaque
data:
  username: cm9vdA==
  password: cGFzc3dvcmQ=
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld-secrets.yml
secret/db-secrets created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   19d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get deployment
No resources found.
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are also going to use the `deployment/helloworld-secrets-volumes.yml` document to create another deployment.

> deployment/helloworld-secrets-volumes.yml

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
          volumeMounts:
            - name: cred-volume
              mountPath: /etc/creds
              readOnly: true
      volumes:
        - name: cred-volume
          secret:
            secretName: db-secrets
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f deployment/helloworld-secrets-volumes.yml
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                         READY   STATUS    RESTARTS   AGE
pod/helloworld-deployment-6555768dbf-cvrg4   1/1     Running   0          11s
pod/helloworld-deployment-6555768dbf-mnr2z   1/1     Running   0          11s
pod/helloworld-deployment-6555768dbf-qvlmf   1/1     Running   0          11s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   19d

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   3/3     3            3           11s

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-6555768dbf   3         3         3       11s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod/helloworld-deployment-6555768dbf-cvrg4
Name:               helloworld-deployment-6555768dbf-cvrg4
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Mon, 18 Mar 2019 19:00:53 +0000
Labels:             app=helloworld
                    pod-template-hash=6555768dbf
Annotations:        cni.projectcalico.org/podIP: 10.244.1.53/32
Status:             Running
IP:                 10.244.1.53
Controlled By:      ReplicaSet/helloworld-deployment-6555768dbf
Containers:
  docker-nodejs-demo:
    Container ID:   docker://3e9df0a8410e5b41fbb2808cb77c6269e4e0c7656593dd35980daf749785d85a
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 18 Mar 2019 19:00:57 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /etc/creds from cred-volume (ro)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  cred-volume:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  db-secrets
    Optional:    false
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
  Normal  Scheduled  111s  default-scheduler            Successfully assigned default/helloworld-deployment-6555768dbf-cvrg4 to kubernetes-node-01
  Normal  Pulling    110s  kubelet, kubernetes-node-01  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled     107s  kubelet, kubernetes-node-01  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created    107s  kubelet, kubernetes-node-01  Created container
  Normal  Started    107s  kubelet, kubernetes-node-01  Started container
```

- We can access at the volume inside the pod

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl exec helloworld-deployment-6555768dbf-cvrg4 -i -t -- /bin/bash
root@helloworld-deployment-6555768dbf-cvrg4:/app# cat /etc/creds/username
rootroot@helloworld-deployment-6555768dbf-cvrg4:/app# cat /etc/creds/password
passwordroot@helloworld-deployment-6555768dbf-cvrg4:/app# exit
exit
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 44. Demo: Running Wordpress on Kubernetes

- We are going to use the `wordpress/wordpress-secrets.yml` document to create the secret with the password

> wordpress/wordpress-secrets.yml

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: wordpress-secrets
type: Opaque
data:
  db-password: cGFzc3dvcmQ=
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f wordpress/wordpress-secrets.yml
secret/wordpress-secrets created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `wordpress/wordpress-single-deployment-no-volumes.yml` document to create the deployment.

> wordpress/wordpress-single-deployment-no-volumes.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: wordpress-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: wordpress
    spec:
      containers:
        - name: wordpress
          image: wordpress:4-php7.0
          ports:
            - name: http-port
              containerPort: 80
          env:
            - name: WORDPRESS_DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: db-password
            - name: WORDPRESS_DB_HOST
              value: 127.0.0.1
        - name: mysql
          image: mysql:5.7
          ports:
            - name: mysql-port
              containerPort: 3306
          env:
            - name: MYSQL_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: db-password
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f wordpress/wordpress-single-deployment-no-volumes.yml
deployment.extensions/wordpress-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS              RESTARTS   AGE
pod/wordpress-deployment-6958b7b48f-rpvzz   0/2     ContainerCreating   0          4s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   19d

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   0/1     1            0           4s

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-6958b7b48f   1         1         0       4s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS    RESTARTS   AGE
pod/wordpress-deployment-6958b7b48f-rpvzz   2/2     Running   0          49s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   19d

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   1/1     1            1           49s

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-6958b7b48f   1         1         1       49s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod/wordpress-deployment-6958b7b48f-rpvzz
Name:               wordpress-deployment-6958b7b48f-rpvzz
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Mon, 18 Mar 2019 19:21:07 +0000
Labels:             app=wordpress
                    pod-template-hash=6958b7b48f
Annotations:        cni.projectcalico.org/podIP: 10.244.1.54/32
Status:             Running
IP:                 10.244.1.54
Controlled By:      ReplicaSet/wordpress-deployment-6958b7b48f
Containers:
  wordpress:
    Container ID:   docker://cc9f8cb9b4d9b846e567e09b6b51d7534e6376e3c35e5812bd65eb2246d56279
    Image:          wordpress:4-php7.0
    Image ID:       docker-pullable://wordpress@sha256:c24c534fa99c17f7b0923d6ffa791b0f7fb43a821de5bc09564e46ae09d9966a
    Port:           80/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 18 Mar 2019 19:21:21 +0000
    Ready:          True
    Restart Count:  0
    Environment:
      WORDPRESS_DB_PASSWORD:  <set to the key 'db-password' in secret 'wordpress-secrets'>  Optional: false
      WORDPRESS_DB_HOST:      127.0.0.1
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rtvbw (ro)
  mysql:
    Container ID:   docker://05cbc1c93f22c75956d0a5cd0fd80a61726f6878c21ee8525515d8b201e02a0d
    Image:          mysql:5.7
    Image ID:       docker-pullable://mysql@sha256:de482b2b0fdbe5bb142462c07c5650a74e0daa31e501bc52448a2be10f384e6d
    Port:           3306/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 18 Mar 2019 19:21:33 +0000
    Ready:          True
    Restart Count:  0
    Environment:
      MYSQL_ROOT_PASSWORD:  <set to the key 'db-password' in secret 'wordpress-secrets'>  Optional: false
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
  Normal  Scheduled  114s  default-scheduler            Successfully assigned default/wordpress-deployment-6958b7b48f-rpvzz to kubernetes-node-01
  Normal  Pulling    114s  kubelet, kubernetes-node-01  pulling image "wordpress:4-php7.0"
  Normal  Pulled     101s  kubelet, kubernetes-node-01  Successfully pulled image "wordpress:4-php7.0"
  Normal  Created    101s  kubelet, kubernetes-node-01  Created container
  Normal  Started    101s  kubelet, kubernetes-node-01  Started container
  Normal  Pulling    101s  kubelet, kubernetes-node-01  pulling image "mysql:5.7"
  Normal  Pulled     90s   kubelet, kubernetes-node-01  Successfully pulled image "mysql:5.7"
  Normal  Created    90s   kubelet, kubernetes-node-01  Created container
  Normal  Started    89s   kubelet, kubernetes-node-01  Started container
```

- We are going to use the `wordpress/wordpress-service.yml` document to crreate the service to access `wordpress`

> wordpress/wordpress-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: wordpress-service
spec:
  ports:
    - port: 31001
      nodePort: 31001
      targetPort: http-port
      protocol: TCP
  selector:
    app: wordpress
  type: NodePort
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f wordpress/wordpress-service.yml
service/wordpress-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS    RESTARTS   AGE
pod/wordpress-deployment-6958b7b48f-rpvzz   2/2     Running   0          6m26s

NAME                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)           AGE
service/kubernetes          ClusterIP   10.96.0.1       <none>        443/TCP           19d
service/wordpress-service   NodePort    10.110.18.178   <none>        31001:31001/TCP   17s

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   1/1     1            1           6m26s

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-6958b7b48f   1         1         1       6m26s
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes7.png)

- The information is not persisted. If the containers are killed everything is lost.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pods
NAME                                    READY   STATUS    RESTARTS   AGE
wordpress-deployment-6958b7b48f-rpvzz   2/2     Running   0          18m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete pod  wordpress-deployment-6958b7b48f-rpvzz
pod "wordpress-deployment-6958b7b48f-rpvzz" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- The pod is recreated:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                        READY   STATUS    RESTARTS   AGE
pod/wordpress-deployment-6958b7b48f-92vsl   2/2     Running   0          54s

NAME                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)           AGE
service/kubernetes          ClusterIP   10.96.0.1       <none>        443/TCP           19d
service/wordpress-service   NodePort    10.110.18.178   <none>        31001:31001/TCP   13m

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   1/1     1            1           20m

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-6958b7b48f   1         1         1       20m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes8.png)

- It starts again

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoRunningWordpressOnKubernetes9.png)

### 45. WebUI

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/WebUI.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/WebUI2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/WebUI3.png)

- We can get more information on [Kubernetes Dashboard](https://github.com/kubernetes/dashboard)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/WebUI4.png)

### 46. Demo: Web UI in Kops

- We can see the `dashboard/README.md` document to see how to implement

> dashboard/README.md

```md
# Setting up the dashboard

## Start dashboard

Create dashboard:
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml

## Create user

Create sample user (if using RBAC - on by default on new installs with kops / kubeadm):
kubectl create -f sample-user.yaml

## Get login token:

kubectl -n kube-system get secret | grep admin-user
kubectl -n kube-system describe secret admin-user-token-<id displayed by previous command>

## Login to dashboard

Go to http://api.yourdomain.com:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login

Login: admin
Password: the password that is listed in ~/.kube/config (open file in editor and look for "password: ..."

Choose for login token and enter the login token from the previous step
```

Create dashboard:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
secret/kubernetes-dashboard-certs created
serviceaccount/kubernetes-dashboard created
role.rbac.authorization.k8s.io/kubernetes-dashboard-minimal created
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard-minimal created
deployment.apps/kubernetes-dashboard created
service/kubernetes-dashboard created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$

```

- We are going to use the `dashboard/sample-user.yaml` Service Account to create the `admin user`

> dashboard/sample-user.yaml

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: admin-user
    namespace: kube-system
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f dashboard/sample-user.yaml
serviceaccount/admin-user created
clusterrolebinding.rbac.authorization.k8s.io/admin-user created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

Get login token:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl -n kube-system get secret | grep admin-user
admin-user-token-8zffr                           kubernetes.io/service-account-token   3      103s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl -n kube-system describe secret admin-user-token-8zffr
Name:         admin-user-token-8zffr
Namespace:    kube-system
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: admin-user
              kubernetes.io/service-account.uid: 82341687-4a07-11e9-abeb-babbda5ce12f

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1025 bytes
namespace:  11 bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLTh6ZmZyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI4MjM0MTY4Ny00YTA3LTExZTktYWJlYi1iYWJiZGE1Y2UxMmYiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.slMXCeJFSBO3zsyVFIuIbX7j4iL-EqyEaxeJUugluQI7YuL63o3DEAlzkzkUy3tAokiU-t5sxsc05MIgX5jcnOjy00FOywCXDj5BDmDEdYvYKJ71vfyQ28vIszN1EcJc8rg7H_HrgvIe4Y4IwgAyx2SzNVpeEj6ofF64Yqyq9A7oCy7GKVg4BJX6TXunjh2fKDdFCHJfULMzBsxdkSF6egdDY8D-kKi48QBqS30DgKQb5jmX2zMA1C3ocC_iEVbCodgC6aE4N-nDN8eR9ghgDq86WmbOq0OHUSiWR6UnhRhd-a9tDMtuXRiIgC7V_dyWMQgSbJlxA4ZvJ3jQ9I_hRA
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use this token to login instead of using a certificate.

- In order to get the password we can use:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl config view
```

```yaml
apiVersion: v1
clusters:
  - cluster:
      certificate-authority-data: DATA+OMITTED
      server: https://167.99.192.20:6443
    name: kubernetes
contexts:
  - context:
      cluster: kubernetes
      user: kubernetes-admin
    name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
  - name: kubernetes-admin
    user:
      client-certificate-data: REDACTED
      client-key-data: REDACTED
```

::: warning
That only works on a AWS server
:::

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUiInKops.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUiInKops2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUiInKops3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUiInKops4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUiInKops5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUiInKops6.png)

### 47. Demo: WebUI

- Start minikube if is not running

```powershell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Windows\system32> minikube start
There is a newer version of minikube available (v0.35.0).  Download it here:
https://github.com/kubernetes/minikube/releases/tag/v0.35.0

To disable this notification, run the following:
minikube config set WantUpdateNotification false
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
!   Error restarting cluster: running cmd: sudo kubeadm init phase certs all --config /var/lib/kubeadm.yaml: command failed: sudo kubeadm init phase certs all --config /var/lib/kubeadm.yaml
stdout: [certs] Using certificateDir folder "/var/lib/minikube/certs/"
[certs] Using existing ca certificate authority

stderr: error execution phase certs/apiserver: failed to write certificate "apiserver": failure loading apiserver certificate: failed to load certificate: the certificate is not valid yet
: Process exited with status 1

*   Sorry that minikube crashed. If this was unexpected, we would love to hear from you:
-   https://github.com/kubernetes/minikube/issues/new
PS C:\Windows\system32>
```

```powershell
PS C:\Windows\system32> minikube status
host: Running
kubelet: Running
apiserver: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.1.137
PS C:\Windows\system32> kubectl get nodes
NAME       STATUS    ROLES     AGE       VERSION
minikube   Ready     master    21d       v1.13.3
```

- Ask for the URL of the dashboard

```powershell
PS C:\Windows\system32> minikube dashboard --url
-   Enabling dashboard ...
-   Verifying dashboard health ...
-   Launching proxy ...
-   Verifying proxy health ...
http://127.0.0.1:54999/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUI.png)

```powershell
PS C:\Windows\system32> kubectl get all
NAME                                  READY     STATUS    RESTARTS   AGE
pod/hello-minikube-574f46546c-9s7sk   1/1       Running   6          21d

NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
service/hello-minikube   NodePort    10.96.200.51   <none>        8080:32101/TCP   21d
service/kubernetes       ClusterIP   10.96.0.1      <none>        443/TCP          21d

NAME                             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hello-minikube   1         1         1            1           21d

NAME                                        DESIRED   CURRENT   READY     AGE
replicaset.apps/hello-minikube-574f46546c   1         1         1         21d
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUI2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUI3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUI4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWebUI5.png)

## Section: 3. Advanced Topics

### 48. Service Discovery

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ServiceDiscovery.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ServiceDiscovery2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ServiceDiscovery3.png)

### 49. Demo: Service Discovery

- We are going to use the `service-discovery/secrets.yml` document to define the secrets.

> service-discovery/secrets.yml

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: helloworld-secrets
type: Opaque
data:
  username: aGVsbG93b3JsZA==
  password: cGFzc3dvcmQ=
  rootPassword: cm9vdHBhc3N3b3Jk
  database: aGVsbG93b3JsZA==
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f service-discovery/secrets.yml
secret/helloworld-secrets created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `service-discovery/database.yml` document to create the `mysql` database pod.

> service-discovery/database.yml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: database
  labels:
    app: database
spec:
  containers:
    - name: mysql
      image: mysql:5.7
      ports:
        - name: mysql-port
          containerPort: 3306
      env:
        - name: MYSQL_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: helloworld-secrets
              key: rootPassword
        - name: MYSQL_USER
          valueFrom:
            secretKeyRef:
              name: helloworld-secrets
              key: username
        - name: MYSQL_PASSWORD
          valueFrom:
            secretKeyRef:
              name: helloworld-secrets
              key: password
        - name: MYSQL_DATABASE
          valueFrom:
            secretKeyRef:
              name: helloworld-secrets
              key: database
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f service-discovery/database.yml
pod/database created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `service-discovery/database-service.yml` document to create the `service` to access the `mysql` database.

> service-discovery/database-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: database-service
spec:
  ports:
    - port: 3306
      protocol: TCP
  selector:
    app: database
  type: NodePort
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f service-discovery/database-service.yml
service/database-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `service-discovery/helloworld-db.yml` document to create the `deployment` of the `helloworld-db` app.

> service-discovery/database-service.yml

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
        app: helloworld-db
    spec:
      containers:
        - name: docker-nodejs-demo
          image: peelmicro/docker-nodejs-demo
          command: ["node", "index-db.js"]
          ports:
            - name: nodejs-port
              containerPort: 3000
          env:
            - name: MYSQL_HOST
              value: database-service
            - name: MYSQL_USER
              value: root
            - name: MYSQL_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: helloworld-secrets
                  key: rootPassword
            - name: MYSQL_DATABASE
              valueFrom:
                secretKeyRef:
                  name: helloworld-secrets
                  key: database
```

- It is going to execute the `index-db.js` document when it is started and get the setting variables from secrets.

> index-db.js

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

  console.log("Example app listening at http://%s:%s", host, port);
});
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f service-discovery/helloworld-db.yml
deployment.extensions/helloworld-deployment created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `service-discovery/helloworld-db-service.yml` document to create the `service` to give access the `helloworld-db` app.

> service-discovery/database-service-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: helloworld-db-service
spec:
  ports:
    - port: 3000
      protocol: TCP
  selector:
    app: helloworld-db
  type: NodePort
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f service-discovery/helloworld-db-service.yml
service/helloworld-db-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- Ensure everything is running

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                         READY   STATUS    RESTARTS   AGE
pod/database                                 1/1     Running   0          10h
pod/helloworld-deployment-86bff7779d-8vszz   1/1     Running   0          40s
pod/helloworld-deployment-86bff7779d-cd4qc   1/1     Running   0          40s
pod/helloworld-deployment-86bff7779d-tsphf   1/1     Running   0          40s

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/database-service        NodePort    10.97.3.159      <none>        3306:32664/TCP   10h
service/helloworld-db-service   NodePort    10.102.216.111   <none>        3000:30032/TCP   22s
service/kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          20d

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   3/3     3            3           40s

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-86bff7779d   3         3         3       40s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- Ensure the connection with the database has been established

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl logs pod/helloworld-deployment-86bff7779d-8vszz
Example app listening at http://:::3000
Connection to db established
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- Ensure that everythime with hit the web the counter is increased

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoServiceDiscovery.png)

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl http://167.99.192.20:30032/
Hello World! You are visitor number 2ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl http://10.102.216.111:3000
Hello World! You are visitor number 3ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl http://167.99.192.20:30032/
Hello World! You are visitor number 4ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl http://10.102.216.111:3000
Hello World! You are visitor number 5ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can query the database using the following command: (password=rootpassword)

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl exec database -i -t -- mysql -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 5.7.25 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| helloworld         |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
mysql> use helloworld;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+----------------------+
| Tables_in_helloworld |
+----------------------+
| visits               |
+----------------------+
1 row in set (0.00 sec)

mysql> select * from visits;
+----+---------------+
| id | ts            |
+----+---------------+
|  1 | 1553104232682 |
|  2 | 1553104450359 |
|  3 | 1553104516517 |
|  4 | 1553104580779 |
|  5 | 1553104584555 |
+----+---------------+
5 rows in set (0.00 sec)

mysql> \q
Bye
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can access the shell of the database pod by using:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl run -i --tty busybox --image=busybox --restart=Never -- sh
If you don't see a command prompt, try pressing enter.
/ # nslookup helloworld-db-server
Server:         10.96.0.10
Address:        10.96.0.10:53

** server can't find helloworld-db-server.default.svc.cluster.local: NXDOMAIN

^[[A*** Can't find helloworld-db-server.svc.cluster.local: No answer
*** Can't find helloworld-db-server.cluster.local: No answer
*** Can't find helloworld-db-server.default.svc.cluster.local: No answer
*** Can't find helloworld-db-server.svc.cluster.local: No answer
*** Can't find helloworld-db-server.cluster.local: No answer

/ # nslookup database-service
Server:         10.96.0.10
Address:        10.96.0.10:53

Name:   database-service.default.svc.cluster.local
Address: 10.97.3.159

*** Can't find database-service.svc.cluster.local: No answer
*** Can't find database-service.cluster.local: No answer
*** Can't find database-service.default.svc.cluster.local: No answer
*** Can't find database-service.svc.cluster.local: No answer
*** Can't find database-service.cluster.local: No answer

/ # nslookup database-db-service
Server:         10.96.0.10
Address:        10.96.0.10:53

** server can't find database-db-service.default.svc.cluster.local: NXDOMAIN

*** Can't find database-db-service.svc.cluster.local: No answer
*** Can't find database-db-service.cluster.local: No answer
*** Can't find database-db-service.default.svc.cluster.local: No answer
*** Can't find database-db-service.svc.cluster.local: No answer
*** Can't find database-db-service.cluster.local: No answer

/ # telnet helloworld-db-service 3000
GET /

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 37
ETag: W/"25-rn5uqEDMXsmWIlIUH7iA+ZOGwsg"
Date: Wed, 20 Mar 2019 18:39:37 GMT
Connection: close

Hello World! You are visitor number 6Connection closed by foreign host
/ # pod default/busybox terminated (Error)
```

- Delete the busybox pod just created

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete pod busybox
pod "busybox" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete deployment.apps/helloworld-deployment
deployment.apps "helloworld-deployment" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                         READY   STATUS        RESTARTS   AGE
pod/database                                 1/1     Running       0          23h
pod/helloworld-deployment-86bff7779d-8vszz   1/1     Terminating   1          13h
pod/helloworld-deployment-86bff7779d-cd4qc   1/1     Terminating   1          13h
pod/helloworld-deployment-86bff7779d-tsphf   1/1     Terminating   1          13h

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/database-service        NodePort    10.97.3.159      <none>        3306:32664/TCP   23h
service/helloworld-db-service   NodePort    10.102.216.111   <none>        3000:30032/TCP   13h
service/kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          21d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete service/helloworld-db-service
service "helloworld-db-service" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete service/database-service
service "database-service" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME           READY   STATUS    RESTARTS   AGE
pod/database   1/1     Running   0          23h

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete pod/database
pod "database" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   21d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

### 50. ConfigMap

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ConfigMap.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ConfigMap2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ConfigMap3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ConfigMap4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ConfigMap5.png)

### 51. Demo: ConfigMap

- We are going to use the `configmap/reverseproxy.conf` document to configure a nginx service.

> configmap/reverseproxy.conf

```nginx
server {
    listen       80;
    server_name  localhost;

    location / {
        proxy_bind 127.0.0.1;
        proxy_pass http://127.0.0.1:3000;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

- We can create a configmap by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create configmap nginx-config --from-file=configmap/reverseproxy.conf
configmap/nginx-config created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   21d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get configmap
NAME           DATA   AGE
nginx-config   1      26s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can see the content of the configmap by using the following command:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get configmap nginx-config -o yaml
apiVersion: v1
data:
  reverseproxy.conf: |
    server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_bind 127.0.0.1;
            proxy_pass http://127.0.0.1:3000;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }
    }
kind: ConfigMap
metadata:
  creationTimestamp: "2019-03-21T05:29:00Z"
  name: nginx-config
  namespace: default
  resourceVersion: "2412112"
  selfLink: /api/v1/namespaces/default/configmaps/nginx-config
  uid: 3b4d0dbf-4b9a-11e9-abeb-babbda5ce12f
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `configmap/nginx.yml` document to create a Pod with the normal example container and a nginx container with access to the configmap created.

> configmap/nginx.yml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: helloworld-nginx
  labels:
    app: helloworld-nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.11
      ports:
        - containerPort: 80
      volumeMounts:
        - name: config-volume
          mountPath: /etc/nginx/conf.d
    - name: docker-nodejs-demo
      image: peelmicro/docker-nodejs-demo
      ports:
        - containerPort: 3000
  volumes:
    - name: config-volume
      configMap:
        name: nginx-config
        items:
          - key: reverseproxy.conf
            path: reverseproxy.conf
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f configmap/nginx.yml
pod/helloworld-nginx created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                   READY   STATUS              RESTARTS   AGE
pod/helloworld-nginx   0/2     ContainerCreating   0          6s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   21d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `configmap/nginx-service.yml` document to create the Service to access the Pod.

> configmap/nginx-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: helloworld-nginx-service
spec:
  ports:
    - port: 80
      protocol: TCP
  selector:
    app: helloworld-nginx
  type: NodePort
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f configmap/nginx-service.yml
service/helloworld-nginx-service created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                   READY   STATUS    RESTARTS   AGE
pod/helloworld-nginx   2/2     Running   0          106s

NAME                               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/helloworld-nginx-service   NodePort    10.104.62.200   <none>        80:32032/TCP   3s
service/kubernetes                 ClusterIP   10.96.0.1       <none>        443/TCP        21d
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl http://10.104.62.200:80 -vvvv
* Rebuilt URL to: http://10.104.62.200:80/
*   Trying 10.104.62.200...
* Connected to 10.104.62.200 (10.104.62.200) port 80 (#0)
> GET / HTTP/1.1
> Host: 10.104.62.200
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: nginx/1.11.13
< Date: Thu, 21 Mar 2019 05:41:30 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 12
< Connection: keep-alive
< X-Powered-By: Express
< ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
<
* Connection #0 to host 10.104.62.200 left intact
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl http://167.99.192.20:32032 -vvvv
* Rebuilt URL to: http://167.99.192.20:32032/
*   Trying 167.99.192.20...
* Connected to 167.99.192.20 (167.99.192.20) port 32032 (#0)
> GET / HTTP/1.1
> Host: 167.99.192.20:32032
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: nginx/1.11.13
< Date: Thu, 21 Mar 2019 05:42:44 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 12
< Connection: keep-alive
< X-Powered-By: Express
< ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
<
* Connection #0 to host 167.99.192.20 left intact
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We can access the nginx container inside the pod by using:

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl exec -i -t helloworld-nginx -c nginx -- bash
root@helloworld-nginx:/# ps x
  PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:00 nginx: master process nginx -g daemon off;
    8 ?        Ss     0:00 bash
   13 ?        R+     0:00 ps x
root@helloworld-nginx:/# cat /etc/nginx/conf.d/reverseproxy.conf
server {
    listen       80;
    server_name  localhost;

    location / {
        proxy_bind 127.0.0.1;
        proxy_pass http://127.0.0.1:3000;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
root@helloworld-nginx:/#
```

### 52. Ingress Controller

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IngressController.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IngressController2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IngressController3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/IngressController4.png)

### 53. Demo: Ingress Controller

- We are going to use the `ingress/nginx-ingress-controller.yml` document to create the ingress-controller. This is a mandatory controller needed to use ingress. We could update it with [the latest version](https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml)

> ingress/nginx-ingress-controller.yml

```yaml
# updated this file with the latest ingress-controller from https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  name: nginx-ingress-controller
spec:
  selector:
    matchLabels:
      app: ingress-nginx
  template:
    metadata:
      labels:
        app: ingress-nginx
    spec:
      serviceAccountName: nginx-ingress-serviceaccount
      containers:
        - name: nginx-ingress-controller
          image: quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.17.1
          args:
            - /nginx-ingress-controller
            - --default-backend-service=$(POD_NAMESPACE)/echoheaders-default
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
              hostPort: 80
            - name: https
              containerPort: 443
              hostPort: 443
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
kind: ConfigMap
apiVersion: v1
metadata:
  name: nginx-configuration
  labels:
    app: ingress-nginx
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: tcp-services
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: udp-services
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nginx-ingress-serviceaccount

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: nginx-ingress-clusterrole
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
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: nginx-ingress-role
subjects:
  - kind: ServiceAccount
    name: nginx-ingress-serviceaccount

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: nginx-ingress-clusterrole-nisa-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: nginx-ingress-clusterrole
subjects:
  - kind: ServiceAccount
    name: nginx-ingress-serviceaccount
    namespace: default
---

```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f ingress/nginx-ingress-controller.yml
daemonset.extensions/nginx-ingress-controller created
configmap/nginx-configuration created
configmap/tcp-services created
configmap/udp-services created
serviceaccount/nginx-ingress-serviceaccount created
clusterrole.rbac.authorization.k8s.io/nginx-ingress-clusterrole created
role.rbac.authorization.k8s.io/nginx-ingress-role created
rolebinding.rbac.authorization.k8s.io/nginx-ingress-role-nisa-binding created
clusterrolebinding.rbac.authorization.k8s.io/nginx-ingress-clusterrole-nisa-binding created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `ingress/ingress.yml` document to create the ingress pod. The URLs are ficticious and are going to be redirect to the default one by the `ingress=controller`: `--default-backend-service=$(POD_NAMESPACE)/echoheaders-default`

> ingress/ingress.yml

```yaml
# An Ingress with 2 hosts and 3 endpoints
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: helloworld-rules
spec:
  rules:
    - host: helloworld-v1.example.com
      http:
        paths:
          - path: /
            backend:
              serviceName: helloworld-v1
              servicePort: 80
    - host: helloworld-v2.example.com
      http:
        paths:
          - path: /
            backend:
              serviceName: helloworld-v2
              servicePort: 80
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f ingress/ingress.yml
ingress.extensions/helloworld-rules created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `ingress/helloworld-v1.yml` document to create the Deployment and the service of Version 1.

> ingress/helloworld-v1.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-v1-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: helloworld-v1
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo:latest
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: helloworld-v1
spec:
  type: NodePort
  ports:
    - port: 80
      nodePort: 30303
      targetPort: 3000
      protocol: TCP
      name: http
  selector:
    app: helloworld-v1
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f ingress/helloworld-v1.yml
deployment.extensions/helloworld-v1-deployment created
service/helloworld-v1 created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `ingress/helloworld-v2.yml` document to create the Deployment and the service of Version 1.

> ingress/helloworld-v2.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-v2-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: helloworld-v2
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo:2
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: helloworld-v2
spec:
  type: NodePort
  ports:
    - port: 80
      nodePort: 30304
      targetPort: 3000
      protocol: TCP
      name: http
  selector:
    app: helloworld-v2
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f ingress/helloworld-v2.yml
deployment.extensions/helloworld-v2-deployment created
service/helloworld-v2 created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- We are going to use the `ingress/echoservice.yml` document to create the ReplicaController for the echoservice image from Google and the Service related.

> ingress/echoservice.yml

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: echoheaders
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: echoheaders
    spec:
      containers:
        - name: echoheaders
          image: gcr.io/google_containers/echoserver:1.0
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: echoheaders-default
  labels:
    app: echoheaders
spec:
  type: NodePort
  ports:
    - port: 80
      nodePort: 30302
      targetPort: 8080
      protocol: TCP
      name: http
  selector:
    app: echoheaders
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f ingress/echoservice.yml
replicationcontroller/echoheaders created
service/echoheaders-default created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                                            READY   STATUS    RESTARTS   AGE
pod/echoheaders-t5p5q                           1/1     Running   0          7m48s
pod/helloworld-v1-deployment-68b5f886b-bh7rt    1/1     Running   0          11m
pod/helloworld-v2-deployment-65dfc98468-xt9nz   1/1     Running   0          10m
pod/nginx-ingress-controller-hrmmz              1/1     Running   7          14m

NAME                                DESIRED   CURRENT   READY   AGE
replicationcontroller/echoheaders   1         1         1       7m48s

NAME                          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/echoheaders-default   NodePort    10.111.53.208    <none>        80:30302/TCP   7m48s
service/helloworld-v1         NodePort    10.109.130.196   <none>        80:30303/TCP   11m
service/helloworld-v2         NodePort    10.99.132.183    <none>        80:30304/TCP   10m
service/kubernetes            ClusterIP   10.96.0.1        <none>        443/TCP        21d

NAME                                      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
daemonset.apps/nginx-ingress-controller   1         1         1       1            1           <none>          14m

NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-v1-deployment   1/1     1            1           11m
deployment.apps/helloworld-v2-deployment   1/1     1            1           10m

NAME                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-v1-deployment-68b5f886b    1         1         1       11m
replicaset.apps/helloworld-v2-deployment-65dfc98468   1         1         1       10m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- As we are not running `minikube` we don't have just one URL to access the cluster, we don't need the `-H 'Host: helloworld-v1.example.com'` header

- We are going to check if the `service/helloworld-v1` service is working properly by accesing the local url and the external url with port `30303`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl 10.109.130.196
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl 167.99.192.20:30303
Hello World!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$

```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoIngressController.png)

- We are going to check if the `service/helloworld-v2` service is working properly by accesing the local url and the external url with port `30304`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl 10.99.132.183
Hello World v2!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl 167.99.192.20:30304
Hello World v2!ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoIngressController2.png)

- We are going to check if the `service/echoheaders-default` service is working properly by accesing the local url and the external url with port `30302`

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl 10.111.53.208
CLIENT VALUES:
client_address=('10.244.0.0', 54830) (10.244.0.0)
command=GET
path=/
real path=/
query=
request_version=HTTP/1.1

SERVER VALUES:
server_version=BaseHTTP/0.6
sys_version=Python/3.5.0
protocol_version=HTTP/1.0

HEADERS RECEIVED:
Accept=*/*
Host=10.111.53.208
User-Agent=curl/7.47.0
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ curl 167.99.192.20:30302
CLIENT VALUES:
client_address=('10.244.0.0', 49362) (10.244.0.0)
command=GET
path=/
real path=/
query=
request_version=HTTP/1.1

SERVER VALUES:
server_version=BaseHTTP/0.6
sys_version=Python/3.5.0
protocol_version=HTTP/1.0

HEADERS RECEIVED:
Accept=*/*
Host=167.99.192.20:30302
User-Agent=curl/7.47.0
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoIngressController3.png)
DemoIngressController4
DemoIngressController5

### 54. External DNS

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ExternalDns.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ExternalDns2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ExternalDns3.png)

### 55. Demo: External DNS

- We can check the `external-dns/README.md` document to see what we need to do.

> external-dns/README.md

```md
# External DNS

Project page: https://github.com/kubernetes-incubator/external-dns

## Create IAM Policy

./put-node-policy.sh

## start ingress

kubectl apply -f ../ingress/

## Create LoadBalancer for Ingress

kubectl apply -f service-l4.yaml

## Create external DNS and ingress rules

kubectl apply -f external-dns.yaml
kubectl apply -f ingress.yaml
```

- We can use the `external-dns/put-node-policy.sh` script to add permissions to the nodes IAM role, enabling any pod to use these AWS privileges

> external-dns/put-node-policy.sh

```sh
#!/bin/bash

#
# This script adds permissions to the nodes IAM role, enabling any pod to use these AWS privileges
# Usage of kube2iam is recommended, but not yet implemented by default in kops
#

DEFAULT_REGION="eu-west-1"
AWS_REGION="${AWS_REGION:-${DEFAULT_REGION}}"

NODE_ROLE="nodes.kubernetes.newtech.academy"

export AWS_REGION

aws iam put-role-policy --role-name ${NODE_ROLE} --policy-name external-dns-policy --policy-document '{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Effect": "Allow",
     "Action": [
       "route53:ChangeResourceRecordSets"
     ],
     "Resource": [
       "arn:aws:route53:::hostedzone/*"
     ]
   },
   {
     "Effect": "Allow",
     "Action": [
       "route53:ListHostedZones",
       "route53:ListResourceRecordSets"
     ],
     "Resource": [
       "*"
     ]
   }
 ]
}'
```

- We can use AWS LoadBalancer for Ingress by executing the `external-dns/service-l4.yaml` document.

> external-dns/service-l4.yaml

```yaml
kind: Service
apiVersion: v1
metadata:
  name: ingress-nginx
  labels:
    app: ingress-nginx
  annotations:
    # Enable PROXY protocol
    service.beta.kubernetes.io/aws-load-balancer-proxy-protocol: "*"
    # Increase the ELB idle timeout to avoid issues with WebSockets or Server-Sent Events.
    service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout: "3600"
    # external-dns
    external-dns.alpha.kubernetes.io/hostname: ingress.kubernetes.newtech.academy
spec:
  type: LoadBalancer
  selector:
    app: ingress-nginx
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: nginx-configuration
  labels:
    app: ingress-nginx
data:
  use-proxy-protocol: "true"
```

- We can use the `external-dns/external-dns.yaml` document to create the DNS rules

> external-dns/external-dns.yaml

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: external-dns
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: external-dns
rules:
  - apiGroups: [""]
    resources: ["services"]
    verbs: ["get", "watch", "list"]
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "watch", "list"]
  - apiGroups: ["extensions"]
    resources: ["ingresses"]
    verbs: ["get", "watch", "list"]
  - apiGroups: [""]
    resources: ["nodes"]
    verbs: ["list"]
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: external-dns-viewer
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: external-dns
subjects:
  - kind: ServiceAccount
    name: external-dns
    namespace: default
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: external-dns
spec:
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: external-dns
    spec:
      serviceAccountName: external-dns
      containers:
        - name: external-dns
          image: registry.opensource.zalan.do/teapot/external-dns:latest
          args:
            - --source=service
            - --source=ingress
            - --domain-filter=kubernetes.newtech.academy # will make ExternalDNS see only the hosted zones matching provided domain, omit to process all available hosted zones
            - --provider=aws
            - --policy=upsert-only # would prevent ExternalDNS from deleting any records, omit to enable full synchronization
            - --aws-zone-type=public # only look at public hosted zones (valid values are public, private or no value for both)
            - --registry=txt
            - --txt-owner-id=kubernetes.newtech.academy
```

- We can use the `external-dns/ingress.yaml` document to create the DNS rules

> external-dns/ingress.yaml

```yaml
# An Ingress with 2 hosts and 3 endpoints
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: helloworld-rules
spec:
  rules:
    - host: helloworld-v1.kubernetes.newtech.academy
      http:
        paths:
          - path: /
            backend:
              serviceName: helloworld-v1
              servicePort: 80
    - host: helloworld-v2.kubernetes.newtech.academy
      http:
        paths:
          - path: /
            backend:
              serviceName: helloworld-v2
              servicePort: 80
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoExternalDns.png)
f
![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoExternalDns2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoExternalDns3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoExternalDns4.png)

### 56. Volumes

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Volumes7.png)

### 57. Demo: Volumes

- We need to the create the `AWS Cluster` again:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0323 07:02:35.765163   18613 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0323 07:02:35.880913   18613 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0323 07:02:36.261184   18613 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0323 07:02:38.332294   18613 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0323 07:02:38.753930   18613 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0323 07:02:38.950696   18613 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0323 07:02:39.062305   18613 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0323 07:02:39.093184   18613 executor.go:103] Tasks: 73 done / 73 total; 0 can run
Will create resources:
  AutoscalingGroup/master-eu-central-1a.masters.kubernetes.peelmicro.com
.
.
.
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

- Now we have to deploy the cluster

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0323 07:05:47.508941   18732 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0323 07:05:48.181015   18732 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0323 07:05:48.344802   18732 vfs_castore.go:735] Issuing new certificate: "ca"
I0323 07:05:48.533220   18732 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0323 07:05:50.773076   18732 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0323 07:05:50.841660   18732 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0323 07:05:51.276018   18732 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0323 07:05:52.115757   18732 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0323 07:05:52.323344   18732 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0323 07:05:52.339421   18732 vfs_castore.go:735] Issuing new certificate: "kops"
I0323 07:05:52.346598   18732 vfs_castore.go:735] Issuing new certificate: "master"
I0323 07:05:52.533204   18732 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0323 07:05:52.821499   18732 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0323 07:05:53.726052   18732 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0323 07:05:53.954350   18732 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0323 07:05:54.222571   18732 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0323 07:05:54.232091   18732 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0323 07:06:04.655725   18732 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0323 07:06:05.190794   18732 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0323 07:06:05.190993   18732 dns.go:153] Pre-creating DNS records
I0323 07:06:07.117673   18732 update_cluster.go:290] Exporting kubecfg for cluster
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

- Finally to have to ensure the cluster is valid.

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

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops validate cluster --state=s3://kubernetes.peelmicro.com
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1

nodes                   Node    t2.micro        2       2       eu-central-1a

NODE STATUS
NAME                                            ROLE    READY
ip-172-20-37-140.eu-central-1.compute.internal  master  True
ip-172-20-47-24.eu-central-1.compute.internal   node    True
ip-172-20-62-170.eu-central-1.compute.internal  node    True

Your cluster kubernetes.peelmicro.com is ready
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We can create the volume by executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws ec2 create-volume --size 10 --region eu-central-1 --availability-zone eu-central-1a --volume-type gp2 --tag-specifications 'ResourceType=volume, Tags=[{Key= KubernetesCluster, Value=kubernetes.peelmicro.com}]'
{
    "AvailabilityZone": "eu-central-1a",
    "CreateTime": "2019-03-23T07:31:07.000Z",
    "Encrypted": false,
    "Size": 10,
    "SnapshotId": "",
    "State": "creating",
    "VolumeId": "vol-0af16d75075776394",
    "Iops": 100,
    "Tags": [
        {
            "Key": "KubernetesCluster",
            "Value": "kubernetes.peelmicro.com"
        }
    ],
    "VolumeType": "gp2"
}
```

- Clone the repository

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course# git clone https://github.com/peelmicro/learn-devops-the-complete-kubernetes-course
Cloning into 'learn-devops-the-complete-kubernetes-course'...
remote: Enumerating objects: 168, done.
remote: Counting objects: 100% (168/168), done.
remote: Compressing objects: 100% (119/119), done.
remote: Total 168 (delta 44), reused 168 (delta 44), pack-reused 0
Receiving objects: 100% (168/168), 41.33 KiB | 470.00 KiB/s, done.
Resolving deltas: 100% (44/44), done.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course# ls
docker-demo  learn-devops-the-complete-kubernetes-course
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course# cd learn-devops-the-complete-kubernetes-course/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- We are going to use the `volumes/helloworld-with-volume.yml` document to generate the deployment

> volumes/helloworld-with-volume.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
spec:
  replicas: 1
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
          volumeMounts:
            - mountPath: /myvol
              name: myvolume
      volumes:
        - name: myvolume
          awsElasticBlockStore:
            volumeID: vol-0af16d75075776394
```

- Ensure the nodes are running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get node
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-37-140.eu-central-1.compute.internal   Ready    master   3h    v1.10.12
ip-172-20-47-24.eu-central-1.compute.internal    Ready    node     2h    v1.10.12
ip-172-20-62-170.eu-central-1.compute.internal   Ready    node     2h    v1.10.12
```

- Create the deployment

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f volumes/helloworld-with-volume.yml
deployment.extensions/helloworld-deployment created
```

- Ensure it is working and running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get all
NAME                                         READY   STATUS    RESTARTS   AGE
pod/helloworld-deployment-794b654694-5spsv   1/1     Running   0          1m

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   3h

NAME                                    DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   1         1         1            1           1m

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-794b654694   1         1         1       1m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- Check what's inside the `pod`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod/helloworld-deployment-794b654694-5spsv
Name:           helloworld-deployment-794b654694-5spsv
Namespace:      default
Node:           ip-172-20-47-24.eu-central-1.compute.internal/172.20.47.24
Start Time:     Sat, 23 Mar 2019 10:10:20 +0000
Labels:         app=helloworld
                pod-template-hash=3506210250
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container docker-nodejs-demo
Status:         Running
IP:             100.96.1.4
Controlled By:  ReplicaSet/helloworld-deployment-794b654694
Containers:
  docker-nodejs-demo:
    Container ID:   docker://d68c5fd30ca7a81b0d73839e81f69046b5520e7c4de535573ea27a9df3569e69
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sat, 23 Mar 2019 10:10:58 +0000
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /myvol from myvolume (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-wzjkp (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  myvolume:
    Type:       AWSElasticBlockStore (a Persistent Disk resource in AWS)
    VolumeID:   vol-0af16d75075776394
    FSType:
    Partition:  0
    ReadOnly:   false
  default-token-wzjkp:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-wzjkp
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason                  Age    From                                                    Message
  ----    ------                  ----   ----                                                    -------
  Normal  Scheduled               6m45s  default-scheduler                                       Successfully assigned helloworld-deployment-794b654694-5spsv to ip-172-20-47-24.eu-central-1.compute.internal
  Normal  SuccessfulMountVolume   6m45s  kubelet, ip-172-20-47-24.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "default-token-wzjkp"
  Normal  SuccessfulAttachVolume  6m38s  attachdetach-controller                                 AttachVolume.Attach succeeded for volume "myvolume"
  Normal  SuccessfulMountVolume   6m35s  kubelet, ip-172-20-47-24.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "myvolume"
  Normal  Pulling                 6m34s  kubelet, ip-172-20-47-24.eu-central-1.compute.internal  pulling image "peelmicro/docker-nodejs-demo"
  Normal  Pulled                  6m7s   kubelet, ip-172-20-47-24.eu-central-1.compute.internal  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal  Created                 6m7s   kubelet, ip-172-20-47-24.eu-central-1.compute.internal  Created container
  Normal  Started                 6m7s   kubelet, ip-172-20-47-24.eu-central-1.compute.internal  Started container
```

- Access the `pod` and create a document inside the `volume` and another document outside the `volume`.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl exec helloworld-deployment-794b654694-5spsv -i -t -- bash
root@helloworld-deployment-794b654694-5spsv:/app# ls -ahl /myvol/
total 24K
drwxr-xr-x 3 root root 4.0K Mar 23 10:10 .
drwxr-xr-x 1 root root 4.0K Mar 23 10:10 ..
drwx------ 2 root root  16K Mar 23 10:10 lost+found
root@helloworld-deployment-794b654694-5spsv:/app# echo 'test' > /myvol/myvol.txt
root@helloworld-deployment-794b654694-5spsv:/app# echo 'test2' > /test.txt
root@helloworld-deployment-794b654694-5spsv:/app# ls -ahl /myvol/myvol.txt
-rw-r--r-- 1 root root 5 Mar 23 10:20 /myvol/myvol.txt
root@helloworld-deployment-794b654694-5spsv:/app# ls -ahl /test.txt
-rw-r--r-- 1 root root 6 Mar 23 10:21 /test.txt
root@helloworld-deployment-794b654694-5spsv:/app# exit
exit
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get node
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-37-140.eu-central-1.compute.internal   Ready    master   3h    v1.10.12
ip-172-20-47-24.eu-central-1.compute.internal    Ready    node     3h    v1.10.12
ip-172-20-62-170.eu-central-1.compute.internal   Ready    node     3h    v1.10.12
```

- The `pod` the running in the `ip-172-20-47-24.eu-central-1.compute.internal/172.20.47.24` node.

- We can `drain` (make it offline) a node by using the following command.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl drain ip-172-20-47-24.eu-central-1.compute.internal
node/ip-172-20-47-24.eu-central-1.compute.internal cordoned
pod/kube-dns-autoscaler-6874c546dd-2c962 evicted
pod/helloworld-deployment-794b654694-5spsv evicted
pod/kube-dns-5fbcb4d67b-rtzp2 evicted
node/ip-172-20-47-24.eu-central-1.compute.internal evicted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get node
NAME                                             STATUS                     ROLES    AGE   VERSION
ip-172-20-37-140.eu-central-1.compute.internal   Ready                      master   3h    v1.10.12
ip-172-20-47-24.eu-central-1.compute.internal    Ready,SchedulingDisabled   node     3h    v1.10.12
ip-172-20-62-170.eu-central-1.compute.internal   Ready                      node     3h    v1.10.12
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- The pod should've been created in the other node

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                                     READY   STATUS    RESTARTS   AGE
helloworld-deployment-794b654694-279kr   1/1     Running   0          2m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod helloworld-deployment-794b654694-279kr
Name:           helloworld-deployment-794b654694-279kr
Namespace:      default
Node:           ip-172-20-62-170.eu-central-1.compute.internal/172.20.62.170
Start Time:     Sat, 23 Mar 2019 10:29:45 +0000
Labels:         app=helloworld
                pod-template-hash=3506210250
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container docker-nodejs-demo
Status:         Running
IP:             100.96.2.5
Controlled By:  ReplicaSet/helloworld-deployment-794b654694
Containers:
  docker-nodejs-demo:
    Container ID:   docker://b1b1167191a30b07b26e35113f2d4a0869130753ed1c9c0493dff409d8e1fb31
    Image:          peelmicro/docker-nodejs-demo
    Image ID:       docker-pullable://peelmicro/docker-nodejs-demo@sha256:a10d360875d2ae10a9eb1fdd88aee16ddf7b8a5b08b4a903037109ee3c063e7f
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sat, 23 Mar 2019 10:32:28 +0000
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /myvol from myvolume (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-wzjkp (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  myvolume:
    Type:       AWSElasticBlockStore (a Persistent Disk resource in AWS)
    VolumeID:   vol-0af16d75075776394
    FSType:
    Partition:  0
    ReadOnly:   false
  default-token-wzjkp:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-wzjkp
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason                  Age                   From                                                     Message
  ----     ------                  ----                  ----                                                     -------
  Normal   Scheduled               4m41s                 default-scheduler                                        Successfully assigned helloworld-deployment-794b654694-279kr to ip-172-20-62-170.eu-central-1.compute.internal
  Normal   SuccessfulMountVolume   4m40s                 kubelet, ip-172-20-62-170.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "default-token-wzjkp"
  Warning  FailedAttachVolume      4m7s (x7 over 4m40s)  attachdetach-controller                                  AttachVolume.Attach failed for volume "myvolume" : "Error attaching EBS volume \"vol-0af16d75075776394\"" to instance "i-071f80eae00d8502e" since volume is currently attached to "i-0edf065548705ec62"
  Normal   SuccessfulAttachVolume  3m19s                 attachdetach-controller                                  AttachVolume.Attach succeeded for volume "myvolume"
  Warning  FailedMount             2m38s                 kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Unable to mount volumes for pod "helloworld-deployment-794b654694-279kr_default(941bfa25-4d56-11e9-96a3-023c3e632158)": timeout expired waiting for volumes to attach or mount for pod "default"/"helloworld-deployment-794b654694-279kr". list of unmounted volumes=[myvolume]. list of unattached volumes=[myvolume default-token-wzjkp]
  Normal   SuccessfulMountVolume   2m31s                 kubelet, ip-172-20-62-170.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "myvolume"
  Normal   Pulling                 2m24s                 kubelet, ip-172-20-62-170.eu-central-1.compute.internal  pulling image "peelmicro/docker-nodejs-demo"
  Normal   Pulled                  118s                  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Successfully pulled image "peelmicro/docker-nodejs-demo"
  Normal   Created                 118s                  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Created container
  Normal   Started                 117s                  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Started container
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- We can access inside the pod to see what happened with the document created `inside` and `outside` the volume

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl exec helloworld-deployment-794b654694-279kr -i -t -- bash
root@helloworld-deployment-794b654694-279kr:/app# ls -ahl /myvol/
total 28K
drwxr-xr-x 3 root root 4.0K Mar 23 10:20 .
drwxr-xr-x 1 root root 4.0K Mar 23 10:32 ..
drwx------ 2 root root  16K Mar 23 10:10 lost+found
-rw-r--r-- 1 root root    5 Mar 23 10:20 myvol.txt
root@helloworld-deployment-794b654694-279kr:/app# ls -ahl /
total 80K
drwxr-xr-x   1 root root 4.0K Mar 23 10:32 .
drwxr-xr-x   1 root root 4.0K Mar 23 10:32 ..
-rwxr-xr-x   1 root root    0 Mar 23 10:32 .dockerenv
drwxr-xr-x   6 root root 4.0K Mar 16 10:49 app
drwxr-xr-x   2 root root 4.0K Mar 23 10:32 bin
drwxr-xr-x   2 root root 4.0K Sep 12  2016 boot
drwxr-xr-x   5 root root  360 Mar 23 10:32 dev
drwxr-xr-x   1 root root 4.0K Mar 23 10:32 etc
drwxr-xr-x   3 root root 4.0K Mar 23 10:32 home
drwxr-xr-x   9 root root 4.0K Mar 23 10:32 lib
drwxr-xr-x   2 root root 4.0K Mar 23 10:32 lib64
drwxr-xr-x   2 root root 4.0K Nov  4  2016 media
drwxr-xr-x   2 root root 4.0K Nov  4  2016 mnt
drwxr-xr-x   3 root root 4.0K Mar 23 10:20 myvol
drwxr-xr-x   2 root root 4.0K Nov  4  2016 opt
dr-xr-xr-x 119 root root    0 Mar 23 10:32 proc
drwx------   4 root root 4.0K Mar 16 10:49 root
drwxr-xr-x   1 root root 4.0K Mar 23 10:32 run
drwxr-xr-x   2 root root 4.0K Mar 23 10:32 sbin
drwxr-xr-x   2 root root 4.0K Nov  4  2016 srv
dr-xr-xr-x  13 root root    0 Mar 23 10:32 sys
drwxrwxrwt   3 root root 4.0K Mar 16 10:49 tmp
drwxr-xr-x  10 root root 4.0K Mar 23 10:32 usr
drwxr-xr-x  11 root root 4.0K Mar 23 10:32 var
root@helloworld-deployment-794b654694-279kr:/app# exit
exit
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- As expected the document createad inside the volume is still there and the one create outside is lost.

- We need to remove the volume by using:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# aws ec2 delete-volume --volume-id vol-0af16d75075776394

An error occurred (InvalidVolume.NotFound) when calling the DeleteVolume operation: The volume 'vol-0af16d75075776394' does not exist.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f volumes/helloworld-with-volume.yml
deployment.extensions "helloworld-deployment" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get all
NAME                                         READY   STATUS        RESTARTS   AGE
pod/helloworld-deployment-794b654694-279kr   0/1     Terminating   0          15m

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   3h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# aws ec2 delete-volume --volume-id vol-0af16d75075776394

An error occurred (InvalidVolume.NotFound) when calling the DeleteVolume operation: The volume 'vol-0af16d75075776394' does not exist.
```

- We need to put the region.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# aws ec2 delete-volume --volume-id vol-0af16d75075776394 --region eu-central-1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoVolumes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoVolumes2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoVolumes3.png)

### 58. Volumes Autoprovisioning

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/VolumesAutoprovisioning.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/VolumesAutoprovisioning2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/VolumesAutoprovisioning3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/VolumesAutoprovisioning4.png)

### 59. Demo: Wordpress With Volumes

- We are going to use the `wordpress-volumes/storage.yml` document to create a `StorageClass`

> wordpress-volumes/storage.yml

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1beta1
metadata:
  name: standard
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  zone: eu-central-1a
```

- We are going to use the `wordpress-volumes/pv-claim.yml` document to create a `PersistentVolumeClaim`

> wordpress-volumes/pv-claim.yml

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: db-storage
  annotations:
    volume.beta.kubernetes.io/storage-class: "standard"
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 8Gi
```

- We are going to use the `wordpress-volumes/wordpress-db.yml` document to create a `ReplicationController` for the `mysql` database that is going to be created at the `db-storage` volume.

> wordpress-volumes/wordpress-db.yml

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: wordpress-db
spec:
  replicas: 1
  selector:
    app: wordpress-db
  template:
    metadata:
      name: wordpress-db
      labels:
        app: wordpress-db
    spec:
      containers:
        - name: mysql
          image: mysql:5.7
          args:
            - "--ignore-db-dir=lost+found"
          ports:
            - name: mysql-port
              containerPort: 3306
          env:
            - name: MYSQL_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: db-password
          volumeMounts:
            - mountPath: "/var/lib/mysql"
              name: mysql-storage
      volumes:
        - name: mysql-storage
          persistentVolumeClaim:
            claimName: db-storage
```

- We are going to use the `wordpress-volumes/wordpress-db-service.yml` document to create a `Service` for the `wordpress-db` pod database.

> wordpress-volumes/wordpress-db-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: wordpress-db
spec:
  ports:
    - port: 3306
      protocol: TCP
  selector:
    app: wordpress-db
  type: NodePort
```

- We are going to use the `wordpress-volumes/wordpress-secrets.yml` document to create a `Secret` for the credentials.

> wordpress-volumes/wordpress-secrets.yml

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: wordpress-secrets
type: Opaque
data:
  db-password: cGFzc3dvcmQ=
  # random sha1 strings - change all these lines
  authkey: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ4OA==
  loggedinkey: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ4OQ==
  secureauthkey: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ5MQ==
  noncekey: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ5MA==
  authsalt: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ5Mg==
  secureauthsalt: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ5Mw==
  loggedinsalt: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ5NA==
  noncesalt: MTQ3ZDVhMTIzYmU1ZTRiMWQ1NzUyOWFlNWE2YzRjY2FhMDkyZGQ5NQ==
```

- We need to create an `AWS efs` volumen for the images because it cannot be auto-provisioned.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# aws efs create-file-system --creation-token 2
{
    "OwnerId": "972569889348",
    "CreationToken": "2",
    "FileSystemId": "fs-356f20d5",
    "CreationTime": 1553341641.0,
    "LifeCycleState": "creating",
    "NumberOfMountTargets": 0,
    "SizeInBytes": {
        "Value": 0,
        "ValueInIA": 0,
        "ValueInStandard": 0
    },
    "PerformanceMode": "generalPurpose",
    "Encrypted": false,
    "ThroughputMode": "bursting",
    "Tags": []
}
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- We need the `Subnet Id` adn `Security Group ID`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws ec2 describe-instances --region eu-central-1
{
    "Reservations": [
        {
            "Groups": [],
            "Instances": [
                {
                    "AmiLaunchIndex": 0,
                    "ImageId": "ami-0692cb5ffed92e0c7",
                    "InstanceId": "i-05f3f45b58b8cea21",
                    "InstanceType": "t2.micro",
                    "KeyName": "kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e",
                    "LaunchTime": "2019-03-23T07:06:09.000Z",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "eu-central-1a",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-172-20-37-140.eu-central-1.compute.internal",
                    "PrivateIpAddress": "172.20.37.140",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-18-185-148-13.eu-central-1.compute.amazonaws.com",
                    "PublicIpAddress": "18.185.148.13",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-0bcc1c25be5351785",
                    "VpcId": "vpc-081442a1ac9eb3908",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2019-03-23T07:06:10.000Z",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-0401377c8a9fa9145"
                            }
                        },
                        {
                            "DeviceName": "/dev/xvdu",
                            "Ebs": {
                                "AttachTime": "2019-03-23T07:07:45.000Z",
                                "DeleteOnTermination": false,
                                "Status": "attached",
                                "VolumeId": "vol-0ff4cd78f0279e6a5"
                            }
                        },
                        {
                            "DeviceName": "/dev/xvdv",
                            "Ebs": {
                                "AttachTime": "2019-03-23T07:07:45.000Z",
                                "DeleteOnTermination": false,
                                "Status": "attached",
                                "VolumeId": "vol-0f10dc0d4dff3bf49"
                            }
                        }
                    ],
                    "ClientToken": "2325a6a5-7bf0-db0b-6e03-e9a2bf2e1bef_subnet-0bcc1c25be5351785_1",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "IamInstanceProfile": {
                        "Arn": "arn:aws:iam::972569889348:instance-profile/masters.kubernetes.peelmicro.com",
                        "Id": "AIPAISQFJSAYU7H4KQHKK"
                    },
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-18-185-148-13.eu-central-1.compute.amazonaws.com",
                                "PublicIp": "18.185.148.13"
                            },
                            "Attachment": {
                                "AttachTime": "2019-03-23T07:06:09.000Z",
                                "AttachmentId": "eni-attach-0365f8a132fad34ed",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached"
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "masters.kubernetes.peelmicro.com",
                                    "GroupId": "sg-0108e5f72fdfab112"
                                }
                            ],
                            "Ipv6Addresses": [],
                            "MacAddress": "02:3c:3e:63:21:58",
                            "NetworkInterfaceId": "eni-076b3c826da218c5b",
                            "OwnerId": "972569889348",
                            "PrivateDnsName": "ip-172-20-37-140.eu-central-1.compute.internal",
                            "PrivateIpAddress": "172.20.37.140",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-18-185-148-13.eu-central-1.compute.amazonaws.com",
                                        "PublicIp": "18.185.148.13"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-172-20-37-140.eu-central-1.compute.internal",
                                    "PrivateIpAddress": "172.20.37.140"
                                }
                            ],
                            "SourceDestCheck": false,
                            "Status": "in-use",
                            "SubnetId": "subnet-0bcc1c25be5351785",
                            "VpcId": "vpc-081442a1ac9eb3908"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "masters.kubernetes.peelmicro.com",
                            "GroupId": "sg-0108e5f72fdfab112"
                        }
                    ],
                    "SourceDestCheck": false,
                    "Tags": [
                        {
                            "Key": "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup",
                            "Value": "master-eu-central-1a"
                        },
                        {
                            "Key": "Name",
                            "Value": "master-eu-central-1a.masters.kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "KubernetesCluster",
                            "Value": "kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "k8s.io/role/master",
                            "Value": "1"
                        },
                        {
                            "Key": "aws:autoscaling:groupName",
                            "Value": "master-eu-central-1a.masters.kubernetes.peelmicro.com"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    }
                }
            ],
            "OwnerId": "972569889348",
            "RequesterId": "053592188284",
            "ReservationId": "r-0962d68446592506b"
        },
        {
            "Groups": [],
            "Instances": [
                {
                    "AmiLaunchIndex": 1,
                    "ImageId": "ami-0692cb5ffed92e0c7",
                    "InstanceId": "i-0edf065548705ec62",
                    "InstanceType": "t2.micro",
                    "KeyName": "kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e",
                    "LaunchTime": "2019-03-23T07:06:11.000Z",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "eu-central-1a",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-172-20-47-24.eu-central-1.compute.internal",
                    "PrivateIpAddress": "172.20.47.24",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-18-194-213-184.eu-central-1.compute.amazonaws.com",
                    "PublicIpAddress": "18.194.213.184",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-0bcc1c25be5351785",
                    "VpcId": "vpc-081442a1ac9eb3908",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2019-03-23T07:06:12.000Z",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-04b0b73bce0a949de"
                            }
                        }
                    ],
                    "ClientToken": "7285a6a5-7c0c-f335-694e-ea399c662287_subnet-0bcc1c25be5351785_2",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "IamInstanceProfile": {
                        "Arn": "arn:aws:iam::972569889348:instance-profile/nodes.kubernetes.peelmicro.com",
                        "Id": "AIPAI3YJOMYX2GWXRWG4S"
                    },
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-18-194-213-184.eu-central-1.compute.amazonaws.com",
                                "PublicIp": "18.194.213.184"
                            },
                            "Attachment": {
                                "AttachTime": "2019-03-23T07:06:11.000Z",
                                "AttachmentId": "eni-attach-0c5a6bff5e08072d5",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached"
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "nodes.kubernetes.peelmicro.com",
                                    "GroupId": "sg-043c3cc54c11feea4"
                                }
                            ],
                            "Ipv6Addresses": [],
                            "MacAddress": "02:42:4e:82:cf:f8",
                            "NetworkInterfaceId": "eni-0104ba227c120ffcb",
                            "OwnerId": "972569889348",
                            "PrivateDnsName": "ip-172-20-47-24.eu-central-1.compute.internal",
                            "PrivateIpAddress": "172.20.47.24",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-18-194-213-184.eu-central-1.compute.amazonaws.com",
                                        "PublicIp": "18.194.213.184"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-172-20-47-24.eu-central-1.compute.internal",
                                    "PrivateIpAddress": "172.20.47.24"
                                }
                            ],
                            "SourceDestCheck": false,
                            "Status": "in-use",
                            "SubnetId": "subnet-0bcc1c25be5351785",
                            "VpcId": "vpc-081442a1ac9eb3908"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "nodes.kubernetes.peelmicro.com",
                            "GroupId": "sg-043c3cc54c11feea4"
                        }
                    ],
                    "SourceDestCheck": false,
                    "Tags": [
                        {
                            "Key": "Name",
                            "Value": "nodes.kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "aws:autoscaling:groupName",
                            "Value": "nodes.kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "k8s.io/role/node",
                            "Value": "1"
                        },
                        {
                            "Key": "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup",
                            "Value": "nodes"
                        },
                        {
                            "Key": "KubernetesCluster",
                            "Value": "kubernetes.peelmicro.com"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    }
                },
                {
                    "AmiLaunchIndex": 0,
                    "ImageId": "ami-0692cb5ffed92e0c7",
                    "InstanceId": "i-071f80eae00d8502e",
                    "InstanceType": "t2.micro",
                    "KeyName": "kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e",
                    "LaunchTime": "2019-03-23T07:06:11.000Z",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "eu-central-1a",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-172-20-62-170.eu-central-1.compute.internal",
                    "PrivateIpAddress": "172.20.62.170",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-52-59-234-27.eu-central-1.compute.amazonaws.com",
                    "PublicIpAddress": "52.59.234.27",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-0bcc1c25be5351785",
                    "VpcId": "vpc-081442a1ac9eb3908",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2019-03-23T07:06:11.000Z",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-0d332145d2783f7bc"
                            }
                        }
                    ],
                    "ClientToken": "7285a6a5-7c0c-f335-694e-ea399c662287_subnet-0bcc1c25be5351785_2",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "IamInstanceProfile": {
                        "Arn": "arn:aws:iam::972569889348:instance-profile/nodes.kubernetes.peelmicro.com",
                        "Id": "AIPAI3YJOMYX2GWXRWG4S"
                    },
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-52-59-234-27.eu-central-1.compute.amazonaws.com",
                                "PublicIp": "52.59.234.27"
                            },
                            "Attachment": {
                                "AttachTime": "2019-03-23T07:06:11.000Z",
                                "AttachmentId": "eni-attach-0634cf57f56d22cd1",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached"
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "nodes.kubernetes.peelmicro.com",
                                    "GroupId": "sg-043c3cc54c11feea4"
                                }
                            ],
                            "Ipv6Addresses": [],
                            "MacAddress": "02:f6:7d:08:ce:24",
                            "NetworkInterfaceId": "eni-088913001003ec7e7",
                            "OwnerId": "972569889348",
                            "PrivateDnsName": "ip-172-20-62-170.eu-central-1.compute.internal",
                            "PrivateIpAddress": "172.20.62.170",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-52-59-234-27.eu-central-1.compute.amazonaws.com",
                                        "PublicIp": "52.59.234.27"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-172-20-62-170.eu-central-1.compute.internal",
                                    "PrivateIpAddress": "172.20.62.170"
                                }
                            ],
                            "SourceDestCheck": false,
                            "Status": "in-use",
                            "SubnetId": "subnet-0bcc1c25be5351785",
                            "VpcId": "vpc-081442a1ac9eb3908"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "nodes.kubernetes.peelmicro.com",
                            "GroupId": "sg-043c3cc54c11feea4"
                        }
                    ],
                    "SourceDestCheck": false,
                    "Tags": [
                        {
                            "Key": "aws:autoscaling:groupName",
                            "Value": "nodes.kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "k8s.io/role/node",
                            "Value": "1"
                        },
                        {
                            "Key": "Name",
                            "Value": "nodes.kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "KubernetesCluster",
                            "Value": "kubernetes.peelmicro.com"
                        },
                        {
                            "Key": "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup",
                            "Value": "nodes"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    }
                }
            ],
            "OwnerId": "972569889348",
            "RequesterId": "053592188284",
            "ReservationId": "r-09114ea560630b4dc"
        }
    ]
}
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws ec2 describe-instances --region eu-central-1 | jq '.Reservations[1].Instances[0].SubnetId'

Command 'jq' not found, but can be installed with:

snap install jq  # version 1.5+dfsg-1, or
apt  install jq

See 'snap info jq' for additional versions.

root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt  install jq
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  libjq1 libonig4
The following NEW packages will be installed:
  jq libjq1 libonig4
0 upgraded, 3 newly installed, 0 to remove and 27 not upgraded.
Need to get 276 kB of archives.
After this operation, 930 kB of additional disk space will be used.
Do you want to continue? [Y/n] Y
Get:1 http://mirrors.digitalocean.com/ubuntu bionic/universe amd64 libonig4 amd64 6.7.0-1 [119 kB]
Get:2 http://mirrors.digitalocean.com/ubuntu bionic/universe amd64 libjq1 amd64 1.5+dfsg-2 [111 kB]
Get:3 http://mirrors.digitalocean.com/ubuntu bionic/universe amd64 jq amd64 1.5+dfsg-2 [45.6 kB]
Fetched 276 kB in 1s (228 kB/s)
Selecting previously unselected package libonig4:amd64.
(Reading database ... 98225 files and directories currently installed.)
Preparing to unpack .../libonig4_6.7.0-1_amd64.deb ...
Unpacking libonig4:amd64 (6.7.0-1) ...
Selecting previously unselected package libjq1:amd64.
Preparing to unpack .../libjq1_1.5+dfsg-2_amd64.deb ...
Unpacking libjq1:amd64 (1.5+dfsg-2) ...
Selecting previously unselected package jq.
Preparing to unpack .../jq_1.5+dfsg-2_amd64.deb ...
Unpacking jq (1.5+dfsg-2) ...
Setting up libonig4:amd64 (6.7.0-1) ...
Setting up libjq1:amd64 (1.5+dfsg-2) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up jq (1.5+dfsg-2) ...
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws ec2 describe-instances --region eu-central-1 | jq '.Reservations[1].Instances[0].SubnetId'
"subnet-0bcc1c25be5351785"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws ec2 describe-instances --region eu-central-1 | jq '.Reservations[1].Instances[0].SecurityGroups[0].GroupId'
"sg-043c3cc54c11feea4"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# aws efs create-mount-target --file-system-id fs-356f20d5 --subnet-id subnet-0bcc1c25be5351785 --security-groups sg-043c3cc54c11feea4

An error occurred (SubnetNotFound) when calling the CreateMountTarget operation: The subnet ID 'subnet-0bcc1c25be5351785' does not exist
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# aws efs create-mount-target --file-system-id fs-356f20d5 --subnet-id subnet-0bcc1c25be5351785 --security-groups sg-043c3cc54c11feea4 --region eu-central-1

An error occurred (FileSystemNotFound) when calling the CreateMountTarget operation: no such file system
```

- The efs needs to be created in `eu-central-1` as well

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws efs delete-file-system --file-system-id fs-356f20d5
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws efs create-file-system --creation-token 2 --region eu-central-1
{
    "OwnerId": "972569889348",
    "CreationToken": "2",
    "FileSystemId": "fs-b0a3c7e9",
    "CreationTime": 1553342732.0,
    "LifeCycleState": "creating",
    "NumberOfMountTargets": 0,
    "SizeInBytes": {
        "Value": 0,
        "ValueInIA": 0,
        "ValueInStandard": 0
    },
    "PerformanceMode": "generalPurpose",
    "Encrypted": false,
    "ThroughputMode": "bursting",
    "Tags": []
}
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws efs create-mount-target --file-system-id fs-b0a3c7e9 --subnet-id subnet-0bcc1c25be5351785 --security-groups sg-043c3cc54c11feea4 --region eu-central-1
{
    "OwnerId": "972569889348",
    "MountTargetId": "fsmt-3f4be666",
    "FileSystemId": "fs-b0a3c7e9",
    "SubnetId": "subnet-0bcc1c25be5351785",
    "LifeCycleState": "creating",
    "IpAddress": "172.20.49.67",
    "NetworkInterfaceId": "eni-0099cecd1a7d54f2e"
}
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Wee need to replace the `"FileSystemId": "fs-b0a3c7e9"` values in the following `Deployment` pod.

- We are going to use the `wordpress-volumes/wordpress-web.yml` document to create a `Deployment` for the `Wordpress` image.

> wordpress-volumes/wordpress-web.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: wordpress-deployment
spec:
  replicas: 2
  template:
    metadata:
      labels:
        app: wordpress
    spec:
      containers:
        - name: wordpress
          image: wordpress:4-php7.0
          # uncomment to fix perm issue, see also https://github.com/kubernetes/kubernetes/issues/2630
          # command: ['bash', '-c', 'mkdir -p /var/www/html/wp-content/uploads; chown www-data:www-data /var/www/html/wp-content/uploads && docker-entrypoint.sh apache2-foreground']
          ports:
            - name: http-port
              containerPort: 80
          env:
            - name: WORDPRESS_DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: db-password
            - name: WORDPRESS_AUTH_KEY
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: authkey
            - name: WORDPRESS_LOGGED_IN_KEY
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: loggedinkey
            - name: WORDPRESS_SECURE_AUTH_KEY
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: secureauthkey
            - name: WORDPRESS_NONCE_KEY
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: noncekey
            - name: WORDPRESS_AUTH_SALT
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: authsalt
            - name: WORDPRESS_SECURE_AUTH_SALT
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: secureauthsalt
            - name: WORDPRESS_LOGGED_IN_SALT
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: loggedinsalt
            - name: WORDPRESS_NONCE_SALT
              valueFrom:
                secretKeyRef:
                  name: wordpress-secrets
                  key: noncesalt
            - name: WORDPRESS_DB_HOST
              value: wordpress-db
          volumeMounts:
            - mountPath: /var/www/html/wp-content/uploads
              name: uploads
      volumes:
        - name: uploads
          nfs:
            server: eu-central-1a.fs-b0a3c7e9.efs.eu-central-1.amazonaws.com
            path: /
```

- We are going to use the `wordpress-volumes/wordpress-web-service.yml` document to create a `Service` to access the `Wordpress` deployment.

> wordpress-volumes/wordpress-web-service.yml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: wordpress
spec:
  ports:
    - port: 80
      targetPort: http-port
      protocol: TCP
  selector:
    app: wordpress
  type: LoadBalancer
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# git pull origin master
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 5 (delta 4), reused 5 (delta 4), pack-reused 0
Unpacking objects: 100% (5/5), done.
From https://github.com/peelmicro/learn-devops-the-complete-kubernetes-course
 * branch            master     -> FETCH_HEAD
   ad91ff1..b652954  master     -> origin/master
Updating ad91ff1..b652954
Fast-forward
 wordpress-volumes/storage.yml       |   2 +-
 wordpress-volumes/wordpress-web.yml | 124 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--------------------------------------------------------------
 2 files changed, 63 insertions(+), 63 deletions(-)
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- Create all the `pods`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f storage.yml
storageclass.storage.k8s.io/standard created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f pv-claim.yml
persistentvolumeclaim/db-storage created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f wordpress-secrets.yml
secret/wordpress-secrets created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f wordpress-db.yml
replicationcontroller/wordpress-db created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f wordpress-db-service.yml
service/wordpress-db created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl get pvc
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
db-storage   Bound    pvc-dc7aa06b-4d65-11e9-96a3-023c3e632158   8Gi        RWO            standard       2m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl get pod
NAME                 READY   STATUS    RESTARTS   AGE
wordpress-db-p8k6r   1/1     Running   0          2m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl describe pod wordpress-db-p8k6r
Name:           wordpress-db-p8k6r
Namespace:      default
Node:           ip-172-20-62-170.eu-central-1.compute.internal/172.20.62.170
Start Time:     Sat, 23 Mar 2019 12:20:30 +0000
Labels:         app=wordpress-db
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container mysql
Status:         Running
IP:             100.96.2.6
Controlled By:  ReplicationController/wordpress-db
Containers:
  mysql:
    Container ID:  docker://338df2aff3306f4a1af1e171890af21cfc090d7dd789231c3cee9cbee22c153f
    Image:         mysql:5.7
    Image ID:      docker-pullable://mysql@sha256:de482b2b0fdbe5bb142462c07c5650a74e0daa31e501bc52448a2be10f384e6d
    Port:          3306/TCP
    Host Port:     0/TCP
    Args:
      --ignore-db-dir=lost+found
    State:          Running
      Started:      Sat, 23 Mar 2019 12:21:02 +0000
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:  100m
    Environment:
      MYSQL_ROOT_PASSWORD:  <set to the key 'db-password' in secret 'wordpress-secrets'>  Optional: false
    Mounts:
      /var/lib/mysql from mysql-storage (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-wzjkp (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  mysql-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  db-storage
    ReadOnly:   false
  default-token-wzjkp:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-wzjkp
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason                  Age    From                                                     Message
  ----    ------                  ----   ----                                                     -------
  Normal  Scheduled               9m13s  default-scheduler                                        Successfully assigned wordpress-db-p8k6r to ip-172-20-62-170.eu-central-1.compute.internal
  Normal  SuccessfulMountVolume   9m13s  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "default-token-wzjkp"
  Normal  SuccessfulAttachVolume  9m10s  attachdetach-controller                                  AttachVolume.Attach succeeded for volume "pvc-dc7aa06b-4d65-11e9-96a3-023c3e632158"
  Normal  SuccessfulMountVolume   8m55s  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "pvc-dc7aa06b-4d65-11e9-96a3-023c3e632158"
  Normal  Pulling                 8m54s  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  pulling image "mysql:5.7"
  Normal  Pulled                  8m41s  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Successfully pulled image "mysql:5.7"
  Normal  Created                 8m41s  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Created container
  Normal  Started                 8m41s  kubelet, ip-172-20-62-170.eu-central-1.compute.internal  Started container
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f wordpress-web.yml
deployment.extensions/wordpress-deployment created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl create -f wordpress-web-service.yml
service/wordpress created
```

- We can create a new Record Set in Route 53 to access `wordpress`.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes4.png)

- We can the access to http://wordpress.kubernetes.peelmicro.com

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes8.png)

- We have one `db` pod running and two `wordpress` pod running.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl get all
NAME                                       READY   STATUS    RESTARTS   AGE
pod/wordpress-db-p8k6r                     1/1     Running   0          21m
pod/wordpress-deployment-97f94c99d-k6g6b   1/1     Running   0          10m
pod/wordpress-deployment-97f94c99d-m6h5p   1/1     Running   0          10m

NAME                                 DESIRED   CURRENT   READY   AGE
replicationcontroller/wordpress-db   1         1         1       21m

NAME                   TYPE           CLUSTER-IP      EXTERNAL-IP                                                                 PORT(S)          AGE
service/kubernetes     ClusterIP      100.64.0.1      <none>                                                                      443/TCP          5h
service/wordpress      LoadBalancer   100.68.9.250    ab68d37ca4d6711e996a3023c3e63215-350769629.eu-central-1.elb.amazonaws.com   80:30398/TCP     9m
service/wordpress-db   NodePort       100.64.33.159   <none>                                                                      3306:31418/TCP   21m

NAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   2         2         2            2           10m

NAME                                             DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-97f94c99d   2         2         2       10m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes9.png)

- There is a bug with this version of wordpress and I cannot upload images.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes10.png)

- We are going to modify the wordpress deployment to fix it, but in real-live this should't be done because the changes will be lost if we recreate the deployment.

- We have to put

```yaml
containers:
  - command:
      - bash
      - -c
      - chown www-data:www-data /var/www/html/wp-content/uploads && docker-entrypoint.sh
        apache2-foreground
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes11.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl edit deploy/wordpress-deployment
deployment.extensions/wordpress-deployment edited
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes12.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes13.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes14.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes15.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes16.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes17.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes18.png)

- Ensure the volumes are working correctly

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get all
NAME                                        READY   STATUS    RESTARTS   AGE
pod/wordpress-db-p8k6r                      1/1     Running   0          4h
pod/wordpress-deployment-64b75855f5-lbndv   1/1     Running   0          9m
pod/wordpress-deployment-64b75855f5-vwrw5   1/1     Running   0          9m

NAME                                 DESIRED   CURRENT   READY   AGE
replicationcontroller/wordpress-db   1         1         1       4h

NAME                   TYPE           CLUSTER-IP      EXTERNAL-IP                                                                 PORT(S)          AGE
service/kubernetes     ClusterIP      100.64.0.1      <none>                                                                      443/TCP          9h
service/wordpress      LoadBalancer   100.68.9.250    ab68d37ca4d6711e996a3023c3e63215-350769629.eu-central-1.elb.amazonaws.com   80:30398/TCP     3h
service/wordpress-db   NodePort       100.64.33.159   <none>                                                                      3306:31418/TCP   4h

NAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   2         2         2            2           3h

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-64b75855f5   2         2         2       9m
replicaset.apps/wordpress-deployment-97f94c99d    0         0         0       3h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- We are going to delete the pod with the database

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete pod wordpress-db-p8k6r
pod "wordpress-db-p8k6r" deleted
```

- We are going to delete one of the wordpress pods

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete pod/wordpress-deployment-64b75855f5-lbndv
pod "wordpress-deployment-64b75855f5-lbndv" deleted
```

- They have been recreated:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                                    READY   STATUS    RESTARTS   AGE
wordpress-db-jjxjn                      1/1     Running   0          1m
wordpress-deployment-64b75855f5-5m8gv   1/1     Running   0          21s
wordpress-deployment-64b75855f5-vwrw5   1/1     Running   0          12m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl logs wordpress-deployment-64b75855f5-5m8gv
WordPress not found in /var/www/html - copying now...
WARNING: /var/www/html is not empty! (copying anyhow)
Complete! WordPress has been successfully copied to /var/www/html
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 100.96.2.12. Set the 'ServerName' directive globally to suppress this message
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 100.96.2.12. Set the 'ServerName' directive globally to suppress this message
[Sat Mar 23 16:25:12.872694 2019] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.25 (Debian) PHP/7.0.32 configured -- resuming normal operations
[Sat Mar 23 16:25:12.872785 2019] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
100.96.2.1 - - [23/Mar/2019:16:25:40 +0000] "POST /wp-admin/admin-ajax.php HTTP/1.1" 200 624 "http://wordpress.kubernetes.peelmicro.com/wp-admin/post-new.php" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
100.96.2.1 - - [23/Mar/2019:16:27:40 +0000] "POST /wp-admin/admin-ajax.php HTTP/1.1" 200 624 "http://wordpress.kubernetes.peelmicro.com/wp-admin/post-new.php" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl exec wordpress-deployment-64b75855f5-5m8gv -i -t -- bash
root@wordpress-deployment-64b75855f5-5m8gv:/var/www/html# ls wp-content/uploads
2019
root@wordpress-deployment-64b75855f5-5m8gv:/var/www/html# ls -ahl -R wp-content/uploads/
wp-content/uploads/:
total 12K
drwxr-xr-x 3 www-data www-data 6.0K Mar 23 16:14 .
drwxr-xr-x 5 root     root     4.0K Mar 23 16:25 ..
drwxr-xr-x 3 www-data www-data 6.0K Mar 23 16:14 2019

wp-content/uploads/2019:
total 12K
drwxr-xr-x 3 www-data www-data 6.0K Mar 23 16:14 .
drwxr-xr-x 3 www-data www-data 6.0K Mar 23 16:14 ..
drwxr-xr-x 2 www-data www-data 6.0K Mar 23 16:14 03

wp-content/uploads/2019/03:
total 2.0M
drwxr-xr-x 2 www-data www-data  6.0K Mar 23 16:14 .
drwxr-xr-x 3 www-data www-data  6.0K Mar 23 16:14 ..
-rw-r--r-- 1 www-data www-data   22K Mar 23 16:14 Juan20171018Ok-100x100.png
-rw-r--r-- 1 www-data www-data   45K Mar 23 16:14 Juan20171018Ok-150x150.png
-rw-r--r-- 1 www-data www-data  152K Mar 23 16:14 Juan20171018Ok-300x274.png
-rw-r--r-- 1 www-data www-data  800K Mar 23 16:14 Juan20171018Ok-768x701.png
-rw-r--r-- 1 www-data www-data 1003K Mar 23 16:14 Juan20171018Ok.png
root@wordpress-deployment-64b75855f5-5m8gv:/var/www/html#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl logs wordpress-db-jjxjn
2019-03-23T16:23:56.779612Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
2019-03-23T16:23:56.781134Z 0 [Note] mysqld (mysqld 5.7.25) starting as process 1 ...
2019-03-23T16:23:56.784065Z 0 [Note] InnoDB: PUNCH HOLE support available
2019-03-23T16:23:56.784118Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
2019-03-23T16:23:56.784137Z 0 [Note] InnoDB: Uses event mutexes
2019-03-23T16:23:56.784152Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier
2019-03-23T16:23:56.784167Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.11
2019-03-23T16:23:56.784181Z 0 [Note] InnoDB: Using Linux native AIO
2019-03-23T16:23:56.784498Z 0 [Note] InnoDB: Number of pools: 1
2019-03-23T16:23:56.784645Z 0 [Note] InnoDB: Using CPU crc32 instructions
2019-03-23T16:23:56.788313Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
2019-03-23T16:23:56.796027Z 0 [Note] InnoDB: Completed initialization of buffer pool
2019-03-23T16:23:56.797990Z 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().
2019-03-23T16:23:56.817919Z 0 [Note] InnoDB: Highest supported file format is Barracuda.
2019-03-23T16:23:56.855797Z 0 [Note] InnoDB: Creating shared tablespace for temporary tables
2019-03-23T16:23:56.855882Z 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...
2019-03-23T16:23:56.890025Z 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.
2019-03-23T16:23:56.890830Z 0 [Note] InnoDB: 96 redo rollback segment(s) found. 96 redo rollback segment(s) are active.
2019-03-23T16:23:56.890876Z 0 [Note] InnoDB: 32 non-redo rollback segment(s) are active.
2019-03-23T16:23:56.891107Z 0 [Note] InnoDB: Waiting for purge to start
2019-03-23T16:23:56.941301Z 0 [Note] InnoDB: 5.7.25 started; log sequence number 13763312
2019-03-23T16:23:56.941619Z 0 [Note] Plugin 'FEDERATED' is disabled.
2019-03-23T16:23:56.941813Z 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
2019-03-23T16:23:56.960534Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.
2019-03-23T16:23:56.962096Z 0 [Warning] CA certificate ca.pem is self signed.
2019-03-23T16:23:56.966056Z 0 [Note] Server hostname (bind-address): '*'; port: 3306
2019-03-23T16:23:56.966954Z 0 [Note] IPv6 is available.
2019-03-23T16:23:56.967004Z 0 [Note]   - '::' resolves to '::';
2019-03-23T16:23:56.967036Z 0 [Note] Server socket created on IP: '::'.
2019-03-23T16:23:56.968284Z 0 [Note] InnoDB: Buffer pool(s) load completed at 190323 16:23:56
2019-03-23T16:23:56.970150Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2019-03-23T16:23:56.978787Z 0 [Warning] 'user' entry 'root@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:56.978850Z 0 [Warning] 'user' entry 'mysql.session@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:56.978878Z 0 [Warning] 'user' entry 'mysql.sys@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:56.979313Z 0 [Warning] 'db' entry 'performance_schema mysql.session@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:56.979371Z 0 [Warning] 'db' entry 'sys mysql.sys@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:56.979808Z 0 [Warning] 'proxies_priv' entry '@ root@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:57.017676Z 0 [Warning] 'tables_priv' entry 'user mysql.session@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:57.017728Z 0 [Warning] 'tables_priv' entry 'sys_config mysql.sys@localhost' ignored in --skip-name-resolve mode.
2019-03-23T16:23:57.073339Z 0 [Note] Event Scheduler: Loaded 0 events
2019-03-23T16:23:57.073596Z 0 [Note] mysqld: ready for connections.
Version: '5.7.25'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
```

- If we refresh the wordpress it has everything we've created.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes19.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes20.png)

- We have to delete everything:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl delete service/wordpress
service "wordpress" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl delete service/wordpress-db
service "wordpress-db" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl get all      NAME                                        READY   STATUS    RESTARTS   AGE
pod/wordpress-db-jjxjn                      1/1     Running   0          16m
pod/wordpress-deployment-64b75855f5-5m8gv   1/1     Running   0          15m
pod/wordpress-deployment-64b75855f5-vwrw5   1/1     Running   0          27m

NAME                                 DESIRED   CURRENT   READY   AGE
replicationcontroller/wordpress-db   1         1         1       4h

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   35s

NAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress-deployment   2         2         2            2           4h

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-deployment-64b75855f5   2         2         2       27m
replicaset.apps/wordpress-deployment-97f94c99d    0         0         0       4h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl delete replicationcontroller/wordpress-db
replicationcontroller "wordpress-db" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl delete deployment.apps/wordpress-deployment
deployment.apps "wordpress-deployment" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl get all      NAME                                        READY   STATUS        RESTARTS   AGE
pod/wordpress-deployment-64b75855f5-5m8gv   0/1     Terminating   0          16m
pod/wordpress-deployment-64b75855f5-vwrw5   0/1     Terminating   0          28m

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   1m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   2m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# aws efs delete-file-system --file-system-id fs-b0a3c7e9 --region eu-central-1

An error occurred (FileSystemInUse) when calling the DeleteFileSystem operation: None
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes21.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes22.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes23.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes24.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoWordpressWithVolumes25.png)

### 60. Pod Presets

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodPresets.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodPresets2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/PodPresets3.png)

### 61. Demo: Pod Presets

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kops version
Version 1.10.0 (git-8b52ea6d1)
```

- We need to edit cluster to include the following:

```yaml
pec:
  kubeAPIServer:
    enableAdmissionPlugins:
      - Initializers
      - NamespaceLifecycle
      - LimitRanger
      - ServiceAccount
      - PersistentVolumeLabel
      - DefaultStorageClass
      - DefaultTolerationSeconds
      - MutatingAdmissionWebhook
      - ValidatingAdmissionWebhook
      - NodeRestriction
      - ResourceQuota
      - PodPreset
    runtimeConfig:
      settings.k8s.io/v1alpha1: "true"
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course/wordpress-volumes# kops edit cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com
Edit cancelled, no changes made.
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPodPresets.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0323 17:52:37.413006   27350 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0323 17:52:37.843957   27350 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0323 17:52:38.167703   27350 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0323 17:52:38.858228   27350 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0323 17:52:38.969992   27350 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0323 17:52:38.970865   27350 dns.go:153] Pre-creating DNS records
I0323 17:52:39.380007   27350 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster changes have been applied to the cloud.


Changes may require instances to restart: kops rolling-update cluster
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get nodes
NAME                                             STATUS                     ROLES    AGE   VERSION
ip-172-20-37-140.eu-central-1.compute.internal   Ready                      master   10h   v1.10.12
ip-172-20-47-24.eu-central-1.compute.internal    Ready,SchedulingDisabled   node     10h   v1.10.12
ip-172-20-62-170.eu-central-1.compute.internal   Ready                      node     10h   v1.10.12
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# ^C
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl uncordon ip-172-20-47-24.eu-central-1.compute.internal
node/ip-172-20-47-24.eu-central-1.compute.internal uncordoned
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get nodes
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-37-140.eu-central-1.compute.internal   Ready    master   10h   v1.10.12
ip-172-20-47-24.eu-central-1.compute.internal    Ready    node     10h   v1.10.12
ip-172-20-62-170.eu-central-1.compute.internal   Ready    node     10h   v1.10.12
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- We are going to use the `pod-presets/pod-presets.yaml` document to create a `PodPreset`

> pod-presets/pod-presets.yaml

```yaml
apiVersion: settings.k8s.io/v1beta1 # you might have to change this after PodPresets become stable
kind: PodPreset
metadata:
  name: share-credential
spec:
  selector:
    matchLabels:
      app: myapp
  env:
    - name: MY_SECRET
      value: "123456"
  volumeMounts:
    - mountPath: /share
      name: share-volume
  volumes:
    - name: share-volume
      emptyDir: {}
```

- We are going to use the `pod-presets/deployments.yaml` document to create two `Deployments` for the demo

> pod-presets/deployments.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: deployment-1
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: deployment-2
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f pod-presets/pod-presets.yaml
error: unable to recognize "pod-presets/pod-presets.yaml": no matches for kind "PodPreset" in version "settings.k8s.io/v1alpha1"
```

- Delete cluster

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323070554                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323070554
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323175238                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323175238
autoscaling-config      nodes.kubernetes.peelmicro.com-20190323070554                                           nodes.kubernetes.peelmicro.com-20190323070554
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-0e60b8162bc2ceb69
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-05f3f45b58b8cea21
instance                nodes.kubernetes.peelmicro.com                                                          i-071f80eae00d8502e
instance                nodes.kubernetes.peelmicro.com                                                          i-0edf065548705ec62
internet-gateway        kubernetes.peelmicro.com                                                                igw-0cb5f8339a2b9c94e
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
route-table             kubernetes.peelmicro.com                                                                rtb-0c7e439dcbfb1dcdb
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group          masters.kubernetes.peelmicro.com                                                        sg-0108e5f72fdfab112
security-group          nodes.kubernetes.peelmicro.com                                                          sg-043c3cc54c11feea4
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-0bcc1c25be5351785
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0f10dc0d4dff3bf49
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-0ff4cd78f0279e6a5
volume                  kubernetes.peelmicro.com-dynamic-pvc-dc7aa06b-4d65-11e9-96a3-023c3e632158               vol-06368c3a959c7e659
vpc                     kubernetes.peelmicro.com                                                                vpc-081442a1ac9eb3908

autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323070554 ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
internet-gateway:igw-0cb5f8339a2b9c94e  still has dependencies, will retry
autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
route53-record:Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com. ok
volume:vol-06368c3a959c7e659    ok
instance:i-071f80eae00d8502e    ok
instance:i-05f3f45b58b8cea21    ok
instance:i-0edf065548705ec62    ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-role:masters.kubernetes.peelmicro.com       ok
iam-role:nodes.kubernetes.peelmicro.com ok
autoscaling-config:nodes.kubernetes.peelmicro.com-20190323070554        ok
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323175238 ok
subnet:subnet-0bcc1c25be5351785 still has dependencies, will retry
volume:vol-0f10dc0d4dff3bf49    still has dependencies, will retry
volume:vol-0ff4cd78f0279e6a5    still has dependencies, will retry
security-group:sg-0108e5f72fdfab112     still has dependencies, will retry
security-group:sg-043c3cc54c11feea4     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        vpc:vpc-081442a1ac9eb3908
        volume:vol-0ff4cd78f0279e6a5
        route-table:rtb-0c7e439dcbfb1dcdb
        security-group:sg-043c3cc54c11feea4
        internet-gateway:igw-0cb5f8339a2b9c94e
        dhcp-options:dopt-0e60b8162bc2ceb69
        subnet:subnet-0bcc1c25be5351785
        volume:vol-0f10dc0d4dff3bf49
        security-group:sg-0108e5f72fdfab112
subnet:subnet-0bcc1c25be5351785 still has dependencies, will retry
volume:vol-0ff4cd78f0279e6a5    still has dependencies, will retry
volume:vol-0f10dc0d4dff3bf49    still has dependencies, will retry
internet-gateway:igw-0cb5f8339a2b9c94e  still has dependencies, will retry
security-group:sg-0108e5f72fdfab112     still has dependencies, will retry
security-group:sg-043c3cc54c11feea4     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        volume:vol-0ff4cd78f0279e6a5
        route-table:rtb-0c7e439dcbfb1dcdb
        security-group:sg-043c3cc54c11feea4
        dhcp-options:dopt-0e60b8162bc2ceb69
        internet-gateway:igw-0cb5f8339a2b9c94e
        subnet:subnet-0bcc1c25be5351785
        volume:vol-0f10dc0d4dff3bf49
        security-group:sg-0108e5f72fdfab112
        vpc:vpc-081442a1ac9eb3908
subnet:subnet-0bcc1c25be5351785 still has dependencies, will retry
volume:vol-0ff4cd78f0279e6a5    ok
volume:vol-0f10dc0d4dff3bf49    ok
internet-gateway:igw-0cb5f8339a2b9c94e  still has dependencies, will retry
security-group:sg-043c3cc54c11feea4     still has dependencies, will retry
security-group:sg-0108e5f72fdfab112     ok
Not all resources deleted; waiting before reattempting deletion
        route-table:rtb-0c7e439dcbfb1dcdb
        security-group:sg-043c3cc54c11feea4
        dhcp-options:dopt-0e60b8162bc2ceb69
        internet-gateway:igw-0cb5f8339a2b9c94e
        subnet:subnet-0bcc1c25be5351785
        vpc:vpc-081442a1ac9eb3908
subnet:subnet-0bcc1c25be5351785 ok
internet-gateway:igw-0cb5f8339a2b9c94e  ok
security-group:sg-043c3cc54c11feea4     ok
route-table:rtb-0c7e439dcbfb1dcdb       ok
vpc:vpc-081442a1ac9eb3908       ok
dhcp-options:dopt-0e60b8162bc2ceb69     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPodPresets2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPodPresets3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPodPresets4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPodPresets5.png)

### 62. StatefulSets

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/StatefulSets.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/StatefulSets2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/StatefulSets3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/StatefulSets4.png)

### 63. Demo: StatefulSets

- We are going to use the `statefulset/cassandra.yaml` document to create `StatefulSet`, `StorageClass` and `Service` pods.

> statefulset/cassandra.yaml

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: cassandra
  labels:
    app: cassandra
spec:
  serviceName: cassandra
  replicas: 3
  selector:
    matchLabels:
      app: cassandra
  template:
    metadata:
      labels:
        app: cassandra
    spec:
      terminationGracePeriodSeconds: 1800
      containers:
        - name: cassandra
          image: gcr.io/google-samples/cassandra:v13
          imagePullPolicy: Always
          ports:
            - containerPort: 7000
              name: intra-node
            - containerPort: 7001
              name: tls-intra-node
            - containerPort: 7199
              name: jmx
            - containerPort: 9042
              name: cql
          resources:
            limits:
              cpu: "500m"
              memory: 1Gi
            requests:
              cpu: "500m"
              memory: 1Gi
          securityContext:
            capabilities:
              add:
                - IPC_LOCK
          lifecycle:
            preStop:
              exec:
                command:
                  - /bin/sh
                  - -c
                  - nodetool drain
          env:
            - name: MAX_HEAP_SIZE
              value: 512M
            - name: HEAP_NEWSIZE
              value: 100M
            - name: CASSANDRA_SEEDS
              value: "cassandra-0.cassandra.default.svc.cluster.local"
            - name: CASSANDRA_CLUSTER_NAME
              value: "K8Demo"
            - name: CASSANDRA_DC
              value: "DC1-K8Demo"
            - name: CASSANDRA_RACK
              value: "Rack1-K8Demo"
            - name: POD_IP
              valueFrom:
                fieldRef:
                  fieldPath: status.podIP
          readinessProbe:
            exec:
              command:
                - /bin/bash
                - -c
                - /ready-probe.sh
            initialDelaySeconds: 15
            timeoutSeconds: 5
          # These volume mounts are persistent. They are like inline claims,
          # but not exactly because the names need to match exactly one of
          # the stateful pod volumes.
          volumeMounts:
            - name: cassandra-data
              mountPath: /cassandra_data
  # These are converted to volume claims by the controller
  # and mounted at the paths mentioned above.
  # do not use these in production until ssd GCEPersistentDisk or other ssd pd
  volumeClaimTemplates:
    - metadata:
        name: cassandra-data
      spec:
        accessModes: ["ReadWriteOnce"]
        storageClassName: standard
        resources:
          requests:
            storage: 8Gi
---
kind: StorageClass
apiVersion: storage.k8s.io/v1beta1
metadata:
  name: standard
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  zone: eu-central-1a
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: cassandra
  name: cassandra
spec:
  clusterIP: None
  ports:
    - port: 9042
  selector:
    app: cassandra
```

- We need to create 3 nodes to make it work.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=3 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0323 18:51:33.112857   28078 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0323 18:51:33.245647   28078 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0323 18:51:33.622353   28078 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0323 18:51:34.791797   28078 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0323 18:51:35.134067   28078 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0323 18:51:35.408486   28078 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0323 18:51:35.534896   28078 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0323 18:51:35.570979   28078 executor.go:103] Tasks: 73 done / 73 total; 0 can run
Will create resources:
  AutoscalingGroup/master-eu-central-1a.masters.kubernetes.peelmicro.com
        MinSize                 1
        MaxSize                 1
        Subnets                 [name:eu-central-1a.kubernetes.peelmicro.com]
        Tags                    {k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: master-eu-central-1a, k8s.io/role/master: 1, Name: master-eu-central-1a.masters.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com}
.
.
.
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

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0323 18:52:56.624059   28123 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0323 18:52:57.338727   28123 vfs_castore.go:735] Issuing new certificate: "ca"
I0323 18:52:57.342306   28123 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0323 18:52:57.563278   28123 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0323 18:52:59.203874   28123 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0323 18:52:59.354562   28123 vfs_castore.go:735] Issuing new certificate: "kops"
I0323 18:52:59.544033   28123 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0323 18:52:59.825330   28123 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0323 18:52:59.891634   28123 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0323 18:53:00.155005   28123 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0323 18:53:00.220850   28123 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0323 18:53:00.399784   28123 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0323 18:53:00.537167   28123 vfs_castore.go:735] Issuing new certificate: "master"
I0323 18:53:00.745016   28123 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0323 18:53:00.948753   28123 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0323 18:53:01.241592   28123 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0323 18:53:01.241915   28123 launchconfiguration.go:380] waiting for IAM instance profile "nodes.kubernetes.peelmicro.com" to be ready
I0323 18:53:11.654930   28123 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0323 18:53:12.227101   28123 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0323 18:53:12.227346   28123 dns.go:153] Pre-creating DNS records
I0323 18:53:12.930305   28123 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kubernetes.peelmicro.com

Cluster is starting.  It should be ready in a few minutes.

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kubernetes.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.

root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kops validate cluster --state=s3://kubernetes.peelmicro.com
Using cluster from kubectl context: kubernetes.peelmicro.com

Validating cluster kubernetes.peelmicro.com

INSTANCE GROUPS
NAME                    ROLE    MACHINETYPE     MIN     MAX     SUBNETS
master-eu-central-1a    Master  t2.micro        1       1       eu-central-1a
nodes                   Node    t2.micro        3       3       eu-central-1a

NODE STATUS
NAME                                            ROLE    READY
ip-172-20-37-100.eu-central-1.compute.internal  node    True
ip-172-20-52-197.eu-central-1.compute.internal  master  True
ip-172-20-58-145.eu-central-1.compute.internal  node    True
ip-172-20-59-163.eu-central-1.compute.internal  node    True

Your cluster kubernetes.peelmicro.com is ready
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f statefulset/cassandra.yaml
statefulset.apps/cassandra created
storageclass.storage.k8s.io/standard created
service/cassandra created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME          READY   STATUS    RESTARTS   AGE
cassandra-0   0/1     Pending   0          39s
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                STORAGECLASS   REASON   AGE
pvc-34f81e18-4d9e-11e9-839f-02ec8736b508   8Gi        RWO            Delete           Bound    default/cassandra-data-cassandra-0   standard                1m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pvc
NAME                         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
cassandra-data-cassandra-0   Bound    pvc-34f81e18-4d9e-11e9-839f-02ec8736b508   8Gi        RWO            standard       1m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# watch kubectl get pod
```

```bash
Every 2.0s: kubectl get pod                                                                                            ubuntu-s-1vcpu-2gb-lon1-01: Sat Mar 23 19:05:47 2019

NAME          READY   STATUS    RESTARTS   AGE
cassandra-0   0/1     Pending   0          3m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod/cassandra-0
Name:           cassandra-0
Namespace:      default
Node:           <none>
Labels:         app=cassandra
                controller-revision-hash=cassandra-95df4dff4
                statefulset.kubernetes.io/pod-name=cassandra-0
Annotations:    <none>
Status:         Pending
IP:
Controlled By:  StatefulSet/cassandra
Containers:
  cassandra:
    Image:       gcr.io/google-samples/cassandra:v13
    Ports:       7000/TCP, 7001/TCP, 7199/TCP, 9042/TCP
    Host Ports:  0/TCP, 0/TCP, 0/TCP, 0/TCP
    Limits:
      cpu:     500m
      memory:  1Gi
    Requests:
      cpu:      500m
      memory:   1Gi
    Readiness:  exec [/bin/bash -c /ready-probe.sh] delay=15s timeout=5s period=10s #success=1 #failure=3
    Environment:
      MAX_HEAP_SIZE:           512M
      HEAP_NEWSIZE:            100M
      CASSANDRA_SEEDS:         cassandra-0.cassandra.default.svc.cluster.local
      CASSANDRA_CLUSTER_NAME:  K8Demo
      CASSANDRA_DC:            DC1-K8Demo
      CASSANDRA_RACK:          Rack1-K8Demo
      POD_IP:                   (v1:status.podIP)
    Mounts:
      /cassandra_data from cassandra-data (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-hbvfj (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  cassandra-data:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  cassandra-data-cassandra-0
    ReadOnly:   false
  default-token-hbvfj:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-hbvfj
    Optional:    false
QoS Class:       Guaranteed
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                   From               Message
  ----     ------            ----                  ----               -------
  Warning  FailedScheduling  45s (x22 over 5m54s)  default-scheduler  0/4 nodes are available: 1 Insufficient cpu, 4 Insufficient memory.
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoStatefulSets.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoStatefulSets2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoStatefulSets3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoStatefulSets4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoStatefulSets5.png)

- Delete everything.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f statefulset/cassandra.yaml
statefulset.apps "cassandra" deleted
storageclass.storage.k8s.io "standard" deleted
service "cassandra" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   18m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pvc                        NAME                         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
cassandra-data-cassandra-0   Bound    pvc-34f81e18-4d9e-11e9-839f-02ec8736b508   8Gi        RWO            standard       12m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                STORAGECLASS   REASON   AGE
pvc-34f81e18-4d9e-11e9-839f-02ec8736b508   8Gi        RWO            Delete           Bound    default/cassandra-data-cassandra-0   standard                12m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete pvc/cassandra-data-cassandra-0
persistentvolumeclaim "cassandra-data-cassandra-0" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pv
No resources found.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pvc
No resources found.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323185301                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323185301
autoscaling-config      nodes.kubernetes.peelmicro.com-20190323185301                                           nodes.kubernetes.peelmicro.com-20190323185301
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-00d435e34569581d9
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-0374c94e5924d4f41
instance                nodes.kubernetes.peelmicro.com                                                          i-0582fb2ca34857ada
instance                nodes.kubernetes.peelmicro.com                                                          i-085f44bb3a29d6ddb
instance                nodes.kubernetes.peelmicro.com                                                          i-0e184966257508613
internet-gateway        kubernetes.peelmicro.com                                                                igw-0a013d0b75733c5ed
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
route-table             kubernetes.peelmicro.com                                                                rtb-071d458f38b2a80c2
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group          masters.kubernetes.peelmicro.com                                                        sg-084b760503878dfe6
security-group          nodes.kubernetes.peelmicro.com                                                          sg-0074a1c6a544944b1
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-07fc2df8176368397
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-056e2c659812b44c5
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-0476b9ac49503a12c
vpc                     kubernetes.peelmicro.com                                                                vpc-0abbb1b158ce5773f

autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
route53-record:Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com. ok
instance:i-085f44bb3a29d6ddb    ok
instance:i-0374c94e5924d4f41    ok
instance:i-0e184966257508613    ok
instance:i-0582fb2ca34857ada    ok
internet-gateway:igw-0a013d0b75733c5ed  still has dependencies, will retry
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-role:masters.kubernetes.peelmicro.com       ok
iam-role:nodes.kubernetes.peelmicro.com ok
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190323185301 ok
autoscaling-config:nodes.kubernetes.peelmicro.com-20190323185301        ok
subnet:subnet-07fc2df8176368397 still has dependencies, will retry
volume:vol-056e2c659812b44c5    still has dependencies, will retry
volume:vol-0476b9ac49503a12c    still has dependencies, will retry
security-group:sg-084b760503878dfe6     still has dependencies, will retry
security-group:sg-0074a1c6a544944b1     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        internet-gateway:igw-0a013d0b75733c5ed
        security-group:sg-0074a1c6a544944b1
        subnet:subnet-07fc2df8176368397
        volume:vol-0476b9ac49503a12c
        vpc:vpc-0abbb1b158ce5773f
        security-group:sg-084b760503878dfe6
        dhcp-options:dopt-00d435e34569581d9
        volume:vol-056e2c659812b44c5
        route-table:rtb-071d458f38b2a80c2
subnet:subnet-07fc2df8176368397 still has dependencies, will retry
volume:vol-056e2c659812b44c5    still has dependencies, will retry
volume:vol-0476b9ac49503a12c    still has dependencies, will retry
internet-gateway:igw-0a013d0b75733c5ed  still has dependencies, will retry
security-group:sg-0074a1c6a544944b1     still has dependencies, will retry
security-group:sg-084b760503878dfe6     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        vpc:vpc-0abbb1b158ce5773f
        volume:vol-0476b9ac49503a12c
        security-group:sg-084b760503878dfe6
        dhcp-options:dopt-00d435e34569581d9
        volume:vol-056e2c659812b44c5
        route-table:rtb-071d458f38b2a80c2
        subnet:subnet-07fc2df8176368397
        internet-gateway:igw-0a013d0b75733c5ed
        security-group:sg-0074a1c6a544944b1
subnet:subnet-07fc2df8176368397 still has dependencies, will retry
volume:vol-0476b9ac49503a12c    ok
volume:vol-056e2c659812b44c5    ok
internet-gateway:igw-0a013d0b75733c5ed  still has dependencies, will retry
security-group:sg-084b760503878dfe6     still has dependencies, will retry
security-group:sg-0074a1c6a544944b1     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        vpc:vpc-0abbb1b158ce5773f
        security-group:sg-084b760503878dfe6
        dhcp-options:dopt-00d435e34569581d9
        route-table:rtb-071d458f38b2a80c2
        subnet:subnet-07fc2df8176368397
        internet-gateway:igw-0a013d0b75733c5ed
        security-group:sg-0074a1c6a544944b1
subnet:subnet-07fc2df8176368397 still has dependencies, will retry
security-group:sg-0074a1c6a544944b1     still has dependencies, will retry
security-group:sg-084b760503878dfe6     ok
internet-gateway:igw-0a013d0b75733c5ed  ok
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-0074a1c6a544944b1
        subnet:subnet-07fc2df8176368397
        vpc:vpc-0abbb1b158ce5773f
        dhcp-options:dopt-00d435e34569581d9
        route-table:rtb-071d458f38b2a80c2
subnet:subnet-07fc2df8176368397 ok
security-group:sg-0074a1c6a544944b1     ok
route-table:rtb-071d458f38b2a80c2       ok
vpc:vpc-0abbb1b158ce5773f       ok
dhcp-options:dopt-00d435e34569581d9     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoStatefulSets6.png)

### 64. Daemon Sets

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DaemonSets.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DaemonSets2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DaemonSets3.png)

### 65. Resource Usage Monitoring

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceUsageMonitoring.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceUsageMonitoring2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/ResourceUsageMonitoring3.png)

### 66. Demo: Resource Monitoring using Metrics Server

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceMonitoringUsingMetricsServer.png)

- [Heapster](https://github.com/kubernetes-retired/heapster) is not used anymore.

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceMonitoringUsingMetricsServer2.png)

- We cab use [Metrics Server](https://github.com/kubernetes-incubator/metrics-server)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceMonitoringUsingMetricsServer3.png)

- The documents used to create `Metrics Server` are:

> metrics-server/auth-delegator.yaml

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: metrics-server:system:auth-delegator
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:auth-delegator
subjects:
  - kind: ServiceAccount
    name: metrics-server
    namespace: kube-system
```

> metrics-server/auth-reader.yaml

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: RoleBinding
metadata:
  name: metrics-server-auth-reader
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: extension-apiserver-authentication-reader
subjects:
  - kind: ServiceAccount
    name: metrics-server
    namespace: kube-system
```

> metrics-server/metrics-apiservice.yaml

```yaml
---
apiVersion: apiregistration.k8s.io/v1beta1
kind: APIService
metadata:
  name: v1beta1.metrics.k8s.io
spec:
  service:
    name: metrics-server
    namespace: kube-system
  group: metrics.k8s.io
  version: v1beta1
  insecureSkipTLSVerify: true
  groupPriorityMinimum: 100
  versionPriority: 100
```

> metrics-server/metrics-server-deployment.yaml

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: metrics-server
  namespace: kube-system
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: metrics-server
  namespace: kube-system
  labels:
    k8s-app: metrics-server
spec:
  selector:
    matchLabels:
      k8s-app: metrics-server
  template:
    metadata:
      name: metrics-server
      labels:
        k8s-app: metrics-server
    spec:
      serviceAccountName: metrics-server
      containers:
        - name: metrics-server
          image: gcr.io/google_containers/metrics-server-amd64:v0.2.1
          imagePullPolicy: Always
          command:
            - /metrics-server
            - --source=kubernetes.summary_api:''
```

> metrics-server/metrics-server-service.yaml

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: metrics-server
  namespace: kube-system
  labels:
    kubernetes.io/name: "Metrics-server"
spec:
  selector:
    k8s-app: metrics-server
  ports:
    - port: 443
      protocol: TCP
      targetPort: 443
```

> metrics-server/resource-reader.yaml

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: system:metrics-server
rules:
  - apiGroups:
      - ""
    resources:
      - pods
      - nodes
      - nodes/stats
      - namespaces
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - "extensions"
    resources:
      - deployments
    verbs:
      - get
      - list
      - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:metrics-server
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:metrics-server
subjects:
  - kind: ServiceAccount
    name: metrics-server
    namespace: kube-system
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl create -f .
clusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created
rolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created
apiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created
serviceaccount/metrics-server created
deployment.extensions/metrics-server created
service/metrics-server created
clusterrole.rbac.authorization.k8s.io/system:metrics-server created
clusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl top
Display Resource (CPU/Memory/Storage) usage.

The top command allows you to see the resource consumption for nodes or pods.

This command requires Heapster to be correctly configured and working on the server.

Available Commands:
  node        Display Resource (CPU/Memory/Storage) usage of nodes
  pod         Display Resource (CPU/Memory/Storage) usage of pods

Usage:
  kubectl top [flags] [options]

Use "kubectl <command> --help" for more information about a given command.
Use "kubectl options" for a list of global command-line options (applies to all commands).
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl top node
error: metrics not available yet
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl top pod
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$
```

- We need to have a pod running

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl run hello-kubernetes --image=k8s.gcr.io/echoserver:1.10 --port=8080
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/hello-kubernetes created
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl top pod
error: metrics not available yet
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl top node
error: metrics not available yet
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl get pod
NAME                                READY   STATUS    RESTARTS   AGE
hello-kubernetes-76c7d59cd7-lg2wb   1/1     Running   0          9m18s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl top pod
W0323 19:50:50.689734    5313 top_pod.go:259] Metrics not available for pod default/hello-kubernetes-76c7d59cd7-lg2wb, age: 10m12.689717788s
error: Metrics not available for pod default/hello-kubernetes-76c7d59cd7-lg2wb, age: 10m12.689717788s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceMonitoringUsingMetricsServer4.png)

- Delete everything

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl delete -f .
clusterrolebinding.rbac.authorization.k8s.io "metrics-server:system:auth-delegator" deleted
rolebinding.rbac.authorization.k8s.io "metrics-server-auth-reader" deleted
apiservice.apiregistration.k8s.io "v1beta1.metrics.k8s.io" deleted
serviceaccount "metrics-server" deleted
deployment.extensions "metrics-server" deleted
service "metrics-server" deleted
clusterrole.rbac.authorization.k8s.io "system:metrics-server" deleted
clusterrolebinding.rbac.authorization.k8s.io "system:metrics-server" deleted
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course/metrics-server$ kubectl delete pod hello-kubernetes-76c7d59cd7-lg2wb
pod "hello-kubernetes-76c7d59cd7-lg2wb" deleted
```

### 67. Demo: Resource Usage Monitoring

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring11.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring12.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring13.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring14.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoResourceUsageMonitoring15.png)

### 68. Autoscaling

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Autoscaling.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Autoscaling2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Autoscaling3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Autoscaling4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Autoscaling5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Autoscaling6.png)

### 69. Demo: Autoscaling

- We are going to use the `autoscaling/hpa-example.yml` to create `Deployment`, `Service` and `HorizontalPodAutoscaler` pods.

> autoscaling/hpa-example.yml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hpa-example
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: hpa-example
    spec:
      containers:
        - name: hpa-example
          image: gcr.io/google_containers/hpa-example
          ports:
            - name: http-port
              containerPort: 80
          resources:
            requests:
              cpu: 200m
---
apiVersion: v1
kind: Service
metadata:
  name: hpa-example
spec:
  ports:
    - port: 31001
      nodePort: 31001
      targetPort: http-port
      protocol: TCP
  selector:
    app: hpa-example
  type: NodePort
---
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: hpa-example-autoscaler
spec:
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: hpa-example
  minReplicas: 1
  maxReplicas: 10
  targetCPUUtilizationPercentage: 50
```

- As explained in [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/, the HorizontalPodAutoscaler normally fetches metrics from a series of aggregated APIs (metrics.k8s.io, custom.metrics.k8s.io, and external.metrics.k8s.io). The metrics.k8s.io API is usually provided by metrics-server, which needs to be launched separately. So, `metrics-server` can be used instead of `Heapster`.

- As explained in [Metrics Server](https://kubernetes.io/docs/tasks/debug-application-cluster/core-metrics-pipeline/#metrics-server), starting from Kubernetes 1.8, it’s deployed by default in clusters created by kube-up.sh script as a Deployment object.

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f autoscaling/hpa-example.yml
deployment.extensions/hpa-example created
service/hpa-example created
horizontalpodautoscaler.autoscaling/hpa-example-autoscaler created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get hpa
NAME                     REFERENCE                TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
hpa-example-autoscaler   Deployment/hpa-example   <unknown>/50%   1         10        3          48s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl run -i --tty load-generator --image=busybox /bin/sh
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
If you don't see a command prompt, try pressing enter.
/ # wget http://hpa-example.default.svc.cluster.local:31001
Connecting to hpa-example.default.svc.cluster.local:31001 (10.98.198.23:31001)
index.html           100% |***************************************************************************************************************************|     3  0:00:00 ETA
/ # cat index.html
/ # rm index.html
/ # while true; do wget http://hpa-example.default.svc.cluster.local:31001; done
Connecting to hpa-example.default.svc.cluster.local:31001 (10.98.198.23:31001)
index.html           100% |***************************************************************************************************************************|     3  0:00:00 ETA
/ # rm index.html
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # while true; do wget -q -O- http://hpa-example.default.svc.cluster.local:31001; done
OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!OK!
```

```bash
ubuntu@kubernetes-master:~$ kubectl get pod
NAME                                READY   STATUS    RESTARTS   AGE
hello-kubernetes-76c7d59cd7-nlknw   1/1     Running   0          10h
hpa-example-5b5f7c7cc9-5nvbk        1/1     Running   0          10m
hpa-example-5b5f7c7cc9-rqp2d        1/1     Running   0          10m
hpa-example-5b5f7c7cc9-sfn7b        1/1     Running   0          10m
load-generator-557649ddcd-qk2ft     1/1     Running   0          7m42s
ubuntu@kubernetes-master:~$ kubectl get hpa
NAME                     REFERENCE                TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
hpa-example-autoscaler   Deployment/hpa-example   <unknown>/50%   1         10        3          10m
ubuntu@kubernetes-master:~$
```

```bash
ubuntu@kubernetes-master:~$ kubectl describe hpa/hpa-example-autoscaler
Name:                                                  hpa-example-autoscaler
Namespace:                                             default
Labels:                                                <none>
Annotations:                                           <none>
CreationTimestamp:                                     Sun, 24 Mar 2019 06:29:51 +0000
Reference:                                             Deployment/hpa-example
Metrics:                                               ( current / target )
  resource cpu on pods  (as a percentage of request):  <unknown> / 50%
Min replicas:                                          1
Max replicas:                                          10
Deployment pods:                                       3 current / 0 desired
Conditions:
  Type           Status  Reason                   Message
  ----           ------  ------                   -------
  AbleToScale    True    SucceededGetScale        the HPA controller was able to get the target's current scale
  ScalingActive  False   FailedGetResourceMetric  the HPA was unable to compute the replica count: unable to get metrics for resource cpu: unable to fetch metrics from resource metrics API: the server could not find the requested resource (get pods.metrics.k8s.io)
Events:
  Type     Reason                        Age                   From                       Message
  ----     ------                        ----                  ----                       -------
  Warning  FailedComputeMetricsReplicas  14m (x12 over 17m)    horizontal-pod-autoscaler  failed to get cpu utilization: unable to get metrics for resource cpu: unable to fetch metrics from resource metrics API: the server could not find the requested resource (get pods.metrics.k8s.io)
  Warning  FailedGetResourceMetric       2m12s (x61 over 17m)  horizontal-pod-autoscaler  unable to get metrics for resource cpu: unable to fetch metrics from resource metrics API: the server could not find the requested resource (get pods.metrics.k8s.io)
```

- As explained in [Docker Kubernetes (Mac) - Autoscaler unable to find metrics](https://stackoverflow.com/a/54106726/1059286)

```bash
ubuntu@kubernetes-master:~/training$ git clone https://github.com/kubernetes-incubator/metrics-server.git
Cloning into 'metrics-server'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 9621 (delta 0), reused 2 (delta 0), pack-reused 9614
Receiving objects: 100% (9621/9621), 11.24 MiB | 8.28 MiB/s, done.
Resolving deltas: 100% (4845/4845), done.
Checking connectivity... done.
```

```bash
ubuntu@kubernetes-master:~/training/metrics-server$ kubectl create -f deploy/1.8+
clusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created
clusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created
rolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created
apiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created
serviceaccount/metrics-server created
deployment.extensions/metrics-server created
service/metrics-server created
clusterrole.rbac.authorization.k8s.io/system:metrics-server created
clusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created
ubuntu@kubernetes-master:~/training/metrics-server$
```

```bash
buntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete -f autoscaling/hpa-example.yml
deployment.extensions "hpa-example" deleted
service "hpa-example" deleted
horizontalpodautoscaler.autoscaling "hpa-example-autoscaler" deleted
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f autoscaling/hpa-example.yml
deployment.extensions/hpa-example created
service/hpa-example created
horizontalpodautoscaler.autoscaling/hpa-example-autoscaler created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                               READY   STATUS    RESTARTS   AGE
pod/hpa-example-5b5f7c7cc9-qc9x2   1/1     Running   0          24s
pod/hpa-example-5b5f7c7cc9-rmcp4   1/1     Running   0          24s
pod/hpa-example-5b5f7c7cc9-tcbbb   1/1     Running   0          24s

NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)           AGE
service/hpa-example   NodePort    10.101.150.109   <none>        31001:31001/TCP   24s
service/kubernetes    ClusterIP   10.96.0.1        <none>        443/TCP           24d

NAME                          READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hpa-example   3/3     3            3           24s

NAME                                     DESIRED   CURRENT   READY   AGE
replicaset.apps/hpa-example-5b5f7c7cc9   3         3         3       24s

NAME                                                         REFERENCE                TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
horizontalpodautoscaler.autoscaling/hpa-example-autoscaler   Deployment/hpa-example   <unknown>/50%   1         10        3          24s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get hpa
NAME                     REFERENCE                TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
hpa-example-autoscaler   Deployment/hpa-example   <unknown>/50%   1         10        3          71s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe hpa/hpa-example-autoscaler
Name:                                                  hpa-example-autoscaler
Namespace:                                             default
Labels:                                                <none>
Annotations:                                           <none>
CreationTimestamp:                                     Sun, 24 Mar 2019 07:01:44 +0000
Reference:                                             Deployment/hpa-example
Metrics:                                               ( current / target )
  resource cpu on pods  (as a percentage of request):  <unknown> / 50%
Min replicas:                                          1
Max replicas:                                          10
Deployment pods:                                       3 current / 0 desired
Conditions:
  Type           Status  Reason                   Message
  ----           ------  ------                   -------
  AbleToScale    True    SucceededGetScale        the HPA controller was able to get the target's current scale
  ScalingActive  False   FailedGetResourceMetric  the HPA was unable to compute the replica count: unable to get metrics for resource cpu: no metrics returned from resource metrics API
Events:
  Type     Reason                        Age               From                       Message
  ----     ------                        ----              ----                       -------
  Warning  FailedGetResourceMetric       4s (x6 over 79s)  horizontal-pod-autoscaler  unable to get metrics for resource cpu: no metrics returned from resource metrics API
  Warning  FailedComputeMetricsReplicas  4s (x6 over 79s)  horizontal-pod-autoscaler  failed to get cpu utilization: unable to get metrics for resource cpu: no metrics returned from resource metrics API
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete -f autoscaling/hpa-example.yml
deployment.extensions "hpa-example" deleted
service "hpa-example" deleted
horizontalpodautoscaler.autoscaling "hpa-example-autoscaler" deleted
```

```bash
ubuntu@kubernetes-master:~/training/metrics-server$ kubectl delete -f deploy/1.8+
clusterrole.rbac.authorization.k8s.io "system:aggregated-metrics-reader" deleted
clusterrolebinding.rbac.authorization.k8s.io "metrics-server:system:auth-delegator" deleted
rolebinding.rbac.authorization.k8s.io "metrics-server-auth-reader" deleted
apiservice.apiregistration.k8s.io "v1beta1.metrics.k8s.io" deleted
serviceaccount "metrics-server" deleted
deployment.extensions "metrics-server" deleted
service "metrics-server" deleted
clusterrole.rbac.authorization.k8s.io "system:metrics-server" deleted
clusterrolebinding.rbac.authorization.k8s.io "system:metrics-server" deleted
```

- It doesn't work!

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAutoscaling.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAutoscaling2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAutoscaling3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoAutoscaling4.png)

### 70. Affinity / Anti-Affinity

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/AffinityAntiAffinity9.png)

### 71. Demo: Affinity / Anti-Affinity

- With the `Digital Ocean` cluster we have:

```bash
ubuntu@kubernetes-master:~$ kubectl get node
NAME                 STATUS   ROLES    AGE   VERSION
kubernetes-master    Ready    master   24d   v1.13.3
kubernetes-node-01   Ready    <none>   24d   v1.13.3
ubuntu@kubernetes-master:~$ kubectl describe node kubernetes-node-01
Name:               kubernetes-node-01
Roles:              <none>
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    hardware=high-spec
                    kubernetes.io/hostname=kubernetes-node-01
Annotations:        flannel.alpha.coreos.com/backend-data: {"VtepMAC":"4e:57:95:5f:34:5d"}
                    flannel.alpha.coreos.com/backend-type: vxlan
                    flannel.alpha.coreos.com/kube-subnet-manager: true
                    flannel.alpha.coreos.com/public-ip: 167.99.202.93
                    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Wed, 27 Feb 2019 18:20:43 +0000
Taints:             <none>
Unschedulable:      false
Conditions:
  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----             ------  -----------------                 ------------------                ------                       -------
  MemoryPressure   False   Sun, 24 Mar 2019 07:20:11 +0000   Wed, 27 Feb 2019 18:20:43 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure     False   Sun, 24 Mar 2019 07:20:11 +0000   Wed, 27 Feb 2019 18:20:43 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure      False   Sun, 24 Mar 2019 07:20:11 +0000   Wed, 27 Feb 2019 18:20:43 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready            True    Sun, 24 Mar 2019 07:20:11 +0000   Wed, 27 Feb 2019 18:21:03 +0000   KubeletReady                 kubelet is posting ready status. AppArmor enabled
Addresses:
  InternalIP:  167.99.202.93
  Hostname:    kubernetes-node-01
Capacity:
 cpu:                2
 ephemeral-storage:  60795880Ki
 hugepages-1Gi:      0
 hugepages-2Mi:      0
 memory:             2000Mi
 pods:               110
Allocatable:
 cpu:                2
 ephemeral-storage:  56029482916
 hugepages-1Gi:      0
 hugepages-2Mi:      0
 memory:             1900Mi
 pods:               110
System Info:
 Machine ID:                 667a80d44336423fb28c67f85b9b5fc7
 System UUID:                667A80D4-4336-423F-B28C-67F85B9B5FC7
 Boot ID:                    22243a2b-0afe-4017-b5be-9245a2056e8f
 Kernel Version:             4.4.0-142-generic
 OS Image:                   Ubuntu 16.04.5 LTS
 Operating System:           linux
 Architecture:               amd64
 Container Runtime Version:  docker://17.3.3
 Kubelet Version:            v1.13.3
 Kube-Proxy Version:         v1.13.3
PodCIDR:                     10.244.1.0/24
Non-terminated Pods:         (3 in total)
  Namespace                  Name                                    CPU Requests  CPU Limits  Memory Requests  Memory Limits  AGE
  ---------                  ----                                    ------------  ----------  ---------------  -------------  ---
  kube-system                canal-8chhh                             250m (12%)    0 (0%)      0 (0%)           0 (0%)         24d
  kube-system                kube-proxy-7mttf                        0 (0%)        0 (0%)      0 (0%)           0 (0%)         24d
  kube-system                kubernetes-dashboard-57df4db6b-h8bzd    0 (0%)        0 (0%)      0 (0%)           0 (0%)         5d1h
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests    Limits
  --------           --------    ------
  cpu                250m (12%)  0 (0%)
  memory             0 (0%)      0 (0%)
  ephemeral-storage  0 (0%)      0 (0%)
Events:              <none>
ubuntu@kubernetes-master:~$
```

- We are going to use the `affinity/node-affinity.yaml` document to create a `Deployment` using `requiredDuringSchedulingIgnoredDuringExecution` and `preferredDuringSchedulingIgnoredDuringExecution`.

> affinity/node-affinity.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: node-affinity
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: node-affinity
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: env
                    operator: In
                    values:
                      - dev
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 1
              preference:
                matchExpressions:
                  - key: team
                    operator: In
                    values:
                      - engineering-project1
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl create -f affinity/node-affinity.yaml
deployment.extensions/node-affinity created
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
node-affinity-59c9767f55-g7cnq   0/1     Pending   0          14s
node-affinity-59c9767f55-qf2pn   0/1     Pending   0          14s
node-affinity-59c9767f55-wrqtl   0/1     Pending   0          14s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod node-affinity-59c9767f55-g7cnq
Name:               node-affinity-59c9767f55-g7cnq
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               <none>
Labels:             app=node-affinity
                    pod-template-hash=59c9767f55
Annotations:        <none>
Status:             Pending
IP:
Controlled By:      ReplicaSet/node-affinity-59c9767f55
Containers:
  k8s-demo:
    Image:        wardviaene/k8s-demo
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
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age               From               Message
  ----     ------            ----              ----               -------
  Warning  FailedScheduling  3s (x4 over 77s)  default-scheduler  0/2 nodes are available: 2 node(s) didn't match node selector.
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl label node kubernetes-node-01 env=dev
node/kubernetes-node-01 labeled
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
node-affinity-59c9767f55-g7cnq   1/1     Running   0          4m5s
node-affinity-59c9767f55-qf2pn   1/1     Running   0          4m5s
node-affinity-59c9767f55-wrqtl   1/1     Running   0          4m5s
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod node-affinity-59c9767f55-g7cnq
Name:               node-affinity-59c9767f55-g7cnq
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Sun, 24 Mar 2019 07:32:19 +0000
Labels:             app=node-affinity
                    pod-template-hash=59c9767f55
Annotations:        cni.projectcalico.org/podIP: 10.244.1.82/32
Status:             Running
IP:                 10.244.1.82
Controlled By:      ReplicaSet/node-affinity-59c9767f55
Containers:
  k8s-demo:
    Container ID:   docker://ec8b0981c46fa5398fba1d8951e650399945415ff535ed670d2648d85905d51d
    Image:          wardviaene/k8s-demo
    Image ID:       docker-pullable://wardviaene/k8s-demo@sha256:2c050f462f5d0b3a6430e7869bcdfe6ac48a447a89da79a56d0ef61460c7ab9e
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 24 Mar 2019 07:32:23 +0000
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
  Type     Reason            Age                   From                         Message
  ----     ------            ----                  ----                         -------
  Warning  FailedScheduling  118s (x7 over 5m12s)  default-scheduler            0/2 nodes are available: 2 node(s) didn't match node selector.
  Normal   Scheduled         96s                   default-scheduler            Successfully assigned default/node-affinity-59c9767f55-g7cnq to kubernetes-node-01
  Normal   Pulling           94s                   kubelet, kubernetes-node-01  pulling image "wardviaene/k8s-demo"
  Normal   Pulled            93s                   kubelet, kubernetes-node-01  Successfully pulled image "wardviaene/k8s-demo"
  Normal   Created           92s                   kubelet, kubernetes-node-01  Created container
  Normal   Started           92s                   kubelet, kubernetes-node-01  Started container
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get node
NAME                 STATUS   ROLES    AGE   VERSION
kubernetes-master    Ready    master   24d   v1.13.3
kubernetes-node-01   Ready    <none>   24d   v1.13.3
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl label node kubernetes-master team=engineering-project1
node/kubernetes-master labeled
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
node-affinity-59c9767f55-g7cnq   1/1     Running   0          9m2s
node-affinity-59c9767f55-qf2pn   1/1     Running   0          9m2s
node-affinity-59c9767f55-wrqtl   1/1     Running   0          9m2s
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete pod node-affinity-59c9767f55-g7cnq
pod "node-affinity-59c9767f55-g7cnq" deleted
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get pod
NAME                             READY   STATUS    RESTARTS   AGE
node-affinity-59c9767f55-qf2pn   1/1     Running   0          10m
node-affinity-59c9767f55-vxkpc   1/1     Running   0          42s
node-affinity-59c9767f55-wrqtl   1/1     Running   0          10m
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl describe pod node-affinity-59c9767f55-vxkpc
Name:               node-affinity-59c9767f55-vxkpc
Namespace:          default
Priority:           0
PriorityClassName:  <none>
Node:               kubernetes-node-01/167.99.202.93
Start Time:         Sun, 24 Mar 2019 07:38:16 +0000
Labels:             app=node-affinity
                    pod-template-hash=59c9767f55
Annotations:        cni.projectcalico.org/podIP: 10.244.1.84/32
Status:             Running
IP:                 10.244.1.84
Controlled By:      ReplicaSet/node-affinity-59c9767f55
Containers:
  k8s-demo:
    Container ID:   docker://61c56394b1f79b514aefc4bb5e6d472a8b3874ccb582f415f2dc6b8e2d3f0751
    Image:          wardviaene/k8s-demo
    Image ID:       docker-pullable://wardviaene/k8s-demo@sha256:2c050f462f5d0b3a6430e7869bcdfe6ac48a447a89da79a56d0ef61460c7ab9e
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 24 Mar 2019 07:38:18 +0000
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
  Normal  Scheduled  82s   default-scheduler            Successfully assigned default/node-affinity-59c9767f55-vxkpc to kubernetes-node-01
  Normal  Pulling    81s   kubelet, kubernetes-node-01  pulling image "wardviaene/k8s-demo"
  Normal  Pulled     80s   kubelet, kubernetes-node-01  Successfully pulled image "wardviaene/k8s-demo"
  Normal  Created    80s   kubelet, kubernetes-node-01  Created container
  Normal  Started    80s   kubelet, kubernetes-node-01  Started container
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$
```

- It doesn't seems it works with the `master`. We need to remove anything create to `Affinity` in the `Digital Ocean` cluster and create an `AWS` new one.

- In order to remove the labels previously created:

```bash
ubuntu@kubernetes-master:~$  kubectl label node kubernetes-master team-
node/kubernetes-master labeled
ubuntu@kubernetes-master:~$ kubectl label node kubernetes-node-01 env-
node/kubernetes-node-01 labeled
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl delete -f affinity/node-affinity.yaml
deployment.extensions "node-affinity" deleted
```

```bash
ubuntu@kubernetes-master:~/training/learn-devops-the-complete-kubernetes-course/kubernetes-course$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   24d
```

- The new claster must be created:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops create cluster --name=kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --zones=eu-central-1a --node-count=3 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.peelmicro.com
I0324 09:37:46.472188    5696 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0324 09:37:46.588740    5696 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0324 09:37:46.972188    5696 create_cluster.go:1351] Using SSH public key: /root/.ssh/id_rsa.pub
Previewing changes that will be made:

I0324 09:37:48.941570    5696 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0324 09:37:49.348240    5696 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0324 09:37:49.551880    5696 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0324 09:37:49.739739    5696 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0324 09:37:49.769743    5696 executor.go:103] Tasks: 73 done / 73 total; 0 can run
Will create resources:
  AutoscalingGroup/master-eu-central-1a.masters.kubernetes.peelmicro.com
        MinSize                 1
        MaxSize                 1
        Subnets                 [name:eu-central-1a.kubernetes.peelmicro.com]
        Tags                    {k8s.io/role/master: 1, Name: master-eu-central-1a.masters.kubernetes.peelmicro.com, KubernetesCluster: kubernetes.peelmicro.com, k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup: master-eu-central-1a}
        Granularity             1Minute
        Metrics                 [GroupDesiredCapacity, GroupInServiceInstances, GroupMaxSize, GroupMinSize, GroupPendingInstances, GroupStandbyInstances, GroupTerminatingInstances, GroupTotalInstances]
        LaunchConfiguration     name:master-eu-central-1a.masters.kubernetes.peelmicro.com
.
.
.
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

root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops update cluster kubernetes.peelmicro.com --yes --state=s3://kubernetes.peelmicro.com
I0324 09:38:24.322958    5712 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0324 09:38:25.085715    5712 vfs_castore.go:735] Issuing new certificate: "ca"
I0324 09:38:25.418185    5712 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0324 09:38:25.791391    5712 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0324 09:38:27.482182    5712 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0324 09:38:27.596041    5712 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0324 09:38:28.827348    5712 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0324 09:38:29.643538    5712 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0324 09:38:30.526616    5712 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0324 09:38:30.634634    5712 vfs_castore.go:735] Issuing new certificate: "master"
I0324 09:38:30.680188    5712 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0324 09:38:30.891637    5712 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0324 09:38:31.069773    5712 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0324 09:38:31.424731    5712 vfs_castore.go:735] Issuing new certificate: "kops"
I0324 09:38:31.673785    5712 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0324 09:38:31.932476    5712 launchconfiguration.go:380] waiting for IAM instance profile "masters.kubernetes.peelmicro.com" to be ready
I0324 09:38:42.455874    5712 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0324 09:38:43.028416    5712 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0324 09:38:43.028580    5712 dns.go:153] Pre-creating DNS records
I0324 09:38:44.924040    5712 update_cluster.go:290] Exporting kubecfg for cluster
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
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get node
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-34-112.eu-central-1.compute.internal   Ready    node     4m    v1.10.12
ip-172-20-40-20.eu-central-1.compute.internal    Ready    node     5m    v1.10.12
ip-172-20-42-118.eu-central-1.compute.internal   Ready    master   6m    v1.10.12
ip-172-20-43-5.eu-central-1.compute.internal     Ready    node     4m    v1.10.12
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl describe node ip-172-20-34-112.eu-central-1.compute.internal
Name:               ip-172-20-34-112.eu-central-1.compute.internal
Roles:              node
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/instance-type=t2.micro
                    beta.kubernetes.io/os=linux
                    failure-domain.beta.kubernetes.io/region=eu-central-1
                    failure-domain.beta.kubernetes.io/zone=eu-central-1a
                    kops.k8s.io/instancegroup=nodes
                    kubernetes.io/hostname=ip-172-20-34-112.eu-central-1.compute.internal
                    kubernetes.io/role=node
                    node-role.kubernetes.io/node=
Annotations:        node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Sun, 24 Mar 2019 09:43:44 +0000
Taints:             <none>
Unschedulable:      false
Conditions:
  Type                 Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----                 ------  -----------------                 ------------------                ------                       -------
  NetworkUnavailable   False   Sun, 24 Mar 2019 09:43:53 +0000   Sun, 24 Mar 2019 09:43:53 +0000   RouteCreated                 RouteController created a route
  OutOfDisk            False   Sun, 24 Mar 2019 09:50:55 +0000   Sun, 24 Mar 2019 09:43:44 +0000   KubeletHasSufficientDisk     kubelet has sufficient disk space available
  MemoryPressure       False   Sun, 24 Mar 2019 09:50:55 +0000   Sun, 24 Mar 2019 09:43:44 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure         False   Sun, 24 Mar 2019 09:50:55 +0000   Sun, 24 Mar 2019 09:43:44 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure          False   Sun, 24 Mar 2019 09:50:55 +0000   Sun, 24 Mar 2019 09:43:44 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready                True    Sun, 24 Mar 2019 09:50:55 +0000   Sun, 24 Mar 2019 09:44:04 +0000   KubeletReady                 kubelet is posting ready status
Addresses:
  InternalIP:   172.20.34.112
  ExternalIP:   18.195.97.139
  InternalDNS:  ip-172-20-34-112.eu-central-1.compute.internal
  ExternalDNS:  ec2-18-195-97-139.eu-central-1.compute.amazonaws.com
  Hostname:     ip-172-20-34-112.eu-central-1.compute.internal
Capacity:
 cpu:                1
 ephemeral-storage:  125749636Ki
 hugepages-2Mi:      0
 memory:             1018716Ki
 pods:               110
Allocatable:
 cpu:                1
 ephemeral-storage:  115890864346
 hugepages-2Mi:      0
 memory:             916316Ki
 pods:               110
System Info:
 Machine ID:                 32360804e2664e96ab15b94dc53f9260
 System UUID:                EC238F46-4850-32D5-89D1-200BF2E343BF
 Boot ID:                    e423bb3c-2477-4e5a-8e04-bf58fd25d097
 Kernel Version:             4.4.148-k8s
 OS Image:                   Debian GNU/Linux 8 (jessie)
 Operating System:           linux
 Architecture:               amd64
 Container Runtime Version:  docker://17.3.2
 Kubelet Version:            v1.10.12
 Kube-Proxy Version:         v1.10.12
PodCIDR:                     100.96.2.0/24
ProviderID:                  aws:///eu-central-1a/i-0bf907ad5e4d6665e
Non-terminated Pods:         (1 in total)
  Namespace                  Name                                                         CPU Requests  CPU Limits  Memory Requests  Memory Limits  AGE
  ---------                  ----                                                         ------------  ----------  ---------------  -------------  ---
  kube-system                kube-proxy-ip-172-20-34-112.eu-central-1.compute.internal    100m (10%)    0 (0%)      0 (0%)           0 (0%)         6m41s
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests    Limits
  --------           --------    ------
  cpu                100m (10%)  0 (0%)
  memory             0 (0%)      0 (0%)
  ephemeral-storage  0 (0%)      0 (0%)
Events:
  Type    Reason                   Age                From                                                        Message
  ----    ------                   ----               ----                                                        -------
  Normal  Starting                 11m                kubelet, ip-172-20-34-112.eu-central-1.compute.internal     Starting kubelet.
  Normal  NodeAllocatableEnforced  11m                kubelet, ip-172-20-34-112.eu-central-1.compute.internal     Updated Node Allocatable limit across pods
  Normal  NodeHasSufficientPID     10m (x5 over 11m)  kubelet, ip-172-20-34-112.eu-central-1.compute.internal     Node ip-172-20-34-112.eu-central-1.compute.internal status is now: NodeHasSufficientPID
  Normal  NodeHasSufficientDisk    10m (x6 over 11m)  kubelet, ip-172-20-34-112.eu-central-1.compute.internal     Node ip-172-20-34-112.eu-central-1.compute.internal status is now: NodeHasSufficientDisk
  Normal  NodeHasSufficientMemory  10m (x6 over 11m)  kubelet, ip-172-20-34-112.eu-central-1.compute.internal     Node ip-172-20-34-112.eu-central-1.compute.internal status is now: NodeHasSufficientMemory
  Normal  NodeHasNoDiskPressure    10m (x6 over 11m)  kubelet, ip-172-20-34-112.eu-central-1.compute.internal     Node ip-172-20-34-112.eu-central-1.compute.internal status is now: NodeHasNoDiskPressure
  Normal  Starting                 10m                kube-proxy, ip-172-20-34-112.eu-central-1.compute.internal  Starting kube-proxy.
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f affinity/node-affinity.yaml
deployment.extensions/node-affinity created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
node-affinity-dddbdbf67-4bfg4   0/1     Pending   0          44s
node-affinity-dddbdbf67-qd72g   0/1     Pending   0          44s
node-affinity-dddbdbf67-swpxr   0/1     Pending   0          44s
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
node-affinity-dddbdbf67-4bfg4   0/1     Pending   0          44s
node-affinity-dddbdbf67-qd72g   0/1     Pending   0          44s
node-affinity-dddbdbf67-swpxr   0/1     Pending   0          44s
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod node-affinity-dddbdbf67-4bfg4
Name:           node-affinity-dddbdbf67-4bfg4
Namespace:      default
Node:           <none>
Labels:         app=node-affinity
                pod-template-hash=888686923
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container k8s-demo
Status:         Pending
IP:
Controlled By:  ReplicaSet/node-affinity-dddbdbf67
Containers:
  k8s-demo:
    Image:      wardviaene/k8s-demo
    Port:       3000/TCP
    Host Port:  0/TCP
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-4pj7f (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  default-token-4pj7f:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-4pj7f
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                From               Message
  ----     ------            ----               ----               -------
  Warning  FailedScheduling  31s (x8 over 94s)  default-scheduler  0/4 nodes are available: 4 node(s) didn't match node selector.
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl label node ip-172-20-34-112.eu-central-1.compute.internal env=dev
node/ip-172-20-34-112.eu-central-1.compute.internal labeled
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl label node ip-172-20-40-20.eu-central-1.compute.internal env=dev
node/ip-172-20-40-20.eu-central-1.compute.internal labeled
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                            READY   STATUS              RESTARTS   AGE
node-affinity-dddbdbf67-4bfg4   0/1     ContainerCreating   0          4m
node-affinity-dddbdbf67-qd72g   0/1     ContainerCreating   0          4m
node-affinity-dddbdbf67-swpxr   0/1     ContainerCreating   0          4m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
node-affinity-dddbdbf67-4bfg4   1/1     Running   0          5m
node-affinity-dddbdbf67-qd72g   1/1     Running   0          5m
node-affinity-dddbdbf67-swpxr   1/1     Running   0          5m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod node-affinity-dddbdbf67-4bfg4
Name:           node-affinity-dddbdbf67-4bfg4
Namespace:      default
Node:           ip-172-20-34-112.eu-central-1.compute.internal/172.20.34.112
Start Time:     Sun, 24 Mar 2019 09:56:44 +0000
Labels:         app=node-affinity
                pod-template-hash=888686923
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container k8s-demo
Status:         Running
IP:             100.96.2.3
Controlled By:  ReplicaSet/node-affinity-dddbdbf67
Containers:
  k8s-demo:
    Container ID:   docker://e0e152c6fbefb87a5b05dce27011b204f25fd65dad91061d269cbb3ca7063c42
    Image:          wardviaene/k8s-demo
    Image ID:       docker-pullable://wardviaene/k8s-demo@sha256:2c050f462f5d0b3a6430e7869bcdfe6ac48a447a89da79a56d0ef61460c7ab9e
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 24 Mar 2019 09:57:14 +0000
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-4pj7f (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-4pj7f:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-4pj7f
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason                 Age                     From                                                     Message
  ----     ------                 ----                    ----                                                     -------
  Warning  FailedScheduling       2m39s (x15 over 5m45s)  default-scheduler                                        0/4 nodes are available: 4 node(s) didn't match node selector.
  Normal   Scheduled              99s                     default-scheduler                                        Successfully assigned node-affinity-dddbdbf67-4bfg4 to ip-172-20-34-112.eu-central-1.compute.internal
  Normal   SuccessfulMountVolume  98s                     kubelet, ip-172-20-34-112.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "default-token-4pj7f"
  Normal   Pulling                98s                     kubelet, ip-172-20-34-112.eu-central-1.compute.internal  pulling image "wardviaene/k8s-demo"
  Normal   Pulled                 70s                     kubelet, ip-172-20-34-112.eu-central-1.compute.internal  Successfully pulled image "wardviaene/k8s-demo"
  Normal   Created                70s                     kubelet, ip-172-20-34-112.eu-central-1.compute.internal  Created container
  Normal   Started                69s                     kubelet, ip-172-20-34-112.eu-central-1.compute.internal  Started container
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl label node ip-172-20-40-20.eu-central-1.compute.internal team=engineering-project1
node/ip-172-20-40-20.eu-central-1.compute.internal labeled
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
node-affinity-dddbdbf67-4bfg4   1/1     Running   0          14m
node-affinity-dddbdbf67-qd72g   1/1     Running   0          14m
node-affinity-dddbdbf67-swpxr   1/1     Running   0          14m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete pod node-affinity-dddbdbf67-4bfg4
pod "node-affinity-dddbdbf67-4bfg4" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
node-affinity-dddbdbf67-fbwjq   1/1     Running   0          56s
node-affinity-dddbdbf67-qd72g   1/1     Running   0          16m
node-affinity-dddbdbf67-swpxr   1/1     Running   0          16m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod node-affinity-y-dddbdbf67-fbwjq
Error from server (NotFound): pods "node-affinity-y-dddbdbf67-fbwjq" not found
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod node-affinity-dddbdbf67-fbwjq
Name:           node-affinity-dddbdbf67-fbwjq
Namespace:      default
Node:           ip-172-20-40-20.eu-central-1.compute.internal/172.20.40.20
Start Time:     Sun, 24 Mar 2019 10:07:57 +0000
Labels:         app=node-affinity
                pod-template-hash=888686923
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container k8s-demo
Status:         Running
IP:             100.96.1.4
Controlled By:  ReplicaSet/node-affinity-dddbdbf67
Containers:
  k8s-demo:
    Container ID:   docker://2fe70443fc3e9c30195c5433642da1162327f1bb688e163e9f6653b1db2c165e
    Image:          wardviaene/k8s-demo
    Image ID:       docker-pullable://wardviaene/k8s-demo@sha256:2c050f462f5d0b3a6430e7869bcdfe6ac48a447a89da79a56d0ef61460c7ab9e
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 24 Mar 2019 10:08:24 +0000
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-4pj7f (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-4pj7f:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-4pj7f
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason                 Age   From                                                    Message
  ----    ------                 ----  ----                                                    -------
  Normal  Scheduled              95s   default-scheduler                                       Successfully assigned node-affinity-dddbdbf67-fbwjq to ip-172-20-40-20.eu-central-1.compute.internal
  Normal  SuccessfulMountVolume  94s   kubelet, ip-172-20-40-20.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "default-token-4pj7f"
  Normal  Pulling                94s   kubelet, ip-172-20-40-20.eu-central-1.compute.internal  pulling image "wardviaene/k8s-demo"
  Normal  Pulled                 67s   kubelet, ip-172-20-40-20.eu-central-1.compute.internal  Successfully pulled image "wardviaene/k8s-demo"
  Normal  Created                67s   kubelet, ip-172-20-40-20.eu-central-1.compute.internal  Created container
  Normal  Started                67s   kubelet, ip-172-20-40-20.eu-central-1.compute.internal  Started container
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f affinity/node-affinity.yaml
deployment.extensions "node-affinity" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   100.64.0.1   <none>        443/TCP   42m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl label node ip-172-20-40-20.eu-central-1.compute.internal team-
node/ip-172-20-40-20.eu-central-1.compute.internal labeled
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl label node ip-172-20-40-20.eu-central-1.compute.internal env-
node/ip-172-20-40-20.eu-central-1.compute.internal labeled
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl label node ip-172-20-34-112.eu-central-1.compute.internal env-
node/ip-172-20-34-112.eu-central-1.compute.internal labeled
```

### 72. Interpod Affinity and Anti-affinity

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity8.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity9.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity10.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/InterpodAffinityAndAntiAffinity11.png)

### 73. Demo: Interpod Affinity

- We are going to use the `affinity/pod-affinity.yaml` to create two deploymets, one with `podAffinity` and the other with nothing.

> affinity/pod-affinity.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-1
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: pod-affinity-1
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-2
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: pod-affinity-2
    spec:
      affinity:
        podAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: "app"
                    operator: In
                    values:
                      - pod-affinity-1
              topologyKey: "kubernetes.io/hostname"
      containers:
        - name: redis
          image: redis
          ports:
            - name: redis-port
              containerPort: 6379
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f affinity/pod-affinity.yaml
deployment.extensions/pod-affinity-1 created
deployment.extensions/pod-affinity-2 created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide
NAME                              READY   STATUS    RESTARTS   AGE   IP           NODE
pod-affinity-1-59f999d989-jfcq7   1/1     Running   0          47s   100.96.2.5   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-4cd5s   1/1     Running   0          47s   100.96.2.6   ip-172-20-34-112.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod pod-affinity-2-8598b67f65-4cd5s
Name:           pod-affinity-2-8598b67f65-4cd5s
Namespace:      default
Node:           ip-172-20-34-112.eu-central-1.compute.internal/172.20.34.112
Start Time:     Sun, 24 Mar 2019 10:29:12 +0000
Labels:         app=pod-affinity-2
                pod-template-hash=4154623921
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container redis
Status:         Running
IP:             100.96.2.6
Controlled By:  ReplicaSet/pod-affinity-2-8598b67f65
Containers:
  redis:
    Container ID:   docker://bfddfe95aa079102eb6f99d912af704a86a11e0557e7ad49b9a1792925bf1254
    Image:          redis
    Image ID:       docker-pullable://redis@sha256:930d3a5f0a781b99dbdfd3b5de498ecf4288d4c31500580be3e4c7a47e26eb3e
    Port:           6379/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sun, 24 Mar 2019 10:29:20 +0000
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-4pj7f (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-4pj7f:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-4pj7f
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason                 Age   From                                                     Message
  ----    ------                 ----  ----                                                     -------
  Normal  Scheduled              2m    default-scheduler                                        Successfully assigned pod-affinity-2-8598b67f65-4cd5s to ip-172-20-34-112.eu-central-1.compute.internal
  Normal  SuccessfulMountVolume  2m    kubelet, ip-172-20-34-112.eu-central-1.compute.internal  MountVolume.SetUp succeeded for volume "default-token-4pj7f"
  Normal  Pulling                119s  kubelet, ip-172-20-34-112.eu-central-1.compute.internal  pulling image "redis"
  Normal  Pulled                 112s  kubelet, ip-172-20-34-112.eu-central-1.compute.internal  Successfully pulled image "redis"
  Normal  Created                112s  kubelet, ip-172-20-34-112.eu-central-1.compute.internal  Created container
  Normal  Started                112s  kubelet, ip-172-20-34-112.eu-central-1.compute.internal  Started container
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl scale --replicas=4 deployment/pod-affinity-2
deployment.extensions/pod-affinity-2 scaled
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide                NAME                              READY   STATUS              RESTARTS   AGE   IP           NODE
pod-affinity-1-59f999d989-jfcq7   1/1     Running             0          3m    100.96.2.5   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-4cd5s   1/1     Running             0          3m    100.96.2.6   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-d9xl2   1/1     Running             0          5s    100.96.2.9   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-lbxhr   0/1     ContainerCreating   0          5s    <none>       ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-vfc7k   1/1     Running             0          5s    100.96.2.7   ip-172-20-34-112.eu-central-1.compute.internal
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f affinity/pod-affinity.yaml
deployment.extensions "pod-affinity-1" deleted
deployment.extensions "pod-affinity-2" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe nodes | less
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoInterpodAffinity.png)

- We can modify the `pod-affinity.yaml` to change the `topologyKey` from `kubernetes.io/hostname` to `failure-domain.beta.kubernetes.io/zone`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# vi affinity/pod-affinity.yaml
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoInterpodAffinity2.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f affinity/pod-affinity.yaml
deployment.extensions/pod-affinity-1 created
deployment.extensions/pod-affinity-2 created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide
NAME                              READY   STATUS    RESTARTS   AGE   IP            NODE
pod-affinity-1-59f999d989-l6q26   1/1     Running   0          38s   100.96.2.10   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8575cd79f7-wlh5r   1/1     Running   0          38s   100.96.3.3    ip-172-20-43-5.eu-central-1.compute.internal
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl scale --replicas=5 deployment/pod-affinity-2
deployment.extensions/pod-affinity-2 scaled
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide
NAME                              READY   STATUS              RESTARTS   AGE   IP            NODE
pod-affinity-1-59f999d989-l6q26   1/1     Running             0          1m    100.96.2.10   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8575cd79f7-dfcj6   0/1     ContainerCreating   0          4s    <none>        ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8575cd79f7-hlm45   0/1     ContainerCreating   0          4s    <none>        ip-172-20-40-20.eu-central-1.compute.internal
pod-affinity-2-8575cd79f7-pc9bw   0/1     ContainerCreating   0          4s    <none>        ip-172-20-40-20.eu-central-1.compute.internal
pod-affinity-2-8575cd79f7-rgdg4   1/1     Running             0          4s    100.96.3.4    ip-172-20-43-5.eu-central-1.compute.internal
pod-affinity-2-8575cd79f7-wlh5r   1/1     Running             0          1m    100.96.3.3    ip-172-20-43-5.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f affinity/pod-affinity.yaml
deployment.extensions "pod-affinity-1" deleted
deployment.extensions "pod-affinity-2" deleted
```

### 74. Demo: Interpod Anti-Affinity

- We are going to use the `affinity/pod-anti-affinity.yaml` to create four deploymets, one with `podAffinity`, two with `podAntiAffinity` and the other with nothing.

> affinity/pod-anti-affinity.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-1
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: pod-affinity-1
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-2
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: pod-affinity-2
    spec:
      affinity:
        podAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: "app"
                    operator: In
                    values:
                      - pod-affinity-1
              topologyKey: "kubernetes.io/hostname"
      containers:
        - name: redis
          image: redis
          ports:
            - name: redis-port
              containerPort: 6379
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-3
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: pod-affinity-3
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: "app"
                    operator: In
                    values:
                      - pod-affinity-1
              topologyKey: "kubernetes.io/hostname"
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-4
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: pod-affinity-4
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: "app"
                    operator: In
                    values:
                      - pod-affinity-1
                      - pod-affinity-3
              topologyKey: "kubernetes.io/hostname"
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---

```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f affinity/pod-anti-affinity.yaml
deployment.extensions/pod-affinity-1 created
deployment.extensions/pod-affinity-2 created
deployment.extensions/pod-affinity-3 created
deployment.extensions/pod-affinity-4 created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide                NAME                              READY   STATUS              RESTARTS   AGE   IP            NODE
pod-affinity-1-59f999d989-qsnl2   1/1     Running             0          24s   100.96.2.12   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-dmxjg   1/1     Running             0          24s   100.96.2.13   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-tggg7   1/1     Running             0          24s   100.96.2.15   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-wzsr8   1/1     Running             0          24s   100.96.2.14   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-3-58fcb86d45-2rchl   0/1     ContainerCreating   0          24s   <none>        ip-172-20-43-5.eu-central-1.compute.internal
pod-affinity-3-58fcb86d45-7hcm9   0/1     ContainerCreating   0          24s   <none>        ip-172-20-43-5.eu-central-1.compute.internal
pod-affinity-3-58fcb86d45-cr5jb   1/1     Running             0          24s   100.96.1.7    ip-172-20-40-20.eu-central-1.compute.internal
pod-affinity-4-769fdfdb64-hwl6m   0/1     Pending             0          24s   <none>        <none>
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl describe pod pod-affinity-4-769fdfdb64-hwl6m
Name:           pod-affinity-4-769fdfdb64-hwl6m
Namespace:      default
Node:           <none>
Labels:         app=pod-affinity-4
                pod-template-hash=3259898620
Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container k8s-demo
Status:         Pending
IP:
Controlled By:  ReplicaSet/pod-affinity-4-769fdfdb64
Containers:
  k8s-demo:
    Image:      wardviaene/k8s-demo
    Port:       3000/TCP
    Host Port:  0/TCP
    Requests:
      cpu:        100m
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-4pj7f (ro)
Conditions:
  Type           Status
  PodScheduled   False
Volumes:
  default-token-4pj7f:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-4pj7f
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type     Reason            Age                  From               Message
  ----     ------            ----                 ----               -------
  Warning  FailedScheduling  31s (x14 over 3m5s)  default-scheduler  0/4 nodes are available: 1 node(s) had taints that the pod didn't tolerate, 3 node(s) didn't match pod affinity/anti-affinity, 3 node(s) didn't match pod anti-affinity rules.
```

- We are now going to use the `affinity/pod-anti-affinity-5.yaml` to create one deployments with `podAntiAffinity`.

> affinity/pod-anti-affinity-5.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: pod-affinity-5
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: pod-affinity-5
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: "app"
                      operator: In
                      values:
                        - pod-affinity-1
                        - pod-affinity-3
                topologyKey: "kubernetes.io/hostname"
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---

```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f affinity/pod-anti-affinity-5.yaml
deployment.extensions/pod-affinity-5 created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide                NAME                              READY   STATUS    RESTARTS   AGE   IP            NODE
pod-affinity-1-59f999d989-qsnl2   1/1     Running   0          6m    100.96.2.12   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-dmxjg   1/1     Running   0          6m    100.96.2.13   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-tggg7   1/1     Running   0          6m    100.96.2.15   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-2-8598b67f65-wzsr8   1/1     Running   0          6m    100.96.2.14   ip-172-20-34-112.eu-central-1.compute.internal
pod-affinity-3-58fcb86d45-2rchl   1/1     Running   0          6m    100.96.3.6    ip-172-20-43-5.eu-central-1.compute.internal
pod-affinity-3-58fcb86d45-7hcm9   1/1     Running   0          6m    100.96.3.5    ip-172-20-43-5.eu-central-1.compute.internal
pod-affinity-3-58fcb86d45-cr5jb   1/1     Running   0          6m    100.96.1.7    ip-172-20-40-20.eu-central-1.compute.internal
pod-affinity-4-769fdfdb64-hwl6m   0/1     Pending   0          6m    <none>        <none>
pod-affinity-5-6c55db4d6f-rz8rd   1/1     Running   0          4s    100.96.1.8    ip-172-20-40-20.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f affinity/pod-anti-affinity-5.yaml
deployment.extensions "pod-affinity-5" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f affinity/pod-anti-affinity.yaml
deployment.extensions "pod-affinity-1" deleted
deployment.extensions "pod-affinity-2" deleted
deployment.extensions "pod-affinity-3" deleted
deployment.extensions "pod-affinity-4" deleted
```

### 75. Taints and Tolerations

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations3.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations4.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations5.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations6.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations7.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/TaintsAndTolerations8.png)

### 76. Demo: Taints and Tolerations

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get nodes
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-34-112.eu-central-1.compute.internal   Ready    node     1h    v1.10.12
ip-172-20-40-20.eu-central-1.compute.internal    Ready    node     1h    v1.10.12
ip-172-20-42-118.eu-central-1.compute.internal   Ready    master   1h    v1.10.12
ip-172-20-43-5.eu-central-1.compute.internal     Ready    node     1h    v1.10.12
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get nodes ip-172-20-42-118.eu-central-1.compute.internal -o yaml | less
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoTaintsAndTolerations.png)

- We are goibg to `taint` a node by using

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl taint nodes ip-172-20-34-112.eu-central-1.compute.internal type=specialnode:NoSchedule
node/ip-172-20-34-112.eu-central-1.compute.internal tainted
```

- We are now going to use the `tolerations/tolerations.yaml` to create one deployments with `tolerations` and another one with anything.

> tolerations/tolerations.yaml

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: tolerations-1
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: tolerations-1
    spec:
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: tolerations-2
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: tolerations-2
    spec:
      tolerations:
        - key: "type"
          operator: "Equal"
          value: "specialnode"
          effect: "NoSchedule"
      containers:
        - name: k8s-demo
          image: wardviaene/k8s-demo
          ports:
            - name: nodejs-port
              containerPort: 3000
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f tolerations/tolerations.yaml
deployment.extensions/tolerations-1 created
deployment.extensions/tolerations-2 created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide                NAME                             READY   STATUS    RESTARTS   AGE   IP            NODE
tolerations-1-595b6c786f-7tbmc   1/1     Running   0          28s   100.96.1.10   ip-172-20-40-20.eu-central-1.compute.internal
tolerations-1-595b6c786f-v9xgt   1/1     Running   0          28s   100.96.3.7    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-1-595b6c786f-zwmxg   1/1     Running   0          28s   100.96.1.9    ip-172-20-40-20.eu-central-1.compute.internal
tolerations-2-787d55848b-9v4zj   1/1     Running   0          28s   100.96.3.8    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-2-787d55848b-fr2cr   1/1     Running   0          28s   100.96.2.16   ip-172-20-34-112.eu-central-1.compute.internal
tolerations-2-787d55848b-l5q9v   1/1     Running   0          28s   100.96.2.17   ip-172-20-34-112.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl taint nodes ip-172-20-34-112.eu-central-1.compute.internal type2=specialnode2:NoSchedule
node/ip-172-20-34-112.eu-central-1.compute.internal tainted
```

```bash
NAME                             READY   STATUS    RESTARTS   AGE   IP            NODE
tolerations-1-595b6c786f-7tbmc   1/1     Running   0          28s   100.96.1.10   ip-172-20-40-20.eu-central-1.compute.internal
tolerations-1-595b6c786f-v9xgt   1/1     Running   0          28s   100.96.3.7    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-1-595b6c786f-zwmxg   1/1     Running   0          28s   100.96.1.9    ip-172-20-40-20.eu-central-1.compute.internal
tolerations-2-787d55848b-9v4zj   1/1     Running   0          28s   100.96.3.8    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-2-787d55848b-fr2cr   1/1     Running   0          28s   100.96.2.16   ip-172-20-34-112.eu-central-1.compute.internal
tolerations-2-787d55848b-l5q9v   1/1     Running   0          28s   100.96.2.17   ip-172-20-34-112.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete pod tolerations-2-787d55848b-fr2cr
pod "tolerations-2-787d55848b-fr2cr" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide                NAME                             READY   STATUS    RESTARTS   AGE   IP            NODE
tolerations-1-595b6c786f-7tbmc   1/1     Running   0          4m    100.96.1.10   ip-172-20-40-20.eu-central-1.compute.internal
tolerations-1-595b6c786f-v9xgt   1/1     Running   0          4m    100.96.3.7    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-1-595b6c786f-zwmxg   1/1     Running   0          4m    100.96.1.9    ip-172-20-40-20.eu-central-1.compute.internal
tolerations-2-787d55848b-9v4zj   1/1     Running   0          4m    100.96.3.8    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-2-787d55848b-k7gnf   1/1     Running   0          33s   100.96.1.12   ip-172-20-40-20.eu-central-1.compute.internal
tolerations-2-787d55848b-l5q9v   1/1     Running   0          4m    100.96.2.17   ip-172-20-34-112.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl taint nodes ip-172-20-34-112.eu-central-1.compute.internal type2=specialnode2:NoExecute
node/ip-172-20-34-112.eu-central-1.compute.internal tainted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl get pod -o wide                NAME                             READY   STATUS    RESTARTS   AGE   IP            NODE
tolerations-1-595b6c786f-7tbmc   1/1     Running   0          4m    100.96.1.10   ip-172-20-40-20.eu-central-1.compute.internal
tolerations-1-595b6c786f-v9xgt   1/1     Running   0          4m    100.96.3.7    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-1-595b6c786f-zwmxg   1/1     Running   0          4m    100.96.1.9    ip-172-20-40-20.eu-central-1.compute.internal
tolerations-2-787d55848b-9v4zj   1/1     Running   0          4m    100.96.3.8    ip-172-20-43-5.eu-central-1.compute.internal
tolerations-2-787d55848b-k7gnf   1/1     Running   0          33s   100.96.1.12   ip-172-20-40-20.eu-central-1.compute.internal
tolerations-2-787d55848b-tv2hk   1/1     Running   0          5s   100.96.1.11   ip-172-20-40-20.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f tolerations/.        deployment.extensions "tolerations-1" deleted
deployment.extensions "tolerations-2" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl taint nodes ip-172-20-34-112.eu-central-1.compute.internal type2-
node/ip-172-20-34-112.eu-central-1.compute.internal untainted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl taint nodes ip-172-20-34-112.eu-central-1.compute.internal type-
node/ip-172-20-34-112.eu-central-1.compute.internal untainted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

### 77. Custom Resource Definitions (CRDs)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CustomResourceDefinitionsCRDs.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/CustomResourceDefinitionsCRDs2.png)

### 78. Operators

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Operators.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Operators2.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/Operators3.png)

### 79. Demo: postgresql-operator

- We can get more information about the postgres operator on [Crunchy Data PostgreSQL Operator](https://github.com/CrunchyData/postgres-operator)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPostgresqlOperator.png)

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPostgresqlOperator2.png)

We need to use the following documents:

> postgres-operator/quickstart-for-gke.sh

```bash
#!/bin/bash

# Copyright 2018 Crunchy Data Solutions, Inc.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

LOG="pgo-installer.log"

export PGORELEASE=3.1
PGO_RELEASE_REMOTE_URL="https://github.com/CrunchyData/postgres-operator/releases/download/$PGORELEASE/postgres-operator.$PGORELEASE.tar.gz"
PGO_RELEASE_LOCAL_PATH="/tmp/postgres-operator.$PGORELEASE.tar.gz"

echo "Testing for dependencies..." | tee -a $LOG

which wget > /dev/null 2> /dev/null
if [[ $? -ne 0 ]]; then
	which curl > /dev/null 2> /dev/null
	if [[ $? -ne 0 ]]; then
		echo "The required dependency wget and/or curl is missing on your system." | tee -a $LOG
		exit 1
	else
		PGO_HTTP_CMD="curl -L -s -o ${PGO_RELEASE_LOCAL_PATH} ${PGO_RELEASE_REMOTE_URL}"
	fi
else
	PGO_HTTP_CMD="wget --quiet ${PGO_RELEASE_REMOTE_URL} -O ${PGO_RELEASE_LOCAL_PATH}"
fi
which kubectl > /dev/null 2> /dev/null
if [[ $? -ne 0 ]]; then
	echo "The required dependency kubectl is missing on your system." | tee -a $LOG
	exit 1
fi

echo ""
echo "Testing kubectl connection..." | tee -a $LOG
echo ""
kubectl get namespaces
if [[ $? -ne 0 ]]; then
	echo "kubectl is not connecting to your Kubernetes Cluster. A successful connection is required to proceed." | tee -a $LOG
	exit 1
fi

echo "Connected to Kubernetes." | tee -a $LOG
echo ""

NAMESPACE=`kubectl config current-context`
echo "The postgres-operator will be installed into the current namespace which is ["$NAMESPACE"]."

echo -n "Do you want to continue the installation? [yes no] "
read REPLY
if [[ "$REPLY" != "yes" ]]; then
	echo "Aborting installation."
	exit 1
fi

export CO_CMD=kubectl
export GOPATH=$HOME/odev
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOPATH/bin
export CO_IMAGE_PREFIX=crunchydata
export CO_IMAGE_TAG=centos7-3.1
export COROOT=$GOPATH/src/github.com/crunchydata/postgres-operator
export CO_APISERVER_URL=https://127.0.0.1:18443
export PGO_CA_CERT=$COROOT/conf/apiserver/server.crt
export PGO_CLIENT_CERT=$COROOT/conf/apiserver/server.crt
export PGO_CLIENT_KEY=$COROOT/conf/apiserver/server.key

echo "Setting environment variables in $HOME/.bashrc..." | tee -a $LOG

cat <<'EOF' >> $HOME/.bashrc

# operator env vars
export CO_APISERVER_URL=https://127.0.0.1:18443
export PGO_CA_CERT=$HOME/odev/src/github.com/crunchydata/postgres-operator/conf/apiserver/server.crt
export PGO_CLIENT_CERT=$HOME/odev/src/github.com/crunchydata/postgres-operator/conf/apiserver/server.crt
export PGO_CLIENT_KEY=$HOME/odev/src/github.com/crunchydata/postgres-operator/conf/apiserver/server.key
#
EOF

echo "Setting up installation directory..." | tee -a $LOG

mkdir -p $HOME/odev/src $HOME/odev/bin $HOME/odev/pkg
mkdir -p $GOPATH/src/github.com/crunchydata/postgres-operator

echo ""
echo "Installing pgo server configuration..." | tee -a $LOG
`${PGO_HTTP_CMD}`

cd $COROOT
tar xzf /tmp/postgres-operator.$PGORELEASE.tar.gz
if [[ $? -ne 0 ]]; then
	echo "ERROR: Problem unpackaging the $PGORELEASE release."
	exit 1
fi

echo ""
echo "Installing pgo client..." | tee -a $LOG

mv pgo $GOBIN
mv pgo-mac $GOBIN
mv pgo.exe $GOBIN
mv expenv.exe $GOBIN
mv expenv-mac $GOBIN
mv expenv $GOBIN

echo "The available storage classes on your system:"
kubectl get sc
echo ""
echo -n "Enter the name of the storage class to use: "
read STORAGE_CLASS

echo ""
echo "Setting up pgo storage configuration for the selected storageclass..." | tee -a $LOG
cp $COROOT/examples/pgo.yaml.storageclass $COROOT/conf/apiserver/pgo.yaml
sed -i .bak 's/standard/'"$STORAGE_CLASS"'/' $COROOT/conf/apiserver/pgo.yaml
sed -i .bak 's/demo/'"$NAMESPACE"'/' $COROOT/deploy/service-account.yaml
sed -i .bak 's/demo/'"$NAMESPACE"'/' $COROOT/deploy/rbac.yaml

echo ""
echo "Setting up pgo client authentication..." | tee -a $LOG
echo "username:password" > $HOME/.pgouser

echo "For pgo bash completion you will need to install the bash-completion package." | tee -a $LOG

cp $COROOT/examples/pgo-bash-completion $HOME/.bash_completion

echo -n "Do you want to deploy the operator? [yes no] "
read REPLY
if [[ "$REPLY" == "yes" ]]; then
	echo "Deploying the operator to the Kubernetes cluster..." | tee -a $LOG
	$COROOT/deploy/deploy.sh | tee -a $LOG
fi

echo "Installation complete." | tee -a $LOG
echo ""

echo "At this point you can access the operator by using a port-forward command similar to:"
podname=`kubectl get pod --selector=name=postgres-operator -o jsonpath={..metadata.name}`
echo "kubectl port-forward " $podname " 18443:8443"
echo "Run this in another terminal or in the background."

echo ""
echo "WARNING: For the postgres-operator settings to take effect, it is necessary to log out of your session and back in or reload your .bashrc file."

echo ""
echo "NOTE: In order to access the pgo CLI, place it within your PATH from its default location in $HOME/odev/bin/pgo."
```

> postgres-operator/storage.yml

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1beta1
metadata:
  name: standard
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  zone: eu-west-1a
```

> postgres-operator/set-path.sh

```bash
#!/bin/bash
echo 'export PATH=$PATH:~/odev/bin/' >> ~/.bashrc
```

- We are going to follow these instructions:

**Files**
quickstart-for-gke.sh. Tested version available in directory, or latest from: https://github.com/CrunchyData/postgres-operator/blob/master/examples/quickstart-for-gke.sh

**setup storage**

kubectl create -f storage.yml

**setup Operator**

./quickstart-for-gke.sh

./set-path.sh

After these commands you'll need to logout and login again.

**port forwarding**

kubectl port-forward postgres-operator-xxx-yyy 18443:8443

**Test command**

pgo version

**Create cluster**

pgo create cluster mycluster

pgo show cluster all

**show secrets**

pgo show cluster mycluster --show-secrets=true

**connect to psql**

kubectl run -it --rm --image=postgres:10.4 psql -- psql -h mycluster -U postgres -W

**Create read replic**

pgo scale mycluster

**manually failover**

pgo failover mycluster --query

pgo failover mycluster --target=mycluster-xxx

kubectl get pgtasks mycluster-failover -o yaml

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl create -f postgres-operator/storage.yml
storageclass.storage.k8s.io/standard created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# chmod +x ./postgres-operator/quickstart-for-gke.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# ./postgres-operator/quickstart-for-gke.sh
Testing for dependencies...

Testing kubectl connection...

NAME          STATUS   AGE
default       Active   2h
kube-public   Active   2h
kube-system   Active   2h
Connected to Kubernetes.

The postgres-operator will be installed into the current namespace which is [kubernetes.peelmicro.com].
Do you want to continue the installation? [yes no] yes
Setting environment variables in /root/.bashrc...
Setting up installation directory...

Installing pgo server configuration...

Installing pgo client...
The available storage classes on your system:
NAME            PROVISIONER             AGE
default         kubernetes.io/aws-ebs   2h
gp2 (default)   kubernetes.io/aws-ebs   2h
standard        kubernetes.io/aws-ebs   4m

Enter the name of the storage class to use: standard

Setting up pgo storage configuration for the selected storageclass...
sed: -e expression #1, char 1: unknown command: `.'
sed: -e expression #1, char 1: unknown command: `.'
sed: -e expression #1, char 1: unknown command: `.'

Setting up pgo client authentication...
For pgo bash completion you will need to install the bash-completion package.
Do you want to deploy the operator? [yes no] yes
Deploying the operator to the Kubernetes cluster...
Error from server (NotFound): configmaps "operator-conf" not found
Error from server (NotFound): secrets "apiserver-conf-secret" not found
Error from server (NotFound): services "postgres-operator" not found
Error from server (NotFound): deployments.extensions "postgres-operator" not found
Error from server (NotFound): serviceaccounts "postgres-operator" not found
Error from server (NotFound): roles.rbac.authorization.k8s.io "pgo-role" not found
Error from server (NotFound): rolebindings.rbac.authorization.k8s.io "pgo-role-binding" not found
Error from server (NotFound): customresourcedefinitions.apiextensions.k8s.io "pgclusters.cr.client-go.k8s.io" not found
customresourcedefinition.apiextensions.k8s.io/pgbackups.cr.client-go.k8s.io created
customresourcedefinition.apiextensions.k8s.io/pgclusters.cr.client-go.k8s.io created
customresourcedefinition.apiextensions.k8s.io/pgingests.cr.client-go.k8s.io created
customresourcedefinition.apiextensions.k8s.io/pgpolicies.cr.client-go.k8s.io created
customresourcedefinition.apiextensions.k8s.io/pgreplicas.cr.client-go.k8s.io created
customresourcedefinition.apiextensions.k8s.io/pgtasks.cr.client-go.k8s.io created
customresourcedefinition.apiextensions.k8s.io/pgupgrades.cr.client-go.k8s.io created
serviceaccount/postgres-operator created
role.rbac.authorization.k8s.io/pgo-role created
rolebinding.rbac.authorization.k8s.io/pgo-role-binding created
secret/apiserver-conf-secret created
configmap/operator-conf created
deployment.extensions/postgres-operator created
service/postgres-operator created
Installation complete.

At this point you can access the operator by using a port-forward command similar to:
kubectl port-forward  postgres-operator-5d4b49b4c8-cpjfh  18443:8443
Run this in another terminal or in the background.

WARNING: For the postgres-operator settings to take effect, it is necessary to log out of your session and back in or reload your .bashrc file.

NOTE: In order to access the pgo CLI, place it within your PATH from its default location in /root/odev/bin/pgo.
```

- Run the following in a new terminal

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl port-forward  postgres-operator-5d4b49b4c8-cpjfh  18443:8443
Forwarding from 127.0.0.1:18443 -> 8443
Forwarding from [::1]:18443 -> 8443
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# chmod +x ./postgres-operator/set-path.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# ./postgres-operator/set-path.sh        root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course#
```

- logout and login

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# logout
Connection to 68.183.44.204 closed.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~
$ ssh root@68.183.44.204
root@68.183.44.204's password:
Welcome to Ubuntu 18.04.2 LTS (GNU/Linux 4.15.0-46-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sun Mar 24 12:04:35 UTC 2019

  System load:                    0.11
  Usage of /:                     33.3% of 48.29GB
  Memory usage:                   80%
  Swap usage:                     0%
  Processes:                      101
  Users logged in:                1
  IP address for eth0:            68.183.44.204
  IP address for br-0911af65c97a: 172.18.0.1
  IP address for docker0:         172.17.0.1

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

 * Canonical Livepatch is available for installation.
   - Reduce system reboots and improve kernel security. Activate at:
     https://ubuntu.com/livepatch

27 packages can be updated.
0 updates are security updates.


Last login: Sun Mar 24 12:01:19 2019 from 95.16.77.35
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo version
pgo client version 3.1
apiserver version 3.1
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo create cluster mycluster
created Pgcluster mycluster
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo show cluster all

cluster : mycluster (centos7-10.4-1.8.3)
        pod : mycluster-7dff65997f-5xs9b (Pending) on ip-172-20-43-5.eu-central-1.compute.internal (0/1) (primary)
        pvc : mycluster
        deployment : mycluster
        service : mycluster (100.65.175.125)
        labels : archive=false archive-
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get all
NAME                                     READY   STATUS    RESTARTS   AGE
pod/mycluster-7dff65997f-5xs9b           1/1     Running   0          1m
pod/postgres-operator-5d4b49b4c8-cpjfh   2/2     Running   0          8m

NAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
service/kubernetes          ClusterIP   100.64.0.1       <none>        443/TCP                      2h
service/mycluster           ClusterIP   100.65.175.125   <none>        5432/TCP,9100/TCP,9187/TCP   1m
service/postgres-operator   NodePort    100.71.254.94    <none>        8443:30311/TCP               8m

NAME                                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/mycluster           1         1         1            1           1m
deployment.apps/postgres-operator   1         1         1            1           8m

NAME                                           DESIRED   CURRENT   READY   AGE
replicaset.apps/mycluster-7dff65997f           1         1         1       1m
replicaset.apps/postgres-operator-5d4b49b4c8   1         1         1       8m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo show cluster mycluster --show-secrets=true

cluster : mycluster (centos7-10.4-1.8.3)
        pod : mycluster-7dff65997f-5xs9b (Running) on ip-172-20-43-5.eu-central-1.compute.internal (1/1) (primary)
        pvc : mycluster
        deployment : mycluster
        service : mycluster (100.65.175.125)
        labels : primary=true archive=false archive-timeout=60 crunchy_collect=false name=mycluster pg-cluster=mycluster

secret : mycluster-postgres-secret
        username: postgres
        password: aViXh495RC

secret : mycluster-primaryuser-secret
        username: primaryuser
        password: 0iejZQvwKx

secret : mycluster-testuser-secret
        username: testuser
        password: d1zaQwoHxe
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl run -it --rm --image=postgres:10.4 psql -- psql -h mycluster -U postgres -W
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
If you don't see a command prompt, try pressing enter.

psql (10.4 (Debian 10.4-2.pgdg90+1))
Type "help" for help.

postgres=# \dt
            List of relations
 Schema |     Name     | Type  |  Owner
--------+--------------+-------+----------
 public | primarytable | table | postgres
(1 row)

postgres=# \q
Session ended, resume using 'kubectl attach psql-6898dc7bd6-cfkwc -c psql -i -t' command when the pod is running
deployment.apps "psql" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo scale mycluster
created Pgreplica mycluster-yizs
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pods -o wide
NAME                                 READY   STATUS              RESTARTS   AGE   IP            NODE
mycluster-7dff65997f-5xs9b           1/1     Running             0          9m    100.96.3.10   ip-172-20-43-5.eu-central-1.compute.internal
mycluster-yizs-76c844d465-kt5l9      0/1     ContainerCreating   0          37s   <none>        ip-172-20-40-20.eu-central-1.compute.internal
postgres-operator-5d4b49b4c8-cpjfh   2/2     Running             0          16m   100.96.2.18   ip-172-20-34-112.eu-central-1.compute.internal
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo show cluster mycluster

cluster : mycluster (centos7-10.4-1.8.3)
        pod : mycluster-7dff65997f-5xs9b (Running) on ip-172-20-43-5.eu-central-1.compute.internal (1/1) (primary)
        pvc : mycluster
        pod : mycluster-yizs-76c844d465-kt5l9 (Running) on ip-172-20-40-20.eu-central-1.compute.internal (1/1)
        pvc : mycluster-yizs
        deployment : mycluster
        deployment : mycluster-yizs
        service : mycluster (100.65.175.125)
        service : mycluster-replica (100.64.86.147)
        replica : mycluster-yizs
        labels : name=mycluster pg-cluster=mycluster primary=true archive=false archive-timeout=60 crunchy_collect=false
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pods -o wide
NAME                                 READY   STATUS    RESTARTS   AGE   IP            NODE
mycluster-7dff65997f-5xs9b           1/1     Running   0          11m   100.96.3.10   ip-172-20-43-5.eu-central-1.compute.internal
mycluster-yizs-76c844d465-kt5l9      1/1     Running   0          3m    100.96.1.14   ip-172-20-40-20.eu-central-1.compute.internal
postgres-operator-5d4b49b4c8-cpjfh   2/2     Running   0          18m   100.96.2.18   ip-172-20-34-112.eu-central-1.compute.internal
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo failover mycluster --query

Failover targets include:
        mycluster-yizs (Ready) (ip-172-20-40-20.eu-central-1.compute.internal)
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo failover mycluster --target=mycluster-yizs
WARNING: Are you sure? (yes/no): yes
created Pgtask (failover) for cluster mycluster
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo show cluster mycluster

cluster : mycluster (centos7-10.4-1.8.3)
        pod : mycluster-qcum-57d8bc485d-c7kxm (Running) on ip-172-20-40-20.eu-central-1.compute.internal (0/1)
        pvc : mycluster-qcum
        pod : mycluster-yizs-746fb744f4-62v48 (Running) on ip-172-20-43-5.eu-central-1.compute.internal (1/1) (primary)
        pvc : mycluster-yizs
        deployment : mycluster-qcum
        deployment : mycluster-yizs
        service : mycluster (100.65.175.125)
        service : mycluster-replica (100.64.86.147)
        replica : mycluster-qcum
        labels : archive=false archive-timeout=60 crunchy_collect=false name=mycluster pg-cluster=mycluster primary=true
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pods -o wide
NAME                                 READY   STATUS    RESTARTS   AGE   IP            NODE
mycluster-qcum-57d8bc485d-c7kxm      1/1     Running   0          1m    100.96.1.15   ip-172-20-40-20.eu-central-1.compute.internal
mycluster-yizs-746fb744f4-62v48      1/1     Running   0          1m    100.96.3.11   ip-172-20-43-5.eu-central-1.compute.internal
postgres-operator-5d4b49b4c8-cpjfh   2/2     Running   0          22m   100.96.2.18   ip-172-20-34-112.eu-central-1.compute.internal
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get pgtasks mycluster-failover -o yaml
apiVersion: cr.client-go.k8s.io/v1
kind: Pgtask
metadata:
  clusterName: ""
  creationTimestamp: "2019-03-24T12:20:39Z"
  generation: 1
  labels:
    pg-cluster: mycluster
    target: mycluster-yizs
  name: mycluster-failover
  namespace: default
  resourceVersion: "14249"
  selfLink: /apis/cr.client-go.k8s.io/v1/namespaces/default/pgtasks/mycluster-failover
  uid: 3c4d67a2-4e2f-11e9-84c9-024bd209dd2a
spec:
  name: mycluster-failover
  parameters:
    mycluster: mycluster
  status: ""
  storagespec:
    accessmode: ""
    fsgroup: ""
    name: ""
    size: ""
    storageclass: ""
    storagetype: ""
    supplementalgroups: ""
  tasktype: failover
status:
  message: re-labeling deployment...pod mycluster-yizs-76c844d465-kt5l9was the failover
    target...failover completed
  state: Processed
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl get crd
NAME                             CREATED AT
pgbackups.cr.client-go.k8s.io    2019-03-24T11:59:22Z
pgclusters.cr.client-go.k8s.io   2019-03-24T11:59:26Z
pgingests.cr.client-go.k8s.io    2019-03-24T11:59:26Z
pgpolicies.cr.client-go.k8s.io   2019-03-24T11:59:26Z
pgreplicas.cr.client-go.k8s.io   2019-03-24T11:59:26Z
pgtasks.cr.client-go.k8s.io      2019-03-24T11:59:26Z
pgupgrades.cr.client-go.k8s.io   2019-03-24T11:59:26Z
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo show cluster mycluster

cluster : mycluster (centos7-10.4-1.8.3)
        pod : mycluster-qcum-57d8bc485d-c7kxm (Running) on ip-172-20-40-20.eu-central-1.compute.internal (1/1)
        pvc : mycluster-qcum
        pod : mycluster-yizs-746fb744f4-62v48 (Running) on ip-172-20-43-5.eu-central-1.compute.internal (1/1) (primary)
        pvc : mycluster-yizs
        deployment : mycluster-qcum
        deployment : mycluster-yizs
        service : mycluster (100.65.175.125)
        service : mycluster-replica (100.64.86.147)
        replica : mycluster-qcum
        labels : name=mycluster pg-cluster=mycluster primary=true archive=false archive-timeout=60 crunchy_collect=false
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/training/learn-devops-the-complete-kubernetes-course/learn-devops-the-complete-kubernetes-course# kubectl delete -f postgres-operator/storage.yml
storageclass.storage.k8s.io "standard" deleted
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pgo delete cluster mycluster
WARNING: Are you sure? (yes/no): yes
FATA[0003] Do: Get https://127.0.0.1:18443/clustersdelete/mycluster?selector=&delete-data=false&delete-backups=false&version=3.1: dial tcp 127.0.0.1:18443: getsockopt: connection refused
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops delete cluster kubernetes.peelmicro.com --state=s3://kubernetes.peelmicro.com --yes
TYPE                    NAME                                                                                    ID
autoscaling-config      master-eu-central-1a.masters.kubernetes.peelmicro.com-20190324093831                    master-eu-central-1a.masters.kubernetes.peelmicro.com-20190324093831
autoscaling-config      nodes.kubernetes.peelmicro.com-20190324093831                                           nodes.kubernetes.peelmicro.com-20190324093831
autoscaling-group       master-eu-central-1a.masters.kubernetes.peelmicro.com                                   master-eu-central-1a.masters.kubernetes.peelmicro.com
autoscaling-group       nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
dhcp-options            kubernetes.peelmicro.com                                                                dopt-017d432d660869b35
iam-instance-profile    masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-instance-profile    nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
iam-role                masters.kubernetes.peelmicro.com                                                        masters.kubernetes.peelmicro.com
iam-role                nodes.kubernetes.peelmicro.com                                                          nodes.kubernetes.peelmicro.com
instance                master-eu-central-1a.masters.kubernetes.peelmicro.com                                   i-0e2d3e9a34aa379ed
instance                nodes.kubernetes.peelmicro.com                                                          i-01224cf9a61cf5ab5
instance                nodes.kubernetes.peelmicro.com                                                          i-064e9f3da501a4ae3
instance                nodes.kubernetes.peelmicro.com                                                          i-0bf907ad5e4d6665e
internet-gateway        kubernetes.peelmicro.com                                                                igw-01e76ae6ae50e36a4
keypair                 kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e
route-table             kubernetes.peelmicro.com                                                                rtb-054c76fa0d47811da
route53-record          api.internal.kubernetes.peelmicro.com.                                                  Z11A7EHHWB1KHG/api.internal.kubernetes.peelmicro.com.
route53-record          api.kubernetes.peelmicro.com.                                                           Z11A7EHHWB1KHG/api.kubernetes.peelmicro.com.
route53-record          etcd-a.internal.kubernetes.peelmicro.com.                                               Z11A7EHHWB1KHG/etcd-a.internal.kubernetes.peelmicro.com.
route53-record          etcd-events-a.internal.kubernetes.peelmicro.com.                                        Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.
security-group          masters.kubernetes.peelmicro.com                                                        sg-08b8b8b329b35bae3
security-group          nodes.kubernetes.peelmicro.com                                                          sg-01fcb0e4407ce0318
subnet                  eu-central-1a.kubernetes.peelmicro.com                                                  subnet-042120b710f65c4d6
volume                  a.etcd-events.kubernetes.peelmicro.com                                                  vol-0a5286e7c41176b0f
volume                  a.etcd-main.kubernetes.peelmicro.com                                                    vol-064a68ddbf1c8afc8
volume                  kubernetes.peelmicro.com-dynamic-pvc-3ca47832-4e2f-11e9-84c9-024bd209dd2a               vol-06f8ea5e52462de45
volume                  kubernetes.peelmicro.com-dynamic-pvc-47419675-4e2d-11e9-84c9-024bd209dd2a               vol-052964f541f8d5644
volume                  kubernetes.peelmicro.com-dynamic-pvc-7484aca3-4e2e-11e9-84c9-024bd209dd2a               vol-0372e9198479130ab
vpc                     kubernetes.peelmicro.com                                                                vpc-086cccf09fa985e7a

autoscaling-group:master-eu-central-1a.masters.kubernetes.peelmicro.com ok
route53-record:Z11A7EHHWB1KHG/etcd-events-a.internal.kubernetes.peelmicro.com.  ok
keypair:kubernetes.kubernetes.peelmicro.com-ca:41:39:64:b1:ea:14:36:e6:ee:49:10:74:b6:e2:7e     ok
autoscaling-group:nodes.kubernetes.peelmicro.com        ok
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
volume:vol-052964f541f8d5644    ok
instance:i-064e9f3da501a4ae3    ok
instance:i-0e2d3e9a34aa379ed    ok
instance:i-01224cf9a61cf5ab5    ok
instance:i-0bf907ad5e4d6665e    ok
iam-instance-profile:nodes.kubernetes.peelmicro.com     ok
iam-instance-profile:masters.kubernetes.peelmicro.com   ok
iam-role:masters.kubernetes.peelmicro.com       ok
iam-role:nodes.kubernetes.peelmicro.com ok
autoscaling-config:nodes.kubernetes.peelmicro.com-20190324093831        ok
autoscaling-config:master-eu-central-1a.masters.kubernetes.peelmicro.com-20190324093831 ok
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
volume:vol-0372e9198479130ab    still has dependencies, will retry
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
volume:vol-064a68ddbf1c8afc8    still has dependencies, will retry
volume:vol-0a5286e7c41176b0f    still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
security-group:sg-08b8b8b329b35bae3     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        volume:vol-0a5286e7c41176b0f
        internet-gateway:igw-01e76ae6ae50e36a4
        security-group:sg-01fcb0e4407ce0318
        subnet:subnet-042120b710f65c4d6
        volume:vol-0372e9198479130ab
        volume:vol-06f8ea5e52462de45
        volume:vol-064a68ddbf1c8afc8
        security-group:sg-08b8b8b329b35bae3
        vpc:vpc-086cccf09fa985e7a
volume:vol-0a5286e7c41176b0f    still has dependencies, will retry
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
volume:vol-064a68ddbf1c8afc8    still has dependencies, will retry
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
volume:vol-0372e9198479130ab    still has dependencies, will retry
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
security-group:sg-08b8b8b329b35bae3     still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        volume:vol-064a68ddbf1c8afc8
        security-group:sg-08b8b8b329b35bae3
        vpc:vpc-086cccf09fa985e7a
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        volume:vol-0a5286e7c41176b0f
        internet-gateway:igw-01e76ae6ae50e36a4
        subnet:subnet-042120b710f65c4d6
        security-group:sg-01fcb0e4407ce0318
        volume:vol-0372e9198479130ab
        volume:vol-06f8ea5e52462de45
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
volume:vol-0372e9198479130ab    still has dependencies, will retry
volume:vol-064a68ddbf1c8afc8    ok
volume:vol-0a5286e7c41176b0f    ok
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
security-group:sg-08b8b8b329b35bae3     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        security-group:sg-08b8b8b329b35bae3
        vpc:vpc-086cccf09fa985e7a
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        internet-gateway:igw-01e76ae6ae50e36a4
        security-group:sg-01fcb0e4407ce0318
        subnet:subnet-042120b710f65c4d6
        volume:vol-0372e9198479130ab
        volume:vol-06f8ea5e52462de45
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
volume:vol-0372e9198479130ab    ok
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
security-group:sg-08b8b8b329b35bae3     ok
Not all resources deleted; waiting before reattempting deletion
        volume:vol-06f8ea5e52462de45
        vpc:vpc-086cccf09fa985e7a
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        internet-gateway:igw-01e76ae6ae50e36a4
        security-group:sg-01fcb0e4407ce0318
        subnet:subnet-042120b710f65c4d6
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        volume:vol-06f8ea5e52462de45
        vpc:vpc-086cccf09fa985e7a
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        internet-gateway:igw-01e76ae6ae50e36a4
        security-group:sg-01fcb0e4407ce0318
        subnet:subnet-042120b710f65c4d6
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        volume:vol-06f8ea5e52462de45
        vpc:vpc-086cccf09fa985e7a
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        internet-gateway:igw-01e76ae6ae50e36a4
        security-group:sg-01fcb0e4407ce0318
        subnet:subnet-042120b710f65c4d6
volume:vol-06f8ea5e52462de45    still has dependencies, will retry
subnet:subnet-042120b710f65c4d6 still has dependencies, will retry
internet-gateway:igw-01e76ae6ae50e36a4  still has dependencies, will retry
security-group:sg-01fcb0e4407ce0318     still has dependencies, will retry
Not all resources deleted; waiting before reattempting deletion
        vpc:vpc-086cccf09fa985e7a
        dhcp-options:dopt-017d432d660869b35
        route-table:rtb-054c76fa0d47811da
        internet-gateway:igw-01e76ae6ae50e36a4
        subnet:subnet-042120b710f65c4d6
        security-group:sg-01fcb0e4407ce0318
        volume:vol-06f8ea5e52462de45
subnet:subnet-042120b710f65c4d6 ok
volume:vol-06f8ea5e52462de45    ok
internet-gateway:igw-01e76ae6ae50e36a4  ok
security-group:sg-01fcb0e4407ce0318     ok
route-table:rtb-054c76fa0d47811da       ok
vpc:vpc-086cccf09fa985e7a       ok
dhcp-options:dopt-017d432d660869b35     ok
Deleted kubectl config for kubernetes.peelmicro.com

Deleted cluster: "kubernetes.peelmicro.com"
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

![](/images/other/cicd-learn-devops-the-complete-kubernetes-course/DemoPostgresqlOperator3.png)

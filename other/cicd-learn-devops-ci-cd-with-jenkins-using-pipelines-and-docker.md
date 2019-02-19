# Learn DevOps: CI/CD with Jenkins using Pipelines and Docker

> Github Repositories

- [jenkins-course](https://github.com/peelmicro/jenkins-course).
- [gs-gradle](https://github.com/peelmicro/gs-gradle).
- [docker-demo](https://github.com/peelmicro/docker-demo).

The [Learn DevOps: CI/CD with Jenkins using Pipelines and Docker](https://www.udemy.com/learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/) Udemy course explains how to use Jenkins the DevOps way. Automate your Jenkins jobs by using Jenkins Pipelines, Docker, and the Jenkins Job DSL .

> Table of contents
> [[toc]]

## What I've learned

- Use Jenkins to perform Continuous Integration within your Software Development Lifecycle.
- Install Jenkins using docker
- Configure Jenkins “The DevOps way”, using Docker, Jobs DSL and Jenkins Pipelines.
- Use plugins to integrate Jenkins with popular development software.
- Configure the authentication and authorization options to tighten security on your Jenkins UI.

## 1. Introduction

### 1. Introduction

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/Introduction.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/Introduction2.png)

### 2. Practical information

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/PracticalInformation.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/PracticalInformation2.png)

### 3. Procedure Document

**Practical details**
Github repository: https://github.com/wardviaene/jenkins-course

Facebook group: https://www.facebook.com/groups/840062592768074/

DigitalOcean free \$10 coupon: https://m.do.co/c/007f99ffb902

**DigitalOcean Installation Procedure**
This is just a summary, for the demo, see lecture 5: Demo - Jenkins Installation

Summary

- Create DigitalOcean account
- Create Droplet
- Jenkins install
- Configuration until you hit main screen

Full list of installation parameters: see https://hub.docker.com/_/jenkins/

**Create DigitalOcean Account**
Sign-up using https://m.do.co/c/007f99ffb902 to get \$10 in credit to use on a droplet

**Create droplet**

- with the \$10 credits you can run a 1 GB memory droplet for 1 month, a 2 GB for at least 2 weeks and a 4 GB droplet for at least 1 week. The 4 GB memory droplet is recommended

- Choose for ubuntu 16.04.x (xenial)

  - You can choose another system, but the instructions provided to install docker will only work on ubuntu xenial

**Install Docker**

```bash
$ sudo apt-get update

$ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

$ sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'

$ sudo apt-get update

$ sudo apt-get install -y docker-engine

$ sudo systemctl enable docker
```

**Install Jenkins**

```bash
$ sudo mkdir -p /var/jenkins_home

$ sudo chown -R 1000:1000 /var/jenkins_home/

$ docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home --name jenkins -d jenkins/jenkins:lts
```

- Open browser and go to: http://IP:8080/ (change IP to your droplet IP)

- You will be asked for initial password for the Jenkins, you can get this password by entering following command on your server.

```bash
$ cat /var/jenkins_home/secrets/initialAdminPassword
```

- A screen with “Create First admin User prompt” will appear. You will need to enter a username, password, full name and email address.

**Alternative Installation methods**

- Using a Vagrant box: https://github.com/wardviaene/devops-box

  - Works on Mac / Linux / Windows

  - Download virtualbox at www.virtualbox.org

  - Download vagrant at www.vagrantup.com

    - Download the repository, open a cmd/shell/terminal

    - cd into the project directory

    - Type “vagrant up”

- Without tools, just a plain install on your Linux / Mac / Windows machine:

Download the package from https://jenkins.io/download/ and follow the instructions for your operating system

### 4. Course Goals

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/CourseGoals.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/CourseGoals2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/CourseGoals3.png)

## 2. Introduction to Jenkins

### 5. What is Jenkins (Part I)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhatIsJenkinsPartI.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhatIsJenkinsPartI2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhatIsJenkinsPartI3.png)

### 6. What is Jenkins (Part II)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhatIsJenkinsPartII.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhatIsJenkinsPartII2.png)

### 7. Jenkins Installation

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsInstallation.png)

### 8. Demo: Jenkins installation

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation.png)

1. Sign-up using https://m.do.co/c/007f99ffb902 to get \$10 in credit to use on a droplet

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation12.png)

> IP: 68.183.44.204

```bash
Changing password for root.
(current) UNIX password:
Enter new UNIX password:
Retype new UNIX password:
root@ubuntu-s-1vcpu-2gb-lon1-01:~# sudo apt-get update
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Hit:2 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Get:3 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:4 http://security.ubuntu.com/ubuntu bionic-security/multiverse Sources [2308                                                                                                                                                              B]
Get:5 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB                                                                                                                                                             ]
Get:6 http://security.ubuntu.com/ubuntu bionic-security/main Sources [74.4 kB]
Get:7 http://security.ubuntu.com/ubuntu bionic-security/universe Sources [30.6 k                                                                                                                                                             B]
Get:8 http://security.ubuntu.com/ubuntu bionic-security/main amd64 Packages [264                                                                                                                                                              kB]
Get:9 http://mirrors.digitalocean.com/ubuntu bionic/universe Sources [9051 kB]
Get:10 http://security.ubuntu.com/ubuntu bionic-security/main Translation-en [98                                                                                                                                                             .8 kB]
Get:11 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages                                                                                                                                                              [119 kB]
Get:12 http://security.ubuntu.com/ubuntu bionic-security/universe Translation-en                                                                                                                                                              [67.2 kB]
Get:13 http://security.ubuntu.com/ubuntu bionic-security/multiverse amd64 Packag                                                                                                                                                             es [3332 B]
Get:14 http://security.ubuntu.com/ubuntu bionic-security/multiverse Translation-                                                                                                                                                             en [1848 B]
Get:15 http://mirrors.digitalocean.com/ubuntu bionic/main Sources [829 kB]
Get:16 http://mirrors.digitalocean.com/ubuntu bionic/restricted Sources [5324 B]
Get:17 http://mirrors.digitalocean.com/ubuntu bionic/multiverse Sources [181 kB]
Get:18 http://mirrors.digitalocean.com/ubuntu bionic/universe amd64 Packages [85                                                                                                                                                             70 kB]
Get:19 http://mirrors.digitalocean.com/ubuntu bionic/universe Translation-en [49                                                                                                                                                             41 kB]
Get:20 http://mirrors.digitalocean.com/ubuntu bionic/multiverse amd64 Packages [                                                                                                                                                             151 kB]
Get:21 http://mirrors.digitalocean.com/ubuntu bionic/multiverse Translation-en [                                                                                                                                                             108 kB]
Get:22 http://mirrors.digitalocean.com/ubuntu bionic-updates/restricted Sources                                                                                                                                                              [2064 B]
Get:23 http://mirrors.digitalocean.com/ubuntu bionic-updates/universe Sources [1                                                                                                                                                             26 kB]
Get:24 http://mirrors.digitalocean.com/ubuntu bionic-updates/multiverse Sources                                                                                                                                                              [4196 B]
Get:25 http://mirrors.digitalocean.com/ubuntu bionic-updates/main Sources [245 k                                                                                                                                                             B]
Get:26 http://mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 Packages                                                                                                                                                              [518 kB]
Get:27 http://mirrors.digitalocean.com/ubuntu bionic-updates/main Translation-en                                                                                                                                                              [194 kB]
Get:28 http://mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 Pack                                                                                                                                                             ages [725 kB]
Get:29 http://mirrors.digitalocean.com/ubuntu bionic-updates/universe Translation-en [184 kB]
Get:30 http://mirrors.digitalocean.com/ubuntu bionic-updates/multiverse amd64 Packages [6388 B]
Get:31 http://mirrors.digitalocean.com/ubuntu bionic-updates/multiverse Translation-en [3452 B]
Get:32 http://mirrors.digitalocean.com/ubuntu bionic-backports/universe Sources [2068 B]
Get:33 http://mirrors.digitalocean.com/ubuntu bionic-backports/universe amd64 Packages [3472 B]
Get:34 http://mirrors.digitalocean.com/ubuntu bionic-backports/universe Translation-en [1604 B]
Fetched 26.8 MB in 10s (2565 kB/s)
Reading package lists... Done
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
Executing: /tmp/apt-key-gpghome.AIQbuZehRU/gpg.1.sh --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
gpg: key F76221572C52609D: 7 signatures not checked due to missing keys
gpg: key F76221572C52609D: public key "Docker Release Tool (releasedocker) <docker@docker.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1

```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# sudo apt-get update
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Hit:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Get:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:4 http://security.ubuntu.com/ubuntu bionic-security/main amd64 Packages [264 kB]
Get:5 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Fetched 516 kB in 1s (625 kB/s)
Reading package lists... Done
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# sudo apt-get install -y docker-engine
Reading package lists... Done
Building dependency tree
Reading state information... Done
Package docker-engine is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'docker-engine' has no installation candidate
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
Hit:4 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic InRelease
Get:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:5 https://apt.dockerproject.org/repo ubuntu-xenial InRelease [48.7 kB]
Get:6 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages [4177 B]
Fetched 216 kB in 1s (250 kB/s)
Reading package lists... Done
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt-get update
Hit:1 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:2 https://apt.dockerproject.org/repo ubuntu-xenial InRelease
Hit:3 http://mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:4 http://mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:5 http://mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Reading package lists... Done
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt-get install -y docker-engine
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  aufs-tools cgroupfs-mount libltdl7
The following NEW packages will be installed:
  aufs-tools cgroupfs-mount docker-engine libltdl7
0 upgraded, 4 newly installed, 0 to remove and 21 not upgraded.
Need to get 19.4 MB of archives.
After this operation, 93.4 MB of additional disk space will be used.
Get:1 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 docker-engine amd64 17.05.0~ce-0~ubuntu-xenial [19.3 MB]
Get:2 http://mirrors.digitalocean.com/ubuntu bionic/universe amd64 aufs-tools amd64 1:4.9+20170918-1ubuntu1 [104 kB]
Get:3 http://mirrors.digitalocean.com/ubuntu bionic/universe amd64 cgroupfs-mount all 1.4 [6320 B]
Get:4 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 libltdl7 amd64 2.4.6-2 [38.8 kB]
Fetched 19.4 MB in 1s (18.2 MB/s)
Selecting previously unselected package aufs-tools.
(Reading database ... 60062 files and directories currently installed.)
Preparing to unpack .../aufs-tools_1%3a4.9+20170918-1ubuntu1_amd64.deb ...
Unpacking aufs-tools (1:4.9+20170918-1ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../cgroupfs-mount_1.4_all.deb ...
Unpacking cgroupfs-mount (1.4) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../libltdl7_2.4.6-2_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-2) ...
Selecting previously unselected package docker-engine.
Preparing to unpack .../docker-engine_17.05.0~ce-0~ubuntu-xenial_amd64.deb ...
Unpacking docker-engine (17.05.0~ce-0~ubuntu-xenial) ...
Setting up aufs-tools (1:4.9+20170918-1ubuntu1) ...
Processing triggers for ureadahead (0.100.0-20) ...
Setting up cgroupfs-mount (1.4) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for systemd (237-3ubuntu10.11) ...
Setting up libltdl7:amd64 (2.4.6-2) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up docker-engine (17.05.0~ce-0~ubuntu-xenial) ...
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /lib/systemd/system/docker.service.
Created symlink /etc/systemd/system/sockets.target.wants/docker.socket → /lib/systemd/system/docker.socket.
Processing triggers for ureadahead (0.100.0-20) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for systemd (237-3ubuntu10.11) ...
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# systemctl enable docker
Synchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable docker
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# systemctl start docker
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# usermod -aG docker ubuntu
usermod: user 'ubuntu' does not exist
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# sudo mkdir -p /var/jenkins_home
root@ubuntu-s-1vcpu-2gb-lon1-01:~# sudo chown -R 1000:1000 /var/jenkins_home/
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home --name jenkins -d jenkins/jenkins:lts
Unable to find image 'jenkins/jenkins:lts' locally
lts: Pulling from jenkins/jenkins
cd8eada9c7bb: Pull complete
c2677faec825: Pull complete
fcce419a96b1: Pull complete
045b51e26e75: Pull complete
88e50f3a5916: Pull complete
a7c546cdc7ce: Pull complete
73b0460146c0: Pull complete
428095c4a908: Pull complete
fa222c02db79: Pull complete
57f1a28393c3: Pull complete
0eb76220d14f: Pull complete
7a68bd923bf5: Pull complete
6f722429b08a: Pull complete
083c6c1f5b76: Pull complete
d9ff5e75fdc1: Pull complete
e2294143a38b: Pull complete
fabf8fa4f9d1: Pull complete
b1b22ef0e6d7: Pull complete
dfd79665ef7f: Pull complete
894ddf3cfafd: Pull complete
Digest: sha256:0cc3f0cc112035da773cf1f892ab9240cce4d8df0048ac6a0073bb5d0b7e448b
Status: Downloaded newer image for jenkins/jenkins:lts
0dfe61b817f5d528699b5d2d8d63a16bb86900c3cd339274d3ca97a1ecceaf0a
```

> http://68.183.44.204:8080

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cat /var/jenkins_home/secrets/initialAdminPassword
XXXX992f7426465ea5b9481da9a9XXXX
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsInstallation19.png)

### 9. Introduction to Docker

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToDocker.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToDocker2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToDocker3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToDocker4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToDocker5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToDocker6.png)

## 3. Building a NodeJS app

### 10. Why a NodeJS application?

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhyANodeJsApplication.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhyANodeJsApplication2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/WhyANodeJsApplication3.png)

### 11. How to build and deploy a NodeJS app

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/HowToBuildAndDeployANodeJsApp.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/HowToBuildAndDeployANodeJsApp2.png)

### 12. Demo - Building the first application

- Get the code from [docker-demo](https://github.com/wardviaene/docker-demo)

- Install the NodeJS Pluging in our Jenkins instance.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication6.png)

- Copy the GitHub Web URL

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication9.png)

- Add the GitHub URL

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication11.png)

- Select the `[x] Provide Node & npm bin/ folder to PATH` and put the `npm install` command. Then click `Save` because the NodeJs is still not installed.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication15.png)

- Click on `Add NodeJs`, put the name `nodejs` and then click on `Save`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication16.png)

- Go back to `Configure` the `nodejs example app` application.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication17.png)

- Ensure the `nodejs` NodeJS installation is selected and click on `Save`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication18.png)

- Click on `Build Now`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication20.png)

- Click on `Console Output`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication22.png)

- It has been created on `/var/jenkins_home/workspace/nodejs example app`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingTheFirstApplication23.png)

```bash

root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd /var/jenkins_home/workspace/
root@ubuntu-s-1vcpu-2gb-lon1-01:/var/jenkins_home/workspace# cd nodejs\ example\ app/
root@ubuntu-s-1vcpu-2gb-lon1-01:/var/jenkins_home/workspace/nodejs example app# ls
Dockerfile  docker-compose.yml  index-db.js  index.js  misc  node_modules  package-lock.json  package.json  test
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:/var/jenkins_home/workspace/nodejs example app# ls
Dockerfile  docker-compose.yml  index-db.js  index.js  misc  node_modules  package-lock.json  package.json  test
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:/var/jenkins_home/workspace/nodejs example app# ls node_modules
accepts          browser-stdout       cookie            ee-first              finalhandler  has-flag     ipaddr.js          mime-db     ms           path-is-absolute      raw-body         sqlstring       unpipe
array-flatten    bytes                cookie-signature  encodeurl             forwarded     he           isarray            mime-types  mysql        path-to-regexp        readable-stream  statuses        util-deprecate
balanced-match   commander            core-util-is      escape-html           fresh         http-errors  media-typer        minimatch   negotiator   process-nextick-args  safe-buffer      string_decoder  utils-merge
bignumber.js     concat-map           depd              escape-string-regexp  fs.realpath   iconv-lite   merge-descriptors  minimist    on-finished  proxy-addr            send             supports-color  vary
body-parser      content-disposition  destroy           etag                  glob          inflight     methods            mkdirp      once         qs                    serve-static     toidentifier    wrappy
brace-expansion  content-type         diff              express               growl         inherits     mime               mocha       parseurl     range-parser          setprototypeof   type-is
```

### 13. Demo - building nodejs app with Docker

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker2.png)

- Look for `docker` and select the `CloudBees Docker Build and Publish` one.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker5.png)

- We have to ensure that jenkins can access the `Docker socket` that in Linux is a file that allows to connect the `Docker API`.

- Get the code from [jenkins-docker](https://github.com/wardviaene/jenkins-docker)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker6.png)

> Dockerfile

```docker
FROM jenkins/jenkins
USER root

RUN mkdir -p /tmp/download && \
 curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
 rm -rf /tmp/download/docker/dockerd && \
 mv /tmp/download/docker/docker* /usr/local/bin/ && \
 rm -rf /tmp/download && \
 groupadd -g 999 docker && \
 usermod -aG staff,docker jenkins

user jenkins
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:/var/jenkins_home/workspace/nodejs example app# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
0dfe61b817f5        jenkins/jenkins:lts   "/sbin/tini -- /us..."   24 hours ago        Up 24 hours         0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
```

- Clone the jenkins-docker repository

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:/var/jenkins_home/workspace/nodejs example app# cd
root@ubuntu-s-1vcpu-2gb-lon1-01:~# git clone https://github.com/wardviaene/jenkins-docker.git
Cloning into 'jenkins-docker'...
remote: Enumerating objects: 19, done.
remote: Total 19 (delta 0), reused 0 (delta 0), pack-reused 19
Unpacking objects: 100% (19/19), done.
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd jenkins-docker/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# ls
Dockerfile  README.md
```

- build the docker container

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# docker build -t jenkins-docker .
Sending build context to Docker daemon  80.38kB
Step 1/4 : FROM jenkins/jenkins
latest: Pulling from jenkins/jenkins
ab1fc7e4bf91: Pull complete
35fba333ff52: Pull complete
f0cb1fa13079: Pull complete
3d1dd648b5ad: Pull complete
a9f886e483d6: Pull complete
4346341d3c49: Pull complete
006f2208d67a: Pull complete
fb85cf26717d: Pull complete
52ca068dbca7: Pull complete
471421673011: Pull complete
35b6c6899e4f: Pull complete
313872418d48: Pull complete
82f4759b8d12: Pull complete
d74d7ddd674b: Pull complete
0105832c4f22: Pull complete
78a3d229409c: Pull complete
6d9b49fc8a28: Pull complete
6302e8b6563c: Pull complete
7348f018cf93: Pull complete
c651ee7bd59e: Pull complete
Digest: sha256:abd3e3f96fbc3445c420fda590f37e2bd3377f69affd47b63b3d826d084c5ddc
Status: Downloaded newer image for jenkins/jenkins:latest
 ---> af09738dbe2f
Step 2/4 : USER root
 ---> Running in dcb9e42d1a82
 ---> 1b1748e454d8
Removing intermediate container dcb9e42d1a82
Step 3/4 : RUN mkdir -p /tmp/download &&  curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download &&  rm -rf /tmp/download/docker/dockerd &&  mv /tmp/download/docker/docker* /usr/local/bin/ &&  rm -rf /tmp/download &&  groupadd -g 999 docker &&  usermod -aG staff,docker jenkins
 ---> Running in b553898e167e
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 36.9M  100 36.9M    0     0  16.9M      0  0:00:02  0:00:02 --:--:-- 16.9M
 ---> aacf2ded600d
Removing intermediate container b553898e167e
Step 4/4 : USER jenkins
 ---> Running in 2715b7eed5b5
 ---> b033d3e1db1f
Removing intermediate container 2715b7eed5b5
Successfully built b033d3e1db1f
Successfully tagged jenkins-docker:latest
```

- stop the jenkins container

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# docker stop jenkins
jenkins
```

- Remove the container

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# docker rm jenkins
jenkins
```

- Even though the container has been removed the volume is still available

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# ls /var/jenkins_home
config.xml                        hudson.tasks.Maven.xml                       jenkins.model.JenkinsLocationConfiguration.xml       nodeMonitors.xml                                           queue.xml                 updates
copy_reference_file.log           identity.key.enc                             jenkins.mvn.GlobalMavenConfig.xml                    nodes                                                      queue.xml.bak             userContent
hudson.model.UpdateCenter.xml     init.groovy.d                                jenkins.plugins.nodejs.tools.NodeJSInstallation.xml  org.jenkinsci.plugins.docker.commons.tools.DockerTool.xml  secret.key                users
hudson.plugins.git.GitTool.xml    jenkins.CLI.xml                              jenkins.telemetry.Correlator.xml                     org.jenkinsci.plugins.gitclient.JGitApacheTool.xml         secret.key.not-so-secret  war
hudson.plugins.gradle.Gradle.xml  jenkins.install.InstallUtil.lastExecVersion  jobs                                                 org.jenkinsci.plugins.gitclient.JGitTool.xml               secrets                   workflow-libs
hudson.tasks.Ant.xml              jenkins.install.UpgradeWizard.state          logs                                                 plugins                                                    tools                     workspace
```

- Execute the new Docker container created with a new volumen with the `docker.sock`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins -d jenkins-docker
cc133fbc9f30932845ebdf4b2c69526cb65db12d0f095744921371768db83677
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                              NAMES
cc133fbc9f30        jenkins-docker      "/sbin/tini -- /us..."   41 seconds ago      Up 41 seconds       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# ls -ahl /var/run/docker.sock
srw-rw---- 1 root docker 0 Feb  6 19:17 /var/run/docker.sock
```

- Open a shell inside the new docker-jenkins conatiner and check if the volume is created there and also if the jenkin image is running inside it.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker# docker exec -it jenkins bash
jenkins@cc133fbc9f30:/$ ls -ahl /var/run/docker.sock
srw-rw---- 1 root docker 0 Feb  6 19:17 /var/run/docker.sock
jenkins@cc133fbc9f30:/$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                              NAMES
cc133fbc9f30        jenkins-docker      "/sbin/tini -- /usr/…"   6 minutes ago       Up 6 minutes        0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
jenkins@cc133fbc9f30:/$ exit
exit
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins-docker#
```

- Go to http://68.183.44.204:8080/ again and everything should be working as before.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker10.png)

- We need to create a Docker Repository

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker11.png)

- `Name`: docker-nodejs-demo

::: tip
You can push a new image to this repository using the CLI

docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname

Make sure to change tagname with your desired image repository tag.
:::

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker13.png)

- We need to provide the `peelmicro/docker-nodejs-demo` name of the image and the Docker Hub credentials.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker19.png)

```bash
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/nodejs example app
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/wardviaene/docker-demo.git # timeout=10
Fetching upstream changes from https://github.com/wardviaene/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
[nodejs example app] $ /bin/sh -xe /tmp/jenkins6171764094127795257.sh
+ npm install
audited 171 packages in 2.388s
found 0 vulnerabilities

[nodejs example app] $ docker build -t peelmicro/docker-nodejs-demo --pull=true "/var/jenkins_home/workspace/nodejs example app"
Sending build context to Docker daemon  5.693MB

Step 1/6 : FROM node:4.6
4.6: Pulling from library/node
386a066cd84a: Pulling fs layer
75ea84187083: Pulling fs layer
88b459c9f665: Pulling fs layer
1e3ee139a577: Pulling fs layer
f78ff7d0315b: Pulling fs layer
f4ba677961ff: Pulling fs layer
21db8c3555aa: Pulling fs layer
1e3ee139a577: Waiting
f78ff7d0315b: Waiting
f4ba677961ff: Waiting
21db8c3555aa: Waiting
386a066cd84a: Verifying Checksum
386a066cd84a: Download complete
75ea84187083: Verifying Checksum
75ea84187083: Download complete
f78ff7d0315b: Verifying Checksum
f78ff7d0315b: Download complete
88b459c9f665: Verifying Checksum
88b459c9f665: Download complete
f4ba677961ff: Verifying Checksum
f4ba677961ff: Download complete
21db8c3555aa: Verifying Checksum
21db8c3555aa: Download complete
386a066cd84a: Pull complete
75ea84187083: Pull complete
1e3ee139a577: Verifying Checksum
1e3ee139a577: Download complete
88b459c9f665: Pull complete
1e3ee139a577: Pull complete
f78ff7d0315b: Pull complete
f4ba677961ff: Pull complete
21db8c3555aa: Pull complete
Digest: sha256:a1cc6d576734c331643f9c4e0e7f572430e8baf9756dc24dab11d87b34bd202e
Status: Downloaded newer image for node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> 8e946524c73a
Removing intermediate container 48690a0debdc
Step 3/6 : ADD . /app
 ---> 73c6bd398ad1
Removing intermediate container cd884867e828
Step 4/6 : RUN npm install
 ---> Running in 166b8924391b
[91mnpm[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mnpm info using npm@2.15.11
.
.
.
[0m[91mnpm info ok
[0m ---> 516e160bc586
Removing intermediate container 166b8924391b
Step 5/6 : EXPOSE 3000
 ---> Running in 235f46cc4ab5
 ---> e89547d8402b
Removing intermediate container 235f46cc4ab5
Step 6/6 : CMD npm start
 ---> Running in d0abb5005944
 ---> b8d58a0332fc
Removing intermediate container d0abb5005944
Successfully built b8d58a0332fc
Successfully tagged peelmicro/docker-nodejs-demo:latest
[nodejs example app] $ docker inspect b8d58a0332fc
[nodejs example app] $ docker push peelmicro/docker-nodejs-demo
The push refers to a repository [docker.io/peelmicro/docker-nodejs-demo]
07c0d812d543: Preparing
650cf3f1ee49: Preparing
04edcc0615ff: Preparing
e1da644611ce: Preparing
d79093d63949: Preparing
87cbe568afdd: Preparing
787c930753b4: Preparing
9f17712cba0b: Preparing
223c0d04a137: Preparing
fe4c16cbf7a4: Preparing
87cbe568afdd: Waiting
787c930753b4: Waiting
9f17712cba0b: Waiting
223c0d04a137: Waiting
fe4c16cbf7a4: Waiting
d79093d63949: Mounted from library/node
e1da644611ce: Mounted from library/node
87cbe568afdd: Mounted from library/node
04edcc0615ff: Pushed
07c0d812d543: Pushed
787c930753b4: Mounted from library/node
650cf3f1ee49: Pushed
9f17712cba0b: Mounted from library/node
223c0d04a137: Mounted from library/node
fe4c16cbf7a4: Mounted from library/node
latest: digest: sha256:2b3bc976f237628453e3aceaf97190eda53f0b3ced9da690744403c97e6eb129 size: 2420
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker20.png)

- We are going to test it pulling it from the Docker Hub.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker pull peelmicro/docker-nodejs-demo
Using default tag: latest
latest: Pulling from peelmicro/docker-nodejs-demo
Digest: sha256:2b3bc976f237628453e3aceaf97190eda53f0b3ced9da690744403c97e6eb129
Status: Image is up to date for peelmicro/docker-nodejs-demo:latest
```

- We can run it

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker run -p 3000:3000 -d --name my-nodejs-app peelmicro/docker-nodejs-demo
846e898b4a59af6d2d07e2d1d5e3f6674a17a7b576d45652cc0068e52ee1bb35
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                                              NAMES
846e898b4a59        peelmicro/docker-nodejs-demo   "/bin/sh -c 'npm s..."   19 seconds ago      Up 18 seconds       0.0.0.0:3000->3000/tcp                             my-nodejs-app
cc133fbc9f30        jenkins-docker                 "/sbin/tini -- /us..."   11 hours ago        Up 11 hours         0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# curl localhost:3000
Hello World!root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildingNodeJsAppWithDocker21.png)

## 4. Infrastructure as code and automation

### 14. Introduction to Infrastructure as code and automation

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToInfrastructureAsCodeAndAutomation.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToInfrastructureAsCodeAndAutomation2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToInfrastructureAsCodeAndAutomation3.png)

## 5. Jenkins Job DSL

### 15. Introduction to Jenkins Job DSL

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsJobDsl.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsJobDsl2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsJobDsl3.png)

- `scm` - software configuration management.
- `triggers` - How many times we want to build it. It uses cron syntax.
- `wrappers` - System we are using.
- `steps` - What we want to do.

### 16. Demo: Jenkins Job DSL with NodeJS application

- We need to install the `Job DSL` plugin

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication5.png)

```
 Oops!
A problem occurred while processing the request. Please check our bug tracker to see if a similar problem has already been reported. If it is already reported, please vote and put a comment on it to let us gauge the impact of the problem. If you think this is a new issue, please file a new issue. When you file an issue, make sure to add the entire stack trace, along with the version of Jenkins and relevant plugins. The users list might be also useful in understanding what has happened.

Stack trace
java.lang.IllegalStateException: Expected 1 instance of hudson.model.User$AllUsers but got 0
	at hudson.ExtensionList.lookupSingleton(ExtensionList.java:450)
	at hudson.model.User$AllUsers.getInstance(User.java:1084)
	at hudson.model.User$AllUsers.get(User.java:1102)
	at hudson.model.User$AllUsers.access$100(User.java:1065)
	at hudson.model.User.getOrCreateById(User.java:521)
	at hudson.model.User.getById(User.java:619)
	at hudson.security.HttpSessionContextIntegrationFilter2.hasInvalidSessionSeed(HttpSessionContextIntegrationFilter2.java:87)
	at hudson.security.HttpSessionContextIntegrationFilter2.doFilter(HttpSessionContextIntegrationFilter2.java:60)
	at hudson.security.ChainedServletFilter$1.doFilter(ChainedServletFilter.java:87)
	at hudson.security.ChainedServletFilter.doFilter(ChainedServletFilter.java:90)
	at hudson.security.HudsonFilter.doFilter(HudsonFilter.java:171)
	at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1642)
	at org.kohsuke.stapler.compression.CompressionFilter.doFilter(CompressionFilter.java:49)
	at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1642)
	at hudson.util.CharacterEncodingFilter.doFilter(CharacterEncodingFilter.java:82)
	at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1642)
	at org.kohsuke.stapler.DiagnosticThreadNameFilter.doFilter(DiagnosticThreadNameFilter.java:30)
	at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1642)
	at org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:533)
	at org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:146)
	at org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:524)
	at org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)
	at org.eclipse.jetty.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:257)
	at org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:1595)
	at org.eclipse.jetty.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:255)
	at org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1340)
	at org.eclipse.jetty.server.handler.ScopedHandler.nextScope(ScopedHandler.java:203)
	at org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:473)
	at org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:1564)
	at org.eclipse.jetty.server.handler.ScopedHandler.nextScope(ScopedHandler.java:201)
	at org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1242)
	at org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:144)
	at org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)
	at org.eclipse.jetty.server.Server.handle(Server.java:503)
	at org.eclipse.jetty.server.HttpChannel.handle(HttpChannel.java:364)
	at org.eclipse.jetty.server.HttpConnection.onFillable(HttpConnection.java:260)
	at org.eclipse.jetty.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)
	at org.eclipse.jetty.io.FillInterest.fillable(FillInterest.java:103)
	at org.eclipse.jetty.io.ChannelEndPoint$2.run(ChannelEndPoint.java:118)
	at org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.runTask(EatWhatYouKill.java:333)
	at org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.doProduce(EatWhatYouKill.java:310)
	at org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.tryProduce(EatWhatYouKill.java:168)
	at org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.run(EatWhatYouKill.java:126)
	at org.eclipse.jetty.util.thread.ReservedThreadExecutor$ReservedThread.run(ReservedThreadExecutor.java:366)
	at org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:765)
	at org.eclipse.jetty.util.thread.QueuedThreadPool$2.run(QueuedThreadPool.java:683)
	at java.lang.Thread.run(Thread.java:748)
```

- Stop, remove and recreate Jenkins

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                                              NAMES
846e898b4a59        peelmicro/docker-nodejs-demo   "/bin/sh -c 'npm s..."   11 hours ago        Up 11 hours         0.0.0.0:3000->3000/tcp                             my-nodejs-app
cc133fbc9f30        jenkins-docker                 "/sbin/tini -- /us..."   21 hours ago        Up 21 hours         0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker stop jenkins
jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                    NAMES
846e898b4a59        peelmicro/docker-nodejs-demo   "/bin/sh -c 'npm s..."   11 hours ago        Up 11 hours         0.0.0.0:3000->3000/tcp   my-nodejs-app
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins -d jenkins-docker
docker: Error response from daemon: Conflict. The container name "/jenkins" is already in use by container "cc133fbc9f30932845ebdf4b2c69526cb65db12d0f095744921371768db83677". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker run cc133fbc9f30932845ebdf4b2c69526cb65db12d0f095744921371768db83677
docker: Error: No such image: cc133fbc9f30932845ebdf4b2c69526cb65db12d0f095744921371768db83677.
See 'docker run --help'.
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker rm jenkins
jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins -d jenkins-docker
0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118

```

- Ensure is running again.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication6.png)

- Create a new Item

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication7.png)

- Put the `seed project` name, select `Freestyle project` and click on `Ok`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication8.png)

- Copy the code from [jenkins-course](https://github.com/wardviaene/jenkins-course)

> nodejs.groovy

```groovy
ob('NodeJS example') {
    scm {
        git('git://github.com/wardviaene/docker-demo.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('DSL User')
            node / gitConfigEmail('jenkins-dsl@newtech.academy')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication11.png)

- `DSL Scripts`: job-dsl/nodejs.groovy

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication14.png)

```
FailedConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
Cloning the remote Git repository
Cloning repository https://github.com/wardviaene/jenkins-course
 > git init /var/jenkins_home/workspace/seed project # timeout=10
Fetching upstream changes from https://github.com/wardviaene/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/wardviaene/jenkins-course # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/wardviaene/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/wardviaene/jenkins-course
 > git fetch --tags --progress https://github.com/wardviaene/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision dd34effa598166f7ede72dd5703b28bcf27a850e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Commit message: "Merge pull request #2 from aware74/patch-1"
First time build. Skipping changelog.
Processing DSL script job-dsl/nodejs.groovy
ERROR: script not yet approved for use
Finished: FAILURE
```

- We need to `approve` the scripts before they are used.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication20.png)

```
SuccessConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/wardviaene/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/wardviaene/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision dd34effa598166f7ede72dd5703b28bcf27a850e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Commit message: "Merge pull request #2 from aware74/patch-1"
 > git rev-list --no-walk dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Processing DSL script job-dsl/nodejs.groovy
Added items:
    GeneratedJob{name='NodeJS example'}
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication21.png)

- If we generate it again

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication23.png)

- It says it already exists and it's not created again.

```
SuccessConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/wardviaene/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/wardviaene/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision dd34effa598166f7ede72dd5703b28bcf27a850e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Commit message: "Merge pull request #2 from aware74/patch-1"
 > git rev-list --no-walk dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Processing DSL script job-dsl/nodejs.groovy
Existing items:
    GeneratedJob{name='NodeJS example'}
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication24.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication25.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication26.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication27.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication28.png)

- Let's run it.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication30.png)

```
SuccessConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/NodeJS example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/wardviaene/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/wardviaene/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/wardviaene/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master, refs/tags/jenkins-NodeJS_example-2)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git tag -a -f -m Jenkins Build #3 jenkins-NodeJS_example-3 # timeout=10
[NodeJS example] $ /bin/sh -xe /tmp/jenkins2512273101709532434.sh
+ npm install
audited 171 packages in 1.928s
found 0 vulnerabilities

Finished: SUCCESS
```

- From our terminal:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                                              NAMES
0f818f5035de        jenkins-docker                 "/sbin/tini -- /us..."   35 minutes ago      Up 35 minutes       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
846e898b4a59        peelmicro/docker-nodejs-demo   "/bin/sh -c 'npm s..."   12 hours ago        Up 12 hours         0.0.0.0:3000->3000/tcp                             my-nodejs-app
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker exec -it 0f818f5035de bash
jenkins@0f818f5035de:/$ cd /var/jenkins_home/
jenkins@0f818f5035de:~$ ls
config.xml                        hudson.tasks.Ant.xml                           jenkins.install.UpgradeWizard.state                  nodeMonitors.xml                                           queue.xml.bak             userContent
copy_reference_file.log           hudson.tasks.Maven.xml                         jenkins.model.JenkinsLocationConfiguration.xml       nodes                                                      scriptApproval.xml        users
credentials.xml                   identity.key.enc                               jenkins.mvn.GlobalMavenConfig.xml                    org.jenkinsci.plugins.docker.commons.tools.DockerTool.xml  secret.key                war
fingerprints                      init.groovy.d                                  jenkins.plugins.nodejs.tools.NodeJSInstallation.xml  org.jenkinsci.plugins.gitclient.JGitApacheTool.xml         secret.key.not-so-secret  workflow-libs
hudson.model.UpdateCenter.xml     javaposse.jobdsl.plugin.ExecuteDslScripts.xml  jenkins.telemetry.Correlator.xml                     org.jenkinsci.plugins.gitclient.JGitTool.xml               secrets                   workspace
hudson.plugins.git.GitTool.xml    jenkins.CLI.xml                                jobs                                                 plugins                                                    tools
hudson.plugins.gradle.Gradle.xml  jenkins.install.InstallUtil.lastExecVersion    logs                                                 queue.xml                                                  updates
jenkins@0f818f5035de:~$ cd workspace
jenkins@0f818f5035de:~/workspace$ ls
NodeJS example  nodejs example app  seed project
jenkins@0f818f5035de:~/workspace$ cd NodeJS\ example/
jenkins@0f818f5035de:~/workspace/NodeJS example$ ls
Dockerfile  docker-compose.yml  index-db.js  index.js  misc  node_modules  package-lock.json  package.json  test
jenkins@0f818f5035de:~/workspace/NodeJS example$ ls -ahl
total 72K
drwxr-xr-x  6 jenkins jenkins 4.0K Feb  8 17:20 .
drwxr-xr-x  5 jenkins jenkins 4.0K Feb  8 17:20 ..
drwxr-xr-x  8 jenkins jenkins 4.0K Feb  8 17:30 .git
-rw-r--r--  1 jenkins jenkins   80 Feb  8 17:20 Dockerfile
-rw-r--r--  1 jenkins jenkins  356 Feb  8 17:20 docker-compose.yml
-rw-r--r--  1 jenkins jenkins 1.1K Feb  8 17:20 index-db.js
-rw-r--r--  1 jenkins jenkins  316 Feb  8 17:20 index.js
drwxr-xr-x  2 jenkins jenkins 4.0K Feb  8 17:20 misc
drwxr-xr-x 80 jenkins jenkins 4.0K Feb  8 17:20 node_modules
-rw-r--r--  1 jenkins jenkins  26K Feb  8 17:20 package-lock.json
-rw-r--r--  1 jenkins jenkins  397 Feb  8 17:20 package.json
drwxr-xr-x  2 jenkins jenkins 4.0K Feb  8 17:20 test
```

```bash
jenkins@0f818f5035de:~/workspace/NodeJS example$ find ~ -name 'npm'
/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/lib/node_modules/npm
/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/lib/node_modules/npm/bin/npm
/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/bin/npm
```

- Enter the following command to have access to `npm`:

```bash
export PATH=$PATH:/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/bin
```

```bash
jenkins@0f818f5035de:~/workspace/NodeJS example$ export PATH=$PATH:/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/bin
jenkins@0f818f5035de:~/workspace/NodeJS example$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs/bin
```

```bash
jenkins@0f818f5035de:~/workspace/NodeJS example$ npm start

> myapp@0.0.1 start /var/jenkins_home/workspace/NodeJS example
> node index.js

Example app listening at http://:::3000
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithNodeJsApplication31.png)

### 17. Demo: Jenkins Job DSL with docker build and publish

- We are going to create a new Job that creates a Docker image and push it to Docker Hub.

> nodejsdocker.groovy

```groovy
job('NodeJS Docker example') {
    scm {
        git('git://github.com/wardviaene/docker-demo.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('DSL User')
            node / gitConfigEmail('jenkins-dsl@newtech.academy')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        dockerBuildAndPublish {
            repositoryName('wardviaene/docker-nodejs-demo')
            tag('${GIT_REVISION,length=9}')
            registryCredentials('dockerhub')
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}
```

- We can go to [Jenkins Job DSL API](http://jenkinsci.github.io/job-dsl-plugin/) to get to know about the DSL commands.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish3.png)

- Add the `job-dsl/nodejsdocker.groovy` script.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish6.png)

- The id needs to be whar we put in `registryCredentials('dockerhub')`, so, `dockerhub`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish10.png)

```
FailedConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/wardviaene/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/wardviaene/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision dd34effa598166f7ede72dd5703b28bcf27a850e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Commit message: "Merge pull request #2 from aware74/patch-1"
 > git rev-list --no-walk dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Processing DSL script job-dsl/nodejs.groovy
Processing DSL script job-dsl/nodejsdocker.groovy
ERROR: script not yet approved for use
Finished: FAILURE
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish13.png)

::: warning
It will probably not work because the repository name is wardviaene/docker-nodejs-demo, that I don't have access.
:::

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish15.png)

```
SuccessConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/wardviaene/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/wardviaene/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision dd34effa598166f7ede72dd5703b28bcf27a850e (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Commit message: "Merge pull request #2 from aware74/patch-1"
 > git rev-list --no-walk dd34effa598166f7ede72dd5703b28bcf27a850e # timeout=10
Processing DSL script job-dsl/nodejs.groovy
Processing DSL script job-dsl/nodejsdocker.groovy
Added items:
    GeneratedJob{name='NodeJS Docker example'}
Existing items:
    GeneratedJob{name='NodeJS example'}
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish17.png)

```
FailedConsole Output
Started by an SCM change
Building in workspace /var/jenkins_home/workspace/NodeJS Docker example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/wardviaene/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/wardviaene/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/wardviaene/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
First time build. Skipping changelog.
 > git tag -a -f -m Jenkins Build #2 jenkins-NodeJS_Docker_example-2 # timeout=10
[NodeJS Docker example] $ docker build -t wardviaene/docker-nodejs-demo: "/var/jenkins_home/workspace/NodeJS Docker example"
invalid argument "wardviaene/docker-nodejs-demo:" for "-t, --tag" flag: invalid reference format
See 'docker build --help'.
Build step 'Docker Build and Publish' marked build as failure
Finished: FAILURE
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish21.png)

- Chane the repository name with `peelmicro/docker-nodejs-demo`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish24.png)

```
FailedConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/NodeJS Docker example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/wardviaene/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/wardviaene/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/wardviaene/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master, refs/tags/jenkins-NodeJS_Docker_example-2)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git tag -a -f -m Jenkins Build #3 jenkins-NodeJS_Docker_example-3 # timeout=10
[NodeJS Docker example] $ docker build -t peelmicro/docker-nodejs-demo: "/var/jenkins_home/workspace/NodeJS Docker example"
invalid argument "peelmicro/docker-nodejs-demo:" for "-t, --tag" flag: invalid reference format
See 'docker build --help'.
Build step 'Docker Build and Publish' marked build as failure
Finished: FAILURE
```

- I need to fork his repository first in GitHub and use it.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish25.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish26.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish27.png)

- Update `job-dsl/nodejs.groovy`

```groovy
job('NodeJS example') {
    scm {
        git('git://github.com/peelmicro/docker-demo.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('peelmicro')
            node / gitConfigEmail('juanp_perez@loyaltycrm.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}
```

- Update `job-dsl/nodejsdocker.groovy`

```groovy
job('NodeJS Docker example') {
    scm {
        git('git://github.com/peelmicro/docker-demo.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('peelmicro')
            node / gitConfigEmail('juanp_perez@loyaltycrm.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        dockerBuildAndPublish {
            repositoryName('peelmicro/docker-nodejs-demo')
            tag('${GIT_REVISION,length=9}')
            registryCredentials('dockerhub')
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish28.png)

-Update the `seed project` with the new `https://github.com/peelmicro/jenkins-course` Repository URL.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish30.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish31.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish32.png)

```
FailedConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/peelmicro/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision fb356eea7736d2e5c338b9ca77b30103edf6d0fd (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f fb356eea7736d2e5c338b9ca77b30103edf6d0fd # timeout=10
Commit message: "Updated job-dsl/nodejsdocker.groovy to put my own credentials"
First time build. Skipping changelog.
Processing DSL script job-dsl/nodejs.groovy
ERROR: script not yet approved for use
Finished: FAILURE
```

- We need to approve the new scripts

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish33.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish34.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish35.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish36.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish37.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish38.png)

```
SuccessConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/seed project
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/jenkins-course # timeout=10
Fetching upstream changes from https://github.com/peelmicro/jenkins-course
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/jenkins-course +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 640a5adc9335dbf902a01a701ac32edf9e227e60 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 640a5adc9335dbf902a01a701ac32edf9e227e60 # timeout=10
Commit message: "Put the proper GitHub repository"
 > git rev-list --no-walk 640a5adc9335dbf902a01a701ac32edf9e227e60 # timeout=10
Processing DSL script job-dsl/nodejs.groovy
Processing DSL script job-dsl/nodejsdocker.groovy
Existing items:
    GeneratedJob{name='NodeJS Docker example'}
    GeneratedJob{name='NodeJS example'}
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish39.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish40.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish41.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish42.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish43.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish44.png)

```
FailedConsole Output
Started by an SCM change
Building in workspace /var/jenkins_home/workspace/NodeJS Docker example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/peelmicro/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/peelmicro/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master, refs/tags/jenkins-NodeJS_Docker_example-3)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
First time build. Skipping changelog.
 > git tag -a -f -m Jenkins Build #3 jenkins-NodeJS_Docker_example-3 # timeout=10
[NodeJS Docker example] $ docker build -t peelmicro/docker-nodejs-demo: "/var/jenkins_home/workspace/NodeJS Docker example"
invalid argument "peelmicro/docker-nodejs-demo:" for "-t, --tag" flag: invalid reference format
See 'docker build --help'.
Build step 'Docker Build and Publish' marked build as failure
Finished: FAILURE
```

- The `GIT_REVISION` environment variable doesn't exist, we need to use `GIT_COMMIT`. We can see all the environment variables in http://68.183.44.204:8080/env-vars.html/

> nodejsdocker.groovy

```groovy
job('NodeJS Docker example') {
    scm {
        git('git://github.com/peelmicro/docker-demo.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('peelmicro')
            node / gitConfigEmail('juanp_perez@loyaltycrm.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        dockerBuildAndPublish {
            repositoryName('peelmicro/docker-nodejs-demo')
            tag('${GIT_COMMIT,length=9}')
            registryCredentials('dockerhub')
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish45.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish46.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish47.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish48.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish49.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish50.png)

```
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/NodeJS Docker example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/peelmicro/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/peelmicro/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master, refs/tags/jenkins-NodeJS_Docker_example-2, refs/tags/jenkins-NodeJS_Docker_example-3)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git tag -a -f -m Jenkins Build #4 jenkins-NodeJS_Docker_example-4 # timeout=10
ERROR: Unrecognized macro 'GIT_COMMIT' in '${GIT_COMMIT,length=9}'
org.jenkinsci.plugins.tokenmacro.MacroEvaluationException: Unrecognized macro 'GIT_COMMIT' in '${GIT_COMMIT,length=9}'
	at org.jenkinsci.plugins.tokenmacro.Parser.processToken(Parser.java:343)
	at org.jenkinsci.plugins.tokenmacro.Action$KiHW1UeqOdqAwZul.run(Unknown Source)
	at org.parboiled.matchers.ActionMatcher.match(ActionMatcher.java:96)
	at org.parboiled.parserunners.BasicParseRunner.match(BasicParseRunner.java:77)
	at org.parboiled.MatcherContext.runMatcher(MatcherContext.java:351)
	at org.parboiled.matchers.SequenceMatcher.match(SequenceMatcher.java:46)
	at org.parboiled.parserunners.BasicParseRunner.match(BasicParseRunner.java:77)
	at org.parboiled.MatcherContext.runMatcher(MatcherContext.java:351)
	at org.parboiled.matchers.FirstOfMatcher.match(FirstOfMatcher.java:41)
	at org.parboiled.parserunners.BasicParseRunner.match(BasicParseRunner.java:77)
	at org.parboiled.MatcherContext.runMatcher(MatcherContext.java:351)
	at org.parboiled.matchers.FirstOfMatcher.match(FirstOfMatcher.java:41)
	at org.parboiled.parserunners.BasicParseRunner.match(BasicParseRunner.java:77)
	at org.parboiled.MatcherContext.runMatcher(MatcherContext.java:351)
	at org.parboiled.matchers.ZeroOrMoreMatcher.match(ZeroOrMoreMatcher.java:39)
	at org.parboiled.parserunners.BasicParseRunner.match(BasicParseRunner.java:77)
	at org.parboiled.MatcherContext.runMatcher(MatcherContext.java:351)
	at org.parboiled.matchers.SequenceMatcher.match(SequenceMatcher.java:46)
	at org.parboiled.parserunners.BasicParseRunner.match(BasicParseRunner.java:77)
	at org.parboiled.MatcherContext.runMatcher(MatcherContext.java:351)
	at org.parboiled.parserunners.BasicParseRunner.run(BasicParseRunner.java:72)
	at org.parboiled.parserunners.ReportingParseRunner.runBasicMatch(ReportingParseRunner.java:86)
	at org.parboiled.parserunners.ReportingParseRunner.run(ReportingParseRunner.java:66)
	at org.parboiled.parserunners.AbstractParseRunner.run(AbstractParseRunner.java:81)
	at org.parboiled.parserunners.AbstractParseRunner.run(AbstractParseRunner.java:76)
	at org.jenkinsci.plugins.tokenmacro.Parser.process(Parser.java:85)
	at org.jenkinsci.plugins.tokenmacro.Parser.process(Parser.java:74)
	at org.jenkinsci.plugins.tokenmacro.TokenMacro.expand(TokenMacro.java:199)
	at org.jenkinsci.plugins.tokenmacro.TokenMacro.expandAll(TokenMacro.java:237)
	at org.jenkinsci.plugins.tokenmacro.TokenMacro.expandAll(TokenMacro.java:211)
	at org.jenkinsci.plugins.tokenmacro.TokenMacro.expandAll(TokenMacro.java:203)
	at com.cloudbees.dockerpublish.DockerBuilder$Perform.expandAll(DockerBuilder.java:324)
	at com.cloudbees.dockerpublish.DockerBuilder$Perform.getImageTags(DockerBuilder.java:335)
	at com.cloudbees.dockerpublish.DockerBuilder$Perform.buildAndTag(DockerBuilder.java:370)
	at com.cloudbees.dockerpublish.DockerBuilder$Perform.exec(DockerBuilder.java:311)
	at com.cloudbees.dockerpublish.DockerBuilder$Perform.access$100(DockerBuilder.java:291)
	at com.cloudbees.dockerpublish.DockerBuilder.perform(DockerBuilder.java:262)
	at hudson.tasks.BuildStepMonitor$1.perform(BuildStepMonitor.java:20)
	at hudson.model.AbstractBuild$AbstractBuildExecution.perform(AbstractBuild.java:744)
	at hudson.model.Build$BuildExecution.build(Build.java:206)
	at hudson.model.Build$BuildExecution.doRun(Build.java:163)
	at hudson.model.AbstractBuild$AbstractBuildExecution.run(AbstractBuild.java:504)
	at hudson.model.Run.execute(Run.java:1816)
	at hudson.model.FreeStyleBuild.run(FreeStyleBuild.java:43)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
Build step 'Docker Build and Publish' marked build as failure
Finished: FAILURE
```

- Using `${GIT_COMMIT}` without trying to get the `substring`

```
SuccessConsole Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/NodeJS Docker example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/peelmicro/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/peelmicro/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master, refs/tags/jenkins-NodeJS_Docker_example-4, refs/tags/jenkins-NodeJS_Docker_example-5, refs/tags/jenkins-NodeJS_Docker_example-2, refs/tags/jenkins-NodeJS_Docker_example-3)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git tag -a -f -m Jenkins Build #6 jenkins-NodeJS_Docker_example-6 # timeout=10
[NodeJS Docker example] $ docker build -t peelmicro/docker-nodejs-demo:e583f9bd4b2b44620bdff3b92b2054ab89ae8084 "/var/jenkins_home/workspace/NodeJS Docker example"
Sending build context to Docker daemon    214kB

Step 1/6 : FROM node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8e946524c73a
Step 3/6 : ADD . /app
 ---> d3851d623611
Removing intermediate container ccc65a8b4e9e
```

::: warning
I haven't found a way to get the substring
:::

> nodejsdocker.groovy

```groovy
job('NodeJS Docker example') {
    scm {
        git('git://github.com/peelmicro/docker-demo.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('peelmicro')
            node / gitConfigEmail('juanp_perez@loyaltycrm.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        dockerBuildAndPublish {
            repositoryName('peelmicro/docker-nodejs-demo')
            tag('${GIT_COMMIT}')
            registryCredentials('dockerhub')
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish51.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish52.png)

```
Console Output
Started by user Juan Pablo Perez
Building in workspace /var/jenkins_home/workspace/NodeJS Docker example
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git://github.com/peelmicro/docker-demo.git # timeout=10
Fetching upstream changes from git://github.com/peelmicro/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress git://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/master
Seen branch in repository origin/v1.0.1
Seen branch in repository origin/v1.0.2
Seen 3 remote branches
 > git show-ref --tags -d # timeout=10
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (origin/master, refs/tags/jenkins-NodeJS_Docker_example-4, refs/tags/jenkins-NodeJS_Docker_example-5, refs/tags/jenkins-NodeJS_Docker_example-6, refs/tags/jenkins-NodeJS_Docker_example-7, refs/tags/jenkins-NodeJS_Docker_example-2, refs/tags/jenkins-NodeJS_Docker_example-3)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
Commit message: "fix dependency issue"
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git tag -a -f -m Jenkins Build #8 jenkins-NodeJS_Docker_example-8 # timeout=10
[NodeJS Docker example] $ docker build -t peelmicro/docker-nodejs-demo:e583f9bd4b2b44620bdff3b92b2054ab89ae8084 "/var/jenkins_home/workspace/NodeJS Docker example"
Sending build context to Docker daemon  218.6kB

Step 1/6 : FROM node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8e946524c73a
Step 3/6 : ADD . /app
 ---> 0daebf8ee2d9
Removing intermediate container 019f5d2f6950
Step 4/6 : RUN npm install
 ---> Running in 12703794e801
[91mnpm[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mnpm info using npm@2.15.11
[0m[91mnpm info using node@v4.6.2
.
.
.
[0m[91mnpm info prepublish myapp@0.0.1
[0mms@2.1.1 node_modules/ms

inherits@2.0.3 node_modules/inherits

http-errors@1.7.1 node_modules/http-errors
├── toidentifier@1.0.0
├── setprototypeof@1.1.0
├── statuses@1.5.0
└── depd@1.1.2

express@4.16.4 node_modules/express
├── escape-html@1.0.3
├── array-flatten@1.1.1
├── setprototypeof@1.1.0
├── cookie-signature@1.0.6
├── utils-merge@1.0.1
├── content-type@1.0.4
├── encodeurl@1.0.2
├── merge-descriptors@1.0.1
├── methods@1.1.2
├── content-disposition@0.5.2
├── fresh@0.5.2
├── vary@1.1.2
├── cookie@0.3.1
├── etag@1.8.1
├── parseurl@1.3.2
├── range-parser@1.2.0
├── serve-static@1.13.2
├── path-to-regexp@0.1.7
├── safe-buffer@5.1.2
├── statuses@1.4.0
├── depd@1.1.2
├── qs@6.5.2
├── on-finished@2.3.0 (ee-first@1.1.1)
├── finalhandler@1.1.1 (unpipe@1.0.0)
├── proxy-addr@2.0.4 (forwarded@0.1.2, ipaddr.js@1.8.0)
├── send@0.16.2 (ms@2.0.0, destroy@1.0.4, http-errors@1.6.3, mime@1.4.1)
├── debug@2.6.9 (ms@2.0.0)
├── accepts@1.3.5 (negotiator@0.6.1, mime-types@2.1.21)
├── type-is@1.6.16 (media-typer@0.3.0, mime-types@2.1.21)
└── body-parser@1.18.3 (http-errors@1.6.3, bytes@3.0.0, raw-body@2.3.3, iconv-lite@0.4.23)

mysql@2.16.0 node_modules/mysql
├── safe-buffer@5.1.2
├── sqlstring@2.3.1
├── bignumber.js@4.1.0
└── readable-stream@2.3.6 (process-nextick-args@2.0.0, string_decoder@1.1.1, util-deprecate@1.0.2, core-util-is@1.0.2, isarray@1.0.0)

mocha@5.2.0 node_modules/mocha
├── browser-stdout@1.3.1
├── escape-string-regexp@1.0.5
├── commander@2.15.1
├── he@1.1.1
├── growl@1.10.5
├── supports-color@5.4.0 (has-flag@3.0.0)
├── debug@3.1.0 (ms@2.0.0)
├── diff@3.5.0
├── glob@7.1.2 (path-is-absolute@1.0.1, fs.realpath@1.0.0, once@1.4.0, inflight@1.0.6)
├── minimatch@3.0.4 (brace-expansion@1.1.11)
└── mkdirp@0.5.1 (minimist@0.0.8)
[91mnpm[0m[91m [0m[91minfo[0m[91m ok
[0m ---> 25e003e6d74a
Removing intermediate container 12703794e801
Step 5/6 : EXPOSE 3000
 ---> Running in d8e67f138494
 ---> 377280659d7a
Removing intermediate container d8e67f138494
Step 6/6 : CMD npm start
 ---> Running in 964ff1b85bf1
 ---> 7d81bcdb1b08
Removing intermediate container 964ff1b85bf1
Successfully built 7d81bcdb1b08
Successfully tagged peelmicro/docker-nodejs-demo:e583f9bd4b2b44620bdff3b92b2054ab89ae8084
[NodeJS Docker example] $ docker tag 7d81bcdb1b08 peelmicro/docker-nodejs-demo:latest
[NodeJS Docker example] $ docker push peelmicro/docker-nodejs-demo:e583f9bd4b2b44620bdff3b92b2054ab89ae8084
The push refers to a repository [docker.io/peelmicro/docker-nodejs-demo]
021e9fb2d65a: Preparing
df0dc4647306: Preparing
04edcc0615ff: Preparing
e1da644611ce: Preparing
d79093d63949: Preparing
87cbe568afdd: Preparing
787c930753b4: Preparing
9f17712cba0b: Preparing
223c0d04a137: Preparing
fe4c16cbf7a4: Preparing
87cbe568afdd: Waiting
787c930753b4: Waiting
9f17712cba0b: Waiting
223c0d04a137: Waiting
fe4c16cbf7a4: Waiting
d79093d63949: Layer already exists
04edcc0615ff: Layer already exists
e1da644611ce: Layer already exists
87cbe568afdd: Layer already exists
9f17712cba0b: Layer already exists
787c930753b4: Layer already exists
fe4c16cbf7a4: Layer already exists
223c0d04a137: Layer already exists
df0dc4647306: Pushed
021e9fb2d65a: Pushed
e583f9bd4b2b44620bdff3b92b2054ab89ae8084: digest: sha256:e892306e10f0390ca4d6dff5121dd9569128630fdb64fc79db98e83c82bb63ac size: 2421
[NodeJS Docker example] $ docker push peelmicro/docker-nodejs-demo:latest
The push refers to a repository [docker.io/peelmicro/docker-nodejs-demo]
021e9fb2d65a: Preparing
df0dc4647306: Preparing
04edcc0615ff: Preparing
e1da644611ce: Preparing
d79093d63949: Preparing
87cbe568afdd: Preparing
787c930753b4: Preparing
9f17712cba0b: Preparing
223c0d04a137: Preparing
fe4c16cbf7a4: Preparing
87cbe568afdd: Waiting
787c930753b4: Waiting
9f17712cba0b: Waiting
223c0d04a137: Waiting
fe4c16cbf7a4: Waiting
d79093d63949: Layer already exists
df0dc4647306: Layer already exists
021e9fb2d65a: Layer already exists
e1da644611ce: Layer already exists
04edcc0615ff: Layer already exists
87cbe568afdd: Layer already exists
9f17712cba0b: Layer already exists
fe4c16cbf7a4: Layer already exists
223c0d04a137: Layer already exists
787c930753b4: Layer already exists
latest: digest: sha256:e892306e10f0390ca4d6dff5121dd9569128630fdb64fc79db98e83c82bb63ac size: 2421
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish53.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsJobDslWithDockerBuildAndPublish54.png)

## 6. Jenkins Pipelines

### 18. Jenkins Pipelines Introduction

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesIntroduction.png)

### 19. Jenkins Pipelines vs Jenkins Job DSL

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesVsJenkinsJobDsl.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesVsJenkinsJobDsl2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesVsJenkinsJobDsl3.png)

### 20. Jenkins Pipelines Example

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesExample.png)

### 21. Demo: Jenkins pipelines with NodeJS and Docker

- The idea is to have the pipeline file in the project. We are going to use the https://github.com/peelmicro/docker-demo repository.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker.png)

> Jenkinsfile

```groovy
node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       def app = docker.build("peelmicro/docker-nodejs-demo:${commit_id}", '.').push()
     }
   }
}
```

| Step              | Command                                                                                                                                                                 | Description                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| before any step   | node                                                                                                                                                                    | It has the default `node`                                                                                                                |
| &nbsp;            | <pre>def commit_id</pre>                                                                                                                                                | The definition of the `commit_id` global variable                                                                                        |
| Preparation       | <pre>checkout scm</pre>                                                                                                                                                 | is used to make the repository available                                                                                                 |
| &nbsp;            | <pre>sh "git rev-parse --short HEAD > .git/commit-id"</pre>                                                                                                             | is used to put the `commit Id` in a file                                                                                                 |
| &nbsp;            | <pre>commit_id = readFile('.git/commit-id').trim()</pre>                                                                                                                | is used to obtain the `commit Id` from the file                                                                                          |
| test              | <pre>nodejs(nodeJSInstallationName: 'nodejs') {<br> sh 'npm install --only=dev'<br> sh 'npm test'<br>}</pre>                                                            | Install the `dev npm` packages (`mocka`).<br/>Run the tests (`"test: "mocka"`)                                                           |
| docker build/push | <pre>docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') <br/> def app = docker.build("peelmicro/docker-nodejs-demo:\${commit_id}", '.').push()<br/>}</pre> | `'https://index.docker.io/v1/` refers to `Docker Hub`<br/>`dockerhub` is the credentials reference<br/>Build and Push the `Docker Image` |

- Create the new `nodejs docker pipeline` Item in Jenkins

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker5.png)

- `Repository URL`: https://github.com/peelmicro/docker-demo.git
- `Script Path`: misc/Jenkinsfile

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker8.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained misc/Jenkinsfile from git https://github.com/peelmicro/docker-demo.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/nodejs docker pipeline
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Preparation)
[Pipeline] checkout
No credentials specified
Cloning the remote Git repository
Cloning repository https://github.com/peelmicro/docker-demo.git
 > git init /var/jenkins_home/workspace/nodejs docker pipeline # timeout=10
Fetching upstream changes from https://github.com/peelmicro/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/docker-demo.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/docker-demo.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/docker-demo.git
 > git fetch --tags --progress https://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 4c5b3c07c5ffa38cfbc01c5ca5caf194ab9f1bb9 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 4c5b3c07c5ffa38cfbc01c5ca5caf194ab9f1bb9 # timeout=10
Commit message: "Updated the docker hub repository name"
First time build. Skipping changelog.
[Pipeline] sh
+ git rev-parse --short HEAD
[Pipeline] readFile
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] nodejs
[Pipeline] {
[Pipeline] sh
+ npm install --only=dev
added 24 packages from 436 contributors and audited 171 packages in 1.734s
found 0 vulnerabilities

[Pipeline] sh
+ npm test

> myapp@0.0.1 test /var/jenkins_home/workspace/nodejs docker pipeline
> npm install inherits && mocha

+ inherits@2.0.3
added 70 packages from 59 contributors and audited 171 packages in 3.119s
found 0 vulnerabilities



  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (10ms)

[Pipeline] }
[Pipeline] // nodejs
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (docker build/push)
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withDockerRegistry
$ docker login -u peelmicro -p ******** https://index.docker.io/v1/
WARNING! Using --password via the CLI is insecure. Use --password-stdin.
Login Succeeded
[Pipeline] {
[Pipeline] sh
+ docker build -t peelmicro/docker-nodejs-demo:4c5b3c0 .
Sending build context to Docker daemon  5.702MB

Step 1/6 : FROM node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8e946524c73a
Step 3/6 : ADD . /app
 ---> 08868d5c9aff
Removing intermediate container 04312f1e1a77
Step 4/6 : RUN npm install
 ---> Running in 4f65b2e47842
[91mnpm[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mnpm info using npm@2.15.11
[0m[91mnpm info using node@v4.6.2
.
.
.
[0m[91mnpm[0m[91m info prepublish myapp@0.0.1
[0m[91mnpm[0m[91m [0m[91minfo ok
[0m ---> 4c53b436e24e
Removing intermediate container 4f65b2e47842
Step 5/6 : EXPOSE 3000
 ---> Running in da50061c9de7
 ---> 0c6da94e7b38
Removing intermediate container da50061c9de7
Step 6/6 : CMD npm start
 ---> Running in b91a15190e4d
 ---> d8f5b014e234
Removing intermediate container b91a15190e4d
Successfully built d8f5b014e234
Successfully tagged peelmicro/docker-nodejs-demo:4c5b3c0
[Pipeline] dockerFingerprintFrom
[Pipeline] sh
+ docker tag peelmicro/docker-nodejs-demo:4c5b3c0 index.docker.io/peelmicro/docker-nodejs-demo:4c5b3c0
[Pipeline] sh
+ docker push index.docker.io/peelmicro/docker-nodejs-demo:4c5b3c0
The push refers to a repository [docker.io/peelmicro/docker-nodejs-demo]
ed4d196e10a2: Preparing
b5b756bd9fd5: Preparing
04edcc0615ff: Preparing
e1da644611ce: Preparing
d79093d63949: Preparing
87cbe568afdd: Preparing
787c930753b4: Preparing
9f17712cba0b: Preparing
223c0d04a137: Preparing
fe4c16cbf7a4: Preparing
87cbe568afdd: Waiting
787c930753b4: Waiting
9f17712cba0b: Waiting
223c0d04a137: Waiting
fe4c16cbf7a4: Waiting
04edcc0615ff: Layer already exists
d79093d63949: Layer already exists
e1da644611ce: Layer already exists
87cbe568afdd: Layer already exists
787c930753b4: Layer already exists
9f17712cba0b: Layer already exists
223c0d04a137: Layer already exists
fe4c16cbf7a4: Layer already exists
ed4d196e10a2: Pushed
b5b756bd9fd5: Pushed
4c5b3c0: digest: sha256:a41250f8b4ffc5dfb786d814cdaf85c42d5d710b34291b62bc4bb20f8a366a37 size: 2420
[Pipeline] }
[Pipeline] // withDockerRegistry
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsPipelinesWithNodeJsAndDocker9.png)

JenkinsPipelinesWithNodeJsAndDocker10

### 22. Build, test, and run everything in Docker containers

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildTestAndRunEverythingInDockerContainers.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BuildTestAndRunEverythingInDockerContainers2.png)

### 23. Demo: Build, test, and run everything in Docker containers

> Jenkinsfile.v2

```groovy
node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myTestContainer = docker.image('node:4.6')
     myTestContainer.pull()
     myTestContainer.inside {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
   stage('test with a DB') {
     def mysql = docker.image('mysql').run("-e MYSQL_ALLOW_EMPTY_PASSWORD=yes")
     def myTestContainer = docker.image('node:4.6')
     myTestContainer.pull()
     myTestContainer.inside("--link ${mysql.id}:mysql") { // using linking, mysql will be available at host: mysql, port: 3306
          sh 'npm install --only=dev'
          sh 'npm test'
     }
     mysql.stop()
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       def app = docker.build("peelmicro/docker-nodejs-demo:${commit_id}", '.').push()
     }
   }
}
```

> stage('test')

```groovy
   stage('test') {
     def myTestContainer = docker.image('node:4.6')
     myTestContainer.pull()
     myTestContainer.inside {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
```

- The 4.6 version of `nodejs` is going to be used in this test.
- We are going to install the dev packages inside the 4.6 version of `nodejs` container, not inside the Jenkins container as in the previous example.
- We are going to run the test inside this `nodejs` container.

> stage('test with a DB')

```groovy
   stage('test with a DB') {
     def mysql = docker.image('mysql').run("-e MYSQL_ALLOW_EMPTY_PASSWORD=yes")
     def myTestContainer = docker.image('node:4.6')
     myTestContainer.pull()
     myTestContainer.inside("--link ${mysql.id}:mysql") { // using linking, mysql will be available at host: mysql, port: 3306
          sh 'npm install --only=dev'
          sh 'npm test'
     }
     mysql.stop()
   }
```

- The latest version of the `mySQL` container is going to be used in this test.
- It is going to allow an empty password.
- The `mySQL` container is going to be removed after it uses it.
- The 4.6 version of `nodejs` is going to be used in this test.
- The `mysql` will be available inside the `nodejs` container at host: mysql, port: 3306
- We are going to install the dev packages inside the 4.6 version of `nodejs` container, not inside the Jenkins container as in the previous example.
- We are going to run the test inside this `nodejs` container.

* Create the new `tests in docker` Item in Jenkins

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers4.png)

- `Repository URL`: https://github.com/peelmicro/docker-demo.git
- `Script Path`: misc/Jenkinsfile.v2

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBuildTestAndRunEverythingInDockerContainers7.png)

```
Started by user Juan Pablo Perez
Obtained misc/Jenkinsfile.v2 from git https://github.com/peelmicro/docker-demo.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/tests in docker
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Preparation)
[Pipeline] checkout
No credentials specified
Cloning the remote Git repository
Cloning repository https://github.com/peelmicro/docker-demo.git
 > git init /var/jenkins_home/workspace/tests in docker # timeout=10
Fetching upstream changes from https://github.com/peelmicro/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/docker-demo.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/docker-demo.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/docker-demo.git
 > git fetch --tags --progress https://github.com/peelmicro/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision b87144ccdbb5c2bd85e8a9d5317cc49825ec631a (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f b87144ccdbb5c2bd85e8a9d5317cc49825ec631a # timeout=10
Commit message: "Updated the docker repository name"
First time build. Skipping changelog.
[Pipeline] sh
+ git rev-parse --short HEAD
[Pipeline] readFile
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] sh
+ docker pull node:4.6
4.6: Pulling from library/node
Digest: sha256:a1cc6d576734c331643f9c4e0e7f572430e8baf9756dc24dab11d87b34bd202e
Status: Image is up to date for node:4.6
[Pipeline] sh
+ docker inspect -f . node:4.6
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118
$ docker run -t -d -u 1000:1000 -w "/var/jenkins_home/workspace/tests in docker" --volumes-from 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** node:4.6 cat
$ docker top dcfbfa52ff7d1d7e0428943337a3fe3adf62d197bb1dee7726e9d0a1242de260 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ npm install --only=dev
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
.
.
.
npm info postinstall myapp@0.0.1
npm info prepublish myapp@0.0.1
ms@2.1.1 node_modules/ms

inherits@2.0.3 node_modules/inherits

http-errors@1.7.1 node_modules/http-errors
├── toidentifier@1.0.0
├── setprototypeof@1.1.0
├── statuses@1.5.0
└── depd@1.1.2

express@4.16.4 node_modules/express
├── setprototypeof@1.1.0
├── escape-html@1.0.3
├── array-flatten@1.1.1
├── cookie-signature@1.0.6
├── utils-merge@1.0.1
├── content-type@1.0.4
├── merge-descriptors@1.0.1
├── encodeurl@1.0.2
├── methods@1.1.2
├── cookie@0.3.1
├── content-disposition@0.5.2
├── fresh@0.5.2
├── vary@1.1.2
├── etag@1.8.1
├── parseurl@1.3.2
├── range-parser@1.2.0
├── path-to-regexp@0.1.7
├── serve-static@1.13.2
├── safe-buffer@5.1.2
├── statuses@1.4.0
├── depd@1.1.2
├── qs@6.5.2
├── on-finished@2.3.0 (ee-first@1.1.1)
├── finalhandler@1.1.1 (unpipe@1.0.0)
├── proxy-addr@2.0.4 (forwarded@0.1.2, ipaddr.js@1.8.0)
├── debug@2.6.9 (ms@2.0.0)
├── send@0.16.2 (ms@2.0.0, destroy@1.0.4, http-errors@1.6.3, mime@1.4.1)
├── accepts@1.3.5 (negotiator@0.6.1, mime-types@2.1.21)
├── type-is@1.6.16 (media-typer@0.3.0, mime-types@2.1.21)
└── body-parser@1.18.3 (http-errors@1.6.3, bytes@3.0.0, raw-body@2.3.3, iconv-lite@0.4.23)

mysql@2.16.0 node_modules/mysql
├── safe-buffer@5.1.2
├── sqlstring@2.3.1
├── bignumber.js@4.1.0
└── readable-stream@2.3.6 (process-nextick-args@2.0.0, string_decoder@1.1.1, util-deprecate@1.0.2, core-util-is@1.0.2, isarray@1.0.0)

mocha@5.2.0 node_modules/mocha
├── browser-stdout@1.3.1
├── escape-string-regexp@1.0.5
├── commander@2.15.1
├── he@1.1.1
├── growl@1.10.5
├── supports-color@5.4.0 (has-flag@3.0.0)
├── debug@3.1.0 (ms@2.0.0)
├── diff@3.5.0
├── minimatch@3.0.4 (brace-expansion@1.1.11)
├── glob@7.1.2 (path-is-absolute@1.0.1, fs.realpath@1.0.0, once@1.4.0, inflight@1.0.6)
└── mkdirp@0.5.1 (minimist@0.0.8)
npm info ok
[Pipeline] sh
+ npm test
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info pretest myapp@0.0.1
npm info test myapp@0.0.1

> myapp@0.0.1 test /var/jenkins_home/workspace/tests in docker
> npm install inherits && mocha

npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info addNameTag [ 'inherits', 'latest' ]
npm info install inherits@2.0.3 into /var/jenkins_home/workspace/tests in docker
npm info installOne inherits@2.0.3
npm info preuninstall inherits@2.0.3
npm info uninstall inherits@2.0.3
npm info postuninstall inherits@2.0.3
npm info preinstall inherits@2.0.3
npm info build /var/jenkins_home/workspace/tests in docker/node_modules/inherits
npm info linkStuff inherits@2.0.3
npm info install inherits@2.0.3
npm info postinstall inherits@2.0.3
inherits@2.0.3 node_modules/inherits
npm info ok

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (12ms)

npm info posttest myapp@0.0.1
npm info ok
[Pipeline] }
$ docker stop --time=1 dcfbfa52ff7d1d7e0428943337a3fe3adf62d197bb1dee7726e9d0a1242de260
$ docker rm -f dcfbfa52ff7d1d7e0428943337a3fe3adf62d197bb1dee7726e9d0a1242de260
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test with a DB)
[Pipeline] sh
+ docker run -d -e MYSQL_ALLOW_EMPTY_PASSWORD=yes mysql
Unable to find image 'mysql:latest' locally
latest: Pulling from library/mysql
6ae821421a7d: Pulling fs layer
a9e976e3aa6d: Pulling fs layer
e3735e44a020: Pulling fs layer
bfd564e9483f: Pulling fs layer
df705f26e488: Pulling fs layer
0c5547f73d62: Pulling fs layer
f437382cf8a1: Pulling fs layer
b8e2d50f1513: Pulling fs layer
e2e3c9928180: Pulling fs layer
b60db6d282cd: Pulling fs layer
1d32deab69c6: Pulling fs layer
408a40cd2e9c: Pulling fs layer
bfd564e9483f: Waiting
df705f26e488: Waiting
0c5547f73d62: Waiting
f437382cf8a1: Waiting
b8e2d50f1513: Waiting
e2e3c9928180: Waiting
b60db6d282cd: Waiting
1d32deab69c6: Waiting
408a40cd2e9c: Waiting
a9e976e3aa6d: Verifying Checksum
a9e976e3aa6d: Download complete
e3735e44a020: Verifying Checksum
e3735e44a020: Download complete
6ae821421a7d: Verifying Checksum
6ae821421a7d: Download complete
bfd564e9483f: Verifying Checksum
bfd564e9483f: Download complete
df705f26e488: Verifying Checksum
df705f26e488: Download complete
6ae821421a7d: Pull complete
f437382cf8a1: Verifying Checksum
f437382cf8a1: Download complete
b8e2d50f1513: Verifying Checksum
b8e2d50f1513: Download complete
0c5547f73d62: Verifying Checksum
0c5547f73d62: Download complete
a9e976e3aa6d: Pull complete
e3735e44a020: Pull complete
bfd564e9483f: Pull complete
df705f26e488: Pull complete
b60db6d282cd: Verifying Checksum
b60db6d282cd: Download complete
1d32deab69c6: Verifying Checksum
1d32deab69c6: Download complete
0c5547f73d62: Pull complete
f437382cf8a1: Pull complete
b8e2d50f1513: Pull complete
408a40cd2e9c: Verifying Checksum
408a40cd2e9c: Download complete
e2e3c9928180: Verifying Checksum
e2e3c9928180: Download complete
e2e3c9928180: Pull complete
b60db6d282cd: Pull complete
1d32deab69c6: Pull complete
408a40cd2e9c: Pull complete
Digest: sha256:a571337738c9205427c80748e165eca88edc5a1157f8b8d545fa127fc3e29269
Status: Downloaded newer image for mysql:latest
[Pipeline] dockerFingerprintRun
[Pipeline] sh
+ docker pull node:4.6
4.6: Pulling from library/node
Digest: sha256:a1cc6d576734c331643f9c4e0e7f572430e8baf9756dc24dab11d87b34bd202e
Status: Image is up to date for node:4.6
[Pipeline] sh
+ docker inspect -f . node:4.6
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118
$ docker run -t -d -u 1000:1000 --link 3d73d9795df67e747809f6e64773803fb2b21080db4da443a27939e860921744:mysql -w "/var/jenkins_home/workspace/tests in docker" --volumes-from 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** node:4.6 cat
$ docker top e7bd1997762499114bc74e82262b80166e8d9a49d962871e79313c8ee76d7841 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ npm install --only=dev
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info preinstall myapp@0.0.1
npm info build /var/jenkins_home/workspace/tests in docker
npm info linkStuff myapp@0.0.1
npm info install myapp@0.0.1
npm info postinstall myapp@0.0.1
npm info prepublish myapp@0.0.1
npm info ok
[Pipeline] sh
+ npm test
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info pretest myapp@0.0.1
npm info test myapp@0.0.1

> myapp@0.0.1 test /var/jenkins_home/workspace/tests in docker
> npm install inherits && mocha

npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
npm info addNameTag [ 'inherits', 'latest' ]
npm info attempt registry request try #1 at 10:26:44 AM
npm http request GET https://registry.npmjs.org/inherits
npm http 200 https://registry.npmjs.org/inherits
npm info retry fetch attempt 1 at 10:26:44 AM
npm info attempt registry request try #1 at 10:26:44 AM
npm http fetch GET https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz
npm http fetch 200 https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz
npm info install inherits@2.0.3 into /var/jenkins_home/workspace/tests in docker
npm info installOne inherits@2.0.3
npm info preuninstall inherits@2.0.3
npm info uninstall inherits@2.0.3
npm info postuninstall inherits@2.0.3
npm info preinstall inherits@2.0.3
npm info build /var/jenkins_home/workspace/tests in docker/node_modules/inherits
npm info linkStuff inherits@2.0.3
npm info install inherits@2.0.3
npm info postinstall inherits@2.0.3
inherits@2.0.3 node_modules/inherits
npm info ok

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (46ms)

npm info posttest myapp@0.0.1
npm info ok
[Pipeline] }
$ docker stop --time=1 e7bd1997762499114bc74e82262b80166e8d9a49d962871e79313c8ee76d7841
$ docker rm -f e7bd1997762499114bc74e82262b80166e8d9a49d962871e79313c8ee76d7841
[Pipeline] // withDockerContainer
[Pipeline] sh
+ docker stop 3d73d9795df67e747809f6e64773803fb2b21080db4da443a27939e860921744
3d73d9795df67e747809f6e64773803fb2b21080db4da443a27939e860921744
+ docker rm -f 3d73d9795df67e747809f6e64773803fb2b21080db4da443a27939e860921744
3d73d9795df67e747809f6e64773803fb2b21080db4da443a27939e860921744
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (docker build/push)
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withDockerRegistry
$ docker login -u peelmicro -p ******** https://index.docker.io/v1/
WARNING! Using --password via the CLI is insecure. Use --password-stdin.
Login Succeeded
[Pipeline] {
[Pipeline] sh
+ docker build -t peelmicro/docker-nodejs-demo:b87144c .
Sending build context to Docker daemon  5.816MB

Step 1/6 : FROM node:4.6
 ---> e834398209c1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 8e946524c73a
Step 3/6 : ADD . /app
 ---> dd5b6cd913c4
Removing intermediate container bd025cbe3173
Step 4/6 : RUN npm install
 ---> Running in 7c75049da802
[91mnpm[0m[91m [0m[91minfo[0m[91m it worked if it ends with ok
[0m[91mnpm [0m[91minfo[0m[91m using npm@2.15.11
[0m[91mnpm info using node@v4.6.2
[0m[91mnpm info preinstall myapp@0.0.1
[0m[91mnpm[0m[91m info[0m[91m build /app
[0m[91mnpm info linkStuff myapp@0.0.1
[0m[91mnpm[0m[91m info install myapp@0.0.1
[0m[91mnpm info [0m[91mpostinstall myapp@0.0.1
[0m[91mnpm info prepublish myapp@0.0.1
[0m[91mnpm[0m[91m [0m[91minfo[0m[91m [0m[91mok[0m[91m
[0m ---> df02a557d30b
Removing intermediate container 7c75049da802
Step 5/6 : EXPOSE 3000
 ---> Running in 13c5d2556260
 ---> 4212ef47cfdb
Removing intermediate container 13c5d2556260
Step 6/6 : CMD npm start
 ---> Running in e7fbd73c3f35
 ---> 87aa84cef971
Removing intermediate container e7fbd73c3f35
Successfully built 87aa84cef971
Successfully tagged peelmicro/docker-nodejs-demo:b87144c
[Pipeline] dockerFingerprintFrom
[Pipeline] sh
+ docker tag peelmicro/docker-nodejs-demo:b87144c index.docker.io/peelmicro/docker-nodejs-demo:b87144c
[Pipeline] sh
+ docker push index.docker.io/peelmicro/docker-nodejs-demo:b87144c
The push refers to a repository [docker.io/peelmicro/docker-nodejs-demo]
16b7be10ede1: Preparing
04edcc0615ff: Preparing
e1da644611ce: Preparing
d79093d63949: Preparing
87cbe568afdd: Preparing
787c930753b4: Preparing
9f17712cba0b: Preparing
223c0d04a137: Preparing
fe4c16cbf7a4: Preparing
787c930753b4: Waiting
9f17712cba0b: Waiting
223c0d04a137: Waiting
fe4c16cbf7a4: Waiting
87cbe568afdd: Layer already exists
e1da644611ce: Layer already exists
04edcc0615ff: Layer already exists
d79093d63949: Layer already exists
9f17712cba0b: Layer already exists
223c0d04a137: Layer already exists
787c930753b4: Layer already exists
fe4c16cbf7a4: Layer already exists
16b7be10ede1: Pushed
b87144c: digest: sha256:0a98542f447eba47ad013e38ec7cc376448294a1bf9375eeada4993d61891d62 size: 2212
[Pipeline] }
[Pipeline] // withDockerRegistry
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

## 7. Jenkins Integrations

### 24. Email integration

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/Emailintegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/Emailintegration2.png)

### 25. Demo - Email integrations using Jenkins Pipelines

- We need to install the `email` plugin if it is not already installed.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines2.png)

It is already installed:

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines4.png)

- We have the `Extended E-mail Notification`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines5.png)

- We have the `Standar E-mail Notification`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines6.png)

- We can use [mailtrap](https://mailtrap.io/) to test the use of the `Extended E-mail Notification`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines12.png)

- Get the credentials in order to use the `Demo inbox`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines13.png)

- Put the `SMTP server`, `User Name` and `Password` credentials in the `Extended E-mail Notification` section

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines14.png)

- We are going to use the `email-notifications/Jenkinsfile` from the `jenkins-course` GitHub repository.

> email-notifications/Jenkinsfile

```groovy
node {

  // config
  def to = emailextrecipients([
          [$class: 'CulpritsRecipientProvider'],
          [$class: 'DevelopersRecipientProvider'],
          [$class: 'RequesterRecipientProvider']
  ])

  // job
  try {
    stage('build') {
      println('so far so good...')
    }
    stage('test') {
      println('A test has failed!')
      sh 'exit 1'
    }
  } catch(e) {
    // mark build as failed
    currentBuild.result = "FAILURE";
    // set variables
    def subject = "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} ${currentBuild.result}"
    def content = '${JELLY_SCRIPT,template="html"}'

    // send email
    if(to != null && !to.isEmpty()) {
      emailext(body: content, mimeType: 'text/html',
         replyTo: '$DEFAULT_REPLYTO', subject: subject,
         to: to, attachLog: true )
    }

    // mark current build as a failure and throw the error
    throw e;
  }
}
```

- Create the new `email test` Pipeline job

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines15.png)

- Configure the `Pipeline` with the `https://github.com/peelmicro/jenkins-course.git` for `Repository URL` and `email-notifications/Jenkinsfile` for `Script Path`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines16.png)

- We have to check the `[x] Poll SCM` with the `H/5 * * * *` for `Schedule` (every five minutes)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines19.png)

```
In progressConsole Output
Started by user Juan Pablo Perez
Obtained email-notifications/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/email test
[Pipeline] {
[Pipeline] emailextrecipients
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] echo
so far so good...
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] echo
A test has failed!
[Pipeline] sh
+ exit 1
[Pipeline] }
[Pipeline] // stage
[Pipeline] emailext
Sending email to: peelmicro@gmail.com
Connection error sending email, retrying once more in 10 seconds...
Connection error sending email, retrying once more in 10 seconds...
Failed after second try sending email
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE
```

- SMTP Server values on the `Configuration` was missing.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines21.png)

```
FailedConsole Output
Started by user Juan Pablo Perez
Obtained email-notifications/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/email test
[Pipeline] {
[Pipeline] emailextrecipients
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] echo
so far so good...
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] echo
A test has failed!
[Pipeline] sh
+ exit 1
[Pipeline] }
[Pipeline] // stage
[Pipeline] emailext
Sending email to: peelmicro@gmail.com
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoEmailIntegrationsUsingJenkinsPipelines23.png)

> build.log

```
Started by user Juan Pablo Perez
Obtained email-notifications/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/email test
[Pipeline] {
[Pipeline] emailextrecipients
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] echo
so far so good...
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] echo
A test has failed!
[Pipeline] sh
+ exit 1
[Pipeline] }
[Pipeline] // stage
[Pipeline] emailext
Sending email to: peelmicro@gmail.com
```

### 26. Slack integration

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SlackIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SlackIntegration2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SlackIntegration3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SlackIntegration4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SlackIntegration5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SlackIntegration6.png)

### 27. Demo: Slack Integration

- Conect on `https://slack.com/signin` or set up a new account on `https://slack.com`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration2.png)

- Add the `Slack Notification` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration6.png)

- Ensure the `Slack Notification` plugin is installed.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration7.png)

- Create the `alerts` channel.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration11.png)

- Look for the `Incoming Webhooks` app putting `webhook`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration13.png)

- Ensure the `#alerts` channel is selected and click on `Add Incoming WebHooks integration`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration14.png)

- Copy the Webhook URL value because we need it for the Jenkins configuration.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration18.png)

- Put the `slack-alerts` value for `ID` and `Description` and the part since services from the `Webhook URL`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration21.png)

- Put the first part of the `Webhook URL` on the `Slack compatible app URL (optional)` box, the `peelmicro` value for `Team Subdomain` and `#alerts` for `Channel or Slack ID`. Then click on `Test Connection` to ensure it is working properly.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration24.png)

- Create the new `slack notification` pipeline

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration25.png)

- We are going to use the `slack-notifications/Jenkinsfile` document from the `jenkins-course` Github repository.

> slack-notifications/Jenkinsfile

```groovy
node {

  // job
  try {
    stage('build') {
      println('so far so good...')
    }
    stage('test') {
      println('A test has failed!')
      sh 'exit 1'
    }
  } catch(e) {
    // mark build as failed
    currentBuild.result = "FAILURE";

    // send slack notification
    slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")

    // throw the error
    throw e;
  }
}
```

- Put the `https://github.com/peelmicro/jenkins-course.git` value for `Repository URL` and `slack-notifications/Jenkinsfile` value for `Script Path`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration26.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration27.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration28.png)

```
FailedConsole Output
Started by user Juan Pablo Perez
Obtained slack-notifications/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/slack notification
[Pipeline] {
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] echo
so far so good...
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] echo
A test has failed!
[Pipeline] sh
+ exit 1
[Pipeline] }
[Pipeline] // stage
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: https://hooks.slack.com/services/, teamDomain: peelmicro, channel: #alerts, color: #FF0000, botUser: false, tokenCredentialId: slack-alerts
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration30.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration31.png)

- We can change the `incoming-webhooks` image using a different one.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSlackIntegration32.png)

DemoSlackIntegration33

DemoSlackIntegration34

### 28. GitHub and BitBucket integration

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/GitHubAndBitBucketIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/GitHubAndBitBucketIntegration2.png)

### 29. Demo: GitHub integration with a Gradle + Java Project

- We need to ensure we have the `Github Branch Source` plugin installed.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject2.png)

- Create the new `my github repo` Github organization Item.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject3.png)

- We need to add the `Github` credentials so that it can look inside the repository.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject4.png)

- Generate a token in `Github`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject8.png)

- Put `jenkins` for the `Token description`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject9.png)

- Copy the token just generated.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject10.png)

- The token will be the password.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject14.png)

```
Scan Organization Log
Started
[Mon Feb 11 05:34:20 UTC 2019] Starting organization scan...
[Mon Feb 11 05:34:20 UTC 2019] Updating actions...
Looking up details of my github repo...
ERROR: [Mon Feb 11 05:34:20 UTC 2019] Could not refresh actions for navigator org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator@3a26dabc
java.io.FileNotFoundException: https://api.github.com/users/my github repo
	at com.squareup.okhttp.internal.huc.HttpURLConnectionImpl.getInputStream(HttpURLConnectionImpl.java:243)
	at com.squareup.okhttp.internal.huc.DelegatingHttpsURLConnection.getInputStream(DelegatingHttpsURLConnection.java:210)
	at com.squareup.okhttp.internal.huc.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:25)
	at org.kohsuke.github.Requester.parse(Requester.java:625)
	at org.kohsuke.github.Requester.parse(Requester.java:607)
	at org.kohsuke.github.Requester._to(Requester.java:285)
Caused: org.kohsuke.github.GHFileNotFoundException: {"message":"Not Found","documentation_url":"https://developer.github.com/v3/users/#get-a-single-user"}
	at org.kohsuke.github.Requester.handleApiError(Requester.java:699)
	at org.kohsuke.github.Requester._to(Requester.java:306)
	at org.kohsuke.github.Requester.to(Requester.java:247)
	at org.kohsuke.github.GitHub.getUser(GitHub.java:398)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator.retrieveActions(GitHubSCMNavigator.java:1165)
	at jenkins.scm.api.SCMNavigator.fetchActions(SCMNavigator.java:332)
	at jenkins.branch.OrganizationFolder.computeChildren(OrganizationFolder.java:410)
	at com.cloudbees.hudson.plugins.folder.computed.ComputedFolder.updateChildren(ComputedFolder.java:277)
	at com.cloudbees.hudson.plugins.folder.computed.FolderComputation.run(FolderComputation.java:165)
	at jenkins.branch.OrganizationFolder$OrganizationScan.run(OrganizationFolder.java:911)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
[Mon Feb 11 05:34:20 UTC 2019] Consulting GitHub Organization
05:34:20 Connecting to https://api.github.com using peelmicro/****** (github)
ERROR: [Mon Feb 11 05:34:20 UTC 2019] Could not fetch sources from navigator org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator@3a26dabc
hudson.AbortException: my github repo does not correspond to a known GitHub User Account or Organization
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator.visitSources(GitHubSCMNavigator.java:1005)
	at jenkins.branch.OrganizationFolder.computeChildren(OrganizationFolder.java:459)
	at com.cloudbees.hudson.plugins.folder.computed.ComputedFolder.updateChildren(ComputedFolder.java:277)
	at com.cloudbees.hudson.plugins.folder.computed.FolderComputation.run(FolderComputation.java:165)
	at jenkins.branch.OrganizationFolder$OrganizationScan.run(OrganizationFolder.java:911)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
[Mon Feb 11 05:34:20 UTC 2019] Finished organization scan. Scan took 0.41 sec
FATAL: my github repo does not correspond to a known GitHub User Account or Organization
Finished: FAILURE
```

- We need to put the `Github user value` for the `Owner`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject15.png)

```
Scan Organization Log
Started
[Mon Feb 11 05:37:41 UTC 2019] Starting organization scan...
[Mon Feb 11 05:37:41 UTC 2019] Updating actions...
Looking up details of peelmicro...
Organization URL: Juan Pablo Perez
[Mon Feb 11 05:37:41 UTC 2019] Consulting GitHub Organization
05:37:41 Connecting to https://api.github.com using peelmicro/****** (github)
05:37:41 Looking up repositories of myself peelmicro
Proposing angular-fitness-tracker
Examining peelmicro/angular-fitness-tracker

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/angular-fitness-tracker

Proposing angular-material-course
Examining peelmicro/angular-material-course

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/angular-material-course

Proposing angular-pwa-course-service-worker
Examining peelmicro/angular-pwa-course-service-worker

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/angular-pwa-course-service-worker

Proposing angular-the-complete-guide
Examining peelmicro/angular-the-complete-guide

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/angular-the-complete-guide

Proposing angular.pwa.course
Examining peelmicro/angular.pwa.course

  Checking branches...

  Getting remote branches...
    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/angular.pwa.course

Proposing asp-net-core-angular-from-scratch
Examining peelmicro/asp-net-core-angular-from-scratch

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/asp-net-core-angular-from-scratch

Proposing css-the-complete-guide
Examining peelmicro/css-the-complete-guide

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/css-the-complete-guide

Proposing devmeetup-vuetify
Examining peelmicro/devmeetup-vuetify

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/devmeetup-vuetify

Proposing devmeetup-vuetify-nuxt
Examining peelmicro/devmeetup-vuetify-nuxt

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/devmeetup-vuetify-nuxt

Proposing docker-demo
Examining peelmicro/docker-demo

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

    Checking branch v1.0.1
      ‘Jenkinsfile’ not found
    Does not meet criteria

    Checking branch v1.0.2
      ‘Jenkinsfile’ not found
    Does not meet criteria

  3 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/docker-demo

Proposing docker-react
Examining peelmicro/docker-react

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

    Checking branch feature
      ‘Jenkinsfile’ not found
    Does not meet criteria

  2 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/docker-react

Proposing documentation
Examining peelmicro/documentation

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/documentation

Proposing dot-net-core-react-redux-advanced
Examining peelmicro/dot-net-core-react-redux-advanced

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/dot-net-core-react-redux-advanced

Proposing dotnet-core-microservices
Examining peelmicro/dotnet-core-microservices

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/dotnet-core-microservices

Proposing dotnet-core-multi-docker
Examining peelmicro/dotnet-core-multi-docker

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/dotnet-core-multi-docker

Proposing ethereum-inbox
Examining peelmicro/ethereum-inbox

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/ethereum-inbox

Proposing ethereum-kickstart
Examining peelmicro/ethereum-kickstart

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

  0 pull requests were processed

Finished examining peelmicro/ethereum-kickstart

Proposing ethereum-kickstart-vue
Examining peelmicro/ethereum-kickstart-vue

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ not found
    Does not meet criteria

  1 branches were processed

  Checking pull-requests...

    Checking pull request #2
ERROR: [Mon Feb 11 05:37:54 UTC 2019] Could not fetch sources from navigator org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator@322bac10
java.io.FileNotFoundException: https://api.github.com/repos/peelmicro/ethereum-kickstart-vue/collaborators/null/permission
	at com.squareup.okhttp.internal.huc.HttpURLConnectionImpl.getInputStream(HttpURLConnectionImpl.java:243)
	at com.squareup.okhttp.internal.huc.DelegatingHttpsURLConnection.getInputStream(DelegatingHttpsURLConnection.java:210)
	at com.squareup.okhttp.internal.huc.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:25)
	at org.kohsuke.github.Requester.parse(Requester.java:625)
	at org.kohsuke.github.Requester.parse(Requester.java:607)
	at org.kohsuke.github.Requester._to(Requester.java:285)
Caused: org.kohsuke.github.GHFileNotFoundException: {"message":"Must have push access to view collaborator permission.","documentation_url":"https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level"}
	at org.kohsuke.github.Requester.handleApiError(Requester.java:699)
	at org.kohsuke.github.Requester._to(Requester.java:306)
	at org.kohsuke.github.Requester.to(Requester.java:247)
	at org.kohsuke.github.GHRepository.getPermission(GHRepository.java:529)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$1.fetch(GitHubSCMSource.java:904)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSourceRequest.getPermissions(GitHubSCMSourceRequest.java:474)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:340)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:323)
	at jenkins.scm.api.trait.SCMHeadAuthority.isTrusted(SCMHeadAuthority.java:101)
	at jenkins.scm.api.trait.SCMSourceRequest.isTrusted(SCMSourceRequest.java:215)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:970)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:964)
	at jenkins.scm.api.trait.SCMSourceRequest.process(SCMSourceRequest.java:341)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource.retrieve(GitHubSCMSource.java:960)
	at jenkins.scm.api.SCMSource._retrieve(SCMSource.java:374)
	at jenkins.scm.api.SCMSource.fetch(SCMSource.java:328)
	at jenkins.branch.MultiBranchProjectFactory$BySCMSourceCriteria.recognizes(MultiBranchProjectFactory.java:263)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.recognizes(OrganizationFolder.java:1347)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.complete(OrganizationFolder.java:1362)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:256)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:206)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator.visitSources(GitHubSCMNavigator.java:938)
	at jenkins.branch.OrganizationFolder.computeChildren(OrganizationFolder.java:459)
	at com.cloudbees.hudson.plugins.folder.computed.ComputedFolder.updateChildren(ComputedFolder.java:277)
	at com.cloudbees.hudson.plugins.folder.computed.FolderComputation.run(FolderComputation.java:165)
	at jenkins.branch.OrganizationFolder$OrganizationScan.run(OrganizationFolder.java:911)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
[Mon Feb 11 05:37:54 UTC 2019] Finished organization scan. Scan took 12 sec
FATAL: Failed to recompute children of Juan Pablo Perez
org.kohsuke.github.GHFileNotFoundException: {"message":"Must have push access to view collaborator permission.","documentation_url":"https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level"}
	at org.kohsuke.github.Requester.handleApiError(Requester.java:699)
	at org.kohsuke.github.Requester._to(Requester.java:306)
	at org.kohsuke.github.Requester.to(Requester.java:247)
	at org.kohsuke.github.GHRepository.getPermission(GHRepository.java:529)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$1.fetch(GitHubSCMSource.java:904)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSourceRequest.getPermissions(GitHubSCMSourceRequest.java:474)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:340)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:323)
	at jenkins.scm.api.trait.SCMHeadAuthority.isTrusted(SCMHeadAuthority.java:101)
	at jenkins.scm.api.trait.SCMSourceRequest.isTrusted(SCMSourceRequest.java:215)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:970)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:964)
	at jenkins.scm.api.trait.SCMSourceRequest.process(SCMSourceRequest.java:341)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource.retrieve(GitHubSCMSource.java:960)
	at jenkins.scm.api.SCMSource._retrieve(SCMSource.java:374)
	at jenkins.scm.api.SCMSource.fetch(SCMSource.java:328)
	at jenkins.branch.MultiBranchProjectFactory$BySCMSourceCriteria.recognizes(MultiBranchProjectFactory.java:263)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.recognizes(OrganizationFolder.java:1347)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.complete(OrganizationFolder.java:1362)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:256)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:206)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator.visitSources(GitHubSCMNavigator.java:938)
	at jenkins.branch.OrganizationFolder.computeChildren(OrganizationFolder.java:459)
	at com.cloudbees.hudson.plugins.folder.computed.ComputedFolder.updateChildren(ComputedFolder.java:277)
	at com.cloudbees.hudson.plugins.folder.computed.FolderComputation.run(FolderComputation.java:165)
	at jenkins.branch.OrganizationFolder$OrganizationScan.run(OrganizationFolder.java:911)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
Caused by: java.io.FileNotFoundException: https://api.github.com/repos/peelmicro/ethereum-kickstart-vue/collaborators/null/permission
	at com.squareup.okhttp.internal.huc.HttpURLConnectionImpl.getInputStream(HttpURLConnectionImpl.java:243)
	at com.squareup.okhttp.internal.huc.DelegatingHttpsURLConnection.getInputStream(DelegatingHttpsURLConnection.java:210)
	at com.squareup.okhttp.internal.huc.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:25)
	at org.kohsuke.github.Requester.parse(Requester.java:625)
	at org.kohsuke.github.Requester.parse(Requester.java:607)
	at org.kohsuke.github.Requester._to(Requester.java:285)
	... 26 more
Finished: FAILURE
```

- We need to fork the `gs-gradle` repository

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject17.png)

> main/java/hello/HelloWorld.java

```java
package hello;

public class Greeter {
  public String sayHello() {
    return "Hello world!";
  }
}
```

> main/java/hello/Greater.java

```java
package hello;

import org.joda.time.LocalTime;

public class HelloWorld {
  public static void main(String[] args) {
    LocalTime currentTime = new LocalTime();
    System.out.println("The current local time is: " + currentTime);

    Greeter greeter = new Greeter();
    System.out.println(greeter.sayHello());
  }
}
```

> test/java/hello/HelloWordTests.java

```java
package hello;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;

import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertThat;

public class HelloWorldTests {

    private ByteArrayOutputStream baos = new ByteArrayOutputStream();
    private PrintStream ps = new PrintStream(baos);

    @Before
    public void setup() {
        System.setOut(ps);
    }

    @Test
    public void shouldPrintTimeToConsole() {
        HelloWorld.main(new String[] { });

        assertThat(output(), containsString("The current local time is"));
    }

    @Test
    public void shouldPrintHelloWorldToConsole() {
        HelloWorld.main(new String[] { });

        assertThat(output(), containsString("Hello world!"));
    }

    private String output() {
        return new String(baos.toByteArray(), StandardCharsets.UTF_8);
    }
}
```

> complete/build.gradle

```groovy
apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'application'

mainClassName = 'hello.HelloWorld'

// tag::repositories[]
repositories {
    mavenCentral()
}
// end::repositories[]

// tag::jar[]
jar {
    baseName = 'gs-gradle'
    version =  '0.1.0'
}
// end::jar[]

// tag::dependencies[]
sourceCompatibility = 1.8
targetCompatibility = 1.8

dependencies {
    compile "joda-time:joda-time:2.2"
    testCompile "junit:junit:4.12"
}
// end::dependencies[]

// tag::wrapper[]
// end::wrapper[]
```

> Jenkinsfile

```groovy
node {
  def myGradleContainer = docker.image('gradle:jdk8')
  myGradleContainer.pull()
  stage('prep') {
    checkout scm
  }
  stage('test') {
     myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
       sh 'cd complete && ./gradlew test'
     }
  }
  stage('run') {
     myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
       sh 'cd complete && ./gradlew run'
     }
  }
}
```

- We need `Gradle` and `Java` to run this project.

- We also need to have the `.gradle` folder created so that we can create the volume there, so that the dependencies are used everytime we use `Gradle`.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mkdir -p /var/jenkins_home/.gradle
root@ubuntu-s-1vcpu-2gb-lon1-01:~# chown 1000:1000 /var/jenkins_home/.gradle
```

- We can go now to our Repository Item in Jenkins.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject20.png)

```
Scan Organization Log
Started by user Juan Pablo Perez
[Mon Feb 11 17:07:39 UTC 2019] Starting organization scan...
[Mon Feb 11 17:07:39 UTC 2019] Updating actions...
Looking up details of peelmicro...
Organization URL: Juan Pablo Perez
[Mon Feb 11 17:07:39 UTC 2019] Consulting GitHub Organization
17:07:39 Connecting to https://api.github.com using peelmicro/****** (github)
17:07:39 Looking up repositories of myself peelmicro
Proposing angular-fitness-tracker
Examining peelmicro/angular-fitness-tracker

  Checking branches...

  Getting remote branches...
.
.
.
 Checking pull request #2
ERROR: [Mon Feb 11 17:07:57 UTC 2019] Could not fetch sources from navigator org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator@322bac10
java.io.FileNotFoundException: https://api.github.com/repos/peelmicro/ethereum-kickstart-vue/collaborators/null/permission
	at com.squareup.okhttp.internal.huc.HttpURLConnectionImpl.getInputStream(HttpURLConnectionImpl.java:243)
	at com.squareup.okhttp.internal.huc.DelegatingHttpsURLConnection.getInputStream(DelegatingHttpsURLConnection.java:210)
	at com.squareup.okhttp.internal.huc.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:25)
	at org.kohsuke.github.Requester.parse(Requester.java:625)
	at org.kohsuke.github.Requester.parse(Requester.java:607)
	at org.kohsuke.github.Requester._to(Requester.java:285)
Caused: org.kohsuke.github.GHFileNotFoundException: {"message":"Must have push access to view collaborator permission.","documentation_url":"https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level"}
	at org.kohsuke.github.Requester.handleApiError(Requester.java:699)
	at org.kohsuke.github.Requester._to(Requester.java:306)
	at org.kohsuke.github.Requester.to(Requester.java:247)
	at org.kohsuke.github.GHRepository.getPermission(GHRepository.java:529)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$1.fetch(GitHubSCMSource.java:904)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSourceRequest.getPermissions(GitHubSCMSourceRequest.java:474)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:340)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:323)
	at jenkins.scm.api.trait.SCMHeadAuthority.isTrusted(SCMHeadAuthority.java:101)
	at jenkins.scm.api.trait.SCMSourceRequest.isTrusted(SCMSourceRequest.java:215)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:970)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:964)
	at jenkins.scm.api.trait.SCMSourceRequest.process(SCMSourceRequest.java:341)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource.retrieve(GitHubSCMSource.java:960)
	at jenkins.scm.api.SCMSource._retrieve(SCMSource.java:374)
	at jenkins.scm.api.SCMSource.fetch(SCMSource.java:328)
	at jenkins.branch.MultiBranchProjectFactory$BySCMSourceCriteria.recognizes(MultiBranchProjectFactory.java:263)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.recognizes(OrganizationFolder.java:1347)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.complete(OrganizationFolder.java:1362)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:256)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:206)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator.visitSources(GitHubSCMNavigator.java:938)
	at jenkins.branch.OrganizationFolder.computeChildren(OrganizationFolder.java:459)
	at com.cloudbees.hudson.plugins.folder.computed.ComputedFolder.updateChildren(ComputedFolder.java:277)
	at com.cloudbees.hudson.plugins.folder.computed.FolderComputation.run(FolderComputation.java:165)
	at jenkins.branch.OrganizationFolder$OrganizationScan.run(OrganizationFolder.java:911)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
[Mon Feb 11 17:07:57 UTC 2019] Finished organization scan. Scan took 18 sec
FATAL: Failed to recompute children of Juan Pablo Perez
org.kohsuke.github.GHFileNotFoundException: {"message":"Must have push access to view collaborator permission.","documentation_url":"https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level"}
	at org.kohsuke.github.Requester.handleApiError(Requester.java:699)
	at org.kohsuke.github.Requester._to(Requester.java:306)
	at org.kohsuke.github.Requester.to(Requester.java:247)
	at org.kohsuke.github.GHRepository.getPermission(GHRepository.java:529)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$1.fetch(GitHubSCMSource.java:904)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSourceRequest.getPermissions(GitHubSCMSourceRequest.java:474)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:340)
	at org.jenkinsci.plugins.github_branch_source.ForkPullRequestDiscoveryTrait$TrustPermission.checkTrusted(ForkPullRequestDiscoveryTrait.java:323)
	at jenkins.scm.api.trait.SCMHeadAuthority.isTrusted(SCMHeadAuthority.java:101)
	at jenkins.scm.api.trait.SCMSourceRequest.isTrusted(SCMSourceRequest.java:215)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:970)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource$3.create(GitHubSCMSource.java:964)
	at jenkins.scm.api.trait.SCMSourceRequest.process(SCMSourceRequest.java:341)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMSource.retrieve(GitHubSCMSource.java:960)
	at jenkins.scm.api.SCMSource._retrieve(SCMSource.java:374)
	at jenkins.scm.api.SCMSource.fetch(SCMSource.java:328)
	at jenkins.branch.MultiBranchProjectFactory$BySCMSourceCriteria.recognizes(MultiBranchProjectFactory.java:263)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.recognizes(OrganizationFolder.java:1347)
	at jenkins.branch.OrganizationFolder$SCMSourceObserverImpl$1.complete(OrganizationFolder.java:1362)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:256)
	at jenkins.scm.api.trait.SCMNavigatorRequest.process(SCMNavigatorRequest.java:206)
	at org.jenkinsci.plugins.github_branch_source.GitHubSCMNavigator.visitSources(GitHubSCMNavigator.java:938)
	at jenkins.branch.OrganizationFolder.computeChildren(OrganizationFolder.java:459)
	at com.cloudbees.hudson.plugins.folder.computed.ComputedFolder.updateChildren(ComputedFolder.java:277)
	at com.cloudbees.hudson.plugins.folder.computed.FolderComputation.run(FolderComputation.java:165)
	at jenkins.branch.OrganizationFolder$OrganizationScan.run(OrganizationFolder.java:911)
	at hudson.model.ResourceController.execute(ResourceController.java:97)
	at hudson.model.Executor.run(Executor.java:429)
Caused by: java.io.FileNotFoundException: https://api.github.com/repos/peelmicro/ethereum-kickstart-vue/collaborators/null/permission
	at com.squareup.okhttp.internal.huc.HttpURLConnectionImpl.getInputStream(HttpURLConnectionImpl.java:243)
	at com.squareup.okhttp.internal.huc.DelegatingHttpsURLConnection.getInputStream(DelegatingHttpsURLConnection.java:210)
	at com.squareup.okhttp.internal.huc.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:25)
	at org.kohsuke.github.Requester.parse(Requester.java:625)
	at org.kohsuke.github.Requester.parse(Requester.java:607)
	at org.kohsuke.github.Requester._to(Requester.java:285)
	... 26 more
Finished: FAILURE
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject21.png)

```
Started
[Mon Feb 11 17:17:36 UTC 2019] Starting organization scan...
[Mon Feb 11 17:17:36 UTC 2019] Updating actions...
Looking up details of peelmicro...
Organization URL: Juan Pablo Perez
[Mon Feb 11 17:17:36 UTC 2019] Consulting GitHub Organization
17:17:36 Connecting to https://api.github.com using peelmicro/****** (github)
17:17:36 Looking up repositories of myself peelmicro
.
.
.
Proposing gs-gradle
Examining peelmicro/gs-gradle

  Checking branches...

  Getting remote branches...

    Checking branch master

  Getting remote pull requests...
      ‘Jenkinsfile’ found
    Met criteria

  1 branches were processed (query completed)

  1 branches were processed
.
.
.
17:18:46 54 repositories were processed
[Mon Feb 11 17:18:46 UTC 2019] Finished organization scan. Scan took 1 min 10 sec
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject24.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoGitHubIntegrationWithAGradleJavaProject25.png)

```
Console Output
Branch indexing
17:17:54 Connecting to https://api.github.com using peelmicro/****** (github)
Obtained Jenkinsfile from 6950fe52ca20dbd95e7fc181db4c249fa221c3ee
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/my_github_repo_gs-gradle_master
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
jdk8: Pulling from library/gradle
741437d97401: Pulling fs layer
34d8874714d7: Pulling fs layer
0a108aa26679: Pulling fs layer
7f0334c36886: Pulling fs layer
aa29d9cbdbf5: Pulling fs layer
e54d29f74413: Pulling fs layer
eb5b24cf4e1f: Pulling fs layer
5edfd6c9b475: Pulling fs layer
0c52172157ec: Pulling fs layer
8628868c2c1c: Pulling fs layer
7f0334c36886: Waiting
aa29d9cbdbf5: Waiting
e54d29f74413: Waiting
eb5b24cf4e1f: Waiting
5edfd6c9b475: Waiting
0c52172157ec: Waiting
8628868c2c1c: Waiting
0a108aa26679: Verifying Checksum
0a108aa26679: Download complete
34d8874714d7: Verifying Checksum
34d8874714d7: Download complete
741437d97401: Verifying Checksum
741437d97401: Download complete
aa29d9cbdbf5: Verifying Checksum
aa29d9cbdbf5: Download complete
e54d29f74413: Verifying Checksum
e54d29f74413: Download complete
eb5b24cf4e1f: Verifying Checksum
eb5b24cf4e1f: Download complete
741437d97401: Pull complete
7f0334c36886: Verifying Checksum
7f0334c36886: Download complete
34d8874714d7: Pull complete
0a108aa26679: Pull complete
8628868c2c1c: Verifying Checksum
8628868c2c1c: Download complete
0c52172157ec: Verifying Checksum
0c52172157ec: Download complete
7f0334c36886: Pull complete
aa29d9cbdbf5: Pull complete
5edfd6c9b475: Verifying Checksum
5edfd6c9b475: Download complete
e54d29f74413: Pull complete
eb5b24cf4e1f: Pull complete
5edfd6c9b475: Pull complete
0c52172157ec: Pull complete
8628868c2c1c: Pull complete
Digest: sha256:a4cb4598c290aa4afe7aae9f2b9b30a17e8e9be95f110db1583196407df2beab
Status: Downloaded newer image for gradle:jdk8
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] checkout
using credential github
Cloning the remote Git repository
Cloning with configured refspecs honoured and without tags
Cloning repository https://github.com/peelmicro/gs-gradle.git
 > git init /var/jenkins_home/workspace/my_github_repo_gs-gradle_master # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
using GIT_ASKPASS to set credentials github
 > git fetch --no-tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/master:refs/remotes/origin/master # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/master:refs/remotes/origin/master # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching without tags
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
using GIT_ASKPASS to set credentials github
 > git fetch --no-tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/master:refs/remotes/origin/master # timeout=10
Checking out Revision 6950fe52ca20dbd95e7fc181db4c249fa221c3ee (master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 6950fe52ca20dbd95e7fc181db4c249fa221c3ee # timeout=10
Commit message: "Merge pull request #1 from christseng89/patch-1"
First time build. Skipping changelog.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/my_github_repo_gs-gradle_master --volumes-from 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top 0594937b25a0f844a44d5ff93d45d75dd42036e02bcc2e36c3a27792c8452e57 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew test
Downloading https://services.gradle.org/distributions/gradle-2.13-bin.zip
..................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
Unzipping /home/gradle/.gradle/wrapper/dists/gradle-2.13-bin/4xsgxlfjcxvrea7akf941nvc7/gradle-2.13-bin.zip to /home/gradle/.gradle/wrapper/dists/gradle-2.13-bin/4xsgxlfjcxvrea7akf941nvc7
Set executable permissions for: /home/gradle/.gradle/wrapper/dists/gradle-2.13-bin/4xsgxlfjcxvrea7akf941nvc7/gradle-2.13/bin/gradle
:compileJava
Download https://repo1.maven.org/maven2/joda-time/joda-time/2.2/joda-time-2.2.pom
Download https://repo1.maven.org/maven2/joda-time/joda-time/2.2/joda-time-2.2.jar
:processResources UP-TO-DATE
:classes
:compileTestJava
Download https://repo1.maven.org/maven2/junit/junit/4.12/junit-4.12.pom
Download https://repo1.maven.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.pom
Download https://repo1.maven.org/maven2/org/hamcrest/hamcrest-parent/1.3/hamcrest-parent-1.3.pom
Download https://repo1.maven.org/maven2/junit/junit/4.12/junit-4.12.jar
Download https://repo1.maven.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar
:processTestResources UP-TO-DATE
:testClasses
:test

BUILD SUCCESSFUL

Total time: 23.986 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.13/userguide/gradle_daemon.html
[Pipeline] }
$ docker stop --time=1 0594937b25a0f844a44d5ff93d45d75dd42036e02bcc2e36c3a27792c8452e57
$ docker rm -f 0594937b25a0f844a44d5ff93d45d75dd42036e02bcc2e36c3a27792c8452e57
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (run)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/my_github_repo_gs-gradle_master --volumes-from 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top 7bfd0339b9bafc1ad12a143ef2791a17ae0be645eb003b1b5a20a627a6f8e270 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew run
:compileJava UP-TO-DATE
:processResources UP-TO-DATE
:classes UP-TO-DATE
:run
The current local time is: 17:19:33.468
Hello world!

BUILD SUCCESSFUL

Total time: 11.23 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.13/userguide/gradle_daemon.html
[Pipeline] }
$ docker stop --time=1 7bfd0339b9bafc1ad12a143ef2791a17ae0be645eb003b1b5a20a627a6f8e270
$ docker rm -f 7bfd0339b9bafc1ad12a143ef2791a17ae0be645eb003b1b5a20a627a6f8e270
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline

Could not update commit status, please check if your scan credentials belong to a member of the organization or a collaborator of the repository and repo:status scope is selected


GitHub has been notified of this commit’s build result

Finished: SUCCESS
```

### 30. Demo: Bitbucket integration

- Create a Bitbuket account from [Atlassian Bitbucekt](https://bitbucket.org/product/pricing)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration10.png)

- Install the `Bitbucket Branch Source` Plugin in Jenkins

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration15.png)

- We are going to create the new `my bitbucket repo` Bitbucket Team/Project item.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration23.png)

- Put the `jenkins` name, select the different `[x] read access` values and then click on `Create`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration24.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration25.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration26.png)

- Ensure the `Jenkins URL` is set correctly.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration27.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration28.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration30.png)

```
Scan Organization Folder Log
Started
[Mon Feb 11 18:10:13 UTC 2019] Starting organization scan...
[Mon Feb 11 18:10:13 UTC 2019] Updating actions...
Looking up team details of peelmicro...
Connecting to https://bitbucket.org using peelmicro/****** (bitbucket)
Could not resolve team details
[Mon Feb 11 18:10:15 UTC 2019] Consulting Bitbucket Team/Project
Connecting to https://bitbucket.org using peelmicro/****** (bitbucket)
Looking up repositories of user peelmicro
Proposing peelmicro/gs-gradle
Connecting to https://bitbucket.org using peelmicro/****** (bitbucket)
Repository type: Git
Looking up peelmicro/gs-gradle for branches
Checking branch master from peelmicro/gs-gradle
      ‘Jenkinsfile’ found
    Met criteria

  1 branches were processed (query completed)
1 repositories were processed
[Mon Feb 11 18:10:18 UTC 2019] Finished organization scan. Scan took 5 sec
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration31.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration32.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration33.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration34.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBitbucketIntegration35.png)

```
Console Output
Branch indexing
Obtained Jenkinsfile from 6950fe52ca20dbd95e7fc181db4c249fa221c3ee
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/_bitbucket_repo_gs-gradle_master
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
jdk8: Pulling from library/gradle
Digest: sha256:a4cb4598c290aa4afe7aae9f2b9b30a17e8e9be95f110db1583196407df2beab
Status: Image is up to date for gradle:jdk8
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] checkout
using credential bitbucket
Cloning the remote Git repository
Cloning with configured refspecs honoured and without tags
Cloning repository https://bitbucket.org/peelmicro/gs-gradle.git
 > git init /var/jenkins_home/workspace/_bitbucket_repo_gs-gradle_master # timeout=10
Fetching upstream changes from https://bitbucket.org/peelmicro/gs-gradle.git
 > git --version # timeout=10
using GIT_ASKPASS to set credentials bitbucket
 > git fetch --no-tags --progress https://bitbucket.org/peelmicro/gs-gradle.git +refs/heads/master:refs/remotes/origin/master # timeout=10
 > git config remote.origin.url https://bitbucket.org/peelmicro/gs-gradle.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/master:refs/remotes/origin/master # timeout=10
 > git config remote.origin.url https://bitbucket.org/peelmicro/gs-gradle.git # timeout=10
Fetching without tags
Fetching upstream changes from https://bitbucket.org/peelmicro/gs-gradle.git
using GIT_ASKPASS to set credentials bitbucket
 > git fetch --no-tags --progress https://bitbucket.org/peelmicro/gs-gradle.git +refs/heads/master:refs/remotes/origin/master # timeout=10
Checking out Revision 6950fe52ca20dbd95e7fc181db4c249fa221c3ee (master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 6950fe52ca20dbd95e7fc181db4c249fa221c3ee # timeout=10
Commit message: "Merge pull request #1 from christseng89/patch-1"
First time build. Skipping changelog.
[Bitbucket] Notifying commit build result
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/_bitbucket_repo_gs-gradle_master --volumes-from 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top db181acac8471079f9a88cb649d48128edfdbb8dc9e549716b89b9d0fb9c5f36 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew test
:compileJava
:processResources UP-TO-DATE
:classes
:compileTestJava
:processTestResources UP-TO-DATE
:testClasses
:test

BUILD SUCCESSFUL

Total time: 16.104 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.13/userguide/gradle_daemon.html
[Pipeline] }
$ docker stop --time=1 db181acac8471079f9a88cb649d48128edfdbb8dc9e549716b89b9d0fb9c5f36
$ docker rm -f db181acac8471079f9a88cb649d48128edfdbb8dc9e549716b89b9d0fb9c5f36
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (run)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/_bitbucket_repo_gs-gradle_master --volumes-from 0f818f5035debc469cbc282748c30e3f887c2b0b5f4aba0f94c66a9cbf24b118 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top 23fac452d201ef55e561d012987df55450d8a9e9acb929282974b0acaf5e0e7b -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew run
:compileJava UP-TO-DATE
:processResources UP-TO-DATE
:classes UP-TO-DATE
:run
The current local time is: 18:11:10.368
Hello world!

BUILD SUCCESSFUL

Total time: 10.724 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.13/userguide/gradle_daemon.html
[Pipeline] }
$ docker stop --time=1 23fac452d201ef55e561d012987df55450d8a9e9acb929282974b0acaf5e0e7b
$ docker rm -f 23fac452d201ef55e561d012987df55450d8a9e9acb929282974b0acaf5e0e7b
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
[Bitbucket] Notifying commit build result
[Bitbucket] Build result notified
Finished: SUCCESS
```

### 31. JFrog Artifactory integration

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JFrogArtifactoryIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JFrogArtifactoryIntegration2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JFrogArtifactoryIntegration3.png)

### 32. Demo: JFrog Artifactory integration

- We need to sign up for the host version of [JFrog](https://jfrog.com/)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration6b.png)

- We need to install the `Artifactory` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration12.png)

- Acces the [Frog Account Management](https://jfrog.com/account-management)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration19.png)

- Select `Gradle` and click on `Create`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration24.png)

- Create the `deploy` group.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration25.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration26.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration27.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration28.png)

- Create the `deploy` user assigned to the `deploy` group.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration30.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration31.png)

- Create the `deploy` permissions.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration32.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration33.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration34.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration35.png)

- Add the `JFrog` server in Jenkins.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration36.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration37.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration38.png)

- Login with the `deploy` user on JFrog.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration39.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration40.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration41.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration42.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration43.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration44.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration45.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration46.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration47.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration48.png)

- We need to install `gradle`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration49.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration50.png)

- Create the new `gradle publisher test` Pipeline item.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration51.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration52.png)

- We are going to use the `jenkins-course/jfrog-integration/` repository.

> jfrog-integration/Jenkinsfile

```groovy
node {
    def server = Artifactory.server('peelmicro.jfrog.io')
    def rtGradle = Artifactory.newGradleBuild()
    def buildInfo = Artifactory.newBuildInfo()
    stage 'Build'
        git url: 'https://github.com/peelmicro/gs-gradle.git'

    stage 'Artifactory configuration'
        rtGradle.tool = 'gradle' // Tool name from Jenkins configuration
        rtGradle.deployer repo:'gradle-dev-local',  server: server
        rtGradle.resolver repo:'gradle-dev', server: server

        stage('Config Build Info') {
            buildInfo.env.capture = true
            buildInfo.env.filter.addInclude("*")
        }

        stage('Extra gradle configurations') {
            rtGradle.usesPlugin = true // Artifactory plugin already defined in build script
        }
        stage('Exec Gradle') {
            rtGradle.run rootDir: "artifactory/", buildFile: 'build.gradle', tasks: 'clean artifactoryPublish', buildInfo: buildInfo
        }
        stage('Publish build info') {
            server.publishBuildInfo buildInfo
        }
}
```

> artifactory/build.gradle

```groovy
apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'application'
apply plugin: 'maven-publish'

mainClassName = 'hello.HelloWorld'

// tag::repositories[]
repositories {
    mavenCentral()
}
// end::repositories[]

// tag::jar[]
jar {
    baseName = 'gs-gradle'
    version =  '0.1.0'
}
// end::jar[]

// tag::dependencies[]
sourceCompatibility = 1.8
targetCompatibility = 1.8

dependencies {
    compile "joda-time:joda-time:2.2"
    testCompile "junit:junit:4.12"
}
// end::dependencies[]

// tag::wrapper[]
// end::wrapper[]

// publication
publishing {
    publications {
        jar(MavenPublication) {
            groupId 'peelmicro'
            artifactId 'gs-gradle'
            version '1.0'
            from components.java
        }
    }
}

// artifactory configuration
buildscript {
    repositories {
        jcenter()

    }
    dependencies {
        //Check for the latest version here: http://plugins.gradle.org/plugin/com.jfrog.artifactory
        classpath "org.jfrog.buildinfo:build-info-extractor-gradle:4+"
    }
}

allprojects {
    apply plugin: "com.peelmicro.artifactory"
}

artifactory {
    publish {
        repository {
            repoKey = 'gradle-dev-local'
            maven = true
        }
        defaults {
            publications('jar')
            publishArtifacts = true
            publishPom = true
        }
    }
    resolve {
        repository {
            repoKey = 'gradle-dev'
            maven = true

        }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration53.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration54.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration55.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration56.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration57.png)

```bash
In progressConsole Output
Started by user Juan Pablo Perez
Obtained jfrog-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/gradle publisher test
[Pipeline] {
[Pipeline] getArtifactoryServer
[Pipeline] newGradleBuild
[Pipeline] newBuildInfo
[Pipeline] stage (Build)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Build
Proceeding
[Pipeline] git
No credentials specified
Cloning the remote Git repository
Cloning repository https://github.com/peelmicro/gs-gradle.git
 > git init /var/jenkins_home/workspace/gradle publisher test # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 1155b6b3c8a58007d24583e1b16ae4a80593df3a (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 1155b6b3c8a58007d24583e1b16ae4a80593df3a # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b master 1155b6b3c8a58007d24583e1b16ae4a80593df3a # timeout=10
Commit message: "Updated with my own values"
First time build. Skipping changelog.
[Pipeline] stage (Artifactory configuration)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Artifactory configuration
Proceeding
[Pipeline] stage
[Pipeline] { (Config Build Info)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Extra gradle configurations)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Exec Gradle)
[Pipeline] ArtifactoryGradleBuild
Pausing
Resuming
Pausing
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration58.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration59.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration60.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration61.png)

```
Terminating ArtifactoryGradleBuild
Click here to forcibly kill entire build
Hard kill!
Finished: ABORTED
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration62.png)

- The problem was with the `plugin: "com.jfrog.artifactory"` changed by mistake.`

> artifactory/build.gradle

```groovy
apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'application'
apply plugin: 'maven-publish'

mainClassName = 'hello.HelloWorld'

// tag::repositories[]
repositories {
    mavenCentral()
}
// end::repositories[]

// tag::jar[]
jar {
    baseName = 'gs-gradle'
    version =  '0.1.0'
}
// end::jar[]

// tag::dependencies[]
sourceCompatibility = 1.8
targetCompatibility = 1.8

dependencies {
    compile "joda-time:joda-time:2.2"
    testCompile "junit:junit:4.12"
}
// end::dependencies[]

// tag::wrapper[]
// end::wrapper[]

// publication
publishing {
    publications {
        jar(MavenPublication) {
            groupId 'academy.newtech'
            artifactId 'gs-gradle'
            version '1.0'
            from components.java
        }
    }
}

// artifactory configuration
buildscript {
    repositories {
        jcenter()

    }
    dependencies {
        //Check for the latest version here: http://plugins.gradle.org/plugin/com.jfrog.artifactory
        classpath "org.jfrog.buildinfo:build-info-extractor-gradle:4+"
    }
}

allprojects {
    apply plugin: "com.jfrog.artifactory"
}

artifactory {
    publish {
        repository {
            repoKey = 'gradle-dev-local'
            maven = true
        }
        defaults {
            publications('jar')
            publishArtifacts = true
            publishPom = true
        }
    }
    resolve {
        repository {
            repoKey = 'gradle-dev'
            maven = true

        }
    }
}
```

- In order to test if it's something related to the current `Jenkins` container I'm going to remove it and create it again.

```bash
Last login: Wed Feb 13 07:21:49 2019 from 80.26.193.150
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                              NAMES
0f818f5035de        jenkins-docker      "/sbin/tini -- /us..."   6 days ago          Up 6 days           0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
846e898b4a59        b8d58a0332fc        "/bin/sh -c 'npm s..."   6 days ago          Up 6 days           0.0.0.0:3000->3000/tcp                             my-nodejs-app
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker stop jenkins
jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
846e898b4a59        b8d58a0332fc        "/bin/sh -c 'npm s..."   6 days ago          Up 6 days           0.0.0.0:3000->3000/tcp   my-nodejs-app
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker rm jenkins
jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins -d jenkins-docker
1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration63.png)

- Unfortuantelly it is still not working:

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration64.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration65.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration66.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained jfrog-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline (hide)
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/gradle publisher test
[Pipeline] {
[Pipeline] getArtifactoryServer
[Pipeline] newGradleBuild
[Pipeline] newBuildInfo
[Pipeline] stage (Build)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Build
Proceeding
[Pipeline] git
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision b9b235b58adfc1818aaa90b2e388fc26496c407d (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f b9b235b58adfc1818aaa90b2e388fc26496c407d # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master b9b235b58adfc1818aaa90b2e388fc26496c407d # timeout=10
Commit message: "Reverted everything"
 > git rev-list --no-walk b9b235b58adfc1818aaa90b2e388fc26496c407d # timeout=10
[Pipeline] stage (Artifactory configuration)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Artifactory configuration
Proceeding
[Pipeline] stage
[Pipeline] { (Config Build Info)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Extra gradle configurations)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Exec Gradle)
[Pipeline] ArtifactoryGradleBuild
Unpacking https://services.gradle.org/distributions/gradle-5.2.1-bin.zip to /var/jenkins_home/tools/hudson.plugins.gradle.GradleInstallation/gradle on Jenkins
[gradle publisher test] $ /var/jenkins_home/tools/hudson.plugins.gradle.GradleInstallation/gradle/bin/gradle clean artifactoryPublish -b artifactory/build.gradle

Welcome to Gradle 5.2.1!

Here are the highlights of this release:
 - Define sets of dependencies that work together with Java Platform plugin
 - New C++ plugins with dependency management built-in
 - New C++ project types for gradle init
 - Service injection into plugins and project extensions

For more details see https://docs.gradle.org/5.2.1/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)
> Task :clean UP-TO-DATE
> Task :generatePomFileForJarPublication
> Task :compileJava
> Task :processResources NO-SOURCE
> Task :classes
> Task :jar
> Task :artifactoryPublish
> Task :artifactoryDeploy
Deploying artifact: https://peelmicro.jfrog.io/peelmicro/gradle-dev-local/academy/newtech/gs-gradle/1.0/gs-gradle-1.0.jar
Deploying artifact: https://peelmicro.jfrog.io/peelmicro/gradle-dev-local/academy/newtech/gs-gradle/1.0/gs-gradle-1.0.pom
Deprecated Gradle features were used in this build, making it incompatible with Gradle 6.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/5.2.1/userguide/command_line_interface.html#sec:command_line_warnings

BUILD SUCCESSFUL in 41s
6 actionable tasks: 5 executed, 1 up-to-date
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Publish build info)
[Pipeline] publishBuildInfo
Deploying build info to: https://peelmicro.jfrog.io/peelmicro/api/build
Deploying build descriptor to: https://peelmicro.jfrog.io/peelmicro/api/build
Could not build the build-info object.
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
```

- We need a previous version of gradle to make it work

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration67.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained jfrog-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/gradle publisher test
[Pipeline] {
[Pipeline] getArtifactoryServer
[Pipeline] newGradleBuild
[Pipeline] newBuildInfo
[Pipeline] stage (Build)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Build
Proceeding
[Pipeline] git
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 # timeout=10
Commit message: "Updating groupId"
 > git rev-list --no-walk 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 # timeout=10
[Pipeline] stage (Artifactory configuration)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Artifactory configuration
Proceeding
[Pipeline] stage
[Pipeline] { (Config Build Info)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Extra gradle configurations)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Exec Gradle)
[Pipeline] ArtifactoryGradleBuild
Unpacking https://services.gradle.org/distributions/gradle-4.3.1-bin.zip to /var/jenkins_home/tools/hudson.plugins.gradle.GradleInstallation/gradle on Jenkins
[gradle publisher test] $ /var/jenkins_home/tools/hudson.plugins.gradle.GradleInstallation/gradle/bin/gradle clean artifactoryPublish -b artifactory/build.gradle
Starting a Gradle Daemon (subsequent builds will be faster)
Download https://jcenter.bintray.com/org/jfrog/buildinfo/build-info-extractor-gradle/maven-metadata.xml
:clean
:generatePomFileForJarPublication
:compileJava
:processResources NO-SOURCE
:classes
:jar
:artifactoryPublish
:artifactoryDeploy
Deploying artifact: https://peelmicro.jfrog.io/peelmicro/gradle-dev-local/peelmicro/gs-gradle/1.0/gs-gradle-1.0.jar
:artifactoryDeploy FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':artifactoryDeploy'.
> java.io.IOException: Failed to deploy file. Status code: 403 Response message: Artifactory returned the following errors:
  Not enough permissions to overwrite artifact 'gradle-dev-local:peelmicro/gs-gradle/1.0/gs-gradle-1.0.jar' (user 'deploy' needs DELETE permission). Status code: 403

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 31s
6 actionable tasks: 6 executed
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
hudson.model.Run$RunnerAbortedException
	at org.jfrog.hudson.pipeline.common.executors.GradleExecutor.exe(GradleExecutor.java:144)
	at org.jfrog.hudson.pipeline.common.executors.GradleExecutor.execute(GradleExecutor.java:69)
	at org.jfrog.hudson.pipeline.scripted.steps.ArtifactoryGradleBuild$Execution.run(ArtifactoryGradleBuild.java:89)
	at org.jfrog.hudson.pipeline.scripted.steps.ArtifactoryGradleBuild$Execution.run(ArtifactoryGradleBuild.java:65)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1$1.call(AbstractSynchronousNonBlockingStepExecution.java:47)
	at hudson.security.ACL.impersonate(ACL.java:290)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1.run(AbstractSynchronousNonBlockingStepExecution.java:44)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: FAILURE
```

- We need to give permission to delete.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration68.png)

```
.
.
.
[Pipeline] // node
[Pipeline] End of Pipeline
java.io.IOException: Could not publish build-info: Failed to send build descriptor. 403 Response message: {
  "errors" : [ {
    "status" : 403,
    "message" : "User deploy is not permitted to deploy 'gradle publisher test/12-1550169913807.json' into 'artifactory-build-info:gradle publisher test/12-1550169913807.json'."
  } ]
}
	at org.jfrog.build.extractor.clientConfiguration.client.ArtifactoryBuildInfoClient.sendBuildInfo(ArtifactoryBuildInfoClient.java:261)
	at org.jfrog.build.extractor.retention.Utils.sendBuildAndBuildRetention(Utils.java:63)
	at org.jfrog.hudson.pipeline.common.BuildInfoDeployer.deploy(BuildInfoDeployer.java:80)
	at org.jfrog.hudson.pipeline.common.executors.PublishBuildInfoExecutor.execute(PublishBuildInfoExecutor.java:30)
	at org.jfrog.hudson.pipeline.scripted.steps.PublishBuildInfoStep$Execution.run(PublishBuildInfoStep.java:49)
	at org.jfrog.hudson.pipeline.scripted.steps.PublishBuildInfoStep$Execution.run(PublishBuildInfoStep.java:35)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1$1.call(AbstractSynchronousNonBlockingStepExecution.java:47)
	at hudson.security.ACL.impersonate(ACL.java:290)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1.run(AbstractSynchronousNonBlockingStepExecution.java:44)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: FAILURE
```

- We need to remove the `deploy` user from the `deploy` permission.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration69.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained jfrog-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/gradle publisher test
[Pipeline] {
[Pipeline] getArtifactoryServer
[Pipeline] newGradleBuild (hide)
[Pipeline] newBuildInfo
[Pipeline] stage (Build)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Build
Proceeding
[Pipeline] git
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 # timeout=10
Commit message: "Updating groupId"
 > git rev-list --no-walk 46b9d8d6109228328b3d30c76f9b53a1ee8e1447 # timeout=10
[Pipeline] stage (Artifactory configuration)
Using the ‘stage’ step without a block argument is deprecated
Entering stage Artifactory configuration
Proceeding
[Pipeline] stage
[Pipeline] { (Config Build Info)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Extra gradle configurations)
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Exec Gradle)
[Pipeline] ArtifactoryGradleBuild
[gradle publisher test] $ /var/jenkins_home/tools/hudson.plugins.gradle.GradleInstallation/gradle/bin/gradle clean artifactoryPublish -b artifactory/build.gradle
Starting a Gradle Daemon (subsequent builds will be faster)
:clean
:generatePomFileForJarPublication
:compileJava
:processResources NO-SOURCE
:classes
:jar
:artifactoryPublish
:artifactoryDeploy
Deploying artifact: https://peelmicro.jfrog.io/peelmicro/gradle-dev-local/peelmicro/gs-gradle/1.0/gs-gradle-1.0.jar
Deploying artifact: https://peelmicro.jfrog.io/peelmicro/gradle-dev-local/peelmicro/gs-gradle/1.0/gs-gradle-1.0.pom
BUILD SUCCESSFUL in 21s
6 actionable tasks: 6 executed
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Publish build info)
[Pipeline] publishBuildInfo
Deploying build info to: https://peelmicro.jfrog.io/peelmicro/api/build
Deploying build descriptor to: https://peelmicro.jfrog.io/peelmicro/api/build
Could not build the build-info object.
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
java.io.IOException: Could not publish build-info: Failed to send build descriptor. 403 Response message: {
  "errors" : [ {
    "status" : 403,
    "message" : "User deploy is not permitted to deploy 'gradle publisher test/13-1550170134227.json' into 'artifactory-build-info:gradle publisher test/13-1550170134227.json'."
  } ]
}
	at org.jfrog.build.extractor.clientConfiguration.client.ArtifactoryBuildInfoClient.sendBuildInfo(ArtifactoryBuildInfoClient.java:261)
	at org.jfrog.build.extractor.retention.Utils.sendBuildAndBuildRetention(Utils.java:63)
	at org.jfrog.hudson.pipeline.common.BuildInfoDeployer.deploy(BuildInfoDeployer.java:80)
	at org.jfrog.hudson.pipeline.common.executors.PublishBuildInfoExecutor.execute(PublishBuildInfoExecutor.java:30)
	at org.jfrog.hudson.pipeline.scripted.steps.PublishBuildInfoStep$Execution.run(PublishBuildInfoStep.java:49)
	at org.jfrog.hudson.pipeline.scripted.steps.PublishBuildInfoStep$Execution.run(PublishBuildInfoStep.java:35)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1$1.call(AbstractSynchronousNonBlockingStepExecution.java:47)
	at hudson.security.ACL.impersonate(ACL.java:290)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1.run(AbstractSynchronousNonBlockingStepExecution.java:44)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: FAILURE
```

- The problem is with the new `artifactory-build-info` repository where the build info is stored. It needs additional permissions, but I've been not able to set them up.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration70.png)

- At the moment the `Artifacts` have been deployed properly.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration71.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration72.png)

- Create the new `gradle publisher test with docker` pipeline using the `gs-gradle` Github repository.

> Jenkinsfile.withjfrog

```groovy
node {
  def server = Artifactory.server 'peelmicro.jfrog.io'
  def myGradleContainer = docker.image('gradle:jdk8-alpine')
  myGradleContainer.pull()
  stage('prep') {
    checkout scm
  }
  stage('build') {
     myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
       sh 'cd complete && ./gradlew build'
     }
  }
  stage('test') {
     myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
       sh 'cd complete && ./gradlew test'
     }
  }
  stage('publish') {
    def uploadSpec = """{
      "files": [
        {
          "pattern": "complete/build/libs/gs-gradle-*.jar",
          "target": "gradle-dev-local/peelmicro/gs-gradle/1.0/gs-gradle-1.0-docker.jar"
        }
     ]
    }"""
    server.upload(uploadSpec)
  }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration73.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration74.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration75.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration76.png)

```
Console Output
Started by user Juan Pablo Perez
Replayed #3
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/gradle publisher test with docker
[Pipeline] {
[Pipeline] getArtifactoryServer
[Pipeline] sh
+ docker pull gradle:jdk8-alpine
jdk8-alpine: Pulling from library/gradle
Digest: sha256:e7c721b448a40ef3e97823fe71c2b3709cd5580e9276e52309f6c5755be8ad33
Status: Image is up to date for gradle:jdk8-alpine
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] checkout
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
Commit message: "Change image because it seems the alpine one is not working"
 > git rev-list --no-walk 17b4cb0f19e2b4a72d3a848e85366c898fffbd59 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8-alpine
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w "/var/jenkins_home/workspace/gradle publisher test with docker" --volumes-from 1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8-alpine cat
$ docker top 8b234f513bb8d04b05d2a63bf2735b54e3807d72168603335c774dbf8cbb7402 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew build
env: can't execute 'bash': No such file or directory
[Pipeline] }
$ docker stop --time=1 8b234f513bb8d04b05d2a63bf2735b54e3807d72168603335c774dbf8cbb7402
$ docker rm -f 8b234f513bb8d04b05d2a63bf2735b54e3807d72168603335c774dbf8cbb7402
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 127
Finished: FAILURE
```

- It has been changed `gradle:jdk8-alpine` by `gradle:jdk8`

```
Console Output
Started by user Juan Pablo Perez
Obtained Jenkinsfile.withjfrog from git https://github.com/peelmicro/gs-gradle
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/gradle publisher test with docker
[Pipeline] {
[Pipeline] getArtifactoryServer
[Pipeline] sh
+ docker pull gradle:jdk8
jdk8: Pulling from library/gradle
Digest: sha256:a4cb4598c290aa4afe7aae9f2b9b30a17e8e9be95f110db1583196407df2beab
Status: Image is up to date for gradle:jdk8
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] checkout
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
Commit message: "Change image because it seems the alpine one is not working"
 > git rev-list --no-walk 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w "/var/jenkins_home/workspace/gradle publisher test with docker" --volumes-from 1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top 08dffb979af4ea08612519407b183d6700676f155f07436835e4188e84db8f21 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew build
:compileJava
:processResources UP-TO-DATE
:classes
:jar
:startScripts
:distTar
:distZip
:assemble
:compileTestJava
:processTestResources UP-TO-DATE
:testClasses
:test
:check
:build

BUILD SUCCESSFUL

Total time: 21.273 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.13/userguide/gradle_daemon.html
[Pipeline] }
$ docker stop --time=1 08dffb979af4ea08612519407b183d6700676f155f07436835e4188e84db8f21
$ docker rm -f 08dffb979af4ea08612519407b183d6700676f155f07436835e4188e84db8f21
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (test)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container 1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825
$ docker run -t -d -u 1000:1000 -v /var/jenkins_home/.gradle:/home/gradle/.gradle -w "/var/jenkins_home/workspace/gradle publisher test with docker" --volumes-from 1f0befdb800c8c3e78f69aed672504263e6976fe575c265973b3683ff6dcc825 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top 810d2d08d9f8235e9ad7127f775eba1201ddb42263c47a0f24ed3425e0c7156c -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ ./gradlew test
:compileJava UP-TO-DATE
:processResources UP-TO-DATE
:classes UP-TO-DATE
:compileTestJava UP-TO-DATE
:processTestResources UP-TO-DATE
:testClasses UP-TO-DATE
:test UP-TO-DATE

BUILD SUCCESSFUL

Total time: 14.222 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.13/userguide/gradle_daemon.html
[Pipeline] }
$ docker stop --time=1 810d2d08d9f8235e9ad7127f775eba1201ddb42263c47a0f24ed3425e0c7156c
$ docker rm -f 810d2d08d9f8235e9ad7127f775eba1201ddb42263c47a0f24ed3425e0c7156c
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (publish)
[Pipeline] newBuildInfo
[Pipeline] artifactoryUpload
[consumer_0] Deploying artifact: https://peelmicro.jfrog.io/peelmicro/gradle-dev-local/peelmicro/gs-gradle/1.0/gs-gradle-1.0-docker.jar
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJFrogArtifactoryIntegration78.png)

### 33. Custom API Integration

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/CustomApiIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/CustomApiIntegration2.png)

### 34. Demo: Custom API Integration

- Install the `Http request` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration4.png)

- Create an API for [Bitbucket](https://bitbucket.org/account).

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration7.png)

- Create the `jenkins` consumer, with the Jenkinks http://68.183.44.204:8080 URL for `Callback URL` and `URL`. We'll give `Read` access to `Repositories` and `Pull Request`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration10.png)

- Put the `Username=Key` and `Password=Secret` from Bitbucket.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration13.png)

- We can have more information on [OAuth on Bitbucket Cloud](https://confluence.atlassian.com/bitbucket/oauth-on-bitbucket-cloud-238027431.html)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration14.png)

- And on [REST APIs](https://confluence.atlassian.com/bitbucket/rest-apis-222724129.html)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration15.png)

- We are going to use the `pullrequests` endpoint.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration16.png)

- Create the new `custom api` pipeline

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration18.png)

- From the `jenkins-course` Gihhub repository we are going to use the `customapi-integration/Jenkinsfile` Jenkins file.

> customapi-integration/Jenkinsfile

```groovy
// example of custom API
import groovy.json.JsonSlurperClassic

@NonCPS
def jsonParse(def json) {
    new groovy.json.JsonSlurperClassic().parseText(json)
}

def repo = "peelmicro/jenkins-course"

def token = httpRequest authentication: 'bitbucket-oauth', contentType: 'APPLICATION_FORM', httpMode: 'POST', requestBody: 'grant_type=client_credentials', url: 'https://bitbucket.org/site/oauth2/access_token'
def accessToken = jsonParse(token.content).access_token
def pr = httpRequest customHeaders: [[maskValue: true, name: 'Authorization', value: 'Bearer ' + accessToken]], url: "https://api.bitbucket.org/2.0/repositories/${repo}/pullrequests"

for (p in jsonParse(pr.content).values) {
    println(p.source.branch.name)
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration20.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained customapi-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] httpRequest
HttpMethod: POST
URL: https://bitbucket.org/site/oauth2/access_token
Content-type: application/x-www-form-urlencoded; charset=ISO-8859-1
Using authentication: bitbucket-oauth
Sending request to url: https://bitbucket.org/site/oauth2/access_token
Response Code: HTTP/1.1 200 OK
Success code from [100‥399]
Scripts not permitted to use new groovy.json.JsonSlurperClassic. Administrators can decide whether to approve or reject this signature.
[Pipeline] End of Pipeline
org.jenkinsci.plugins.scriptsecurity.sandbox.RejectedAccessException: Scripts not permitted to use new groovy.json.JsonSlurperClassic
	at org.jenkinsci.plugins.scriptsecurity.sandbox.whitelists.StaticWhitelist.rejectNew(StaticWhitelist.java:184)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onNewInstance(SandboxInterceptor.java:170)
	at org.kohsuke.groovy.sandbox.impl.Checker$3.call(Checker.java:197)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedConstructor(Checker.java:202)
	at org.kohsuke.groovy.sandbox.impl.Checker$checkedConstructor.callStatic(Unknown Source)
	at org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:56)
	at org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:194)
	at org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:214)
	at WorkflowScript.jsonParse(WorkflowScript:6)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)
	at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)
	at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)
	at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)
	at org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:42)
	at org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)
	at org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)
	at org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:157)
	at org.kohsuke.groovy.sandbox.GroovyInterceptor.onMethodCall(GroovyInterceptor.java:23)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onMethodCall(SandboxInterceptor.java:155)
	at org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:155)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedCall(Checker.java:159)
	at com.cloudbees.groovy.cps.sandbox.SandboxInvoker.methodCall(SandboxInvoker.java:17)
	at WorkflowScript.run(WorkflowScript:12)
	at ___cps.transform___(Native Method)
	at com.cloudbees.groovy.cps.impl.ContinuationGroup.methodCall(ContinuationGroup.java:57)
	at com.cloudbees.groovy.cps.impl.FunctionCallBlock$ContinuationImpl.dispatchOrArg(FunctionCallBlock.java:109)
	at com.cloudbees.groovy.cps.impl.FunctionCallBlock$ContinuationImpl.fixArg(FunctionCallBlock.java:82)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.cloudbees.groovy.cps.impl.ContinuationPtr$ContinuationImpl.receive(ContinuationPtr.java:72)
	at com.cloudbees.groovy.cps.impl.PropertyishBlock$ContinuationImpl.get(PropertyishBlock.java:76)
	at com.cloudbees.groovy.cps.LValueBlock$GetAdapter.receive(LValueBlock.java:30)
	at com.cloudbees.groovy.cps.impl.PropertyishBlock$ContinuationImpl.fixName(PropertyishBlock.java:66)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.cloudbees.groovy.cps.impl.ContinuationPtr$ContinuationImpl.receive(ContinuationPtr.java:72)
	at com.cloudbees.groovy.cps.impl.ConstantBlock.eval(ConstantBlock.java:21)
	at com.cloudbees.groovy.cps.Next.step(Next.java:83)
	at com.cloudbees.groovy.cps.Continuable$1.call(Continuable.java:174)
	at com.cloudbees.groovy.cps.Continuable$1.call(Continuable.java:163)
	at org.codehaus.groovy.runtime.GroovyCategorySupport$ThreadCategoryInfo.use(GroovyCategorySupport.java:129)
	at org.codehaus.groovy.runtime.GroovyCategorySupport.use(GroovyCategorySupport.java:268)
	at com.cloudbees.groovy.cps.Continuable.run0(Continuable.java:163)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.access$101(SandboxContinuable.java:34)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.lambda$run0$0(SandboxContinuable.java:59)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.GroovySandbox.runInSandbox(GroovySandbox.java:121)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.run0(SandboxContinuable.java:58)
	at org.jenkinsci.plugins.workflow.cps.CpsThread.runNextChunk(CpsThread.java:182)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.run(CpsThreadGroup.java:332)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.access$200(CpsThreadGroup.java:83)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:244)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:232)
	at org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService$2.call(CpsVmExecutorService.java:64)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at hudson.remoting.SingleLaneExecutorService$1.run(SingleLaneExecutorService.java:131)
	at jenkins.util.ContextResettingExecutorService$1.run(ContextResettingExecutorService.java:28)
	at jenkins.security.ImpersonatingExecutorService$1.run(ImpersonatingExecutorService.java:59)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: FAILURE
```

- We need to accept the `groovy.json.JsonSlurperClassic` script.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration24.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration25.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained customapi-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] httpRequest
HttpMethod: POST
URL: https://bitbucket.org/site/oauth2/access_token
Content-type: application/x-www-form-urlencoded; charset=ISO-8859-1
Using authentication: bitbucket-oauth
Sending request to url: https://bitbucket.org/site/oauth2/access_token
Response Code: HTTP/1.1 200 OK
Success code from [100‥399]
Scripts not permitted to use method groovy.json.JsonSlurperClassic parseText java.lang.String. Administrators can decide whether to approve or reject this signature.
[Pipeline] End of Pipeline
org.jenkinsci.plugins.scriptsecurity.sandbox.RejectedAccessException: Scripts not permitted to use method groovy.json.JsonSlurperClassic parseText java.lang.String
	at org.jenkinsci.plugins.scriptsecurity.sandbox.whitelists.StaticWhitelist.rejectMethod(StaticWhitelist.java:175)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onMethodCall(SandboxInterceptor.java:159)
	at org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:155)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedCall(Checker.java:159)
	at org.kohsuke.groovy.sandbox.impl.Checker$checkedCall$0.callStatic(Unknown Source)
	at org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:56)
	at org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:194)
	at WorkflowScript.jsonParse(WorkflowScript:6)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)
	at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)
	at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)
	at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)
	at org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:42)
	at org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)
	at org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)
	at org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:157)
	at org.kohsuke.groovy.sandbox.GroovyInterceptor.onMethodCall(GroovyInterceptor.java:23)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onMethodCall(SandboxInterceptor.java:155)
	at org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:155)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedCall(Checker.java:159)
	at com.cloudbees.groovy.cps.sandbox.SandboxInvoker.methodCall(SandboxInvoker.java:17)
	at WorkflowScript.run(WorkflowScript:12)
	at ___cps.transform___(Native Method)
	at com.cloudbees.groovy.cps.impl.ContinuationGroup.methodCall(ContinuationGroup.java:57)
	at com.cloudbees.groovy.cps.impl.FunctionCallBlock$ContinuationImpl.dispatchOrArg(FunctionCallBlock.java:109)
	at com.cloudbees.groovy.cps.impl.FunctionCallBlock$ContinuationImpl.fixArg(FunctionCallBlock.java:82)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.cloudbees.groovy.cps.impl.ContinuationPtr$ContinuationImpl.receive(ContinuationPtr.java:72)
	at com.cloudbees.groovy.cps.impl.PropertyishBlock$ContinuationImpl.get(PropertyishBlock.java:76)
	at com.cloudbees.groovy.cps.LValueBlock$GetAdapter.receive(LValueBlock.java:30)
	at com.cloudbees.groovy.cps.impl.PropertyishBlock$ContinuationImpl.fixName(PropertyishBlock.java:66)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.cloudbees.groovy.cps.impl.ContinuationPtr$ContinuationImpl.receive(ContinuationPtr.java:72)
	at com.cloudbees.groovy.cps.impl.ConstantBlock.eval(ConstantBlock.java:21)
	at com.cloudbees.groovy.cps.Next.step(Next.java:83)
	at com.cloudbees.groovy.cps.Continuable$1.call(Continuable.java:174)
	at com.cloudbees.groovy.cps.Continuable$1.call(Continuable.java:163)
	at org.codehaus.groovy.runtime.GroovyCategorySupport$ThreadCategoryInfo.use(GroovyCategorySupport.java:129)
	at org.codehaus.groovy.runtime.GroovyCategorySupport.use(GroovyCategorySupport.java:268)
	at com.cloudbees.groovy.cps.Continuable.run0(Continuable.java:163)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.access$101(SandboxContinuable.java:34)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.lambda$run0$0(SandboxContinuable.java:59)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.GroovySandbox.runInSandbox(GroovySandbox.java:121)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.run0(SandboxContinuable.java:58)
	at org.jenkinsci.plugins.workflow.cps.CpsThread.runNextChunk(CpsThread.java:182)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.run(CpsThreadGroup.java:332)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.access$200(CpsThreadGroup.java:83)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:244)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:232)
	at org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService$2.call(CpsVmExecutorService.java:64)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at hudson.remoting.SingleLaneExecutorService$1.run(SingleLaneExecutorService.java:131)
	at jenkins.util.ContextResettingExecutorService$1.run(ContextResettingExecutorService.java:28)
	at jenkins.security.ImpersonatingExecutorService$1.run(ImpersonatingExecutorService.java:59)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: FAILURE
```

- Approve the `groovy.json.JsonSlurperClassic` method.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration26.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration27.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration28.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained customapi-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] httpRequest
HttpMethod: POST
URL: https://bitbucket.org/site/oauth2/access_token
Content-type: application/x-www-form-urlencoded; charset=ISO-8859-1
Using authentication: bitbucket-oauth
Sending request to url: https://bitbucket.org/site/oauth2/access_token
Response Code: HTTP/1.1 200 OK
Success code from [100‥399]
[Pipeline] httpRequest
HttpMethod: GET
URL: https://api.bitbucket.org/2.0/repositories/peelmicro/jenkins-course/pullrequests
Authorization: *****
Sending request to url: https://api.bitbucket.org/2.0/repositories/peelmicro/jenkins-course/pullrequests
Response Code: HTTP/1.1 404 Not Found
[Pipeline] End of Pipeline
hudson.AbortException: Fail: the returned code 404 is not in the accepted range: [[100‥399]]
	at jenkins.plugins.http_request.HttpRequestExecution.responseCodeIsValid(HttpRequestExecution.java:306)
	at jenkins.plugins.http_request.HttpRequestExecution.processResponse(HttpRequestExecution.java:316)
	at jenkins.plugins.http_request.HttpRequestExecution.authAndRequest(HttpRequestExecution.java:232)
	at jenkins.plugins.http_request.HttpRequestExecution.call(HttpRequestExecution.java:195)
Caused: java.lang.IllegalStateException
	at jenkins.plugins.http_request.HttpRequestExecution.call(HttpRequestExecution.java:198)
	at jenkins.plugins.http_request.HttpRequestStep$Execution.run(HttpRequestStep.java:306)
	at jenkins.plugins.http_request.HttpRequestStep$Execution.run(HttpRequestStep.java:285)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1$1.call(AbstractSynchronousNonBlockingStepExecution.java:47)
	at hudson.security.ACL.impersonate(ACL.java:290)
	at org.jenkinsci.plugins.workflow.steps.AbstractSynchronousNonBlockingStepExecution$1.run(AbstractSynchronousNonBlockingStepExecution.java:44)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: FAILURE
```

- We need to import the `jenkins-course` repository from `Github` to `Bitbucket`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration30.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration31.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration32.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration33.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained customapi-integration/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] httpRequest
HttpMethod: POST
URL: https://bitbucket.org/site/oauth2/access_token
Content-type: application/x-www-form-urlencoded; charset=ISO-8859-1
Using authentication: bitbucket-oauth
Sending request to url: https://bitbucket.org/site/oauth2/access_token
Response Code: HTTP/1.1 200 OK
Success code from [100‥399]
[Pipeline] httpRequest
HttpMethod: GET
URL: https://api.bitbucket.org/2.0/repositories/peelmicro/jenkins-course/pullrequests
Authorization: *****
Sending request to url: https://api.bitbucket.org/2.0/repositories/peelmicro/jenkins-course/pullrequests
Response Code: HTTP/1.1 200 OK
Success code from [100‥399]
[Pipeline] End of Pipeline
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration34.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration35.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration36.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoCustomApiIntegration37.png)

`httpRequest ignoreSslErrors: true, responseHandle: 'NONE', url: 'google.com'`

DemoCustomApiIntegration38

DemoCustomApiIntegration39

DemoCustomApiIntegration40

### 35. Sonarqube integration

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SonarqubeIntegration.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SonarqubeIntegration2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SonarqubeIntegration3.png)

### 36. Demo: Sonarqube installation with docker-compose

- We need to install `Sonarqube`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                              NAMES
1f0befdb800c        jenkins-docker      "/sbin/tini -- /us..."   40 hours ago        Up 40 hours         0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
846e898b4a59        b8d58a0332fc        "/bin/sh -c 'npm s..."   8 days ago          Up 8 days           0.0.0.0:3000->3000/tcp                             my-nodejs-app
```

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~# docker stop jenkins
jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls /var/jenkins_home/
caches                                                                                hudson.plugins.timestamper.TimestamperConfig.xml     jenkins.plugins.slack.SlackNotifier.xml                                   org.jfrog.hudson.ArtifactoryBuilder.xml
com.cloudbees.jenkins.plugins.bitbucket.endpoints.BitbucketEndpointConfiguration.xml  hudson.scm.SubversionSCM.xml                         jenkins.plugins.slack.webhook.GlobalConfig.xml                            plugins
config.xml                                                                            hudson.tasks.Ant.xml                                 jenkins.telemetry.Correlator.xml                                          queue.xml
copy_reference_file.log                                                               hudson.tasks.Mailer.xml                              jobs                                                                      queue.xml.bak
credentials.xml                                                                       hudson.tasks.Maven.xml                               logs                                                                      scriptApproval.xml
fingerprints                                                                          hudson.tasks.Shell.xml                               nodeMonitors.xml                                                          secret.key
github-plugin-configuration.xml                                                       hudson.triggers.SCMTrigger.xml                       nodes                                                                     secret.key.not-so-secret
hudson.ivy.IvyBuildTrigger.xml                                                        identity.key.enc                                     org.jenkins.plugins.lockableresources.LockableResourcesManager.xml        secrets
hudson.ivy.IvyModuleSet.xml                                                           init.groovy.d                                        org.jenkinsci.plugins.docker.commons.tools.DockerTool.xml                 tools
hudson.maven.MavenModuleSet.xml                                                       javaposse.jobdsl.plugin.ExecuteDslScripts.xml        org.jenkinsci.plugins.gitclient.JGitApacheTool.xml                        updates
hudson.model.UpdateCenter.xml                                                         jenkins.CLI.xml                                      org.jenkinsci.plugins.gitclient.JGitTool.xml                              userContent
hudson.plugins.build_timeout.operations.BuildStepOperation.xml                        jenkins.install.InstallUtil.lastExecVersion          org.jenkinsci.plugins.github_branch_source.GitHubSCMProbe.cache           users
hudson.plugins.emailext.ExtendedEmailPublisher.xml                                    jenkins.install.UpgradeWizard.state                  org.jenkinsci.plugins.pipeline.modeldefinition.config.GlobalConfig.xml    war
hudson.plugins.git.GitSCM.xml                                                         jenkins.model.ArtifactManagerConfiguration.xml       org.jenkinsci.plugins.workflow.flow.FlowExecutionList.xml                 workflow-libs
hudson.plugins.git.GitTool.xml                                                        jenkins.model.JenkinsLocationConfiguration.xml       org.jenkinsci.plugins.workflow.flow.GlobalDefaultFlowDurabilityLevel.xml  workspace
hudson.plugins.gradle.Gradle.xml                                                      jenkins.mvn.GlobalMavenConfig.xml                    org.jenkinsci.plugins.workflow.libs.GlobalLibraries.xml
hudson.plugins.mercurial.MercurialInstallation.xml                                    jenkins.plugins.nodejs.tools.NodeJSInstallation.xml  org.jenkinsci.plugins.workflow.support.steps.StageStep.xml
```

- We are going to use the `docker-compose/docker-compose.yml` document from the `jenkins-course` Github repository.

> docker-compose/docker-compose.yml

```yaml
version: "2"
services:
  jenkins:
    image: jenkins/jenkins:lts
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks: jenkins:
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mkdir jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# wget https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
--2019-02-16 10:03:15--  https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.16.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.16.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 807 [text/plain]
Saving to: ‘docker-compose.yml’

docker-compose.yml                                                  100%[==================================================================================================================================================================>]     807  --.-KB/s    in 0s

2019-02-16 10:03:15 (96.9 MB/s) - ‘docker-compose.yml’ saved [807/807]
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# ls
docker-compose.yml
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# cat docker-compose.yml
version: '2'
services:
  jenkins:
    image: jenkins/jenkins:lts
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks:
  jenkins:
```

- We need to install `Docker Compose` from [Install Docker Compose](https://docs.docker.com/compose/install/)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   617    0   617    0     0   2694      0 --:--:-- --:--:-- --:--:--  2694
100 11.2M  100 11.2M    0     0  6923k      0  0:00:01  0:00:01 --:--:-- 9373k
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# sudo chmod +x /usr/local/bin/docker-compose
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose --version
docker-compose version 1.23.2, build 1110ad01
```

- Execute the `docker-compose` document.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose up -d
Creating network "jenkins_jenkins" with the default driver
Pulling postgres (postgres:9.6)...
9.6: Pulling from library/postgres
6ae821421a7d: Already exists
060245e5c056: Pull complete
d6c2e60cfc1c: Pull complete
38d23c24a9df: Pull complete
9998068fb35e: Pull complete
2bb2385a4bb9: Pull complete
2ad14c51497d: Pull complete
77519615ed40: Pull complete
2583d86b10ce: Pull complete
f4b38b000c07: Pull complete
07db5af498df: Pull complete
6eb47c09fd88: Pull complete
438be684c73b: Pull complete
e7ccd7a501a5: Pull complete
Pulling sonarqube (sonarqube:lts)...
lts: Pulling from library/sonarqube
741437d97401: Already exists
34d8874714d7: Already exists
0a108aa26679: Already exists
7f0334c36886: Already exists
aa29d9cbdbf5: Already exists
e54d29f74413: Already exists
eb5b24cf4e1f: Already exists
5edfd6c9b475: Already exists
896902170c51: Pull complete
8f1dd8324475: Pull complete
8c432586c5bd: Pull complete
9c7f5ad16b0f: Pull complete
Creating jenkins_jenkins_1  ... done
Creating jenkins_postgres_1 ... done
Creating jenkins_sonarqube_1 ... done
```

- Ensure the containers are working

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
4c59d3e82e71        sonarqube:lts         "./bin/run.sh"           2 minutes ago       Up 2 minutes        0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
81a69512e79b        postgres:9.6          "docker-entrypoint..."   2 minutes ago       Up 2 minutes        5432/tcp                                           jenkins_postgres_1
3363721be36a        jenkins/jenkins:lts   "/sbin/tini -- /us..."   2 minutes ago       Up 2 minutes        0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
846e898b4a59        b8d58a0332fc          "/bin/sh -c 'npm s..."   8 days ago          Up 8 days           0.0.0.0:3000->3000/tcp                             my-nodejs-app
```

- We can see if `sonarqube` is running executing:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose logs -f sonarqube
.
.
.
sonarqube_1  | 2019.02.16 10:16:13 INFO  ce[][o.s.c.c.CePluginRepository] Loaded plugin Flex [flex]
sonarqube_1  | 2019.02.16 10:16:13 INFO  ce[][o.s.c.c.CePluginRepository] Loaded plugin SonarQube :: Plugins :: SCM :: Git [scmgit]
sonarqube_1  | 2019.02.16 10:16:13 INFO  ce[][o.s.c.c.CePluginRepository] Loaded plugin SonarPHP [php]
sonarqube_1  | 2019.02.16 10:16:13 INFO  ce[][o.s.c.c.CePluginRepository] Loaded plugin SonarTS [typescript]
sonarqube_1  | 2019.02.16 10:16:13 INFO  ce[][o.s.c.c.CePluginRepository] Loaded plugin SonarQube :: Plugins :: SCM :: SVN [scmsvn]
sonarqube_1  | 2019.02.16 10:16:13 INFO  ce[][o.s.c.c.CePluginRepository] Loaded plugin SonarJS [javascript]
sonarqube_1  | 2019.02.16 10:16:16 INFO  ce[][o.s.c.q.PurgeCeActivities] Delete the Compute Engine tasks created before Mon Aug 20 10:16:16 UTC 2018
sonarqube_1  | 2019.02.16 10:16:16 INFO  ce[][o.s.c.q.PurgeCeActivities] Delete the Scanner contexts tasks created before Sat Jan 19 10:16:16 UTC 2019
sonarqube_1  | 2019.02.16 10:16:16 INFO  ce[][o.s.ce.app.CeServer] Compute Engine is operational
sonarqube_1  | 2019.02.16 10:16:16 INFO  app[][o.s.a.SchedulerImpl] Process[ce] is up
sonarqube_1  | 2019.02.16 10:16:16 INFO  app[][o.s.a.SchedulerImpl] SonarQube is up
```

- Test if [jenkins](http://68.183.44.204:8080/) is running properly.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose2.png)

- Test if [sonarcube](http://68.183.44.204:9000) is running properly.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose4.png)

- Log in with the standard credentials.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose5.png)

- Change the password.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarqubeInstallationWithDockerCompose7.png)

### 37. Demo: SonarQube integration within Jenkins Pipelines

- We need to install the `SonarQube Scanner` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines4.png)

- Generate a tocken inside `SonarQube`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines9.png)

- Configure `sonarqube` to be installed automatically.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines13.png)

- Add the credentials

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines16.png)

- Copy the Secret from `SonarQube`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines17.png)

- Create the new `sonarqube` pipeline

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines19.png)

- We are going to use the `sonarqube/Jenkinsfile` Jenkinsfile from the `jenkins-course` GitHub Repository.

> sonarqube/Jenkinsfile

```groovy
node {
    def myGradleContainer = docker.image('gradle:jdk8-alpine')
    myGradleContainer.pull()

    stage('prep') {
        git url: 'https://github.com/wardviaene/gs-gradle.git'
    }

    stage('build') {
      myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
        sh 'cd complete && /opt/gradle/bin/gradle build'
      }
    }

    stage('sonar-scanner') {
      def sonarqubeScannerHome = tool name: 'sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      withCredentials([string(credentialsId: 'sonar', variable: 'sonarLogin')]) {
        sh "${sonarqubeScannerHome}/bin/sonar-scanner -e -Dsonar.host.url=http://sonarqube:9000 -Dsonar.login=${sonarLogin} -Dsonar.projectName=gs-gradle -Dsonar.projectVersion=${env.BUILD_NUMBER} -Dsonar.projectKey=GS -Dsonar.sources=complete/src/main/ -Dsonar.tests=complete/src/test/ -Dsonar.language=java"
      }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines21.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8-alpine
/var/jenkins_home/workspace/sonarqube@tmp/durable-4e4d1797/script.sh: 1: /var/jenkins_home/workspace/sonarqube@tmp/durable-4e4d1797/script.sh: docker: not found
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 127
Finished: FAILURE
```

- Change the image to `gradle:jdk8`

> /sonarqube/Jenkinsfile

```groovy
node {
    def myGradleContainer = docker.image('gradle:jdk8')
    myGradleContainer.pull()

    stage('prep') {
        git url: 'https://github.com/peelmicro/gs-gradle.git'
    }

    stage('build') {
      myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
        sh 'cd complete && /opt/gradle/bin/gradle build'
      }
    }

    stage('sonar-scanner') {
      def sonarqubeScannerHome = tool name: 'sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      withCredentials([string(credentialsId: 'sonar', variable: 'sonarLogin')]) {
        sh "${sonarqubeScannerHome}/bin/sonar-scanner -e -Dsonar.host.url=http://sonarqube:9000 -Dsonar.login=${sonarLogin} -Dsonar.projectName=gs-gradle -Dsonar.projectVersion=${env.BUILD_NUMBER} -Dsonar.projectKey=GS -Dsonar.sources=complete/src/main/ -Dsonar.tests=complete/src/test/ -Dsonar.language=java"
      }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines22.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
/var/jenkins_home/workspace/sonarqube@tmp/durable-4408a981/script.sh: 1: /var/jenkins_home/workspace/sonarqube@tmp/durable-4408a981/script.sh: docker: not found
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 127
Finished: FAILURE
```

- The new jenkins container created from the docker-compose document doesn't have docker installed internally.So, the best solution is to install the `Docker` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines24.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines25.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines26.png)

- It is still not working:

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
/var/jenkins_home/workspace/sonarqube@tmp/durable-6ed222df/script.sh: 1: /var/jenkins_home/workspace/sonarqube@tmp/durable-6ed222df/script.sh: docker: not found
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 127
Finished: FAILURE
```

- We need to execute the `Docker client` inside the `jenkins_jenkins_1` conatiner. `-u 0` means to execute as root.

- The code is copied from `https://raw.githubusercontent.com/wardviaene/jenkins-docker/master/Dockerfile`

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker exec -u 0 -it jenkins_jenkins_1 bash
root@9e2c6b83e4ad:/# mkdir -p /tmp/download && \
>  curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
>  rm -rf /tmp/download/docker/dockerd && \
>  mv /tmp/download/docker/docker* /usr/local/bin/ && \
>  rm -rf /tmp/download && \
>  groupadd -g 999 docker && \
>  usermod -aG staff,docker jenkins
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 36.9M  100 36.9M    0     0  13.4M      0  0:00:02  0:00:02 --:--:-- 13.4M
```

- Run the pipeline again

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
Warning: failed to get default registry endpoint from daemon (Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.37/info: dial unix /var/run/docker.sock: connect: permission denied). Using system default: https://index.docker.io/v1/
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.37/images/create?fromImage=gradle&tag=jdk8: dial unix /var/run/docker.sock: connect: permission denied
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE
```

- We need to pass the user and GID to the jenkins_jenkins_1 conatiner.

- Modify the `docker-compose/docker-compose.yml` document to include the user.

> docker-compose/docker-compose.yml

```yaml
version: "2"
services:
  jenkins:
    image: jenkins/jenkins:lts
    user: "${UID}:${GID}"
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks: jenkins:
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# rm docker-compose.yml
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# wget https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
--2019-02-16 18:12:47--  https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.16.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.16.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 833 [text/plain]
Saving to: ‘docker-compose.yml’

docker-compose.yml                                                  100%[==================================================================================================================================================================>]     833  --.-KB/s    in 0s

2019-02-16 18:12:47 (96.5 MB/s) - ‘docker-compose.yml’ saved [833/833]

root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# cat docker-compose.yml
version: '2'
services:
  jenkins:
    image: jenkins/jenkins:lts
    user: "${UID}:${GID}"
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks:
  jenkins:

```

- Stop the docker compose

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose down
WARNING: The UID variable is not set. Defaulting to a blank string.
WARNING: The GID variable is not set. Defaulting to a blank string.
Stopping jenkins_sonarqube_1 ... done
Stopping jenkins_postgres_1  ... done
Stopping jenkins_jenkins_1   ... done
Removing jenkins_sonarqube_1 ... done
Removing jenkins_postgres_1  ... done
Removing jenkins_jenkins_1   ... done
Removing network jenkins_jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES
```

- Obtain the curret GID

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# cat /etc/group |grep docker
docker:x:999:
```

- Run the docker-compose passing the user: 0 (root) and GID: 999

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# GID=999 docker-compose up -d
Creating network "jenkins_jenkins" with the default driver
Creating jenkins_jenkins_1  ... done
Creating jenkins_postgres_1 ... done
Creating jenkins_sonarqube_1 ... done
```

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker exec -u 0 -it jenkins_jenkins_1 bash
root@9e2c6b83e4ad:/# mkdir -p /tmp/download && \
>  curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
>  rm -rf /tmp/download/docker/dockerd && \
>  mv /tmp/download/docker/docker* /usr/local/bin/ && \
>  rm -rf /tmp/download && \
>  groupadd -g 999 docker && \
>  usermod -aG staff,docker jenkins
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 36.9M  100 36.9M    0     0  13.4M      0  0:00:02  0:00:02 --:--:-- 13.4M
```

- Run the pipeline again

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
jdk8: Pulling from library/gradle
Digest: sha256:a4cb4598c290aa4afe7aae9f2b9b30a17e8e9be95f110db1583196407df2beab
Status: Image is up to date for gradle:jdk8
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] git
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
Commit message: "Change image because it seems the alpine one is not working"
 > git rev-list --no-walk 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container a2c2fdead57e4f72b4ea8e7e48d5233cb5a48b9d0344135453c6adae267ce84d
$ docker run -t -d -u 0:999 -v /root/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/sonarqube --volumes-from a2c2fdead57e4f72b4ea8e7e48d5233cb5a48b9d0344135453c6adae267ce84d -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top f04458504b1eda0427736fb58152c10d63f082fec4bc820dec1fb4d0855b4579 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ /opt/gradle/bin/gradle build
Welcome to Gradle 5.2.1!

Here are the highlights of this release:
 - Define sets of dependencies that work together with Java Platform plugin
 - New C++ plugins with dependency management built-in
 - New C++ project types for gradle init
 - Service injection into plugins and project extensions

For more details see https://docs.gradle.org/5.2.1/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)
```

- It ends up stucking on `Starting a Gradle Daemon (subsequent builds will be faster)`

- Modify the `docker-compose/docker-compose.yml` document to put the use in all the services

> docker-compose/docker-compose.yml

```yaml
version: "2"
services:
  jenkins:
    image: jenkins/jenkins:lts
    user: "${UID}:${GID}"
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    user: "${UID}:${GID}"
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    user: "${UID}:${GID}"
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks: jenkins:
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd jenkins
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# ls
docker-compose.yml
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# rm docker-compose.yml
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# wget https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
--2019-02-16 18:50:11--  https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.16.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.16.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 885 [text/plain]
Saving to: ‘docker-compose.yml’

docker-compose.yml                                                  100%[==================================================================================================================================================================>]     885  --.-KB/s    in 0s

2019-02-16 18:50:11 (82.4 MB/s) - ‘docker-compose.yml’ saved [885/885]

root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# cat docker-compose.yml
version: '2'
services:
  jenkins:
    image: jenkins/jenkins:lts
    user: "${UID}:${GID}"
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    user: "${UID}:${GID}"
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    user: "${UID}:${GID}"
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks:
  jenkins:
```

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins#  docker-compose down
WARNING: The UID variable is not set. Defaulting to a blank string.
WARNING: The GID variable is not set. Defaulting to a blank string.
Stopping jenkins_sonarqube_1 ... done
Stopping jenkins_postgres_1  ... done
Stopping jenkins_jenkins_1   ... done
Removing network jenkins_jenkins
ERROR: network jenkins_jenkins id 52485baff13dd5cc275c1fd442f61386098c3bf8c9e5a83c4f073f57d6089315 has active endpoints
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
f04458504b1e        gradle:jdk8           "cat"                    21 minutes ago      Up 21 minutes                                                          amazing_jang
be34bf605188        sonarqube:lts         "./bin/run.sh"           25 minutes ago      Up 25 minutes       0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
27ac940b128f        postgres:9.6          "docker-entrypoint..."   25 minutes ago      Up 25 minutes       5432/tcp                                           jenkins_postgres_1
a2c2fdead57e        jenkins/jenkins:lts   "/sbin/tini -- /us..."   25 minutes ago      Up 25 minutes       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker kill amazing_jang
amazing_jang
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
f04458504b1e        gradle:jdk8           "cat"                    22 minutes ago      Up 22 minutes                                                          amazing_jang
be34bf605188        sonarqube:lts         "./bin/run.sh"           26 minutes ago      Up 26 minutes       0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
27ac940b128f        postgres:9.6          "docker-entrypoint..."   26 minutes ago      Up 26 minutes       5432/tcp                                           jenkins_postgres_1
a2c2fdead57e        jenkins/jenkins:lts   "/sbin/tini -- /us..."   26 minutes ago      Up 26 minutes       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker kill amazing_jang
amazing_jang
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
f04458504b1e        gradle:jdk8           "cat"                    22 minutes ago      Up 22 minutes                                                          amazing_jang
be34bf605188        sonarqube:lts         "./bin/run.sh"           26 minutes ago      Up 26 minutes       0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
27ac940b128f        postgres:9.6          "docker-entrypoint..."   26 minutes ago      Up 26 minutes       5432/tcp                                           jenkins_postgres_1
a2c2fdead57e        jenkins/jenkins:lts   "/sbin/tini -- /us..."   26 minutes ago      Up 26 minutes       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
```

- We need to restart docker

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# systemctl stop docker
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# systemctl start docker
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# GID=999 docker-compose up -d
WARNING: The UID variable is not set. Defaulting to a blank string.
Creating network "jenkins_jenkins" with the default driver
Creating jenkins_jenkins_1  ... done
Creating jenkins_postgres_1 ... done
Creating jenkins_sonarqube_1 ... done
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
276811ad6e66        sonarqube:lts         "./bin/run.sh"           5 seconds ago       Up 4 seconds        0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
1d9e54f0a9d4        postgres:9.6          "docker-entrypoint..."   6 seconds ago       Up 5 seconds        5432/tcp                                           jenkins_postgres_1
1d424d2e87fe        jenkins/jenkins:lts   "/sbin/tini -- /us..."   6 seconds ago       Up 5 seconds        0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
```

- From `https://raw.githubusercontent.com/wardviaene/jenkins-docker/master/Dockerfile`

````bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker exec -u 0 -it jenkins_jenkins_1 bash
root@55743df282c7:/# docker
bash: docker: command not found
root@55743df282c7:/# mkdir -p /tmp/download && \
>  curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
>  rm -rf /tmp/download/docker/dockerd && \
>  mv /tmp/download/docker/docker* /usr/local/bin/ && \
>  rm -rf /tmp/download && \
>  groupadd -g 999 docker && \
>  usermod -aG staff,docker jenkins
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 36.9M  100 36.9M    0     0  14.5M      0  0:00:02  0:00:02 --:--:-- 14.5M

- SonarCube ends up stopping

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
2b9d8921d63f        sonarqube:lts         "./bin/run.sh"           11 seconds ago      Up 10 seconds       0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
b0e0cbbd48dc        jenkins/jenkins:lts   "/sbin/tini -- /us..."   12 seconds ago      Up 11 seconds       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
b5debf0ba18d        postgres:9.6          "docker-entrypoint..."   12 seconds ago      Up 11 seconds       5432/tcp                                           jenkins_postgres_1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
2b9d8921d63f        sonarqube:lts         "./bin/run.sh"           16 seconds ago      Up 14 seconds       0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
b0e0cbbd48dc        jenkins/jenkins:lts   "/sbin/tini -- /us..."   17 seconds ago      Up 15 seconds       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
b5debf0ba18d        postgres:9.6          "docker-entrypoint..."   17 seconds ago      Up 15 seconds       5432/tcp                                           jenkins_postgres_1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
b0e0cbbd48dc        jenkins/jenkins:lts   "/sbin/tini -- /us..."   20 seconds ago      Up 18 seconds       0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
b5debf0ba18d        postgres:9.6          "docker-entrypoint..."   20 seconds ago      Up 18 seconds       5432/tcp                                           jenkins_postgres_1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose logs -f sonarqube
WARNING: The UID variable is not set. Defaulting to a blank string.
WARNING: The GID variable is not set. Defaulting to a blank string.
Attaching to jenkins_sonarqube_1
sonarqube_1  | 2019.02.16 19:11:13 INFO  app[][o.s.a.AppFileSystem] Cleaning or creating temp directory /opt/sonarqube/temp
sonarqube_1  | 2019.02.16 19:11:13 INFO  app[][o.s.a.es.EsSettings] Elasticsearch listening on /127.0.0.1:9001
sonarqube_1  | 2019.02.16 19:11:13 INFO  app[][o.s.a.p.ProcessLauncherImpl] Launch process[[key='es', ipcIndex=1, logFilenamePrefix=es]] from [/opt/sonarqube/elasticsearch]: /opt/sonarqube/elasticsearch/bin/elasticsearch -Epath.conf=/opt/sonarqube/temp/conf/es
sonarqube_1  | 2019.02.16 19:11:14 INFO  app[][o.s.a.SchedulerImpl] Waiting for Elasticsearch to be up and running
sonarqube_1  | 2019.02.16 19:11:18 INFO  app[][o.e.p.PluginsService] no modules loaded
sonarqube_1  | 2019.02.16 19:11:18 INFO  app[][o.e.p.PluginsService] loaded plugin [org.elasticsearch.transport.Netty4Plugin]
sonarqube_1  | 2019.02.16 19:11:27 WARN  app[][o.s.a.p.AbstractProcessMonitor] Process exited with exit value [es]: 1
sonarqube_1  | 2019.02.16 19:11:27 INFO  app[][o.s.a.SchedulerImpl] Process [es] is stopped
sonarqube_1  | 2019.02.16 19:11:27 INFO  app[][o.s.a.SchedulerImpl] SonarQube is stopped
jenkins_sonarqube_1 exited with code 0
````

- the reason is explain in `https://stackoverflow.com/a/47309891/1059286`

SonarQube 6.7 includes an upgraded version of Elasticsearch which cannot be run as root. Thus, SonarQube can no longer be run as root.

The blog post you followed seems to recommend / assume that you're running as root. To not start SonarQube as root, simply end your su session, or log back in as yourself to start the process. Note that you'll need to make sure the user you are starting SonarQube as has 7 (read, write, execute) on the SonarQube directory, recursively, and 6 (read, write) on the log files if they already exist.

- So, the user must be removed from the `SonarCube` service

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose down
WARNING: The UID variable is not set. Defaulting to a blank string.
WARNING: The GID variable is not set. Defaulting to a blank string.
Stopping jenkins_jenkins_1  ... done
Stopping jenkins_postgres_1 ... done
Removing jenkins_sonarqube_1 ... done
Removing jenkins_jenkins_1   ... done
Removing jenkins_postgres_1  ... done
Removing network jenkins_jenkins
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# wget https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
--2019-02-16 19:20:31--  https://raw.githubusercontent.com/peelmicro/jenkins-course/master/docker-compose/docker-compose.yml
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.16.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.16.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 859 [text/plain]
Saving to: ‘docker-compose.yml’

docker-compose.yml                                                  100%[==================================================================================================================================================================>]     859  --.-KB/s    in 0s

2019-02-16 19:20:31 (41.0 MB/s) - ‘docker-compose.yml’ saved [859/859]

root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# cat docker-compose.yml
version: '2'
services:
  jenkins:
    image: jenkins/jenkins:lts
    user: "${UID}:${GID}"
    ports:
      - "8080:8080"
      - "50000:50000"
    networks:
      - jenkins
    volumes:
      - /var/jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
  postgres:
    image: postgres:9.6
    user: "${UID}:${GID}"
    networks:
      - jenkins
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonarpasswd
    volumes:
      - /var/postgres-data:/var/lib/postgresql/data
  sonarqube:
    image: sonarqube:lts
    ports:
      - "9000:9000"
      - "9092:9092"
    networks:
      - jenkins
    environment:
      SONARQUBE_JDBC_USERNAME: sonar
      SONARQUBE_JDBC_PASSWORD: sonarpasswd
      SONARQUBE_JDBC_URL: "jdbc:postgresql://postgres:5432/sonar"
    depends_on:
      - postgres

networks:
  jenkins:

```

```bash
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
0f0cf2827886        sonarqube:lts         "./bin/run.sh"           4 seconds ago       Up 3 seconds        0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
b4b884bd694b        jenkins/jenkins:lts   "/sbin/tini -- /us..."   6 seconds ago       Up 4 seconds        0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
ac20a3c798fa        postgres:9.6          "docker-entrypoint..."   6 seconds ago       Up 5 seconds        5432/tcp                                           jenkins_postgres_1
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker-compose logs -f sonarqube
WARNING: The UID variable is not set. Defaulting to a blank string.
WARNING: The GID variable is not set. Defaulting to a blank string.
Attaching to jenkins_sonarqube_1
sonarqube_1  | 2019.02.16 19:21:57 INFO  app[][o.s.a.AppFileSystem] Cleaning or creating temp directory /opt/sonarqube/temp
sonarqube_1  | 2019.02.16 19:21:57 INFO  app[][o.s.a.es.EsSettings] Elasticsearch listening on /127.0.0.1:9001
sonarqube_1  | 2019.02.16 19:21:57 INFO  app[][o.s.a.p.ProcessLauncherImpl] Launch process[[key='es', ipcIndex=1, logFilenamePrefix=es]] from [/opt/sonarqube/elasticsearch]: /opt/sonarqube/elasticsearch/bin/elasticsearch -Epath.conf=/opt/sonarqube/temp/conf/es
sonarqube_1  | 2019.02.16 19:21:57 INFO  app[][o.s.a.SchedulerImpl] Waiting for Elasticsearch to be up and running
sonarqube_1  | 2019.02.16 19:22:01 INFO  app[][o.e.p.PluginsService] no modules loaded
sonarqube_1  | 2019.02.16 19:22:01 INFO  app[][o.e.p.PluginsService] loaded plugin [org.elasticsearch.transport.Netty4Plugin]
sonarqube_1  | 2019.02.16 19:22:39 INFO  app[][o.s.a.SchedulerImpl] Process[es] is up
sonarqube_1  | 2019.02.16 19:22:39 INFO  app[][o.s.a.p.ProcessLauncherImpl] Launch process[[key='web', ipcIndex=2, logFilenamePrefix=web]] from [/opt/sonarqube]: /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java -Djava.awt.headless=true -Dfile.encoding=UTF-8 -Djava.io.tmpdir=/opt/sonarqube/temp -Xmx512m -Xms128m -XX:+HeapDumpOnOutOfMemoryError -Djava.security.egd=file:/dev/./urandom -cp ./lib/common/*:./lib/server/*:/opt/sonarqube/lib/jdbc/postgresql/postgresql-42.2.1.jar org.sonar.server.app.WebServer /opt/sonarqube/temp/sq-process8876679777025491544properties
.
.
.
sonarqube_1  | 2019.02.16 19:23:46 INFO  ce[][o.s.c.c.CePluginRepository] Load plugins
sonarqube_1  | 2019.02.16 19:23:47 INFO  ce[][o.s.c.q.PurgeCeActivities] Delete the Compute Engine tasks created before Mon Aug 20 19:23:47 UTC 2018
sonarqube_1  | 2019.02.16 19:23:47 INFO  ce[][o.s.c.q.PurgeCeActivities] Delete the Scanner contexts tasks created before Sat Jan 19 19:23:47 UTC 2019
sonarqube_1  | 2019.02.16 19:23:47 INFO  ce[][o.s.ce.app.CeServer] Compute Engine is operational
sonarqube_1  | 2019.02.16 19:23:47 INFO  app[][o.s.a.SchedulerImpl] Process[ce] is up
sonarqube_1  | 2019.02.16 19:23:47 INFO  app[][o.s.a.SchedulerImpl] SonarQube is up
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/jenkins# docker exec -u 0 -it jenkins_jenkins_1 bash
root@b4b884bd694b:/# mkdir -p /tmp/download && \
>  curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
>  rm -rf /tmp/download/docker/dockerd && \
>  mv /tmp/download/docker/docker* /usr/local/bin/ && \
>  rm -rf /tmp/download && \
>  groupadd -g 999 docker && \
>  usermod -aG staff,docker jenkins
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 36.9M  100 36.9M    0     0  13.6M      0  0:00:02  0:00:02 --:--:-- 13.6M
root@b4b884bd694b:/# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
0f0cf2827886        sonarqube:lts         "./bin/run.sh"           5 minutes ago       Up 5 minutes        0.0.0.0:9000->9000/tcp, 0.0.0.0:9092->9092/tcp     jenkins_sonarqube_1
b4b884bd694b        jenkins/jenkins:lts   "/sbin/tini -- /usr/…"   5 minutes ago       Up 5 minutes        0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins_jenkins_1
ac20a3c798fa        postgres:9.6          "docker-entrypoint.s…"   5 minutes ago       Up 5 minutes        5432/tcp                                           jenkins_postgres_1
```

- Run the pipeline again

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines27.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
jdk8: Pulling from library/gradle
Digest: sha256:a4cb4598c290aa4afe7aae9f2b9b30a17e8e9be95f110db1583196407df2beab
Status: Image is up to date for gradle:jdk8
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] git
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
Commit message: "Change image because it seems the alpine one is not working"
 > git rev-list --no-walk 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container b4b884bd694bca45db243b1e4a3fab6d24ce1706ce629637cf1fded6545b1930
$ docker run -t -d -u 0:999 -v /root/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/sonarqube --volumes-from b4b884bd694bca45db243b1e4a3fab6d24ce1706ce629637cf1fded6545b1930 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top 71e57bb2b0090a3bbc9e75d8ae4654294ba87466c0ce026234b38acc48de9d11 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ /opt/gradle/bin/gradle build
Starting a Gradle Daemon, 1 incompatible and 1 stopped Daemons could not be reused, use --status for details
Aborted by Juan Pablo Perez
Sending interrupt signal to process
[Pipeline] }
$ docker stop --time=1 71e57bb2b0090a3bbc9e75d8ae4654294ba87466c0ce026234b38acc48de9d11
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
java.io.IOException: failed to run ps
	at org.jenkinsci.plugins.docker.workflow.WithContainerStep$Decorator$1.kill(WithContainerStep.java:296)
	at org.jenkinsci.plugins.durabletask.FileMonitoringTask$FileMonitoringController.stop(FileMonitoringTask.java:345)
	at org.jenkinsci.plugins.workflow.steps.durable_task.DurableTaskStep$Execution.stop(DurableTaskStep.java:417)
	at org.jenkinsci.plugins.workflow.cps.CpsThread.stop(CpsThread.java:304)
	at org.jenkinsci.plugins.workflow.cps.CpsFlowExecution$6.onSuccess(CpsFlowExecution.java:1149)
	at org.jenkinsci.plugins.workflow.cps.CpsFlowExecution$6.onSuccess(CpsFlowExecution.java:1138)
	at org.jenkinsci.plugins.workflow.cps.CpsFlowExecution$4$1.run(CpsFlowExecution.java:906)
	at org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService$1.run(CpsVmExecutorService.java:35)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at hudson.remoting.SingleLaneExecutorService$1.run(SingleLaneExecutorService.java:131)
	at jenkins.util.ContextResettingExecutorService$1.run(ContextResettingExecutorService.java:28)
	at jenkins.security.ImpersonatingExecutorService$1.run(ImpersonatingExecutorService.java:59)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
java.io.IOException: Failed to kill container '71e57bb2b0090a3bbc9e75d8ae4654294ba87466c0ce026234b38acc48de9d11'.
	at org.jenkinsci.plugins.docker.workflow.client.DockerClient.stop(DockerClient.java:171)
	at org.jenkinsci.plugins.docker.workflow.WithContainerStep.destroy(WithContainerStep.java:108)
	at org.jenkinsci.plugins.docker.workflow.WithContainerStep.access$400(WithContainerStep.java:75)
	at org.jenkinsci.plugins.docker.workflow.WithContainerStep$Callback.finished(WithContainerStep.java:346)
	at org.jenkinsci.plugins.workflow.steps.BodyExecutionCallback$TailCall.onFailure(BodyExecutionCallback.java:128)
	at org.jenkinsci.plugins.workflow.cps.CpsBodyExecution$FailureAdapter.receive(CpsBodyExecution.java:349)
	at com.cloudbees.groovy.cps.impl.ThrowBlock$1.receive(ThrowBlock.java:68)
	at com.cloudbees.groovy.cps.impl.ConstantBlock.eval(ConstantBlock.java:21)
	at com.cloudbees.groovy.cps.Next.step(Next.java:83)
	at com.cloudbees.groovy.cps.Continuable$1.call(Continuable.java:174)
	at com.cloudbees.groovy.cps.Continuable$1.call(Continuable.java:163)
	at org.codehaus.groovy.runtime.GroovyCategorySupport$ThreadCategoryInfo.use(GroovyCategorySupport.java:129)
	at org.codehaus.groovy.runtime.GroovyCategorySupport.use(GroovyCategorySupport.java:268)
	at com.cloudbees.groovy.cps.Continuable.run0(Continuable.java:163)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.access$101(SandboxContinuable.java:34)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.lambda$run0$0(SandboxContinuable.java:59)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.GroovySandbox.runInSandbox(GroovySandbox.java:121)
	at org.jenkinsci.plugins.workflow.cps.SandboxContinuable.run0(SandboxContinuable.java:58)
	at org.jenkinsci.plugins.workflow.cps.CpsThread.runNextChunk(CpsThread.java:182)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.run(CpsThreadGroup.java:332)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.access$200(CpsThreadGroup.java:83)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:244)
	at org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:232)
	at org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService$2.call(CpsVmExecutorService.java:64)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at hudson.remoting.SingleLaneExecutorService$1.run(SingleLaneExecutorService.java:131)
	at jenkins.util.ContextResettingExecutorService$1.run(ContextResettingExecutorService.java:28)
	at jenkins.security.ImpersonatingExecutorService$1.run(ImpersonatingExecutorService.java:59)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Finished: ABORTED
```

- Runnig the pipeline again

```
Console Output
Started by user Juan Pablo Perez
Obtained sonarqube/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonarqube
[Pipeline] {
[Pipeline] sh
+ docker pull gradle:jdk8
jdk8: Pulling from library/gradle
Digest: sha256:a4cb4598c290aa4afe7aae9f2b9b30a17e8e9be95f110db1583196407df2beab
Status: Image is up to date for gradle:jdk8
[Pipeline] stage
[Pipeline] { (prep)
[Pipeline] git
No credentials specified
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/peelmicro/gs-gradle.git # timeout=10
Fetching upstream changes from https://github.com/peelmicro/gs-gradle.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/peelmicro/gs-gradle.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
Commit message: "Change image because it seems the alpine one is not working"
 > git rev-list --no-walk 22a4e2fbd24d9a6f5adc2b3ea7f8fe156d6e7b70 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (build)
[Pipeline] sh
+ docker inspect -f . gradle:jdk8
.
[Pipeline] withDockerContainer
Jenkins seems to be running inside container b4b884bd694bca45db243b1e4a3fab6d24ce1706ce629637cf1fded6545b1930
$ docker run -t -d -u 0:999 -v /root/.gradle:/home/gradle/.gradle -w /var/jenkins_home/workspace/sonarqube --volumes-from b4b884bd694bca45db243b1e4a3fab6d24ce1706ce629637cf1fded6545b1930 -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** gradle:jdk8 cat
$ docker top bf738e27ee939f4acd6609224e893a099b2854530e43727d5a04bd4171071f75 -eo pid,comm
[Pipeline] {
[Pipeline] sh
+ cd complete
+ /opt/gradle/bin/gradle build
Starting a Gradle Daemon, 1 incompatible and 2 stopped Daemons could not be reused, use --status for details
> Task :compileJava UP-TO-DATE
> Task :processResources NO-SOURCE
> Task :classes UP-TO-DATE
> Task :jar UP-TO-DATE
> Task :startScripts UP-TO-DATE
> Task :distTar UP-TO-DATE
> Task :distZip UP-TO-DATE
> Task :assemble UP-TO-DATE
> Task :compileTestJava UP-TO-DATE
> Task :processTestResources NO-SOURCE
> Task :testClasses UP-TO-DATE
> Task :test UP-TO-DATE
> Task :check UP-TO-DATE
> Task :build UP-TO-DATE

BUILD SUCCESSFUL in 20s
7 actionable tasks: 7 up-to-date
[Pipeline] }
$ docker stop --time=1 bf738e27ee939f4acd6609224e893a099b2854530e43727d5a04bd4171071f75
$ docker rm -f bf738e27ee939f4acd6609224e893a099b2854530e43727d5a04bd4171071f75
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (sonar-scanner)
[Pipeline] tool
[Pipeline] withCredentials
[Pipeline] {
[Pipeline] sh
+ /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonar/bin/sonar-scanner -e -Dsonar.host.url=http://sonarqube:9000 -Dsonar.login=**** -Dsonar.projectName=gs-gradle -Dsonar.projectVersion=10 -Dsonar.projectKey=GS -Dsonar.sources=complete/src/main/ -Dsonar.tests=complete/src/test/ -Dsonar.language=java
INFO: Option -e/--errors is no longer supported and will be ignored
INFO: Scanner configuration file: /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonar/conf/sonar-scanner.properties
INFO: Project root configuration file: NONE
INFO: SonarQube Scanner 3.3.0.1492
INFO: Java 1.8.0_181 Oracle Corporation (64-bit)
INFO: Linux 4.15.0-45-generic amd64
INFO: User cache: /root/.sonar/cache
ERROR: SonarQube server [http://sonarqube:9000] can not be reached
INFO: ------------------------------------------------------------------------
INFO: EXECUTION FAILURE
INFO: ------------------------------------------------------------------------
INFO: Total time: 1.134s
INFO: Final Memory: 3M/31M
INFO: ------------------------------------------------------------------------
ERROR: Error during SonarQube Scanner execution
ERROR: Unable to execute SonarQube
ERROR: Caused by: Fail to get bootstrap index from server
ERROR: Caused by: Failed to connect to sonarqube/172.18.0.4:9000
ERROR: Caused by: Connection refused (Connection refused)
ERROR:
ERROR: Re-run SonarQube Scanner using the -X switch to enable full debug logging.
[Pipeline] }
[Pipeline] // withCredentials
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE
```

- Change the image to `gradle:jdk8`

> /sonarqube/Jenkinsfile

```groovy
node {
    def myGradleContainer = docker.image('gradle:jdk8')
    myGradleContainer.pull()

    stage('prep') {
        git url: 'https://github.com/peelmicro/gs-gradle.git'
    }

    stage('build') {
      myGradleContainer.inside("-v ${env.HOME}/.gradle:/home/gradle/.gradle") {
        sh 'cd complete && /opt/gradle/bin/gradle build'
      }
    }

    stage('sonar-scanner') {
      def sonarqubeScannerHome = tool name: 'sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      withCredentials([string(credentialsId: 'sonar', variable: 'sonarLogin')]) {
        sh "${sonarqubeScannerHome}/bin/sonar-scanner -e -Dsonar.host.url=http://68.183.44.204:9000 -Dsonar.login=${sonarLogin} -Dsonar.projectName=gs-gradle -Dsonar.projectVersion=${env.BUILD_NUMBER} -Dsonar.projectKey=GS -Dsonar.sources=complete/src/main/ -Dsonar.tests=complete/src/test/ -Dsonar.language=java"
      }
    }
}
```

- SonarQube stops because of a memory problem according to `https://stackoverflow.com/a/49096013/1059286`

It is memory problem. We experienced that kind of problems when we run Sonar as container and we try to limit maximum memory available for Sonar container below 2GB or RAM.

The Sonar runs under the hood Elasticsearch which requires a lot of memory so in this case I suggest to assign more that 2GB for Sonar.

You could also try to limit memory by ES_JAVA_OPTS below 2GB (if you have limited memory server) but when I've tried to play with this option Sonar started sucessfully but after some time and with some traffic problem returns and container stopped.

So the desciption on the ticket mentioned above that this is memory issue is correct: https://github.com/10up/wp-local-docker/issues/6

So I I think in this situation the easiest way to deal with the problem - just increase the memory for your Sonar server (container).

```bash
2019.02.16 20:02:15 WARN  app[][o.s.a.p.AbstractProcessMonitor] Process exited with exit value [es]: 137
sonarqube_1  | 2019.02.16 20:02:15 INFO  app[][o.s.a.SchedulerImpl] Process [es] is stopped
sonarqube_1  | 2019.02.16 20:02:15 INFO  ce[][o.s.p.StopWatcher] Stopping process
sonarqube_1  | 2019.02.16 20:02:15 INFO  ce[][o.s.ce.app.CeServer] Compute Engine is stopping...
sonarqube_1  | 2019.02.16 20:02:15 INFO  ce[][o.s.c.t.CeProcessingSchedulerImpl] Waiting for workers to finish in-progress tasks
sonarqube_1  | 2019.02.16 20:02:15 WARN  app[][o.e.t.n.Netty4Transport] write and flush on the network layer failed (channel: [id: 0xc7c6193e, L:0.0.0.0/0.0.0.0:51126 ! R:/127.0.0.1:9001])
sonarqube_1  | java.io.IOException: Connection reset by peer
sonarqube_1  |  at sun.nio.ch.FileDispatcherImpl.write0(Native Method)
sonarqube_1  |  at sun.nio.ch.SocketDispatcher.write(SocketDispatcher.java:47)
sonarqube_1  |  at sun.nio.ch.IOUtil.writeFromNativeBuffer(IOUtil.java:93)
sonarqube_1  |  at sun.nio.ch.IOUtil.write(IOUtil.java:51)
sonarqube_1  |  at sun.nio.ch.SocketChannelImpl.write(SocketChannelImpl.java:471)
sonarqube_1  |  at io.netty.channel.socket.nio.NioSocketChannel.doWrite(NioSocketChannel.java:417)
sonarqube_1  |  at io.netty.channel.AbstractChannel$AbstractUnsafe.flush0(AbstractChannel.java:856)
sonarqube_1  |  at io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.flush0(AbstractNioChannel.java:362)
sonarqube_1  |  at io.netty.channel.AbstractChannel$AbstractUnsafe.flush(AbstractChannel.java:823)
sonarqube_1  |  at io.netty.channel.DefaultChannelPipeline$HeadContext.flush(DefaultChannelPipeline.java:1296)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.invokeFlush0(AbstractChannelHandlerContext.java:776)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.invokeFlush(AbstractChannelHandlerContext.java:768)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.flush(AbstractChannelHandlerContext.java:749)
sonarqube_1  |  at io.netty.handler.logging.LoggingHandler.flush(LoggingHandler.java:265)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.invokeFlush0(AbstractChannelHandlerContext.java:776)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.invokeFlush(AbstractChannelHandlerContext.java:768)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.flush(AbstractChannelHandlerContext.java:749)
sonarqube_1  |  at io.netty.channel.ChannelDuplexHandler.flush(ChannelDuplexHandler.java:117)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.invokeFlush0(AbstractChannelHandlerContext.java:776)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.invokeFlush(AbstractChannelHandlerContext.java:768)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext.access$1500(AbstractChannelHandlerContext.java:38)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext$WriteAndFlushTask.write(AbstractChannelHandlerContext.java:1137)
sonarqube_1  |  at io.netty.channel.AbstractChannelHandlerContext$AbstractWriteTask.run(AbstractChannelHandlerContext.java:1078)
sonarqube_1  |  at io.netty.util.concurrent.AbstractEventExecutor.safeExecute(AbstractEventExecutor.java:163)
sonarqube_1  |  at io.netty.util.concurrent.SingleThreadEventExecutor.runAllTasks(SingleThreadEventExecutor.java:403)
sonarqube_1  |  at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:462)
sonarqube_1  |  at io.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:858)
sonarqube_1  |  at java.lang.Thread.run(Thread.java:748)
```

- It cannot be executed

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines28.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines30.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSonarQubeIntegrationWithinJenkinsPipelines31.png)

## 8. Advanced Jenkins usage

### 38. Introduction to Jenkins Slaves

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsSlaves.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsSlaves2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsSlaves3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/IntroductionToJenkinsSlaves4.png)

### 39. Jenkins Slaves benefits and best practices

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsSlavesBenefitsAndBestPractices.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsSlavesBenefitsAndBestPractices2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/JenkinsSlavesBenefitsAndBestPractices3.png)

### 40. Demo - Jenkins slave using SSH

- We need to create another `Droplet` in [Cloud Digital Ocean](http://cloud.digitalocean.com/droplets)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0b.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0c.png)

- Insert the script from `jenkins-course/jenkins-slave/digitalocean_userdata.sh` after clicking the `[X] User Data` checkbox.

```bash
#!/bin/bash
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
apt-get update
apt-get install -y docker-engine
systemctl enable docker
mkdir -p /var/jenkins_home/.ssh
cp /root/.ssh/authorized_keys /var/jenkins_home/.ssh/authorized_keys
chmod 700 /var/jenkins_home/.ssh
chmod 600 /var/jenkins_home/.ssh/authorized_keys
chown -R 1000:1000 /var/jenkins_home
docker run -p 2222:22 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --restart always -d peelmicro/jenkins-slave
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0e.png)

- Create a new SSH using the first Droplet created on Digital Ocean (No passphrase will be used)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keygen -f myKey
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in myKey.
Your public key has been saved in myKey.pub.
The key fingerprint is:
SHA256:grDmye9VsmKCYK6ZOovqPOoamvrMKNUYYSZLcl4PA5I root@ubuntu-s-1vcpu-2gb-lon1-01
The key's randomart image is:
+---[RSA 2048]----+
|....             |
|Eo= +            |
|oB.o +           |
|. oo ..          |
|..o+. o S        |
|+=o..  =         |
|oo= o o          |
|BX + o           |
|^B=.o            |
+----[SHA256]-----+
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cat myKey.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDhyVW4KepTpV98BAdGb3buMMWMoPxIrGYncnwX9rE5dXtpgptFdk/oa2WJwEkUSohOMqzTKFGNeKY+J6pQ3GgcLzweqq4hIFe3NQNPs7pL7qMojT6rAa5S2AWUONVuu/40qjHVafwwGb5SlFItNmhLCFsoAS0KyJyE03KZV1y7O9hYBIbBsrXb/BkOEI5ys4fDZo3P6WXY3lcZSYjiRj2e9K2/NTE5A1Pf9tbl4W3vmrJ5FVV94MoHztIS/Gvbqk1xAezv1FJxfQb9TmEJJ7Qw3JLsMNLOssb3New5YQHGPz5FeYDn6vR1bjAj6GTfVnnfIOBTIeh3TQMDLRarOmCv root@ubuntu-s-1vcpu-2gb-lon1-01
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0f.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0g.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0h.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0i.png)

- The new IP adress is `46.101.103.252`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh0j.png)

- We need to add a new `node` using the `Manage Node` tool
  ![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh3.png)

- Create the `builder` node checking the `[x] Permanent Agent`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh4.png)

- put `2` for the `# of executors`, `/var/jenkins_home` for the `Remote root directory` and the `builder` value for `Labels`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh5.png)

- Add the Host IP and new credentials.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh5.png)

- Copy the private key from the one generated before.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cat myKey
-----BEGIN RSA PRIVATE KEY-----
MIIEpgIBAAKCAQEA4clVuCnqU6VffAQHRm927jDFjKD8SKxmJ3J8F/axOXV7aYKb
RXZP6GtlicBJFEqITjKs0yhRjXimPieqUNxoHC88HqquISBXtzUDT7O6S+6jKI0+
qwGuUtgFlDjVbrv+NKox1Wn8MBm+UpRSLTZoSwhbKAEtCsichNNymVdcuzvYWASG
wbK12/wZDhCOcrOHw2aNz+ll2N5XGUmI4kY9nvStvzUxOQNT3/bW5eFt75qyeRVV
feDKB87SEvxr26pNcQHs79RScX0G/U5hCSe0MNyS7DDSzrLG9zXsOWEBxj8+RXmA
5+r0dW4wI+hk31Z53yDgUyHod00DAy0WqzpgrwIDAQABAoIBAQDHIZKAQjdwXkHA
Vq0z6cqyeEFCrhjS33mZANeBKwlS69JUU+QtdxMyoMWEoBnT04gzr23NLZn/c5Dq
8IC9oCYR9XbIdS/t92BlLFQnTxPXNDih4zCKEYl1dyA0gYt7hkHEoPYiir7ojUvV
+Qog5gNFabE7rw3SnOuuGe7QXsRiO9Tm1AWFf1MUfhMsiwV1/yKxN8u/AbIGJ9Z7
yJDP9Zf4axavxsEwcgcl35sflZfsx7o7dkvttjsyOO0RooP04ZPAF7NTgQQ1r0qS
zTcek/3TlzrlWgySugTJl8s2b5qsHejhfLT1uHv7wzoYbpuUlaCjp+0jUzUvY0J/
McY+OJiBAoGBAP57jOky5IPTe/8l86IBYFJfIWAcwdDlg+Dp5OAbN3FVUc2wEZ/f
sjr3KmQ0Yfrl+ICu8Kx8N9R4Ps0iaPssuw2aE+tiAlqaNQr8czFIDqUKKac4qNd1w
PM00RdzD3xdPL6yXY2aV+jam9srB/ywFQk61biE7qFyPgpe4v83lwBKZAoGBAOMh
+1WWb/pQ/X+WIU7wynitLemst5xJKaaI1EBbB/W3kd8gDTSgIdUFZe/zb0JFn1Qu
M8rlzOtRm7cVSTJp0AKEOwI+UyUTld9pogKjgluBt8MtrFxQk9jvWY6iWkMQuqaN
baDGmHixu+6Yr8Sni/Fd40kWRL/xvsn0oDZPomKHAoGBAJlEci61PxoCUmjuQ5jr
+UZDE0feqgCVauMYG4e5/J9egoE+LK88PAz1deuZ/PTucseWFU/dFIb70N8dfVjt
zXO+XZHtiE5RP8T4pDo1CEkSMf1AQObYRVZVyEnZElDomU76cpyDcYpe7r5ZLsUl
ebUL4oNTeegdasrUM3jfidnpAoGBAIT6xk3r0A+8D079tO6k58YTjof7SVzFMQ+B
mNM8+MISAeOivliLUIOJr4729bLVVF1S15v5QyqbExHz8nEDpndyt6Gun7tbZinx
jJsC5DVzEwXA3eMGgilGqSZrQ3F0f/M3ZnH1FBvF44Pj/TSj67kbAREvanz+qndP
M+XYZfhNAoGBAKinheWqTyPaKjLQZZ0f7IFvjveYQ/42pPlD609cFsKyjYAj7aeX
UuT7uLIxfWmDcK/ibJIB+ryp2m6gYPyaDsv2G6Lx7ccc5Kuld16WiSxKoTDwg5js
BefuEuw+YDVHg+vPJOIVo+R09QhxgOGtpUhUWetQK9a9dGkUNGyZ688u
-----END RSA PRIVATE KEY-----
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh8.png)

- Change the port to `2222`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh10.png)

```
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 8 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 7 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 6 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 5 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 4 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 3 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 2 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 1 more retries left.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)".
java.io.IOException: There was a problem while connecting to 46.101.103.252:2222
	at com.trilead.ssh2.Connection.connect(Connection.java:834)
	at hudson.plugins.sshslaves.SSHLauncher.openConnection(SSHLauncher.java:1175)
	at hudson.plugins.sshslaves.SSHLauncher$2.call(SSHLauncher.java:846)
	at hudson.plugins.sshslaves.SSHLauncher$2.call(SSHLauncher.java:833)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: java.net.ConnectException: Connection refused (Connection refused)
	at java.net.PlainSocketImpl.socketConnect(Native Method)
	at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)
	at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)
	at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)
	at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
	at java.net.Socket.connect(Socket.java:589)
	at com.trilead.ssh2.transport.TransportManager.establishConnection(TransportManager.java:367)
	at com.trilead.ssh2.transport.TransportManager.initialize(TransportManager.java:480)
	at com.trilead.ssh2.Connection.connect(Connection.java:774)
	... 7 more
[02/17/19 07:36:13] Launch failed - cleaning up connection
[02/17/19 07:36:13] [SSH] Connection closed.
SSHLauncher{host='46.101.103.252', port=2222, credentialsId='mykey-tmp', jvmOptions='', javaPath='', prefixStartSlaveCmd='', suffixStartSlaveCmd='', launchTimeoutSeconds=210, maxNumRetries=10, retryWaitTime=15, sshHostKeyVerificationStrategy=hudson.plugins.sshslaves.verifiers.KnownHostsFileKeyVerificationStrategy, tcpNoDelay=true, trackCredentials=true}
[02/17/19 07:36:13] [SSH] Opening SSH connection to 46.101.103.252:2222.
Connection refused (Connection refused)
SSH Connection failed with IOException: "Connection refused (Connection refused)", retrying in 15 seconds.  There are 10 more retries left.
```

- Accessing the new Droplet from the main Droplet

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh root@46.101.103.252
The authenticity of host '46.101.103.252 (46.101.103.252)' can't be established.
ECDSA key fingerprint is SHA256:uGZMHoHWe/VBPTSDgHnV6fAMJfuj3WjVTkaqgOZHkRE.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '46.101.103.252' (ECDSA) to the list of known hosts.
root@46.101.103.252: Permission denied (publickey).
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey root@46.101.103.252
Welcome to Ubuntu 18.04.2 LTS (GNU/Linux 4.15.0-45-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sun Feb 17 10:47:30 UTC 2019

  System load:  0.0               Processes:              83
  Usage of /:   2.6% of 48.29GB   Users logged in:        0
  Memory usage: 7%                IP address for eth0:    46.101.103.252
  Swap usage:   0%                IP address for docker0: 172.17.0.1

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

0 packages can be updated.
0 updates are security updates.



The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

root@ubuntu-s-1vcpu-2gb-fra1-01:~#
```

- We can see the errors from the script that has been executed when the droplet has been created in `/var/log/cloud-init-output.log`

```bash
.
.
Cloud-init v. 18.4-0ubuntu1~18.04.1 running 'modules:config' at Sun, 17 Feb 2019 07:25:37 +0000. Up 13.75 seconds.
Warning: apt-key output should not be parsed (stdout is not a terminal)
Executing: /tmp/apt-key-gpghome.1X6w15MlZs/gpg.1.sh --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
gpg: key F76221572C52609D: 7 signatures not checked due to missing keys
gpg: key F76221572C52609D: public key "Docker Release Tool (releasedocker) <docker@docker.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
Get:2 https://apt.dockerproject.org/repo ubuntu-xenial InRelease [48.7 kB]
Get:4 http://security.ubuntu.com/ubuntu bionic-security/main Sources [76.0 kB]
Hit:3 http://ams2.mirrors.digitalocean.com/ubuntu bionic InRelease
Get:5 http://security.ubuntu.com/ubuntu bionic-security/universe Sources [35.1 kB]
Get:7 http://security.ubuntu.com/ubuntu bionic-security/multiverse Sources [2308 B]
Get:8 http://security.ubuntu.com/ubuntu bionic-security/main amd64 Packages [268 kB]
Get:6 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:9 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages [126 kB]
Get:10 http://security.ubuntu.com/ubuntu bionic-security/universe Translation-en [71.2 kB]
Get:11 http://security.ubuntu.com/ubuntu bionic-security/multiverse amd64 Packages [3324 B]
Get:13 http://security.ubuntu.com/ubuntu bionic-security/multiverse Translation-en [1848 B]
Get:12 http://ams2.mirrors.digitalocean.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:14 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages [4177 B]
Get:15 http://ams2.mirrors.digitalocean.com/ubuntu bionic/restricted Sources [5324 B]
Get:16 http://ams2.mirrors.digitalocean.com/ubuntu bionic/main Sources [829 kB]
Get:17 http://ams2.mirrors.digitalocean.com/ubuntu bionic/multiverse Sources [181 kB]
Get:18 http://ams2.mirrors.digitalocean.com/ubuntu bionic/universe Sources [9051 kB]
Get:19 http://ams2.mirrors.digitalocean.com/ubuntu bionic/universe amd64 Packages [8570 kB]
Get:20 http://ams2.mirrors.digitalocean.com/ubuntu bionic/universe Translation-en [4941 kB]
Get:21 http://ams2.mirrors.digitalocean.com/ubuntu bionic/multiverse amd64 Packages [151 kB]
Get:22 http://ams2.mirrors.digitalocean.com/ubuntu bionic/multiverse Translation-en [108 kB]
Get:23 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/restricted Sources [2060 B]
Get:24 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/main Sources [246 kB]
Get:25 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/universe Sources [129 kB]
Get:26 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/multiverse Sources [4192 B]
Get:27 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 Packages [523 kB]
Get:28 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/restricted amd64 Packages [6996 B]
Get:29 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 Packages [731 kB]
Get:30 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/universe Translation-en [186 kB]
Get:31 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/multiverse amd64 Packages [6384 B]
Get:32 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates/multiverse Translation-en [3452 B]
Get:33 http://ams2.mirrors.digitalocean.com/ubuntu bionic-backports/universe Sources [2068 B]
Get:34 http://ams2.mirrors.digitalocean.com/ubuntu bionic-backports/universe amd64 Packages [3472 B]
Get:35 http://ams2.mirrors.digitalocean.com/ubuntu bionic-backports/universe Translation-en [1604 B]
Fetched 26.6 MB in 8s (3400 kB/s)
Reading package lists...
Hit:1 https://apt.dockerproject.org/repo ubuntu-xenial InRelease
Hit:2 http://security.ubuntu.com/ubuntu bionic-security InRelease
Hit:3 http://ams2.mirrors.digitalocean.com/ubuntu bionic InRelease
Hit:4 http://ams2.mirrors.digitalocean.com/ubuntu bionic-updates InRelease
Hit:5 http://ams2.mirrors.digitalocean.com/ubuntu bionic-backports InRelease
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  aufs-tools cgroupfs-mount libltdl7
The following NEW packages will be installed:
  aufs-tools cgroupfs-mount docker-engine libltdl7
0 upgraded, 4 newly installed, 0 to remove and 0 not upgraded.
Need to get 19.4 MB of archives.
After this operation, 93.4 MB of additional disk space will be used.
Get:1 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 docker-engine amd64 17.05.0~ce-0~ubuntu-xenial [19.3 MB]
Get:2 http://ams2.mirrors.digitalocean.com/ubuntu bionic/universe amd64 aufs-tools amd64 1:4.9+20170918-1ubuntu1 [104 kB]
Get:3 http://ams2.mirrors.digitalocean.com/ubuntu bionic/universe amd64 cgroupfs-mount all 1.4 [6320 B]
Get:4 http://ams2.mirrors.digitalocean.com/ubuntu bionic/main amd64 libltdl7 amd64 2.4.6-2 [38.8 kB]
dpkg-preconfigure: unable to re-open stdin: No such file or directory
Fetched 19.4 MB in 1s (29.4 MB/s)
Selecting previously unselected package aufs-tools.
(Reading database ... 60071 files and directories currently installed.)
Preparing to unpack .../aufs-tools_1%3a4.9+20170918-1ubuntu1_amd64.deb ...
Unpacking aufs-tools (1:4.9+20170918-1ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../cgroupfs-mount_1.4_all.deb ...
Unpacking cgroupfs-mount (1.4) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../libltdl7_2.4.6-2_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-2) ...
Selecting previously unselected package docker-engine.
Preparing to unpack .../docker-engine_17.05.0~ce-0~ubuntu-xenial_amd64.deb ...
Unpacking docker-engine (17.05.0~ce-0~ubuntu-xenial) ...
Setting up aufs-tools (1:4.9+20170918-1ubuntu1) ...
Processing triggers for ureadahead (0.100.0-20) ...
Setting up cgroupfs-mount (1.4) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for systemd (237-3ubuntu10.12) ...
Setting up libltdl7:amd64 (2.4.6-2) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up docker-engine (17.05.0~ce-0~ubuntu-xenial) ...
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service ? /lib/systemd/system/docker.service.
Created symlink /etc/systemd/system/sockets.target.wants/docker.socket ? /lib/systemd/system/docker.socket.
Processing triggers for ureadahead (0.100.0-20) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for systemd (237-3ubuntu10.12) ...
Synchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable docker
Unable to find image 'peelmicro/jenkins-slave:latest' locally
docker: Error response from daemon: repository peelmicro/jenkins-slave not found: does not exist or no pull access.
See 'docker run --help'.
Cloud-init v. 18.4-0ubuntu1~18.04.1 running 'modules:final' at Sun, 17 Feb 2019 07:25:38 +0000. Up 15.05 seconds.
2019-02-17 07:26:12,614 - util.py[WARNING]: Failed running /var/lib/cloud/instance/scripts/part-001 [125]
2019-02-17 07:26:12,621 - cc_scripts_user.py[WARNING]: Failed to run module scripts-user (scripts in /var/lib/cloud/instance/scripts)
2019-02-17 07:26:12,622 - util.py[WARNING]: Running module scripts-user (<module 'cloudinit.config.cc_scripts_user' from '/usr/lib/python3/dist-packages/cloudinit/config/cc_scripts_user.py'>) failed
Cloud-init v. 18.4-0ubuntu1~18.04.1 finished at Sun, 17 Feb 2019 07:26:12 +0000. Datasource DataSourceDigitalOcean.  Up 48.82 seconds
```

::: warning
The problem was to change the original `wardviaene/jenkins-slave` image by `peelmicro/jenkins-slave` because this one doesn't exist in the `Docker Hub`
:::

- The last line from the initial script must be executed again from the new `Droplet`.

```bash
root@ubuntu-s-1vcpu-2gb-fra1-01:~# docker run -p 2222:22 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --restart always -d wardviaene/jenkins-slave
Unable to find image 'wardviaene/jenkins-slave:latest' locally
latest: Pulling from wardviaene/jenkins-slave
10a267c67f42: Pull complete
fb5937da9414: Pull complete
9021b2326a1e: Pull complete
8c6c40e9ec4f: Pull complete
7a63e1725461: Pull complete
79e8ed83f43a: Pull complete
161cbb85a481: Pull complete
a479609da9c8: Pull complete
e32f81724ea4: Pull complete
973cb2368ae1: Pull complete
65b9cba211c2: Pull complete
f65307656318: Pull complete
fb7662c660ea: Pull complete
Digest: sha256:616e7df470b8bd370b9fe759d7154ec0ea989654a96058391e3731f9a001f12b
Status: Downloaded newer image for wardviaene/jenkins-slave:latest
e00a04c90fa73b63443f097d3394855c15086268e21cf61bfb04604dfdbed15c
```

- Relaunch the agent

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh11.png)

```
SSHLauncher{host='46.101.103.252', port=2222, credentialsId='mykey-tmp', jvmOptions='', javaPath='', prefixStartSlaveCmd='', suffixStartSlaveCmd='', launchTimeoutSeconds=210, maxNumRetries=10, retryWaitTime=15, sshHostKeyVerificationStrategy=hudson.plugins.sshslaves.verifiers.KnownHostsFileKeyVerificationStrategy, tcpNoDelay=true, trackCredentials=true}
[02/17/19 11:17:48] [SSH] Opening SSH connection to 46.101.103.252:2222.
/var/jenkins_home/.ssh/known_hosts [SSH] No Known Hosts file was found at /var/jenkins_home/.ssh/known_hosts. Please ensure one is created at this path and that Jenkins can read it.
Key exchange was not finished, connection is closed.
java.io.IOException: There was a problem while connecting to 46.101.103.252:2222
	at com.trilead.ssh2.Connection.connect(Connection.java:834)
	at hudson.plugins.sshslaves.SSHLauncher.openConnection(SSHLauncher.java:1175)
	at hudson.plugins.sshslaves.SSHLauncher$2.call(SSHLauncher.java:846)
	at hudson.plugins.sshslaves.SSHLauncher$2.call(SSHLauncher.java:833)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: java.io.IOException: Key exchange was not finished, connection is closed.
	at com.trilead.ssh2.transport.KexManager.getOrWaitForConnectionInfo(KexManager.java:95)
	at com.trilead.ssh2.transport.TransportManager.getConnectionInfo(TransportManager.java:237)
	at com.trilead.ssh2.Connection.connect(Connection.java:786)
	... 7 more
Caused by: java.io.IOException: The server hostkey was not accepted by the verifier callback
	at com.trilead.ssh2.transport.KexManager.handleMessage(KexManager.java:548)
	at com.trilead.ssh2.transport.TransportManager.receiveLoop(TransportManager.java:790)
	at com.trilead.ssh2.transport.TransportManager$1.run(TransportManager.java:502)
	... 1 more
[02/17/19 11:17:48] Launch failed - cleaning up connection
[02/17/19 11:17:48] [SSH] Connection closed.
```

- Generate the hosts file

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan -p 2222 46.101.103.252
# 46.101.103.252:2222 SSH-2.0-OpenSSH_6.7p1 Debian-5+deb8u3
[46.101.103.252]:2222 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsdrY8pDmzieiyX2PjI9rGwfMq3Jn0xelfi6YtRVIQQzGwsZ04OhlhjYZ6L9tyYOIZGvavZ+60wcXg/2KHZS86RZj6TZACLL14OGSZr70hc1iAqG5DtJQrfUUpZp0dOQIntg76DRzJMlf5zlqDAyIVSGtRNBNYS9XfuffpWBkfU8TD6R+cyfEvepgYm6JQEXBkD+BzZFlKRjCwWL4f2GvWXkhH8dE9gUaVRHWYB/UBsHe07hJ2gSGzXP3ArkDBZyA9gi7zTE3TWCO3JTJjcRR0WbQ+Yn3sVFO8DtSFumnrD9iv+fK8vE1UBMnJLYfLl6OnoHezl56ZfKxiYd6cVQ/n
# 46.101.103.252:2222 SSH-2.0-OpenSSH_6.7p1 Debian-5+deb8u3
[46.101.103.252]:2222 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBF0bCQM0Qh2X2HZB0HIq8ZzMNLJmPxSD2u3Zn6gNby0eCBH3x7jNK+4OX96FTawAEdz8c/B91aLKZwWIZhvxcrA=
# 46.101.103.252:2222 SSH-2.0-OpenSSH_6.7p1 Debian-5+deb8u3
[46.101.103.252]:2222 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJzMjStfO62YlebAK0nRodkl0xUlCx8cgjbbSGXROZa3
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan -p 2222 46.101.103.252 >> /var/jenkins_home/.ssh/known_hosts
-bash: /var/jenkins_home/.ssh/known_hosts: No such file or directory
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls /var/jenkins_home/.ssh
ls: cannot access '/var/jenkins_home/.ssh': No such file or directory
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mkdir /var/jenkins_home/.ssh
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan -p 2222 46.101.103.252 >> /var/jenkins_home/.ssh/known_hosts
# 46.101.103.252:2222 SSH-2.0-OpenSSH_6.7p1 Debian-5+deb8u3
# 46.101.103.252:2222 SSH-2.0-OpenSSH_6.7p1 Debian-5+deb8u3
# 46.101.103.252:2222 SSH-2.0-OpenSSH_6.7p1 Debian-5+deb8u3
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh12.png)

```
Warning: no key algorithms provided; JENKINS-42959 disabled
SSHLauncher{host='46.101.103.252', port=2222, credentialsId='mykey-tmp', jvmOptions='', javaPath='', prefixStartSlaveCmd='', suffixStartSlaveCmd='', launchTimeoutSeconds=210, maxNumRetries=10, retryWaitTime=15, sshHostKeyVerificationStrategy=hudson.plugins.sshslaves.verifiers.KnownHostsFileKeyVerificationStrategy, tcpNoDelay=true, trackCredentials=true}
[02/17/19 11:22:51] [SSH] Opening SSH connection to 46.101.103.252:2222.
[02/17/19 11:22:51] [SSH] SSH host key matches key in Known Hosts file. Connection will be allowed.
[02/17/19 11:22:51] [SSH] Authentication successful.
[02/17/19 11:22:51] [SSH] The remote user's environment is:
BASH=/bin/bash
BASHOPTS=cmdhist:complete_fullquote:extquote:force_fignore:hostcomplete:interactive_comments:progcomp:promptvars:sourcepath
BASH_ALIASES=()
BASH_ARGC=()
BASH_ARGV=()
BASH_CMDS=()
BASH_EXECUTION_STRING=set
BASH_LINENO=()
BASH_SOURCE=()
BASH_VERSINFO=([0]="4" [1]="3" [2]="30" [3]="1" [4]="release" [5]="x86_64-pc-linux-gnu")
BASH_VERSION='4.3.30(1)-release'
DIRSTACK=()
EUID=1000
GROUPS=()
HOME=/var/jenkins_home
HOSTNAME=e00a04c90fa7
HOSTTYPE=x86_64
IFS=$' \t\n'
LOGNAME=jenkins
MACHTYPE=x86_64-pc-linux-gnu
MAIL=/var/mail/jenkins
OPTERR=1
OPTIND=1
OSTYPE=linux-gnu
PATH=/usr/local/bin:/usr/bin:/bin:/usr/games
PIPESTATUS=([0]="0")
PPID=120
PS4='+ '
PWD=/var/jenkins_home
SHELL=/bin/bash
SHELLOPTS=braceexpand:hashall:interactive-comments
SHLVL=1
SSH_CLIENT='68.183.44.204 51830 22'
SSH_CONNECTION='68.183.44.204 51830 172.17.0.2 22'
TERM=dumb
UID=1000
USER=jenkins
_=']'
[02/17/19 11:22:51] [SSH] Checking java version of /var/jenkins_home/jdk/bin/java
Couldn't figure out the Java version of /var/jenkins_home/jdk/bin/java
bash: /var/jenkins_home/jdk/bin/java: No such file or directory

[02/17/19 11:22:51] [SSH] Checking java version of java
[02/17/19 11:22:51] [SSH] java -version returned 1.8.0_131.
[02/17/19 11:22:51] [SSH] Starting sftp client.
[02/17/19 11:22:51] [SSH] Copying latest remoting.jar...
[02/17/19 11:22:52] [SSH] Copied 776,717 bytes.
Expanded the channel window size to 4MB
[02/17/19 11:22:52] [SSH] Starting agent process: cd "/var/jenkins_home" && java  -jar remoting.jar -workDir /var/jenkins_home
Feb 17, 2019 11:22:52 AM org.jenkinsci.remoting.engine.WorkDirManager initializeWorkDir
INFO: Using /var/jenkins_home/remoting as a remoting work directory
Both error and output logs will be printed to /var/jenkins_home/remoting
<===[JENKINS REMOTING CAPACITY]===>channel started
Remoting version: 3.27
This is a Unix agent
Evacuated stdout
Agent successfully connected and online
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh14.png)

- Create the new `slave test` pipeline with the following script.

```groovy
node(label: 'builder') {
    stage('preparation') {
        git ('https://github.com/wardviaene/docker-demo.git')
    }
    stage('build') {
        def myTestContainer = docker.image("node:4.6")
        myTestContainer.pull()
        myTestContainer.inside {
            sh 'npm install'
        }
    }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh17.png)

```
Console Output
Started by user Juan Pablo Perez
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on builder in /var/jenkins_home/workspace/slave test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (preparation)
[Pipeline] git
No credentials specified
Fetching changes from the remote Git repository
Checking out Revision e583f9bd4b2b44620bdff3b92b2054ab89ae8084 (refs/remotes/origin/master)
Commit message: "fix dependency issue"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (build)
 > git rev-parse --is-inside-work-tree # timeout=10
 > git config remote.origin.url https://github.com/wardviaene/docker-demo.git # timeout=10
Fetching upstream changes from https://github.com/wardviaene/docker-demo.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/wardviaene/docker-demo.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
 > git rev-list --no-walk e583f9bd4b2b44620bdff3b92b2054ab89ae8084 # timeout=10
[Pipeline] sh
+ docker pull node:4.6
4.6: Pulling from library/node
386a066cd84a: Pulling fs layer
75ea84187083: Pulling fs layer
88b459c9f665: Pulling fs layer
1e3ee139a577: Pulling fs layer
f78ff7d0315b: Pulling fs layer
f4ba677961ff: Pulling fs layer
21db8c3555aa: Pulling fs layer
1e3ee139a577: Waiting
f78ff7d0315b: Waiting
f4ba677961ff: Waiting
21db8c3555aa: Waiting
386a066cd84a: Verifying Checksum
386a066cd84a: Download complete
88b459c9f665: Verifying Checksum
88b459c9f665: Download complete
f78ff7d0315b: Verifying Checksum
f78ff7d0315b: Download complete
386a066cd84a: Pull complete
f4ba677961ff: Verifying Checksum
f4ba677961ff: Download complete
75ea84187083: Verifying Checksum
75ea84187083: Download complete
75ea84187083: Pull complete
21db8c3555aa: Verifying Checksum
21db8c3555aa: Download complete
1e3ee139a577: Verifying Checksum
1e3ee139a577: Download complete
88b459c9f665: Pull complete
1e3ee139a577: Pull complete
f78ff7d0315b: Pull complete
f4ba677961ff: Pull complete
21db8c3555aa: Pull complete
Digest: sha256:a1cc6d576734c331643f9c4e0e7f572430e8baf9756dc24dab11d87b34bd202e
Status: Downloaded newer image for node:4.6
[Pipeline] sh
+ docker inspect -f . node:4.6
.
[Pipeline] withDockerContainer
builder seems to be running inside container e00a04c90fa73b63443f097d3394855c15086268e21cf61bfb04604dfdbed15c
$ docker run -t -d -u 1000:1000 -w "/var/jenkins_home/workspace/slave test" --volumes-from e00a04c90fa73b63443f097d3394855c15086268e21cf61bfb04604dfdbed15c -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** node:4.6 cat
[Pipeline] {
[Pipeline] sh
+ npm install
$ docker top 2aedbd09608ffd41e7c493058628272d7422f7d1d7262d2f6a18ee6095ceb652 -eo pid,comm
npm info it worked if it ends with ok
npm info using npm@2.15.11
npm info using node@v4.6.2
.
.
.
mysql@2.16.0 node_modules/mysql
��������� safe-buffer@5.1.2
��������� sqlstring@2.3.1
��������� bignumber.js@4.1.0
��������� readable-stream@2.3.6 (process-nextick-args@2.0.0, string_decoder@1.1.1, util-deprecate@1.0.2, core-util-is@1.0.2, isarray@1.0.0)
npm info ok
[Pipeline] }
$ docker stop --time=1 2aedbd09608ffd41e7c493058628272d7422f7d1d7262d2f6a18ee6095ceb652
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingSsh20.png)

### 41. Demo: Jenkins slave using jnlp

- Create the new `builder 2` node.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp4.png)

- Put `/var/jenkins` for `Remote root directory` and `builder2` for `Name` and `Labels`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp6.png)

- Create a new droplet in Digital Ocean.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp13.png)

- Access the new `Droplet`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh -i myKey root@104.248.38.245
The authenticity of host '104.248.38.245 (104.248.38.245)' can't be established.
ECDSA key fingerprint is SHA256:9BRALqOuktF91lKNkAP4q8jNBEdIarI95yFUAOnCUuk.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '104.248.38.245' (ECDSA) to the list of known hosts.
Welcome to Ubuntu 18.04.2 LTS (GNU/Linux 4.15.0-45-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sun Feb 17 12:07:54 UTC 2019

  System load:  0.43              Processes:           83
  Usage of /:   2.0% of 48.29GB   Users logged in:     0
  Memory usage: 5%                IP address for eth0: 104.248.38.245
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

root@ubuntu-s-1vcpu-2gb-fra1-01:~#
```

- Install Java

```bash
root@ubuntu-s-1vcpu-2gb-fra1-01:~# apt-get install openjdk-8-jdk
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package openjdk-8-jdk
```

- We need to install version 11

```bash
root@ubuntu-s-1vcpu-2gb-fra1-01:~# apt-get install openjdk-11-jdk
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  adwaita-icon-theme at-spi2-core ca-certificates-java dconf-gsettings-backend dconf-service fontconfig fontconfig-config fonts-dejavu-core fonts-dejavu-extra glib-networking glib-networking-common glib-networking-services gsettings-desktop-schemas
  gtk-update-icon-cache hicolor-icon-theme humanity-icon-theme java-common libasound2 libasound2-data libatk-bridge2.0-0 libatk-wrapper-java libatk-wrapper-java-jni libatk1.0-0 libatk1.0-data libatspi2.0-0 libavahi-client3 libavahi-common-data libavahi-common3
  libcairo-gobject2 libcairo2 libcolord2 libcroco3 libcups2 libdatrie1 libdconf1 libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libegl-mesa0 libegl1 libepoxy0 libfontconfig1 libfontenc1 libgbm1 libgdk-pixbuf2.0-0 libgdk-pixbuf2.0-bin
  libgdk-pixbuf2.0-common libgif7 libgl1 libgl1-mesa-dri libgl1-mesa-glx libglapi-mesa libglvnd0 libglx-mesa0 libglx0 libgraphite2-3 libgtk-3-0 libgtk-3-bin libgtk-3-common libharfbuzz0b libice-dev libice6 libjbig0 libjpeg-turbo8 libjpeg8 libjson-glib-1.0-0
  libjson-glib-1.0-common liblcms2-2 libllvm7 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 libpciaccess0 libpcsclite1 libpixman-1-0 libproxy1v5 libpthread-stubs0-dev librest-0.7-0 librsvg2-2 librsvg2-common libsensors4 libsm-dev libsm6
  libsoup-gnome2.4-1 libsoup2.4-1 libthai-data libthai0 libtiff5 libwayland-client0 libwayland-cursor0 libwayland-egl1 libwayland-egl1-mesa libwayland-server0 libx11-dev libx11-doc libx11-xcb1 libxau-dev libxaw7 libxcb-dri2-0 libxcb-dri3-0 libxcb-glx0 libxcb-present0
  libxcb-render0 libxcb-shape0 libxcb-shm0 libxcb-sync1 libxcb-xfixes0 libxcb1-dev libxcomposite1 libxcursor1 libxdamage1 libxdmcp-dev libxfixes3 libxft2 libxi6 libxinerama1 libxkbcommon0 libxmu6 libxpm4 libxrandr2 libxrender1 libxshmfence1 libxt-dev libxt6 libxtst6
  libxv1 libxxf86dga1 libxxf86vm1 openjdk-11-jdk-headless openjdk-11-jre openjdk-11-jre-headless ubuntu-mono x11-common x11-utils x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev
Suggested packages:
  default-jre libasound2-plugins alsa-utils colord cups-common gvfs libice-doc liblcms2-utils pcscd librsvg2-bin lm-sensors libsm-doc libxcb-doc libxt-doc openjdk-11-demo openjdk-11-source visualvm libnss-mdns fonts-ipafont-gothic fonts-ipafont-mincho
  fonts-wqy-microhei | fonts-wqy-zenhei fonts-indic mesa-utils
The following NEW packages will be installed:
  adwaita-icon-theme at-spi2-core ca-certificates-java dconf-gsettings-backend dconf-service fontconfig fontconfig-config fonts-dejavu-core fonts-dejavu-extra glib-networking glib-networking-common glib-networking-services gsettings-desktop-schemas
  gtk-update-icon-cache hicolor-icon-theme humanity-icon-theme java-common libasound2 libasound2-data libatk-bridge2.0-0 libatk-wrapper-java libatk-wrapper-java-jni libatk1.0-0 libatk1.0-data libatspi2.0-0 libavahi-client3 libavahi-common-data libavahi-common3
  libcairo-gobject2 libcairo2 libcolord2 libcroco3 libcups2 libdatrie1 libdconf1 libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libegl-mesa0 libegl1 libepoxy0 libfontconfig1 libfontenc1 libgbm1 libgdk-pixbuf2.0-0 libgdk-pixbuf2.0-bin
  libgdk-pixbuf2.0-common libgif7 libgl1 libgl1-mesa-dri libgl1-mesa-glx libglapi-mesa libglvnd0 libglx-mesa0 libglx0 libgraphite2-3 libgtk-3-0 libgtk-3-bin libgtk-3-common libharfbuzz0b libice-dev libice6 libjbig0 libjpeg-turbo8 libjpeg8 libjson-glib-1.0-0
  libjson-glib-1.0-common liblcms2-2 libllvm7 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 libpciaccess0 libpcsclite1 libpixman-1-0 libproxy1v5 libpthread-stubs0-dev librest-0.7-0 librsvg2-2 librsvg2-common libsensors4 libsm-dev libsm6
  libsoup-gnome2.4-1 libsoup2.4-1 libthai-data libthai0 libtiff5 libwayland-client0 libwayland-cursor0 libwayland-egl1 libwayland-egl1-mesa libwayland-server0 libx11-dev libx11-doc libx11-xcb1 libxau-dev libxaw7 libxcb-dri2-0 libxcb-dri3-0 libxcb-glx0 libxcb-present0
  libxcb-render0 libxcb-shape0 libxcb-shm0 libxcb-sync1 libxcb-xfixes0 libxcb1-dev libxcomposite1 libxcursor1 libxdamage1 libxdmcp-dev libxfixes3 libxft2 libxi6 libxinerama1 libxkbcommon0 libxmu6 libxpm4 libxrandr2 libxrender1 libxshmfence1 libxt-dev libxt6 libxtst6
  libxv1 libxxf86dga1 libxxf86vm1 openjdk-11-jdk openjdk-11-jdk-headless openjdk-11-jre openjdk-11-jre-headless ubuntu-mono x11-common x11-utils x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev
0 upgraded, 142 newly installed, 0 to remove and 0 not upgraded.
Need to get 166 MB of archives.
After this operation, 588 MB of additional disk space will be used.
Do you want to continue? [Y/n]
Do you want to continue? [Y/n]
Get:1 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 fonts-dejavu-core all 2.37-1 [1041 kB]
Get:2 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 fontconfig-config all 2.12.6-0ubuntu2 [55.8 kB]
Get:3 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 libfontconfig1 amd64 2.12.6-0ubuntu2 [137 kB]
.
.
.
Get:140 http://mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 openjdk-11-jre amd64 10.0.2+13-1ubuntu0.18.04.4 [53.1 kB]
Get:141 http://mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 openjdk-11-jdk-headless amd64 10.0.2+13-1ubuntu0.18.04.4 [78.1 MB]
Get:142 http://mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 openjdk-11-jdk amd64 10.0.2+13-1ubuntu0.18.04.4 [3968 kB]
Fetched 166 MB in 37s (4525 kB/s)
Extracting templates from packages: 100%
Selecting previously unselected package fonts-dejavu-core.
(Reading database ... 60071 files and directories currently installed.)
Preparing to unpack .../000-fonts-dejavu-core_2.37-1_all.deb ...
Unpacking fonts-dejavu-core (2.37-1) ...
Selecting previously unselected package fontconfig-config.
Preparing to unpack .../001-fontconfig-config_2.12.6-0ubuntu2_all.deb ...
.
.
.
Preparing to unpack .../141-openjdk-11-jdk_10.0.2+13-1ubuntu0.18.04.4_amd64.deb ...
Unpacking openjdk-11-jdk:amd64 (10.0.2+13-1ubuntu0.18.04.4) ...
Setting up libxi6:amd64 (2:1.7.9-1) ...
Setting up libxcb-present0:amd64 (1.13-1) ...
Setting up libglvnd0:amd64 (1.0.0-2ubuntu2.2) ...
Setting up libxinerama1:amd64 (2:1.1.3-1) ...
.
.
.
etting up librsvg2-2:amd64 (2.40.20-2) ...
Setting up librsvg2-common:amd64 (2.40.20-2) ...
Setting up libatk-wrapper-java-jni:amd64 (0.33.3-20ubuntu0.1) ...
Setting up adwaita-icon-theme (3.28.0-1ubuntu1) ...
update-alternatives: using /usr/share/icons/Adwaita/cursor.theme to provide /usr/share/icons/default/index.theme (x-cursor-theme) in auto mode
Setting up openjdk-11-jre-headless:amd64 (10.0.2+13-1ubuntu0.18.04.4) ...
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/rmid to provide /usr/bin/rmid (rmid) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/java to provide /usr/bin/java (java) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/keytool to provide /usr/bin/keytool (keytool) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/jjs to provide /usr/bin/jjs (jjs) in auto mode
.
.
.
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/serialver to provide /usr/bin/serialver (serialver) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/wsgen to provide /usr/bin/wsgen (wsgen) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/jcmd to provide /usr/bin/jcmd (jcmd) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/jarsigner to provide /usr/bin/jarsigner (jarsigner) in auto mode
Setting up humanity-icon-theme (0.6.15) ...
Setting up libgtk-3-0:amd64 (3.22.30-1ubuntu1) ...
Setting up libgtk-3-bin (3.22.30-1ubuntu1) ...
Setting up openjdk-11-jre:amd64 (10.0.2+13-1ubuntu0.18.04.4) ...
Setting up ca-certificates-java (20180516ubuntu1~18.04.1) ...
head: cannot open '/etc/ssl/certs/java/cacerts' for reading: No such file or directory
Adding debian:Microsec_e-Szigno_Root_CA_2009.pem
Adding debian:DigiCert_Assured_ID_Root_CA.pem
Adding debian:OpenTrust_Root_CA_G3.pem
Adding debian:DigiCert_Global_Root_G3.pem
Adding debian:Certigna.pem
Adding debian:SZAFIR_ROOT_CA2.pem
.
.
.
Adding debian:TÜRKTRUST_Elektronik_Sertifika_Hizmet_Saglayicisi_H5.pem
Adding debian:CFCA_EV_ROOT.pem
Adding debian:Starfield_Class_2_CA.pem
Adding debian:VeriSign_Class_3_Public_Primary_Certification_Authority_-_G5.pem
Adding debian:QuoVadis_Root_CA_3_G3.pem
done.
Setting up ubuntu-mono (16.10+18.04.20181005-0ubuntu1) ...
Setting up openjdk-11-jdk:amd64 (10.0.2+13-1ubuntu0.18.04.4) ...
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/appletviewer to provide /usr/bin/appletviewer (appletviewer) in auto mode
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/jconsole to provide /usr/bin/jconsole (jconsole) in auto mode
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for ureadahead (0.100.0-20) ...
Processing triggers for systemd (237-3ubuntu10.12) ...
Processing triggers for libgdk-pixbuf2.0-0:amd64 (2.36.11-2) ...
Processing triggers for ca-certificates (20180409) ...
Updating certificates in /etc/ssl/certs...
0 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...

done.
done.
```

```bash
root@ubuntu-s-1vcpu-2gb-fra1-01:~# java -version
openjdk version "10.0.2" 2018-07-17
OpenJDK Runtime Environment (build 10.0.2+13-Ubuntu-1ubuntu0.18.04.4)
OpenJDK 64-Bit Server VM (build 10.0.2+13-Ubuntu-1ubuntu0.18.04.4, mixed mode)
```

- Get the `slave.jar` document

```bash
root@ubuntu-s-1vcpu-2gb-fra1-01:~# wget http://68.183.44.204:8080/jnlpJars/slave.jar
--2019-02-17 12:19:04--  http://68.183.44.204:8080/jnlpJars/slave.jar
Connecting to 68.183.44.204:8080... connected.
HTTP request sent, awaiting response... 200 OK
Length: 776717 (759K) [application/java-archive]
Saving to: ‘slave.jar’

slave.jar                                                           100%[==================================================================================================================================================================>] 758.51K  --.-KB/s    in 0.07s

2019-02-17 12:19:04 (10.5 MB/s) - ‘slave.jar’ saved [776717/776717]
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp14.png)

- Execute the command suggested by the `Agent'

```
root@ubuntu-s-1vcpu-2gb-fra1-01:~# java -jar agent.jar -jnlpUrl http://68.183.44.204:8080/computer/builder2/slave-agent.jnlp -secret 18fb694e70d050718e8d7b2c5e9e536449382151f641fa334da0a7e27d3259e9 -workDir "/var/jenkins"
Error: Unable to access jarfile agent.jar
root@ubuntu-s-1vcpu-2gb-fra1-01:~# java -jar slave.jar -jnlpUrl http://68.183.44.204:8080/computer/builder2/slave-agent.jnlp -secret 18fb694e70d050718e8d7b2c5e9e536449382151f641fa334da0a7e27d3259e9 -workDir "/var/jenkins"
Feb 17, 2019 12:22:08 PM org.jenkinsci.remoting.engine.WorkDirManager initializeWorkDir
INFO: Using /var/jenkins/remoting as a remoting work directory
Both error and output logs will be printed to /var/jenkins/remoting
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main createEngine
INFO: Setting up agent: builder2
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main$CuiListener <init>
INFO: Jenkins agent is running in headless mode.
Feb 17, 2019 12:22:09 PM hudson.remoting.Engine startEngine
INFO: Using Remoting version: 3.27
Feb 17, 2019 12:22:09 PM org.jenkinsci.remoting.engine.WorkDirManager initializeWorkDir
INFO: Using /var/jenkins/remoting as a remoting work directory
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Locating server among [http://68.183.44.204:8080/]
Feb 17, 2019 12:22:09 PM org.jenkinsci.remoting.engine.JnlpAgentEndpointResolver resolve
INFO: Remoting server accepts the following protocols: [JNLP4-connect, Ping]
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Agent discovery successful
  Agent address: 68.183.44.204
  Agent port:    50000
  Identity:      d8:6e:59:b2:60:4d:bf:20:48:07:50:57:83:51:2a:84
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Handshaking
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Connecting to 68.183.44.204:50000
Feb 17, 2019 12:22:09 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Trying protocol: JNLP4-connect
Feb 17, 2019 12:22:10 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Remote identity confirmed: d8:6e:59:b2:60:4d:bf:20:48:07:50:57:83:51:2a:84
Feb 17, 2019 12:22:10 PM hudson.remoting.jnlp.Main$CuiListener status
INFO: Connected
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp16.png)

- Drop the new 2 droplets created in `Digital Ocean`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoJenkinsSlaveUsingJnlp23.png)

### 42. Blue Ocean

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BlueOcean.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/BlueOcean2.png)

### 43. Demo - Blue Ocean

- Install the `Blue Ocean` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean13.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean20.png)

- In order to close Blue Ocean and get back to the normal UI click on the `X`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoBlueOcean23.png)

### 44. ssh-agent

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SshAgent.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SshAgent2.png)

### 45. demo: ssh agent

- If you work with private repository you need to put your ssh keys into `credentials`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent3.png)

- Use the previous private key generate for one of the demos,

- Manage the `GitHub Repository` to store the public key

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent6.png)

- Paste the Public Key

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent12.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent13.png)

- Install the `SSH Agent` plugin.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent15.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent16.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent17.png)

- Add the new `ssh-agent test` pipeline

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent18.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent19.png)

- We are going to use the `jenkins-course/ssh-agent/Jenkinsfile` Jenkins file.

> jenkins-course/ssh-agent/Jenkinsfile
```groovy
node {
  stage('do something with git') {  
    sshagent (credentials: ['github-key']) {
      // get the last commit id from a repository you own
      sh 'git ls-remote -h --refs git@github.com:peelmicro/jenkins-course.git master |awk "{print $1}"'
    }
  }
}
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent20.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent21.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained ssh-agent/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/ssh-agent test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (do something with git)
[Pipeline] sshagent
[ssh-agent] Using credentials git (github-key)
[ssh-agent] Looking for ssh-agent implementation...
[ssh-agent]   Exec ssh-agent (binary ssh-agent on a remote machine)
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-FVImWD1Cw1Xa/agent.15214
SSH_AGENT_PID=15216
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/ssh-agent test@tmp/private_key_8715939873885527218.key (/var/jenkins_home/workspace/ssh-agent test@tmp/private_key_8715939873885527218.key)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
+ awk {print }
+ git ls-remote -h --refs git@github.com:peelmicro/jenkins-course.git master
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 15216 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

- We need to export the keys from `github.com` to the `/var/jenkins_home/.ssh/known_hosts` folder

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan github.com
# github.com:22 SSH-2.0-babeld-426c1566
github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
# github.com:22 SSH-2.0-babeld-426c1566
# github.com:22 SSH-2.0-babeld-426c1566
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan github.com >> /var/jenkins_home/.ssh/known_hosts
# github.com:22 SSH-2.0-babeld-426c1566
# github.com:22 SSH-2.0-babeld-426c1566
# github.com:22 SSH-2.0-babeld-426c1566
```

- Run the pipeline again

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent22.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained ssh-agent/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/ssh-agent test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (do something with git)
[Pipeline] sshagent
[ssh-agent] Using credentials git (github-key)
[ssh-agent] Looking for ssh-agent implementation...
[ssh-agent]   Exec ssh-agent (binary ssh-agent on a remote machine)
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-UdcPVHHMB4af/agent.15440
SSH_AGENT_PID=15442
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/ssh-agent test@tmp/private_key_3534731121917105406.key (/var/jenkins_home/workspace/ssh-agent test@tmp/private_key_3534731121917105406.key)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
+ git ls-remote -h --refs git@github.com:peelmicro/jenkins-course.git master
+ awk {print }
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 15442 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

- Re enter the public key in `Github`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan github.com
# github.com:22 SSH-2.0-babeld-426c1566
github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
# github.com:22 SSH-2.0-babeld-426c1566
# github.com:22 SSH-2.0-babeld-426c1566
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keyscan github.com >> /var/jenkins_home/.ssh/known_hosts
# github.com:22 SSH-2.0-babeld-426c1566
# github.com:22 SSH-2.0-babeld-426c1566
# github.com:22 SSH-2.0-babeld-426c1566
```
- Run the pipeline again

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent23.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained ssh-agent/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/ssh-agent test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (do something with git)
[Pipeline] sshagent
[ssh-agent] Using credentials git (github-key)
[ssh-agent] Looking for ssh-agent implementation...
[ssh-agent]   Exec ssh-agent (binary ssh-agent on a remote machine)
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-QzkIHdPNr7E2/agent.15906
SSH_AGENT_PID=15908
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/ssh-agent test@tmp/private_key_2846161449313382422.key (/var/jenkins_home/workspace/ssh-agent test@tmp/private_key_2846161449313382422.key)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
+ awk {print }
+ git ls-remote -h --refs git@github.com:peelmicro/jenkins-course.git master
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 15908 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```
- Modify the `jenkins-course/ssh-agent/Jenkinsfile` Jenkins file to use https.

> jenkins-course/ssh-agent/Jenkinsfile
```groovy
node {
  stage('do something with git') {  
    sshagent (credentials: ['github-key']) {
      // get the last commit id from a repository you own
      sh 'git ls-remote -h --refs https://github.com/peelmicro/jenkins-course master |awk "{print $1}"'
    }
  }
}
```
- Execute the pipeline again.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoSshAgent24.png)

```
Console Output
Started by user Juan Pablo Perez
Obtained ssh-agent/Jenkinsfile from git https://github.com/peelmicro/jenkins-course.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/ssh-agent test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (do something with git)
[Pipeline] sshagent
[ssh-agent] Using credentials git (github-key)
[ssh-agent] Looking for ssh-agent implementation...
[ssh-agent]   Exec ssh-agent (binary ssh-agent on a remote machine)
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-eroBGr2VgW8Z/agent.16159
SSH_AGENT_PID=16161
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/ssh-agent test@tmp/private_key_3603924908924283113.key (/var/jenkins_home/workspace/ssh-agent test@tmp/private_key_3603924908924283113.key)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
+ awk {print }
+ git ls-remote -h --refs https://github.com/peelmicro/jenkins-course master
e372ca14b75ec17b58d0c890168cc3b1c6b025e0	refs/heads/master
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 16161 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

### 46. Security best practices

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SecurityBestPractices.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SecurityBestPractices2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/SecurityBestPractices3.png)

### 47. Authentication and authorization

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/AuthenticationAndAuthorization.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/AuthenticationAndAuthorization2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/AuthenticationAndAuthorization3.png)

### 48. Demo: authorizations

- We need to `Configure Global Security`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations2.png)

- Jenkins exposes two ports, one external, `8080` and the `5000` one for `JNLP agents`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations3.png)

- Initially `all Logged-in users can do anything`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations4.png)

- We can manage who can do what clicking on `Matrix-based security`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations5.png)

- We can see the users that have access to Jenkings in `People`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations7.png)

- We can add new users or groups clicking on [Add user or group...` button.
]
![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations9.png)

- We normally grant the new user access to `View Credential` and `Build Jobs` 

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoAuthorizations10.png)

### 49. Authentication Providers for Jenkins

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/AuthenticationProvidersForJenkins.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/AuthenticationProvidersForJenkins2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/AuthenticationProvidersForJenkins3.png)

### 50. Demo: Onelogin Integration with Jenkins using SAML

- We need to create a `Free trial` account with [Onelogin](http://www.onelogin.com/)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml2.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml3.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml4.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml5.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml6.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml7.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml8.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml9.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml10.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml11.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml12.png)

- Look for `saml` and select `SAML Test Connector (IdP)`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml13.png)

- Put `Jenkins` in `Display Name` and click on `Save`
![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml14.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml15.png)

We nee to put `http://68.183.44.204:8080/securityRealm/finishLogin` in `Audience`, `Recipient` and `ACS (Consumer) URL*` fields and `^http:\/\/68\.183\.44\.204:8080\/` in ACS (Consumer) URL Validator*, then click on `Save`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml16.png)

- Download the `SAML` metadata.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml17.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml18.png)

> onelogin_metadata_894931.xml
```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://app.onelogin.com/saml/metadata/29e8db35-78e7-4899-b7d0-faddda448f59">
  <IDPSSODescriptor xmlns:ds="http://www.w3.org/2000/09/xmldsig#" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <KeyDescriptor use="signing">
      <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:X509Data>
          <ds:X509Certificate>MIID4jCCAsqgAwIBAgIUFpigLuC1FUU7jrPMKNSFXBHGjukwDQYJKoZIhvcNAQEF
BQAwRzESMBAGA1UECgwJUGVlbG1pY3JvMRUwEwYDVQQLDAxPbmVMb2dpbiBJZFAx
GjAYBgNVBAMMEU9uZUxvZ2luIEFjY291bnQgMB4XDTE5MDIxODA1MzA1NVoXDTI0
MDIxODA1MzA1NVowRzESMBAGA1UECgwJUGVlbG1pY3JvMRUwEwYDVQQLDAxPbmVM
b2dpbiBJZFAxGjAYBgNVBAMMEU9uZUxvZ2luIEFjY291bnQgMIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2mXvX8k/N0mJo6ClT2ZtQqC98XyoIGxSlbnp
M0gRkjKbi04dOx2OfAWqFfZ1XHAckI9begm6qYQZN4lGw7csCSeizack2j6srIO2
67OUaM2vAV5+d9/zcU8ZEgemM4vXp+cS5X8/3CLQuElYx82vnkWL4BMW9vK9QLxf
jBdX0R2FeQXkOGsLhf0kU1V5zmkqbnxfZet0m2qFpfOsswwLSaNeu+AMYX1E8NP6
a2NI8f4yKZnik8hg6dN4GQDzoZ9yXw4AD4lzFWgFjSxpfdG+izrhnpj20NLxdOGL
0Bib27ihvXkYGWNKbCYGHjjJuGEK1HwSFCSMmGjHgD1/K6/SyQIDAQABo4HFMIHC
MAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFFjZjTQM2KOKQM0hTYceuVj2HhmnMIGC
BgNVHSMEezB5gBRY2Y00DNijikDNIU2HHrlY9h4Zp6FLpEkwRzESMBAGA1UECgwJ
UGVlbG1pY3JvMRUwEwYDVQQLDAxPbmVMb2dpbiBJZFAxGjAYBgNVBAMMEU9uZUxv
Z2luIEFjY291bnQgghQWmKAu4LUVRTuOs8wo1IVcEcaO6TAOBgNVHQ8BAf8EBAMC
B4AwDQYJKoZIhvcNAQEFBQADggEBAJeQs9Qrrlumbi2XPkmfs328zTv4tVyEE+Ma
7vPoVTNkTq9MrEo1jpdjD1nhMexhOewmJWtxHfP5JB4ViJ+afmsBBo9KOXNgztaA
ghixqIfQ53wlm165970SsZXM3XBkdBrti2yd2/MuuCZwJZZihbB9MJnkH+GIXg7k
3LSUnIM8TDv+yyBLGoFgPOH+/xRxDmXnzNY0xJQ5Rl/Yl5n1CF2NmNOxwzkliXRP
UMuSlRUz9GIGNY+RpAI4zW3O+SxHqHtVfbYj/c+wHeDBBDwAUHkkpFlNoYk/GVik
DQvJl7BKYNufP/eLtw8cc3jUUnLWLZikGRVrB0voz+xDXCXt2Ys=</ds:X509Certificate>
        </ds:X509Data>
      </ds:KeyInfo>
    </KeyDescriptor>
    <SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://peelmicro-dev.onelogin.com/trust/saml2/http-redirect/slo/894931"/>
    
      <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    
    <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://peelmicro-dev.onelogin.com/trust/saml2/http-redirect/sso/894931"/>
    <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://peelmicro-dev.onelogin.com/trust/saml2/http-post/sso/894931"/>
    <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:SOAP" Location="https://peelmicro-dev.onelogin.com/trust/saml2/soap/sso/894931"/>
  </IDPSSODescriptor>
</EntityDescriptor>
```

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml19.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml20.png)

- We need to install the `SAML` pulgin first

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml21.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml22.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml23.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml24.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml25.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml26.png)

- Paste the XML from `OneLogin` into the `IdP metadata` field and click on `Validate IdP Metadata`.

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml27.png)

- Click on `Save`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml28.png)

- We have to `log out` 

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml29.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml30.png)

- If I try now to `log in` it redirects me to `onelogin`

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml31.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml32.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml33.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml34.png)

- Once authenticated in `OneLogin` it redirects me to Jenkins

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml35.png)

- Go back to use `Jenkins Database`, otherwise we will never be able to connect once the `OneLogin` trial ends.


![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml36.png)

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/DemoOneloginIntegrationWithJenkinsUsingSaml37.png)

## 9. The end

### 51. Congratulations on completing this course

![](/images/other/cicd-learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/CongratulationsOnCompletingThisCourse.png)

### 52. Bonus Lecture



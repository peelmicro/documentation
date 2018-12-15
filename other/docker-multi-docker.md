# Docker and Kubernetes: The Complete Guide

The [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/docker-and-kubernetes-the-complete-guide/) Udemy course explains how to build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows.

> Table of contents
[[toc]]

## What I've learned
- Docker from scratch, no previous experience required
- Master the Docker CLI to inspect and debug running containers
- Build a CI + CD pipeline from scratch with Github, Travis CI, and AWS
- Understand the purpose and theory of Kubernetes by building a complex app
- Automatically deploy your code when it is pushed to Github!

## First steps with Docker
1. Check the current version of Docker
```sh
C:\WINDOWS\system32>docker version
Client:
 Version:           18.06.1-ce
 API version:       1.38
 Go version:        go1.10.3
 Git commit:        e68fc7a
 Built:             Tue Aug 21 17:21:34 2018
 OS/Arch:           windows/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.06.1-ce
  API version:      1.38 (minimum version 1.12)
  Go version:       go1.10.3
  Git commit:       e68fc7a
  Built:            Tue Aug 21 17:29:02 2018
  OS/Arch:          linux/amd64
  Experimental:     false
```
2. Ensure `Docker` is working running the standard `hello-world` Docker Image
```sh
C:\WINDOWS\system32>docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
d1725b59e92d: Pull complete
Digest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
::: tip Info
The first time we execute `Docker run hello-world` <br>
The `hello-world` image is not in the Image cache
:::

3. Execute the `hello-world` Docker Image a second time
```sh
C:\WINDOWS\system32>docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
::: tip Info
The second time we execute `Docker run hello-world` <br>
The `hello-world` image is in the Image chache
:::


4. Execute the `run` command with aditional information
::: tip Command
docker run `<image name>` `command!` <br>
`<image name>` - name of the image to use for this container <br>
`command!` - Default comand override
:::
```sh
 C:\WINDOWS\system32>docker run busybox echo hi there
Unable to find image 'busybox:latest' locally
latest: Pulling from library/busybox
90e01955edcd: Pull complete
Digest: sha256:2a03a6059f21e150ae84b0973863609494aad70f0a80eaeb64bddd8d92465812
Status: Downloaded newer image for busybox:latest
hi there
```
```sh
C:\WINDOWS\system32>docker run busybox echo hi there
hi there
```
```sh
C:\WINDOWS\system32>docker run busybox echo bye there
bye there
```
- The `busy box` image has these default folders
```sh
C:\WINDOWS\system32>docker run busybox ls
bin
dev
etc
home
proc
root
sys
tmp
usr
var
```
```
BusyBox: The Swiss Army Knife of Embedded Linux
BusyBox combines tiny versions of many common UNIX utilities into a single small executable. It provides replacements for most of the utilities you usually find in GNU fileutils, shellutils, etc. 
The utilities in BusyBox generally have fewer options than their full-featured GNU cousins; however, the options that are included provide the expected functionality and behave very much like their GNU counterparts. 
BusyBox provides a fairly complete environment for any small or embedded system.

BusyBox has been written with size-optimization and limited resources in mind. It is also extremely modular so you can easily include or exclude commands (or features) at compile time. This makes it easy to customize 
your embedded systems. To create a working system, just add some device nodes in /dev, a few configuration files in /etc, and a Linux kernel.

BusyBox is maintained by Denys Vlasenko, and licensed under the GNU GENERAL PUBLIC LICENSE version 2.
```
```sh
C:\WINDOWS\system32>docker run busybox pwd
/
```
```sh
C:\WINDOWS\system32>docker run hello-world ls
docker: Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"ls\": executable file not found in $PATH": unknown.
```
```sh
C:\WINDOWS\system32>docker run hello-world echo hi there
docker: Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"echo\": executable file not found in $PATH": unknown.
```
5. The `ps` command
::: tip Command
docker `ps`
Show all the running docker containers 
:::
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```
- When we executed `docker run hello-world` or `docker run busybox ls` they were just executed and the stopped
```sh
C:\WINDOWS\system32>docker run busybox ping google.com
PING google.com (216.58.214.174): 56 data bytes
64 bytes from 216.58.214.174: seq=0 ttl=37 time=42.866 ms
64 bytes from 216.58.214.174: seq=1 ttl=37 time=17.430 ms
64 bytes from 216.58.214.174: seq=2 ttl=37 time=106.816 ms
64 bytes from 216.58.214.174: seq=3 ttl=37 time=15.636 ms
```
> Execute this in another command window
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   26 seconds ago      Up 25 seconds                           brave_montalcini
```
> Show all the containers ever created
```sh
C:\WINDOWS\system32>docker ps --all
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                         PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   3 minutes ago       Up 3 minutes                                       brave_montalcini
93f37c435c75        hello-world         "ping google.com"   3 minutes ago       Created                                            dazzling_lalande
0dcaa0fa4c5d        hello-world         "echo hi there"     10 minutes ago      Created                                            condescending_borg
61d50ae7440b        hello-world         "ls"                10 minutes ago      Created                                            unruffled_keller
688787c6cae1        busybox             "pwd"               12 minutes ago      Exited (0) 12 minutes ago                          epic_yalow
91caad0cc3c5        busybox             "pwa"               12 minutes ago      Created                                            dreamy_tesla
3fabe6651653        busybox             "ls"                14 minutes ago      Exited (0) 14 minutes ago                          laughing_lamarr
8a7fe5df5622        busybox             "echo hi there"     16 minutes ago      Exited (0) 16 minutes ago                          xenodochial_wescoff
6822eb029994        busybox             "echo hi there"     16 minutes ago      Exited (0) 16 minutes ago                          vigilant_bhaskara
fdc4c936f5b4        hello-world         "/hello"            45 minutes ago      Exited (0) 45 minutes ago                          optimistic_murdock
86bd4b57b368        hello-world         "/hello"            About an hour ago   Exited (0) About an hour ago                       vibrant_shtern
```

6. The Docker `run`, `create` and `start` commands
::: tip Command
docker `run` = docker `create` + docker `start` <br>
docker `create`:  docker create **[image name]** <br>
docker `start`: docker start **[container id]**
:::

```sh
C:\WINDOWS\system32>docker create hello-world
f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee
```
```sh
C:\WINDOWS\system32>docker start -a f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
```sh
C:\WINDOWS\system32>docker start f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee
f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee

-a parameter is needed to attach the container and its output
```
```sh
C:\WINDOWS\system32>docker ps --all
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                          PORTS               NAMES
f4b5c1e78466        hello-world         "/hello"            3 minutes ago       Exited (0) About a minute ago                       distracted_keller
539c07bb9ba1        busybox             "ping google.com"   14 minutes ago      Up 14 minutes                                       brave_montalcini
93f37c435c75        hello-world         "ping google.com"   14 minutes ago      Created   

```
> This container id belongs to the one executed and exited some time ago
```
3fabe6651653        busybox             "ls"                14 minutes ago      Exited (0) 14 minutes ago                          laughing_lamarr
```
```sh
C:\WINDOWS\system32>docker start -a 3fabe6651653
bin
dev
etc
home
proc
root
sys
tmp
usr
var
```
```sh
C:\WINDOWS\system32>docker start -a 3fabe6651653 ls
you cannot start and attach multiple containers at once
```

7. The Docker `logs` command
::: tip Command
docker `logs` **[container id]** <br>
Get logs from a container 
:::
```sh
C:\WINDOWS\system32>docker logs 539c07bb9ba1
PING google.com (216.58.214.174): 56 data bytes
64 bytes from 216.58.214.174: seq=0 ttl=37 time=42.866 ms
64 bytes from 216.58.214.174: seq=1 ttl=37 time=17.430 ms
64 bytes from 216.58.214.174: seq=2 ttl=37 time=106.816 ms
64 bytes from 216.58.214.174: seq=3 ttl=37 time=15.636 ms
64 bytes from 216.58.214.174: seq=4 ttl=37 time=16.969 ms
64 bytes from 216.58.214.174: seq=5 ttl=37 time=16.502 ms
64 bytes from 216.58.214.174: seq=6 ttl=37 time=22.690 ms
64 bytes from 216.58.214.174: seq=7 ttl=37 time=26.402 ms
```
```sh
C:\WINDOWS\system32>docker create busybox echo hi there
e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
```
```sh
C:\WINDOWS\system32>docker start e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
```
```sh
C:\WINDOWS\system32>docker logs e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
hi there
```
::: tip info
Docker `logs` never make the container run again, it just gets the output
:::
8. The Docker `stop` command
::: tip Command
docker `stop` **[container id]** <br>
Stop a container <br>
It can make some cleanup, so it's safer
:::
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   34 minutes ago      Up 34 minutes                           brave_montalcini
```
```sh
C:\WINDOWS\system32>docker stop 539c07bb9ba1
539c07bb9ba1
```
> It takes a while
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
9. The `kill` command
::: tip Command
docker kill **[container id]** <br>
Kills a container  <br>
It's the same as stop but it executed inmediatelly
:::
```sh
C:\WINDOWS\system32>docker start 539c07bb9ba1
539c07bb9ba1
```
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   42 minutes ago      Up 2 seconds                            brave_montalcini
```
```sh
C:\WINDOWS\system32>docker kill 539c07bb9ba1
539c07bb9ba1
```
> It's executed inmediatelly
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

### Working with `redis`
1. Execute redis installed on the Operating System
```sh
C:\WINDOWS\system32>redis-server
[16152] 01 Nov 17:05:47.520 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
[16152] 01 Nov 17:05:47.527 # Creating Server TCP listening socket *:6379: bind: No such file or directory
```
```sh
C:\WINDOWS\system32>redis-cli
127.0.0.1:6379> set mynumber 5
OK
127.0.0.1:6379> get mynumber
"5"
127.0.0.1:6379>
```
```sh
C:\WINDOWS\system32>redis-cli shutdown
It shoutdowns Redis
```
2. Execute `redis` through docker
```sh
C:\WINDOWS\system32>docker run redis
Unable to find image 'redis:latest' locally
latest: Pulling from library/redis
f17d81b4b692: Pull complete
b32474098757: Pull complete
8980cabe8bc2: Pull complete
2719bdbf9516: Pull complete
f306130d78e3: Pull complete
3e09204f8155: Pull complete
Digest: sha256:481678b4b5ea1cb4e8d38ed6677b2da9b9e057cf7e1b6c988ba96651c6f6eff3
Status: Downloaded newer image for redis:latest
1:C 01 Nov 2018 17:17:58.832 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 01 Nov 2018 17:17:58.832 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 01 Nov 2018 17:17:58.832 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 01 Nov 2018 17:17:58.834 * Running mode=standalone, port=6379.
1:M 01 Nov 2018 17:17:58.834 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 01 Nov 2018 17:17:58.834 # Server initialized
1:M 01 Nov 2018 17:17:58.834 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 01 Nov 2018 17:17:58.834 * Ready to accept connections
```
```sh
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
f949774360a8        redis               "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        6379/tcp            eloquent_goodall
```

3. The Docker `exec` command
::: tip Command
docker `exec` -t **[container id]** **[command]** <br>
`exec` = run another command <br>
`-it` = allow us to provide input to the container <br>
`container id` = ID of the container <br>
`command` = Comand to execute <br>
`-it` = `-i` `-t` <br>
`-i` = send to STDIN <br>
`-t` = allows to iterate with the terminal nicely
:::
```sh
C:\WINDOWS\system32>docker exec -it f949774360a8 redis-cli
127.0.0.1:6379> set myvalue 5
OK
127.0.0.1:6379> get myvalue
"5"
127.0.0.1:6379> 
```
```sh
C:\WINDOWS\system32>docker exec f949774360a8 redis-cli
```
> If we just put `-i` the iteration is not that nice as with `-it`
```sh
C:\WINDOWS\system32>docker exec -i f949774360a8 redis-cli
set myvalue 5
OK
get myvalue
5
```
> use `sh` to have full terminal access on the container
```sh
C:\WINDOWS\system32>docker exec -it f949774360a8 sh
# cd ~/
# ls
# cd /
# ls
bin  boot  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# echo hi there
hi there
# export b=5
# echo $b
5
# redis-cli
127.0.0.1:6379>
# 
# CTRL-D to exit
```
> some containers allows to use `bash` apart from `sh`
```sh
C:\WINDOWS\system32>docker run -it busybox sh
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # ping google.com
PING google.com (172.217.16.238): 56 data bytes
64 bytes from 172.217.16.238: seq=0 ttl=37 time=27.981 ms
64 bytes from 172.217.16.238: seq=1 ttl=37 time=16.725 ms
64 bytes from 172.217.16.238: seq=2 ttl=37 time=16.971 ms
^C
--- google.com ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss
round-trip min/avg/max = 16.725/20.559/27.981 ms
/ #
```
> Each container can not iterate with the other one
- Open in two different terminal the same command
```sh
C:\WINDOWS\system32>docker run -it busybox sh
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # touch hithere
```
```sh
C:\WINDOWS\system32>docker run -it busybox sh
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ #
=> Open in another terminal
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
261f3e65f035        busybox             "sh"                     16 seconds ago      Up 15 seconds                           nervous_lamport
3a4c383ab4e1        busybox             "sh"                     59 seconds ago      Up 58 seconds                           objective_curran
f949774360a8        redis               "docker-entrypoint.s…"   32 minutes ago      Up 32 minutes       6379/tcp            eloquent_goodall
```
- Create a file in the first container
```sh
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # touch hithere
/ # ls
bin      dev      etc      hithere  home     proc     root     sys      tmp      usr      var
/ #
```
- Execute `ls` in the second container and it is not there
```sh
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ #
```
### Create `Docker Images`
1. Create a `Dockerfile` Docker file.

I) It is used to define how our container should behave.  
II) We need to specify a base image.  
III) We need to run some comands to install aditional programs.  
IV) We need to specify command to run on contaner startup.  

> Dockerfile
```docker
# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker build .
Sending build context to Docker daemon  2.048kB
Step 1/3 : FROM alpine
latest: Pulling from library/alpine
4fe2ade4980c: Pull complete
Digest: sha256:621c2f39f8133acb8e64023a94dbdf0d5ca81896102b9e57c0dc184cadaf5528
Status: Downloaded newer image for alpine:latest
 ---> 196d12cf6ab1
Step 2/3 : RUN apk add --update redis
 ---> Running in 21a0eabbb20c
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/community/x86_64/APKINDEX.tar.gz
(1/1) Installing redis (4.0.11-r0)
Executing redis-4.0.11-r0.pre-install
Executing redis-4.0.11-r0.post-install
Executing busybox-1.28.4-r1.trigger
OK: 6 MiB in 14 packages
Removing intermediate container 21a0eabbb20c
 ---> 6f4006beaf6b
Step 3/3 : CMD ["redis-server"]
 ---> Running in 55933d5c7b05
Removing intermediate container 55933d5c7b05
 ---> 8ade2b72740d
Successfully built 8ade2b72740d
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker run 8ade2b72740d
1:C 01 Nov 18:08:53.521 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 01 Nov 18:08:53.521 # Redis version=4.0.11, bits=64, commit=bca38d14, modified=0, pid=1, just started
1:C 01 Nov 18:08:53.521 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 01 Nov 18:08:53.522 * Running mode=standalone, port=6379.
1:M 01 Nov 18:08:53.522 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 01 Nov 18:08:53.522 # Server initialized
1:M 01 Nov 18:08:53.522 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 01 Nov 18:08:53.523 * Ready to accept connections
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
9e62c378abbb        8ade2b72740d        "redis-server"           36 seconds ago      Up 34 seconds                           gracious_shannon
261f3e65f035        busybox             "sh"                     19 minutes ago      Up 19 minutes                           nervous_lamport
3a4c383ab4e1        busybox             "sh"                     20 minutes ago      Up 20 minutes                           objective_curran
f949774360a8        redis               "docker-entrypoint.s…"   About an hour ago   Up About an hour    6379/tcp            eloquent_goodall
```

2. Explanation of the dockerfile

> FROM alpine 
- Image used as a base 
- We've used alpine because it has already installed redis

> RUN apk add --update redis
- Execute commands inside out custom image
- apk is the package manager used by alpine
- It updates the version of redis to the latest one

> CMD ["redis-server"]
- What should be executed when it starts as a container

> Dockerfile
```docker
# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc
# Tell the image what to do when it starts as a container
CMD ["redis-server"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker build .
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 196d12cf6ab1
Step 2/4 : RUN apk add --update redis
 ---> Using cache
 ---> 6f4006beaf6b
Step 3/4 : RUN apk add --update gcc
 ---> Running in 4cdfb1cbbd93
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/community/x86_64/APKINDEX.tar.gz
(1/11) Installing binutils (2.30-r5)
(2/11) Installing gmp (6.1.2-r1)
(3/11) Installing isl (0.18-r0)
(4/11) Installing libgomp (6.4.0-r9)
(5/11) Installing libatomic (6.4.0-r9)
(6/11) Installing pkgconf (1.5.3-r0)
(7/11) Installing libgcc (6.4.0-r9)
(8/11) Installing mpfr3 (3.1.5-r1)
(9/11) Installing mpc1 (1.0.3-r1)
(10/11) Installing libstdc++ (6.4.0-r9)
(11/11) Installing gcc (6.4.0-r9)
Executing busybox-1.28.4-r1.trigger
OK: 90 MiB in 25 packages
Removing intermediate container 4cdfb1cbbd93
 ---> 41ed7952af36
Step 4/4 : CMD ["redis-server"]
 ---> Running in 5141e8d05a56
Removing intermediate container 5141e8d05a56
 ---> cf895461d982
Successfully built cf895461d982
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
- In this new image it uses the previous image created because there were no changes: `Using cache`
- In this new image when the `RUN apk add --update gcc` is executed no new intermediate container is created but the `Running in 4cdfb1cbbd93` is shown
- If we run again the command it will use everything from the cache
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker build .
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 196d12cf6ab1
Step 2/4 : RUN apk add --update redis
 ---> Using cache
 ---> 6f4006beaf6b
Step 3/4 : RUN apk add --update gcc
 ---> Using cache
 ---> 41ed7952af36
Step 4/4 : CMD ["redis-server"]
 ---> Using cache
 ---> cf895461d982
Successfully built cf895461d982
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
> The order of the RUN commands has been changed
```docker
# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update gcc
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker build .
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 196d12cf6ab1
Step 2/4 : RUN apk add --update gcc
 ---> Running in f2691b9eebd0
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/community/x86_64/APKINDEX.tar.gz
(1/11) Installing binutils (2.30-r5)
(2/11) Installing gmp (6.1.2-r1)
(3/11) Installing isl (0.18-r0)
(4/11) Installing libgomp (6.4.0-r9)
(5/11) Installing libatomic (6.4.0-r9)
(6/11) Installing pkgconf (1.5.3-r0)
(7/11) Installing libgcc (6.4.0-r9)
(8/11) Installing mpfr3 (3.1.5-r1)
(9/11) Installing mpc1 (1.0.3-r1)
(10/11) Installing libstdc++ (6.4.0-r9)
(11/11) Installing gcc (6.4.0-r9)
Executing busybox-1.28.4-r1.trigger
OK: 89 MiB in 24 packages
Removing intermediate container f2691b9eebd0
 ---> d7dfb5b27d69
Step 3/4 : RUN apk add --update redis
 ---> Running in 1dac349b07d5
(1/1) Installing redis (4.0.11-r0)
Executing redis-4.0.11-r0.pre-install
Executing redis-4.0.11-r0.post-install
Executing busybox-1.28.4-r1.trigger
OK: 90 MiB in 25 packages
Removing intermediate container 1dac349b07d5
 ---> 3f1ebdfcebf7
Step 4/4 : CMD ["redis-server"]
 ---> Running in fa0e5627654d
Removing intermediate container fa0e5627654d
 ---> 5fa87062b1fa
Successfully built 5fa87062b1fa
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
> It cannot use the cached version

3. The `build -t` command
::: tip Command
docker build `-t` peelmicro/redis:latest . <br>
`-t` = tag the container <br>
`peelmicro` = your docker id<br>
`redis` = repo/project name<br>
`latest` = version<br>
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker build -t peelmicro/redis:latest .
Sending build context to Docker daemon  3.072kB
Step 1/4 : FROM alpine
 ---> 196d12cf6ab1
Step 2/4 : RUN apk add --update gcc
 ---> Using cache
 ---> d7dfb5b27d69
Step 3/4 : RUN apk add --update redis
 ---> Using cache
 ---> 3f1ebdfcebf7
Step 4/4 : CMD ["redis-server"]
 ---> Using cache
 ---> 5fa87062b1fa
Successfully built 5fa87062b1fa
Successfully tagged peelmicro/redis:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker run peelmicro/redis:latest
1:C 01 Nov 19:07:35.509 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 01 Nov 19:07:35.509 # Redis version=4.0.11, bits=64, commit=bca38d14, modified=0, pid=1, just started
1:C 01 Nov 19:07:35.509 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 01 Nov 19:07:35.511 * Running mode=standalone, port=6379.
1:M 01 Nov 19:07:35.511 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 01 Nov 19:07:35.511 # Server initialized
1:M 01 Nov 19:07:35.511 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 01 Nov 19:07:35.511 * Ready to accept connections
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS               NAMES
83db4887b686        peelmicro/redis:latest   "redis-server"           16 seconds ago      Up 15 seconds                           heuristic_khorana
9e62c378abbb        8ade2b72740d             "redis-server"           About an hour ago   Up About an hour                        gracious_shannon
261f3e65f035        busybox                  "sh"                     About an hour ago   Up About an hour                        nervous_lamport
3a4c383ab4e1        busybox                  "sh"                     About an hour ago   Up About an hour                        objective_curran
f949774360a8        redis                    "docker-entrypoint.s…"   2 hours ago         Up 2 hours          6379/tcp            eloquent_goodall
```
```sh
uan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker run redis
1:C 01 Nov 2018 19:10:57.726 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 01 Nov 2018 19:10:57.726 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 01 Nov 2018 19:10:57.726 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 01 Nov 2018 19:10:57.728 * Running mode=standalone, port=6379.
1:M 01 Nov 2018 19:10:57.728 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 01 Nov 2018 19:10:57.728 # Server initialized
1:M 01 Nov 2018 19:10:57.728 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 01 Nov 2018 19:10:57.728 * Ready to accept connections
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS               NAMES
2bbc2b41ef7a        redis                    "docker-entrypoint.s…"   44 seconds ago      Up 42 seconds       6379/tcp            silly_turing
83db4887b686        peelmicro/redis:latest   "redis-server"           4 minutes ago       Up 4 minutes                            heuristic_khorana
9e62c378abbb        8ade2b72740d             "redis-server"           About an hour ago   Up About an hour                        gracious_shannon
261f3e65f035        busybox                  "sh"                     About an hour ago   Up About an hour                        nervous_lamport
3a4c383ab4e1        busybox                  "sh"                     About an hour ago   Up About an hour                        objective_curran
f949774360a8        redis                    "docker-entrypoint.s…"   2 hours ago         Up 2 hours          6379/tcp            eloquent_goodall
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker run redis:latest
1:C 01 Nov 2018 19:12:10.672 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 01 Nov 2018 19:12:10.672 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 01 Nov 2018 19:12:10.672 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 01 Nov 2018 19:12:10.673 * Running mode=standalone, port=6379.
1:M 01 Nov 2018 19:12:10.673 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 01 Nov 2018 19:12:10.674 # Server initialized
1:M 01 Nov 2018 19:12:10.674 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 01 Nov 2018 19:12:10.674 * Ready to accept connections
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED              STATUS              PORTS               NAMES
8d31733b2855        redis:latest             "docker-entrypoint.s…"   17 seconds ago       Up 15 seconds       6379/tcp            cranky_knuth
2bbc2b41ef7a        redis                    "docker-entrypoint.s…"   About a minute ago   Up About a minute   6379/tcp            silly_turing
83db4887b686        peelmicro/redis:latest   "redis-server"           4 minutes ago        Up 4 minutes                            heuristic_khorana
9e62c378abbb        8ade2b72740d             "redis-server"           About an hour ago    Up About an hour                        gracious_shannon
261f3e65f035        busybox                  "sh"                     About an hour ago    Up About an hour                        nervous_lamport
3a4c383ab4e1        busybox                  "sh"                     About an hour ago    Up About an hour                        objective_curran
f949774360a8        redis                    "docker-entrypoint.s…"   2 hours ago          Up 2 hours          6379/tcp            eloquent_goodall
```
4. Create an `Image` from a `Container`
> 1st command terminal window
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker run -it alpine sh
/ # apk add --update redis
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.8/community/x86_64/APKINDEX.tar.gz
(1/1) Installing redis (4.0.11-r0)
Executing redis-4.0.11-r0.pre-install
Executing redis-4.0.11-r0.post-install
Executing busybox-1.28.4-r1.trigger
OK: 6 MiB in 14 packages
/ #
```
> 2nd terminal window
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED              STATUS              PORTS               NAMES
4f2ee675c090        alpine                   "sh"                     About a minute ago   Up About a minute                       admiring_mcclintock
8d31733b2855        redis:latest             "docker-entrypoint.s…"   6 minutes ago        Up 6 minutes        6379/tcp            cranky_knuth
2bbc2b41ef7a        redis                    "docker-entrypoint.s…"   7 minutes ago        Up 7 minutes        6379/tcp            silly_turing
83db4887b686        peelmicro/redis:latest   "redis-server"           11 minutes ago       Up 11 minutes                           heuristic_khorana
9e62c378abbb        8ade2b72740d             "redis-server"           About an hour ago    Up About an hour                        gracious_shannon
261f3e65f035        busybox                  "sh"                     About an hour ago    Up About an hour                        nervous_lamport
3a4c383ab4e1        busybox                  "sh"                     About an hour ago    Up About an hour                        objective_curran
f949774360a8        redis                    "docker-entrypoint.s…"   2 hours ago          Up 2 hours          6379/tcp            eloquent_goodall
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker commit -c 'CMD ["redis-server"]' 4f2ee675c090
sha256:535591b32510273b59703ec5cf447c66ec9afbe0ce34d5466d6d4464d00b9d1a
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker run 535591b32510273
1:C 01 Nov 19:20:47.535 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 01 Nov 19:20:47.535 # Redis version=4.0.11, bits=64, commit=bca38d14, modified=0, pid=1, just started
1:C 01 Nov 19:20:47.535 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 01 Nov 19:20:47.537 * Running mode=standalone, port=6379.
1:M 01 Nov 19:20:47.537 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 01 Nov 19:20:47.537 # Server initialized
1:M 01 Nov 19:20:47.537 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 01 Nov 19:20:47.537 * Ready to accept connections
```
### Create a simple `Node.js` App
1. Create the `Dockerfile`
> `Dockerfile`
```docker
# Specify a base image
FROM alpine

# Install some dependencies
RUN npm install

# Default command
CMD ["npm","run"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build .
Sending build context to Docker daemon  4.096kB
Step 1/3 : FROM alpine
 ---> 196d12cf6ab1
Step 2/3 : RUN npm install
 ---> Running in 841c5671d340
/bin/sh: npm: not found
The command '/bin/sh -c npm install' returned a non-zero code: 127
```
> The reason is that alpine doesn't have npm installed
:::tip info
https://hub.docker.com/ is the website where all the images are available
:::
2. Create a new `Dockerfile`
> `Dockerfile`
```docker
# Specify a base image
FROM node:alpine

# Install some dependencies
RUN npm install

# Default command
CMD ["npm","run"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build .
Sending build context to Docker daemon  4.096kB
Step 1/3 : FROM node:alpine
alpine: Pulling from library/node
4fe2ade4980c: Already exists
4fe6fc3d4500: Pull complete
d48fd3011df1: Pull complete
Digest: sha256:9df9329306194c156863c74e97e43b54aee3884940b971e87c5c1db2f82c766a
Status: Downloaded newer image for node:alpine
 ---> 5d526f8ba00b
Step 2/3 : RUN npm install
 ---> Running in f0f6345b2d3a
npm WARN saveError ENOENT: no such file or directory, open '/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/package.json'
npm WARN !invalid#2 No description
npm WARN !invalid#2 No repository field.
npm WARN !invalid#2 No README data
npm WARN !invalid#2 No license field.

up to date in 1.231s
found 0 vulnerabilities

Removing intermediate container f0f6345b2d3a
 ---> 58f6ce2365f6
Step 3/3 : CMD ["npm","run"]
 ---> Running in d4e01958a4f3
Removing intermediate container d4e01958a4f3
 ---> cb0b5d05328c
Successfully built cb0b5d05328c
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
3. Explanation of `COPY` inside a `Docerkfile`
::: tip Dockerfile Command
COPY ./ ./ <br>
`./` = origin file(s) relative to the build context <br>
`./` = target file(s) inside *the container*  
:::

4. Create a new `Dockerfile`
> `Dockerfile`
```docker
# Specify a base image
FROM node:alpine

# copy the files
COPY ./ ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm","run"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build .
Sending build context to Docker daemon  4.096kB
Step 1/4 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/4 : COPY ./ ./
 ---> eae571c3ac77
Step 3/4 : RUN npm install
 ---> Running in 9d795f17346c
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN !invalid#2 No description
npm WARN !invalid#2 No repository field.
npm WARN !invalid#2 No license field.

added 48 packages from 36 contributors and audited 121 packages in 2.339s
found 0 vulnerabilities

Removing intermediate container 9d795f17346c
 ---> dc904dd0be0f
Step 4/4 : CMD ["npm","run"]
 ---> Running in 1b8a3aed0891
Removing intermediate container 1b8a3aed0891
 ---> 5d9d6e469f59
Successfully built 5d9d6e469f59
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
> WARN messages are fine in this case
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build -t peelmicro/simpleweb .
Sending build context to Docker daemon  4.096kB
Step 1/4 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/4 : COPY ./ ./
 ---> Using cache
 ---> eae571c3ac77
Step 3/4 : RUN npm install
 ---> Using cache
 ---> dc904dd0be0f
Step 4/4 : CMD ["npm","run"]
 ---> Using cache
 ---> 5d9d6e469f59
Successfully built 5d9d6e469f59
Successfully tagged peelmicro/simpleweb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
5. Create aother new `Dockerfile`
> `Dockerfile`
```docker
# Specify a base image
FROM node:alpine

# copy the files
COPY ./ ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm","start"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build -t peelmicro/simpleweb .
Sending build context to Docker daemon  4.096kB
Step 1/4 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/4 : COPY ./ ./
 ---> 9fd68808fa08
Step 3/4 : RUN npm install
 ---> Running in 8f4531e81b9d
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN !invalid#2 No description
npm WARN !invalid#2 No repository field.
npm WARN !invalid#2 No license field.

added 48 packages from 36 contributors and audited 121 packages in 2.256s
found 0 vulnerabilities

Removing intermediate container 8f4531e81b9d
 ---> 20ea798c1e44
Step 4/4 : CMD ["npm","start"]
 ---> Running in ba96c0069e87
Removing intermediate container ba96c0069e87
 ---> 851be26af7ec
Successfully built 851be26af7ec
Successfully tagged peelmicro/simpleweb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
6. Run the `Image` 
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run peelmicro/simpleweb

> @ start /
> node index.js

Listening on port 8080

From Google Chrome
http://localhost:8080/
```
```
This site can’t be reached localhost refused to connect.
Did you mean http://localhost-8080.com/?
Search Google for localhost 8080
ERR_CONNECTION_REFUSED
```
7. The `-p` parameter

::: tip Command
Docker RUN with Port Mapping <br>
docker run `-p` 8080 : 8080 **[image id]** <br>
`-p:` port routings<br>
`8080`: Route incoming request to this port on local host to ...<br>
`8080`: ... this port inside the container
:::

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run -p 8080:8080  peelmicro/simpleweb
C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: driver failed programming external connectivity on endpoint optimistic_tesla (aebdca7e7ff39ee18e16316cec31601e215b35903a5a007155422fe5e54e79c9): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:8080:tcp:172.17.0.12:8080: input/output error.

https://stackoverflow.com/a/49694417/1059286
```
> After restarting Docker
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run -p 8080:8080  peelmicro/simpleweb

> @ start /
> node index.js

Listening on port 8080

From Google Chrome
http://localhost:8080/

How are you doing
```
8. The `system prune` command
::: tip Command
docker `system prune` <br>
remove all stopped containers
:::
```sh
C:\WINDOWS\system32>docker system prune
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all build cache
Are you sure you want to continue? [y/N]
Are you sure you want to continue? [y/N] Y
Deleted Containers:
f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee
93f37c435c75f0764ead7bd64a80f821e99137608eb4faa709af881b86a68288
0dcaa0fa4c5d4e7f538cb14e96bffb96a64933389582a439fb51f594d9a4963c
61d50ae7440bd9edbdad3314b7596755f00f125c266b8dac6db5a8d0d506a0a7
688787c6cae12cd5f39e125b2e50e6ab390a5986054121e128ba13a34c5c5a62
91caad0cc3c51d9e54ba2274284fcaf9929a985076bac32287e7f163c206b082
3fabe66516533e0eaaec980fd7d6ee2fff3cce364472b44e02f9fb182adb9e75
8a7fe5df56225a36dfd97f3860ed375fc173114c274eb999e595d0dc3583b371
6822eb029994175a1111f8c245d1375a83d008ce4d91687affc46081d248a6b7
fdc4c936f5b4de01ac70090b5dacf326fcb5b7358893cd62f20d510f0c0f78d6
86bd4b57b368be9484a724e74dbabde76ed6ef3747e72b1185da1148ea504b54

Total reclaimed space: 0B
```
```sh
C:\WINDOWS\system32>docker ps --all
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   24 minutes ago      Up 24 minutes                           brave_montalcini
```
```sh
C:\WINDOWS\system32>docker start -a 3fabe6651653
Error: No such container: 3fabe6651653
```
9. The command to stop all running containers
::: tip Command
Command to stop all running containers<br>
It has to be executed from `PowerShell`<br>
docker ps -a -q | ForEach { docker stop $_ }<br>
:::
```sh
PS C:\Users\juan.pablo.perez> docker ps -a -q | ForEach { docker stop $_ }
8d6fafb2b9f0
de4c4b0f9d27
5217140b3127
a0f483bdd133
3cda1c5a4971
841c5671d340
abfba8b6c667
4f2ee675c090
8d31733b2855
2bbc2b41ef7a
83db4887b686
9e62c378abbb
261f3e65f035
3a4c383ab4e1
1867016e9a47
f949774360a8
e22ff84a283d
539c07bb9ba1
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run -p 5000:8080  peelmicro/simpleweb

> @ start /
> node index.js

Listening on port 8080

From Google Chrome
http://localhost:5000/

How are you doing
```
10. The `WORKDIR` command inside a `Dockerfile`
::: tip Dockerfile Command
WORKDIR /usr/app<br>
`WORKDIR` = set the working directory<br>
`/user/app` = any following command will be executed relative to this path in the container<br>
if the folder does not exist it is created automatically
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run -it peelmicro/simpleweb sh
/ # ls
Dockerfile         etc                lib                node_modules       package.json       run                sys                var
bin                home               media              opt                proc               sbin               tmp
dev                index.js           mnt                package-lock.json  root               srv                usr
/ #
```
11. Create a new `Dockerfile`
> `Dockerfile`
```docker
# Specify a base image
FROM node:alpine

# set the working directory
WORKDIR /usr/app 

# copy the files
COPY ./ ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm","start"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build -t peelmicro/simpleweb .
Sending build context to Docker daemon  4.096kB
Step 1/5 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/5 : WORKDIR /usr/app
 ---> Running in d5bb3ae1a8a2
Removing intermediate container d5bb3ae1a8a2
 ---> 7fcbaff7124f
Step 3/5 : COPY ./ ./
 ---> fa9a772252a5
Step 4/5 : RUN npm install
 ---> Running in 1853568177da
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.

added 48 packages from 36 contributors and audited 121 packages in 2.619s
found 0 vulnerabilities

Removing intermediate container 1853568177da
 ---> 87fbefff9181
Step 5/5 : CMD ["npm","start"]
 ---> Running in 403e1700f7f0
Removing intermediate container 403e1700f7f0
 ---> 1a9f4a7f50b1
Successfully built 1a9f4a7f50b1
Successfully tagged peelmicro/simpleweb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run -it peelmicro/simpleweb sh
/usr/app # ls
Dockerfile         index.js           node_modules       package-lock.json  package.json
/usr/app #
```

12. Avoid running npm install when we create a new image and there were no changes on the package.json file 

> `Dockerfile`
```docker
# Specify a base image
FROM node:alpine

# set the working directory
WORKDIR /usr/app 

# Install dependencies --> this way it will executed again only if there is a change on the package.json file
COPY ./package.json ./
RUN npm install

# copy the files
COPY ./ ./

# Default command
CMD ["npm","start"]
```
> 1st time.
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build -t peelmicro/simpleweb .
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /usr/app
 ---> Using cache
 ---> 7fcbaff7124f
Step 3/6 : COPY ./package.json ./
 ---> 1ee76df824eb
Step 4/6 : RUN npm install
 ---> Running in 5392c1826277
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.

added 48 packages from 36 contributors and audited 121 packages in 3.147s
found 0 vulnerabilities

Removing intermediate container 5392c1826277
 ---> 72566a6bc881
Step 5/6 : COPY ./ ./
 ---> 9d80c78fd6bc
Step 6/6 : CMD ["npm","start"]
 ---> Running in c4382c677d87
Removing intermediate container c4382c677d87
 ---> f83b709e6fcb
Successfully built f83b709e6fcb
Successfully tagged peelmicro/simpleweb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

> 2nd time (changed index.js)
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker build -t peelmicro/simpleweb .
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /usr/app
 ---> Using cache
 ---> 7fcbaff7124f
Step 3/6 : COPY ./package.json ./
 ---> Using cache
 ---> 1ee76df824eb
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 72566a6bc881
Step 5/6 : COPY ./ ./
 ---> dc6ee2549a36
Step 6/6 : CMD ["npm","start"]
 ---> Running in 3bd73fdd1932
Removing intermediate container 3bd73fdd1932
 ---> 54c8ea31a310
Successfully built 54c8ea31a310
Successfully tagged peelmicro/simpleweb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
### Use of `Docker Compose`
1. `Docker Compose` is use to manage multiple containers and the interaction among them
- Separate CLI that gets installed along with Docker-compose
- Used to start multiple Docket containers at the same time.
- Automates some of the long-winded arguments we were passing to 'docker run'

2. Similarities between Docker CLI and Docker-Compose CLI

Docker | Docker Compose
---------|----------
docker run myimage <br> docker build . | docker-compose up
docker build . <br> docker run myimage | docker-compose up --build

3. Define a new `Dockerfile`
> `Dockerfile`
```docker
# Specify a base image
FROM node:alpine

# set the working directory
WORKDIR /app

# Install dependencies --> this way it will executed again only if there is a change on the package.json file
COPY ./package.json .
RUN npm install

# copy the files
COPY . .

# Default command
CMD ["npm","start"]
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
$ docker build -t peelmicro/visists .
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Running in 3b9e753724b0
Removing intermediate container 3b9e753724b0
 ---> e7ae20d6064b
Step 3/6 : COPY ./package.json .
 ---> 08694a86a661
Step 4/6 : RUN npm install
 ---> Running in 3d6bb048c706
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.

added 52 packages from 40 contributors and audited 125 packages in 4.505s
found 0 vulnerabilities

Removing intermediate container 3d6bb048c706
 ---> 04e4c55002a6
Step 5/6 : COPY . .
 ---> ec0e30f04b69
Step 6/6 : CMD ["npm","start"]
 ---> Running in f4b1b4fc0718
Removing intermediate container f4b1b4fc0718
 ---> ebe155eb36bf
Successfully built ebe155eb36bf
Successfully tagged peelmicro/visists:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
$ docker run peelmicro/visists

> @ start /app
> node index.js

Listening on port 8081
events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1117:14)
Emitted 'error' event at:
    at RedisClient.on_error (/app/node_modules/redis/index.js:406:14)
    at Socket.<anonymous> (/app/node_modules/redis/index.js:279:14)
    at Socket.emit (events.js:182:13)
    at emitErrorNT (internal/streams/destroy.js:82:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:50:3)
    at process.internalTickCallback (internal/process/next_tick.js:72:19)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ start: `node index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the @ start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2018-11-02T17_30_20_511Z-debug.log
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
docker run redis
1:C 02 Nov 2018 17:31:39.373 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 02 Nov 2018 17:31:39.373 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 02 Nov 2018 17:31:39.373 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 02 Nov 2018 17:31:39.376 * Running mode=standalone, port=6379.
1:M 02 Nov 2018 17:31:39.376 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 02 Nov 2018 17:31:39.376 # Server initialized
1:M 02 Nov 2018 17:31:39.376 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 02 Nov 2018 17:31:39.376 * Ready to accept connections
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
$ docker run peelmicro/visists

> @ start /app
> node index.js

Listening on port 8081
events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1117:14)
Emitted 'error' event at:
    at RedisClient.on_error (/app/node_modules/redis/index.js:406:14)
    at Socket.<anonymous> (/app/node_modules/redis/index.js:279:14)
    at Socket.emit (events.js:182:13)
    at emitErrorNT (internal/streams/destroy.js:82:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:50:3)
    at process.internalTickCallback (internal/process/next_tick.js:72:19)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ start: `node index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the @ start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2018-11-02T17_32_55_268Z-debug.log
```
4. Create a `docker-compose.yml' file

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
$ dir
Dockerfile  docker-compose.yml  index.js  package.json
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
$ docker-compose up
Creating network "visists_default" with the default driver
Building node-app
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY ./package.json .
 ---> 91421b036188
Step 4/6 : RUN npm install
 ---> Running in 57980dd9ae2c
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.

added 52 packages from 40 contributors and audited 125 packages in 4.673s
found 0 vulnerabilities

Removing intermediate container 57980dd9ae2c
 ---> 232517ae145a
Step 5/6 : COPY . .
 ---> 42c38cdbaf45
Step 6/6 : CMD ["npm","start"]
 ---> Running in ad82fd6289aa
Removing intermediate container ad82fd6289aa
 ---> 2582fc91df0d
Successfully built 2582fc91df0d
Successfully tagged visists_node-app:latest
WARNING: Image for service node-app was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating visists_redis-server_1 ... done
Creating visists_node-app_1     ... done
Attaching to visists_node-app_1, visists_redis-server_1
redis-server_1  | 1:C 02 Nov 2018 18:13:26.332 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:13:26.332 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis-server_1  | 1:C 02 Nov 2018 18:13:26.332 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis-server_1  | 1:M 02 Nov 2018 18:13:26.335 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 02 Nov 2018 18:13:26.336 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis-server_1  | 1:M 02 Nov 2018 18:13:26.336 # Server initialized
redis-server_1  | 1:M 02 Nov 2018 18:13:26.336 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot.
Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 02 Nov 2018 18:13:26.336 * Ready to accept connections
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up
Creating network "visits_default" with the default driver
Building node-app
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY ./package.json .
 ---> Using cache
 ---> 91421b036188
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 232517ae145a
Step 5/6 : COPY . .
 ---> 30eaaa1a1270
Step 6/6 : CMD ["npm","start"]
 ---> Running in c308972d4cd7
Removing intermediate container c308972d4cd7
 ---> 93df6e4f0893
Successfully built 93df6e4f0893
Successfully tagged visits_node-app:latest
WARNING: Image for service node-app was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating visits_redis-server_1 ... done
Creating visits_node-app_1     ... done
Attaching to visits_redis-server_1, visits_node-app_1
redis-server_1  | 1:C 02 Nov 2018 18:20:50.705 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:20:50.705 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis-server_1  | 1:C 02 Nov 2018 18:20:50.705 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis-server_1  | 1:M 02 Nov 2018 18:20:50.706 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 02 Nov 2018 18:20:50.706 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis-server_1  | 1:M 02 Nov 2018 18:20:50.706 # Server initialized
redis-server_1  | 1:M 02 Nov 2018 18:20:50.706 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot.
Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 02 Nov 2018 18:20:50.706 * Ready to accept connections
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      | /app/index.js:15
node-app_1      |     client.set('visits', parsetInt(visits) + 1);
node-app_1      |            ^
node-app_1      |
node-app_1      | ReferenceError: parsetInt is not defined
node-app_1      |     at Command.client.get [as callback] (/app/index.js:15:12)
node-app_1      |     at normal_reply (/app/node_modules/redis/index.js:726:21)
node-app_1      |     at RedisClient.return_reply (/app/node_modules/redis/index.js:824:9)
node-app_1      |     at JavascriptRedisParser.returnReply (/app/node_modules/redis/index.js:192:18)
node-app_1      |     at JavascriptRedisParser.execute (/app/node_modules/redis-parser/lib/parser.js:574:12)
node-app_1      |     at Socket.<anonymous> (/app/node_modules/redis/index.js:274:27)
node-app_1      |     at Socket.emit (events.js:182:13)
node-app_1      |     at addChunk (_stream_readable.js:283:12)
node-app_1      |     at readableAddChunk (_stream_readable.js:264:11)
node-app_1      |     at Socket.Readable.push (_stream_readable.js:219:10)
node-app_1      | npm ERR! code ELIFECYCLE
node-app_1      | npm ERR! errno 1
node-app_1      | npm ERR! @ start: `node index.js`
node-app_1      | npm ERR! Exit status 1
node-app_1      | npm ERR!
node-app_1      | npm ERR! Failed at the @ start script.
node-app_1      | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
node-app_1      |
node-app_1      | npm ERR! A complete log of this run can be found in:
node-app_1      | npm ERR!     /root/.npm/_logs/2018-11-02T18_21_01_950Z-debug.log
visits_node-app_1 exited with code 1
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up --build
Building node-app
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY ./package.json .
 ---> Using cache
 ---> 91421b036188
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 232517ae145a
Step 5/6 : COPY . .
 ---> c549b2d6e194
Step 6/6 : CMD ["npm","start"]
 ---> Running in 3fe1bcd7df39
Removing intermediate container 3fe1bcd7df39
 ---> cb86be5b3ceb
Successfully built cb86be5b3ceb
Successfully tagged visits_node-app:latest
Recreating visits_node-app_1   ... done
Starting visits_redis-server_1 ... done
Attaching to visits_redis-server_1, visits_node-app_1
redis-server_1  | 1:C 02 Nov 2018 18:23:29.699 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:23:29.699 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis-server_1  | 1:C 02 Nov 2018 18:23:29.699 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis-server_1  | 1:M 02 Nov 2018 18:23:29.700 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 02 Nov 2018 18:23:29.700 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis-server_1  | 1:M 02 Nov 2018 18:23:29.700 # Server initialized
redis-server_1  | 1:M 02 Nov 2018 18:23:29.700 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot.
Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 02 Nov 2018 18:23:29.700 * DB loaded from disk: 0.000 seconds
redis-server_1  | 1:M 02 Nov 2018 18:23:29.700 * Ready to accept connections
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081

Open on Goglle Chrome: http://localhost:4001/

Number of visits is 6
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
f4706298bb04        visits_node-app     "npm start"              3 minutes ago       Up 3 minutes        0.0.0.0:4001->8081/tcp   visits_node-app_1
61d71c423eaf        redis               "docker-entrypoint.s…"   6 minutes ago       Up 3 minutes        6379/tcp                 visits_redis-server_1
```
5. The `d` Docker Compose command
::: tip Docker Compose command
docker-compose up `-d`<br>
`d` = Launch it in background
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up -d
Creating network "visits_default" with the default driver
Creating visits_node-app_1     ... done
Creating visits_redis-server_1 ... done
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
b30f750c3cf2        redis               "docker-entrypoint.s…"   27 seconds ago      Up 25 seconds       6379/tcp                 visits_redis-server_1
33a55c425cbb        visits_node-app     "npm start"              27 seconds ago      Up 25 seconds       0.0.0.0:4001->8081/tcp   visits_node-app_
```

6. The `down` Docker Compose command
::: tip Docker Compose command
docker-compose `down`<br>
`down` = Stop containers
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose down
Stopping visits_node-app_1     ... done
Stopping visits_redis-server_1 ... done
Removing visits_node-app_1     ... done
Removing visits_redis-server_1 ... done
Removing network visits_default
```
7. Make the App crash
- Change the `index.js` file

> `index.js`
```js
const express = require('express');
const redis = require('redis');
const process = require('process');
 
const app = express();
// host: 'Name of the container' <-- Docker compose takes care of it (it will resolve it for us)
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);
 
app.get('/', (req, res) => {
  // This line is going to make the app crash
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is '+ visits);
    client.set('visits', parseInt(visits) + 1);
  })
});
 
app.listen(8081, () => {
  console.log('Listening on port 8081');
});
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up --build
Building node-app
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY ./package.json .
 ---> Using cache
 ---> 91421b036188
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 232517ae145a
Step 5/6 : COPY . .
 ---> b21b01bd1e8a
Step 6/6 : CMD ["npm","start"]
 ---> Running in 1daf9c67335f
Removing intermediate container 1daf9c67335f
 ---> fc315004ce35
Successfully built fc315004ce35
Successfully tagged visits_node-app:latest
visits_redis-server_1 is up-to-date
Recreating visits_node-app_1 ... done
Attaching to visits_redis-server_1, visits_node-app_1
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis-server_1  | 1:M 02 Nov 2018 18:31:52.765 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 02 Nov 2018 18:31:52.765 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis-server_1  | 1:M 02 Nov 2018 18:31:52.765 # Server initialized
redis-server_1  | 1:M 02 Nov 2018 18:31:52.766 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot.
Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 02 Nov 2018 18:31:52.766 * Ready to accept connections
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
```
- Browse to http://localhost:4001/
```
This page isn’t working localhost didn’t send any data.
ERR_EMPTY_RESPONSE
```
```sh
node-app_1      |
node-app_1      | Listening on port 8081
visits_node-app_1 exited with code 0
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
b30f750c3cf2        redis               "docker-entrypoint.s…"   7 minutes ago       Up 7 minutes        6379/tcp            visits_redis-server_1
```
7. The `restart` Docker Compose entry
::: tip Docker Compose entry
`no` - Never attempt to restart this . container if it stops or crashes<br>
`always` - If this container stops *for any reason* always attempts to restart it<br>
`on-failure` - Only restart if the container stops with an error code<br>
`unless-stopped` - Always restart unless we (the developers) forcibly stop it
:::

8. Modify the `docker-compose.yml` file
> `docker-compose.yml`
```yml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: always
    build: .
    ports:
      - "4001:8081"
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up
Recreating visits_node-app_1 ...
Recreating visits_node-app_1 ... done
Attaching to visits_redis-server_1, visits_node-app_1
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
```

- Browse to http://localhost:4001/
```sh
This page isn’t working localhost didn’t send any data.
ERR_EMPTY_RESPONSE

visits_node-app_1 exited with code 0
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
visits_node-app_1 exited with code 0
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                    NAMES
8c69374d1c39        visits_node-app     "npm start"              About a minute ago   Up 39 seconds       0.0.0.0:4001->8081/tcp   visits_node-app_1
b30f750c3cf2        redis               "docker-entrypoint.s…"   16 minutes ago       Up 16 minutes       6379/tcp                 visits_redis-server_1
```
```sh
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis-server_1  | 1:M 02 Nov 2018 18:31:52.765 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 02 Nov 2018 18:31:52.765 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis-server_1  | 1:M 02 Nov 2018 18:31:52.765 # Server initialized
redis-server_1  | 1:M 02 Nov 2018 18:31:52.766 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot.
Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 02 Nov 2018 18:31:52.766 * Ready to accept connections
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
```
- modify the `docker-compose.yml` again
> `docker-compose.yml`
```yml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: on-failure
    build: .
    ports:
      - "4001:8081"
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up
Starting visits_redis-server_1 ... done
Starting visits_node-app_1     ... done
Attaching to visits_redis-server_1, visits_node-app_1
redis-server_1  | 1:C 02 Nov 2018 18:52:26.776 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:52:26.776 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis-server_1  | 1:C 02 Nov 2018 18:52:26.776 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis-server_1  | 1:M 02 Nov 2018 18:52:26.777 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 02 Nov 2018 18:52:26.777 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis-server_1  | 1:M 02 Nov 2018 18:52:26.777 # Server initialized
redis-server_1  | 1:M 02 Nov 2018 18:52:26.777 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot.
Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 02 Nov 2018 18:52:26.777 * DB loaded from disk: 0.000 seconds
redis-server_1  | 1:M 02 Nov 2018 18:52:26.777 * Ready to accept connections
node-app_1      |
node-app_1      | > @ start /app
node-app_1      | > node index.js
node-app_1      |
node-app_1      | Listening on port 8081
```
8. The `ps` Docker Compose command
::: tip Docker Compose command
docker-compose `ps` <br>
`ps` = shows the current situation <br>
It depends on where the `docker-compose.yml` file is located
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose ps
The system cannot find the path specified.
        Name                       Command               State           Ports
---------------------------------------------------------------------------------------
visits_node-app_1       npm start                        Up      0.0.0.0:4001->8081/tcp
visits_redis-server_1   docker-entrypoint.sh redis ...   Up      6379/tcp
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ cd ..

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide
$ docker-compose ps
ERROR:
        Can't find a suitable configuration file in this directory or any
        parent. Are you in the right directory?

        Supported filenames: docker-compose.yml, docker-compose.yaml
```

## Creating a Production-Grade Workflow. Continous Integration
### Create the client App
1. Update `create-react-app` CLI to the latest version
```sh
C:\WINDOWS\system32>npm i -g create-react-app
C:\Users\juan.pablo.perez\AppData\Roaming\npm\create-react-app -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\create-react-app\index.js
+ create-react-app@2.1.1
added 1 package from 1 contributor, removed 5 packages and updated 7 packages in 8.938s
```
2. Use the `create-react-app` to create the `frontend` app
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>create-react-app frontend

Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[--------------------------------------------------------------------------------------------------------------] 0/1283(node:38452) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.12.1", while you're on "1.9.2".
info To upgrade, download the latest installer at "https://yarnpkg.com/latest.msi".
success Saved 6 new dependencies.
info Direct dependencies
├─ react-dom@16.6.0
├─ react-scripts@2.1.1
└─ react@16.6.0
info All dependencies
├─ babel-preset-react-app@6.1.0
├─ react-dev-utils@6.1.1
├─ react-dom@16.6.0
├─ react-error-overlay@5.1.0
├─ react-scripts@2.1.1
└─ react@16.6.0
Done in 78.59s.

Initialized a git repository.

Success! Created frontend at C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  yarn start

Happy hacking!


- npm run start - Starts up a development server. For development use only.
- npm run test - Run tests associated with the project
- npm run build - Builds a pruduction version of the aplicacion
```
3. Test if the new app works correctly
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ npm run test

> frontend@0.1.0 test C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend
> react-scripts test
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
 PASS  src/App.test.js (5.736s)
  √ renders without crashing (26ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        9.034s
Ran all test suites.
```
4. Build the production version of the app
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ npm run build

> frontend@0.1.0 build C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  34.65 KB  build\static\js\1.a700ff87.chunk.js
  763 B     build\static\js\runtime~main.229c360f.js
  711 B     build\static\js\main.e039f770.chunk.js
  512 B     build\static\css\main.059987a7.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/CRA-deploy
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ ls
README.md  build  node_modules  package.json  public  src  yarn.lock

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ ls build
asset-manifest.json  favicon.ico  index.html  manifest.json  precache-manifest.47faa8bffed4235d63d799531863d6e6.js  service-worker.js  static
```
5. Execute the local version
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ npm run start

> frontend@0.1.0 start C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.18.55.225:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
- Browse to http://localhost:3000/
```
logo
Edit src/App.js and save to reload.

Learn React
```
6. Create the `Dockerfile.dev` development file
> `Dockerfile.dev`
```docker
FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
CMD ["npm", "run", "start"]
```
7. Build the development image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build .
unable to prepare context: unable to evaluate symlinks in Dockerfile path: GetFileAttributesEx C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend\Dockerfile: The system cannot find the file specified.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  141.2MB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> 59239c99e11f
Step 4/6 : RUN npm install
 ---> Running in 7aee135d17f3
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1716 packages from 661 contributors and audited 35649 packages in 57.724s
found 0 vulnerabilities

Removing intermediate container 7aee135d17f3
 ---> 8cd1fcfabd44
Step 5/6 : COPY . .
 ---> 93ddaa5502bb
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 7144aceec19b
Removing intermediate container 7144aceec19b
 ---> f5a9849dbd36
Successfully built f5a9849dbd36
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
8. The development image is very big
::: warning
Sending build context to Docker daemon  141.2MB
:::
- This is caused because of the local node_modules folder
- To solve it temporarily the node_modules server should be removed .
- After removing the folder:
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  985.1kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> 59239c99e11f
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 8cd1fcfabd44
Step 5/6 : COPY . .
 ---> 59aa208721f3
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 412b63ee7a44
Removing intermediate container 412b63ee7a44
 ---> ac3bdf759808
Successfully built ac3bdf759808
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
9. Run the created image
```sh
$ docker run ac3bdf759808

> frontend@0.1.0 start /app
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.17.0.2:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker run -p 3000:3000 ac3bdf759808

> frontend@0.1.0 start /app
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.17.0.2:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
- Browse to http://localhost:3000/
```
logo
Edit src/App.js and save to reload.

Learn React
```
10. The `-v` Docker parameter
::: info Docker parameter
docker run -p 3000:3000 `-v /app/node_modules` `-v $(pwd):/app` **[image id]**<br>
`-v /app/node_modules` = Put a bookmark on the node_modules folder<br>
`-v $(pwd):/app` = Map the pwd into the /app folder
:::
```sh
juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  986.1kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> a5ee368ea522
Step 4/6 : RUN npm install
 ---> Running in 4dedd534ff49
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1716 packages from 661 contributors and audited 35649 packages in 48.155s
found 0 vulnerabilities

Removing intermediate container 4dedd534ff49
 ---> 14afdcdba0c0
Step 5/6 : COPY . .
 ---> e724ffd85c2e
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 7457265a0925
Removing intermediate container 7457265a0925
 ---> 67402d310ff7
Successfully built 67402d310ff7
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.

```
::: warning
The following command does not work on Windows
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker run -p 3000:3000 -v /app/node_modules -v C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend\:/app 67402d310ff7
npm ERR! path /app/package.json
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall open
npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2018-11-03T09_58_59_240Z-debug.log
```
11. Create a `Docker Compose` file
> `docker-compose.yml`
```yml
version: '3'
services:
  web:
    build: .
    ports: 
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker-compose up
Creating network "frontend_default" with the default driver
Building web
ERROR: Cannot locate specified Dockerfile: Dockerfile
```
- Modify the `Docker Compose` file
> `docker-compose.yml`
```yml
version: '3'
services:
  web:
    build: 
      context: .
      dockerfile: Dockerfile.dev
    ports: 
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker-compose up
Building web
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> 0cb5436a479a
Step 4/6 : RUN npm install
 ---> Running in 661b2bbbb154
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1716 packages from 661 contributors and audited 35649 packages in 57.144s
found 0 vulnerabilities

Removing intermediate container 661b2bbbb154
 ---> d522b20bf58a
Step 5/6 : COPY . .
 ---> 78fd76eb446c
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in e34d16562ce3
Removing intermediate container e34d16562ce3
 ---> 8d0c5316a644
Successfully built 8d0c5316a644
Successfully tagged frontend_web:latest
WARNING: Image for service web was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating frontend_web_1 ... done
Attaching to frontend_web_1
web_1  |
web_1  | > frontend@0.1.0 start /app
web_1  | > react-scripts start
web_1  |
web_1  | Starting the development server...
web_1  |
web_1  | Compiled successfully!
web_1  |
web_1  | You can now view frontend in the browser.
web_1  |
web_1  |   Local:            http://localhost:3000/
web_1  |   On Your Network:  http://172.18.0.2:3000/
web_1  |
web_1  | Note that the development build is not optimized.
web_1  | To create a production build, use yarn build.
web_1  |
```
- Browse to http://localhost:3000/
```
logo
Hi there!

Learn React
```
12. If we change anything in App.js it is updated automatically (for instance Hi by Bye)
```sh
web_1  | Compiling...
web_1  | Compiled successfully!
```
- Browse to http://localhost:3000/
```
logo
Bye there!
```
13. Run the tests
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  987.6kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> a5ee368ea522
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 14afdcdba0c0
Step 5/6 : COPY . .
 ---> f5b001e766fd
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 720e1fadc70d
Removing intermediate container 720e1fadc70d
 ---> 33167675358a
Successfully built 33167675358a
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker run 33167675358a npm run test

> frontend@0.1.0 test /app
> react-scripts test

PASS src/App.test.js
  ✓ renders without crashing (27ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.062s
Ran all test suites.
```
::: warning
The following command does not work on Windows
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker run -it 33167675358a npm run test
 PASS  src/App.test.js
  ✓ renders without crashing (26ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.017s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press t to filter by a test name regex pattern.
 › Press p to filter by a filename regex pattern.
 › Press Enter to trigger a test run.
```
14. Make the test solution detect the local changes
```sh
$ docker-compose up
Starting frontend_web_1 ... done
Attaching to frontend_web_1
web_1  |
web_1  | > frontend@0.1.0 start /app
web_1  | > react-scripts start
web_1  |
web_1  | Starting the development server...
web_1  |
web_1  | Compiled successfully!
web_1  |
web_1  | You can now view frontend in the browser.
web_1  |
web_1  |   Local:            http://localhost:3000/
web_1  |   On Your Network:  http://172.18.0.2:3000/
web_1  |
web_1  | Note that the development build is not optimized.
web_1  | To create a production build, use yarn build.
web_1  |
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
6a8d42debc1b        33167675358a        "npm run test"      4 minutes ago       Up 4 minutes                                 admiring_curie
921957b61741        33167675358a        "npm run test"      8 minutes ago       Up 8 minutes                                 sharp_pasteur
ffe059851944        33167675358a        "npm run test"      9 minutes ago       Up 9 minutes                                 nifty_babbage
bea374cf23b9        frontend_web        "npm run start"     22 minutes ago      Up 2 minutes        0.0.0.0:3000->3000/tcp   frontend_web_1
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker exec -it 6a8d42debc1b npm run test

 PASS  src/App.test.js
  ✓ renders without crashing (31ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.33s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press t to filter by a test name regex pattern.
 › Press p to filter by a filename regex pattern.
 › Press Enter to trigger a test run.
```
- Using this approach the iteration works correctly.
- If we add or change tests when we hit Enter it's going to detect the changes.
15. Modify the `docker-compose.yml` to add a second service
```sh
$ docker-compose up --build
Building web
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> 0cb5436a479a
Step 4/6 : RUN npm install
 ---> Using cache
 ---> d522b20bf58a
Step 5/6 : COPY . .
 ---> f1dbc02e4150
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in fcd7252a8dba
Removing intermediate container fcd7252a8dba
 ---> 65193c64fbfc
Successfully built 65193c64fbfc
Successfully tagged frontend_web:latest
Building tests
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> 0cb5436a479a
Step 4/6 : RUN npm install
 ---> Using cache
 ---> d522b20bf58a
Step 5/6 : COPY . .
 ---> Using cache
 ---> f1dbc02e4150
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Using cache
 ---> 65193c64fbfc
Successfully built 65193c64fbfc
Successfully tagged frontend_tests:latest
Recreating frontend_web_1 ... done
Creating frontend_tests_1 ... done
Attaching to frontend_web_1, frontend_tests_1
web_1    |
web_1    | > frontend@0.1.0 start /app
web_1    | > react-scripts start
web_1    |
web_1    | Starting the development server...
web_1    |
web_1    | Compiled successfully!
web_1    |
web_1    | You can now view frontend in the browser.
web_1    |
web_1    |   Local:            http://localhost:3000/
web_1    |   On Your Network:  http://172.18.0.2:3000/
web_1    |
web_1    | Note that the development build is not optimized.
web_1    | To create a production build, use yarn build.
web_1    |
tests_1  |
tests_1  | > frontend@0.1.0 test /app
tests_1  | > react-scripts test
tests_1  |
tests_1  | PASS src/App.test.js
tests_1  |   ✓ renders without crashing (26ms)
tests_1  |   ✓ renders without crashing 2 (2ms)
tests_1  |   ✓ renders without crashing 3 (2ms)
tests_1  |   ✓ renders without crashing 4 (2ms)
tests_1  |
tests_1  | Test Suites: 1 passed, 1 total
tests_1  | Tests:       4 passed, 4 total
tests_1  | Snapshots:   0 total
tests_1  | Time:        2.238s
tests_1  | Ran all test suites.
tests_1  |
```
::: warning
The following does not work on Windows
:::
- If we make any change to the tests (removing one, for instance)
- The tests should be executed again
16. Try to access inside the container
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
29421740f3dc        frontend_web        "npm run start"     14 minutes ago      Up 14 minutes       0.0.0.0:3000->3000/tcp   frontend_web_1
9394a1ae85d6        frontend_tests      "npm run test"      14 minutes ago      Up 13 minutes                                frontend_tests_1
6a8d42debc1b        33167675358a        "npm run test"      28 minutes ago      Up 28 minutes                                admiring_curie
921957b61741        33167675358a        "npm run test"      32 minutes ago      Up 32 minutes                                sharp_pasteur
ffe059851944        33167675358a        "npm run test"      34 minutes ago      Up 34 minutes                                nifty_babbage
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker attach 9394a1ae85d6
```
::: warning
It does nothing either 
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker exec -it 29421740f3dc sh
/app # ps
PID   USER     TIME  COMMAND
    1 root      0:00 npm
   16 root      0:00 node /app/node_modules/.bin/react-scripts start
   23 root      0:19 node /app/node_modules/react-scripts/scripts/start.js
   59 root      0:00 sh
   64 root      0:00 ps
/app #
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker exec -it 9394a1ae85d6 sh
/app # ps
PID   USER     TIME  COMMAND
    1 root      0:00 npm
   16 root      0:00 node /app/node_modules/.bin/react-scripts test
   23 root      0:07 node /app/node_modules/react-scripts/scripts/test.js
   38 root      0:00 sh
   43 root      0:00 ps
/app # npm run test
PASS  src/App.test.js
  ✓ renders without crashing (30ms)
  ✓ renders without crashing 2 (3ms)
  ✓ renders without crashing 3 (1ms)
  ✓ renders without crashing 4 (2ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.494s, estimated 2s
Ran all test suites.
```
17. Build the production version creating a new `Dockerfile` file
> `Dockerfile`
```docker
FROM node:alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
```
::: tip info
NGINX is going to run automatically what we've copied on /usr/share/nginx/html
:::
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ Docker build .
Sending build context to Docker daemon  989.2kB
Step 1/8 : FROM node:alpine as builder
 ---> 5d526f8ba00b
Step 2/8 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/8 : COPY package.json .
 ---> Using cache
 ---> a5ee368ea522
Step 4/8 : RUN npm install
 ---> Using cache
 ---> 14afdcdba0c0
Step 5/8 : COPY . .
 ---> bba8f746d79b
Step 6/8 : RUN npm run build
 ---> Running in 7beef543bc09

> frontend@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  34.65 KB       build/static/js/1.a700ff87.chunk.js
  763 B          build/static/js/runtime~main.229c360f.js
  686 B (-25 B)  build/static/js/main.9289ba7c.chunk.js
  510 B (-2 B)   build/static/css/main.6e4ad141.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/CRA-deploy

Removing intermediate container 7beef543bc09
 ---> f7487e10e6f3
Step 7/8 : FROM nginx
latest: Pulling from library/nginx
f17d81b4b692: Already exists
d5c237920c39: Pull complete
a381f92f36de: Pull complete
Digest: sha256:b73f527d86e3461fd652f62cf47e7b375196063bbbd503e853af5be16597cb2e
Status: Downloaded newer image for nginx:latest
 ---> dbfc48660aeb
Step 8/8 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> 78c8ea0dcea5
Successfully built 78c8ea0dcea5
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker run -p 8080:80 78c8ea0dcea5
```
- It doesn't show anything until we open the web
- Browse to  http://localhost:8080/
```
logo
Bye there!

Learn React
```
```
172.17.0.1 - - [03/Nov/2018:11:40:09 +0000] "GET / HTTP/1.1" 200 2057 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
172.17.0.1 - - [03/Nov/2018:11:40:09 +0000] "GET /static/css/main.6e4ad141.chunk.css HTTP/1.1" 200 984 "http://localhost:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
172.17.0.1 - - [03/Nov/2018:11:40:09 +0000] "GET /static/js/1.a700ff87.chunk.js HTTP/1.1" 200 111891 "http://localhost:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
172.17.0.1 - - [03/Nov/2018:11:40:09 +0000] "GET /static/js/main.9289ba7c.chunk.js HTTP/1.1" 200 1280 "http://localhost:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
172.17.0.1 - - [03/Nov/2018:11:40:10 +0000] "GET /static/media/logo.5d5d9eef.svg HTTP/1.1" 200 2671 "http://localhost:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
172.17.0.1 - - [03/Nov/2018:11:40:10 +0000] "GET /favicon.ico HTTP/1.1" 200 3870 "http://localhost:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
```
### Continuous Integration and Deployment using `Travis CI` 
1. Create a new github repository and link it to the project
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git init
Reinitialized existing Git repository in C:/Users/juan.pablo.perez/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend/.git/
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "initial commit"
On branch master
Changes not staged for commit:
        modified:   src/App.js
        modified:   src/App.test.js

Untracked files:
        .env
        Dockerfile
        Dockerfile.dev
        docker-compose.yml

no changes added to commit
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/App.test.js.
The file will have its original line endings in your working directory.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "initial commit"
[master 99c8404] initial commit
 6 files changed, 67 insertions(+), 1 deletion(-)
 create mode 100644 .env
 create mode 100644 Dockerfile
 create mode 100644 Dockerfile.dev
 create mode 100644 docker-compose.yml
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git remote add origin https://github.com/peelmicro/docker-react.git
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
```
```sh
$ git push -u origin master
Counting objects: 27, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (26/26), done.
Writing objects: 100% (27/27), 88.63 KiB | 1.27 MiB/s, done.
Total 27 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), done.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/peelmicro/docker-react/pull/new/master
remote:
To https://github.com/peelmicro/docker-react.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```
2. Ensure the local image runs correctly
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build -t peelmicro/docker-react -f Dockerfile.dev .
Sending build context to Docker daemon  1.008MB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> a5ee368ea522
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 14afdcdba0c0
Step 5/6 : COPY . .
 ---> d9e12f00eba6
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in e4e68079a10d
Removing intermediate container e4e68079a10d
 ---> 3843b2f44242
Successfully built 3843b2f44242
Successfully tagged peelmicro/docker-react:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker run peelmicro/docker-react npm run test -- --coverage

> frontend@0.1.0 test /app
> react-scripts test "--coverage"

PASS src/App.test.js
  ✓ renders without crashing (33ms)
  ✓ renders without crashing 2 (2ms)
  ✓ renders without crashing 3 (2ms)
  ✓ renders without crashing 4 (1ms)

------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |     2.22 |        0 |     6.25 |     2.22 |                   |
 App.js           |      100 |      100 |      100 |      100 |                   |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        3.115s
Ran all test suites.
```
3. Avoid showing the test menu when running the tests
::: tip Docker Command
docker run peelmicro/docker-react npm run test `-- --coverage`<br>
`-- --coverage` = tells the tests not to show a summary
:::
4. Create the `.travis.yml` file
> `.travis.yml`
```yml
sudo: required
services:
  - docker
before_install:
  - docker build -t peelmicro/docker-react -f Dockerfile.dev .
script:
  - docker run peelmicro/docker-react npm run test -- --coverage
```
5. Commit and push the code
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Travis CI file"
[master 3a58220] added Travis CI file
 1 file changed, 7 insertions(+)
 create mode 100644 .travis.yml
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 405 bytes | 101.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/peelmicro/docker-react.git
   99c8404..3a58220  master -> master
```
6. Check if the app is deployed correctly in `Travis CI`
> `Config from Travis CI website`
```json
{
  "os": "linux",
  "dist": "trusty",
  "sudo": "required",
  "group": "stable",
  "script": [
    "docker run peelmicro/docker-react npm run test -- --coverage"
  ],
  "language": "ruby",
  "services": [
    "docker"
  ],
  "before_install": [
    "docker build -t peelmicro/docker-react -f Dockerfile.dev ."
  ]
```  
```sh
Worker information
hostname: 95e2066e-a84d-489b-b960-d1d3e9bcf669@1.production-2-worker-com-gce-mbt0
version: v4.5.2 https://github.com/travis-ci/worker/tree/0e6ddd94961e79b28a19978d99b94505a35bb9db
instance: travis-job-ffebae74-345d-461b-8f01-27e8edf9e635 travis-ci-garnet-trusty-1512502259-986baf0 (via amqp)
startup: 6.707977931s
system_info
Build system information
Build language: ruby
Build group: stable
Build dist: trusty
Build id: 90183615
Job id: 156188051
Runtime kernel version: 4.4.0-101-generic
travis-build version: 9e5f2dec6
Build image provisioning date and time
Tue Dec  5 19:58:13 UTC 2017
Operating System Details
Distributor ID:	Ubuntu
Description:	Ubuntu 14.04.5 LTS
Release:	14.04
Codename:	trusty
Cookbooks Version
7c2c6a6 https://github.com/travis-ci/travis-cookbooks/tree/7c2c6a6
git version
git version 2.15.1
bash version
GNU bash, version 4.3.11(1)-release (x86_64-pc-linux-gnu)
gcc version
gcc (Ubuntu 4.8.4-2ubuntu1~14.04.3) 4.8.4
Copyright (C) 2013 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
docker version
Client:
 Version:      17.09.0-ce
 API version:  1.32
 Go version:   go1.8.3
 Git commit:   afdb6d4
 Built:        Tue Sep 26 22:42:38 2017
 OS/Arch:      linux/amd64
Server:
 Version:      17.09.0-ce
 API version:  1.32 (minimum version 1.12)
 Go version:   go1.8.3
 Git commit:   afdb6d4
 Built:        Tue Sep 26 22:41:20 2017
 OS/Arch:      linux/amd64
 Experimental: false
clang version
clang version 5.0.0 (tags/RELEASE_500/final)
Target: x86_64-unknown-linux-gnu
Thread model: posix
InstalledDir: /usr/local/clang-5.0.0/bin
jq version
jq-1.5
bats version
Bats 0.4.0
shellcheck version
0.4.6
shfmt version
v2.0.0
ccache version
ccache version 3.1.9
Copyright (C) 2002-2007 Andrew Tridgell
Copyright (C) 2009-2011 Joel Rosdahl
This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation; either version 3 of the License, or (at your option) any later
version.
cmake version
cmake version 3.9.2
CMake suite maintained and supported by Kitware (kitware.com/cmake).
heroku version
heroku-cli/6.14.39-addc925 (linux-x64) node-v9.2.0
imagemagick version
Version: ImageMagick 6.7.7-10 2017-07-31 Q16 http://www.imagemagick.org
md5deep version
4.2
mercurial version
Mercurial Distributed SCM (version 4.2.2)
(see https://mercurial-scm.org for more information)
Copyright (C) 2005-2017 Matt Mackall and others
This is free software; see the source for copying conditions. There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
mysql version
mysql  Ver 14.14 Distrib 5.6.33, for debian-linux-gnu (x86_64) using  EditLine wrapper
openssl version
OpenSSL 1.0.1f 6 Jan 2014
packer version
Packer v1.0.2
Your version of Packer is out of date! The latest version
is 1.1.2. You can update by downloading from www.packer.io
postgresql client version
psql (PostgreSQL) 9.6.6
ragel version
Ragel State Machine Compiler version 6.8 Feb 2013
Copyright (c) 2001-2009 by Adrian Thurston
subversion version
svn, version 1.8.8 (r1568071)
   compiled Aug 10 2017, 17:20:39 on x86_64-pc-linux-gnu
Copyright (C) 2013 The Apache Software Foundation.
This software consists of contributions made by many people;
see the NOTICE file for more information.
Subversion is open source software, see http://subversion.apache.org/
The following repository access (RA) modules are available:
* ra_svn : Module for accessing a repository using the svn network protocol.
  - with Cyrus SASL authentication
  - handles 'svn' scheme
* ra_local : Module for accessing a repository on local disk.
  - handles 'file' scheme
* ra_serf : Module for accessing a repository via WebDAV protocol using serf.
  - using serf 1.3.3
  - handles 'http' scheme
  - handles 'https' scheme
sudo version
Sudo version 1.8.9p5
Configure options: --prefix=/usr -v --with-all-insults --with-pam --with-fqdn --with-logging=syslog --with-logfac=authpriv --with-env-editor --with-editor=/usr/bin/editor --with-timeout=15 --with-password-timeout=0 --with-passprompt=[sudo] password for %p:  --without-lecture --with-tty-tickets --disable-root-mailer --enable-admin-flag --with-sendmail=/usr/sbin/sendmail --with-timedir=/var/lib/sudo --mandir=/usr/share/man --libexecdir=/usr/lib/sudo --with-sssd --with-sssd-lib=/usr/lib/x86_64-linux-gnu --with-selinux
Sudoers policy plugin version 1.8.9p5
Sudoers file grammar version 43
Sudoers path: /etc/sudoers
Authentication methods: 'pam'
Syslog facility if syslog is being used for logging: authpriv
Syslog priority to use when user authenticates successfully: notice
Syslog priority to use when user authenticates unsuccessfully: alert
Send mail if the user is not in sudoers
Use a separate timestamp for each user/tty combo
Lecture user the first time they run sudo
Root may run sudo
Allow some information gathering to give useful error messages
Require fully-qualified hostnames in the sudoers file
Visudo will honor the EDITOR environment variable
Set the LOGNAME and USER environment variables
Length at which to wrap log file lines (0 for no wrap): 80
Authentication timestamp timeout: 15.0 minutes
Password prompt timeout: 0.0 minutes
Number of tries to enter a password: 3
Umask to use or 0777 to use user's: 022
Path to mail program: /usr/sbin/sendmail
Flags for mail program: -t
Address to send mail to: root
Subject line for mail messages: *** SECURITY information for %h ***
Incorrect password message: Sorry, try again.
Path to authentication timestamp dir: /var/lib/sudo
Default password prompt: [sudo] password for %p: 
Default user to run commands as: root
Value to override user's $PATH with: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin
Path to the editor for use by visudo: /usr/bin/editor
When to require a password for 'list' pseudocommand: any
When to require a password for 'verify' pseudocommand: all
File descriptors >= 3 will be closed before executing a command
Environment variables to check for sanity:
	TZ
	TERM
	LINGUAS
	LC_*
	LANGUAGE
	LANG
	COLORTERM
Environment variables to remove:
	RUBYOPT
	RUBYLIB
	PYTHONUSERBASE
	PYTHONINSPECT
	PYTHONPATH
	PYTHONHOME
	TMPPREFIX
	ZDOTDIR
	READNULLCMD
	NULLCMD
	FPATH
	PERL5DB
	PERL5OPT
	PERL5LIB
	PERLLIB
	PERLIO_DEBUG 
	JAVA_TOOL_OPTIONS
	SHELLOPTS
	GLOBIGNORE
	PS4
	BASH_ENV
	ENV
	TERMCAP
	TERMPATH
	TERMINFO_DIRS
	TERMINFO
	_RLD*
	LD_*
	PATH_LOCALE
	NLSPATH
	HOSTALIASES
	RES_OPTIONS
	LOCALDOMAIN
	CDPATH
	IFS
Environment variables to preserve:
	JAVA_HOME
	TRAVIS
	CI
	DEBIAN_FRONTEND
	XAUTHORIZATION
	XAUTHORITY
	PS2
	PS1
	PATH
	LS_COLORS
	KRB5CCNAME
	HOSTNAME
	HOME
	DISPLAY
	COLORS
Locale to use while parsing sudoers: C
Directory in which to store input/output logs: /var/log/sudo-io
File in which to store the input/output log: %{seq}
Add an entry to the utmp/utmpx file when allocating a pty
PAM service name to use
PAM service name to use for login shells
Create a new PAM session for the command to run in
Maximum I/O log sequence number: 0
Local IP address and netmask pairs:
	10.240.0.28/255.255.255.255
	172.17.0.1/255.255.0.0
Sudoers I/O plugin version 1.8.9p5
gzip version
gzip 1.6
Copyright (C) 2007, 2010, 2011 Free Software Foundation, Inc.
Copyright (C) 1993 Jean-loup Gailly.
This is free software.  You may redistribute copies of it under the terms of
the GNU General Public License <http://www.gnu.org/licenses/gpl.html>.
There is NO WARRANTY, to the extent permitted by law.
Written by Jean-loup Gailly.
zip version
Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
This is Zip 3.0 (July 5th 2008), by Info-ZIP.
Currently maintained by E. Gordon.  Please send bug reports to
the authors using the web page at www.info-zip.org; see README for details.
Latest sources and executables are at ftp://ftp.info-zip.org/pub/infozip
as of above date; see http://www.info-zip.org/ for other sites.
Compiled with gcc 4.8.2 for Unix (Linux ELF) on Oct 21 2013.
Zip special compilation options:
	USE_EF_UT_TIME       (store Universal Time)
	BZIP2_SUPPORT        (bzip2 library version 1.0.6, 6-Sept-2010)
	    bzip2 code and library copyright (c) Julian R Seward
	    (See the bzip2 license for terms of use)
	SYMLINK_SUPPORT      (symbolic links supported)
	LARGE_FILE_SUPPORT   (can read and write large files on file system)
	ZIP64_SUPPORT        (use Zip64 to store large files in archives)
	UNICODE_SUPPORT      (store and read UTF-8 Unicode paths)
	STORE_UNIX_UIDs_GIDs (store UID/GID sizes/values using new extra field)
	UIDGID_NOT_16BIT     (old Unix 16-bit UID/GID extra field not used)
	[encryption, version 2.91 of 05 Jan 2007] (modified for Zip 3)
Encryption notice:
	The encryption code of this program is not copyrighted and is
	put in the public domain.  It was originally written in Europe
	and, to the best of our knowledge, can be freely distributed
	in both source and object forms from any country, including
	the USA under License Exception TSU of the U.S. Export
	Administration Regulations (section 740.13(e)) of 6 June 2002.
Zip environment options:
             ZIP:  [none]
          ZIPOPT:  [none]
vim version
VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Nov 24 2016 16:43:18)
Included patches: 1-52
Extra patches: 8.0.0056
Modified by pkg-vim-maintainers@lists.alioth.debian.org
Compiled by buildd@
Huge version without GUI.  Features included (+) or not (-):
+acl             +farsi           +mouse_netterm   +syntax
+arabic          +file_in_path    +mouse_sgr       +tag_binary
+autocmd         +find_in_path    -mouse_sysmouse  +tag_old_static
-balloon_eval    +float           +mouse_urxvt     -tag_any_white
-browse          +folding         +mouse_xterm     -tcl
++builtin_terms  -footer          +multi_byte      +terminfo
+byte_offset     +fork()          +multi_lang      +termresponse
+cindent         +gettext         -mzscheme        +textobjects
-clientserver    -hangul_input    +netbeans_intg   +title
-clipboard       +iconv           +path_extra      -toolbar
+cmdline_compl   +insert_expand   -perl            +user_commands
+cmdline_hist    +jumplist        +persistent_undo +vertsplit
+cmdline_info    +keymap          +postscript      +virtualedit
+comments        +langmap         +printer         +visual
+conceal         +libcall         +profile         +visualextra
+cryptv          +linebreak       +python          +viminfo
+cscope          +lispindent      -python3         +vreplace
+cursorbind      +listcmds        +quickfix        +wildignore
+cursorshape     +localmap        +reltime         +wildmenu
+dialog_con      -lua             +rightleft       +windows
+diff            +menu            -ruby            +writebackup
+digraphs        +mksession       +scrollbind      -X11
-dnd             +modify_fname    +signs           -xfontset
-ebcdic          +mouse           +smartindent     -xim
+emacs_tags      -mouseshape      -sniff           -xsmp
+eval            +mouse_dec       +startuptime     -xterm_clipboard
+ex_extra        +mouse_gpm       +statusline      -xterm_save
+extra_search    -mouse_jsbterm   -sun_workshop    -xpm
   system vimrc file: "$VIM/vimrc"
     user vimrc file: "$HOME/.vimrc"
 2nd user vimrc file: "~/.vim/vimrc"
      user exrc file: "$HOME/.exrc"
  fall-back for $VIM: "/usr/share/vim"
Compilation: gcc -c -I. -Iproto -DHAVE_CONFIG_H     -g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=1      
Linking: gcc   -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,--as-needed -o vim        -lm -ltinfo -lnsl  -lselinux  -lacl -lattr -lgpm -ldl    -L/usr/lib/python2.7/config-x86_64-linux-gnu -lpython2.7 -lpthread -ldl -lutil -lm -Xlinker -export-dynamic -Wl,-O1 -Wl,-Bsymbolic-functions      
iptables version
iptables v1.4.21
curl version
curl 7.35.0 (x86_64-pc-linux-gnu) libcurl/7.35.0 OpenSSL/1.0.1f zlib/1.2.8 libidn/1.28 librtmp/2.3
wget version
GNU Wget 1.15 built on linux-gnu.
rsync version
rsync  version 3.1.0  protocol version 31
gimme version
v1.2.0
nvm version
0.33.6
perlbrew version
/home/travis/perl5/perlbrew/bin/perlbrew  - App::perlbrew/0.80
phpenv version
rbenv 1.1.1-25-g6aa70b6
rvm version
rvm 1.29.3 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
default ruby version
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
CouchDB version
couchdb 1.6.1
ElasticSearch version
5.5.0
Installed Firefox version
firefox 56.0.2
MongoDB version
MongoDB 3.4.10
PhantomJS version
2.1.1
Pre-installed PostgreSQL versions
9.2.24
9.3.20
9.4.15
9.5.10
9.6.6
RabbitMQ Version
3.6.14
Redis version
redis-server 4.0.6
riak version
2.2.3
Pre-installed Go versions
1.7.4
ant version
Apache Ant(TM) version 1.9.3 compiled on April 8 2014
mvn version
Apache Maven 3.5.2 (138edd61fd100ec658bfa2d307c43b76940a5d7d; 2017-10-18T07:58:13Z)
Maven home: /usr/local/maven-3.5.2
Java version: 1.8.0_151, vendor: Oracle Corporation
Java home: /usr/lib/jvm/java-8-oracle/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.4.0-98-generic", arch: "amd64", family: "unix"
gradle version
------------------------------------------------------------
Gradle 4.0.1
------------------------------------------------------------
Build time:   2017-07-07 14:02:41 UTC
Revision:     38e5dc0f772daecca1d2681885d3d85414eb6826
Groovy:       2.4.11
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_151 (Oracle Corporation 25.151-b12)
OS:           Linux 4.4.0-98-generic amd64
lein version
Leiningen 2.8.1 on Java 1.8.0_151 Java HotSpot(TM) 64-Bit Server VM
Pre-installed Node.js versions
v4.8.6
v6.12.0
v6.12.1
v8.9
v8.9.1
phpenv versions
  system
  5.6
* 5.6.32 (set by /home/travis/.phpenv/version)
  7.0
  7.0.25
  7.1
  7.1.11
  hhvm
  hhvm-stable
composer --version
Composer version 1.5.2 2017-09-11 16:59:25
ruby-2.2.7
ruby-2.3.4
ruby-2.4.1
Setting APT mirror in /etc/apt/sources.list: http://us-east-1.ec2.archive.ubuntu.com/ubuntu/
services
0.01s$ sudo service docker start
start: Job is already running: docker
git.checkout
0.59s$ git clone --depth=50 --branch=master https://github.com/peelmicro/docker-react.git peelmicro/docker-react
Cloning into 'peelmicro/docker-react'...
remote: Enumerating objects: 30, done.
remote: Counting objects: 100% (30/30)   remote: Counting objects: 100% (30/30), done.
remote: Compressing objects: 100% (24/24)   remote: Compressing objects: 100% (24/24), done.
Unpacking objects:  86% (26/30)   remote: Total 30 (delta 5), reused 30 (delta 5), pack-reused 0
Unpacking objects: 100% (30/30)   Unpacking objects: 100% (30/30), done.
$ cd peelmicro/docker-react
$ git checkout -qf 3a58220055a089403224b61e28650853ab66734e
rvm
4.50s$ rvm use default
Using /home/travis/.rvm/gems/ruby-2.4.1
** Updating RubyGems to the latest version for security reasons. **
** If you need an older version, you can downgrade with 'gem update --system OLD_VERSION'. **
ruby.versions
$ ruby --version
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
$ rvm --version
rvm 1.29.3 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
$ bundle --version
Bundler version 1.16.6
$ gem --version
2.7.8
$ docker build -t peelmicro/docker-react -f Dockerfile.dev .
Sending build context to Docker daemon  528.9kBSending build context to Docker daemon  528.9kB
Step 1/6 : FROM node:alpine
alpine: Pulling from library/node
b8ee302f1a47: Pull complete Status: Downloaded newer image for node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> c0525d22088e
Removing intermediate container 3cf134793776
Step 3/6 : COPY package.json .
 ---> 608c4d2c4646
Step 4/6 : RUN npm install
 ---> Running in 81d2a88ce33f
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
No output has been received in the last 10m0s, this potentially indicates a stalled build or something wrong with the build itself.
Check the details on how to adjust your build configuration on: https://docs.travis-ci.com/user/common-build-problems/#Build-times-out-because-no-output-was-received
The build has been terminated
```
7. Modify the `.travis.yml` file
> `.travis.yml`
```yml
sudo: required
language: node_js
services:
  - docker
before_install:
  - docker build -t peelmicro/docker-react -f Dockerfile.dev .
script:
  - docker run peelmicro/docker-react npm run test -- --coverage
```
> `View Config on Travis CI website`
```json
{
  "os": "linux",
  "dist": "trusty",
  "sudo": "required",
  "group": "stable",
  "script": [
    "docker run peelmicro/docker-react npm run test -- --coverage"
  ],
  "language": "node_js",
  "services": [
    "docker"
  ],
  "before_install": [
    "docker build -t peelmicro/docker-react -f Dockerfile.dev ."
  ]
}
```
```sh
Worker information
hostname: fadf458d-ab3a-4482-a4f9-e18f7887a521@1.production-2-worker-com-gce-kzvj
version: v4.5.2 https://github.com/travis-ci/worker/tree/0e6ddd94961e79b28a19978d99b94505a35bb9db
instance: travis-job-09e3a90e-9fab-481e-b6f1-9f675f0b93f8 travis-ci-garnet-trusty-1512502259-986baf0 (via amqp)
startup: 10.057042842s
system_info
Build system information
Build language: node_js
Build group: stable
Build dist: trusty
Build id: 90183804
Job id: 156188551
Runtime kernel version: 4.4.0-101-generic
travis-build version: 9e5f2dec6
Build image provisioning date and time
Tue Dec  5 19:58:13 UTC 2017
Operating System Details
Distributor ID:	Ubuntu
Description:	Ubuntu 14.04.5 LTS
Release:	14.04
Codename:	trusty
Cookbooks Version
7c2c6a6 https://github.com/travis-ci/travis-cookbooks/tree/7c2c6a6
git version
git version 2.15.1
bash version
GNU bash, version 4.3.11(1)-release (x86_64-pc-linux-gnu)
gcc version
gcc (Ubuntu 4.8.4-2ubuntu1~14.04.3) 4.8.4
Copyright (C) 2013 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
docker version
Client:
 Version:      17.09.0-ce
 API version:  1.32
 Go version:   go1.8.3
 Git commit:   afdb6d4
 Built:        Tue Sep 26 22:42:38 2017
 OS/Arch:      linux/amd64
Server:
 Version:      17.09.0-ce
 API version:  1.32 (minimum version 1.12)
 Go version:   go1.8.3
 Git commit:   afdb6d4
 Built:        Tue Sep 26 22:41:20 2017
 OS/Arch:      linux/amd64
 Experimental: false
clang version
clang version 5.0.0 (tags/RELEASE_500/final)
Target: x86_64-unknown-linux-gnu
Thread model: posix
InstalledDir: /usr/local/clang-5.0.0/bin
jq version
jq-1.5
bats version
Bats 0.4.0
shellcheck version
0.4.6
shfmt version
v2.0.0
ccache version
ccache version 3.1.9
Copyright (C) 2002-2007 Andrew Tridgell
Copyright (C) 2009-2011 Joel Rosdahl
This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation; either version 3 of the License, or (at your option) any later
version.
cmake version
cmake version 3.9.2
CMake suite maintained and supported by Kitware (kitware.com/cmake).
heroku version
heroku-cli/6.14.39-addc925 (linux-x64) node-v9.2.0
imagemagick version
Version: ImageMagick 6.7.7-10 2017-07-31 Q16 http://www.imagemagick.org
md5deep version
4.2
mercurial version
Mercurial Distributed SCM (version 4.2.2)
(see https://mercurial-scm.org for more information)
Copyright (C) 2005-2017 Matt Mackall and others
This is free software; see the source for copying conditions. There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
mysql version
mysql  Ver 14.14 Distrib 5.6.33, for debian-linux-gnu (x86_64) using  EditLine wrapper
openssl version
OpenSSL 1.0.1f 6 Jan 2014
packer version
Packer v1.0.2
Your version of Packer is out of date! The latest version
is 1.1.2. You can update by downloading from www.packer.io
postgresql client version
psql (PostgreSQL) 9.6.6
ragel version
Ragel State Machine Compiler version 6.8 Feb 2013
Copyright (c) 2001-2009 by Adrian Thurston
subversion version
svn, version 1.8.8 (r1568071)
   compiled Aug 10 2017, 17:20:39 on x86_64-pc-linux-gnu
Copyright (C) 2013 The Apache Software Foundation.
This software consists of contributions made by many people;
see the NOTICE file for more information.
Subversion is open source software, see http://subversion.apache.org/
The following repository access (RA) modules are available:
* ra_svn : Module for accessing a repository using the svn network protocol.
  - with Cyrus SASL authentication
  - handles 'svn' scheme
* ra_local : Module for accessing a repository on local disk.
  - handles 'file' scheme
* ra_serf : Module for accessing a repository via WebDAV protocol using serf.
  - using serf 1.3.3
  - handles 'http' scheme
  - handles 'https' scheme
sudo version
Sudo version 1.8.9p5
Configure options: --prefix=/usr -v --with-all-insults --with-pam --with-fqdn --with-logging=syslog --with-logfac=authpriv --with-env-editor --with-editor=/usr/bin/editor --with-timeout=15 --with-password-timeout=0 --with-passprompt=[sudo] password for %p:  --without-lecture --with-tty-tickets --disable-root-mailer --enable-admin-flag --with-sendmail=/usr/sbin/sendmail --with-timedir=/var/lib/sudo --mandir=/usr/share/man --libexecdir=/usr/lib/sudo --with-sssd --with-sssd-lib=/usr/lib/x86_64-linux-gnu --with-selinux
Sudoers policy plugin version 1.8.9p5
Sudoers file grammar version 43
Sudoers path: /etc/sudoers
Authentication methods: 'pam'
Syslog facility if syslog is being used for logging: authpriv
Syslog priority to use when user authenticates successfully: notice
Syslog priority to use when user authenticates unsuccessfully: alert
Send mail if the user is not in sudoers
Use a separate timestamp for each user/tty combo
Lecture user the first time they run sudo
Root may run sudo
Allow some information gathering to give useful error messages
Require fully-qualified hostnames in the sudoers file
Visudo will honor the EDITOR environment variable
Set the LOGNAME and USER environment variables
Length at which to wrap log file lines (0 for no wrap): 80
Authentication timestamp timeout: 15.0 minutes
Password prompt timeout: 0.0 minutes
Number of tries to enter a password: 3
Umask to use or 0777 to use user's: 022
Path to mail program: /usr/sbin/sendmail
Flags for mail program: -t
Address to send mail to: root
Subject line for mail messages: *** SECURITY information for %h ***
Incorrect password message: Sorry, try again.
Path to authentication timestamp dir: /var/lib/sudo
Default password prompt: [sudo] password for %p: 
Default user to run commands as: root
Value to override user's $PATH with: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin
Path to the editor for use by visudo: /usr/bin/editor
When to require a password for 'list' pseudocommand: any
When to require a password for 'verify' pseudocommand: all
File descriptors >= 3 will be closed before executing a command
Environment variables to check for sanity:
	TZ
	TERM
	LINGUAS
	LC_*
	LANGUAGE
	LANG
	COLORTERM
Environment variables to remove:
	RUBYOPT
	RUBYLIB
	PYTHONUSERBASE
	PYTHONINSPECT
	PYTHONPATH
	PYTHONHOME
	TMPPREFIX
	ZDOTDIR
	READNULLCMD
	NULLCMD
	FPATH
	PERL5DB
	PERL5OPT
	PERL5LIB
	PERLLIB
	PERLIO_DEBUG 
	JAVA_TOOL_OPTIONS
	SHELLOPTS
	GLOBIGNORE
	PS4
	BASH_ENV
	ENV
	TERMCAP
	TERMPATH
	TERMINFO_DIRS
	TERMINFO
	_RLD*
	LD_*
	PATH_LOCALE
	NLSPATH
	HOSTALIASES
	RES_OPTIONS
	LOCALDOMAIN
	CDPATH
	IFS
Environment variables to preserve:
	JAVA_HOME
	TRAVIS
	CI
	DEBIAN_FRONTEND
	XAUTHORIZATION
	XAUTHORITY
	PS2
	PS1
	PATH
	LS_COLORS
	KRB5CCNAME
	HOSTNAME
	HOME
	DISPLAY
	COLORS
Locale to use while parsing sudoers: C
Directory in which to store input/output logs: /var/log/sudo-io
File in which to store the input/output log: %{seq}
Add an entry to the utmp/utmpx file when allocating a pty
PAM service name to use
PAM service name to use for login shells
Create a new PAM session for the command to run in
Maximum I/O log sequence number: 0
Local IP address and netmask pairs:
	10.240.0.28/255.255.255.255
	172.17.0.1/255.255.0.0
Sudoers I/O plugin version 1.8.9p5
gzip version
gzip 1.6
Copyright (C) 2007, 2010, 2011 Free Software Foundation, Inc.
Copyright (C) 1993 Jean-loup Gailly.
This is free software.  You may redistribute copies of it under the terms of
the GNU General Public License <http://www.gnu.org/licenses/gpl.html>.
There is NO WARRANTY, to the extent permitted by law.
Written by Jean-loup Gailly.
zip version
Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
This is Zip 3.0 (July 5th 2008), by Info-ZIP.
Currently maintained by E. Gordon.  Please send bug reports to
the authors using the web page at www.info-zip.org; see README for details.
Latest sources and executables are at ftp://ftp.info-zip.org/pub/infozip
as of above date; see http://www.info-zip.org/ for other sites.
Compiled with gcc 4.8.2 for Unix (Linux ELF) on Oct 21 2013.
Zip special compilation options:
	USE_EF_UT_TIME       (store Universal Time)
	BZIP2_SUPPORT        (bzip2 library version 1.0.6, 6-Sept-2010)
	    bzip2 code and library copyright (c) Julian R Seward
	    (See the bzip2 license for terms of use)
	SYMLINK_SUPPORT      (symbolic links supported)
	LARGE_FILE_SUPPORT   (can read and write large files on file system)
	ZIP64_SUPPORT        (use Zip64 to store large files in archives)
	UNICODE_SUPPORT      (store and read UTF-8 Unicode paths)
	STORE_UNIX_UIDs_GIDs (store UID/GID sizes/values using new extra field)
	UIDGID_NOT_16BIT     (old Unix 16-bit UID/GID extra field not used)
	[encryption, version 2.91 of 05 Jan 2007] (modified for Zip 3)
Encryption notice:
	The encryption code of this program is not copyrighted and is
	put in the public domain.  It was originally written in Europe
	and, to the best of our knowledge, can be freely distributed
	in both source and object forms from any country, including
	the USA under License Exception TSU of the U.S. Export
	Administration Regulations (section 740.13(e)) of 6 June 2002.
Zip environment options:
             ZIP:  [none]
          ZIPOPT:  [none]
vim version
VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Nov 24 2016 16:43:18)
Included patches: 1-52
Extra patches: 8.0.0056
Modified by pkg-vim-maintainers@lists.alioth.debian.org
Compiled by buildd@
Huge version without GUI.  Features included (+) or not (-):
+acl             +farsi           +mouse_netterm   +syntax
+arabic          +file_in_path    +mouse_sgr       +tag_binary
+autocmd         +find_in_path    -mouse_sysmouse  +tag_old_static
-balloon_eval    +float           +mouse_urxvt     -tag_any_white
-browse          +folding         +mouse_xterm     -tcl
++builtin_terms  -footer          +multi_byte      +terminfo
+byte_offset     +fork()          +multi_lang      +termresponse
+cindent         +gettext         -mzscheme        +textobjects
-clientserver    -hangul_input    +netbeans_intg   +title
-clipboard       +iconv           +path_extra      -toolbar
+cmdline_compl   +insert_expand   -perl            +user_commands
+cmdline_hist    +jumplist        +persistent_undo +vertsplit
+cmdline_info    +keymap          +postscript      +virtualedit
+comments        +langmap         +printer         +visual
+conceal         +libcall         +profile         +visualextra
+cryptv          +linebreak       +python          +viminfo
+cscope          +lispindent      -python3         +vreplace
+cursorbind      +listcmds        +quickfix        +wildignore
+cursorshape     +localmap        +reltime         +wildmenu
+dialog_con      -lua             +rightleft       +windows
+diff            +menu            -ruby            +writebackup
+digraphs        +mksession       +scrollbind      -X11
-dnd             +modify_fname    +signs           -xfontset
-ebcdic          +mouse           +smartindent     -xim
+emacs_tags      -mouseshape      -sniff           -xsmp
+eval            +mouse_dec       +startuptime     -xterm_clipboard
+ex_extra        +mouse_gpm       +statusline      -xterm_save
+extra_search    -mouse_jsbterm   -sun_workshop    -xpm
   system vimrc file: "$VIM/vimrc"
     user vimrc file: "$HOME/.vimrc"
 2nd user vimrc file: "~/.vim/vimrc"
      user exrc file: "$HOME/.exrc"
  fall-back for $VIM: "/usr/share/vim"
Compilation: gcc -c -I. -Iproto -DHAVE_CONFIG_H     -g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=1      
Linking: gcc   -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,--as-needed -o vim        -lm -ltinfo -lnsl  -lselinux  -lacl -lattr -lgpm -ldl    -L/usr/lib/python2.7/config-x86_64-linux-gnu -lpython2.7 -lpthread -ldl -lutil -lm -Xlinker -export-dynamic -Wl,-O1 -Wl,-Bsymbolic-functions      
iptables version
iptables v1.4.21
curl version
curl 7.35.0 (x86_64-pc-linux-gnu) libcurl/7.35.0 OpenSSL/1.0.1f zlib/1.2.8 libidn/1.28 librtmp/2.3
wget version
GNU Wget 1.15 built on linux-gnu.
rsync version
rsync  version 3.1.0  protocol version 31
gimme version
v1.2.0
nvm version
0.33.6
perlbrew version
/home/travis/perl5/perlbrew/bin/perlbrew  - App::perlbrew/0.80
phpenv version
rbenv 1.1.1-25-g6aa70b6
rvm version
rvm 1.29.3 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
default ruby version
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
CouchDB version
couchdb 1.6.1
ElasticSearch version
5.5.0
Installed Firefox version
firefox 56.0.2
MongoDB version
MongoDB 3.4.10
34mPhantomJS version
2.1.1
Pre-installed PostgreSQL versions
9.2.24
9.3.20
9.4.15
9.5.10
9.6.6
RabbitMQ Version
3.6.14
Redis version
redis-server 4.0.6
riak version
2.2.3
Pre-installed Go versions
1.7.4
ant version
Apache Ant(TM) version 1.9.3 compiled on April 8 2014
mvn version
Apache Maven 3.5.2 (138edd61fd100ec658bfa2d307c43b76940a5d7d; 2017-10-18T07:58:13Z)
Maven home: /usr/local/maven-3.5.2
Java version: 1.8.0_151, vendor: Oracle Corporation
Java home: /usr/lib/jvm/java-8-oracle/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.4.0-98-generic", arch: "amd64", family: "unix"
gradle version
------------------------------------------------------------
Gradle 4.0.1
------------------------------------------------------------
Build time:   2017-07-07 14:02:41 UTC
Revision:     38e5dc0f772daecca1d2681885d3d85414eb6826
Groovy:       2.4.11
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_151 (Oracle Corporation 25.151-b12)
OS:           Linux 4.4.0-98-generic amd64
lein version
Leiningen 2.8.1 on Java 1.8.0_151 Java HotSpot(TM) 64-Bit Server VM
Pre-installed Node.js versions
v4.8.6
v6.12.0
v6.12.1
v8.9
v8.9.1
phpenv versions
  system
  5.6
* 5.6.32 (set by /home/travis/.phpenv/version)
  7.0
  7.0.25
  7.1
  7.1.11
  hhvm
  hhvm-stable
composer --version
Composer version 1.5.2 2017-09-11 16:59:25
Pre-installed Ruby versions0m
ruby-2.2.7
ruby-2.3.4
ruby-2.4.1
Setting APT mirror in /etc/apt/sources.list: http://us-east-1.ec2.archive.ubuntu.com/ubuntu/
services
0.01s$ sudo service docker start
start: Job is already running: docker
git.checkout
0.89s$ git clone --depth=50 --branch=master https://github.com/peelmicro/docker-react.git peelmicro/docker-react
Cloning into 'peelmicro/docker-react'...
remote: Enumerating objects: 33, done.
remote: Counting objects: 100% (33/33)   remote: Counting objects: 100% (33/33), done.
remote: Compressing objects: 100% (26/26)   remote: Compressing objects: 100% (26/26), done.
Unpacking objects:  84% (28/33)   remote: Total 33 (delta 7), reused 32 (delta 6), pack-reused 0
Unpacking objects: 100% (33/33)   Unpacking objects: 100% (33/33), done.
$ cd peelmicro/docker-react
$ git checkout -qf 9f154f37f8f2b4d2734e1a0e9aa2ec16e8e585ce
nvm.setup
$ export PATH=./node_modules/.bin:$PATH
Updating nvm
nvm.install
2.10s$ nvm install 0.10
Downloading and installing node v0.10.48...
Downloading https://nodejs.org/dist/v0.10.48/node-v0.10.48-linux-x64.tar.xz...
Computing checksum with sha256sum
Checksums matched!
Now using node v0.10.48 (npm v2.15.1)
Node.js version v0.10.48 does not meet requirement for yarn. Please use Node.js 4 or later.
$ node --version
v0.10.48
$ npm --version
2.15.1
$ nvm --version
0.33.11
$ yarn --version
Node version 0.10.48 is not supported, please use Node.js 4.0 or higher.
before_install
56.04s$ docker build -t peelmicro/docker-react -f Dockerfile.dev .
Sending build context to Docker daemon  533.5kBSending build context to Docker daemon  533.5kB
Step 1/6 : FROM node:alpine
alpine: Pulling from library/node
b8ee302f1a47: Pull complete Status: Downloaded newer image for node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> a79fefb4ab3c
Removing intermediate container ee756db9c4d3
Step 3/6 : COPY package.json .
 ---> 66713c2af47e
Step 4/6 : RUN npm install
 ---> Running in 8f0cc186fda7
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1716 packages from 661 contributors and audited 35649 packages in 35.118s
found 0 vulnerabilities
 ---> 77e97d3c5b90
Removing intermediate container 8f0cc186fda7
Step 5/6 : COPY . .
 ---> 0c401637a126
Step 6/6 : CMD npm run start
 ---> Running in 81afd0e72428
 ---> d8a26b792b55
Removing intermediate container 81afd0e72428
Successfully built d8a26b792b55
Successfully tagged peelmicro/docker-react:latest
$ npm install 
npm WARN engine react-scripts@2.1.1: wanted: {"node":">=6"} (current: {"node":"0.10.48","npm":"2.15.1"})
npm WARN engine case-sensitive-paths-webpack-plugin@2.1.2: wanted: {"node":">=4"} (current: {"node":"0.10.48","npm":"2.15.1"})
npm WARN engine @svgr/webpack@2.4.1: wanted: {"node":">=8"} (current: {"node":"0.10.48","npm":"2.15.1"})
npm WARN engine bfj@6.1.1: wanted: {"node":">= 6.0.0"} (current: {"node":"0.10.48","npm":"2.15.1"})
npm WARN engine chalk@2.4.1: wanted: {"node":">=4"} (current: {"node":"0.10.48","npm":"2.15.1"})
npm WARN engine @babel/core@7.1.0: wanted: {"node":">=6.9.0"} (current: {"node":"0.10.48","npm":"2.15.1"})
```
8. Modify the `.travis.yml` file again
> `.travis.yml`
```yml
udo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
before_install:
  - docker build -t peelmicro/docker-react -f Dockerfile.dev .
script:
  - docker run peelmicro/docker-react npm run test -- --coverage
```
> `View Config on Travis CI website`
```json
{
  "os": "linux",
  "dist": "trusty",
  "sudo": "required",
  "group": "stable",
  "script": [
    "docker run peelmicro/docker-react npm run test -- --coverage"
  ],
  "node_js": "8",
  "language": "node_js",
  "services": [
    "docker"
  ],
  "before_install": [
    "docker build -t peelmicro/docker-react -f Dockerfile.dev ."
  ]
}
```
```sh
 sudo service docker start
start: Job is already running: docker
git.checkout
0.60s$ git clone --depth=50 --branch=master https://github.com/peelmicro/docker-react.git peelmicro/docker-react
Cloning into 'peelmicro/docker-react'...
remote: Enumerating objects: 36, done.
remote: Counting objects: 100% (36/36), done.
remote: Compressing objects: 100% (28/28)   remote: Compressing objects: 100% (28/28), done.
Unpacking objects:  80% (29/36)   remote: Total 36 (delta 9), reused 34 (delta 7), pack-reused 0
Unpacking objects: 100% (36/36)   Unpacking objects: 100% (36/36), done.
$ cd peelmicro/docker-react
$ git checkout -qf 944ac9540880733cb261095ebde20ad52017da59
nvm.setup
$ export PATH=./node_modules/.bin:$PATH
Updating nvm
nvm.install
3.14s$ nvm install 8
Downloading and installing node v8.12.0...
Downloading https://nodejs.org/dist/v8.12.0/node-v8.12.0-linux-x64.tar.xz...
Computing checksum with sha256sum
Checksums matched!
Now using node v8.12.0 (npm v6.4.1)
install.yarn
$ node --version
v8.12.0
$ npm --version
6.4.1
$ nvm --version
0.33.11
$ yarn --version
1.3.2
before_install
53.03s$ docker build -t peelmicro/docker-react -f Dockerfile.dev .
Sending build context to Docker daemon  538.1kBSending build context to Docker daemon  538.1kB
Step 1/6 : FROM node:alpine
alpine: Pulling from library/node
b8ee302f1a47: Pull complete Status: Downloaded newer image for node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> 0c13b903004c
Removing intermediate container 93d07c547328
Step 3/6 : COPY package.json .
 ---> 44556c701c92
Step 4/6 : RUN npm install
 ---> Running in 23e33c6a9318
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1716 packages from 661 contributors and audited 35649 packages in 37.085s
found 0 vulnerabilities
 ---> a8135b9b7060
Removing intermediate container 23e33c6a9318
Step 5/6 : COPY . .
 ---> 74e6970a2ff0
Step 6/6 : CMD npm run start
 ---> Running in fd7070840adf
 ---> aea59d9ead6d
Removing intermediate container fd7070840adf
Successfully built aea59d9ead6d
Successfully tagged peelmicro/docker-react:latest
install
23.42s$ yarn
yarn install v1.3.2
[1/4] Resolving packages...
@^16.6.0[2/4] Fetching packages...
info fsevents@1.2.4: The platform "linux" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > file-loader > schema-utils > ajv-errors@1.0.0" has unmet peer dependency "ajv@>=5.0.0".
[4/4] Building fresh packages...
success Saved lockfile.
3.79s$ docker run peelmicro/docker-react npm run test -- --coverage
> frontend@0.1.0 test /app
> react-scripts test "--coverage"
PASS src/App.test.js
  ✓ renders without crashing (24ms)
  ✓ renders without crashing 2 (3ms)
  ✓ renders without crashing 3 (2ms)
  ✓ renders without crashing 4 (1ms)
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |     2.22 |        0 |     6.25 |     2.22 |                   |
 App.js           |      100 |      100 |      100 |      100 |                   |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.146s
Ran all test suites.
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
Done. Your build exited with 0.
```
### Set up AWS Elastic Beanstalk
1. Go to [AWS Console](https://console.aws.amazon.com/console)
- Look for Elastic Beanstalk
2. Go to [AWS Elastic Beanstalk] https://console.aws.amazon.com/elasticbeanstalk
```
Welcome to AWS Elastic Beanstalk
With Elastic Beanstalk, you can deploy, monitor, and scale an application quickly and easily. Let us do the heavy lifting so you can focus on your business.

To deploy your existing web application, create an application source bundle and then create a new application. If you're using Git and would prefer to use it with our command line tool, please see Getting Started with the EB CLI.

To deploy a sample application, click Get started, choose a name, select a platform and click Create app.

By launching the sample application, you allow AWS Elastic Beanstalk to administer AWS resources and necessary permissions on your behalf. Learn more
```
3. Click on `Get started`
```
Application name: `docker-react`

Platform: `Docker`
Application code: 	`[X] Sample application` [ ] Upload your code
```					
4. Click on `Create Application`
```
Creating DockerReact-env
This will take a few minutes...

2018-11-04 09:44:44 UTC+0000	INFO	Successfully launched environment: DockerReact-env
2018-11-04 09:44:44 UTC+0000	INFO	Application available at DockerReact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com.
2018-11-04 09:44:34 UTC+0000	INFO	Environment health has been set to GREEN
2018-11-04 09:44:06 UTC+0000	INFO	Docker container e500b1a71c8f is running aws_beanstalk/current-app.
2018-11-04 09:43:54 UTC+0000	INFO	Successfully built aws_beanstalk/staging-app
9:41am
Created CloudWatch alarm named:
awseb-e-fgbivj8xrv-stack-AWSEBCloudwatchAlarmLow-1MGVV778SHHQL
9:41am
Created CloudWatch alarm named:
awseb-e-fgbivj8xrv-stack-AWSEBCloudwatchAlarmLow-1MGVV778SHHQL
9:41am
Created CloudWatch alarm named:
awseb-e-fgbivj8xrv-stack-AWSEBCloudwatchAlarmHigh-12DG6HBGBVNMD
9:41am
Created Auto Scaling group policy named:
arn:aws:autoscaling:us-east-1:972569889348:scalingPolicy:0ae239d7-8d2d-4faf-aa97-a83e73168d97:autoScalingGroupName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9:policyName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingScaleDownPolicy-1PGR0N4BMG0HC
9:41am
Created Auto Scaling group policy named:
arn:aws:autoscaling:us-east-1:972569889348:scalingPolicy:e17f894f-d892-4fe8-926e-112a343b3f1e:autoScalingGroupName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9:policyName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingScaleUpPolicy-10HAXHMEIFWLO
9:41am
Waiting for EC2 instances to launch. This may take a few minutes.
9:41am
Created Auto Scaling group named:
awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9
9:40am
Added EC2 instance 'i-0d46bf8bf039abb14' to Auto Scaling Group 'awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9'.
9:40am
Adding instance 'i-0d46bf8bf039abb14' to your environment.

9:39am
Created Auto Scaling launch configuration named:
awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingLaunchConfiguration-N7EJ0BOBCNY9
9:39am
Created security group named:
awseb-e-fgbivj8xrv-stack-AWSEBSecurityGroup-MKOBJVILCN5V
9:39am
Created load balancer named:
awseb-e-f-AWSEBLoa-B34DSRUIAVO6
9:39am
Created security group named:
sg-0ee50754b53e0fff8
9:38am
Using elasticbeanstalk-us-east-1-972569889348 as Amazon S3 storage bucket for environment data.
9:38am
createEnvironment is starting.
```
```
`DockerReact-env`  

Environment ID: `e-fgbivj8xrv` 
URL: `DockerReact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com`
```
5. Go to http://dockerreact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com/
```
Congratulations!
Your Docker Container is now running in Elastic Beanstalk on your own dedicated environment in the AWS Cloud.
Video Tutorials
YouTube: Run a Docker Container from the Docker Registry
YouTube: Use Private Docker Repositories
Sample Apps
GitHub: PHP and Amazon RDS
GitHub: Python, DynamoDB, and SNS
Documentation
Deploying Docker with AWS Elastic Beanstalk
AWS Elastic Beanstalk overview
AWS Elastic Beanstalk concepts
```
6. Modify the `.travis.yml` adding:
```yml
deploy:
  provider: elasticbeanstalk
  region: "us-east-1" --> it can be copied from the url http://dockerreact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com/
  app: "docker-react" --> It can be copied from the AWS console after All Applications > docker-react (it is the name we put when we created the Elastic Bean App
  env: "DockerReact-env" --> It can be copied from the same url of from the AWS console after All Applications > docker-react > DockerReact-env
  bucket_name: "elasticbeanstalk-us-east-1-972569889348" --> It can be copied from s3 services and looking for someone starting from elasticbeanstalk and for the region
  bucket_path: "" --> All the Elastic Bean Apps created are probably created by Amazon on the same bucket. When there are some of them they are created in different folders. At the begining there are no folders, then it will coincide with the name of the app.
    on:
    branch: "master" --> git branch we are using
  access_key_id: $AWS_ACCESS_KEY --> See below how the user and keys are created and added to Travis CI setting variables
  secret_access_key:
    secure: "$AWS_SECRET_KEY" --> See below how the user and keys are created and added to Travis CI setting variables
```
7. On `AWS console look for` `IAM`	
- Go to https://console.aws.amazon.com/iam/home
```
Select users
```
8. Click on `Add User`
```
User name: `docker-react-travis.ci`
Acces type: `[X] Programatic access` [ ] AWS Management Console Access
```
9. Click on `Next: Permissions`
10. Click on `Attach existing policies directly`
```
Filter Policies: Look for beanstalk and click on the one with the "Provides full access to AWS Elastic Beanstalk and underlying services that it requires such as S3 and EC2." description.
```
11. Click on `Next: Review`
12. Click on `Create User`
```
Add user
Success
You successfully created the users shown below. You can view and download user security credentials. You can also email users instructions for signing in to the AWS Management Console. This is the last time these credentials will be available to download. However, you can create new credentials at any time.

Users with AWS Management Console access can sign-in at: https://972569889348.signin.aws.amazon.com/console

 Download .csv
```
```
User Access key ID
Secret access key: `docker-react-travis.ci`
AKIAJKS75AVMAJ5C5ISQ
********* Show

CDm50J3lxz*****************MxT/B3lNjfpAaxHu
```
13. Go to [repository on Travis CI](https://travis-ci.com/peelmicro/docker-react)
- Click on `More options -> Settings`
```
[Environment Variables]

AWS_ACCESS_KEY: AKIAJKS75AVMAJ5C5ISQ

AWS_SECRET_KEY: Dm50J3lxz*****************MxT/B3lNjfpAaxHu
```
14. Commit and push the code
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .travis.yml

no changes added to commit (use "git add" and/or "git commit -a")
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Travis CI deploy config"
[master b876446] added Travis CI deploy config
 1 file changed, 12 insertions(+)
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 585 bytes | 9.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/peelmicro/docker-react.git
   944ac95..b876446  master -> master
```
```sh
> frontend@0.1.0 test /app
> react-scripts test "--coverage"
PASS src/App.test.js
  ✓ renders without crashing (23ms)
  ✓ renders without crashing 2 (2ms)
  ✓ renders without crashing 3 (1ms)
  ✓ renders without crashing 4 (2ms)
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |     2.22 |        0 |     6.25 |     2.22 |                   |
 App.js           |      100 |      100 |      100 |      100 |                   |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.212s
Ran all test suites.
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
dpl_0
2.49s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
invalid option "--bucket_path="
failed to deploy
```
15. Modify `.travis.yml` file
> `.travis.yml`
```yml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
before_install:
  - docker build -t peelmicro/docker-react -f Dockerfile.dev .
script:
  - docker run peelmicro/docker-react npm run test -- --coverage
deploy:
  provider: elasticbeanstalk
  region: "us-east-1"
  app: "docker-react"
  env: "DockerReact-env"
  bucket_name: "elasticbeanstalk-us-east-1-972569889348"
  #bucket_path: "" --> There is no path in this case
  on:
    branch: "master"
  access_key_id: $AWS_ACCESS_KEY
  secret_access_key:
    secure: "$AWS_SECRET_KEY"
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Travis CI deploy config removing bucket_path"
[master 8c7ee3d] added Travis CI deploy config removing bucket_path
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 338 bytes | 112.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/docker-react.git
   b876446..8c7ee3d  master -> master
```
```sh   
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
dpl_0
2.56s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
18.55s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.163
Successfully installed aws-sdk-resources-2.11.163
Successfully installed aws-sdk-2.11.163
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
Saved working directory and index state WIP on (no branch): 8c7ee3d added Travis CI deploy config removing bucket_path
dpl.3
Deploying application
HEAD detached at 8c7ee3d
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
	modified:   yarn.lock
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	travis-8c7ee3de1d7a2b80ecc7f7c71948d91cff910d0b-1541327614.zip
no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (a06280e0432b41d772ca08b2f8acead91f4f895c)
Done. Your build exited with 0.

On https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/environment/dashboard?applicationName=docker-react&environmentId=e-fgbivj8xrv

Elastic Beanstalk is updating your environment.
To cancel this operation select Abort Current Operation from the Actions dropdown.
View Events


2018-11-04 10:48:23 UTC+0000	ERROR	During an aborted deployment, some instances may have deployed the new application version. To ensure all instances are running the same version, re-deploy the appropriate application version.
2018-11-04 10:48:23 UTC+0000	ERROR	Failed to deploy application.
2018-11-04 10:48:23 UTC+0000	ERROR	Unsuccessful command execution on instance id(s) 'i-0d46bf8bf039abb14'. Aborting the operation.
2018-11-04 10:48:23 UTC+0000	INFO	Command execution completed on all instances. Summary: [Successful: 0, TimedOut: 1].
2018-11-04 10:48:23 UTC+0000	WARN	The following instances have not responded in the allowed command timeout time (they might still finish eventually on their own): [i-0d46bf8bf039abb14].
```
::: warning
The reason of this error might probably be on the fact we didn't expose the port where the nginx must be run (locally it is 80 by default, but not on AWS)
:::
15. Modify `.travis.yml` file again
> `.travis.yml`
```yml
FROM node:alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Expose 80 on Dokerfile"
[master 1a8c196] added Expose 80 on Dokerfile
 1 file changed, 1 insertion(+)
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 327 bytes | 109.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/docker-react.git
   8c7ee3d..1a8c196  master -> master
```
```sh   
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
dpl_0
2.66s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
20.87s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.163
Successfully installed aws-sdk-resources-2.11.163
Successfully installed aws-sdk-2.11.163
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
Saved working directory and index state WIP on (no branch): 1a8c196 added Expose 80 on Dokerfile
dpl.3
Deploying application
HEAD detached at 1a8c196
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
	modified:   yarn.lock
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	travis-1a8c19617fa179134bcb7034ae76755cd620954d-1541348614.zip
no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (61deb385bd0b85ab4f8fd1bc80005254f36c6cd8)
Done. Your build exited with 0

2018-11-04 16:38:58 UTC+0000	ERROR	During an aborted deployment, some instances may have deployed the new application version. To ensure all instances are running the same version, re-deploy the appropriate application version.
2018-11-04 16:38:58 UTC+0000	ERROR	Failed to deploy application.
2018-11-04 16:38:58 UTC+0000	ERROR	Unsuccessful command execution on instance id(s) 'i-0d46bf8bf039abb14'. Aborting the operation.
2018-11-04 16:38:58 UTC+0000	INFO	Command execution completed on all instances. Summary: [Successful: 0, TimedOut: 1].
2018-11-04 16:38:58 UTC+0000	WARN	The following instances have not responded in the allowed command timeout time (they might still finish eventually on their own): [i-0d46bf8bf039abb14].
2018-11-04 16:24:53 UTC+0000	INFO	Deploying new version to instance(s).
2018-11-04 16:23:41 UTC+0000	INFO	Environment update is starting.

Build Still Failing?
Section 7, Lecture 90
If you still see a failed deployment, try the following two steps:
```
```
Fix One:

The npm install command frequently times out on the t2.micro instance that we are using.  An easy fix is to bump up the instance type that Elastic Beanstalk is using to a t2.small.

Note that a t2.small is outside of the free tier, so you will pay a tiny bit of money (likely less than one dollar if you leave it running for a few hours) for this instance.  Don't forget to close it down!  Directions for this are a few videos ahead in the lecture titled 'Environment Cleanup'.
```
```
Fix Two:

Try editing the 'COPY' line of your Dockerfile like so:

COPY package*.json ./

Sometimes AWS has a tough time with the '.' folder designation and prefers the long form ./
```
15. Modify `.travis.yml` file again
> `.travis.yml`
```yml
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "modified the way that the package.json is copied on Dokerfile"
[master ea69b13] modified the way that the package.json is copied on Dokerfile
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 344 bytes | 172.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/docker-react.git
   1a8c196..ea69b13  master -> master
```
```sh   
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
dpl_0
2.40s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
18.59s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.163
Successfully installed aws-sdk-resources-2.11.163
Successfully installed aws-sdk-2.11.163
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
Saved working directory and index state WIP on (no branch): ea69b13 modified the way that the package.json is copied on Dokerfile
dpl.3
Deploying application
HEAD detached at ea69b13
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
	modified:   yarn.lock
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	travis-ea69b13de48208f22190e38f0ef94ceb7bf1481c-1541349883.zip
no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (be0505e480e293365a7ab2a076119a2e1e3121fb)
Done. Your build exited with 0.

2018-11-04 16:59:34 UTC+0000	ERROR	During an aborted deployment, some instances may have deployed the new application version. To ensure all instances are running the same version, re-deploy the appropriate application version.
2018-11-04 16:59:33 UTC+0000	ERROR	Failed to deploy application.
2018-11-04 16:59:33 UTC+0000	ERROR	Unsuccessful command execution on instance id(s) 'i-0d46bf8bf039abb14'. Aborting the operation.
2018-11-04 16:59:33 UTC+0000	INFO	Command execution completed on all instances. Summary: [Successful: 0, TimedOut: 1].
2018-11-04 16:59:33 UTC+0000	WARN	The following instances have not responded in the allowed command timeout time (they might still finish eventually on their own): [i-0d46bf8bf039abb14].
2018-11-04 16:45:28 UTC+0000	INFO	Deploying new version to instance(s).
2018-11-04 16:44:49 UTC+0000	INFO	Environment update is starting.
```
16. Change to `t2.small`

- On https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/environment/dashboard?applicationName=docker-react&environmentId=e-fgbivj8xrv

- Click on `left menu Configuration`
```
Instances:
Instances
EC2 instance type: t1.micro
EC2 image ID: ami-0ad5743816d822b81
Monitoring interval: 5 minute
Root volume type: container default
Root volume size (GB): container default
Root volume IOPS: container default
Security groups: sg-0aa9f65368b9f198d
```
- Click on `Modify`
```
Instance type
Choose an instance type that best matches your workload requirement.

Instance type

AMI ID

ami-0ad5743816d822b81
Amazon CloudWatch monitoring
The time interval between when metrics are reported from the EC2 instances.

Monitoring interval

Root volume (boot device)
Root volume type

Size

 GB
The number of gigabytes of the root volume attached to each instance.
IOPS

100
 IOPS
Input/output operations per second for a provisioned IOPS (SSD) volume.
EC2 security groups

awseb-e-fgbivj8xrv-stack-AWSEBLoadBalancerSecurityGroup-AR05VWX9E1I9
sg-0ee50754b53e0fff8	
DockerReact-env

awseb-e-fgbivj8xrv-stack-AWSEBSecurityGroup-MKOBJVILCN5V
sg-0aa9f65368b9f198d	
DockerReact-env

default
sg-848995ca	
```
- Change Instance Type to `t2.small`
```
Service messages
Warnings 3
Warning
You have chosen an instance type that does not have a free tier of service. By deploying this configuration change you will incur charges for usage.
Changes to option InstanceType settings will not take effect immediately. Each of your existing EC2 instances will be replaced and your new settings will take effect then.
aws:autoscaling:launchconfiguration:InstanceType "t1.micro" => "t2.small"
Warning
Changes to option IamInstanceProfile settings will not take effect immediately. Each of your existing EC2 instances will be replaced and your new settings will take effect then.
aws:autoscaling:launchconfiguration:IamInstanceProfile "null" => "aws-elasticbeanstalk-ec2-role"
```
- Click on `Confirm`
```
2018-11-04 17:28:22 UTC+0000	INFO	Environment health has transitioned from RED to GREEN
2018-11-04 17:27:22 UTC+0000	WARN	Environment health has transitioned from YELLOW to RED
2018-11-04 17:25:22 UTC+0000	WARN	Environment health has transitioned from GREEN to YELLOW
2018-11-04 17:25:22 UTC+0000	INFO	Added EC2 instance 'i-04bab2dff5ec327b2' to Auto Scaling Group 'awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9'.
2018-11-04 17:25:22 UTC+0000	WARN	Elastic Load Balancer awseb-e-f-AWSEBLoa-B34DSRUIAVO6 has zero healthy instances.
2018-11-04 17:25:22 UTC+0000	INFO	Removed instance 'i-0d46bf8bf039abb14' from your environment. (Reason: Instance is in 'terminated' state)
2018-11-04 17:25:22 UTC+0000	INFO	Adding instance 'i-04bab2dff5ec327b2' to your environment.
2018-11-04 17:24:26 UTC+0000	INFO	Environment update completed successfully.
2018-11-04 17:24:26 UTC+0000	INFO	Successfully deployed new configuration to environment.
2018-11-04 17:24:24 UTC+0000	INFO	Deleted Auto Scaling launch configuration named: awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingLaunchConfiguration-N7EJ0BOBCNY9
2018-11-04 17:23:50 UTC+0000	INFO	Created Auto Scaling launch configuration named: awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingLaunchConfiguration-LGYN2CP97FSF
2018-11-04 17:23:32 UTC+0000	INFO	Updating environment DockerReact-env's configuration settings.
2018-11-04 17:23:26 UTC+0000	INFO	Environment update is starting.
```
### 91. Workflow With Github
1. Create the new `feature` branch
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git checkout -b feature
Switched to a new branch 'feature'
```
2. Make some changes on App.js
3. Commit and push the changes to the `feature` branch
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (feature)
$ git add .
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (feature)
$ git commit -m "change app text"
[feature da2585a] change app text
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (feature)
$ git push origin feature
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 405 bytes | 135.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote:
remote: Create a pull request for 'feature' on GitHub by visiting:
remote:      https://github.com/peelmicro/docker-react/pull/new/feature
remote:
To https://github.com/peelmicro/docker-react.git
 * [new branch]      feature -> feature
```
4. Browse to https://github.com/peelmicro/docker-react
```
Your recently pushed branches:

 feature (2 minutes ago)
```
5. Click on `Compare & pull request`
```
peelmicro commented 4 minutes ago
In this changeset, I updated the text of App.js

All checks have passed
2 successful checks
@travis-ci
Travis CI - Branch Successful in 1m — Build Passed
Details
@travis-ci
Travis CI - Pull Request Successful in 1m — Build Passed
Details
This branch has no conflicts with the base branch
Merging can be performed automatically.
 You can also open this in GitHub Desktop or view .

As it succeed we can click on [Merge pull request]
``` 
- On `Travis CI`
```sh
PASS src/App.test.js
  ✓ renders without crashing (23ms)
  ✓ renders without crashing 2 (2ms)
  ✓ renders without crashing 3 (2ms)
  ✓ renders without crashing 4 (1ms)
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |     2.22 |        0 |     6.25 |     2.22 |                   |
 App.js           |      100 |      100 |      100 |      100 |                   |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.144s
Ran all test suites.
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
Skipping a deployment with the elasticbeanstalk provider because this branch is not permitted: feature
Done. Your build exited with 0.
```
- Click on `Merge pull request` and then click on `Confirm`
```
Pull request successfully merged and closed
You’re all set—the feature branch can be safely deleted.
```
- On `Travis CI`
```sh
The command "docker run peelmicro/docker-react npm run test -- --coverage" exited with 0.
dpl_0
2.68s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
17.65s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.163
Successfully installed aws-sdk-resources-2.11.163
Successfully installed aws-sdk-2.11.163
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
Saved working directory and index state WIP on (no branch): 71cc18d Merge pull request #1 from peelmicro/feature
dpl.3
Deploying application
HEAD detached at 71cc18d
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
	modified:   yarn.lock
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	travis-71cc18d300ebed3f57295d0d31599aae137e88a9-1541352646.zip
no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (c47e8bb7152e2db9727449eb5b6c2f8bc0c6ccc5)
Done. Your build exited with 0.

2018-11-04 17:36:19 UTC+0000	INFO	Pulled logs for environment instances.
2018-11-04 17:36:13 UTC+0000	INFO	[Instance: i-04bab2dff5ec327b2] Successfully finished tailing 10 log(s)
2018-11-04 17:36:11 UTC+0000	INFO	requestEnvironmentInfo is starting.
2018-11-04 17:34:40 UTC+0000	INFO	Environment update completed successfully.
2018-11-04 17:34:40 UTC+0000	INFO	New application version was deployed to running EC2 instances.
2018-11-04 17:34:02 UTC+0000	INFO	Docker container 60248c52b186 is running aws_beanstalk/current-app.
2018-11-04 17:33:43 UTC+0000	INFO	Successfully built aws_beanstalk/staging-app
2018-11-04 17:31:41 UTC+0000	INFO	Successfully pulled node:alpine
2018-11-04 17:31:32 UTC+0000	INFO	Deploying new version to instance(s).
```
- On http://dockerreact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com/
```
logo
I was changed on the Feature branch

Learn React
```
### Environment Cleanup to avoid paying AWS
::: warning
Environment Cleanup<br>
Section 7, Lecture 94<br>
Remember, we need to delete the resources we created or you might end up paying real money for them.  To clean up the Elastic Beanstalk instance we created, do the following:<br>
1) Go to the Elastic Beanstalk dashboard, where you should see a page that looks like this:<br> 
2) On the top right hand side click the 'Actions' button<br>
3) Click on 'Delete Application' then confirm the delete<br>
Note: it might take a few minutes for the dashboard to update and show that your app is being deleted.  Be a little patient!
:::
1. Go to `EB`
```
DockerReact-env
Environment tier:
Web Server
Platform:
Docker running on 64bit Amazon Linux/2.12.4
Running versions:
travis-71cc18d300ebed3f57295d0d31599aae137e88a9-1541352651
Last modified:
2018-11-04 17:40:43 UTC+0000
URL:
DockerReact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com
```
2. Click on `Actions -> Delete application`
```
Delete Application
Are you sure you want to delete the application: docker-react?
```
3. Click on `Delete`
```
DockerReact-env
Environment tier:
Web Server
Platform:
Docker running on 64bit Amazon Linux/2.12.4
Running versions:
travis-71cc18d300ebed3f57295d0d31599aae137e88a9-1541352651
Last modified:
2018-11-04 18:04:05 UTC+0000
URL:
DockerReact-env.ptcpjfzxwp.us-east-1.elasticbeanstalk.com


2018-11-04 18:04:22 UTC+0000	INFO	Waiting for EC2 instances to terminate. This may take a few minutes.
2018-11-04 18:04:22 UTC+0000	INFO	Deleted Auto Scaling group policy named: arn:aws:autoscaling:us-east-1:972569889348:scalingPolicy:0ae239d7-8d2d-4faf-aa97-a83e73168d97:autoScalingGroupName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9:policyName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingScaleDownPolicy-1PGR0N4BMG0HC
2018-11-04 18:04:22 UTC+0000	INFO	Deleted Auto Scaling group policy named: arn:aws:autoscaling:us-east-1:972569889348:scalingPolicy:e17f894f-d892-4fe8-926e-112a343b3f1e:autoScalingGroupName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingGroup-1BL9XXCFWMRD9:policyName/awseb-e-fgbivj8xrv-stack-AWSEBAutoScalingScaleUpPolicy-10HAXHMEIFWLO
2018-11-04 18:04:22 UTC+0000	INFO	Deleted CloudWatch alarm named: awseb-e-fgbivj8xrv-stack-AWSEBCloudwatchAlarmLow-1MGVV778SHHQL
2018-11-04 18:04:22 UTC+0000	INFO	Deleted CloudWatch alarm named: awseb-e-fgbivj8xrv-stack-AWSEBCloudwatchAlarmHigh-12DG6HBGBVNMD
```
## Building a Multi-Container Application
1. Create the folders for the application
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>mkdir complex

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>cd complex

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex>mkdir worker

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex>mkdir server
```
# Docker and Kubernetes: The Complete Guide

> Github Repositories
- [docker-react](https://github.com/peelmicro/docker-react).
- [multi-docker](https://github.com/peelmicro/multi-docker).

The [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/docker-and-kubernetes-the-complete-guide/) Udemy course explains how to build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows.

> Table of contents
[[toc]]

> Related projects

| Project                                                                                                                                         | Dates               | Source Code                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| [.NET Core version of the "Docker and Kubernetes: The Complete Guide" Udemy course](/projects/dotnet-core-multi-docker.md) | Nov 2018 - Dic 2018 | [dotnet-core-multi-docker](https://github.com/peelmicro/dotnet-core-multi-docker) |
| [Java version of the "Docker and Kubernetes: The Complete Guide" Udemy course](/projects/java-multi-docker.md)        | Nov 2018 - Dic 2018 | [java-multi-docker](https://github.com/peelmicro/java-multi-docker)                                 |
| [Python version of the "Docker and Kubernetes: The Complete Guide" Udemy course](/projects/python-multi-docker.md)     | Nov 2018 - Dic 2018 | [python-multi-docker](https://github.com/peelmicro/python-multi-docker)                             |

## What I've learned
- Docker from scratch, no previous experience required
- Master the Docker CLI to inspect and debug running containers
- Build a CI + CD pipeline from scratch with Github, Travis CI, and AWS
- Understand the purpose and theory of Kubernetes by building a complex app
- Automatically deploy your code when it is pushed to Github!

## First steps with Docker
1. Check the current version of Docker
```bash
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
```bash
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
```bash
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
```bash
 C:\WINDOWS\system32>docker run busybox echo hi there
Unable to find image 'busybox:latest' locally
latest: Pulling from library/busybox
90e01955edcd: Pull complete
Digest: sha256:2a03a6059f21e150ae84b0973863609494aad70f0a80eaeb64bddd8d92465812
Status: Downloaded newer image for busybox:latest
hi there
```
```bash
C:\WINDOWS\system32>docker run busybox echo hi there
hi there
```
```bash
C:\WINDOWS\system32>docker run busybox echo bye there
bye there
```
- The `busy box` image has these default folders
```bash
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
```bash
C:\WINDOWS\system32>docker run busybox pwd
/
```
```bash
C:\WINDOWS\system32>docker run hello-world ls
docker: Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"ls\": executable file not found in $PATH": unknown.
```
```bash
C:\WINDOWS\system32>docker run hello-world echo hi there
docker: Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"echo\": executable file not found in $PATH": unknown.
```
5. The `ps` command
::: tip Command
docker `ps`
Show all the running docker containers 
:::
```bash
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```
- When we executed `docker run hello-world` or `docker run busybox ls` they were just executed and the stopped
```bash
C:\WINDOWS\system32>docker run busybox ping google.com
PING google.com (216.58.214.174): 56 data bytes
64 bytes from 216.58.214.174: seq=0 ttl=37 time=42.866 ms
64 bytes from 216.58.214.174: seq=1 ttl=37 time=17.430 ms
64 bytes from 216.58.214.174: seq=2 ttl=37 time=106.816 ms
64 bytes from 216.58.214.174: seq=3 ttl=37 time=15.636 ms
```
> Execute this in another command window
```bash
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   26 seconds ago      Up 25 seconds                           brave_montalcini
```
> Show all the containers ever created
```bash
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

```bash
C:\WINDOWS\system32>docker create hello-world
f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee
```
```bash
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
```bash
C:\WINDOWS\system32>docker start f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee
f4b5c1e7846623378ec54a684f26f358ee2df2ee735381cf2cf68b1e3d52b9ee

-a parameter is needed to attach the container and its output
```
```bash
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
```bash
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
```bash
C:\WINDOWS\system32>docker start -a 3fabe6651653 ls
you cannot start and attach multiple containers at once
```

7. The Docker `logs` command
::: tip Command
docker `logs` **[container id]** <br>
Get logs from a container 
:::
```bash
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
```bash
C:\WINDOWS\system32>docker create busybox echo hi there
e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
```
```bash
C:\WINDOWS\system32>docker start e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
e22ff84a283dc9a695acdfe775904d63c44a59be8bb83ae4f5b865313e07270c
```
```bash
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
```bash
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   34 minutes ago      Up 34 minutes                           brave_montalcini
```
```bash
C:\WINDOWS\system32>docker stop 539c07bb9ba1
539c07bb9ba1
```
> It takes a while
```bash
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```
9. The `kill` command
::: tip Command
docker kill **[container id]** <br>
Kills a container  <br>
It's the same as stop but it executed inmediatelly
:::
```bash
C:\WINDOWS\system32>docker start 539c07bb9ba1
539c07bb9ba1
```
```bash
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   42 minutes ago      Up 2 seconds                            brave_montalcini
```
```bash
C:\WINDOWS\system32>docker kill 539c07bb9ba1
539c07bb9ba1
```
> It's executed inmediatelly
```bash
C:\WINDOWS\system32>docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

### Working with `redis`
1. Execute redis installed on the Operating System
```bash
C:\WINDOWS\system32>redis-server
[16152] 01 Nov 17:05:47.520 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
[16152] 01 Nov 17:05:47.527 # Creating Server TCP listening socket *:6379: bind: No such file or directory
```
```bash
C:\WINDOWS\system32>redis-cli
127.0.0.1:6379> set mynumber 5
OK
127.0.0.1:6379> get mynumber
"5"
127.0.0.1:6379>
```
```bash
C:\WINDOWS\system32>redis-cli shutdown
It shoutdowns Redis
```
2. Execute `redis` through docker
```bash
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
```bash
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
```bash
C:\WINDOWS\system32>docker exec -it f949774360a8 redis-cli
127.0.0.1:6379> set myvalue 5
OK
127.0.0.1:6379> get myvalue
"5"
127.0.0.1:6379> 
```
```bash
C:\WINDOWS\system32>docker exec f949774360a8 redis-cli
```
> If we just put `-i` the iteration is not that nice as with `-it`
```bash
C:\WINDOWS\system32>docker exec -i f949774360a8 redis-cli
set myvalue 5
OK
get myvalue
5
```
> use `sh` to have full terminal access on the container
```bash
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
```bash
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
```bash
C:\WINDOWS\system32>docker run -it busybox sh
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # touch hithere
```
```bash
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
```bash
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # touch hithere
/ # ls
bin      dev      etc      hithere  home     proc     root     sys      tmp      usr      var
/ #
```
- Execute `ls` in the second container and it is not there
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS               NAMES
83db4887b686        peelmicro/redis:latest   "redis-server"           16 seconds ago      Up 15 seconds                           heuristic_khorana
9e62c378abbb        8ade2b72740d             "redis-server"           About an hour ago   Up About an hour                        gracious_shannon
261f3e65f035        busybox                  "sh"                     About an hour ago   Up About an hour                        nervous_lamport
3a4c383ab4e1        busybox                  "sh"                     About an hour ago   Up About an hour                        objective_curran
f949774360a8        redis                    "docker-entrypoint.s…"   2 hours ago         Up 2 hours          6379/tcp            eloquent_goodall
```
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/redis-image
$ docker commit -c 'CMD ["redis-server"]' 4f2ee675c090
sha256:535591b32510273b59703ec5cf447c66ec9afbe0ce34d5466d6d4464d00b9d1a
```
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/simpleweb
$ docker run -p 8080:8080  peelmicro/simpleweb
C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: driver failed programming external connectivity on endpoint optimistic_tesla (aebdca7e7ff39ee18e16316cec31601e215b35903a5a007155422fe5e54e79c9): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:8080:tcp:172.17.0.12:8080: input/output error.

https://stackoverflow.com/a/49694417/1059286
```
> After restarting Docker
```bash
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
```bash
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
```bash
C:\WINDOWS\system32>docker ps --all
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
539c07bb9ba1        busybox             "ping google.com"   24 minutes ago      Up 24 minutes                           brave_montalcini
```
```bash
C:\WINDOWS\system32>docker start -a 3fabe6651653
Error: No such container: 3fabe6651653
```
9. The command to stop all running containers
::: tip Command
Command to stop all running containers<br>
It has to be executed from `PowerShell`<br>
docker ps -a -q | ForEach { docker stop $_ }<br>
:::
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visists
$ dir
Dockerfile  docker-compose.yml  index.js  package.json
```
```bash
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
```bash
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
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up -d
Creating network "visits_default" with the default driver
Creating visits_node-app_1     ... done
Creating visits_redis-server_1 ... done
```
```bash
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
```bash
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
```bash
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
```bash
node-app_1      |
node-app_1      | Listening on port 8081
visits_node-app_1 exited with code 0
```
```bash
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
```yaml
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose up
Recreating visits_node-app_1 ...
Recreating visits_node-app_1 ... done
Attaching to visits_redis-server_1, visits_node-app_1
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 02 Nov 2018 18:31:52.764 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
```

- Browse to http://localhost:4001/
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                    NAMES
8c69374d1c39        visits_node-app     "npm start"              About a minute ago   Up 39 seconds       0.0.0.0:4001->8081/tcp   visits_node-app_1
b30f750c3cf2        redis               "docker-entrypoint.s…"   16 minutes ago       Up 16 minutes       6379/tcp                 visits_redis-server_1
```
```bash
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
```yaml
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/visits
$ docker-compose ps
The system cannot find the path specified.
        Name                       Command               State           Ports
---------------------------------------------------------------------------------------
visits_node-app_1       npm start                        Up      0.0.0.0:4001->8081/tcp
visits_redis-server_1   docker-entrypoint.sh redis ...   Up      6379/tcp
```
```bash
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
```bash
C:\WINDOWS\system32>npm i -g create-react-app
C:\Users\juan.pablo.perez\AppData\Roaming\npm\create-react-app -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\create-react-app\index.js
+ create-react-app@2.1.1
added 1 package from 1 contributor, removed 5 packages and updated 7 packages in 8.938s
```
2. Use the `create-react-app` to create the `frontend` app
```bash
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
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ ls
README.md  build  node_modules  package.json  public  src  yarn.lock

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ ls build
asset-manifest.json  favicon.ico  index.html  manifest.json  precache-manifest.47faa8bffed4235d63d799531863d6e6.js  service-worker.js  static
```
5. Execute the local version
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker build .
unable to prepare context: unable to evaluate symlinks in Dockerfile path: GetFileAttributesEx C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\frontend\Dockerfile: The system cannot find the file specified.
```
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```bash
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
```yaml
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker-compose up
Creating network "frontend_default" with the default driver
Building web
ERROR: Cannot locate specified Dockerfile: Dockerfile
```
- Modify the `Docker Compose` file
> `docker-compose.yml`
```yaml
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
```bash
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
```bash
web_1  | Compiling...
web_1  | Compiled successfully!
```
- Browse to http://localhost:3000/
```
logo
Bye there!
```
13. Run the tests
```bash
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
```bash
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
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
6a8d42debc1b        33167675358a        "npm run test"      4 minutes ago       Up 4 minutes                                 admiring_curie
921957b61741        33167675358a        "npm run test"      8 minutes ago       Up 8 minutes                                 sharp_pasteur
ffe059851944        33167675358a        "npm run test"      9 minutes ago       Up 9 minutes                                 nifty_babbage
bea374cf23b9        frontend_web        "npm run start"     22 minutes ago      Up 2 minutes        0.0.0.0:3000->3000/tcp   frontend_web_1
```
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
29421740f3dc        frontend_web        "npm run start"     14 minutes ago      Up 14 minutes       0.0.0.0:3000->3000/tcp   frontend_web_1
9394a1ae85d6        frontend_tests      "npm run test"      14 minutes ago      Up 13 minutes                                frontend_tests_1
6a8d42debc1b        33167675358a        "npm run test"      28 minutes ago      Up 28 minutes                                admiring_curie
921957b61741        33167675358a        "npm run test"      32 minutes ago      Up 32 minutes                                sharp_pasteur
ffe059851944        33167675358a        "npm run test"      34 minutes ago      Up 34 minutes                                nifty_babbage
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ docker attach 9394a1ae85d6
```
::: warning
It does nothing either 
:::
```bash
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
```bash
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
```bash
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git init
Reinitialized existing Git repository in C:/Users/juan.pablo.perez/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend/.git/
```
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/App.test.js.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "initial commit"
[master 99c8404] initial commit
 6 files changed, 67 insertions(+), 1 deletion(-)
 create mode 100644 .env
 create mode 100644 Dockerfile
 create mode 100644 Dockerfile.dev
 create mode 100644 docker-compose.yml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git remote add origin https://github.com/peelmicro/docker-react.git
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
```
```bash
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
```bash
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
```bash
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
```yaml
sudo: required
services:
  - docker
before_install:
  - docker build -t peelmicro/docker-react -f Dockerfile.dev .
script:
  - docker run peelmicro/docker-react npm run test -- --coverage
```
5. Commit and push the code
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Travis CI file"
[master 3a58220] added Travis CI file
 1 file changed, 7 insertions(+)
 create mode 100644 .travis.yml
```
```bash
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
```bash
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
```yaml
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
```bash
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
```yaml
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
```bash
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
```yaml
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
```bash
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Travis CI deploy config"
[master b876446] added Travis CI deploy config
 1 file changed, 12 insertions(+)
```
```bash
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
```bash
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
```yaml
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Travis CI deploy config removing bucket_path"
[master 8c7ee3d] added Travis CI deploy config removing bucket_path
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```bash
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
```bash   
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
```yaml
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "added Expose 80 on Dokerfile"
[master 1a8c196] added Expose 80 on Dokerfile
 1 file changed, 1 insertion(+)
```
```bash
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
```bash   
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
```yaml
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git commit -m "modified the way that the package.json is copied on Dokerfile"
[master ea69b13] modified the way that the package.json is copied on Dokerfile
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```bash
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
```bash   
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
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (master)
$ git checkout -b feature
Switched to a new branch 'feature'
```
2. Make some changes on App.js
3. Commit and push the changes to the `feature` branch
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (feature)
$ git add .
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/frontend (feature)
$ git commit -m "change app text"
[feature da2585a] change app text
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```bash
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
```bash
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
```bash
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
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>mkdir complex

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>cd complex

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex>mkdir worker

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex>mkdir server
```
### Create the `client` app
1. Use `create-react-app` to create the `client` app
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ create-react-app client

Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex\client.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.9.2
warning ..\package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1283(node:20512) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
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
Done in 78.37s.

Initialized a git repository.

Success! Created client at C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex\client
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

  cd client
  yarn start

Happy hacking!
```
2. Create the `Dockerfile.dev` file
> `Dockerfile.dev'
```yaml
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
```

3. Build the image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/client (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  138.5MB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> 6b43d0d016f7
Step 4/6 : RUN npm install
 ---> Running in 063d9fca581d
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1702 packages from 666 contributors and audited 35705 packages in 53.635s
found 0 vulnerabilities

Removing intermediate container 063d9fca581d
 ---> 89f3181f7390
Step 5/6 : COPY . .
 ---> e4e2215fcaa5
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in eea2b0a6b8d2
Removing intermediate container eea2b0a6b8d2
 ---> 3df84dd1d1a2
Successfully built 3df84dd1d1a2
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

4. Run the new Image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/client (master)
$ docker run 3df84dd1d1a2

> client@0.1.0 start /app
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.17.0.3:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
### Create the `server` app
1. Create the `Dockerfile.dev` file
> `Dockerfile.dev`
```yaml
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```
2. Build the image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/server
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  6.656kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> 75d1f58eb17c
Step 4/6 : RUN npm install
 ---> Running in be27b20ed172

> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 304 packages from 189 contributors and audited 2423 packages in 12.515s
found 0 vulnerabilities

Removing intermediate container be27b20ed172
 ---> 73e942399d21
Step 5/6 : COPY . .
 ---> 5159548cec31
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in bbaa2265d2fb
Removing intermediate container bbaa2265d2fb
 ---> 4bb93b3ce3d4
Successfully built 4bb93b3ce3d4
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
3. Run the new Image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/server
$ docker run 4bb93b3ce3d4

> @ dev /app
> nodemon

[nodemon] 1.18.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
Listening
{ Error: connect ECONNREFUSED 127.0.0.1:5432
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1117:14)
  errno: 'ECONNREFUSED',
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 5432 }
```

### Create the `worker` app
1. Create the `Dockerfile.dev` file
> `Dockerfile.dev`
```yaml
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"] 
```
2. Build the image
```bash
  Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/worker
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon   5.12kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> 55fca9e60b08
Step 4/6 : RUN npm install
 ---> Running in d0e63267466f

> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 237 packages from 140 contributors and audited 2256 packages in 9.855s
found 0 vulnerabilities

Removing intermediate container d0e63267466f
 ---> 630bae4161f4
Step 5/6 : COPY . .
 ---> 9bcefdbb9302
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in 024e8a52179d
Removing intermediate container 024e8a52179d
 ---> 7d524be5f965
Successfully built 7d524be5f965
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
3. Run the new Image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/worker
$ docker run 7d524be5f965

> @ dev /app
> nodemon

[nodemon] 1.18.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
```
### Create the `docker-compose`
1. Create the `docker-compose.yml` file
> `docker-compose.yml`
```yaml
version: '3'
services:
  postgres:
    image: 'postgres:latest'
```
2. Run the `docker-compose`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ docker-compose up
Creating network "complex_default" with the default driver
Building web
Traceback (most recent call last):
  File "docker-compose", line 6, in <module>
  File "compose\cli\main.py", line 71, in main
  File "compose\cli\main.py", line 127, in perform_command
  File "compose\cli\main.py", line 1052, in up
  File "compose\cli\main.py", line 1048, in up
  File "compose\project.py", line 471, in up
  File "compose\service.py", line 352, in ensure_image_exists
  File "compose\service.py", line 1067, in build
  File "site-packages\docker\api\build.py", line 154, in build
  File "site-packages\docker\utils\build.py", line 31, in tar
  File "site-packages\docker\utils\build.py", line 79, in create_archive
  File "tarfile.py", line 1803, in gettarinfo
FileNotFoundError: [WinError 3] The system cannot find the path specified: 'C:\\Users\\juan.pablo.perez\\OneDrive\\Training\\Docker\\DockerAndKubernetes.TheCompleteGuide\\complex\\client\\node_modules\\babel-preset-react-app\\node_modules\\@babel\\plugin-transform-react-constant-elements\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js'
[34404] Failed to execute script docker-compose
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ docker-compose up
Pulling postgres (postgres:latest)...
latest: Pulling from library/postgres
f17d81b4b692: Already exists
c1f213be5edb: Pull complete
9c79723dc510: Pull complete
603a66804109: Pull complete
b4f1b901e523: Pull complete
99d9650419de: Pull complete
02d87bb25bad: Pull complete
333a24caa91e: Pull complete
2ace4c87570a: Pull complete
3add70ce5596: Pull complete
947f7d36d500: Pull complete
5e194c53f09f: Pull complete
e0d520465b2d: Pull complete
97f206959126: Pull complete
Digest: sha256:76ff79d72ef95b7c136037c0e8ab629914a8d5e430a3a2aef7d959b5da9a33c5
Status: Downloaded newer image for postgres:latest
Creating complex_postgres_1 ... done
Attaching to complex_postgres_1
postgres_1  | The files belonging to this database system will be owned by user "postgres".
postgres_1  | This user must also own the server process.
postgres_1  |
postgres_1  | The database cluster will be initialized with locale "en_US.utf8".
postgres_1  | The default database encoding has accordingly been set to "UTF8".
postgres_1  | The default text search configuration will be set to "english".
postgres_1  |
postgres_1  | Data page checksums are disabled.
postgres_1  |
postgres_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
postgres_1  | creating subdirectories ... ok
postgres_1  | selecting default max_connections ... 100
postgres_1  | selecting default shared_buffers ... 128MB
postgres_1  | selecting dynamic shared memory implementation ... posix
postgres_1  | creating configuration files ... ok
postgres_1  | running bootstrap script ... ok
postgres_1  | performing post-bootstrap initialization ... ok
postgres_1  | syncing data to disk ... ok
postgres_1  |
postgres_1  | Success. You can now start the database server using:
postgres_1  |
postgres_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
postgres_1  |
postgres_1  |
postgres_1  | WARNING: enabling "trust" authentication for local connections
postgres_1  | You can change this by editing pg_hba.conf or using the option -A, or
postgres_1  | --auth-local and --auth-host, the next time you run initdb.
postgres_1  | ****************************************************
postgres_1  | WARNING: No password has been set for the database.
postgres_1  |          This will allow anyone with access to the
postgres_1  |          Postgres port to access your database. In
postgres_1  |          Docker's default configuration, this is
postgres_1  |          effectively any other container on the same
postgres_1  |          system.
postgres_1  |
postgres_1  |          Use "-e POSTGRES_PASSWORD=password" to set
postgres_1  |          it in "docker run".
postgres_1  | ****************************************************
postgres_1  | waiting for server to start....2018-11-05 17:39:47.929 UTC [41] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-05 17:39:47.957 UTC [42] LOG:  database system was shut down at 2018-11-05 17:39:47 UTC
postgres_1  | 2018-11-05 17:39:47.966 UTC [41] LOG:  database system is ready to accept connections
postgres_1  |  done
postgres_1  | server started
postgres_1  |
postgres_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
postgres_1  |
postgres_1  | 2018-11-05 17:39:48.019 UTC [41] LOG:  received fast shutdown request
postgres_1  | waiting for server to shut down....2018-11-05 17:39:48.024 UTC [41] LOG:  aborting any active transactions
postgres_1  | 2018-11-05 17:39:48.029 UTC [41] LOG:  background worker "logical replication launcher" (PID 48) exited with exit code 1
postgres_1  | 2018-11-05 17:39:48.029 UTC [43] LOG:  shutting down
postgres_1  | 2018-11-05 17:39:48.061 UTC [41] LOG:  database system is shut down
postgres_1  |  done
postgres_1  | server stopped
postgres_1  |
postgres_1  | PostgreSQL init process complete; ready for start up.
postgres_1  |
postgres_1  | 2018-11-05 17:39:48.133 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-05 17:39:48.133 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-05 17:39:48.141 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-05 17:39:48.160 UTC [50] LOG:  database system was shut down at 2018-11-05 17:39:48 UTC
postgres_1  | 2018-11-05 17:39:48.170 UTC [1] LOG:  database system is ready to accept connections
```
3. Modify the `docker-compose.yml` file
> `docker-compose.yml`
```yaml
version: '3'
services:
  postgres:
    image: 'postgres:latest'
  redis:
    image: 'redis:latest'
  server:
    build: 
      dockerfile: Dockerfile.dev
      context: ./server
    volumes:
      - /app/node_modules
      - ./server:/app
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - PGUSER=postgres
      - PGHOST=postgres
      - PGDATABASE=postgres
      - PGPASSWORD=postgres_password
      - PGPORT=5432
  client:
    build: 
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - /app/node_modules
      - ./client:/app
  worker:
    build: 
      dockerfile: Dockerfile.dev
      context: ./worker
    volumes:
      - /app/node_modules
      - ./worker:/app      
```
4. Run the `docker-compose` again
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ docker-compose up
Building server
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> fb4e9e3b94bc
Step 4/6 : RUN npm install
 ---> Running in cff49537f852

> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 304 packages from 189 contributors and audited 2423 packages in 10.346s
found 0 vulnerabilities

Removing intermediate container cff49537f852
 ---> 8a4055e07d27
Step 5/6 : COPY . .
 ---> ea5a16494f1b
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in e8d26114ba2a
Removing intermediate container e8d26114ba2a
 ---> a363eb84a6a1
Successfully built a363eb84a6a1
Successfully tagged complex_server:latest
WARNING: Image for service server was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Starting complex_postgres_1 ... done
Creating complex_redis_1    ... done
Creating complex_server_1   ... done
Attaching to complex_postgres_1, complex_redis_1, complex_server_1
postgres_1  | 2018-11-05 17:59:48.911 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-05 17:59:48.911 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-05 17:59:48.937 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-05 17:59:48.984 UTC [21] LOG:  database system was shut down at 2018-11-05 17:59:21 UTC
postgres_1  | 2018-11-05 17:59:48.996 UTC [1] LOG:  database system is ready to accept connections
redis_1     | 1:C 05 Nov 2018 17:59:49.373 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 05 Nov 2018 17:59:49.373 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 05 Nov 2018 17:59:49.373 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 05 Nov 2018 17:59:49.381 * Running mode=standalone, port=6379.
redis_1     | 1:M 05 Nov 2018 17:59:49.381 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 05 Nov 2018 17:59:49.381 # Server initialized
redis_1     | 1:M 05 Nov 2018 17:59:49.381 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 05 Nov 2018 17:59:49.381 * Ready to accept connections
server_1    |
server_1    | > @ dev /app
server_1    | > nodemon
server_1    |
server_1    | [nodemon] 1.18.3
server_1    | [nodemon] to restart at any time, enter `rs`
server_1    | [nodemon] watching: *.*
server_1    | [nodemon] starting `node index.js`
server_1    | Listening
```
5. Create the final version `docker-compose.yml` file
> `docker-compose.yml`
```yaml
version: '3'
services:
  postgres:
    image: 'postgres:latest'
  redis:
    image: 'redis:latest'
  nginx:
    restart: always
    build: 
      dockerfile: Dockerfile.dev
      context: ./nginx
    ports:
      - '3050:80'
  api:
    build: 
      dockerfile: Dockerfile.dev
      context: ./server
    volumes:
      - /app/node_modules
      - ./server:/app
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - PGUSER=postgres
      - PGHOST=postgres
      - PGDATABASE=postgres
      - PGPASSWORD=postgres_password
      - PGPORT=5432
  client:
    build: 
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - /app/node_modules
      - ./client:/app
  worker:
    build: 
      dockerfile: Dockerfile.dev
      context: ./worker
    volumes:
      - /app/node_modules
      - ./worker:/app      
```
6.- Run the final version
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ docker-compose up --build
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> 07f910ee6e30
Successfully built 07f910ee6e30
Successfully tagged complex_nginx:latest
Building api
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> fb4e9e3b94bc
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 8a4055e07d27
Step 5/6 : COPY . .
 ---> e868532f0df9
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in efd772095cd8
Removing intermediate container efd772095cd8
 ---> 05e3f212205a
Successfully built 05e3f212205a
Successfully tagged complex_api:latest
Building client
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> 8b4466a525be
Step 4/6 : RUN npm install
 ---> Running in 8875a46e025f
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1702 packages from 666 contributors and audited 35705 packages in 51.375s
found 0 vulnerabilities

Removing intermediate container 8875a46e025f
 ---> 8a1ca040e40f
Step 5/6 : COPY . .
 ---> 6ff4f0f3d765
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 5cc122b56525
Removing intermediate container 5cc122b56525
 ---> a766e9b2f044
Successfully built a766e9b2f044
Successfully tagged complex_client:latest
Building worker
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> c2cb813639f0
Step 4/6 : RUN npm install
 ---> Running in 3ce21ab6b52f

> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 237 packages from 140 contributors and audited 2256 packages in 8.784s
found 0 vulnerabilities

Removing intermediate container 3ce21ab6b52f
 ---> 554d424dca21
Step 5/6 : COPY . .
 ---> 1348231bbebe
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in 86f18ce51c00
Removing intermediate container 86f18ce51c00
 ---> af97232233da
Successfully built af97232233da
Successfully tagged complex_worker:latest
Starting complex_redis_1    ... done
Starting complex_postgres_1 ... done
Creating complex_client_1   ... done
Creating complex_api_1      ... done
Creating complex_nginx_1    ... done
Creating complex_worker_1   ... done
Attaching to complex_redis_1, complex_postgres_1, complex_nginx_1, complex_worker_1, complex_api_1, complex_client_1
redis_1     | 1:C 06 Nov 2018 16:54:11.712 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 06 Nov 2018 16:54:11.712 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 06 Nov 2018 16:54:11.712 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 06 Nov 2018 16:54:11.725 * Running mode=standalone, port=6379.
redis_1     | 1:M 06 Nov 2018 16:54:11.725 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 06 Nov 2018 16:54:11.725 # Server initialized
redis_1     | 1:M 06 Nov 2018 16:54:11.725 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 06 Nov 2018 16:54:11.742 * DB loaded from disk: 0.017 seconds
redis_1     | 1:M 06 Nov 2018 16:54:11.742 * Ready to accept connections
postgres_1  | 2018-11-06 16:54:12.357 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-06 16:54:12.357 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-06 16:54:12.371 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-06 16:54:12.395 UTC [22] LOG:  database system was shut down at 2018-11-06 05:22:54 UTC
postgres_1  | 2018-11-06 16:54:12.428 UTC [1] LOG:  database system is ready to accept connections
nginx_1     | 2018/11/06 16:54:12 [emerg] 1#1: host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
nginx_1     | nginx: [emerg] host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
worker_1    |
worker_1    | > @ dev /app
worker_1    | > nodemon
worker_1    |
worker_1    | [nodemon] 1.18.3
worker_1    | [nodemon] to restart at any time, enter `rs`
worker_1    | [nodemon] watching: *.*
worker_1    | [nodemon] starting `node index.js`
api_1       |
api_1       | > @ dev /app
api_1       | > nodemon
api_1       |
api_1       | [nodemon] 1.18.3
api_1       | [nodemon] to restart at any time, enter `rs`
api_1       | [nodemon] watching: *.*
api_1       | [nodemon] starting `node index.js`
api_1       | Listening
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
client_1    | Starting the development server...
client_1    |
client_1    | Compiled successfully!
client_1    |
client_1    | You can now view client in the browser.
client_1    |
client_1    |   Local:            http://localhost:3000/
client_1    |   On Your Network:  http://172.19.0.7:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
client_1    |
Gracefully stopping... (press Ctrl+C again to force)
Stopping complex_worker_1   ... done
Stopping complex_api_1      ... done
Stopping complex_nginx_1    ... done
Stopping complex_client_1   ... done
Stopping complex_redis_1    ... done
Stopping complex_postgres_1 ... done
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ docker-compose up
Starting complex_redis_1    ... done
Starting complex_client_1   ... done
Starting complex_api_1      ... done
Starting complex_postgres_1 ... done
Starting complex_nginx_1    ... done
Starting complex_worker_1   ... done
Attaching to complex_redis_1, complex_client_1, complex_nginx_1, complex_postgres_1, complex_worker_1, complex_api_1
redis_1     | 1:C 06 Nov 2018 16:56:32.278 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 06 Nov 2018 16:56:32.278 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 06 Nov 2018 16:56:32.278 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 06 Nov 2018 16:56:32.279 * Running mode=standalone, port=6379.
redis_1     | 1:M 06 Nov 2018 16:56:32.279 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 06 Nov 2018 16:56:32.279 # Server initialized
redis_1     | 1:M 06 Nov 2018 16:56:32.279 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 06 Nov 2018 16:56:32.279 * DB loaded from disk: 0.000 seconds
redis_1     | 1:M 06 Nov 2018 16:56:32.279 * Ready to accept connections
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
postgres_1  | 2018-11-06 16:56:33.533 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-06 16:56:33.533 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-06 16:56:33.614 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-06 16:56:33.678 UTC [22] LOG:  database system was shut down at 2018-11-06 16:56:10 UTC
postgres_1  | 2018-11-06 16:56:33.692 UTC [1] LOG:  database system is ready to accept connections
worker_1    |
worker_1    | > @ dev /app
worker_1    | > nodemon
worker_1    |
api_1       |
api_1       | > @ dev /app
api_1       | > nodemon
api_1       |
worker_1    | [nodemon] 1.18.3
worker_1    | [nodemon] to restart at any time, enter `rs`
worker_1    | [nodemon] watching: *.*
worker_1    | [nodemon] starting `node index.js`
api_1       | [nodemon] 1.18.3
api_1       | [nodemon] to restart at any time, enter `rs`
api_1       | [nodemon] watching: *.*
api_1       | [nodemon] starting `node index.js`
api_1       | Listening
client_1    | Starting the development server...
client_1    |
client_1    | Compiled successfully!

client_1    |
client_1    | You can now view client in the browser.
client_1    |
client_1    |   Local:            http://localhost:3000/
client_1    |   On Your Network:  http://172.19.0.4:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
client_1    |
```
7. Browse to  http://localhost:3050/
- And the previous react app (frontend) is running
```
logo
Welcome to React
Home
Other Page
```
8. Clean up everything and build it again
```bash
$ docker system prune
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all build cache
Are you sure you want to continue? [y/N] y
Deleted Containers:
7ca41cea2cba87b6aefcab16c7d958234666433494f0b35a19fb073ed28cb1a6
ffdbcf264b108016a3cdae47b2742e057add728e33b4ef14444bae671b5c25cb
d6dfa74b69bc132504eed2cdec1fc8778580ba813b7e0edc5cb9a24a1d55c656
e3a38cb01334560a9c954ba2cd26c27473c7f8f7b48889f2009047eb976870f9
82ce616ebc3722fc1a63a661518f0fef100023a39f09ec6f5588800631bc5f27
fff46da09989e016d78946d06fe2fbf220877c124d256498573a65e6d708ad20
1d3b93ed3cbd1cf8cbe954737a60e5b92a91271da9b964755b117de277957c3f
825abc21bc36e93f8a2a161629446f72579033bbe6dbc2a36c78846e96d67de1
0df7a234b6900c388a50da437e67f6a46e640e1f9444c345dfdba044da082dae
7421c4b411bc4cf35643ba3b13794dcd0935109a87eee7578957a6131acf5c41
21ff4d5e0caf3ac836b67c212fa27d830808ac33be953a07bd78f55bae7541ae
56b0c4d9c207ca9b7b583503d6865e614c5bd3fa617b0f651e23219493cc6458
d16e3657f87b4a93d5ca1366028665bece721cf1e3100d50fb065f77b5046978
29421740f3dc91616aad04155467a197f940bd8461b2f1b5d5fa281e58cd2157
9394a1ae85d658cc2e53b9c1e1dcf6f3a286a469186b972e2a26ef4357a8e8de
6a8d42debc1bc1dc32024fb0478b1dfc6ea70383500b7dfd870ab1529bb13e01
921957b61741dc8091ff8426965bd114b39fee4be5f5eee6c34b493250eee4aa
ffe059851944cfb890308633be9fc379a5ff494f94efc7117a0dfefae0191a47
37cc9633e90f75b427daf8321ea69014f9f9c773ca41f99f7953dc6eaf7d1005
cdae1ef6c5b94b63d7a9ee691241251afcfa01ac876b544080c570b0290b2301
bd7a3725e6c9177c9f30763192e5cd370de5a5b554bb31261715300b1df043cc
e845c632c3191c5df69a45067b922d44d003a62949ed0d6651453228718bc9e1

Deleted Networks:
frontend_default
complex_default

Deleted Images:
deleted: sha256:67402d310ff7263e037f6add9f097a2f307b4c3db8317c27a4eda5fcfbac82ca
deleted: sha256:e724ffd85c2efd57d13d89a8ea2f162446e8ed3a248f82a58a356fe3f30d8a2e
deleted: sha256:2e3cbe7a2849b20221a2ca310b8292d023a725d2e43b39fc7b4d9c5f0831bb01
deleted: sha256:f7487e10e6f3d6662877ea9db5f985dc47d4903063ea6c6a09b0519cc5233960
deleted: sha256:4f3647afc118060db725681c7e2eb824b161aa7fdd09a7def0e54263a10a5134
deleted: sha256:bba8f746d79b415733a398b685d3e603da2ad06d1f6d36490b165a01256968a6
deleted: sha256:f1b865a9617b4c1ea31cf2225cbb9d742788c69592e0520b1fcd0ca89f81c29c
deleted: sha256:33167675358a331c703d9514f8afa2ec409814f2d20d69dc5bbcceacbe4554d4
deleted: sha256:f5b001e766fd5e5d38874a30577a1d4138dc83a4688d7cfa69c9172d6a6b609f
deleted: sha256:27a4f96ea3feac6bce6a32f5bf746446dba8e3aefebd8c5ee1df2ae6177dd2a5
deleted: sha256:4bb93b3ce3d4158aaec0fe5f53e6f1b109142bd5192481b8ec0227db9949eac2
deleted: sha256:5159548cec3144fa1bf0a423ed79a54425c202f3b0cb0e0065f027bb8cddf27f
deleted: sha256:2da979e0b6a5ffb26b7b184cc2e63447fe92dd7f7b40fc36524765ed4fd0283d
deleted: sha256:73e942399d212e6bf82fdd12215705e946e256c6ec6c6915adbbcea91cc77054
deleted: sha256:18fcf364e1fe517833c5b81be4339cc6982141d517e91e9d6ab69c1c85cfba93
deleted: sha256:75d1f58eb17cdcd633d216e2d8524fc13a6a4a2337d2b3757c69474bbbddc571
deleted: sha256:c3a8f85b76cc642b96720de6213fa5207a349a9ddd25619595d5d4bd9b7f7bce
deleted: sha256:3df84dd1d1a2da3c789d3a76dacc9fcc963c400245f6a481080b43a4b8781709
deleted: sha256:e4e2215fcaa525a05664a65826ac6788e75850f589dbde6b81546b0f8db9fcb9
deleted: sha256:0da2ff6e3faa37977485977b0d9b32c71d673e7f697505eb88770eb2a5d80d45
deleted: sha256:89f3181f73907da83b22de0aae13b5ee408d18106302015dde0bed62a46f290e
deleted: sha256:95e7afbf0d16fb3d3ea024d459a2ec0b6090e4493173cd6f692a583526d2e820
deleted: sha256:6b43d0d016f72afa44e73cc1b4270322116140bcebe7e744bdb6bdd67dc16d10
deleted: sha256:898af495bd8690dce80e29f4d4d56072eb7ce4241a49d7cfadeb6e9485a63073
deleted: sha256:7d524be5f965ccb04de5472dfba6d7a3f919647673b3beaae57e2bdee84b7cb9
deleted: sha256:9bcefdbb93027935a5c0002a7c9eb7e52153e1f3f9cb07942a37ce38fc46b91f
deleted: sha256:c36fa52d6925b0fca727c89134fd79c6798e9776b531612987078022af16ad5d
deleted: sha256:630bae4161f4f8b5a36dae7e095f11d2c2e45bb462efe449ca67786ca56bc369
deleted: sha256:91daf8699816fcaa4cef2ac2a3846aa5a7188fb4ec00fb25e8e02b391c9210af
deleted: sha256:55fca9e60b08706944457f1d2591b21ed0bc2cd97dec9140dd9e89a4d1907b02
deleted: sha256:5b4de211345ceb5ff748e6c68cb3ab4d3c4d7e368ea4597760d531dbca6b7901
deleted: sha256:78c8ea0dcea5bf4d9940894d9fa027b1314080aee7fd5a9ac56da04c59551b18
deleted: sha256:7272a303c034ab12ec160d38f8f3d381498fff432cdea055824287096f88d1fb
deleted: sha256:8d0c5316a644e58e00f0ebcdc56d5ec0d164e6dfa9174c152c517afb6b94788e
deleted: sha256:78fd76eb446c1dc1b4d4fe44d2e36ce89a2ea83244a950e61253424957e5037a
deleted: sha256:7fe11a5c21c866b6661728593ab2d3b1df0e52c0b2bcea8267921bcdc2919f68

Total reclaimed space: 404.5MB
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex
$ docker-compose up --build
Creating network "complex_default" with the default driver
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> 07f910ee6e30
Successfully built 07f910ee6e30
Successfully tagged complex_nginx:latest
Building api
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> fb4e9e3b94bc
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 8a4055e07d27
Step 5/6 : COPY . .
 ---> Using cache
 ---> e868532f0df9
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Using cache
 ---> 05e3f212205a
Successfully built 05e3f212205a
Successfully tagged complex_api:latest
Building client
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> 8b4466a525be
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 8a1ca040e40f
Step 5/6 : COPY . .
 ---> d142e7d899ce
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in c23781f2f99b
Removing intermediate container c23781f2f99b
 ---> e6c9a9995337
Successfully built e6c9a9995337
Successfully tagged complex_client:latest
Building worker
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> c2cb813639f0
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 554d424dca21
Step 5/6 : COPY . .
 ---> d540132f46d0
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in 48a071a9d206
Removing intermediate container 48a071a9d206
 ---> 6897857812bb
Successfully built 6897857812bb
Successfully tagged complex_worker:latest
Creating complex_api_1      ... done
Creating complex_client_1   ... done
Creating complex_redis_1    ... done
Creating complex_nginx_1    ... done
Creating complex_postgres_1 ... done
Creating complex_worker_1   ... done
Attaching to complex_redis_1, complex_nginx_1, complex_postgres_1, complex_worker_1, complex_api_1, complex_client_1
redis_1     | 1:C 06 Nov 2018 17:08:21.729 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 06 Nov 2018 17:08:21.729 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 06 Nov 2018 17:08:21.729 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 06 Nov 2018 17:08:21.730 * Running mode=standalone, port=6379.
redis_1     | 1:M 06 Nov 2018 17:08:21.730 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 06 Nov 2018 17:08:21.730 # Server initialized
redis_1     | 1:M 06 Nov 2018 17:08:21.730 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 06 Nov 2018 17:08:21.730 * Ready to accept connections
nginx_1     | 2018/11/06 17:08:22 [emerg] 1#1: host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
nginx_1     | nginx: [emerg] host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
postgres_1  | The files belonging to this database system will be owned by user "postgres".
postgres_1  | This user must also own the server process.
postgres_1  |
postgres_1  | The database cluster will be initialized with locale "en_US.utf8".
postgres_1  | The default database encoding has accordingly been set to "UTF8".
postgres_1  | The default text search configuration will be set to "english".
postgres_1  |
postgres_1  | Data page checksums are disabled.
postgres_1  |
postgres_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
postgres_1  | creating subdirectories ... ok
worker_1    |
worker_1    | > @ dev /app
worker_1    | > nodemon
worker_1    |
worker_1    | [nodemon] 1.18.3
worker_1    | [nodemon] to restart at any time, enter `rs`
worker_1    | [nodemon] watching: *.*
worker_1    | [nodemon] starting `node index.js`
api_1       |
api_1       | > @ dev /app
api_1       | > nodemon
api_1       |
api_1       | [nodemon] 1.18.3
api_1       | [nodemon] to restart at any time, enter `rs`
postgres_1  | selecting default max_connections ... 100
api_1       | [nodemon] watching: *.*
api_1       | [nodemon] starting `node index.js`
api_1       | Listening
api_1       | { Error: connect ECONNREFUSED 172.18.0.4:5432
api_1       |     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1117:14)
api_1       |   errno: 'ECONNREFUSED',
api_1       |   code: 'ECONNREFUSED',
api_1       |   syscall: 'connect',
api_1       |   address: '172.18.0.4',
api_1       |   port: 5432 }
postgres_1  | selecting default shared_buffers ... 128MB
postgres_1  | selecting dynamic shared memory implementation ... posix
postgres_1  | creating configuration files ... ok
postgres_1  | running bootstrap script ... ok
postgres_1  | performing post-bootstrap initialization ... ok
postgres_1  | syncing data to disk ... ok
postgres_1  |
postgres_1  | Success. You can now start the database server using:
postgres_1  |
postgres_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
postgres_1  |
postgres_1  |
postgres_1  | WARNING: enabling "trust" authentication for local connections
postgres_1  | You can change this by editing pg_hba.conf or using the option -A, or
postgres_1  | --auth-local and --auth-host, the next time you run initdb.
postgres_1  | ****************************************************
postgres_1  | WARNING: No password has been set for the database.
postgres_1  |          This will allow anyone with access to the
postgres_1  |          Postgres port to access your database. In
postgres_1  |          Docker's default configuration, this is
postgres_1  |          effectively any other container on the same
postgres_1  |          system.
postgres_1  |
postgres_1  |          Use "-e POSTGRES_PASSWORD=password" to set
postgres_1  |          it in "docker run".
postgres_1  | ****************************************************
postgres_1  | waiting for server to start....2018-11-06 17:08:26.476 UTC [41] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-06 17:08:26.574 UTC [42] LOG:  database system was shut down at 2018-11-06 17:08:25 UTC
postgres_1  | 2018-11-06 17:08:26.586 UTC [41] LOG:  database system is ready to accept connections
postgres_1  |  done
postgres_1  | server started
postgres_1  |
postgres_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
postgres_1  |
postgres_1  | waiting for server to shut down...2018-11-06 17:08:26.633 UTC [41] LOG:  received fast shutdown request
postgres_1  | .2018-11-06 17:08:26.638 UTC [41] LOG:  aborting any active transactions
postgres_1  | 2018-11-06 17:08:26.643 UTC [41] LOG:  background worker "logical replication launcher" (PID 48) exited with exit code 1
postgres_1  | 2018-11-06 17:08:26.643 UTC [43] LOG:  shutting down
postgres_1  | 2018-11-06 17:08:26.729 UTC [41] LOG:  database system is shut down
postgres_1  |  done
postgres_1  | server stopped
postgres_1  |
postgres_1  | PostgreSQL init process complete; ready for start up.
postgres_1  |
postgres_1  | 2018-11-06 17:08:26.746 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-06 17:08:26.746 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-06 17:08:26.767 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-06 17:08:26.788 UTC [50] LOG:  database system was shut down at 2018-11-06 17:08:26 UTC
postgres_1  | 2018-11-06 17:08:26.795 UTC [1] LOG:  database system is ready to accept connections
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
client_1    | Starting the development server...
client_1    |
```
9. Set up Git
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex$ git init
Initialized empty Git repository in C:/Users/juan.pablo.perez/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/.git/
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        client/
        docker-compose.yml
        nginx/
        server/
        worker/

nothing added to commit but untracked files present (use "git add" to track)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory.
warning: adding embedded git repository: client
hint: You've added another git repository inside your current repository.
hint: Clones of the outer repository will not contain the contents of
hint: the embedded repository and will not know how to obtain it.
hint: If you meant to add a submodule, use:
hint:
hint:   git submodule add <url> client
hint:
hint: If you added this path by mistake, you can remove it from the
hint: index with:
hint:
hint:   git rm --cached client
hint:
hint: See "git help submodule" for more information.
warning: LF will be replaced by CRLF in server/index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/keys.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in worker/index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in worker/keys.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in worker/package.json.
The file will have its original line endings in your working directory.
```
```bash
C:\WINDOWS\system32>cd C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex\client
```
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex\client>rmdir .git /s
.git, Are you sure (Y/N)? y
```
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex\client>
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   README.md
        new file:   client/.gitignore
        new file:   client/Dockerfile
        new file:   client/Dockerfile.dev
        new file:   client/README.md
        new file:   client/nginx/default.conf
        new file:   client/package.json
        new file:   client/public/favicon.ico
        new file:   client/public/index.html
        new file:   client/public/manifest.json
        new file:   client/src/App.css
        new file:   client/src/App.js
        new file:   client/src/App.test.js
        new file:   client/src/Fib.js
        new file:   client/src/OtherPage.js
        new file:   client/src/index.css
        new file:   client/src/index.js
        new file:   client/src/logo.svg
        new file:   client/src/serviceWorker.js
        new file:   client/yarn.lock
        new file:   docker-compose.yml
        new file:   nginx/Dockerfile
        new file:   nginx/Dockerfile.dev
        new file:   nginx/default.conf
        new file:   server/Dockerfile
        new file:   server/Dockerfile.dev
        new file:   server/index.js
        new file:   server/keys.js
        new file:   server/package.json
        new file:   worker/Dockerfile
        new file:   worker/Dockerfile.dev
        new file:   worker/index.js
        new file:   worker/keys.js
        new file:   worker/package.json

```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git remote add origin https://github.com/peelmicro/multi-docker.git
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push -u origin master
Counting objects: 40, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (39/39), done.
Writing objects: 100% (40/40), 91.90 KiB | 1.19 MiB/s, done.
Total 40 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/peelmicro/multi-docker/pull/new/master
remote:
To https://github.com/peelmicro/multi-docker.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

10. Set up Travis CI.
> `.travis.yml`
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
before_install:
  - docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client
script:
  - docker run peelmicro/test-client npm run test -- --coverage
after_success:
  - docker build -t peelmicro/multi-client ./client
  - docker build -t peelmicro/multi-nginx ./nginx
  - docker build -t peelmicro/multi-server ./server
  - docker build -t peelmicro/multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/multi-client
  - docker push peelmicro/multi-nginx
  - docker push peelmicro/multi-server
  - docker push peelmicro/multi-worker
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)$ git statusOn branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .travis.yml

nothing added to commit but untracked files present (use "git add" to track)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "changed travis yml"
[master 089e934] changed travis yml
 1 file changed, 34 insertions(+)
 create mode 100644 .travis.yml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin HEAD
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 760 bytes | 253.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/peelmicro/multi-docker.git
   2892ae1..089e934  HEAD -> master
```
```bash
5.78s$ docker run [secure]/test-client npm run test -- --coverage
> client@0.1.0 test /app
> react-scripts test "--coverage"
PASS src/App.test.js
  ✓ renders without crashing (2ms)
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |        0 |        0 |        0 |        0 |                   |
 App.js           |        0 |      100 |        0 |        0 |                10 |
 Fib.js           |        0 |      100 |        0 |        0 |... 49,50,57,61,67 |
 OtherPage.js     |        0 |      100 |        0 |        0 |                 5 |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.194s
Ran all test suites.
The command "docker run [secure]/test-client npm run test -- --coverage" exited with 0.
after_success.1
66.76s$ docker build -t [secure]/multi-client ./client
Sending build context to Docker daemon  340.5kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 164c0a23a13e
Step 3/10 : COPY ./package.json ./
 ---> fafb95718a8a
Step 4/10 : RUN npm install
 ---> Running in 597b10c4996d
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 34.64s
found 0 vulnerabilities
 ---> 6551a29e3b97
Removing intermediate container 597b10c4996d
Step 5/10 : COPY . .
 ---> 50a67109cbb2
Step 6/10 : RUN npm run build
 ---> Running in d8bda45de499
> client@0.1.0 build /app
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  47.24 KB  build/static/js/1.e5a12c45.chunk.js
  1.37 KB   build/static/js/main.55c54dd0.chunk.js
  763 B     build/static/js/runtime~main.229c360f.js
  510 B     build/static/css/main.0b4a1755.chunk.css
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
 ---> ea2dbc775d3b
Removing intermediate container d8bda45de499
Step 7/10 : FROM nginx
latest: Pulling from library/nginx
f17d81b4b692: Pulling fs layer
82dca86e04c3: Pulling fs layer
046ccb106982: Pulling fs layer
046ccb106982: Verifying Checksum
046ccb106982: Download complete
82dca86e04c3: Verifying Checksum
82dca86e04c3: Download complete
f17d81b4b692: Verifying Checksum
f17d81b4b692: Download complete
f17d81b4b692: Pull complete
82dca86e04c3: Pull complete
046ccb106982: Pull complete
Digest: sha256:d59a1aa7866258751a261bae525a1842c7ff0662d4f34a355d5f36826abc0341
Status: Downloaded newer image for nginx:latest
 ---> 62f816a209e6
Step 8/10 : EXPOSE 3000
 ---> Running in a5d3fe2674d8
 ---> 2357c481fbf1
Removing intermediate container a5d3fe2674d8
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> 2b48afd8a3e4
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> fe4cc1b7e99e
Successfully built fe4cc1b7e99e
Successfully tagged [secure]/multi-client:latest
after_success.2
0.21s$ docker build -t [secure]/multi-nginx ./nginx
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> 62f816a209e6
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> b8701da3d56b
Successfully built b8701da3d56b
Successfully tagged [secure]/multi-nginx:latest
after_success.3
10.23s$ docker build -t [secure]/multi-server ./server
Sending build context to Docker daemon   7.68kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 164c0a23a13e
Step 3/6 : COPY package.json .
 ---> 3595bc2fb7df
Step 4/6 : RUN npm install
 ---> Running in 42440180f709
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 304 packages from 189 contributors and audited 2423 packages in 7.331s
found 0 vulnerabilities
 ---> d1e8ba3e07ea
Removing intermediate container 42440180f709
Step 5/6 : COPY . .
 ---> 48dc5fedc799
Step 6/6 : CMD npm run start
 ---> Running in 4191a39a4a1a
 ---> 6e94a727a250
Removing intermediate container 4191a39a4a1a
Successfully built 6e94a727a250
Successfully tagged [secure]/multi-server:latest
after_success.4
8.79s$ docker build -t [secure]/multi-worker ./worker
Sending build context to Docker daemon  6.144kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 164c0a23a13e
Step 3/6 : COPY package.json .
 ---> e756edb2d124
Step 4/6 : RUN npm install
 ---> Running in 7fad3ee6022b
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 237 packages from 140 contributors and audited 2256 packages in 6.363s
found 0 vulnerabilities
 ---> e6845d19ace9
Removing intermediate container 7fad3ee6022b
Step 5/6 : COPY . .
 ---> 58ee6abf91dc
Step 6/6 : CMD npm run start
 ---> Running in 5be2d7dca836
 ---> 2b781971116e
Removing intermediate container 5be2d7dca836
Successfully built 2b781971116e
Successfully tagged [secure]/multi-worker:latest
after_success.5
0.54s$ echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
Login Succeeded
after_success.6
5.43s$ docker push [secure]/multi-client
The push refers to a repository [docker.io/[secure]/multi-client]
650b3ed93620: Preparing
1c0f36a3f437: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
6ccbee34dd10: Mounted from library/nginx
237472299760: Mounted from library/nginx
ad9ac0e6043b: Mounted from library/nginx
650b3ed93620: Pushed
1c0f36a3f437: Pushed
latest: digest: sha256:5271fd2ad710d738ca37b1d779461e288820a74f04f0eaa4b0b699fb9cf78029 size: 1365
after_success.7
6.00s$ docker push [secure]/multi-nginx
The push refers to a repository [docker.io/[secure]/multi-nginx]
b2ff3af4e8c5: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
6ccbee34dd10: Mounted from [secure]/multi-client
237472299760: Mounted from [secure]/multi-client
ad9ac0e6043b: Mounted from [secure]/multi-client
b2ff3af4e8c5: Pushed
latest: digest: sha256:77d1e770c42737750c5d65ecd1c4c98c78f094ee8f81434b6f0e9f4b56b89029 size: 1155
after_success.8
5.88s$ docker push [secure]/multi-server
The push refers to a repository [docker.io/[secure]/multi-server]
f24323a80ff5: Preparing
d14b88d4d5a0: Preparing
e259f18ccf2a: Preparing
d769ecc13423: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
d769ecc13423: Pushed
f24323a80ff5: Pushed
b718290f679e: Mounted from library/node
e259f18ccf2a: Pushed
8258ac963d2f: Mounted from library/node
df64d3292fd6: Mounted from library/node
d14b88d4d5a0: Pushed
latest: digest: sha256:bc3b4be23bc4208901abe060bcc9c48714fcb7a0e9d571b3198ebaaf30d0c607 size: 1783
after_success.9
5.64s$ docker push [secure]/multi-worker
The push refers to a repository [docker.io/[secure]/multi-worker]
2757756933ee: Preparing
a20971296546: Preparing
ac80b08096c4: Preparing
d769ecc13423: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
d769ecc13423: Mounted from [secure]/multi-server
b718290f679e: Mounted from [secure]/multi-server
8258ac963d2f: Mounted from [secure]/multi-server
ac80b08096c4: Pushed
df64d3292fd6: Mounted from [secure]/multi-server
2757756933ee: Pushed
a20971296546: Pushed
latest: digest: sha256:ef94ad33a91689cf76cc7f16960e7739a5a41634156f68d492ff966b54578a32 size: 1782
Done. Your build exited with 0.
```
### Multi-Container Deployments to AWS 
1. Create the `Dockerrun.aws.json`
- In order to run multiple containers on AWS we need [AWS ECS -Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html)
- [Container Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definitions)
- [Multicontainer Docker Configuration](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker_v2config.html)
> `Dockerrun.aws.json`
```json
{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "peelmicro/multi-client",
      "hostname": "client",
      "essential": false
    },
    {
      "name": "server",
      "image": "peelmicro/multi-server",
      "hostname": "api",
      "essential": false
    },
    {
      "name": "worker",
      "image": "peelmicro/multi-worker",
      "hostname": "worker",
      "essential": false
    },
    {
      "name": "nginx",
      "image": "peelmicro/multi-nginx",
      "hostname": "nginx",
      "essential": true,
      "portMappings": [
        {
          "hostPort": 80,
          "containerPort": 80
        }
      ],
      "links": ["client","server"]
    }
  ]
}
```
2. Create new application in [AWS Elastic Beanstalk](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/welcome)
- Click on `Create new application`
```
Application Name: muti-docker
Description: 
```
- Click on `Create`
```
Actions
All Applications  muti-docker
Environments
Application versions
Saved configurations
No environments currently exist for this application. Create one now.
```
- Click on `Create one now`
```
Select environment tier
AWS Elastic Beanstalk has two types of environment tiers to support different types of web applications. Web servers are standard applications that listen for and then process HTTP requests, typically over port 80. Workers are specialized applications that have a background processing task that listens for messages on an Amazon SQS queue. Worker applications post those messages to your application by using HTTP.


Web server environment
Run a website, web application, or web API that serves HTTP requests.
Learn more


Worker environment
Run a worker application that processes long-running workloads on demand or performs tasks on a schedule.
Learn more
```
- Select `Web server environment` and click on `Select`
```
Environment information
Choose the name, subdomain, and description for your environment. These cannot be changed later.

Application name
muti-docker

Environment name

MutiDocker-env
Domain

Leave blank for autogenerated value
 .us-east-1.elasticbeanstalk.com  Check availability
Description

Base configuration
Platform
Preconfigured platform
Platforms published and maintained by AWS Elastic Beanstalk.

Custom platform
Platforms created and owned by you. Learn more

Application code
Sample application
Get started right away with sample code.
Existing version
Application versions that you have uploaded for muti-docker.

Upload your code
Upload a source bundle from your computer or copy one from Amazon S3.
 Upload  ZIP or WAR
```
- Select Platform: `Multi-container Docker`
- Click on `Create Environment`
```
Creating MutiDocker-env
This will take a few minutes....

6:28pm
Using elasticbeanstalk-us-east-1-972569889348 as Amazon S3 storage bucket for environment data.
6:28pm
createEnvironment is starting.

All Applications  muti-docker  MutiDocker-env  Environment ID: e-myzxc9aicp, URL: MutiDocker-env.ewrqsny4rf.us-east-1.elasticbeanstalk.com 

Events  Refresh
Severity 
2018-09-20 19:33:00 UTC+01002018-11-08 18:34:00 UTC+0000
2018-11-08 18:33:38 UTC+0000	INFO	Successfully launched environment: MutiDocker-env
2018-11-08 18:33:38 UTC+0000	INFO	Application available at MutiDocker-env.ewrqsny4rf.us-east-1.elasticbeanstalk.com.
2018-11-08 18:33:28 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/c497fad6-0bab-4835-ae46-e9a150ace253 is RUNNING.
2018-11-08 18:32:35 UTC+0000	INFO	Starting new ECS task with awseb-MutiDocker-env-myzxc9aicp:1.
2018-11-08 18:31:04 UTC+0000	INFO	Added instance [i-0758a53f730ad10d4] to your environment.
2018-11-08 18:30:33 UTC+0000	INFO	Waiting for EC2 instances to launch. This may take a few minutes.
2018-11-08 18:29:25 UTC+0000	INFO	Created EIP: 54.144.65.111
2018-11-08 18:29:10 UTC+0000	INFO	Created security group named: awseb-e-myzxc9aicp-stack-AWSEBSecurityGroup-G62RAZLSDKY0
2018-11-08 18:29:04 UTC+0000	INFO	Environment health has transitioned to Pending. Initialization in progress (running for 9 seconds). There are no instances.
2018-11-08 18:28:49 UTC+0000	INFO	Using elasticbeanstalk-us-east-1-972569889348 as Amazon S3 storage bucket for environment data.
2018-11-08 18:28:48 UTC+0000	INFO	createEnvironment is starting.
```
- Browse to http://mutidocker-env.ewrqsny4rf.us-east-1.elasticbeanstalk.com/
```
Congratulations!
Your Docker Container is now running in Elastic Beanstalk on your own dedicated environment in the AWS Cloud.
Video Tutorials
YouTube: Run a Docker Container from the Docker Registry
YouTube: Use Private Docker Repositories
Sample Apps
GitHub: PHP-FPM with Nginx as reverse proxy
GitHub: PHP and Tomcat with Nginx (Virtual Hosting)
GitHub: Node.js and Tomcat (Multiple Ports)
Documentation
Multi Container Docker Environments
Getting Started with Multi Container Docker Environments
AWS Elastic Beanstalk overview
AWS Elastic Beanstalk concepts
```
3. Check the `security Group`
- Browse to [VPC Isolated Cloud Resource](https://console.aws.amazon.com/vpc/home?region=us-east-1#)
```
Note: Your Instances will launch in the US East (N. Virginia) region.
```
- Click on [Your VPCs](https://console.aws.amazon.com/vpc/home?region=us-east-1#vpcs:sort=VpcId) link to My VPCs
```
Name

VPC ID
State
IPv4 CIDR
IPv6 CIDR
DHCP options set
Route table
Network ACL
Tenancy
Default VPC
Classic link
 
vpc-4c2e8936
available
172.31.0.0/16
-
dopt-62a5e519
rtb-9fdbf9e0
acl-03888679
default
Yes
Disabled
```
::: tip info
VPC ID: vpc-4c2e8936 
:::

- Click on `Security Groups`
```
There must be a security group for MultiDocker-env (SecurityGroup for ElasticBeanstalk environment.)
Inbound Rules: 
Type: HTTP (80)
Protocol: TCP (6)
Port Range: 80
Source: 0.0.0.0/0
Description: 

Outbound Rules:
Type: ALL Traffic
Protocol: ALL
Port Range: ALL
Source: 0.0.0.0/0
Description: 
```
4. Create the `AWS Relational Database Service (RDS)` instance
- AWS Relational Database Service (RDS) is going to run the Postgres service
- Browse [Managed Relationad Database Service](https://console.aws.amazon.com/rds/home?region=us-east-1#), search for `Create Database` and click on it
- Select `PostgreSQL`, mark `[X] Only enable options eligible for RDS Free Usage Tier` and then click on `Next`
```
specify DB details
Instance specifications
Estimate your monthly costs for the DB Instance using the AWS Simple Monthly Calculator
DB engine
PostgreSQL
License model
Info
DB engine version
Info
Free tier
The Amazon RDS Free Tier provides a single db.t2.micro instance as well as up to 20 GiB of storage, allowing new AWS customers to gain hands-on experience with Amazon RDS. Learn more about the RDS Free Tier and the instance restrictions here.

Only enable options eligible for RDS Free Usage Tier
Info
DB instance class
Info
Multi-AZ deployment
Info

Create replica in different zone
Creates a replica in a different Availability Zone (AZ) to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups.

No
Storage type
Info
Allocated storage

20
GiB
(Minimum: 20 GiB, Maximum: 20 GiB) Higher allocated storage may improve IOPS performance.
Settings
DB instance identifier
Info
Specify a name that is unique for all DB instances owned by your AWS account in the current region.

mydbinstance
DB instance identifier is case insensitive, but stored as all lower-case, as in "mydbinstance". Must contain from 1 to 63 alphanumeric characters or hyphens (1 to 15 for SQL Server). First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.
Master username
Info
Specify an alphanumeric string that defines the login ID for the master user.

Master Username must start with a letter. Must contain 1 to 63 alphanumeric characters.
Master password
Info

Master Password must be at least eight characters long, as in "mypassword". Can be any printable ASCII character except "/", """, or "@".
Confirm password
Info

License model: postgresql-license
Db engine version: PostgreSQL 10.4-R1
Db Instance class: db.t2.micro - 1 vCPU, 1 GiB RAM
Allocated storaged: 20 GiB
DB instance identifier: multi-docker-postgres
Master username: postgres
Master password: postgres_password
Confirm password: postgres_password 
```
- Click on `Next`
```
Network & Security
Virtual Private Cloud (VPC)
Info
VPC defines the virtual networking environment for this DB instance.

Only VPCs with a corresponding DB subnet group are listed.
Subnet group
Info
DB subnet group that defines which subnets and IP ranges the DB instance can use in the VPC you selected.
Public accessibility
Info

Yes
EC2 instances and devices outside of the VPC hosting the DB instance will connect to the DB instances. You must also select one or more VPC security groups that specify which EC2 instances and devices can connect to the DB instance.

No
DB instance will not have a public IP address assigned. No EC2 instance or devices outside of the VPC will be able to connect.
Availability zone
Info
VPC security groups
Security groups have rules authorizing connections from all the EC2 instances and devices that need to access the DB instance.

Create new VPC security group

Choose existing VPC security groups
Database options
Database name
Info

postgres
If you do not specify a database name, Amazon RDS does not create a database.
Port
Info
TCP/IP port the DB instance will use for application connections.

5432
DB parameter group
Info
Option group
Info
IAM DB authentication
Info

Enable IAM DB authentication
Manage your database user credentials through AWS IAM users and roles.

Disable
Encryption
Encryption

Enable encryption
Learn more 
Select to encrypt the given instance. Master key ids and aliases appear in the list after they have been created using the Key Management Service(KMS) console.

Disable encryption
The selected engine or DB instance class does not support storage encryption.
Backup
Backup retention period
Info
Select the number of days that Amazon RDS should retain automatic backups of this DB instance.
Backup window
Info

Select window

No preference

Copy tags to snapshots
Monitoring
Enhanced monitoring

Enable enhanced monitoring
Enhanced monitoring metrics are useful when you want to see how different processes or threads use the CPU.

Disable enhanced monitoring
Maintenance
Auto minor version upgrade
Info

Enable auto minor version upgrade
Enables automatic upgrades to new minor versions as they are released. The automatic upgrades occur during the maintenance window for the DB instance.

Disable auto minor version upgrade
Maintenance window
Info
Select the period in which you want pending modifications or patches applied to the DB instance by Amazon RDS.

Select window

No preference
Deletion protection

Enable deletion protection
Protects the database from being deleted accidentally. While this option is enabled, you can’t delete the database.
Amazon RDS requires permissions to manage AWS resources on your behalf. By clicking Launch DB Instance, you grant permission for Amazon RDS to create a service-linked role in AWS IAM that contains the required permissions. Learn more.

Virtual Private Cloud (VPC): Default VPC (vpc-2c2e8936)
Subnet group: default
Public accessibility: (No)
VPC segurity groups: (X) Create new VPC security group ( ) Choose existing VPC security groups

Database name: fibvalues
Port: 5432
DB parameter group: default.postgres10
IAM Db authentication: ( ) Enable IAM DB authentication (X) Disable

Encryption: Nothing to be done.
Backup: 
Backup retention period: 7 days.
Backup window: ( ) Select Window (X) No preference
[X] Copy tags to snapshots

Monitoring: ( ) Enable enhanced monitoring (X) Disable enhanced monitoring

Maintenance: 
Auto minor version upgrade: (X) Enable auto minor version upgrade ( ) Enable auto minor version upgrade 
Maintenance window: ( ) Select Window (X) No Preference

Del protection: [X] Enable deletion protection
```
- Click on `Create Database`
```
Your DB instance is being created.
Note: Your instance may take a few minutes to launch.
Connecting to your DB instance
Once Amazon RDS finishes provisioning your DB instance, you can use a SQL client application or utility to connect to the instance.
Learn about connecting to your DB instance
```
- All the databases can be seen on https://console.aws.amazon.com/rds/home?region=us-east-1#dbinstances:id=multi-docker-postgres;sf=all

5. Create the `AWS Elastic Cache (EC)` instance
- AWS Elastic Cache is going to run the Redis service
- Search for `elastic cache` on Services and select ElasticCache (In-memory cache)
- On the https://console.aws.amazon.com/elasticache/home?region=us-east-1# page click on `Redis` on the left menu:
- Click on `Create`
```
Create your Amazon ElastiCache cluster
Cluster engine
Redis
In-memory data structure store used as database, cache and message broker. ElastiCache for Redis offers Multi-AZ with Auto-Failover and enhanced robustness.
Cluster Mode enabled
Memcached
High-performance, distributed memory object caching system, intended for use in speeding up dynamic web applications.
Redis settings
Name
Description
Engine version compatibility
Port
6379
Parameter group
Node type

Number of replicas
Advanced Redis settings
Advanced settings have common defaults set to give you the fastest way to get started. You can modify these now or after your cluster has been created.
Multi-AZ with Auto-Failover
Subnet group
Name

my-subnet-group
Description

Description
VPC ID
Subnets

Subnet ID
Availability zone
CIDR Block
subnet-871e5288
us-east-1f
172.31.64.0/20
subnet-1d267c57
us-east-1a
172.31.16.0/20
subnet-3cfc6b60
us-east-1b
172.31.32.0/20
subnet-52de5435
us-east-1c
172.31.0.0/20
subnet-8cc719b2
us-east-1e
172.31.48.0/20
subnet-06c85928
us-east-1d
172.31.80.0/20
Preferred availability zone(s)
No preference
Select zones
Security
Security groups
default (sg-848995ca) 
Encryption at-rest
Encryption in-transit
Import data to cluster
Seed RDB file S3 location
myBucket/myFolder/objectName
Use comma to separate multiple paths in the field
Backup
Enable automatic backups
Backup retention period
day(s)
Backup window
No preference
Specify backup window
Maintenance
Maintenance window
No preference
Specify maintenance window
Topic for SNS notification

Create your Amazon ElastiCache cluster
Cluster engine (X) Redis [ ] Cluster mode enabled ( ) Memcached

Redis settings
Name: multi-docker-redis
Description: 
Engine version compatibility: 4.0.10
Port: 6379
Parameter group: default.redis4.0
Node type: cache.t2.micro (0.5 GiB) (Ensure not to choose "cache.r5.large (13.07 GiB)")
Number of replicas: None (Ensure to not to choose 2)

Advanced Redis settings

Subnet group: Create new
Name: redis-group
Description: Description
VPC ID: vpc-4c2e8936
Subnets: 
	[X] subnet-871e5288 us-east-1f 172.31.64.0/20 
	[X] subnet-1d267c57 us-east-1a 172.31.16.0/20
	[ ] subnet-3cfc6b60 us-east-1b 172.31.32.0/20
	[ ] subnet-52de5435 us-east-1c 172.31.0.0/20
	[ ] subnet-8cc719b2 us-east-1e 172.31.48.0/20
	[ ] subnet-06c85928 us-east-1d 172.31.80.0/20

Preferred availability zone(s): (X) No preference ( ) Select zones

Security
Security groups: default (sg-848995ca) 
Encryption at-rest: [ ]
Encryption in-transit: [ ]

Import data to cluster

Seed RDB file S3 location: 

Backup

Enable automatic backups: [ ]

Maintenance

Maintenance window: (X) No preference ( ) Specify maintenance window
Topic for SNS notification: Disable notifications
```
- Click on `Create`
- It goes to https://console.aws.amazon.com/elasticache/home?region=us-east-1#redis: and the multi-docker-redis cluster starts to create
6. Create a new `Security Group`
- This will be used to allow EB Instance + RDS (Postgres) + EC (Redis) to talk to each other.
- Search for `VPC` on Services (Isolated Cloud resources) and it goes to https://console.aws.amazon.com/vpc/home?region=us-east-1
- Click on the left menu on `Security - Security Groups` and it goes to https://console.aws.amazon.com/vpc/home?region=us-east-1#securityGroups:
- The new rds-launch-wizard security group has been created when the Postgres instance was created
- Click on `Create Security Group`
```
Name tag: multi-docker
Group name: multi-docker
Description: Traffic for services in multi-docker app
VPC: vpc-4c2e8936
```
-Click on `Yes, Create`
The new multi-docker security group is created. Select it on the bottom:
```
Summary:
Group name: multi-docker
VPC: vpc-4c2e8936
Group ID: sg-0297e8f3709327220 | multi-docker
Group description: Traffic for services in multi-docker app

Inbound Rules:
Click on [Edit]
Type: Custom TCP Rule
Protocol: TCP (6)
Port Range: 5432-6379
Source: sg-0297e8f3709327220 (the one for multi-docker)
Description:
```
- Click on `Save` and `(X) Save Successful` is shown.

I) Assign the new security group to the `EB instance`<br>
- Select `Elastic Beanstalk` on Services - History left menu.
- Select the MutiDocker-env environment
- Click on `Configuration` left menu
- Click on Instances `Modify` on the bottom.
- On EC2 security groups mark the `[X] multi-docker security group`
- Both the "awseb-e-myzxc9aicp-stack-AWSEBSecurityGroup-G62RAZLSDKY0 sg-052974e749c9a690b MutiDocker-env" and the "multi-docker sg-0297e8f3709327220 multi-docker" must be selected
- Click on `Apply`
The folowing message is shown:
```
Elastic Beanstalk is updating your environment.
To cancel this operation select Abort Current Operation from the Actions dropdown.

2018-11-09 06:42:59 UTC+0000	INFO	Environment update completed successfully.
2018-11-09 06:42:00 UTC+0000	INFO	Environment update is starting.
```
II) Assign the new security group to the `RDS (Postgres) instance`<br>
- Select `RDS` on Services - History left menu.
- Click on `Instances` left menu
- Click on `multi-docker-postgres` instance
- Scroll down and look for `Details` and then Click on `Modify`
- Scroll down and look for `Network & Security` 
- On `Security Group` add the multi-docker (sg-0297e8f3709327220) (vpc-4c2e8936) one.
Both of them must be selected (the rds-launch-wizard and the multi-docker ones).
- Scroll down to the very bottom and click on `Continue`
- On `Scheduling of modifications` select `(X) Apply immediately`.
- Click on `Modify DB Instance`

III) Assign the new security group to the `EC (Redis) instance`<br>
- Select `ElasticCache` on Services - History left menu
- Click on `Redis` left menu
The `multi-docker-redis` should be with the `available` status
- Select it and click `Modify` on the left top.
```	
Modify Cluster
Engine: redis
Engine Version Compatibility: 4.0.10
VPC Security Group(s): click on little pencil and select the multi-docker one as well. Click on [Save]: default (sg-848995ca), multi-docker (sg-0297e8f3709327220) (both of them are selected)
Parameter Group: default.redis4.0
Node Type: cache.t2.micro
Maintenance Window: Saturday ....  :  UTC -   :  UTC
Topic for SNS Notification*: Disable notifications
Apply immediately: [X]
```
- Click on `Modify` and it starts to modify it.

7. Add the `environment variables` on AWS
- Select `Elastic Beanstalk` on Services - History left menu.
- Select the `MutiDocker-env` environment
- Click on Software `Modify` button.
```
  - REDIS_HOST=multi-docker-redis.lmrcvz.0001.use1.cache.amazonaws.com (it must be obtained from the multi-docker-redis EC instance)
  - REDIS_PORT=6379
  - PGUSER=postgres
  - PGHOST=multi-docker-postgres.cvzlrthufo75.us-east-1.rds.amazonaws.com (it must be obtained from Connect - end-point on the RDS instance)
  - PGDATABASE=fibvalues
  - PGPASSWORD=postgres_password
  - PGPORT=5432
```
- Click on `Apply`

```
2018-11-09 07:55:40 UTC+0000	INFO	Environment update completed successfully.
2018-11-09 07:55:40 UTC+0000	INFO	Successfully deployed new configuration to environment.
2018-11-09 07:55:18 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/0a5d047f-6b36-430e-b4ba-55824143c3a3 is RUNNING.
2018-11-09 07:55:08 UTC+0000	INFO	Starting new ECS task with awseb-MutiDocker-env-myzxc9aicp:3.
2018-11-09 07:55:06 UTC+0000	INFO	Environment health has transitioned from Ok to Info. Configuration update in progress on 1 instance. 0 out of 1 instance completed (running for 41 seconds).
2018-11-09 07:55:06 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/c497fad6-0bab-4835-ae46-e9a150ace253 is STOPPED.
2018-11-09 07:55:01 UTC+0000	INFO	Stopping ECS task arn:aws:ecs:us-east-1:972569889348:task/c497fad6-0bab-4835-ae46-e9a150ace253.
2018-11-09 07:54:21 UTC+0000	INFO	Updating environment MutiDocker-env's configuration settings.
2018-11-09 07:54:14 UTC+0000	INFO	Environment update is starting.
```
8. Obtain the `IAM Keys` for Deployment
- Select `IAM` on Services - History left menu.
- Click on `Users` left menu
- Click on `Add user`
```
Set user details
You can add multiple users at once with the same access type and permissions. Learn more

User name: multi-docker-deployer

Select AWS access type
Access type: [X] Programmatic access [ ] AWS Management Console access
```
- Click on `Next: Permissions`
- Click on `Attach existing policies directly`
- Search for `beanstalk`
- Mark all of them starting by `AWSElasticNeanstalk`
- Click on `Next: Review`
```
Add user
Review
Review your choices. After you create the user, you can view and download the autogenerated password and access key.

User details
User name
multi-docker-deployer
AWS access type
Programmatic access - with an access key
Permissions boundary
Permissions boundary is not set
Permissions summary
The following policies will be attached to the user shown above.

Type
Name
Managed policy
AWSElasticBeanstalkCustomPlatformforEC2Role
Managed policy
AWSElasticBeanstalkEnhancedHealth
Managed policy
AWSElasticBeanstalkFullAccess
Managed policy
AWSElasticBeanstalkMulticontainerDocker
Managed policy
AWSElasticBeanstalkReadOnlyAccess
Managed policy
AWSElasticBeanstalkService
Managed policy
AWSElasticBeanstalkWebTier
Managed policy
AWSElasticBeanstalkWorkerTier
```
- Click on `Create User`
```
Success
You successfully created the users shown below. You can view and download user security credentials. You can also email users instructions for signing in to the AWS Management Console. This is the last time these credentials will be available to download. However, you can create new credentials at any time.

Users with AWS Management Console access can sign-in at: https://972569889348.signin.aws.amazon.com/console

User: multi-docker-deployer
Access key ID: AKIAIQRJQ7SMVI5FVYWQ
Secret access key: twBiWOirCgP*********************ugM7hsWbRxf
```

- Add these two keys to [Travis CI Environment Varfiables](https://travis-ci.com/peelmicro/multi-docker/settings)
```
AWS_ACCESS_KEY: AKIAIQRJQ7SMVI5FVYWQ
AWS_SECRET_KEY: twBiWOirCgP*********************ugM7hsWbRxf
```
9. Commit the new `.travis.yml` and the `Dockerrun.aws.json` files
> `.travis.yml`
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
before_install:
  - docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client
script:
  - docker run peelmicro/test-client npm run test -- --coverage
after_success:
  - docker build -t peelmicro/multi-client ./client
  - docker build -t peelmicro/multi-nginx ./nginx
  - docker build -t peelmicro/multi-server ./server
  - docker build -t peelmicro/multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/multi-client
  - docker push peelmicro/multi-nginx
  - docker push peelmicro/multi-server
  - docker push peelmicro/multi-worker
deploy:
  provider: elasticbeanstalk
  region: "us-east-1"
  app: "muti-docker"
  env: "MutiDocker-env"
  bucket_name: "elasticbeanstalk-us-east-1-972569889348"
  #bucket_path: ""
  on:
    branch: "master"
  access_key_id: $AWS_ACCESS_KEY
  secret_access_key:
    secure: "$AWS_SECRET_KEY"
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .travis.yml

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        Dockerrun.aws.json

no changes added to commit (use "git add" and/or "git commit -a")
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "added AWS Dockerrun.aws.json file"
[master 8801512] added AWS Dockerrun.aws.json file
 2 files changed, 47 insertions(+), 11 deletions(-)
 create mode 100644 Dockerrun.aws.json
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin master
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 751 bytes | 187.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/multi-docker.git
   089e934..8801512  master -> master
```
```bash
- On `travis-ci config` values:
```json
{
  "os": "linux",
  "dist": "trusty",
  "sudo": "required",
  "group": "stable",
  "script": [
    "docker run peelmicro/test-client npm run test -- --coverage"
  ],
  "node_js": "8",
  "language": "node_js",
  "services": [
    "docker"
  ],
  "after_success": [
    "docker build -t peelmicro/multi-client ./client",
    "docker build -t peelmicro/multi-nginx ./nginx",
    "docker build -t peelmicro/multi-server ./server",
    "docker build -t peelmicro/multi-worker ./worker",
    "echo \"$DOCKER_PASSWORD\" | docker login -u \"$DOCKER_ID\" --password-stdin",
    "docker push peelmicro/multi-client",
    "docker push peelmicro/multi-nginx",
    "docker push peelmicro/multi-server",
    "docker push peelmicro/multi-worker"
  ],
  "before_install": [
    "docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client"
  ]
}
```
```bash
$ export PATH=./node_modules/.bin:$PATH
Updating nvm
nvm.install
2.66s$ nvm install 8
Downloading and installing node v8.12.0...
Downloading https://nodejs.org/dist/v8.12.0/node-v8.12.0-linux-x64.tar.xz...
Computing checksum with sha256sum
Checksums matched!
Now using node v8.12.0 (npm v6.4.1)
$ node --version
v8.12.0
$ npm --version
6.4.1
$ nvm --version
0.33.11
before_install
51.72s$ docker build -t [secure]/test-client -f ./client/Dockerfile.dev ./client
Sending build context to Docker daemon  340.5kB
Step 1/6 : FROM node:alpine
alpine: Pulling from library/node
4fe2ade4980c: Pulling fs layer
a3f62ee5351e: Pulling fs layer
b8ee302f1a47: Pulling fs layer
4fe2ade4980c: Verifying Checksum
4fe2ade4980c: Download complete
b8ee302f1a47: Verifying Checksum
b8ee302f1a47: Download complete
a3f62ee5351e: Verifying Checksum
a3f62ee5351e: Download complete
4fe2ade4980c: Pull complete
a3f62ee5351e: Pull complete
b8ee302f1a47: Pull complete
Digest: sha256:324ccac1d7c4ddf5eb9f9ed5274c37c90965605b5eb68df0a67c6266837bfb79
Status: Downloaded newer image for node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> db01dd6fe548
Removing intermediate container c119d1ac07d1
Step 3/6 : COPY package.json .
 ---> 9827f325ac01
Step 4/6 : RUN npm install
 ---> Running in d09f9cf0e4c3
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 35.996s
found 0 vulnerabilities
 ---> 6f75c1a564aa
Removing intermediate container d09f9cf0e4c3
Step 5/6 : COPY . .
 ---> 87ee01b29ad3
Step 6/6 : CMD npm run start
 ---> Running in 061978e6b9f7
 ---> 7a0ee21cccd6
Removing intermediate container 061978e6b9f7
Successfully built 7a0ee21cccd6
Successfully tagged [secure]/test-client:latest
6.20s$ docker run [secure]/test-client npm run test -- --coverage
> client@0.1.0 test /app
> react-scripts test "--coverage"
PASS src/App.test.js
  ✓ renders without crashing (2ms)
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |        0 |        0 |        0 |        0 |                   |
 App.js           |        0 |      100 |        0 |        0 |                10 |
 Fib.js           |        0 |      100 |        0 |        0 |... 49,50,57,61,67 |
 OtherPage.js     |        0 |      100 |        0 |        0 |                 5 |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.57s
Ran all test suites.
The command "docker run [secure]/test-client npm run test -- --coverage" exited with 0.
after_success.1
65.93s$ docker build -t [secure]/multi-client ./client
Sending build context to Docker daemon  340.5kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> db01dd6fe548
Step 3/10 : COPY ./package.json ./
 ---> d58541d4be6d
Step 4/10 : RUN npm install
 ---> Running in 10b048398943
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 34.919s
found 0 vulnerabilities
 ---> 578021f37301
Removing intermediate container 10b048398943
Step 5/10 : COPY . .
 ---> 222fb10148e8
Step 6/10 : RUN npm run build
 ---> Running in 50cc8021aef9
> client@0.1.0 build /app
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  47.24 KB  build/static/js/1.e5a12c45.chunk.js
  1.37 KB   build/static/js/main.55c54dd0.chunk.js
  763 B     build/static/js/runtime~main.229c360f.js
  510 B     build/static/css/main.0b4a1755.chunk.css
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
 ---> d24d9985ec1a
Removing intermediate container 50cc8021aef9
Step 7/10 : FROM nginx
latest: Pulling from library/nginx
f17d81b4b692: Pulling fs layer
82dca86e04c3: Pulling fs layer
046ccb106982: Pulling fs layer
046ccb106982: Verifying Checksum
046ccb106982: Download complete
82dca86e04c3: Verifying Checksum
82dca86e04c3: Download complete
f17d81b4b692: Verifying Checksum
f17d81b4b692: Download complete
f17d81b4b692: Pull complete
82dca86e04c3: Pull complete
046ccb106982: Pull complete
Digest: sha256:d59a1aa7866258751a261bae525a1842c7ff0662d4f34a355d5f36826abc0341
Status: Downloaded newer image for nginx:latest
 ---> 62f816a209e6
Step 8/10 : EXPOSE 3000
 ---> Running in 817c9dd3be0c
 ---> d83434894e9a
Removing intermediate container 817c9dd3be0c
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> 1718949db9b2
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> a3c1e2d918be
Successfully built a3c1e2d918be
Successfully tagged [secure]/multi-client:latest
after_success.2
0.22s$ docker build -t [secure]/multi-nginx ./nginx
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> 62f816a209e6
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> 3a898f4ac8a9
Successfully built 3a898f4ac8a9
Successfully tagged [secure]/multi-nginx:latest
after_success.3
10.05s$ docker build -t [secure]/multi-server ./server
Sending build context to Docker daemon   7.68kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> db01dd6fe548
Step 3/6 : COPY package.json .
 ---> cda6c5c76616
Step 4/6 : RUN npm install
 ---> Running in 5eb7361a0709
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 304 packages from 189 contributors and audited 2423 packages in 7.388s
found 0 vulnerabilities
 ---> 37320c28b96f
Removing intermediate container 5eb7361a0709
Step 5/6 : COPY . .
 ---> a0fab05499a0
Step 6/6 : CMD npm run start
 ---> Running in 411ace08a1d6
 ---> b546506e3698
Removing intermediate container 411ace08a1d6
Successfully built b546506e3698
Successfully tagged [secure]/multi-server:latest
after_success.4
8.94s$ docker build -t [secure]/multi-worker ./worker
Sending build context to Docker daemon  6.144kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> db01dd6fe548
Step 3/6 : COPY package.json .
 ---> cffec0871ff3
Step 4/6 : RUN npm install
 ---> Running in 3bbb66daa6f3
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 237 packages from 140 contributors and audited 2256 packages in 6.466s
found 0 vulnerabilities
 ---> ab67cca98102
Removing intermediate container 3bbb66daa6f3
Step 5/6 : COPY . .
 ---> 2c84012c627d
Step 6/6 : CMD npm run start
 ---> Running in 101789f20325
 ---> 94583751c335
Removing intermediate container 101789f20325
Successfully built 94583751c335
Successfully tagged [secure]/multi-worker:latest
after_success.5
0.54s$ echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
Login Succeeded
after_success.6
4.72s$ docker push [secure]/multi-client
The push refers to a repository [docker.io/[secure]/multi-client]
4f7d4fd19dfa: Preparing
b4a6085ef9a5: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
6ccbee34dd10: Layer already exists
237472299760: Layer already exists
ad9ac0e6043b: Layer already exists
b4a6085ef9a5: Pushed
4f7d4fd19dfa: Pushed
latest: digest: sha256:7265da8810e230e6f46e943ec23cc836e17602a52cfce5d58b55070c1faf6e38 size: 1365
after_success.7
4.34s$ docker push [secure]/multi-nginx
The push refers to a repository [docker.io/[secure]/multi-nginx]
53a95f291321: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Layer already exists
6ccbee34dd10: Layer already exists
237472299760: Layer already exists
53a95f291321: Pushed
latest: digest: sha256:7d7c9ca17e11312d69c18c1fd58c6e5b87a9a3134698adfa559cd1aecf65d8c9 size: 1155
after_success.8
5.81s$ docker push [secure]/multi-server
The push refers to a repository [docker.io/[secure]/multi-server]
867e8cc86b79: Preparing
a55b4ad27cfc: Preparing
ce17fa76a4a8: Preparing
e44b7b7ece77: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
b718290f679e: Layer already exists
8258ac963d2f: Layer already exists
df64d3292fd6: Layer already exists
867e8cc86b79: Pushed
e44b7b7ece77: Pushed
ce17fa76a4a8: Pushed
a55b4ad27cfc: Pushed
latest: digest: sha256:1e3e7c338e12689837d6e105eb38771006af27bd620c9dc6debc76aea37f82dc size: 1783
after_success.9
5.48s$ docker push [secure]/multi-worker
The push refers to a repository [docker.io/[secure]/multi-worker]
7262240febd4: Preparing
4988a40307e8: Preparing
c53f1b47d55c: Preparing
e44b7b7ece77: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
b718290f679e: Layer already exists
8258ac963d2f: Layer already exists
e44b7b7ece77: Mounted from [secure]/multi-server
df64d3292fd6: Layer already exists
c53f1b47d55c: Pushed
7262240febd4: Pushed
4988a40307e8: Pushed
latest: digest: sha256:74f3fc2aeaf4b81bc008fb14e2a21d75607d270bc20793460d9027969124f9b8 size: 1782
dpl_0
1.45s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
10.67s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.167
Successfully installed aws-sdk-resources-2.11.167
Successfully installed aws-sdk-2.11.167
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
No local changes to save
dpl.3
Deploying application
No stash entries found.
Done. Your build exited with 0.
```
- On https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/environment/dashboard?applicationName=muti-docker&environmentId=e-myzxc9aicp
```
2018-11-09 08:25:03 UTC+0000	WARN	Environment health has transitioned from Info to Warning. Application update failed 31 seconds ago and took 54 seconds.
2018-11-09 08:24:11 UTC+0000	ERROR	Failed to deploy application.
2018-11-09 08:24:11 UTC+0000	ERROR	Service:AmazonECS, Code:ClientException, Message:Invalid setting for container 'client'. At least one of 'memory' or 'memoryReservation' must be specified., Class:com.amazonaws.services.ecs.model.ClientException
2018-11-09 08:24:03 UTC+0000	INFO	Environment health has transitioned from Ok to Info. Application update in progress (running for 5 seconds).
2018-11-09 08:23:30 UTC+0000	INFO	Environment update is starting.
```
10. Modify the `Dockerrun.aws.json` file to add the memory value
- We put 128 mbytes to all the containers, but when we go with a real app we should adjust it according to what we need.
> `Dockerrun.aws.json`
```json
{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "peelmicro/multi-client",
      "hostname": "client",
      "essential": false,
      "memory": 128
    },
    {
      "name": "server",
      "image": "peelmicro/multi-server",
      "hostname": "api",
      "essential": false,
      "memory": 128
    },
    {
      "name": "worker",
      "image": "peelmicro/multi-worker",
      "hostname": "worker",
      "essential": false,
      "memory": 128
    },
    {
      "name": "nginx",
      "image": "peelmicro/multi-nginx",
      "hostname": "nginx",
      "essential": true,
      "portMappings": [
        {
          "hostPort": 80,
          "containerPort": 80
        }
      ],
      "links": ["client","server"],
      "memory": 128
    }
  ]
}
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   Dockerrun.aws.json

no changes added to commit (use "git add" and/or "git commit -a")
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "added memory to the AWS Dockerrun.aws.json file"
[master 6a70bbd] added memory to the AWS Dockerrun.aws.json file
 1 file changed, 8 insertions(+), 4 deletions(-)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 386 bytes | 128.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/multi-docker.git
   8801512..6a70bbd  master -> master
```
```bash
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |        0 |        0 |        0 |        0 |                   |
 App.js           |        0 |      100 |        0 |        0 |                10 |
 Fib.js           |        0 |      100 |        0 |        0 |... 49,50,57,61,67 |
 OtherPage.js     |        0 |      100 |        0 |        0 |                 5 |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.236s
Ran all test suites.
The command "docker run [secure]/test-client npm run test -- --coverage" exited with 0.
after_success.1
63.93s$ docker build -t [secure]/multi-client ./client
Sending build context to Docker daemon  340.5kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 3aa5ffeb64d7
Step 3/10 : COPY ./package.json ./
 ---> 7b7db4610e31
Step 4/10 : RUN npm install
 ---> Running in d6b4768b8453
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 32.913s
found 0 vulnerabilities
 ---> 2934a366d359
Removing intermediate container d6b4768b8453
Step 5/10 : COPY . .
 ---> c3f12b759966
Step 6/10 : RUN npm run build
 ---> Running in 8a0a041b88ca
> client@0.1.0 build /app
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  47.24 KB  build/static/js/1.e5a12c45.chunk.js
  1.37 KB   build/static/js/main.55c54dd0.chunk.js
  763 B     build/static/js/runtime~main.229c360f.js
  510 B     build/static/css/main.0b4a1755.chunk.css
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
 ---> 8a852c1b7622
Removing intermediate container 8a0a041b88ca
Step 7/10 : FROM nginx
latest: Pulling from library/nginx
f17d81b4b692: Pulling fs layer
82dca86e04c3: Pulling fs layer
046ccb106982: Pulling fs layer
046ccb106982: Verifying Checksum
046ccb106982: Download complete
82dca86e04c3: Verifying Checksum
82dca86e04c3: Download complete
f17d81b4b692: Verifying Checksum
f17d81b4b692: Download complete
f17d81b4b692: Pull complete
82dca86e04c3: Pull complete
046ccb106982: Pull complete
Digest: sha256:d59a1aa7866258751a261bae525a1842c7ff0662d4f34a355d5f36826abc0341
Status: Downloaded newer image for nginx:latest
 ---> 62f816a209e6
Step 8/10 : EXPOSE 3000
 ---> Running in ec9bdbc8cc46
 ---> 545626c24370
Removing intermediate container ec9bdbc8cc46
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> 1f7b6a9f0406
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> 202ee452889c
Successfully built 202ee452889c
Successfully tagged [secure]/multi-client:latest
after_success.2
0.22s$ docker build -t [secure]/multi-nginx ./nginx
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> 62f816a209e6
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> 94d357f238af
Successfully built 94d357f238af
Successfully tagged [secure]/multi-nginx:latest
after_success.3
9.79s$ docker build -t [secure]/multi-server ./server
Sending build context to Docker daemon   7.68kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 3aa5ffeb64d7
Step 3/6 : COPY package.json .
 ---> b13c5f776aff
Step 4/6 : RUN npm install
 ---> Running in 5534db3974aa
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 304 packages from 189 contributors and audited 2423 packages in 7.129s
found 0 vulnerabilities
 ---> 6686ff459d18
Removing intermediate container 5534db3974aa
Step 5/6 : COPY . .
 ---> c6cc45682d4a
Step 6/6 : CMD npm run start
 ---> Running in 5fa68fc1ce3c
 ---> accdede42364
Removing intermediate container 5fa68fc1ce3c
Successfully built accdede42364
Successfully tagged [secure]/multi-server:latest
after_success.4
8.45s$ docker build -t [secure]/multi-worker ./worker
Sending build context to Docker daemon  6.144kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 3aa5ffeb64d7
Step 3/6 : COPY package.json .
 ---> e7e0674f2e82
Step 4/6 : RUN npm install
 ---> Running in 60e24a32ec93
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 237 packages from 140 contributors and audited 2256 packages in 6.146s
found 0 vulnerabilities
 ---> 3fe922b33a2b
Removing intermediate container 60e24a32ec93
Step 5/6 : COPY . .
 ---> eacaa799abf0
Step 6/6 : CMD npm run start
 ---> Running in 570c3c4d317d
 ---> ae7e4e8c1526
Removing intermediate container 570c3c4d317d
Successfully built ae7e4e8c1526
Successfully tagged [secure]/multi-worker:latest
after_success.5
0.54s$ echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
Login Succeeded
after_success.6
4.36s$ docker push [secure]/multi-client
The push refers to a repository [docker.io/[secure]/multi-client]
5b12c7356fd3: Preparing
6ac27bbdf7cf: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Layer already exists
6ccbee34dd10: Layer already exists
237472299760: Layer already exists
5b12c7356fd3: Pushed
6ac27bbdf7cf: Pushed
latest: digest: sha256:6ea8ba3f030d6a7bc981db4b6c7a4fb8fdd71263ebacf7f443f07dbb3646baac size: 1365
after_success.7
4.70s$ docker push [secure]/multi-nginx
The push refers to a repository [docker.io/[secure]/multi-nginx]
0a547dd90fc1: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
237472299760: Layer already exists
ad9ac0e6043b: Layer already exists
6ccbee34dd10: Layer already exists
0a547dd90fc1: Pushed
latest: digest: sha256:ad7eb5a206a40bfa923f88b15f7d861913c0b9ac85809057e2bb10af2a3ae91c size: 1155
after_success.8
7.33s$ docker push [secure]/multi-server
The push refers to a repository [docker.io/[secure]/multi-server]
8e41d9baa027: Preparing
f34e55132806: Preparing
4a797ba6efac: Preparing
eb65d3aac116: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
b718290f679e: Layer already exists
8258ac963d2f: Layer already exists
df64d3292fd6: Layer already exists
eb65d3aac116: Pushed
8e41d9baa027: Pushed
4a797ba6efac: Pushed
f34e55132806: Pushed
latest: digest: sha256:d3546dbf9f9231840f9f882e87dd8dc45d3cf139630cf1c68a436585c4b13ed5 size: 1783
after_success.9
5.47s$ docker push [secure]/multi-worker
The push refers to a repository [docker.io/[secure]/multi-worker]
da5c521d9c13: Preparing
975c5831fb56: Preparing
23bfc9d6e119: Preparing
eb65d3aac116: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
b718290f679e: Layer already exists
8258ac963d2f: Layer already exists
eb65d3aac116: Mounted from [secure]/multi-server
df64d3292fd6: Layer already exists
da5c521d9c13: Pushed
23bfc9d6e119: Pushed
975c5831fb56: Pushed
latest: digest: sha256:a425b02ea45b7b9b246631630d3756fa0d87261f8cd3d99a3904ba9354d7ec6f size: 1782
dpl_0
1.37s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
9.85s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.167
Successfully installed aws-sdk-resources-2.11.167
Successfully installed aws-sdk-2.11.167
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
No local changes to save
dpl.3
Deploying application
No stash entries found.
Done. Your build exited with 0.
```
```
2018-11-09 08:39:02 UTC+0000	INFO	Environment health has transitioned from Info to Ok. Application update completed 26 seconds ago and took 3 minutes.
2018-11-09 08:37:48 UTC+0000	INFO	Environment update completed successfully.
2018-11-09 08:37:48 UTC+0000	INFO	New application version was deployed to running EC2 instances.
2018-11-09 08:37:07 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/314a5845-de68-4171-b5a7-31fd19025835 is RUNNING.
2018-11-09 08:36:02 UTC+0000	INFO	Environment health has transitioned from Ok to Info. Application update in progress on 1 instance. 0 out of 1 instance completed (running for 58 seconds).
2018-11-09 08:35:56 UTC+0000	INFO	Starting new ECS task with awseb-MutiDocker-env-myzxc9aicp:4.
2018-11-09 08:35:53 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/0a5d047f-6b36-430e-b4ba-55824143c3a3 is STOPPED.
2018-11-09 08:35:46 UTC+0000	INFO	Stopping ECS task arn:aws:ecs:us-east-1:972569889348:task/0a5d047f-6b36-430e-b4ba-55824143c3a3.
2018-11-09 08:35:33 UTC+0000	INFO	Deploying new version to instance(s).
2018-11-09 08:34:51 UTC+0000	INFO	Environment update is starting.
```
::: warning
It wasn't working becuase the ElasticBeanstalk instance was not included on the security group.
:::
- After including it properly it works now correctly
```
2018-11-09 09:58:40 UTC+0000	INFO	Deleted log fragments for this environment.
2018-11-09 09:44:57 UTC+0000	INFO	Environment health has transitioned from Severe to Ok.
2018-11-09 09:43:42 UTC+0000	INFO	Pulled logs for environment instances.
2018-11-09 09:43:40 UTC+0000	INFO	requestEnvironmentInfo is starting.
2018-11-09 09:41:57 UTC+0000	WARN	Environment health has transitioned from Info to Severe. Configuration update completed 57 seconds ago and took 54 seconds. None of the instances are sending data.
2018-11-09 09:41:57 UTC+0000	INFO	Removed instance [i-0758a53f730ad10d4] from your environment.
2018-11-09 09:41:57 UTC+0000	INFO	Added instance [i-04983fe85b61b601d] to your environment.
2018-11-09 09:40:42 UTC+0000	INFO	Environment update completed successfully.
2018-11-09 09:40:42 UTC+0000	INFO	Successfully deployed new configuration to environment.
2018-11-09 09:40:05 UTC+0000	INFO	Created Auto Scaling launch configuration named: awseb-e-myzxc9aicp-stack-AWSEBAutoScalingLaunchConfiguration-1SHNJIWIA171B
2018-11-09 09:39:58 UTC+0000	INFO	Environment health has transitioned from Ok to Info. Configuration update in progress (running for 11 seconds).
2018-11-09 09:39:48 UTC+0000	INFO	Updating environment MutiDocker-env's configuration settings.
2018-11-09 09:39:42 UTC+0000	INFO	Environment update is starting.
```
11. Make a little change on the `App.js` file and deploy again 
- Change `Welcome to React` by `Fib Calculator`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   client/src/App.js

no changes added to commit (use "git add" and/or "git commit -a")
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
warning: LF will be replaced by CRLF in client/src/App.js.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "Updated App.js"
[master cccdcca] Updated App.js
 1 file changed, 1 insertion(+), 1 deletion(-)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin master
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 445 bytes | 111.00 KiB/s, done.
Total 5 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/peelmicro/multi-docker.git
   6a70bbd..cccdcca  master -> master
```
```bash
  ✓ renders without crashing (2ms)
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |        0 |        0 |        0 |        0 |                   |
 App.js           |        0 |      100 |        0 |        0 |                10 |
 Fib.js           |        0 |      100 |        0 |        0 |... 49,50,57,61,67 |
 OtherPage.js     |        0 |      100 |        0 |        0 |                 5 |
 index.js         |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
 serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.278s
Ran all test suites.
The command "docker run [secure]/test-client npm run test -- --coverage" exited with 0.
after_success.1
64.81s$ docker build -t [secure]/multi-client ./client
Sending build context to Docker daemon  340.5kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 98d3dfa87106
Step 3/10 : COPY ./package.json ./
 ---> d68ba19409b0
Step 4/10 : RUN npm install
 ---> Running in c6555d9bf04b
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 34.471s
found 0 vulnerabilities
 ---> 9da083e40185
Removing intermediate container c6555d9bf04b
Step 5/10 : COPY . .
 ---> ecf1328b047f
Step 6/10 : RUN npm run build
 ---> Running in 0ba0ae1385f4
> client@0.1.0 build /app
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  47.24 KB  build/static/js/1.e5a12c45.chunk.js
  1.37 KB   build/static/js/main.33dd28be.chunk.js
  763 B     build/static/js/runtime~main.229c360f.js
  510 B     build/static/css/main.0b4a1755.chunk.css
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
 ---> be066851f56d
Removing intermediate container 0ba0ae1385f4
Step 7/10 : FROM nginx
latest: Pulling from library/nginx
f17d81b4b692: Pulling fs layer
82dca86e04c3: Pulling fs layer
046ccb106982: Pulling fs layer
046ccb106982: Verifying Checksum
046ccb106982: Download complete
82dca86e04c3: Verifying Checksum
82dca86e04c3: Download complete
f17d81b4b692: Verifying Checksum
f17d81b4b692: Download complete
f17d81b4b692: Pull complete
82dca86e04c3: Pull complete
046ccb106982: Pull complete
Digest: sha256:d59a1aa7866258751a261bae525a1842c7ff0662d4f34a355d5f36826abc0341
Status: Downloaded newer image for nginx:latest
 ---> 62f816a209e6
Step 8/10 : EXPOSE 3000
 ---> Running in 7641a9f29482
 ---> bf858ecc8d04
Removing intermediate container 7641a9f29482
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> d2e703cb446d
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> a2feaa9ca7a3
Successfully built a2feaa9ca7a3
Successfully tagged [secure]/multi-client:latest
after_success.2
0.19s$ docker build -t [secure]/multi-nginx ./nginx
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> 62f816a209e6
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> b7a16c8df270
Successfully built b7a16c8df270
Successfully tagged [secure]/multi-nginx:latest
after_success.3
9.76s$ docker build -t [secure]/multi-server ./server
Sending build context to Docker daemon   7.68kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 98d3dfa87106
Step 3/6 : COPY package.json .
 ---> ce9b897fa537
Step 4/6 : RUN npm install
 ---> Running in ec622b0ccd32
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 304 packages from 189 contributors and audited 2423 packages in 7.125s
found 0 vulnerabilities
 ---> 842f93f4b5c6
Removing intermediate container ec622b0ccd32
Step 5/6 : COPY . .
 ---> 3965f601bdd5
Step 6/6 : CMD npm run start
 ---> Running in 70f4b08524c0
 ---> 7c8dc1c6f5ea
Removing intermediate container 70f4b08524c0
Successfully built 7c8dc1c6f5ea
Successfully tagged [secure]/multi-server:latest
after_success.4
8.40s$ docker build -t [secure]/multi-worker ./worker
Sending build context to Docker daemon  6.144kB
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 98d3dfa87106
Step 3/6 : COPY package.json .
 ---> aa65c9ca687b
Step 4/6 : RUN npm install
 ---> Running in 4a53a6abb29b
> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0
Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 237 packages from 140 contributors and audited 2256 packages in 6.108s
found 0 vulnerabilities
 ---> 2a4423b56c60
Removing intermediate container 4a53a6abb29b
Step 5/6 : COPY . .
 ---> f2763bb62805
Step 6/6 : CMD npm run start
 ---> Running in a905648cfb3e
 ---> 8575c8629967
Removing intermediate container a905648cfb3e
Successfully built 8575c8629967
Successfully tagged [secure]/multi-worker:latest
after_success.5
0.55s$ echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
Login Succeeded
after_success.6
4.66s$ docker push [secure]/multi-client
The push refers to a repository [docker.io/[secure]/multi-client]
0d55a4c291c2: Preparing
4c48ae2c2ed1: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Layer already exists
6ccbee34dd10: Layer already exists
237472299760: Layer already exists
4c48ae2c2ed1: Pushed
0d55a4c291c2: Pushed
latest: digest: sha256:efe49c5636e5fc92013dff4835c2f26dedad0c75775d18488b8162d99d139baa size: 1365
after_success.7
4.01s$ docker push [secure]/multi-nginx
The push refers to a repository [docker.io/[secure]/multi-nginx]
524f4c53295b: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Layer already exists
237472299760: Layer already exists
6ccbee34dd10: Layer already exists
524f4c53295b: Pushed
latest: digest: sha256:e1a5488db1a237a1842d3d2ac755e0bb3f7ed795cebe4c34c868807d79531bd3 size: 1155
after_success.8
6.05s$ docker push [secure]/multi-server
The push refers to a repository [docker.io/[secure]/multi-server]
20742476b96d: Preparing
c0050f6bc6f6: Preparing
62d46a297763: Preparing
ac4ddab3c028: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
b718290f679e: Layer already exists
8258ac963d2f: Layer already exists
df64d3292fd6: Layer already exists
ac4ddab3c028: Pushed
c0050f6bc6f6: Pushed
20742476b96d: Pushed
62d46a297763: Pushed
latest: digest: sha256:dbd144d315bf626e44bab312eae19fea18cb8e65bc30ccc184e224680f32c5a4 size: 1783
after_success.9
5.85s$ docker push [secure]/multi-worker
The push refers to a repository [docker.io/[secure]/multi-worker]
ff64efb96aef: Preparing
e1b323280b34: Preparing
62ec89306269: Preparing
ac4ddab3c028: Preparing
b718290f679e: Preparing
8258ac963d2f: Preparing
df64d3292fd6: Preparing
8258ac963d2f: Waiting
df64d3292fd6: Waiting
b718290f679e: Layer already exists
8258ac963d2f: Layer already exists
ac4ddab3c028: Mounted from [secure]/multi-server
df64d3292fd6: Layer already exists
62ec89306269: Pushed
ff64efb96aef: Pushed
e1b323280b34: Pushed
latest: digest: sha256:0127426ee375cf4ee2c7411f0f0fd75d233011072d5d3dc99450d49db01a11e9 size: 1782
dpl_0
1.44s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
10.03s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.167
Successfully installed aws-sdk-resources-2.11.167
Successfully installed aws-sdk-2.11.167
Successfully installed rubyzip-1.2.2
Successfully installed dpl-elastic_beanstalk-1.10.4
7 gems installed
!!! AWS Elastic Beanstalk support is experimental !!!
dpl.2
Preparing deploy
Cleaning up git repository with `git stash --all`. If you need build artifacts for deployment, set `deploy.skip_cleanup: true`. See https://docs.travis-ci.com/user/deployment#Uploading-Files-and-skip_cleanup.
No local changes to save
dpl.3
Deploying application
No stash entries found.
Done. Your build exited with 0.
```
```
2018-11-09 10:21:34 UTC+0000	INFO	Environment update completed successfully.
2018-11-09 10:21:34 UTC+0000	INFO	New application version was deployed to running EC2 instances.
2018-11-09 10:21:22 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/ef684989-1262-4385-9f87-ce96b9217516 is RUNNING.
2018-11-09 10:20:55 UTC+0000	INFO	Environment health has transitioned from Ok to Info. Application update in progress on 1 instance. 0 out of 1 instance completed (running for 16 seconds).
2018-11-09 10:20:51 UTC+0000	INFO	Starting new ECS task with awseb-MutiDocker-env-myzxc9aicp:7.
2018-11-09 10:20:48 UTC+0000	INFO	ECS task: arn:aws:ecs:us-east-1:972569889348:task/01361075-a091-44de-ba02-19f06c1abe68 is STOPPED.
2018-11-09 10:20:47 UTC+0000	INFO	Stopping ECS task arn:aws:ecs:us-east-1:972569889348:task/01361075-a091-44de-ba02-19f06c1abe68.
2018-11-09 10:20:46 UTC+0000	WARN	Failed to start ECS task, retrying...
2018-11-09 10:20:46 UTC+0000	ERROR	Encountered error querying container instance status: Unable to locate credentials. You can configure credentials by running "aws configure".
2018-11-09 10:20:22 UTC+0000	INFO	Deploying new version to instance(s).
2018-11-09 10:20:11 UTC+0000	INFO	Environment update is starting.
 ```
 12. Browse to http://mutidocker-env.ewrqsny4rf.us-east-1.elasticbeanstalk.com/
 ```
 logo
Fib Calculator
Home
Other Page
Enter your index:
Submit
Indexes I have seen:
2, 3, 7
Calculated Values:
For index 2 I calculated 2
For index 3 I calculated 3
For index 7 I calculated 21
```
### Clean up the Multi-Container instances created on AWS.
1. EB instance

- Search for the `muti-Docker` environment, click on `Actions` on top left and then on `Delete Application`  
```
Delete Application
Are you sure you want to delete the application: muti-docker?
```
- Click on `Delete`
- After a while the environment is removed.

2. RDS (Postgres)
- Search for the `RDS` instances
- Mark the `multi-docker-postgress` one 
- Click on `Instance actions` and then `Delete`
```
This database has deletion protection option enabled

To be able to delete the database, modify the database and disable deletion protection.
```
- Click on `Close`
- On Details click on `Modify` 
- Scrool down to `Deletion protection`
```
Enable deletion protection
[X] Protects the database from being deleted accidentally. While this option is enabled, you can’t delete the database.
```
- Unmark `[ ] Protects the database from being deleted accidentally` and then click on `Continue`
```
Summary of modifications
You are about to submit the following modifications. Only values that will change are displayed. Carefully verify your changes and click Modify DB Instance.
Attribute
Current value
New value
Deletion protection	Enabled	Disabled
Scheduling of modifications
When to apply modifications

[ ] Apply during the next scheduled maintenance window
Current maintenance window: fri:10:07-fri:10:37

[X]  Apply immediately
The modifications in this request and any pending modifications will be asynchronously applied as soon as possible, regardless of the maintenance window setting for this database instance.
Potential unexpected downtime
If you choose to apply changes immediately, please note that any changes in the pending modifications queue are also applied. If any of the pending modifications require downtime, choosing this option can cause unexpected downtime.
```
- Click on `Modify DB Instance`
- Click again on `Instance actions` and then `Delete` 
```
Delete multi-docker-postgres instance?

Are you sure you want to Delete the multi-docker-postgres DB Instance?

[ ] - Create final snapshot?
Determines whether a final DB Snapshot is created before the DB instance is deleted.

[X] - I acknowledge that upon instance deletion, automated backups, including system snapshots and point-in-time recovery, will no longer be available.

multi-docker-postgres-final-snapshot
To confirm deletion, type delete me into the field
```
- Enter `delete me` on the last field and the click on `Delete`
- It's deleted after a while.

3. EC (Redis)
- Search for `Elastic Cache`, then click on `Redis` on left menu 
- Click on the `multi-docker-redis` cluster and then on the `Delete` butoon on the top
```
	Delete Cluster
Are you sure you want to delete this Cluster?
multi-docker-redis
```
- Click on `Delete`
- It's deleted after a while

4. (Optional) Security Group

- Search for `VPC`, then on your `Security Groups` on the left menu
- Select the `multi-docker` and `rds-launch-wizard` Groups and then `Security Group Actions` and then `Delete Security Group`
```
Delete Security Group
Are you sure that you want to delete these security groups?
sg-0297e8f3709327220 | multi-docker
sg-043af040f67ef2437
```
- Click on `Yes, Delete`
```
We could not delete the following security group (sg-0297e8f3709327220 | multi-docker)
resource sg-0297e8f3709327220 has a dependent object (Service: AmazonEC2; Status Code: 400; Error Code: DependencyViolation; Request ID: 51e4c426-acfe-4e14-98dc-69896949c211)
	
The following security group were deleted
sg-043af040f67ef2437

The multi-docker group cannot be deleted now because the the other stances may not be deleted yet.
```
- Trying it again, it is successfully removed.

5. (Optional) IAM security users
- Search for `IAM`, then click on `Users`  on the left menu.
- mark the `docker-react-travis.ci` and `multi-docker-deployer` users and the click on `Delete user`
```
Delete user
The following users will be permanently deleted, including all user data, user security credentials, and user inline policies. Deleted user data cannot be recovered. Are you sure that you want to delete the following users?
User name Last activity
docker-react-travis.ci
4 days ago
multi-docker-deployer
50 minutes ago Note: Recent activity usually appears within 4 hours. Data is stored for a maximum of 365 days, depending when your region began supporting this feature. Learn more
[X] One or more of these users have recently accessed AWS. Deleting them could affect running systems. Check the box to confirm that you want to delete these users.
```
- Click on `Yes, delete`
- Both users are deleted.

## Onwards to Kubernetes!

### First steps with Kubernetes
![](/images/other/docker-multi-docker/Kubernetes.png)

In the [Tutorial : Getting Started with Kubernetes on your Windows Laptop with Minikube](https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226) is explained how to install the following tools.
1. We need to install [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/). It is a `CLI` for interacting with our master.
* Download the [kubectl CLI executable](http://storage.googleapis.com/kubernetes-release/release/v1.4.0/bin/windows/amd64/kubectl.exe) and copy in a shared folder. 

![](/images/other/docker-multi-docker/Kubectl.png)

* Create a PATH to that folder.

![](/images/other/docker-multi-docker/Kubectl2.png)

![](/images/other/docker-multi-docker/Kubectl3.png)

* Ensure it works from any folder

![](/images/other/docker-multi-docker/Kubectl4.png)

::: danger
Do not use the following solution. Hyper-V is needed to have Docker running on Windows
:::
2. We need to install the [VirtualBox](https://www.virtualbox.org/wiki/Downloads) VM driver. It is used to make a VM that will be our single node.
If `Docker` is installed it's probably already installed.

3. We need to install [Minikube](https://kubernetes.io/docs/setup/minikube/). It is used to run a single node on the VM created.

* Download the [the minikube binary](https://github.com/kubernetes/minikube/releases)

![](/images/other/docker-multi-docker/minikube.png)

* Copy to a shared folder

![](/images/other/docker-multi-docker/minikube2.png)

* Rename the executable to minikube.exe.

![](/images/other/docker-multi-docker/minikube3.png)

* Create a PATH to that folder.

![](/images/other/docker-multi-docker/minikube4.png)

* Ensure it works from any folder

![](/images/other/docker-multi-docker/minikube5.png)

4. Start `minikube` executing the `minikube start` command

![](/images/other/docker-multi-docker/minikube-start.png)

* If the following error happens the `Hyper-V` must be uninstalled

![](/images/other/docker-multi-docker/minikube-start2.png)

* Go to `Windows features`

![](/images/other/docker-multi-docker/minikube-start3.png)

* Disable `Hyper-V Management Tools` and `Hyper-V Platform`

![](/images/other/docker-multi-docker/minikube-start4.png)

::: danger
Do not use the previous solution. Hyper-V is needed to have Docker running on Windows
:::

* Instead of that solution use the solution explained on the [Local Kubernetes for Windows — MiniKube vs Docker Desktop](https://medium.com/containers-101/local-kubernetes-for-windows-minikube-vs-docker-desktop-25a1c6d3b766) tutorial.

To start Minikube cluster with hyper-v support, you need to first create an external network switch based on physical network adapters (Ethernet or Wi-fi). The following steps must be followed:

Step 1) Identify physical network adapters ( Ethernet and/or Wifi) using the `Get-NetAdapter` command

![](/images/other/docker-multi-docker/minikube-start5.png)

Step 2) Create external-virtual-switch using the following command

`New-VMSwitch -Name MyMinikubeCluster -AllowManagement $True -NetAdapterName Wi-fi`

![](/images/other/docker-multi-docker/minikube-start6.png)

* if the previous error happens follow the instructions from [Microsoft Hyper-V](https://docs.docker.com/machine/drivers/hyper-v/) on how to create a Network Switch from `Virtual Switch Manager`

I) Open Hyper-V Manager

![](/images/other/docker-multi-docker/minikube-start7.png)

II) Click on `Virtual Switch Manager...`

![](/images/other/docker-multi-docker/minikube-start8.png)

III) Click on `Create Virtual Switch`

IV) Put the following values
```
Name:
Notes:
Connection type
[X]External nerwork: `Intel(R) Dual Band Wirelesss-AC 8260`
```
V) Click on `Ok`

![](/images/other/docker-multi-docker/minikube-start-9.png)

VI) Click on `Yes`

![](/images/other/docker-multi-docker/minikube-start-10.png)

VII) Execute the following command:

`minikube start --vm-driver=hyperv--hyperv-virtual-switch=MinikubeVirtualSwitch`
```bash
PS C:\WINDOWS\system32>  minikube start --vm-driver=hyperv --hyperv-virtual-switch=MinikubeVirtualSwitch
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Downloading kubeadm v1.10.0
Downloading kubelet v1.10.0
Finished Downloading kubelet v1.10.0
Finished Downloading kubeadm v1.10.0
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```

![](/images/other/docker-multi-docker/minikube-start-11.png)

5. Check if `minikube` is running executing the `minikube status` command

```bash
PS C:\WINDOWS\system32> minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.114
```

![](/images/other/docker-multi-docker/minikube-status.png)

6. Check if `kubectl` is working correctly as well executing the `kubectl cluster-info` command

```bash
PS C:\WINDOWS\system32> kubectl cluster-info
Kubernetes master is running at https://192.168.0.114:8443
CoreDNS is running at https://192.168.0.114:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

![](/images/other/docker-multi-docker/kubectl-status.png)

### Goal: Get the multi-client image running on our Kubernetes Cluster running as a container

1. Similarities between `Docker Compose` and `Kubernetes`

| Docker Compose  | Kubernetes  | Get a simple container running on our local Kubernetes Cluster running |
|---|---|---|
|Each entry can optionally get docker-compose to build an image   | Kubernetes expects all images to already be build   | Make sure our image is hosted on Docker Hub |
| Each entry represents a container we want to create  | One config file per object we want to create  |Make one config file to create the container  |
| Each entry defines the networking requirements (ports) |We have to manually set up all networking |Make one config file to set up networking  |

2. Make sure our images are hosted on Docker Hub

* Go to [Hub Docker](https://hub.docker.com/)

![](/images/other/docker-multi-docker/hub-docker.png)

* Ensure the NodeJs images are there

3. Make one config file to create the container

* Create the new `simplek8s`directory
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ mkdir simplek8s

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ cd simplek8s/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
```
* Create the `client-pod.yaml` document
```yaml
apiVersion: v1
kind: Pod
metadata: 
  name: client-pod
  labels:
    component: web
spec:
  containers:
    - name: client
      image: peelmicro/multi-client
      ports: 
        - containerPort: 3000
```
4. Make one config file to set up networking
* Create the `client-node-port.yaml` document
```yaml
apiVersion: v1
kind: Service
metadata: 
  name: client-node-port
spec:
  type: NodePort
  ports: 
    - port: 3050
      targetPort: 3000
      nodePort: 31515
  selector:
    component: web
```
5. `Objects` in `Kubernetes`
Objects serve different puposes like `running a container`, `monitoring a container`, `setting up networking`, etc:
- StatefulSet
- ReplicaController
- Pod
- Service
6. `Apis` in `Kubernetes`
Each API version defines a different set of `objects` we can use. Examples:

`apiVersion: v1`
- ComponentStatus
- ConfigMap
- EndPoints
- Event
- Namespace
- Pod

`apiVersion: apps/v1`
- ControllerRevision
- StatefulSet

6. `Pods` in `Kubernetes`
- A Pod is a grouping of containers with a very common purpose. 
- In Kubernetes world there's not such a thing as creating a single container. The smallest thing is a `Pod`, that can have just a single container.
- It's used to group the containers that must run together.
- Example:

![](/images/other/docker-multi-docker/pod-example.png)

7. `Services` in `Kubernetes`
- Services set up networking in a Kubernetes Cluster
- There are different types:
1. ClusterIP
2. NodePort - Exposes a container to the outside world (only good for dev purposes!!!)
3. LoadBalancer
4. Ingress 

![](/images/other/docker-multi-docker/NodePort.png)

- The `selector: component: web` on the `client-node-port` is used to conect with the `client-pod` labeled with `component: web`
- `ports`:
1. `port: 3050`- Other Pod that needs multi-client Pod. At the moment can be ignored in dev.
2. `targetPort: 3000` - Target Pod -> multi-client Pod
3. `nodePort: 31515` - The one that we are going to access inside our browser to navigate. If we do not specify anyone in particular a random one is assigned.

![](/images/other/docker-multi-docker/NodePort2.png)

- The other types will be explained later.
8. `kube-proxy` in `Kubernetes`
Kube-proxy is the only one window to the external world from the VM created by Minikube

![](/images/other/docker-multi-docker/kube-proxy.png)

9. We use the `kubectl` command to feed a `config file` into `Kubernetes`

![](/images/other/docker-multi-docker/KubectlUse.png)

- `kubectl` - CLI we use to change our Kubernetes cluster
- `apply` - **Change the current configuration** of our cluster
- `f` - We want to specify a file that has the config changes
- `<filename>` - Path to the file with the config 
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ cd simplek8s/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-pod.yaml
pod "client-pod" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-node-port.yaml
service "client-node-port" created
```
* In order to get the status of the `kubernetes` cluster we use the `kubectl get` command

![](/images/other/docker-multi-docker/KubectlUse2.png)

- `get` - we want to retrieve information about a running object.
- `pods` - Specifies the `object type` that we want to get information about
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME         READY     STATUS    RESTARTS   AGE
client-pod   1/1       Running   0          6m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get services
NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
client-node-port   NodePort    10.105.211.25   <none>        3050:31515/TCP   5m
kubernetes         ClusterIP   10.96.0.1       <none>        443/TCP          1d
```
* The client is not available to access from the PC localhost

![](/images/other/docker-multi-docker/KubectlUse3.png)

* We need to access the `IP` where `Kubernetes` is running
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube ip
E1127 05:39:09.187642   88928 ip.go:48] Error getting IP:  Host is not running
```
* We need to start `minikube` first if we see the previous error
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube start --vm-driver=hyperv --hyperv-virtual-switch=MinikubeVirtualSwitch
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
E1127 05:40:55.559124   66780 start.go:168] Error starting host: Error starting stopped host: exit status 1.

Retrying.
E1127 05:40:55.578128   66780 start.go:174] Error starting host:  Error starting stopped host: exit status 1
================================================================================
An error has occurred. Would you like to opt in to sending anonymized crash
information to minikube to help prevent future errors?
To opt out of these messages, run the command:
        minikube config set WantReportErrorPrompt false
================================================================================
Please enter your response [Y/n]: y
```
- In order to solve this use we need to stop `minikube` from `Hyper-V Manager` and disable the '[ ]Enable Dynamyc Memory` as explained in [Minikube on Windows 10 with Hyper-V](https://medium.com/@JockDaRock/minikube-on-windows-10-with-hyper-v-6ef0f4dc158c)

![](/images/other/docker-multi-docker/KubectlUse4.png)

- minikube must be started again
- If the same error happens, we have to remove the current minikube instance, as explained in [Setting up Kubernetes on Windows with Minikube](https://rharshad.com/kubernetes-minikube-windows-setup/)

![](/images/other/docker-multi-docker/KubectlUse5.png)

![](/images/other/docker-multi-docker/KubectlUse6.png)

![](/images/other/docker-multi-docker/KubectlUse7.png)

![](/images/other/docker-multi-docker/KubectlUse8.png)

* We need to start `minikube` again
```bash
PS C:\WINDOWS\system32> minikube start --vm-driver=hyperv --hyperv-virtual-switch=MinikubeVirtualSwitch
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Downloading Minikube ISO
 170.78 MB / 170.78 MB [============================================] 100.00% 0s
Getting VM IP address...
Moving files into cluster...
Downloading kubeadm v1.10.0
Downloading kubelet v1.10.0
Finished Downloading kubeadm v1.10.0
Finished Downloading kubelet v1.10.0
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```
```bash
PS C:\WINDOWS\system32> minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 10.0.0.8
```
```bash
PS C:\WINDOWS\system32> minikube ip
10.0.0.8
```
- If you receive an error when executing `minikube stop`
```bash
PS C:\WINDOWS\system32> minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 10.0.0.8
```
```bash
PS C:\WINDOWS\system32> minikube stop
Stopping local Kubernetes cluster...
Error stopping machine:  Error stopping host: minikube: exit status 1
```
- Execute `minikube ssh "sudo poweroff"` instead
```bash
PS C:\WINDOWS\system32> minikube ssh "sudo poweroff"
PS C:\WINDOWS\system32>
```
```bash
PS C:\WINDOWS\system32> minikube status
minikube: Stopped
cluster:
kubectl:
```
- Start it again with `minikube start`
```bash
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```
```bash
PS C:\WINDOWS\system32> minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 10.0.0.8
```
* Browse to http://10.0.0.8:31515/

![](/images/other/docker-multi-docker/KubectlUse9.png)

10. How `Kubernetes` works

![](/images/other/docker-multi-docker/kube-apiserver.png)

- We always work with the `Master` never with the `Nodes`. 
- The `Master` is always watching the `Nodes` to ensure that `what is needed` `is running`
- `Kubernetes` is a system to deploy containerized apps
- `Nodes` are individual machines (or vm's) that run containers
- `Masters` are machines (or vm's) with a set of programs to manage `nodes`
- `Kubernetes` doesn't build our images - it get s them frome somewhere else
- `Kubernetes (the master)` decides where to run each `container` - each `node` can run a dissimilar set of containers
The most important:
- To `deploy` something, we update the desire state of the master with a `config file`
- The `master` works constantly to meet our desire state
11. Ways of approaching deployments
- `Imperative Deployments` - Do exactly these steps to arrive at this conatiner setup

![](/images/other/docker-multi-docker/KubernetesDeployments.png)

> You have to figure out the current state and customize your update with that state!

![](/images/other/docker-multi-docker/KubernetesDeployments2.png)

> You need to look for the containers that need to be update and update them manually.

- `Declarative Deployments` - Our container setup should look like this, make it happen.

![](/images/other/docker-multi-docker/KubernetesDeployments3.png)

> We just need to update the **config file** with the changes and **Kubernetes** takes care of everything.

![](/images/other/docker-multi-docker/KubernetesDeployments4.png)

> **Kubernetes** can use both approaches, but the **Declarative** one is the recommended one.

12. Check what `pods` are running
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
Unable to connect to the server: dial tcp 10.0.0.8:8443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because
connected host has failed to respond.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)$ minikube status
minikube: Running
cluster: Running
kubectl: Misconfigured: pointing to stale minikube-vm.
To fix the kubectl context, run minikube update-context
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube update-context
Reconfigured kubeconfig IP, now pointing at 192.168.0.109
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
Unable to connect to the server: dial tcp 192.168.0.109:8443: connectex: No connection could be made because the target machine actively refused it.
```
* Try adding the `KUBECONFIG` environment variable as explain on [Kubernetes on Windows Error: Unable to connect to the server: dial tcp [::1]:6445: connectex: No connection could be made because the target machine actively refused it](https://www.ntweekly.com/2018/05/08/kubernetes-windows-error-unable-connect-server-dial-tcp-16445-connectex-no-connection-made-target-machine-actively-refused/)
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
Unable to connect to the server: x509: certificate is valid for 10.0.0.8, 10.96.0.1, 10.0.0.1, not 192.168.0.109
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.109
```
* change the wifi connection
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube status
minikube: Running
cluster: Running
kubectl: Misconfigured: pointing to stale minikube-vm.
To fix the kubectl context, run minikube update-context
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube ssh "sudo poweroff"
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube status
E1129 17:18:42.844388   23924 status.go:80] Error getting cluster bootstrapper: getting kubeadm bootstrapper: getting ssh client: Error creating new ssh host from driver: Error getting ssh host name for driver: Host is not running
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube start
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```
```bash
$ minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.109
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME         READY     STATUS    RESTARTS   AGE
client-pod   1/1       Running   2          1d
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
client-node-port   NodePort    10.107.142.176   <none>        3050:31515/TCP   1d
kubernetes         ClusterIP   10.96.0.1        <none>        443/TCP          1d
```
13. How to remove the `pods` and `services` from running
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl delete pod client-pod
pod "client-pod" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
No resources found.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl delete service client-node-port
service "client-node-port" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   1d
```
14. Modify `.travis.yml` to avoid it deploys to `AWS Elastic Beanstalk`
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
before_install:
  - docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client
script:
  - docker run peelmicro/test-client npm run test -- --coverage
after_success:
  - docker build -t peelmicro/multi-client ./client
  - docker build -t peelmicro/multi-nginx ./nginx
  - docker build -t peelmicro/multi-server ./server
  - docker build -t peelmicro/multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/multi-client
  - docker push peelmicro/multi-nginx
  - docker push peelmicro/multi-server
  - docker push peelmicro/multi-worker
# Commented out for Kubernettes
# deploy:
#   provider: elasticbeanstalk
#   region: "us-east-1"
#   app: "muti-docker"
#   env: "MutiDocker-env"
#   bucket_name: "elasticbeanstalk-us-east-1-972569889348"
#   #bucket_path: ""
#   on:
#     branch: "master"
#   access_key_id: $AWS_ACCESS_KEY
#   secret_access_key:
#     secure: "$AWS_SECRET_KEY"
```
15. Update `README.md`
```md
### This project is created as part of the "Docker and Kubernetes: The Complete Guide" Udemy Course 

Follow the course on https://www.udemy.com/docker-and-kubernetes-the-complete-guide
```
16. Commit and push the changes to the `Github` repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   client-node-port.yaml
        new file:   client-pod.yaml

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   ../.travis.yml
        modified:   ../README.md
        modified:   ../client/nginx/default.conf
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ git commit -m "Onwards to Kubernetes!"
[master 7b25a4a] Onwards to Kubernetes!
 2 files changed, 24 insertions(+)
 create mode 100644 simplek8s/client-node-port.yaml
 create mode 100644 simplek8s/client-pod.yaml

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   ../.travis.yml
        modified:   ../README.md
        modified:   ../client/nginx/default.conf


Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ git commit -m "Onwards to Kubernetes!"
[master 9ea7131] Onwards to Kubernetes!
 3 files changed, 15 insertions(+), 15 deletions(-)
 ```
 ```bash
 Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ git push origin HEAD
Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (11/11), done.
Writing objects: 100% (12/12), 1.35 KiB | 346.00 KiB/s, done.
Total 12 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), completed with 5 local objects.
To https://github.com/peelmicro/multi-docker.git
   cccdcca..9ea7131  HEAD -> master
 ```

### Updating Existing Objects
 - New Goal: Update our existing pod to use the multi-worker image.
 
 1. Update the current `pod` config file.
|Imperative  | Declarative  |
|------- | ------- |
|Run a command to list out current running pods | Update our config file that originally created the pod  |
|Run a command to update the current pod to use a new image |Throw the update config file into `kubectl`  |

- We are normally going to use the `declarative` approach

![](/images/other/docker-multi-docker/UpdatingAnObject.png)

> `client-pod.yaml`
```yaml
apiVersion: v1
kind: Pod
metadata: 
  name: client-pod
  labels:
    component: web
spec:
  containers:
    - name: client
      image: peelmicro/multi-worker
      ports:
        - containerPort: 3000
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-pod.yaml
pod "client-pod" configured
```
- `configured` means it has updated the configuration.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME         READY     STATUS    RESTARTS   AGE
client-pod   1/1       Running   1          1m
```
* In order to get detailed info about an object we need to use the `describe` command

![](/images/other/docker-multi-docker/GetDetailedInfoAboutAnObject.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl describe pod client-pod
Name:         client-pod
Namespace:    default
Node:         minikube/192.168.0.109
Start Time:   Fri, 30 Nov 2018 05:56:21 +0000
Labels:       component=web
Annotations:  kubectl.kubernetes.io/last-applied-configuration={"apiVersion":"v1","kind":"Pod","metadata":{"annotations":{},"labels":{"component":"web"},"name":"client-pod","namespace":"default"},"spec":{"container...
Status:       Running
IP:           172.17.0.4
Containers:
  client:
    Container ID:   docker://9837ebfc5f103c85f5f2e73560918f40c1ebf68da4e941924c1f853b5f8bb0a1
    Image:          peelmicro/multi-worker
    Image ID:       docker-pullable://peelmicro/multi-worker@sha256:eb0a0cdb16e30ea5abde8d11b5a7665afeb4dcb53afd7b6c9fd85158e9c9ed74
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Fri, 30 Nov 2018 05:57:07 +0000
    Last State:     Terminated
      Reason:       Completed
      Exit Code:    0
      Started:      Fri, 30 Nov 2018 05:56:38 +0000
      Finished:     Fri, 30 Nov 2018 05:56:39 +0000
    Ready:          True
    Restart Count:  1
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-6gfdz (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-6gfdz:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-6gfdz
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason                 Age              From               Message
  ----    ------                 ----             ----               -------
  Normal  Scheduled              5m               default-scheduler  Successfully assigned client-pod to minikube
  Normal  SuccessfulMountVolume  5m               kubelet, minikube  MountVolume.SetUp succeeded for volume "default-token-6gfdz"
  Normal  Pulling                5m               kubelet, minikube  pulling image "peelmicro/multi-client"
  Normal  Pulled                 5m               kubelet, minikube  Successfully pulled image "peelmicro/multi-client"
  Normal  Killing                5m               kubelet, minikube  Killing container with id docker://client:Container spec hash changed (1530414485 vs 1174731426).. Container will be killed and recreated.
  Normal  Pulling                5m               kubelet, minikube  pulling image "peelmicro/multi-worker"
  Normal  Created                5m (x2 over 5m)  kubelet, minikube  Created container
  Normal  Pulled                 5m               kubelet, minikube  Successfully pulled image "peelmicro/multi-worker"
  Normal  Started                5m (x2 over 5m)  kubelet, minikube  Started container
  ```
  2. Make another change to the `pod` config file to update the `containerPort`
  > `client-pod.yaml`
  ```yaml
  apiVersion: v1
kind: Pod
metadata: 
  name: client-pod
  labels:
    component: web
spec:
  containers:
    - name: client
      image: peelmicro/multi-worker
      ports: 
        - containerPort: 9999
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-pod.yaml
The Pod "client-pod" is invalid: spec: Forbidden: pod updates may not change fields other than `spec.containers[*].image`, `spec.initContainers[*].image`, `spec.activeDeadlineSeconds` or `spec.tolerations` (only additions to existing tolerations)
{"Volumes":[{"Name":"default-token-6gfdz","HostPath":null,"EmptyDir":null,"GCEPersistentDisk":null,"AWSElasticBlockStore":null,"GitRepo":null,"Secret":{"SecretName":"default-token-6gfdz","Items":null,"DefaultMode":420,"Optional":null},"NFS":null,"ISCSI":null,"Glusterfs":null,"PersistentVolumeClaim":null,"RBD":null,"Quobyte":null,"FlexVolume":null,"Cinder":null,"CephFS":null,"Flocker":null,"DownwardAPI":null,"FC":null,"AzureFile":null,"ConfigMap":null,"VsphereVolume":null,"AzureDisk":null,"PhotonPersistentDisk":null,"Projected":null,"PortworxVolume":null,"ScaleIO":null,"StorageOS":null}],"InitContainers":null,"Containers":[{"Name":"client","Image":"peelmicro/multi-worker","Command":null,"Args":null,"WorkingDir":"","Ports":[{"Name":"","HostPort":0,"ContainerPort":

A: 9999,"Protocol":"TCP","HostIP":""}],"EnvFrom":null,"Env":null,"Resources":{"Limits":null,"Requests":null},"VolumeMounts":[{"Name":"default-token-6gfdz","ReadOnly":true,"MountPath":"/var/run/secrets/kubernetes.io/serviceaccount","SubPath":"","MountPropagation":null}],"VolumeDevices":null,"LivenessProbe":null,"ReadinessProbe":null,"Lifecycle":null,"TerminationMessagePath":"/dev/termination-log","TerminationMessagePolicy":"File","ImagePullPolicy":"Always","SecurityContext":null,"Stdin":false,"StdinOnce":false,"TTY":false}],"RestartPolicy":"Always","TerminationGracePeriodSeconds":30,"ActiveDeadlineSeconds":null,"DNSPolicy":"ClusterFirst","NodeSelector":null,"ServiceAccountName":"default","AutomountServiceAccountToken":null,"NodeName":"minikube","SecurityContext":{"HostNetwork":false,"HostPID":false,"HostIPC":false,"ShareProcessNamespace":null,"SELinuxOptions":null,"RunAsUser":null,"RunAsGroup":null,"RunAsNonRoot":null,"SupplementalGroups":null,"FSGroup":null},"ImagePullSecrets":null,"Hostname":"","Subdomain":"","Affinity":null,"SchedulerName":"default-scheduler","Tolerations":[{"Key":"node.kubernetes.io/not-ready","Operator":"Exists","Value":"","Effect":"NoExecute","TolerationSeconds":300},{"Key":"node.kubernetes.io/unreachable","Operator":"Exists","Value":"","Effect":"NoExecute","TolerationSeconds":300}],"HostAliases":null,"PriorityClassName":"","Priority":null,"DNSConfig":null}

B: 3000,"Protocol":"TCP","HostIP":""}],"EnvFrom":null,"Env":null,"Resources":{"Limits":null,"Requests":null},"VolumeMounts":[{"Name":"default-token-6gfdz","ReadOnly":true,"MountPath":"/var/run/secrets/kubernetes.io/serviceaccount","SubPath":"","MountPropagation":null}],"VolumeDevices":null,"LivenessProbe":null,"ReadinessProbe":null,"Lifecycle":null,"TerminationMessagePath":"/dev/termination-log","TerminationMessagePolicy":"File","ImagePullPolicy":"Always","SecurityContext":null,"Stdin":false,"StdinOnce":false,"TTY":false}],"RestartPolicy":"Always","TerminationGracePeriodSeconds":30,"ActiveDeadlineSeconds":null,"DNSPolicy":"ClusterFirst","NodeSelector":null,"ServiceAccountName":"default","AutomountServiceAccountToken":null,"NodeName":"minikube","SecurityContext":{"HostNetwork":false,"HostPID":false,"HostIPC":false,"ShareProcessNamespace":null,"SELinuxOptions":null,"RunAsUser":null,"RunAsGroup":null,"RunAsNonRoot":null,"SupplementalGroups":null,"FSGroup":null},"ImagePullSecrets":null,"Hostname":"","Subdomain":"","Affinity":null,"SchedulerName":"default-scheduler","Tolerations":[{"Key":"node.kubernetes.io/not-ready","Operator":"Exists","Value":"","Effect":"NoExecute","TolerationSeconds":300},{"Key":"node.kubernetes.io/unreachable","Operator":"Exists","Value":"","Effect":"NoExecute","TolerationSeconds":300}],"HostAliases":null,"PriorityClassName":"","Priority":null,"DNSConfig":null}
```
- Only those `four` configuration properties are allowed to be changed on a `pod`

![](/images/other/docker-multi-docker/OnlySomeConfigurationValuesCanBeChanged.png)

3. Creation of a `deployment` object.
- We need to use the `deployment` configuration object to make additional changes.

![](/images/other/docker-multi-docker/ObjectTypes.png)

- These are the diferences between `Pods` and `Deployments`

![](/images/other/docker-multi-docker/PodsVsDeployments.png)

- In order to use `Deployment` we need to use a `pod` template

![](/images/other/docker-multi-docker/PodTemplate.png)

- We can make changes just updating the `pod` template
> `client-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: client-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web
    spec:
      containers: 
        - name: client
          image: peelmicro/multi-client
          ports: 
            - containerPort: 3000
```
- `replicas` is the number of different `pods` that the deployment is supposed to make.
- `selector` contains the name of the `pod` and `service` that must be run

![](/images/other/docker-multi-docker/DeploymentSelector.png)

4. Applying a `deployment`

- To remove an object we need to use the `delete` command.

![](/images/other/docker-multi-docker/RemoveAnObject.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME         READY     STATUS    RESTARTS   AGE
client-pod   1/1       Running   1          57m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl delete -f client-pod
error: the path "client-pod" does not exist
```
- The `extension` must be used to be able to use the `delete` command
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl delete -f client-pod.yaml
pod "client-pod" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
No resources found.
```
- Apply the new `deployment` object
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "client-deployment" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME                                 READY     STATUS    RESTARTS   AGE
client-deployment-59b84dbbf6-4bmlq   1/1       Running   0          25s
```
- We can use the `get` command to obtain information about the `deployment` object
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   1         1         1            1           1m
```
- `DESIRED`: Number of `replicas` we requested to create
- `CURRENT`: Number of `replicas` currently up and running
- `UP-TO-DATE`: Number of `replicas` up-to-date running
- `AVAILABLE`: Number of `pods` currently up and running

5. Browse the `client` container that is currently running 
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube ip
192.168.0.109
```

- Browse to http://192.168.0.109:31515/

![](/images/other/docker-multi-docker/BrowseDeploymentClientContainerRunning.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)$ kubectl get pods -o wide
NAME                                 READY     STATUS    RESTARTS   AGE       IP           NODE
client-deployment-59b84dbbf6-4bmlq   1/1       Running   0          15m       172.17.0.4   minikube
```
- `IP`: Every single `pod` that we create gets its own IP address assign to it. It's internal to the Node (Virtual machine).

6. Update the `port` from the current `pod` and other config values
- Change the port inside the `client-deployment.yaml` config file
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: client-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web
    spec:
      containers: 
        - name: client
          image: peelmicro/multi-client
          ports: 
            - containerPort: 9999
```
- Update the config file
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "client-deployment" configured
```
- This time it has been configured without giving any error
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   1         1         1            1           24m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods -o wide
NAME                                 READY     STATUS    RESTARTS   AGE       IP           NODE
client-deployment-6ff5c58945-d2cv5   1/1       Running   0          1m        172.17.0.6   minikube
```
- Kubernates delete the pod and create a new one. Check out the `AGE` value
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl describe  pods
Name:           client-deployment-6ff5c58945-d2cv5
Namespace:      default
Node:           minikube/192.168.0.109
Start Time:     Fri, 30 Nov 2018 07:26:24 +0000
Labels:         component=web
                pod-template-hash=2991714501
Annotations:    <none>
Status:         Running
IP:             172.17.0.6
Controlled By:  ReplicaSet/client-deployment-6ff5c58945
Containers:
  client:
    Container ID:   docker://4d48c4ce33c7fce915d2d2da194f4d6c4748b3077d0ff6f22479019229b22f5f
    Image:          peelmicro/multi-client
    Image ID:       docker-pullable://peelmicro/multi-client@sha256:9e4aec59d66a95cdcac94bebdd9ae7a81ea3ca64434fd83e7f583604bf503734
    Port:           9999/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Fri, 30 Nov 2018 07:26:27 +0000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-6gfdz (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-6gfdz:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-6gfdz
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason                 Age   From               Message
  ----    ------                 ----  ----               -------
  Normal  Scheduled              3m    default-scheduler  Successfully assigned client-deployment-6ff5c58945-d2cv5 to minikube
  Normal  SuccessfulMountVolume  3m    kubelet, minikube  MountVolume.SetUp succeeded for volume "default-token-6gfdz"
  Normal  Pulling                3m    kubelet, minikube  pulling image "peelmicro/multi-client"
  Normal  Pulled                 3m    kubelet, minikube  Successfully pulled image "peelmicro/multi-client"
  Normal  Created                3m    kubelet, minikube  Created container
  Normal  Started                3m    kubelet, minikube  Started container
```
- The port assigned is `Port: 9999/TCP`

* Change the `client-deployment.yaml` again to put more `replicas`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: client-deployment
spec:
  replicas: 5
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web
    spec:
      containers: 
        - name: client
          image: peelmicro/multi-client
          ports: 
            - containerPort: 9999
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "client-deployment" configured
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   5         5         5            5           9h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME                                 READY     STATUS    RESTARTS   AGE
client-deployment-6ff5c58945-5gk92   1/1       Running   0          1m
client-deployment-6ff5c58945-8dp2g   1/1       Running   0          1m
client-deployment-6ff5c58945-d2cv5   1/1       Running   0          9h
client-deployment-6ff5c58945-gmzlw   1/1       Running   0          1m
client-deployment-6ff5c58945-j9vp7   1/1       Running   0          1m
```
* Change the `client-deployment.yaml` again to use another `image`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: client-deployment
spec:
  replicas: 5
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web
    spec:
      containers: 
        - name: client
          image: peelmicro/multi-worker
          ports: 
            - containerPort: 9999
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "client-deployment" configured
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   5         7         3            4           9h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME                                 READY     STATUS    RESTARTS   AGE
client-deployment-78cf7b9dfb-gjpqz   1/1       Running   0          1m
client-deployment-78cf7b9dfb-mntrd   1/1       Running   0          1m
client-deployment-78cf7b9dfb-pzv2z   1/1       Running   0          1m
client-deployment-78cf7b9dfb-rzkfs   1/1       Running   0          1m
client-deployment-78cf7b9dfb-t4hb9   1/1       Running   0          1m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   5         5         5            5           9h
```
7. Change the `image` version

![](/images/other/docker-multi-docker/ChangeImage.png)

I) Modify the `client-deployment.yaml` config file to use the `multi-client` image again
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: client-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web
    spec:
      containers: 
        - name: client
          image: peelmicro/multi-client
          ports: 
            - containerPort: 3000
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "client-deployment" configured
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   1         1         1            1           10h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME                                 READY     STATUS    RESTARTS   AGE
client-deployment-59b84dbbf6-dc279   1/1       Running   0          50s
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ minikube ip
192.168.0.109
```
* Browse to http://192.168.0.109:31515/

![](/images/other/docker-multi-docker/ChangeImageVersion.png)

II) Update the `multi-client` image and push it to `Docker Hub`

* Change the `App.js` to put another header to identify the version
```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Fib Calculator vesion 2</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
```
* Rebuild the `multi-client` image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker build -t peelmicro/multi-client ./client
Sending build context to Docker daemon    341kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 1a05d05e0b5b
Step 3/10 : COPY ./package.json ./
 ---> Using cache
 ---> 829609b8e407
Step 4/10 : RUN npm install
 ---> Using cache
 ---> a2ca727a111e
Step 5/10 : COPY . .
 ---> d9b8311b417a
Step 6/10 : RUN npm run build
 ---> Running in 0d52a8bd0ab7

> client@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.2 KB  build/static/js/1.7b85cb19.chunk.js
  1.37 KB  build/static/js/main.4bd87b42.chunk.js
  763 B    build/static/js/runtime~main.229c360f.js
  510 B    build/static/css/main.0b4a1755.chunk.css

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

Removing intermediate container 0d52a8bd0ab7
 ---> 0a5cbc881d07
Step 7/10 : FROM nginx
 ---> e81eb098537d
Step 8/10 : EXPOSE 3000
 ---> Using cache
 ---> 021956dfacb6
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> bb5bf32d71ca
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> 47577da1f5ee
Successfully built 47577da1f5ee
Successfully tagged peelmicro/multi-client:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
* Push the `multi-client` image to `Docker Hub`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker push peelmicro/multi-client
The push refers to repository [docker.io/peelmicro/multi-client]
6b2a185eccae: Pushed
b439c254b1a6: Layer already exists
9a8f339aeebe: Layer already exists
876456b96423: Layer already exists
ef68f6734aa4: Layer already exists
latest: digest: sha256:038514b50e1b2c8511175dc516554aace22daf21f263c46231201889ce7ddb3f size: 1365
```
III) Recreate our `pods` with the `lastest version` of the `multi-client` image
* As it can be seen on [Force pods to re-pull an image without changing the image tag #33664](https://github.com/kubernetes/kubernetes/issues/33664), this is not easy to get.
* If we try to use `kubectl apply` to get the lastest image it won't work because there have been no changes on the `client-deployment.yaml` config file.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "client-deployment" unchanged
```
* There are 3 possible solutions:
I) **Manually delete pods to get the deployment to recreate them with the latest version**: `Deleting pods manually seems silly`
II) **Tag built images with a real version number and specify that version in the config file**: `Adds an extra step in the production deployment process`
III) **Use an imperative command to update the image version the deployment should use**: `Uses an imperative command`

- The third solution seems to be `the lesser evil`. It requires 2 steps:
I) `Tag` the image with a `version number`, push to `Docker Hub`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker build -t peelmicro/multi-client:v2 ./client
Sending build context to Docker daemon    341kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 1a05d05e0b5b
Step 3/10 : COPY ./package.json ./
 ---> Using cache
 ---> 829609b8e407
Step 4/10 : RUN npm install
 ---> Using cache
 ---> a2ca727a111e
Step 5/10 : COPY . .
 ---> Using cache
 ---> d9b8311b417a
Step 6/10 : RUN npm run build
 ---> Using cache
 ---> 0a5cbc881d07
Step 7/10 : FROM nginx
 ---> e81eb098537d
Step 8/10 : EXPOSE 3000
 ---> Using cache
 ---> 021956dfacb6
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> bb5bf32d71ca
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> Using cache
 ---> 47577da1f5ee
Successfully built 47577da1f5ee
Successfully tagged peelmicro/multi-client:v2
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker push peelmicro/multi-client:v2
The push refers to repository [docker.io/peelmicro/multi-client]
6b2a185eccae: Layer already exists
b439c254b1a6: Layer already exists
9a8f339aeebe: Layer already exists
876456b96423: Layer already exists
ef68f6734aa4: Layer already exists
v2: digest: sha256:038514b50e1b2c8511175dc516554aace22daf21f263c46231201889ce7ddb3f size: 1365
```
II) `Run` a specific `kubectl` command forcing the deployment to use the the `image version`

![](/images/other/docker-multi-docker/RecreatePodWithLatestImage.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl set image deployment/client-deployment client=peelmicro/multi-client:v2
deployment.apps "client-deployment" image updated
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl get pods
NAME                                READY     STATUS    RESTARTS   AGE
client-deployment-8846f9858-cvg8t   1/1       Running   0          41s
```
* Browse http://192.168.0.109:31515/

![](/images/other/docker-multi-docker/RecreatePodWithLatestImage2.png)

8. Reconfiguring `Docker Client` to talk to the `Virtual Machine (Node)` used by `Kubernetes`
- Execute `Docker ps` 
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

![](/images/other/docker-multi-docker/ConfigureDockerClient.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ eval $(minikube docker-env)
bash: syntax error near unexpected token `('
```
- It doesn't work in Windows. We need to run the following inside `PowerShell`
```bash
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\WINDOWS\system32> minikube docker-env --shell powershell
$Env:DOCKER_TLS_VERIFY = "1"
$Env:DOCKER_HOST = "tcp://192.168.0.109:2376"
$Env:DOCKER_CERT_PATH = "C:\Users\juan.pablo.perez\.minikube\certs"
$Env:DOCKER_API_VERSION = "1.35"
# Run this command to configure your shell:
# & minikube docker-env | Invoke-Expression
```
```bash
PS C:\WINDOWS\system32> $Env:DOCKER_TLS_VERIFY = "1"
PS C:\WINDOWS\system32> $Env:DOCKER_HOST = "tcp://192.168.0.109:2376"
PS C:\WINDOWS\system32> $Env:DOCKER_CERT_PATH = "C:\Users\juan.pablo.perez\.minikube\certs"
PS C:\WINDOWS\system32> $Env:DOCKER_API_VERSION = "1.35"
```
```bash
PS C:\WINDOWS\system32> docker ps
CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS              PORTS               NAMES
0a99c1cb32a3        peelmicro/multi-client       "nginx -g 'daemon of…"   26 minutes ago      Up 26 minutes                           k8s_client_client-deployment-8846f9858-cvg8t_default_4ec3b4fd-f4cc-11e8-b3dd-00155dc00118_0
5585ecfeb457        k8s.gcr.io/pause-amd64:3.1   "/pause"                 26 minutes ago      Up 26 minutes                           k8s_POD_client-deployment-8846f9858-cvg8t_default_4ec3b4fd-f4cc-11e8-b3dd-00155dc00118_0
b275f6a054c2        af20925d51a3                 "kube-apiserver --ad…"   2 hours ago         Up 2 hours                              k8s_kube-apiserver_kube-apiserver-minikube_kube-system_0df2ebb4fc765e127c7c294db5a0e865_95
11a23992d001        704ba848e69a                 "kube-scheduler --ku…"   2 hours ago         Up 2 hours                              k8s_kube-scheduler_kube-scheduler-minikube_kube-system_2acb197d598c4730e3f5b159b241a81b_54
971c28567426        ad86dbed1555                 "kube-controller-man…"   2 hours ago         Up 2 hours                              k8s_kube-controller-manager_kube-controller-manager-minikube_kube-system_dde005f4fe3533d3931c0406031b5fd9_56
190c53422207        4689081edb10                 "/storage-provisioner"   25 hours ago        Up 25 hours                             k8s_storage-provisioner_storage-provisioner_kube-system_ae5c72e9-f270-11e8-bb1e-00155dc00118_6
65d5f69a993f        0dab2435c100                 "/dashboard --insecu…"   25 hours ago        Up 25 hours                             k8s_kubernetes-dashboard_kubernetes-dashboard-6f4cfc5d87-6pvlf_kube-system_adb0b5d6-f270-11e8-bb1e-00155dc00118_6
7b903aaf4cda        80cc5ea4b547                 "/kube-dns --domain=…"   25 hours ago        Up 25 hours                             k8s_kubedns_kube-dns-86f4d74b45-c2862_kube-system_abfaf66d-f270-11e8-bb1e-00155dc00118_4
9962088a0471        bfc21aadc7d3                 "/usr/local/bin/kube…"   25 hours ago        Up 25 hours                             k8s_kube-proxy_kube-proxy-k7tpw_kube-system_48306f5f-f3fb-11e8-bab5-00155dc00118_0
c4800fcc4fa7        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kube-proxy-k7tpw_kube-system_48306f5f-f3fb-11e8-bab5-00155dc00118_0
6e570b1dbb8f        367cdc8433a4                 "/coredns -conf /etc…"   25 hours ago        Up 25 hours                             k8s_coredns_coredns-c4cffd6dc-sclh4_kube-system_ae4082ad-f270-11e8-bb1e-00155dc00118_2
1c740a0c5547        6f7f2dc7fab5                 "/sidecar --v=2 --lo…"   25 hours ago        Up 25 hours                             k8s_sidecar_kube-dns-86f4d74b45-c2862_kube-system_abfaf66d-f270-11e8-bb1e-00155dc00118_2
a2e99c0cd9cf        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_coredns-c4cffd6dc-sclh4_kube-system_ae4082ad-f270-11e8-bb1e-00155dc00118_2
8cc313e7eb33        c2ce1ffb51ed                 "/dnsmasq-nanny -v=2…"   25 hours ago        Up 25 hours                             k8s_dnsmasq_kube-dns-86f4d74b45-c2862_kube-system_abfaf66d-f270-11e8-bb1e-00155dc00118_2
a68169b8064e        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_storage-provisioner_kube-system_ae5c72e9-f270-11e8-bb1e-00155dc00118_2
581dcd721bf4        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kubernetes-dashboard-6f4cfc5d87-6pvlf_kube-system_adb0b5d6-f270-11e8-bb1e-00155dc00118_2
97e39d9b331e        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kube-dns-86f4d74b45-c2862_kube-system_abfaf66d-f270-11e8-bb1e-00155dc00118_2
39dd0a69074e        52920ad46f5b                 "etcd --cert-file=/v…"   25 hours ago        Up 25 hours                             k8s_etcd_etcd-minikube_kube-system_20370018eab9174f884d18239b68411c_0
02684a90bf4d        9c16409588eb                 "/opt/kube-addons.sh"    25 hours ago        Up 25 hours                             k8s_kube-addon-manager_kube-addon-manager-minikube_kube-system_8b52f08746ac78d32737b5f7fdffec52_2
1d3ed907a323        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kube-scheduler-minikube_kube-system_2acb197d598c4730e3f5b159b241a81b_0
507992a6702c        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kube-apiserver-minikube_kube-system_0df2ebb4fc765e127c7c294db5a0e865_0
53ba900a3da7        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kube-controller-manager-minikube_kube-system_dde005f4fe3533d3931c0406031b5fd9_0
1105703f6f77        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_etcd-minikube_kube-system_20370018eab9174f884d18239b68411c_0
ad9d52e5db7f        k8s.gcr.io/pause-amd64:3.1   "/pause"                 25 hours ago        Up 25 hours                             k8s_POD_kube-addon-manager-minikube_kube-system_8b52f08746ac78d32737b5f7fdffec52_2
```

![](/images/other/docker-multi-docker/ConfigureDockerClient2.png)

```bash
PS C:\WINDOWS\system32> docker logs 0a99c1cb32a3
172.17.0.1 - - [30/Nov/2018:18:19:57 +0000] "GET / HTTP/1.1" 200 2057 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
172.17.0.1 - - [30/Nov/2018:18:19:57 +0000] "GET /static/js/main.4bd87b42.chunk.js HTTP/1.1" 200 3852 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
2018/11/30 18:19:58 [error] 5#5: *1 open() "/usr/share/nginx/html/api/values/current" failed (2: No such file or directory), client: 172.17.0.1, server: , request: "GET /api/values/current HTTP/1.1", host: "192.168.0.109:31515", referrer: "http://192.168.0.109:31515/"
172.17.0.1 - - [30/Nov/2018:18:19:58 +0000] "GET /api/values/current HTTP/1.1" 404 555 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
2018/11/30 18:19:58 [error] 5#5: *2 open() "/usr/share/nginx/html/api/values/all" failed (2: No such file or directory), client: 172.17.0.1, server: , request: "GET /api/values/all HTTP/1.1", host: "192.168.0.109:31515", referrer: "http://192.168.0.109:31515/"
172.17.0.1 - - [30/Nov/2018:18:19:58 +0000] "GET /api/values/all HTTP/1.1" 404 555 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
172.17.0.1 - - [30/Nov/2018:18:19:58 +0000] "GET /favicon.ico HTTP/1.1" 200 3870 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
```
```bash
PS C:\WINDOWS\system32> docker exec -it 0a99c1cb32a3 sh
# ls
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
# exit
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME                                READY     STATUS    RESTARTS   AGE
client-deployment-8846f9858-cvg8t   1/1       Running   0          39m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl logs client-deployment-8846f9858-cvg8t
172.17.0.1 - - [30/Nov/2018:18:19:57 +0000] "GET / HTTP/1.1" 200 2057 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
172.17.0.1 - - [30/Nov/2018:18:19:57 +0000] "GET /static/js/main.4bd87b42.chunk.js HTTP/1.1" 200 3852 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/70.0.3538.110 Safari/537.36" "-"
2018/11/30 18:19:58 [error] 5#5: *1 open() "/usr/share/nginx/html/api/values/current" failed (2: No such file or directory), client: 172.17.0.1, server: , request: "GET /api/values/current HTTP/1.1", host: "192.168.0.109:31515", referrer: "http://192.168.0.109:31515/"
172.17.0.1 - - [30/Nov/2018:18:19:58 +0000] "GET /api/values/current HTTP/1.1" 404 555 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
2018/11/30 18:19:58 [error] 5#5: *2 open() "/usr/share/nginx/html/api/values/all" failed (2: No such file or directory), client: 172.17.0.1, server: , request: "GET /api/values/all HTTP/1.1", host: "192.168.0.109:31515", referrer: "http://192.168.0.109:31515/"
172.17.0.1 - - [30/Nov/2018:18:19:58 +0000] "GET /api/values/all HTTP/1.1" 404 555 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36" "-"
172.17.0.1 - - [30/Nov/2018:18:19:58 +0000] "GET /favicon.ico HTTP/1.1" 200 3870 "http://192.168.0.109:31515/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110
Safari/537.36" "-"
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl exec -it  client-deployment-8846f9858-cvg8t sh
# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# exit
```
```bash
PS C:\WINDOWS\system32> docker system prune -a
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all images without at least one container associated to them
        - all build cache
Are you sure you want to continue? [y/N] N
```
9. `Commit` and `Push` changes to Github Repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
warning: LF will be replaced by CRLF in client/src/App.js.
The file will have its original line endings in your working directory.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.
```
```bash
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
        modified:   client/src/App.js
        new file:   simplek8s/client-deployment.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "Maintaining Sets of Containers with Deployments"
[master 6fdf00d] Maintaining Sets of Containers with Deployments
 3 files changed, 21 insertions(+), 2 deletions(-)
 create mode 100644 simplek8s/client-deployment.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$  git push origin HEAD
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 884 bytes | 221.00 KiB/s, done.
Total 8 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To https://github.com/peelmicro/multi-docker.git
   9ea7131..6fdf00d  HEAD -> master
```
### A Multi-Container App with Kubernetes

![](/images/other/docker-multi-docker/MultiContainerKubernetes.png)

![](/images/other/docker-multi-docker/MultiContainerKubernetes2.png)

1. Build the `docker-compose` images 
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker-compose up --build
Creating network "complex_default" with the default driver
Building nginx
Step 1/2 : FROM nginx
 ---> e81eb098537d
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> a94da78131c1
Successfully built a94da78131c1
Successfully tagged complex_nginx:latest
Building api
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 1a05d05e0b5b
Step 3/6 : COPY package.json .
 ---> 353767802d4a
Step 4/6 : RUN npm install
 ---> Running in 76e10e6b09f7

> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 296 packages from 185 contributors and audited 2409 packages in 17.687s
found 0 vulnerabilities

Removing intermediate container 76e10e6b09f7
 ---> 5e06c97d8967
Step 5/6 : COPY . .
 ---> d1c61aa228e0
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in 1e3e852eac3a
Removing intermediate container 1e3e852eac3a
 ---> db3cd30142b3
Successfully built db3cd30142b3
Successfully tagged complex_api:latest
Building client
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 1a05d05e0b5b
Step 3/6 : COPY package.json .
 ---> Using cache
 ---> 15dd7c6bc9bd
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 810576e9d194
Step 5/6 : COPY . .
 ---> 6903be0ca51e
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 503a667e42a2
Removing intermediate container 503a667e42a2
 ---> b2897b22b69b
Successfully built b2897b22b69b
Successfully tagged complex_client:latest
Building worker
Step 1/6 : FROM node:alpine
 ---> 4b3c025f5508
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 1a05d05e0b5b
Step 3/6 : COPY package.json .
 ---> c3d48126a7bf
Step 4/6 : RUN npm install
 ---> Running in e81e9ccb50cb

> nodemon@1.18.3 postinstall /app/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 227 packages from 134 contributors and audited 2242 packages in 13.709s
found 0 vulnerabilities

Removing intermediate container e81e9ccb50cb
 ---> cf872f68572e
Step 5/6 : COPY . .
 ---> f22533f9c170
Step 6/6 : CMD ["npm", "run", "dev"]
 ---> Running in 49bcc6ea590e
Removing intermediate container 49bcc6ea590e
 ---> 6007affa6032
Successfully built 6007affa6032
Successfully tagged complex_worker:latest
Creating complex_client_1   ... done
Creating complex_nginx_1    ... done
Creating complex_postgres_1 ... done
Creating complex_redis_1    ... done
Creating complex_api_1      ... done
Creating complex_worker_1   ... done
Attaching to complex_nginx_1, complex_redis_1, complex_postgres_1, complex_api_1, complex_worker_1, complex_client_1
nginx_1     | 2018/12/01 10:34:35 [emerg] 1#1: host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
nginx_1     | nginx: [emerg] host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
redis_1     | 1:C 01 Dec 2018 10:34:36.060 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 01 Dec 2018 10:34:36.060 # Redis version=5.0.1, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 01 Dec 2018 10:34:36.060 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 01 Dec 2018 10:34:36.071 * Running mode=standalone, port=6379.
redis_1     | 1:M 01 Dec 2018 10:34:36.071 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 01 Dec 2018 10:34:36.071 # Server initialized
redis_1     | 1:M 01 Dec 2018 10:34:36.071 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 01 Dec 2018 10:34:36.071 * Ready to accept connections
postgres_1  | The files belonging to this database system will be owned by user "postgres".
postgres_1  | This user must also own the server process.
postgres_1  |
postgres_1  | The database cluster will be initialized with locale "en_US.utf8".
postgres_1  | The default database encoding has accordingly been set to "UTF8".
postgres_1  | The default text search configuration will be set to "english".
postgres_1  |
postgres_1  | Data page checksums are disabled.
postgres_1  |
postgres_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
postgres_1  | creating subdirectories ... ok
postgres_1  | selecting default max_connections ... 100
postgres_1  | selecting default shared_buffers ... 128MB
postgres_1  | selecting dynamic shared memory implementation ... posix
postgres_1  | creating configuration files ... ok
postgres_1  | running bootstrap script ... ok
postgres_1  | performing post-bootstrap initialization ... ok
postgres_1  | syncing data to disk ... ok
postgres_1  |
postgres_1  | Success. You can now start the database server using:
postgres_1  |
postgres_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
postgres_1  |
postgres_1  |
postgres_1  | WARNING: enabling "trust" authentication for local connections
postgres_1  | You can change this by editing pg_hba.conf or using the option -A, or
postgres_1  | --auth-local and --auth-host, the next time you run initdb.
postgres_1  | ****************************************************
postgres_1  | WARNING: No password has been set for the database.
postgres_1  |          This will allow anyone with access to the
postgres_1  |          Postgres port to access your database. In
postgres_1  |          Docker's default configuration, this is
postgres_1  |          effectively any other container on the same
postgres_1  |          system.
postgres_1  |
postgres_1  |          Use "-e POSTGRES_PASSWORD=password" to set
postgres_1  |          it in "docker run".
postgres_1  | ****************************************************
postgres_1  | waiting for server to start....2018-12-01 10:34:46.398 UTC [42] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-12-01 10:34:46.586 UTC [43] LOG:  database system was shut down at 2018-12-01 10:34:43 UTC
postgres_1  | 2018-12-01 10:34:46.613 UTC [42] LOG:  database system is ready to accept connections
postgres_1  |  done
postgres_1  | server started
postgres_1  |
postgres_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
postgres_1  |
postgres_1  | waiting for server to shut down....2018-12-01 10:34:46.694 UTC [42] LOG:  received fast shutdown request
postgres_1  | 2018-12-01 10:34:46.704 UTC [42] LOG:  aborting any active transactions
postgres_1  | 2018-12-01 10:34:46.709 UTC [42] LOG:  background worker "logical replication launcher" (PID 49) exited with exit code 1
postgres_1  | 2018-12-01 10:34:46.709 UTC [44] LOG:  shutting down
postgres_1  | 2018-12-01 10:34:47.066 UTC [42] LOG:  database system is shut down
postgres_1  |  done
postgres_1  | server stopped
postgres_1  |
postgres_1  | PostgreSQL init process complete; ready for start up.
postgres_1  |
postgres_1  | 2018-12-01 10:34:47.141 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-12-01 10:34:47.141 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-12-01 10:34:47.193 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-12-01 10:34:47.256 UTC [51] LOG:  database system was shut down at 2018-12-01 10:34:47 UTC
postgres_1  | 2018-12-01 10:34:47.263 UTC [1] LOG:  database system is ready to accept connections
api_1       | npm ERR! path /app/package.json
api_1       | npm ERR! code ENOENT
api_1       | npm ERR! errno -2
api_1       | npm ERR! syscall open
api_1       | npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
api_1       | npm ERR! enoent This is related to npm not being able to find a file.
api_1       | npm ERR! enoent
api_1       |
worker_1    | npm ERR! path /app/package.json
worker_1    | npm ERR! code ENOENT
worker_1    | npm ERR! errno -2
worker_1    | npm ERR! syscall open
worker_1    | npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
worker_1    | npm ERR! enoent This is related to npm not being able to find a file.
api_1       | npm ERR! A complete log of this run can be found in:
worker_1    | npm ERR! enoent
api_1       | npm ERR!     /root/.npm/_logs/2018-12-01T10_34_38_660Z-debug.log
worker_1    |
worker_1    | npm ERR! A complete log of this run can be found in:
worker_1    | npm ERR!     /root/.npm/_logs/2018-12-01T10_34_38_627Z-debug.log
complex_worker_1 exited with code 254
complex_api_1 exited with code 254
client_1    | npm ERR! path /app/package.json
client_1    | npm ERR! code ENOENT
client_1    | npm ERR! errno -2
client_1    | npm ERR! syscall open
client_1    | npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
client_1    | npm ERR! enoent This is related to npm not being able to find a file.
client_1    | npm ERR! enoent
client_1    |
client_1    | npm ERR! A complete log of this run can be found in:
client_1    | npm ERR!     /root/.npm/_logs/2018-12-01T10_35_29_120Z-debug.log
complex_client_1 exited with code 254
complex_nginx_1 exited with code 1
Gracefully stopping... (press Ctrl+C again to force)
Stopping complex_nginx_1    ... done
Stopping complex_postgres_1 ... done
Stopping complex_redis_1    ... done
```
- If there are errors execute `docker-compose up` again and if there are still error execute `docker system prune`.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker system prune
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all dangling build cache
Are you sure you want to continue? [y/N] y
Deleted Containers:
b62a996fed7439313117602871f0f17a39d63e769abf287b5ced1d5b6d0a6a40
e1c167864ce045aa5a23b9d55754df7f95aecdbfd9453585e97fcb7ce230a602
4817fc2253badce968bda2a0c0ab4b86b628f3fa3fde982d3e88071fb1f7ec05
99f0efabc9374fdd350b216e88936c9ef7faaffa081bc8ec597310a45095ce3e
d0a8a073117ef8e7d09ff886c1e6b28e63e572840bbe38cb2b34318666d1b421
1ec18f8841fee94a9f0d03d2f886a272c32e98abe8b25591022c433be317d102
2cad54e9728af87611325594fc3a06a84ea69015313cb6fe026714cef56c5661
a39bdddcce5a4e32c9b5054f846a8803f40b8878f2b6f4db3ad5d38aec5115f8
d07e67ba14d4b85c77ab2e82d861601aecb2687e4b561ef7db715f5e0b9ebcd3
382bda1efb574005e4f39fc52f27ca58e3a6f3d0de4bb7bb2ac775c912b30eba
19865d97f7a107a7186f54e6cb84c70f76021063faef57009a0f234827ea8f81
a417d0eef9e3719474a40c59c5d38ac2dd9be3e3b37ee8a3f0b48ffa017a0e35
834c85a49e5ec475977f63c344506198377d6ed070a54ddafc4525a89c6e9b3a
b6ad9ce79ae466d432394e67e4d0c1b1846a63d6f5333c50225c83cf17aeb251
42f6c5b488f2812d16979b3abb08c5a277b85654eaf7a7d37c7b1ce19933c4b5
1025e1542ce0fa5d0a1aedfa6a09587568ccdc6f53d4ceed8ea01750fb0f89c0
088d59b47f30e2b021cf25a331c552e2a88a5b43d6d9194c95a8efbff813e2bc
ec2e594269d3c8b4fe5fe0870a88308dd7b2af580e6220dcd1e0f8ed1cd58fc1
7a637633c6611d256963339ae978c210d808138104d78910b91948c5f771d102
8792dbe6a8d0c927484e419a672e276ddb4101dd03acd92588232de8b0bd7f6a
51b00ca347342c360a6ea1ec881df8aeb279c680ca7f138b2da6ae0da2ab0102
ddf9a230898531f55c9bd9ba99c8e95787f5c2cf492e685cc80b0f3002673871

Deleted Networks:
python-complex_default
complex_default

Deleted Images:
untagged: peelmicro/multi-client@sha256:c5327e2204d451f3f3bbe1a892a5e6fac8a33915d8bbd8011f796ab9f135543f
deleted: sha256:0345ad1ffc6770e778a70e62ada91ef40403875803512d1d28ec740ebe7e7490
deleted: sha256:3aaca452f3c668e62d3242dd500fef616139b0ee4e202710e38ac481fd19dd6e
deleted: sha256:e504d55df43968c850865505d5730c2208210da0a8dd3bc9677d08beab6450e0
deleted: sha256:c35008d3707d09eb0ab09d740a907f9022a7d04941779ae9e44a165c8e6b2ba4
deleted: sha256:a525a727ac3b670d4e8130b03565ee1d49eab257694988da3ae10366feaec115
deleted: sha256:78da055fbf64b77461d5a5c90adfeebe13614b537768f8b3fca98de73a83826c
deleted: sha256:35f15f2c8493e26d697eba144babc5d37ece8f2d34ce9215cd150692ed4ae407
deleted: sha256:5075e6f95758e0da736ebf9a6417f3fa80d777f8852586f88e5781279eff756b
deleted: sha256:3578ed08603359f94f6a562770f7d26b779f3cefc618ee8cf0d3fc3a693ea7c0
deleted: sha256:e71a3fe60613c27c06eb8d357350efa57915ae272f02f698b8ee0fbad5eb8897
deleted: sha256:7d1a65aafc8bb6db6648eb721f570492e003228feac0c337ff5fe193008d1a9a
deleted: sha256:eed9b471ad49d23a9d5ddc01961d577dfcde3f0fd36fba1598b3f1725dec40db
deleted: sha256:f43d63e25f1081d2347807fb3abf1ca12eb334523444ef34865a8f065d3ceff5
deleted: sha256:fbdca0c3bbda904a98533b27086eab4f8cadc4adbc243dc531a0c0a7eeb56bf2
deleted: sha256:1f8a407dbe02e0ccb6a44e8f88abb72f6da0239e855f982b8b9dbb0be5fb263c
deleted: sha256:a2780c7a5452b3a4cce7f03340ec5c4103b71e43a80ee2c6425f7e823b2f54cc
deleted: sha256:f0345cefcd7b5475656970a0bb892bd09e683ecba18f33ae02d58c65c10117e7
deleted: sha256:5bc6844d029c240e934c514e27d80d999e60300cfd4c1c1b98f295927ef3da5a
deleted: sha256:c9c95f1aee632afc5a3e0621f060eb36d1dad81388bcee5688c494bd7c9f869a
deleted: sha256:5067d8b55ee740a77a61a90cb0ce0b3561ccee66df09662a8ec5c63063d79a34
deleted: sha256:0190632b1cc1030c5a8aaff6141238f20b0a3bb7b4bb4e0282faa09a0b6f4d67
deleted: sha256:643f33f531bd16e04660b1e29319a492654a305b71b76c627107e6ae12868b3b
deleted: sha256:9946b2658aa4c9d0b8278edfdfeaaf4630d70e40c0a1d8fd473e726fa4e7308a
deleted: sha256:a832295949b3b4c17870eaa4913670228401f2e48849d5782d3cdf5de30f99d3
deleted: sha256:c9ca770ee33083d5d87ffc11650ce7543e0f2e706ac99b81b544d8b181ee5298
deleted: sha256:8994a63e18a959ed26da2adc489f9b09586c904a476b1b1f6142c0a0346bb629
deleted: sha256:f7fd3eb05f81aeb17d85216b4b65ab44afe7baa3ab4c650c53e83addf134b71e
deleted: sha256:9e19cae4893ea972d4fed1ee21d1c783940cfc1d3a27de269b5e0f0cbd8e1467
deleted: sha256:76a557b982d53344ab18633389cacf5f9660749607eeb8378f27d84a37a011de
deleted: sha256:1adaf150ec89cfae2888056de4622585ece31358d208a27373e405855a1413e5
deleted: sha256:3528c30c677209ad8bfbe9c1695cd2533e28007f6f46baa7c15d796af5e72d35
deleted: sha256:ad798d49ec6595b3970cfd4a5212213a24512562afad2b48023113573e49f4fb
deleted: sha256:e522e8f1a4cad81c0d6b0fc79fb7053b2caa595bfd5e03866d45ffdb45e5df84
deleted: sha256:577f6786639e057a488d9c11e2eff1aa895c708203b26d6d3ab00a1bbb48f694
deleted: sha256:32fb91ba8d451e8e32ddb7da521c3ee371594c45ebc5fdcfe3040f53a7094ce2
deleted: sha256:9d3e1e8d3bdb2cca82752b49902a3cf3c2dfe641f84d02fe4258373043efae7a
deleted: sha256:7a9b4a18499d362e5b59c9bc539323bd3ac4537f41be8c23fcdeab430b3b0911
deleted: sha256:2172a22958f63ae6107a245619f6428d37343d4fdd4af6274f7ffb7f94ca5d60
deleted: sha256:76b742b17a4fb30e786109b339fd980aa65f6f12916cc378ac9154a74daacb97
deleted: sha256:36ab04cab8d99d35c3ed5d1d5c27327b766ed4899a7e2e33daf2b4e7463cfbe3
deleted: sha256:b79e37d7958bfede0b140190b28b5804488a04f4496ff7de21f458f0915dc4e6
deleted: sha256:fa091ff653168f227c314c9db9eccf43edf1933be3831330d82eb2b82e9ebd5f
deleted: sha256:c7011c17b2b84c3ee3fbd40d69adf3fb0089b380659944f1b99f91eb92c755c5
deleted: sha256:7b21f20de6636d7fa3ffee4aa201b69184b57c82bef2b28d33ce60dd52a2b74a
deleted: sha256:dda30b7d6fc159f3c757b641c5642ae6b93d67438577060add4a7aefb81b032d
deleted: sha256:50d10a957186f75ba30ef157fd31378f47702cc1bb275dca8c7c36ee9dbbfe18
deleted: sha256:a2f98913d14a06fc1789b51b3409e21bdecbbfde19deb4188b3d765ee6c9d566
deleted: sha256:ebf6d81e5d1f2025848c4039c2bbc4fec717554013a7f65ed2e94169a67a12fe
deleted: sha256:24df820f65174bbb87d8205aa28b967c47128207d37144a2e22c1b500da3673a
deleted: sha256:1007816db89edd598f7a193f85350937b376facd08baaec7896c5b186340e8d0
deleted: sha256:709fae05e09b3569c010ddb19d1aebdee8c0841bc24157f9ed46020833de39b9
deleted: sha256:3d4da674f53e1eadcc4769668887757c728ea4c3622e58ad2028703ed42d4d48
deleted: sha256:d0bb812840490a454064d48ac4f89ecca3271b5bd3ddd64c3f8a06cb1329eea2
deleted: sha256:5191a5c76f1e37d15795d9ce3081e5cbd246c0a88ade9127868ce691d1fa2ed2
deleted: sha256:57cf79ce8be300d91876eca586036405a5c57d3809255270e5c4046c32b953c9
deleted: sha256:6acfa2d32fa0062a96d46cd8e983b2273bd41296ec4354912c7361d01fb934b3
deleted: sha256:0043eeeb990511489e1afad3d33d3efd4e9cc8667be570d8749d574b4373d0aa
deleted: sha256:a66321de1e83f9a881713b07c35f9e488d51b42128d9f260630c247e671b457a
deleted: sha256:5a777688c0153949cb3ba243cd806f67060c4bcf14463ec8f814002b7ac3be35
deleted: sha256:a5fcec1063e9dafcefdd2c55f529a72827ca980fb0371d9b0d7f13eec00015e0
deleted: sha256:831492feace35a244c5707ab6e15563b01e2531c6f7a6595a2e98fb10e8b6ca9
deleted: sha256:a79715975ab7947294d86281137d10204b87cc72e58b8d5a9d8084fbddb3fe21
deleted: sha256:969bc09891b06393a2a4c479a5a6f59eed605be991d68b9f02fa6f6bbc519e71
deleted: sha256:0392d3cc41b792377a82f1ddb28cd3acc33c33445510bec17b84e42cab5d0461
deleted: sha256:19f670028afded8a8171e39ab48cb4125c428ff98feeaa333a84c031f7bfabe6
deleted: sha256:8d1cbe2557628cf5302e9757bf6d25bb21ec948ed5e25464c94f84480b3de677
deleted: sha256:03806e000f0142919df782feaa8ddc3ff07bed2500e4184129b89c7e51adb043
deleted: sha256:bb231909ebf501887334f79088a758aadac0a5137c1efa9547fb3dea1e0b120a
deleted: sha256:38be63410f94eb0c10e862bb5ec25fc4da7f2f6046bfac36d8a4ce4037b087e9
deleted: sha256:6ad1fec1215525e18b7937985057be0a35336e4515c4dc2a62d3d0a2865a60ac
deleted: sha256:15f4c48159b4002770f2d682ddc08b753980d90f2f610b403feba7fa3b5f1860
deleted: sha256:c79c7cc534fb310ab6d3a6cd09637d0aafeaab122fecdc44b4ae2d408439ad63
deleted: sha256:c327ffc68d844a1c66c2084a16782586e15c23b4937306e79f9827fc363d1bce
deleted: sha256:a804e0b71065b36c5569971bd54a5a74df2c422cc4ae828f4751fb440cbc6a1c
deleted: sha256:ec9be5dfad2226555edef97d47a6082ea7a78ebc1acc0eca6bce412617d887ce
deleted: sha256:dbb856fffe55d29b645966a02fe8a8015dbff7d40ca870470b77644d7a2b0495
deleted: sha256:1ba1cda602dea1773564ef669dd9c48023a695e575f698f105ebc4b080d3271a
deleted: sha256:f97a3f7fec67f6c3b156bfca5b2cf9f55e6c150e6991e65cedd439b256adaee4
deleted: sha256:7c7c0b49158f0dff08f0b3f68d5c79daf25c27562193b08b29daedcb7532a1fb
deleted: sha256:0a5cbc881d07b40072e9b9e7dba2cce65a9f25a89dff3702e360d2e66fe062a0
deleted: sha256:265c931af2139b6b0784a76c0ef5a7aab367be202919894cbb8f84fbffe9e068
deleted: sha256:d9b8311b417a867f190cdcaff9e4949253a554d334e143697c22cf5a2da2af2b
deleted: sha256:24e0b35b0e01a76287f0e91f3b0de27ad260aa8dae201ec19f5a7dad1c5f7aa5
deleted: sha256:a2ca727a111e5024ae338b259d7d7cb83e81b957e99cd4c0c156cc3efe920d21
deleted: sha256:049fdf1a4cbc1bb902a882a84916613c5758074d3a874da8842300265c7778d3
deleted: sha256:829609b8e40723517f0a1dae505b6b751adea1d8b0faf2cd132c776d5b87ba2a
deleted: sha256:122442cca856d65515514a7cd3df8f6c813532bf05da1a1abd9d8e0ea5728381

Total reclaimed space: 325.7MB
```
- If there are still errors like `exited with code 254` then `Docker` must be restarted.

![](/images/other/docker-multi-docker/MultiContainerKubernetes3.png)

![](/images/other/docker-multi-docker/MultiContainerKubernetes4.png)

- If the error persists `Reset Docker to factory defaults`

![](/images/other/docker-multi-docker/MultiContainerKubernetes5.png)

```bash
Successfully tagged complex_worker:latest
Creating complex_postgres_1 ... done
Creating complex_redis_1    ... done
Creating complex_worker_1   ... done
Creating complex_api_1      ... done
Creating complex_nginx_1    ... done
Creating complex_client_1   ... done
Attaching to complex_redis_1, complex_nginx_1, complex_postgres_1, complex_worker_1, complex_api_1, complex_client_1
redis_1     | 1:C 01 Dec 2018 12:12:14.708 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 01 Dec 2018 12:12:14.708 # Redis version=5.0.2, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 01 Dec 2018 12:12:14.708 # Warning: no config file specified, using
the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 01 Dec 2018 12:12:14.712 * Running mode=standalone, port=6379.
redis_1     | 1:M 01 Dec 2018 12:12:14.712 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 01 Dec 2018 12:12:14.712 # Server initialized
redis_1     | 1:M 01 Dec 2018 12:12:14.713 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues
with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 01 Dec 2018 12:12:14.713 * Ready to accept connections
nginx_1     | 2018/12/01 12:12:14 [emerg] 1#1: host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
nginx_1     | nginx: [emerg] host not found in upstream "client:3000" in /etc/nginx/conf.d/default.conf:2
worker_1    |
worker_1    | > @ dev /app
worker_1    | > nodemon
worker_1    |
worker_1    | [nodemon] 1.18.3
worker_1    | [nodemon] to restart at any time, enter `rs`
worker_1    | [nodemon] watching: *.*
worker_1    | [nodemon] starting `node index.js`
postgres_1  | The files belonging to this database system will be owned by user "postgres".
postgres_1  | This user must also own the server process.
postgres_1  |
api_1       |
api_1       | > @ dev /app
api_1       | > nodemon
api_1       |
postgres_1  | The database cluster will be initialized with locale "en_US.utf8".
postgres_1  | The default database encoding has accordingly been set to "UTF8".
postgres_1  | The default text search configuration will be set to "english".
postgres_1  |
postgres_1  | Data page checksums are disabled.
api_1       | [nodemon] 1.18.3
api_1       | [nodemon] to restart at any time, enter `rs`
postgres_1  |
postgres_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
api_1       | [nodemon] watching: *.*
api_1       | [nodemon] starting `node index.js`
api_1       | Listening
postgres_1  | creating subdirectories ... ok
postgres_1  | selecting default max_connections ... 100
postgres_1  | selecting default shared_buffers ... 128MB
postgres_1  | selecting dynamic shared memory implementation ... posix
postgres_1  | creating configuration files ... ok
postgres_1  | running bootstrap script ... ok
postgres_1  | performing post-bootstrap initialization ... ok
postgres_1  | syncing data to disk ... ok
postgres_1  |
postgres_1  | Success. You can now start the database server using:
postgres_1  |
postgres_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
postgres_1  |
postgres_1  |
postgres_1  | WARNING: enabling "trust" authentication for local connections
postgres_1  | You can change this by editing pg_hba.conf or using the option -A, or
postgres_1  | --auth-local and --auth-host, the next time you run initdb.
postgres_1  | ****************************************************
postgres_1  | WARNING: No password has been set for the database.
postgres_1  |          This will allow anyone with access to the
postgres_1  |          Postgres port to access your database. In
postgres_1  |          Docker's default configuration, this is
postgres_1  |          effectively any other container on the same
postgres_1  |          system.
postgres_1  |
postgres_1  |          Use "-e POSTGRES_PASSWORD=password" to set
postgres_1  |          it in "docker run".
postgres_1  | ****************************************************
postgres_1  | waiting for server to start....2018-12-01 12:12:18.986 UTC [41] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-12-01 12:12:19.040 UTC [42] LOG:  database system was shut down at
2018-12-01 12:12:17 UTC
postgres_1  | 2018-12-01 12:12:19.061 UTC [41] LOG:  database system is ready to accept connections
postgres_1  |  done
postgres_1  | server started
postgres_1  |
postgres_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
postgres_1  |
postgres_1  | 2018-12-01 12:12:19.157 UTC [41] LOG:  received fast shutdown request
postgres_1  | waiting for server to shut down....2018-12-01 12:12:19.170 UTC [41] LOG:  aborting any active transactions
postgres_1  | 2018-12-01 12:12:19.172 UTC [41] LOG:  background worker "logical replication launcher" (PID 48) exited with exit code 1
postgres_1  | 2018-12-01 12:12:19.174 UTC [43] LOG:  shutting down
postgres_1  | 2018-12-01 12:12:19.284 UTC [41] LOG:  database system is shut down
postgres_1  |  done
postgres_1  | server stopped
postgres_1  |
postgres_1  | PostgreSQL init process complete; ready for start up.
postgres_1  |
postgres_1  | 2018-12-01 12:12:19.388 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-12-01 12:12:19.388 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-12-01 12:12:19.396 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-12-01 12:12:19.418 UTC [50] LOG:  database system was shut down at
2018-12-01 12:12:19 UTC
postgres_1  | 2018-12-01 12:12:19.425 UTC [1] LOG:  database system is ready to accept connections
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
client_1    | Starting the development server...
client_1    |
client_1    | Compiled successfully!
client_1    |
client_1    | You can now view client in the browser.
client_1    |
client_1    |   Local:            http://localhost:3000/
client_1    |   On Your Network:  http://172.18.0.6:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
client_1    |
```
- Browse on http://localhost:3050/

![](/images/other/docker-multi-docker/MultiContainerKubernetes6.png)

2. Make a copy of the solution to a new folder called `elastic-beanstalk` inside the own soluction.

![](/images/other/docker-multi-docker/ElasticBeanstalkCopy.png)

![](/images/other/docker-multi-docker/ElasticBeanStalkCopy2.png)

3. Remove the `.travis.yml`, `docker-compose.yml` and `Dockerrun.aws.json` configuration files.

![](/images/other/docker-multi-docker/RemoveConfigurationFiles.png)

![](/images/other/docker-multi-docker/RemoveConfigurationFiles2.png)

4. Remove the `nginx` folder.

![](/images/other/docker-multi-docker/RemoveNginxFolder.png)

![](/images/other/docker-multi-docker/RemoveNginxFolder2.png)

5. Remove the `simplek8s` folder.

![](/images/other/docker-multi-docker/RemoveSimplek8sFolder.png)

![](/images/other/docker-multi-docker/RemoveSimplek8sFolder2.png)

6. Create the new `k8s` folder

![](/images/other/docker-multi-docker/K8sFolder.png)

7. Node Schema

![](/images/other/docker-multi-docker/KubernetesNodeSchema.png)

8. Create the `client-deployment.yaml` configuration file that includes 3 `multi-client` images.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: client-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web
    spec:
      containers: 
        - name: client
          image: peelmicro/multi-client
          ports: 
            - containerPort: 3000
```
9. Create a `ClusterIP Service`for the `multi-client` deployment.
- A `ClusterIP` is used to expose a `set of pods` to `other objects` in the cluster. It only works inside the cluster.
- A `NodePort` is used to expose a `set of pods` to the `outside world`. It's only good for `dev purposes!!!`
- An `Ingress Service` is used to allow traffic `from outside` the Node `to inside` the Node.
> `client-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: client-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: web
  ports: 
    - port: 3000
      targetPort: 3000
```
10. Delete old deployments
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get deployments
Unable to connect to the server: dial tcp 192.168.0.109:8443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube status
minikube: Running
cluster: Running
kubectl: Misconfigured: pointing to stale minikube-vm.
To fix the kubectl context, run minikube update-context
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube update-context
Reconfigured kubeconfig IP, now pointing at 192.168.0.107
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get deployments
Unable to connect to the server: dial tcp 192.168.0.107:8443: connectex: No connection could be made because the target machine actively refused it.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.107
```
```bash
 Shutting Down
    0%
    [                                                                                                                                                                                                          ]

$ minikube stop
Stopping local Kubernetes cluster...
Error stopping machine:  Error stopping host: minikube: exit status 1
```
- Execute `minikube ssh "sudo poweroff"` instead
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube ssh "sudo poweroff"
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube start
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get deployments
NAME                       DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
python-client-deployment   1         1         1            1           5h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl delete deployment python-client-deployment
deployment.extensions "python-client-deployment" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get deployments
No resources found.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME                      TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
kubernetes                ClusterIP   10.96.0.1      <none>        443/TCP          3d
python-client-node-port   NodePort    10.99.122.33   <none>        3050:31515/TCP   5h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl delete service python-client-node-port
service "python-client-node-port" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   3d
```
11. Apply the new `client-cluster-ip-service` ClusterIP and the new `client-deployment` deployment
- We can apply all the `config` files from a directory
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" created
deployment.apps "client-deployment" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   3         3         3            3           50s
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
client-cluster-ip-service   ClusterIP   10.96.200.46   <none>        3000/TCP   1m
kubernetes                  ClusterIP   10.96.0.1      <none>        443/TCP    3d
```
12. Create the `server-deployment` deployment along with the `server-cluster-ip-service` ClusterIP.

![](/images/other/docker-multi-docker/CreateMultiServerDeployment.png)

> `server-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: server-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: server
  template:
    metadata:
      labels:
        component: server
    spec:
      containers: 
        - name: server
          image: peelmicro/multi-server
          ports: 
            - containerPort: 5000
```
> `serve-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: server-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: server
  ports: 
    - port: 5000
      targetPort: 5000
```
- It could be put the two together in a single file like `server-congif.yaml` separated by `---`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: server-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: server
  template:
    metadata:
      labels:
        component: server
    spec:
      containers: 
        - name: server
          image: peelmicro/multi-server
          ports: 
            - containerPort: 5000
---
apiVersion: v1
kind: Service
metadata:
  name: server-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: server
  ports: 
    - port: 5000
      targetPort: 5000
```
13. Create the 'worker-deployment` deployment file.
> `worker-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: worker-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: worker
  template:
    metadata:
      labels:
        component: worker
    spec:
      containers: 
        - name: worker
          image: peelmicro/multi-worker
```
14. Apply the `server` and `worker` config files
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
service "server-cluster-ip-service" created
deployment.apps "server-deployment" created
deployment.apps "worker-deployment" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME                                 READY     STATUS              RESTARTS   AGE
client-deployment-59b84dbbf6-5mnrp   1/1       Running             0          1h
client-deployment-59b84dbbf6-dswvz   1/1       Running             0          1h
client-deployment-59b84dbbf6-j4v7d   1/1       Running             0          1h
server-deployment-6d557d9f77-7zltx   0/1       ContainerCreating   0          37s
server-deployment-6d557d9f77-h8trp   1/1       Running             0          37s
server-deployment-6d557d9f77-v56hs   0/1       ContainerCreating   0          37s
worker-deployment-7c8bc558-nnpgp     0/1       ContainerCreating   0          37s
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   3         3         3            3           1h
server-deployment   3         3         3            3           1m
worker-deployment   1         1         1            1           1m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
client-cluster-ip-service   ClusterIP   10.96.200.46    <none>        3000/TCP   1h
kubernetes                  ClusterIP   10.96.0.1       <none>        443/TCP    3d
server-cluster-ip-service   ClusterIP   10.97.173.225   <none>        5000/TCP   2m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME                                 READY     STATUS    RESTARTS   AGE
client-deployment-59b84dbbf6-5mnrp   1/1       Running   0          1h
client-deployment-59b84dbbf6-dswvz   1/1       Running   0          1h
client-deployment-59b84dbbf6-j4v7d   1/1       Running   0          1h
server-deployment-6d557d9f77-7zltx   1/1       Running   0          2m
server-deployment-6d557d9f77-h8trp   1/1       Running   0          2m
server-deployment-6d557d9f77-v56hs   1/1       Running   0          2m
worker-deployment-7c8bc558-nnpgp     1/1       Running   0          2m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl logs server-deployment-6d557d9f77-7zltx

> @ start /app
> node index.js

Listening
{ Error: connect ECONNREFUSED 127.0.0.1:5432
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1121:14)
  errno: 'ECONNREFUSED',
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 5432 }
```  
- This is normal because we haven't applied the `environment variables` yet
```bash
  Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl logs worker-deployment-7c8bc558-nnpgp

> @ start /app
> node index.js
```
15. Create and apply the `redis` config files.
> `redis-deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: redis-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: redis
  template:
    metadata:
      labels:
        component: redis
    spec:
      containers: 
        - name: redis
          image: redis
          ports: 
            - containerPort: 6379
```
> `redis-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: redis-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: redis
  ports: 
    - port: 6379
      targetPort: 6379
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
service "redis-cluster-ip-service" created
deployment.apps "redis-deployment" created
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" unchanged
deployment.apps "worker-deployment" unchanged
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME                                 READY     STATUS    RESTARTS   AGE
client-deployment-59b84dbbf6-5mnrp   1/1       Running   0          1h
client-deployment-59b84dbbf6-dswvz   1/1       Running   0          1h
client-deployment-59b84dbbf6-j4v7d   1/1       Running   0          1h
redis-deployment-666bf96bdd-rtnd4    1/1       Running   0          44s
server-deployment-6d557d9f77-7zltx   1/1       Running   0          22m
server-deployment-6d557d9f77-h8trp   1/1       Running   0          22m
server-deployment-6d557d9f77-v56hs   1/1       Running   0          22m
worker-deployment-7c8bc558-nnpgp     1/1       Running   0          22m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
client-cluster-ip-service   ClusterIP   10.96.200.46    <none>        3000/TCP   1h
kubernetes                  ClusterIP   10.96.0.1       <none>        443/TCP    3d
redis-cluster-ip-service    ClusterIP   10.105.219.66   <none>        6379/TCP   1m
server-cluster-ip-service   ClusterIP   10.97.173.225   <none>        5000/TCP   23m
```
16. Create and apply the `postgres` config files.
> `postgres-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: postgres-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: postgres
  template:
    metadata:
      labels:
        component: postgres
    spec:
      containers: 
        - name: postgres
          image: postgres
          ports: 
            - containerPort: 5432
```
> `postgres-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: postgres-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: postgres
  ports: 
    - port: 5432
      targetPort: 5432
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
service "postgres-cluster-ip-service" created
deployment.apps "postgres-deployment" created
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" unchanged
deployment.apps "worker-deployment" unchanged
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME                                   READY     STATUS    RESTARTS   AGE
client-deployment-59b84dbbf6-5mnrp     1/1       Running   0          1h
client-deployment-59b84dbbf6-dswvz     1/1       Running   0          1h
client-deployment-59b84dbbf6-j4v7d     1/1       Running   0          1h
postgres-deployment-599f4f6bf7-vr24k   1/1       Running   0          1m
redis-deployment-666bf96bdd-rtnd4      1/1       Running   0          9m
server-deployment-6d557d9f77-7zltx     1/1       Running   0          31m
server-deployment-6d557d9f77-h8trp     1/1       Running   0          31m
server-deployment-6d557d9f77-v56hs     1/1       Running   0          31m
worker-deployment-7c8bc558-nnpgp       1/1       Running   0          31m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get services
NAME                          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
client-cluster-ip-service     ClusterIP   10.96.200.46     <none>        3000/TCP   1h
kubernetes                    ClusterIP   10.96.0.1        <none>        443/TCP    3d
postgres-cluster-ip-service   ClusterIP   10.108.255.118   <none>        5432/TCP   2m
redis-cluster-ip-service      ClusterIP   10.105.219.66    <none>        6379/TCP   10m
server-cluster-ip-service     ClusterIP   10.97.173.225    <none>        5000/TCP   31m
```
17. Create the `Postgres PVC` (Persistent Volume Claim)
- The `pod` container for `postgres` that we're creating has its own `file system`

![](/images/other/docker-multi-docker/PostgresPVC.png)

- When we write data it would be `stored` in that `file system`

![](/images/other/docker-multi-docker/PostgresPVC2.png)

- But if we restart the `conatiner` or create `different instances` of it, the data stored is `lost`.

![](/images/other/docker-multi-docker/PostgresPVC3.png)

- We need to create a `volume` outside the `container` and inside the `host` machine to store the data

![](/images/other/docker-multi-docker/PostgresPVC4.png)

- So, if the `pod` is recreated nothing is lost

![](/images/other/docker-multi-docker/PostgresPVC5.png)

- `Volumes` in `Kubernetes` is a type of `object`

![](/images/other/docker-multi-docker/PostgresPVC6.png)

- So it's different to the `generic` container terminology

![](/images/other/docker-multi-docker/PostgresPVC7.png)

- `Kubernetes Volume` is a data storage package that is `tied` directly to a very specific `pod` container

![](/images/other/docker-multi-docker/PostgresPVC8.png)

- If the original `pod` container is restarted the new `pod` container has access to the `kubernetes volume` and no data is lost.

![](/images/other/docker-multi-docker/PostgresPVC9.png)

- But the `downside` is that, as the `volume` is tied to the `pod`, if the `pod` dies the `volume` dies as well. So, it's `not appropriate` to `store data`.
- A `Persintent Volume` is a long term durable storage that is not tied to any specific `pod` or `container`

![](/images/other/docker-multi-docker/PostgresPVC10.png)

- A `Persistent Volume Claim` is what we need. 

![](/images/other/docker-multi-docker/PostgresPVC11.png)

- If it's available it's `deployed` in that moment, if it is not, the one is `needed` is `provisioned` and then `created on the fly`.

![](/images/other/docker-multi-docker/PostgresPVC12.png)

> `database-persistent-volume-claim.yaml`
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: database-persistent-volume-claim
spec: 
  accessModes: 
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```
- There are 3 types of `Access Modes`

![](/images/other/docker-multi-docker/PostgresPVC13.png)

- Other options that can be applied to PVC

![](/images/other/docker-multi-docker/PostgresPVC14.png)

- We use `kubectl get storageclass` to get to know the different `options` on our computer that kubernetes has to create a `persintent volume`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get storageclass
NAME                 PROVISIONER                AGE
standard (default)   k8s.io/minikube-hostpath   4d
```
```bash
$ kubectl describe storageclass
Name:            standard
IsDefaultClass:  Yes
Annotations:     kubectl.kubernetes.io/last-applied-configuration={"apiVersion":"storage.k8s.io/v1","kind":"StorageClass","metadata":{"annotations":{"storageclass.beta.kubernetes.io/is-default-class":"true"},"labels":{"addonmanager.kubernetes.io/mode":"Reconcile"},"name":"standard","namespace":""},"provisioner":"k8s.io/minikube-hostpath"}
,storageclass.beta.kubernetes.io/is-default-class=true
Provisioner:           k8s.io/minikube-hostpath
Parameters:            <none>
AllowVolumeExpansion:  <unset>
MountOptions:          <none>
ReclaimPolicy:         Delete
VolumeBindingMode:     Immediate
Events:                <none>
```
- On a cloud environment it works differently.

![](/images/other/docker-multi-docker/PostgresPVC15.png)

- On [Kubernetes Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/) you can see some other options available on cloud environments
- Each one of them has a different `provisioner` that we can put on the `config` file. 
- We normally are ok using the `default` options for it.
- The `postgres-deployment.yaml` must be updated to configure the `PVC` defined.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: postgres-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: postgres
  template:
    metadata:
      labels:
        component: postgres
    spec:
      volumes:
        - name: postgres-storage
          persistentVolumeClaim: 
            claimName: database-persistent-volume-claim
      containers: 
        - name: postgres
          image: postgres
          ports: 
            - containerPort: 5432
          volumeMounts: 
            - name: postgres-storage
              mountPath: /var/lib/postgresql/data
              subPath: postgres
```
- Apply the `config` files created and changed.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
persistentvolumeclaim "database-persistent-volume-claim" created
service "postgres-cluster-ip-service" unchanged
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" unchanged
deployment.apps "worker-deployment" unchanged
error: error validating "k8s\\postgres-deployment.yaml": error validating data: ValidationError(Deployment.spec.template.spec.volumes[0]): unknown field "PersistentVolumeClaim" in io.k8s.api.core.v1.Volume; if you
choose to ignore these errors, turn validation off with --validate=false

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
persistentvolumeclaim "database-persistent-volume-claim" unchanged
service "postgres-cluster-ip-service" unchanged
deployment.apps "postgres-deployment" configured
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" unchanged
deployment.apps "worker-deployment" unchanged
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pods
NAME                                  READY     STATUS    RESTARTS   AGE
client-deployment-59b84dbbf6-5mnrp    1/1       Running   0          3h
client-deployment-59b84dbbf6-dswvz    1/1       Running   0          3h
client-deployment-59b84dbbf6-j4v7d    1/1       Running   0          3h
postgres-deployment-fdd46dbc8-8np7v   1/1       Running   0          1m
redis-deployment-666bf96bdd-rtnd4     1/1       Running   0          1h
server-deployment-6d557d9f77-7zltx    1/1       Running   2          2h
server-deployment-6d557d9f77-h8trp    1/1       Running   2          2h
server-deployment-6d557d9f77-v56hs    1/1       Running   2          2h
worker-deployment-7c8bc558-nnpgp      1/1       Running   2          2h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS    CLAIM                                      STORAGECLASS   REASON    AGE
pvc-95d69064-f59d-11e8-aa19-00155dc00118   2Gi        RWO            Delete           Bound     default/database-persistent-volume-claim   standard                 4m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get pvc
NAME                               STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
database-persistent-volume-claim   Bound     pvc-95d69064-f59d-11e8-aa19-00155dc00118   2Gi        RWO            standard       5m
```
18. Adding the `Environment Variables`

![](/images/other/docker-multi-docker/EnvironmentVariables.png)

- They can be divided in `Host`, where we need to tell the containers how to connect, `Constant` and `Sensible`.

![](/images/other/docker-multi-docker/EnvironmentVariables2.png)

- `Host`: We need to put a value of the `ClusterIP` service name where they have to connect to.

![](/images/other/docker-multi-docker/EnvironmentVariables3.png)

- Modify the `worker-deployment.yaml` file to include the `Environment Variables`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: worker-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: worker
  template:
    metadata:
      labels:
        component: worker
    spec:
      containers: 
        - name: worker
          image: peelmicro/multi-worker
        env:
            - name: REDIS_HOST
              value: redis-cluster-ip-service
            - name: REDIS_PORT
              value: 6379
```
- Modify the `server-deployment.yaml` file to include the `Environment Variables`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: server-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: server
  template:
    metadata:
      labels:
        component: server
    spec:
      containers: 
        - name: server
          image: peelmicro/multi-server
          ports: 
            - containerPort: 5000
          env:
            - name: REDIS_HOST
              value: redis-cluster-ip-service
            - name: REDIS_PORT
              value: 6379     
            - name: PGUSER
              value: postgres
            - name: PGHOST
              value: postgres-cluster-ip-service
            - name: PGDATABASE
              value: postgres
            - name: PGPORT
              value: 5432
```
- `Secrets` is a new type of Kubernetes `object`. It is used to `securely store` a piece of information in the cluster, such a databae password.
- We can use a `config` to create a secret or run an `imperative command`. 

![](/images/other/docker-multi-docker/EnvironmentVariables4.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password
secret "pgpassword" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl get secrets
NAME                  TYPE                                  DATA      AGE
default-token-6gfdz   kubernetes.io/service-account-token   3         4d
pgpassword            Opaque                                1         43s
```
- Modify the `server-deployment.yaml` file to include the PGPASSWORD `Environment Variable`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: server-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: server
  template:
    metadata:
      labels:
        component: server
    spec:
      containers: 
        - name: server
          image: peelmicro/multi-server
          ports: 
            - containerPort: 5000
          env:
            - name: REDIS_HOST
              value: redis-cluster-ip-service
            - name: REDIS_PORT
              value: 6379
            - name: PGUSER
              value: postgres
            - name: PGHOST
              value: postgres-cluster-ip-service
            - name: PGDATABASE
              value: postgres
            - name: PGPORT
              value: 5432
            - name: PGPASSWORD
              valueFrom: 
                secretKeyRef:
                  name: pgpassword
                  key: PGPASSWORD
```
- Modify the `postgres-deployment.yaml` config file to let `Postgres` know the password we're using that can `overwrite` the `default one`.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: postgres-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: postgres
  template:
    metadata:
      labels:
        component: postgres
    spec:
      volumes:
        - name: postgres-storage
          persistentVolumeClaim: 
            claimName: database-persistent-volume-claim
      containers: 
        - name: postgres
          image: postgres
          ports: 
            - containerPort: 5432
          volumeMounts: 
            - name: postgres-storage
              mountPath: /var/lib/postgresql/data
              subPath: postgres
          env:
            - name: PGPASSWORD
              valueFrom: 
                secretKeyRef:
                  name: pgpassword
                  key: PGPASSWORD 
```
- Apply all the config files again.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
persistentvolumeclaim "database-persistent-volume-claim" unchanged
service "postgres-cluster-ip-service" unchanged
deployment.apps "postgres-deployment" configured
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
Error from server: error when applying patch:
{"metadata":{"annotations":{"kubectl.kubernetes.io/last-applied-configuration":"{\"apiVersion\":\"apps/v1\",\"kind\":\"Deployment\",\"metadata\":{\"annotations\":{},\"name\":\"server-deployment\",\"namespace\":\"default\"},\"spec\":{\"replicas\":3,\"selector\":{\"matchLabels\":{\"component\":\"server\"}},\"template\":{\"metadata\":{\"labels\":{\"component\":\"server\"}},\"spec\":{\"containers\":[{\"env\":[{\"name\":\"REDIS_HOST\",\"value\":\"redis-cluster-ip-service\"},{\"name\":\"REDIS_PORT\",\"value\":6379},{\"name\":\"PGUSER\",\"value\":\"postgres\"},{\"name\":\"PGHOST\",\"value\":\"postgres-cluster-ip-service\"},{\"name\":\"PGDATABASE\",\"value\":\"postgres\"},{\"name\":\"PGPORT\",\"value\":5432},{\"name\":\"PGPASSWORD\",\"valueFrom\":{\"secretKeyRef\":{\"key\":\"PGPASSWORD\",\"name\":\"pgpassword\"}}}],\"image\":\"peelmicro/multi-server\",\"name\":\"server\",\"ports\":[{\"containerPort\":5000}]}]}}}}\n"}},"spec":{"template":{"spec":{"$setElementOrder/containers":[{"name":"server"}],"containers":[{"env":[{"name":"REDIS_HOST","value":"redis-cluster-ip-service"},{"name":"REDIS_PORT","value":6379},{"name":"PGUSER","value":"postgres"},{"name":"PGHOST","value":"postgres-cluster-ip-service"},{"name":"PGDATABASE","value":"postgres"},{"name":"PGPORT","value":5432},{"name":"PGPASSWORD","valueFrom":{"secretKeyRef":{"key":"PGPASSWORD","name":"pgpassword"}}}],"name":"server"}]}}}}
to:
&{0xc0421c8f00 0xc04215b1f0 default server-deployment k8s\server-deployment.yaml 0xc0420701c0 182449 false}
for: "k8s\\server-deployment.yaml": cannot convert int64 to string
error converting YAML to JSON: yaml: line 17: did not find expected '-' indicator
```
- In order to fix the previous error we need to modify the config files to manage the `Integer` values.
> `worker-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: worker-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: worker
  template:
    metadata:
      labels:
        component: worker
    spec:
      containers: 
        - name: worker
          image: peelmicro/multi-worker
        env:
            - name: REDIS_HOST
              value: redis-cluster-ip-service
            - name: REDIS_PORT
              value: '6379'
```
> `server-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: server-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: server
  template:
    metadata:
      labels:
        component: server
    spec:
      containers: 
        - name: server
          image: peelmicro/multi-server
          ports: 
            - containerPort: 5000
          env:
            - name: REDIS_HOST
              value: redis-cluster-ip-service
            - name: REDIS_PORT
              value: '6379'     
            - name: PGUSER
              value: postgres
            - name: PGHOST
              value: postgres-cluster-ip-service
            - name: PGDATABASE
              value: postgres
            - name: PGPORT
              value: '5432'
            - name: PGPASSWORD
              valueFrom: 
                secretKeyRef:
                  name: pgpassword
                  key: PGPASSWORD
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
persistentvolumeclaim "database-persistent-volume-claim" unchanged
service "postgres-cluster-ip-service" unchanged
deployment.apps "postgres-deployment" unchanged
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" configured
error: error converting YAML to JSON: yaml: line 17: did not find expected '-' indicator
```
- The `worker-deployment.yaml` config files must be changed to put the proper `indentation`. 
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: worker-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: worker
  template:
    metadata:
      labels:
        component: worker
    spec:
      containers: 
        - name: worker
          image: peelmicro/multi-worker
          env:
              - name: REDIS_HOST
                value: redis-cluster-ip-service
              - name: REDIS_PORT
                value: '6379'
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
persistentvolumeclaim "database-persistent-volume-claim" unchanged
service "postgres-cluster-ip-service" unchanged
deployment.apps "postgres-deployment" unchanged
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" unchanged
deployment.apps "worker-deployment" configured
```
19. Adding the `Ingress` service
- We are not going to use the `LoadBalancer` service because it is a `Legacy` way of getting network traffic into a cluster. It is not used anymore because we only give access to just one set of `pods`.

![](/images/other/docker-multi-docker/AddingIngressService.png)

- We are going to use the `Ingress` service that exposes a set of services to the outside world. This service replaces the `LoadBalancer` one.
* We are using [NGINX Ingress Controller for Kubernetes](https://github.com/kubernetes/ingress-nginx), we're not using [NGINX and NGINX Plus Ingress Controllers for Kubernetes](https://github.com/nginxinc/kubernetes-ingress).

![](/images/other/docker-multi-docker/AddingIngressService2.png)

* The `setup` of `ingress-nginx` changes depending on the environment

![](/images/other/docker-multi-docker/AddingIngressService3.png)

* We're making `config`files that contains the `desired` state for the application.

![](/images/other/docker-multi-docker/AddingIngressService4.png)

* A `controller` is any type of object that actually works to make some desired state a reality inside our cluster.
* We need to create a `config` file that describes a set of rules to take incoming traffic and send it off to the appropriate service side of our cluster.

![](/images/other/docker-multi-docker/AddingIngressService5.png)

![](/images/other/docker-multi-docker/AddingIngressService6.png)

![](/images/other/docker-multi-docker/AddingIngressService7.png)

* `Google Cloud` implementation is the easiest to understand

![](/images/other/docker-multi-docker/AddingIngressService8.png)

* It uses the standard [GOOGLE CLOUD LOAD BALANCING](https://cloud.google.com/load-balancing/)
* It uses the `Legacy` `Load Balancer` service.
* We need to set up a `default-backend` pod that it's used for health checks.

* Optional Reading on `Ingress Nginx`:
Just in case we wanted to understand ingress-nginx a bit better, we can check out this article by Hongli Lai - [Studying the Kubernetes Ingress system](https://www.joyfulbikeshedding.com/blog/2018-03-26-studying-the-kubernetes-ingress-system.html).  Hongli is an absolute genius, he co-created Phusion Passenger, an extremely popular webserver that integrates with Nginx.
* The `kubectl apply -f  https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml` command must be executed when using `Ingress Controller`
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ingress-nginx

---
kind: ConfigMap
apiVersion: v1
metadata:
  name: nginx-configuration
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
      app.kubernetes.io/part-of: ingress-nginx
  template:
    metadata:
      labels:
        app.kubernetes.io/name: ingress-nginx
        app.kubernetes.io/part-of: ingress-nginx
      annotations:
        prometheus.io/port: "10254"
        prometheus.io/scrape: "true"
    spec:
      serviceAccountName: nginx-ingress-serviceaccount
      containers:
        - name: nginx-ingress-controller
          image: quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.21.0
          args:
            - /nginx-ingress-controller
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
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
namespace "ingress-nginx" created
configmap "nginx-configuration" created
serviceaccount "nginx-ingress-serviceaccount" created
clusterrole.rbac.authorization.k8s.io "nginx-ingress-clusterrole" created
role.rbac.authorization.k8s.io "nginx-ingress-role" created
rolebinding.rbac.authorization.k8s.io "nginx-ingress-role-nisa-binding" created
clusterrolebinding.rbac.authorization.k8s.io "nginx-ingress-clusterrole-nisa-binding" created
deployment.extensions "nginx-ingress-controller" created
```
- For standard usage we need to execute `minikube addons enable ingress`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube addons enable ingress
ingress was successfully enabled
```
- For `Google Cloud` the `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml` command must be executed
```yaml
kind: Service
apiVersion: v1
metadata:
  name: ingress-nginx
  namespace: ingress-nginx
  labels:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
spec:
  externalTrafficPolicy: Local
  type: LoadBalancer
  selector:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https
---
```
- We need to create the `ingress-service.yaml` config file.

![](/images/other/docker-multi-docker/AddingIngressService9.png)

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-service
  annotations: 
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/rewrite-target: /
spec: 
  rules:
    - http:
        paths:
          - path: /
            backend: 
              serviceName: client-cluster-ip-service
              servicePort: 3000
          - path: /api/
            backend: 
              serviceName: server-cluster-ip-service
              servicePort: 5000
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ kubectl apply -f k8s
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" unchanged
persistentvolumeclaim "database-persistent-volume-claim" unchanged
ingress.extensions "ingress-service" created
service "postgres-cluster-ip-service" unchanged
deployment.apps "postgres-deployment" unchanged
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" unchanged
deployment.apps "worker-deployment" unchanged
```
20. Run `minikube` locally to see if everything is working
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube ip
192.168.0.107
```
- Browse to https://192.168.0.107/

![](/images/other/docker-multi-docker/RunMinikube.png)

- Click on `ADVANCED`

![](/images/other/docker-multi-docker/RunMinikube2.png)

- Click on `Proceed to 192.168.0.107 (unsafe)`

![](/images/other/docker-multi-docker/RunMinikube3.png)

![](/images/other/docker-multi-docker/RunMinikube4.png)

- The error is because of the invalid certificate.

![](/images/other/docker-multi-docker/RunMinikube5.png)

![](/images/other/docker-multi-docker/RunMinikube6.png)

21. Have a look at the `Minikube Dashboard'
- Execute the `minikube dashboard` command
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube dashboard
Opening http://127.0.0.1:52302/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/ in your default browser...
```
- It opens the `dashboard` automatically

![](/images/other/docker-multi-docker/MinukubeDasboard.png)

22. `Commit` and `Push` the changes to Github Repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)$ git add .warning: LF will be replaced by CRLF in elastic-beanstalk/.gitignore.The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/.gitignore.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/README.md.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/public/index.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/public/manifest.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/App.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/App.test.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/Fib.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/OtherPage.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/index.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/logo.svg.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/src/serviceWorker.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/client/yarn.lock.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/keys.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/worker/index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/worker/keys.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/worker/package.json.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   elastic-beanstalk/.gitignore
        renamed:    .travis.yml -> elastic-beanstalk/.travis.yml
        renamed:    Dockerrun.aws.json -> elastic-beanstalk/Dockerrun.aws.json
        new file:   elastic-beanstalk/README.md
        new file:   elastic-beanstalk/client/.gitignore
        new file:   elastic-beanstalk/client/Dockerfile
        new file:   elastic-beanstalk/client/Dockerfile.dev
        new file:   elastic-beanstalk/client/README.md
        new file:   elastic-beanstalk/client/nginx/default.conf
        new file:   elastic-beanstalk/client/package.json
        new file:   elastic-beanstalk/client/public/favicon.ico
        new file:   elastic-beanstalk/client/public/index.html
        new file:   elastic-beanstalk/client/public/manifest.json
        new file:   elastic-beanstalk/client/src/App.css
        new file:   elastic-beanstalk/client/src/App.js
        new file:   elastic-beanstalk/client/src/App.test.js
        new file:   elastic-beanstalk/client/src/Fib.js
        new file:   elastic-beanstalk/client/src/OtherPage.js
        new file:   elastic-beanstalk/client/src/index.css
        new file:   elastic-beanstalk/client/src/index.js
        new file:   elastic-beanstalk/client/src/logo.svg
        new file:   elastic-beanstalk/client/src/serviceWorker.js
        new file:   elastic-beanstalk/client/yarn.lock
        renamed:    docker-compose.yml -> elastic-beanstalk/docker-compose.yml
        renamed:    nginx/Dockerfile -> elastic-beanstalk/nginx/Dockerfile
        renamed:    nginx/Dockerfile.dev -> elastic-beanstalk/nginx/Dockerfile.dev
        renamed:    nginx/default.conf -> elastic-beanstalk/nginx/default.conf
        new file:   elastic-beanstalk/server/Dockerfile
        new file:   elastic-beanstalk/server/Dockerfile.dev
        new file:   elastic-beanstalk/server/index.js
        new file:   elastic-beanstalk/server/keys.js
        new file:   elastic-beanstalk/server/package.json
        renamed:    simplek8s/client-deployment.yaml -> elastic-beanstalk/simplek8s/client-deployment.yaml
        renamed:    simplek8s/client-node-port.yaml -> elastic-beanstalk/simplek8s/client-node-port.yaml
        renamed:    simplek8s/client-pod.yaml -> elastic-beanstalk/simplek8s/client-pod.yaml
        new file:   elastic-beanstalk/worker/Dockerfile
        new file:   elastic-beanstalk/worker/Dockerfile.dev
        new file:   elastic-beanstalk/worker/index.js
        new file:   elastic-beanstalk/worker/keys.js
        new file:   elastic-beanstalk/worker/package.json
        new file:   k8s/client-cluster-ip-service.yaml
        new file:   k8s/client-deployment.yaml
        new file:   k8s/database-persistent-volume-claim.yaml
        new file:   k8s/ingress-service.yaml
        new file:   k8s/postgres-cluster-ip-service.yaml
        new file:   k8s/postgres-deployment.yaml
        new file:   k8s/redis-cluster-ip-service.yaml
        new file:   k8s/redis-deployment.yaml
        new file:   k8s/server-cluster-ip-service.yaml
        new file:   k8s/server-deployment.yaml
        new file:   k8s/worker-deployment.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "A Multi-Container App with Kubernetes"
[master 2124cea] A Multi-Container App with Kubernetes
 51 files changed, 9398 insertions(+)
 create mode 100644 elastic-beanstalk/.gitignore
 rename .travis.yml => elastic-beanstalk/.travis.yml (100%)
 rename Dockerrun.aws.json => elastic-beanstalk/Dockerrun.aws.json (100%)
 create mode 100644 elastic-beanstalk/README.md
 create mode 100644 elastic-beanstalk/client/.gitignore
 create mode 100644 elastic-beanstalk/client/Dockerfile
 create mode 100644 elastic-beanstalk/client/Dockerfile.dev
 create mode 100644 elastic-beanstalk/client/README.md
 create mode 100644 elastic-beanstalk/client/nginx/default.conf
 create mode 100644 elastic-beanstalk/client/package.json
 create mode 100644 elastic-beanstalk/client/public/favicon.ico
 create mode 100644 elastic-beanstalk/client/public/index.html
 create mode 100644 elastic-beanstalk/client/public/manifest.json
 create mode 100644 elastic-beanstalk/client/src/App.css
 create mode 100644 elastic-beanstalk/client/src/App.js
 create mode 100644 elastic-beanstalk/client/src/App.test.js
 create mode 100644 elastic-beanstalk/client/src/Fib.js
 create mode 100644 elastic-beanstalk/client/src/OtherPage.js
 create mode 100644 elastic-beanstalk/client/src/index.css
 create mode 100644 elastic-beanstalk/client/src/index.js
 create mode 100644 elastic-beanstalk/client/src/logo.svg
 create mode 100644 elastic-beanstalk/client/src/serviceWorker.js
 create mode 100644 elastic-beanstalk/client/yarn.lock
 rename docker-compose.yml => elastic-beanstalk/docker-compose.yml (100%)
 rename {nginx => elastic-beanstalk/nginx}/Dockerfile (100%)
 rename {nginx => elastic-beanstalk/nginx}/Dockerfile.dev (100%)
 rename {nginx => elastic-beanstalk/nginx}/default.conf (100%)
 create mode 100644 elastic-beanstalk/server/Dockerfile
 create mode 100644 elastic-beanstalk/server/Dockerfile.dev
 create mode 100644 elastic-beanstalk/server/index.js
 create mode 100644 elastic-beanstalk/server/keys.js
 create mode 100644 elastic-beanstalk/server/package.json
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-deployment.yaml (100%)
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-node-port.yaml (100%)
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-pod.yaml (100%)
 create mode 100644 elastic-beanstalk/worker/Dockerfile
 create mode 100644 elastic-beanstalk/worker/Dockerfile.dev
 create mode 100644 elastic-beanstalk/worker/index.js
 create mode 100644 elastic-beanstalk/worker/keys.js
 create mode 100644 elastic-beanstalk/worker/package.json
 create mode 100644 k8s/client-cluster-ip-service.yaml
 create mode 100644 k8s/client-deployment.yaml
 create mode 100644 k8s/database-persistent-volume-claim.yaml
 create mode 100644 k8s/ingress-service.yaml
 create mode 100644 k8s/postgres-cluster-ip-service.yaml
 create mode 100644 k8s/postgres-deployment.yaml
 create mode 100644 k8s/redis-cluster-ip-service.yaml
 create mode 100644 k8s/redis-deployment.yaml
 create mode 100644 k8s/server-cluster-ip-service.yaml
 create mode 100644 k8s/server-deployment.yaml
 create mode 100644 k8s/worker-deployment.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin HEAD
Counting objects: 14, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (14/14), 2.39 KiB | 129.00 KiB/s, done.
Total 14 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), done.
To https://github.com/peelmicro/multi-docker.git
   6fdf00d..2124cea  HEAD -> master
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 15, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (15/15), 2.95 KiB | 81.00 KiB/s, done.
Total 15 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), completed with 1 local object.
To https://github.com/peelmicro/java-multi-docker.git
   a6b03c6..02e2138  HEAD -> master
```
### Kubernetes Production Deployment
1. Steps to deploy the solution to Production

![](/images/other/docker-multi-docker/ProdDeployment.png)

- We need to go to [Google Cloud Platform Pricing Calculator](https://cloud.google.com/products/calculator/) to have an idea of the cost

![](/images/other/docker-multi-docker/GoogleCost.png)

- Click on `KUBERNETES ENGINE`
- Number of Nodes: 3

![](/images/other/docker-multi-docker/GoogleCost2.png)

- Click on `ADD TO ESTIMATE`

- Persistent disk storage: 2 GB

![](/images/other/docker-multi-docker/GoogleCost3.png)

- Click on `ADD TO ESTIMATE`
- Number of Forwarding Rules: 1
- Number of Traffic Processed: 1 GB

![](/images/other/docker-multi-docker/GoogleCost4.png)

![](/images/other/docker-multi-docker/GoogleCost5.png)

2. Why Google Cloud against AWS for Kubernetes

![](/images/other/docker-multi-docker/WhyCoogleCloud.png)

3. Apply for Google Cloud Platform for free
- Browse to [Try Cloud Platform for free](https://console.cloud.google.com/freetrial/signup/0?pli=1)

![](/images/other/docker-multi-docker/TryCloudPlatform.png)

- Click on `AGREEE AND CONTINUE`

![](/images/other/docker-multi-docker/TryCloudPlatform2.png)

- Click on `START MY FREE TRIAL`

![](/images/other/docker-multi-docker/TryCloudPlatform3.png)

4. Create a Google Project

- Browse to [Google Cloud Plaform](https://console.cloud.google.com)

![](/images/other/docker-multi-docker/NewGoogleProject.png)

- If we have already created a project with Google we need to click on that project.

![](/images/other/docker-multi-docker/NewGoogleProject2.png)

- Click on `NEW PROJECT`

![](/images/other/docker-multi-docker/NewGoogleProject3.png)

- Click on `CREATE`

![](/images/other/docker-multi-docker/NewGoogleProject4.png)

- Click on `SEE ALL ACTIVITIES`

![](/images/other/docker-multi-docker/NewGoogleProject5.png)

- Click on the current selected project

![](/images/other/docker-multi-docker/NewGoogleProject6.png)

- Select the `multi-k8s` project

![](/images/other/docker-multi-docker/NewGoogleProject7.png)

- Click on `Billing`

![](/images/other/docker-multi-docker/NewGoogleProject8.png)

- Ensure the Billing account is assigned
5. Set up the Kubernetes Engine

![](/images/other/docker-multi-docker/SetUpKubernetesEngine.png)

![](/images/other/docker-multi-docker/SetUpKubernetesEngine2.png)

- We have to wait until the initial setup is ready. We maybe need to refresh the page if the spinner doesn't disappear.

![](/images/other/docker-multi-docker/SetUpKubernetesEngine3.png)

- Click on `Create cluster`
- Name: multi-cluster
- Number of nodes: 3 (the default is fine)
- Machine: 1 vCPU - 3.75 GB memory (this will be fine, with less it could work as well)

![](/images/other/docker-multi-docker/SetUpKubernetesEngine4.png)

- Click on `Create`
* `From now on it will cost money`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine5.png)

![](/images/other/docker-multi-docker/SetUpKubernetesEngine6.png)

- Click on the `multi-cluster` link

![](/images/other/docker-multi-docker/SetUpKubernetesEngine7.png)

- Scroll down

![](/images/other/docker-multi-docker/SetUpKubernetesEngine8.png)

- Click on `Clusters`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine9.png)

- Click on `Workloads`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine10.png)

- Click on `Services`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine11.png)

- Click on `Applications`

- It is related to plugins or other apps. We won't use it.

![](/images/other/docker-multi-docker/SetUpKubernetesEngine12.png)

- Click on `Configuration`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine13.png)

- Click on `Storage`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine14.png)

- Click on `Storage classes`

![](/images/other/docker-multi-docker/SetUpKubernetesEngine15.png)

It shows that it's using [Google Cloud Persistent Disk](https://cloud.google.com/persistent-disk/)

![](/images/other/docker-multi-docker/SetUpKubernetesEngine16.png)

6. Create the Google Service Account

![](/images/other/docker-multi-docker/GoogleServiceAccount.png)

- Browse to [Google Cloud Plaform](https://console.cloud.google.com)

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount.png)

- Click on `IAM & admin`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount2.png)

- Click on `Service accounts`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount3.png)

- Click on `CREATE SERVICE ACCOUNT`

Service account name: `travis-deployer`
Service account ID: `travis-deployer` for @multi-k8s-224518.iam.gserviceaccount.comService account ID
Service account description: `Account used by Travis CI to deploy the app`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount4.png)

- Click on `CREATE`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount5.png)

- Select `Kubernetes Engine Admin`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount6.png)

- Click on `CONTINUE`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount7.png)

- Click on `+CREATE KEY`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount8.png)

- Select `(*)JSON` and click on `CREATE`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount9.png)

- Click on `CLOSE`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount10.png)

- The Key has been dowloaded to the local computer

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount11.png)

- Click on `DONE`

![](/images/other/docker-multi-docker/CreateGoogleServiceAccount12.png)

7. Download and install `Travis CI CLI`

![](/images/other/docker-multi-docker/TravisCICli.png)

- On Windows `Ruby` is not installed and it's also not easy to install

![](/images/other/docker-multi-docker/TravisCICli2.png)

![](/images/other/docker-multi-docker/TravisCICli3.png)

- Install Ruby on the /app folder on the application using the `docker run -it -v ${pwd}:/app ruby:2.3 sh` command
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker run -it -v ${pwd}:/app ruby:2.3 sh
Unable to find image 'ruby:2.3' locally
2.3: Pulling from library/ruby
54f7e8ac135a: Downloading [======================================>            ]  34.88MB/45.32MB
d6341e30912f: Download complete
087a57faf949: Download complete
5d71636fb824: Downloading [========================>                          ]  24.37MB/50.06MB
0c1db9598990: Downloading [=========>                                         ]  39.76MB/213.2MB
a054b67f1226: Waiting
03b77d781ee0: Waiting
662ffcc38466: Waiting
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ docker run -it -v ${pwd}:/app ruby:2.3 sh
Unable to find image 'ruby:2.3' locally
2.3: Pulling from library/ruby
54f7e8ac135a: Pull complete
d6341e30912f: Pull complete
087a57faf949: Pull complete
5d71636fb824: Pull complete
0c1db9598990: Pull complete
a054b67f1226: Pull complete
03b77d781ee0: Pull complete
662ffcc38466: Pull complete
Digest: sha256:0ff11ba98f96d8f5667aa7e2de24c3877c750c6c943811c4b73c5022c2dab33d
Status: Downloaded newer image for ruby:2.3
#
```
```bash
Status: Downloaded newer image for ruby:2.3
# ls
:  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# cd app
sh: 2: cd: can't cd to app
# cd
# ls
# pwd
/root
# ls
# cd app
sh: 7: cd: can't cd to app
#
```
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex>docker run -it -v ${pwd}:/app ruby:2.3 sh
docker: Error response from daemon: create ${pwd}: "${pwd}" includes invalid characters for a local volume name, only "[a-zA-Z0-9][a-zA-Z0-9_.-]" are allowed. If you intended to pass a host directory, use absolute path.
See 'docker run --help'.
```
- **It only works with PowerShell!!!**
```bash
PS C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex> docker run -it -v ${pwd}:/app ruby:2.3 sh
# ls
app  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# cd app
# ls
README.md  client  elastic-beanstalk  k8s  multi-k8s-224518-4310841fc6ab.json  server  worker
```
- Install `Travis CI CL` inside the container with the `gem install travis --no-rdoc --no-ri` command. `--no-rdoc --no-ri` is used to avoid installing any documentation.
```bash
# gem install travis --no-rdoc --no-ri
Fetching: multipart-post-2.0.0.gem (100%)
Successfully installed multipart-post-2.0.0
Fetching: faraday-0.15.4.gem (100%)
Successfully installed faraday-0.15.4
Fetching: faraday_middleware-0.12.2.gem (100%)
Successfully installed faraday_middleware-0.12.2
Fetching: highline-1.7.10.gem (100%)
Successfully installed highline-1.7.10
Fetching: backports-3.11.4.gem (100%)
Successfully installed backports-3.11.4
Fetching: multi_json-1.13.1.gem (100%)
Successfully installed multi_json-1.13.1
Fetching: addressable-2.4.0.gem (100%)
Successfully installed addressable-2.4.0
Fetching: net-http-persistent-2.9.4.gem (100%)
Successfully installed net-http-persistent-2.9.4
Fetching: net-http-pipeline-1.0.1.gem (100%)
Successfully installed net-http-pipeline-1.0.1
Fetching: gh-0.15.1.gem (100%)
Successfully installed gh-0.15.1
Fetching: launchy-2.4.3.gem (100%)
Successfully installed launchy-2.4.3
Fetching: ffi-1.9.25.gem (100%)
Building native extensions. This could take a while...
Successfully installed ffi-1.9.25
Fetching: ethon-0.11.0.gem (100%)
Successfully installed ethon-0.11.0
Fetching: typhoeus-0.8.0.gem (100%)
Successfully installed typhoeus-0.8.0
Fetching: websocket-1.2.8.gem (100%)
Successfully installed websocket-1.2.8
Fetching: pusher-client-0.6.2.gem (100%)
Successfully installed pusher-client-0.6.2
Fetching: travis-1.8.9.gem (100%)
Successfully installed travis-1.8.9
17 gems installed
```
```bash
# travis
Shell completion not installed. Would you like to install it now? |y| n
Usage: travis COMMAND ...

Available commands:

        accounts       displays accounts and their subscription status
        branches       displays the most recent build for each branch
        cache          lists or deletes repository caches
        cancel         cancels a job or build
        console        interactive shell
        disable        disables a project
        enable         enables a project
        encrypt        encrypts values for the .travis.yml
        encrypt-file   encrypts a file and adds decryption steps to .travis.yml
        endpoint       displays or changes the API endpoint
        env            show or modify build environment variables
        help           helps you out when in dire need of information
        history        displays a projects build history
        init           generates a .travis.yml and enables the project
        lint           display warnings for a .travis.yml
        login          authenticates against the API and stores the token
        logout         deletes the stored API token
        logs           streams test logs
        monitor        live monitor for what's going on
        open           opens a build or job in the browser
        pubkey         prints out a repository's public key
        raw            makes an (authenticated) API call and prints out the result
        report         generates a report useful for filing issues
        repos          lists repositories the user has certain permissions on
        requests       lists recent requests
        restart        restarts a build or job
        settings       access repository settings
        setup          sets up an addon or deploy target
        show           displays a build or job
        sshkey         checks, updates or deletes an SSH key
        status         checks status of the latest build
        sync           triggers a new sync with GitHub
        token          outputs the secret API token
        version        outputs the client version
        whatsup        lists most recent builds
        whoami         outputs the current user

run `/usr/local/bundle/bin/travis help COMMAND` for more infos
```
```bash
# travis login
We need your GitHub login to identify you.
This information will not be sent to Travis CI, only to api.github.com.
The password will not be displayed.

Try running with --github-token or --auto if you don't want to enter your password anyway.

Username: peelmicro
Password for peelmicro: *********************
Successfully logged in as peelmicro!
```

![](/images/other/docker-multi-docker/TravisCICli4.png)

- Copy the `multi-k8s-224518-4310841fc6ab.json` json file generated by Google into the `complex` directory.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ ls
client  elastic-beanstalk  k8s  multi-k8s-224518-4310841fc6ab.json  README.md  server  worker
```
```bash
# ls
README.md  client  elastic-beanstalk  k8s  multi-k8s-224518-4310841fc6ab.json  server  worker
```
- Rename the file to `service-account.json`
```bash
# ls
README.md  client  elastic-beanstalk  k8s  server  service-account.json  worker
```
```bash
# travis encrypt-file service-account.json -r peelmicro/multi-docker
encrypting service-account.json for peelmicro/multi-docker
storing result as service-account.json.enc
storing secure env variables for decryption

Please add the following to your build script (before_install stage in your .travis.yml, for instance):

    openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d

Pro Tip: You can add it automatically by running with --add.

Make sure to add service-account.json.enc to the git repository.
Make sure not to add service-account.json to the git repository.
Commit all changes to your .travis.yml.
```
- Copy the line above inside the `.travis.yml` file
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
before_install:
  - openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d
  - curl https://sdk.cloud.google.com | bash > /dev/null;
  - source $HOME/google-cloud-sdk/path.bash.inc
  - gcloud componets update kubectl
  - gcloud auth activate-service-account --key-file service-account.json
```
- Check if we have the `service-account.json.enc` file created.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ ls
client  elastic-beanstalk  k8s  README.md  server  service-account.json  service-account.json.enc  worker
```
- Add the service-account.json file to `.gitignore`
```git
/client/node_modules
/server/node_modules
/worker/node_modules
/README.md
/service-account.json
```

![](/images/other/docker-multi-docker/TravisCICli5.png)

```bash
# exit
PS C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\complex>
```
8. Add `Travis CI` deployment scripts.

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts.png)

- Obtain the `Project ID` of the Google project
- Browse to [Google Cloud Platform](https://console.cloud.google.com/home/dashboard)

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts2.png)

Project ID: `multi-k8s-224518`
- Obtain the Kubernatis Cluster `Name` and  `Location`

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts3.png)

- Go to `Kubernatis Engine -> Clusters`

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts4.png)

Name: `multi-cluster`  
Location: `us-central1-a`

- We have to ensure we deploy the `latest` images

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts5.png)

- Locally we were putting the version of the image.

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts6.png)

- Here we're adding the `GIT_SHA` unique value to avoid having to put the version manually (the SHA value that GIT assigns to the commit).
```bash
$ git rev-parse HEAD
2124cea105a313aa938b802e657692a6c28f6db7
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git log
commit 2124cea105a313aa938b802e657692a6c28f6db7 (HEAD -> master, origin/master)
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Mon Dec 3 05:09:10 2018 +0000

    A Multi-Container App with Kubernetes

commit 6fdf00d202566185651965574c92e2616b529ab4
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Sat Dec 1 06:45:36 2018 +0000

    Maintaining Sets of Containers with Deployments

commit 9ea7131a87d6550b97cce77a8a40bf761c5473a8
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Thu Nov 29 18:16:56 2018 +0000

    Onwards to Kubernetes!

:...skipping...
commit 2124cea105a313aa938b802e657692a6c28f6db7 (HEAD -> master, origin/master)
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Mon Dec 3 05:09:10 2018 +0000

    A Multi-Container App with Kubernetes

commit 6fdf00d202566185651965574c92e2616b529ab4
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Sat Dec 1 06:45:36 2018 +0000

    Maintaining Sets of Containers with Deployments

commit 9ea7131a87d6550b97cce77a8a40bf761c5473a8
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Thu Nov 29 18:16:56 2018 +0000

    Onwards to Kubernetes!

commit 7b25a4a6d486b30570fa52efa88b58eb75438b7f
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Thu Nov 29 18:16:11 2018 +0000

    Onwards to Kubernetes!

commit cccdccab51062b2833d53d5bf948ebc6a2810423
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Fri Nov 9 10:15:57 2018 +0000

    Updated App.js

commit 6a70bbd1257e9e742d7de88e07900a5043ffc0c9
Author: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Date:   Fri Nov 9 08:30:42 2018 +0000

    added memory to the AWS Dockerrun.aws.json file
:
```

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts7.png)

- It also helps when we have any issue with a deployment

![](/images/other/docker-multi-docker/TravisCIDeploymentScripts8.png)

- We need to generate the latest as well to avoid having to put the `sha` value when we download the implicit image.
- Add a new `deploy.sh` file
```bash
# Create the Docker Images
docker build -t peelmicro/multi-client:lastest peelmicro/multi-client:$SHA ./client
docker build -t peelmicro/multi-server:lastest peelmicro/multi-server:$SHA ./server
docker build -t peelmicro/multi-worker:lastest peelmicro/multi-worker:$SHA ./worker
# Take those images and push them to docker hub
docker push peelmicro/multi-client:latest
docker push peelmicro/multi-client:$SHA
docker push peelmicro/multi-server:latest
docker push peelmicro/multi-server:$SHA
docker push peelmicro/multi-worker:latest
docker push peelmicro/multi-worker:$SHA
# Apply all configs in the 'k8s' folder
kubectl apply -f k8s
# Imperatively set lastest images on each deployment
kubectl set image deployments/client-deployment client=peelmicro/multi-client:$SHA
kubectl set image deployments/server-deployment server=peelmicro/multi-server:$SHA
kubectl set image deployments/worker-deployment worker=peelmicro/multi-worker:$SHA
```
- Add a new `.travis.yml` file
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
* env: 
  global:
    # Get an unique value of the latest commit to be used to identify the images
    - SHA=$(git rev-parse HEAD)
    # Tell Google Cloud CLI not to display any prompts
    - CLOUDSKD_CORE_DISABLE_PROMPTS=1
before_install:
  # Decrypt the encrypted Google Cloud Keys and copy locally
  - openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d
  # Install the Google Cloud SDK CLI
  - curl https://sdk.cloud.google.com | bash > /dev/null;
  # Apply additional configuration inside Travis CI instance
  - source $HOME/google-cloud-sdk/path.bash.inc
  # Install kubectl
  - gcloud components update kubectl
  # Authentication with Google Cloud using the decrypted json key file
  - gcloud auth activate-service-account --key-file service-account.json
  # Select the Google Cloud project that we're going to use
  - gcloud config set project multi-k8s-224518
  # Select the zone where the Kubernetes Cluster is installed
  - gcloud config set compute/zone us-central1-a
  # Select the Google Kubernetes Cluster
  - gcloud container clusters get-credentials multi-cluster
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Build the 'test' version of multi-client
  - docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client
script:
  # Run the current test
  - docker run peelmicro/test-client npm run test -- --coverage
# Exceute an external script to do the deployment to Google Cloud
deploy:
    provider: script
    script: bash ./deploy.sh
  on:
    branch: master
```
9. Configure Google Cloud CLI on Cloud Console

- Browse to [Google Cloud Platform](https://console.cloud.google.com/home/dashboard)

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI.png)

- Click on `Activate Cloud Shell`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI2.png)

- Click on `START CLOUD SHELL`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI3.png)

- The following commands must be executed the first time with each project.
```bash
Welcome to Cloud Shell! Type "help" to get started.
Your Cloud Platform project in this session is set to multi-k8s-224518.
Use “gcloud config set project [PROJECT_ID]” to change to a different project.
peelmicro@cloudshell:~ (multi-k8s-224518)$ gcloud config set project multi-k8s-224518
Updated property [core/project].
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ gcloud config set compute/zone us-central1-a
Updated property [compute/zone].
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ gcloud container clusters get-credentials multi-cluster
Fetching cluster endpoint and auth data.
kubeconfig entry generated for multi-cluster.
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl get pods
No resources found.
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password
secret "pgpassword" created
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl get secrets
NAME                  TYPE                                  DATA      AGE
default-token-vrc79   kubernetes.io/service-account-token   3         1d
pgpassword            Opaque                                1         34s
```

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI4.png)

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI5.png)

10. Using Helm

- If we go to [NGINX Ingress Controller Deployment](https://kubernetes.github.io/ingress-nginx/deploy/) there is a way to deploy called `Helm`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI6.png)

- Click on `Using Helm`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI7.png)

Using Helm¶
NGINX Ingress controller can be installed via Helm using the chart stable/nginx-ingress from the official charts repository. To install the chart with the release name my-nginx:
```bash
helm install stable/nginx-ingress --name my-nginx
```
If the kubernetes cluster has RBAC enabled, then run:
```bash
helm install stable/nginx-ingress --name my-nginx --set rbac.create=true
```
Detect installed version:
```bash
POD_NAME=$(kubectl get pods -l app.kubernetes.io/name=ingress-nginx -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /nginx-ingress-controller --version
```

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI8.png)

- Browse to [Helm - The package manager for Kubernetes](https://helm.sh/)

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI9.png)

- Browse to [Helm - Quickstart Guide](https://docs.helm.sh/using_helm/#quickstart-guide)

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI10.png)

- Install `FROM SCRIPT`
FROM SCRIPT
Helm now has an installer script that will automatically grab the latest version of the Helm client and install it locally.

You can fetch that script, and then execute it locally. It’s well documented so that you can read through it and understand what it is doing before you run it.
```bash
$ curl https://raw.githubusercontent.com/helm/helm/master/scripts/get > get_helm.sh
$ chmod 700 get_helm.sh
$ ./get_helm.sh
```
Yes, you can curl https://raw.githubusercontent.com/helm/helm/master/scripts/get | bash that if you want to live on the edge.

- Execute these 3 lines on `Google Cloud Terminal`
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ curl https://raw.githubusercontent.com/helm/helm/master/scripts/get > get_helm.sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  7236  100  7236    0     0  38970      0 --:--:-- --:--:-- --:--:-- 39113
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ chmod 700 get_helm.sh
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ ./get_helm.sh
Downloading https://kubernetes-helm.storage.googleapis.com/helm-v2.11.0-linux-amd64.tar.gz
Preparing to install helm and tiller into /usr/local/bin
helm installed into /usr/local/bin/helm
tiller installed into /usr/local/bin/tiller
Run 'helm init' to configure helm.
```
- We don't have to run `heml init` yet because `Tiller` must be configured first.
`GKE`
Google’s GKE hosted Kubernetes platform enables RBAC by default. You will need to create a service account for tiller, and use the –service-account flag when initializing the helm server.

See Tiller and role-based access control for more information.

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI11.png)

- There are different kind of roles.

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI12.png)

- Create a `Service account` on `Google Cloud Terminal` for Tiller and a `Cluster Role Binding` for the same purpose.

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI13.png)
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl create serviceaccount --namespace kube-system tiller
serviceaccount "tiller" created
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
clusterrolebinding.rbac.authorization.k8s.io "tiller-cluster-rule" created
```
- Initialize `Helm`
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ helm init --service-account tiller --upgrade
Creating /home/peelmicro/.helm
Creating /home/peelmicro/.helm/repository
Creating /home/peelmicro/.helm/repository/cache
Creating /home/peelmicro/.helm/repository/local
Creating /home/peelmicro/.helm/plugins
Creating /home/peelmicro/.helm/starters
Creating /home/peelmicro/.helm/cache/archive
Creating /home/peelmicro/.helm/repository/repositories.yaml
Adding stable repo with URL: https://kubernetes-charts.storage.googleapis.com
Adding local repo with URL: http://127.0.0.1:8879/charts
$HELM_HOME has been configured at /home/peelmicro/.helm.
Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.
Please note: by default, Tiller is deployed with an insecure 'allow unauthenticated users' policy.
To prevent this, run `helm init` with the --tiller-tls-verify flag.
For more information on securing your installation see: https://docs.helm.sh/using_helm/#securing-your-helm-installation
Happy Helming!
```
- Install NGINX Ingress using the command suggested on the `Instalation Guide`
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ helm install stable/nginx-ingress --name my-nginx --set rbac.create=true
NAME:   my-nginx
LAST DEPLOYED: Thu Dec  6 17:48:51 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Service
NAME                                    AGE
my-nginx-nginx-ingress-controller       0s
my-nginx-nginx-ingress-default-backend  0s
==> v1beta1/Deployment
my-nginx-nginx-ingress-controller       0s
my-nginx-nginx-ingress-default-backend  0s
==> v1/Pod(related)
NAME                                                     READY  STATUS             RESTARTS  AGE
my-nginx-nginx-ingress-controller-68579497d-vhtkw        0/1    ContainerCreating  0         0s
my-nginx-nginx-ingress-default-backend-7799dcdf8f-xvvwc  0/1    ContainerCreating  0         0s
==> v1/ConfigMap
NAME                               AGE
my-nginx-nginx-ingress-controller  1s
==> v1/ServiceAccount
my-nginx-nginx-ingress  1s
==> v1beta1/ClusterRole
my-nginx-nginx-ingress  1s
==> v1beta1/ClusterRoleBinding
my-nginx-nginx-ingress  1s
==> v1beta1/Role
my-nginx-nginx-ingress  1s
==> v1beta1/RoleBinding
my-nginx-nginx-ingress  1s
NOTES:
The nginx-ingress controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace default get services -o wide -w my-nginx-nginx-ingress-controller'
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
![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI14.png)

- Click on `Workloads`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI15.png)

-Click on `Services`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI16.png)

- Click on the `Load Balancer IP`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI17.png)

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI18.png)

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI19.png)

- Click on `Network Services -> Load Balancing`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI20.png)

- We can see the `3 virtual machines` from the `Frontend`

![](/images/other/docker-multi-docker/ConfigureGoogleCloudCLI21.png)

11. Deploy the `Kubernetes` application
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .gitignore
        modified:   elastic-beanstalk/.travis.yml

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .travis.yml
        deploy.sh
        service-account.json.enc

no changes added to commit (use "git add" and/or "git commit -a")
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .gitignore
        new file:   .travis.yml
        new file:   deploy.sh
        modified:   elastic-beanstalk/.travis.yml
        new file:   service-account.json.enc
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "added Kubernetes deployment scripts"
[master 95dade6] added Kubernetes deployment scripts
 5 files changed, 74 insertions(+), 13 deletions(-)
 create mode 100644 .travis.yml
 create mode 100644 deploy.sh
 create mode 100644 service-account.json.enc
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin HEAD
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 4.30 KiB | 488.00 KiB/s, done.
Total 8 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/multi-docker.git
   2124cea..95dade6  HEAD -> master
```
- Browse to https://www.travis-ci.com/peelmicro/multi-docker/requests

![](/images/other/docker-multi-docker/DeployKubernetesApplication.png)

- The `.travis.yml` is fixed.
`View Config`
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
env: 
  global:
    # Get an unique value of the latest commit to be used to identify the images
    - SHA=$(git rev-parse HEAD)
    # Tell Google Cloud CLI not to display any prompts
    - CLOUDSDK_CORE_DISABLE_PROMPTS=1
before_install:
  # Decrypt the encrypted Google Cloud Keys and copy locally
  - openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d
  # Install the Google Cloud SDK CLI
  - curl https://sdk.cloud.google.com | bash > /dev/null;
  # Apply additional configuration inside Travis CI instance
  - source $HOME/google-cloud-sdk/path.bash.inc
  # Install kubectl
  - gcloud components update kubectl
  # Authentication with Google Cloud using the decrypted json key file
  - gcloud auth activate-service-account --key-file service-account.json
  # Select the Google Cloud project that we're going to use
  - gcloud config set project multi-k8s-224518
  # Select the zone where the Kubernetes Cluster is installed
  - gcloud config set compute/zone us-central1-a
  # Select the Google Kubernetes Cluster
  - gcloud container clusters get-credentials multi-cluster
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Build the 'test' version of multi-client
  - docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client
script:
  # Run the current test
  - docker run peelmicro/test-client npm run test -- --coverage
# Exceute an external script to do the deployment to Google Cloud
deploy:
  provider: script
  script: bash ./deploy.sh
  on:
    branch: master
```

![](/images/other/docker-multi-docker/DeployKubernetesApplication2.png)

- The keys are not created on `www.travis-ci.com`, we need to use `www.travis-ci.org` instead

![](/images/other/docker-multi-docker/DeployKubernetesApplication3.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication4.png)

```bash
docker build" requires exactly 1 argument.
See 'docker build --help'.
Usage:  docker build [OPTIONS] PATH | URL | -
Build an image from a Dockerfile
"docker build" requires exactly 1 argument.
See 'docker build --help'.
Usage:  docker build [OPTIONS] PATH | URL | -
Build an image from a Dockerfile
"docker build" requires exactly 1 argument.
See 'docker build --help'.
Usage:  docker build [OPTIONS] PATH | URL | -
Build an image from a Dockerfile
The push refers to a repository [docker.io/[secure]/multi-client]
An image does not exist locally with the tag: [secure]/multi-client
The push refers to a repository [docker.io/[secure]/multi-client]
An image does not exist locally with the tag: [secure]/multi-client
The push refers to a repository [docker.io/[secure]/multi-server]
An image does not exist locally with the tag: [secure]/multi-server
The push refers to a repository [docker.io/[secure]/multi-server]
An image does not exist locally with the tag: [secure]/multi-server
The push refers to a repository [docker.io/[secure]/multi-worker]
An image does not exist locally with the tag: [secure]/multi-worker
The push refers to a repository [docker.io/[secure]/multi-worker]
An image does not exist locally with the tag: [secure]/multi-worker
service "client-cluster-ip-service" created
deployment.apps "client-deployment" created
persistentvolumeclaim "database-persistent-volume-claim" created
ingress.extensions "ingress-service" created
service "postgres-cluster-ip-service" created
deployment.apps "postgres-deployment" created
service "redis-cluster-ip-service" created
deployment.apps "redis-deployment" created
service "server-cluster-ip-service" created
deployment.apps "server-deployment" created
deployment.apps "worker-deployment" created
deployment.apps "client-deployment" image updated
deployment.apps "server-deployment" image updated
deployment.apps "worker-deployment" image updated
```
- `deploy.sh` must be changed

- Latest versions
> `.travis.yml`
```yaml
sudo: required
language: node_js
node_js: 
  - "8"
services:
  - docker
env: 
  global:
    # Get an unique value of the latest commit to be used to identify the images
    - SHA=$(git rev-parse HEAD)
    # Tell Google Cloud CLI not to display any prompts
    - CLOUDSDK_CORE_DISABLE_PROMPTS=1
before_install:
  # Decrypt the encrypted Google Cloud Keys and copy locally
  - openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d
  - openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d
  # Install the Google Cloud SDK CLI
  - curl https://sdk.cloud.google.com | bash > /dev/null;
  # Apply additional configuration inside Travis CI instance
  - source $HOME/google-cloud-sdk/path.bash.inc
  # Install kubectl
  - gcloud components update kubectl
  # Authentication with Google Cloud using the decrypted json key file
  - gcloud auth activate-service-account --key-file service-account.json
  # Select the Google Cloud project that we're going to use
  - gcloud config set project multi-k8s-224518
  # Select the zone where the Kubernetes Cluster is installed
  - gcloud config set compute/zone us-central1-a
  # Select the Google Kubernetes Cluster
  - gcloud container clusters get-credentials multi-cluster
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin 
  # Build the 'test' version of multi-client
  - docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client
script:
  # Run the current test
  - docker run peelmicro/test-client npm run test -- --coverage
# Exceute an external script to do the deployment to Google Cloud
deploy:
  provider: script
  script: bash ./deploy.sh
  on:
    branch: master
```
> `deploy.sh`
```bash
# Create the Docker Images
docker build -t peelmicro/multi-client:latest -t peelmicro/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t peelmicro/multi-server:latest -t peelmicro/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t peelmicro/multi-worker:latest -t peelmicro/multi-worker:$SHA -f ./worker/Dockerfile ./worker

# Take those images and push them to docker hub
docker push peelmicro/multi-client:latest
docker push peelmicro/multi-client:$SHA
docker push peelmicro/multi-server:latest
docker push peelmicro/multi-server:$SHA
docker push peelmicro/multi-worker:latest
docker push peelmicro/multi-worker:$SHA
# Apply all configs in the 'k8s' folder
kubectl apply -f k8s
# Imperatively set lastest images on each deployment
kubectl set image deployments/client-deployment client=peelmicro/multi-client:$SHA
kubectl set image deployments/server-deployment server=peelmicro/multi-server:$SHA
kubectl set image deployments/worker-deployment worker=peelmicro/multi-worker:$SHA
```

![](/images/other/docker-multi-docker/DeployKubernetesApplication5.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication6.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication7.png)

- Go to `Kubernetes Engine - Workloads`

![](/images/other/docker-multi-docker/DeployKubernetesApplication8.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication9.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication10.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication11.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication12.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication13.png)

![](/images/other/docker-multi-docker/DeployKubernetesApplication14.png)

12. Workflow for changing in Production

![](/images/other/docker-multi-docker/WorkflowForChanging.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
warning: LF will be replaced by CRLF in client/src/App.js.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   client/src/App.js
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "Updated Header with new Kubernetes title!"
[master b7736d9] Updated Header with new Kubernetes title!
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```
 ```bash
 Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin HEAD
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 466 bytes | 155.00 KiB/s, done.
Total 5 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/peelmicro/multi-docker.git
   c184ec2..b7736d9  HEAD -> master
 ```

![](/images/other/docker-multi-docker/WorkflowForChanging2.png)

13. HTTPS Setup

![](/images/other/docker-multi-docker/HttpsSetup.png)

- Browse to [Google Domains](https://domains.google) to purchase a domain

![](/images/other/docker-multi-docker/HttpsSetup2.png)

![](/images/other/docker-multi-docker/HttpsSetup3.png)

![](/images/other/docker-multi-docker/HttpsSetup4.png)

![](/images/other/docker-multi-docker/HttpsSetup5.png)

![](/images/other/docker-multi-docker/HttpsSetup6.png)

- Click on `CHECKOUT`

![](/images/other/docker-multi-docker/HttpsSetup7.png)

- Click on `SAVE & CONTINUE`

![](/images/other/docker-multi-docker/HttpsSetup8.png)

![](/images/other/docker-multi-docker/HttpsSetup9.png)

![](/images/other/docker-multi-docker/HttpsSetup10.png)

![](/images/other/docker-multi-docker/HttpsSetup11.png)

![](/images/other/docker-multi-docker/HttpsSetup12.png)

![](/images/other/docker-multi-docker/HttpsSetup13.png)

- Configure the new domain
- Browse to [Google Domains](https://domains.google.com)

![](/images/other/docker-multi-docker/HttpsSetup14.png)

- Click on `Configure DNS`
- Scroll down to `Custom resource records`
- Add two entries:

I) 

**NAME**: k8s-multi  
**TYPE**: A  
**TTL**: 1h  
**DATA**: 35.193.127.86  
II) 

**NAME**: www.k8s-multi  
**TYPE**: CNAME  
**TTL**: 1h  
**DATA**: k8s-multi.peelmicro.info.  

![](/images/other/docker-multi-docker/HttpsSetup15.png)

- Browse to https://k8s-multi.peelmicro.info/

![](/images/other/docker-multi-docker/HttpsSetup16.png)

- We are going to use [cert-manager](https://github.com/jetstack/cert-manager) to manage the certificate.

![](/images/other/docker-multi-docker/HttpsSetup17.png)

- Browse to [cert-manager’s documentation!](https://cert-manager.readthedocs.io/en/latest/)

![](/images/other/docker-multi-docker/HttpsSetup18.png)

- Go to `Installing cert-manager`

![](/images/other/docker-multi-docker/HttpsSetup19.png)

```bash
$ helm install \
    --name cert-manager \
    --namespace kube-system \
    stable/cert-manager
```
- Browse to [Goole Cloud Platform - Kubernetes](https://console.cloud.google.com/kubernetes)

![](/images/other/docker-multi-docker/HttpsSetup20.png)

- Go to `Activate Cloud Shell`

![](/images/other/docker-multi-docker/HttpsSetup21.png)

- Run the script.
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ helm install \
>     --name cert-manager \
>     --namespace kube-system \
>     stable/cert-manager
-bash: helm: command not found
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ helm
-bash: helm: command not found
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ ls
get_helm.sh  README-cloudshell.txt
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ ./get_helm.sh
Downloading https://kubernetes-helm.storage.googleapis.com/helm-v2.11.0-linux-amd64.tar.gz
Preparing to install helm and tiller into /usr/local/bin
helm installed into /usr/local/bin/helm
tiller installed into /usr/local/bin/tiller
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ helm init --service-account tiller --upgrade
$HELM_HOME has been configured at /home/peelmicro/.helm.
Tiller (the Helm server-side component) has been upgraded to the current version.
Happy Helming!
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ helm install \
>     --name cert-manager \
>     --namespace kube-system \
>     stable/cert-manager
NAME:   cert-manager
LAST DEPLOYED: Fri Dec  7 07:37:44 2018
NAMESPACE: kube-system
STATUS: DEPLOYED
RESOURCES:
==> v1beta1/ClusterRoleBinding
NAME          AGE
cert-manager  0s
==> v1beta1/Deployment
cert-manager  0s
==> v1/Pod(related)
NAME                           READY  STATUS             RESTARTS  AGE
cert-manager-6cf4699b56-vjrxc  0/1    ContainerCreating  0         0s
==> v1/ServiceAccount
NAME          AGE
cert-manager  0s
==> v1beta1/ClusterRole
cert-manager  0s
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
- Wire Up the `Cert Manager`

![](/images/other/docker-multi-docker/HttpsSetup22.png)

![](/images/other/docker-multi-docker/HttpsSetup23.png)

- Create the new `issuer.yaml` on the `k8s` folder.
```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: 'juanp_perez@peelmicro.info'
    privateKeySecretRef:
      name: letsencrypt-prod
    http01: {}
```
- Create the new `certificate.yaml` on the `k8s` folder.
```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata: 
  name: k8s-multi-com-tls
spec:
  secretName: k8s-multi-com
  issuerRef: 
    name: letsencrypt-prod
    kind: ClusterIssuer
  commonName: peelmicro.info
  dnsNames:
    - k8s-multi.peelmicro.info
    - www.k8s-multi.peelmicro.info
  acme:
    config:
      - http01:
        ingressClass: nginx
        domains:
          - k8s-multi.peelmicro.info
          - www.k8s-multi.peelmicro.info
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        k8s/certificate.yaml
        k8s/issuer.yaml

nothing added to commit but untracked files present (use "git add" to track)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   k8s/certificate.yaml
        new file:   k8s/issuer.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "Added certificate and issuer"
[master 69526bd] Added certificate and issuer
 2 files changed, 32 insertions(+)
 create mode 100644 k8s/certificate.yaml
 create mode 100644 k8s/issuer.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin HEAD
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 822 bytes | 91.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/multi-docker.git
   b7736d9..69526bd  HEAD -> master
```
![](/images/other/docker-multi-docker/HttpsSetup24.png)
- Browse to `Google Could Terminal` and check if the new certificate and issuer have been created
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl get certificates
NAME                AGE
k8s-multi-com-tls   3m
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl describe certificates
Name:         k8s-multi-com-tls
Namespace:    default
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration={"apiVersion":"certmanager.k8s.io/v1alpha1","kind":"Certificate","metadata":{"annotations":{},"name":"k8s-multi-com-tls","namespace":"default"},"spec":...
API Version:  certmanager.k8s.io/v1alpha1
Kind:         Certificate
Metadata:
  Cluster Name:
  Creation Timestamp:  2018-12-07T08:14:02Z
  Generation:          0
  Resource Version:    308105
  Self Link:           /apis/certmanager.k8s.io/v1alpha1/namespaces/default/certificates/k8s-multi-com-tls
  UID:                 0e6e432c-f9f8-11e8-9f4c-42010a8000c9
Spec:
  Acme:
    Config:
      Domains:
        k8s-multi.peelmicro.info
        www.k8s-multi.peelmicro.info
  Common Name:  peelmicro.info
  Dns Names:
    k8s-multi.peelmicro.info
    www.k8s-multi.peelmicro.info
  Issuer Ref:
    Kind:       ClusterIssuer
    Name:       letsencrypt-prod
  Secret Name:  k8s-multi-com
Status:
  Conditions:
    Last Transition Time:  2018-12-07T08:14:04Z
    Message:               Resource validation failed: [spec.acme.config: Required value: no ACME solver configuration specified for domain "peelmicro.info", spec.acme.config[0]: Required value: at least one solver must be configured]
    Reason:                ConfigError
    Status:                False
    Type:                  Ready
```
- Assing temporaly the IP to the `peelmicro.info` domain

![](/images/other/docker-multi-docker/HttpsSetup25.png)

- Modify the `certificate.yaml` file
```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata:
  name: k8s-multi-com-tls
spec:
  secretName: k8s-multi-com
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  commonName: peelmicro.info
  dnsNames:
    - peelmicro.info
    - www.peelmicro.info
  acme:
    config:
      - http01:
          ingressClass: nginx
        domains:
          - peelmicro.info
          - www.peelmicro.info
```
- Modiy the `issuer.yaml` file
```yaml
apiVersion: certmanager.k8s.io/v1alpha1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: 'juanp_perez@peelmicro.info'
    privateKeySecretRef:
      name: letsencrypt-prod
    http01: {}    
```
- Browse to `Google Could Terminal` and check if the new certificate has been created
```bash
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration={"apiVersion":"certmanager.k8s.io/v1alpha1","kind":"Certificate","metadata":{"annotations":{},"name":"k8s-multi-com-tls","namespace":"default"},"spec":...
API Version:  certmanager.k8s.io/v1alpha1
Kind:         Certificate
Metadata:
  Cluster Name:
  Creation Timestamp:  2018-12-07T08:14:02Z
  Generation:          0
  Resource Version:    314535
  Self Link:           /apis/certmanager.k8s.io/v1alpha1/namespaces/default/certificates/k8s-multi-com-tls
  UID:                 0e6e432c-f9f8-11e8-9f4c-42010a8000c9
Spec:
  Acme:
    Config:
      Domains:
        peelmicro.info
        www.peelmicro.info
      Http 01:
        Ingress:
        Ingress Class:  nginx
  Common Name:          peelmicro.info
  Dns Names:
    peelmicro.info
    www.peelmicro.info
  Issuer Ref:
    Kind:       ClusterIssuer
    Name:       letsencrypt-prod
  Secret Name:  k8s-multi-com
Status:
  Acme:
    Order:
      URL:  https://acme-v02.api.letsencrypt.org/acme/order/47225945/209726867
  Conditions:
    Last Transition Time:  2018-12-07T09:11:08Z
    Message:               Certificate issued successfully
    Reason:                CertIssued
    Status:                True
    Type:                  Ready
    Last Transition Time:  <nil>
    Message:               Order validated
    Reason:                OrderValidated
    Status:                False
    Type:                  ValidateFailed
Events:
  Type    Reason          Age   From          Message
  ----    ------          ----  ----          -------
  Normal  CreateOrder     3m    cert-manager  Created new ACME order, attempting validation...
  Normal  DomainVerified  2m    cert-manager  Domain "www.peelmicro.info" verified with "http-01" validation
  Normal  DomainVerified  2m    cert-manager  Domain "peelmicro.info" verified with "http-01" validation
  Normal  IssueCert       2m    cert-manager  Issuing certificate...
  Normal  CertObtained    2m    cert-manager  Obtained certificate from ACME server
  Normal  CertIssued      2m    cert-manager  Certificate issued successfully
```
- Check if the `k8s-multi-com` secret has been created
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl get secrets
NAME                                 TYPE                                  DATA      AGE
default-token-vrc79                  kubernetes.io/service-account-token   3         2d
k8s-multi-com                        kubernetes.io/tls                     2         5m
my-nginx-nginx-ingress-token-mrc7x   kubernetes.io/service-account-token   3         15h
pgpassword                           Opaque                                1         16h
```
- Check if the `letsencrypt-prod` Cluster Issuer has been created
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl get clusterissuers
NAME               AGE
letsencrypt-prod   1h
```
```bash
peelmicro@cloudshell:~ (multi-k8s-224518)$ kubectl describe clusterissuers
Name:         letsencrypt-prod
Namespace:
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration={"apiVersion":"certmanager.k8s.io/v1alpha1","kind":"ClusterIssuer","metadata":{"annotations":{},"name":"letsencrypt-prod","namespace":""},"spec":{"acme...
API Version:  certmanager.k8s.io/v1alpha1
Kind:         ClusterIssuer
Metadata:
  Cluster Name:
  Creation Timestamp:  2018-12-07T08:14:04Z
  Generation:          0
  Resource Version:    308216
  Self Link:           /apis/certmanager.k8s.io/v1alpha1/letsencrypt-prod
  UID:                 0fcae057-f9f8-11e8-9f4c-42010a8000c9
Spec:
  Acme:
    Email:  juanp_perez@peelmicro.info
    Http 01:
    Private Key Secret Ref:
      Key:
      Name:  letsencrypt-prod
    Server:  https://acme-v02.api.letsencrypt.org/directory
Status:
  Acme:
    Uri:  https://acme-v02.api.letsencrypt.org/acme/acct/47225945
  Conditions:
    Last Transition Time:  2018-12-07T08:14:10Z
    Message:               The ACME account was registered with the ACME server
    Reason:                ACMEAccountRegistered
    Status:                True
    Type:                  Ready
Events:                    <none>
```
- Modify the `ingress-service.yaml` file
```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-service
  annotations: 
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/rewrite-target: /
    certmanager.k8s.io/cluster-issuer: 'letsencrypt-prod'
    nginx.ingress.kubernetes.io/ssl-redirect: 'true'
spec: 
  tls:
    - hosts: 
        - peelmicro.info
        - www.peelmicro.info
      secretName: k8s-multi-com
  rules:
    - host: peelmicro.info
      http:
        paths:
          - path: /
            backend: 
              serviceName: client-cluster-ip-service
              servicePort: 3000
          - path: /api/
            backend: 
              serviceName: server-cluster-ip-service
              servicePort: 5000
    - host: www.peelmicro.info
      http:
        paths:
          - path: /
            backend: 
              serviceName: client-cluster-ip-service
              servicePort: 3000
          - path: /api/
            backend: 
              serviceName: server-cluster-ip-service
              servicePort: 5000
```
- Commit the new changes
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   k8s/ingress-service.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git commit -m "Added ingress to force using TLS"
[master b5b9873] Added ingress to force using TLS
 1 file changed, 21 insertions(+), 1 deletion(-)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ git push origin HEAD
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 669 bytes | 133.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/multi-docker.git
   4211526..b5b9873  HEAD -> master
```

![](/images/other/docker-multi-docker/HttpsSetup26.png)

![](/images/other/docker-multi-docker/HttpsSetup27.png)

![](/images/other/docker-multi-docker/HttpsSetup28.png)

14. Google Cloud Cleanup
- Browse to [Google Cloud Platform](https://console.cloud.google.com/home/dashboard)

![](/images/other/docker-multi-docker/GoogleCloudCleanup.png)

![](/images/other/docker-multi-docker/GoogleCloudCleanup2.png)

- Click the `gear` icon on the top right 

![](/images/other/docker-multi-docker/GoogleCloudCleanup3.png)

- Select the `multi-k8s` project and then click on `DELETE`

![](/images/other/docker-multi-docker/GoogleCloudCleanup4.png)

- Enter the `project ID` and then click on `SHUT-DOWN'

![](/images/other/docker-multi-docker/GoogleCloudCleanup5.png)

![](/images/other/docker-multi-docker/GoogleCloudCleanup6.png)

![](/images/other/docker-multi-docker/GoogleCloudCleanup7.png)
# .NET Core version of the "Docker and Kubernetes: The Complete Guide" Udemy Course 

> Github Repositories
- [dotnet-core-multi-docker](https://github.com/peelmicro/dotnet-core-multi-docker).

Source code for the `.Net Core` version of the [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/docker-and-kubernetes-the-complete-guide) Udemy course

Within the code you can see how to:
- Create different Docker Container Types and relate all of them:
1. React Client App
2. .NET Core Web API
3. .NET Core Console
4. Postgres
5. Redis
6. NGINX
- Use Postgres from a Docker Container with .Net Core
- Use Redis from a Docker Container with .Net Core creating a subscription on the Web API App and - subscribe to it on the Console App.
- Accept dynamic POST request with .Net Core API
- Send dynamic JSON responses from .Net Core API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with .NET Core API
- Work with different AWS Amazon service types to deploy a multi-container Docker application using AWS Elastic Beanstalk
- Upload own Containers to Docker Hub and download them when deploying
- Use Travis CI for the Continuous Integration Workflow
- Use Kubernetes to run the same multi-container application
- Use Minikube to run Kubernetes locally
- Use Kubectl CLI for interacting with Kubernetes Master
- Use Google Kubernetes Engine to run the Kubernetes Cluster on the Cloud
- Run the Ruby Travis CI CLI from a Docker container locally
- Manage the automatic creation and renewal of a TLS certificate using Kubernetes to run the application with HTTPS

> Table of contents
[[toc]]

You can find more information on [Docker and Kubernetes: The Complete Guide](/other/docker-multi-docker.md).

## Multi-Docker solution
### Create the initial version of the `Worker` Project
1. Create the folder for the `solution` and the `Worker` project
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>mkdir dotnet-core-complex
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>cd dotnet-core-complex
```
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>mkdir Worker
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>cd Worker
```
2. Execute the `.Net Core CLI command` to create a new `console` application
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Worker>dotnet new console
The template "Console Application" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Worker\Worker.csproj...
  Restoring packages for C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Worker\Worker.csproj...
  Generating MSBuild file C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Worker\obj\Worker.csproj.nuget.g.props.
  Generating MSBuild file C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Worker\obj\Worker.csproj.nuget.g.targets.
  Restore completed in 324.93 ms for C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Worker\Worker.csproj.

Restore succeeded.
```
3. Create a `Dockerfile` document to create the `Docker Image`
> `Dockerfile`
```docker
FROM microsoft/dotnet:2.1-sdk
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/Worker.dll"]
```
4. Create the `.dockerignore` file.
```
bin\
obj\
```

5. Build the `Docker image`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker build -t dotnet-core-worker-dev .
Sending build context to Docker daemon  8.704kB
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
2.1-sdk: Pulling from microsoft/dotnet
bc9ab73e5b14: Pull complete
193a6306c92a: Pull complete
e5c3f8c317dc: Pull complete
a587a86c9dcb: Pull complete
290de22a9506: Pull complete
f378ac4c5856: Pull complete
795266ce0809: Pull complete
Digest: sha256:8e9138b0aebf298b78d299e09a32809fbe492e4a8d8cecf87f839b298309b2ed
Status: Downloaded newer image for microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Running in 08a1ce2953c3
Removing intermediate container 08a1ce2953c3
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> 7218152b35e8
Step 4/7 : RUN dotnet restore
 ---> Running in c963a155f9ba
  Restoring packages for /app/Worker.csproj...
  Generating MSBuild file /app/obj/Worker.csproj.nuget.g.props.
  Generating MSBuild file /app/obj/Worker.csproj.nuget.g.targets.
  Restore completed in 307.13 ms for /app/Worker.csproj.
Removing intermediate container c963a155f9ba
 ---> 822ed7e1ec72
Step 5/7 : COPY . ./
 ---> cf68c46d89d6
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Running in dc5c9dc60dfb
Microsoft (R) Build Engine version 15.8.169+g1ccb72aefa for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 54.35 ms for /app/Worker.csproj.
  Worker -> /app/bin/Release/netcoreapp2.1/Worker.dll
  Worker -> /app/out/
Removing intermediate container dc5c9dc60dfb
 ---> f4ebb1a63fc8
Step 7/7 : ENTRYPOINT ["dotnet", "out/Worker.dll"]
 ---> Running in cc0c841e86a0
Removing intermediate container cc0c841e86a0
 ---> 47b4ff18744b
Successfully built 47b4ff18744b
Successfully tagged dotnet-core-worker-dev:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

6. Check if there is any container running
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

7. Run the image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker run 47b4ff18744b
Hello World!
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker run dotnet-core-worker-dev
Hello World!
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker run dotnet-core-worker-dev:latest
Hello World!
```

### Create the initial version of the `Server` Project
1. Create the folder for the `Server` project
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>mkdir Server

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>cd Server
```

2. Execute the `.Net Core CLI command` to create a new `webapi` application 
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Server>dotnet new webapi
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Server\Server.csproj...
  Restoring packages for C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Server\Server.csproj...
  Generating MSBuild file C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Server\obj\Server.csproj.nuget.g.props.
  Generating MSBuild file C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Server\obj\Server.csproj.nuget.g.targets.
  Restore completed in 8.05 sec for C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex\Server\Server.csproj.

Restore succeeded.
```

3. Download Postgres Windows
- Browse to https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- Download version 10.6 that is compatible with Linux.
- Install the executable
Installation Directory: `C:\Program Files\PostgreSQL\10`
Data Directory: `C:\Program Files\PostgreSQL\10\data`
Password for superuser postgres: `postgres_password`
Port: `5432`
Locale: `[Default locale]`

Installation Directory: `C:\Program Files\PostgreSQL\10`
Server Installation Directory: `C:\Program Files\PostgreSQL\10`
Data Directory: `C:\Program Files\PostgreSQL\10\data`
Database Port: `5432`
Database Superuser: `postgres`
Operating System Account: `NT AUTHORITY\NetworkService`
Database Service: `postgresql-x64-10`
Command Line Tools Installation Directory: `C:\Program Files\PostgreSQL\10`
pgAdmin4 Installation Directory: `C:\Program Files\PostgreSQL\10\pgAdmin`
Stack Builder Installation Directory: `C:\Program Files\PostgreSQL\10`

4. Running PostgreSQL
```bash
Microsoft Windows [Version 10.0.17134.285]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\WINDOWS\system32>pg_ctl -D "C:\Program Files\PostgreSQL\10\data" start
pg_ctl: another server might be running; trying to start server anyway
waiting for server to start....2018-11-10 05:51:26.969 GMT [22892] LOG:  could not bind IPv6 address "::": Only one usage of each socket address (protocol/network address/port) is normally permitted.

2018-11-10 05:51:26.969 GMT [22892] HINT:  Is another postmaster already running on port 5432? If not, wait a few seconds and retry.
2018-11-10 05:51:26.970 GMT [22892] LOG:  could not bind IPv4 address "0.0.0.0": Only one usage of each socket address (protocol/network address/port) is normally permitted.

2018-11-10 05:51:26.970 GMT [22892] HINT:  Is another postmaster already running on port 5432? If not, wait a few seconds and retry.
2018-11-10 05:51:26.971 GMT [22892] WARNING:  could not create listen socket for "*"
2018-11-10 05:51:26.971 GMT [22892] FATAL:  could not create any TCP/IP sockets
2018-11-10 05:51:26.972 GMT [22892] LOG:  database system is shut down
 stopped waiting
pg_ctl: could not start server
```
- Start service `Postgresql-x64-10` (make it manual first to avoid to be running always)
- Check if it is running
```bash
C:\Program Files\PostgreSQL\10\bin>pg_isready
/tmp:5432 - accepting connections
```
```bash
C:\Program Files\PostgreSQL\10\bin>(pg_isready -q -h 127.0.0.1 && echo Ok) || echo Fail
Ok
```
```bash
C:\Program Files\PostgreSQL\10\bin>pg_isready --help
pg_isready issues a connection check to a PostgreSQL database.

Usage:
  pg_isready [OPTION]...

Options:
  -d, --dbname-DBNAME      database name
  -q, --quiet              run quietly
  -V, --version            output version information, then exit
  -?, --help               show this help, then exit

Connection options:
  -h, --host-HOSTNAME      database server host or socket directory
  -p, --port-PORT          database server port
  -t, --timeout-SECS       seconds to wait when attempting connection, 0 disables (default: 3)
  -U, --username-USERNAME  user name to connect as

Report bugs to <pgsql-bugs@postgresql.org>.

Examine the log output.
```
5. Create the `Dockerfile` for the server project
> `Dockerfile`
```docker
FROM microsoft/dotnet:2.1-sdk
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/Server.dll"]
```

6. Build the `docker image`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Server (master)
$ docker build .
Sending build context to Docker daemon   21.5kB
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> 9ecaa8b6a2b0
Step 4/7 : RUN dotnet restore
 ---> Running in b657824a9eb7
  Restoring packages for /app/Server.csproj...
  Installing Microsoft.CSharp 4.4.0.
  Installing System.Runtime.CompilerServices.Unsafe 4.4.0.
  Installing System.Threading.Overlapped 4.3.0.
  Installing System.Data.SqlClient 4.5.0.
  Installing System.Memory 4.5.0.
  Installing System.Net.WebSockets.WebSocketProtocol 4.5.0.
  Installing ServiceStack.Text.Core 5.1.0.
  Installing Microsoft.Extensions.Primitives 2.0.0.
  Installing System.Net.NetworkInformation 4.3.0.
  Installing ServiceStack.Interfaces.Core 5.1.0.
  Installing System.Threading.Tasks.Extensions 4.5.0.
  Installing Microsoft.EntityFrameworkCore.SqlServer 2.1.0.
  Installing Microsoft.Extensions.Caching.SqlServer 2.1.0.
  Installing Microsoft.AspNetCore.Razor.Design 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Localization 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Core 2.1.0.
  Installing Microsoft.AspNetCore.Server.IISIntegration 2.1.0.
  Installing Npgsql.EntityFrameworkCore.PostgreSQL 2.1.0.
  Installing Microsoft.Extensions.Primitives 2.1.0.
  Installing ServiceStack.Redis.Core 5.1.0.
  Installing Microsoft.AspNetCore.WebSockets 2.1.0.
  Installing Microsoft.AspNetCore.Razor.Language 2.1.0.
  Installing Microsoft.AspNetCore.App 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Abstractions 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Relational 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Core 2.1.0.
  Installing Npgsql 4.0.0.
  Installing Microsoft.AspNetCore.Identity.UI 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Design 2.1.0.
  Installing Microsoft.EntityFrameworkCore 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Tools 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Formatters.Json 2.1.0.
  Installing Microsoft.AspNetCore.Server.HttpSys 2.1.0.
  Installing System.Net.Security 4.3.1.
  Installing Microsoft.AspNetCore.Mvc.Razor.ViewCompilation 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Razor 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.ViewFeatures 2.1.0.
  Installing System.Data.Common 4.3.0.
  Installing Microsoft.AspNetCore.Mvc.Razor.Extensions 2.1.0.
  Installing Microsoft.CodeAnalysis.Razor 2.1.0.
  Installing Microsoft.AspNetCore.ResponseCompression 2.1.0.
  Installing ServiceStack.Common.Core 5.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.RazorPages 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Twitter 2.1.0.
  Installing Microsoft.AspNetCore.Authorization 2.1.0.
  Installing Microsoft.AspNetCore.Owin 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Embedded 2.1.0.
  Installing Microsoft.EntityFrameworkCore.InMemory 2.1.0.
  Installing Microsoft.AspNetCore 2.1.0.
  Installing Microsoft.AspNetCore.StaticFiles 2.1.0.
  Installing Microsoft.Net.Http.Headers 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.OAuth 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.MicrosoftAccount 2.1.0.
  Installing Microsoft.AspNetCore.WebUtilities 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Google 2.1.0.
  Installing Microsoft.Extensions.Caching.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Cors 2.1.0.
  Installing Microsoft.AspNetCore.ResponseCaching 2.1.0.
  Installing Microsoft.AspNetCore.Cryptography.KeyDerivation 2.1.0.
  Installing Microsoft.Extensions.Configuration.Ini 2.1.0.
  Installing Microsoft.AspNetCore.Rewrite 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Cookies 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Physical 2.1.0.
  Installing Microsoft.AspNetCore.CookiePolicy 2.1.0.
  Installing Microsoft.AspNetCore.SignalR.Protocols.Json 1.0.0.
  Installing Microsoft.AspNetCore.Mvc.Cors 2.1.0.
  Installing Microsoft.AspNetCore.Http.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.OpenIdConnect 2.1.0.
  Installing Microsoft.AspNetCore.SpaServices.Extensions 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.JwtBearer 2.1.0.
  Installing Microsoft.AspNetCore.DataProtection.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.SpaServices 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Core 2.1.0.
  Installing Microsoft.Extensions.WebEncoders 2.1.0.
  Installing Microsoft.AspNetCore.DataProtection.Extensions 2.1.0.
  Installing Microsoft.Extensions.Configuration.KeyPerFile 2.1.0.
  Installing Microsoft.Extensions.Configuration.FileExtensions 2.1.0.
  Installing Microsoft.AspNetCore.HttpOverrides 2.1.0.
  Installing Microsoft.AspNetCore.Authentication 2.1.0.
  Installing Microsoft.AspNetCore.Diagnostics 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Abstractions 2.1.0.
  Installing Microsoft.Extensions.DependencyInjection 2.1.0.
  Installing Microsoft.AspNetCore.Hosting 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.TagHelpers 2.1.0.
  Installing Microsoft.Extensions.Identity.Core 2.1.0.
  Installing Microsoft.AspNetCore.Authorization.Policy 2.1.0.
  Installing Microsoft.AspNetCore.Antiforgery 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Facebook 2.1.0.
  Installing Microsoft.AspNetCore.Connections.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.WsFederation 2.1.0.
  Installing Microsoft.AspNetCore.Hosting.Server.Abstractions 2.1.0.
  Installing Microsoft.Extensions.FileSystemGlobbing 2.1.0.
  Installing Microsoft.AspNetCore.Identity.EntityFrameworkCore 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel 2.1.0.
  Installing Microsoft.AspNetCore.DataProtection 2.1.0.
  Installing Microsoft.AspNetCore.HostFiltering 2.1.0.
  Installing Microsoft.AspNetCore.Localization.Routing 2.1.0.
  Installing Microsoft.Extensions.Configuration.Binder 2.1.0.
  Installing Microsoft.AspNetCore.HttpsPolicy 2.1.0.
  Installing Microsoft.AspNetCore.SignalR.Common 1.0.0.
  Installing Microsoft.AspNetCore.Diagnostics.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore 2.1.0.
  Installing Microsoft.AspNetCore.Html.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Http.Extensions 2.1.0.
  Installing Microsoft.AspNetCore.Cryptography.Internal 2.1.0.
  Installing Microsoft.Extensions.DependencyInjection.Abstractions 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Composite 2.1.0.
  Installing Microsoft.AspNetCore.Routing 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.ApiExplorer 2.1.0.
  Installing Microsoft.Extensions.Identity.Stores 2.1.0.
  Installing Microsoft.AspNetCore.Http.Connections.Common 1.0.0.
  Installing Microsoft.AspNetCore.Routing.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Hosting.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Logging 2.1.0.
  Installing Microsoft.Extensions.Logging.Debug 2.1.0.
  Installing Microsoft.AspNetCore.Hosting.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.DataAnnotations 2.1.0.
  Installing Microsoft.Extensions.Localization 2.1.0.
  Installing Microsoft.AspNetCore.Razor 2.1.0.
  Installing Microsoft.AspNetCore.SignalR 1.0.0.
  Installing Microsoft.Extensions.Logging.Configuration 2.1.0.
  Installing Microsoft.AspNetCore.Http.Connections 1.0.0.
  Installing Microsoft.AspNetCore.Identity 2.1.0.
  Installing Microsoft.AspNetCore.Razor.Runtime 2.1.0.
  Installing Microsoft.AspNetCore.Http.Features 2.1.0.
  Installing Microsoft.Extensions.Http 2.1.0.
  Installing Microsoft.AspNet.WebApi.Client 5.2.4.
  Installing Microsoft.Extensions.Configuration.Json 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Https 2.1.0.
  Installing Microsoft.AspNetCore.Http 2.1.0.
  Installing Microsoft.Extensions.Configuration.UserSecrets 2.1.0.
  Installing Microsoft.Extensions.Configuration.Xml 2.1.0.
  Installing Microsoft.AspNetCore.NodeServices 2.1.0.
  Installing Microsoft.Extensions.Configuration.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Configuration.EnvironmentVariables 2.1.0.
  Installing Microsoft.AspNetCore.ResponseCaching.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.MiddlewareAnalysis 2.1.0.
  Installing Microsoft.Extensions.Logging.Console 2.1.0.
  Installing Microsoft.AspNetCore.SignalR.Core 1.0.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Formatters.Xml 2.1.0.
  Installing Microsoft.Extensions.Options 2.1.0.
  Installing Microsoft.AspNetCore.Session 2.1.0.
  Installing Microsoft.Extensions.Logging.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Analyzers 2.1.0.
  Installing Microsoft.Extensions.Caching.Memory 2.1.0.
  Installing Microsoft.Extensions.ObjectPool 2.1.0.
  Installing Microsoft.Extensions.Options.ConfigurationExtensions 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Analyzers 2.1.0.
  Installing Microsoft.Extensions.Configuration.CommandLine 2.1.0.
  Installing Microsoft.Extensions.Logging.EventSource 2.1.0.
  Installing Microsoft.AspNetCore.JsonPatch 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Hosting 2.1.0.
  Installing Microsoft.AspNetCore.Localization 2.1.0.
  Installing Microsoft.Extensions.Localization.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Logging.TraceSource 2.1.0.
  Installing Microsoft.Extensions.Configuration 2.1.0.
  Generating MSBuild file /app/obj/Server.csproj.nuget.g.props.
  Generating MSBuild file /app/obj/Server.csproj.nuget.g.targets.
  Restore completed in 19.49 sec for /app/Server.csproj.
Removing intermediate container b657824a9eb7
 ---> f812e9d85e6b
Step 5/7 : COPY . ./
 ---> 4a7ddb120771
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Running in 80186b435427
Microsoft (R) Build Engine version 15.8.169+g1ccb72aefa for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 140.35 ms for /app/Server.csproj.
  Server -> /app/bin/Release/netcoreapp2.1/Server.dll
  Server -> /app/out/
Removing intermediate container 80186b435427
 ---> 9964c55396e0
Step 7/7 : ENTRYPOINT ["dotnet", "out/Server.dll"]
 ---> Running in 7564012461e5
Removing intermediate container 7564012461e5
 ---> 71076f584860
Successfully built 71076f584860
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

### Create the initial version of the `Client` Project
1. Copy the folder like that from the `node.js` version.
2. Create the `Docker image` to ensure everything is working correctly
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/client (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  340.5kB
Step 1/6 : FROM node:alpine
 ---> 5d526f8ba00b
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/6 : COPY package.json .
 ---> e1668834aeca
Step 4/6 : RUN npm install
 ---> Running in fe760d02b9c2
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1684 packages from 666 contributors and audited 35723 packages in 91.197s
found 0 vulnerabilities

Removing intermediate container fe760d02b9c2
 ---> 262ef65835a9
Step 5/6 : COPY . .
 ---> abf835bd130f
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 9fee71b8a18e
Removing intermediate container 9fee71b8a18e
 ---> 6eb7eacd5b1a
Successfully built 6eb7eacd5b1a
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

### Create the initial version of the `NGINX` Project
1. Copy the folder like that from the `node.js` version.
2. Create the `Docker image` to ensure everything is working correctly
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/nginx (master)
$ docker build -f Dockerfile.dev .
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> 1875af9fe53e
Successfully built 1875af9fe53e
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
``` 

### Create the solution
1. Init `git`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex
$ git init
Initialized empty Git repository in C:/Users/juan.pablo.perez/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/.git/
```

2. Create the `docker-compose.yml` document
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
      dockerfile: Dockerfile
      context: ./Server
    volumes:
      - ./Server:/app
    environment:
      - REDIS_HOST-redis
      - REDIS_PORT-6379
      - PGUSER-postgres
      - PGHOST-postgres
      - PGDATABASE-postgres
      - PGPASSWORD-postgres_password
      - PGPORT-5432
  client:
    build: 
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - /app/node_modules
      - ./client:/app
  worker:
    build: 
      dockerfile: Dockerfile
      context: ./Worker
    volumes:
      - ./Worker:/app      
    environment:
        - REDIS_HOST-redis
        - REDIS_PORT-6379      
```

3. Execute the `docker-compose` file
```bash
 Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Server (master)
$ cd ..

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker-compose up
Creating network "dotnet-core-complex_default" with the default driver
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> a57be744b271
Successfully built a57be744b271
Successfully tagged dotnet-core-complex_nginx:latest
WARNING: Image for service nginx was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Building api
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> 9c3405f88284
Step 4/7 : RUN dotnet restore
 ---> Running in cceb64e9e13e
  Restoring packages for /app/Server.csproj...
  Installing Microsoft.CSharp 4.4.0.
  Installing System.Threading.Overlapped 4.3.0.
  Installing System.Runtime.CompilerServices.Unsafe 4.4.0.
  Installing System.Data.SqlClient 4.5.0.
  Installing System.Net.WebSockets.WebSocketProtocol 4.5.0.
  Installing System.Memory 4.5.0.
  Installing ServiceStack.Text.Core 5.1.0.
  Installing System.Net.NetworkInformation 4.3.0.
  Installing Microsoft.Extensions.Primitives 2.0.0.
  Installing ServiceStack.Interfaces.Core 5.1.0.
  Installing System.Threading.Tasks.Extensions 4.5.0.
  Installing Microsoft.EntityFrameworkCore.SqlServer 2.1.0.
  Installing Microsoft.Extensions.Caching.SqlServer 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.OAuth 2.1.0.
  Installing Microsoft.AspNetCore.Razor.Design 2.1.0.
  Installing Microsoft.Extensions.Configuration.Xml 2.1.0.
  Installing Microsoft.AspNetCore.Razor 2.1.0.
  Installing Npgsql.EntityFrameworkCore.PostgreSQL 2.1.0.
  Installing Microsoft.Extensions.Configuration.UserSecrets 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Core 2.1.0.
  Installing ServiceStack.Redis.Core 5.1.0.
  Installing Microsoft.AspNetCore.Authentication.Twitter 2.1.0.
  Installing Microsoft.AspNet.WebApi.Client 5.2.4.
  Installing Microsoft.AspNetCore.App 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Abstractions 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Relational 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Core 2.1.0.
  Installing Microsoft.EntityFrameworkCore 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Core 2.1.0.
  Installing Microsoft.AspNetCore.Http.Extensions 2.1.0.
  Installing Npgsql 4.0.0.
  Installing Microsoft.Extensions.Hosting 2.1.0.
  Installing Microsoft.AspNetCore.Authorization.Policy 2.1.0.
  Installing Microsoft.AspNetCore.Identity.UI 2.1.0.
  Installing Microsoft.AspNetCore.WebSockets 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Tools 2.1.0.
  Installing System.Net.Security 4.3.1.
  Installing Microsoft.Extensions.Primitives 2.1.0.
  Installing Microsoft.AspNetCore.Server.IISIntegration 2.1.0.
  Installing Microsoft.AspNetCore.Server.HttpSys 2.1.0.
  Installing System.Data.Common 4.3.0.
  Installing Microsoft.AspNetCore.Razor.Language 2.1.0.
  Installing Microsoft.AspNetCore.Session 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Design 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.WsFederation 2.1.0.
  Installing Microsoft.Extensions.Caching.Abstractions 2.1.0.
  Installing ServiceStack.Common.Core 5.1.0.
  Installing Microsoft.AspNetCore.NodeServices 2.1.0.
  Installing Microsoft.AspNetCore.Antiforgery 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Razor 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Razor.ViewCompilation 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Abstractions 2.1.0.
  Installing Microsoft.Net.Http.Headers 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.ViewFeatures 2.1.0.
  Installing Microsoft.AspNetCore.ResponseCaching.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Diagnostics.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Logging.TraceSource 2.1.0.
  Installing Microsoft.Extensions.Configuration.FileExtensions 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Google 2.1.0.
  Installing Microsoft.AspNetCore.Razor.Runtime 2.1.0.
  Installing Microsoft.AspNetCore.Authorization 2.1.0.
  Installing Microsoft.AspNetCore.SpaServices 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Hosting.Server.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets 2.1.0.
  Installing Microsoft.AspNetCore.Hosting.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.DataProtection 2.1.0.
  Installing Microsoft.AspNetCore.SignalR 1.0.0.
  Installing Microsoft.AspNetCore.Localization.Routing 2.1.0.
  Installing Microsoft.Extensions.WebEncoders 2.1.0.
  Installing Microsoft.AspNetCore.SignalR.Core 1.0.0.
  Installing Microsoft.Extensions.Options.ConfigurationExtensions 2.1.0.
  Installing Microsoft.AspNetCore.StaticFiles 2.1.0.
  Installing Microsoft.AspNetCore.Routing.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Logging.Debug 2.1.0.
  Installing Microsoft.AspNetCore.Mvc 2.1.0.
  Installing Microsoft.Extensions.Logging.Configuration 2.1.0.
  Installing Microsoft.AspNetCore.WebUtilities 2.1.0.
  Installing Microsoft.Extensions.Configuration.CommandLine 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Https 2.1.0.
  Installing Microsoft.AspNetCore.HostFiltering 2.1.0.
  Installing Microsoft.AspNetCore.Identity.EntityFrameworkCore 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Composite 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Configuration.KeyPerFile 2.1.0.
  Installing Microsoft.Extensions.Localization 2.1.0.
  Installing Microsoft.EntityFrameworkCore.InMemory 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Analyzers 2.1.0.
  Installing Microsoft.CodeAnalysis.Razor 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Razor.Extensions 2.1.0.
  Installing Microsoft.Extensions.Configuration.EnvironmentVariables 2.1.0.
  Installing Microsoft.AspNetCore.HttpOverrides 2.1.0.
  Installing Microsoft.AspNetCore.MiddlewareAnalysis 2.1.0.
  Installing Microsoft.Extensions.DependencyInjection 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Formatters.Xml 2.1.0.
  Installing Microsoft.Extensions.Identity.Core 2.1.0.
  Installing Microsoft.AspNetCore.ResponseCompression 2.1.0.
  Installing Microsoft.AspNetCore.SpaServices.Extensions 2.1.0.
  Installing Microsoft.AspNetCore.DataProtection.Extensions 2.1.0.
  Installing Microsoft.AspNetCore.Owin 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.RazorPages 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.OpenIdConnect 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Cors 2.1.0.
  Installing Microsoft.AspNetCore.Http 2.1.0.
  Installing Microsoft.AspNetCore.HttpsPolicy 2.1.0.
  Installing Microsoft.AspNetCore.Hosting 2.1.0.
  Installing Microsoft.AspNetCore.Authentication 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.TagHelpers 2.1.0.
  Installing Microsoft.Extensions.Localization.Abstractions 2.1.0.
  Installing Microsoft.Extensions.Caching.Memory 2.1.0.
  Installing Microsoft.Extensions.ObjectPool 2.1.0.
  Installing Microsoft.AspNetCore.SignalR.Common 1.0.0.
  Installing Microsoft.AspNetCore.Authentication.MicrosoftAccount 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Facebook 2.1.0.
  Installing Microsoft.Extensions.Configuration.Json 2.1.0.
  Installing Microsoft.AspNetCore.Rewrite 2.1.0.
  Installing Microsoft.Extensions.Configuration.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Diagnostics 2.1.0.
  Installing Microsoft.AspNetCore.Localization 2.1.0.
  Installing Microsoft.Extensions.Logging.EventSource 2.1.0.
  Installing Microsoft.AspNetCore.DataProtection.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.SignalR.Protocols.Json 1.0.0.
  Installing Microsoft.AspNetCore.Http.Connections.Common 1.0.0.
  Installing Microsoft.Extensions.Logging.Abstractions 2.1.0.
  Installing Microsoft.EntityFrameworkCore.Analyzers 2.1.0.
  Installing Microsoft.Extensions.FileSystemGlobbing 2.1.0.
  Installing Microsoft.AspNetCore.JsonPatch 2.1.0.
  Installing Microsoft.AspNetCore.Cors 2.1.0.
  Installing Microsoft.Extensions.Configuration.Ini 2.1.0.
  Installing Microsoft.AspNetCore.Http.Connections 1.0.0.
  Installing Microsoft.AspNetCore.Authentication.JwtBearer 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Embedded 2.1.0.
  Installing Microsoft.AspNetCore.Cryptography.KeyDerivation 2.1.0.
  Installing Microsoft.AspNetCore.Http.Features 2.1.0.
  Installing Microsoft.AspNetCore.Routing 2.1.0.
  Installing Microsoft.Extensions.Options 2.1.0.
  Installing Microsoft.AspNetCore.Identity 2.1.0.
  Installing Microsoft.Extensions.Configuration 2.1.0.
  Installing Microsoft.Extensions.Http 2.1.0.
  Installing Microsoft.AspNetCore.Authentication.Cookies 2.1.0.
  Installing Microsoft.Extensions.Logging 2.1.0.
  Installing Microsoft.AspNetCore.CookiePolicy 2.1.0.
  Installing Microsoft.AspNetCore.Connections.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Localization 2.1.0.
  Installing Microsoft.Extensions.Hosting.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.ApiExplorer 2.1.0.
  Installing Microsoft.Extensions.Identity.Stores 2.1.0.
  Installing Microsoft.Extensions.Configuration.Binder 2.1.0.
  Installing Microsoft.AspNetCore.Html.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.DataAnnotations 2.1.0.
  Installing Microsoft.Extensions.Logging.Console 2.1.0.
  Installing Microsoft.AspNetCore.ResponseCaching 2.1.0.
  Installing Microsoft.Extensions.DependencyInjection.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore.Http.Abstractions 2.1.0.
  Installing Microsoft.AspNetCore 2.1.0.
  Installing Microsoft.Extensions.FileProviders.Physical 2.1.0.
  Installing Microsoft.AspNetCore.Mvc.Formatters.Json 2.1.0.
  Installing Microsoft.AspNetCore.Cryptography.Internal 2.1.0.
  Installing Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore 2.1.0.
  Generating MSBuild file /app/obj/Server.csproj.nuget.g.props.
  Generating MSBuild file /app/obj/Server.csproj.nuget.g.targets.
  Restore completed in 19.14 sec for /app/Server.csproj.
Removing intermediate container cceb64e9e13e
 ---> 7843a4563ac5
Step 5/7 : COPY . ./
 ---> f302935c8ff8
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Running in 496eb2c0c881
Microsoft (R) Build Engine version 15.8.169+g1ccb72aefa for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 66.98 ms for /app/Server.csproj.
  Server -> /app/bin/Release/netcoreapp2.1/Server.dll
  Server -> /app/out/
Removing intermediate container 496eb2c0c881
 ---> a7a839abf67b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Server.dll"]
 ---> Running in cb4d5ef9cfc1
Removing intermediate container cb4d5ef9cfc1
 ---> f58ef4e4f718
Successfully built f58ef4e4f718
Successfully tagged dotnet-core-complex_api:latest
WARNING: Image for service api was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
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
 ---> 05f63beca8d6
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in d05ead9d68bd
Removing intermediate container d05ead9d68bd
 ---> 69345cd3d745
Successfully built 69345cd3d745
Successfully tagged dotnet-core-complex_client:latest
WARNING: Image for service client was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Building worker
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> 6e771ba95601
Step 4/7 : RUN dotnet restore
 ---> Running in f6e1c814ffc2
  Restoring packages for /app/Worker.csproj...
  Installing Microsoft.CSharp 4.4.0.
  Installing System.Threading.Overlapped 4.3.0.
  Installing System.Runtime.CompilerServices.Unsafe 4.4.0.
  Installing ServiceStack.Text.Core 5.1.0.
  Installing System.Net.NetworkInformation 4.3.0.
  Installing Microsoft.Extensions.Primitives 2.0.0.
  Installing ServiceStack.Interfaces.Core 5.1.0.
  Installing ServiceStack.Common.Core 5.1.0.
  Installing System.Data.Common 4.3.0.
  Installing System.Net.Security 4.3.1.
  Installing ServiceStack.Redis.Core 5.1.0.
  Generating MSBuild file /app/obj/Worker.csproj.nuget.g.props.
  Generating MSBuild file /app/obj/Worker.csproj.nuget.g.targets.
  Restore completed in 6.61 sec for /app/Worker.csproj.
Removing intermediate container f6e1c814ffc2
 ---> f7eefd987ee0
Step 5/7 : COPY . ./
 ---> 33e7be250bba
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Running in c8b585f8c0d1
Microsoft (R) Build Engine version 15.8.169+g1ccb72aefa for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 67.91 ms for /app/Worker.csproj.
  Worker -> /app/bin/Release/netcoreapp2.1/Worker.dll
  Worker -> /app/out/
Removing intermediate container c8b585f8c0d1
 ---> b19c4af9847b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Worker.dll"]
 ---> Running in 828af9b446c6
Removing intermediate container 828af9b446c6
 ---> 3749176f621e
Successfully built 3749176f621e
Successfully tagged dotnet-core-complex_worker:latest
WARNING: Image for service worker was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating dotnet-core-complex_client_1 ...
Creating dotnet-core-complex_worker_1 ...
Creating dotnet-core-complex_redis_1  ...
Creating dotnet-core-complex_client_1   ... done
Creating dotnet-core-complex_worker_1   ... done
Creating dotnet-core-complex_redis_1    ... done
Creating dotnet-core-complex_api_1      ... done
ERROR: for dotnet-core-complex_nginx_1  Cannot start service nginx: driver failed programming external connectivity on endpoint dotnet-core-complex_nginx_1 (ca0b74312930b24521bdc4504e69Creating dotnet-core-complex_postgres_1 ... done

ERROR: for nginx  Cannot start service nginx: driver failed programming external connectivity on endpoint dotnet-core-complex_nginx_1 (ca0b74312930b24521bdc4504e69a4ba843c1d63a8b5b11056087ec06578fa86): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:3050:tcp:172.18.0.4:80: input/output error
ERROR: Encountered errors while bringing up the project.
```
- Make the changes to make it work
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker-compose up --build
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> a57be744b271
Successfully built a57be744b271
Successfully tagged dotnet-core-complex_nginx:latest
Building api
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> Using cache
 ---> 9c3405f88284
Step 4/7 : RUN dotnet restore
 ---> Using cache
 ---> 7843a4563ac5
Step 5/7 : COPY . ./
 ---> Using cache
 ---> f302935c8ff8
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Using cache
 ---> a7a839abf67b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Server.dll"]
 ---> Using cache
 ---> f58ef4e4f718
Successfully built f58ef4e4f718
Successfully tagged dotnet-core-complex_api:latest
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
 ---> Using cache
 ---> 05f63beca8d6
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Using cache
 ---> 69345cd3d745
Successfully built 69345cd3d745
Successfully tagged dotnet-core-complex_client:latest
Building worker
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> Using cache
 ---> 6e771ba95601
Step 4/7 : RUN dotnet restore
 ---> Using cache
 ---> f7eefd987ee0
Step 5/7 : COPY . ./
 ---> Using cache
 ---> 33e7be250bba
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Using cache
 ---> b19c4af9847b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Worker.dll"]
 ---> Using cache
 ---> 3749176f621e
Successfully built 3749176f621e
Successfully tagged dotnet-core-complex_worker:latest
Starting dotnet-core-complex_redis_1    ... done
Starting dotnet-core-complex_postgres_1 ... done
Starting dotnet-core-complex_api_1      ... done
Starting dotnet-core-complex_worker_1   ... done
Starting dotnet-core-complex_client_1   ... done
Starting dotnet-core-complex_nginx_1    ... done
Attaching to dotnet-core-complex_redis_1, dotnet-core-complex_postgres_1, dotnet-core-complex_api_1, dotnet-core-complex_worker_1, dotnet-core-complex_client_1, dotnet-core-complex_nginx_1
redis_1     | 1:C 11 Nov 2018 18:11:57.285 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 11 Nov 2018 18:11:57.285 # Redis version-5.0.0, bits-64, commit-00000000, modified-0, pid-1, just started
redis_1     | 1:C 11 Nov 2018 18:11:57.285 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 11 Nov 2018 18:11:57.290 * Running mode-standalone, port-6379.
redis_1     | 1:M 11 Nov 2018 18:11:57.290 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 11 Nov 2018 18:11:57.290 # Server initialized
redis_1     | 1:M 11 Nov 2018 18:11:57.291 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 11 Nov 2018 18:11:57.291 * Ready to accept connections
postgres_1  | 2018-11-11 18:11:58.019 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-11 18:11:58.019 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-11 18:11:58.034 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-11 18:11:58.064 UTC [21] LOG:  database system was interrupted; last known up at 2018-11-11 17:44:51 UTC
postgres_1  | 2018-11-11 18:11:59.642 UTC [21] LOG:  database system was not properly shut down; automatic recovery in progress
postgres_1  | 2018-11-11 18:11:59.649 UTC [21] LOG:  redo starts at 0/1650E68
postgres_1  | 2018-11-11 18:11:59.649 UTC [21] LOG:  invalid record length at 0/1650F48: wanted 24, got 0
postgres_1  | 2018-11-11 18:11:59.651 UTC [21] LOG:  redo done at 0/1650F10
postgres_1  | 2018-11-11 18:11:59.755 UTC [1] LOG:  database system is ready to accept connections
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
worker_1    | No executable found matching command "dotnet-out/Worker.dll"
api_1       | No executable found matching command "dotnet-out/Server.dll"
dotnet-core-complex_worker_1 exited with code 1
dotnet-core-complex_api_1 exited with code 1
client_1    | Starting the development server...
client_1    |
client_1    | Compiled successfully!
client_1    |
client_1    | You can now view client in the browser.
client_1    |
client_1    |   Local:            http://localhost:3000/
client_1    |   On Your Network:  http://172.18.0.4:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
client_1    |
```
- Change the `server Dockerfile`
> `Dockerfile`
```docker
FROM microsoft/dotnet:2.1-sdk AS build-env
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from-build-env /app/out .
ENTRYPOINT ["dotnet", "Server.dll"]
```
- Change the `worker Dockerfile`
> `Dockerfile`
```docker
FROM microsoft/dotnet:2.1-sdk AS build-env
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from-build-env /app/out .
ENTRYPOINT ["dotnet", "Worker.dll"]
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker-compose up --build
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> a57be744b271
Successfully built a57be744b271
Successfully tagged dotnet-core-complex_nginx:latest
Building api
Step 1/10 : FROM microsoft/dotnet:2.1-sdk AS build-env
 ---> 6baac5bd0ea2
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/10 : COPY *.csproj ./
 ---> Using cache
 ---> 9c3405f88284
Step 4/10 : RUN dotnet restore
 ---> Using cache
 ---> 7843a4563ac5
Step 5/10 : COPY . ./
 ---> f000e0833a79
Step 6/10 : RUN dotnet publish -c Release -o out
 ---> Running in 2d0fbcae73c9
Microsoft (R) Build Engine version 15.8.169+g1ccb72aefa for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 579.58 ms for /app/Server.csproj.
  Server -> /app/bin/Release/netcoreapp2.1/Server.dll
  Server -> /app/out/
Removing intermediate container 2d0fbcae73c9
 ---> c939966c14c9
Step 7/10 : FROM microsoft/dotnet:aspnetcore-runtime
aspnetcore-runtime: Pulling from microsoft/dotnet
f17d81b4b692: Already exists
b89e58f928f1: Pull complete
ed484e612149: Pull complete
e354f96b5b0e: Pull complete
Digest: sha256:2f52f2ea349384f0f2adbef756f68414eb2fba4857c140f98e8eaa4961eded5a
Status: Downloaded newer image for microsoft/dotnet:aspnetcore-runtime
 ---> 1fe6774e5e9e
Step 8/10 : WORKDIR /app
 ---> Running in f22c18c9263c
Removing intermediate container f22c18c9263c
 ---> f417d56a0e06
Step 9/10 : COPY --from-build-env /app/out .
 ---> 1b1531233816
Step 10/10 : ENTRYPOINT ["dotnet", "Server.dll"]
 ---> Running in 7f9e34527f81
Removing intermediate container 7f9e34527f81
 ---> 81894d527ba6
Successfully built 81894d527ba6
Successfully tagged dotnet-core-complex_api:latest
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
 ---> Using cache
 ---> 05f63beca8d6
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Using cache
 ---> 69345cd3d745
Successfully built 69345cd3d745
Successfully tagged dotnet-core-complex_client:latest
Building worker
Step 1/10 : FROM microsoft/dotnet:2.1-sdk AS build-env
 ---> 6baac5bd0ea2
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/10 : COPY *.csproj ./
 ---> Using cache
 ---> 6e771ba95601
Step 4/10 : RUN dotnet restore
 ---> Using cache
 ---> f7eefd987ee0
Step 5/10 : COPY . ./
 ---> 41a03376fdbf
Step 6/10 : RUN dotnet publish -c Release -o out
 ---> Running in 30633038f8f6
Microsoft (R) Build Engine version 15.8.169+g1ccb72aefa for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 146.2 ms for /app/Worker.csproj.
  Worker -> /app/bin/Release/netcoreapp2.1/Worker.dll
  Worker -> /app/out/
Removing intermediate container 30633038f8f6
 ---> ffceaf05633a
Step 7/10 : FROM microsoft/dotnet:aspnetcore-runtime
 ---> 1fe6774e5e9e
Step 8/10 : WORKDIR /app
 ---> Using cache
 ---> f417d56a0e06
Step 9/10 : COPY --from-build-env /app/out .
 ---> b0b0ade8ac50
Step 10/10 : ENTRYPOINT ["dotnet", "Worker.dll"]
 ---> Running in 083db43e23b1
Removing intermediate container 083db43e23b1
 ---> 700522f60c71
Successfully built 700522f60c71
Successfully tagged dotnet-core-complex_worker:latest
Starting dotnet-core-complex_redis_1    ... done
Starting dotnet-core-complex_postgres_1 ... done
Recreating dotnet-core-complex_api_1    ... done
Recreating dotnet-core-complex_worker_1 ... done
Starting dotnet-core-complex_client_1   ... done
Starting dotnet-core-complex_nginx_1    ... done
Attaching to dotnet-core-complex_redis_1, dotnet-core-complex_nginx_1, dotnet-core-complex_postgres_1, dotnet-core-complex_client_1, dotnet-core-complex_worker_1, dotnet-core-complex_api_1
redis_1     | 1:C 11 Nov 2018 18:30:38.381 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 11 Nov 2018 18:30:38.381 # Redis version-5.0.0, bits-64, commit-00000000, modified-0, pid-1, just started
redis_1     | 1:C 11 Nov 2018 18:30:38.381 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 11 Nov 2018 18:30:38.402 * Running mode-standalone, port-6379.
redis_1     | 1:M 11 Nov 2018 18:30:38.402 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 11 Nov 2018 18:30:38.402 # Server initialized
redis_1     | 1:M 11 Nov 2018 18:30:38.402 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 11 Nov 2018 18:30:38.414 * DB loaded from disk: 0.012 seconds
redis_1     | 1:M 11 Nov 2018 18:30:38.414 * Ready to accept connections
worker_1    | Did you mean to run dotnet SDK commands? Please install dotnet SDK from:
worker_1    |   http://go.microsoft.com/fwlink/?LinkID-798306&clcid-0x409
api_1       | Did you mean to run dotnet SDK commands? Please install dotnet SDK from:
api_1       |   http://go.microsoft.com/fwlink/?LinkID-798306&clcid-0x409
postgres_1  | 2018-11-11 18:30:39.645 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-11 18:30:39.645 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-11 18:30:39.677 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
dotnet-core-complex_api_1 exited with code 145
postgres_1  | 2018-11-11 18:30:39.810 UTC [22] LOG:  database system was shut down at 2018-11-11 18:28:40 UTC
dotnet-core-complex_worker_1 exited with code 145
postgres_1  | 2018-11-11 18:30:39.885 UTC [1] LOG:  database system is ready to accept connections
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
client_1    |   On Your Network:  http://172.18.0.4:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
client_1    |
```
- Revert `Server Dockerfile`
> `Dockerfile`
```docker
FROM microsoft/dotnet:2.1-sdk
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/Server.dll"]
```
- Revert `Worker Dockerfile`
> `Dockerfile`
```docker
FFROM microsoft/dotnet:2.1-sdk
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and build everything else
COPY . ./
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/Worker.dll"]
```
- Revert `docker-compose.yml`
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
      dockerfile: Dockerfile
      context: ./Server
    environment:
      - REDIS_HOST-redis
      - REDIS_PORT-6379
      - PGUSER-postgres
      - PGHOST-postgres
      - PGDATABASE-postgres
      - PGPASSWORD-postgres_password
      - PGPORT-5432
  client:
    build: 
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - /app/node_modules
      - ./client:/app
  worker:
    build: 
      dockerfile: Dockerfile
      context: ./Worker
    environment:
        - REDIS_HOST-redis
        - REDIS_PORT-6379      
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker-compose up --build
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> a57be744b271
Successfully built a57be744b271
Successfully tagged dotnet-core-complex_nginx:latest
Building api
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> Using cache
 ---> 9c3405f88284
Step 4/7 : RUN dotnet restore
 ---> Using cache
 ---> 7843a4563ac5
Step 5/7 : COPY . ./
 ---> Using cache
 ---> f302935c8ff8
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Using cache
 ---> a7a839abf67b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Server.dll"]
 ---> Using cache
 ---> f58ef4e4f718
Successfully built f58ef4e4f718
Successfully tagged dotnet-core-complex_api:latest
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
 ---> Using cache
 ---> 05f63beca8d6
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Using cache
 ---> 69345cd3d745
Successfully built 69345cd3d745
Successfully tagged dotnet-core-complex_client:latest
Building worker
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> Using cache
 ---> 6e771ba95601
Step 4/7 : RUN dotnet restore
 ---> Using cache
 ---> f7eefd987ee0
Step 5/7 : COPY . ./
 ---> Using cache
 ---> 33e7be250bba
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Using cache
 ---> b19c4af9847b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Worker.dll"]
 ---> Using cache
 ---> 3749176f621e
Successfully built 3749176f621e
Successfully tagged dotnet-core-complex_worker:latest
Starting dotnet-core-complex_client_1   ... done
Recreating dotnet-core-complex_api_1    ... done
Starting dotnet-core-complex_nginx_1    ... done
Recreating dotnet-core-complex_worker_1 ... done
Starting dotnet-core-complex_postgres_1 ... done
Starting dotnet-core-complex_redis_1    ... done
Attaching to dotnet-core-complex_nginx_1, dotnet-core-complex_client_1, dotnet-core-complex_redis_1, dotnet-core-complex_postgres_1, dotnet-core-complex_api_1, dotnet-core-complex_worker_1
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
redis_1     | 1:C 11 Nov 2018 19:25:45.353 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 11 Nov 2018 19:25:45.353 # Redis version-5.0.0, bits-64, commit-00000000, modified-0, pid-1, just started
redis_1     | 1:C 11 Nov 2018 19:25:45.353 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 11 Nov 2018 19:25:45.355 * Running mode-standalone, port-6379.
redis_1     | 1:M 11 Nov 2018 19:25:45.355 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 11 Nov 2018 19:25:45.355 # Server initialized
redis_1     | 1:M 11 Nov 2018 19:25:45.355 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 11 Nov 2018 19:25:45.355 * DB loaded from disk: 0.000 seconds
redis_1     | 1:M 11 Nov 2018 19:25:45.355 * Ready to accept connections
postgres_1  | 2018-11-11 19:25:45.987 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-11 19:25:45.987 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-11 19:25:46.032 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-11 19:25:46.224 UTC [21] LOG:  database system was shut down at 2018-11-11 19:25:32 UTC
postgres_1  | 2018-11-11 19:25:46.300 UTC [1] LOG:  database system is ready to accept connections
api_1       | info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
api_1       |       User profile is available. Using '/root/.aspnet/DataProtection-Keys' as key repository; keys will not be encrypted at rest.
api_1       | info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[58]
api_1       |       Creating key {3433e7f1-9fd9-400b-921d-db97972f3e0c} with creation date 2018-11-11 19:25:49Z, activation date 2018-11-11 19:25:49Z, and expiration date 2019-02-09 19:25:49Z.
api_1       | warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
api_1       |       No XML encryptor configured. Key {3433e7f1-9fd9-400b-921d-db97972f3e0c} may be persisted to storage in unencrypted form.
api_1       | info: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository[39]
api_1       |       Writing data to file '/root/.aspnet/DataProtection-Keys/key-3433e7f1-9fd9-400b-921d-db97972f3e0c.xml'.
api_1       | info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
api_1       |       Entity Framework Core 2.1.4-rtm-31024 initialized 'DataContext' using provider 'Npgsql.EntityFrameworkCore.PostgreSQL' with options: None
api_1       | info: Microsoft.EntityFrameworkCore.Database.Command[20101]
api_1       |       Executed DbCommand (146ms) [Parameters-[], CommandType-'Text', CommandTimeout-'30']
api_1       |       CREATE TABLE IF NOT EXISTS Values (id SERIAL PRIMARY KEY, Number INT)
api_1       | warn: Microsoft.AspNetCore.Server.Kestrel[0]
api_1       |       Unable to bind to http://localhost:5000 on the IPv6 loopback interface: 'Cannot assign requested address'.
api_1       | Hosting environment: Production
api_1       | Content root path: /app
api_1       | Now listening on: http://localhost:5000
api_1       | Application started. Press Ctrl+C to shut down.
client_1    | Starting the development server...
client_1    |
client_1    | Compiled successfully!
client_1    |
client_1    | You can now view client in the browser.
client_1    |
client_1    |   Local:            http://localhost:3000/
client_1    |   On Your Network:  http://172.18.0.2:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
client_1    |
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:49 +0000] "GET / HTTP/1.1" 200 825 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:49 +0000] "GET /static/js/bundle.js HTTP/1.1" 200 6376 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:49 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 200 424535 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:49 +0000] "GET /static/js/main.chunk.js HTTP/1.1" 200 5471 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:50 +0000] "GET /static/js/bundle.js.map HTTP/1.1" 200 6404 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:50 +0000] "GET /static/media/logo.5d5d9eef.svg HTTP/1.1" 200 1320 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:50 +0000] "GET /api/values/current HTTP/1.1" 502 559 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:50 +0000] "GET /api/values/all HTTP/1.1" 502 559 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 2018/11/11 19:28:50 [error] 6#6: *3 connect() failed (111: Connection refused) while connecting to upstream, client: 172.18.0.1, server: , request: "GET /api/values/current HTTP/1.1", upstream: "http://172.18.0.7:5000/values/current", host: "localhost:3050", referrer: "http://localhost:3050/"
nginx_1     | 2018/11/11 19:28:50 [error] 6#6: *6 connect() failed (111: Connection refused) while connecting to upstream, client: 172.18.0.1, server: , request: "GET /api/values/all HTTP/1.1", upstream: "http://172.18.0.7:5000/values/all", host: "localhost:3050", referrer: "http://localhost:3050/"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:50 +0000] "GET /static/js/main.chunk.js.map HTTP/1.1" 200 4421 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:51 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423554 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:51 +0000] "GET /sockjs-node/info?t-1541964531477 HTTP/1.1" 200 90 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:51 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 200 424504 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:51 +0000] "GET /manifest.json HTTP/1.1" 200 306 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:51 +0000] "GET /favicon.ico HTTP/1.1" 200 3473 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:52 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 200 424535 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:53 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423546 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:28:53 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423546 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:18 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:19 +0000] "GET /static/js/bundle.js HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:19 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:19 +0000] "GET /static/js/main.chunk.js HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /static/media/logo.5d5d9eef.svg HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 2018/11/11 19:31:20 [error] 6#6: *30 connect() failed (111: Connection refused) while connecting to upstream, client: 172.18.0.1, server: , request: "GET /api/values/current HTTP/1.1", upstream: "http://172.18.0.7:5000/values/current", host: "localhost:3050", referrer: "http://localhost:3050/"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /api/values/current HTTP/1.1" 502 559 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 2018/11/11 19:31:20 [error] 6#6: *27 connect() failed (111: Connection refused) while connecting to upstream, client: 172.18.0.1, server: , request: "GET /api/values/all HTTP/1.1", upstream: "http://172.18.0.7:5000/values/all", host: "localhost:3050", referrer: "http://localhost:3050/"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /api/values/all HTTP/1.1" 502 559 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /sockjs-node/info?t-1541964680576 HTTP/1.1" 200 90 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:20 +0000] "GET /manifest.json HTTP/1.1" 304 0 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:25 +0000] "GET /static/js/bundle.js.map HTTP/1.1" 200 6404 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:25 +0000] "GET /static/js/main.chunk.js.map HTTP/1.1" 200 4421 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:26 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423546 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:32 +0000] "GET / HTTP/1.1" 200 825 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:32 +0000] "GET /sockjs-node/034/hwmmu2a0/websocket HTTP/1.1" 101 165 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:32 +0000] "GET /static/js/main.chunk.js HTTP/1.1" 200 5471 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:32 +0000] "GET /static/js/bundle.js HTTP/1.1" 200 6376 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:32 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 200 424535 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:33 +0000] "GET /static/js/bundle.js.map HTTP/1.1" 200 6404 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:33 +0000] "GET /static/media/logo.5d5d9eef.svg HTTP/1.1" 200 1320 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 2018/11/11 19:31:33 [error] 6#6: *27 connect() failed (111: Connection refused) while connecting to upstream, client: 172.18.0.1, server: , request: "GET /api/values/current HTTP/1.1", upstream: "http://172.18.0.7:5000/values/current", host: "localhost:3050", referrer: "http://localhost:3050/"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:33 +0000] "GET /api/values/current HTTP/1.1" 502 559 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 2018/11/11 19:31:33 [error] 6#6: *30 connect() failed (111: Connection refused) while connecting to upstream, client: 172.18.0.1, server: , request: "GET /api/values/all HTTP/1.1", upstream: "http://172.18.0.7:5000/values/all", host: "localhost:3050", referrer: "http://localhost:3050/"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:33 +0000] "GET /api/values/all HTTP/1.1" 502 559 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:33 +0000] "GET /static/js/main.chunk.js.map HTTP/1.1" 200 4421 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:33 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423554 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:34 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 200 424535 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:34 +0000] "GET /sockjs-node/info?t-1541964694009 HTTP/1.1" 200 90 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:34 +0000] "GET /static/js/0.chunk.js HTTP/1.1" 200 424535 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:34 +0000] "GET /manifest.json HTTP/1.1" 200 306 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:34 +0000] "GET /favicon.ico HTTP/1.1" 200 3473 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:35 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423546 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
nginx_1     | 172.18.0.1 - - [11/Nov/2018:19:31:35 +0000] "GET /static/js/0.chunk.js.map HTTP/1.1" 200 423546 "http://localhost:3050/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36" "-"
```
- Change `program.cs` in `server` project
- Change from `.UseUrls("http://localhost:5000/")` to `.UseUrls("http://*:5000/")`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker-compose up --build
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> a57be744b271
Successfully built a57be744b271
Successfully tagged dotnet-core-complex_nginx:latest
Building api
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> Using cache
 ---> 9c3405f88284
Step 4/7 : RUN dotnet restore
 ---> Using cache
 ---> 7843a4563ac5
Step 5/7 : COPY . ./
 ---> Using cache
 ---> 2b6ae269296b
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Using cache
 ---> 5fe768c35faa
Step 7/7 : ENTRYPOINT ["dotnet", "out/Server.dll"]
 ---> Using cache
 ---> 786463ebc1bd
Successfully built 786463ebc1bd
Successfully tagged dotnet-core-complex_api:latest
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
 ---> 18904fb87e43
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Running in 1fc910a77f8e
Removing intermediate container 1fc910a77f8e
 ---> e958e0c11cb4
Successfully built e958e0c11cb4
Successfully tagged dotnet-core-complex_client:latest
Building worker
Step 1/7 : FROM microsoft/dotnet:2.1-sdk
 ---> 6baac5bd0ea2
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 12f96f663188
Step 3/7 : COPY *.csproj ./
 ---> Using cache
 ---> 6e771ba95601
Step 4/7 : RUN dotnet restore
 ---> Using cache
 ---> f7eefd987ee0
Step 5/7 : COPY . ./
 ---> Using cache
 ---> 33e7be250bba
Step 6/7 : RUN dotnet publish -c Release -o out
 ---> Using cache
 ---> b19c4af9847b
Step 7/7 : ENTRYPOINT ["dotnet", "out/Worker.dll"]
 ---> Using cache
 ---> 3749176f621e
Successfully built 3749176f621e
Successfully tagged dotnet-core-complex_worker:latest
Starting dotnet-core-complex_nginx_1    ... done
Starting dotnet-core-complex_postgres_1 ... done
Starting dotnet-core-complex_worker_1   ... done
Starting dotnet-core-complex_api_1      ... done
Starting dotnet-core-complex_redis_1    ... done
Recreating dotnet-core-complex_client_1 ... done
Attaching to dotnet-core-complex_nginx_1, dotnet-core-complex_postgres_1, dotnet-core-complex_api_1, dotnet-core-complex_redis_1, dotnet-core-complex_client_1, dotnet-core-complex_worker_1
postgres_1  | 2018-11-12 07:48:22.288 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-12 07:48:22.288 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-12 07:48:22.330 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-12 07:48:22.382 UTC [21] LOG:  database system was interrupted; last known up at 2018-11-12 07:48:12 UTC
postgres_1  | 2018-11-12 07:48:22.668 UTC [21] LOG:  database system was not properly shut down; automatic recovery in progress
redis_1     | 1:C 12 Nov 2018 07:48:23.459 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 12 Nov 2018 07:48:23.459 # Redis version-5.0.0, bits-64, commit-00000000, modified-0, pid-1, just started
redis_1     | 1:C 12 Nov 2018 07:48:23.459 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 12 Nov 2018 07:48:23.461 * Running mode-standalone, port-6379.
redis_1     | 1:M 12 Nov 2018 07:48:23.461 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 12 Nov 2018 07:48:23.461 # Server initialized
redis_1     | 1:M 12 Nov 2018 07:48:23.461 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 12 Nov 2018 07:48:23.461 * DB loaded from disk: 0.000 seconds
redis_1     | 1:M 12 Nov 2018 07:48:23.461 * Ready to accept connections
postgres_1  | 2018-11-12 07:48:22.684 UTC [21] LOG:  redo starts at 0/16718B0
postgres_1  | 2018-11-12 07:48:22.685 UTC [21] LOG:  invalid record length at 0/1671958: wanted 24, got 0
postgres_1  | 2018-11-12 07:48:22.685 UTC [21] LOG:  redo done at 0/16718E8
postgres_1  | 2018-11-12 07:48:22.724 UTC [1] LOG:  database system is ready to accept connections
api_1       | info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
api_1       |       User profile is available. Using '/root/.aspnet/DataProtection-Keys' as key repository; keys will not be encrypted at rest.
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
api_1       | info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
api_1       |       Entity Framework Core 2.1.4-rtm-31024 initialized 'DataContext' using provider 'Npgsql.EntityFrameworkCore.PostgreSQL' with options: None
api_1       | info: Microsoft.EntityFrameworkCore.Database.Command[20101]
api_1       |       Executed DbCommand (11ms) [Parameters-[], CommandType-'Text', CommandTimeout-'30']
api_1       |       CREATE TABLE IF NOT EXISTS Values (id SERIAL PRIMARY KEY, Number INT)
api_1       | Hosting environment: Production
api_1       | Content root path: /app
api_1       | Now listening on: http://[::]:5000
api_1       | Application started. Press Ctrl+C to shut down.
client_1    | Starting the development server...
client_1    |
client_1    | Compiled successfully!
client_1    |
client_1    | You can now view client in the browser.
client_1    |
client_1    |   Local:            http://localhost:3000/
client_1    |   On Your Network:  http://172.21.0.7:3000/
client_1    |
client_1    | Note that the development build is not optimized.
client_1    | To create a production build, use yarn build.
```

4. Browse to `http://localhost:3050/`
```
logo
Fib Calculator (.NET Core)
Home
Other Page
Enter your index:
Submit
Indexes I have seen:
3, 12, 21, 9
Calculated Values:
For index 3 I calculated 3
For index 9 I calculated 55
For index 12 I calculated 233
For index 21 I calculated 17711
```

5. Commit and push the code
```bash
$ git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/README.md.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/public/index.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/public/manifest.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/App.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/App.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/App.test.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/Fib.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/OtherPage.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/index.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/logo.svg.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/src/serviceWorker.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/yarn.lock.
The file will have its original line endings in your working directory.
```
```bash
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   README.md
        new file:   Server/.dockerignore
        new file:   Server/Controllers/ValuesController.cs
        new file:   Server/Data/DataContext.cs
        new file:   Server/Data/DatabaseService.cs
        new file:   Server/Data/IDatabaseService.cs
        new file:   Server/Dockerfile
        new file:   Server/Models/Value.cs
        new file:   Server/Program.cs
        new file:   Server/Server.csproj
        new file:   Server/Startup.cs
        new file:   Worker/.dockerignore
        new file:   Worker/Dockerfile
        new file:   Worker/Program.cs
        new file:   Worker/Worker.csproj
        new file:   client/.dockerignore
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
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "initial commit"
[master (root-commit) 38d74e0] initial commit
 39 files changed, 9480 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 Server/.dockerignore
 create mode 100644 Server/Controllers/ValuesController.cs
 create mode 100644 Server/Data/DataContext.cs
 create mode 100644 Server/Data/DatabaseService.cs
 create mode 100644 Server/Data/IDatabaseService.cs
 create mode 100644 Server/Dockerfile
 create mode 100644 Server/Models/Value.cs
 create mode 100644 Server/Program.cs
 create mode 100644 Server/Server.csproj
 create mode 100644 Server/Startup.cs
 create mode 100644 Worker/.dockerignore
 create mode 100644 Worker/Dockerfile
 create mode 100644 Worker/Program.cs
 create mode 100644 Worker/Worker.csproj
 create mode 100644 client/.dockerignore
 create mode 100644 client/Dockerfile
 create mode 100644 client/Dockerfile.dev
 create mode 100644 client/README.md
 create mode 100644 client/nginx/default.conf
 create mode 100644 client/package.json
 create mode 100644 client/public/favicon.ico
 create mode 100644 client/public/index.html
 create mode 100644 client/public/manifest.json
 create mode 100644 client/src/App.css
 create mode 100644 client/src/App.js
 create mode 100644 client/src/App.test.js
 create mode 100644 client/src/Fib.js
 create mode 100644 client/src/OtherPage.js
 create mode 100644 client/src/index.css
 create mode 100644 client/src/index.js
 create mode 100644 client/src/logo.svg
 create mode 100644 client/src/serviceWorker.js
 create mode 100644 client/yarn.lock
 create mode 100644 docker-compose.yml
 create mode 100644 nginx/Dockerfile
 create mode 100644 nginx/Dockerfile.dev
 create mode 100644 nginx/default.conf
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git remote add origin https://github.com/peelmicro/dotnet-core-multi-docker.git
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin HEAD
Counting objects: 49, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (44/44), done.
Writing objects: 100% (49/49), 95.28 KiB | 1.40 MiB/s, done.
Total 49 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/peelmicro/dotnet-core-multi-docker/pull/new/master
remote:
To https://github.com/peelmicro/dotnet-core-multi-docker.git
 * [new branch]      HEAD -> master
```
6. Ensure `Travis CI` is executed correctly
> `Travis CI - View config`
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
  "before_install": [
    "docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client"
  ]
}
```
```bash
Worker information
hostname: 3411bf26-9ce0-4f19-add5-a392657f6864@1.production-2-worker-com-gce-d5v8
version: v4.6.2 https://github.com/travis-ci/worker/tree/7004f7c9e22c7896b5b35cec84e6912047c55c3e
instance: travis-job-1f164355-ddd9-4d45-bdbb-5f6f76be802a travis-ci-garnet-trusty-1512502259-986baf0 (via amqp)
startup: 9.468613542s
system_info
Build system information
Build language: node_js
Build group: stable
Build dist: trusty
Build id: 91031475
Job id: 157863699
.
.
.
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
Time:        4.53s
Ran all test suites.
The command "docker run peelmicro/test-client npm run test -- --coverage" exited with 0.
Done. Your build exited with 0.
```
7. Add the `environment variables` on `Travis CI`
- The following setting variables have been added:

DOCKER_ID: `peelmicro`

DOCKER_PASSWORD: `xxxxxxxxxxxxxxxxxx`

8. Modify `.travis.yml` to include the generation of the `Docker images` and that they are pushed to `Docker Hub`
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
  - docker build -t peelmicro/dotnet-core-multi-client ./client
  - docker build -t peelmicro/dotnet-core-multi-nginx ./nginx
  - docker build -t peelmicro/dotnet-core-multi-server ./server
  - docker build -t peelmicro/dotnet-core-multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/dotnet-core-multi-client
  - docker push peelmicro/dotnet-core-multi-nginx
  - docker push peelmicro/dotnet-core-multi-server
  - docker push peelmicro/dotnet-core-multi-worker
#deploy:
#  provider: elasticbeanstalk
#  region: "us-east-1"
#  app: "muti-docker"
#  env: "MutiDocker-env"
#  bucket_name: "elasticbeanstalk-us-east-1-972569889348"
#  #bucket_path: ""
#  on:
#    branch: "master"
#  access_key_id: $AWS_ACCESS_KEY
#  secret_access_key:
#    secure: "$AWS_SECRET_KEY"
```
9. Commit and push the code again
```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .travis.yml

no changes added to commit (use "git add" and/or "git commit -a")
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "Added after_success to .travis.yml2"
[master ac3bd8a] Added after_success to .travis.yml2
 1 file changed, 12 insertions(+), 12 deletions(-)
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin HEAD
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 391 bytes | 130.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/dotnet-core-multi-docker.git
   866f1b2..ac3bd8a  HEAD -> master
```

10. Ensure the `Travis CI` generates the images
```bash
Worker information
hostname: 143e01e5-cff7-4d19-97e4-2a40dc55c174@1.production-2-worker-com-gce-d5v8
version: v4.6.2 https://github.com/travis-ci/worker/tree/7004f7c9e22c7896b5b35cec84e6912047c55c3e
instance: travis-job-79e801c2-feea-4867-b780-8811825426a7 travis-ci-garnet-trusty-1512502259-986baf0 (via amqp)
startup: 6.699860929s
system_info
Build system information
Build language: node_js
Build group: stable
Build dist: trusty
Build id: 91032318
Job id: 157865065
.
.
.
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
Time:        2.329s
Ran all test suites.
The command "docker run [secure]/test-client npm run test -- --coverage" exited with 0.
after_success.1
65.64s$ docker build -t [secure]/dotnet-core-multi-client ./client
Sending build context to Docker daemon  340.5kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 41cfa8a15ba4
Step 3/10 : COPY ./package.json ./
 ---> 7ac8d50c7aef
Step 4/10 : RUN npm install
 ---> Running in be62cd9639cc
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 34.676s
found 0 vulnerabilities
 ---> ce29ce151642
Removing intermediate container be62cd9639cc
Step 5/10 : COPY . .
 ---> d1df980c27a8
Step 6/10 : RUN npm run build
 ---> Running in 14c44d59a115
> client@0.1.0 build /app
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  47.24 KB  build/static/js/1.e5a12c45.chunk.js
  1.38 KB   build/static/js/main.a0376e20.chunk.js
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
 ---> 2f095f209ab0
Removing intermediate container 14c44d59a115
Step 7/10 : FROM nginx
latest: Pulling from library/nginx
f17d81b4b692: Pulling fs layer
82dca86e04c3: Pulling fs layer
046ccb106982: Pulling fs layer
046ccb106982: Download complete
f17d81b4b692: Verifying Checksum
f17d81b4b692: Download complete
82dca86e04c3: Verifying Checksum
82dca86e04c3: Download complete
f17d81b4b692: Pull complete
82dca86e04c3: Pull complete
046ccb106982: Pull complete
Digest: sha256:d59a1aa7866258751a261bae525a1842c7ff0662d4f34a355d5f36826abc0341
Status: Downloaded newer image for nginx:latest
 ---> 62f816a209e6
Step 8/10 : EXPOSE 3000
 ---> Running in 3da74d97ef16
 ---> f2f803715998
Removing intermediate container 3da74d97ef16
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> 178862f8fbc0
Step 10/10 : COPY --from-builder /app/build /usr/share/nginx/html
 ---> 05e0881da783
Successfully built 05e0881da783
Successfully tagged [secure]/dotnet-core-multi-client:latest
after_success.2
0.22s$ docker build -t [secure]/dotnet-core-multi-nginx ./nginx
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> 62f816a209e6
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> 7451356df427
Successfully built 7451356df427
Successfully tagged [secure]/dotnet-core-multi-nginx:latest
after_success.3
0.02s$ docker build -t [secure]/dotnet-core-multi-server ./server
unable to prepare context: path "./server" not found
after_success.4
0.02s$ docker build -t [secure]/dotnet-core-multi-worker ./worker
unable to prepare context: path "./worker" not found
after_success.5
0.57s$ echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
Login Succeeded
after_success.6
4.49s$ docker push [secure]/dotnet-core-multi-client
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-client]
e96365024720: Preparing
9e05bf1e403f: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Mounted from library/nginx
6ccbee34dd10: Mounted from library/nginx
237472299760: Mounted from library/nginx
9e05bf1e403f: Pushed
e96365024720: Pushed
latest: digest: sha256:aaeef68c55b6d7dcaa49e2320869651a45145c929574f36e375a7967c6ed3a08 size: 1365
after_success.7
4.35s$ docker push [secure]/dotnet-core-multi-nginx
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-nginx]
28d74af677e5: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Mounted from [secure]/dotnet-core-multi-client
237472299760: Mounted from [secure]/dotnet-core-multi-client
6ccbee34dd10: Mounted from [secure]/dotnet-core-multi-client
28d74af677e5: Pushed
latest: digest: sha256:5b979ba674eff2e8ab549428ad2f8617d9b3d0ef01f8d4f2020e09e532cae094 size: 1155
after_success.8
0.03s$ docker push [secure]/dotnet-core-multi-server
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-server]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-server
after_success.9
0.03s$ docker push [secure]/dotnet-core-multi-worker
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-worker]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-worker
Done. Your build exited with 0.
```

### Create the sevices on `Amazon AWS`
1. Modify `.travis.yml` to include the deployment on `Amazon AWS`
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
  - docker build -t peelmicro/dotnet-core-multi-client ./client
  - docker build -t peelmicro/dotnet-core-multi-nginx ./nginx
  - docker build -t peelmicro/dotnet-core-multi-server ./server
  - docker build -t peelmicro/dotnet-core-multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/dotnet-core-multi-client
  - docker push peelmicro/dotnet-core-multi-nginx
  - docker push peelmicro/dotnet-core-multi-server
  - docker push peelmicro/dotnet-core-multi-worker
deploy:
  provider: elasticbeanstalk
  region: "us-east-1"
  app: "dotnet-core-muti-docker"
  env: "DotnetCoreMutiDocker-env"
  bucket_name: "elasticbeanstalk-us-east-1-972569889348"
  #bucket_path: ""
  on:
    branch: "master"
  access_key_id: $AWS_ACCESS_KEY
  secret_access_key:
    secure: "$AWS_SECRET_KEY"
```

2. Create the `Dockerrun.aws.json` file
> `Dockerrun.aws.json`
```json
{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "peelmicro/dotnet-core-multi-client",
      "hostname": "client",
      "essential": false,
      "memory": 128
    },
    {
      "name": "server",
      "image": "peelmicro/dotnet-core-multi-server",
      "hostname": "api",
      "essential": false,
      "memory": 128
    },
    {
      "name": "worker",
      "image": "peelmicro/dotnet-core-multi-worker",
      "hostname": "worker",
      "essential": false,
      "memory": 128
    },
    {
      "name": "nginx",
      "image": "peelmicro/dotnet-core-multi-nginx",
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
3. Create new application in `AWS Elastic Beanstalk`
- Go to `https://console.aws.amazon.com/elasticbeanstalk/home?region-us-east-1#/welcome`
- Clik on `Create New Applicacion`

Create New Application

Application Name: `dotnet-core-muti-docker`

Description: 

- Click on `Create`

- Click on `Create one now`
- Select `Web server environment` and click on `Select`

Application name: `dotnet-core-muti-docker`

Environment name: `DotnetCoreMutiDocker-env`

- Select Platform: `Multi-container Docker`
- Click on `Create Environment`
```
10:17am
Environment health has transitioned from Pending to Ok. Initialization completed 16 seconds ago and took 5 minutes.
10:17am
Successfully launched environment: DotnetCoreMutiDocker-env
10:17am
Application available at DotnetCoreMutiDocker-env.fzi9uupmiy.us-east-1.elasticbeanstalk.com.
10:16am
ECS task: arn:aws:ecs:us-east-1:972569889348:task/0a510dc6-9c1d-42cc-bb28-787b7e3e93cf is RUNNING.
10:16am
Starting new ECS task with awseb-DotnetCoreMutiDocker-env-p33qnysnga:1.
10:14am
Added instance [i-02a3055d33a3dff80] to your environment.
10:13am
Waiting for EC2 instances to launch. This may take a few minutes.
10:12am
Created EIP: 54.157.223.30
10:12am
Environment health has transitioned to Pending. Initialization in progress (running for 6 seconds). There are no instances.
10:12am
Created security group named:
awseb-e-p33qnysnga-stack-AWSEBSecurityGroup-18LZQS0T12BN6
10:11am
Using elasticbeanstalk-us-east-1-972569889348 as Amazon S3 storage bucket for environment data.
10:11am
createEnvironment is starting.
```
- Browse to `http://dotnetcoremutidocker-env.fzi9uupmiy.us-east-1.elasticbeanstalk.com/`

4. Add AWS `Relational Database Service (RDS)`
- On https://console.aws.amazon.com/rds/home?region-us-east-1# look for `Create Database` and click on it.
- Select `PostgreSQL`, mark `[X] Only enable options eligible for RDS Free Usage Tier` and then click on `Next`

License model: `postgresql-license`

Db engine version: `PostgreSQL 10.4-R1`

Db Instance class: `db.t2.micro - 1 vCPU, 1 GiB RAM`

Allocated storaged: `20 GiB`

DB instance identifier: `dotnet-core-multi-docker-postgres`

Master username: `postgres`

Master password: `postgres_password`

Confirm password: `postgres_password` 

- Click on `Next`

Virtual Private Cloud (VPC): `Default VPC (vpc-2c2e8936)`

Subnet group: `default`

Public accessibility: `(No)`

VPC segurity groups: `(X) Create new VPC security group` ( ) Choose existing VPC security groups

Database name: `fibvalues`

Port: `5432`

DB parameter group: `default.postgres10`

IAM Db authentication: ( ) Enable IAM DB authentication `(X) Disable`

Encryption: `Nothing to be done.`

Backup: 

Backup retention period: `7 days.`

Backup window: ( ) Select Window `(X) No preference`

`[X] Copy tags to snapshots`

Monitoring: ( ) Enable enhanced monitoring `(X) Disable enhanced monitoring`

Maintenance: 

Auto minor version upgrade: `(X) Enable auto minor version upgrade` ( ) Enable auto minor version upgrade 

Maintenance window: ( ) Select Window `(X) No Preference`

Del protection: `[X] Enable deletion protection`

- Click on `Create Database`

- The situation about the `current database` can be seen on `https://console.aws.amazon.com/rds/home?region-us-east-1#dbinstance:id-dotnet-core-multi-docker-postgres` 


5. Add AWS `Elastic Cache`
- On the https://console.aws.amazon.com/elasticache/home?region-us-east-1# page click on `Redis` on the left menu:
- Click on `Create`

Cluster engine `(X) Redis` [ ] Cluster mode enabled ( ) Memcached

Redis settings

Name: `ncmulti-docker-redis`

Description: 

Engine version compatibility: `4.0.10`

Port: `6379`

Parameter group: `default.redis4.0`

Node type: `cache.t2.micro (0.5 GiB)` **(Ensure not to choose "cache.r5.large (13.07 GiB)")**

Number of replicas: `None` **(Ensure to not to choose 2)**

Advanced Redis settings

Subnet group: `redis-group (vpc-4c2e8936)`

Preferred availability zone(s): `(X) No preference` ( ) Select zones

Security

Security groups: `default (sg-848995ca)`

Encryption at-rest: `[ ]` 

Encryption in-transit: `[ ]`

Import data to cluster

Seed RDB file S3 location: 

Backup

Enable automatic backups: `[ ]`

Maintenance

Maintenance window: `(X) No preference` ( ) Specify maintenance window

Topic for SNS notification: Disable notifications

- Click on `Create`

It goes to `https://console.aws.amazon.com/elasticache/home?region-us-east-1#redis:` and the `dotnet-core-multi-docker-redis` cluster starts to create

6. Create a new `Security Group`

- go to https://console.aws.amazon.com/vpc/home?region-us-east-1 and click on the left menu on `Security - Security Groups` and it goes to https://console.aws.amazon.com/vpc/home?region-us-east-1#securityGroups

- Click on `Create Security Group`

Name tag: `dotnet-core-multi-docker`

Group name: `dotnet-core-multi-docker`

Description: `Traffic for services in dotnet-core-multi-docker app`

VPC: `vpc-4c2e8936`

-Click on `Yes, Create`

The new `multi-docker` security group is created. `Select` it and on the bottom:

Summary:

Group name: `dotnet-core-multi-docker`

VPC: `vpc-4c2e8936`

Group ID: `sg-06f078fb1006ceed7 | dotnet-core-multi-docker`

Group description: `Traffic for services in dotnet-core-multi-docker app`

Inbound Rules:

- Click on `Edit`

Type: `Custom TCP Rule`

Protocol: `TCP (6)`

Port Range: `5432-6379`

Source: `sg-06f078fb1006ceed7 (the one for multi-docker)`

Description:

- Click on `Save` and `(X) Save Successful` is shown.

1st) Assign the new security group to the EB instance
- Select `Elastic Beanstalk` on `Services - History` left menu.
- Select the `DotnetCoreMutiDocker-env` environment
- Click on `Configuration` left menu
- Click on Instances `Modify` on the bottom.

On EC2 security groups

- mark the `[X] dotnet-core-multi-docker` security group

Both the `awseb-e-p33qnysnga-stack-AWSEBSecurityGroup-18LZQS0T12BN6 sg-08c14d3713914766a DotnetCoreMutiDocker-env` and the `dotnet-core-multi-docker sg-06f078fb1006ceed7 dotnet-core-multi-docker` must be selected

- Click on `Apply`

The folowing message is shown:

Elastic Beanstalk is updating your environment.

To cancel this operation select Abort Current Operation from the Actions dropdown.

2nd) Assign the new security group to the RDS (Postgres) instance
- Select `RDS` on Services - History left menu.
- Click on `Intances` left menu
- Click on `dotnet-core-multi-docker-postgres` instance
- Scroll down and look for `Details` and then Click on [Modify]
- Scroll down and look for `Network & Security` 

On Security Group add the `dotnet-core-multi-docker (sg-06f078fb1006ceed7) (vpc-4c2e8936)` one.

Both of them must be selected (the `rds-launch-wizard` and the `dotnet-core-multi-docker` ones).

- Scroll down to the very bottom and click on `Continue` 

On Scheduling of modifications select `(X) Apply immediately`.

- Click on `Modify DB Instance`

3rd) Assign the new security group to the EC (Redis) instance

- Select `ElasticCache` on `Services - History` left menu
- Click on `Redis` left menu

The `ncmulti-docker-redis` should be with the `available` status

- Select it and click `Modify` on the left top.
	
Modify Cluster

Engine: `redis`

Engine Version Compatibility: `4.0.10` 

VPC Security Group(s): click on `little pencil` and select the `multi-docker` one as well. Click on `Save`: `default (sg-848995ca)`, `dotnet-core-multi-docker (sg-06f078fb1006ceed7)` (both of them are selected)

Parameter Group: `default.redis4.0`

Node Type: `cache.t2.micro`

Maintenance Window: `Saturday ....`  :  UTC -   :  UTC

Topic for SNS Notification*: `Disable notifications`

Apply immediately: `[X]`

- Click on `Modify` and it starts to modify it.

7. Add the setting variables on AWS
- Select `Elastic Beanstalk` on `Services - History` left menu.
- Select the `DotnetCoreMutiDocker-env` environment
- Click on Software `Modify` button.
      - `REDIS_HOST`-`multi-docker-redis.lmrcvz.0001.use1.cache.amazonaws.com` (it must be obtained from the multi-docker-redis EC instance)

      - `REDIS_PORT`-`6379`

      - `PGUSER`-`postgres`

      - `PGHOST`-`dotnet-core-multi-docker-postgres.cvzlrthufo75.us-east-1.rds.amazonaws.com` (it must be obtained from Connect - end-point on the RDS 
      instance)

      - `PGDATABASE`-`fibvalues`

      - `PGPASSWORD`-`postgres_password`

      - `PGPORT`-`5432`

Click on `Apply`

8. Add the `IAM Keys` for Deployment
- Select `IAM` on `Services - History` left menu.
- Click on `Users` left menu
- Click on `Add user`

User name: `dotnet-core-multi-docker-deployer`

- Select AWS access type

Access type: `[X] Programmatic access` [ ] AWS Management Console access

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
User name: `multi-docker-deployer`
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

User: dotnet-core-multi-docker-deployer
Access key ID: AKIAJVPFWXXXXXXXXXXX
Secret access key: pJauqjTXEBPYUGVfFNkTXXXXXXXXXXXXXX
```

9. Add the two keys obatined to `Travis CI` setting variables

- On https://travis-ci.com/peelmicro/dotnet-core-multi-docker click on `More Opcions -Settings` add:

AWS_ACCESS_KEY: `AKIAJVPFWXXXXXXXXXXX`

AWS_SECRET_KEY: `pJauqjTXEBPYUGVfFNkTXXXXXXXXXXXXXX`

10. Commit the changes 
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git status
On branch master
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
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "added Dockerrun.aws.json"
[master ca088bd] added Dockerrun.aws.json
 2 files changed, 51 insertions(+), 11 deletions(-)
 create mode 100644 Dockerrun.aws.json
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin HEAD
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 778 bytes | 194.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/dotnet-core-multi-docker.git
   ac3bd8a..ca088bd  HEAD -> master
```
11. Ensure the application is deployed correctly on `Travis CI`
```bash
PASS src/App.test.js
  ✓ renders without crashing (1ms)
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
Time:        3.297s
Ran all test suites.
The command "docker run [secure]/test-client npm run test -- --coverage" exited with 0.
after_success.1
66.48s$ docker build -t [secure]/dotnet-core-multi-client ./client
Sending build context to Docker daemon  340.5kB
Step 1/10 : FROM node:alpine as builder
 ---> 4b3c025f5508
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> 37b47e8ae402
Step 3/10 : COPY ./package.json ./
 ---> dc2ef290cd1a
Step 4/10 : RUN npm install
 ---> Running in d27acc81081f
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
added 1684 packages from 666 contributors and audited 35723 packages in 35.731s
found 0 vulnerabilities
 ---> 0f965077a50b
Removing intermediate container d27acc81081f
Step 5/10 : COPY . .
 ---> 130e6ab217d4
Step 6/10 : RUN npm run build
 ---> Running in 5f8967bc480a
> client@0.1.0 build /app
> react-scripts build
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  47.24 KB  build/static/js/1.e5a12c45.chunk.js
  1.38 KB   build/static/js/main.a0376e20.chunk.js
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
 ---> 591d6f95fac7
Removing intermediate container 5f8967bc480a
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
 ---> Running in 36c400439a85
 ---> bf58fedb7e3a
Removing intermediate container 36c400439a85
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> 9c2683327124
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> 3b203e6692e7
Successfully built 3b203e6692e7
Successfully tagged [secure]/dotnet-core-multi-client:latest
after_success.2
0.21s$ docker build -t [secure]/dotnet-core-multi-nginx ./nginx
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> 62f816a209e6
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> 9b589126cc23
Successfully built 9b589126cc23
Successfully tagged [secure]/dotnet-core-multi-nginx:latest
after_success.3
0.02s$ docker build -t [secure]/dotnet-core-multi-server ./server
unable to prepare context: path "./server" not found
after_success.4
0.02s$ docker build -t [secure]/dotnet-core-multi-worker ./worker
unable to prepare context: path "./worker" not found
after_success.5
0.49s$ echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
Login Succeeded
after_success.6
4.07s$ docker push [secure]/dotnet-core-multi-client
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-client]
92d0309a3f7c: Preparing
306c279ebde9: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
ad9ac0e6043b: Layer already exists
6ccbee34dd10: Layer already exists
237472299760: Layer already exists
306c279ebde9: Pushed
92d0309a3f7c: Pushed
latest: digest: sha256:09511b2e8f22d429789174ffdb959dc341ebf29b754d61ee3b0affe4c2a3eecd size: 1365
after_success.7
4.25s$ docker push [secure]/dotnet-core-multi-nginx
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-nginx]
c60d737e3df0: Preparing
ad9ac0e6043b: Preparing
6ccbee34dd10: Preparing
237472299760: Preparing
6ccbee34dd10: Layer already exists
237472299760: Layer already exists
ad9ac0e6043b: Layer already exists
c60d737e3df0: Pushed
latest: digest: sha256:6884ff2a936d33885c5142cdb2f3b8c5619430de191adf5ec28b0ef02f298713 size: 1155
after_success.8
0.03s$ docker push [secure]/dotnet-core-multi-server
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-server]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-server
after_success.9
0.04s$ docker push [secure]/dotnet-core-multi-worker
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-worker]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-worker
dpl_0
1.61s$ rvm $(travis_internal_ruby) --fuzzy do ruby -S gem install dpl
Successfully installed dpl-1.10.4
1 gem installed
10.10s
dpl.1
Installing deploy dependencies
Successfully installed jmespath-1.4.0
Successfully installed aws-sigv4-1.0.3
Successfully installed aws-sdk-core-2.11.168
Successfully installed aws-sdk-resources-2.11.168
Successfully installed aws-sdk-2.11.168
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
12. Cleanup all the resources created
> 1st) EB instance

Search for the `dotnet-core-muti-docker application`, click on `Actions` on top left and then on `Delete Application`  

```
Delete Application
Are you sure you want to delete the application: dotnet-core-muti-docker?
```

- Click on `Delete`

After a while the environment is removed.
> 2nd) RDS (Postgres)

- Look for the `RDS instances`
- Mark the `dotnet-core-multi-docker-postgres` one 
- Click on `Instance actions` and then `Delete`

This database has deletion protection option enabled

To be able to delete the database, modify the database and disable deletion protection.

- Click on `Close` 

- On Details click on `Modify` 

- Scroll down to `Deletion protection`

Enable deletion protection

[X] Protects the database from being deleted accidentally. While this option is enabled, you can’t delete the database.

Unmark `[ ] Protects the database from being deleted accidentally.` and then click on `Continue`

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
Delete dotnet-core-multi-docker-postgres instance?

Are you sure you want to Delete the dotnet-core-multi-docker-postgres DB Instance?

[ ] - Create final snapshot?
Determines whether a final DB Snapshot is created before the DB instance is deleted.

[X] - I acknowledge that upon instance deletion, automated backups, including system snapshots and point-in-time recovery, will no longer be available.

dotnet-core-multi-docker-postgres-final-snapshot
To confirm deletion, type delete me into the field
```

- Enter `delete me` on the last field and the click on `Delete`

It's deleted after a while.

> 3rd) EC (Redis)

- Look for `Elastic Cache`, then click on `Redis` on left menu 
- Click on the `multi-docker-redis` cluster and then on the `Delete` butoon on the top

```
Delete Cluster
Are you sure you want to delete this Cluster?
ncmulti-docker-redis
```
-Click on `Delete`

It's deleted after a while

> 4th) (Optional) Security Group

- Look for `VPC`, then on your `Security Groups` on the left menu
- Select `dotnet-core-multi-docker` Group and then `Security Group Actions` and then `Delete Security Group`

```
Delete Security Group
Are you sure you want to delete this security group?
sg-06f078fb1006ceed7 - dotnet-core-multi-docker (dotnet-core-multi-docker)
```
- Click on `Yes, Delete`

> 5th) (Optional) IAM security users

- Look for `IAM`, then click on `users` on the left menu.

- mark the `dotnet-core-multi-docker-deployer` user and the click on `Delete user`
```
Delete user
The following users will be permanently deleted, including all user data, user security credentials, and user inline policies. Deleted user data cannot be recovered. Are you sure that you want to delete the following users?
User name Last activity
dotnet-core-multi-docker-deployer 1 hour ago
[X] One or more of these users have recently accessed AWS. Deleting them could affect running systems. Check the box to confirm that you want to delete these users.
```
- Click on `Yes, delete`

The user is deleted.

## Onwards to Kubernetes!
1. Modify the `client\nginx\default.conf` file to avoid it fails when running it inside Kubernetes
```css
server {
  listen 3000;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    #try_files $uri $uri/ /index.html;
  }

}
```
2. Create the `simplek8s` folder and the `config` Kubernetes files

>`client-node-port.yaml`
```yaml
apiVersion: v1
kind: Service
metadata: 
  name: dotnet-core-client-node-port
spec:
  type: NodePort
  ports: 
    - port: 3050
      targetPort: 3000
      nodePort: 31515
  selector:
    component: web
```

>`client-pod.yaml`
```yaml
apiVersion: v1
kind: Pod
metadata: 
  name: dotnet-core-client-pod
  labels:
    component: web
spec:
  containers:
    - name: client
      image: peelmicro/dotnet-core-multi-client
      ports: 
        - containerPort: 3000
```
3. Create the `dotnet-core-multi-client` Docker image
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker build -t peelmicro/dotnet-core-multi-client ./client
Sending build context to Docker daemon  340.5kB
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
 ---> 6acfa2d32fa0
Step 6/10 : RUN npm run build
 ---> Running in d20ea3e55244

> client@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.2 KB  build/static/js/1.7b85cb19.chunk.js
  1.38 KB  build/static/js/main.a0376e20.chunk.js
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

Removing intermediate container d20ea3e55244
 ---> 5191a5c76f1e
Step 7/10 : FROM nginx
 ---> e81eb098537d
Step 8/10 : EXPOSE 3000
 ---> Using cache
 ---> 021956dfacb6
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> b206c3bc0cf7
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> 546c91a82816
Successfully built 546c91a82816
Successfully tagged peelmicro/dotnet-core-multi-client:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
4. Push the `dotnet-core-multi-client` image to `Docker Hub`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker push peelmicro/dotnet-core-multi-client
The push refers to repository [docker.io/peelmicro/dotnet-core-multi-client]
509684436c77: Pushed
2e55e5f66dcf: Pushed
9a8f339aeebe: Layer already exists
876456b96423: Layer already exists
ef68f6734aa4: Layer already exists
latest: digest: sha256:030b8c60c053b98099ee08005d72f5f9b28141569a34a8aa03b01d54aa0bd2a3 size: 1365
```
5. Create the `dotnet-core-client-pod` pod
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)$ cd simplek8s/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl apply -f client-pod.yaml
pod "dotnet-core-client-pod" created
```
6. Create the `dotnet-core-client-node-port` service
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl apply -f client-node-port.yaml
service "dotnet-core-client-node-port" created
```
7. Confirm the IP where `minikube` is running
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.109
```
8. Ensure the `client` app is running properly
* Goto to `http://192.168.0.109:31515/`

![](/images/projects/dotnet-core-multi-docker/ClientRunning.png)

9. Stop the `dotnet-core-client-pod` pod
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl delete pod dotnet-core-client-pod
pod "dotnet-core-client-pod" deleted
```
10. Stop the `dotnet-core-client-node-port` service
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl delete service dotnet-core-client-node-port
service "dotnet-core-client-node-port" deleted
```
11. Modify `.travis.yml` to avoid it deploys to `AWS Elastic Beanstalk`
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
  - docker build -t peelmicro/dotnet-core-multi-client ./client
  - docker build -t peelmicro/dotnet-core-multi-nginx ./nginx
  - docker build -t peelmicro/dotnet-core-multi-server ./Server
  - docker build -t peelmicro/dotnet-core-multi-worker ./Worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/dotnet-core-multi-client
  - docker push peelmicro/dotnet-core-multi-nginx
  - docker push peelmicro/dotnet-core-multi-server
  - docker push peelmicro/dotnet-core-multi-worker
# Commented out for Kubernettes
# deploy:
#   provider: elasticbeanstalk
#   region: "us-east-1"
#   app: "dotnet-core-muti-docker"
#   env: "DotnetCoreMutiDocker-env"
#   bucket_name: "elasticbeanstalk-us-east-1-972569889348"
#   #bucket_path: ""
#   on:
#     branch: "master"
#   access_key_id: $AWS_ACCESS_KEY
#   secret_access_key:
#     secure: "$AWS_SECRET_KEY"
```
12. Update `README.md`
```md
## .Net Core version of the "Docker and Kubernetes: The Complete Guide" course.

> source code for the .Net Core version of the "Docker and Kubernetes: The Complete Guide" course.

## Execute it locally

$ docker-compose up --build

Navigate to http://localhost:3050/

## Continuous Integration with Travis CI + Amazon AWS

- The repository must be created on https://github.com/

- The repository must be assigned from GitHub on https://travis-ci.com/. The following setting variables must be set up:
1) AWS_ACCESS_KEY (for 11.-Multi-Container Deployments to AWS)
2) AWS_SECRET_KEY (for 11.-Multi-Container Deployments to AWS)
3) DOCKER_ID
4) DOCKER_PASSWORD

- The following instances must be created on Amazon (for 11.-Multi-Container Deployments to AWS)
1) Elastic Beanstalk (EB)
2) Relational Database Service (RDS) for Postgres
3) ElastiCache for Redis
4) Custom Security Group
5) Identity and Access Magagement (IAM)

## Within the code you can see how to
- Create different Docket Container Types and relate all of them
  1) React Client App
  2) .NET Core Web API
  3) .NET Core Console
  4) Postgres
  5) Redis
  6) NGINX
- Use Postgres from a Docker Container with .Net Core
- Use Redis from a Docker Container with .Net Core creating a subscription on the Web API App and subscribe to it on the Console App.
- Accept dynamic POST request with .Net Core API
- Send dynamic JSON responses from .Net Core API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with .NET Core API
- Work with different AWS Amazon service types to deploy a multi container Docker application using AWS Elastic Beanstalk
- Upload own Containers to Docker Hub and download them with the deployment
- Use Travis CI for the Continuous Integration Workflow
- Use Kubernetes
- Use Minikube to run Kubernetes locally
- Use Kubectl CLI for interacting with Kubernetes Master

## In order to get to know what has been developed follow the course on

https://www.udemy.com/docker-and-kubernetes-the-complete-guide
```
13. Commit and push the changes to the `Github` repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   ../.travis.yml
        modified:   ../README.md
        modified:   ../client/nginx/default.conf
        new file:   client-node-port.yaml
        new file:   client-pod.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ git commit -m "Onwards to Kubernetes!"
[master e541a19] Onwards to Kubernetes!
 5 files changed, 46 insertions(+), 24 deletions(-)
 create mode 100644 simplek8s/client-node-port.yaml
 create mode 100644 simplek8s/client-pod.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ git push origin HEAD
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (10/10), 1.25 KiB | 425.00 KiB/s, done.
Total 10 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To https://github.com/peelmicro/dotnet-core-multi-docker.git
   1ab54fd..e541a19  HEAD -> master
```
## Maintaining Sets of Containers with Deployments
1. Create the new `client-deployment.yaml` config file.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: dotnet-core-client-deployment
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
          image: peelmicro/dotnet-core-multi-client
          ports: 
            - containerPort: 3000
```
2. Delete current `pods`, `deployments` and `services`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get pods
NAME                                      READY     STATUS    RESTARTS   AGE
java-client-deployment-7cd5869df7-xd77x   1/1       Running   0          25m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get deployments
NAME                     DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
java-client-deployment   1         1         1            1           41m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl delete deployment java-client-deployment
deployment.extensions "java-client-deployment" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get pods
No resources found.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get deployments
No resources found.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get services
NAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
java-client-node-port   NodePort    10.99.198.24   <none>        3050:31515/TCP   42m
kubernetes              ClusterIP   10.96.0.1      <none>        443/TCP          3d
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl delete service java-client-node-port
service "java-client-node-port" deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   3d
```
3. Apply the `client-deployment` config deployment
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "dotnet-core-client-deployment" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl get deployments
NAME                            DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
dotnet-core-client-deployment   1         1         1            1           20s
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl get pods
NAME                                             READY     STATUS    RESTARTS   AGE
dotnet-core-client-deployment-7b4f7756df-7jwc2   1/1       Running   0          37s
```
4. Apply the 'client-node-port` config service
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl apply -f client-node-port.yaml
service "dotnet-core-client-node-port" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ kubectl get services
NAME                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
dotnet-core-client-node-port   NodePort    10.98.205.161   <none>        3050:31515/TCP   18s
kubernetes                     ClusterIP   10.96.0.1       <none>        443/TCP          3d
```
5. Test if the `multi-client` instance is running properly
- Find out the current IP
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ minikube ip
192.168.0.109
```
- Browse to `http://192.168.0.109:31515/`

![](/images/projects/dotnet-core-multi-docker/MultiClientIsRunning.png)

6. Modify the `App.js` program to put another header to identify the version
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
            <h1 className="App-title">Fib Calculator version 2 (.NET Core)</h1>
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
7. Rebuild the `dotnet-core-multi-client` image with a different tag
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ docker build -t peelmicro/dotnet-core-multi-client:v2 ./client
unable to prepare context: path "./client" not found

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/simplek8s (master)
$ cd ..

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker build -t peelmicro/dotnet-core-multi-client:v2 ./client
Sending build context to Docker daemon  340.5kB
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
 ---> f97a3f7fec67
Step 6/10 : RUN npm run build
 ---> Running in b66908932e97

> client@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.2 KB  build/static/js/1.7b85cb19.chunk.js
  1.38 KB  build/static/js/main.8fec770a.chunk.js
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

Removing intermediate container b66908932e97
 ---> dbb856fffe55
Step 7/10 : FROM nginx
 ---> e81eb098537d
Step 8/10 : EXPOSE 3000
 ---> Using cache
 ---> 021956dfacb6
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> b206c3bc0cf7
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> e67ddcc389e0
Successfully built e67ddcc389e0
Successfully tagged peelmicro/dotnet-core-multi-client:v2
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

8. Push the new `dotnet-core-multi-client` image to `Docker Hub`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ docker push peelmicro/dotnet-core-multi-client:v2
The push refers to repository [docker.io/peelmicro/dotnet-core-multi-client]
f782c1c2a156: Pushed
2e55e5f66dcf: Layer already exists
9a8f339aeebe: Layer already exists
876456b96423: Layer already exists
ef68f6734aa4: Layer already exists
v2: digest: sha256:f587dfb422b8b59f7190c8586581121f07cb4aa5a9cdb2d631b3df5c05daf32a size: 1365
```
9. `Run` a specific `kubectl` command forcing the deployment to use the `image version`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl set image deployment/dotnet-core-client-deployment client=peelmicro/dotnet-core-multi-client:v2
deployment.apps "dotnet-core-client-deployment" image updated
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get deployments
NAME                            DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
dotnet-core-client-deployment   1         1         1            1           2h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get pods
NAME                                             READY     STATUS    RESTARTS   AGE
dotnet-core-client-deployment-76cbb7f86f-dw2s7   1/1       Running   0          1m
```
10. Test if the new instance of the `muti-client` is running
- Browse to `http://192.168.0.109:31515/`

![](/images/projects/dotnet-core-multi-docker/NewMultiClientIsRunning.png)

11. `Commit` and `Push` changes to Github Repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
warning: LF will be replaced by CRLF in client/src/App.js.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   client/src/App.js
        new file:   simplek8s/client-deployment.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "Maintaining Sets of Containers with Deployments"
[master a63caa1] Maintaining Sets of Containers with Deployments
 2 files changed, 20 insertions(+), 1 deletion(-)
 create mode 100644 simplek8s/client-deployment.yaml
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin HEAD
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 813 bytes | 42.00 KiB/s, done.
Total 7 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/peelmicro/dotnet-core-multi-docker.git
   e541a19..a63caa1  HEAD -> master
```
## A Multi-Container App with Kubernetes
1. Clean up the current objects running locally on `minikube`
- Check if there are any `service` running
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)$ kubectl get allNAME                                            READY     STATUS    RESTARTS   AGEpod/java-client-deployment-d84b8c989-8w8df      1/1       Running   1          22h
pod/java-client-deployment-d84b8c989-kvjjh      1/1       Running   1          22h
pod/java-client-deployment-d84b8c989-l6vvv      1/1       Running   1          22h
pod/java-postgres-deployment-5dd96996db-8kchj   1/1       Running   1          22h
pod/java-redis-deployment-666bf96bdd-hp8sq      1/1       Running   1          22h
pod/java-server-deployment-c45c6b558-558wp      1/1       Running   2          22h
pod/java-server-deployment-c45c6b558-b6q8l      1/1       Running   3          22h
pod/java-server-deployment-c45c6b558-fm65j      1/1       Running   1          22h
pod/java-worker-deployment-59576b545-6gsln      1/1       Running   4          22h

NAME                                       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/java-client-cluster-ip-service     ClusterIP   10.106.142.133   <none>        3000/TCP   22h
service/java-postgres-cluster-ip-service   ClusterIP   10.106.38.71     <none>        5432/TCP   22h
service/java-redis-cluster-ip-service      ClusterIP   10.109.132.210   <none>        6379/TCP   22h
service/java-server-cluster-ip-service     ClusterIP   10.101.10.127    <none>        5000/TCP   22h
service/kubernetes                         ClusterIP   10.96.0.1        <none>        443/TCP    22h

NAME                                       DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/java-client-deployment     3         3         3            3           22h
deployment.apps/java-postgres-deployment   1         1         1            1           22h
deployment.apps/java-redis-deployment      1         1         1            1           22h
deployment.apps/java-server-deployment     3         3         3            3           22h
deployment.apps/java-worker-deployment     1         1         1            1           22h

NAME                                                  DESIRED   CURRENT   READY     AGE
replicaset.apps/java-client-deployment-d84b8c989      3         3         3         22h
replicaset.apps/java-postgres-deployment-5dd96996db   1         1         1         22h
replicaset.apps/java-redis-deployment-666bf96bdd      1         1         1         22h
replicaset.apps/java-server-deployment-c45c6b558      3         3         3         22h
replicaset.apps/java-worker-deployment-59576b545      1         1         1         22h
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get storageclass
NAME                 PROVISIONER                AGE
standard (default)   k8s.io/minikube-hostpath   5d
```
- Execute the `kubectl delete daemonsets,replicasets,services,deployments,pods,rc,pv,pvc,namespaces,secrets,ingresses --all` command to remove all the `Kubernetes objects`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl delete daemonsets,replicasets,services,deployments,pods,rc,pv,pvc,namespaces,secrets,ingresses --all
replicaset.extensions "java-client-deployment-d84b8c989" deleted
replicaset.extensions "java-postgres-deployment-5dd96996db" deleted
replicaset.extensions "java-redis-deployment-666bf96bdd" deleted
replicaset.extensions "java-server-deployment-c45c6b558" deleted
replicaset.extensions "java-worker-deployment-59576b545" deleted
service "java-client-cluster-ip-service" deleted
service "java-postgres-cluster-ip-service" deleted
service "java-redis-cluster-ip-service" deleted
service "java-server-cluster-ip-service" deleted
service "kubernetes" deleted
deployment.extensions "java-client-deployment" deleted
deployment.extensions "java-postgres-deployment" deleted
deployment.extensions "java-redis-deployment" deleted
deployment.extensions "java-server-deployment" deleted
deployment.extensions "java-worker-deployment" deleted
pod "java-client-deployment-d84b8c989-h7lv9" deleted
pod "java-postgres-deployment-5dd96996db-zkbrk" deleted
pod "java-redis-deployment-666bf96bdd-8jgtv" deleted
pod "java-server-deployment-c45c6b558-2429g" deleted
pod "java-server-deployment-c45c6b558-2b6k2" deleted
pod "java-server-deployment-c45c6b558-rqlpz" deleted
pod "java-worker-deployment-59576b545-kjtzr" deleted
persistentvolume "pvc-30979207-f660-11e8-a7aa-00155dc00118" deleted
persistentvolumeclaim "java-database-persistent-volume-claim" deleted
namespace "ingress-nginx" deleted
secret "default-token-fcp79" deleted
secret "pgpassword" deleted
ingress.extensions "java-ingress-service" deleted
Error from server (Forbidden): namespaces "default" is forbidden: this namespace may not be deleted
Error from server (Forbidden): namespaces "kube-public" is forbidden: this namespace may not be deleted
Error from server (Forbidden): namespaces "kube-system" is forbidden: this namespace may not be deleted
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   2m
```
2. Make a copy of the whole solution on the `elastic-beanstalk` folder

![](/images/projects/dotnet-core-multi-docker/BackupEverythingOnElasticBeanstalkFolder.png)

3. Remove the `.travis.yml`, `docker-compose.yml` and `Dockerrun.aws.json`  files and the `nginx` and  `simplek8s` folders.

![](/images/projects/dotnet-core-multi-docker/RemoveFilesAndFolders.png)

4. Copy the `k8s` folder from the `Java` version.

![](/images/projects/dotnet-core-multi-docker/CopyK8sFolder.png)

5. Modify all the `configuration` files.

> `client-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: dotnet-core-client-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: web
  ports: 
    - port: 3000
      targetPort: 3000
```
> `client-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: dotnet-core-client-deployment
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
          image: peelmicro/dotnet-core-multi-client
          ports: 
            - containerPort: 3000
```
> `database-persistent-volume-claim.yaml`
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: dotnet-core-database-persistent-volume-claim
spec: 
  accessModes: 
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```
> `ingress-service.yaml`
```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: dotnet-core-ingress-service
  annotations: 
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/rewrite-target: /
spec: 
  rules:
    - http:
        paths:
          - path: /
            backend: 
              serviceName: dotnet-core-client-cluster-ip-service
              servicePort: 3000
          - path: /api/
            backend: 
              serviceName: dotnet-core-server-cluster-ip-service
              servicePort: 5000
```
> `postgres-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: dotnet-core-postgres-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: postgres
  ports: 
    - port: 5432
      targetPort: 5432
```
> `postgres-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: dotnet-core-postgres-deployment
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
            claimName: dotnet-core-database-persistent-volume-claim
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
> `redis-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: dotnet-core-redis-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: redis
  ports: 
    - port: 6379
      targetPort: 6379
```
> `redis-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: dotnet-core-redis-deployment
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
> `server-cluster-ip-service.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: dotnet-core-server-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: server
  ports: 
    - port: 5000
      targetPort: 5000
```
> `server-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: dotnet-core-server-deployment
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
          image: peelmicro/dotnet-core-multi-server
          ports: 
            - containerPort: 5000
          env:
            - name: REDIS_HOST
              value: dotnet-core-redis-cluster-ip-service
            - name: REDIS_PORT
              value: '6379'     
            - name: PGUSER
              value: postgres
            - name: PGHOST
              value: dotnet-core-postgres-cluster-ip-service
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
> `worker-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: dotnet-core-worker-deployment
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
          image: peelmicro/dotnet-core-multi-worker
          env:
              - name: REDIS_HOST
                value: dotnet-core-redis-cluster-ip-service
              - name: REDIS_PORT
                value: '6379'
```
6. Create the `secrets` for the `postgres` password
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password
secret "pgpassword" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get secrets
NAME                  TYPE                                  DATA      AGE
default-token-w9xdh   kubernetes.io/service-account-token   3         28s
pgpassword            Opaque                                1         6s
```
7. Execute the `mandatory` `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml` `Ingress Nginx` and `minikube addons enable ingress` `Minikube` commands.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
namespace "ingress-nginx" created
configmap "nginx-configuration" created
serviceaccount "nginx-ingress-serviceaccount" created
clusterrole.rbac.authorization.k8s.io "nginx-ingress-clusterrole" configured
role.rbac.authorization.k8s.io "nginx-ingress-role" created
rolebinding.rbac.authorization.k8s.io "nginx-ingress-role-nisa-binding" created
clusterrolebinding.rbac.authorization.k8s.io "nginx-ingress-clusterrole-nisa-binding" configured
deployment.extensions "nginx-ingress-controller" created
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ minikube addons enable ingress
ingress was successfully enabled
```

8. Install all the `Kubernetes objects`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl apply -f k8s
service "dotnet-core-client-cluster-ip-service" created
deployment.apps "dotnet-core-client-deployment" created
persistentvolumeclaim "dotnet-core-database-persistent-volume-claim" created
ingress.extensions "dotnet-core-ingress-service" created
service "dotnet-core-postgres-cluster-ip-service" created
deployment.apps "dotnet-core-postgres-deployment" created
service "dotnet-core-redis-cluster-ip-service" created
deployment.apps "dotnet-core-redis-deployment" created
service "dotnet-core-server-cluster-ip-service" created
deployment.apps "dotnet-core-server-deployment" created
deployment.apps "dotnet-core-worker-deployment" created
```
- Check if the services are available
```bash
$ kubectl get all
NAME                                                   READY     STATUS              RESTARTS   AGE
pod/dotnet-core-client-deployment-7b4f7756df-cq5rf     1/1       Running             0          32s
pod/dotnet-core-client-deployment-7b4f7756df-qhkw7     1/1       Running             0          32s
pod/dotnet-core-client-deployment-7b4f7756df-z9htd     1/1       Running             0          32s
pod/dotnet-core-postgres-deployment-6c4b98478d-88rkp   0/1       ContainerCreating   0          30s
pod/dotnet-core-redis-deployment-666bf96bdd-mfwx7      0/1       ContainerCreating   0          29s
pod/dotnet-core-server-deployment-545bb75676-9vtsw     0/1       ContainerCreating   0          27s
pod/dotnet-core-server-deployment-545bb75676-h4dvp     0/1       ContainerCreating   0          28s
pod/dotnet-core-server-deployment-545bb75676-nw4xd     0/1       ContainerCreating   0          27s
pod/dotnet-core-worker-deployment-7b5d67dc7f-gk6zm     0/1       ContainerCreating   0          27s

NAME                                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/dotnet-core-client-cluster-ip-service     ClusterIP   10.104.239.99    <none>        3000/TCP   32s
service/dotnet-core-postgres-cluster-ip-service   ClusterIP   10.111.75.44     <none>        5432/TCP   30s
service/dotnet-core-redis-cluster-ip-service      ClusterIP   10.96.174.32     <none>        6379/TCP   30s
service/dotnet-core-server-cluster-ip-service     ClusterIP   10.104.117.208   <none>        5000/TCP   29s
service/kubernetes                                ClusterIP   10.96.0.1        <none>        443/TCP    3m

NAME                                              DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/dotnet-core-client-deployment     3         3         3            3           32s
deployment.apps/dotnet-core-postgres-deployment   1         1         1            0           30s
deployment.apps/dotnet-core-redis-deployment      1         1         1            0           30s
deployment.apps/dotnet-core-server-deployment     3         3         3            0           28s
deployment.apps/dotnet-core-worker-deployment     1         1         1            0           27s

NAME                                                         DESIRED   CURRENT   READY     AGE
replicaset.apps/dotnet-core-client-deployment-7b4f7756df     3         3         3         32s
replicaset.apps/dotnet-core-postgres-deployment-6c4b98478d   1         1         0         30s
replicaset.apps/dotnet-core-redis-deployment-666bf96bdd      1         1         0         29s
replicaset.apps/dotnet-core-server-deployment-545bb75676     3         3         0         28s
replicaset.apps/dotnet-core-worker-deployment-7b5d67dc7f     1         1         0         27s
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get ing
NAME                          HOSTS     ADDRESS   PORTS     AGE
dotnet-core-ingress-service   *                   80        1m
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ kubectl get all
NAME                                                   READY     STATUS    RESTARTS   AGE
pod/dotnet-core-client-deployment-7b4f7756df-cq5rf     1/1       Running   0          9m
pod/dotnet-core-client-deployment-7b4f7756df-qhkw7     1/1       Running   0          9m
pod/dotnet-core-client-deployment-7b4f7756df-z9htd     1/1       Running   0          9m
pod/dotnet-core-postgres-deployment-6c4b98478d-88rkp   1/1       Running   0          9m
pod/dotnet-core-redis-deployment-666bf96bdd-mfwx7      1/1       Running   0          9m
pod/dotnet-core-server-deployment-545bb75676-9vtsw     1/1       Running   1          9m
pod/dotnet-core-server-deployment-545bb75676-h4dvp     1/1       Running   1          9m
pod/dotnet-core-server-deployment-545bb75676-nw4xd     1/1       Running   0          9m
pod/dotnet-core-worker-deployment-7b5d67dc7f-gk6zm     1/1       Running   0          9m

NAME                                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/dotnet-core-client-cluster-ip-service     ClusterIP   10.104.239.99    <none>        3000/TCP   9m
service/dotnet-core-postgres-cluster-ip-service   ClusterIP   10.111.75.44     <none>        5432/TCP   9m
service/dotnet-core-redis-cluster-ip-service      ClusterIP   10.96.174.32     <none>        6379/TCP   9m
service/dotnet-core-server-cluster-ip-service     ClusterIP   10.104.117.208   <none>        5000/TCP   9m
service/kubernetes                                ClusterIP   10.96.0.1        <none>        443/TCP    12m

NAME                                              DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/dotnet-core-client-deployment     3         3         3            3           9m
deployment.apps/dotnet-core-postgres-deployment   1         1         1            1           9m
deployment.apps/dotnet-core-redis-deployment      1         1         1            1           9m
deployment.apps/dotnet-core-server-deployment     3         3         3            3           9m
deployment.apps/dotnet-core-worker-deployment     1         1         1            1           9m

NAME                                                         DESIRED   CURRENT   READY     AGE
replicaset.apps/dotnet-core-client-deployment-7b4f7756df     3         3         3         9m
replicaset.apps/dotnet-core-postgres-deployment-6c4b98478d   1         1         1         9m
replicaset.apps/dotnet-core-redis-deployment-666bf96bdd      1         1         1         9m
replicaset.apps/dotnet-core-server-deployment-545bb75676     3         3         3         9m
replicaset.apps/dotnet-core-worker-deployment-7b5d67dc7f     1         1         1         9m
```
9. Run `minikube` locally
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ minikube ip
192.168.0.107
```
- Browse to `https://192.168.0.107/`

![](/images/projects/dotnet-core-multi-docker/RunMinikube.png)

- Click on `ADVANCED`

![](/images/projects/dotnet-core-multi-docker/RunMinikube2.png)

- Click on `Proceed to 192.168.0.107 (unsafe)`

![](/images/projects/dotnet-core-multi-docker/RunMinikube3.png)

10. Have a look at the `Minikube Dashboard'
- Execute the `minikube dashboard` command
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube dashboard
Opening http://127.0.0.1:52302/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/ in your default browser...
```

![](/images/projects/dotnet-core-multi-docker/MinikubeDashboard.png)

![](/images/projects/dotnet-core-multi-docker/MinikubeDashboard2.png)

11. Update the `README.md` document
```md
## .Net Core version of the "Docker and Kubernetes: The Complete Guide" course.

> source code for the .Net Core version of the "Docker and Kubernetes: The Complete Guide" course.

## AWS Elastic Beanstalk version (Up to `11.-Multi-Container Deployments to AWS` section) is on the `elastic-beanstalk` subfolder:
### Execute it locally using 

$ cd elastic-beanstalk

$ docker-compose up --build

Navigate to http://localhost:3050/

### Continuous Integration with Travis CI + Amazon AWS

- The repository must be created on https://github.com/

- The repository must be assigned from GitHub on https://travis-ci.com/. The following setting variables must be set up:
1) AWS_ACCESS_KEY (for 11.-Multi-Container Deployments to AWS)
2) AWS_SECRET_KEY (for 11.-Multi-Container Deployments to AWS)
3) DOCKER_ID
4) DOCKER_PASSWORD

- The following instances must be created on Amazon (for 11.-Multi-Container Deployments to AWS)
1) Elastic Beanstalk (EB)
2) Relational Database Service (RDS) for Postgres
3) ElastiCache for Redis
4) Custom Security Group
5) Identity and Access Magagement (IAM)

## Kubernetes version (From `12.-Onwards to Kubernetes!`) is on the root folder:
1. Create the `secrets` for the `postgres` password: `kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password`
2. Execute the `mandatory` `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml` `Ingress Nginx` command
3. Enable Ingress using `minikube addons enable ingress`
4. Install all the `Kubernetes objects` with `kubectl apply -f k8s`
5. Get the local IP with `minikube IP`
6. Browse to the local IP 

## Within the code you can see how to
- Create different Docket Container Types and relate all of them
  1) React Client App
  2) .NET Core Web API
  3) .NET Core Console
  4) Postgres
  5) Redis
  6) NGINX
- Use Postgres from a Docker Container with .Net Core
- Use Redis from a Docker Container with .Net Core creating a subscription on the Web API App and subscribe to it on the Console App.
- Accept dynamic POST request with .Net Core API
- Send dynamic JSON responses from .Net Core API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with .NET Core API
- Work with different AWS Amazon service types to deploy a multi container Docker application using AWS Elastic Beanstalk
- Upload own Containers to Docker Hub and download them with the deployment
- Use Travis CI for the Continuous Integration Workflow
- Use Kubernetes to run the same multi container application
- Use Minikube to run Kubernetes locally
- Use Kubectl CLI for interacting with Kubernetes Master

## In order to get to know what has been developed follow the course on

https://www.udemy.com/docker-and-kubernetes-the-complete-guide

```
12. `Commit` and `Push` the changes to Github Repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
warning: LF will be replaced by CRLF in elastic-beanstalk/.gitignore.
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
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
        new file:   elastic-beanstalk/.gitignore
        renamed:    .travis.yml -> elastic-beanstalk/.travis.yml
        renamed:    Dockerrun.aws.json -> elastic-beanstalk/Dockerrun.aws.json
        new file:   elastic-beanstalk/README.md
        new file:   elastic-beanstalk/Server/.dockerignore
        new file:   elastic-beanstalk/Server/Controllers/ValuesController.cs
        new file:   elastic-beanstalk/Server/Data/DataContext.cs
        new file:   elastic-beanstalk/Server/Data/DatabaseService.cs
        new file:   elastic-beanstalk/Server/Data/IDatabaseService.cs
        new file:   elastic-beanstalk/Server/Dockerfile
        new file:   elastic-beanstalk/Server/Models/Value.cs
        new file:   elastic-beanstalk/Server/Program.cs
        new file:   elastic-beanstalk/Server/Server.csproj
        new file:   elastic-beanstalk/Server/Startup.cs
        new file:   elastic-beanstalk/Worker/.dockerignore
        new file:   elastic-beanstalk/Worker/Dockerfile
        new file:   elastic-beanstalk/Worker/Program.cs
        new file:   elastic-beanstalk/Worker/Worker.csproj
        new file:   elastic-beanstalk/client/.dockerignore
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
        new file:   elastic-beanstalk/nginx/Dockerfile
        new file:   elastic-beanstalk/nginx/Dockerfile.dev
        new file:   elastic-beanstalk/nginx/default.conf
        renamed:    simplek8s/client-deployment.yaml -> elastic-beanstalk/simplek8s/client-deployment.yaml
        renamed:    simplek8s/client-node-port.yaml -> elastic-beanstalk/simplek8s/client-node-port.yaml
        renamed:    simplek8s/client-pod.yaml -> elastic-beanstalk/simplek8s/client-pod.yaml
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
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "A Multi-Container App with Kubernetes"
[master e8a08b5] A Multi-Container App with Kubernetes
 56 files changed, 9658 insertions(+), 3 deletions(-)
 create mode 100644 elastic-beanstalk/.gitignore
 rename .travis.yml => elastic-beanstalk/.travis.yml (100%)
 rename Dockerrun.aws.json => elastic-beanstalk/Dockerrun.aws.json (100%)
 create mode 100644 elastic-beanstalk/README.md
 create mode 100644 elastic-beanstalk/Server/.dockerignore
 create mode 100644 elastic-beanstalk/Server/Controllers/ValuesController.cs
 create mode 100644 elastic-beanstalk/Server/Data/DataContext.cs
 create mode 100644 elastic-beanstalk/Server/Data/DatabaseService.cs
 create mode 100644 elastic-beanstalk/Server/Data/IDatabaseService.cs
 create mode 100644 elastic-beanstalk/Server/Dockerfile
 create mode 100644 elastic-beanstalk/Server/Models/Value.cs
 create mode 100644 elastic-beanstalk/Server/Program.cs
 create mode 100644 elastic-beanstalk/Server/Server.csproj
 create mode 100644 elastic-beanstalk/Server/Startup.cs
 create mode 100644 elastic-beanstalk/Worker/.dockerignore
 create mode 100644 elastic-beanstalk/Worker/Dockerfile
 create mode 100644 elastic-beanstalk/Worker/Program.cs
 create mode 100644 elastic-beanstalk/Worker/Worker.csproj
 create mode 100644 elastic-beanstalk/client/.dockerignore
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
 create mode 100644 elastic-beanstalk/nginx/Dockerfile
 create mode 100644 elastic-beanstalk/nginx/Dockerfile.dev
 create mode 100644 elastic-beanstalk/nginx/default.conf
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-deployment.yaml (100%)
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-node-port.yaml (100%)
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-pod.yaml (100%)
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
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin HEAD
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 324 bytes | 108.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/dotnet-core-multi-docker.git
   e8a08b5..7311ccb  HEAD -> master
```

## Kubernetes Production Deployment
1. Add a tag to the current `Github` repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)$ git tag MultiContainerAppWithKubernetes
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin --tags
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/peelmicro/dotnet-core-multi-docker.git
 * [new tag]         MultiContainerAppWithKubernetes -> MultiContainerAppWithKubernetes
```
2. Create the `multi-container-minikube` folder

![](/images/projects/dotnet-core-multi-docker/NewMultiContainerMinikubeFolder.png)

3. Copy the current project to the new folder

![](/images/projects/dotnet-core-multi-docker/CopyCurrentFolderToNewMinikubeFolder.png)

4. Copy all the `yaml` Kubernetes config files from the `Python` solution.
- Delete the current files
- Copy from the `Python` solution
5. Update the following `yaml` Kubernetes config files
> `client-deployment.yaml`
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
          image: peelmicro/dotnet-core-multi-client
          ports: 
            - containerPort: 3000
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
          image: peelmicro/dotnet-core-multi-server
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
          image: peelmicro/dotnet-core-multi-worker
          env:
              - name: REDIS_HOST
                value: redis-cluster-ip-service
              - name: REDIS_PORT
                value: '6379'
```
6. Copy the `.travis.yml` file from the `Python` solution
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
7. Copy and update the `deploy.sh` file
```bash
# Create the Docker Images
docker build -t peelmicro/dotnet-core-multi-client:latest -t peelmicro/dotnet-core-multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t peelmicro/dotnet-core-multi-server:latest -t peelmicro/dotnet-core-multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t peelmicro/dotnet-core-multi-worker:latest -t peelmicro/dotnet-core-multi-worker:$SHA -f ./worker/Dockerfile ./worker

# Take those images and push them to docker hub
docker push peelmicro/dotnet-core-multi-client:latest
docker push peelmicro/dotnet-core-multi-client:$SHA
docker push peelmicro/dotnet-core-multi-server:latest
docker push peelmicro/dotnet-core-multi-server:$SHA
docker push peelmicro/dotnet-core-multi-worker:latest
docker push peelmicro/dotnet-core-multi-worker:$SHA
# Apply all configs in the 'k8s' folder
kubectl apply -f k8s
# Imperatively set lastest images on each deployment
kubectl set image deployments/client-deployment client=peelmicro/dotnet-core-multi-client:$SHA
kubectl set image deployments/server-deployment server=peelmicro/dotnet-core-multi-server:$SHA
kubectl set image deployments/worker-deployment worker=peelmicro/dotnet-core-multi-worker:$SHA
```
8. Link the `dotnet-core-multi-docker` repository to [travis-ci.org](https://travis-ci.org/)
- Browse to `https://travis-ci.org/account/repositories`

![](/images/projects/dotnet-core-multi-docker/LinkToTravisCiOrg.png)

- Click on the button to link

![](/images/projects/dotnet-core-multi-docker/LinkToTravisCiOrg2.png)

- Go to `Settings`
- Add the `DOCKER_ID` and `DOCKER_PASSWORD` environment variables

![](/images/projects/dotnet-core-multi-docker/LinkToTravisCiOrg3.png)

9. Copy the `service-account.json` file from `Python` and add it to the `.gitignore` file.
10. Generate the `service-account.json.enc` file with `Travis CI CLI` using `PowerShell`
```bash
PS C:\WINDOWS\system32> cd C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex
PS C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex> docker run -it -v ${pwd}:/app ruby:2.3 sh
# ls
app  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# cd app
# ls
README.md  Server  Worker  client  deploy.sh  elastic-beanstalk  k8s  multi-container-minikube  service-account.json
```
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
```bash
Successfully logged in as peelmicro!
# travis encrypt-file service-account.json -r peelmicro/dotnet-core-multi-docker
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
- Ensure the Travis CI encryption setting variables have been created.

![](/images/projects/dotnet-core-multi-docker/EncryptServiceAccountJsonFile.png)

- Ensure the `service-account.json.enc` file has been created

![](/images/projects/dotnet-core-multi-docker/EncryptServiceAccountJsonFile2.png)

11. Update the `README.md` file
```md
## .Net Core version of the "Docker and Kubernetes: The Complete Guide" course.

> source code for the .Net Core version of the "Docker and Kubernetes: The Complete Guide" course.

## AWS Elastic Beanstalk version (Up to `11.-Multi-Container Deployments to AWS` section) is on the `elastic-beanstalk` subfolder:
### Execute it locally using 

$ cd elastic-beanstalk

$ docker-compose up --build

Navigate to http://localhost:3050/

### Continuous Integration with Travis CI + Amazon AWS

- The repository must be created on https://github.com/

- The repository must be assigned from GitHub on https://travis-ci.com/. The following setting variables must be set up:
1) AWS_ACCESS_KEY (for 11.-Multi-Container Deployments to AWS)
2) AWS_SECRET_KEY (for 11.-Multi-Container Deployments to AWS)
3) DOCKER_ID
4) DOCKER_PASSWORD

- The following instances must be created on Amazon (for 11.-Multi-Container Deployments to AWS)
1) Elastic Beanstalk (EB)
2) Relational Database Service (RDS) for Postgres
3) ElastiCache for Redis
4) Custom Security Group
5) Identity and Access Magagement (IAM)

## Kubernetes minkube local version (From `12.-Onwards to Kubernetes!`) is on the `multi-container-minikube` folder:

### Execute it locally 
1. Create the `secrets` for the `postgres` password: `kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password`
2. Execute the `mandatory` `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml` `Ingress Nginx` command
3. Enable Ingress using `minikube addons enable ingress`
4. Install all the `Kubernetes objects` with `kubectl apply -f k8s`
5. Get the local IP with `minikube IP`
6. Browse to the local IP 

## Kubernetes `Google Cloud` version (From `12.-Onwards to Kubernetes!`) is on the root folder:

- The repository must be assigned from GitHub on https://travis-ci.org/. The following setting variables must be set up:
1) DOCKER_ID
2) DOCKER_PASSWORD

## Within the code you can see how to
- Create different Docket Container Types and relate all of them
  1) React Client App
  2) .NET Core Web API
  3) .NET Core Console
  4) Postgres
  5) Redis
  6) NGINX
- Use Postgres from a Docker Container with .Net Core
- Use Redis from a Docker Container with .Net Core creating a subscription on the Web API App and subscribe to it on the Console App.
- Accept dynamic POST request with .Net Core API
- Send dynamic JSON responses from .Net Core API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with .NET Core API
- Work with different AWS Amazon service types to deploy a multi container Docker application using AWS Elastic Beanstalk
- Upload own Containers to Docker Hub and download them with the deployment
- Use Travis CI for the Continuous Integration Workflow
- Use Kubernetes to run the same multi container application
- Use Minikube to run Kubernetes locally
- Use Kubectl CLI for interacting with Kubernetes Master
- Use Google Kubernetes Engine to run the Kubernetes Cluster on the Cloud
- Run the Ruby Travis CI CLI from a Docker container locally
- Manage the automatic creation and renewal of a TLS certificate using Kubernetes to run the application with HTTPS

## In order to get to know what has been developed follow the course on

https://www.udemy.com/docker-and-kubernetes-the-complete-guide

```
12. Commit the code
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .gitignore
        new file:   .travis.yml
        modified:   README.md
        new file:   deploy.sh
        new file:   k8s/certificate.yaml
        modified:   k8s/client-cluster-ip-service.yaml
        modified:   k8s/client-deployment.yaml
        modified:   k8s/database-persistent-volume-claim.yaml
        modified:   k8s/ingress-service.yaml
        new file:   k8s/issuer.yaml
        modified:   k8s/postgres-cluster-ip-service.yaml
        modified:   k8s/postgres-deployment.yaml
        modified:   k8s/redis-cluster-ip-service.yaml
        modified:   k8s/redis-deployment.yaml
        modified:   k8s/server-cluster-ip-service.yaml
        modified:   k8s/server-deployment.yaml
        modified:   k8s/worker-deployment.yaml
        new file:   multi-container-minikube/.gitignore
        new file:   multi-container-minikube/README.md
        new file:   multi-container-minikube/Server/.dockerignore
        new file:   multi-container-minikube/Server/Controllers/ValuesController.cs
        new file:   multi-container-minikube/Server/Data/DataContext.cs
        new file:   multi-container-minikube/Server/Data/DatabaseService.cs
        new file:   multi-container-minikube/Server/Data/IDatabaseService.cs
        new file:   multi-container-minikube/Server/Dockerfile
        new file:   multi-container-minikube/Server/Models/Value.cs
        new file:   multi-container-minikube/Server/Program.cs
        new file:   multi-container-minikube/Server/Server.csproj
        new file:   multi-container-minikube/Server/Startup.cs
        new file:   multi-container-minikube/Worker/.dockerignore
        new file:   multi-container-minikube/Worker/Dockerfile
        new file:   multi-container-minikube/Worker/Program.cs
        new file:   multi-container-minikube/Worker/Worker.csproj
        new file:   multi-container-minikube/client/.dockerignore
        new file:   multi-container-minikube/client/Dockerfile
        new file:   multi-container-minikube/client/Dockerfile.dev
        new file:   multi-container-minikube/client/README.md
        new file:   multi-container-minikube/client/nginx/default.conf
        new file:   multi-container-minikube/client/package.json
        new file:   multi-container-minikube/client/public/favicon.ico
        new file:   multi-container-minikube/client/public/index.html
        new file:   multi-container-minikube/client/public/manifest.json
        new file:   multi-container-minikube/client/src/App.css
        new file:   multi-container-minikube/client/src/App.js
        new file:   multi-container-minikube/client/src/App.test.js
        new file:   multi-container-minikube/client/src/Fib.js
        new file:   multi-container-minikube/client/src/OtherPage.js
        new file:   multi-container-minikube/client/src/index.css
        new file:   multi-container-minikube/client/src/index.js
        new file:   multi-container-minikube/client/src/logo.svg
        new file:   multi-container-minikube/client/src/serviceWorker.js
        new file:   multi-container-minikube/client/yarn.lock
        new file:   multi-container-minikube/k8s/client-cluster-ip-service.yaml
        new file:   multi-container-minikube/k8s/client-deployment.yaml
        new file:   multi-container-minikube/k8s/database-persistent-volume-claim.yaml
        new file:   multi-container-minikube/k8s/ingress-service.yaml
        new file:   multi-container-minikube/k8s/postgres-cluster-ip-service.yaml
        new file:   multi-container-minikube/k8s/postgres-deployment.yaml
        new file:   multi-container-minikube/k8s/redis-cluster-ip-service.yaml
        new file:   multi-container-minikube/k8s/redis-deployment.yaml
        new file:   multi-container-minikube/k8s/server-cluster-ip-service.yaml
        new file:   multi-container-minikube/k8s/server-deployment.yaml
        new file:   multi-container-minikube/k8s/worker-deployment.yaml
        renamed:    nginx/Dockerfile -> multi-container-minikube/nginx/Dockerfile
        renamed:    nginx/Dockerfile.dev -> multi-container-minikube/nginx/Dockerfile.dev
        renamed:    nginx/default.conf -> multi-container-minikube/nginx/default.conf
        new file:   service-account.json.enc
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "Added Google Kubernetes Engine configuration"
[master 5cc159d] Added Google Kubernetes Engine configuration
 67 files changed, 9761 insertions(+), 21 deletions(-)
 create mode 100644 .travis.yml
 create mode 100644 deploy.sh
 create mode 100644 k8s/certificate.yaml
 create mode 100644 k8s/issuer.yaml
 create mode 100644 multi-container-minikube/.gitignore
 create mode 100644 multi-container-minikube/README.md
 create mode 100644 multi-container-minikube/Server/.dockerignore
 create mode 100644 multi-container-minikube/Server/Controllers/ValuesController.cs
 create mode 100644 multi-container-minikube/Server/Data/DataContext.cs
 create mode 100644 multi-container-minikube/Server/Data/DatabaseService.cs
 create mode 100644 multi-container-minikube/Server/Data/IDatabaseService.cs
 create mode 100644 multi-container-minikube/Server/Dockerfile
 create mode 100644 multi-container-minikube/Server/Models/Value.cs
 create mode 100644 multi-container-minikube/Server/Program.cs
 create mode 100644 multi-container-minikube/Server/Server.csproj
 create mode 100644 multi-container-minikube/Server/Startup.cs
 create mode 100644 multi-container-minikube/Worker/.dockerignore
 create mode 100644 multi-container-minikube/Worker/Dockerfile
 create mode 100644 multi-container-minikube/Worker/Program.cs
 create mode 100644 multi-container-minikube/Worker/Worker.csproj
 create mode 100644 multi-container-minikube/client/.dockerignore
 create mode 100644 multi-container-minikube/client/Dockerfile
 create mode 100644 multi-container-minikube/client/Dockerfile.dev
 create mode 100644 multi-container-minikube/client/README.md
 create mode 100644 multi-container-minikube/client/nginx/default.conf
 create mode 100644 multi-container-minikube/client/package.json
 create mode 100644 multi-container-minikube/client/public/favicon.ico
 create mode 100644 multi-container-minikube/client/public/index.html
 create mode 100644 multi-container-minikube/client/public/manifest.json
 create mode 100644 multi-container-minikube/client/src/App.css
 create mode 100644 multi-container-minikube/client/src/App.js
 create mode 100644 multi-container-minikube/client/src/App.test.js
 create mode 100644 multi-container-minikube/client/src/Fib.js
 create mode 100644 multi-container-minikube/client/src/OtherPage.js
 create mode 100644 multi-container-minikube/client/src/index.css
 create mode 100644 multi-container-minikube/client/src/index.js
 create mode 100644 multi-container-minikube/client/src/logo.svg
 create mode 100644 multi-container-minikube/client/src/serviceWorker.js
 create mode 100644 multi-container-minikube/client/yarn.lock
 create mode 100644 multi-container-minikube/k8s/client-cluster-ip-service.yaml
 create mode 100644 multi-container-minikube/k8s/client-deployment.yaml
 create mode 100644 multi-container-minikube/k8s/database-persistent-volume-claim.yaml
 create mode 100644 multi-container-minikube/k8s/ingress-service.yaml
 create mode 100644 multi-container-minikube/k8s/postgres-cluster-ip-service.yaml
 create mode 100644 multi-container-minikube/k8s/postgres-deployment.yaml
 create mode 100644 multi-container-minikube/k8s/redis-cluster-ip-service.yaml
 create mode 100644 multi-container-minikube/k8s/redis-deployment.yaml
 create mode 100644 multi-container-minikube/k8s/server-cluster-ip-service.yaml
 create mode 100644 multi-container-minikube/k8s/server-deployment.yaml
 create mode 100644 multi-container-minikube/k8s/worker-deployment.yaml
 rename {nginx => multi-container-minikube/nginx}/Dockerfile (100%)
 rename {nginx => multi-container-minikube/nginx}/Dockerfile.dev (100%)
 rename {nginx => multi-container-minikube/nginx}/default.conf (100%)
 create mode 100644 service-account.json.enc
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git push origin HEAD
Counting objects: 22, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (22/22), done.
Writing objects: 100% (22/22), 7.19 KiB | 320.00 KiB/s, done.
Total 22 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 5 local objects.
To https://github.com/peelmicro/dotnet-core-multi-docker.git
   7311ccb..5cc159d  HEAD -> master
```
13. Check if it has been installed correctly
- Ensure it has been deployed correctly with `Travis CI`
```bash
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-server]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-server
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-server]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-server
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-worker]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-worker
The push refers to a repository [docker.io/[secure]/dotnet-core-multi-worker]
An image does not exist locally with the tag: [secure]/dotnet-core-multi-worker
certificate.certmanager.k8s.io "k8s-multi-com-tls" configured
service "client-cluster-ip-service" unchanged
deployment.apps "client-deployment" configured
persistentvolumeclaim "database-persistent-volume-claim" unchanged
ingress.extensions "ingress-service" unchanged
clusterissuer.certmanager.k8s.io "letsencrypt-prod" configured
service "postgres-cluster-ip-service" unchanged
deployment.apps "postgres-deployment" unchanged
service "redis-cluster-ip-service" unchanged
deployment.apps "redis-deployment" unchanged
service "server-cluster-ip-service" unchanged
deployment.apps "server-deployment" configured
deployment.apps "worker-deployment" configured
deployment.apps "client-deployment" image updated
deployment.apps "server-deployment" image updated
deployment.apps "worker-deployment" image updated
Already up to date!
HEAD detached at 5cc159d
nothing to commit, working tree clean
Dropped refs/stash@{0} (1b4ca8481590fa81fe207c978f3ba9011d5a7a90)
Done. Your build exited with 0.
```

![](/images/projects/dotnet-core-multi-docker/GoogleEKUpdatedProperly.png)

- Browse to [Google Cloud Platform](https://console.cloud.google.com/home/dashboard)

![](/images/projects/dotnet-core-multi-docker/GoogleEKUpdatedProperly2.png)

![](/images/projects/dotnet-core-multi-docker/GoogleEKUpdatedProperly3.png)

![](/images/projects/dotnet-core-multi-docker/GoogleEKUpdatedProperly4.png)

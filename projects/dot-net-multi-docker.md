# .NET Core version of the "Docker and Kubernetes: The Complete Guide" Udemy Course 

Within the code you can see how to:
- Create different Docket Container Types and relate all of them:
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

The code is store in a [Github Repository](https://github.com/peelmicro/dotnet-core-multi-docker).

## Multi-Docker solution
### Create the initial version of the `Worker` Project
1. Create the folder for the `solution` and the `Worker` project
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>mkdir dotnet-core-complex
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide>cd dotnet-core-complex
```
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>mkdir Worker
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>cd Worker
```
2. Execute the `.Net Core CLI command` to create a new `console` application
```sh
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
```txt
bin\
obj\
```

5. Build the `Docker image`
```sh
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

7. Run the image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker run 47b4ff18744b
Hello World!
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker run dotnet-core-worker-dev
Hello World!
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/Worker
$ docker run dotnet-core-worker-dev:latest
Hello World!
```

### Create the initial version of the `Server` Project
1. Create the folder for the `Server` project
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>mkdir Server

C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\dotnet-core-complex>cd Server
```

2. Execute the `.Net Core CLI command` to create a new `webapi` application 
```sh
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
```sh
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
```sh
C:\Program Files\PostgreSQL\10\bin>pg_isready
/tmp:5432 - accepting connections
```
```sh
C:\Program Files\PostgreSQL\10\bin>(pg_isready -q -h 127.0.0.1 && echo Ok) || echo Fail
Ok
```
```sh
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
```sh
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
```sh
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
```sh
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex
$ git init
Initialized empty Git repository in C:/Users/juan.pablo.perez/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex/.git/
```

2. Create the `docker-compose.yml` document
> `docker-compose.yml`
```yml
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
```sh
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
```sh
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
```sh
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
- Reverted `Server Dockerfile`
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
- Reverted `Worker Dockerfile`
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
- Reverted `docker-compose.yml`
> `docker-compose.yml`
```yml
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
```sh
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
- Change from .UseUrls("http://localhost:5000/") to .UseUrls("http://*:5000/")
```sh
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

4. Browse to http://localhost:3050/
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
```sh
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
```sh
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
```sh
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git remote add origin https://github.com/peelmicro/dotnet-core-multi-docker.git
```
```sh
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
```sh
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
```yml
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
```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .travis.yml

no changes added to commit (use "git add" and/or "git commit -a")
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "Added after_success to .travis.yml2"
[master ac3bd8a] Added after_success to .travis.yml2
 1 file changed, 12 insertions(+), 12 deletions(-)
```
```sh
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
```sh
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
```yml
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
- Go to https://console.aws.amazon.com/elasticbeanstalk/home?region-us-east-1#/welcome
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
- Browse to http://dotnetcoremutidocker-env.fzi9uupmiy.us-east-1.elasticbeanstalk.com/

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

- The situation about the current database can be seen on https://console.aws.amazon.com/rds/home?region-us-east-1#dbinstance:id-dotnet-core-multi-docker-postgres 


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

It goes to https://console.aws.amazon.com/elasticache/home?region-us-east-1#redis: and the dotnet-core-multi-docker-redis cluster starts to create

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
      - `PGHOST`-`dotnet-core-multi-docker-postgres.cvzlrthufo75.us-east-1.rds.amazonaws.com` (it must be obtained from Connect - end-point on the RDS instance)
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

User: dotnet-core-multi-docker-deployer
Access key ID: AKIAJVPFWXXXXXXXXXXX
Secret access key: pJauqjTXEBPYUGVfFNkTXXXXXXXXXXXXXX
```

9. Add the two keys obatined to `Travis CI` setting variables

- On https://travis-ci.com/peelmicro/dotnet-core-multi-docker click on `More Opcions -Settings` add:
AWS_ACCESS_KEY: `AKIAJVPFWXXXXXXXXXXX`
AWS_SECRET_KEY: `pJauqjTXEBPYUGVfFNkTXXXXXXXXXXXXXX`

10. Commit the changes 
```sh
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/dotnet-core-complex (master)
$ git commit -m "added Dockerrun.aws.json"
[master ca088bd] added Dockerrun.aws.json
 2 files changed, 51 insertions(+), 11 deletions(-)
 create mode 100644 Dockerrun.aws.json
```
```sh
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
```sh
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

- Scrool down to 
Deletion protection

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

Delete dotnet-core-multi-docker-postgres instance?

Are you sure you want to Delete the dotnet-core-multi-docker-postgres DB Instance?

[ ] - Create final snapshot?
Determines whether a final DB Snapshot is created before the DB instance is deleted.

[X] - I acknowledge that upon instance deletion, automated backups, including system snapshots and point-in-time recovery, will no longer be available.

dotnet-core-multi-docker-postgres-final-snapshot
To confirm deletion, type delete me into the field


- Enter `delete me` on the last field and the click on `Delete`

It's deleted after a while.

> 3rd) EC (Redis)

- Look for `Elastic Cache`, then click on `Redis` on left menu 
- Click on the `multi-docker-redis` cluster and then on the `Delete` butoon on the top

	
Delete Cluster
Are you sure you want to delete this Cluster?
ncmulti-docker-redis
-Click on `Delete`

It's deleted after a while

> 4th) (Optional) Security Group

- Look for `VPC`, then on your `Security Groups` on the left menu
- Select `dotnet-core-multi-docker` Group and then `Security Group Actions` and then `Delete Security Group`

Delete Security Group
Are you sure you want to delete this security group?
sg-06f078fb1006ceed7 - dotnet-core-multi-docker (dotnet-core-multi-docker)
- Click on `Yes, Delete`

> 5th) (Optional) IAM security users

- Look for `IAM`, then click on `users` on the left menu.

- mark the `dotnet-core-multi-docker-deployer` user and the click on `Delete user`

Delete user
The following users will be permanently deleted, including all user data, user security credentials, and user inline policies. Deleted user data cannot be recovered. Are you sure that you want to delete the following users?
User name Last activity
dotnet-core-multi-docker-deployer 1 hour ago
[X] One or more of these users have recently accessed AWS. Deleting them could affect running systems. Check the box to confirm that you want to delete these users.
- Click on `Yes, delete`

The user is deleted.
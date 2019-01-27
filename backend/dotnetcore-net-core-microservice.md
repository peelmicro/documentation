# .NET Core Microservices

> Github Repositories
- [dotnet-core-microservices](https://github.com/peelmicro/dotnet-core-microservices).

The [.NET Core Microservices](https://www.udemy.com/net-core-microservices/) Udemy course explains how to build distributed system using microservices architecture .

> Table of contents
[[toc]]

> Related projects

| Project                                                                                                                                         | Dates               | Source Code                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| [.NET Core Microservices](/backend/dotnetcore-net-core-microservice.md) | 27/01/2019 | [dotnet-core-microservices](https://github.com/peelmicro/dotnet-core-microservices) |

## What I've learned
- Use NET Core platform to build a microservices architecture- 
- Send messages through distributed system with the RabbitMQ service bus
- Store data in the NoSQL database, MongoDB
- Store user identities and authenticating requests using JWT
- Deploy the application to the cloud with Docker and Docker Compose
- Explore commands, events, handlers and other design patterns
- Delve into unit- and integration-testing the distributed system


## 1. System Arquitecture

### 1. Course Overview

![](/images/backend/dotnetcore-net-core-microservice/Overview.png)

![](/images/backend/dotnetcore-net-core-microservice/Overview2.png)

![](/images/backend/dotnetcore-net-core-microservice/Overview3.png)

![](/images/backend/dotnetcore-net-core-microservice/Overview4.png)

![](/images/backend/dotnetcore-net-core-microservice/Overview5.png)

### 2. What Are We Going to Build?

![](/images/backend/dotnetcore-net-core-microservice/WhatWeWillBuild.png)

![](/images/backend/dotnetcore-net-core-microservice/WhatWeWillBuild2.png)

- Normal Monolotic applicacion:

API -> Infraestructure -> Core

- Actio Microservices applications. It will contain 3 microservices:

1. API - gateway
2. Identity service - handling authentication and account
3. Activities service - storing the activities data

### 3. Setting up the Environment

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment.png)

- Download the latest version of [.Net Core SDK](https://dotnet.microsoft.com/download)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment2.png)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment3.png)

- As it's explained in [Do I need to install .NET Core runtime if .NET Core SDK is already installed?](https://stackoverflow.com/questions/52243308/do-i-need-to-install-net-core-runtime-if-net-core-sdk-is-already-installed), we don't need to install the **.Net Core Runtime** because the SKD already contains the Runtime.

- In case we want to install `.Net core` on a server we could need to install the runtime as well. In that case, download the latest version of [.Net Core Runtime](https://dotnet.microsoft.com/download)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment4.png)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment5.png)

- Download and install Docker from [Install Docker Desktop for Windows 10+](https://docs.docker.com/docker-for-windows/install/)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment6.png)

- Once Docker is installed, ensure it is running:

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment7.png)

- Download and install `MongoDB` from [MongoDB Download Center](https://www.mongodb.com/download-center)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment8.png)

- Ensure the `MongoDB` service is running:

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment9.png)

- Download and install `Postman` from [Get Postman for Windows](https://www.getpostman.com/downloads/)

- Ensure `Postmant Desktop` work properly

![](/images/backend/dotnetcore-net-core-microservice/SettingUpEnvironment10.png)

### 4. Discussing System Architecture

![](/images/backend/dotnetcore-net-core-microservice/DiscussingSystemArchitecture.png)

- Any `request` to the `HTTP API [gateway]` will be sent to the `sevice bus`, and depending the `request type` it will be processed by the `Identity Service` or the `Activities Service`. Once in the specific `Service` it will be executed the specific `command` requested.

- We could have as many instances as we need of both `Identity Service` and `Activities Service`, so the system could scale very easily.

- in order to manage the `messages` we will use a message system based on `RabbitMQ service bus`.

- We'll have the following 4 projects to manage the system:

1. Actio.Api - MongDB [CQRS]
2. Actio.Common -> Massages
3. Actio.Services.Identity - [MongoDB]
4. Actio.Services.Activites - [MongoDB]

- We'll also have the following projects to manage the tests.

1. Actio.Tests
2. Actio.tests.EndToEnd

- Each service will have their own Database. It will use MongoDB for each of them, but that is not mandatory. We could have one or more different database types for each Service.

![](/images/backend/dotnetcore-net-core-microservice/DiscussingSystemArchitecture2.png)

### 5. Creating Solution

![](/images/backend/dotnetcore-net-core-microservice/CreatingSolution.png)

- Create the new folder for the solution and execute the `dotnet new sln` comand.

```sh
PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices> md dotnet-core-microservices


  Directory: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       19/01/2019     11:35                dotnet-core-microservices
```

```sh
PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices> cd .\dotnet-core-microservices\
PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices> dotnet new sln

Welcome to .NET Core!
---------------------
Learn more about .NET Core: https://aka.ms/dotnet-docs
Use 'dotnet --help' to see available commands or visit: https://aka.ms/dotnet-cli-docs

Telemetry
---------
The .NET Core tools collect usage data in order to help us improve your experience. The data is anonymous and doesn't include command-line arguments. The data is collected by Microsoft and shared with the community. You can opt-out of telemetry by setting the DOTNET_CLI_TELEMETRY_OPTOUT environment variable to '1' or 'true' using your favorite shell.

Read more about .NET Core CLI Tools telemetry: https://aka.ms/dotnet-cli-telemetry

ASP.NET Core
------------
Successfully installed the ASP.NET Core HTTPS Development Certificate.
To trust the certificate run 'dotnet dev-certs https --trust' (Windows and macOS only). For establishing trust on other platforms refer to the platform specific documentation.
For more information on configuring HTTPS see https://go.microsoft.com/fwlink/?linkid=848054.
Getting ready...
The template "Solution File" was created successfully.
```

```sh
PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices> dir


    Directory: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----       19/01/2019     11:36            540 dotnet-core-microservices.sln
```

```sh
PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices> mkdir src


    Directory: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       19/01/2019     11:37                src


PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices> mkdir scripts


    Directory: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       19/01/2019     11:38                scripts


PS C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices> mkdir tests


    Directory: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       19/01/2019     11:38                tests
```

- Create the main projects for the solution from the `src` folder.

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ cd src
```

> Actio.Api

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ dotnet new webapi -n Actio.Api
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Api\Actio.Api.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\obj\Actio.Api.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\obj\Actio.Api.csproj.nuget.g.targets.
  Restore completed in 4.86 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj.

Restore succeeded.
```

> Actio.Services.Identity

```sh
$ dotnet new webapi -n Actio.Services.Identity
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Services.Identity\Actio.Services.Identity.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\obj\Actio.Services.Identity.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\obj\Actio.Services.Identity.csproj.nuget.g.targets.
  Restore completed in 4.13 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj.

Restore succeeded.
```

> Actio.Services.Activities

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ dotnet new webapi -n Actio.Services.Activities
The template "ASP.NET Core Web API" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Services.Activities\Actio.Services.Activities.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\obj\Actio.Services.Activities.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\obj\Actio.Services.Activities.csproj.nuget.g.targets.
  Restore completed in 3.93 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj.

Restore succeeded.
```

> Actio.Common

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ dotnet new classlib -n Actio.Common
The template "Class library" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Common\Actio.Common.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\obj\Actio.Common.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\obj\Actio.Common.csproj.nuget.g.targets.
  Restore completed in 203.77 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.

Restore succeeded.
```

- Add the references between our projects

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ dotnet add Actio.Api/Actio.Api.csproj reference Actio.Common/Actio.Common.csproj
Reference `..\Actio.Common\Actio.Common.csproj` added to the project.
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ dotnet add Actio.Services.Identity/Actio.Services.Identity.csproj reference Actio.Common/Actio.Common.csproj
Reference `..\Actio.Common\Actio.Common.csproj` added to the project.
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ dotnet add Actio.Services.Activities/Actio.Services.Activities.csproj reference Actio.Common/Actio.Common.csproj
Reference `..\Actio.Common\Actio.Common.csproj` added to the project.

```

- Add the projects to the solution

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ cat dotnet-core-microservices.sln

Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 15
VisualStudioVersion = 15.0.26124.0
MinimumVisualStudioVersion = 15.0.26124.0
Global
        GlobalSection(SolutionConfigurationPlatforms) = preSolution
                Debug|Any CPU = Debug|Any CPU
                Debug|x64 = Debug|x64
                Debug|x86 = Debug|x86
                Release|Any CPU = Release|Any CPU
                Release|x64 = Release|x64
                Release|x86 = Release|x86
        EndGlobalSection
        GlobalSection(SolutionProperties) = preSolution
                HideSolutionNode = FALSE
        EndGlobalSection
EndGlobal
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add src/Actio.Api/Actio.Api.csproj
Project `src\Actio.Api\Actio.Api.csproj` added to the solution.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add src/Actio.Common/Actio.Common.csproj
Project `src\Actio.Common\Actio.Common.csproj` added to the solution.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add src/Actio.Services.Identity/Actio.Services.Identity.csproj
Project `src\Actio.Services.Identity\Actio.Services.Identity.csproj` added to the solution.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add src/Actio.Services.Activities/Actio.Services.Activities.csproj
Project `src\Actio.Services.Activities\Actio.Services.Activities.csproj` added to the solution.
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ cat dotnet-core-microservices.sln

Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 15
VisualStudioVersion = 15.0.26124.0
MinimumVisualStudioVersion = 15.0.26124.0
Project("{2150E333-8FDC-42A3-9474-1A3956D46DE8}") = "src", "src", "{93DAD3E5-11DC-4D63-962C-B15E082E6E6B}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "Actio.Api", "src\Actio.Api\Actio.Api.csproj", "{1BADE800-B322-495A-97E3-BB58DCABC900}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "Actio.Common", "src\Actio.Common\Actio.Common.csproj", "{666BF428-BE46-4AE2-ACA2-FBC0BEA25530}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "Actio.Services.Identity", "src\Actio.Services.Identity\Actio.Services.Identity.csproj", "{AA67DABF-94A1-4261-A4AB-0B1031BBA737}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "Actio.Services.Activities", "src\Actio.Services.Activities\Actio.Services.Activities.csproj", "{103D068D-F947-41B9-B5A8-A3815EF09106}"
EndProject
Global
        GlobalSection(SolutionConfigurationPlatforms) = preSolution
                Debug|Any CPU = Debug|Any CPU
                Debug|x64 = Debug|x64
                Debug|x86 = Debug|x86
                Release|Any CPU = Release|Any CPU
                Release|x64 = Release|x64
                Release|x86 = Release|x86
        EndGlobalSection
        GlobalSection(SolutionProperties) = preSolution
                HideSolutionNode = FALSE
        EndGlobalSection
        GlobalSection(ProjectConfigurationPlatforms) = postSolution
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Debug|Any CPU.Build.0 = Debug|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Debug|x64.ActiveCfg = Debug|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Debug|x64.Build.0 = Debug|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Debug|x86.ActiveCfg = Debug|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Debug|x86.Build.0 = Debug|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Release|Any CPU.ActiveCfg = Release|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Release|Any CPU.Build.0 = Release|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Release|x64.ActiveCfg = Release|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Release|x64.Build.0 = Release|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Release|x86.ActiveCfg = Release|Any CPU
                {1BADE800-B322-495A-97E3-BB58DCABC900}.Release|x86.Build.0 = Release|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Debug|Any CPU.Build.0 = Debug|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Debug|x64.ActiveCfg = Debug|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Debug|x64.Build.0 = Debug|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Debug|x86.ActiveCfg = Debug|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Debug|x86.Build.0 = Debug|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Release|Any CPU.ActiveCfg = Release|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Release|Any CPU.Build.0 = Release|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Release|x64.ActiveCfg = Release|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Release|x64.Build.0 = Release|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Release|x86.ActiveCfg = Release|Any CPU
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530}.Release|x86.Build.0 = Release|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Debug|Any CPU.Build.0 = Debug|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Debug|x64.ActiveCfg = Debug|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Debug|x64.Build.0 = Debug|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Debug|x86.ActiveCfg = Debug|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Debug|x86.Build.0 = Debug|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Release|Any CPU.ActiveCfg = Release|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Release|Any CPU.Build.0 = Release|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Release|x64.ActiveCfg = Release|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Release|x64.Build.0 = Release|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Release|x86.ActiveCfg = Release|Any CPU
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737}.Release|x86.Build.0 = Release|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Debug|Any CPU.Build.0 = Debug|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Debug|x64.ActiveCfg = Debug|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Debug|x64.Build.0 = Debug|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Debug|x86.ActiveCfg = Debug|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Debug|x86.Build.0 = Debug|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Release|Any CPU.ActiveCfg = Release|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Release|Any CPU.Build.0 = Release|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Release|x64.ActiveCfg = Release|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Release|x64.Build.0 = Release|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Release|x86.ActiveCfg = Release|Any CPU
                {103D068D-F947-41B9-B5A8-A3815EF09106}.Release|x86.Build.0 = Release|Any CPU
        EndGlobalSection
        GlobalSection(NestedProjects) = preSolution
                {1BADE800-B322-495A-97E3-BB58DCABC900} = {93DAD3E5-11DC-4D63-962C-B15E082E6E6B}
                {666BF428-BE46-4AE2-ACA2-FBC0BEA25530} = {93DAD3E5-11DC-4D63-962C-B15E082E6E6B}
                {AA67DABF-94A1-4261-A4AB-0B1031BBA737} = {93DAD3E5-11DC-4D63-962C-B15E082E6E6B}
                {103D068D-F947-41B9-B5A8-A3815EF09106} = {93DAD3E5-11DC-4D63-962C-B15E082E6E6B}
        EndGlobalSection
EndGlobal
```

- Restore the libraries (Althought it's done automatically when the projects are created)

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet restore
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj...
  Restore completed in 45.78 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Restore completed in 2.34 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj.
  Restore completed in 2.34 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj.
  Restore completed in 2.34 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj.
```

- Build the solution to ensure that everything is working properly

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet build
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 44.3 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Restore completed in 210.13 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj.
  Restore completed in 210.21 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj.
  Restore completed in 210.29 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj.
  Actio.Common -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Debug\netstandard2.0\Actio.Common.dll
C:\Program Files\dotnet\sdk\2.2.103\Microsoft.Common.CurrentVersion.targets(3325,5): warning MSB3491: Could not write lines to file "C:\Users\juan.pablo.perez\AppData\Local\Temp\.NETCoreApp,Version=v2.2.AssemblyAttributes.cs". The process cannot access the file 'C:\Users\juan.pablo.perez\AppData\Local\Temp\.NETCoreApp,Version=v2.2.AssemblyAttributes.cs' because it is
being used by another process. [C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj]
  Actio.Api -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Debug\netcoreapp2.2\Actio.Api.dll
  Actio.Services.Identity -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\bin\Debug\netcoreapp2.2\Actio.Services.Identity.dll
  Actio.Services.Activities -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\bin\Debug\netcoreapp2.2\Actio.Services.Activities.dll

Build succeeded.

C:\Program Files\dotnet\sdk\2.2.103\Microsoft.Common.CurrentVersion.targets(3325,5): warning MSB3491: Could not write lines to file "C:\Users\juan.pablo.perez\AppData\Local\Temp\.NETCoreApp,Version=v2.2.AssemblyAttributes.cs". The process cannot access the file 'C:\Users\juan.pablo.perez\AppData\Local\Temp\.NETCoreApp,Version=v2.2.AssemblyAttributes.cs' because it is
being used by another process. [C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj]
    1 Warning(s)
    0 Error(s)

Time Elapsed 00:00:06.82
```

- Build again starting `Visual Code` as an administrator

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet build
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 44.26 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Restore completed in 173.83 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj.
  Restore completed in 173.98 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj.
  Restore completed in 174 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj.
  Actio.Common -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Debug\netstandard2.0\Actio.Common.dll
  Actio.Services.Activities -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\bin\Debug\netcoreapp2.2\Actio.Services.Activities.dll
  Actio.Services.Identity -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\bin\Debug\netcoreapp2.2\Actio.Services.Identity.dll
  Actio.Api -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Debug\netcoreapp2.2\Actio.Api.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:04.92
```

- C;ink on `Yes` if the following window is shown when opening the `Visual Code` IDE.

![](/images/backend/dotnetcore-net-core-microservice/CreatingSolution2.png)

![](/images/backend/dotnetcore-net-core-microservice/CreatingSolution3.png)

![](/images/backend/dotnetcore-net-core-microservice/CreatingSolution4.png)

## 2. Messaging

### 6. Configuring RabbitMQ Service Bus

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus2.png)

[RabbitMQ](https://en.wikipedia.org/wiki/RabbitMQ) is an open source message broker software (sometimes called message-oriented middleware) that originally implemented the Advanced Message Queuing Protocol (AMQP) and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol (STOMP), Message Queuing Telemetry Transport (MQTT), and other protocols.

The RabbitMQ server program is written in the Erlang programming language and is built on the Open Telecom Platform framework for clustering and failover. Client libraries to interface with the broker are available for all major programming languages.

We can find more information on [RabbitMQ](https://www.rabbitmq.com/)

- In our application we are going to send two types of messages:

1. Commands
2. Events

- There can be one or more subscribers to any type of particular message.

- We can install or use RabbitMQ on different ways

1. Download the RabbitMQ clicking on the `Download + Instalation` button.

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus3.png)

- Click on ``Windows: Installer (recommended)`

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus4.png)

- Earlang must be installed before starting RabbitMQ

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus5.png)

- Download `Earlang` from [Earlang - DOWNLOAD](http://www.erlang.org/downloads)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus6.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus6b.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus6c.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus6d.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus6e.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus6f.png)

- Click on the `exe intaller` to download the RabbitMQ installer

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus7.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus8.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus9.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus10.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus11.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus12.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus13.png)

- Ensure the service is running

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus14.png)

2. Use [CloudAMQP - RabbitMQ as a Service](https://www.cloudamqp.com/).

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus15.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus16.png)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus17.png)

ConfiguringRabbitMQServiceBus18

3. Use `chocolatey` manage package for [RabbitMQ](https://chocolatey.org/packages/rabbitmq)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus18.png)

```sh
choco install rabbitmq
```

4. Use the [Docker Image](https://hub.docker.com/_/rabbitmq/)

![](/images/backend/dotnetcore-net-core-microservice/ConfiguringRabbitMQServiceBus19.png)

- Pull the image using `docker pull rabbitmq`

```sh
$ docker pull rabbitmq
Using default tag: latest
latest: Pulling from library/rabbitmq
f17d81b4b692: Pull complete
02fe1bd1a85c: Pull complete
66c15a50f4da: Pull complete
771c4c62018c: Pull complete
05e166e2684c: Pull complete
5eb4efce3466: Pull complete
9b5d77af0f63: Pull complete
f7fc14f8eeeb: Pull complete
31e1448101d9: Pull complete
196612f40314: Pull complete
8cd7ab5c5659: Pull complete
aae6dd0bf4aa: Pull complete
Digest: sha256:09f02eca2bbb52620187c8a0d03b0eb31cd911d1ac5d9589a67a1670226dc9a6
Status: Downloaded newer image for rabbitmq:latest
```

- Run the container using `docker run -p 5672:5672 rabbitmq`

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ docker run -p 5672:5672 rabbitmq
C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: driver failed programming external connectivity on endpoint laughing_tereshkova (857174fc2dd71c187d6bf638095396b1ba89e9f64c2e4faf65484306b081b02d): Error starting userland proxy: Bind for 0.0.0.0:5672 failed: port is already allocated.
```

- The previous error about the 5672 is opened is because RabbitMQ service is running. It order to be able to run the container the service must be stopped.

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$  docker run -p 5672:5672 rabbitmq
2019-01-20 05:56:53.245 [info] <0.33.0> Application lager started on node rabbit@c9f09993e813
2019-01-20 05:56:54.019 [info] <0.33.0> Application crypto started on node rabbit@c9f09993e813
2019-01-20 05:56:54.219 [info] <0.33.0> Application inets started on node rabbit@c9f09993e813
2019-01-20 05:56:54.255 [info] <0.33.0> Application os_mon started on node rabbit@c9f09993e813
2019-01-20 05:56:54.256 [info] <0.33.0> Application jsx started on node rabbit@c9f09993e813
2019-01-20 05:56:54.547 [info] <0.33.0> Application mnesia started on node rabbit@c9f09993e813
2019-01-20 05:56:54.548 [info] <0.33.0> Application recon started on node rabbit@c9f09993e813
2019-01-20 05:56:54.549 [info] <0.33.0> Application xmerl started on node rabbit@c9f09993e813
2019-01-20 05:56:54.549 [info] <0.33.0> Application asn1 started on node rabbit@c9f09993e813
2019-01-20 05:56:54.549 [info] <0.33.0> Application public_key started on node rabbit@c9f09993e813
2019-01-20 05:56:54.702 [info] <0.33.0> Application ssl started on node rabbit@c9f09993e813
2019-01-20 05:56:54.719 [info] <0.33.0> Application ranch started on node rabbit@c9f09993e813
2019-01-20 05:56:54.720 [info] <0.33.0> Application ranch_proxy_protocol started on node rabbit@c9f09993e813
2019-01-20 05:56:54.722 [info] <0.33.0> Application rabbit_common started on node rabbit@c9f09993e813
2019-01-20 05:56:54.761 [info] <0.192.0>
 Starting RabbitMQ 3.7.8 on Erlang 20.3.8.5
 Copyright (C) 2007-2018 Pivotal Software, Inc.
 Licensed under the MPL.  See http://www.rabbitmq.com/

  ##  ##
  ##  ##      RabbitMQ 3.7.8. Copyright (C) 2007-2018 Pivotal Software, Inc.
  ##########  Licensed under the MPL.  See http://www.rabbitmq.com/
  ######  ##
  ##########  Logs: <stdout>

              Starting broker...
2019-01-20 05:56:54.793 [info] <0.192.0>
 node           : rabbit@c9f09993e813
 home dir       : /var/lib/rabbitmq
 config file(s) : /etc/rabbitmq/rabbitmq.conf
 cookie hash    : dpdxF83IAAjEiPxot7aShQ==
 log(s)         : <stdout>
 database dir   : /var/lib/rabbitmq/mnesia/rabbit@c9f09993e813
2019-01-20 05:56:59.964 [info] <0.200.0> Memory high watermark set to 792 MiB (830613094 bytes) of 1980 MiB (2076532736 bytes) total
2019-01-20 05:56:59.974 [info] <0.202.0> Enabling free disk space monitoring
2019-01-20 05:56:59.974 [info] <0.202.0> Disk free limit set to 50MB
2019-01-20 05:56:59.980 [info] <0.205.0> Limiting to approx 1048476 file handles (943626 sockets)
2019-01-20 05:56:59.981 [info] <0.206.0> FHC read buffering:  OFF
2019-01-20 05:56:59.981 [info] <0.206.0> FHC write buffering: ON
2019-01-20 05:56:59.985 [info] <0.192.0> Node database directory at /var/lib/rabbitmq/mnesia/rabbit@c9f09993e813 is empty. Assuming we need to join an existing cluster or initialise from scratch...
2019-01-20 05:56:59.985 [info] <0.192.0> Configured peer discovery backend: rabbit_peer_discovery_classic_config
2019-01-20 05:56:59.985 [info] <0.192.0> Will try to lock with peer discovery backend rabbit_peer_discovery_classic_config
2019-01-20 05:56:59.985 [info] <0.192.0> Peer discovery backend does not support locking, falling back to randomized delay
2019-01-20 05:56:59.985 [info] <0.192.0> Peer discovery backend rabbit_peer_discovery_classic_config does not support registration, skipping randomized startup delay.
2019-01-20 05:56:59.985 [info] <0.192.0> All discovered existing cluster peers:
2019-01-20 05:56:59.985 [info] <0.192.0> Discovered no peer nodes to cluster with
2019-01-20 05:56:59.989 [info] <0.33.0> Application mnesia exited with reason: stopped
2019-01-20 05:57:00.060 [info] <0.33.0> Application mnesia started on node rabbit@c9f09993e813
2019-01-20 05:57:00.393 [info] <0.192.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
2019-01-20 05:57:00.436 [info] <0.192.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
2019-01-20 05:57:00.475 [info] <0.192.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
2019-01-20 05:57:00.476 [info] <0.192.0> Peer discovery backend rabbit_peer_discovery_classic_config does not support registration, skipping registration.
2019-01-20 05:57:00.477 [info] <0.192.0> Priority queues enabled, real BQ is rabbit_variable_queue
2019-01-20 05:57:00.493 [info] <0.372.0> Starting rabbit_node_monitor
2019-01-20 05:57:00.536 [info] <0.192.0> message_store upgrades: 1 to apply
2019-01-20 05:57:00.536 [info] <0.192.0> message_store upgrades: Applying rabbit_variable_queue:move_messages_to_vhost_store
2019-01-20 05:57:00.536 [info] <0.192.0> message_store upgrades: No durable queues found. Skipping message store migration
2019-01-20 05:57:00.536 [info] <0.192.0> message_store upgrades: Removing the old message store data
2019-01-20 05:57:00.540 [info] <0.192.0> message_store upgrades: All upgrades applied successfully
2019-01-20 05:57:00.573 [info] <0.192.0> Adding vhost '/'
2019-01-20 05:57:00.676 [info] <0.408.0> Making sure data directory '/var/lib/rabbitmq/mnesia/rabbit@c9f09993e813/msg_stores/vhosts/628WB79CIFDYO9LJI6DKMI09L' for vhost '/' exists
2019-01-20 05:57:00.699 [info] <0.408.0> Starting message stores for vhost '/'
2019-01-20 05:57:00.700 [info] <0.412.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_transient": using rabbit_msg_store_ets_index to provide index
2019-01-20 05:57:00.703 [info] <0.408.0> Started message store of type transient for vhost '/'
2019-01-20 05:57:00.703 [info] <0.415.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_persistent": using rabbit_msg_store_ets_index to provide index
2019-01-20 05:57:00.706 [warning] <0.415.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_persistent": rebuilding indices from scratch
2019-01-20 05:57:00.708 [info] <0.408.0> Started message store of type persistent for vhost '/'
2019-01-20 05:57:00.710 [info] <0.192.0> Creating user 'guest'
2019-01-20 05:57:00.723 [info] <0.192.0> Setting user tags for user 'guest' to [administrator]
2019-01-20 05:57:00.732 [info] <0.192.0> Setting permissions for 'guest' in '/' to '.*', '.*', '.*'
2019-01-20 05:57:00.752 [info] <0.453.0> started TCP Listener on [::]:5672
2019-01-20 05:57:00.767 [info] <0.192.0> Setting up a table for connection tracking on this node: tracked_connection_on_node_rabbit@c9f09993e813
2019-01-20 05:57:00.778 [info] <0.192.0> Setting up a table for per-vhost connection counting on this node: tracked_connection_per_vhost_on_node_rabbit@c9f09993e813
2019-01-20 05:57:00.778 [info] <0.33.0> Application rabbit started on node rabbit@c9f09993e813
2019-01-20 05:57:01.423 [info] <0.5.0> Server startup complete; 0 plugins started.
 completed with 0 plugins.
```

- From other terminal:

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                   NAMES
c9f09993e813        rabbitmq            "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        4369/tcp, 5671/tcp, 25672/tcp, 0.0.0.0:5672->5672/tcp   hopeful_ptolemy
```

### 7. Creating Commands

![](/images/backend/dotnetcore-net-core-microservice/CreatingCommands.png)

- On the `Actio.Common` project create the new `Commands` and the following interfaces and classes.

> Actio.Common -> Commands -> ICommand.cs

```cs
namespace Actio.Common.Commands
    // Marker interface
    public interface ICommand
    {

    }
}
```

> Actio.Common -> Commands -> IAuthenticatedCommand.cs

```cs
using System;

namespace Actio.Common.Commands
{
    public interface IAuthenticatedCommand : ICommand
    {
        Guid UserId { get; set; }
    }
}
```

> Actio.Common -> Commands -> ICommandHamdler.cs

```cs
using System.Threading.Tasks;

namespace Actio.Common.Commands
{
    public interface ICommandHandler<in T> where T:ICommand
    {
         Task HandleAsync(T command);
    }
}
```

> Actio.Common -> Commands -> AuthenticatetUser.cs

```cs
namespace Actio.Common.Commands
{
    public class AuthenticateUser: ICommand
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
```

> Actio.Common -> Commands -> CreatUser.cs

```cs
namespace Actio.Common.Commands
{
  public class CreateUser : ICommand
  {
    public string Email { get; set; }
    public string Password { get; set; }
    public string Name { get; set; }
  }
}
```

> Actio.Common -> Commands -> CreatActivity.cs

```cs
using System;

namespace Actio.Common.Commands
{
  public class CreateActivity : IAuthenticatedCommand
  {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }

  }
}
```

### 8. Creating Events

![](/images/backend/dotnetcore-net-core-microservice/CreatingEvents.png)

- On the `Actio.Common` project create the new `Events` and the following interfaces and classes.

> Actio.Common -> Commands -> IEvent.cs

```cs
namespace Actio.Common.Events
{
  // Marker interface
  public interface IEvent
  {
  }
}

```

> Actio.Common -> Commands -> IRejectedEvent.cs

```cs
namespace Actio.Common.Events
{
  public interface IRejectedEvent : IEvent
  {
    string Reason { get; }
    string Code { get; }
  }
}
```

> Actio.Common -> Commands -> IEventHandler.cs

```cs
using System.Threading.Tasks;

namespace Actio.Common.Events
{
  public interface IEventHandler<in T> where T : IEvent
  {
    Task HandleAsync(T @event);
  }
}
```

> Actio.Common -> Commands -> UserCreated.cs

```cs
namespace Actio.Common.Events
{
  public class UserCreated : IEvent
  {
    public string Email { get; }
    public string Name { get; }

    protected UserCreated()
    {
    }

    public UserCreated(string email, string name)
    {
      Email = email;
      Name = name;
    }
  }
}
```

> Actio.Common -> Commands -> ActivityCreated.cs

```cs
using System;

namespace Actio.Common.Events
{
  public class ActivityCreated : IAuthenticatedEvent
  {
    public Guid Id { get; }
    public Guid UserId { get; }
    public string Category { get; }
    public string Name { get; }
    public string Description { get; }
    public DateTime CreatedAt { get; }

    protected ActivityCreated()
    {
    }
    public ActivityCreated(Guid id, Guid userId, string category, string name, string description, DateTime createdAt)
    {
      Id = id;
      UserId = userId;
      Category = category;
      Name = name;
      Description = description;
      CreatedAt = createdAt;
    }
  }
}
```

> Actio.Common -> Commands -> CreatedUserRejected.cs

```cs
namespace Actio.Common.Events
{
  public class CreatedUserRejected : IRejectedEvent
  {
    public string Email { get; }
    public string Reason { get; }
    public string Code { get; }

    protected CreatedUserRejected()
    {
    }
    public CreatedUserRejected(string email, string reason, string code)
    {
      this.Email = email;
      this.Code = code;
      this.Reason = reason;
    }
  }
}
```

> Actio.Common -> Commands -> UserAuthenticated.cs

```cs
namespace Actio.Common.Events
{
  public class EmailAuthenticated : IEvent
  {
    public string Email { get; }

    protected EmailAuthenticated()
    {
    }
    public EmailAuthenticated(string email)
    {
      this.Email = email;
    }
  }
}
```

### 9. Implementing Helper Classes and Methods

![](/images/backend/dotnetcore-net-core-microservice/HelperClassesAndMethods.png)

- Modify the `Actio.Common.csproj` document to include some new packages.

> Actio.Common -> Actio.Common.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore" Version="2.2.0"/>
    <PackageReference Include="Microsoft.AspNetCore.Hosting" Version="2.2.0"/>
    <PackageReference Include="RawRabbit" Version="2.0.0-rc5"/>
    <PackageReference Include="RawRabbit.DependencyInjection.ServiceCollection" Version="2.0.0-rc5"/>
    <PackageReference Include="RawRabbit.Operations.Publish" Version="2.0.0-rc5"/>
    <PackageReference Include="RawRabbit.Operations.Subscribe" Version="2.0.0-rc5"/>
  </ItemGroup>
</Project>
```

- On the `Actio.Common` project create the new `RabbitMq` and the following interfaces and classes.

> Actio.Common -> RabbitMq -> Extensions.cs

```cs
using System.Reflection;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Events;
using RawRabbit;
using RawRabbit.Subscription;
namespace Actio.Common.RabbitMq
{
    public static class Extensions
    {
        public static Task WithCommandHandlerAsync<TCommand>(this IBusClient bus,
            ICommandHandler<TCommand> handler) where TCommand : ICommand
            => bus.SubscribeAsync<TCommand>(msg => handler.HandleAsync(msg),
                ctx => ctx.UseSubscribeConfiguration(cfg =>
                cfg.FromDeclaredQueue(q => q.WithName(GetQueueName<TCommand>()))));

        public static Task WithEventHandlerAsync<TEvent>(this IBusClient bus,
            IEventHandler<TEvent> handler) where TEvent : IEvent
            => bus.SubscribeAsync<TEvent>(msg => handler.HandleAsync(msg),
                ctx => ctx.UseSubscribeConfiguration(cfg =>
                cfg.FromDeclaredQueue(q => q.WithName(GetQueueName<TEvent>()))));

        private static string GetQueueName<T>()
            => $"{Assembly.GetEntryAssembly().GetName()}/{typeof(T).Name}";
    }
}
```

- On the `Actio.Common` project create the new `Services` and the following interfaces and classes.

> Actio.Common -> Services -> IServiceHost.cs

```cs
namespace Actio.Common.Services
{
    public interface IServiceHost
    {
        void Run();
    }
}
```

> Actio.Common -> Services -> ServiceHost.cs

````cs
using System;
using Actio.Common.Commands;
using Actio.Common.Events;
using Actio.Common.RabbitMq;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using RawRabbit;

namespace Actio.Common.Services
{
    public class ServiceHost : IServiceHost
    {
        private readonly IWebHost _webHost;

        public ServiceHost(IWebHost webHost)
        {
            _webHost = webHost;
        }

        public void Run() => _webHost.Run();

        public static HostBuilder Create<TStartup>(string[] args) where TStartup : class
        {
            Console.Title = typeof(TStartup).Namespace;
            var config = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .AddCommandLine(args)
                .Build();
            var webHostBuilder = WebHost.CreateDefaultBuilder(args)
                .UseConfiguration(config)
                .UseStartup<TStartup>();

            return new HostBuilder(webHostBuilder.Build());
        }

        public abstract class BuilderBase
        {
            public abstract ServiceHost Build();
        }

        public class HostBuilder : BuilderBase
        {
            private readonly IWebHost _webHost;
            private IBusClient _bus;

            public HostBuilder(IWebHost webHost)
            {
                _webHost = webHost;
            }

            public BusBuilder UseRabbitMq()
            {
                _bus = (IBusClient)_webHost.Services.GetService(typeof(IBusClient));

                return new BusBuilder(_webHost, _bus);
            }

            public override ServiceHost Build()
            {
                return new ServiceHost(_webHost);
            }
        }

        public class BusBuilder : BuilderBase
        {
            private readonly IWebHost _webHost;
            private IBusClient _bus;

            public BusBuilder(IWebHost webHost, IBusClient bus)
            {
                _webHost = webHost;
                _bus = bus;
            }

            public BusBuilder SubscribeToCommand<TCommand>() where TCommand : ICommand
            {
                var handler = (ICommandHandler<TCommand>)_webHost.Services
                    .GetService(typeof(ICommandHandler<TCommand>));
                _bus.WithCommandHandlerAsync(handler);

                return this;
            }

            public BusBuilder SubscribeToEvent<TEvent>() where TEvent : IEvent
            {
                var handler = (IEventHandler<TEvent>)_webHost.Services
                    .GetService(typeof(IEventHandler<TEvent>));
                _bus.WithEventHandlerAsync(handler);

                return this;
            }

            public override ServiceHost Build()
            {
                return new ServiceHost(_webHost);
            }
        }
    }
}```

### 10. Implementing API Endpoints

![](/images/backend/dotnetcore-net-core-microservice/ImplementingApiEndpoints.png)

- On the `Actio.Api` project and `Controllers` folder remove the `ValueController.cs` document and create the following controller classes.

> Actio.Api => Controllers -> HomeController.cs
```cs
using Microsoft.AspNetCore.Mvc;

namespace Actio.Api.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Get() => Content("Hello from Actio API!");
    }
}
````

> Actio.Api => Controllers -> ActivitiesController.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Microsoft.AspNetCore.Mvc;
using RawRabbit;

namespace Actio.Api.Controllers
{
    [Route("[controller]")]
    public class ActivitiesController : Controller
    {
        private readonly IBusClient _busClient;

        public ActivitiesController(IBusClient busClient)
        {
            _busClient = busClient;
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]CreateActivity command)
        {
            command.Id = Guid.NewGuid();
            command.CreatedAt = DateTime.UtcNow;
            await _busClient.PublishAsync(command);

            return Accepted($"activities/{command.Id}");
        }
    }
}
```

> Actio.Api => Controllers -> UserController.cs

```cs
using System.Threading.Tasks;
using Actio.Common.Commands;
using Microsoft.AspNetCore.Mvc;
using RawRabbit;

namespace Actio.Api.Controllers
{
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly IBusClient _busClient;

        public UsersController(IBusClient busClient)
        {
            _busClient = busClient;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Post([FromBody]CreateUser command)
        {
            await _busClient.PublishAsync(command);

            return Accepted();
        }
    }
}
```

### 11. Subscribing to the Messages

![](/images/backend/dotnetcore-net-core-microservice/SubscribingToTheMessages.png)

- Create a new extesion for the RabbitMq adding the `RabbitMqOptions.cs` class to the `RabbitMq` folder and modifying the `Extensions.cs` one.

> Actio.Common -> RabbitMq -> RabbitMqOptions.cs

```cs
using RawRabbit.Configuration;

namespace Actio.Common.RabbitMq
{
    public class RabbitMqOptions : RawRabbitConfiguration
    {
    }
}
```

> Actio.Common -> RabbitMq -> Extensions.cs

```cs

using System.Reflection;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Events;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RawRabbit;
using RawRabbit.Instantiation;
using RawRabbit.Subscription;
namespace Actio.Common.RabbitMq
{
    public static class Extensions
    {
        public static Task WithCommandHandlerAsync<TCommand>(this IBusClient bus,
            ICommandHandler<TCommand> handler) where TCommand : ICommand
            => bus.SubscribeAsync<TCommand>(msg => handler.HandleAsync(msg),
                ctx => ctx.UseSubscribeConfiguration(cfg =>
                cfg.FromDeclaredQueue(q => q.WithName(GetQueueName<TCommand>()))));

        public static Task WithEventHandlerAsync<TEvent>(this IBusClient bus,
            IEventHandler<TEvent> handler) where TEvent : IEvent
            => bus.SubscribeAsync<TEvent>(msg => handler.HandleAsync(msg),
                ctx => ctx.UseSubscribeConfiguration(cfg =>
                cfg.FromDeclaredQueue(q => q.WithName(GetQueueName<TEvent>()))));

        private static string GetQueueName<T>()
            => $"{Assembly.GetEntryAssembly().GetName()}/{typeof(T).Name}";


        public static void AddRabbitMq(this IServiceCollection services, IConfiguration configuration)
        {
            var options = new RabbitMqOptions();
            var section = configuration.GetSection("rabbitmq");
            section.Bind(options);
            var client = RawRabbitFactory.CreateSingleton(new RawRabbitOptions
            {
                ClientConfiguration = options
            });
            services.AddSingleton<IBusClient>(_ => client);
        }
    }
}
```

- We can find more information about setting up RabbitMQ on [Welcome to RawRabbit’s documentations](https://rawrabbit.readthedocs.io), and on [vNext configuration file](https://rawrabbit.readthedocs.io/en/master/configuration.html#vnext-configuration-file) an example of how we should configure RabbitMQ.

> rawrabbit.json

```json
{
  "Username": "guest",
  "Password": "guest",
  "VirtualHost": "/",
  "Port": 5672,
  "Hostnames": ["localhost"],
  "RequestTimeout": "00:00:10",
  "PublishConfirmTimeout": "00:00:01",
  "RecoveryInterval": "00:00:10",
  "PersistentDeliveryMode": true,
  "AutoCloseConnection": true,
  "AutomaticRecovery": true,
  "TopologyRecovery": true,
  "Exchange": {
    "Durable": true,
    "AutoDelete": true,
    "Type": "Topic"
  },
  "Queue": {
    "AutoDelete": true,
    "Durable": true,
    "Exclusive": true
  }
}
```

- Modify the `appsettings.json` document to include this configuration in the 3 projects.

> Actio.Api -> appsettings.json
> Actio.Services.Activities -> appsettings.json
> Actio.Services.Identity -> appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["localhost"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

- On the `Actio.Api` project create the `Handlers` folder and the `ActivityCreatedHandler.cs` class

> Actio.Api -> Handlers -> ActivityCreatedHandler.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Events;

namespace Actio.Api.Handlers
{
    public class ActivityCreatedHandler : IEventHandler<ActivityCreated>
    {
        public async Task HandleAsync(ActivityCreated @event)
        {
            await Task.CompletedTask;
            Console.WriteLine($"Activity created: {@event.Name}");
        }
    }
}
```

- On the `Actio.Api` project Modify the `Startup.cs` document to invoke the new service and the handler there.

> Actio.Api -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Api.Handlers;
using Actio.Common.Events;
using Actio.Common.RabbitMq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddRabbitMq(Configuration);
            services.AddScoped<IEventHandler<ActivityCreated>, ActivityCreatedHandler>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

- On the `Actio.Api` project modify the `Program.cs` document to use our Service Host.

> Actio.Api -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Events;
using Actio.Common.Services;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Actio.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ServiceHost.Create<Startup>(args)
                .UseRabbitMq()
                .SubscribeToEvent<ActivityCreated>()
                .Build()
                .Run();
        }
    }
}
```

- On the `Actio.Services.Activities` project create the `Handlers` folder and the `CreateActivityHandler.cs` class

> Actio.Services.Activities -> Handlers -> CreateActivityHandler.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Events;
using Microsoft.Extensions.Logging;
using RawRabbit;

namespace Actio.Services.Activities.Handlers
{
    public class CreateActivityHandler : ICommandHandler<CreateActivity>
    {
        private readonly IBusClient _busClient;

        public CreateActivityHandler(IBusClient busClient)
        {
            _busClient = busClient;
        }

        public async Task HandleAsync(CreateActivity command)
        {
            Console.WriteLine($"Creating activity: {command.Name}");
            await _busClient.PublishAsync(new ActivityCreated(command.Id,
                    command.UserId, command.Category, command.Name, command.Description, command.CreatedAt));
        }
    }
}
```

- On the `Actio.Services.Activities` project Modify the `Startup.cs` document to invoke the new service and the handler there.

> Actio.Api -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.RabbitMq;
using Actio.Services.Activities.Handlers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Activities
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddRabbitMq(Configuration);
            services.AddScoped<ICommandHandler<CreateActivity>, CreateActivityHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

On the `Actio.Services.Activities` project modify the `Program.cs` document to use our Service Host.

> Actio.Api -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Events;
using Actio.Common.Services;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Actio.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ServiceHost.Create<Startup>(args)
                .UseRabbitMq()
                .SubscribeToEvent<ActivityCreated>()
                .Build()
                .Run();
        }
    }
}

```

- Ensure the `RabbitMQ` container is running

```ps
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                   NAMES
c9f09993e813        rabbitmq            "docker-entrypoint.s…"   6 hours ago         Up 6 hours          4369/tcp, 5671/tcp, 25672/tcp, 0.0.0.0:5672->5672/tcp   hopeful_ptolemy
```

- Run the Actio.Api project

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ cd src

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src
$ cd Actio.Api/
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api
$ dotnet run

Unhandled Exception: System.InvalidOperationException: Cannot resolve scoped service 'Actio.Common.Events.IEventHandler`1[Actio.Common.Events.ActivityCreated]' from root provider.
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteValidator.ValidateResolution(Type serviceType, IServiceScope scope, IServiceScope rootScope)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.Microsoft.Extensions.DependencyInjection.ServiceLookup.IServiceProviderEngineCallback.OnResolve(Type serviceType, IServiceScope scope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType, ServiceProviderEngineScope serviceProviderEngineScope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.GetService(Type serviceType)
   at Actio.Common.Services.ServiceHost.BusBuilder.SubscribeToEvent[TEvent]() in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Services\ServiceHost.cs:line 87
   at Actio.Api.Program.Main(String[] args) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Program.cs:line 19
```

::: warning
After trying to run the Api project an error is thrown. The ServiceHost class must be modified
:::

> Actio.Common -> Services -> ServiceHost.cs

```cs
using System;
using Actio.Common.Commands;
using Actio.Common.Events;
using Actio.Common.RabbitMq;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RawRabbit;

namespace Actio.Common.Services
{
    public class ServiceHost : IServiceHost
    {
        private readonly IWebHost _webHost;

        public ServiceHost(IWebHost webHost)
        {
            _webHost = webHost;
        }

        public void Run() => _webHost.Run();

        public static HostBuilder Create<TStartup>(string[] args) where TStartup : class
        {
            Console.Title = typeof(TStartup).Namespace;
            var config = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .AddCommandLine(args)
                .Build();
            var webHostBuilder = WebHost.CreateDefaultBuilder(args)
                .UseConfiguration(config)
                .UseStartup<TStartup>();

            return new HostBuilder(webHostBuilder.Build());
        }

        public abstract class BuilderBase
        {
            public abstract ServiceHost Build();
        }

        public class HostBuilder : BuilderBase
        {
            private readonly IWebHost _webHost;
            private IBusClient _bus;

            public HostBuilder(IWebHost webHost)
            {
                _webHost = webHost;
            }

            public BusBuilder UseRabbitMq()
            {
                _bus = (IBusClient)_webHost.Services.GetService(typeof(IBusClient));

                return new BusBuilder(_webHost, _bus);
            }

            public override ServiceHost Build()
            {
                return new ServiceHost(_webHost);
            }
        }

        public class BusBuilder : BuilderBase
        {
            private readonly IWebHost _webHost;
            private IBusClient _bus;

            public BusBuilder(IWebHost webHost, IBusClient bus)
            {
                _webHost = webHost;
                _bus = bus;
            }

            public BusBuilder SubscribeToCommand<TCommand>() where TCommand : ICommand
            {
                // var handler = (ICommandHandler<TCommand>)_webHost.Services
                //     .GetService(typeof(ICommandHandler<TCommand>));
                // _bus.WithCommandHandlerAsync(handler);

                // return this;
                using (var serviceScope = _webHost.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var handler = (ICommandHandler<TCommand>)serviceScope.ServiceProvider.GetService(typeof(ICommandHandler<TCommand>));

                    _bus.WithCommandHandlerAsync(handler);

                    return this;
                }
            }

            public BusBuilder SubscribeToEvent<TEvent>() where TEvent : IEvent
            {
                // var handler = (IEventHandler<TEvent>)_webHost.Services
                //     .GetService(typeof(IEventHandler<TEvent>));
                // _bus.WithEventHandlerAsync(handler);

                // return this;
                using (var serviceScope = _webHost.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var handler = (IEventHandler<TEvent>)serviceScope.ServiceProvider.GetService(typeof(IEventHandler<TEvent>));

                    _bus.WithEventHandlerAsync(handler);

                    return this;
                }
            }

            public override ServiceHost Build()
            {
                return new ServiceHost(_webHost);
            }
        }
    }
}
```

```sh
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- Run the `Actio.Services.Activities` project in another terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Activities
$ dotnet run --urls "http://*.5050"
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
crit: Microsoft.AspNetCore.Server.Kestrel[0]
      Unable to start Kestrel.
System.Net.Sockets.SocketException (10013): An attempt was made to access a socket in a way forbidden by its access permissions
   at System.Net.Sockets.Socket.UpdateStatusAfterSocketErrorAndThrowException(SocketError error, String callerName)
   at System.Net.Sockets.Socket.DoBind(EndPoint endPointSnapshot, SocketAddress socketAddress)
   at System.Net.Sockets.Socket.Bind(EndPoint localEP)
   at Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets.SocketTransport.BindAsync()
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServer.<>c__DisplayClass21_0`1.<<StartAsync>g__OnBind|0>d.MoveNext()
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.BindEndpointAsync(ListenOptions endpoint, AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.ListenOptions.BindAsync(AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.AnyIPListenOptions.BindAsync(AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.AddressesStrategy.BindAsync(AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.BindAsync(IServerAddressesFeature addresses, KestrelServerOptions serverOptions, ILogger logger, Func`2 createBinding)
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServer.StartAsync[TContext](IHttpApplication`1 application, CancellationToken cancellationToken)

Unhandled Exception: System.Net.Sockets.SocketException: An attempt was made to access a socket in a way forbidden by its access permissions
   at System.Net.Sockets.Socket.UpdateStatusAfterSocketErrorAndThrowException(SocketError error, String callerName)
   at System.Net.Sockets.Socket.DoBind(EndPoint endPointSnapshot, SocketAddress socketAddress)
   at System.Net.Sockets.Socket.Bind(EndPoint localEP)
   at Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets.SocketTransport.BindAsync()
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServer.<>c__DisplayClass21_0`1.<<StartAsync>g__OnBind|0>d.MoveNext()
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.BindEndpointAsync(ListenOptions endpoint, AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.ListenOptions.BindAsync(AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.AnyIPListenOptions.BindAsync(AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.AddressesStrategy.BindAsync(AddressBindContext context)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.BindAsync(IServerAddressesFeature addresses, KestrelServerOptions serverOptions, ILogger logger, Func`2 createBinding)
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServer.StartAsync[TContext](IHttpApplication`1 application, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.StartAsync(CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Hosting.WebHostExtensions.RunAsync(IWebHost host, CancellationToken token, String shutdownMessage)
   at Microsoft.AspNetCore.Hosting.WebHostExtensions.RunAsync(IWebHost host, CancellationToken token)
   at Microsoft.AspNetCore.Hosting.WebHostExtensions.Run(IWebHost host)
   at Actio.Common.Services.ServiceHost.Run() in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Services\ServiceHost.cs:line 22
   at Actio.Services.Activities.Program.Main(String[] args) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Program.cs:line 19
Application is shutting down...
```

::: warning
After trying to run the Actio.Services.Activities project an error is thrown. There is an issue with the https for Core 2.2. The Properties -> launchSettings.json must be changed to modify the ports.
:::

> Properties -> launchSettings.json

```json
{
  "$schema": "http://json.schemastore.org/launchsettings.json",
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:19447",
      "sslPort": 44345
    }
  },
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "launchUrl": "api/values",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "Actio.Services.Activities": {
      "commandName": "Project",
      "launchBrowser": true,
      "launchUrl": "api/values",
      "applicationUrl": "https://localhost:5051;http://localhost:5050",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Activities
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities
Now listening on: https://localhost:5051
Now listening on: http://localhost:5050
Application started. Press Ctrl+C to shut down.
```

- Send a request using Postman

![](/images/backend/dotnetcore-net-core-microservice/SubscribingToTheMessages2.png)

> Request

```
POST /activities HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 4c7288a3-88dd-4d3a-fd84-7ea93afe2e74

{"category": "test", "name": "test"}
```

> Response

```
content-length →0
date →Sun, 20 Jan 2019 18:15:14 GMT
location →activities/0e866556-e580-403d-8f4a-f5708f82cd48
server →Kestrel
```

- Ensure there is a `Activity created: test` message on the `Actio.Api` terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST http://localhost:5000/activities application/json 36
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 15.3696ms 307
info: Microsoft.AspNetCore.Server.Kestrel[32]
      Connection id "0HLJV0QD9SD8K", Request id "0HLJV0QD9SD8K:00000001": the application completed without reading the entire request body.
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST https://localhost:5001/activities application/json 36
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[0]
      Executing endpoint 'Actio.Api.Controllers.ActivitiesController.Post (Actio.Api)'
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Route matched with {action = "Post", controller = "Activities"}. Executing action Actio.Api.Controllers.ActivitiesController.Post (Actio.Api)
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Executing action method Actio.Api.Controllers.ActivitiesController.Post (Actio.Api) with arguments (Actio.Common.Commands.CreateActivity) - Validation state: Valid
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action method Actio.Api.Controllers.ActivitiesController.Post (Actio.Api), returned result Microsoft.AspNetCore.Mvc.AcceptedResult in 138.559ms.
info: Microsoft.AspNetCore.Mvc.Infrastructure.ObjectResultExecutor[1]
      Executing ObjectResult, writing value of type 'null'.
Activity created: test
```

- The subscription to the RabbitMQ `event` on the `Actio.Api` project has worked properly

- Ensure there is a `Creating activity: test` message on the `Actio.Services.Activities` terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Activities
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities
Now listening on: https://localhost:5051
Now listening on: http://localhost:5050
Application started. Press Ctrl+C to shut down.
Creating activity: test
```

The subscription to the RabbitMQ `command` on the `Actio.Services.Activities` project has worked properly

![](/images/backend/dotnetcore-net-core-microservice/SubscribingToTheMessages3.png)

## 3. The Activities Service

![](/images/backend/dotnetcore-net-core-microservice/TheActivitiesService.png)

### 12. Creating Domain Models

![](/images/backend/dotnetcore-net-core-microservice/CreatingDomainModels.png)

- Create in the `Actio.Services.Activities` project the new `Domain` folder and the `Models` and `Repositories` subfolders with the following documents inside.

> Actio.Services.Activities -> Domain -> Models -> Category.cs

```cs
using System;

namespace Actio.Services.Activities.Domain.Models
{
    public class Category
    {
        public Guid Id { get; protected set; }
        public string Name { get; protected set; }

        protected Category()
        {
        }

        public Category(string name)
        {
            Id = Guid.NewGuid();
            Name = name.ToLowerInvariant();
        }
    }
}
```

> Actio.Services.Activities -> Domain -> Models -> Activity.cs

```cs
using System;
using Actio.Common.Exceptions;

namespace Actio.Services.Activities.Domain.Models
{
    public class Activity
    {
        public Guid Id { get; protected set; }
        public string Category { get; protected set; }
        public Guid UserId { get; protected set; }
        public string Name { get; protected set; }
        public string Description { get; protected set; }
        public DateTime CreatedAt { get; protected set; }

        protected Activity()
        {
        }

        public Activity(Guid id, Category category, Guid userId,
            string name, string description, DateTime createdAt)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ActioException("empty_activity_name",
                    "Activity name can not be empty.");
            }
            Id = id;
            Category = category.Name;
            UserId = userId;
            Name = name;
            Description = description;
            CreatedAt = createdAt;
        }
    }
}
```

> Actio.Services.Activities -> Domain -> Repositories -> ICategoryRepository.cs

```cs
using System.Collections.Generic;
using System.Threading.Tasks;
using Actio.Services.Activities.Domain.Models;

namespace Actio.Services.Activities.Domain.Repositories
{
    public interface ICategoryRepository
    {
         Task<Category> GetAsync(string name);
         Task<IEnumerable<Category>> BrowseAsync();
         Task AddAsync(Category category);
    }
}
```

> Actio.Services.Activities -> Domain -> Repositories -> IActivityRepository.cs

```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Actio.Services.Activities.Domain.Models;

namespace Actio.Services.Activities.Domain.Repositories
{
    public interface IActivityRepository
    {
        Task<Activity> GetAsync(Guid id);
        Task AddAsync(Activity activity);
        Task DeleteAsync(Guid id);
    }
}
```

### 13. Setting up MongoDB

![](/images/backend/dotnetcore-net-core-microservice/SettingUpMongoDB.png)

- It can be downloaded clicking on `Get MongoDB` from [Download MongoDB](https://www.mongodb.com/download-center)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpMongoDB2.png)

![](/images/backend/dotnetcore-net-core-microservice/SettingUpMongoDB3.png)

- It can be run from a `Docker Image`

- If the MongoDB is installed locally and the local service is running it has to be stopped.

![](/images/backend/dotnetcore-net-core-microservice/SettingUpMongoDB.png)

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)$ docker run -d -p 27017:27017 mongo
Unable to find image 'mongo:latest' locally
latest: Pulling from library/mongo
b849b56b69e7: Pull complete
42986ef25bcd: Pull complete
d927c1b717ec: Pull complete
15b86ea20233: Pull complete
95dc958d65c6: Pull complete
aec60d69dd50: Pull complete
bf92a6681913: Pull complete
8911fe7d4b35: Pull complete
8ce44114b060: Pull complete
1a944a194d13: Pull complete
5519cf0ef45d: Pull complete
6c688677ac8e: Pull complete
2f147ac236bb: Pull complete
Digest: sha256:d69e9e4d983c080cdbbafc64cbbd26373e0e417cb9cd18189eeb554c534fc26e
Status: Downloaded newer image for mongo:latest
86f4ae2ab12262f1268af9ab1421799eeaea451b7132d5d6688dae1400d69026
C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: driver failed programming external connectivity on endpoint stoic_golick (122abbcda84f1ec3aa9610898e5ffd7a1d024d879df4d4da21fb8e183253a62c): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:27017:tcp:172.17.0.3:27017: input/output error.
```

- After restarting Docker

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker run -d -p 27017:27017 mongo
6919951222bc6f2f9b57f6fa15a77427def7469ca4eb1ad43d5963d5d66a420f

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
6919951222bc        mongo               "docker-entrypoint.s…"   13 seconds ago      Up 12 seconds       0.0.0.0:27017->27017/tcp   wizardly_ramanujan
```

- Install the `Mongo` Nuget package

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Common (master)
$ dotnet add package MongoDB.Driver
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpE59D.tmp
info : Adding PackageReference for package 'MongoDB.Driver' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/mongodb.driver/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='MongoDB.Driver'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='MongoDB.Driver'&semVerLevel=2.0.0 493ms
info : Package 'MongoDB.Driver' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
info : PackageReference for package 'MongoDB.Driver' version '2.7.2' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\obj\project.assets.json
log  : Restore completed in 2.51 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
```

> Actio.Common.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore" Version="2.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.Hosting" Version="2.2.0" />
    <PackageReference Include="MongoDB.Driver" Version="2.7.2" />
    <PackageReference Include="RawRabbit" Version="2.0.0-rc5" />
    <PackageReference Include="RawRabbit.DependencyInjection.ServiceCollection" Version="2.0.0-rc5" />
    <PackageReference Include="RawRabbit.Operations.Publish" Version="2.0.0-rc5" />
    <PackageReference Include="RawRabbit.Operations.Subscribe" Version="2.0.0-rc5" />
  </ItemGroup>
</Project>
```

- Create on the `Actio.Common` project a new directory called `Mongo` where we have to add the following documents:

> Actio.Common -> Mongo -> MongoOptions.cs

```cs
namespace Actio.Common.Mongo
{
    public class MongoOptions
    {
        public string ConnectionString { get; set; }
        public string Database { get; set; }
        public bool Seed { get; set; }
    }
}
```

> Actio.Common -> Mongo -> Extensions.cs

```cs
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Actio.Common.Mongo
{
    public static class Extensions
    {
        public static void AddMongoDB(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<MongoOptions>(configuration.GetSection("mongo"));
            services.AddSingleton<MongoClient>(c =>
            {
                var options = c.GetService<IOptions<MongoOptions>>();

                return new MongoClient(options.Value.ConnectionString);
            });
            services.AddScoped<IMongoDatabase>(c =>
            {
                var options = c.GetService<IOptions<MongoOptions>>();
                var client = c.GetService<MongoClient>();

                return client.GetDatabase(options.Value.Database);
            });
            services.AddScoped<IDatabaseInitializer, MongoInitializer>();
        }
    }
}
```

> Actio.Common -> Mongo -> IDatabaseInitializer.cs

```cs
using System.Threading.Tasks;

namespace Actio.Common.Mongo
{
    public interface IDatabaseInitializer
    {
        Task InitializeAsync();
    }
}
```

> Actio.Common -> Mongo -> MongoInitializer.cs

```cs
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;

namespace Actio.Common.Mongo
{
    public class MongoInitializer : IDatabaseInitializer
    {
        private bool _initialized;
        private readonly bool _seed;
        private readonly IMongoDatabase _database;

        public MongoInitializer(IMongoDatabase database,
            IOptions<MongoOptions> options)
        {
            _database = database;
            _seed = options.Value.Seed;
        }

        public async Task InitializeAsync()
        {
            if (_initialized)
            {
                return;
            }
            RegisterConventions();
            _initialized = true;
            if (!_seed)
            {
                return;
            }
        }

        private void RegisterConventions()
        {
            ConventionRegistry.Register("ActioConventions", new MongoConvention(), x => true);
        }

        private class MongoConvention : IConventionPack
        {
            public IEnumerable<IConvention> Conventions => new List<IConvention>
            {
                new IgnoreExtraElementsConvention(true),
                new EnumRepresentationConvention(BsonType.String),
                new CamelCaseElementNameConvention()
            };
        }
    }
}
```

- The `Startup.cs` document in `Actio.Services.Activity` project must be updated to call the MongoDB extensions.

> Actio.Services.Activity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Activities.Handlers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Activities
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMongoDB(Configuration);
            services.AddRabbitMq(Configuration);
            services.AddScoped<ICommandHandler<CreateActivity>, CreateActivityHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

- The `appsettings.json` in `Actio.Services.Activity` project must be updated with the MongoDB credentials.

> Actio.Services.Activity -> appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "mongo": {
    "connectionString": "mongodb://localhost:27017",
    "database": "Actio-Services-Activities",
    "seed": true
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["localhost"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

### 14. Implementing Repositories

![](/images/backend/dotnetcore-net-core-microservice/ImplementingRepositories.png)

- Create a new `Repository` folder in the `Actio.Services.Activity` project and the following documents inside:

> Actio.Services.Activity -> Repository -> CategoryRepository.cs

```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Actio.Services.Activities.Domain.Models;
using Actio.Services.Activities.Domain.Repositories;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace Actio.Services.Activities.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly IMongoDatabase _database;

        public CategoryRepository(IMongoDatabase database)
        {
            _database = database;
        }

        public async Task<Category> GetAsync(string name)
            => await Collection
                .AsQueryable()
                .FirstOrDefaultAsync(x => x.Name == name.ToLowerInvariant());

        public async Task<IEnumerable<Category>> BrowseAsync()
            => await Collection
                .AsQueryable()
                .ToListAsync();

        public async Task AddAsync(Category category)
            => await Collection.InsertOneAsync(category);

        private IMongoCollection<Category> Collection
            => _database.GetCollection<Category>("Categories");
    }
}
```

> Actio.Services.Activity -> Repository -> ActivityRepository.cs

```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Actio.Services.Activities.Domain.Models;
using Actio.Services.Activities.Domain.Repositories;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace Actio.Services.Activities.Repositories
{
    public class ActivityRepository : IActivityRepository
    {
        private readonly IMongoDatabase _database;

        public ActivityRepository(IMongoDatabase database)
        {
            _database = database;
        }

        public async Task<Activity> GetAsync(Guid id)
            => await Collection
                .AsQueryable()
                .FirstOrDefaultAsync(x => x.Id == id);

        public async Task AddAsync(Activity activity)
            => await Collection.InsertOneAsync(activity);

        public async Task DeleteAsync(Guid id)
            => await Collection.DeleteOneAsync(x => x.Id == id);

        private IMongoCollection<Activity> Collection
            => _database.GetCollection<Activity>("Activities");
    }
}
```

- Create the MongoDb Database initializer.

> Actio.Common -> Mongo -> IDatabaseSeeder.cs

```cs
using System.Threading.Tasks;

namespace Actio.Common.Mongo
{
    public interface IDatabaseSeeder
    {
         Task SeedAsync();
    }
}
```

> Actio.Common -> Mongo -> MongoSeeder.cs

```cs
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace Actio.Common.Mongo
{
    public class MongoSeeder : IDatabaseSeeder
    {
        protected readonly IMongoDatabase Database;

        public MongoSeeder(IMongoDatabase database)
        {
            Database = database;
        }

        public async Task SeedAsync()
        {
            var collectionsCursor = await Database.ListCollectionsAsync();
            var collections = await collectionsCursor.ToListAsync();
            if (collections.Any())
            {
                return;
            }
            await CustomSeedAsync();
        }

        protected virtual async Task CustomSeedAsync()
        {
            await Task.CompletedTask;
        }
    }
}
```

> Actio.Common -> Mongo -> Extensions.cs

```cs
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Actio.Common.Mongo
{
    public static class Extensions
    {
        public static void AddMongoDB(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<MongoOptions>(configuration.GetSection("mongo"));
            services.AddSingleton<MongoClient>(c =>
            {
                var options = c.GetService<IOptions<MongoOptions>>();

                return new MongoClient(options.Value.ConnectionString);
            });
            services.AddScoped<IMongoDatabase>(c =>
            {
                var options = c.GetService<IOptions<MongoOptions>>();
                var client = c.GetService<MongoClient>();

                return client.GetDatabase(options.Value.Database);
            });
            services.AddScoped<IDatabaseInitializer, MongoInitializer>();
            services.AddScoped<IDatabaseSeeder, MongoSeeder>();
        }
    }
}
```

- Create a new `Services` folder in the `Actio.Services.Activity` project and the following documents inside:

- Actio.Services.Activity -> Services -> CustomMongoSeeder.cs

```cs
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Mongo;
using Actio.Services.Activities.Domain.Models;
using Actio.Services.Activities.Domain.Repositories;
using MongoDB.Driver;

namespace Actio.Services.Activities.Services
{
    public class CustomMongoSeeder : MongoSeeder
    {
        private readonly ICategoryRepository _categoryRepository;

        public CustomMongoSeeder(IMongoDatabase database,
            ICategoryRepository categoryRepository)
            : base(database)
        {
            _categoryRepository = categoryRepository;
        }

        protected override async Task CustomSeedAsync()
        {
            var categories = new List<string>
            {
                "work",
                "sport",
                "hobby"
            };
            await Task.WhenAll(categories.Select(x => _categoryRepository
                        .AddAsync(new Category(x))));
        }
    }
}
```

- The `MongoInitializer.cs` document must be updated to include the seeder.

> Actio.Common -> Mongo -> MongoInitializer.cs

```cs

```

- The `Startup.cs` document in `Actio.Services.Activity` project must be updated to include the repsitories and the seeder.

> Actio.Services.Activity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Activities.Domain.Repositories;
using Actio.Services.Activities.Handlers;
using Actio.Services.Activities.Repositories;
using Actio.Services.Activities.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Activities
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMongoDB(Configuration);
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IActivityRepository, ActivityRepository>();
            services.AddScoped<IDatabaseSeeder, CustomMongoSeeder>();

            services.AddRabbitMq(Configuration);
            services.AddScoped<ICommandHandler<CreateActivity>, CreateActivityHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

- Run the `Actio.Services.Activity` project to see if the new database and the new collection is created.

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Activities (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Application startup exception: System.InvalidOperationException: Cannot resolve scoped service 'Actio.Common.Mongo.IDatabaseInitializer' from root provider.
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteValidator.ValidateResolution(Type serviceType, IServiceScope scope, IServiceScope rootScope)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.Microsoft.Extensions.DependencyInjection.ServiceLookup.IServiceProviderEngineCallback.OnResolve(Type serviceType, IServiceScope scope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType, ServiceProviderEngineScope serviceProviderEngineScope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions.GetService[T](IServiceProvider provider)
   at Actio.Services.Activities.Startup.Configure(IApplicationBuilder app, IHostingEnvironment env) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Startup.cs:line 58
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Hosting.ConventionBasedStartup.Configure(IApplicationBuilder app)
   at Microsoft.AspNetCore.Mvc.Internal.MiddlewareFilterBuilderStartupFilter.<>c__DisplayClass0_0.<Configure>g__MiddlewareFilterBuilder|0(IApplicationBuilder builder)
   at Microsoft.AspNetCore.HostFilteringStartupFilter.<>c__DisplayClass0_0.<Configure>b__0(IApplicationBuilder app)
   at Microsoft.AspNetCore.Hosting.Internal.AutoRequestServicesStartupFilter.<>c__DisplayClass0_0.<Configure>b__0(IApplicationBuilder builder)
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.BuildApplication()
crit: Microsoft.AspNetCore.Hosting.Internal.WebHost[6]
      Application startup exception
System.InvalidOperationException: Cannot resolve scoped service 'Actio.Common.Mongo.IDatabaseInitializer' from root provider.
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteValidator.ValidateResolution(Type serviceType, IServiceScope scope, IServiceScope rootScope)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.Microsoft.Extensions.DependencyInjection.ServiceLookup.IServiceProviderEngineCallback.OnResolve(Type serviceType, IServiceScope scope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType, ServiceProviderEngineScope serviceProviderEngineScope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions.GetService[T](IServiceProvider provider)
   at Actio.Services.Activities.Startup.Configure(IApplicationBuilder app, IHostingEnvironment env) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Startup.cs:line 58
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Hosting.ConventionBasedStartup.Configure(IApplicationBuilder app)
   at Microsoft.AspNetCore.Mvc.Internal.MiddlewareFilterBuilderStartupFilter.<>c__DisplayClass0_0.<Configure>g__MiddlewareFilterBuilder|0(IApplicationBuilder builder)
   at Microsoft.AspNetCore.HostFilteringStartupFilter.<>c__DisplayClass0_0.<Configure>b__0(IApplicationBuilder app)
   at Microsoft.AspNetCore.Hosting.Internal.AutoRequestServicesStartupFilter.<>c__DisplayClass0_0.<Configure>b__0(IApplicationBuilder builder)
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.BuildApplication()

Unhandled Exception: System.InvalidOperationException: Cannot resolve scoped service 'Actio.Common.Mongo.IDatabaseInitializer' from root provider.
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteValidator.ValidateResolution(Type serviceType, IServiceScope scope, IServiceScope rootScope)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.Microsoft.Extensions.DependencyInjection.ServiceLookup.IServiceProviderEngineCallback.OnResolve(Type serviceType, IServiceScope scope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType, ServiceProviderEngineScope serviceProviderEngineScope)
   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngine.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProvider.GetService(Type serviceType)
   at Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions.GetService[T](IServiceProvider provider)
   at Actio.Services.Activities.Startup.Configure(IApplicationBuilder app, IHostingEnvironment env) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Startup.cs:line 58
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Hosting.ConventionBasedStartup.Configure(IApplicationBuilder app)
   at Microsoft.AspNetCore.Mvc.Internal.MiddlewareFilterBuilderStartupFilter.<>c__DisplayClass0_0.<Configure>g__MiddlewareFilterBuilder|0(IApplicationBuilder builder)
   at Microsoft.AspNetCore.HostFilteringStartupFilter.<>c__DisplayClass0_0.<Configure>b__0(IApplicationBuilder app)
   at Microsoft.AspNetCore.Hosting.Internal.AutoRequestServicesStartupFilter.<>c__DisplayClass0_0.<Configure>b__0(IApplicationBuilder builder)
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.BuildApplication()
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.StartAsync(CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Hosting.WebHostExtensions.RunAsync(IWebHost host, CancellationToken token, String shutdownMessage)
   at Microsoft.AspNetCore.Hosting.WebHostExtensions.RunAsync(IWebHost host, CancellationToken token)
   at Microsoft.AspNetCore.Hosting.WebHostExtensions.Run(IWebHost host)
   at Actio.Common.Services.ServiceHost.Run() in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Services\ServiceHost.cs:line 22
   at Actio.Services.Activities.Program.Main(String[] args) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Program.cs:line 19
```

::: warning
The previous error can be fixed changing the Actio.Common.Services.ServiceHost.HostBuilder method
:::

> Actio.Common -> Services -> ServiceHost.cs

```cs
using System;
using Actio.Common.Commands;
using Actio.Common.Events;
using Actio.Common.RabbitMq;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RawRabbit;

namespace Actio.Common.Services
{
    public class ServiceHost : IServiceHost
    {
        private readonly IWebHost _webHost;

        public ServiceHost(IWebHost webHost)
        {
            _webHost = webHost;
        }

        public void Run() => _webHost.Run();

        public static HostBuilder Create<TStartup>(string[] args) where TStartup : class
        {
            Console.Title = typeof(TStartup).Namespace;
            var config = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .AddCommandLine(args)
                .Build();
            // var webHostBuilder = WebHost.CreateDefaultBuilder(args)
            //     .UseConfiguration(config)
            //     .UseStartup<TStartup>();

            var webHostBuilder = WebHost.CreateDefaultBuilder(args)
                .UseConfiguration(config)
                .UseStartup<TStartup>()
                .UseDefaultServiceProvider(options => options.ValidateScopes = false);

            return new HostBuilder(webHostBuilder.Build());
        }

        public abstract class BuilderBase
        {
            public abstract ServiceHost Build();
        }

        public class HostBuilder : BuilderBase
        {
            private readonly IWebHost _webHost;
            private IBusClient _bus;

            public HostBuilder(IWebHost webHost)
            {
                _webHost = webHost;
            }

            public BusBuilder UseRabbitMq()
            {
                _bus = (IBusClient)_webHost.Services.GetService(typeof(IBusClient));

                return new BusBuilder(_webHost, _bus);
            }

            public override ServiceHost Build()
            {
                return new ServiceHost(_webHost);
            }
        }

        public class BusBuilder : BuilderBase
        {
            private readonly IWebHost _webHost;
            private IBusClient _bus;

            public BusBuilder(IWebHost webHost, IBusClient bus)
            {
                _webHost = webHost;
                _bus = bus;
            }

            public BusBuilder SubscribeToCommand<TCommand>() where TCommand : ICommand
            {
                // var handler = (ICommandHandler<TCommand>)_webHost.Services
                //     .GetService(typeof(ICommandHandler<TCommand>));
                // _bus.WithCommandHandlerAsync(handler);

                // return this;
                using (var serviceScope = _webHost.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var handler = (ICommandHandler<TCommand>)serviceScope.ServiceProvider.GetService(typeof(ICommandHandler<TCommand>));

                    _bus.WithCommandHandlerAsync(handler);

                    return this;
                }
            }

            public BusBuilder SubscribeToEvent<TEvent>() where TEvent : IEvent
            {
                // var handler = (IEventHandler<TEvent>)_webHost.Services
                //     .GetService(typeof(IEventHandler<TEvent>));
                // _bus.WithEventHandlerAsync(handler);

                // return this;
                using (var serviceScope = _webHost.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var handler = (IEventHandler<TEvent>)serviceScope.ServiceProvider.GetService(typeof(IEventHandler<TEvent>));

                    _bus.WithEventHandlerAsync(handler);

                    return this;
                }
            }

            public override ServiceHost Build()
            {
                return new ServiceHost(_webHost);
            }
        }
    }
}
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Activities (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities
Now listening on: https://localhost:5051
Now listening on: http://localhost:5050
Application started. Press Ctrl+C to shut down.
```

- The new `Actio-Services-Activities` database and the `Categories` collection has been created:

![](/images/backend/dotnetcore-net-core-microservice/ImplementingRepositories2.png)

ImplementingRepositories3

### 15. Creating Application Services

![](/images/backend/dotnetcore-net-core-microservice/CreatingApplicationServices.png)

- Create the `Exceptions` folder in the `Actio.Common` project with the following documents.

> Actio.Common -> Exceptions -> ActioException

```cs
using System;

namespace Actio.Common.Exceptions
{
    public class ActioException : Exception
    {
        public string Code { get; }

        public ActioException()
        {
        }

        public ActioException(string code)
        {
            Code = code;
        }

        public ActioException(string message, params object[] args) : this(string.Empty, message, args)
        {
        }

        public ActioException(string code, string message, params object[] args) : this(null, code, message, args)
        {
        }

        public ActioException(Exception innerException, string message, params object[] args)
            : this(innerException, string.Empty, message, args)
        {
        }

        public ActioException(Exception innerException, string code, string message, params object[] args)
            : base(string.Format(message, args), innerException)
        {
            Code = code;
        }
    }
}
```

- Create the Services for the `Action.Services.Activities` project

> Action.Services.Activities -> Services -> IActivityService.cs

```cs
using System;
using System.Threading.Tasks;

namespace Actio.Services.Activities.Services
{
    public interface IActivityService
    {
        Task AddAsync(Guid id, Guid userId, string category,
            string name, string description, DateTime createdAt);
    }
}
```

> Action.Services.Activities -> Services -> ActivityService.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Exceptions;
using Actio.Services.Activities.Domain.Models;
using Actio.Services.Activities.Domain.Repositories;

namespace Actio.Services.Activities.Services
{
    public class ActivityService : IActivityService
    {
        private readonly IActivityRepository _activityRepository;
        private readonly ICategoryRepository _categoryRepository;

        public ActivityService(IActivityRepository activityRepository,
            ICategoryRepository categoryRepository)
        {
            _activityRepository = activityRepository;
            _categoryRepository = categoryRepository;
        }

        public async Task AddAsync(Guid id, Guid userId, string category,
            string name, string description, DateTime createdAt)
        {
            var activityCategory = await _categoryRepository.GetAsync(category);
            if (activityCategory == null)
            {
                throw new ActioException("category_not_found",
                    $"Category: '{category}' was not found.");
            }
            var activity = new Activity(id, activityCategory, userId,
                name, description, createdAt);
            await _activityRepository.AddAsync(activity);
        }
    }
}
```

- Include the new `Exception` class in other documents.

> Action.Services.Activities -> Domain -> Models -> Activity.cs

```cs
using System;
using Actio.Common.Exceptions;

namespace Actio.Services.Activities.Domain.Models
{
    public class Activity
    {
        public Guid Id { get; protected set; }
        public string Category { get; protected set; }
        public Guid UserId { get; protected set; }
        public string Name { get; protected set; }
        public string Description { get; protected set; }
        public DateTime CreatedAt { get; protected set; }

        protected Activity()
        {
        }

        public Activity(Guid id, Category category, Guid userId,
            string name, string description, DateTime createdAt)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ActioException("empty_activity_name",
                    "Activity name can not be empty.");
            }
            Id = id;
            Category = category.Name;
            UserId = userId;
            Name = name;
            Description = description;
            CreatedAt = createdAt;
        }
    }
}
```

- Register the service on the `Startup` class.

> Action.Services.Activities -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Activities.Domain.Repositories;
using Actio.Services.Activities.Handlers;
using Actio.Services.Activities.Repositories;
using Actio.Services.Activities.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Activities
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMongoDB(Configuration);
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IActivityRepository, ActivityRepository>();
            services.AddScoped<IDatabaseSeeder, CustomMongoSeeder>();

            services.AddRabbitMq(Configuration);
            services.AddScoped<ICommandHandler<CreateActivity>, CreateActivityHandler>();
            services.AddScoped<IActivityService, ActivityService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

### 16. Implementing Handlers

![](/images/backend/dotnetcore-net-core-microservice/ImplementingHandlers.png)

- Modify the `CreateActivityHandler` to include the new Activity Service.

> Action.Services.Activities -> Handlers -> CreateActivityHandler.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Events;
using Actio.Common.Exceptions;
using Actio.Services.Activities.Services;
using Microsoft.Extensions.Logging;
using RawRabbit;

namespace Actio.Services.Activities.Handlers
{
    public class CreateActivityHandler : ICommandHandler<CreateActivity>
    {
        private readonly ILogger _logger;
        private readonly IBusClient _busClient;
        private readonly IActivityService _activityService;

        public CreateActivityHandler(IBusClient busClient,
            IActivityService activityService,
            ILogger<CreateActivityHandler> logger)
        {
            _busClient = busClient;
            _activityService = activityService;
            _logger = logger;
        }

        public async Task HandleAsync(CreateActivity command)
        {
            _logger.LogInformation($"Creating activity: '{command.Id}' for user: '{command.UserId}'.");
            try
            {
                await _activityService.AddAsync(command.Id, command.UserId,
                    command.Category, command.Name, command.Description, command.CreatedAt);
                await _busClient.PublishAsync(new ActivityCreated(command.Id,
                    command.UserId, command.Category, command.Name, command.Description, command.CreatedAt));
                _logger.LogInformation($"Activity: '{command.Id}' was created for user: '{command.UserId}'.");

                return;
            }
            catch (ActioException ex)
            {
                _logger.LogError(ex, ex.Message);
                await _busClient.PublishAsync(new CreateActivityRejected(command.Id,
                    ex.Message, ex.Code));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                await _busClient.PublishAsync(new CreateActivityRejected(command.Id,
                    ex.Message, "error"));
            }
        }
    }
}
```

![](/images/backend/dotnetcore-net-core-microservice/ImplementingHandlers2.png)

## 4. The Identity Service

![](/images/backend/dotnetcore-net-core-microservice/TheIdentityService.png)

### 17. Defining User Entity

![](/images/backend/dotnetcore-net-core-microservice/DefiningUserEntity.png)

- Create in the `Actio.Services.Identity` project the new `Domain` folder and the `Models` and `Repositories` subfolders with the following documents inside.

> Actio.Services.Identity -> Domain -> Models -> User.cs

```cs
using System;
using Actio.Common.Exceptions;
using Actio.Services.Identity.Domain.Services;

namespace Actio.Services.Identity.Domain.Models
{
    public class User
    {
        public Guid Id { get; protected set; }
        public string Email { get; protected set; }
        public string Name { get; protected set; }
        public string Password { get; protected set; }
        public string Salt { get; protected set; }
        public DateTime CreatedAt { get; protected set; }

        protected User()
        {
        }

        public User(string email, string name)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                throw new ActioException("empty_user_email",
                    "User email can not be empty.");
            }
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ActioException("empty_user_name",
                    "User name can not be empty.");
            }
            Id = Guid.NewGuid();
            Email = email.ToLowerInvariant();
            Name = name;
            CreatedAt = DateTime.UtcNow;
        }

    }
}
```

> Actio.Services.Identity -> Domain -> Repositories -> IUserRepository.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Services.Identity.Domain.Models;

namespace Actio.Services.Identity.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetAsync(Guid id);
        Task<User> GetAsync(string email);
        Task AddAsync(User user);
    }
}
```

### 18. Hashing Passwords

![](/images/backend/dotnetcore-net-core-microservice/HashingPasswords.png)

Create in the `Actio.Services.Identity` and `Domain` folder the `Services` subfolder with the following documents inside.

> Actio.Services.Identity -> Domain -> Services -> IEncrypter.cs

```cs
namespace Actio.Services.Identity.Domain.Services
{
    public interface IEncrypter
    {
        string GetSalt();
        string GetHash(string value, string salt);
    }
}
```

> Actio.Services.Identity -> Domain -> Services -> Encrypter.cs

```cs
using System;
using System.Security.Cryptography;
using System.Text;

namespace Actio.Services.Identity.Domain.Services
{
    public class Encrypter : IEncrypter
    {
        private static readonly int SaltSize = 40;
        private static readonly int DeriveBytesIterationsCount = 10000;

        public string GetSalt()
        {
            var random = new Random();
            var saltBytes = new byte[SaltSize];
            var rng = RandomNumberGenerator.Create();
            rng.GetBytes(saltBytes);

            return Convert.ToBase64String(saltBytes);
        }

        public string GetHash(string value, string salt)
        {
            var pbkdf2 = new Rfc2898DeriveBytes(value, GetBytes(salt), DeriveBytesIterationsCount);

            return Convert.ToBase64String(pbkdf2.GetBytes(SaltSize));
        }

        private static byte[] GetBytes(string value)
        {
            var bytes = new byte[value.Length*sizeof(char)];
            Buffer.BlockCopy(value.ToCharArray(), 0, bytes, 0, bytes.Length);

            return bytes;
        }
    }
}
```

- The `Actio.Services.Identity.Domain.Models.User` class must be modified to include the use of the new `Encrypter` class.

> Actio.Services.Identity -> Domain -> Models -> User.cs

```cs
using System;
using Actio.Common.Exceptions;
using Actio.Services.Identity.Domain.Services;

namespace Actio.Services.Identity.Domain.Models
{
    public class User
    {
        public Guid Id { get; protected set; }
        public string Email { get; protected set; }
        public string Name { get; protected set; }
        public string Password { get; protected set; }
        public string Salt { get; protected set; }
        public DateTime CreatedAt { get; protected set; }

        protected User()
        {
        }

        public User(string email, string name)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                throw new ActioException("empty_user_email",
                    "User email can not be empty.");
            }
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ActioException("empty_user_name",
                    "User name can not be empty.");
            }
            Id = Guid.NewGuid();
            Email = email.ToLowerInvariant();
            Name = name;
            CreatedAt = DateTime.UtcNow;
        }

        public void SetPassword(string password, IEncrypter encrypter)
        {
            if (string.IsNullOrWhiteSpace(password))
            {
                throw new ActioException("empty_password",
                    "Password can not be empty.");
            }
            Salt = encrypter.GetSalt();
            Password = encrypter.GetHash(password, Salt);
        }

        public bool ValidatePassword(string password, IEncrypter encrypter)
            => Password.Equals(encrypter.GetHash(password, Salt));
    }
}
```

- Modify in the `Actio.Services.Identity` project the `Startup.cs` document to registrer the service

> Actio.Services.Identity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Services.Identity.Domain.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddSingleton<IEncrypter, Encrypter>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

### 19. Storing User Data

![](/images/backend/dotnetcore-net-core-microservice/StoringUserData.png)

- Create in the `Actio.Services.Identity` the `Repositories` subfolder with the following document inside.

> Actio.Services.Identity -> Repositories -> UserRepository.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Services.Identity.Domain.Models;
using Actio.Services.Identity.Domain.Repositories;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace Actio.Services.Identity.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoDatabase _database;
        public UserRepository(IMongoDatabase database)
        {
            _database = database;
        }

        public async Task<User> GetAsync(Guid id)
            => await Collection
                .AsQueryable()
                .FirstOrDefaultAsync(x => x.Id == id);

        public async Task<User> GetAsync(string email)
            => await Collection
                .AsQueryable()
                .FirstOrDefaultAsync(x => x.Email == email.ToLowerInvariant());

        public async Task AddAsync(User user)
            => await Collection.InsertOneAsync(user);

        private IMongoCollection<User> Collection
            => _database.GetCollection<User>("Users");
    }
}
```

- Modify in the `Actio.Services.Identity` project the `Startup.cs` document to registrer the new repository and to add MongoDB, RabbitMQ and the Database Initializer.

> Actio.Services.Identity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Services.Identity.Domain.Services;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Handlers;
using Actio.Services.Identity.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;

namespace Actio.Services.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMongoDB(Configuration);
            services.AddRabbitMq(Configuration);
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddSingleton<IEncrypter, Encrypter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();

            app.UseMvc();
        }
    }
}
```

Modify in the `Actio.Services.Identity` project the `appsettings.json` to include the `MongoDB` credentials.

> Actio.Services.Identity -> appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "mongo": {
    "connectionString": "mongodb://localhost:27017",
    "database": "Actio-Services-Identity",
    "seed": true
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["localhost"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

StoringUserData2
StoringUserData3

### 20. Registering and Logging In

![](/images/backend/dotnetcore-net-core-microservice/RegisteringAndLoggingIn.png)

- Create in the `Actio.Services.Identity` the `Services` subfolder with the following documents inside.

> Actio.Services.Identity -> Handlers -> IUserService.cs

```cs
using System.Threading.Tasks;
using Actio.Common.Auth;

namespace Actio.Services.Identity.Services
{
    public interface IUserService
    {
         Task RegisterAsync(string email, string password, string name);
         Task<JsonWebToken> LoginAsync(string email, string password);
    }
}
```

> Actio.Services.Identity -> Handlers -> CreateUserHandler.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Auth;
using Actio.Common.Exceptions;
using Actio.Services.Identity.Domain.Models;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Domain.Services;

namespace Actio.Services.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IEncrypter _encrypter;
        private readonly IJwtHandler _jwtHandler;

        public UserService(IUserRepository repository,
            IEncrypter encrypter,
            IJwtHandler jwtHandler)
        {
            _repository = repository;
            _encrypter = encrypter;
            _jwtHandler = jwtHandler;
        }

        public async Task RegisterAsync(string email, string password, string name)
        {
            var user = await _repository.GetAsync(email);
            if (user != null)
            {
                throw new ActioException("email_in_use",
                    $"Email: '{email}' is already in use.");
            }
            user = new User(email, name);
            user.SetPassword(password, _encrypter);
            await _repository.AddAsync(user);
        }

        public async Task<JsonWebToken> LoginAsync(string email, string password)
        {
            var user = await _repository.GetAsync(email);
            if (user == null)
            {
                throw new ActioException("invalid_credentials",
                    $"Invalid credentials.");
            }
            if (!user.ValidatePassword(password, _encrypter))
            {
                throw new ActioException("invalid_credentials",
                    $"Invalid credentials.");
            }

            return _jwtHandler.Create(user.Id);
        }
    }
}
```

- Create in the `Actio.Common` project and `Events` folfer the following document.

> Actio.Common -> Events -> CreatedUserRejected.js

```cs
namespace Actio.Common.Events
{
    public class CreateUserRejected : IRejectedEvent
    {
        public string Email { get; }
        public string Reason { get; }
        public string Code { get; }

        protected CreateUserRejected()
        {
        }

        public CreateUserRejected(string email,
            string reason, string code)
        {
            Email = email;
            Reason = reason;
            Code = code;
        }
    }
}
```

- Create in the `Actio.Services.Identity` the `Handlers` subfolder with the following document inside.

> Actio.Services.Identity -> Handlers -> CreateUserHandler.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Events;
using Actio.Common.Exceptions;
using Actio.Services.Identity.Services;
using Microsoft.Extensions.Logging;
using RawRabbit;

namespace Actio.Services.Identity.Handlers
{
    public class CreateUserHandler : ICommandHandler<CreateUser>
    {
        private readonly ILogger _logger;
        private readonly IBusClient _busClient;
        private readonly IUserService _userService;

        public CreateUserHandler(IBusClient busClient,
            IUserService userService,
            ILogger<CreateUser> logger)
        {
            _busClient = busClient;
            _userService = userService;
            _logger = logger;
        }

        public async Task HandleAsync(CreateUser command)
        {
            _logger.LogInformation($"Creating user: '{command.Email}' with name: '{command.Name}'.");
            try
            {
                await _userService.RegisterAsync(command.Email, command.Password, command.Name);
                await _busClient.PublishAsync(new UserCreated(command.Email, command.Name));
                _logger.LogInformation($"User: '{command.Email}' was created with name: '{command.Name}'.");

                return;
            }
            catch (ActioException ex)
            {
                _logger.LogError(ex, ex.Message);
                await _busClient.PublishAsync(new CreateUserRejected(command.Email,
                    ex.Message, ex.Code));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                await _busClient.PublishAsync(new CreateUserRejected(command.Email,
                    ex.Message, "error"));
            }
        }
    }
}
```

- Modify in the `Actio.Services.Identity` project the `Startup.cs` document to registrer the new Handler and Repository and to add the logger.

> Actio.Services.Identity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Identity.Domain.Services;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Handlers;
using Actio.Services.Identity.Repositories;
using Actio.Services.Identity.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddLogging();

            services.AddMongoDB(Configuration);
            services.AddRabbitMq(Configuration);
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddSingleton<IEncrypter, Encrypter>();
            services.AddScoped<ICommandHandler<CreateUser>, CreateUserHandler>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddSingleton<IEncrypter, Encrypter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();

            app.UseMvc();
        }
    }
}

```

- Modify in the `Actio.Services.Identity` project the `Properties\launchSettings.json` document to change the ports.

> Actio.Services.Identity -> Properties -> launchSettings.json

```json
{
  "$schema": "http://json.schemastore.org/launchsettings.json",
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:21223",
      "sslPort": 44342
    }
  },
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "launchUrl": "api/values",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "Actio.Services.Identity": {
      "commandName": "Project",
      "launchBrowser": true,
      "launchUrl": "api/values",
      "applicationUrl": "https://localhost:5101;http://localhost:5100",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

- Modify the ` Actio.Api.Controllers.UsersController

> Actio.Api -> Controllers -> UsersController.cs

```cs
using System.Threading.Tasks;
using Actio.Common.Commands;
using Microsoft.AspNetCore.Mvc;
using RawRabbit;

namespace Actio.Api.Controllers
{
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly IBusClient _busClient;

        public UsersController(IBusClient busClient)
        {
            _busClient = busClient;
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]CreateUser command)
        {
            await _busClient.PublishAsync(command);

            return Accepted();
        }
    }
}
```

- Try to create an user and to login an user.
  > Run the Api on one terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

> Run the Services.Identitity on another terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Identity (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity
Now listening on: https://localhost:5101
Now listening on: http://localhost:5100
Application started. Press Ctrl+C to shut down.
```

> Execute the following curl command on another terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ curl localhost:5000/users -X POST -H "content-type: application/json" -d '{"email": "user2@email.com", "name": "user2", "password": "secret2"}'
```

- From the `Aactop.Api` terminal

```sh
info: Microsoft.AspNetCore.Server.Kestrel[32]
      Connection id "0HLK0UI1FQL6N", Request id "0HLK0UI1FQL6N:00000001": the application completed without reading the entire request body.
```

- Using Postman

```sh
POST /users HTTP/1.1
Host: localhost:5001
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: e375a6f5-7ef9-d9a0-958f-16257aac9430

{
	"email": "user1@email.com",
	"name": "user1",
	"password": "secret"
}
```

- From the `Aactop.Api` terminal

```sh
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST https://localhost:5001/users application/json 74
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[0]
      Executing endpoint 'Actio.Api.Controllers.UsersController.Post (Actio.Api)'
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Route matched with {action = "Post", controller = "Users"}. Executing action Actio.Api.Controllers.UsersController.Post (Actio.Api)
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Executing action method Actio.Api.Controllers.UsersController.Post (Actio.Api) with arguments (Actio.Common.Commands.CreateUser) - Validation state: Valid
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action method Actio.Api.Controllers.UsersController.Post (Actio.Api), returned result Microsoft.AspNetCore.Mvc.AcceptedResult in 196.5976ms.
info: Microsoft.AspNetCore.Mvc.Infrastructure.ObjectResultExecutor[1]
      Executing ObjectResult, writing value of type 'null'.
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action Actio.Api.Controllers.UsersController.Post (Actio.Api) in 386.5961ms
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[1]
      Executed endpoint 'Actio.Api.Controllers.UsersController.Post (Actio.Api)'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 488.7457ms 202
```

- From the `Aactop.Services.Identity` terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Identity (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity
Now listening on: https://localhost:5101
Now listening on: http://localhost:5100
Application started. Press Ctrl+C to shut down.
info: Actio.Common.Commands.CreateUser[0]
      Creating user: 'user1@email.com' with name: 'user1'.
info: Actio.Common.Commands.CreateUser[0]
      User: 'user1@email.com' was created with name: 'user1'.
```

![](/images/backend/dotnetcore-net-core-microservice/RegisteringAndLoggingIn2.png)

![](/images/backend/dotnetcore-net-core-microservice/RegisteringAndLoggingIn3.png)

![](/images/backend/dotnetcore-net-core-microservice/RegisteringAndLoggingIn4.png)

## 5. Using JSON Web Tokens

![](/images/backend/dotnetcore-net-core-microservice/UsingJSONWebTokens.png)

### 21. JSON Web Tokens

![](/images/backend/dotnetcore-net-core-microservice/JSONWebTokens.png)

- We can find more information about JSON Web Token on [JWT](https://jwt.io/)

![](/images/backend/dotnetcore-net-core-microservice/JSONWebTokens2.png)

![](/images/backend/dotnetcore-net-core-microservice/JSONWebTokens3.png)

- The token has 3 parts:

![](/images/backend/dotnetcore-net-core-microservice/JSONWebTokens4.png)

- Add these new `Nuget` packages.

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)$ cd src/Actio.Common/
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Common (master)
$ dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpE490.tmp
info : Adding PackageReference for package 'Microsoft.AspNetCore.Authentication.JwtBearer' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj...
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.jwtbearer/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.AspNetCore.Authentication.JwtBearer'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.AspNetCore.Authentication.JwtBearer'&semVerLevel=2.0.0 359ms
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.jwtbearer/index.json 883ms
info : Package 'Microsoft.AspNetCore.Authentication.JwtBearer' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
info : PackageReference for package 'Microsoft.AspNetCore.Authentication.JwtBearer' version '2.2.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\obj\project.assets.json
log  : Restore completed in 3.39 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Common (master)
$ dotnet add package Microsoft.IdentityModel.Tokens
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmp4355.tmp
info : Adding PackageReference for package 'Microsoft.IdentityModel.Tokens' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj...
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.IdentityModel.Tokens'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.IdentityModel.Tokens'&semVerLevel=2.0.0 400ms
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/index.json 959ms
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/5.4.0/microsoft.identitymodel.tokens.5.4.0.nupkg
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/5.4.0/microsoft.identitymodel.tokens.5.4.0.nupkg 498ms
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.IdentityModel.Logging'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.IdentityModel.Logging'&semVerLevel=2.0.0 72ms
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/index.json 477ms
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/5.4.0/microsoft.identitymodel.logging.5.4.0.nupkg
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/5.4.0/microsoft.identitymodel.logging.5.4.0.nupkg 501ms
log  : Installing Microsoft.IdentityModel.Logging 5.4.0.
log  : Installing Microsoft.IdentityModel.Tokens 5.4.0.
info : Package 'Microsoft.IdentityModel.Tokens' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
info : PackageReference for package 'Microsoft.IdentityModel.Tokens' version '5.4.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\obj\project.assets.json
log  : Restore completed in 4.94 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
```

- In the `Actio.Common` project we has to create the `Auth` folder with the following documents:

> Actio.Common -> Auth -> IJwtHandler.cs

```cs
using System;

namespace Actio.Common.Auth
{
    public interface IJwtHandler
    {
        JsonWebToken Create(Guid userId);
    }
}
```

> Actio.Common -> Auth -> JsonWebToken.cs

```cs
namespace Actio.Common.Auth
{
    public class JsonWebToken
    {
        public string Token { get; set; }
        public long Expires { get; set; }
    }
}
```

### 22. Implementing JWT with HMAC

![](/images/backend/dotnetcore-net-core-microservice/ImplementingJWTwithHMAC.png)

- In the `Actio.Common` project and the `Auth` folder add new following additional documents:

> Actio.Common -> Auth -> JwtOptions.cs

```cs
namespace Actio.Common.Auth
{
    public class JwtOptions
    {
        public string SecretKey { get; set; }
        public int ExpiryMinutes { get; set; }
        public string Issuer { get; set; }
    }
}
```

> Actio.Common -> Auth -> JwtHandler.cs

```cs
using System;
using System.Text;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.IO;
using Microsoft.Extensions.Options;

namespace Actio.Common.Auth
{
    public class JwtHandler : IJwtHandler
    {
        private readonly JwtSecurityTokenHandler _jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
        private readonly JwtOptions _options;
        private readonly SecurityKey _issuerSigningKey;
        private readonly SigningCredentials _signingCredentials;
        private readonly JwtHeader _jwtHeader;
        private readonly TokenValidationParameters _tokenValidationParameters;

        public JwtHandler(IOptions<JwtOptions> options)
        {
            _options = options.Value;
            _issuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.SecretKey));
            _signingCredentials = new SigningCredentials(_issuerSigningKey, SecurityAlgorithms.HmacSha256);
            _jwtHeader = new JwtHeader(_signingCredentials);
            _tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidIssuer = _options.Issuer,
                IssuerSigningKey = _issuerSigningKey
            };
        }

        public JsonWebToken Create(Guid userId)
        {
            var nowUtc = DateTime.UtcNow;
            var expires = nowUtc.AddMinutes(_options.ExpiryMinutes);
            var centuryBegin = new DateTime(1970, 1, 1).ToUniversalTime();
            var exp = (long)(new TimeSpan(expires.Ticks - centuryBegin.Ticks).TotalSeconds);
            var now = (long)(new TimeSpan(nowUtc.Ticks - centuryBegin.Ticks).TotalSeconds);
            var payload = new JwtPayload
            {
                {"sub", userId},
                {"iss", _options.Issuer},
                {"iat", now},
                {"exp", exp},
                {"unique_name", userId}
            };
            var jwt = new JwtSecurityToken(_jwtHeader, payload);
            var token = _jwtSecurityTokenHandler.WriteToken(jwt);

            return new JsonWebToken
            {
                Token = token,
                Expires = exp
            };
        }
    }
}
```

### 23. Authenticating the User

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser.png)

- In the `Actio.Common` project and the `Auth` folder add new following additional documents:

> Actio.Common -> Auth -> Extensions.cs

```cs
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Actio.Common.Auth
{
    public static class Extensions
    {
        public static void AddJwt(this IServiceCollection services, IConfiguration configuration)
        {
            var options = new JwtOptions();
            var section = configuration.GetSection("jwt");
            section.Bind(options);
            services.Configure<JwtOptions>(configuration.GetSection("jwt"));
            services.AddSingleton<IJwtHandler, JwtHandler>();
            services.AddAuthentication()
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateAudience = false,
                        ValidIssuer = options.Issuer,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(options.SecretKey))
                    };
                });
        }
    }
}
```

- Modify the `Startup.cs` document in the `Actio.Services.Identity` project to add the `JWT`

> Actio.Services.Identity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Auth;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Identity.Domain.Services;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Handlers;
using Actio.Services.Identity.Repositories;
using Actio.Services.Identity.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddLogging();

            services.AddMongoDB(Configuration);
            services.AddRabbitMq(Configuration);
            services.AddJwt(Configuration);

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddSingleton<IEncrypter, Encrypter>();
            services.AddScoped<ICommandHandler<CreateUser>, CreateUserHandler>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddSingleton<IEncrypter, Encrypter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();

            app.UseMvc();
        }
    }
}
```

- Modify the `Startup.cs` document in the `Actio.Api` project to add the `JWT`
  > Actio.Services.Identity -> Startup.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Api.Handlers;
using Actio.Common.Auth;
using Actio.Common.Events;
using Actio.Common.RabbitMq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddJwt(Configuration);

            services.AddRabbitMq(Configuration);
            services.AddScoped<IEventHandler<ActivityCreated>, ActivityCreatedHandler>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

- Modify the `Actio.Services.Identity.Services.IUserService` and `Actio.Services.Identity.Services.IUserService` documents to return the token.

> Actio.Services.Identity -> Services -> IUserService.cs

```cs
using System.Threading.Tasks;
using Actio.Common.Auth;

namespace Actio.Services.Identity.Services
{
    public interface IUserService
    {
         Task RegisterAsync(string email, string password, string name);
         Task<JsonWebToken> LoginAsync(string email, string password);
    }
}
```

> Actio.Services.Identity -> Services -> IUserService.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Auth;
using Actio.Common.Exceptions;
using Actio.Services.Identity.Domain.Models;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Domain.Services;

namespace Actio.Services.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IEncrypter _encrypter;
        private readonly IJwtHandler _jwtHandler;

        public UserService(IUserRepository repository,
            IEncrypter encrypter,
            IJwtHandler jwtHandler)
        {
            _repository = repository;
            _encrypter = encrypter;
            _jwtHandler = jwtHandler;
        }

        public async Task RegisterAsync(string email, string password, string name)
        {
            var user = await _repository.GetAsync(email);
            if (user != null)
            {
                throw new ActioException("email_in_use",
                    $"Email: '{email}' is already in use.");
            }
            user = new User(email, name);
            user.SetPassword(password, _encrypter);
            await _repository.AddAsync(user);
        }

        public async Task<JsonWebToken> LoginAsync(string email, string password)
        {
            var user = await _repository.GetAsync(email);
            if (user == null)
            {
                throw new ActioException("invalid_credentials",
                    $"Invalid credentials.");
            }
            if (!user.ValidatePassword(password, _encrypter))
            {
                throw new ActioException("invalid_credentials",
                    $"Invalid credentials.");
            }

            return _jwtHandler.Create(user.Id);
        }
    }
}
```

- Create the new `Account` controller in the `Actio.Services.Identity` project.

> Actio.Services.Identity -> AccountController.cs

```cs
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Services.Identity.Services;
using Microsoft.AspNetCore.Mvc;

namespace Actio.Services.Identity.Controllers
{
    [Route("")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AuthenticateUser command)
            => Json(await _userService.LoginAsync(command.Email, command.Password));
    }
}
```

- Go to to the [Secure Password Generator](https://passwordsgenerator.net/) web site to generate a secure key:

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser2.png)

- Modify the `appsettings.json` document in both the `Actio.Services.Identity` and `Actio.Api` projects to add the new `jwt` section.

> Actio.Services.Identity -> appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "jwt": {
    "secretKey": "YfE2dYXMDR2WPCPe59UrmEuNcqnRRtv4WA3PZbnbQ5FgJSpuWB8G",
    "expiryMinutes": "5",
    "issuer": "http://localhost:5000"
  },
  "mongo": {
    "connectionString": "mongodb://localhost:27017",
    "database": "Actio-Services-Identity",
    "seed": true
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["localhost"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

> Actio.Api -> appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "jwt": {
    "secretKey": "YfE2dYXMDR2WPCPe59UrmEuNcqnRRtv4WA3PZbnbQ5FgJSpuWB8G",
    "expiryMinutes": "5",
    "issuer": "http://localhost:5000"
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["localhost"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

- Modify the `Activities` controller in the `Actio.Api` project to add the new `Get` method without authorisation.

> Actio.Api -> Controllers -> ActivitiesController.cs

```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Microsoft.AspNetCore.Mvc;
using RawRabbit;

namespace Actio.Api.Controllers
{
    [Route("[controller]")]
    public class ActivitiesController : Controller
    {
        private readonly IBusClient _busClient;

        public ActivitiesController(IBusClient busClient)
        {
            _busClient = busClient;
        }

        [HttpGet("")]
        public IActionResult Get() => Content("Secured");

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]CreateActivity command)
        {
            command.Id = Guid.NewGuid();
            command.CreatedAt = DateTime.UtcNow;
            await _busClient.PublishAsync(command);

            return Accepted($"activities/{command.Id}");
        }
    }
}
```

- Run the `Actio.Api` project

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ cd src/Actio.Api/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- Run the `Actio.Services.Identity` in another terminal

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Identity (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity
Now listening on: https://localhost:5101
Now listening on: http://localhost:5100
Application started. Press Ctrl+C to shut down.
```

- Open `http://localhost:5000/activities` on the browser:

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser3.png)

- Modify the `Activities` controller in the `Actio.Api` project to add the new `Get` method without authorisation.

> Actio.Api -> Controllers -> ActivitiesController.cs

```cs
using System;
using System.Net;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RawRabbit;

namespace Actio.Api.Controllers
{
    [Route("[controller]")]
    public class ActivitiesController : Controller
    {
        private readonly IBusClient _busClient;

        public ActivitiesController(IBusClient busClient)
        {
            _busClient = busClient;
        }

        [HttpGet("")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Get() => Content("Secured");

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]CreateActivity command)
        {
            command.Id = Guid.NewGuid();
            command.CreatedAt = DateTime.UtcNow;
            await _busClient.PublishAsync(command);

            return Accepted($"activities/{command.Id}");
        }
    }
}
```

- If we try to access the page now some errors related to the authentication are thrown.

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5001/activities
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[0]
      Executing endpoint 'Actio.Api.Controllers.ActivitiesController.Get (Actio.Api)'
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Route matched with {action = "Get", controller = "Activities"}. Executing action Actio.Api.Controllers.ActivitiesController.Get (Actio.Api)
info: Microsoft.AspNetCore.Authorization.DefaultAuthorizationService[2]
      Authorization failed.
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[3]
      Authorization failed for the request at filter 'Microsoft.AspNetCore.Mvc.Authorization.AuthorizeFilter'.
info: Microsoft.AspNetCore.Mvc.ChallengeResult[1]
      Executing ChallengeResult with authentication schemes (Bearer).
info: Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerHandler[12]
      AuthenticationScheme: Bearer was challenged.
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action Actio.Api.Controllers.ActivitiesController.Get (Actio.Api) in 74.3417ms
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[1]
      Executed endpoint 'Actio.Api.Controllers.ActivitiesController.Get (Actio.Api)'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 158.85ms 401
```

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser4.png)

- We need to authorise in the application first.

- Obtain the token from the `Actio.Services.Identity` project.

> Request

```
POST /login HTTP/1.1
Host: localhost:5101
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 4b8be4a4-b2f5-913b-77db-9fb5d2b763ab

{
	"email": "user1@email.com", 
	"password": "secret"
}
```

> Response

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRhNTY5YS03NTk1LTRjYjAtOTcyNC0zMmFmOWIzNDNlMGIiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiaWF0IjoxNTQ4MzQ5NDczLCJleHAiOjE1NDgzNDk3NzMsInVuaXF1ZV9uYW1lIjoiZjA0YTU2OWEtNzU5NS00Y2IwLTk3MjQtMzJhZjliMzQzZTBiIn0.hIPcrVoHRr73W76LyiTkzTwIW3MeCsgYHEM_MooNss0",
    "expires": 1548349773
}
```

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser5.png)

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser6.png)

> Call the `https://localhost:5001/activities` authenticated.

> Request

```
GET /activities HTTP/1.1
Host: localhost:5001
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRhNTY5YS03NTk1LTRjYjAtOTcyNC0zMmFmOWIzNDNlMGIiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiaWF0IjoxNTQ4MzQ5NDczLCJleHAiOjE1NDgzNDk3NzMsInVuaXF1ZV9uYW1lIjoiZjA0YTU2OWEtNzU5NS00Y2IwLTk3MjQtMzJhZjliMzQzZTBiIn0.hIPcrVoHRr73W76LyiTkzTwIW3MeCsgYHEM_MooNss0
Cache-Control: no-cache
Postman-Token: 5ac8c79a-a847-43c3-1255-dba935f4278b

```

> Response
```
Secured
```

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser7.png)

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser8.png)

![](/images/backend/dotnetcore-net-core-microservice/AuthenticatingTheUser9.png)

## 6. Finalizing the API Gateway

![](/images/backend/dotnetcore-net-core-microservice/FinalizingTheAPIGateway.png)

### 24. Implementing Event Handlers 

![](/images/backend/dotnetcore-net-core-microservice/ImplementingEventHandlers.png) 

- In the `Actio.Api` create the `Repositories` folder and the following documents inside:

> Actio.Api -> Repositories -> IActivityRepository.cs
```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Actio.Api.Models;

namespace Actio.Api.Repositories
{
    public interface IActivityRepository
    {
        Task<Activity> GetAsync(Guid id);
        Task<IEnumerable<Activity>> BrowseAsync(Guid userId);
        Task AddAsync(Activity activity);
    }
}
```

> Actio.Api -> Repositories -> IActivityRepository.cs
```cs
namespace Actio.Api.Repositories
{
    public class ActivityRepository : IActivityRepository
    {
    }
}
```

- Modify the `Actio.Api.Startup.cs` to include the new interface.

> Actio.Api -> Startup.cs
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Api.Handlers;
using Actio.Api.Repositories;
using Actio.Common.Auth;
using Actio.Common.Events;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Logging;

namespace Actio.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddJwt(Configuration);

            services.AddRabbitMq(Configuration);
            services.AddMongoDB(Configuration);
            services.AddScoped<IEventHandler<ActivityCreated>, ActivityCreatedHandler>();
            services.AddScoped<IActivityRepository, ActivityRepository>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

- Modify the `ActivityCreatedHandler` handler to use properly the new repository

> Actio.Api -> Handlers -> ActivityCreatedHandler.cs
```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Events;

namespace Actio.Api.Handlers
{
    public class ActivityCreatedHandler : IEventHandler<UserCreated>
    {

        public async Task HandleAsync(UserCreated @event)
        {
            await Task.CompletedTask;
            Console.WriteLine($"User created: {@event.Name}");
        }
    }
}
```

### 25. Storing the Data 

![](/images/backend/dotnetcore-net-core-microservice/StoringTheData.png)

- Update the `Actio.Api.appsettings.json` to include the `mongodb` section

> Actio.Api > appsettings.json
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "jwt": {
    "secretKey": "YfE2dYXMDR2WPCPe59UrmEuNcqnRRtv4WA3PZbnbQ5FgJSpuWB8G",
    "expiryMinutes": "5",
    "issuer": "https://localhost:5001"
  },
  "mongo": {
    "connectionString": "mongodb://localhost:27017",
    "database": "Actio-Store",
    "seed": false
  },  
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["localhost"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}

```

- In the `Actio.Api` create the `Models` folder and the following document inside:

- In the `Actio.Api` create the `Models` folder and the following document inside:
> Actio.Api -> Repositories -> Activity.cs
```cs
using System;

namespace Actio.Api.Models
{
    public class Activity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
```

- Implement the `ActivityRepository` repository properly.

> Actio.Api -> Repositories -> ActivityRepository.cs
```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Actio.Api.Models;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace Actio.Api.Repositories
{
    public class ActivityRepository : IActivityRepository
    {
        private readonly IMongoDatabase _database;

        public ActivityRepository(IMongoDatabase database)
        {
            _database = database;
        }

        public async Task<Activity> GetAsync(Guid id)
            => await Collection
                .AsQueryable()
                .FirstOrDefaultAsync(x => x.Id == id);

        public async Task<IEnumerable<Activity>> BrowseAsync(Guid userId)
            => await Collection
                .AsQueryable()
                .Where(x => x.UserId == userId)
                .ToListAsync();

        public async Task AddAsync(Activity activity)
            => await Collection.InsertOneAsync(activity);

        private IMongoCollection<Activity> Collection 
            => _database.GetCollection<Activity>("Activities");
    }
}
```

- Implement the `ActivityCreatedHandler` handler properly.

> Actio.Api -> Handlers -> ActivityCreatedHandler.cs
```cs
using System;
using System.Threading.Tasks;
using Actio.Api.Models;
using Actio.Api.Repositories;
using Actio.Common.Events;

namespace Actio.Api.Handlers
{
    public class ActivityCreatedHandler : IEventHandler<ActivityCreated>
    {
        private readonly IActivityRepository _repository;

        public ActivityCreatedHandler(IActivityRepository repository)
        {
            _repository = repository;
        }

        public async Task HandleAsync(ActivityCreated @event)
        {
            await _repository.AddAsync(new Activity
            {
                Id = @event.Id,
                UserId = @event.UserId,
                Category = @event.Category,
                Name = @event.Name,
                CreatedAt = @event.CreatedAt,
                Description = @event.Description
            });
            Console.WriteLine($"Activity created: {@event.Name}");
        }
    }
}
```

### 26. Refactoring Endpoints 

![](/images/backend/dotnetcore-net-core-microservice/RefactoringEndpoints.png)

- Implement the `ActivitiesController` controller properly.

> Actio.Api -> Controllers -> ActivitiesController.cs
```cs
using System;
using System.Linq;
using System.Threading.Tasks;
using Actio.Api.Repositories;
using Actio.Common.Commands;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RawRabbit;

namespace Actio.Api.Controllers
{
    [Route("[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ActivitiesController : Controller
    {
        private readonly IBusClient _busClient;
        private readonly IActivityRepository _repository;

        public ActivitiesController(IBusClient busClient,
            IActivityRepository repository)
        {
            _busClient = busClient;
            _repository = repository;
        }

        [HttpGet("")]
        public async Task<IActionResult> Get()
        {
            var activities = await _repository
                .BrowseAsync(Guid.Parse(User.Identity.Name));

            return Json(activities.Select(x => new {x.Id, x.Name, x.Category, x.CreatedAt}));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var activity = await _repository.GetAsync(id);
            if (activity == null)
            {
                return NotFound();
            }
            if (activity.UserId != Guid.Parse(User.Identity.Name))
            {
                return Unauthorized();
            }

            return Json(activity);
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]CreateActivity command)
        {
            command.Id = Guid.NewGuid();
            command.UserId = Guid.Parse(User.Identity.Name);
            command.CreatedAt = DateTime.UtcNow;
            await _busClient.PublishAsync(command);

            return Accepted($"activities/{command.Id}");
        }
    }
}
```

### 27. Executing HTTP Requests

![](/images/backend/dotnetcore-net-core-microservice/ExecutingHTTPRequests.png)

- Run the `Actio.Api` in one terminal
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ cd src/Actio.Api/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- Run the `Actio.Services.Identity` from another terminal
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ cd src/Actio.Services.Identity/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Identity (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity
Now listening on: https://localhost:5101
Now listening on: http://localhost:5100
Application started. Press Ctrl+C to shut down.
```

- Run the `Actio.Services.Activities` from another terminal
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ cd src/Actio.Services.Activities/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Services.Activities (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities
Now listening on: https://localhost:5051
Now listening on: http://localhost:5050
Application started. Press Ctrl+C to shut down.
```

- Log in to the API

> Request
```
POST /login HTTP/1.1
Host: localhost:5101
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 629ce69d-297a-9602-aed3-fd402e14717f

{
	"email": "user1@email.com", 
	"password": "secret"
}
```

> Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRhNTY5YS03NTk1LTRjYjAtOTcyNC0zMmFmOWIzNDNlMGIiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiaWF0IjoxNTQ4MzU1NTAzLCJleHAiOjE1NDgzNTU4MDMsInVuaXF1ZV9uYW1lIjoiZjA0YTU2OWEtNzU5NS00Y2IwLTk3MjQtMzJhZjliMzQzZTBiIn0.aT3fUkVTsmcN_oPTiGvntsqO91nZu_znBkLC_Hx1Ao4",
    "expires": 1548355803
}
```

- Add a new Activity
```
POST /activities HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRhNTY5YS03NTk1LTRjYjAtOTcyNC0zMmFmOWIzNDNlMGIiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiaWF0IjoxNTQ4MzU1NTAzLCJleHAiOjE1NDgzNTU4MDMsInVuaXF1ZV9uYW1lIjoiZjA0YTU2OWEtNzU5NS00Y2IwLTk3MjQtMzJhZjliMzQzZTBiIn0.aT3fUkVTsmcN_oPTiGvntsqO91nZu_znBkLC_Hx1Ao4
Cache-Control: no-cache
Postman-Token: be7a09a2-716f-6eae-8753-fc325bb1276e

{
	"name": "Test activity 1", 
	"category": "Work", 
	"description": "My test activity"
}
```

![](/images/backend/dotnetcore-net-core-microservice/ExecutingHTTPRequests2.png)

```sh
info: Actio.Services.Activities.Handlers.CreateActivityHandler[0]
      Creating activity: '66f21441-454a-4137-bb84-912419b9386d' for user: 'f04a569a-7595-4cb0-9724-32af9b343e0b'.
info: Actio.Services.Activities.Handlers.CreateActivityHandler[0]
      Activity: '66f21441-454a-4137-bb84-912419b9386d' was created for user: 'f04a569a-7595-4cb0-9724-32af9b343e0b'.
```

```sh
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[1]
      Executed endpoint 'Actio.Api.Controllers.ActivitiesController.Post (Actio.Api)'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 294.32ms 202
Activity created: Test activity 1
```

![](/images/backend/dotnetcore-net-core-microservice/ExecutingHTTPRequests3.png)

![](/images/backend/dotnetcore-net-core-microservice/ExecutingHTTPRequests4.png)

- Get the list of the activities for the current user
> request
```
GET /activities HTTP/1.1
Host: localhost:5000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRhNTY5YS03NTk1LTRjYjAtOTcyNC0zMmFmOWIzNDNlMGIiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiaWF0IjoxNTQ4MzU1NTAzLCJleHAiOjE1NDgzNTU4MDMsInVuaXF1ZV9uYW1lIjoiZjA0YTU2OWEtNzU5NS00Y2IwLTk3MjQtMzJhZjliMzQzZTBiIn0.aT3fUkVTsmcN_oPTiGvntsqO91nZu_znBkLC_Hx1Ao4
Cache-Control: no-cache
Postman-Token: 73081195-5fc4-3e7c-e488-2b83f8b00cb2
```

> response
```json
[
    {
        "id": "66f21441-454a-4137-bb84-912419b9386d",
        "name": "Test activity 1",
        "category": "Work",
        "createdAt": "2019-01-24T18:45:27.416Z"
    }
]
```

- Get an especific activity
> Request
```
GET /activities/66f21441-454a-4137-bb84-912419b9386d HTTP/1.1
Host: localhost:5000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRhNTY5YS03NTk1LTRjYjAtOTcyNC0zMmFmOWIzNDNlMGIiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiaWF0IjoxNTQ4MzU1NTAzLCJleHAiOjE1NDgzNTU4MDMsInVuaXF1ZV9uYW1lIjoiZjA0YTU2OWEtNzU5NS00Y2IwLTk3MjQtMzJhZjliMzQzZTBiIn0.aT3fUkVTsmcN_oPTiGvntsqO91nZu_znBkLC_Hx1Ao4
Cache-Control: no-cache
Postman-Token: 1f953c5f-5e4a-b0bc-8b62-c014cc845173
```

> Response
```json
{
    "id": "66f21441-454a-4137-bb84-912419b9386d",
    "userId": "f04a569a-7595-4cb0-9724-32af9b343e0b",
    "category": "Work",
    "name": "Test activity 1",
    "description": "My test activity",
    "createdAt": "2019-01-24T18:45:27.416Z"
}
```

![](/images/backend/dotnetcore-net-core-microservice/ExecutingHTTPRequests5.png)

## 7. System Testing

![](/images/backend/dotnetcore-net-core-microservice/SystemTesting.png)

### 28. API Testing 

![](/images/backend/dotnetcore-net-core-microservice/APITesting.png)

- Create the `Actio.Api.Tests` project
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests (master)
$ dotnet new xunit -n Actio.Api.Tests
The template "xUnit Test Project" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Api.Tests\Actio.Api.Tests.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\obj\Actio.Api.Tests.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\obj\Actio.Api.Tests.csproj.nuget.g.targets.
  Restore completed in 3.52 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj.

Restore succeeded.
```

- Add the project to the solution
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add tests/src/Actio.Api.Test/Actio.Api.Tests.csproj
Project `tests\Actio.Api.Tests\Actio.Api.Test.csproj` added to the solution.
```

- Add the `FluentAssertions` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Api.Tests (master)
$ dotnet add package FluentAssertions
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpCEF5.tmp
info : Adding PackageReference for package 'FluentAssertions' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/fluentassertions/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='FluentAssertions'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='FluentAssertions'&semVerLevel=2.0.0 632ms
info :   GET https://api.nuget.org/v3-flatcontainer/fluentassertions/5.6.0/fluentassertions.5.6.0.nupkg
info :   OK https://api.nuget.org/v3-flatcontainer/fluentassertions/5.6.0/fluentassertions.5.6.0.nupkg 955ms
info :   GET https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='System.Configuration.ConfigurationManager'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='System.Configuration.ConfigurationManager'&semVerLevel=2.0.0 76ms
info :   OK https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/index.json 557ms
info :   GET https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/4.4.0/system.configuration.configurationmanager.4.4.0.nupkg
info :   OK https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/4.4.0/system.configuration.configurationmanager.4.4.0.nupkg 565ms
log  : Installing System.Configuration.ConfigurationManager 4.4.0.
log  : Installing FluentAssertions 5.6.0.
info : Package 'FluentAssertions' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
info : PackageReference for package 'FluentAssertions' version '5.6.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\obj\project.assets.json
log  : Restore completed in 7.04 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj.
```

- Add the `Microsoft.AspNetCore.TestHost` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Api.Tests (master)
$ dotnet add package Microsoft.AspNetCore.TestHost
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpFED.tmp
info : Adding PackageReference for package 'Microsoft.AspNetCore.TestHost' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj...
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.testhost/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.AspNetCore.TestHost'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.AspNetCore.TestHost'&semVerLevel=2.0.0 415ms
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.testhost/index.json 1126ms
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.testhost/2.2.0/microsoft.aspnetcore.testhost.2.2.0.nupkg
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.testhost/2.2.0/microsoft.aspnetcore.testhost.2.2.0.nupkg 560ms
log  : Installing Microsoft.AspNetCore.TestHost 2.2.0.
info : Package 'Microsoft.AspNetCore.TestHost' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
info : PackageReference for package 'Microsoft.AspNetCore.TestHost' version '2.2.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\obj\project.assets.json
log  : Restore completed in 3.83 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj.
```

- Add the `Moq` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Api.Tests (master)
$ dotnet add package Moq
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmp3003.tmp
info : Adding PackageReference for package 'Moq' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj...
info :   GET https://api.nuget.org/v3-flatcontainer/moq/index.json
info :   GET https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Moq'&semVerLevel=2.0.0
info :   OK https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Moq'&semVerLevel=2.0.0 365ms
info :   OK https://api.nuget.org/v3-flatcontainer/moq/index.json 1099ms
info : Package 'Moq' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
info : PackageReference for package 'Moq' version '4.10.1' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\obj\project.assets.json
log  : Restore completed in 4.58 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\Actio.Api.Tests.csproj.
```
- Add a reference to the `Action.Api` project,
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Api.Tests (master)
$ dotnet add Actio.Api.Tests.csproj reference ../../src/Actio.Api/Actio.Api.csproj
Reference `..\..\src\Actio.Api\Actio.Api.csproj` added to the project
```

> Actio.Api.Tests -> Actio.Api.Tests.csproj
```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="FluentAssertions" Version="5.6.0" />
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="2.2.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="Moq" Version="4.10.1" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Actio.Api\Actio.Api.csproj" />
  </ItemGroup>

</Project>
```

- Create the `Actio.Services.Activities.Tests` project
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests (master)
$ dotnet new xunit -n Actio.Services.Activities.Tests
The template "xUnit Test Project" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\obj\Actio.Services.Activities.Tests.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\obj\Actio.Services.Activities.Tests.csproj.nuget.g.targets.
  Restore completed in 3.95 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj.

Restore succeeded.
```
- Add the project to the solution
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add tests/src/Actio.Services.Activities.Test/Actio.Services.Activities.Tests.csproj
Project `tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Test.csproj` added to the solution.
```

- Add the `FluentAssertions` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Activities.Tests (master)
$ dotnet add package FluentAssertions
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpFF0C.tmp
info : Adding PackageReference for package 'FluentAssertions' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/fluentassertions/index.json
info :   CACHE https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='FluentAssertions'&semVerLevel=2.0.0
info : Package 'FluentAssertions' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
info : PackageReference for package 'FluentAssertions' version '5.6.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\obj\project.assets.json
log  : Restore completed in 967.63 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj.
```

- Add the `Microsoft.AspNetCore.TestHost` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Activities.Tests (master)
$ dotnet add package Microsoft.AspNetCore.TestHost
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmp4D8A.tmp
info : Adding PackageReference for package 'Microsoft.AspNetCore.TestHost' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.testhost/index.json
info :   CACHE https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.AspNetCore.TestHost'&semVerLevel=2.0.0
info : Package 'Microsoft.AspNetCore.TestHost' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
info : PackageReference for package 'Microsoft.AspNetCore.TestHost' version '2.2.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\obj\project.assets.json
log  : Restore completed in 1.29 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj.
```

- Add the `moq` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Activities.Tests (master)
$ dotnet add package Moq
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpD17F.tmp
info : Adding PackageReference for package 'Moq' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/moq/index.json
info :   CACHE https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Moq'&semVerLevel=2.0.0
info : Package 'Moq' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
info : PackageReference for package 'Moq' version '4.10.1' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\obj\project.assets.json
log  : Restore completed in 2.75 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\Actio.Services.Activities.Tests.csproj.
```

- Add a reference to the `Action.Services.Activities` project,
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Activities.Tests (master)
$ dotnet add Actio.Services.Activities.Tests.csproj reference ../../src/Actio.Services.Activities/Actio.Services.Activities.csproj
Reference `..\..\src\Actio.Services.Activities\Actio.Services.Activities.csproj` added to the project.
```

> Actio.Api.Tests -> Actio.Services.Activities.Tests.csproj
```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="FluentAssertions" Version="5.6.0" />
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="2.2.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="Moq" Version="4.10.1" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Actio.Services.Activities\Actio.Services.Activities.csproj" />
  </ItemGroup>

</Project>
```

- Create the `Actio.Services.Identity.Tests` project
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests (master)
$ dotnet new xunit -n Actio.Services.Identity.Tests
The template "xUnit Test Project" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj...
  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj...
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\obj\Actio.Services.Identity.Tests.csproj.nuget.g.props.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\obj\Actio.Services.Identity.Tests.csproj.nuget.g.targets.
  Restore completed in 3.88 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj.

Restore succeeded.
```
- Add the project to the solution
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices
$ dotnet sln add tests/src/Actio.Services.Identity.Test/Actio.Services.Identity.Tests.csproj
Project `tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Test.csproj` added to the solution.
```

- Add the `FluentAssertions` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Identity.Tests (master)
$ dotnet add package FluentAssertions
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmp8BDC.tmp
info : Adding PackageReference for package 'FluentAssertions' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/fluentassertions/index.json
info :   CACHE https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='FluentAssertions'&semVerLevel=2.0.0
info : Package 'FluentAssertions' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
info : PackageReference for package 'FluentAssertions' version '5.6.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\obj\project.assets.json
log  : Restore completed in 989.19 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj.
```

- Add the `Microsoft.AspNetCore.TestHost` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Identity.Tests (master)
$ dotnet add package Microsoft.AspNetCore.TestHost
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmpDE03.tmp
info : Adding PackageReference for package 'Microsoft.AspNetCore.TestHost' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.testhost/index.json
info :   CACHE https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Microsoft.AspNetCore.TestHost'&semVerLevel=2.0.0
info : Package 'Microsoft.AspNetCore.TestHost' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
info : PackageReference for package 'Microsoft.AspNetCore.TestHost' version '2.2.0' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\obj\project.assets.json
log  : Restore completed in 1.36 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj.
```

- Add the `moq` package
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Identity.Tests (master)
$ dotnet add package Moq
  Writing C:\Users\juan.pablo.perez\AppData\Local\Temp\tmp44CC.tmp
info : Adding PackageReference for package 'Moq' into project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
log  : Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj...
info :   CACHE https://api.nuget.org/v3-flatcontainer/moq/index.json
info :   CACHE https://nexus.retailinmotion.com/repository/nuget-hosted/FindPackagesById()?id='Moq'&semVerLevel=2.0.0
info : Package 'Moq' is compatible with all the specified frameworks in project 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
info : PackageReference for package 'Moq' version '4.10.1' added to file 'C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj'.
info : Committing restore...
info : Writing lock file to disk. Path: C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\obj\project.assets.json
log  : Restore completed in 2.17 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\Actio.Services.Identity.Tests.csproj.
```
- Add a reference to the `Action.Identity.Activities` project,
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Identity.Tests (master)
$ dotnet add Actio.Services.Identity.Tests.csproj reference ../../src/Actio.Services.Identity/Actio.Services.Identity.csproj
Reference `..\..\src\Actio.Services.Identity\Actio.Services.Identity.csproj` added to the project.
```

> Actio.Api.Tests -> Actio.Services.Identity.Tests.csproj
```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="FluentAssertions" Version="5.6.0" />
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="2.2.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="Moq" Version="4.10.1" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Actio.Services.Identity\Actio.Services.Identity.csproj" />
  </ItemGroup>

</Project>
```




- In the `Actio.Api.Tests` project create the new `Unit` folder and the new `Controllers` folder inside it, and the following document inside it.

> Actio.Api.Tests -> Unit -> Controllers -> HomeControllerTests.cs
```cs
using Actio.Api.Controllers;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace Actio.Api.Tests.Unit.Controllers
{
    public class HomeControllerTests
    {
        [Fact]
        public void home_controller_get_should_return_string_content()
        {
            var controller = new HomeController();

            var result = controller.Get();
            
            var contentResult = result as ContentResult;
            contentResult.Should().NotBeNull();
            contentResult.Content.ShouldBeEquivalentTo("Hello from Actio API!");
        }
    }
}
```

::: warning
The code doesn't work with .Net Core 2.2
:::

- Change the `Actio.Api.Tests.csproj` to include 3 missing packages 
> Actio.Api.Tests -> Actio.Api.Tests.csproj
```json
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="FluentAssertions" Version="5.6.0" />
    <PackageReference Include="Microsoft.AspNetCore.Mvc.Abstractions" Version="2.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.Mvc.Core" Version="2.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.Mvc.Viewfeatures" Version="2.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="2.2.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="Moq" Version="4.10.1" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Actio.Api\Actio.Api.csproj" />
  </ItemGroup>

</Project>
```

- Modify the `HomeControllerTests.cs` document

> Actio.Api.Tests -> Unit -> Controllers -> HomeControllerTests.cs
```cs
using Actio.Api.Controllers;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace Actio.Api.Tests.Unit.Controllers
{
    public class HomeControllerTests
    {
        [Fact]
        public void home_controller_get_should_return_string_content()
        {
            var controller = new HomeController();

            var result = controller.Get();

            var contentResult = Assert.IsType<ContentResult>(result);
            contentResult.Should().NotBeNull();
            contentResult.Content.Should().BeEquivalentTo("Hello from Actio API!");
        }
    }
}
```

- Run the test.
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Api.Tests (master)
$ dotnet test
Build started, please wait...
Build completed.

Test run for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\bin\Debug\netcoreapp2.2\Actio.Api.Tests.dll(.NETCoreApp,Version=v2.2)
Microsoft (R) Test Execution Command Line Tool Version 15.9.0
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...

Total tests: 1. Passed: 1. Failed: 0. Skipped: 0.
Test Run Successful.
Test execution time: 2.7257 Seconds
```

- Create another test document for tetsing the `ActivitiesController` controller.

> Actio.Api.Tests -> Unit -> Controllers -> ActivitiesControllerTests.cs
```cs
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Actio.Api.Controllers;
using Actio.Api.Repositories;
using Actio.Common.Commands;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using RawRabbit;
using Xunit;

namespace Actio.Api.Tests.Unit.Controllers
{
    public class ActivitiesControllerTests
    {
        [Fact]
        public async Task activities_controller_post_should_return_accepted()
        {
            var busClientMock = new Mock<IBusClient>();
            var activityRepositoryMock = new Mock<IActivityRepository>();
            var controller = new ActivitiesController(busClientMock.Object,
                activityRepositoryMock.Object);
            var userId = Guid.NewGuid();
            controller.ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext
                {
                    User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
                        {
                            new Claim(ClaimTypes.Name, userId.ToString())
                        }, "test"))
                }
            };

            var command = new CreateActivity
            {
                Id = Guid.NewGuid(),
                UserId = userId
            };

            var result = await controller.Post(command);

            var contentResult = result as AcceptedResult;
            contentResult.Should().NotBeNull();
            contentResult.Location.Should().BeEquivalentTo($"activities/{command.Id}");
        }
    }
}
```

- Run the test (from Visual studio Code).

![](/images/backend/dotnetcore-net-core-microservice/APITesting2.png)

```sh
----- Running test method "Actio.Api.Tests.Unit.Controllers.ActivitiesControllerTests.activities_controller_post_should_return_accepted" -----

Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Actio.Common -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Debug\netstandard2.0\Actio.Common.dll
  Actio.Api -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Debug\netcoreapp2.2\Actio.Api.dll
  Actio.Api.Tests -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Api.Tests\bin\Debug\netcoreapp2.2\Actio.Api.Tests.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:04.21


[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:01.09]   Discovering: Actio.Api.Tests
[xUnit.net 00:00:01.17]   Discovered:  Actio.Api.Tests
[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:01.03]   Starting:    Actio.Api.Tests
[xUnit.net 00:00:01.32]   Finished:    Actio.Api.Tests
----- Test Execution Summary -----

Actio.Api.Tests.Unit.Controllers.ActivitiesControllerTests.activities_controller_post_should_return_accepted:
    Outcome: Passed
    
Total tests: 1. Passed: 1. Failed: 0. Skipped: 0

```

### 29. Activities Service Testing

![](/images/backend/dotnetcore-net-core-microservice/ActivitiesServiceTesting.png)

- In the `Actio.Services.Activities.Tests` project create the new `Unit` folder and the new `Services` folder inside it, and the following document inside it.

> Actio.Services.Activities.Tests -> Unit -> Services -> ActivityServiceTests.cs
```cs
using System;
using System.Threading.Tasks;
using Actio.Services.Activities.Domain.Models;
using Actio.Services.Activities.Domain.Repositories;
using Actio.Services.Activities.Repositories;
using Actio.Services.Activities.Services;
using Moq;
using Xunit;

namespace Actio.Services.Activities.Tests.Unit.Services
{
    public class ActivityServiceTests
    {
        [Fact]
        public async Task activity_service_add_async_should_succeed()
        {
            var category = "test";
            var activityRepositoryMock = new Mock<IActivityRepository>();
            var categoryRepositoryMock = new Mock<ICategoryRepository>();
            categoryRepositoryMock.Setup(x => x.GetAsync(category))
                .ReturnsAsync(new Category(category));
            var activityService = new ActivityService(activityRepositoryMock.Object,
                categoryRepositoryMock.Object);

            var id = Guid.NewGuid();
            await activityService.AddAsync(id, Guid.NewGuid(), category, "activity", 
                "description", DateTime.UtcNow);

            categoryRepositoryMock.Verify(x => x.GetAsync(category), Times.Once);
            activityRepositoryMock.Verify(x => x.AddAsync(It.IsAny<Activity>()), Times.Once);
        }
    }
}
```

- Test if it works.

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Activities.Tests (master)
$ dotnet test
Build started, please wait...
Build completed.

Test run for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\bin\Debug\netcoreapp2.2\Actio.Services.Activities.Tests.dll(.NETCoreApp,Version=v2.2)
Microsoft (R) Test Execution Command Line Tool Version 15.9.0
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...

Total tests: 1. Passed: 1. Failed: 0. Skipped: 0.
Test Run Successful.
Test execution time: 2.5745 Seconds
```

- In the `Actio.Services.Activities.Tests` project create the new `Integration` folder and the new `Controllers` folder inside it, and the following document inside it.

> Actio.Services.Activities.Tests -> Integration -> Controllers -> ActivityServiceTests.cs
```cs
using System.Net.Http;
using System.Threading.Tasks;
using FluentAssertions;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Xunit;

namespace Actio.Services.Activities.Tests.Controllers
{
    public class HomeControllerTests
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;
        
        public HomeControllerTests()
        {
            _server = new TestServer(WebHost.CreateDefaultBuilder()
                .UseStartup<Startup>());
            _client = _server.CreateClient();
        }

        [Fact]
        public async Task home_controller_get_should_return_string_content()
        {
            var response = await _client.GetAsync("/");
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();

            content.Should().BeEquivalentTo("Hello from Actio.Services.Activites API!");
        }
    }
}
```

- Change the `Actio.Services.Activities.Tests.csproj` to include the `appsettings.json` from the main project to include the `Microsoft.AspNetCore.App` package and the use of appsettings.json from the main project.

> Actio.Services.Activities.Tests -> Actio.Services.Activities.Tests.csproj
```json
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <Content Include="..\..\src\Actio.Services.Activities\appsettings.json" CopyToOutputDirectory="PreserveNewest" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="FluentAssertions" Version="5.6.0" />
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="2.2.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="Moq" Version="4.10.1" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Actio.Services.Activities\Actio.Services.Activities.csproj" />
  </ItemGroup>

</Project>
```

- Run the test from Visual Studio Code
```sh
----- Running test method "Actio.Services.Activities.Tests.Controllers.HomeControllerTests.home_controller_get_should_return_string_content" -----

Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Actio.Common -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Debug\netstandard2.0\Actio.Common.dll
  Actio.Services.Activities -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\bin\Debug\netcoreapp2.2\Actio.Services.Activities.dll
  Actio.Services.Activities.Tests -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\bin\Debug\netcoreapp2.2\Actio.Services.Activities.Tests.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:04.37


[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:01.70]   Discovering: Actio.Services.Activities.Tests
[xUnit.net 00:00:01.80]   Discovered:  Actio.Services.Activities.Tests
[xUnit.net 00:00:00.01] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:01.67]   Starting:    Actio.Services.Activities.Tests
[xUnit.net 00:00:02.86]   Finished:    Actio.Services.Activities.Tests
----- Test Execution Summary -----

Actio.Services.Activities.Tests.Controllers.HomeControllerTests.home_controller_get_should_return_string_content:
    Outcome: Passed
    
Total tests: 1. Passed: 1. Failed: 0. Skipped: 0
```

### 30. Identity Service Testing 

![](/images/backend/dotnetcore-net-core-microservice/IdentityServiceTesting.png)

- In the `Actio.Services.Identity.Tests` project create the new `Unit` folder and the new `Services` folder inside it, and the following document inside it.

> Actio.Services.Identity.Tests -> Unit -> Services -> UserServiceTests.cs
```cs
using System;
using System.Threading.Tasks;
using Actio.Common.Auth;
using Actio.Services.Identity.Domain.Models;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Domain.Services;
using Actio.Services.Identity.Services;
using FluentAssertions;
using Moq;
using Xunit;

namespace Actio.Services.Identity.Tests.Unit.Services
{
    public class UserServiceTests
    {
        [Fact]
        public async Task user_service_login_should_return_jwt()
        {
            var email = "test@test.com";
            var password = "secret";
            var name = "test";
            var salt = "salt";
            var hash = "hash";
            var token = "token";
            var userRepositoryMock = new Mock<IUserRepository>();
            var encrypterMock = new Mock<IEncrypter>();
            var jwtHandlerMock = new Mock<IJwtHandler>();
            encrypterMock.Setup(x => x.GetSalt()).Returns(salt);
            encrypterMock.Setup(x => x.GetHash(password, salt)).Returns(hash);
            jwtHandlerMock.Setup(x => x.Create(It.IsAny<Guid>())).Returns(new JsonWebToken
            {
                Token = token
            });

            var user = new User(email, name);
            user.SetPassword(password, encrypterMock.Object);
            userRepositoryMock.Setup(x => x.GetAsync(email)).ReturnsAsync(user);

            var userService = new UserService(userRepositoryMock.Object,
                encrypterMock.Object, jwtHandlerMock.Object);

            var jwt = await userService.LoginAsync(email, password);
            userRepositoryMock.Verify(x => x.GetAsync(email), Times.Once);
            jwtHandlerMock.Verify(x => x.Create(It.IsAny<Guid>()), Times.Once);
            jwt.Should().NotBeNull();
            jwt.Token.Should().BeEquivalentTo(token);
        }
    }
}
```

- Run the test
```sh

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/tests/Actio.Services.Identity.Tests (master)
$ dotnet test
Build started, please wait...
Build completed.

Test run for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\bin\Debug\netcoreapp2.2\Actio.Services.Identity.Tests.dll(.NETCoreApp,Version=v2.2)
Microsoft (R) Test Execution Command Line Tool Version 15.9.0
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...

Total tests: 1. Passed: 1. Failed: 0. Skipped: 0.
Test Run Successful.
Test execution time: 2.8981 Seconds
```

- In the `Actio.Services.Identity.Tests` project create the new `Integration` folder and the new `Controllers` folder inside it, and the following document inside it.

> Actio.Services.Identity.Tests -> Integration -> Controllers -> AccountControllerTests.cs
```cs
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Actio.Common.Auth;
using Actio.Services.Identity;
using FluentAssertions;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Newtonsoft.Json;
using Xunit;

namespace Actio.Services.Activities.Tests.Integration.Controllers
{
    public class AccountControllerTests
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;
        
        public AccountControllerTests()
        {
            _server = new TestServer(WebHost.CreateDefaultBuilder()
                .UseStartup<Startup>());
            _client = _server.CreateClient();
        }

        [Fact]
        public async Task account_controller_login_should_return_json_web_token()
        {
            var payload = GetPayload(new {email = "user1@email.com", password = "secret"});
            var response = await _client.PostAsync("login", payload);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var jwt = JsonConvert.DeserializeObject<JsonWebToken>(content);

            jwt.Should().NotBeNull();
            jwt.Token.Should().NotBeEmpty();
            jwt.Expires.Should().BeGreaterThan(0);
        }

        protected static StringContent GetPayload(object data)
        {
            var json = JsonConvert.SerializeObject(data);

            return new StringContent(json, Encoding.UTF8, "application/json");
        }
    }
}
```

- Change the `Actio.Services.Identity.Tests.csproj` to include the `appsettings.json` from the main project to include the `Microsoft.AspNetCore.App` package and the use of appsettings.json from the main project.

> Actio.Services.Identity.Tests -> Actio.Services.Identity.Tests.csproj
```json
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <Content Include="..\..\src\Actio.Services.Identity\appsettings.json" CopyToOutputDirectory="PreserveNewest" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="FluentAssertions" Version="5.6.0" />
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="2.2.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
    <PackageReference Include="Moq" Version="4.10.1" />
    <PackageReference Include="xunit" Version="2.4.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Actio.Services.Identity\Actio.Services.Identity.csproj" />
  </ItemGroup>

</Project>

```
- Run the test from Visual Studio.
```sh
----- Running test method "Actio.Services.Activities.Tests.Controllers.HomeControllerTests.home_controller_get_should_return_string_content" -----

Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Actio.Common -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Debug\netstandard2.0\Actio.Common.dll
  Actio.Services.Activities -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\bin\Debug\netcoreapp2.2\Actio.Services.Activities.dll
  Actio.Services.Activities.Tests -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Activities.Tests\bin\Debug\netcoreapp2.2\Actio.Services.Activities.Tests.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:04.37


[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:01.70]   Discovering: Actio.Services.Activities.Tests
[xUnit.net 00:00:01.80]   Discovered:  Actio.Services.Activities.Tests
[xUnit.net 00:00:00.01] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:01.67]   Starting:    Actio.Services.Activities.Tests
[xUnit.net 00:00:02.86]   Finished:    Actio.Services.Activities.Tests
----- Test Execution Summary -----

Actio.Services.Activities.Tests.Controllers.HomeControllerTests.home_controller_get_should_return_string_content:
    Outcome: Passed
    
Total tests: 1. Passed: 1. Failed: 0. Skipped: 0

----- Running test method "Actio.Services.Activities.Tests.Integration.Controllers.AccountControllerTests.account_controller_login_should_return_json_web_token" -----

Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Actio.Common -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Debug\netstandard2.0\Actio.Common.dll
  Actio.Services.Identity -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\bin\Debug\netcoreapp2.2\Actio.Services.Identity.dll
  Actio.Services.Identity.Tests -> c:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\tests\Actio.Services.Identity.Tests\bin\Debug\netcoreapp2.2\Actio.Services.Identity.Tests.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:06.04


[xUnit.net 00:00:00.01] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:02.74]   Discovering: Actio.Services.Identity.Tests
[xUnit.net 00:00:02.89]   Discovered:  Actio.Services.Identity.Tests
[xUnit.net 00:00:00.01] xUnit.net VSTest Adapter v2.4.0 (64-bit .NET Core 4.6.27207.03)
[xUnit.net 00:00:02.98]   Starting:    Actio.Services.Identity.Tests
[xUnit.net 00:00:05.34]   Finished:    Actio.Services.Identity.Tests
----- Test Execution Summary -----

Actio.Services.Activities.Tests.Integration.Controllers.AccountControllerTests.account_controller_login_should_return_json_web_token:
    Outcome: Passed
    
Total tests: 1. Passed: 1. Failed: 0. Skipped: 0

```

![](/images/backend/dotnetcore-net-core-microservice/IdentityServiceTesting2.png)

## 8. Dockerizing and Deploying the Application

![](/images/backend/dotnetcore-net-core-microservice/DockerizingAndDeployingTheApplication.png)

### 31. Running Services Using Docker 

![](/images/backend/dotnetcore-net-core-microservice/RunningServicesUsingDocker.png)

- We can find more information about what Docker is in [Docker](https://www.docker.com/)

![](/images/backend/dotnetcore-net-core-microservice/RunningServicesUsingDocker2.png)

- Create a new `Dockerfile` for the `Actio.Api` project

> Actio.Api -> Dockerfile
```docker
FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /dotnetapp
COPY ./bin/Docker .
ENV ASPNETCORE_URLS http://*:5000
ENV ASPNETCORE_ENVIRONMENT docker
ENTRYPOINT dotnet Actio.Api.dll
```
- Create the `appsettings.docker.json` settings file
> Actio.Api -> appsettings.docker.json
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "jwt": {
    "secretKey": "YfE2dYXMDR2WPCPe59UrmEuNcqnRRtv4WA3PZbnbQ5FgJSpuWB8G",
    "expiryMinutes": "5",
    "issuer": "https://localhost:5001"
  },
  "mongo": {
    "connectionString": "mongodb://mongo:27017",
    "database": "Actio-Store",
    "seed": false
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["rabbitmq"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}

```

- Publish the `Actio.Api` project
```sc
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ cd src/Actio.Api/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ dotnet publish -c Release -o ./bin/Docker
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj...
  Restore completed in 158.26 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\obj\Actio.Api.csproj.nuget.g.props.
  Restore completed in 3.66 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj.
  Actio.Common -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Release\netstandard2.0\Actio.Common.dll
  Actio.Api -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Release\netcoreapp2.2\Actio.Api.dll
  Actio.Api -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Docker\
```

- Build the Docker Image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ docker build -t actio.api .
Sending build context to Docker daemon  5.091MB
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
2.2-aspnetcore-runtime: Pulling from microsoft/dotnet
5e6ec7f28fb7: Already exists
1a8b62bbed68: Already exists
c7dd7d63c00a: Already exists
44f08f75eaab: Pull complete
Digest: sha256:621f70b961d59d0168ec601300ea03c9d7a6ff2631f57e48555b9250c4bf8280
Status: Downloaded newer image for microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Running in 12cc3e31b256
Removing intermediate container 12cc3e31b256
 ---> 9a9fa1e9a566
Step 3/6 : COPY ./bin/Docker .
 ---> 62ff25230a9f
Step 4/6 : ENV ASPNETCORE_URLS http://*:5000
 ---> Running in 89f6892200c9
Removing intermediate container 89f6892200c9
 ---> aa32701ffab6
Step 5/6 : ENV ASPNETCORE_ENVIRONMENT docker
 ---> Running in 4d494de0a295
Removing intermediate container 4d494de0a295
 ---> 434bd426b2ae
Step 6/6 : ENTRYPOINT dotnet Actio.Api.dll
 ---> Running in ca41058ff89a
Removing intermediate container ca41058ff89a
 ---> 89657ae087d1
Successfully built 89657ae087d1
Successfully tagged actio.api:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

- Run the `rabbitmq` image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ docker run -p 5672:5672 rabbitmq
2019-01-26 10:21:43.069 [info] <0.33.0> Application lager started on node rabbit@b39c4d524ecb
2019-01-26 10:21:43.587 [info] <0.33.0> Application crypto started on node rabbit@b39c4d524ecb
2019-01-26 10:21:43.807 [info] <0.33.0> Application inets started on node rabbit@b39c4d524ecb
2019-01-26 10:21:43.820 [info] <0.33.0> Application os_mon started on node rabbit@b39c4d524ecb
2019-01-26 10:21:43.820 [info] <0.33.0> Application jsx started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.102 [info] <0.33.0> Application mnesia started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.102 [info] <0.33.0> Application recon started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.102 [info] <0.33.0> Application xmerl started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.102 [info] <0.33.0> Application asn1 started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.103 [info] <0.33.0> Application public_key started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.299 [info] <0.33.0> Application ssl started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.307 [info] <0.33.0> Application ranch started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.307 [info] <0.33.0> Application ranch_proxy_protocol started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.307 [info] <0.33.0> Application rabbit_common started on node rabbit@b39c4d524ecb
2019-01-26 10:21:44.333 [info] <0.192.0>
 Starting RabbitMQ 3.7.8 on Erlang 20.3.8.5
 Copyright (C) 2007-2018 Pivotal Software, Inc.
 Licensed under the MPL.  See http://www.rabbitmq.com/

  ##  ##
  ##  ##      RabbitMQ 3.7.8. Copyright (C) 2007-2018 Pivotal Software, Inc.
  ##########  Licensed under the MPL.  See http://www.rabbitmq.com/
  ######  ##
  ##########  Logs: <stdout>

              Starting broker...
2019-01-26 10:21:44.367 [info] <0.192.0>
 node           : rabbit@b39c4d524ecb
 home dir       : /var/lib/rabbitmq
 config file(s) : /etc/rabbitmq/rabbitmq.conf
 cookie hash    : /eXbAOU6pph/so6qzKlP8A==
 log(s)         : <stdout>
 database dir   : /var/lib/rabbitmq/mnesia/rabbit@b39c4d524ecb
2019-01-26 10:21:48.887 [info] <0.200.0> Memory high watermark set to 792 MiB (830613094 bytes) of 1980 MiB (2076532736 bytes) total
2019-01-26 10:21:48.896 [info] <0.202.0> Enabling free disk space monitoring
2019-01-26 10:21:48.896 [info] <0.202.0> Disk free limit set to 50MB
2019-01-26 10:21:48.904 [info] <0.205.0> Limiting to approx 1048476 file handles (943626 sockets)
2019-01-26 10:21:48.904 [info] <0.206.0> FHC read buffering:  OFF
2019-01-26 10:21:48.904 [info] <0.206.0> FHC write buffering: ON
2019-01-26 10:21:48.908 [info] <0.192.0> Node database directory at /var/lib/rabbitmq/mnesia/rabbit@b39c4d524ecb is empty. Assuming we need to join an existing cluster or initialise from scratch...
2019-01-26 10:21:48.908 [info] <0.192.0> Configured peer discovery backend: rabbit_peer_discovery_classic_config
2019-01-26 10:21:48.908 [info] <0.192.0> Will try to lock with peer discovery backend rabbit_peer_discovery_classic_config
2019-01-26 10:21:48.908 [info] <0.192.0> Peer discovery backend does not support locking, falling back to randomized delay
2019-01-26 10:21:48.908 [info] <0.192.0> Peer discovery backend rabbit_peer_discovery_classic_config does not support registration, skipping randomized startup delay.
2019-01-26 10:21:48.908 [info] <0.192.0> All discovered existing cluster peers:
2019-01-26 10:21:48.908 [info] <0.192.0> Discovered no peer nodes to cluster with
2019-01-26 10:21:48.912 [info] <0.33.0> Application mnesia exited with reason: stopped
2019-01-26 10:21:48.986 [info] <0.33.0> Application mnesia started on node rabbit@b39c4d524ecb
2019-01-26 10:21:49.313 [info] <0.192.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
2019-01-26 10:21:49.385 [info] <0.192.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
2019-01-26 10:21:49.426 [info] <0.192.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
2019-01-26 10:21:49.426 [info] <0.192.0> Peer discovery backend rabbit_peer_discovery_classic_config does not support registration, skipping registration.
2019-01-26 10:21:49.428 [info] <0.192.0> Priority queues enabled, real BQ is rabbit_variable_queue
2019-01-26 10:21:49.441 [info] <0.372.0> Starting rabbit_node_monitor
2019-01-26 10:21:49.470 [info] <0.192.0> message_store upgrades: 1 to apply
2019-01-26 10:21:49.470 [info] <0.192.0> message_store upgrades: Applying rabbit_variable_queue:move_messages_to_vhost_store
2019-01-26 10:21:49.470 [info] <0.192.0> message_store upgrades: No durable queues found. Skipping message store migration
2019-01-26 10:21:49.470 [info] <0.192.0> message_store upgrades: Removing the old message store data
2019-01-26 10:21:49.475 [info] <0.192.0> message_store upgrades: All upgrades applied successfully
2019-01-26 10:21:49.506 [info] <0.192.0> Adding vhost '/'
2019-01-26 10:21:49.565 [info] <0.408.0> Making sure data directory '/var/lib/rabbitmq/mnesia/rabbit@b39c4d524ecb/msg_stores/vhosts/628WB79CIFDYO9LJI6DKMI09L' for vhost '/' exists
2019-01-26 10:21:49.583 [info] <0.408.0> Starting message stores for vhost '/'
2019-01-26 10:21:49.584 [info] <0.412.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_transient": using rabbit_msg_store_ets_index to provide index
2019-01-26 10:21:49.587 [info] <0.408.0> Started message store of type transient for vhost '/'
2019-01-26 10:21:49.588 [info] <0.415.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_persistent": using rabbit_msg_store_ets_index to provide index
2019-01-26 10:21:49.590 [warning] <0.415.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_persistent": rebuilding indices from scratch
2019-01-26 10:21:49.593 [info] <0.408.0> Started message store of type persistent for vhost '/'
2019-01-26 10:21:49.603 [info] <0.192.0> Creating user 'guest'
2019-01-26 10:21:49.613 [info] <0.192.0> Setting user tags for user 'guest' to [administrator]
2019-01-26 10:21:49.618 [info] <0.192.0> Setting permissions for 'guest' in '/' to '.*', '.*', '.*'
2019-01-26 10:21:49.624 [info] <0.453.0> started TCP Listener on [::]:5672
2019-01-26 10:21:49.635 [info] <0.192.0> Setting up a table for connection tracking on this node: tracked_connection_on_node_rabbit@b39c4d524ecb
2019-01-26 10:21:49.652 [info] <0.192.0> Setting up a table for per-vhost connection counting on this node: tracked_connection_per_vhost_on_node_rabbit@b39c4d524ecb
2019-01-26 10:21:49.653 [info] <0.33.0> Application rabbit started on node rabbit@b39c4d524ecb
2019-01-26 10:21:50.345 [info] <0.5.0> Server startup complete; 0 plugins started.
 completed with 0 plugins.
```

- Run the `mongodb` image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker run -d -p 27017:27017 mongo
90cbacec482164c3fd229a6545f6ac77f75b1cbbb96feeae7229fab4d4a80683
```
- Ensure both images are running
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                   NAMES
90cbacec4821        mongo               "docker-entrypoint.s…"   42 seconds ago      Up 41 seconds       0.0.0.0:27017->27017/tcp                                kind_pike
b39c4d524ecb        rabbitmq            "docker-entrypoint.s…"   2 minutes ago       Up 2 minutes        4369/tcp, 5671/tcp, 25672/tcp, 0.0.0.0:5672->5672/tcp   musing_hopper
```
- Run the new Docker Image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/src/Actio.Api (master)
$ docker run -p 5000:5000 actio.api

Unhandled Exception: RabbitMQ.Client.Exceptions.BrokerUnreachableException: None of the specified endpoints were reachable ---> RabbitMQ.Client.Exceptions.ConnectFailureException: Connection failed ---> System.Net.Internals.SocketExceptionFactory+ExtendedSocketException: No such device or address
   at System.Net.Dns.InternalGetHostByName(String hostName)
   at System.Net.Dns.ResolveCallback(Object context)
--- End of stack trace from previous location where exception was thrown ---
   at System.Net.Dns.HostResolutionEndHelper(IAsyncResult asyncResult)
   at System.Net.Dns.EndGetHostAddresses(IAsyncResult asyncResult)
   at System.Net.Dns.<>c.<GetHostAddressesAsync>b__25_1(IAsyncResult asyncResult)
   at System.Threading.Tasks.TaskFactory`1.FromAsyncCoreLogic(IAsyncResult iar, Func`2 endFunction, Action`1 endAction, Task`1 promise, Boolean requiresSynchronization)
--- End of stack trace from previous location where exception was thrown ---
   at RabbitMQ.Client.TcpClientAdapter.ConnectAsync(String host, Int32 port)
   at RabbitMQ.Client.Impl.TaskExtensions.TimeoutAfter(Task task, Int32 millisecondsTimeout)
   at RabbitMQ.Client.Impl.SocketFrameHandler.ConnectOrFail(ITcpClient socket, AmqpTcpEndpoint endpoint, Int32 timeout)
   --- End of inner exception stack trace ---
   at RabbitMQ.Client.EndpointResolverExtensions.SelectOne[T](IEndpointResolver resolver, Func`2 selector)
   at RabbitMQ.Client.Framing.Impl.AutorecoveringConnection.Init(IEndpointResolver endpoints)
   at RabbitMQ.Client.ConnectionFactory.CreateConnection(IEndpointResolver endpointResolver, String clientProvidedName)
   --- End of inner exception stack trace ---
   at RabbitMQ.Client.ConnectionFactory.CreateConnection(IEndpointResolver endpointResolver, String clientProvidedName)
   at RawRabbit.Channel.ChannelFactory.ConnectAsync(CancellationToken token)
   at RawRabbit.DependencyInjection.RawRabbitDependencyRegisterExtension.<>c.<AddRawRabbit>b__0_3(IDependencyResolver resolver)
   at RawRabbit.DependencyInjection.SimpleDependencyInjection.<>c__DisplayClass4_0`2.<AddSingleton>b__0()
   at System.Lazy`1.ViaFactory(LazyThreadSafetyMode mode)
   at System.Lazy`1.ExecutionAndPublication(LazyHelper executionAndPublication, Boolean useDefaultConstructor)
   at System.Lazy`1.CreateValue()
   at RawRabbit.DependencyInjection.SimpleDependencyInjection.GetService(Type serviceType, Object[] additional)
   at RawRabbit.DependencyInjection.SimpleDependencyInjection.GetService[TService](Object[] additional)
   at RawRabbit.Instantiation.InstanceFactory.Create()
   at RawRabbit.Instantiation.RawRabbitFactory.CreateSingleton(RawRabbitOptions options)
   at Actio.Common.RabbitMq.Extensions.AddRabbitMq(IServiceCollection services, IConfiguration configuration) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\RabbitMq\Extensions.cs:line 36
   at Actio.Api.Startup.ConfigureServices(IServiceCollection services) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Startup.cs:line 38
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Hosting.ConventionBasedStartup.ConfigureServices(IServiceCollection services)
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.EnsureApplicationServices()
   at Microsoft.AspNetCore.Hosting.Internal.WebHost.Initialize()
   at Microsoft.AspNetCore.Hosting.WebHostBuilder.Build()
   at Actio.Common.Services.ServiceHost.Create[TStartup](String[] args) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Services\ServiceHost.cs:line 40
   at Actio.Api.Program.Main(String[] args) in C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Program.cs:line 19
Aborted
```

::: warning
It's normal the previuos error because there is no access to neither RabbitMQ not MongoDb from the Actio.Api container
:::

### 32. Using Docker Compose

![](/images/backend/dotnetcore-net-core-microservice/UsingDockerCompose.png)

- There are more information about [Docker Compose](https://docs.docker.com/compose/) 

![](/images/backend/dotnetcore-net-core-microservice/UsingDockerCompose2.png) 

- Create the new `scripts` folder where the `Actio.sln` solution is and put inside the following documents.

- Modify the `Startup.cs` document to avoid using `https`

> Actio.Services.Activities -> Startup.cs
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Activities.Domain.Repositories;
using Actio.Services.Activities.Handlers;
using Actio.Services.Activities.Repositories;
using Actio.Services.Activities.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Activities
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddLogging();

            services.AddMongoDB(Configuration);
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IActivityRepository, ActivityRepository>();
            services.AddScoped<IDatabaseSeeder, CustomMongoSeeder>();

            services.AddRabbitMq(Configuration);
            services.AddScoped<ICommandHandler<CreateActivity>, CreateActivityHandler>();
            services.AddScoped<IActivityService, ActivityService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // else
            // {
            //     // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            //     app.UseHsts();
            // }

            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();
            // app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
```

> Actio.Services.Identity -> Startup.cs
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actio.Common.Auth;
using Actio.Common.Commands;
using Actio.Common.Mongo;
using Actio.Common.RabbitMq;
using Actio.Services.Identity.Domain.Services;
using Actio.Services.Identity.Domain.Repositories;
using Actio.Services.Identity.Handlers;
using Actio.Services.Identity.Repositories;
using Actio.Services.Identity.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Actio.Services.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddLogging();

            services.AddMongoDB(Configuration);
            services.AddRabbitMq(Configuration);
            services.AddJwt(Configuration);

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddSingleton<IEncrypter, Encrypter>();
            services.AddScoped<ICommandHandler<CreateUser>, CreateUserHandler>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddSingleton<IEncrypter, Encrypter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // else
            // {
            //     // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            //     app.UseHsts();
            // }

            // app.UseHttpsRedirection();
            app.ApplicationServices.GetService<IDatabaseInitializer>().InitializeAsync();
            app.UseMvc();
        }
    }
}

```

- Create the new `appsettings.docker.json` files

> Actio.Services.Activities -> appsettings.docker.json
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "jwt": {
    "secretKey": "YfE2dYXMDR2WPCPe59UrmEuNcqnRRtv4WA3PZbnbQ5FgJSpuWB8G",
    "expiryMinutes": "5",
    "issuer": "https://localhost:5001"
  },
  "mongo": {
    "connectionString": "mongodb://mongo:27017",
    "database": "Actio-Services-Identity",
    "seed": true
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["rabbitmq"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

> Actio.Services.Identity -> appsettings.docker.json
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "mongo": {
    "connectionString": "mongodb://localhost:27017",
    "database": "Actio-Services-Activities",
    "seed": true
  },
  "rabbitmq": {
    "Username": "guest",
    "Password": "guest",
    "VirtualHost": "/",
    "Port": 5672,
    "Hostnames": ["rabbitmq"],
    "RequestTimeout": "00:00:10",
    "PublishConfirmTimeout": "00:00:01",
    "RecoveryInterval": "00:00:10",
    "PersistentDeliveryMode": true,
    "AutoCloseConnection": true,
    "AutomaticRecovery": true,
    "TopologyRecovery": true,
    "Exchange": {
      "Durable": true,
      "AutoDelete": true,
      "Type": "Topic"
    },
    "Queue": {
      "AutoDelete": true,
      "Durable": true,
      "Exclusive": true
    }
  }
}
```

- Create the `Dockerfile` files

> Actio.Services.Activities -> Dockerfile
```Docker
FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /dotnetapp
COPY ./bin/Docker .
ENV ASPNETCORE_URLS http://*:5050
ENV ASPNETCORE_ENVIRONMENT docker
ENTRYPOINT dotnet Actio.Services.Activities.dll
```

> Actio.Services.Identity -> Dockerfile
```Docker
FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /dotnetapp
COPY ./bin/Docker .
ENV ASPNETCORE_URLS http://*:5051
ENV ASPNETCORE_ENVIRONMENT docker
ENTRYPOINT dotnet Actio.Services.Identity.dll
```


> scripts -> docker-compose.yaml
```yaml
version: "3"

services:
  start-dependencies:
    image: dadarek/wait-for-dependencies
    depends_on:
      - mongo
      - rabbitmq
    command: rabbitmq:5672

  api:
    build: ../src/Actio.Api
    links:
      - rabbitmq
      - mongo
    ports:
      - '5000:5000'

  activities-service:
    build: ../src/Actio.Services.Activities
    links:
      - rabbitmq
      - mongo
    ports:
      - '5050:5050'

  identity-service:
    build: ../src/Actio.Services.Identity
    links:
      - rabbitmq
      - mongo
    ports:
      - '5051:5051'

  mongo:
    image: mongo
    volumes:
      - ./data/db:/data/db
    ports:
      - '27017:27017'

  rabbitmq:
    image: rabbitmq:3-management-alpine
    ports:
      - '5672:5672'
      - '15672:15672'
```

- Start running the dependencies

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/scripts (master)
$ docker-compose run start-dependencies
Starting scripts_rabbitmq_1 ... done
Creating scripts_mongo_1    ...
```

![](/images/backend/dotnetcore-net-core-microservice/UsingDockerCompose3.png)

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/scripts (master)
$ docker-compose run start-dependencies
Starting scripts_rabbitmq_1 ... done
Creating scripts_mongo_1    ... done
Pulling start-dependencies (dadarek/wait-for-dependencies:)...
latest: Pulling from dadarek/wait-for-dependencies
3489d1c4660e: Pull complete
38737c1480a6: Pull complete
Waiting for rabbitmq to listen on 5672...
```

- Run the `Docker Compose`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/scripts (master)
$ docker-compose up
Building identity-service
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
ERROR: Service 'identity-service' failed to build: COPY failed: stat /var/lib/docker/tmp/docker-builder911333507/bin/Docker: no such file or directory
```

- Create the `dotnet-publish.sh` and run it

> scripts -> dotnet-publish.sh
```sh
cd src
dotnet publish ./Actio.Api -c Release -o ./bin/Docker
dotnet publish ./Actio.Services.Activities -c Release -o ./bin/Docker
dotnet publish ./Actio.Services.Identity -c Release -o ./bin/Docker
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/scripts (master)
$ cd ..
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ bash scripts/dotnet-publish.sh
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 232.09 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\Actio.Api.csproj.
  Restore completed in 231.95 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Actio.Common -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Release\netstandard2.0\Actio.Common.dll
  Actio.Api -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Release\netcoreapp2.2\Actio.Api.dll
  Actio.Api -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Api\bin\Docker\
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restoring packages for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj...
  Restore completed in 154.72 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Generating MSBuild file C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\obj\Actio.Services.Activities.csproj.nuget.g.props.
  Restore completed in 4.35 sec for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\Actio.Services.Activities.csproj.
  Actio.Common -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Release\netstandard2.0\Actio.Common.dll
  Actio.Services.Activities -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\bin\Release\netcoreapp2.2\Actio.Services.Activities.dll
  Actio.Services.Activities -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Activities\bin\Docker\
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 137.16 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\Actio.Common.csproj.
  Restore completed in 144.25 ms for C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\Actio.Services.Identity.csproj.
  Actio.Common -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Common\bin\Release\netstandard2.0\Actio.Common.dll
  Actio.Services.Identity -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\bin\Release\netcoreapp2.2\Actio.Services.Identity.dll
  Actio.Services.Identity -> C:\Work\Training\Pre\DotNetCore\NET-Core-Microservices\dotnet-core-microservices\src\Actio.Services.Identity\bin\Docker\
```

- Create the `docker-build.sh` and run it

> scripts -> docker-build.sh
```sh
cd src
docker build -f ./Actio.Api/Dockerfile -t actio.api ./Actio.Api
docker build -f ./Actio.Services.Activities/Dockerfile -t actio.services.activities ./Actio.Services.Activities
docker build -f ./Actio.Services.Identity/Dockerfile -t actio.services.identity ./Actio.Services.Identity
```

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ bash scripts/docker-build.sh
Sending build context to Docker daemon    8.8MB
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
COPY failed: stat /var/lib/docker/tmp/docker-builder563443740/bin/Docker: no such file or directory
Sending build context to Docker daemon  5.157MB
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
 ---> 66e7dc7ef4ba
Step 4/6 : ENV ASPNETCORE_URLS http://*:5050
 ---> Running in c426e97d333f
Removing intermediate container c426e97d333f
 ---> 3d217c859392
Step 5/6 : ENV ASPNETCORE_ENVIRONMENT docker
 ---> Running in 50fe6be3d949
Removing intermediate container 50fe6be3d949
 ---> e4adff264117
Step 6/6 : ENTRYPOINT dotnet Actio.Services.Activities.dll
 ---> Running in 2e8e4c365391
Removing intermediate container 2e8e4c365391
 ---> d4250a77dc6c
Successfully built d4250a77dc6c
Successfully tagged actio.services.activities:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
Sending build context to Docker daemon  5.154MB
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
 ---> 0d1b476b8cd6
Step 4/6 : ENV ASPNETCORE_URLS http://*:5051
 ---> Running in 168718d7c74a
Removing intermediate container 168718d7c74a
 ---> 5d34e732a202
Step 5/6 : ENV ASPNETCORE_ENVIRONMENT docker
 ---> Running in af792347ad60
Removing intermediate container af792347ad60
 ---> 893f984a2757
Step 6/6 : ENTRYPOINT dotnet Actio.Services.Identity.dll
 ---> Running in fdd6d042de64
Removing intermediate container fdd6d042de64
 ---> 8b11820427da
Successfully built 8b11820427da
Successfully tagged actio.services.identity:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

- Run the docker compose again

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/scripts (master)
$ docker-compose build
mongo uses an image, skipping
rabbitmq uses an image, skipping
start-dependencies uses an image, skipping
Building identity-service
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
 ---> Using cache
 ---> d8b790bd2a29
Step 4/6 : ENV ASPNETCORE_URLS http://*:5051
 ---> Using cache
 ---> 9d6fe4cdc598
Step 5/6 : ENV ASPNETCORE_ENVIRONMENT docker
 ---> Using cache
 ---> f61a57a7ae08
Step 6/6 : ENTRYPOINT dotnet Actio.Services.Identity.dll
 ---> Using cache
 ---> b8fef6673c03
Successfully built b8fef6673c03
Successfully tagged scripts_identity-service:latest
Building activities-service
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
 ---> Using cache
 ---> b893707cec7a
Step 4/6 : ENV ASPNETCORE_URLS http://*:5050
 ---> Using cache
 ---> d67b518c7538
Step 5/6 : ENV ASPNETCORE_ENVIRONMENT docker
 ---> Using cache
 ---> 9c695e053d87
Step 6/6 : ENTRYPOINT dotnet Actio.Services.Activities.dll
 ---> Using cache
 ---> b562f15f6539
Successfully built b562f15f6539
Successfully tagged scripts_activities-service:latest
Building api
Step 1/6 : FROM microsoft/dotnet:2.2-aspnetcore-runtime
 ---> 47e847c04838
Step 2/6 : WORKDIR /dotnetapp
 ---> Using cache
 ---> 4c7b8abff405
Step 3/6 : COPY ./bin/Docker .
 ---> 40ff58cf1f8e
Step 4/6 : ENV ASPNETCORE_URLS http://*:5000
 ---> Running in 56087cc09497
Removing intermediate container 56087cc09497
 ---> 60aa99cc2a39
Step 5/6 : ENV ASPNETCORE_ENVIRONMENT docker
 ---> Running in fa6bd2ab14a4
Removing intermediate container fa6bd2ab14a4
 ---> 7893e7058d14
Step 6/6 : ENTRYPOINT dotnet Actio.Api.dll
 ---> Running in 02829ca4d24d
Removing intermediate container 02829ca4d24d
 ---> cad476ed1148
Successfully built cad476ed1148
Successfully tagged scripts_api:latest

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices/scripts (master)
$ docker-compose up
Starting scripts_mongo_1 ...
Starting scripts_mongo_1 ... done
Creating scripts_start-dependencies_1 ... done
Creating scripts_api_1                ... done
Creating scripts_identity-service_1   ... done
Creating scripts_activities-service_1 ... done
Attaching to scripts_rabbitmq_1, scripts_mongo_1, scripts_start-dependencies_1, scripts_api_1, scripts_activities-service_1, scripts_identity-service_1
mongo_1               | 2019-01-27T06:50:45.981+0000 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
mongo_1               | 2019-01-27T06:50:45.987+0000 I CONTROL  [initandlisten] MongoDB starting : pid=1 port=27017 dbpath=/data/db 64-bit host=87b8d8b68064
mongo_1               | 2019-01-27T06:50:45.987+0000 I CONTROL  [initandlisten] db version v4.0.5
mongo_1               | 2019-01-27T06:50:45.987+0000 I CONTROL  [initandlisten] git version: 3739429dd92b92d1b0ab120911a23d50bf03c412
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten] allocator: tcmalloc
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten] modules: none
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten] build environment:
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten]     distmod: ubuntu1604
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten]     distarch: x86_64
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten]     target_arch: x86_64
mongo_1               | 2019-01-27T06:50:45.991+0000 I CONTROL  [initandlisten] options: { net: { bindIpAll: true } }
mongo_1               | 2019-01-27T06:50:46.027+0000 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=478M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
mongo_1               | 2019-01-27T06:50:47.554+0000 E STORAGE  [initandlisten] WiredTiger error (17) [1548571847:554768][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: File exists Raw: [1548571847:554768][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: File exists
mongo_1               | 2019-01-27T06:50:47.563+0000 I STORAGE  [initandlisten] WiredTiger message unexpected file WiredTiger.wt found, renamed to WiredTiger.wt.3
mongo_1               | 2019-01-27T06:50:47.567+0000 E STORAGE  [initandlisten] WiredTiger error (1) [1548571847:567934][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: Operation not permitted Raw: [1548571847:567934][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: Operation not permitted
mongo_1               | 2019-01-27T06:50:47.579+0000 E STORAGE  [initandlisten] WiredTiger error (17) [1548571847:579776][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: File exists Raw: [1548571847:579776][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: File exists
mongo_1               | 2019-01-27T06:50:47.587+0000 I STORAGE  [initandlisten] WiredTiger message unexpected file WiredTiger.wt found, renamed to WiredTiger.wt.4
mongo_1               | 2019-01-27T06:50:47.679+0000 E STORAGE  [initandlisten] WiredTiger error (1) [1548571847:679796][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: Operation not permitted Raw: [1548571847:679796][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: Operation not permitted
mongo_1               | 2019-01-27T06:50:47.696+0000 E STORAGE  [initandlisten] WiredTiger error (17) [1548571847:696074][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: File exists Raw: [1548571847:696074][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: File exists
mongo_1               | 2019-01-27T06:50:47.808+0000 I STORAGE  [initandlisten] WiredTiger message unexpected file WiredTiger.wt found, renamed to WiredTiger.wt.5
mongo_1               | 2019-01-27T06:50:47.811+0000 E STORAGE  [initandlisten] WiredTiger error (1) [1548571847:811468][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: Operation not permitted Raw: [1548571847:811468][1:0x7fa7c0510a40], connection: __posix_open_file, 715: /data/db/WiredTiger.wt: handle-open: open: Operation not permitted
mongo_1               | 2019-01-27T06:50:47.814+0000 W STORAGE  [initandlisten] Failed to start up WiredTiger under any compatibility version.
mongo_1               | 2019-01-27T06:50:47.814+0000 F STORAGE  [initandlisten] Reason: 1: Operation not permitted
mongo_1               | 2019-01-27T06:50:47.814+0000 F -        [initandlisten] Fatal Assertion 28595 at src/mongo/db/storage/wiredtiger/wiredtiger_kv_engine.cpp 638
mongo_1               | 2019-01-27T06:50:47.814+0000 F -        [initandlisten]
mongo_1               |
mongo_1               | ***aborting after fassert() failure
mongo_1               |
mongo_1               |
start-dependencies_1  | Waiting for rabbitmq to listen on 5672...
scripts_start-dependencies_1 exited with code 0
scripts_mongo_1 exited with code 14
rabbitmq_1            | 2019-01-27 06:13:35.375 [info] <0.33.0> Application lager started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:36.708 [info] <0.33.0> Application crypto started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:36.708 [info] <0.33.0> Application cowlib started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:36.710 [info] <0.33.0> Application xmerl started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:36.759 [info] <0.33.0> Application os_mon started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:36.971 [info] <0.33.0> Application inets started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.208 [info] <0.33.0> Application mnesia started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.208 [info] <0.33.0> Application jsx started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.209 [info] <0.33.0> Application recon started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.209 [info] <0.33.0> Application asn1 started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.210 [info] <0.33.0> Application public_key started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.409 [info] <0.33.0> Application ssl started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.433 [info] <0.33.0> Application ranch started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.434 [info] <0.33.0> Application ranch_proxy_protocol started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.440 [info] <0.33.0> Application cowboy started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.441 [info] <0.33.0> Application rabbit_common started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:37.465 [info] <0.198.0>
rabbitmq_1            |  Starting RabbitMQ 3.7.8 on Erlang 20.3.4
rabbitmq_1            |  Copyright (C) 2007-2018 Pivotal Software, Inc.
rabbitmq_1            |  Licensed under the MPL.  See http://www.rabbitmq.com/
rabbitmq_1            |
rabbitmq_1            |   ##  ##
rabbitmq_1            |   ##  ##      RabbitMQ 3.7.8. Copyright (C) 2007-2018 Pivotal Software, Inc.
rabbitmq_1            |   ##########  Licensed under the MPL.  See http://www.rabbitmq.com/
rabbitmq_1            |   ######  ##
rabbitmq_1            |   ##########  Logs: <stdout>
rabbitmq_1            |
rabbitmq_1            |               Starting broker...
rabbitmq_1            | 2019-01-27 06:13:37.506 [info] <0.198.0>
rabbitmq_1            |  node           : rabbit@7642abdfd102
rabbitmq_1            |  home dir       : /var/lib/rabbitmq
rabbitmq_1            |  config file(s) : /etc/rabbitmq/rabbitmq.conf
rabbitmq_1            |  cookie hash    : 6VrgLfATnItluHMC/p5wVA==
rabbitmq_1            |  log(s)         : <stdout>
rabbitmq_1            |  database dir   : /var/lib/rabbitmq/mnesia/rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.247 [info] <0.206.0> Memory high watermark set to 792 MiB (830613094 bytes) of 1980 MiB (2076532736 bytes) total
rabbitmq_1            | 2019-01-27 06:13:42.254 [info] <0.208.0> Enabling free disk space monitoring
rabbitmq_1            | 2019-01-27 06:13:42.254 [info] <0.208.0> Disk free limit set to 50MB
rabbitmq_1            | 2019-01-27 06:13:42.258 [info] <0.211.0> Limiting to approx 1048476 file handles (943626 sockets)
rabbitmq_1            | 2019-01-27 06:13:42.258 [info] <0.212.0> FHC read buffering:  OFF
rabbitmq_1            | 2019-01-27 06:13:42.259 [info] <0.212.0> FHC write buffering: ON
rabbitmq_1            | 2019-01-27 06:13:42.260 [info] <0.198.0> Node database directory at /var/lib/rabbitmq/mnesia/rabbit@7642abdfd102 is empty. Assuming we need to join an existing cluster or initialise from scratch...
rabbitmq_1            | 2019-01-27 06:13:42.260 [info] <0.198.0> Configured peer discovery backend: rabbit_peer_discovery_classic_config
rabbitmq_1            | 2019-01-27 06:13:42.260 [info] <0.198.0> Will try to lock with peer discovery backend rabbit_peer_discovery_classic_config
rabbitmq_1            | 2019-01-27 06:13:42.261 [info] <0.198.0> Peer discovery backend does not support locking, falling back to randomized delay
rabbitmq_1            | 2019-01-27 06:13:42.261 [info] <0.198.0> Peer discovery backend rabbit_peer_discovery_classic_config does not support registration, skipping randomized startup delay.
rabbitmq_1            | 2019-01-27 06:13:42.261 [info] <0.198.0> All discovered existing cluster peers:
rabbitmq_1            | 2019-01-27 06:13:42.261 [info] <0.198.0> Discovered no peer nodes to cluster with
rabbitmq_1            | 2019-01-27 06:13:42.263 [info] <0.33.0> Application mnesia exited with reason: stopped
rabbitmq_1            | 2019-01-27 06:13:42.303 [info] <0.33.0> Application mnesia started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.476 [info] <0.198.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
rabbitmq_1            | 2019-01-27 06:13:42.513 [info] <0.198.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
rabbitmq_1            | 2019-01-27 06:13:42.559 [info] <0.198.0> Waiting for Mnesia tables for 30000 ms, 9 retries left
rabbitmq_1            | 2019-01-27 06:13:42.559 [info] <0.198.0> Peer discovery backend rabbit_peer_discovery_classic_config does not support registration, skipping registration.
rabbitmq_1            | 2019-01-27 06:13:42.560 [info] <0.198.0> Priority queues enabled, real BQ is rabbit_variable_queue
rabbitmq_1            | 2019-01-27 06:13:42.566 [info] <0.378.0> Starting rabbit_node_monitor
rabbitmq_1            | 2019-01-27 06:13:42.600 [info] <0.198.0> message_store upgrades: 1 to apply
rabbitmq_1            | 2019-01-27 06:13:42.601 [info] <0.198.0> message_store upgrades: Applying rabbit_variable_queue:move_messages_to_vhost_store
rabbitmq_1            | 2019-01-27 06:13:42.601 [info] <0.198.0> message_store upgrades: No durable queues found. Skipping message store migration
rabbitmq_1            | 2019-01-27 06:13:42.601 [info] <0.198.0> message_store upgrades: Removing the old message store data
rabbitmq_1            | 2019-01-27 06:13:42.603 [info] <0.198.0> message_store upgrades: All upgrades applied successfully
rabbitmq_1            | 2019-01-27 06:13:42.639 [info] <0.198.0> Management plugin: using rates mode 'basic'
rabbitmq_1            | 2019-01-27 06:13:42.640 [info] <0.198.0> Adding vhost '/'
rabbitmq_1            | 2019-01-27 06:13:42.665 [info] <0.418.0> Making sure data directory '/var/lib/rabbitmq/mnesia/rabbit@7642abdfd102/msg_stores/vhosts/628WB79CIFDYO9LJI6DKMI09L' for vhost '/' exists
rabbitmq_1            | 2019-01-27 06:13:42.676 [info] <0.418.0> Starting message stores for vhost '/'
rabbitmq_1            | 2019-01-27 06:13:42.676 [info] <0.422.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_transient": using rabbit_msg_store_ets_index to provide index
rabbitmq_1            | 2019-01-27 06:13:42.679 [info] <0.418.0> Started message store of type transient for vhost '/'
rabbitmq_1            | 2019-01-27 06:13:42.680 [info] <0.425.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_persistent": using rabbit_msg_store_ets_index to provide index
rabbitmq_1            | 2019-01-27 06:13:42.681 [warning] <0.425.0> Message store "628WB79CIFDYO9LJI6DKMI09L/msg_store_persistent": rebuilding indices from scratch
rabbitmq_1            | 2019-01-27 06:13:42.683 [info] <0.418.0> Started message store of type persistent for vhost '/'
rabbitmq_1            | 2019-01-27 06:13:42.684 [info] <0.198.0> Creating user 'guest'
rabbitmq_1            | 2019-01-27 06:13:42.691 [info] <0.198.0> Setting user tags for user 'guest' to [administrator]
rabbitmq_1            | 2019-01-27 06:13:42.694 [info] <0.198.0> Setting permissions for 'guest' in '/' to '.*', '.*', '.*'
rabbitmq_1            | 2019-01-27 06:13:42.701 [info] <0.463.0> started TCP Listener on [::]:5672
rabbitmq_1            | 2019-01-27 06:13:42.707 [info] <0.198.0> Setting up a table for connection tracking on this node: tracked_connection_on_node_rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.712 [info] <0.198.0> Setting up a table for per-vhost connection counting on this node: tracked_connection_per_vhost_on_node_rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.713 [info] <0.33.0> Application rabbit started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.713 [info] <0.33.0> Application amqp_client started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.717 [info] <0.33.0> Application rabbitmq_management_agent started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.717 [info] <0.33.0> Application rabbitmq_web_dispatch started on node rabbit@7642abdfd102
rabbitmq_1            | 2019-01-27 06:13:42.759 [info] <0.524.0> Management plugin started. Port: 15672
rabbitmq_1            | 2019-01-27 06:13:42.759 [info] <0.630.0> Statistics database started.
rabbitmq_1            | 2019-01-27 06:13:42.760 [info] <0.33.0> Application rabbitmq_management started on node rabbit@7642abdfd102
rabbitmq_1            |  completed with 3 plugins.
rabbitmq_1            | 2019-01-27 06:13:43.429 [info] <0.5.0> Server startup complete; 3 plugins started.
rabbitmq_1            |  * rabbitmq_management
rabbitmq_1            |  * rabbitmq_web_dispatch
rabbitmq_1            |  * rabbitmq_management_agent
rabbitmq_1            | 2019-01-27 06:50:52.405 [info] <0.693.0> accepting AMQP connection <0.693.0> (172.18.0.7:40831 -> 172.18.0.2:5672)
rabbitmq_1            | 2019-01-27 06:50:52.443 [info] <0.696.0> accepting AMQP connection <0.696.0> (172.18.0.5:38117 -> 172.18.0.2:5672)
rabbitmq_1            | 2019-01-27 06:50:52.459 [info] <0.699.0> accepting AMQP connection <0.699.0> (172.18.0.6:44277 -> 172.18.0.2:5672)
rabbitmq_1            | 2019-01-27 06:50:52.536 [info] <0.699.0> connection <0.699.0> (172.18.0.6:44277 -> 172.18.0.2:5672): user 'guest' authenticated and granted access to vhost '/'
rabbitmq_1            | 2019-01-27 06:50:52.547 [info] <0.696.0> connection <0.696.0> (172.18.0.5:38117 -> 172.18.0.2:5672): user 'guest' authenticated and granted access to vhost '/'
rabbitmq_1            | 2019-01-27 06:50:52.569 [info] <0.693.0> connection <0.693.0> (172.18.0.7:40831 -> 172.18.0.2:5672): user 'guest' authenticated and granted access to vhost '/'
identity-service_1    | warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
identity-service_1    |       No XML encryptor configured. Key {d1a13001-a995-4a9b-aeff-0530dbb9ce1a} may be persisted to storage in unencrypted form.
api_1                 | warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
api_1                 |       No XML encryptor configured. Key {de7c9c31-b166-44fe-aa4b-d8feb57a33af} may be persisted to storage in unencrypted form.
activities-service_1  | warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
activities-service_1  |       No XML encryptor configured. Key {c76893d7-af59-46f2-9afb-423e8fba3fa6} may be persisted to storage in unencrypted form.
api_1                 | Hosting environment: docker
api_1                 | Content root path: /dotnetapp
api_1                 | Now listening on: http://[::]:5000
api_1                 | Application started. Press Ctrl+C to shut down.
identity-service_1    | Hosting environment: docker
identity-service_1    | Content root path: /dotnetapp
identity-service_1    | Now listening on: http://[::]:5051
identity-service_1    | Application started. Press Ctrl+C to shut down.
activities-service_1  | Hosting environment: docker
activities-service_1  | Content root path: /dotnetapp
activities-service_1  | Now listening on: http://[::]:5050
activities-service_1  | Application started. Press Ctrl+C to shut down.
```

- Ensure all the services are running properly
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ curl localhost:5050
Hello from Actio.Services.Activites API!
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ curl localhost:5051
Hello from Actio.Services.Indentity API!
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ curl localhost:5000
Hello from Actio API!
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
```

### 33. Storing Docker Images in a Hub 

![](/images/backend/dotnetcore-net-core-microservice/StoringDockerImagesInAHub.png) 

- The [Docker Hub](https://hub.docker.com/) is the place where we can put our Docker images

- Push our local images to the `Docker Hub`

I) Tag the image

```sh
$ docker tag actio.api peelmicro/actio.api
```

II) Authenticate

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker login
Authenticating with existing credentials...
Login Succeeded
```
III) Push the image

```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker push peelmicro/actio.api
The push refers to repository [docker.io/peelmicro/actio.api]
8395f05ff8cc: Pushed
dc49980f6ba8: Pushed
8a8de9be5a63: Mounted from microsoft/dotnet
f876f4ce37fd: Mounted from microsoft/dotnet
f0296b566559: Mounted from microsoft/dotnet
3c816b4ead84: Mounted from microsoft/dotnet
latest: digest: sha256:adb362280d55b3217140c9abb312d1849cf1fe879978015f8f52cb7d8da08084 size: 1581
```

![](/images/backend/dotnetcore-net-core-microservice/StoringDockerImagesInAHub2.png)


- We can pull the image as well
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/DotNetCore/NET-Core-Microservices/dotnet-core-microservices (master)
$ docker pull peelmicro/actio.api
Using default tag: latest
latest: Pulling from peelmicro/actio.api
Digest: sha256:adb362280d55b3217140c9abb312d1849cf1fe879978015f8f52cb7d8da08084
Status: Image is up to date for peelmicro/actio.api:latest
```

### 34. Deploying Application to the Cloud

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud.png)


![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud2.png

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud3.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud4.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud5.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud6.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud7.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud8.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud9.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud10.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud11.png)

> scripts -> nginx.config
```
server {
    listen 80;

    location / {
            proxy_pass http://localhost:5000;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection keep-alive;
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
    }
}
```

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud12.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud13.png)

![](/images/backend/dotnetcore-net-core-microservice/DeployingApplicationToTheCloud14.png)

![](/images/backend/dotnetcore-net-core-microservice/EndSummary.png)



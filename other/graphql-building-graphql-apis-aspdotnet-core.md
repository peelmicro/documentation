# Building GraphQL APIs with ASP.NET Core

> Github Repositories

- [building-graphql-apis-aspdotnet-core](https://github.com/peelmicro/building-graphql-apis-aspdotnet-core).

The [Building GraphQL APIs with ASP.NET Core](https://www.udemy.com/learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/) Pluralsight course explains how to use an API that doesn't use REST, but contains just one endpoint that has the ability to return data in a form that exactly suits the data-consuming application. This becomes a reality with GraphQL for .NET.

> Table of contents
> [[toc]]

## Description

Having an API that doesn't use REST, and contains just one endpoint which has the ability to return data in a form that exactly suits the data-consuming application is very powerful. After watching this practical course, Building GraphQL APIs with ASP.NET Core, you’ll be ready to implement GraphQL in your ASP.NET Core API and write queries against it. First, you will explore how using GraphQL has lots of benefits compared to REST or SOAP. Next, you will very quickly understand the basic principles of GraphQL and shortly after, you can start building your own GraphQL endpoint in ASP.NET Core. Finally, you will discover how schemas provide metadata to clients, how queries are written for data retrieval and mutations. By the end of this course, you will be amazed by the ability that your GraphQL endpoint has to actively contact the client when changes occur with subscriptions.

## 1 Course Overview

### 1.1 Course Overview

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CourseOverview.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CourseOverview2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CourseOverview3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CourseOverview4.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CourseOverview5.png)

## 2 Starting with GraphQL

### 2.1 Introduction

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/StartingWithGraphQLIntroduction.png)

### 2.2 The Power of GraphQL

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ThePowerOfGraphQL.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ThePowerOfGraphQL2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ThePowerOfGraphQL3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ThePowerOfGraphQL4.png)

### 2.3 What Is GraphQL?

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WhatIsGraphQL.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WhatIsGraphQL2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WhatIsGraphQL3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WhatIsGraphQL4.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WhatIsGraphQL5.png)

### 2.4 Preparing a Project

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject4.png)

1. `Download exercise files` from PluralSight

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject5.png)

2. Unzip the `building-graphql-apis-aspdotnet-core.zip` document into a local folder.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject6.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject7.png)

3. Copy the content from `02\demos` folder to the folder where we are going to work.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject8.png)

4. Open the `CarvedRock.sln` document with VS2017 or newer or the `building-graphql-apis-aspdotnet-core` folder with Visual Studio Code.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject9.png)

5. Modify the `appsettings.json` document to put `localhost` for the `Server` in the Connection String.

> appsettings.json

```json
{
  "ConnectionStrings": {
    "CarvedRock": "Server=localhost;Database=CarvedRock;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

6. Run the `dotnet ef database update` command to create the database

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core
$ ls
CarvedRock.Api  CarvedRock.sln  CarvedRock.sln.DotSettings.user

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core
$ cd CarvedRock.Api/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet ef database update
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (3,330ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
      CREATE DATABASE [CarvedRock];
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1,306ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
      IF SERVERPROPERTY('EngineEdition') <> 5
      BEGIN
          ALTER DATABASE [CarvedRock] SET READ_COMMITTED_SNAPSHOT ON;
      END;
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (16ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE [__EFMigrationsHistory] (
          [MigrationId] nvarchar(150) NOT NULL,
          [ProductVersion] nvarchar(32) NOT NULL,
          CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
      );
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (39ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT OBJECT_ID(N'[__EFMigrationsHistory]');
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (3ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [MigrationId], [ProductVersion]
      FROM [__EFMigrationsHistory]
      ORDER BY [MigrationId];
Applying migration '20181108113631_Products'.
info: Microsoft.EntityFrameworkCore.Migrations[20402]
      Applying migration '20181108113631_Products'.
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (46ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE [Products] (
          [Id] int NOT NULL IDENTITY,
          [Name] nvarchar(100) NULL,
          [Type] int NOT NULL,
          [Description] nvarchar(max) NULL,
          [Price] decimal(18, 2) NOT NULL,
          [Stock] int NOT NULL,
          [Rating] int NOT NULL,
          [IntroducedAt] datetimeoffset NOT NULL,
          [PhotoFileName] nvarchar(100) NULL,
          CONSTRAINT [PK_Products] PRIMARY KEY ([Id])
      );
Done.
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject10.png)

- Run the application with `dotnet build` and the `dotnet run`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core
$ dotnet build CarvedRock.Api
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 244.97 ms for C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api\CarvedRock.Api.csproj.
  CarvedRock.Api -> C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api\bin\Debug\netcoreapp2.1\CarvedRock.Api.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:02.71
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core
$ dotnet run --project CarvedRock.Api/CarvedRock.Api.csproj
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (6ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- Browse to https://localhost:5001/ui/playground

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/PreparingAProject11.png)

- Initial code:

> Data/Entities/Product.cs

```csharp
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarvedRock.Api.Data.Entities
{
    public class Product
    {
        public int Id { get; set; }

        [StringLength(100)]
        public string Name { get; set; }
        public ProductType Type { get; set; }
        public string Description { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int Rating { get; set; }
        public DateTimeOffset IntroducedAt { get; set; }

        [StringLength(100)]
        public string PhotoFileName { get; set; }
    }
}
```

> Data/Migrations/20181108113631_Products.cs

```csharp
using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CarvedRock.Api.Data.Migrations
{
    public partial class Products : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Stock = table.Column<int>(nullable: false),
                    Rating = table.Column<int>(nullable: false),
                    IntroducedAt = table.Column<DateTimeOffset>(nullable: false),
                    PhotoFileName = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
```

> Data/Migrations/20181108113631_Products.Designer.cs

```csharp
// <auto-generated />
using System;
using CarvedRock.Api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CarvedRock.Api.Data.Migrations
{
    [DbContext(typeof(CarvedRockDbContext))]
    partial class CarvedRockDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CarvedRock.Api.Data.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<DateTimeOffset>("IntroducedAt");

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.Property<string>("PhotoFileName")
                        .HasMaxLength(100);

                    b.Property<decimal>("Price");

                    b.Property<int>("Rating");

                    b.Property<int>("Stock");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
```

> Data/CarvedRockDbContext.cs

```csharp
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Data
{
    public class CarvedRockDbContext: DbContext
    {
        public CarvedRockDbContext(DbContextOptions<CarvedRockDbContext> options): base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}
```

> Data/CarvedRockDbContext.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarvedRock.Api.Data.Entities;

namespace CarvedRock.Api.Data
{
    public static class InitialData
    {
        public static void Seed(this CarvedRockDbContext dbContext)
        {
            if (!dbContext.Products.Any())
            {
                dbContext.Products.Add(new Product
                {
                    Name = "Mountain Walkers",
                    Description = "Use these sturdy shoes to pass any mountain range with ease.",
                    Price = 219.5m,
                    Rating = 4,
                    Type = ProductType.Boots,
                    Stock = 12,
                    PhotoFileName = "shutterstock_66842440.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Army Slippers",
                    Description = "For your everyday marches in the army.",
                    Price = 125.9m,
                    Rating = 3,
                    Type = ProductType.Boots,
                    Stock = 56,
                    PhotoFileName = "shutterstock_222721876.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Backpack Deluxe",
                    Description = "This backpack can survive any tornado.",
                    Price = 199.99m,
                    Rating = 5,
                    Type = ProductType.ClimbingGear,
                    Stock = 66,
                    PhotoFileName = "shutterstock_6170527.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Climbing Kit",
                    Description = "Anything you need to climb the mount Everest.",
                    Price = 299.5m,
                    Rating = 5,
                    Type = ProductType.ClimbingGear,
                    Stock = 3,
                    PhotoFileName = "shutterstock_48040747.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Blue Racer",
                    Description = "Simply the fastest kayak on earth and beyond for 2 persons.",
                    Price = 350m,
                    Rating = 5,
                    Type = ProductType.Kayaks,
                    Stock = 8,
                    PhotoFileName = "shutterstock_441989509.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Orange Demon",
                    Description = "One person kayak with hyper boost button.",
                    Price = 450m,
                    Rating = 2,
                    Type = ProductType.Kayaks,
                    Stock = 1,
                    PhotoFileName = "shutterstock_495259978.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.SaveChanges();
            }
        }
    }
}
```

> Data/ProductType.cs

```csharp
namespace CarvedRock.Api.Data
{
    public enum ProductType
    {
        Boots,
        ClimbingGear,
        Kayaks
    }
}
```

> Repositories/ProductRepository.cs

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using CarvedRock.Api.Data;
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Repositories
{
    public class ProductRepository
    {
        private readonly CarvedRockDbContext _dbContext;

        public ProductRepository(CarvedRockDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<Product>> GetAll()
        {
            return _dbContext.Products.ToListAsync();
        }
    }
}
```

> CarvedRock.Api.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <Folder Include="wwwroot\" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="GraphQL" Version="2.3.0" />
    <PackageReference Include="GraphQL.Server.Transports.AspNetCore" Version="3.2.0" />
    <PackageReference Include="GraphQL.Server.Ui.Playground" Version="3.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
  </ItemGroup>

</Project>
```

> Properties/launchSettings.json

```json
{
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:53215",
      "sslPort": 44332
    }
  },
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "CarvedRock.Api": {
      "commandName": "Project",
      "launchBrowser": true,
      "launchUrl": "ui/playground",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      },
      "applicationUrl": "https://localhost:5001;http://localhost:5000"
    }
  }
}
```

> Program.cs

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CarvedRock.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
```

> Startup,cs

```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));
            services.AddScoped<ProductRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();

            services.AddGraphQL(o => { o.ExposeExceptions = false; })
                .AddGraphTypes(ServiceLifetime.Scoped);
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

### 2.5 Writing a Schema

- The [GraphQL for .NET](https://github.com/graphql-dotnet/graphql-dotnet) is going to be used.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WritingASchema.png)

- We can find more about it on [GraphQL .NET documentation](https://graphql-dotnet.github.io/) and [GraphQL Examples](https://github.com/graphql-dotnet/examples)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WritingASchema2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WritingASchema3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WritingASchema4.png)

- The `GraphQL` folder with the `Types/ProductType.cs`, `Types/ProductTypeEnum.cs`, `CarvedRockQuery.cs` and `CavedRockSchema.cs` documents must be created.

> GraphQL/Types/ProductType.cs

```csharp
using CarvedRock.Api.Data.Entities;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductType: ObjectGraphType<Product>
    {
        public ProductType()
        {
            Field(t => t.Id);
            Field(t => t.Name).Description("The name of the product");
            Field(t => t.Description);
            Field(t => t.IntroducedAt).Description("When the product was first introduced in the catalog");
            Field(t => t.PhotoFileName).Description("The file name of the photo so the client can render it");
            Field(t => t.Price);
            Field(t => t.Rating).Description("The (max 5) star customer rating");
            Field(t => t.Stock);
            Field<ProductTypeEnumType>("Type", "The type of product");

        }
    }
}
```

> GraphQL/Types/ProductTypeEnum.cs

```csharp
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductTypeEnumType: EnumerationGraphType<Data.ProductType>
    {
        public ProductTypeEnumType()
        {
            Name = "Type";
            Description = "The type of product";
        }
    }
}
```

> GraphQL/CarvedRockQuery.cs

```csharp
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockQuery: ObjectGraphType
    {
        public CarvedRockQuery(ProductRepository productRepository)
        {
            Field<ListGraphType<ProductType>>(
                "products",
                resolve: context => productRepository.GetAll()
            );
        }
    }
}
```

> GraphQL/CavedRockSchema.cs

```csharp
using GraphQL;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockSchema: Schema
    {
        public CarvedRockSchema(IDependencyResolver resolver): base(resolver)
        {
            Query = resolver.Resolve<CarvedRockQuery>();
        }
    }
}
```

### 2.6 Configuring ASP.NET Core

- Modify the `Startup.cs` document to configure the use of GraphQL.

> Startup.cs

```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));
            services.AddScoped<ProductRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();

            services.AddGraphQL(o => { o.ExposeExceptions = false; })
                .AddGraphTypes(ServiceLifetime.Scoped);
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

> It is used to add the GraphQL service

```csharp
services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
```

> It is used to add the Schema

```csharp
services.AddScoped<CarvedRockSchema>();
```

> It is used to register all the types that GraphQL uses

```csharp
services.AddGraphQL(o => { o.ExposeExceptions = false; })
         .AddGraphTypes(ServiceLifetime.Scoped);
```

> It is used to add the GraphQL middleware for the schema

```csharp
app.UseGraphQL<CarvedRockSchema>();
```

> It is used to add the Playground UI

```csharp
app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
```

### 2.7 Querying the API

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/QueryingTheApi.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/QueryingTheApi2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/QueryingTheApi3.png)

> Request

```grahql
{ products
  {
  	name
  	description
	}
}
```

> Response

```json
{
  "data": {
    "products": [
      {
        "name": "Mountain Walkers",
        "description": "Use these sturdy shoes to pass any mountain range with ease."
      },
      {
        "name": "Army Slippers",
        "description": "For your everyday marches in the army."
      },
      {
        "name": "Backpack Deluxe",
        "description": "This backpack can survive any tornado."
      },
      {
        "name": "Climbing Kit",
        "description": "Anything you need to climb the mount Everest."
      },
      {
        "name": "Blue Racer",
        "description": "Simply the fastest kayak on earth and beyond for 2 persons."
      },
      {
        "name": "Orange Demon",
        "description": "One person kayak with hyper boost button."
      }
    ]
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/QueryingTheApi4.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/QueryingTheApi5.png)

> Request

```grahql
{ __schema
  {
  	types
    {
      name
    }
	}
}
```

> Response

```json
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "String"
        },
        {
          "name": "Boolean"
        },
        {
          "name": "Float"
        },
        {
          "name": "Int"
        },
        {
          "name": "ID"
        },
        {
          "name": "Date"
        },
        {
          "name": "DateTime"
        },
        {
          "name": "DateTimeOffset"
        },
        {
          "name": "Seconds"
        },
        {
          "name": "Milliseconds"
        },
        {
          "name": "Decimal"
        },
        {
          "name": "__Schema"
        },
        {
          "name": "__Type"
        },
        {
          "name": "__TypeKind"
        },
        {
          "name": "__Field"
        },
        {
          "name": "__InputValue"
        },
        {
          "name": "__EnumValue"
        },
        {
          "name": "__Directive"
        },
        {
          "name": "__DirectiveLocation"
        },
        {
          "name": "CarvedRockQuery"
        },
        {
          "name": "ProductType"
        },
        {
          "name": "Type"
        }
      ]
    }
  }
}
```

### 2.8 Summary

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/StartingWithGraphQLSummary.png)2

## 3 Creating a GraphQL API

### 3.1 Introduction

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CreatingAGraphQLApiIntroduction.png)

### 3.2 Adding Scalar Types

> GraphQL/Types/ProductTypeEnum.cs

```csharp
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductTypeEnumType: EnumerationGraphType<Data.ProductType>
    {
        public ProductTypeEnumType()
        {
            Name = "Type";
            Description = "The type of product";
        }
    }
}
```

> GraphQL/Types/ProductType.cs

```csharp
using CarvedRock.Api.Data.Entities;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductType: ObjectGraphType<Product>
    {
        public ProductType()
        {
            Field(t => t.Id);
            Field(t => t.Name).Description("The name of the product");
            Field(t => t.Description);
            Field(t => t.IntroducedAt).Description("When the product was first introduced in the catalog");
            Field(t => t.PhotoFileName).Description("The file name of the photo so the client can render it");
            Field(t => t.Price);
            Field(t => t.Rating).Description("The (max 5) star customer rating");
            Field(t => t.Stock);
            Field<ProductTypeEnumType>("Type", "The type of product");

        }
    }
}
```

> Request

```grahql
{ products
  {
    id
  	name
  	description
    introducedAt
    photoFileName
    price
    rating
    type
	}
}
```

> Response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "description": "Use these sturdy shoes to pass any mountain range with ease.",
        "introducedAt": "2019-01-23T05:56:20.0892442+00:00",
        "photoFileName": "shutterstock_66842440.jpg",
        "price": 219.5,
        "rating": 4,
        "type": "BOOTS"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "description": "For your everyday marches in the army.",
        "introducedAt": "2019-01-23T05:56:20.1826394+00:00",
        "photoFileName": "shutterstock_222721876.jpg",
        "price": 125.9,
        "rating": 3,
        "type": "BOOTS"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "description": "This backpack can survive any tornado.",
        "introducedAt": "2019-01-23T05:56:20.183893+00:00",
        "photoFileName": "shutterstock_6170527.jpg",
        "price": 199.99,
        "rating": 5,
        "type": "CLIMBING_GEAR"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "description": "Anything you need to climb the mount Everest.",
        "introducedAt": "2019-01-23T05:56:20.1839969+00:00",
        "photoFileName": "shutterstock_48040747.jpg",
        "price": 299.5,
        "rating": 5,
        "type": "CLIMBING_GEAR"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "description": "Simply the fastest kayak on earth and beyond for 2 persons.",
        "introducedAt": "2019-01-23T05:56:20.1840446+00:00",
        "photoFileName": "shutterstock_441989509.jpg",
        "price": 350,
        "rating": 5,
        "type": "KAYAKS"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "description": "One person kayak with hyper boost button.",
        "introducedAt": "2019-01-23T05:56:20.1840819+00:00",
        "photoFileName": "shutterstock_495259978.jpg",
        "price": 450,
        "rating": 2,
        "type": "KAYAKS"
      }
    ]
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/AddingScalarTypes.png)

### 3.3 Adding Complex Types

- We need to change the `ProductType` enum name to `ProductTypeEnum`

> `Data/ProductType.cs`

```cs
namespace CarvedRock.Api.Data
{
    public enum ProductTypeEnum
    {
        Boots,
        ClimbingGear,
        Kayaks
    }
}
```

- We need to add the `Data/Entities/ProductReview.cs` document to add the .
  `ProductReview` entity.

> Data/Entities/ProductReview.cs

```csharp
using System.ComponentModel.DataAnnotations;
namespace CarvedRock.Api.Data.Entities
{
    public class ProductReview
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [StringLength(200), Required]
        public string Title { get; set; }
        public string Review { get; set; }
    }
}
```

- We need to update the `Data/Entities/Product.cs` and `Data/Migrations/CarvedRockDbContext.cs` documents to include the new entity.

> Data/Entities/Product.cs

```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarvedRock.Api.Data.Entities
{
    public class Product
    {
        public int Id { get; set; }

        [StringLength(100)]
        public string Name { get; set; }
        public ProductTypeEnum Type { get; set; }
        public string Description { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int Rating { get; set; }
        public DateTimeOffset IntroducedAt { get; set; }

        [StringLength(100)]
        public string PhotoFileName { get; set; }

        public List<ProductReview> ProductReviews { get; set; }
    }
}
```

> Data/CarvedRockDbContext.cs

```csharp
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Data
{
    public class CarvedRockDbContext: DbContext
    {
        public CarvedRockDbContext(DbContextOptions<CarvedRockDbContext> options): base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductReview> ProductReviews { get; set; }
    }
}
```

- We need to update the `InitialData.cs` to include data for the new `ProductReviews` field.

> Data/InitialData.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarvedRock.Api.Data.Entities;

namespace CarvedRock.Api.Data
{
    public static class InitialData
    {
        public static void Seed(this CarvedRockDbContext dbContext)
        {
            if (!dbContext.Products.Any())
            {
                dbContext.Products.Add(new Product
                {
                    Name = "Mountain Walkers",
                    Description = "Use these sturdy shoes to pass any mountain range with ease.",
                    Price = 219.5m,
                    Rating = 4,
                    Type = ProductTypeEnum.Boots,
                    Stock = 12,
                    PhotoFileName = "shutterstock_66842440.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1),
                    ProductReviews = new List<ProductReview>
                    {
                        new ProductReview
                        {
                            Title = "Crossed the Himalayas",
                            Review = "First released almost 30 years ago, the Titan 26078 is a classic work boot. It’s also one of Timberland’s all time best sellers."
                        },
                        new ProductReview
                        {
                            Title = "Comfortable",
                            Review = "One of the most comfortable hiking boots available, each pair comes complete with the Power Fit Comfort System, designed to offer maximum support at key areas of your feet."
                        }
                    }
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Army Slippers",
                    Description = "For your everyday marches in the army.",
                    Price = 125.9m,
                    Rating = 3,
                    Type = ProductTypeEnum.Boots,
                    Stock = 56,
                    PhotoFileName = "shutterstock_222721876.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1),
                    ProductReviews = new List<ProductReview>
                    {
                        new ProductReview
                        {
                            Title = "Indestructible",
                            Review = "They have absolutely no break in period and can literally be worn to work the day that you get them."
                        },
                        new ProductReview
                        {
                            Title = "Safety toe",
                            Review = "The safety toe is made from an aluminium alloy which offers all the protection of steel but half the weight. The soles are also oil, abrasion and slip resistant."
                        }
                    }
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Backpack Deluxe",
                    Description = "This backpack can survive any tornado.",
                    Price = 199.99m,
                    Rating = 5,
                    Type = ProductTypeEnum.ClimbingGear,
                    Stock = 66,
                    PhotoFileName = "shutterstock_6170527.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1),
                    ProductReviews = new List<ProductReview>
                    {
                        new ProductReview
                        {
                            Title = "Feels like canvas",
                            Review = "The Better Backpack is made from 100% recycled plastic but looks and feels like canvas. We were sent the grey bag with the tan leather accents and silver zippers. I’ve personally always liked tan leather paired with the color grey and appreciate the feel of the leather pull tabs and handles at the top of the bag. Additionally the inside is navy blue with a diagonal stitch pattern which gives it an air of sophistication."
                        }

                    }
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Climbing Kit",
                    Description = "Anything you need to climb the mount Everest.",
                    Price = 299.5m,
                    Rating = 5,
                    Type = ProductTypeEnum.ClimbingGear,
                    Stock = 3,
                    PhotoFileName = "shutterstock_48040747.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1)
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Blue Racer",
                    Description = "Simply the fastest kayak on earth and beyond for 2 persons.",
                    Price = 350m,
                    Rating = 5,
                    Type = ProductTypeEnum.Kayaks,
                    Stock = 8,
                    PhotoFileName = "shutterstock_441989509.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1),
                    ProductReviews = new List<ProductReview>
                    {
                        new ProductReview
                        {
                            Title = "So this is my 1st ever...",
                            Review = "So this is my 1st ever kayak and my 1st experience paddling a kayak. I struggled with whether I should spend more money to buy a \"Fishing\" kayak, or even a \"higher end\" kayak because my fear was paddling around a bathtub on the lake. I have to say, I love this kayak for me. It doesn\'t have a lot of the bells and whistles that some of the pricier kayaks have but, I\'m not disappointed.\r\n\r\nIt\'s pretty bare bones aside from some dry storage areas and some bungees. It does have a bungee to hold your paddle on the side. I feel it paddles very easy. It goes exactly where I want it to, I didn\'t struggle to keep it on course. A stiff wind can knock you off track but it was very sturdy and I feel like it would take a lot to tip it over. I stayed fairly dry aside from the dripping off the paddle but its a sit on top so thats to be expected."
                        },
                        new ProductReview
                        {
                            Title = "Great for all genders",
                            Review = "I am a fit 5'7 woman 140lbs and I take my 30# dog along with no troubles. I have fished with it by using a bucket strapped in the back with my bungee cords. It holds my rods and small tackle tray, bug spray etc so I can get to it all easily. I can even get it up on the roof of my jeep alone. "
                        },
                        new ProductReview
                        {
                            Title = "Happy",
                            Review = "Very happy with my purchase and I recommend this to anyone who doesn't want to spend over 600$ on a kayak but also doesn't want a cheap ole hunk of plastic. "
                        }
                    }
                });

                dbContext.Products.Add(new Product
                {
                    Name = "Orange Demon",
                    Description = "One person kayak with hyper boost button.",
                    Price = 450m,
                    Rating = 2,
                    Type = ProductTypeEnum.Kayaks,
                    Stock = 1,
                    PhotoFileName = "shutterstock_495259978.jpg",
                    IntroducedAt = DateTimeOffset.Now.AddMonths(-1),
                    ProductReviews = new List<ProductReview>
                    {
                        new ProductReview {
                        Title = "Hobie took the paddle out",
                            Review = "Hobie took the paddle out of the hands of the masses, and changed kayak fishing forever. Ive heavily fished the \'Revo\' since 2011 and feel its about perfect for my use. As a serious cyclist its a natural fit, and it can cover huge distances. The torque the Mirage drive generates in rough conditions is often overlooked. I feel it could easily pull any propeller driven kayak backwards in a tug-o-war. I recently weighed my bare hull at 69#s, and that\'s not too shabby for ANY pedal yak. I still fish from paddle yaks, but I spend more time with the rods in my hands when on the Revo."
                            }
                    }
                });

                dbContext.SaveChanges();
            }
        }
    }
}
```

- We need to add the `Repositories/ProductReviewRepository.cs` document.

> Repositories/ProductReviewRepository.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarvedRock.Api.Data;
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Repositories
{
    public class ProductReviewRepository
    {
        private readonly CarvedRockDbContext _dbContext;

        public ProductReviewRepository(CarvedRockDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ProductReview>> GetForProduct(int productId)
        {
            return await _dbContext.ProductReviews.Where(pr => pr.ProductId == productId).ToListAsync();
        }
    }
}
```

- We have to add the `ProductReviewRepository` class in the `Startup.cs` document.

```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));

            services.AddScoped<ProductRepository>();
            services.AddScoped<ProductReviewRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();

            services.AddGraphQL(o => { o.ExposeExceptions = false; })
                .AddGraphTypes(ServiceLifetime.Scoped);
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

- We also need to add the `GraphQl/Types/ProductReviewType.cs` with the `GraphQL ProductReviewType` type that we have to add to the `GraphQl/Types/ProductReviewType.cs` document to update the `GraphQL ProductType` type.

> GraphQl/Types/ProductReviewType.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarvedRock.Api.Data.Entities;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductReviewType: ObjectGraphType<ProductReview>
    {
        public ProductReviewType()
        {
            Field(t => t.Id);
            Field(t => t.Title);
            Field(t => t.Review);
        }
    }
}
```

> GraphQl/Types/ProductType.cs

```csharp
using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.Repositories;
using GraphQL.DataLoader;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductType : ObjectGraphType<Product>
    {
        public ProductType(ProductReviewRepository reviewRepository)
        {
            Field(t => t.Id);
            Field(t => t.Name);
            Field(t => t.Description);
            Field(t => t.IntroducedAt).Description("When the product was first introduced in the catalog");
            Field(t => t.PhotoFileName).Description("The file name of the photo so the client can render it");
            Field(t => t.Price);
            Field(t => t.Rating).Description("The (max 5) star customer rating");
            Field(t => t.Stock);
            Field<ProductTypeEnumType>("Type", "The type of product");

            Field<ListGraphType<ProductReviewType>>(
                "reviews",
                resolve: context => reviewRepository.GetForProduct(context.Source.Id)
            );
        }
    }
}
```

- We need to drop the database and recreate it.

```bash
uan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet ef database drop
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
Are you sure you want to drop the database 'CarvedRock' on server 'localhost'? (y/N)
y
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
Dropping database 'CarvedRock'.
Database 'CarvedRock' did not exist, no action was taken.
```

- It was removed manually before executing it.

- The `Data\Migrations` folder should be removed to recreate it.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet ef migrations add ProductReview
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
Done. To undo this action, use 'ef migrations remove'

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet ef database update
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (8ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT OBJECT_ID(N'[__EFMigrationsHistory]');
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT OBJECT_ID(N'[__EFMigrationsHistory]');
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [MigrationId], [ProductVersion]
      FROM [__EFMigrationsHistory]
      ORDER BY [MigrationId];
info: Microsoft.EntityFrameworkCore.Migrations[20402]
      Applying migration '20190223103418_ProductReview'.
Applying migration '20190223103418_ProductReview'.
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE [Products] (
          [Id] int NOT NULL IDENTITY,
          [Name] nvarchar(100) NULL,
          [Type] int NOT NULL,
          [Description] nvarchar(max) NULL,
          [Price] decimal(18,2) NOT NULL,
          [Stock] int NOT NULL,
          [Rating] int NOT NULL,
          [IntroducedAt] datetimeoffset NOT NULL,
          [PhotoFileName] nvarchar(100) NULL,
          CONSTRAINT [PK_Products] PRIMARY KEY ([Id])
      );
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (4ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE TABLE [ProductReviews] (
          [Id] int NOT NULL IDENTITY,
          [ProductId] int NOT NULL,
          [Title] nvarchar(200) NOT NULL,
          [Review] nvarchar(max) NULL,
          CONSTRAINT [PK_ProductReviews] PRIMARY KEY ([Id]),
          CONSTRAINT [FK_ProductReviews_Products_ProductId] FOREIGN KEY ([ProductId]) REFERENCES [Products] ([Id]) ON DELETE CASCADE
      );
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (3ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      CREATE INDEX [IX_ProductReviews_ProductId] ON [ProductReviews] ([ProductId]);
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (4ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
      VALUES (N'20190223103418_ProductReview', N'2.1.4-rtm-31024');
Done.
```

- Build the solution

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet build
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 159.19 ms for C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api\CarvedRock.Api.csproj.
  CarvedRock.Api -> C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api\bin\Debug\netcoreapp2.1\CarvedRock.Api.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:01.86
```

- Run the solution

```bash
$ dotnet run
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (8ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (28ms) [Parameters=[@p0='?' (Size = 4000), @p1='?' (DbType = DateTimeOffset), @p2='?' (Size = 100), @p3='?' (Size = 100), @p4='?' (DbType = Decimal), @p5='?' (DbType = Int32), @p6='?' (DbType = Int32), @p7='?' (DbType = Int32), @p8='?' (Size = 4000), @p9='?' (DbType = DateTimeOffset), @p10='?' (Size = 100), @p11='?' (Size = 100), @p12='?' (DbType = Decimal), @p13='?' (DbType = Int32), @p14='?' (DbType = Int32), @p15='?' (DbType = Int32), @p16='?' (Size = 4000), @p17='?' (DbType = DateTimeOffset), @p18='?' (Size = 100), @p19='?' (Size = 100), @p20='?' (DbType = Decimal), @p21='?' (DbType = Int32), @p22='?' (DbType = Int32), @p23='?' (DbType = Int32), @p24='?' (Size = 4000), @p25='?' (DbType = DateTimeOffset), @p26='?' (Size = 100), @p27='?' (Size = 100), @p28='?' (DbType = Decimal), @p29='?' (DbType = Int32), @p30='?' (DbType = Int32), @p31='?' (DbType = Int32), @p32='?' (Size = 4000), @p33='?' (DbType = DateTimeOffset), @p34='?' (Size = 100), @p35='?' (Size = 100), @p36='?' (DbType = Decimal), @p37='?' (DbType = Int32), @p38='?' (DbType = Int32), @p39='?' (DbType = Int32), @p40='?' (Size = 4000), @p41='?' (DbType = DateTimeOffset), @p42='?' (Size = 100), @p43='?' (Size = 100), @p44='?' (DbType = Decimal), @p45='?' (DbType = Int32), @p46='?' (DbType = Int32), @p47='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SET NOCOUNT ON;
      DECLARE @inserted0 TABLE ([Id] int, [_Position] [int]);
      MERGE [Products] USING (
      VALUES (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, 0),
      (@p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, 1),
      (@p16, @p17, @p18, @p19, @p20, @p21, @p22, @p23, 2),
      (@p24, @p25, @p26, @p27, @p28, @p29, @p30, @p31, 3),
      (@p32, @p33, @p34, @p35, @p36, @p37, @p38, @p39, 4),
      (@p40, @p41, @p42, @p43, @p44, @p45, @p46, @p47, 5)) AS i ([Description], [IntroducedAt], [Name], [PhotoFileName], [Price], [Rating], [Stock], [Type], _Position) ON 1=0
      WHEN NOT MATCHED THEN
      INSERT ([Description], [IntroducedAt], [Name], [PhotoFileName], [Price], [Rating], [Stock], [Type])
      VALUES (i.[Description], i.[IntroducedAt], i.[Name], i.[PhotoFileName], i.[Price], i.[Rating], i.[Stock], i.[Type])
      OUTPUT INSERTED.[Id], i._Position
      INTO @inserted0;

      SELECT [t].[Id] FROM [Products] t
      INNER JOIN @inserted0 i ON ([t].[Id] = [i].[Id])
      ORDER BY [i].[_Position];
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (15ms) [Parameters=[@p48='?' (DbType = Int32), @p49='?' (Size = 4000), @p50='?' (Size = 200), @p51='?' (DbType = Int32), @p52='?' (Size = 4000), @p53='?' (Size = 200), @p54='?' (DbType = Int32), @p55='?' (Size = 4000), @p56='?' (Size = 200), @p57='?' (DbType = Int32), @p58='?' (Size = 4000), @p59='?' (Size = 200), @p60='?' (DbType = Int32), @p61='?' (Size = 4000), @p62='?' (Size = 200), @p63='?' (DbType = Int32), @p64='?' (Size = 4000), @p65='?' (Size = 200), @p66='?' (DbType = Int32), @p67='?' (Size = 4000), @p68='?' (Size = 200), @p69='?' (DbType = Int32), @p70='?' (Size = 4000), @p71='?' (Size = 200), @p72='?' (DbType = Int32), @p73='?' (Size = 4000), @p74='?' (Size = 200)], CommandType='Text', CommandTimeout='30']
      SET NOCOUNT ON;
      DECLARE @inserted0 TABLE ([Id] int, [_Position] [int]);
      MERGE [ProductReviews] USING (
      VALUES (@p48, @p49, @p50, 0),
      (@p51, @p52, @p53, 1),
      (@p54, @p55, @p56, 2),
      (@p57, @p58, @p59, 3),
      (@p60, @p61, @p62, 4),
      (@p63, @p64, @p65, 5),
      (@p66, @p67, @p68, 6),
      (@p69, @p70, @p71, 7),
      (@p72, @p73, @p74, 8)) AS i ([ProductId], [Review], [Title], _Position) ON 1=0
      WHEN NOT MATCHED THEN
      INSERT ([ProductId], [Review], [Title])
      VALUES (i.[ProductId], i.[Review], i.[Title])
      OUTPUT INSERTED.[Id], i._Position
      INTO @inserted0;

      SELECT [t].[Id] FROM [ProductReviews] t
      INNER JOIN @inserted0 i ON ([t].[Id] = [i].[Id])
      ORDER BY [i].[_Position];
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

> Request

```graphql
{
  products {
    name
    reviews {
      title
    }
  }
}
```

> Response

```json
{
  "data": {
    "products": [
      {
        "name": "Mountain Walkers",
        "reviews": [
          {
            "title": "Crossed the Himalayas"
          },
          {
            "title": "Comfortable"
          }
        ]
      },
      {
        "name": "Army Slippers",
        "reviews": [
          {
            "title": "Indestructible"
          },
          {
            "title": "Safety toe"
          }
        ]
      },
      {
        "name": "Backpack Deluxe",
        "reviews": [
          {
            "title": "Feels like canvas"
          }
        ]
      },
      {
        "name": "Climbing Kit",
        "reviews": []
      },
      {
        "name": "Blue Racer",
        "reviews": [
          {
            "title": "So this is my 1st ever..."
          },
          {
            "title": "Great for all genders"
          },
          {
            "title": "Happy"
          }
        ]
      },
      {
        "name": "Orange Demon",
        "reviews": [
          {
            "title": "Hobie took the paddle out"
          }
        ]
      }
    ]
  }
}
```

- There are many queries sent to the database

```
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5001/ui/playground
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 36.758ms 200 text/html
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST https://localhost:5001/graphql application/json 1550
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5001/graphql
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 124.4756ms 200 application/json
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 871.0606ms 200 application/json
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST https://localhost:5001/graphql application/json 131
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (16ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [p].[Id], [p].[Description], [p].[IntroducedAt], [p].[Name], [p].[PhotoFileName], [p].[Price], [p].[Rating], [p].[Stock], [p].[Type]
      FROM [Products] AS [p]
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (4ms) [Parameters=[@__productId_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] = @__productId_0
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[@__productId_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] = @__productId_0
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[@__productId_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] = @__productId_0
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (0ms) [Parameters=[@__productId_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] = @__productId_0
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[@__productId_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] = @__productId_0
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[@__productId_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] = @__productId_0
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 247.9088ms 200 application/json
```

- That is not very efficient. It has to be modified using a DataLoader.

### 3.4 DataLoader

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/DataLoader.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/DataLoader2.png)

- In order to use the data loader we need to modify the `Startup.cs` document.

> Startup.cs

```cs
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));

            services.AddScoped<ProductRepository>();
            services.AddScoped<ProductReviewRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();

            services.AddGraphQL(o => { o.ExposeExceptions = false; })
                .AddGraphTypes(ServiceLifetime.Scoped)
                .AddDataLoader();
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

- Then we can inject the DataLoader in the `ProductType` GraphQL type.

> `GraphQL/Types/ProductType.cs`

```csharp
using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.Repositories;
using GraphQL.DataLoader;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductType: ObjectGraphType<Product>
    {
        public ProductType(ProductReviewRepository reviewRepository, IDataLoaderContextAccessor dataLoaderAccessor)
        {
            Field(t => t.Id);
            Field(t => t.Name);
            Field(t => t.Description);
            Field(t => t.IntroducedAt).Description("When the product was first introduced in the catalog");
            Field(t => t.PhotoFileName).Description("The file name of the photo so the client can render it");
            Field(t => t.Price);
            Field(t => t.Rating).Description("The (max 5) star customer rating");
            Field(t => t.Stock);
            Field<ProductTypeEnumType>("Type", "The type of product");

            Field<ListGraphType<ProductReviewType>>(
                "reviews",
                resolve: context =>
                {
                    var loader =
                        dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<int, ProductReview>(
                            "GetReviewsByProductId", reviewRepository.GetForProducts);
                    return loader.LoadAsync(context.Source.Id);
                });
        }
    }
}
```

- We need to modify the `Repositories/ProductReviewRepository.cs` document to add the `GetForProducts` method.

> Repositories/ProductReviewRepository.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarvedRock.Api.Data;
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Repositories
{
    public class ProductReviewRepository
    {
        private readonly CarvedRockDbContext _dbContext;

        public ProductReviewRepository(CarvedRockDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ProductReview>> GetForProduct(int productId)
        {
            return await _dbContext.ProductReviews.Where(pr => pr.ProductId == productId).ToListAsync();
        }

        public async Task<ILookup<int, ProductReview>> GetForProducts(IEnumerable<int> productIds)
        {
            var reviews = await _dbContext.ProductReviews.Where(pr => productIds.Contains(pr.ProductId)).ToListAsync();
            return reviews.ToLookup(r => r.ProductId);
        }
    }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/DataLoader3.png)

- We need to restart the application.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet run
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (9ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- We have to run the same query as before.

> Request

```graphql
{
  products {
    name
    reviews {
      title
    }
  }
}
```

> Response

```json
{
  "data": {
    "products": [
      {
        "name": "Mountain Walkers",
        "reviews": [
          {
            "title": "Crossed the Himalayas"
          },
          {
            "title": "Comfortable"
          }
        ]
      },
      {
        "name": "Army Slippers",
        "reviews": [
          {
            "title": "Indestructible"
          },
          {
            "title": "Safety toe"
          }
        ]
      },
      {
        "name": "Backpack Deluxe",
        "reviews": [
          {
            "title": "Feels like canvas"
          }
        ]
      },
      {
        "name": "Climbing Kit",
        "reviews": []
      },
      {
        "name": "Blue Racer",
        "reviews": [
          {
            "title": "So this is my 1st ever..."
          },
          {
            "title": "Great for all genders"
          },
          {
            "title": "Happy"
          }
        ]
      },
      {
        "name": "Orange Demon",
        "reviews": [
          {
            "title": "Hobie took the paddle out"
          }
        ]
      }
    ]
  }
}
```

- But now the access to the database is only twice, one query for the products and another query for the rewies.

```
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST https://localhost:5001/graphql application/json 131
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (13ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [p].[Id], [p].[Description], [p].[IntroducedAt], [p].[Name], [p].[PhotoFileName], [p].[Price], [p].[Rating], [p].[Stock], [p].[Type]
      FROM [Products] AS [p]
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (3ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] IN (1, 2, 3, 4, 5, 6)
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 643.1114ms 200 application/json
```

### 3.5 Arguments

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Arguments.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Arguments2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Arguments3.png)

- We need to modify the `ProductRepository` class to include the new `GetOne` method.

> Repositories/ProductRepository.cs

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using CarvedRock.Api.Data;
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Repositories
{
    public class ProductRepository
    {
        private readonly CarvedRockDbContext _dbContext;

        public ProductRepository(CarvedRockDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            return await _dbContext.Products.ToListAsync();
        }

        public Task<Product> GetOne(int id)
        {
            return _dbContext.Products.SingleAsync(p => p.Id == id);
        }
    }
}
```

- We need to modify the `CarvedRockQuery` class to include a new query to return just one product with the help of an argument.

> GraphQL/CarvedRockQuery.cs

```csharp
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockQuery: ObjectGraphType
    {
        public CarvedRockQuery(ProductRepository productRepository)
        {
            Field<ListGraphType<ProductType>>(
                "products",
                resolve: context => productRepository.GetAll()
            );

            Field<ProductType>(
                "product",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>>
                    {Name = "id"}),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return productRepository.GetOne(id);
                }
            );
        }
    }
}
```

- Run the application again

```bash
$ dotnet run
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (9ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- We can run a new Query.

> Request

```graphql
{
  product(id: 3) {
    id
    name
    reviews {
      title
    }
  }
}
```

> Response

```json
{
  "data": {
    "product": {
      "id": 3,
      "name": "Backpack Deluxe",
      "reviews": [
        {
          "title": "Feels like canvas"
        }
      ]
    }
  }
}
```

### 3.6 Authorization

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Authorization.png)

- We should need to modify the `Startup.cs` document to include the use of the `AuthorizationService`. We cannot use the `Authorize` attribute with `GraphQL` so we need to implement this service.

- We have to add `AddUserContextBuilder` to get the User from the context.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Authorization2.png)

- Then we can modify the `ProductType` GraphQL type to get the User Context and the Claims from it. We could manage the authorization with it.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Authorization3.png)

### 3.7 Interfaces

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Interfaces.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Interfaces2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Interfaces3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Interfaces4.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Interfaces5.png)

### 3.8 Summary

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/CreatingAGraphQLApiSummary.png)

## 4. Consuming a GraphQL API

### 4.1 Introduction

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ConsumingAGraphQLApiIntroduction.png)

### 4.2 Sending a Query via an HTTP Request

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SendingAQueryViaAnHTTPRequest.png)

- We can use `Postmnan` to send an Http Request

> Request using GET

```
GET /graphql?query={products{id name price rating photoFileName}} HTTP/1.1
Host: localhost:5000
Cache-Control: no-cache
```

> Response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "price": 219.5,
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "price": 125.9,
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "price": 199.99,
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "price": 299.5,
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "price": 350,
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "price": 450,
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SendingAQueryViaAnHTTPRequest2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SendingAQueryViaAnHTTPRequest3.png)

> Request using POST

```
POST /graphql HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: eeaecabf-aa1d-c825-14c8-ab6545d512ee

{
	"query": "{products {id name price rating photoFileName} }"
}
```

> Response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "price": 219.5,
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "price": 125.9,
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "price": 199.99,
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "price": 299.5,
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "price": 350,
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "price": 450,
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SendingAQueryViaAnHTTPRequest4.png)

- Notice the response is wrapped in a `data` json property.

### 4.3 Aliases

- We can manipulate the response using `aliases` for both types and fields.

> Request

```graphql
{
  result: products {
    id
    name
    price
    rating
    photo: photoFileName
  }
}
```

> Response

```json
{
  "data": {
    "result": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "price": 219.5,
        "rating": 4,
        "photo": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "price": 125.9,
        "rating": 3,
        "photo": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "price": 199.99,
        "rating": 5,
        "photo": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "price": 299.5,
        "rating": 5,
        "photo": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "price": 350,
        "rating": 5,
        "photo": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "price": 450,
        "rating": 2,
        "photo": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```

- We can also send multiple queries in one go. But it doesn't work if we don't use aliases for each query.

> Request

```graphql
{
  product(id: 1) {
    id
    name
    price
    stock
  }
  product(id: 2) {
    id
    name
    price
    stock
  }
}
```

> Response

```json
{
  "data": {
    "product": {
      "id": 1,
      "name": "Mountain Walkers",
      "price": 219.5,
      "stock": 12
    }
  }
}
```

> Request

```graphql
{
  p1: product(id: 1) {
    id
    name
    price
    stock
  }
  p2: product(id: 2) {
    id
    name
    price
    stock
  }
}
```

> Response

```json
{
  "data": {
    "p1": {
      "id": 1,
      "name": "Mountain Walkers",
      "price": 219.5,
      "stock": 12
    },
    "p2": {
      "id": 2,
      "name": "Army Slippers",
      "price": 125.9,
      "stock": 56
    }
  }
}
```

### 4.4 Fragments

- We can use `Fragments` as a base template of a query type that we want to execute many times.

> Request

```graphql
{
  p1: product(id: 1) {
    ...comparisonFields
  }
  p2: product(id: 2) {
    ...comparisonFields
  }
}

fragment comparisonFields on ProductType {
  id
  name
  price
  stock
}
```

> Response

```json
{
  "data": {
    "p1": {
      "id": 1,
      "name": "Mountain Walkers",
      "price": 219.5,
      "stock": 12
    },
    "p2": {
      "id": 2,
      "name": "Army Slippers",
      "price": 125.9,
      "stock": 56
    }
  }
}
```

### 4.5 Named Queries and Variables

- We can put a name to a query that doesn't affect the result

> Request

```graphql
query all {
  products {
    id
    name
    price
    rating
    photoFileName
  }
}
```

> Response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "price": 219.5,
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "price": 125.9,
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "price": 199.99,
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "price": 299.5,
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "price": 350,
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "price": 450,
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```

- We can add multiple queries in one go.

> Request

```graphql
query all {
  products {
    id
    name
    price
    rating
    photoFileName
  }
}

query p1 {
  product(id: 1) {
    id
    name
    price
    rating
    photoFileName
  }
}
```

- When we execute it, it asks which query we want to execute

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables2.png)

- It also works when we make an Http request, but we have to indicate which one we want to execute using `operationName`.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables3.png)

> request

```
POST /graphql HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 74977283-28e7-5aff-a235-ea850e70f552

{
	"query": "
		query all
		{ products {id name price rating photoFileName}

		}

		query p1
		{ product(id: 1) {id name price rating photoFileName}
		}",
	"operationName": "p1"
}
```

> Response

```json
{
  "data": {
    "product": {
      "id": 1,
      "name": "Mountain Walkers",
      "price": 219.5,
      "rating": 4,
      "photoFileName": "shutterstock_66842440.jpg"
    }
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables4.png)

- We can also use variables indicating the Type.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables5.png)

> Request

```graphql
query all {
  products {
    id
    name
    price
    rating
    photoFileName
  }
}

query product($productId: ID!) {
  product(id: $productId) {
    id
    name
    price
    rating
    photoFileName
  }
}
```

> variable

```json
{
  "productId": 1
}
```

> response

```json
{
  "data": {
    "product": {
      "id": 1,
      "name": "Mountain Walkers",
      "price": 219.5,
      "rating": 4,
      "photoFileName": "shutterstock_66842440.jpg"
    }
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables6.png)

- We can also use variables when submiting an Http request

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables7.png)

> request

```
POST /graphql HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 4655e269-fe2e-8631-4e28-3ff13a4f3d42

{
	"query": "
		query all
		{ products {id name price rating photoFileName}

		}

		query product($productId: ID!)
			{ product(id: $productId) {id name price rating photoFileName}
		}",
	"operationName": "product",
	"variables": { "productId": 1}
}
```

> response

```json
{
  "data": {
    "product": {
      "id": 1,
      "name": "Mountain Walkers",
      "price": 219.5,
      "rating": 4,
      "photoFileName": "shutterstock_66842440.jpg"
    }
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/NamedQueriesAndVariables8.png)

### 4.6 Directives

- `Directives` re used as decision makers in the queries

> Request

```graphql
query all($showPrice: Boolean!)
{ products 
  {
    id 
  	name 
    price @include(if: $showPrice)
    rating 
    photoFileName
  }
}
```

> variable

```json
{
  "showPrice": false
}
```

> response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```
> variable
```json
{
  "showPrice": true
}
```

> response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "price": 219.5,
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "price": 125.9,
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "price": 199.99,
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "price": 299.5,
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "price": 350,
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "price": 450,
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```

> Request

```graphql
query all($showPrice: Boolean=false)
{ products 
  {
    id 
  	name 
    price @include(if: $showPrice)
    rating 
    photoFileName
  }
}
```

> variable (empty)
```json
```

> response

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```
> Request

```graphql
query all($showPrice: Boolean=false)
{ products 
  {
    id 
  	name 
    price @skip(if: $showPrice)
    rating 
    photoFileName
  }
}
```

> variable (empty)
```json
```

> response
```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Mountain Walkers",
        "price": 219.5,
        "rating": 4,
        "photoFileName": "shutterstock_66842440.jpg"
      },
      {
        "id": 2,
        "name": "Army Slippers",
        "price": 125.9,
        "rating": 3,
        "photoFileName": "shutterstock_222721876.jpg"
      },
      {
        "id": 3,
        "name": "Backpack Deluxe",
        "price": 199.99,
        "rating": 5,
        "photoFileName": "shutterstock_6170527.jpg"
      },
      {
        "id": 4,
        "name": "Climbing Kit",
        "price": 299.5,
        "rating": 5,
        "photoFileName": "shutterstock_48040747.jpg"
      },
      {
        "id": 5,
        "name": "Blue Racer",
        "price": 350,
        "rating": 5,
        "photoFileName": "shutterstock_441989509.jpg"
      },
      {
        "id": 6,
        "name": "Orange Demon",
        "price": 450,
        "rating": 2,
        "photoFileName": "shutterstock_495259978.jpg"
      }
    ]
  }
}
```

### 4.7 Errors

> Request (with invalid i field)
```graphql
query all($showPrice: Boolean=false)
{ products 
  {
    i 
  	name 
    price @skip(if: $showPrice)
    rating 
    photoFileName
  }
}
```

> variable (empty)
```json
```

> response
```json
{
  "errors": [
    {
      "message": "Cannot query field \"i\" on type \"ProductType\".",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "extensions": {
        "code": "5.2.1"
      }
    }
  ]
}
```
- The error message contains the `message` of the error, the `locations` where the error occurs and some metadata information as `extensions`.

- There are the standard rules that the query shoul comply

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Errors.png)

- We can add additional rules

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Errors2.png)

- We can find more information about the custom validations on [Query Validation](https://graphql-dotnet.github.io/docs/getting-started/query-validation/)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Errors3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/Errors4.png)

### 4.8 An ASP.NET Core Client

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/AnAspNetCoreClient.png)

- Copy the `CarvedRock.Web` project from the `04` folder.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/AnAspNetCoreClient2.png)

- The `CarvedRock.sln` must be updated to include the new `project`

> CarvedRock.sln
```yaml
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 15
VisualStudioVersion = 15.0.27703.2035
MinimumVisualStudioVersion = 10.0.40219.1
Project("{9A19103F-16F7-4668-BE54-9A1E7A4F7556}") = "CarvedRock.Api", "CarvedRock.Api\CarvedRock.Api.csproj", "{81C7A112-94D5-40C7-B28A-2C2356E71B0E}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "CarvedRock.Web", "CarvedRock.Web\CarvedRock.Web.csproj", "{2D1BE822-9681-44CF-B456-C9506A1260F1}"
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
		Release|Any CPU = Release|Any CPU
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{81C7A112-94D5-40C7-B28A-2C2356E71B0E}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{81C7A112-94D5-40C7-B28A-2C2356E71B0E}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{81C7A112-94D5-40C7-B28A-2C2356E71B0E}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{81C7A112-94D5-40C7-B28A-2C2356E71B0E}.Release|Any CPU.Build.0 = Release|Any CPU
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
	GlobalSection(ExtensibilityGlobals) = postSolution
		SolutionGuid = {3596467E-00E0-4519-8FD6-11F3A4805E8D}
	EndGlobalSection
EndGlobal
```
- The project just have the `Home` Controller.

> Controllers/HomeController.cs
```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Clients;
using CarvedRock.Web.HttpClients;
using CarvedRock.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarvedRock.Web.Controllers
{
    public class HomeController: Controller
    {
        private readonly ProductHttpClient _httpClient;
        private readonly ProductGraphClient _productGraphClient;

        public HomeController(ProductHttpClient httpClient, 
            ProductGraphClient productGraphClient)
        {
            _httpClient = httpClient;
            _productGraphClient = productGraphClient;
        }


        public async Task<IActionResult> Index()
        {
            var responseModel = await _httpClient.GetProducts();
            responseModel.ThrowErrors();
            return View(responseModel.Data.Products);
        }

        public async Task<IActionResult> ProductDetail(int productId)
        {
            var product = await _productGraphClient.GetProduct(productId);
            return View(product);
        }

        public IActionResult AddReview(int productId)
        {
            return View(new ProductReviewModel {ProductId = productId});
        }

        [HttpPost]
        public async Task<IActionResult> AddReview(ProductReviewInputModel reviewModel)
        {
            await _productGraphClient.AddReview(reviewModel);
            return RedirectToAction("ProductDetail", new {productId = reviewModel.ProductId});
        }
    }
}
```

- The `ProductHttpClient` class has been created to manage the client request from the `Index` action. The `GetProducts` method makes a `Get request` using HttpClient class using a `GrpahQL query` and using `JsonConvert` to deserialize the response using the `ProductContainer` model. 

> Models/ProductModel.cs
```csharp
using System;
using System.Collections.Generic;

namespace CarvedRock.Web.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ProductTypeEnum Type { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int Rating { get; set; }
        public DateTimeOffset IntroducedAt { get; set; }
        public string PhotoFileName { get; set; }
        public List<ProductReviewModel> Reviews { get; set; }
    }
}
```

> Models/ErrorModel.cs
```csharp
namespace CarvedRock.Web.Models
{
    public class ErrorModel
    {
        public string Message { get; set; }
        public string Code { get; set; }
    }
}
```
- Apart from the `ProductsContainer` class, the `Models/Response.cs` document has a generic `Reponse` class with the `ThrowErrors` method used to manage the response errors. It is called from the `Actions` on the `Home` controllers.

> Models/Response.cs
```csharp
using System.Collections.Generic;
using System.Linq;

namespace CarvedRock.Web.Models
{

    public class Response<T>
    {
        public T Data { get; set; }
        public List<ErrorModel> Errors { get; set; }

        public void ThrowErrors()
        {
            if (Errors != null && Errors.Any())
                throw new GraphQlException(
                    $"Message: {Errors[0].Message} Code: {Errors[0].Code}");
        }
    }

    public class ProductsContainer
    {
        public List<ProductModel> Products { get; set; }
    }
}

```

> Clients/ProductHttpClient.cs
```csharp
using System.Net.Http;
using System.Threading.Tasks;
using CarvedRock.Web.Models;
using Newtonsoft.Json;

namespace CarvedRock.Web.HttpClients
{
    public class ProductHttpClient
    {
        private readonly HttpClient _httpClient;

        public ProductHttpClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<Response<ProductsContainer>> GetProducts()
        {
            var response = await _httpClient.GetAsync(@"?query= 
            { products 
                { id name price rating photoFileName } 
            }");
            var stringResult = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<Response<ProductsContainer>>(stringResult);
        }
    }
}

```

- The `HttpClient` is configured in the `Startup.cs` document setting the `url` using the `appsettings.json` document with the `Url` of the `Api GraphQL endpoint`.

> appsettings.json
```json
{
  "CarvedRockApiUri": "https://localhost:5001/graphql" 
}
```

> Startup.cs
```csharp
using System;
using CarvedRock.Web.Clients;
using CarvedRock.Web.HttpClients;
using GraphQL.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Web
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSingleton(t => new GraphQLClient(_config["CarvedRockApiUri"]));
            services.AddSingleton<ProductGraphClient>();
            services.AddHttpClient<ProductHttpClient>(o => o.BaseAddress = new Uri(_config["CarvedRockApiUri"]));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
```

### 4.9 Using GraphQL Client for .NET

- In order to use parameters, fragments, directives, generic errors we have to use the `GraphQL.Client Nuget` package.

> CarvedRock.Web.csproj
```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="GraphQL.Client" Version="1.0.3" />
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
    <PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="2.1.1" />
  </ItemGroup>

</Project>
```

- We have the `ProductGraphClient` class created to manage the `queries` with all the special attributes.

> Clients/ProductGraphClient.cs
```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Models;
using GraphQL.Client;
using GraphQL.Common.Request;
using Newtonsoft.Json;

namespace CarvedRock.Web.Clients
{
    public class ProductGraphClient
    {
        private readonly GraphQLClient _client;

        public ProductGraphClient(GraphQLClient client)
        {
            _client = client;
        }

        public async Task<ProductModel> GetProduct(int id)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                query productQuery($productId: ID!)
                { product(id: $productId) 
                    { id name price rating photoFileName description stock introducedAt 
                      reviews { title review }
                    }
                }",
                Variables = new {productId = id}
            };
            var response = await _client.PostAsync(query);
            return response.GetDataFieldAs<ProductModel>("product");
        }

        public async Task<ProductReviewModel> AddReview(ProductReviewInputModel review)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                mutation($review: reviewInput!)
                {
                    createReview(review: $review)
                    {
                        id
                    }
                }",
                Variables = new { review }
            };
            var response = await _client.PostAsync(query);
            return response.GetDataFieldAs<ProductReviewModel>("createReview");
        }
    }
}
```

- The `GraphQL client` amnd the class created must be also registered in the `Startup.cs` class.

> Startup.cs
```csharp
.
.
.
services.AddSingleton(t => new GraphQLClient(_config["CarvedRockApiUri"]));
services.AddSingleton<ProductGraphClient>();
.
.
.
```

- The `Home` controller has the `ProductDetail` action that uses the `GraphQL client`.

> Controllers/HomeController.cs
```csharp
.
.
.
public async Task<IActionResult> ProductDetail(int productId)
{
    var product = await _productGraphClient.GetProduct(productId);
    return View(product);
}
.
.
.
```

### 4.10 Using Apollo Client for JavaScript

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/UsingApolloClientForJavaScript.png)

- The `CarvedRock.Api/GraphQL/Types/CarvedRockQuery.cs` document will be updated to accept reviews for a product.

> CarvedRock.Api/GraphQL/Types/CarvedRockQuery.cs
```csharp
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockQuery: ObjectGraphType
    {
        public CarvedRockQuery(ProductRepository productRepository, ProductReviewRepository reviewRepository)
        {
            Field<ListGraphType<ProductType>>(
                "products", 
                resolve: context => productRepository.GetAll()
            );

            Field<ProductType>(
                "product",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> {Name = "id"}),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return productRepository.GetOne(id);
                }
            );

            Field<ListGraphType<ProductReviewType>>(
                "reviews",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> {Name = "productId"}),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("productId");
                    return reviewRepository.GetForProduct(id);
                });
        }
    }
}
```

- In the `Views/Home/ProductDetail.cshtml` will be included the `Apollo` client.

> Views/Home/ProductDetail.cshtml
```aspnet
@model CarvedRock.Web.Models.ProductModel
<div class="row">
    <div class="col-3">
        <img height="150" src="/Images/@Model.PhotoFileName" alt="Product image" />
    </div>
    <div class="col-9">
        <div class="row">
            <div class="col-12">
                <h3>@Model.Name</h3>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                @Model.Description
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-3">
                In store since: @Model.IntroducedAt.Year
            </div>
            <div class="col-3">
                Stock: @Model.Stock
            </div>
            <div class="col-3">
                Stars: @Model.Rating
            </div>
            <div class="col-3">
                Price: $@Model.Price
            </div>
        </div>
        <h6>Reviews:</h6>
        <ul></ul>
        @*@foreach (var review in Model.Reviews)
        {
            <div class="row">
                <div class="col-12"><h5>@review.Title</h5></div>
            </div>
            <div class="row mb-2">
                <div class="col-12">@review.Review</div>
            </div>
        }*@
        <div id="reviews"></div>
        <ul></ul>
        <a asp-action="AddReview" asp-route-productId="@Model.Id">Add a review</a>
    </div>
</div>
<script src="https://unpkg.com/apollo-client-browser@1.9.0"></script>
<script src="~/reviews.js"></script>
<script>
    renderReviews(@Model.Id);
</script>
```
3) The `wwwroot/reviews.js` document well be created to make a call to the `reviewsForProducts query` from JavaScript.

> wwwroot/reviews.js
```js
const apolloClient = new Apollo.lib.ApolloClient({
    networkInterface: Apollo.lib.createNetworkInterface({
        uri: 'https://localhost:5001/graphql'
    })
});

function renderReviews(productId) {
    const query = Apollo.gql`
    query reviewsForProducts($productId: ID!) 
    {

        reviews(productId: $productId) {
            title
            review
        }  
    }
    `;

    apolloClient
        .query({
            query: query,
            variables: { productId: productId }
        }).then(result => {
            const div = document.getElementById("reviews");
            result.data.reviews.forEach(review => {             
                div.innerHTML += `            
                    <div class="row">
                        <div class="col-12"><h5>${review.title}</h5></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12">${review.review}</div>
                    </div>`;
            });
        });
}
```
- In order to be able to call it from JavaScript we will need to configure Cors in the `Api StartUp.cs` document.

> StartUp.cs
```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));

            services.AddScoped<ProductRepository>();
            services.AddScoped<ProductReviewRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();
            services.AddSingleton<ReviewMessageService>();

            services.AddGraphQL(o => { o.ExposeExceptions = _env.IsDevelopment(); })
                .AddGraphTypes(ServiceLifetime.Scoped).AddUserContextBuilder(httpContext => httpContext.User)
                .AddDataLoader()
                .AddWebSockets();

            services.AddCors();
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseCors(builder =>
                builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseWebSockets();
            app.UseGraphQLWebSockets<CarvedRockSchema>("/graphql");
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

### 4.11 Summary

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ConsumingAGraphQLApiSummary.png)

- In order to test if the solution works we have to run the `Api` in one terminal.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api
$ dotnet run
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (17ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5001/graphql?query=%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20products%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20id%20name%20price%20rating%20photoFileName%20%7D%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (27ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [p].[Id], [p].[Description], [p].[IntroducedAt], [p].[Name], [p].[PhotoFileName], [p].[Price], [p].[Rating], [p].[Stock], [p].[Type]
      FROM [Products] AS [p]
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 1573.4738ms 200 application/json
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 POST https://localhost:5001/graphql application/json; charset=utf-8 351
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (145ms) [Parameters=[@__id_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
      SELECT TOP(2) [p].[Id], [p].[Description], [p].[IntroducedAt], [p].[Name], [p].[PhotoFileName], [p].[Price], [p].[Rating], [p].[Stock], [p].[Type]
      FROM [Products] AS [p]
      WHERE [p].[Id] = @__id_0
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (29ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT [pr].[Id], [pr].[ProductId], [pr].[Review], [pr].[Title]
      FROM [ProductReviews] AS [pr]
      WHERE [pr].[ProductId] IN (1)
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 619.8238ms 200 application/json
```

- We need to run the `Web` in another terminal

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Web
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web
Now listening on: https://localhost:5002
Application started. Press Ctrl+C to shut down.
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Route matched with {action = "Index", controller = "Home"}. Executing action CarvedRock.Web.Controllers.HomeController.Index (CarvedRock.Web)
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Executing action method CarvedRock.Web.Controllers.HomeController.Index (CarvedRock.Web) - Validation state: Valid
info: System.Net.Http.HttpClient.ProductHttpClient.LogicalHandler[100]
      Start processing HTTP request GET https://localhost:5001/graphql?query=
                  { products
                      { id name price rating photoFileName }
                  }
info: System.Net.Http.HttpClient.ProductHttpClient.ClientHandler[100]
      Sending HTTP request GET https://localhost:5001/graphql?query=
                  { products
                      { id name price rating photoFileName }
                  }
info: System.Net.Http.HttpClient.ProductHttpClient.ClientHandler[101]
      Received HTTP response after 2169.399ms - OK
info: System.Net.Http.HttpClient.ProductHttpClient.LogicalHandler[101]
      End processing HTTP request after 2176.8739ms - OK
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action method CarvedRock.Web.Controllers.HomeController.Index (CarvedRock.Web), returned result Microsoft.AspNetCore.Mvc.ViewResult in 2375.792ms.
info: Microsoft.AspNetCore.Mvc.ViewFeatures.ViewResultExecutor[1]
      Executing ViewResult, running view Index.
info: Microsoft.AspNetCore.Mvc.ViewFeatures.ViewResultExecutor[4]
      Executed ViewResult - view Index executed in 286.2657ms.
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action CarvedRock.Web.Controllers.HomeController.Index (CarvedRock.Web) in 2752.2023ms
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/carved-rock-logo.png
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/bootstrap.min.css
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/shutterstock_66842440.jpg
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 3348.038ms 200 text/html; charset=utf-8
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/carvedrock.css
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/carved-rock-logo.png'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\carved-rock-logo.png'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 47.7353ms 200 image/png
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/carvedrock.css'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\carvedrock.css'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 33.9162ms 200 text/css
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/bootstrap.min.css'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\bootstrap.min.css'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 77.1757ms 200 text/css
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/shutterstock_222721876.jpg
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/shutterstock_6170527.jpg
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/shutterstock_48040747.jpg
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/shutterstock_441989509.jpg
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Images/shutterstock_495259978.jpg
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/shutterstock_48040747.jpg'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\shutterstock_48040747.jpg'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 58.3366ms 200 image/jpeg
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/shutterstock_441989509.jpg'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\shutterstock_441989509.jpg'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 92.3036ms 200 image/jpeg
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/shutterstock_66842440.jpg'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\shutterstock_66842440.jpg'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 3057.0157ms 200 image/jpeg
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/shutterstock_6170527.jpg'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\shutterstock_6170527.jpg'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 1806.8826ms 200 image/jpeg
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/shutterstock_222721876.jpg'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\shutterstock_222721876.jpg'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 1882.8486ms 200 image/jpeg
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/Images/shutterstock_495259978.jpg'. Physical path: 'C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\wwwroot\Images\shutterstock_495259978.jpg'
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 1824.2995ms 200 image/jpeg
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/favicon.ico
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 2.2598ms 404
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET https://localhost:5002/Home/ProductDetail?productId=1
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Route matched with {action = "ProductDetail", controller = "Home"}. Executing action CarvedRock.Web.Controllers.HomeController.ProductDetail (CarvedRock.Web)
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Executing action method CarvedRock.Web.Controllers.HomeController.ProductDetail (CarvedRock.Web) with arguments (1) - Validation state: Valid
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action method CarvedRock.Web.Controllers.HomeController.ProductDetail (CarvedRock.Web), returned result Microsoft.AspNetCore.Mvc.ViewResult in
933.7869ms.
info: Microsoft.AspNetCore.Mvc.ViewFeatures.ViewResultExecutor[1]
      Executing ViewResult, running view ProductDetail.
info: Microsoft.AspNetCore.Mvc.ViewFeatures.ViewResultExecutor[4]
      Executed ViewResult - view ProductDetail executed in 23.6771ms.
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[2]
      Executed action CarvedRock.Web.Controllers.HomeController.ProductDetail (CarvedRock.Web) in 1012.1305ms
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[2]
      Request finished in 1054.1124ms 200 text/html; charset=utf-8
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ConsumingAGraphQLApiSummary2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ConsumingAGraphQLApiSummary3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ConsumingAGraphQLApiSummary4.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/ConsumingAGraphQLApiSummary5.png)

## 5. Mutating Data with GraphQL

### 5.1 Introduction

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/MutatingDataWithGraphQLIntroduction.png)

### 5.2 Enhancing the Schema

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/EnhancingTheSchema.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/EnhancingTheSchema2.png)

### 5.3 The Input Type

- We need to create the `GraphQL/Types/ProductReviewInputType.cs` document where the `reviewInput` input is created. The `ProductReviewInputType` derived from `InputObjectGraphType`.

> GraphQL/Types/ProductReviewInputType.cs
```csharp
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductReviewInputType: InputObjectGraphType
    {
        public ProductReviewInputType()
        {
            Name = "reviewInput";
            Field<NonNullGraphType<StringGraphType>>("title");
            Field<StringGraphType>("review");
            Field<NonNullGraphType<IntGraphType>>("productId");
        }
    }
}
```

### 5.4 The Mutation

- We need to create `GraphQL/CarvedRockMutation.cs` document where the `CarvedRockMutation` mutation is created. It derives from the same `ObjectGraphType` as the queries do.

> GraphQL/CarvedRockMutation.cs
```csharp
using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockMutation : ObjectGraphType
    {
        public CarvedRockMutation(ProductReviewRepository reviewRepository)
        {
            FieldAsync<ProductReviewType>(
                "createReview",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<ProductReviewInputType>> {Name = "review"}), 
                resolve: async context =>
                {
                    var review = context.GetArgument<ProductReview>("review");
                    return await context.TryAsyncResolve(
                        async c => await reviewRepository.AddReview(review));
                });
        }
    }
}
```
- We need to update the `Repositories/ProductReviewRepository.cs` to include the `AddReview` method.

> Repositories/ProductReviewRepository.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarvedRock.Api.Data;
using CarvedRock.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarvedRock.Api.Repositories
{
    public class ProductReviewRepository
    {
        private readonly CarvedRockDbContext _dbContext;

        public ProductReviewRepository(CarvedRockDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ProductReview>> GetForProduct(int productId)
        {
            return await _dbContext.ProductReviews.Where(pr => pr.ProductId == productId).ToListAsync();
        }

        public async Task<ILookup<int, ProductReview>> GetForProducts(IEnumerable<int> productIds)
        {
            var reviews = await _dbContext.ProductReviews.Where(pr => productIds.Contains(pr.ProductId)).ToListAsync();
            return reviews.ToLookup(r => r.ProductId);
        }

        public async Task<ProductReview> AddReview(ProductReview review)
        {
            _dbContext.ProductReviews.Add(review);
            await _dbContext.SaveChangesAsync();
            return review;
        }
    }
}
```

### 5.5 Adding a Mutation to the Schema

- We don't need to do any extra configuration in the `Startup.cs` document because we are already including all GraphQl types with `AddGraphTypes`.

> Startup.cs
```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));

            services.AddScoped<ProductRepository>();
            services.AddScoped<ProductReviewRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();

            services.AddGraphQL(o => { o.ExposeExceptions = false; })
                .AddGraphTypes(ServiceLifetime.Scoped)
                .AddDataLoader();
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

- We have to modify the `GraphQL/CarvedRockSchema.cs` document to icnlude the Mutation.

> GraphQL/CarvedRockSchema.cs
```csharp
using GraphQL;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockSchema: Schema
    {
        public CarvedRockSchema(IDependencyResolver resolver): base(resolver)
        {
            Query = resolver.Resolve<CarvedRockQuery>();
            Mutation = resolver.Resolve<CarvedRockMutation>();
        }
    }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/AddingAMutationToTheSchema.png)

### 5.6 Writing a Query That Uses a Mutation

> Request
```graphql
mutation ($review: reviewInput!) {
  createReview(review: $review) {id title}
}
```

> Variable
```json
{
  "review": {
    "title":  "This is awesome!",
  	"productId":  1
  }
}
```

> Response
```json
{
  "data": {
    "createReview": {
      "id": 10,
      "title": "This is awesome!"
    }
  }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WritingAQueryThatUsesAMutation.png)

- If we omit the `id` an error is thrown

> Variable
```json
{
  "review": {
    "title":  "This is awesome!"
  }
}
```

> Response
```json
{
  "errors": [
    {
      "message": "Variable '$review.productId' is invalid. Received a null input for a non-null field.",
      "extensions": {
        "code": "INVALID_VALUE"
      }
    }
  ]
}
```

### 5.7 Mutations in Clients

- The `Clients/ProductGraphClient.cs` document must be modified to include the `AddReview` method used to make a call to the new `createReview` mutation. We need the `Models/ProductReviewInputModel.cs` document with the `ProductReviewInputModel` used to populated the request mutation properties. We also need the `Models/ProductReviewModel.cs` used to populated the response mutation properties.

> Models/ProductReviewInputModel.cs
```csharp
namespace CarvedRock.Web.Models
{
    public class ProductReviewInputModel
    {
        public int ProductId { get; set; }
        public string Title { get; set; }
        public string Review { get; set; }
    }
}
```

> Models/ProductReviewModel.cs
```csharp
namespace CarvedRock.Web.Models
{
    public class ProductReviewModel
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string Title { get; set; }
        public string Review { get; set; }
    }
}
```

> Clients/ProductGraphClient.cs
```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Models;
using GraphQL.Client;
using GraphQL.Common.Request;
using Newtonsoft.Json;

namespace CarvedRock.Web.Clients
{
    public class ProductGraphClient
    {
        private readonly GraphQLClient _client;

        public ProductGraphClient(GraphQLClient client)
        {
            _client = client;
        }

        public async Task<ProductModel> GetProduct(int id)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                query productQuery($productId: ID!)
                { product(id: $productId) 
                    { id name price rating photoFileName description stock introducedAt 
                      reviews { title review }
                    }
                }",
                Variables = new {productId = id}
            };
            var response = await _client.PostAsync(query);
            return response.GetDataFieldAs<ProductModel>("product");
        }

        public async Task<ProductReviewModel> AddReview(ProductReviewInputModel review)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                mutation($review: reviewInput!)
                {
                    createReview(review: $review)
                    {
                        id
                    }
                }",
                Variables = new { review }
            };
            var response = await _client.PostAsync(query);
            return response.GetDataFieldAs<ProductReviewModel>("createReview");
        }
    }
}
```

- The `Home` controller has been updated to include the new `AddReview` action.

> Controllers/HomeController.cs
```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Clients;
using CarvedRock.Web.HttpClients;
using CarvedRock.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarvedRock.Web.Controllers
{
    public class HomeController: Controller
    {
        private readonly ProductHttpClient _httpClient;
        private readonly ProductGraphClient _productGraphClient;

        public HomeController(ProductHttpClient httpClient, 
            ProductGraphClient productGraphClient)
        {
            _httpClient = httpClient;
            _productGraphClient = productGraphClient;
        }


        public async Task<IActionResult> Index()
        {
            var responseModel = await _httpClient.GetProducts();
            responseModel.ThrowErrors();
            return View(responseModel.Data.Products);
        }

        public async Task<IActionResult> ProductDetail(int productId)
        {
            var product = await _productGraphClient.GetProduct(productId);
            return View(product);
        }

        public IActionResult AddReview(int productId)
        {
            return View(new ProductReviewModel {ProductId = productId});
        }

        [HttpPost]
        public async Task<IActionResult> AddReview(ProductReviewInputModel reviewModel)
        {
            await _productGraphClient.AddReview(reviewModel);
            return RedirectToAction("ProductDetail", new {productId = reviewModel.ProductId});
        }
    }
}
```

- The `Views/Home/ProductDetail.cshtml` document has been updated to include a link to the new `AddReview` action.

> Views/Home/ProductDetail.cshtml
```aspnet
@model CarvedRock.Web.Models.ProductModel
<div class="row">
    <div class="col-3">
        <img height="150" src="/Images/@Model.PhotoFileName" alt="Product image" />
    </div>
    <div class="col-9">
        <div class="row">
            <div class="col-12">
                <h3>@Model.Name</h3>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                @Model.Description
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-3">
                In store since: @Model.IntroducedAt.Year
            </div>
            <div class="col-3">
                Stock: @Model.Stock
            </div>
            <div class="col-3">
                Stars: @Model.Rating
            </div>
            <div class="col-3">
                Price: $@Model.Price
            </div>
        </div>
        <h6>Reviews:</h6>
        <ul></ul>
        @foreach (var review in Model.Reviews)
        {
            <div class="row">
                <div class="col-12"><h5>@review.Title</h5></div>
            </div>
            <div class="row mb-2">
                <div class="col-12">@review.Review</div>
            </div>
        }
        <ul></ul>
        <a asp-action="AddReview" asp-route-productId="@Model.Id">Add a review</a>
    </div>
</div>
```
- We can test now how the `Web` works.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api (master)
$ dotnet run
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (16ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Web (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web
Now listening on: https://localhost:5002
Application started. Press Ctrl+C to shut down.
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/MutationsInClients.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/MutationsInClients2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/MutationsInClients3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/MutationsInClients4.png)

### 5.8 Summary

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/MutatingDataWithGraphQLSummary.png)

## 6. Working with Subscriptions

### 6.1 Introduction

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WorkingWithSubscriptionsIntroduction.png)

### 6.2 Subscriptions Explained

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsExplained.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsExplained2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsExplained3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsExplained4.png)

### 6.3 Adding a Subscription to the Schema

- we need to add the new `GraphQL/Messaging` folder with the `ReviewAddedMessage.cs` and `ReviewMessageService.cs` documents.

> GraphQL/Messaging/ReviewAddedMessage.cs
```csharp
namespace CarvedRock.Api.GraphQL.Messaging
{
    public class ReviewAddedMessage
    {
        public int ProductId { get; set; }
        public string Title { get; set; }
    }
}

```
- The `OnNext` method send the message to all subscribers.

> GraphQL/Messaging/ReviewMessageService.cs
```csharp
using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.GraphQL.Messaging;
using System;
using System.Reactive.Linq;
using System.Reactive.Subjects;

namespace CarvedRock.Api
{
    public class ReviewMessageService
    {
        private readonly ISubject<ReviewAddedMessage> _messageStream = new ReplaySubject<ReviewAddedMessage>(1);

        public ReviewAddedMessage AddReviewAddedMessage(ProductReview review)
        {
            var message = new ReviewAddedMessage
            {
                ProductId = review.ProductId,
                Title = review.Title
            };
            _messageStream.OnNext(message);
            return message;
        }

        public IObservable<ReviewAddedMessage> GetMessages()
        {
            return _messageStream.AsObservable();
        }
    }
}
```
- Thew new `GraphQL/CarvedRockSubscription.cs` along with the `GraphQL/Types/ReviewAddedMessageType.cs` documents have to be created.

> GraphQL/Types/ReviewAddedMessageType.cs
```csharp
using CarvedRock.Api.GraphQL.Messaging;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ReviewAddedMessageType: ObjectGraphType<ReviewAddedMessage>
    {
        public ReviewAddedMessageType()
        {
            Field(t => t.ProductId);
            Field(t => t.Title);
        }
    }
}
```

> GraphQL/CarvedRockSubscription.cs
```csharp
using CarvedRock.Api.GraphQL.Messaging;
using CarvedRock.Api.GraphQL.Types;
using GraphQL.Resolvers;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockSubscription: ObjectGraphType
    {
        public CarvedRockSubscription(ReviewMessageService messageService)
        {
            Name = "Subscription";
            AddField(new EventStreamFieldType
            {
                Name = "reviewAdded",
                Type = typeof(ReviewAddedMessageType),
                Resolver = new FuncFieldResolver<ReviewAddedMessage>(c => c.Source as ReviewAddedMessage),
                Subscriber = new EventStreamResolver<ReviewAddedMessage>(c => messageService.GetMessages())
            });
        }
    }
}
```

- We finally need to add the subscription to the schema modifying the `GraphQL/CarvedRockSchema.cs` document.

> GraphQL/CarvedRockSchema.cs
```csharp
using GraphQL;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockSchema : Schema
    {
        public CarvedRockSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<CarvedRockQuery>();
            Mutation = resolver.Resolve<CarvedRockMutation>();
            Subscription = resolver.Resolve<CarvedRockSubscription>();
        }
    }
}
```

### 6.4 Configuring ASP.NET Core

- We need to add the `GraphQL.Server.Transports.WebSockets` Nuget package.

> GraphQL.Server.Transports.WebSockets
```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <Folder Include="wwwroot\" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="GraphQL" Version="2.3.0" />
    <PackageReference Include="GraphQL.Server.Transports.AspNetCore" Version="3.2.0" />
    <PackageReference Include="GraphQL.Server.Transports.WebSockets" Version="3.2.0" />
    <PackageReference Include="GraphQL.Server.Ui.Playground" Version="3.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
  </ItemGroup>

</Project>
```

- The `ReviewMessageService` class must be registered in the `Startup.cs` document as `Singleton` becase we need it keeps alive. Also, the the use of `Web Sockets` must be added as well.

> Startup.cs
```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));

            services.AddScoped<ProductRepository>();
            services.AddScoped<ProductReviewRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();
            services.AddSingleton<ReviewMessageService>();

            services.AddGraphQL(o => { o.ExposeExceptions = _env.IsDevelopment(); })
                .AddGraphTypes(ServiceLifetime.Scoped).AddUserContextBuilder(httpContext => httpContext.User)
                .AddDataLoader()
                .AddWebSockets();

            services.AddCors();
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseCors(builder =>
                builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseWebSockets();
            app.UseGraphQLWebSockets<CarvedRockSchema>("/graphql");
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

- We need to modify the `GrpahQL/CarvedRockMutation.cs` document to add the call to the `AddReviewAddedMessage` method when the review is created.

> GrpahQL/CarvedRockMutation.cs
```csharp
using CarvedRock.Api.Data.Entities;
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockMutation : ObjectGraphType
    {
        public CarvedRockMutation(ProductReviewRepository reviewRepository, ReviewMessageService messageService)
        {
            FieldAsync<ProductReviewType>(
                "createReview",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<ProductReviewInputType>> {Name = "review"}), 
               
                resolve: async context =>
                {
                    var review = context.GetArgument<ProductReview>("review");
                    await reviewRepository.AddReview(review);
                    messageService.AddReviewAddedMessage(review);
                    return review;
                });
        }
    }
}
```

### 6.5 Subscriptions in Clients

- Run the `API` project to ensure the subscription is working properly.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Api (master)
$ dotnet run
info: Microsoft.EntityFrameworkCore.Infrastructure[10403]
      Entity Framework Core 2.1.4-rtm-31024 initialized 'CarvedRockDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (75ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      SELECT CASE
          WHEN EXISTS (
              SELECT 1
              FROM [Products] AS [p])
          THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT)
      END
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Api
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

- We need first to create a subscription query

> Request
```graphql
subscription {
  reviewAdded {
    productId
    title
  }
}
```

- When we run the `Playground UI` it waits in `listening` mode.

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients.png)

- We have to execute the `Web` project to make a revision.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Web (master)
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\juan.pablo.perez\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web
Now listening on: https://localhost:5002
Application started. Press Ctrl+C to shut down.
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients2.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients3.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients4.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients5.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients6.png)

> Response
```json
{
  "data": {
    "reviewAdded": {
      "productId": 2,
      "title": "I would never wear them."
    }
  }
}
```

- In order to use subscriptions in the client we need a `GraphQL.Client` 2.0.0 or newer version

> CarvedRock.Web.csproj
```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="GraphQL.Client" Version="2.0.0-alpha.3" />
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
    <PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="2.1.1" />
  </ItemGroup>

</Project>
```

- We need to modify the `Clients/ProductGraphClient.cs` to subscribe to revision updates.

```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Models;
using GraphQL.Client;
using GraphQL.Common.Request;
using GraphQL.Common.Response;
using Newtonsoft.Json;

namespace CarvedRock.Web.Clients
{
    public class ProductGraphClient
    {
        private readonly GraphQLClient _client;

        public ProductGraphClient(GraphQLClient client)
        {
            _client = client;
        }

        public async Task<ProductModel> GetProduct(int id)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                query productQuery($productId: ID!)
                { product(id: $productId) 
                    { id name price rating photoFileName description stock introducedAt 
                      reviews { title review }
                    }
                }",
                Variables = new {productId = id}
            };
            var response = await _client.PostAsync(query);
            return response.GetDataFieldAs<ProductModel>("product");
        }

        public async Task AddReview(ProductReviewModel review)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                mutation($review: reviewInput!)
                {
                    createReview(review: $review)
                    {
                        id
                    }
                }",
                Variables = new { review }
            };
            var response = await _client.PostAsync(query);
            var reviewReturned = response.GetDataFieldAs<ProductReviewModel>("createReview");
        }

        public async Task SubscribeToUpdates()
        {
            var result = await _client.SendSubscribeAsync("subscription { reviewAdded { title productId } }");
            result.OnReceive += Receive;
        }

        private void Receive(GraphQLResponse resp)
        {
            var review = resp.Data["reviewAdded"];
        }
    }
}
```

- We need to modify the `Home` controller to call the `SubscribeToUpdates` method created previously.

> Controllers/HomeController.cs
```csharp
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/building-graphql-apis-aspdotnet-core/CarvedRock.Web (master)
$ dotnet run
Clients\ProductGraphClient.cs(15,35): warning CS0618: 'GraphQLClient' is obsolete: 'Use GraphQLHttpClient directly' [C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\CarvedRock.Web.csproj]
Clients\ProductGraphClient.cs(13,26): warning CS0618: 'GraphQLClient' is obsolete: 'Use GraphQLHttpClient directly' [C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\CarvedRock.Web.csproj]
Clients\ProductGraphClient.cs(57,32): warning CS0618: 'GraphQLHttpClient.SendSubscribeAsync(string, CancellationToken)' is obsolete: 'EXPERIMENTAL API' [C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\CarvedRock.Web.csproj]
Startup.cs(23,44): warning CS0618: 'GraphQLClient' is obsolete: 'Use GraphQLHttpClient directly' [C:\Work\Training\Pre\GraphQL\building-graphql-apis-aspdotnet-core\CarvedRock.Web\CarvedRock.Web.csproj]
```

- We need to modify `CarvedRock.Web/Startup.cs` to use `GraphQLHttpClient` instead of `GraphQLClient`

> CarvedRock.Web/Startup.cs
```csharp
using System;
using CarvedRock.Web.Clients;
using CarvedRock.Web.HttpClients;
using GraphQL.Client.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Web
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSingleton(t => new GraphQLHttpClient(_config["CarvedRockApiUri"]));
            services.AddSingleton<ProductGraphClient>();
            services.AddHttpClient<ProductHttpClient>(o => o.BaseAddress = new Uri(_config["CarvedRockApiUri"]));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
```

- We need to modify `CarvedRock.Web/Clients/ProductGraphClient.cs` to use `GraphQLHttpClient` instead of `GraphQLClient`

> CarvedRock.Web/Clients/ProductGraphClient.cs
```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Models;
using GraphQL.Common.Request;
using GraphQL.Common.Response;
using GraphQL.Client.Http;

namespace CarvedRock.Web.Clients
{
    public class ProductGraphClient
    {
        private readonly GraphQLHttpClient _client;

        public ProductGraphClient(GraphQLHttpClient client)
        {
            _client = client;
        }

        public async Task<ProductModel> GetProduct(int id)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                query productQuery($productId: ID!)
                { product(id: $productId) 
                    { id name price rating photoFileName description stock introducedAt 
                      reviews { title review }
                    }
                }",
                Variables = new { productId = id }
            };
            var response = await _client.SendQueryAsync(query);
            return response.GetDataFieldAs<ProductModel>("product");
        }

        public async Task AddReview(ProductReviewInputModel review)
        {
            var query = new GraphQLRequest
            {
                Query = @" 
                mutation($review: reviewInput!)
                {
                    createReview(review: $review)
                    {
                        id
                    }
                }",
                Variables = new { review }
            };
            var response = await _client.SendQueryAsync(query);
            if (response != null)
            {
                var reviewReturned = response.GetDataFieldAs<ProductReviewModel>("createReview");
            }
        }

        public async Task SubscribeToUpdates()
        {
            var result = await _client.SendSubscribeAsync("subscription { reviewAdded { title productId } }");
            result.OnReceive += Receive;
        }

        private void Receive(GraphQLResponse resp)
        {
            var review = resp.Data["reviewAdded"];
        }
    }
}
```

- We need to modify `CarvedRock.Web/Controllers/HomeController.cs` to use `GraphQLHttpClient` instead of `GraphQLClient`

> CarvedRock.Web/Controllers/HomeController.cs
```csharp
using System.Threading.Tasks;
using CarvedRock.Web.Clients;
using CarvedRock.Web.HttpClients;
using CarvedRock.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarvedRock.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ProductHttpClient _httpClient;
        private readonly ProductGraphClient _productGraphClient;

        public HomeController(ProductHttpClient httpClient, ProductGraphClient productGraphClient)
        {
            _httpClient = httpClient;
            _productGraphClient = productGraphClient;
        }


        public async Task<IActionResult> Index()
        {
            var responseModel = await _httpClient.GetProducts();
            responseModel.ThrowErrors();
            return View(responseModel.Data.Products);
        }

        public async Task<IActionResult> ProductDetail(int productId)
        {
            await _productGraphClient.SubscribeToUpdates();
            var product = await _productGraphClient.GetProduct(productId);
            return View(product);
        }

        public IActionResult AddReview(int productId)
        {
            return View(new ProductReviewModel { ProductId = productId });
        }

        [HttpPost]
        public async Task<IActionResult> AddReview(ProductReviewInputModel reviewModel)
        {
            await _productGraphClient.AddReview(reviewModel);
            return RedirectToAction("ProductDetail", new { productId = reviewModel.ProductId });
        }
    }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients7.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients8.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients9.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients10.png)

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients11.png)

- In order to use Apollo we need:

1) The `CarvedRock.Api/GraphQL/Types/CarvedRockQuery.cs` document must be updated to accept reviews for a product.

> CarvedRock.Api/GraphQL/Types/CarvedRockQuery.cs
```csharp
using CarvedRock.Api.GraphQL.Types;
using CarvedRock.Api.Repositories;
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL
{
    public class CarvedRockQuery : ObjectGraphType
    {
        public CarvedRockQuery(ProductRepository productRepository, ProductReviewRepository reviewRepository)
        {
            Field<ListGraphType<ProductType>>(
                "products",
                resolve: context => productRepository.GetAll()
            );

            Field<ProductType>(
                "product",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>>
                { Name = "id" }),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return productRepository.GetOne(id);
                }
            );

            Field<ListGraphType<ProductReviewType>>(
                "reviews",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> {Name = "productId"}),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("productId");
                    return reviewRepository.GetForProduct(id);
                });            
        }
    }
}
```

2) In the `Views/Home/ProductDetail.cshtml` we need to include the `Apollo` client.

> Views/Home/ProductDetail.cshtml
```aspnet
@model CarvedRock.Web.Models.ProductModel
<div class="row">
    <div class="col-3">
        <img height="150" src="/Images/@Model.PhotoFileName" alt="Product image" />
    </div>
    <div class="col-9">
        <div class="row">
            <div class="col-12">
                <h3>@Model.Name</h3>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                @Model.Description
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-3">
                In store since: @Model.IntroducedAt.Year
            </div>
            <div class="col-3">
                Stock: @Model.Stock
            </div>
            <div class="col-3">
                Stars: @Model.Rating
            </div>
            <div class="col-3">
                Price: $@Model.Price
            </div>
        </div>
        <h6>Reviews:</h6>
        <ul></ul>
        @*@foreach (var review in Model.Reviews)
        {
            <div class="row">
                <div class="col-12"><h5>@review.Title</h5></div>
            </div>
            <div class="row mb-2">
                <div class="col-12">@review.Review</div>
            </div>
        }*@
        <div id="reviews"></div>
        <ul></ul>
        <a asp-action="AddReview" asp-route-productId="@Model.Id">Add a review</a>
    </div>
</div>
<script src="https://unpkg.com/apollo-client-browser@1.9.0"></script>
<script src="~/reviews.js"></script>
<script>
    renderReviews(@Model.Id);
</script>
```

3) The `wwwroot/reviews.js` document must be created to make a call to the `reviewsForProducts query` from JavaScript.

> wwwroot/reviews.js
```js
const apolloClient = new Apollo.lib.ApolloClient({
    networkInterface: Apollo.lib.createNetworkInterface({
        uri: 'https://localhost:5001/graphql'
    })
});

function renderReviews(productId) {
    const query = Apollo.gql`
    query reviewsForProducts($productId: ID!) 
    {

        reviews(productId: $productId) {
            title
            review
        }  
    }
    `;

    apolloClient
        .query({
            query: query,
            variables: { productId: productId }
        }).then(result => {
            const div = document.getElementById("reviews");
            result.data.reviews.forEach(review => {             
                div.innerHTML += `            
                    <div class="row">
                        <div class="col-12"><h5>${review.title}</h5></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12">${review.review}</div>
                    </div>`;
            });
        });
}
```

4) In order to be able to call it from JavaScript we need to configure Cors in the `Api StartUp.cs` document.

> StartUp.cs
```csharp
using CarvedRock.Api.Data;
using CarvedRock.Api.GraphQL;
using CarvedRock.Api.Repositories;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarvedRock.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CarvedRockDbContext>(options =>
                options.UseSqlServer(_config["ConnectionStrings:CarvedRock"]));

            services.AddScoped<ProductRepository>();
            services.AddScoped<ProductReviewRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<CarvedRockSchema>();
            services.AddSingleton<ReviewMessageService>();

            services.AddGraphQL(o => { o.ExposeExceptions = _env.IsDevelopment(); })
                .AddGraphTypes(ServiceLifetime.Scoped).AddUserContextBuilder(httpContext => httpContext.User)
                .AddDataLoader()
                .AddWebSockets();

            services.AddCors();
        }

        public void Configure(IApplicationBuilder app, CarvedRockDbContext dbContext)
        {
            app.UseCors(builder =>
                builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseWebSockets();
            app.UseGraphQLWebSockets<CarvedRockSchema>("/graphql");
            app.UseGraphQL<CarvedRockSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
            dbContext.Seed();
        }
    }
}
```

5) We need to modify the `GraphQL/Types/ProductReviewInputType.cs` document to include the 'id` field.

> GraphQL/Types/ProductReviewInputType.cs
```csharp
using GraphQL.Types;

namespace CarvedRock.Api.GraphQL.Types
{
    public class ProductReviewInputType: InputObjectGraphType
    {
        public ProductReviewInputType()
        {
            Name = "reviewInput";
            Field<IdGraphType>("id");
            Field<NonNullGraphType<StringGraphType>>("title");
            Field<StringGraphType>("review");
            Field<NonNullGraphType<IntGraphType>>("productId");
        }
    }
}
```

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/SubscriptionsInClients12.png)

### 6.6 Summary

![](/images/other/graphql-building-graphql-apis-aspdotnet-core/WorkingWithSubscriptionsSummary.png)

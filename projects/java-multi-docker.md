# Java version of the "Docker and Kubernetes: The Complete Guide" Udemy course 

> Github Repositories
- [java-multi-docker](https://github.com/peelmicro/java-multi-docker).

Source code for the `Java` version of the [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/docker-and-kubernetes-the-complete-guide) Udemy course

Within the code you can see how to:
- Create different Docker Container Types and relate all of them:
1. React Client App
2. .NET Core Web API
3. .NET Core Console
4. Postgres
5. Redis
6. NGINX
- Use Postgres from a Docker Container with Java
- Use Redis from a Docker Container with Java creating a subscription on the Web API App and - subscribe to it on the Console App.
- Accept dynamic POST request with Java Spring Framework Web API
- Send dynamic JSON responses from Java Spring Framework Web API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with Java Spring Framework Web API
- Work with different AWS Amazon service types to deploy a multi-container Docker application using AWS Elastic Beanstalk
- Upload own Containers to Docker Hub and download them with the deployment
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

## Create the server project using Visual Studio Code

1. Add the needed VS Code extensions

As it's explain on [Spring Boot in Visual Studio Code](https://code.visualstudio.com/docs/java/java-spring-boot), we need to install:

* [Spring Boot Tools](https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-spring-boot)

![](/images/projects/java-multi-docker/VsCodeExtensions1.png)

* [Spring Initializr Java Support](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr)

![](/images/projects/java-multi-docker/VsCodeExtension2.png)

2. Create a new project using the [Spring Initializr](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr) extension

Open the command Palette (`Ctrl+Shift+P`) and search and select `Spring Initialzr: Generate a Maven Project` 

![](/images/projects/java-multi-docker/SpringInitialzr1.png)

Select `Java`  

![](/images/projects/java-multi-docker/SpringInitialzr2.png)

Enter **com.peelmicro** for the `Group Id`  

![](/images/projects/java-multi-docker/SpringInitialzr3.png)

Enter **server** for the `Artifact Id`  

![](/images/projects/java-multi-docker/SpringInitialzr4.png)

Put **2.1.0** for the `Spring Boot Version`  

![](/images/projects/java-multi-docker/SpringInitialzr5.png)

Select **Web** for `dependencies`  

![](/images/projects/java-multi-docker/SpringInitialzr6.png)

Select **the parent folder** where the project folder and files are going to be created:

![](/images/projects/java-multi-docker/SpringInitialzr7.png)

Once it's generated, a Windows popup is shown confirming it was **Succesfully generated** with the used location.

![](/images/projects/java-multi-docker/SpringInitialzr8.png)

The new project can be opened on a new Visual Studio Code Window.
![](/images/projects/java-multi-docker/SpringInitialzr9.png)

3. Check the generated documents 

![](/images/projects/java-multi-docker/GeneratedDocuments1.png)

`DemoApplication.java`
```java
package com.peelmicro.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
```
`pom.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.peelmicro</groupId>
	<artifactId>server</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>demo</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.0.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>


</project>
```
4. Ensure the project compiles with success

From the terminal windows put the following command:
`mvn install`
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server$ mvn install[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------< com.peelmicro:server >------------------------
[INFO] Building demo 0.0.1-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO]
[INFO] --- maven-resources-plugin:3.1.0:resources (default-resources) @ server ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 1 resource
[INFO] Copying 0 resource
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:compile (default-compile) @ server ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 1 source file to C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\classes
[INFO]
[INFO] --- maven-resources-plugin:3.1.0:testResources (default-testResources) @ server ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\src\test\resources
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:testCompile (default-testCompile) @ server ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 1 source file to C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\test-classes
[INFO]
[INFO] --- maven-surefire-plugin:2.22.1:test (default-test) @ server ---
[INFO]
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.peelmicro.server.DemoApplicationTests
17:38:55.287 [main] DEBUG org.springframework.test.context.junit4.SpringJUnit4ClassRunner - SpringJUnit4ClassRunner constructor called with [class com.peelmicro.server.DemoApplicationTests]
17:38:55.297 [main] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating CacheAwareContextLoaderDelegate from class [org.springframework.test.context.cache.DefaultCacheAwareContextLoaderDelegate]
17:38:55.324 [main] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating BootstrapContext using constructor [public org.springframework.test.context.support.DefaultBootstrapContext(java.lang.Class,org.springframework.test.context.CacheAwareContextLoaderDelegate)]
17:38:55.370 [main] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating TestContextBootstrapper for test class [com.peelmicro.server.DemoApplicationTests] from class [org.springframework.boot.test.context.SpringBootTestContextBootstrapper]
17:38:55.414 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Neither @ContextConfiguration nor @ContextHierarchy found for test class [com.peelmicro.server.DemoApplicationTests], using SpringBootContextLoader
17:38:55.421 [main] DEBUG org.springframework.test.context.support.AbstractContextLoader - Did not detect default resource location for test class [com.peelmicro.server.DemoApplicationTests]: class path resource [com/peelmicro/server/DemoApplicationTests-context.xml] does not exist
17:38:55.422 [main] DEBUG org.springframework.test.context.support.AbstractContextLoader - Did not detect default resource location for test class [com.peelmicro.server.DemoApplicationTests]: class path resource [com/peelmicro/server/DemoApplicationTestsContext.groovy] does not exist
17:38:55.422 [main] INFO org.springframework.test.context.support.AbstractContextLoader - Could not detect default resource locations for test class [com.peelmicro.server.DemoApplicationTests]: no resource found for suffixes {-context.xml, Context.groovy}.
17:38:55.423 [main] INFO org.springframework.test.context.support.AnnotationConfigContextLoaderUtils - Could not detect default configuration classes for test class [com.peelmicro.server.DemoApplicationTests]: DemoApplicationTests does not declare any static, non-private, non-final, nested classes annotated with @Configuration.
17:38:55.538 [main] DEBUG org.springframework.test.context.support.ActiveProfilesUtils - Could not find an 'annotation declaring class' for annotation type [org.springframework.test.context.ActiveProfiles] and class [com.peelmicro.server.DemoApplicationTests]
17:38:55.699 [main] DEBUG org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider - Identified candidate component class: file [C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\classes\com\peelmicro\server\DemoApplication.class]
17:38:55.707 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Found @SpringBootConfiguration com.peelmicro.server.DemoApplication for test class com.peelmicro.server.DemoApplicationTests
17:38:55.872 [main] DEBUG org.springframework.boot.test.context.SpringBootTestContextBootstrapper - @TestExecutionListeners is not present for class [com.peelmicro.server.DemoApplicationTests]: using defaults.
17:38:55.874 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Loaded default TestExecutionListener class names from location [META-INF/spring.factories]: [org.springframework.boot.test.mock.mockito.MockitoTestExecutionListener, org.springframework.boot.test.mock.mockito.ResetMocksTestExecutionListener, org.springframework.boot.test.autoconfigure.restdocs.RestDocsTestExecutionListener, org.springframework.boot.test.autoconfigure.web.client.MockRestServiceServerResetTestExecutionListener, org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrintOnlyOnFailureTestExecutionListener, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverTestExecutionListener, org.springframework.test.context.web.ServletTestExecutionListener, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener, org.springframework.test.context.support.DependencyInjectionTestExecutionListener, org.springframework.test.context.support.DirtiesContextTestExecutionListener, org.springframework.test.context.transaction.TransactionalTestExecutionListener, org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener]
17:38:55.977 [main] DEBUG org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Skipping candidate TestExecutionListener [org.springframework.test.context.transaction.TransactionalTestExecutionListener] due to a missing dependency. Specify custom listener classes or make the default listener classes and their required dependencies available. Offending class: [org/springframework/transaction/interceptor/TransactionAttributeSource]
17:38:55.981 [main] DEBUG org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Skipping candidate TestExecutionListener [org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener] due to a missing dependency. Specify custom listener classes or make the default listener classes and their required dependencies available. Offending class: [org/springframework/transaction/interceptor/TransactionAttribute]
17:38:55.982 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Using TestExecutionListeners: [org.springframework.test.context.web.ServletTestExecutionListener@4802796d, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener@34123d65, org.springframework.boot.test.mock.mockito.MockitoTestExecutionListener@59474f18, org.springframework.boot.test.autoconfigure.SpringBootDependencyInjectionTestExecutionListener@65fb9ffc, org.springframework.test.context.support.DirtiesContextTestExecutionListener@3e694b3f, org.springframework.boot.test.mock.mockito.ResetMocksTestExecutionListener@1bb5a082, org.springframework.boot.test.autoconfigure.restdocs.RestDocsTestExecutionListener@78691363, org.springframework.boot.test.autoconfigure.web.client.MockRestServiceServerResetTestExecutionListener@41d477ed, org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrintOnlyOnFailureTestExecutionListener@3590fc5b, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverTestExecutionListener@397fbdb]
17:38:55.988 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
17:38:55.990 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
17:38:55.999 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
17:38:55.999 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
17:38:56.014 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
17:38:56.014 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
17:38:56.034 [main] DEBUG org.springframework.test.context.support.AbstractDirtiesContextTestExecutionListener - Before test class: context [DefaultTestContext@36ebc363 testClass = DemoApplicationTests, testInstance = [null], testMethod = [null], testException = [null], mergedContextConfiguration = [WebMergedContextConfiguration@45752059 testClass = DemoApplicationTests, locations = '{}', classes = '{class com.peelmicro.server.DemoApplication}', contextInitializerClasses = '[]', activeProfiles = '{}', propertySourceLocations = '{}', propertySourceProperties = '{org.springframework.boot.test.context.SpringBootTestContextBootstrapper=true}', contextCustomizers = set[org.springframework.boot.test.context.filter.ExcludeFilterContextCustomizer@727803de, org.springframework.boot.test.json.DuplicateJsonObjectContextCustomizerFactory$DuplicateJsonObjectContextCustomizer@16f7c8c1, org.springframework.boot.test.mock.mockito.MockitoContextCustomizer@0, org.springframework.boot.test.web.client.TestRestTemplateContextCustomizer@6d3af739, org.springframework.boot.test.autoconfigure.properties.PropertyMappingContextCustomizer@0, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverContextCustomizerFactory$Customizer@57f23557], resourceBasePath = 'src/main/webapp', contextLoader = 'org.springframework.boot.test.context.SpringBootContextLoader', parent = [null]], attributes = map['org.springframework.test.context.web.ServletTestExecutionListener.activateListener' -> true]], class annotated with @DirtiesContext [false] with mode [null].
17:38:56.037 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
17:38:56.040 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
17:38:56.137 [main] DEBUG org.springframework.test.context.support.TestPropertySourceUtils - Adding inlined properties to environment: {spring.jmx.enabled=false, org.springframework.boot.test.context.SpringBootTestContextBootstrapper=true, server.port=-1}

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.0.RELEASE)

2018-11-16 17:38:56.848  INFO 8668 --- [           main] c.peelmicro.server.DemoApplicationTests  : Starting DemoApplicationTests on RIMDUB-0232 with PID 8668 (started by Juan.Pablo.Perez in C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server)
2018-11-16 17:38:56.849  INFO 8668 --- [           main] c.peelmicro.server.DemoApplicationTests  : No active profile set, falling back to default profiles: default
2018-11-16 17:38:59.909  INFO 8668 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2018-11-16 17:39:00.656  INFO 8668 --- [           main] c.peelmicro.server.DemoApplicationTests  : Started DemoApplicationTests in 4.487 seconds (JVM running for 6.434)
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 6.433 s - in com.peelmicro.server.DemoApplicationTests
2018-11-16 17:39:01.198  INFO 8668 --- [       Thread-2] o.s.s.concurrent.ThreadPoolTaskExecutor  : Shutting down ExecutorService 'applicationTaskExecutor'
[INFO]
[INFO] Results:
[INFO]
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO]
[INFO] --- maven-jar-plugin:3.1.0:jar (default-jar) @ server ---
[INFO] Building jar: C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar
[INFO]
[INFO] --- spring-boot-maven-plugin:2.1.0.RELEASE:repackage (repackage) @ server ---
[INFO] Replacing main artifact C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar
[INFO]
[INFO] --- maven-install-plugin:2.5.2:install (default-install) @ server ---
[INFO] Installing C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar to C:\Users\juan.pablo.perez\.m2\repository\com\peelmicro\server\0.0.1-SNAPSHOT\server-0.0.1-SNAPSHOT.jar
[INFO] Installing C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\pom.xml to C:\Users\juan.pablo.perez\.m2\repository\com\peelmicro\server\0.0.1-SNAPSHOT\server-0.0.1-SNAPSHOT.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 18.336 s
[INFO] Finished at: 2018-11-16T17:39:04Z
[INFO] ------------------------------------------------------------------------
```
5. Ensure we can run it with the following command:  
`java -cp target/server-0.0.1-SNAPSHOT.jar` 

```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ java -jar target/server-0.0.1-SNAPSHOT.jar com.peelmicro.App

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.0.RELEASE)

2018-11-16 17:52:47.935  INFO 69736 --- [           main] com.peelmicro.server.DemoApplication     : Starting DemoApplication v0.0.1-SNAPSHOT on RIMDUB-0232 with PID 69736 (C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar started by Juan.Pablo.Perez in C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server)
2018-11-16 17:52:47.944  INFO 69736 --- [           main] com.peelmicro.server.DemoApplication     : No active profile set, falling back to default profiles: default
2018-11-16 17:52:51.463  INFO 69736 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2018-11-16 17:52:51.542  INFO 69736 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2018-11-16 17:52:51.550  INFO 69736 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/9.0.12
2018-11-16 17:52:51.573  INFO 69736 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [C:\Program Files\Java\jdk1.8.0_171\bin;C:\WINDOWS\Sun\Java\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\Program Files\Git\mingw64\bin;C:\Program Files\Git\usr\bin;C:\Users\juan.pablo.perez\bin;C:\Program Files\Docker\Docker\Resources\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0;C:\WINDOWS\System32\OpenSSH;C:\Program Files\OpenVPN\bin;C:\Program Files\Git\cmd;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\130\Tools\Binn;C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn;C:\Program Files\Microsoft SQL Server\140\Tools\Binn;C:\Program Files\Microsoft SQL Server\140\DTS\Binn;C:\Program Files (x86)\Microsoft SQL Server\Client SDK\ODBC\130\Tools\Binn;C:\Program Files (x86)\Microsoft SQL Server\140\DTS\Binn;C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio;C:\Program Files\dotnet;C:\Program Files\Microsoft SQL Server\130\Tools\Binn;C:\Program Files\nodejs;C:\Program Files (x86)\Yarn\bin;C:\Program Files\Java\jdk1.8.0_171\bin;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Program Files\MongoDB\Server\4.0\bin;C:\Program Files (x86)\dotnet;C:\Program Files (x86)\LINQPad5;C:\Program Files\Redis;C:\Users\juan.pablo.perez\AppData\Local\Programs\Python\Python37\Scripts;C:\Users\juan.pablo.perez\AppData\Local\Programs\Python\Python37;C:\Users\juan.pablo.perez\AppData\Local\Microsoft\WindowsApps;C:\Program Files\Microsoft VS Code\bin;C:\Users\juan.pablo.perez\AppData\Local\Programs\Fiddler;C:\Tools\apache-maven-3.5.4\bin;C:\Tools\gradle\bin;C:\Users\juan.pablo.perez\AppData\Roaming\npm;C:\Users\juan.pablo.perez\.dotnet\tools;C:\Users\juan.pablo.perez\AppData\Local\Yarn\bin;C:\Program Files\MySQL\MySQL Server 8.0\bin;C:\Users\juan.pablo.perez\AppData\Local\Programs\Microsoft VS Code\bin;C:\Tools\Desklock+;C:\Program Files\PostgreSQL\10\bin;.]
2018-11-16 17:52:51.892  INFO 69736 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2018-11-16 17:52:51.931  INFO 69736 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 3902 ms
2018-11-16 17:52:52.041  INFO 69736 --- [           main] o.s.b.w.servlet.ServletRegistrationBean  : Servlet dispatcherServlet mapped to [/]
2018-11-16 17:52:52.057  INFO 69736 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'characterEncodingFilter' to: [/*]
2018-11-16 17:52:52.061  INFO 69736 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
2018-11-16 17:52:52.063  INFO 69736 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'formContentFilter' to: [/*]
2018-11-16 17:52:52.064  INFO 69736 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'requestContextFilter' to: [/*]
2018-11-16 17:52:52.412  INFO 69736 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2018-11-16 17:52:52.895  INFO 69736 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2018-11-16 17:52:52.901  INFO 69736 --- [           main] com.peelmicro.server.DemoApplication     : Started DemoApplication in 5.836 seconds (JVM running for 6.854)
```
The last command should contain something like `Started DemoApplication in`

6. Modify the main class and add a new Controller class.

As it is explained on [Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/) the DemoApplication class will be changed to show some information on the console and to create a controler to show some information on the Web.

`DemoApplication.java`  
```java
package com.peelmicro.server;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
			return args -> {

					System.out.println("Let's inspect the beans provided by Spring Boot:");

					String[] beanNames = ctx.getBeanDefinitionNames();
					Arrays.sort(beanNames);
					for (String beanName : beanNames) {
							System.out.println(beanName);
					}

			};
	}	
}
```
The class can be created on the same folder  

![](/images/projects/java-multi-docker/DemoController.png)

`DemoController.java`
```java
package com.peelmicro.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class DemoController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
```

7. Ensure both console and web messages are working properly
* Execute the command `mvn package && java -jar target/server-0.0.1-SNAPSHOT.jar`
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ mvn package && java -jar target/server-0.0.1-SNAPSHOT.jar
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------< com.peelmicro:server >------------------------
[INFO] Building demo 0.0.1-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO]
[INFO] --- maven-resources-plugin:3.1.0:resources (default-resources) @ server ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 1 resource
[INFO] Copying 0 resource
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:compile (default-compile) @ server ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 2 source files to C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\classes
[INFO]
[INFO] --- maven-resources-plugin:3.1.0:testResources (default-testResources) @ server ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\src\test\resources
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:testCompile (default-testCompile) @ server ---
[INFO] Nothing to compile - all classes are up to date
[INFO]
[INFO] --- maven-surefire-plugin:2.22.1:test (default-test) @ server ---
[INFO]
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.peelmicro.server.DemoApplicationTests
18:19:14.714 [main] DEBUG org.springframework.test.context.junit4.SpringJUnit4ClassRunner - SpringJUnit4ClassRunner constructor called with [class com.peelmicro.server.DemoApplicationTests]
18:19:14.730 [main] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating CacheAwareContextLoaderDelegate from class [org.springframework.test.context.cache.DefaultCacheAwareContextLoaderDelegate]
18:19:14.758 [main] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating BootstrapContext using constructor [public org.springframework.test.context.support.DefaultBootstrapContext(java.lang.Class,org.springframework.test.context.CacheAwareContextLoaderDelegate)]
18:19:14.833 [main] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating TestContextBootstrapper for test class [com.peelmicro.server.DemoApplicationTests] from class [org.springframework.boot.test.context.SpringBootTestContextBootstrapper]
18:19:14.912 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Neither @ContextConfiguration nor @ContextHierarchy found for test class [com.peelmicro.server.DemoApplicationTests], using SpringBootContextLoader
18:19:14.920 [main] DEBUG org.springframework.test.context.support.AbstractContextLoader - Did not detect default resource location for test class [com.peelmicro.server.DemoApplicationTests]: class path resource [com/peelmicro/server/DemoApplicationTests-context.xml] does not exist
18:19:14.921 [main] DEBUG org.springframework.test.context.support.AbstractContextLoader - Did not detect default resource location for test class [com.peelmicro.server.DemoApplicationTests]: class path resource [com/peelmicro/server/DemoApplicationTestsContext.groovy] does not exist
18:19:14.922 [main] INFO org.springframework.test.context.support.AbstractContextLoader - Could not detect default resource locations for test class [com.peelmicro.server.DemoApplicationTests]: no resource found for suffixes {-context.xml, Context.groovy}.
18:19:14.929 [main] INFO org.springframework.test.context.support.AnnotationConfigContextLoaderUtils - Could not detect default configuration classes for test class [com.peelmicro.server.DemoApplicationTests]: DemoApplicationTests does not declare any static, non-private, non-final, nested classes annotated with @Configuration.
18:19:15.108 [main] DEBUG org.springframework.test.context.support.ActiveProfilesUtils - Could not find an 'annotation declaring class' for annotation type [org.springframework.test.context.ActiveProfiles] and class [com.peelmicro.server.DemoApplicationTests]
18:19:15.466 [main] DEBUG org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider - Identified candidate component class: file [C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\classes\com\peelmicro\server\DemoApplication.class]
18:19:15.522 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Found @SpringBootConfiguration com.peelmicro.server.DemoApplication for test class com.peelmicro.server.DemoApplicationTests
18:19:15.860 [main] DEBUG org.springframework.boot.test.context.SpringBootTestContextBootstrapper - @TestExecutionListeners is not present for class [com.peelmicro.server.DemoApplicationTests]: using defaults.
18:19:15.862 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Loaded default TestExecutionListener class names from location [META-INF/spring.factories]: [org.springframework.boot.test.mock.mockito.MockitoTestExecutionListener, org.springframework.boot.test.mock.mockito.ResetMocksTestExecutionListener, org.springframework.boot.test.autoconfigure.restdocs.RestDocsTestExecutionListener, org.springframework.boot.test.autoconfigure.web.client.MockRestServiceServerResetTestExecutionListener, org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrintOnlyOnFailureTestExecutionListener, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverTestExecutionListener, org.springframework.test.context.web.ServletTestExecutionListener, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener, org.springframework.test.context.support.DependencyInjectionTestExecutionListener, org.springframework.test.context.support.DirtiesContextTestExecutionListener, org.springframework.test.context.transaction.TransactionalTestExecutionListener, org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener]
18:19:15.926 [main] DEBUG org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Skipping candidate TestExecutionListener [org.springframework.test.context.transaction.TransactionalTestExecutionListener] due to a missing dependency. Specify custom listener classes or make the default listener classes and their required dependencies available. Offending class: [org/springframework/transaction/interceptor/TransactionAttributeSource]
18:19:15.928 [main] DEBUG org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Skipping candidate TestExecutionListener [org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener] due to a missing dependency. Specify custom listener classes or make the default listener classes and their required dependencies available. Offending class: [org/springframework/transaction/interceptor/TransactionAttribute]
18:19:15.929 [main] INFO org.springframework.boot.test.context.SpringBootTestContextBootstrapper - Using TestExecutionListeners: [org.springframework.test.context.web.ServletTestExecutionListener@776aec5c, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener@1d296da, org.springframework.boot.test.mock.mockito.MockitoTestExecutionListener@7c7a06ec, org.springframework.boot.test.autoconfigure.SpringBootDependencyInjectionTestExecutionListener@75d4a5c2, org.springframework.test.context.support.DirtiesContextTestExecutionListener@557caf28, org.springframework.boot.test.mock.mockito.ResetMocksTestExecutionListener@408d971b, org.springframework.boot.test.autoconfigure.restdocs.RestDocsTestExecutionListener@6c6cb480, org.springframework.boot.test.autoconfigure.web.client.MockRestServiceServerResetTestExecutionListener@3c46e67a, org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrintOnlyOnFailureTestExecutionListener@c730b35, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverTestExecutionListener@206a70ef]
18:19:15.942 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
18:19:15.989 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
18:19:15.994 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
18:19:15.994 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
18:19:15.995 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
18:19:15.996 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
18:19:16.008 [main] DEBUG org.springframework.test.context.support.AbstractDirtiesContextTestExecutionListener - Before test class: context [DefaultTestContext@139982de testClass = DemoApplicationTests, testInstance = [null], testMethod = [null], testException = [null], mergedContextConfiguration = [WebMergedContextConfiguration@682b2fa testClass = DemoApplicationTests, locations = '{}', classes = '{class com.peelmicro.server.DemoApplication}', contextInitializerClasses = '[]', activeProfiles = '{}', propertySourceLocations = '{}', propertySourceProperties = '{org.springframework.boot.test.context.SpringBootTestContextBootstrapper=true}', contextCustomizers = set[org.springframework.boot.test.context.filter.ExcludeFilterContextCustomizer@704921a5, org.springframework.boot.test.json.DuplicateJsonObjectContextCustomizerFactory$DuplicateJsonObjectContextCustomizer@2f0a87b3, org.springframework.boot.test.mock.mockito.MockitoContextCustomizer@0, org.springframework.boot.test.web.client.TestRestTemplateContextCustomizer@1da51a35, org.springframework.boot.test.autoconfigure.properties.PropertyMappingContextCustomizer@0, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverContextCustomizerFactory$Customizer@3d0f8e03], resourceBasePath = 'src/main/webapp', contextLoader
= 'org.springframework.boot.test.context.SpringBootContextLoader', parent = [null]], attributes = map['org.springframework.test.context.web.ServletTestExecutionListener.activateListener' -> true]], class annotated with @DirtiesContext [false] with mode [null].
18:19:16.011 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved @ProfileValueSourceConfiguration [null] for test class [com.peelmicro.server.DemoApplicationTests]
18:19:16.012 [main] DEBUG org.springframework.test.annotation.ProfileValueUtils - Retrieved ProfileValueSource type [class org.springframework.test.annotation.SystemProfileValueSource]
for class [com.peelmicro.server.DemoApplicationTests]
18:19:16.125 [main] DEBUG org.springframework.test.context.support.TestPropertySourceUtils - Adding inlined properties to environment: {spring.jmx.enabled=false, org.springframework.boot.test.context.SpringBootTestContextBootstrapper=true, server.port=-1}

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.0.RELEASE)

2018-11-16 18:19:17.087  INFO 12408 --- [           main] c.peelmicro.server.DemoApplicationTests  : Starting DemoApplicationTests on RIMDUB-0232 with PID 12408 (started by Juan.Pablo.Perez in C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server)
2018-11-16 18:19:17.089  INFO 12408 --- [           main] c.peelmicro.server.DemoApplicationTests  : No active profile set, falling back to default profiles: default
2018-11-16 18:19:22.839  INFO 12408 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2018-11-16 18:19:24.245  INFO 12408 --- [           main] c.peelmicro.server.DemoApplicationTests  : Started DemoApplicationTests in 8.093 seconds (JVM running for 11.217)
Let's inspect the beans provided by Spring Boot:
applicationTaskExecutor
basicErrorController
beanNameHandlerMapping
beanNameViewResolver
characterEncodingFilter
commandLineRunner
conventionErrorViewResolver
defaultServletHandlerMapping
defaultValidator
defaultViewResolver
demoApplication
demoController
dispatcherServlet
dispatcherServletRegistration
error
errorAttributes
errorPageCustomizer
errorPageRegistrarBeanPostProcessor
faviconHandlerMapping
faviconRequestHandler
formContentFilter
handlerExceptionResolver
hiddenHttpMethodFilter
httpRequestHandlerAdapter
jacksonCodecCustomizer
jacksonObjectMapper
jacksonObjectMapperBuilder
jsonComponentModule
localeCharsetMappingsCustomizer
loggingCodecCustomizer
mappingJackson2HttpMessageConverter
messageConverters
methodValidationPostProcessor
multipartConfigElement
multipartResolver
mvcContentNegotiationManager
mvcConversionService
mvcHandlerMappingIntrospector
mvcPathMatcher
mvcResourceUrlProvider
mvcUriComponentsContributor
mvcUrlPathHelper
mvcValidator
mvcViewResolver
org.springframework.boot.autoconfigure.AutoConfigurationPackages
org.springframework.boot.autoconfigure.condition.BeanTypeRegistry
org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration
org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration$StringHttpMessageConverterConfiguration
org.springframework.boot.autoconfigure.http.JacksonHttpMessageConvertersConfiguration
org.springframework.boot.autoconfigure.http.JacksonHttpMessageConvertersConfiguration$MappingJackson2HttpMessageConverterConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$JacksonCodecConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$LoggingCodecConfiguration
org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration
org.springframework.boot.autoconfigure.internalCachingMetadataReaderFactory
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$Jackson2ObjectMapperBuilderCustomizerConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperBuilderConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$ParameterNamesModuleConfiguration
org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration
org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration
org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration$TomcatWebServerFactoryCustomizerConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration$DispatcherServletConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration$DispatcherServletRegistrationConfiguration
org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryConfiguration$EmbeddedTomcat
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$EnableWebMvcConfiguration
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter$FaviconConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration$DefaultErrorViewResolverConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration$TomcatWebSocketConfiguration
org.springframework.boot.context.properties.ConfigurationBeanFactoryMetadata
org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor
org.springframework.boot.test.mock.mockito.MockitoPostProcessor
org.springframework.boot.test.mock.mockito.MockitoPostProcessor$SpyPostProcessor
org.springframework.context.annotation.internalAutowiredAnnotationProcessor
org.springframework.context.annotation.internalCommonAnnotationProcessor
org.springframework.context.annotation.internalConfigurationAnnotationProcessor
org.springframework.context.event.internalEventListenerFactory
org.springframework.context.event.internalEventListenerProcessor
parameterNamesModule
preserveErrorControllerTargetClassPostProcessor
propertySourcesPlaceholderConfigurer
requestContextFilter
requestMappingHandlerAdapter
requestMappingHandlerMapping
resourceHandlerMapping
restTemplateBuilder
server-org.springframework.boot.autoconfigure.web.ServerProperties
servletWebServerFactoryCustomizer
simpleControllerHandlerAdapter
spring.http-org.springframework.boot.autoconfigure.http.HttpProperties
spring.info-org.springframework.boot.autoconfigure.info.ProjectInfoProperties
spring.jackson-org.springframework.boot.autoconfigure.jackson.JacksonProperties
spring.mvc-org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties
spring.resources-org.springframework.boot.autoconfigure.web.ResourceProperties
spring.servlet.multipart-org.springframework.boot.autoconfigure.web.servlet.MultipartProperties
spring.task.execution-org.springframework.boot.autoconfigure.task.TaskExecutionProperties
spring.task.scheduling-org.springframework.boot.autoconfigure.task.TaskSchedulingProperties
standardJacksonObjectMapperBuilderCustomizer
stringHttpMessageConverter
taskExecutorBuilder
taskSchedulerBuilder
tomcatServletWebServerFactory
tomcatServletWebServerFactoryCustomizer
tomcatWebServerFactoryCustomizer
viewControllerHandlerMapping
viewResolver
webServerFactoryCustomizerBeanPostProcessor
websocketServletWebServerCustomizer
welcomePageHandlerMapping
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 14.613 s - in com.peelmicro.server.DemoApplicationTests
2018-11-16 18:19:28.578  INFO 12408 --- [       Thread-2] o.s.s.concurrent.ThreadPoolTaskExecutor  : Shutting down ExecutorService 'applicationTaskExecutor'
[INFO]
[INFO] Results:
[INFO]
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO]
[INFO] --- maven-jar-plugin:3.1.0:jar (default-jar) @ server ---
[INFO] Building jar: C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar
[INFO]
[INFO] --- spring-boot-maven-plugin:2.1.0.RELEASE:repackage (repackage) @ server ---
[INFO] Replacing main artifact C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 36.305 s
[INFO] Finished at: 2018-11-16T18:19:33Z
[INFO] ------------------------------------------------------------------------

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.0.RELEASE)

2018-11-16 18:19:36.425  INFO 36144 --- [           main] com.peelmicro.server.DemoApplication     : Starting DemoApplication v0.0.1-SNAPSHOT on RIMDUB-0232 with PID 36144 (C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server\target\server-0.0.1-SNAPSHOT.jar started by Juan.Pablo.Perez in C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\server)
2018-11-16 18:19:36.446  INFO 36144 --- [           main] com.peelmicro.server.DemoApplication     : No active profile set, falling back to default profiles: default
2018-11-16 18:19:41.187  INFO 36144 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2018-11-16 18:19:41.257  INFO 36144 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2018-11-16 18:19:41.284  INFO 36144 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/9.0.12
2018-11-16 18:19:41.319  INFO 36144 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [C:\Program Files\Java\jdk1.8.0_171\bin;C:\WINDOWS\Sun\Java\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\Program Files\Git\mingw64\bin;C:\Program Files\Git\usr\bin;C:\Users\juan.pablo.perez\bin;C:\Program Files\Docker\Docker\Resources\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0;C:\WINDOWS\System32\OpenSSH;C:\Program Files\OpenVPN\bin;C:\Program Files\Git\cmd;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\130\Tools\Binn;C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn;C:\Program Files\Microsoft SQL Server\140\Tools\Binn;C:\Program Files\Microsoft SQL Server\140\DTS\Binn;C:\Program Files (x86)\Microsoft SQL Server\Client SDK\ODBC\130\Tools\Binn;C:\Program Files (x86)\Microsoft SQL Server\140\DTS\Binn;C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio;C:\Program Files\dotnet;C:\Program Files\Microsoft SQL Server\130\Tools\Binn;C:\Program Files\nodejs;C:\Program Files (x86)\Yarn\bin;C:\Program Files\Java\jdk1.8.0_171\bin;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Program Files\MongoDB\Server\4.0\bin;C:\Program Files (x86)\dotnet;C:\Program Files (x86)\LINQPad5;C:\Program Files\Redis;C:\Users\juan.pablo.perez\AppData\Local\Programs\Python\Python37\Scripts;C:\Users\juan.pablo.perez\AppData\Local\Programs\Python\Python37;C:\Users\juan.pablo.perez\AppData\Local\Microsoft\WindowsApps;C:\Program Files\Microsoft VS Code\bin;C:\Users\juan.pablo.perez\AppData\Local\Programs\Fiddler;C:\Tools\apache-maven-3.5.4\bin;C:\Tools\gradle\bin;C:\Users\juan.pablo.perez\AppData\Roaming\npm;C:\Users\juan.pablo.perez\.dotnet\tools;C:\Users\juan.pablo.perez\AppData\Local\Yarn\bin;C:\Program Files\MySQL\MySQL Server 8.0\bin;C:\Users\juan.pablo.perez\AppData\Local\Programs\Microsoft VS Code\bin;C:\Tools\Desklock+;C:\Program Files\PostgreSQL\10\bin;.]
2018-11-16 18:19:41.952  INFO 36144 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2018-11-16 18:19:41.955  INFO 36144 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 5111 ms
2018-11-16 18:19:42.078  INFO 36144 --- [           main] o.s.b.w.servlet.ServletRegistrationBean  : Servlet dispatcherServlet mapped to [/]
2018-11-16 18:19:42.098  INFO 36144 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'characterEncodingFilter' to: [/*]
2018-11-16 18:19:42.119  INFO 36144 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
2018-11-16 18:19:42.131  INFO 36144 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'formContentFilter' to: [/*]
2018-11-16 18:19:42.134  INFO 36144 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'requestContextFilter' to: [/*]
2018-11-16 18:19:42.637  INFO 36144 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2018-11-16 18:19:43.488  INFO 36144 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2018-11-16 18:19:43.495  INFO 36144 --- [           main] com.peelmicro.server.DemoApplication     : Started DemoApplication in 8.65 seconds (JVM running for 9.885)
Let's inspect the beans provided by Spring Boot:
applicationTaskExecutor
basicErrorController
beanNameHandlerMapping
beanNameViewResolver
characterEncodingFilter
commandLineRunner
conventionErrorViewResolver
defaultServletHandlerMapping
defaultValidator
defaultViewResolver
demoApplication
demoController
dispatcherServlet
dispatcherServletRegistration
error
errorAttributes
errorPageCustomizer
errorPageRegistrarBeanPostProcessor
faviconHandlerMapping
faviconRequestHandler
formContentFilter
handlerExceptionResolver
hiddenHttpMethodFilter
httpRequestHandlerAdapter
jacksonCodecCustomizer
jacksonObjectMapper
jacksonObjectMapperBuilder
jsonComponentModule
localeCharsetMappingsCustomizer
loggingCodecCustomizer
mappingJackson2HttpMessageConverter
mbeanExporter
mbeanServer
messageConverters
methodValidationPostProcessor
multipartConfigElement
multipartResolver
mvcContentNegotiationManager
mvcConversionService
mvcHandlerMappingIntrospector
mvcPathMatcher
mvcResourceUrlProvider
mvcUriComponentsContributor
mvcUrlPathHelper
mvcValidator
mvcViewResolver
objectNamingStrategy
org.springframework.boot.autoconfigure.AutoConfigurationPackages
org.springframework.boot.autoconfigure.condition.BeanTypeRegistry
org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration
org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration$StringHttpMessageConverterConfiguration
org.springframework.boot.autoconfigure.http.JacksonHttpMessageConvertersConfiguration
org.springframework.boot.autoconfigure.http.JacksonHttpMessageConvertersConfiguration$MappingJackson2HttpMessageConverterConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$JacksonCodecConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$LoggingCodecConfiguration
org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration
org.springframework.boot.autoconfigure.internalCachingMetadataReaderFactory
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$Jackson2ObjectMapperBuilderCustomizerConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperBuilderConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$ParameterNamesModuleConfiguration
org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration
org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration
org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration
org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration$TomcatWebServerFactoryCustomizerConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration$DispatcherServletConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration$DispatcherServletRegistrationConfiguration
org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryConfiguration$EmbeddedTomcat
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$EnableWebMvcConfiguration
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter$FaviconConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration$DefaultErrorViewResolverConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration$TomcatWebSocketConfiguration
org.springframework.boot.context.properties.ConfigurationBeanFactoryMetadata
org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor
org.springframework.context.annotation.internalAutowiredAnnotationProcessor
org.springframework.context.annotation.internalCommonAnnotationProcessor
org.springframework.context.annotation.internalConfigurationAnnotationProcessor
org.springframework.context.event.internalEventListenerFactory
org.springframework.context.event.internalEventListenerProcessor
parameterNamesModule
preserveErrorControllerTargetClassPostProcessor
propertySourcesPlaceholderConfigurer
requestContextFilter
requestMappingHandlerAdapter
requestMappingHandlerMapping
resourceHandlerMapping
restTemplateBuilder
server-org.springframework.boot.autoconfigure.web.ServerProperties
servletWebServerFactoryCustomizer
simpleControllerHandlerAdapter
spring.http-org.springframework.boot.autoconfigure.http.HttpProperties
spring.info-org.springframework.boot.autoconfigure.info.ProjectInfoProperties
spring.jackson-org.springframework.boot.autoconfigure.jackson.JacksonProperties
spring.mvc-org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties
spring.resources-org.springframework.boot.autoconfigure.web.ResourceProperties
spring.servlet.multipart-org.springframework.boot.autoconfigure.web.servlet.MultipartProperties
spring.task.execution-org.springframework.boot.autoconfigure.task.TaskExecutionProperties
spring.task.scheduling-org.springframework.boot.autoconfigure.task.TaskSchedulingProperties
standardJacksonObjectMapperBuilderCustomizer
stringHttpMessageConverter
taskExecutorBuilder
taskSchedulerBuilder
tomcatServletWebServerFactory
tomcatServletWebServerFactoryCustomizer
tomcatWebServerFactoryCustomizer
viewControllerHandlerMapping
viewResolver
webServerFactoryCustomizerBeanPostProcessor
websocketServletWebServerCustomizer
welcomePageHandlerMapping
```

The list of `Beans provided by Spring Boot` must be shown.

* Check if the web service is returning the expected value executing the command `curl localhost:8080`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ curl localhost:8080
Greetings from Spring Boot!
```
8. Create a new Docker Image and execute it
* Add a new `Dockerfile`
```docker
# Start with a base image containing Java runtime and Maven
FROM maven:3.6.0-jdk-12-alpine
WORKDIR /app

COPY ./ ./
RUN mvn package

# Run the jar file 
ENTRYPOINT ["java","-jar","target/server-0.0.1-SNAPSHOT.jar"]
```
* Create the Docker image with the `docker build .` command  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ docker build .
Sending build context to Docker daemon   93.7kB
Step 1/5 : FROM maven:3.6.0-jdk-12-alpine
 ---> 02ec89615eb9
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> aae2277a68c3
Step 3/5 : COPY ./ ./
 ---> Using cache
 ---> 12614eacd148
Step 4/5 : RUN mvn package
 ---> Using cache
 ---> 53f06acd6bb2
Step 5/5 : ENTRYPOINT ["java","-jar","target/server-0.0.1-SNAPSHOT.jar"]
 ---> Using cache
 ---> 61b12028d995
Successfully built 61b12028d995
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
* Ensure it is working running the `docker run -p 8080:8080 61b12028d995` command  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ docker run -p 8080:8080 61b12028d995

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.0.RELEASE)

2018-11-16 19:27:44.600  INFO 1 --- [           main] com.peelmicro.server.DemoApplication     : Starting DemoApplication v0.0.1-SNAPSHOT on e16df18ad87a with PID 1 (/app/target/server-0.0.1-SNAPSHOT.jar started by root in /app)
2018-11-16 19:27:44.607  INFO 1 --- [           main] com.peelmicro.server.DemoApplication     : No active profile set, falling back to default profiles: default
2018-11-16 19:27:47.038  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2018-11-16 19:27:47.116  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2018-11-16 19:27:47.117  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/9.0.12
2018-11-16 19:27:47.139  INFO 1 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [/opt/openjdk-12/lib/server:/opt/openjdk-12/lib:/opt/openjdk-12/../lib:/usr/java/packages/lib:/usr/lib64:/lib64:/lib:/usr/lib]
2018-11-16 19:27:47.302  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2018-11-16 19:27:47.302  INFO 1 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 2574 ms
2018-11-16 19:27:47.365  INFO 1 --- [           main] o.s.b.w.servlet.ServletRegistrationBean  : Servlet dispatcherServlet mapped to [/]
2018-11-16 19:27:47.371  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'characterEncodingFilter' to: [/*]
2018-11-16 19:27:47.372  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
2018-11-16 19:27:47.372  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'formContentFilter' to: [/*]
2018-11-16 19:27:47.373  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'requestContextFilter' to: [/*]
2018-11-16 19:27:47.670  INFO 1 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2018-11-16 19:27:48.166  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2018-11-16 19:27:48.171  INFO 1 --- [           main] com.peelmicro.server.DemoApplication     : Started DemoApplication in 4.842 seconds (JVM running for 5.529)
Let's inspect the beans provided by Spring Boot:
applicationTaskExecutor
basicErrorController
beanNameHandlerMapping
beanNameViewResolver
characterEncodingFilter
commandLineRunner
conventionErrorViewResolver
defaultServletHandlerMapping
defaultValidator
defaultViewResolver
demoApplication
demoController
dispatcherServlet
dispatcherServletRegistration
error
errorAttributes
errorPageCustomizer
errorPageRegistrarBeanPostProcessor
faviconHandlerMapping
faviconRequestHandler
formContentFilter
handlerExceptionResolver
hiddenHttpMethodFilter
httpRequestHandlerAdapter
jacksonCodecCustomizer
jacksonObjectMapper
jacksonObjectMapperBuilder
jsonComponentModule
localeCharsetMappingsCustomizer
loggingCodecCustomizer
mappingJackson2HttpMessageConverter
mbeanExporter
mbeanServer
messageConverters
methodValidationPostProcessor
multipartConfigElement
multipartResolver
mvcContentNegotiationManager
mvcConversionService
mvcHandlerMappingIntrospector
mvcPathMatcher
mvcResourceUrlProvider
mvcUriComponentsContributor
mvcUrlPathHelper
mvcValidator
mvcViewResolver
objectNamingStrategy
org.springframework.boot.autoconfigure.AutoConfigurationPackages
org.springframework.boot.autoconfigure.condition.BeanTypeRegistry
org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration
org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration$StringHttpMessageConverterConfiguration
org.springframework.boot.autoconfigure.http.JacksonHttpMessageConvertersConfiguration
org.springframework.boot.autoconfigure.http.JacksonHttpMessageConvertersConfiguration$MappingJackson2HttpMessageConverterConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$JacksonCodecConfiguration
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$LoggingCodecConfiguration
org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration
org.springframework.boot.autoconfigure.internalCachingMetadataReaderFactory
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$Jackson2ObjectMapperBuilderCustomizerConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperBuilderConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperConfiguration
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$ParameterNamesModuleConfiguration
org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration
org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration
org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration
org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration$TomcatWebServerFactoryCustomizerConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration$DispatcherServletConfiguration
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration$DispatcherServletRegistrationConfiguration
org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryConfiguration$EmbeddedTomcat
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$EnableWebMvcConfiguration
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter$FaviconConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration$DefaultErrorViewResolverConfiguration
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration$TomcatWebSocketConfiguration
org.springframework.boot.context.properties.ConfigurationBeanFactoryMetadata
org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor
org.springframework.context.annotation.internalAutowiredAnnotationProcessor
org.springframework.context.annotation.internalCommonAnnotationProcessor
org.springframework.context.annotation.internalConfigurationAnnotationProcessor
org.springframework.context.event.internalEventListenerFactory
org.springframework.context.event.internalEventListenerProcessor
parameterNamesModule
preserveErrorControllerTargetClassPostProcessor
propertySourcesPlaceholderConfigurer
requestContextFilter
requestMappingHandlerAdapter
requestMappingHandlerMapping
resourceHandlerMapping
restTemplateBuilder
server-org.springframework.boot.autoconfigure.web.ServerProperties
servletWebServerFactoryCustomizer
simpleControllerHandlerAdapter
spring.http-org.springframework.boot.autoconfigure.http.HttpProperties
spring.info-org.springframework.boot.autoconfigure.info.ProjectInfoProperties
spring.jackson-org.springframework.boot.autoconfigure.jackson.JacksonProperties
spring.mvc-org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties
spring.resources-org.springframework.boot.autoconfigure.web.ResourceProperties
spring.servlet.multipart-org.springframework.boot.autoconfigure.web.servlet.MultipartProperties
spring.task.execution-org.springframework.boot.autoconfigure.task.TaskExecutionProperties
spring.task.scheduling-org.springframework.boot.autoconfigure.task.TaskSchedulingProperties
standardJacksonObjectMapperBuilderCustomizer
stringHttpMessageConverter
taskExecutorBuilder
taskSchedulerBuilder
tomcatServletWebServerFactory
tomcatServletWebServerFactoryCustomizer
tomcatWebServerFactoryCustomizer
viewControllerHandlerMapping
viewResolver
webServerFactoryCustomizerBeanPostProcessor
websocketServletWebServerCustomizer
welcomePageHandlerMapping
```
* Ensure the container is running executing the `docker ps` command  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                         PORTS                    NAMES
e16df18ad87a        61b12028d995                "java -jar target/se…"   3 minutes ago       Up 3 minutes                   0.0.0.0:8080->8080/tcp   determined_saha
```
* Ensure the web is running correctly executing the `curl localhost:8080` command on another terminal  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ curl localhost:8080
Greetings from Spring Boot!
```
9. Modify the application to make it work as expected (like the NodeJs original version)  
* Remove old files not needed anymore
The `DemoApplication.java` and `DemoController.java` must be removed.  

* Add the following new files:
> `application.properties`

![](/images/projects/java-multi-docker/Application-application.properties.png)

```properties
## Spring DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
spring.datasource.url= jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
spring.datasource.username= ${PGUSER}
spring.datasource.password= ${PGPASSWORD}
## To force the schema.sql to run
spring.datasource.initialization-mode=always

# The SQL dialect makes Hibernate generate better SQL for the chosen database
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect

# Hibernate ddl auto (none, create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto = none

# Define a different port from the standard 8080
server.port = 5000
```
> `schema.sql`

![](/images/projects/java-multi-docker/Application-schema.sql.png)

It is **always** executed when the application starts
```sql
CREATE TABLE IF NOT EXISTS values (
  id SERIAL PRIMARY KEY, 
  number INT
);
```
> `ServerApplication.java`

![](/images/projects/java-multi-docker/Application-ServerApplication.java.png)

It's the **first** Java class that it's executed.
```java
package com.peelmicro.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
  }
}
```
> `Value.java`

![](/images/projects/java-multi-docker/Application-value.java.png)

Model class used to manage the Values Postgres table.
```java
package com.peelmicro.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "values")
public class Value {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonIgnore
  private int id; 
  
  private int number;

  public Value() { }

  public Value(int number) {
	  this.number = number;
	}

  public int getNumber() {
    return number;
  }

  public void setNumber(int number) {
    this.number = number;
  }
}
```
> `ValuesRepository.java`

![](/images/projects/java-multi-docker/Application-ValuesRepository.java.png)

It inherits from Spring JPA to manage the CRUD operation on the Values Postgres table.
```java
package com.peelmicro.server.repositories;

import com.peelmicro.server.models.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValuesRepository extends JpaRepository<Value, Integer> {
}
```
> `RedisService.java`

![](/images/projects/java-multi-docker/RedisService.java.png)

It's used to manage the access to the Redis cache database
```java
package com.peelmicro.server.services;

import org.springframework.stereotype.Service;

import redis.clients.jedis.Jedis;

@Service
public class RedisService {

  String redisHost;
  String redisPort;
  
  private RedisService() {
    redisHost = System.getenv("REDIS_HOST");
    redisPort = System.getenv("REDIS_PORT");
  }

  public Jedis getJedis() {
    return  new Jedis(redisHost, Integer.parseInt(redisPort));
  }
}
```
> `ValuesController.java`

![](/images/projects/java-multi-docker/Application-ValuesController.png)

It's used to manage the Values API
```java
package com.peelmicro.server.controllers;

import org.springframework.web.bind.annotation.RestController;

import redis.clients.jedis.Jedis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.peelmicro.server.repositories.ValuesRepository;
import com.peelmicro.server.services.RedisService;
import com.peelmicro.server.models.Value;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/values")
public class ValuesController {

    @Autowired
    private ValuesRepository valuesRepository;

    @Autowired
    private RedisService redisService;

    private final String setKey = "values";

    @RequestMapping()
    public String index() {
        return "Hi";
    }

    @RequestMapping(value = "/current")
    public Map<String,String> getCurrent()
    {
      Map<String,String> result = new HashMap<String,String>();
      Jedis jedis = redisService.getJedis();
      Set<String> items = jedis.smembers(setKey);
      for (String item: items) {
        String value = jedis.get(item);
        String key = item.replace(setKey, "");
        result.put(key, value);
      }
      jedis.close();
      return result;
    }

    @RequestMapping(value = "/all")
    public List<Value> getAll()
    {
        return valuesRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<HashMap<String, Object>> post(@RequestBody HashMap<String, Object> request) {
      HashMap<String, Object> response = new HashMap<>();
      Boolean validIndex = true;
      String index = "";
      Integer number = 0;
      if (!request.containsKey("index") ) {
        validIndex = false;
      }
      if (validIndex) {
        index = request.get("index").toString();
        try  
        {     
          number = Integer.parseInt(index);  
        }  
        catch(NumberFormatException nfe)  
        { 
          validIndex = false; 
        }
      }
      if (!validIndex) {
        response.put("working", false);
        response.put("message", "Invalid Index!");
        return new ResponseEntity<HashMap<String, Object>>(response, HttpStatus.UNPROCESSABLE_ENTITY);
      }
      Value value = new Value(number);
      valuesRepository.save(value);

      String redisKey = setKey + index;
      Jedis jedis = redisService.getJedis();
      jedis.set(redisKey, "Nothing yet!");
      jedis.sadd(setKey, redisKey);
      jedis.publish("message", index);
      jedis.close();

      response.put("working", true);
      return new ResponseEntity<HashMap<String, Object>>(response, HttpStatus.OK);
    }
}
```
> `ResourceNotFoundException.java`

![](/images/projects/java-multi-docker/Application-ResourceNotFoundException.java.png)

It's used to manage when the URL is not found.
```java
package com.peelmicro.server.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
```
10. Modify the 'Dockerfile' document to avoid running the tests. Otherwise the build will fail because the initial connection to Postgres cannnot be executed.
 ```docker
# Start with a base image containing Java runtime and Maven
FROM maven:3.6.0-jdk-12-alpine
WORKDIR /app

COPY ./ ./
RUN mvn install -DskipTests

# Run the jar file 
ENTRYPOINT ["java","-jar","target/server-0.0.1-SNAPSHOT.jar"]
```
11. Test if the `docker image` can be built with success
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/serverDocker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ docker build .
Sending build context to Docker daemon  109.6kB
Step 1/5 : FROM maven:3.6.0-jdk-12-alpine
 ---> 02ec89615eb9
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> aae2277a68c3
Step 3/5 : COPY ./ ./
 ---> 68ec97235e9a
Step 4/5 : RUN mvn install -DskipTests
 ---> Running in 9439a89dd0cf
[INFO] Scanning for projects...
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-parent/2.1.0.RELEASE/spring-boot-starter-parent-2.1.0.RELEASE.pom
Downloaded from central: 
.
.
.
[INFO] Installing /app/target/server-0.0.1-SNAPSHOT.jar to /root/.m2/repository/com/peelmicro/server/0.0.1-SNAPSHOT/server-0.0.1-SNAPSHOT.jar
[INFO] Installing /app/pom.xml to /root/.m2/repository/com/peelmicro/server/0.0.1-SNAPSHOT/server-0.0.1-SNAPSHOT.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  01:18 min
[INFO] Finished at: 2018-11-18T10:27:27Z
[INFO] ------------------------------------------------------------------------
Removing intermediate container 136a04e748a2
 ---> 66706f5db013
Step 5/5 : ENTRYPOINT ["java","-jar","target/server-0.0.1-SNAPSHOT.jar"]
 ---> Running in 618d1117835e
Removing intermediate container 618d1117835e
 ---> bd127e94467f
Successfully built bd127e94467f
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
12. Execute the docker image to ensure that only errors related to the connection with Postgres are shown.
```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/server
$ docker run bd127e94467f

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.0.RELEASE)

2018-11-18 10:29:58.004  INFO 1 --- [           main] com.peelmicro.server.ServerApplication   : Starting ServerApplication v0.0.1-SNAPSHOT on 03df85594f02 with PID 1 (/app/target/server-0.0.1-SNAPSHOT.jar started by root in /app)
2018-11-18 10:29:58.020  INFO 1 --- [           main] com.peelmicro.server.ServerApplication   : No active profile set, falling back to default profiles: default
2018-11-18 10:30:02.212  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data repositories in DEFAULT mode.
2018-11-18 10:30:02.712  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 449ms. Found 1 repository interfaces.
2018-11-18 10:30:04.744  INFO 1 --- [           main] trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration' of type [org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration$$EnhancerBySpringCGLIB$$cc5ab7a1] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2018-11-18 10:30:06.969  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 5000 (http)
2018-11-18 10:30:07.069  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2018-11-18 10:30:07.069  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/9.0.12
2018-11-18 10:30:07.121  INFO 1 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [/opt/openjdk-12/lib/server:/opt/openjdk-12/lib:/opt/openjdk-12/../lib:/usr/java/packages/lib:/usr/lib64:/lib64:/lib:/usr/lib]
2018-11-18 10:30:07.624  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2018-11-18 10:30:07.636  INFO 1 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 9322 ms
2018-11-18 10:30:07.814  INFO 1 --- [           main] o.s.b.w.servlet.ServletRegistrationBean  : Servlet dispatcherServlet mapped to [/]
2018-11-18 10:30:07.844  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'characterEncodingFilter' to: [/*]
2018-11-18 10:30:07.845  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
2018-11-18 10:30:07.845  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'formContentFilter' to: [/*]
2018-11-18 10:30:07.846  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'requestContextFilter' to: [/*]
2018-11-18 10:30:08.336  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2018-11-18 10:30:08.377  WARN 1 --- [           main] org.postgresql.Driver                    : JDBC URL invalid port number: ${PGPORT}
2018-11-18 10:30:08.378  WARN 1 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaConfiguration': Unsatisfied dependency expressed through constructor parameter 0; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'dataSource' defined in class path resource [org/springframework/boot/autoconfigure/jdbc/DataSourceConfiguration$Hikari.class]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'org.springframework.boot.autoconfigure.jdbc.DataSourceInitializerInvoker': Invocation of init method failed; nested exception is org.springframework.jdbc.datasource.init.UncategorizedScriptException: Failed to execute database script; nested exception is java.lang.RuntimeException: Driver org.postgresql.Driver claims
to not accept jdbcUrl, jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
2018-11-18 10:30:08.398  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by org.apache.catalina.loader.WebappClassLoaderBase (jar:file:/app/target/server-0.0.1-SNAPSHOT.jar!/BOOT-INF/lib/tomcat-embed-core-9.0.12.jar!/) to field java.io.ObjectStreamClass$Caches.localDescs
WARNING: Please consider reporting this to the maintainers of org.apache.catalina.loader.WebappClassLoaderBase
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
2018-11-18 10:30:08.483  INFO 1 --- [           main] ConditionEvaluationReportLoggingListener :

Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
2018-11-18 10:30:08.514 ERROR 1 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaConfiguration': Unsatisfied dependency expressed through constructor parameter 0; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'dataSource' defined in class path resource [org/springframework/boot/autoconfigure/jdbc/DataSourceConfiguration$Hikari.class]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'org.springframework.boot.autoconfigure.jdbc.DataSourceInitializerInvoker': Invocation of init method failed; nested exception is org.springframework.jdbc.datasource.init.UncategorizedScriptException: Failed to execute database script; nested exception is java.lang.RuntimeException: Driver org.postgresql.Driver claims to not accept jdbcUrl, jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
        at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:767) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:218) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1308) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1154) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:538) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:498) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:320) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:318) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:391) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1288) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1127) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:538) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:498) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:320) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:318) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1083) ~[spring-context-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:853) ~[spring-context-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:546) ~[spring-context-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:140) ~[spring-boot-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:775) ~[spring-boot-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:397) ~[spring-boot-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:316) ~[spring-boot-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1260) ~[spring-boot-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1248) ~[spring-boot-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at com.peelmicro.server.ServerApplication.main(ServerApplication.java:11) ~[classes!/:0.0.1-SNAPSHOT]
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:na]
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
        at java.base/java.lang.reflect.Method.invoke(Method.java:566) ~[na:na]
        at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:48) ~[server-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:87) ~[server-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:50) ~[server-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
        at org.springframework.boot.loader.JarLauncher.main(JarLauncher.java:51) ~[server-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'dataSource' defined in class path resource [org/springframework/boot/autoconfigure/jdbc/DataSourceConfiguration$Hikari.class]: Initialization of bean failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'org.springframework.boot.autoconfigure.jdbc.DataSourceInitializerInvoker': Invocation of init method failed; nested exception is org.springframework.jdbc.datasource.init.UncategorizedScriptException: Failed to execute database script; nested exception is java.lang.RuntimeException: Driver org.postgresql.Driver claims to not accept jdbcUrl, jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:584) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:498) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:320) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:318) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:273) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1239) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1166) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]        at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:855) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:758) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        ... 36 common frames omitted
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'org.springframework.boot.autoconfigure.jdbc.DataSourceInitializerInvoker': Invocation
of init method failed; nested exception is org.springframework.jdbc.datasource.init.UncategorizedScriptException: Failed to execute database script; nested exception is java.lang.RuntimeException: Driver org.postgresql.Driver claims to not accept jdbcUrl, jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1745) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:576) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:498) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:320) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:318) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:224) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveNamedBean(DefaultListableBeanFactory.java:1114) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveBean(DefaultListableBeanFactory.java:407) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBean(DefaultListableBeanFactory.java:341) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBean(DefaultListableBeanFactory.java:335) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.boot.autoconfigure.jdbc.DataSourceInitializerPostProcessor.postProcessAfterInitialization(DataSourceInitializerPostProcessor.java:55) ~[spring-boot-autoconfigure-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization(AbstractAutowireCapableBeanFactory.java:434) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1749) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:576) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        ... 46 common frames omitted
Caused by: org.springframework.jdbc.datasource.init.UncategorizedScriptException: Failed to execute database script; nested exception is java.lang.RuntimeException: Driver org.postgresql.Driver claims to not accept jdbcUrl, jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
        at org.springframework.jdbc.datasource.init.DatabasePopulatorUtils.execute(DatabasePopulatorUtils.java:58) ~[spring-jdbc-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.boot.autoconfigure.jdbc.DataSourceInitializer.runScripts(DataSourceInitializer.java:210) ~[spring-boot-autoconfigure-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.autoconfigure.jdbc.DataSourceInitializer.createSchema(DataSourceInitializer.java:104) ~[spring-boot-autoconfigure-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.boot.autoconfigure.jdbc.DataSourceInitializerInvoker.afterPropertiesSet(DataSourceInitializerInvoker.java:64) ~[spring-boot-autoconfigure-2.1.0.RELEASE.jar!/:2.1.0.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1741) ~[spring-beans-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        ... 60 common frames omitted
Caused by: java.lang.RuntimeException: Driver org.postgresql.Driver claims to not accept jdbcUrl, jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
        at com.zaxxer.hikari.util.DriverDataSource.<init>(DriverDataSource.java:108) ~[HikariCP-3.2.0.jar!/:na]
        at com.zaxxer.hikari.pool.PoolBase.initializeDataSource(PoolBase.java:336) ~[HikariCP-3.2.0.jar!/:na]
        at com.zaxxer.hikari.pool.PoolBase.<init>(PoolBase.java:109) ~[HikariCP-3.2.0.jar!/:na]
        at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:108) ~[HikariCP-3.2.0.jar!/:na]
        at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) ~[HikariCP-3.2.0.jar!/:na]
        at org.springframework.jdbc.datasource.DataSourceUtils.fetchConnection(DataSourceUtils.java:151) ~[spring-jdbc-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.jdbc.datasource.DataSourceUtils.doGetConnection(DataSourceUtils.java:115) ~[spring-jdbc-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.jdbc.datasource.DataSourceUtils.getConnection(DataSourceUtils.java:78) ~[spring-jdbc-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        at org.springframework.jdbc.datasource.init.DatabasePopulatorUtils.execute(DatabasePopulatorUtils.java:46) ~[spring-jdbc-5.1.2.RELEASE.jar!/:5.1.2.RELEASE]
        ... 65 common frames omitted
```

## Create the worker application using the mvn command
1. Open the main java-complex folder from Visual Studio Code

![](/images/projects/java-multi-docker/WorkerStep1.png)

2. Go to Terminal with [CTRL-@]

![](/images/projects/java-multi-docker/WorkerStep2.png)

3. Execute the following command to create the project

`mvn archetype:generate -DgroupId=com.peelmicro -DartifactId=worker -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false`

```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex$ mvn archetype:generate -DgroupId=com.peelmicro -Dartif
actId=worker -DarchetypeArtifactId=maven-archetype-quick
start -DinteractiveMode=false
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------< org.apache.maven:standalone-pom >-------------------
[INFO] Building Maven Stub Project (No POM) 1[INFO] --------------------------------[ pom ]---------------------------------
[INFO]
[INFO] >>> maven-archetype-plugin:3.0.1:generate (default-cli) > generate-sources @ standalone-pom >>>[INFO]
[INFO] <<< maven-archetype-plugin:3.0.1:generate (default-cli) < generate-sources @ standalone-pom <<<
[INFO][INFO]
[INFO] --- maven-archetype-plugin:3.0.1:generate (default-cli) @ standalone-pom ---
[INFO] Generating project in Batch mode[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-quickstart:1.0
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex[INFO] Parameter: package, Value: com.peelmicro
[INFO] Parameter: groupId, Value: com.peelmicro
[INFO] Parameter: artifactId, Value: worker
[INFO] Parameter: packageName, Value: com.peelmicro
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 7.492 s
[INFO] Finished at: 2018-11-13T18:35:50Z
[INFO] ------------------------------------------------------------------------
```

![](/images/projects/java-multi-docker/WorkerStep3.png)

4. Review the App.java class generated
```java
package com.peelmicro;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }
}
```
5. Execute the following command to generate the class:

`mvn install`
```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex
$ cd worker

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker
$ mvn install
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------< com.peelmicro:worker >------------------------
[INFO] Building worker 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO]
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ worker ---
[WARNING] Using platform encoding (Cp1252 actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\src\main\resources
[INFO]
[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ worker ---
[INFO] Changes detected - recompiling the module!
[WARNING] File encoding has not been set, using platform encoding Cp1252, i.e. build is platform dependent!
[INFO] Compiling 1 source file to C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\target\classes
[INFO]
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ worker ---
[WARNING] Using platform encoding (Cp1252 actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\src\test\resources
[INFO]
[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ worker ---
[INFO] Changes detected - recompiling the module!
[WARNING] File encoding has not been set, using platform encoding Cp1252, i.e. build is platform dependent!
[INFO] Compiling 1 source file to C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\target\test-classes
[INFO]
[INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ worker ---
[INFO] Surefire report directory: C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\target\surefire-reports

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.peelmicro.AppTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.005 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[INFO]
[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ worker ---
[INFO] Building jar: C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\target\worker-1.0-SNAPSHOT.jar
[INFO]
[INFO] --- maven-install-plugin:2.4:install (default-install) @ worker ---
[INFO] Installing C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\target\worker-1.0-SNAPSHOT.jar to C:\Users\juan.pablo.perez\.m2\repository\com\peelmicro\worker\1.0-SNAPSHOT\worker-1.0-SNAPSHOT.jar
[INFO] Installing C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex\worker\pom.xml to C:\Users\juan.pablo.perez\.m2\repository\com\peelmicro\worker\1.0-SNAPSHOT\worker-1.0-SNAPSHOT.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 5.775 s
[INFO] Finished at: 2018-11-13T18:39:16Z
[INFO] ------------------------------------------------------------------------
```

6. Ensure `App.class` has been generated on `target/classes/com/peelmicro/App.class` and `worker-1.0.SNAPSHOT.jar` on target

![](/images/projects/java-multi-docker/WorkerStep4.png)

7. Test if the java jar file is executed correctly with the following command:

`java -cp target/worker-1.0-SNAPSHOT.jar com.peelmicro.App`

```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker
$ java -cp target/worker-1.0-SNAPSHOT.jar com.peelmicro.App
Hello World!
```
8. Create the Dockerfile

```docker
# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# The application's jar file
ARG JAR_FILE=target/worker-1.0-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} worker.jar

# Run the jar file 
ENTRYPOINT ["java","-cp","worker.jar","com.peelmicro.App"]
```

9. Execute the following command to create the Docker image

`docker build .`

```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker
$ docker build .
Sending build context to Docker daemon   38.4kB
Step 1/4 : FROM openjdk:8-jdk-alpine
 ---> 97bc1352afde
Step 2/4 : ARG JAR_FILE=target/worker-1.0-SNAPSHOT.jar
 ---> Using cache
 ---> e958f107c69e
Step 3/4 : ADD ${JAR_FILE} worker.jar
 ---> Using cache
 ---> 51232f2eee07
Step 4/4 : ENTRYPOINT ["java","-cp","worker.jar","com.peelmicro.App"]
 ---> Running in ae34b184f936
Removing intermediate container ae34b184f936
 ---> 8bf625e9f2a4
Successfully built 8bf625e9f2a4
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

10. Execute the Docker Image to ensure it is working with the following command.

`docker run 8bf625e9f2a4`

```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker
$ docker run 8bf625e9f2a4
Hello World!
```
11. Modify the pom.xml file to:

_Original file_
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.peelmicro</groupId>
  <artifactId>worker</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>worker</name>
  <url>http://maven.apache.org</url>
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```


**Allow to use another Java version**
```xml
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.0</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
     </plugins> 
  </build>
  ```
  **Allow to generate a jar document that includes all the dependencies**

  ```xml
       <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-assembly-plugin</artifactId>
        <configuration>
          <archive>
            <manifest>
              <addClasspath>true</addClasspath>
              <mainClass>com.your.package.MainClass</mainClass>
            </manifest>
          </archive>
          <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
          </descriptorRefs>
        </configuration>
        <executions>
          <execution>
            <id>make-my-jar-with-dependencies</id>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
          </execution>
        </executions>
      </plugin>    
```
**Include the jedis dependency to be able to use Redis**
```xml
    <dependency>
        <groupId>redis.clients</groupId>
        <artifactId>jedis</artifactId>
        <version>2.9.0</version>
    </dependency>    
```
_Final version_
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.peelmicro</groupId>
  <artifactId>worker</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>worker</name>
  <url>http://maven.apache.org</url>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>redis.clients</groupId>
        <artifactId>jedis</artifactId>
        <version>2.9.0</version>
    </dependency>    
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.0</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>    
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-assembly-plugin</artifactId>
        <configuration>
          <archive>
            <manifest>
              <addClasspath>true</addClasspath>
              <mainClass>com.your.package.MainClass</mainClass>
            </manifest>
          </archive>
          <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
          </descriptorRefs>
        </configuration>
        <executions>
          <execution>
            <id>make-my-jar-with-dependencies</id>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
          </execution>
        </executions>
      </plugin>    
    </plugins>
  </build>    
</project>
```
12. Modify the `App.java` class to include the use of Redis with a subscriber

```java
package com.peelmicro;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPubSub;
public class App 
{
    public static void main( String[] args )
    {
        String redisHost = System.getenv("REDIS_HOST");
        String redisPort = System.getenv("REDIS_PORT");
        try  {
            Jedis jedis = new Jedis(redisHost, Integer.parseInt(redisPort));
            jedis.subscribe(new JedisPubSub() {
                @Override
                public void onMessage(String channel, String message) {
                    jedis.hset("values", message, fib(Integer.parseInt(message)).toString());
                }
            }, "message");            
            jedis.quit();
            jedis.close();               
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected static Integer fib(int index) {
        if (index < 2) return 1;
        return fib(index - 1) + fib(index - 2);          
    }
    
}
```
13. Modify the `Dockerfile` document to run maven inside the image
```docker
# Start with a base image containing Java runtime and Maven
FROM maven:3.6.0-jdk-12-alpine
WORKDIR /app

COPY ./ ./
RUN mvn package

# Run the jar file 
ENTRYPOINT ["java","-cp","target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar","com.peelmicro.App"]
```
14. Test if the `docker image` can be built with success
```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker
$ docker build .
Sending build context to Docker daemon  57.34kB
Step 1/7 : FROM maven:3.6.0-jdk-12-alpine
 ---> 02ec89615eb9
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> aae2277a68c3
Step 3/7 : COPY ./ ./
 ---> 350c5b9fe8f8
Step 4/7 : RUN mvn package
 ---> Running in 6118c84e2408
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------< com.peelmicro:worker >------------------------
[INFO] Building worker 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/2.6/maven-resources-plugin-2.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/2.6/maven-resources-plugin-2.6.pom (8.1 kB at 13 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/23/maven-plugins-23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/23/maven-plugins-23.pom (9.2 kB at 57 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/22/maven-parent-22.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/22/maven-parent-22.pom (30 kB at 184 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/11/apache-11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/11/apache-11.pom (15 kB at 130 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/2.6/maven-resources-plugin-2.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/2.6/maven-resources-plugin-2.6.jar (30 kB at 324 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.8.0/maven-compiler-plugin-3.8.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.8.0/maven-compiler-plugin-3.8.0.pom (12 kB at 134 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/32/maven-plugins-32.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/32/maven-plugins-32.pom (11 kB at 106 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/32/maven-parent-32.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/32/maven-parent-32.pom (43 kB at 233 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/20/apache-20.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/20/apache-20.pom (16 kB at 273 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.8.0/maven-compiler-plugin-3.8.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-compiler-plugin/3.8.0/maven-compiler-plugin-3.8.0.jar (62 kB at 516 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.12.4/maven-surefire-plugin-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.12.4/maven-surefire-plugin-2.12.4.pom (10 kB at 126 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire/2.12.4/surefire-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire/2.12.4/surefire-2.12.4.pom (14 kB at 150 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.12.4/maven-surefire-plugin-2.12.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-surefire-plugin/2.12.4/maven-surefire-plugin-2.12.4.jar (30 kB at 305 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/2.4/maven-jar-plugin-2.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/2.4/maven-jar-plugin-2.4.pom (5.8 kB at 94 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/22/maven-plugins-22.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/22/maven-plugins-22.pom (13 kB at 111 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/21/maven-parent-21.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/21/maven-parent-21.pom (26 kB at 233 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/10/apache-10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/10/apache-10.pom (15 kB at 231 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/2.4/maven-jar-plugin-2.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jar-plugin/2.4/maven-jar-plugin-2.4.jar (34 kB at 185 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/2.2-beta-5/maven-assembly-plugin-2.2-beta-5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/2.2-beta-5/maven-assembly-plugin-2.2-beta-5.pom (15 kB at 194 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/16/maven-plugins-16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-plugins/16/maven-plugins-16.pom (13 kB at 151 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/15/maven-parent-15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/15/maven-parent-15.pom (24 kB at 200 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/6/apache-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/6/apache-6.pom (13 kB at 147 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/2.2-beta-5/maven-assembly-plugin-2.2-beta-5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-assembly-plugin/2.2-beta-5/maven-assembly-plugin-2.2-beta-5.jar (209 kB at 920 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/4.12/junit-4.12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/4.12/junit-4.12.pom (24 kB at 388 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.pom (766 B at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-parent/1.3/hamcrest-parent-1.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-parent/1.3/hamcrest-parent-1.3.pom (2.0 kB at 46 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/redis/clients/jedis/2.9.0/jedis-2.9.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/redis/clients/jedis/2.9.0/jedis-2.9.0.pom (5.9 kB at 85 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/7/oss-parent-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/7/oss-parent-7.pom (4.8 kB at 75 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-pool2/2.4.2/commons-pool2-2.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-pool2/2.4.2/commons-pool2-2.4.2.pom (11 kB at 135 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/34/commons-parent-34.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/34/commons-parent-34.pom (56 kB at 629 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/13/apache-13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/13/apache-13.pom (14 kB at 107 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/4.12/junit-4.12.jar
Downloading from central: https://repo.maven.apache.org/maven2/redis/clients/jedis/2.9.0/jedis-2.9.0.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-pool2/2.4.2/commons-pool2-2.4.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar (45 kB at 81 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-pool2/2.4.2/commons-pool2-2.4.2.jar (112 kB at 168 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/4.12/junit-4.12.jar (315 kB at 469 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/redis/clients/jedis/2.9.0/jedis-2.9.0.jar (554 kB at 719 kB/s)
[INFO]
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ worker ---
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.6/maven-plugin-api-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.6/maven-plugin-api-2.0.6.pom (1.5 kB at 23 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.6/maven-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.6/maven-2.0.6.pom (9.0 kB at 206 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/5/maven-parent-5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/5/maven-parent-5.pom (15 kB at 339 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/3/apache-3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/3/apache-3.pom (3.4 kB at 40 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.6/maven-project-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.6/maven-project-2.0.6.pom (2.6 kB at 43 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.6/maven-settings-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.6/maven-settings-2.0.6.pom (2.0 kB at 36 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.6/maven-model-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.6/maven-model-2.0.6.pom (3.0 kB at 53 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.1/plexus-utils-1.4.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.1/plexus-utils-1.4.1.pom (1.9 kB at 35 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.11/plexus-1.0.11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.11/plexus-1.0.11.pom (9.0 kB at 219 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-9-stable-1/plexus-container-default-1.0-alpha-9-stable-1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-9-stable-1/plexus-container-default-1.0-alpha-9-stable-1.pom (3.9 kB at 79 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0.3/plexus-containers-1.0.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0.3/plexus-containers-1.0.3.pom (492 B at 13 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.4/plexus-1.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.4/plexus-1.0.4.pom (5.7 kB at 110 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/3.8.1/junit-3.8.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/3.8.1/junit-3.8.1.pom (998 B at 16 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.0.4/plexus-utils-1.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.0.4/plexus-utils-1.0.4.pom (6.9 kB at 66 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1-alpha-2/classworlds-1.1-alpha-2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1-alpha-2/classworlds-1.1-alpha-2.pom (3.1 kB at 65 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.6/maven-profile-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.6/maven-profile-2.0.6.pom (2.0 kB at 50 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.6/maven-artifact-manager-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.6/maven-artifact-manager-2.0.6.pom (2.6 kB at 61 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.6/maven-repository-metadata-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.6/maven-repository-metadata-2.0.6.pom (1.9 kB at 29 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.6/maven-artifact-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.6/maven-artifact-2.0.6.pom (1.6 kB at 23 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.6/maven-plugin-registry-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.6/maven-plugin-registry-2.0.6.pom (1.9 kB at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.6/maven-core-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.6/maven-core-2.0.6.pom (6.7 kB at 89 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.6/maven-plugin-parameter-documenter-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.6/maven-plugin-parameter-documenter-2.0.6.pom (1.9 kB at 29 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.6/maven-reporting-api-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.6/maven-reporting-api-2.0.6.pom (1.8 kB at 18 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting/2.0.6/maven-reporting-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting/2.0.6/maven-reporting-2.0.6.pom (1.4 kB at 26 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/doxia/doxia-sink-api/1.0-alpha-7/doxia-sink-api-1.0-alpha-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/doxia/doxia-sink-api/1.0-alpha-7/doxia-sink-api-1.0-alpha-7.pom (424 B at 6.4 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/doxia/doxia/1.0-alpha-7/doxia-1.0-alpha-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/doxia/doxia/1.0-alpha-7/doxia-1.0-alpha-7.pom (3.9 kB at 62 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.6/maven-error-diagnostics-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.6/maven-error-diagnostics-2.0.6.pom (1.7 kB at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/commons-cli/commons-cli/1.0/commons-cli-1.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/commons-cli/commons-cli/1.0/commons-cli-1.0.pom (2.1 kB at 22 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.6/maven-plugin-descriptor-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.6/maven-plugin-descriptor-2.0.6.pom (2.0 kB at 23 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interactivity-api/1.0-alpha-4/plexus-interactivity-api-1.0-alpha-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interactivity-api/1.0-alpha-4/plexus-interactivity-api-1.0-alpha-4.pom (7.1 kB at 68 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.6/maven-monitor-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.6/maven-monitor-2.0.6.pom (1.3 kB at 19 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1/classworlds-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1/classworlds-1.1.pom (3.3 kB at 37 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.5/plexus-utils-2.0.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.5/plexus-utils-2.0.5.pom (3.3 kB at 51 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.6/plexus-2.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.6/plexus-2.0.6.pom (17 kB at 161 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.1/maven-filtering-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.1/maven-filtering-1.1.pom (5.8 kB at 141 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/17/maven-shared-components-17.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/17/maven-shared-components-17.pom (8.7 kB at 185 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.15/plexus-utils-1.5.15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.15/plexus-utils-1.5.15.pom (6.8 kB at 71 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.2/plexus-2.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.2/plexus-2.0.2.pom (12 kB at 181 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.12/plexus-interpolation-1.12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.12/plexus-interpolation-1.12.pom (889 B at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.14/plexus-components-1.1.14.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.14/plexus-components-1.1.14.pom (5.8 kB at 154 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-build-api/0.0.4/plexus-build-api-0.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-build-api/0.0.4/plexus-build-api-0.0.4.pom (2.9 kB at 67 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/10/spice-parent-10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/10/spice-parent-10.pom (3.0 kB at 81 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/3/forge-parent-3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/3/forge-parent-3.pom (5.0 kB at 120 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.8/plexus-utils-1.5.8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.8/plexus-utils-1.5.8.pom (8.1 kB at 114 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.13/plexus-interpolation-1.13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.13/plexus-interpolation-1.13.pom (890 B at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.15/plexus-components-1.1.15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.15/plexus-components-1.1.15.pom (2.8 kB at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.3/plexus-2.0.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.3/plexus-2.0.3.pom (15 kB at 170 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.6/maven-plugin-api-2.0.6.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.6/maven-project-2.0.6.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.6/maven-profile-2.0.6.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.6/maven-artifact-manager-2.0.6.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.6/maven-plugin-registry-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.6/maven-profile-2.0.6.jar (35 kB at 214 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.6/maven-core-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.6/maven-project-2.0.6.jar (116 kB at 618 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.6/maven-plugin-api-2.0.6.jar (13 kB at 63 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.6/maven-plugin-parameter-documenter-2.0.6.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.6/maven-reporting-api-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.6/maven-artifact-manager-2.0.6.jar (57 kB at 145 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/doxia/doxia-sink-api/1.0-alpha-7/doxia-sink-api-1.0-alpha-7.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.6/maven-reporting-api-2.0.6.jar (9.9 kB at 27 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.6/maven-plugin-registry-2.0.6.jar (29 kB at 74 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.6/maven-error-diagnostics-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.6/maven-plugin-parameter-documenter-2.0.6.jar (21 kB at 56 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.6/maven-repository-metadata-2.0.6.jar
Downloading from central: https://repo.maven.apache.org/maven2/commons-cli/commons-cli/1.0/commons-cli-1.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/doxia/doxia-sink-api/1.0-alpha-7/doxia-sink-api-1.0-alpha-7.jar (5.9 kB at 11 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.6/maven-plugin-descriptor-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/commons-cli/commons-cli/1.0/commons-cli-1.0.jar (30 kB at 57 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interactivity-api/1.0-alpha-4/plexus-interactivity-api-1.0-alpha-4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.6/maven-core-2.0.6.jar (152 kB at 284 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.6/maven-error-diagnostics-2.0.6.jar (14 kB at 25 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1/classworlds-1.1.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.6/maven-artifact-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.6/maven-repository-metadata-2.0.6.jar (24 kB at 44 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.6/maven-settings-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interactivity-api/1.0-alpha-4/plexus-interactivity-api-1.0-alpha-4.jar (13 kB at 21 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.6/maven-model-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.6/maven-plugin-descriptor-2.0.6.jar (37 kB at 49 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1/classworlds-1.1.jar (38 kB at 49 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-9-stable-1/plexus-container-default-1.0-alpha-9-stable-1.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.6/maven-monitor-2.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.6/maven-settings-2.0.6.jar (49 kB at 61 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/3.8.1/junit-3.8.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.6/maven-artifact-2.0.6.jar (87 kB at 100 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.5/plexus-utils-2.0.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.6/maven-monitor-2.0.6.jar (10 kB at 11 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.1/maven-filtering-1.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.6/maven-model-2.0.6.jar (86 kB at 86 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-build-api/0.0.4/plexus-build-api-0.0.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-build-api/0.0.4/plexus-build-api-0.0.4.jar (6.8 kB at 5.9 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.13/plexus-interpolation-1.13.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.1/maven-filtering-1.1.jar (43 kB at 37 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-9-stable-1/plexus-container-default-1.0-alpha-9-stable-1.jar (194 kB at 152 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/3.8.1/junit-3.8.1.jar (121 kB at 93 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.13/plexus-interpolation-1.13.jar (61 kB at 46 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.5/plexus-utils-2.0.5.jar (223 kB at 166 kB/s)
[WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory /app/src/main/resources
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:compile (default-compile) @ worker ---
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/3.0/maven-plugin-api-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/3.0/maven-plugin-api-3.0.pom (2.3 kB at 31 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/3.0/maven-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/3.0/maven-3.0.pom (22 kB at 212 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/3.0/maven-model-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/3.0/maven-model-3.0.pom (3.9 kB at 68 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.4/plexus-utils-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.4/plexus-utils-2.0.4.pom (3.3 kB at 50 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/3.0/maven-artifact-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/3.0/maven-artifact-3.0.pom (1.9 kB at 26 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-plexus/1.4.2/sisu-inject-plexus-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-plexus/1.4.2/sisu-inject-plexus-1.4.2.pom (5.4 kB at 105 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/inject/guice-plexus/1.4.2/guice-plexus-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/inject/guice-plexus/1.4.2/guice-plexus-1.4.2.pom (3.1 kB at 70 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/inject/guice-bean/1.4.2/guice-bean-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/inject/guice-bean/1.4.2/guice-bean-1.4.2.pom (2.6 kB at 62 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject/1.4.2/sisu-inject-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject/1.4.2/sisu-inject-1.4.2.pom (1.2 kB at 27 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-parent/1.4.2/sisu-parent-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-parent/1.4.2/sisu-parent-1.4.2.pom (7.8 kB at 120 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/6/forge-parent-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/6/forge-parent-6.pom (11 kB at 161 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-annotations/1.7.1/plexus-component-annotations-1.7.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-annotations/1.7.1/plexus-component-annotations-1.7.1.pom (770 B at 5.6 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.7.1/plexus-containers-1.7.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.7.1/plexus-containers-1.7.1.pom (5.0 kB at 56 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/4.0/plexus-4.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/4.0/plexus-4.0.pom (22 kB at 242 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/10/forge-parent-10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/10/forge-parent-10.pom (14 kB at 209 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/2.2.3/plexus-classworlds-2.2.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/2.2.3/plexus-classworlds-2.2.3.pom (4.0 kB at 91 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-bean/1.4.2/sisu-inject-bean-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-bean/1.4.2/sisu-inject-bean-1.4.2.pom (5.5 kB at 103 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-guice/2.1.7/sisu-guice-2.1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-guice/2.1.7/sisu-guice-2.1.7.pom (11 kB at 194 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/3.0/maven-core-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/3.0/maven-core-3.0.pom (6.6 kB at 100 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/3.0/maven-settings-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/3.0/maven-settings-3.0.pom (1.9 kB at 20 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings-builder/3.0/maven-settings-builder-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings-builder/3.0/maven-settings-builder-3.0.pom (2.2 kB at 33 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.14/plexus-interpolation-1.14.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.14/plexus-interpolation-1.14.pom (910 B at 12 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.18/plexus-components-1.1.18.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.18/plexus-components-1.1.18.pom (5.4 kB at 54 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.7/plexus-2.0.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/2.0.7/plexus-2.0.7.pom (17 kB at 156 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.3/plexus-sec-dispatcher-1.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.3/plexus-sec-dispatcher-1.3.pom (3.0 kB at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/12/spice-parent-12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/12/spice-parent-12.pom (6.8 kB at 96 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/4/forge-parent-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/4/forge-parent-4.pom (8.4 kB at 195 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.5/plexus-utils-1.5.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.5/plexus-utils-1.5.5.pom (5.1 kB at 126 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.pom (2.1 kB at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/3.0/maven-repository-metadata-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/3.0/maven-repository-metadata-3.0.pom (1.9 kB at 29 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model-builder/3.0/maven-model-builder-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model-builder/3.0/maven-model-builder-3.0.pom (2.2 kB at 39 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-aether-provider/3.0/maven-aether-provider-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-aether-provider/3.0/maven-aether-provider-3.0.pom (2.5 kB at 35 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-api/1.7/aether-api-1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-api/1.7/aether-api-1.7.pom (1.7 kB at 28 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-parent/1.7/aether-parent-1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-parent/1.7/aether-parent-1.7.pom (7.7 kB at 98 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-util/1.7/aether-util-1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-util/1.7/aether-util-1.7.pom (2.1 kB at 35 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-impl/1.7/aether-impl-1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-impl/1.7/aether-impl-1.7.pom (3.7 kB at 43 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-spi/1.7/aether-spi-1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-spi/1.7/aether-spi-1.7.pom (1.7 kB at 23 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/3.2.1/maven-shared-utils-3.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/3.2.1/maven-shared-utils-3.2.1.pom (5.6 kB at 72 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/30/maven-shared-components-30.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/30/maven-shared-components-30.pom (4.6 kB at 65 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/30/maven-parent-30.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/30/maven-parent-30.pom (41 kB at 409 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/18/apache-18.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/18/apache-18.pom (16 kB at 198 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/commons-io/commons-io/2.5/commons-io-2.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/commons-io/commons-io/2.5/commons-io-2.5.pom (13 kB at 83 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/39/commons-parent-39.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/39/commons-parent-39.pom (62 kB at 620 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/16/apache-16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/16/apache-16.pom (15 kB at 144 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-incremental/1.1/maven-shared-incremental-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-incremental/1.1/maven-shared-incremental-1.1.pom (4.7 kB at 91 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/19/maven-shared-components-19.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/19/maven-shared-components-19.pom (6.4 kB at 90 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/23/maven-parent-23.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/23/maven-parent-23.pom (33 kB at 286 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.2.1/maven-plugin-api-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.2.1/maven-plugin-api-2.2.1.pom (1.5 kB at 25 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.2.1/maven-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.2.1/maven-2.2.1.pom (22 kB at 330 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/11/maven-parent-11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/11/maven-parent-11.pom (32 kB at 292 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/5/apache-5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/5/apache-5.pom (4.1 kB at 73 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.2.1/maven-core-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.2.1/maven-core-2.2.1.pom (12 kB at 194 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.2.1/maven-settings-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.2.1/maven-settings-2.2.1.pom (2.2 kB at 35 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.2.1/maven-model-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.2.1/maven-model-2.2.1.pom (3.2 kB at 45 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.11/plexus-interpolation-1.11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.11/plexus-interpolation-1.11.pom (889 B at 19 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.2.1/maven-plugin-parameter-documenter-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.2.1/maven-plugin-parameter-documenter-2.2.1.pom (2.0 kB at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-jdk14/1.5.6/slf4j-jdk14-1.5.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-jdk14/1.5.6/slf4j-jdk14-1.5.6.pom (1.9 kB at 25 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-parent/1.5.6/slf4j-parent-1.5.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-parent/1.5.6/slf4j-parent-1.5.6.pom (7.9 kB at 124 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.5.6/slf4j-api-1.5.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.5.6/slf4j-api-1.5.6.pom (3.0 kB at 52 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/slf4j/jcl-over-slf4j/1.5.6/jcl-over-slf4j-1.5.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/slf4j/jcl-over-slf4j/1.5.6/jcl-over-slf4j-1.5.6.pom (2.2 kB at 39 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.2.1/maven-profile-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.2.1/maven-profile-2.2.1.pom (2.2 kB at 47 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.2.1/maven-artifact-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.2.1/maven-artifact-2.2.1.pom (1.6 kB at 24 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.2.1/maven-repository-metadata-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.2.1/maven-repository-metadata-2.2.1.pom (1.9 kB at 43 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.2.1/maven-error-diagnostics-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.2.1/maven-error-diagnostics-2.2.1.pom (1.7 kB at 30 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.2.1/maven-project-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.2.1/maven-project-2.2.1.pom (2.8 kB at 39 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.2.1/maven-artifact-manager-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.2.1/maven-artifact-manager-2.2.1.pom (3.1 kB at 44 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/backport-util-concurrent/backport-util-concurrent/3.1/backport-util-concurrent-3.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/backport-util-concurrent/backport-util-concurrent/3.1/backport-util-concurrent-3.1.pom (880 B at 10 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.2.1/maven-plugin-registry-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.2.1/maven-plugin-registry-2.2.1.pom (1.9 kB at 32 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.2.1/maven-plugin-descriptor-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.2.1/maven-plugin-descriptor-2.2.1.pom (2.1 kB at 40 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.2.1/maven-monitor-2.2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.2.1/maven-monitor-2.2.1.pom (1.3 kB at 29 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/0.1/maven-shared-utils-0.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/0.1/maven-shared-utils-0.1.pom (4.0 kB at 69 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/18/maven-shared-components-18.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/18/maven-shared-components-18.pom (4.9 kB at 55 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/google/code/findbugs/jsr305/2.0.1/jsr305-2.0.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/google/code/findbugs/jsr305/2.0.1/jsr305-2.0.1.pom (965 B at 11 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-java/0.9.10/plexus-java-0.9.10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-java/0.9.10/plexus-java-0.9.10.pom (5.1 kB at 84 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-languages/0.9.10/plexus-languages-0.9.10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-languages/0.9.10/plexus-languages-0.9.10.pom (4.1 kB at 81 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/ow2/asm/asm/6.2/asm-6.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/ow2/asm/asm/6.2/asm-6.2.pom (2.9 kB at 61 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/ow2/ow2/1.5/ow2-1.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/ow2/ow2/1.5/ow2-1.5.pom (11 kB at 234 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/thoughtworks/qdox/qdox/2.0-M9/qdox-2.0-M9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/thoughtworks/qdox/qdox/2.0-M9/qdox-2.0-M9.pom (16 kB at 198 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/9/oss-parent-9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/oss/oss-parent/9/oss-parent-9.pom (6.6 kB at 61 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-api/2.8.4/plexus-compiler-api-2.8.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-api/2.8.4/plexus-compiler-api-2.8.4.pom (867 B at 11 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler/2.8.4/plexus-compiler-2.8.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler/2.8.4/plexus-compiler-2.8.4.pom (6.0 kB at 121 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/4.0/plexus-components-4.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/4.0/plexus-components-4.0.pom (2.7 kB at 78 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0.22/plexus-utils-3.0.22.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0.22/plexus-utils-3.0.22.pom (3.8 kB at 57 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/3.3.1/plexus-3.3.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/3.3.1/plexus-3.3.1.pom (20 kB at 273 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/17/spice-parent-17.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/17/spice-parent-17.pom (6.8 kB at 84 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-manager/2.8.4/plexus-compiler-manager-2.8.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-manager/2.8.4/plexus-compiler-manager-2.8.4.pom (692 B at 3.3 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-javac/2.8.4/plexus-compiler-javac-2.8.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-javac/2.8.4/plexus-compiler-javac-2.8.4.pom (771 B at 12 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compilers/2.8.4/plexus-compilers-2.8.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compilers/2.8.4/plexus-compilers-2.8.4.pom (1.3 kB at 22 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/3.0/maven-model-3.0.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/3.0/maven-plugin-api-3.0.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-plexus/1.4.2/sisu-inject-plexus-1.4.2.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-bean/1.4.2/sisu-inject-bean-1.4.2.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-guice/2.1.7/sisu-guice-2.1.7-noaop.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/3.0/maven-model-3.0.jar (165 kB at 803 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/3.0/maven-artifact-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/3.0/maven-plugin-api-3.0.jar (49 kB at 150 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.4/plexus-utils-2.0.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-plexus/1.4.2/sisu-inject-plexus-1.4.2.jar (202 kB at 454 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/3.0/maven-core-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/3.0/maven-artifact-3.0.jar (52 kB at 122 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/3.0/maven-settings-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-inject-bean/1.4.2/sisu-inject-bean-1.4.2.jar (153 kB at 341 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings-builder/3.0/maven-settings-builder-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/3.0/maven-settings-3.0.jar (47 kB at 65 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/3.0/maven-repository-metadata-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/sisu/sisu-guice/2.1.7/sisu-guice-2.1.7-noaop.jar (472 kB at 631 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model-builder/3.0/maven-model-builder-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings-builder/3.0/maven-settings-builder-3.0.jar (38 kB at 49 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-aether-provider/3.0/maven-aether-provider-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.4/plexus-utils-2.0.4.jar (222 kB at 280 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-impl/1.7/aether-impl-1.7.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/3.0/maven-repository-metadata-3.0.jar (30 kB at 34 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-spi/1.7/aether-spi-1.7.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-aether-provider/3.0/maven-aether-provider-3.0.jar (51 kB at 54 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-api/1.7/aether-api-1.7.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-spi/1.7/aether-spi-1.7.jar (14 kB at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-util/1.7/aether-util-1.7.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model-builder/3.0/maven-model-builder-3.0.jar (148 kB at 142 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.14/plexus-interpolation-1.14.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-impl/1.7/aether-impl-1.7.jar (106 kB at 100 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/2.2.3/plexus-classworlds-2.2.3.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/2.2.3/plexus-classworlds-2.2.3.jar (46 kB at 40 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-annotations/1.7.1/plexus-component-annotations-1.7.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-api/1.7/aether-api-1.7.jar (74 kB at 62 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.3/plexus-sec-dispatcher-1.3.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/aether/aether-util/1.7/aether-util-1.7.jar (108 kB at 88 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/3.0/maven-core-3.0.jar (527 kB at 412 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/3.2.1/maven-shared-utils-3.2.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-annotations/1.7.1/plexus-component-annotations-1.7.1.jar (4.3 kB at 3.3 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/commons-io/commons-io/2.5/commons-io-2.5.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.14/plexus-interpolation-1.14.jar (61 kB at 46 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-incremental/1.1/maven-shared-incremental-1.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-sec-dispatcher/1.3/plexus-sec-dispatcher-1.3.jar (29 kB at 21 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-java/0.9.10/plexus-java-0.9.10.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/plexus/plexus-cipher/1.4/plexus-cipher-1.4.jar (13 kB at 9.9 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/ow2/asm/asm/6.2/asm-6.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/3.2.1/maven-shared-utils-3.2.1.jar (167 kB at 114 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/thoughtworks/qdox/qdox/2.0-M9/qdox-2.0-M9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-incremental/1.1/maven-shared-incremental-1.1.jar (14 kB at 9.0 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-api/2.8.4/plexus-compiler-api-2.8.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-java/0.9.10/plexus-java-0.9.10.jar (39 kB at 26 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-manager/2.8.4/plexus-compiler-manager-2.8.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-api/2.8.4/plexus-compiler-api-2.8.4.jar (27 kB at 16 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/ow2/asm/asm/6.2/asm-6.2.jar (111 kB at 67 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-javac/2.8.4/plexus-compiler-javac-2.8.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-manager/2.8.4/plexus-compiler-manager-2.8.4.jar (4.7 kB at 2.7 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-compiler-javac/2.8.4/plexus-compiler-javac-2.8.4.jar (21 kB at 12 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/commons-io/commons-io/2.5/commons-io-2.5.jar (209 kB at 119 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/com/thoughtworks/qdox/qdox/2.0-M9/qdox-2.0-M9.jar (317 kB at 177 kB/s)
[INFO] Changes detected - recompiling the module!
[WARNING] File encoding has not been set, using platform encoding UTF-8, i.e. build is platform dependent!
[INFO] Compiling 1 source file to /app/target/classes
[INFO]
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ worker ---
[WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory /app/src/test/resources
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:testCompile (default-testCompile) @ worker ---
[INFO] Changes detected - recompiling the module!
[WARNING] File encoding has not been set, using platform encoding UTF-8, i.e. build is platform dependent!
[INFO] Compiling 1 source file to /app/target/test-classes
[INFO]
[INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ worker ---
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.9/maven-plugin-api-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.9/maven-plugin-api-2.0.9.pom (1.5 kB at 15 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.9/maven-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.9/maven-2.0.9.pom (19 kB at 233 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/8/maven-parent-8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/8/maven-parent-8.pom (24 kB at 389 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/4/apache-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/4/apache-4.pom (4.5 kB at 49 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-booter/2.12.4/surefire-booter-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-booter/2.12.4/surefire-booter-2.12.4.pom (3.0 kB at 28 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-api/2.12.4/surefire-api-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-api/2.12.4/surefire-api-2.12.4.pom (2.5 kB at 38 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/maven-surefire-common/2.12.4/maven-surefire-common-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/maven-surefire-common/2.12.4/maven-surefire-common-2.12.4.pom (5.5 kB at 74 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugin-tools/maven-plugin-annotations/3.1/maven-plugin-annotations-3.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugin-tools/maven-plugin-annotations/3.1/maven-plugin-annotations-3.1.pom (1.6 kB at 20 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugin-tools/maven-plugin-tools/3.1/maven-plugin-tools-3.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugin-tools/maven-plugin-tools/3.1/maven-plugin-tools-3.1.pom (16 kB at 180 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.9/maven-artifact-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.9/maven-artifact-2.0.9.pom (1.6 kB at 24 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0.8/plexus-utils-3.0.8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0.8/plexus-utils-3.0.8.pom (3.1 kB at 41 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/3.2/plexus-3.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/3.2/plexus-3.2.pom (19 kB at 298 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.9/maven-project-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.9/maven-project-2.0.9.pom (2.7 kB at 46 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.9/maven-settings-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.9/maven-settings-2.0.9.pom (2.1 kB at 30 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.9/maven-model-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.9/maven-model-2.0.9.pom (3.1 kB at 35 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.9/maven-profile-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.9/maven-profile-2.0.9.pom (2.0 kB at 20 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.9/maven-artifact-manager-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.9/maven-artifact-manager-2.0.9.pom (2.7 kB at 40 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.9/maven-repository-metadata-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.9/maven-repository-metadata-2.0.9.pom (1.9 kB at 30 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.9/maven-plugin-registry-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.9/maven-plugin-registry-2.0.9.pom (2.0 kB at 22 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.9/maven-core-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.9/maven-core-2.0.9.pom (7.8 kB at 120 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.9/maven-plugin-parameter-documenter-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.9/maven-plugin-parameter-documenter-2.0.9.pom (2.0 kB at 52 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.9/maven-reporting-api-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.9/maven-reporting-api-2.0.9.pom (1.8 kB at 29 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting/2.0.9/maven-reporting-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting/2.0.9/maven-reporting-2.0.9.pom (1.5 kB at 45 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.9/maven-error-diagnostics-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.9/maven-error-diagnostics-2.0.9.pom (1.7 kB at 39 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.9/maven-plugin-descriptor-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.9/maven-plugin-descriptor-2.0.9.pom (2.1 kB at 42 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.9/maven-monitor-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.9/maven-monitor-2.0.9.pom (1.3 kB at 27 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-toolchain/2.0.9/maven-toolchain-2.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-toolchain/2.0.9/maven-toolchain-2.0.9.pom (3.5 kB at 81 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-lang3/3.1/commons-lang3-3.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-lang3/3.1/commons-lang3-3.1.pom (17 kB at 184 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-parent/22/commons-parent-22.pom (42 kB at 635 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/apache/9/apache-9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/apache/9/apache-9.pom (15 kB at 183 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.3/maven-common-artifact-filters-1.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.3/maven-common-artifact-filters-1.3.pom (3.7 kB at 40 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/12/maven-shared-components-12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/12/maven-shared-components-12.pom (9.3 kB at 135 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/13/maven-parent-13.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/13/maven-parent-13.pom (23 kB at 348 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-9/plexus-container-default-1.0-alpha-9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-9/plexus-container-default-1.0-alpha-9.pom (1.2 kB at 21 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.9/maven-plugin-api-2.0.9.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-booter/2.12.4/surefire-booter-2.12.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/maven-surefire-common/2.12.4/maven-surefire-common-2.12.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-api/2.12.4/surefire-api-2.12.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-lang3/3.1/commons-lang3-3.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.9/maven-plugin-api-2.0.9.jar (13 kB at 63 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.3/maven-common-artifact-filters-1.3.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-booter/2.12.4/surefire-booter-2.12.4.jar (35 kB at 144 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0.8/plexus-utils-3.0.8.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-api/2.12.4/surefire-api-2.12.4.jar (118 kB at 338 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.9/maven-artifact-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.3/maven-common-artifact-filters-1.3.jar (31 kB at 76 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.9/maven-project-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/maven-surefire-common/2.12.4/maven-surefire-common-2.12.4.jar (263 kB at 565 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.9/maven-settings-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/commons/commons-lang3/3.1/commons-lang3-3.1.jar (316 kB at 657 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.9/maven-profile-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.9/maven-profile-2.0.9.jar (35 kB at 62 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.9/maven-model-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0.8/plexus-utils-3.0.8.jar (232 kB at 393 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.9/maven-artifact-manager-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.9/maven-artifact-2.0.9.jar (89 kB at 149 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.9/maven-plugin-registry-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.9/maven-project-2.0.9.jar (122 kB at 183 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.9/maven-settings-2.0.9.jar (49 kB at 74 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.9/maven-core-2.0.9.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.9/maven-plugin-parameter-documenter-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.9/maven-model-2.0.9.jar (87 kB at 112 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.9/maven-reporting-api-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0.9/maven-plugin-registry-2.0.9.jar (29 kB at 37 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.9/maven-repository-metadata-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.9/maven-artifact-manager-2.0.9.jar (58 kB at 73 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.9/maven-error-diagnostics-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0.9/maven-plugin-parameter-documenter-2.0.9.jar (21 kB at 25 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0.9/maven-reporting-api-2.0.9.jar (10 kB at 12 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.9/maven-plugin-descriptor-2.0.9.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.9/maven-monitor-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.9/maven-repository-metadata-2.0.9.jar (25 kB at 28 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-toolchain/2.0.9/maven-toolchain-2.0.9.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0.9/maven-core-2.0.9.jar (160 kB at 182 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugin-tools/maven-plugin-annotations/3.1/maven-plugin-annotations-3.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0.9/maven-error-diagnostics-2.0.9.jar (14 kB at 15 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0.9/maven-monitor-2.0.9.jar (10 kB at 11 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0.9/maven-plugin-descriptor-2.0.9.jar (37 kB at 39 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugin-tools/maven-plugin-annotations/3.1/maven-plugin-annotations-3.1.jar (14 kB at 14 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-toolchain/2.0.9/maven-toolchain-2.0.9.jar (38 kB at 39 kB/s)
[INFO] Surefire report directory: /app/target/surefire-reports
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-junit4/2.12.4/surefire-junit4-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-junit4/2.12.4/surefire-junit4-2.12.4.pom (2.4 kB at 65 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-providers/2.12.4/surefire-providers-2.12.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-providers/2.12.4/surefire-providers-2.12.4.pom (2.3 kB at 37 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-junit4/2.12.4/surefire-junit4-2.12.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/surefire/surefire-junit4/2.12.4/surefire-junit4-2.12.4.jar (37 kB at 406 kB/s)

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.peelmicro.AppTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.09 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[INFO]
[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ worker ---
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.5/maven-archiver-2.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.5/maven-archiver-2.5.pom (4.5 kB at 101 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/2.1/plexus-archiver-2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/2.1/plexus-archiver-2.1.pom (2.8 kB at 45 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0/plexus-utils-3.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0/plexus-utils-3.0.pom (4.1 kB at 47 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/16/spice-parent-16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/spice/spice-parent/16/spice-parent-16.pom (8.4 kB at 142 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/5/forge-parent-5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/sonatype/forge/forge-parent/5/forge-parent-5.pom (8.4 kB at 106 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/2.0.2/plexus-io-2.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/2.0.2/plexus-io-2.0.2.pom (1.7 kB at 42 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.19/plexus-components-1.1.19.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.19/plexus-components-1.1.19.pom (2.7 kB at 67 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/3.0.1/plexus-3.0.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/3.0.1/plexus-3.0.1.pom (19 kB at 327 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.15/plexus-interpolation-1.15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.15/plexus-interpolation-1.15.pom (1.0 kB at 18 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.1/commons-lang-2.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.1/commons-lang-2.1.pom (9.9 kB at 207 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1-alpha-2/classworlds-1.1-alpha-2.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.5/maven-archiver-2.5.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.15/plexus-interpolation-1.15.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/2.1/plexus-archiver-2.1.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/2.0.2/plexus-io-2.0.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.5/maven-archiver-2.5.jar (22 kB at 151 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.1/commons-lang-2.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/classworlds/classworlds/1.1-alpha-2/classworlds-1.1-alpha-2.jar (38 kB at 211 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0/plexus-utils-3.0.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.15/plexus-interpolation-1.15.jar (60 kB at 334 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/2.0.2/plexus-io-2.0.2.jar (58 kB at 211 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/2.1/plexus-archiver-2.1.jar (184 kB at 566 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/3.0/plexus-utils-3.0.jar (226 kB at 665 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/commons-lang/commons-lang/2.1/commons-lang-2.1.jar (208 kB at 607 kB/s)
[INFO] Building jar: /app/target/worker-1.0-SNAPSHOT.jar
[INFO]
[INFO] --- maven-assembly-plugin:2.2-beta-5:single (make-my-jar-with-dependencies) @ worker ---
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.1/maven-common-artifact-filters-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.1/maven-common-artifact-filters-1.1.pom (2.8 kB at 52 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/10/maven-shared-components-10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/10/maven-shared-components-10.pom (8.4 kB at 172 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/9/maven-parent-9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/9/maven-parent-9.pom (33 kB at 505 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.8/maven-artifact-2.0.8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.8/maven-artifact-2.0.8.pom (1.6 kB at 38 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.8/maven-2.0.8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.8/maven-2.0.8.pom (12 kB at 263 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/6/maven-parent-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/6/maven-parent-6.pom (20 kB at 466 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.6/plexus-utils-1.4.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.6/plexus-utils-1.4.6.pom (2.3 kB at 38 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-plugin-testing-harness/1.1/maven-plugin-testing-harness-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-plugin-testing-harness/1.1/maven-plugin-testing-harness-1.1.pom (6.3 kB at 141 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/7/maven-shared-components-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/7/maven-shared-components-7.pom (2.6 kB at 60 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0/maven-project-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0/maven-project-2.0.pom (1.6 kB at 43 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0/maven-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0/maven-2.0.pom (8.8 kB at 231 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0/maven-profile-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0/maven-profile-2.0.pom (1.4 kB at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0/maven-model-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0/maven-model-2.0.pom (2.4 kB at 55 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-8/plexus-container-default-1.0-alpha-8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-8/plexus-container-default-1.0-alpha-8.pom (7.3 kB at 177 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0/maven-artifact-manager-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0/maven-artifact-manager-2.0.pom (1.3 kB at 24 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0/maven-repository-metadata-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0/maven-repository-metadata-2.0.pom (1.2 kB at 25 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0/maven-artifact-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0/maven-artifact-2.0.pom (723 B at 8.8 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0/maven-core-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-core/2.0/maven-core-2.0.pom (5.6 kB at 54 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0/maven-settings-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0/maven-settings-2.0.pom (1.4 kB at 18 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0/maven-plugin-parameter-documenter-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-parameter-documenter/2.0/maven-plugin-parameter-documenter-2.0.pom (1.5 kB at 27 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0/maven-reporting-api-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting-api/2.0/maven-reporting-api-2.0.pom (1.1 kB at 30 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting/2.0/maven-reporting-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/reporting/maven-reporting/2.0/maven-reporting-2.0.pom (504 B at 13 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/doxia/doxia-sink-api/1.0-alpha-4/doxia-sink-api-1.0-alpha-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/doxia/doxia-sink-api/1.0-alpha-4/doxia-sink-api-1.0-alpha-4.pom (1.1 kB at 33 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0/maven-error-diagnostics-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-error-diagnostics/2.0/maven-error-diagnostics-2.0.pom (812 B at 11 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0/maven-plugin-registry-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-registry/2.0/maven-plugin-registry-2.0.pom (1.3 kB at 18 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0/maven-plugin-api-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0/maven-plugin-api-2.0.pom (601 B at 12 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0/maven-plugin-descriptor-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-descriptor/2.0/maven-plugin-descriptor-2.0.pom (1.5 kB at 17 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0/maven-monitor-2.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-monitor/2.0/maven-monitor-2.0.pom (400 B at 7.4 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.2/plexus-utils-1.4.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.2/plexus-utils-1.4.2.pom (2.0 kB at 37 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-7/plexus-archiver-1.0-alpha-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-7/plexus-archiver-1.0-alpha-7.pom (1.0 kB at 17 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.6/plexus-components-1.1.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.6/plexus-components-1.1.6.pom (1.9 kB at 33 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.8/plexus-1.0.8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.8/plexus-1.0.8.pom (7.2 kB at 111 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.2/plexus-utils-1.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.2/plexus-utils-1.2.pom (767 B at 10 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.5/plexus-1.0.5.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.5/plexus-1.0.5.pom (5.9 kB at 78 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.7/plexus-interpolation-1.7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.7/plexus-interpolation-1.7.pom (2.9 kB at 42 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-12/plexus-archiver-1.0-alpha-12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-12/plexus-archiver-1.0-alpha-12.pom (1.6 kB at 25 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/1.0-alpha-4/plexus-io-1.0-alpha-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/1.0-alpha-4/plexus-io-1.0-alpha-4.pom (1.2 kB at 21 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/file-management/1.1/file-management-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/file-management/1.1/file-management-1.1.pom (2.7 kB at 53 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/4/maven-shared-components-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/4/maven-shared-components-4.pom (2.2 kB at 47 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/4/maven-parent-4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/4/maven-parent-4.pom (10.0 kB at 270 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-io/1.0/maven-shared-io-1.0.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-io/1.0/maven-shared-io-1.0.pom (3.0 kB at 92 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.2/maven-artifact-2.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.2/maven-artifact-2.0.2.pom (765 B at 24 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.2/maven-2.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.2/maven-2.0.2.pom (13 kB at 249 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.1/plexus-utils-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.1/plexus-utils-1.1.pom (767 B at 7.9 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.2/maven-artifact-manager-2.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.2/maven-artifact-manager-2.0.2.pom (1.4 kB at 19 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.2/maven-repository-metadata-2.0.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.2/maven-repository-metadata-2.0.2.pom (1.3 kB at 21 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon-provider-api/1.0-alpha-6/wagon-provider-api-1.0-alpha-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon-provider-api/1.0-alpha-6/wagon-provider-api-1.0-alpha-6.pom (588 B at 10 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon/1.0-alpha-6/wagon-1.0-alpha-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon/1.0-alpha-6/wagon-1.0-alpha-6.pom (6.4 kB at 119 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-io/1.1/maven-shared-io-1.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-io/1.1/maven-shared-io-1.1.pom (4.1 kB at 47 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/8/maven-shared-components-8.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/8/maven-shared-components-8.pom (2.7 kB at 39 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/7/maven-parent-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-parent/7/maven-parent-7.pom (21 kB at 417 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.0-beta-2/maven-filtering-1.0-beta-2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.0-beta-2/maven-filtering-1.0-beta-2.pom (4.0 kB at 60 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.6/plexus-utils-1.5.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.6/plexus-utils-1.5.6.pom (5.3 kB at 77 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.12/plexus-1.0.12.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.12/plexus-1.0.12.pom (9.8 kB at 151 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.6/plexus-interpolation-1.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.6/plexus-interpolation-1.6.pom (2.9 kB at 57 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-active-collections/1.0-beta-2/plexus-active-collections-1.0-beta-2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-active-collections/1.0-beta-2/plexus-active-collections-1.0-beta-2.pom (2.8 kB at 36 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-22/plexus-container-default-1.0-alpha-22.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-22/plexus-container-default-1.0-alpha-22.pom (3.0 kB at 45 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0-alpha-22/plexus-containers-1.0-alpha-22.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0-alpha-22/plexus-containers-1.0-alpha-22.pom (1.9 kB at 41 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.10/plexus-1.0.10.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.10/plexus-1.0.10.pom (8.2 kB at 101 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.3/plexus-utils-1.3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.3/plexus-utils-1.3.pom (1.0 kB at 13 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/1.2-alpha-7/plexus-classworlds-1.2-alpha-7.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/1.2-alpha-7/plexus-classworlds-1.2-alpha-7.pom (2.4 kB at 46 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.9/plexus-1.0.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus/1.0.9/plexus-1.0.9.pom (7.7 kB at 175 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.4/maven-plugin-api-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.4/maven-plugin-api-2.0.4.pom (643 B at 16 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.4/maven-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven/2.0.4/maven-2.0.4.pom (12 kB at 357 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.4/maven-project-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.4/maven-project-2.0.4.pom (1.8 kB at 51 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.4/maven-settings-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-settings/2.0.4/maven-settings-2.0.4.pom (1.6 kB at 52 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.4/maven-model-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.4/maven-model-2.0.4.pom (2.7 kB at 59 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.4/maven-profile-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.4/maven-profile-2.0.4.pom (1.6 kB at 41 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.4/maven-artifact-manager-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.4/maven-artifact-manager-2.0.4.pom (1.4 kB at 40 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.4/maven-repository-metadata-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.4/maven-repository-metadata-2.0.4.pom (1.5 kB at 44 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.4/maven-artifact-2.0.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.4/maven-artifact-2.0.4.pom (765 B at 18 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.4/maven-archiver-2.4.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.4/maven-archiver-2.4.pom (3.4 kB at 69 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-11/plexus-archiver-1.0-alpha-11.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-11/plexus-archiver-1.0-alpha-11.pom (1.8 kB at 33 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.9/plexus-components-1.1.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-components/1.1.9/plexus-components-1.1.9.pom (2.4 kB at 43 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.1/plexus-utils-1.5.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.5.1/plexus-utils-1.5.1.pom (2.3 kB at 38 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-15/plexus-container-default-1.0-alpha-15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-container-default/1.0-alpha-15/plexus-container-default-1.0-alpha-15.pom (1.7 kB at 36 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0-alpha-15/plexus-containers-1.0-alpha-15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0-alpha-15/plexus-containers-1.0-alpha-15.pom (1.9 kB at 48 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-api/1.0-alpha-15/plexus-component-api-1.0-alpha-15.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-api/1.0-alpha-15/plexus-component-api-1.0-alpha-15.pom (948 B at 14 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/1.2-alpha-6/plexus-classworlds-1.2-alpha-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-classworlds/1.2-alpha-6/plexus-classworlds-1.2-alpha-6.pom (2.4 kB at 46 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/1.0-alpha-3/plexus-io-1.0-alpha-3.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/1.0-alpha-3/plexus-io-1.0-alpha-3.pom (1.4 kB at 33 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-api/1.0-alpha-16/plexus-component-api-1.0-alpha-16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-component-api/1.0-alpha-16/plexus-component-api-1.0-alpha-16.pom (2.2 kB at 47 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0-alpha-16/plexus-containers-1.0-alpha-16.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-containers/1.0-alpha-16/plexus-containers-1.0-alpha-16.pom (1.9 kB at 46 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.9/plexus-utils-1.4.9.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/1.4.9/plexus-utils-1.4.9.pom (2.3 kB at 74 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.1/plexus-utils-2.0.1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.1/plexus-utils-2.0.1.pom (3.3 kB at 108 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-repository-builder/1.0-alpha-2/maven-repository-builder-1.0-alpha-2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-repository-builder/1.0-alpha-2/maven-repository-builder-1.0-alpha-2.pom (3.2 kB at 72 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.0-alpha-1/maven-common-artifact-filters-1.0-alpha-1.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.0-alpha-1/maven-common-artifact-filters-1.0-alpha-1.pom (1.8 kB at
26 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/6/maven-shared-components-6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-components/6/maven-shared-components-6.pom (3.1 kB at 60 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.1/maven-common-artifact-filters-1.1.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-plugin-testing-harness/1.1/maven-plugin-testing-harness-1.1.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-12/plexus-archiver-1.0-alpha-12.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/file-management/1.1/file-management-1.1.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.7/plexus-interpolation-1.7.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-plugin-testing-harness/1.1/maven-plugin-testing-harness-1.1.jar (32 kB at 335 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-io/1.1/maven-shared-io-1.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/file-management/1.1/file-management-1.1.jar (31 kB at 247 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.2/maven-artifact-manager-2.0.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-interpolation/1.7/plexus-interpolation-1.7.jar (51 kB at 252 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-common-artifact-filters/1.1/maven-common-artifact-filters-1.1.jar (30 kB at 136 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.2/maven-repository-metadata-2.0.2.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon-provider-api/1.0-alpha-6/wagon-provider-api-1.0-alpha-6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-io/1.1/maven-shared-io-1.1.jar (39 kB at 164 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.0-beta-2/maven-filtering-1.0-beta-2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact-manager/2.0.2/maven-artifact-manager-2.0.2.jar (49 kB at 193 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-active-collections/1.0-beta-2/plexus-active-collections-1.0-beta-2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-archiver/1.0-alpha-12/plexus-archiver-1.0-alpha-12.jar (177 kB at 636 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/1.0-alpha-4/plexus-io-1.0-alpha-4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-repository-metadata/2.0.2/maven-repository-metadata-2.0.2.jar (20 kB at 60 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.4/maven-plugin-api-2.0.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-filtering/1.0-beta-2/maven-filtering-1.0-beta-2.jar (33 kB at 92 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-active-collections/1.0-beta-2/plexus-active-collections-1.0-beta-2.jar (21 kB at 57 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.4/maven-project-2.0.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.4/maven-profile-2.0.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon-provider-api/1.0-alpha-6/wagon-provider-api-1.0-alpha-6.jar (43 kB at 110 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-io/1.0-alpha-4/plexus-io-1.0-alpha-4.jar (48 kB at 119 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.4/maven-archiver-2.4.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.1/plexus-utils-2.0.1.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-plugin-api/2.0.4/maven-plugin-api-2.0.4.jar (8.3 kB at 19 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.4/maven-artifact-2.0.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-profile/2.0.4/maven-profile-2.0.4.jar (30 kB at 55 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.4/maven-model-2.0.4.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-artifact/2.0.4/maven-artifact-2.0.4.jar (80 kB at 135 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-repository-builder/1.0-alpha-2/maven-repository-builder-1.0-alpha-2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-archiver/2.4/maven-archiver-2.4.jar (20 kB at 32 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-repository-builder/1.0-alpha-2/maven-repository-builder-1.0-alpha-2.jar (23 kB at 36 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-project/2.0.4/maven-project-2.0.4.jar (109 kB at 162 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/apache/maven/maven-model/2.0.4/maven-model-2.0.4.jar (80 kB at 113 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/plexus/plexus-utils/2.0.1/plexus-utils-2.0.1.jar (222 kB at 307 kB/s)
[INFO] META-INF/ already added, skipping
[INFO] META-INF/MANIFEST.MF already added, skipping
[INFO] META-INF/maven/ already added, skipping
[INFO] Building jar: /app/target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar
[INFO] META-INF/ already added, skipping
[INFO] META-INF/MANIFEST.MF already added, skipping
[INFO] META-INF/maven/ already added, skipping
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  38.377 s
[INFO] Finished at: 2018-11-15T17:27:02Z
[INFO] ------------------------------------------------------------------------
Removing intermediate container 6118c84e2408
 ---> cb4a71dc713f
Step 5/7 : ENV REDIS_HOST=localhost
 ---> Running in 8ee77a18a78b
Removing intermediate container 8ee77a18a78b
 ---> 8dceb95dd2df
Step 6/7 : ENV REDIS_PORT=6379
 ---> Running in e6961df05b8d
Removing intermediate container e6961df05b8d
 ---> 39ada33adc04
Step 7/7 : ENTRYPOINT ["java","-cp","target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar","com.peelmicro.App"]
 ---> Running in bc44bef12d6c
Removing intermediate container bc44bef12d6c
 ---> a8b03c0ee75e
Successfully built a8b03c0ee75e
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
15. Execute the docker image to ensure that only errors related to the connection with Redis are shown.
```shell
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker
$ docker run a8b03c0ee75e
redis.clients.jedis.exceptions.JedisConnectionException: java.net.ConnectException: Connection refused (Connection refused)
        at redis.clients.jedis.Connection.connect(Connection.java:207)
        at redis.clients.jedis.BinaryClient.connect(BinaryClient.java:93)
        at redis.clients.jedis.Connection.setTimeoutInfinite(Connection.java:94)
        at redis.clients.jedis.Jedis.subscribe(Jedis.java:2678)
        at com.peelmicro.App.main(App.java:13)
Caused by: java.net.ConnectException: Connection refused (Connection refused)
        at java.base/java.net.PlainSocketImpl.socketConnect(Native Method)
        at java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)
        at java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)
        at java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)
        at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)
        at java.base/java.net.Socket.connect(Socket.java:591)
        at redis.clients.jedis.Connection.connect(Connection.java:184)
        ... 4 more
```
16. Modify the 'Dockerfile' document to avoid running the tests. Otherwise the build will fail because the initial connection to Postgres cannnot be executed.
 ```docker
# Start with a base image containing Java runtime and Maven
FROM maven:3.6.0-jdk-12-alpine
WORKDIR /app

COPY ./ ./
RUN mvn install -DskipTests

# Run the jar file 
ENTRYPOINT ["java","-cp","target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar","com.peelmicro.App"]
```
17. Test if the `docker image` can be built with success
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ cd worker

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/worker (master)
$ docker build .
Sending build context to Docker daemon  57.86kB
Step 1/5 : FROM maven:3.6.0-jdk-12-alpine
 ---> 02ec89615eb9
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> aae2277a68c3
Step 3/5 : COPY ./ ./
 ---> 9da12cd53b0f
Step 4/5 : RUN mvn install -DskipTests
 ---> Running in 6a25961e72fd
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------< com.peelmicro:worker >------------------------
[INFO] Installing /app/target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar to /root/.m2/repository/com/peelmicro/worker/1.0-SNAPSHOT/worker-1.0-SNAPSHOT-jar-with-dependencies.jar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  01:10 min
[INFO] Finished at: 2018-11-18T11:40:34Z
[INFO] ------------------------------------------------------------------------
Removing intermediate container 6a25961e72fd
 ---> f6a6c6514cae
Step 5/5 : ENTRYPOINT ["java","-cp","target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar","com.peelmicro.App"]
 ---> Running in bd895b13377b
Removing intermediate container bd895b13377b
 ---> 62ff969612e3
Successfully built 62ff969612e3
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

## Complete the solution copying the client and nginx projects from the original NodeJS solution and the Docker Compose file
1. Copy the client and nginx projects from the original NodeJS solution without changing anything

![](/images/projects/java-multi-docker/CopyClientNginx1.png)

![](/images/projects/java-multi-docker/CopyClientNginx2.png)

![](/images/projects/java-multi-docker/CopyClientNginx3.png)

2. Ensure the Docker image for the `client` project can be created with success
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ cd client

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/client (master)
$ docker build .
Sending build context to Docker daemon    341kB
Step 1/10 : FROM node:alpine as builder
 ---> 5d526f8ba00b
Step 2/10 : WORKDIR /app
 ---> Using cache
 ---> e7ae20d6064b
Step 3/10 : COPY ./package.json ./
 ---> e9e045ae0002
Step 4/10 : RUN npm install
 ---> Running in 42d9dbe29c80
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1687 packages from 666 contributors and audited 35695 packages in 70.936s
found 0 vulnerabilities

Removing intermediate container 42d9dbe29c80
 ---> e7721626a2f1
Step 5/10 : COPY . .
 ---> d94d8c95cf0c
Step 6/10 : RUN npm run build
 ---> Running in 66b8fcff0f46

> client@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.2 KB  build/static/js/1.7b85cb19.chunk.js
  1.37 KB  build/static/js/main.33dd28be.chunk.js
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

Removing intermediate container 66b8fcff0f46
 ---> bcbbbdd9f01b
Step 7/10 : FROM nginx
 ---> dbfc48660aeb
Step 8/10 : EXPOSE 3000
 ---> Running in e4f25deb69c6
Removing intermediate container e4f25deb69c6
 ---> 7a31af104837
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> 047878a3c885
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> e24d073bd670
Successfully built e24d073bd670
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
3. Ensure the Docker image for the `nginx` project can be created with success
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/nginx (master)
$ docker build .
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> be138f1b133d
Successfully built be138f1b133d
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
4. Initialize git repository executing the `git init` command
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex$ git init
Initialized empty Git repository in C:/Users/juan.pablo.perez/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/.git/
```
5. Copy the 'docker-compose.yml' file from the NodeJs solution, modify it and execute it
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
      context: ./server
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
      dockerfile: Dockerfile
      context: ./worker
    environment:
        - REDIS_HOST=redis
        - REDIS_PORT=6379      
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ docker-compose up
Creating network "java-complex_default" with the default driver
Building nginx
Step 1/2 : FROM nginx
 ---> dbfc48660aeb
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
.
.
.
Successfully tagged java-complex_worker:latest
WARNING: Image for service worker was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating java-complex_api_1 ...
Creating java-complex_nginx_1    ... error
Creating java-complex_worker_1 ...
Creating java-complex_api_1      ... done
Creating java-complex_redis_1    ...
Creating java-complex_worker_1   ... done
Creating java-complex_postgres_1 ... done
Creating java-complex_redis_1    ... doneCreating java-complex_client_1   ... done

ERROR: for nginx  Cannot start service nginx: driver failed programming external connectivity on endpoint java-complex_nginx_1 (37586b03e56b1f33c4ab238c5fab607aafd405630a23044326f9f507fb277866): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:3050:tcp:172.18.0.2:80: input/output error
ERROR: Encountered errors while bringing up the project.
```
##### If an error similar to the previous one happens, restart Docker and try again. #####
##### If the error persists, remove all the docker images because the nginx one from the other solutions could be affecting #####
##### If an error like "java docker Method org.postgresql.jdbc.PgConnection.createClob() is not yet implemented." happens modify the application.properties document from the server project #####
`application.properties`
```properties
## Spring DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
spring.datasource.url=jdbc:postgresql://${PGHOST}:${PGPORT}/${PGDATABASE}
spring.datasource.username= ${PGUSER}
spring.datasource.password= ${PGPASSWORD}
## To force the schema.sql to run
spring.datasource.initialization-mode=always

# The SQL dialect makes Hibernate generate better SQL for the chosen database
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect

# The following two lines is to avoid the Spring Boot + JPA (Hibernate) + Atomikos + PostgreSQL = exception! 
# https://vkuzel.com/spring-boot-jpa-hibernate-atomikos-postgresql-exception

# Disable feature detection by this undocumented parameter. Check the org.hibernate.engine.jdbc.internal.JdbcServiceImpl.configure method for more details.
spring.jpa.properties.hibernate.temp.use_jdbc_metadata_defaults = false

# Because detection is disabled you have to set correct dialect by hand.
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL9Dialect

# Hibernate ddl auto (none, create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto = none

# Define a different port from the standard 8080
server.port = 5000
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ docker-compose up --build
Building nginx
Step 1/2 : FROM nginx
 ---> e81eb098537d
Step 2/2 : COPY ./default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> a94da78131c1
Successfully built a94da78131c1
Successfully tagged java-complex_nginx:latest
Building api
Step 1/5 : FROM maven:3.6.0-jdk-12-alpine
 ---> 02ec89615eb9
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> 13ca89432976
Step 3/5 : COPY ./ ./
 ---> Using cache
 ---> 674973a454cc
Step 4/5 : RUN mvn install -DskipTests
 ---> Using cache
 ---> 9e2d24bd3583
Step 5/5 : ENTRYPOINT ["java","-jar","target/server-0.0.1-SNAPSHOT.jar"]
 ---> Using cache
 ---> 4b31594ba6db
Successfully built 4b31594ba6db
Successfully tagged java-complex_api:latest
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
 ---> Using cache
 ---> 790f18165745
Step 6/6 : CMD ["npm", "run", "start"]
 ---> Using cache
 ---> 8e4ccbf7eea8
Successfully built 8e4ccbf7eea8
Successfully tagged java-complex_client:latest
Building worker
Step 1/5 : FROM maven:3.6.0-jdk-12-alpine
 ---> 02ec89615eb9
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> 13ca89432976
Step 3/5 : COPY ./ ./
 ---> Using cache
 ---> 463038226073
Step 4/5 : RUN mvn install -DskipTests
 ---> Using cache
 ---> 8ad3d40e646b
Step 5/5 : ENTRYPOINT ["java","-cp","target/worker-1.0-SNAPSHOT-jar-with-dependencies.jar","com.peelmicro.App"]
 ---> Using cache
 ---> f9017fbfff58
Successfully built f9017fbfff58
Successfully tagged java-complex_worker:latest
Starting java-complex_client_1   ... done
Starting java-complex_worker_1   ... done
Starting java-complex_redis_1    ... done
Starting java-complex_nginx_1    ... done
Starting java-complex_api_1      ... done
Starting java-complex_postgres_1 ... done
Attaching to java-complex_api_1, java-complex_redis_1, java-complex_worker_1, java-complex_nginx_1, java-complex_postgres_1, java-complex_client_1
redis_1     | 1:C 18 Nov 2018 16:11:15.107 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1     | 1:C 18 Nov 2018 16:11:15.107 # Redis version=5.0.1, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1     | 1:C 18 Nov 2018 16:11:15.107 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1     | 1:M 18 Nov 2018 16:11:15.109 * Running mode=standalone, port=6379.
redis_1     | 1:M 18 Nov 2018 16:11:15.109 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1     | 1:M 18 Nov 2018 16:11:15.109 # Server initialized
redis_1     | 1:M 18 Nov 2018 16:11:15.109 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1     | 1:M 18 Nov 2018 16:11:15.109 * DB loaded from disk: 0.000 seconds
redis_1     | 1:M 18 Nov 2018 16:11:15.109 * Ready to accept connections
postgres_1  | 2018-11-18 16:11:17.211 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres_1  | 2018-11-18 16:11:17.215 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres_1  | 2018-11-18 16:11:17.318 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres_1  | 2018-11-18 16:11:17.500 UTC [22] LOG:  database system was shut down at 2018-11-18 16:10:53 UTC
postgres_1  | 2018-11-18 16:11:17.522 UTC [1] LOG:  database system is ready to accept connections
client_1    |
client_1    | > client@0.1.0 start /app
client_1    | > react-scripts start
client_1    |
api_1       |
api_1       |   .   ____          _            __ _ _
api_1       |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
api_1       | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
api_1       |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
api_1       |   '  |____| .__|_| |_|_| |_\__, | / / / /
api_1       |  =========|_|==============|___/=/_/_/_/
api_1       |  :: Spring Boot ::        (v2.1.0.RELEASE)
api_1       |
api_1       | 2018-11-18 16:11:20.262  INFO 1 --- [           main] com.peelmicro.server.ServerApplication   : Starting ServerApplication v0.0.1-SNAPSHOT on 0345af4e1eae with PID 1 (/app/target/server-0.0.1-SNAPSHOT.jar started by root in /app)
api_1       | 2018-11-18 16:11:20.276  INFO 1 --- [           main] com.peelmicro.server.ServerApplication   : No active profile set, falling back to default profiles: default
api_1       | 2018-11-18 16:11:24.068  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data repositories in DEFAULT mode.
api_1       | 2018-11-18 16:11:24.555  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 458ms. Found 1 repository interfaces.
api_1       | 2018-11-18 16:11:26.122  INFO 1 --- [           main] trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration' of type [org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration$$EnhancerBySpringCGLIB$$3326421c] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
api_1       | 2018-11-18 16:11:27.996  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 5000 (http)
api_1       | 2018-11-18 16:11:28.120  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
api_1       | 2018-11-18 16:11:28.134  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/9.0.12
api_1       | 2018-11-18 16:11:28.200  INFO 1 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [/opt/openjdk-12/lib/server:/opt/openjdk-12/lib:/opt/openjdk-12/../lib:/usr/java/packages/lib:/usr/lib64:/lib64:/lib:/usr/lib]
api_1       | 2018-11-18 16:11:28.687  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
api_1       | 2018-11-18 16:11:28.688  INFO 1 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 7996 ms
api_1       | 2018-11-18 16:11:28.918  INFO 1 --- [           main] o.s.b.w.servlet.ServletRegistrationBean  : Servlet dispatcherServlet mapped to [/]
api_1       | 2018-11-18 16:11:28.941  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'characterEncodingFilter' to: [/*]
api_1       | 2018-11-18 16:11:28.942  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
api_1       | 2018-11-18 16:11:28.942  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'formContentFilter' to: [/*]
api_1       | 2018-11-18 16:11:28.943  INFO 1 --- [           main] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'requestContextFilter' to: [/*]
api_1       | 2018-11-18 16:11:29.416  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
api_1       | 2018-11-18 16:11:29.926  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
api_1       | 2018-11-18 16:11:30.559  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [
api_1       |   name: default
api_1       |   ...]
api_1       | 2018-11-18 16:11:30.931  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate Core {5.3.7.Final}
api_1       | 2018-11-18 16:11:30.945  INFO 1 --- [           main] org.hibernate.cfg.Environment            : HHH000206: hibernate.properties not found
api_1       | 2018-11-18 16:11:31.421  INFO 1 --- [           main] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.0.4.Final}
api_1       | 2018-11-18 16:11:32.885  INFO 1 --- [           main] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.PostgreSQLDialect
api_1       | 2018-11-18 16:11:32.927  INFO 1 --- [           main] o.h.e.j.e.i.LobCreatorBuilderImpl        : HHH000422: Disabling contextual LOB creation as connection was null
api_1       | 2018-11-18 16:11:32.956  INFO 1 --- [           main] org.hibernate.type.BasicTypeRegistry     : HHH000270: Type registration [java.util.UUID] overrides previous : org.hibernate.type.UUIDBinaryType@1b39fd82
api_1       | 2018-11-18 16:11:34.183  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
client_1    | Starting the development server...
client_1    |
api_1       | 2018-11-18 16:11:35.941  INFO 1 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
api_1       | 2018-11-18 16:11:36.102  WARN 1 --- [           main] aWebConfiguration$JpaWebMvcConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
api_1       | 2018-11-18 16:11:36.810  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 5000 (http) with context path ''
api_1       | 2018-11-18 16:11:36.815  INFO 1 --- [           main] com.peelmicro.server.ServerApplication   : Started ServerApplication in 18.756 seconds (JVM running for 22.023)
```
6. Ensure the application is executed properly on `http://localhost:3050/`

![](/images/projects/java-multi-docker/ApplicationRunning.png)

7. Create the new `java-multi-docker` repository

![](/images/projects/java-multi-docker/NewGithubRepository.png)

![](/images/projects/java-multi-docker/NewGitGubRepository2.png)

8. Link the project to the new repository and push the first commit.
```sh
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        README.md
        client/
        docker-compose.yml
        nginx/
        server/
        worker/

nothing added to commit but untracked files present (use "git add" to track)

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in client/.gitignore.
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
warning: LF will be replaced by CRLF in server/.gitignore.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/.mvn/wrapper/maven-wrapper.properties.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/mvnw.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/mvnw.cmd.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/pom.xml.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in server/src/test/java/com/peelmicro/server/DemoApplicationTests.java.
The file will have its original line endings in your working directory.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
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
        new file:   server/.dockerignore
        new file:   server/.gitignore
        new file:   server/.mvn/wrapper/maven-wrapper.jar
        new file:   server/.mvn/wrapper/maven-wrapper.properties
        new file:   server/.vscode/launch.json
        new file:   server/Dockerfile
        new file:   server/Running
        new file:   server/mvnw
        new file:   server/mvnw.cmd
        new file:   server/pom.xml
        new file:   server/src/main/java/com/peelmicro/server/ServerApplication.java
        new file:   server/src/main/java/com/peelmicro/server/controllers/ValuesController.java
        new file:   server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java
        new file:   server/src/main/java/com/peelmicro/server/models/Value.java
        new file:   server/src/main/java/com/peelmicro/server/repositories/ValuesRepository.java
        new file:   server/src/main/java/com/peelmicro/server/services/RedisService.java
        new file:   server/src/main/resources/application.properties
        new file:   server/src/main/resources/schema.sql
        new file:   server/src/test/java/com/peelmicro/server/DemoApplicationTests.java
        new file:   worker/.classpath
        new file:   worker/.dockerignore
        new file:   worker/.project
        new file:   worker/.settings/org.eclipse.jdt.apt.core.prefs
        new file:   worker/.settings/org.eclipse.jdt.core.prefs
        new file:   worker/.settings/org.eclipse.m2e.core.prefs
        new file:   worker/.vscode/launch.json
        new file:   worker/Dockerfile
        new file:   worker/pom.xml
        new file:   worker/src/main/java/com/peelmicro/App.java
        new file:   worker/src/test/java/com/peelmicro/AppTest.java


Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "first commit"
[master (root-commit) 54bdfe0] first commit
 55 files changed, 10252 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 client/.gitignore
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
 create mode 100644 server/.dockerignore
 create mode 100644 server/.gitignore
 create mode 100644 server/.mvn/wrapper/maven-wrapper.jar
 create mode 100644 server/.mvn/wrapper/maven-wrapper.properties
 create mode 100644 server/.vscode/launch.json
 create mode 100644 server/Dockerfile
 create mode 100644 server/Running
 create mode 100644 server/mvnw
 create mode 100644 server/mvnw.cmd
 create mode 100644 server/pom.xml
 create mode 100644 server/src/main/java/com/peelmicro/server/ServerApplication.java
 create mode 100644 server/src/main/java/com/peelmicro/server/controllers/ValuesController.java
 create mode 100644 server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java
 create mode 100644 server/src/main/java/com/peelmicro/server/models/Value.java
 create mode 100644 server/src/main/java/com/peelmicro/server/repositories/ValuesRepository.java
 create mode 100644 server/src/main/java/com/peelmicro/server/services/RedisService.java
 create mode 100644 server/src/main/resources/application.properties
 create mode 100644 server/src/main/resources/schema.sql
 create mode 100644 server/src/test/java/com/peelmicro/server/DemoApplicationTests.java
 create mode 100644 worker/.classpath
 create mode 100644 worker/.dockerignore
 create mode 100644 worker/.project
 create mode 100644 worker/.settings/org.eclipse.jdt.apt.core.prefs
 create mode 100644 worker/.settings/org.eclipse.jdt.core.prefs
 create mode 100644 worker/.settings/org.eclipse.m2e.core.prefs
 create mode 100644 worker/.vscode/launch.json
 create mode 100644 worker/Dockerfile
 create mode 100644 worker/pom.xml
 create mode 100644 worker/src/main/java/com/peelmicro/App.java
 create mode 100644 worker/src/test/java/com/peelmicro/AppTest.java

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git remote add origin https://github.com/peelmicro/java-multi-docker.git

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 93, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (68/68), done.
Writing objects: 100% (93/93), 146.13 KiB | 880.00 KiB/s, done.
Total 93 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/peelmicro/java-multi-docker/pull/new/master
remote:
To https://github.com/peelmicro/java-multi-docker.git
 * [new branch]      HEAD -> master
```
9. Prepare the integration with Travis CI
* Create the following `.travis.yml` document (where the deployment on Amazon AWS is commented out)
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
  - docker build -t peelmicro/java-multi-client ./client
  - docker build -t peelmicro/java-multi-nginx ./nginx
  - docker build -t peelmicro/java-multi-server ./Server
  - docker build -t peelmicro/java-multi-worker ./Worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/java-multi-client
  - docker push peelmicro/java-multi-nginx
  - docker push peelmicro/java-multi-server
  - docker push peelmicro/java-multi-worker
#deploy:
#  provider: elasticbeanstalk
#  region: "us-east-1"
#  app: "java-muti-docker"
#  env: "JavaMutiDocker-env"
#  bucket_name: "elasticbeanstalk-us-east-1-972569889348"
#  #bucket_path: ""
#  on:
#    branch: "master"
#  access_key_id: $AWS_ACCESS_KEY
#  secret_access_key:
#    secure: "$AWS_SECRET_KEY"
```
* Access the `java-multi-docker` repository on [Travis CI](https://travis-ci.com/peelmicro/java-multi-docker)

![](/images/projects/java-multi-docker/TravisCI.png)

* Add the `DOCKER_PASSWORD` and `DOCKER_ID` environment variables on [Travis CI](https://travis-ci.com/peelmicro/java-multi-docker/settings)

![](/images/projects/java-multi-docker/TravisCI2.png)

* Create and push a new commit to include the new `.travis.yml` file and force Travis to execute it.
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .travis.yml

nothing added to commit but untracked files present (use "git add" to track)

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   .travis.yml


Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "Added .travis.yml"
[master ed135b4] Added .travis.yml
 1 file changed, 34 insertions(+)
 create mode 100644 .travis.yml

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 772 bytes | 193.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/peelmicro/java-multi-docker.git
   54bdfe0..ed135b4  HEAD -> master
```
* Ensure the new Build has started on Travis CI.

![](/images/projects/java-multi-docker/TravisCI3.png)

`Travis CI View Config`
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
    "docker build -t peelmicro/java-multi-client ./client",
    "docker build -t peelmicro/java-multi-nginx ./nginx",
    "docker build -t peelmicro/java-multi-server ./server",
    "docker build -t peelmicro/java-multi-worker ./worker",
    "echo \"$DOCKER_PASSWORD\" | docker login -u \"$DOCKER_ID\" --password-stdin",
    "docker push peelmicro/java-multi-client",
    "docker push peelmicro/java-multi-nginx",
    "docker push peelmicro/java-multi-server",
    "docker push peelmicro/java-multi-worker"
  ],
  "before_install": [
    "docker build -t peelmicro/test-client -f ./client/Dockerfile.dev ./client"
  ]
}
```
* Ensure the new Build has been executed with success

![](/images/projects/java-multi-docker/TravisCI4.png)

* Ensure the Docker images has been copied to the [Docker Hub](https://hub.docker.com/)

![](/images/projects/java-multi-docker/DockerHub.png)

10. Create a new application in AWS Elastic Beanstalk

* Go to [AWS Elastic Beanstalk](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/welcome)

![](/images/projects/java-multi-docker/AWSElasticBeanstalk.png)

* Click on `Create New Application`

Application Name: java-muti-docker

Description: 

![](/images/projects/java-multi-docker/AWSElasticBeanstalk2.png)

* Click on `Create`

![](/images/projects/java-multi-docker/AWSElasticBeanstalk3.png)

* Clik on `Create one now.`
* Select `Web server environment'

![](/images/projects/java-multi-docker/AWSElasticBeanstalk4.png)

* Click on `Select`

Application name: java-muti-docker

Environment name: JavaMutiDocker-env

* Select Platform: "Multi-container Docker"

* Click on `Create Environment`

![](/images/projects/java-multi-docker/AWSElasticBeanstalk5.png)

![](/images/projects/java-multi-docker/AWSElasticBeanstalk6.png)

![](/images/projects/java-multi-docker/AWSElasticBeanstalk7.png)

* Go to the [New AWS Elastic Beanstalk link](http://javamutidocker-env.cie7vvyaym.us-east-1.elasticbeanstalk.com/)

![](/images/projects/java-multi-docker/AWSElasticBeanstalk8.png)

11. Create a new Security Group

* Go to [AWS Console](https://console.aws.amazon.com/vpc/home?region=us-east-1)

![](/images/projects/java-multi-docker/AWSSecurityGroup.png)

* Click on `Security Grroups`

![](/images/projects/java-multi-docker/AWSSecurityGroup2.png)

* Click on `Create security group`

Group name: java-multi-docker

Description: Traffic for services in java-multi-docker app

VPC: vpc-4c2e8936

![](/images/projects/java-multi-docker/AWSSecurityGroup3.png)

* Click on `Create`

![](/images/projects/java-multi-docker/AWSSecurityGroup4.png)

Security Group ID: sg-08ed86c53f60c2bc9

* Click on `Close`

![](/images/projects/java-multi-docker/AWSSecurityGroup5.png)

* Click on the `Inbound Rules` tab on the bottom

![](/images/projects/java-multi-docker/AWSSecurityGroup6.png)

* Click on `Edit rules`

![](/images/projects/java-multi-docker/AWSSecurityGroup7.png)

* Click on `Add Rule`

Type: Custom TCP Rule

Protocol: TCP (6)

Port Range: 5432-6379

Source: sg-00979554265e02ce2 (the one for multi-docker)

Description:

![](/images/projects/java-multi-docker/AWSSecurityGroup8.png)

* Click on `Save rules`

![](/images/projects/java-multi-docker/AWSSecurityGroup9.png)

![](/images/projects/java-multi-docker/AWSSecurityGroup10.png)

12. Assign the new security group to the EB instance

* Go to to the [New JavaMutiDocker-env EB](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/applications)

![](/images/projects/java-multi-docker/EBAssignSecurityGroup.png)

* Click on `Configuration`

![](/images/projects/java-multi-docker/EBAssignSecurityGroup2.png)

* Click on `Intances -> Modify`

![](/images/projects/java-multi-docker/EBAssignSecurityGroup3.png)

* Check on the new `java-multi-docker` security group and then click on `Apply`

![](/images/projects/java-multi-docker/EBAssignSecurityGroup4.png)

* Click on `Confirm`

![](/images/projects/java-multi-docker/EBAssignSecurityGroup5.png)

![](/images/projects/java-multi-docker/EBAssignSecurityGroup6.png)

![](/images/projects/java-multi-docker/EBAssignSecurityGroup7.png)

![](/images/projects/java-multi-docker/EBAssignSecurityGroup8.png)

![](/images/projects/java-multi-docker/EBAssignSecurityGroup9.png)

* Ensure the new security group has been added

![](/images/projects/java-multi-docker/EBAssignSecurityGroup10.png)

13. Add `AWS Relational Database Service` (RDS)

* Go to [Amazon RDS](https://console.aws.amazon.com/rds/home?region=us-east-1)

![](/images/projects/java-multi-docker/RDS.png)

* Search for `Create database` section and click on `Create Database` button.

![](/images/projects/java-multi-docker/RDS2.png)

* Select `[X] PostgreSQL` and click on `Next`

![](/images/projects/java-multi-docker/RDS3.png)

* Select `[X] Dev/Test` and click on `Next`

`Instance specifications`

License model: postgresql-license

Db engine version: PostgreSQL 10.4-R1

[X] Only enable options eligible for RDS Free Usage Tier

Db Instance class: db.t2.micro - 1 vCPU, 1 GiB RAM

Allocated storaged: 20 GiB

`Settings`

DB instance identifier: java-multi-docker-postgres

Master username: postgres

Master password: postgres_password

Confirm password: postgres_password 

![](/images/projects/java-multi-docker/RDS4.png)

* Click on [Next]

`Network & Security`

Virtual Private Cloud (VPC): Default VPC (vpc-2c2e8936)

Subnet group: default

Public accessibility: (No)

Availability zone: No preference

VPC segurity groups: ( ) Create new VPC security group (X) Choose existing VPC security groups

`default` `java-multi-docker`

`Database options`

Database name: fibvalues

Port: 5432

DB parameter group: default.postgres10

IAM Db authentication: ( ) Enable IAM DB authentication (X) Disable

`Encryption`

Nothing to be done.

`Backup`

Backup retention period: 7 days.

Backup window: ( ) Select Window (X) No preference

[X] Copy tags to snapshots

`Monitoring`

( ) Enable enhanced monitoring (X) Disable enhanced monitoring

`Maintenance`

Auto minor version upgrade: ( ) Enable auto minor version upgrade (X) Disable auto minor version upgrade 

Maintenance window: ( ) Select Window (X) No Preference

`Deletion protection` 

[ ] Enable deletion protection

* Click on `Create Database`

![](/images/projects/java-multi-docker/RDS5.png)

* Click on `View DB Instance details`

On [java-multi-docker-postgres](https://console.aws.amazon.com/rds/home?region=us-east-1#dbinstance:id=java-multi-docker-postgres)

![](/images/projects/java-multi-docker/RDS6.png)

![](/images/projects/java-multi-docker/RDS7.png)

Ensure the security group previously created is assigned

14. Add `AWS ElastiCache` (EC)

* Go to [ElastiCache](https://console.aws.amazon.com/elasticache/home?region=us-east-1#)

![](/images/projects/java-multi-docker/ElastiCache.png)

* Click on `Redis`on the left menu

![](/images/projects/java-multi-docker/ElastiCache2.png)

* Click on `Create`

`Create your Amazon ElastiCache cluster`

Cluster engine (X) Redis [ ] Cluster mode enabled ( ) Memcached

`Redis settings`

Name: ecmulti-docker-redis

Description: 

Engine version compatibility: 5.0.0

Port: 6379

Parameter group: default.redis5.0

Node type: cache.t2.micro (0.5 GiB) (Ensure not to choose "cache.r5.large (13.07 GiB)")

Number of replicas: None (Ensure to not to choose 2)

`Advanced Redis settings`

Subnet group: redis-group (vpc-4c2e8936)

Preferred availability zone(s): (X) No preference ( ) Select zones

`Security`

Security groups: default (sg-848995ca), java-multi-docker (sg-08ed86c53f60c2bc9) [Ensure to select the second one]

Encryption at-rest: [ ]

Encryption in-transit: [ ]

`Import data to cluster`

Seed RDB file S3 location: 

`Backup`

Enable automatic backups: [ ]

`Maintenance`

Maintenance window: (X) No preference ( ) Specify maintenance window

Topic for SNS notification: Disable notifications

![](/images/projects/java-multi-docker/ElastiCache3.png)

* Click on `Create`

It goes to https://console.aws.amazon.com/elasticache/home?region-us-east-1#redis: and the ecmulti-docker-redis cluster starts to create

![](/images/projects/java-multi-docker/ElastiCache4.png)

![](/images/projects/java-multi-docker/ElastiCache5.png)

Ensure the security group previously created is assigned

15. Add the setting variables on AWS

* Go to to the [New JavaMutiDocker-env EB](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/applications) and click on the `JavaMutiDocker-env` environment.

![](/images/projects/java-multi-docker/EBEnvVariables.png)

* Click on `Configuration`

![](/images/projects/java-multi-docker/EBEnvVariables2.png)

* Click on `Software -> Modify`

Add the following `Environment properties`

- REDIS_HOST: ecmulti-docker-redis.lmrcvz.0001.use1.cache.amazonaws.com (it must be obtained from `Primary Endpoint` on the ecmulti-docker-redis EC instance)

- REDIS_PORT: 6379

- PGUSER: postgres

- PGHOST: java-multi-docker-postgres.cvzlrthufo75.us-east-1.rds.amazonaws.com (it must be obtained from `Endpoint' on the java-multi-docker-postgres RDS 
instance)

- PGDATABASE: fibvalues

- PGPASSWORD: postgres_password

- PGPORT: 5432

![](/images/projects/java-multi-docker/EBEnvVariables3.png)

* Click on `Apply`

![](/images/projects/java-multi-docker/EBEnvVariables4.png)

![](/images/projects/java-multi-docker/EBEnvVariables5.png)

16. Create the IAM Keys for Deployment

* Go to [Welcome to Identity and Access Management](https://console.aws.amazon.com/iam/home?region=us-east-1#/home)

![](/images/projects/java-multi-docker/IAM.png)

* Click on `Users`

![](/images/projects/java-multi-docker/IAM2.png)

* Click on `Add User`

User name: java-multi-docker-deployer

Select AWS access type

Access type: [X] Programmatic access [ ] AWS Management Console access

![](/images/projects/java-multi-docker/IAM3.png)

* Click on `Next: Permissions`

![](/images/projects/java-multi-docker/IAM4.png)

* Click on `Attach existing policies directly`

![](/images/projects/java-multi-docker/IAM5.png)

* Search for `beanstalk` and select all of them starting by `AWSElasticNeanstalk`

![](/images/projects/java-multi-docker/IAM6.png)

* Click on `Next: Tags`

![](/images/projects/java-multi-docker/IAM7.png)

Don't put any optional tag.

* Click on `Next: Review`

![](/images/projects/java-multi-docker/IAM8.png)

* Review the values and click on `Create User`

![](/images/projects/java-multi-docker/IAM9.png)

* Click on `Show` and copy the `Access key ID` and `Secret access key` values in a safe place

* Click on `Close`

![](/images/projects/java-multi-docker/IAM10.png)

Ensure the new `java-multi-docker-deployer` has been created.

17. Modify the `.travis.yml` document to include the deployment on AWS

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
  - docker build -t peelmicro/java-multi-client ./client
  - docker build -t peelmicro/java-multi-nginx ./nginx
  - docker build -t peelmicro/java-multi-server ./server
  - docker build -t peelmicro/java-multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/java-multi-client
  - docker push peelmicro/java-multi-nginx
  - docker push peelmicro/java-multi-server
  - docker push peelmicro/java-multi-worker
deploy:
  provider: elasticbeanstalk
  region: "us-east-1"
  app: "java-muti-docker"
  env: "JavaMutiDocker-env"
  bucket_name: "elasticbeanstalk-us-east-1-972569889348"
  #bucket_path: ""
  on:
    branch: "master"
  access_key_id: $AWS_ACCESS_KEY
  secret_access_key:
    secure: "$AWS_SECRET_KEY"
```
* Put the `AWS_ACCESS_KEY` and `AWS_SECRET_KEY` environment variables on the [Travis CI repository](https://travis-ci.com/peelmicro/java-multi-docker)

![](/images/projects/java-multi-docker/TravisAWSEnv.png)

![](/images/projects/java-multi-docker/TravisAWSEnv2.png)

18. Add the `Dockerrun.aws.json` document needed for the deployment on AWS
> `Dockerrun.aws.json`
```json
{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "peelmicro/java-multi-client",
      "hostname": "client",
      "essential": false,
      "memory": 128
    },
    {
      "name": "server",
      "image": "peelmicro/java-multi-server",
      "hostname": "api",
      "essential": false,
      "memory": 256
    },
    {
      "name": "worker",
      "image": "peelmicro/java-multi-worker",
      "hostname": "worker",
      "essential": false,
      "memory": 128
    },
    {
      "name": "nginx",
      "image": "peelmicro/java-multi-nginx",
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
19. Commit and push the changes
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
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

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "AWS integration included"
[master 69ba180] AWS integration included
 2 files changed, 52 insertions(+), 12 deletions(-)
 create mode 100644 Dockerrun.aws.json

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 782 bytes | 195.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/java-multi-docker.git
   eddcbb4..69ba180  HEAD -> master
```
20. Ensure the new build on CI is created with sucess

* Go to [Travis CI repository](https://travis-ci.com/peelmicro/java-multi-docker)

![](/images/projects/java-multi-docker/TravisCIDeployment.png)

![](/images/projects/java-multi-docker/TravisCIDeployment2.png)

21. Ensure the application is deployed correctly on AWS

* Go to to the [New JavaMutiDocker-env EB](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/applications)

![](/images/projects/java-multi-docker/AWSDeployment.png)

![](/images/projects/java-multi-docker/AWSDeployment2.png)

![](/images/projects/java-multi-docker/AWSDeployment3.png)

![](/images/projects/java-multi-docker/AWSDeployment4.png)

22. Ensure the application runs correctly on AWS

![](/images/projects/java-multi-docker/AWSExecution.png)

* Go to [Fib Calculator (Java)](http://javamutidocker-env.cie7vvyaym.us-east-1.elasticbeanstalk.com/)

![](/images/projects/java-multi-docker/AWSExecution2.png)

23. Cleanup all the resources created on AWS

> I) EB instance
Go to the [New JavaMutiDocker-env EB](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/applications)

![](/images/projects/java-multi-docker/DeleteEBInstance.png)

* Click on `Actions -> Delete application`

![](/images/projects/java-multi-docker/DeleteEBInstance2.png)

* Click on `Delete`

![](/images/projects/java-multi-docker/DeleteEBInstance3.png)

> II) RDS (Postgres)

* Go to [Amazon RDS Instances]https://console.aws.amazon.com/rds/home?region=us-east-1#dbinstances:)

![](/images/projects/java-multi-docker/DeleteRDS.png)

* Mark the `java-multi-docker-postgres` one and click on `Instance actions -> Delete`
```
[ ] - Create final snapshot?
Determines whether a final DB Snapshot is created before the DB instance is deleted.
[ ] - Retain automated backups
Determines whether retaining automated backups for 7 days after deletion
[X] - I acknowledge that upon instance deletion, automated backups, including system snapshots and point-in-time recovery, will no longer be available.
To confirm deletion, type delete me into the field
```
![](/images/projects/java-multi-docker/DeleteRDS2.png)

- Enter `delete me` on the last field and the click on `Delete`

![](/images/projects/java-multi-docker/DeleteRDS3.png)

> III) EC (Redis)

Go to [ElastiCache Redis](https://console.aws.amazon.com/elasticache/home?region=us-east-1#redis:)

![](/images/projects/java-multi-docker/DeleteEC.png)

- Mark the `ecmulti-docker-redis` cluster and then on the `Delete` button.

![](/images/projects/java-multi-docker/DeleteEC2.png)

- Click on `Delete`

![](/images/projects/java-multi-docker/DeleteEC3.png)

> IV) Security Group (Optional)

Go to the [EWS Resources](https://console.aws.amazon.com/vpc/home?region=us-east-1#)

![](/images/projects/java-multi-docker/DeleteSecurityGroup.png)

- Click on `Security Groups`

![](/images/projects/java-multi-docker/DeleteSecurityGroup2.png)

- Mark the  `JavaMutiDocker-env` one and click on `Actions -> Delete security group` 

![](/images/projects/java-multi-docker/DeleteSecurityGroup3.png)

- Click on `Delete security group`

> V) IAM security users (Optional)
Go to [Welcome to Identity and Access Managements](https://console.aws.amazon.com/iam/home?region=us-east-1#/home)

![](/images/projects/java-multi-docker/DeleteIAM.png)

- Click on `Users`

![](/images/projects/java-multi-docker/DeleteIAM2.png)

- Mark the `java-multi-docker-deploye` and Click on `Delete User`

![](/images/projects/java-multi-docker/DeleteIAM3.png)

- Mark [X] `One or more of these users have recently accessed AWS. Deleting them could affect running systems. Check the box to confirm that you want to delete these users.` and click on `Yes, delete`

![](/images/projects/java-multi-docker/DeteleIAM4.png)

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
```yml
apiVersion: v1
kind: Service
metadata: 
  name: java-client-node-port
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
```yml
apiVersion: v1
kind: Pod
metadata: 
  name: java-client-pod
  labels:
    component: web
spec:
  containers:
    - name: client
      image: peelmicro/java-multi-client
      ports: 
        - containerPort: 3000
```
3. Create the `java-multi-client` Docker image
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)$ docker build -t peelmicro/java-multi-client ./client
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
 ---> 76a557b982d5
Step 6/10 : RUN npm run build
 ---> Running in cd7156e034ae

> client@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.2 KB  build/static/js/1.7b85cb19.chunk.js
  1.37 KB  build/static/js/main.e3eae86e.chunk.js
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

Removing intermediate container cd7156e034ae
 ---> f7fd3eb05f81
Step 7/10 : FROM nginx
 ---> e81eb098537d
Step 8/10 : EXPOSE 3000
 ---> Using cache
 ---> 021956dfacb6
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> b206c3bc0cf7
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> 9ffc8d5643b8
Successfully built 9ffc8d5643b8
Successfully tagged peelmicro/java-multi-client:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```
4. Push the `java-multi-client` image to `Docker Hub`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ docker push peelmicro/java-multi-client
The push refers to repository [docker.io/peelmicro/java-multi-client]
2ddf2dc4bd77: Pushed
2e55e5f66dcf: Mounted from peelmicro/dotnet-core-multi-client
9a8f339aeebe: Layer already exists
876456b96423: Layer already exists
ef68f6734aa4: Layer already exists
latest: digest: sha256:8d802d12246b9062f0cac6d1743852a22773468973ea8184c4d39ad3bb9b6bc5 size: 1365
```
5. Create the `java-client-pod` pod
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ cd simplek8s/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl apply -f client-pod.yaml
pod "java-client-pod" created
```
6. Create the `java-client-node-port` service
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl apply -f client-node-port.yaml
service "java-client-node-port" created
```
7. Confirm the IP where `minikube` is running
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.0.109
```
8. Ensure the `client` app is running properly
* Goto to `http://192.168.0.109:31515/`

![](/images/projects/java-multi-docker/ClientRunning.png)

9. Stop the `java-client-pod` pod
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl delete pod java-client-pod
pod "java-client-pod" deleted
```
10. Stop the `java-client-node-port` service
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex/simplek8s (master)
$ kubectl delete service java-client-node-port
service "java-client-node-port" deleted
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
  - docker build -t peelmicro/java-multi-client ./client
  - docker build -t peelmicro/java-multi-nginx ./nginx
  - docker build -t peelmicro/java-multi-server ./server
  - docker build -t peelmicro/java-multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push peelmicro/java-multi-client
  - docker push peelmicro/java-multi-nginx
  - docker push peelmicro/java-multi-server
  - docker push peelmicro/java-multi-worker
# Commented out for Kubernettes
# deploy:
#   provider: elasticbeanstalk
#   region: "us-east-1"
#   app: "java-muti-docker"
#   env: "JavaMutiDocker-env"
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
## Java version of the "Docker and Kubernetes: The Complete Guide" course 

> source code for the Java version of the "Docker and Kubernetes: The Complete Guide" course 

## Execute it locally using

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
  2) Java Spring Web Framework API with Maven
  3) Java Maven Console
  4) Postgres
  5) Redis
  6) NGINX
- Use Postgres from a Docker Container with Java
- Use Redis from a Docker Container with Java creating a subscription on the Web API App and subscribe to it on the Console App.
- Accept dynamic POST request with Java Spring Framework Web API
- Send dynamic JSON responses from Java Spring Framework Web API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with Java Spring Framework Web API
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .travis.yml
        modified:   README.md
        modified:   client/nginx/default.conf
        new file:   simplek8s/client-node-port.yaml
        new file:   simplek8s/client-pod.yaml
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "Onwards to Kubernetes!"
[master 433fd51] Onwards to Kubernetes!
 5 files changed, 47 insertions(+), 24 deletions(-)
 create mode 100644 simplek8s/client-node-port.yaml
 create mode 100644 simplek8s/client-pod.yaml
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (10/10), 1.26 KiB | 321.00 KiB/s, done.
Total 10 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To https://github.com/peelmicro/java-multi-docker.git
   eec9528..433fd51  HEAD -> master
```
## Maintaining Sets of Containers with Deployments
1. Create the new `client-deployment.yaml` config file.
```yml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: java-client-deployment
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
          image: peelmicro/java-multi-client
          ports: 
            - containerPort: 3000
```
2. Delete current `pods`, `deployments` and `services`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get pods
NAME                                READY     STATUS    RESTARTS   AGE
client-deployment-8846f9858-cvg8t   1/1       Running   0          11h
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get deployments
NAME                DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
client-deployment   1         1         1            1           23h
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl delete deployment client-deployment
deployment.extensions "client-deployment" deleted
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get pods
No resources found.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get deployments
No resources found.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get services
NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
client-node-port   NodePort    10.96.119.223   <none>        3050:31515/TCP   22h
kubernetes         ClusterIP   10.96.0.1       <none>        443/TCP          3d
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl delete service client-node-port
service "client-node-port" deleted
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   3d
```
3. Apply the `client-deployment` config deployment
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl apply -f client-deployment.yaml
deployment.apps "java-client-deployment" created
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl get deployments
NAME                     DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
java-client-deployment   1         1         1            1           39s
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl get pods
NAME                                     READY     STATUS    RESTARTS   AGE
java-client-deployment-d84b8c989-pww6d   1/1       Running   0          1m
```
4. Apply the 'client-node-port` config service
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl apply -f client-node-port.yaml
service "java-client-node-port" created
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ kubectl get services
NAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
java-client-node-port   NodePort    10.99.198.24   <none>        3050:31515/TCP   14s
kubernetes              ClusterIP   10.96.0.1      <none>        443/TCP          3d
```
5. Test if the `multi-client` instance is running properly
- Find out the current IP
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ minikube ip
192.168.0.109
```
- Browse to http://192.168.0.109:31515/

![](/images/projects/java-multi-docker/MultiClientIsRunning.png)

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
            <h1 className="App-title">Fib Calculator version 2 (Java)</h1>
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
7. Rebuild the `java-multi-client` image with a different tag
'''sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ docker build -t peelmicro/java-multi-client:v2 ./client
unable to prepare context: path "./client" not found

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex/simplek8s (master)
$ cd ..

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ docker build -t peelmicro/java-multi-client:v2 ./client
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
 ---> 7b21f20de663
Step 6/10 : RUN npm run build
 ---> Running in 0db29a59e475

> client@0.1.0 build /app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.2 KB  build/static/js/1.7b85cb19.chunk.js
  1.38 KB  build/static/js/main.cca2c8d2.chunk.js
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

Removing intermediate container 0db29a59e475
 ---> fa091ff65316
Step 7/10 : FROM nginx
 ---> e81eb098537d
Step 8/10 : EXPOSE 3000
 ---> Using cache
 ---> 021956dfacb6
Step 9/10 : COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
 ---> Using cache
 ---> b206c3bc0cf7
Step 10/10 : COPY --from=builder /app/build /usr/share/nginx/html
 ---> c4c2aacf704e
Successfully built c4c2aacf704e
Successfully tagged peelmicro/java-multi-client:v2
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
'''

8. Push the new `java-multi-client` image to `Docker Hub`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ docker push peelmicro/java-multi-client:v2
The push refers to repository [docker.io/peelmicro/java-multi-client]
3dd98dd000d0: Pushed
2e55e5f66dcf: Layer already exists
9a8f339aeebe: Layer already exists
876456b96423: Layer already exists
ef68f6734aa4: Layer already exists
v2: digest: sha256:c8717622d83d61263d3f897d1dddd12979087eb609eedf74143abf4326a258ee size: 1365
```
9. `Run` a specific `kubectl` command forcing the deployment to use the the `image version`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl set image deployment/java-client-deployment client=peelmicro/java-multi-client:v2
deployment.apps "java-client-deployment" image updated
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get deployments
NAME                     DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
java-client-deployment   1         1         1            1           15m
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get pods
NAME                                      READY     STATUS    RESTARTS   AGE
java-client-deployment-7cd5869df7-xd77x   1/1       Running   0          36s
```
10. Test if the new instance of the `muti-client` is running
- Browse to http://192.168.0.109:31515/

![](/images/projects/java-multi-docker/NewMultiClientIsRunning.png)

11. `Commit` and `Push` changes to Github Repository
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .
warning: LF will be replaced by CRLF in client/src/App.js.
The file will have its original line endings in your working directory.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   client/src/App.js
        new file:   simplek8s/client-deployment.yaml
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "Maintaining Sets of Containers with Deployments"
[master a6b03c6] Maintaining Sets of Containers with Deployments
 2 files changed, 20 insertions(+), 1 deletion(-)
 create mode 100644 simplek8s/client-deployment.yaml
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 811 bytes | 115.00 KiB/s, done.
Total 7 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/peelmicro/java-multi-docker.git
   433fd51..a6b03c6  HEAD -> master
```
## A Multi-Container App with Kubernetes
1. Clean up the current objects running locally on `minikube`
- Check if there are any `service` running
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)$ kubectl get services
NAME                          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
client-cluster-ip-service     ClusterIP   10.96.200.46     <none>        3000/TCP   19h
kubernetes                    ClusterIP   10.96.0.1        <none>        443/TCP    4d
postgres-cluster-ip-service   ClusterIP   10.108.255.118   <none>        5432/TCP   17h
redis-cluster-ip-service      ClusterIP   10.105.219.66    <none>        6379/TCP   17h
server-cluster-ip-service     ClusterIP   10.97.173.225    <none>        5000/TCP   18h
```
- Execute `minikube stop` (or `minikube ssh "sudo poweroff"` in Windows) to stop Minikube
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ minikube ssh "sudo poweroff"
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get services
Unable to connect to the server: dial tcp 192.168.0.107:8443: connectex: No connection could be made because the target machine actively refused it.
```
- Start Minikube with the `minuke start` command
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ minikube start
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
E1202 11:27:56.606664     760 start.go:168] Error starting host: Temporary Error: Error configuring auth on host: Too many retries waiting for SSH to be available.  Last error: Maximum number of retries (60) exceeded.

 Retrying.
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```
- Check if there are any `service` running
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get services
NAME                          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
client-cluster-ip-service     ClusterIP   10.96.200.46     <none>        3000/TCP   19h
kubernetes                    ClusterIP   10.96.0.1        <none>        443/TCP    4d
postgres-cluster-ip-service   ClusterIP   10.108.255.118   <none>        5432/TCP   18h
redis-cluster-ip-service      ClusterIP   10.105.219.66    <none>        6379/TCP   18h
server-cluster-ip-service     ClusterIP   10.97.173.225    <none>        5000/TCP   18h
```
- `Minikube stop` doesn't remove the objects already created.
```
- The best way to remove all is executing the `kubectl delete daemonsets,replicasets,services,deployments,pods,rc,pv,pvc,namespaces,secrets,ingresses --all` command
```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl delete daemonsets,replicasets,services,deployments,pods,rc,pv,pvc,namespaces,secrets,ingresses --all
service "kubernetes" deleted
replicaset.extensions "client-deployment-59b84dbbf6" deleted
replicaset.extensions "postgres-deployment-599f4f6bf7" deleted
replicaset.extensions "postgres-deployment-8d79c44d9" deleted
replicaset.extensions "postgres-deployment-fdd46dbc8" deleted
replicaset.extensions "redis-deployment-666bf96bdd" deleted
replicaset.extensions "server-deployment-6d557d9f77" deleted
replicaset.extensions "server-deployment-866945cd7c" deleted
replicaset.extensions "worker-deployment-5cf7f48989" deleted
replicaset.extensions "worker-deployment-7c8bc558" deleted
service "client-cluster-ip-service" deleted
service "kubernetes" deleted
service "postgres-cluster-ip-service" deleted
service "redis-cluster-ip-service" deleted
service "server-cluster-ip-service" deleted
deployment.extensions "client-deployment" deleted
deployment.extensions "postgres-deployment" deleted
deployment.extensions "redis-deployment" deleted
deployment.extensions "server-deployment" deleted
deployment.extensions "worker-deployment" deleted
pod "client-deployment-59b84dbbf6-dswvz" deleted
pod "client-deployment-59b84dbbf6-dxrb7" deleted
pod "client-deployment-59b84dbbf6-h8wkw" deleted
pod "client-deployment-59b84dbbf6-vcgkw" deleted
pod "postgres-deployment-8d79c44d9-88qrd" deleted
pod "postgres-deployment-8d79c44d9-tn5xg" deleted
pod "redis-deployment-666bf96bdd-jnr6k" deleted
pod "redis-deployment-666bf96bdd-rtnd4" deleted
pod "server-deployment-866945cd7c-69r68" deleted
pod "server-deployment-866945cd7c-87ndf" deleted
pod "server-deployment-866945cd7c-mbfl8" deleted
pod "server-deployment-866945cd7c-nm8nx" deleted
pod "server-deployment-866945cd7c-s9wwl" deleted
pod "server-deployment-866945cd7c-vsfh9" deleted
pod "worker-deployment-5cf7f48989-ngczq" deleted
pod "client-deployment-59b84dbbf6-vcgkw" deleted
persistentvolume "pvc-95d69064-f59d-11e8-aa19-00155dc00118" deleted
persistentvolumeclaim "database-persistent-volume-claim" deleted
namespace "ingress-nginx" deleted
secret "default-token-6gfdz" deleted
secret "pgpassword" deleted
ingress.extensions "ingress-service" deleted
Error from server (Forbidden): namespaces "default" is forbidden: this namespace may not be deleted
Error from server (Forbidden): namespaces "kube-public" is forbidden: this namespace may not be deleted
Error from server (Forbidden): namespaces "kube-system" is forbidden: this namespace may not be deleted
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   1s
```
2. Make a copy of the whole solution on the `elastic-beanstalk` folder

![](/images/projects/java-multi-docker/BackupEverythingOnElasticBeanstalkFolder.png)

3. Remove the `.travis.yml`, `docker-compose.yml` and `Dockerrun.aws.json`  files and the `nginx` and  `simplek8s` folders.

![](/images/projects/java-multi-docker/RemoveFilesAndFolders.png)

4. Copy the `k8s` folder from the `nodeJs` version.

![](/images/projects/java-multi-docker/CopyK8sFolder.png)

5. Modify all the `configuration` files.

> `client-cluster-ip-service.yaml`
```yml
apiVersion: v1
kind: Service
metadata:
  name: java-client-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: web
  ports: 
    - port: 3000
      targetPort: 3000
```
> `client-deployment.yaml`
```yml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: java-client-deployment
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
          image: peelmicro/java-multi-client
          ports: 
            - containerPort: 3000
```
> `database-persistent-volume-claim.yaml`
```yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: java-database-persistent-volume-claim
spec: 
  accessModes: 
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```
> `ingress-service.yaml`
```yml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: java-ingress-service
  annotations: 
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/rewrite-target: /
spec: 
  rules:
    - http:
        paths:
          - path: /
            backend: 
              serviceName: java-client-cluster-ip-service
              servicePort: 3000
          - path: /api/
            backend: 
              serviceName: java-server-cluster-ip-service
              servicePort: 5000
            
```
> `postgres-cluster-ip-service.yaml`
```yml
apiVersion: v1
kind: Service
metadata:
  name: java-postgres-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: postgres
  ports: 
    - port: 5432
      targetPort: 5432
```
> `postgres-deployment.yaml`
```yml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: java-postgres-deployment
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
            claimName: java-database-persistent-volume-claim
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
```yml
apiVersion: v1
kind: Service
metadata:
  name: java-redis-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: redis
  ports: 
    - port: 6379
      targetPort: 6379
```
> `redis-deployment.yaml`
```yml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: java-redis-deployment
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
```yml
apiVersion: v1
kind: Service
metadata:
  name: java-server-cluster-ip-service
spec: 
  type: ClusterIP
  selector:
    component: server
  ports: 
    - port: 5000
      targetPort: 5000
```
> `server-deployment.yaml`
```yml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: java-server-deployment
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
          image: peelmicro/java-multi-server
          ports: 
            - containerPort: 5000
          env:
            - name: REDIS_HOST
              value: java-redis-cluster-ip-service
            - name: REDIS_PORT
              value: '6379'     
            - name: PGUSER
              value: postgres
            - name: PGHOST
              value: java-postgres-cluster-ip-service
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
```yml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: java-worker-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      component: java-worker
  template:
    metadata:
      labels:
        component: java-worker
    spec:
      containers: 
        - name: java-worker
          image: peelmicro/java-multi-worker
          env:
              - name: REDIS_HOST
                value: java-redis-cluster-ip-service
              - name: REDIS_PORT
                value: '6379'
```
6. Create the `secrets` for the `postgres` password
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password
secret "pgpassword" created
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl get secrets
NAME                  TYPE                                  DATA      AGE
default-token-w9xdh   kubernetes.io/service-account-token   3         28s
pgpassword            Opaque                                1         6s
```
7. Execute the `mandatory` `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml` `Ingress Nginx` and `minikube addons enable ingress` `Minikube` commands.
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ minikube addons enable ingress
ingress was successfully enabled
```

8. Install all the `Kubernetes objects`
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ kubectl apply -f k8s
service "java-client-cluster-ip-service" created
deployment.apps "java-client-deployment" created
persistentvolumeclaim "java-database-persistent-volume-claim" created
ingress.extensions "java-ingress-service" created
service "java-postgres-cluster-ip-service" created
deployment.apps "java-postgres-deployment" created
service "java-redis-cluster-ip-service" created
deployment.apps "java-redis-deployment" created
service "java-server-cluster-ip-service" created
deployment.apps "java-server-deployment" created
deployment.apps "java-worker-deployment" created
```

9. Run `minikube` locally
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ minikube ip
192.168.0.107
```
- Browse to `https://192.168.0.107/`

![](/images/projects/java-multi-docker/RunMinikube.png)

- Click on `ADVANCED`

![](/images/projects/java-multi-docker/RunMinikube2.png)

- Click on `Proceed to 192.168.0.107 (unsafe)`

![](/images/projects/java-multi-docker/RunMinikube3.png)

10. Have a look at the `Minikube Dashboard'
- Execute the `minikube dashboard` command
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/complex (master)
$ minikube dashboard
Opening http://127.0.0.1:52302/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/ in your default browser...
```

![](/images/projects/java-multi-docker/MinikubeDashboard.png)

![](/images/projects/java-multi-docker/MinikubeDashboard2.png)

11. Update the `README.md` document
```md
## Java version of the "Docker and Kubernetes: The Complete Guide" course 

> source code for the Java version of the "Docker and Kubernetes: The Complete Guide" course 

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

## Kubernetes version (From `12.-Onwards to Kubernetes!) is on the root folder:
1. Create the `secrets` for the `postgres` password: `kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres_password`
2. Execute the `mandatory` `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml` `Ingress Nginx` command
3. Enable Ingress using `minikube addons enable ingress`
4. Install all the `Kubernetes objects` with `kubectl apply -f k8s`
5. Get the local IP with `minikube IP`
6. Browse to the local IP 

## Within the code you can see how to
- Create different Docket Container Types and relate all of them
  1) React Client App
  2) Java Spring Web Framework API with Maven
  3) Java Maven Console
  4) Postgres
  5) Redis
  6) NGINX
- Use Postgres from a Docker Container with Java
- Use Redis from a Docker Container with Java creating a subscription on the Web API App and subscribe to it on the Console App.
- Accept dynamic POST request with Java Spring Framework Web API
- Send dynamic JSON responses from Java Spring Framework Web API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with Java Spring Framework Web API
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .
warning: LF will be replaced by CRLF in elastic-beanstalk/.gitignore.
The file will have its original line endings in your working directory.
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
warning: LF will be replaced by CRLF in elastic-beanstalk/server/.gitignore.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/.mvn/wrapper/maven-wrapper.properties.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/mvnw.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/mvnw.cmd.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/pom.xml.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in elastic-beanstalk/server/src/test/java/com/peelmicro/server/DemoApplicationTests.java.
The file will have its original line endings in your working directory.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
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
        new file:   elastic-beanstalk/server/.dockerignore
        new file:   elastic-beanstalk/server/.gitignore
        new file:   elastic-beanstalk/server/.mvn/wrapper/maven-wrapper.jar
        new file:   elastic-beanstalk/server/.mvn/wrapper/maven-wrapper.properties
        new file:   elastic-beanstalk/server/.vscode/launch.json
        new file:   elastic-beanstalk/server/Dockerfile
        new file:   elastic-beanstalk/server/Running
        new file:   elastic-beanstalk/server/mvnw
        new file:   elastic-beanstalk/server/mvnw.cmd
        new file:   elastic-beanstalk/server/pom.xml
        new file:   elastic-beanstalk/server/src/main/java/com/peelmicro/server/ServerApplication.java
        new file:   elastic-beanstalk/server/src/main/java/com/peelmicro/server/controllers/ValuesController.java
        new file:   elastic-beanstalk/server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java
        new file:   elastic-beanstalk/server/src/main/java/com/peelmicro/server/models/Value.java
        new file:   elastic-beanstalk/server/src/main/java/com/peelmicro/server/repositories/ValuesRepository.java
        new file:   elastic-beanstalk/server/src/main/java/com/peelmicro/server/services/RedisService.java
        new file:   elastic-beanstalk/server/src/main/resources/application.properties
        new file:   elastic-beanstalk/server/src/main/resources/schema.sql
        new file:   elastic-beanstalk/server/src/test/java/com/peelmicro/server/DemoApplicationTests.java
        renamed:    simplek8s/client-deployment.yaml -> elastic-beanstalk/simplek8s/client-deployment.yaml
        renamed:    simplek8s/client-node-port.yaml -> elastic-beanstalk/simplek8s/client-node-port.yaml
        renamed:    simplek8s/client-pod.yaml -> elastic-beanstalk/simplek8s/client-pod.yaml
        new file:   elastic-beanstalk/worker/.classpath
        new file:   elastic-beanstalk/worker/.dockerignore
        new file:   elastic-beanstalk/worker/.project
        new file:   elastic-beanstalk/worker/.settings/org.eclipse.jdt.apt.core.prefs
        new file:   elastic-beanstalk/worker/.settings/org.eclipse.jdt.core.prefs
        new file:   elastic-beanstalk/worker/.settings/org.eclipse.m2e.core.prefs
        new file:   elastic-beanstalk/worker/.vscode/launch.json
        new file:   elastic-beanstalk/worker/Dockerfile
        new file:   elastic-beanstalk/worker/pom.xml
        new file:   elastic-beanstalk/worker/src/main/java/com/peelmicro/App.java
        new file:   elastic-beanstalk/worker/src/test/java/com/peelmicro/AppTest.java
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "A Multi-Container App with Kubernetes"
[master 02e2138] A Multi-Container App with Kubernetes
 72 files changed, 10396 insertions(+), 4 deletions(-)
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
 create mode 100644 elastic-beanstalk/server/.dockerignore
 create mode 100644 elastic-beanstalk/server/.gitignore
 create mode 100644 elastic-beanstalk/server/.mvn/wrapper/maven-wrapper.jar
 create mode 100644 elastic-beanstalk/server/.mvn/wrapper/maven-wrapper.properties
 create mode 100644 elastic-beanstalk/server/.vscode/launch.json
 create mode 100644 elastic-beanstalk/server/Dockerfile
 create mode 100644 elastic-beanstalk/server/Running
 create mode 100644 elastic-beanstalk/server/mvnw
 create mode 100644 elastic-beanstalk/server/mvnw.cmd
 create mode 100644 elastic-beanstalk/server/pom.xml
 create mode 100644 elastic-beanstalk/server/src/main/java/com/peelmicro/server/ServerApplication.java
 create mode 100644 elastic-beanstalk/server/src/main/java/com/peelmicro/server/controllers/ValuesController.java
 create mode 100644 elastic-beanstalk/server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java
 create mode 100644 elastic-beanstalk/server/src/main/java/com/peelmicro/server/models/Value.java
 create mode 100644 elastic-beanstalk/server/src/main/java/com/peelmicro/server/repositories/ValuesRepository.java
 create mode 100644 elastic-beanstalk/server/src/main/java/com/peelmicro/server/services/RedisService.java
 create mode 100644 elastic-beanstalk/server/src/main/resources/application.properties
 create mode 100644 elastic-beanstalk/server/src/main/resources/schema.sql
 create mode 100644 elastic-beanstalk/server/src/test/java/com/peelmicro/server/DemoApplicationTests.java
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-deployment.yaml (100%)
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-node-port.yaml (100%)
 rename {simplek8s => elastic-beanstalk/simplek8s}/client-pod.yaml (100%)
 create mode 100644 elastic-beanstalk/worker/.classpath
 create mode 100644 elastic-beanstalk/worker/.dockerignore
 create mode 100644 elastic-beanstalk/worker/.project
 create mode 100644 elastic-beanstalk/worker/.settings/org.eclipse.jdt.apt.core.prefs
 create mode 100644 elastic-beanstalk/worker/.settings/org.eclipse.jdt.core.prefs
 create mode 100644 elastic-beanstalk/worker/.settings/org.eclipse.m2e.core.prefs
 create mode 100644 elastic-beanstalk/worker/.vscode/launch.json
 create mode 100644 elastic-beanstalk/worker/Dockerfile
 create mode 100644 elastic-beanstalk/worker/pom.xml
 create mode 100644 elastic-beanstalk/worker/src/main/java/com/peelmicro/App.java
 create mode 100644 elastic-beanstalk/worker/src/test/java/com/peelmicro/AppTest.java
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
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 327 bytes | 109.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/java-multi-docker.git
   ccce890..185f08d  HEAD -> master
```

## Kubernetes Production Deployment
1. Add a tag to the current `Github` repository
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git tag MultiContainerAppWithKubernetes
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin --tags
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/peelmicro/java-multi-docker.git
 * [new tag]         MultiContainerAppWithKubernetes -> MultiContainerAppWithKubernetes
```
2. Create the `multi-container-minikube` folder

![](/images/projects/java-multi-docker/NewMultiContainerMinikubeFolder.png)

3. Copy the current project to the new folder

![](/images/projects/java-multi-docker/CopyCurrentFolderToNewMinikubeFolder.png)

4. Copy all the `yaml` Kubernetes config files from the `NodeJs` solution.
- Delete the current files
- Copy from the `NodeJs` solution
5. Update the following `yaml` Kubernetes config files
> `client-deployment.yaml`
```yml
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
          image: peelmicro/java-multi-client
          ports: 
            - containerPort: 3000
```
> `server-deployment.yaml`
```yml
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
          image: peelmicro/java-multi-server
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
```yml
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
          image: peelmicro/java-multi-worker
          env:
              - name: REDIS_HOST
                value: redis-cluster-ip-service
              - name: REDIS_PORT
                value: '6379'
```
6. Copy the `.travis.yml` file from the `NodeJs` solution
```yml
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
```sh
# Create the Docker Images
docker build -t peelmicro/java-multi-client:latest -t peelmicro/java-multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t peelmicro/java-multi-server:latest -t peelmicro/java-multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t peelmicro/java-multi-worker:latest -t peelmicro/java-multi-worker:$SHA -f ./worker/Dockerfile ./worker

# Take those images and push them to docker hub
docker push peelmicro/java-multi-client:latest
docker push peelmicro/java-multi-client:$SHA
docker push peelmicro/java-multi-server:latest
docker push peelmicro/java-multi-server:$SHA
docker push peelmicro/java-multi-worker:latest
docker push peelmicro/java-multi-worker:$SHA
# Apply all configs in the 'k8s' folder
kubectl apply -f k8s
# Imperatively set lastest images on each deployment
kubectl set image deployments/client-deployment client=peelmicro/java-multi-client:$SHA
kubectl set image deployments/server-deployment server=peelmicro/java-multi-server:$SHA
kubectl set image deployments/worker-deployment worker=peelmicro/java-multi-worker:$SHA
```
8. Link the `java-multi-docker` repository to [travis-ci.org](https://travis-ci.org/)
- Browse to https://travis-ci.org/account/repositories

![](/images/projects/java-multi-docker/LinkToTravisCiOrg.png)

- Click on the button to link

![](/images/projects/java-multi-docker/LinkToTravisCiOrg2.png)

- Go to `Settings`
- Add the `DOCKER_ID` and `DOCKER_PASSWORD` environment variables

![](/images/projects/java-multi-docker/LinkToTravisCiOrg3.png)

9. Copy the `service-account.json` file from `NodeJs` and add it to the `.gitignore` file.
10. Generate the `service-account.json.enc` file using `Travis CI CLI` using `PowerShell`
```sh
PS C:\WINDOWS\system32> cd C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-
complex
PS C:\Users\juan.pablo.perez\OneDrive\Training\Docker\DockerAndKubernetes.TheCompleteGuide\java-complex> docker run -it
-v ${pwd}:/app ruby:2.3 sh
# ls
app  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# cd app
# ls
README.md  deploy.sh          k8s                       server                temp-code
client     elastic-beanstalk  multi-container-minikube  service-account.json  worker
```
```sh
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
```sh
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
```sh
# travis login
We need your GitHub login to identify you.
This information will not be sent to Travis CI, only to api.github.com.
The password will not be displayed.

Try running with --github-token or --auto if you don't want to enter your password anyway.

Username: peelmicro
Password for peelmicro: *********************
Successfully logged in as peelmicro!
```
```sh
Successfully logged in as peelmicro!
# travis encrypt-file service-account.json -r peelmicro/java-multi-docker
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
11. Update the `README.md` file
```md
## Java version of the "Docker and Kubernetes: The Complete Guide" course 

> source code for the Java version of the "Docker and Kubernetes: The Complete Guide" course 

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
  2) Java Spring Web Framework API with Maven
  3) Java Maven Console
  4) Postgres
  5) Redis
  6) NGINX
- Use Postgres from a Docker Container with Java
- Use Redis from a Docker Container with Java creating a subscription on the Web API App and subscribe to it on the Console App.
- Accept dynamic POST request with Java Spring Framework Web API
- Send dynamic JSON responses from Java Spring Framework Web API
- Use Docker Compose to run and relate easily different Docker Components
- Use NIGIX Container to run the React Client App
- Use NIGIX Container as Reverse Proxy with Java Spring Framework Web API
- Work with different AWS Amazon service types to deploy a multi container Docker application using AWS Elastic Beanstalk
- Upload own Containers to Docker Hub and download them with the deployment
- Use Travis CI for the Continuous Integration Workflow
- Use Kubernetes to run the same multi container application
- Use Minikube to run Kubernetes locally
- Use Kubectl CLI for interacting with Kubernetes Master
- Use Google Kubernetes Engine to run the Kubernetes Cluster on the Cloud
- Run the Ruby Travis CI CLI from a Docker container locally
- How to manage the automatic creation and renewal of a TLS certificate using Kubernetes to run the application with HTTPS

## In order to get to know what has been developed follow the course on

https://www.udemy.com/docker-and-kubernetes-the-complete-guide

```
12. Commit the code
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git add .
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
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
        new file:   multi-container-minikube/README.md
        new file:   multi-container-minikube/client/.gitignore
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
        new file:   multi-container-minikube/server/.dockerignore
        new file:   multi-container-minikube/server/.gitignore
        new file:   multi-container-minikube/server/.mvn/wrapper/maven-wrapper.jar
        new file:   multi-container-minikube/server/.mvn/wrapper/maven-wrapper.properties
        new file:   multi-container-minikube/server/.vscode/launch.json
        new file:   multi-container-minikube/server/Dockerfile
        new file:   multi-container-minikube/server/Running
        new file:   multi-container-minikube/server/mvnw
        new file:   multi-container-minikube/server/mvnw.cmd
        new file:   multi-container-minikube/server/pom.xml
        new file:   multi-container-minikube/server/src/main/java/com/peelmicro/server/ServerApplication.java
        new file:   multi-container-minikube/server/src/main/java/com/peelmicro/server/controllers/ValuesController.java
        new file:   multi-container-minikube/server/src/main/java/com/peelmicro/server/exceptions/ResourceNotFoundException.java
        new file:   multi-container-minikube/server/src/main/java/com/peelmicro/server/models/Value.java
        new file:   multi-container-minikube/server/src/main/java/com/peelmicro/server/repositories/ValuesRepository.java
        new file:   multi-container-minikube/server/src/main/java/com/peelmicro/server/services/RedisService.java
        new file:   multi-container-minikube/server/src/main/resources/application.properties
        new file:   multi-container-minikube/server/src/main/resources/schema.sql
        new file:   multi-container-minikube/server/src/test/java/com/peelmicro/server/DemoApplicationTests.java
        new file:   multi-container-minikube/worker/.classpath
        new file:   multi-container-minikube/worker/.dockerignore
        new file:   multi-container-minikube/worker/.idea/compiler.xml
        new file:   multi-container-minikube/worker/.idea/libraries/Maven__junit_junit_3_8_1.xml
        new file:   multi-container-minikube/worker/.idea/libraries/Maven__org_apache_commons_commons_pool2_2_4_2.xml
        new file:   multi-container-minikube/worker/.idea/libraries/Maven__redis_clients_jedis_2_9_0.xml
        new file:   multi-container-minikube/worker/.idea/misc.xml
        new file:   multi-container-minikube/worker/.idea/modules.xml
        new file:   multi-container-minikube/worker/.idea/worker.iml
        new file:   multi-container-minikube/worker/.idea/workspace.xml
        new file:   multi-container-minikube/worker/.project
        new file:   multi-container-minikube/worker/.settings/org.eclipse.jdt.apt.core.prefs
        new file:   multi-container-minikube/worker/.settings/org.eclipse.jdt.core.prefs
        new file:   multi-container-minikube/worker/.settings/org.eclipse.m2e.core.prefs
        new file:   multi-container-minikube/worker/.vscode/launch.json
        new file:   multi-container-minikube/worker/Dockerfile
        new file:   multi-container-minikube/worker/pom.xml
        new file:   multi-container-minikube/worker/src/main/java/com/peelmicro/App.java
        new file:   multi-container-minikube/worker/src/test/java/com/peelmicro/AppTest.java
        new file:   service-account.json.enc
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git commit -m "Added Google Kubernetes Engine configuration"
[master 20c678a] Added Google Kubernetes Engine configuration
 1 file changed, 0 insertions(+), 0 deletions(-)
 rewrite service-account.json.enc (100%)
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/Docker/DockerAndKubernetes.TheCompleteGuide/java-complex (master)
$ git push origin HEAD
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 2.58 KiB | 376.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/peelmicro/java-multi-docker.git
   e91ed0c..20c678a  HEAD -> master
```
13. Check if it has been installed correctly

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly2.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly3.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly4.png)

- There are some problems with `multi-server` because of the and `redis` container.

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly5.png)

```json
{
    "textPayload": "redis.clients.jedis.exceptions.JedisDataException: WRONGTYPE Operation against a key holding the wrong kind of value\n\tat redis.clients.jedis.Protocol.processError(Protocol.java:127) ~[jedis-2.9.0.jar!/:na]\n\tat redis.clients.jedis.Protocol.process(Protocol.java:161) ~[jedis-2.9.0.jar!/:na]\n\tat redis.clients.jedis.Protocol.read(Protocol.java:215) ~[jedis-2.9.0.jar!/:na]\n\tat redis.clients.jedis.Connection.readProtocolWithCheckingBroken(Connection.java:340) ~[jedis-2.9.0.jar!/:na]\n\tat redis.clients.jedis.Connection.getBinaryMultiBulkReply(Connection.java:276) ~[jedis-2.9.0.jar!/:na]\n\tat 
    ...
    ...
     ~[na:na]\n",
    "insertId": "1lpzkk7f18n3ts",
    "resource": {
      "type": "container",
      "labels": {
        "cluster_name": "multi-cluster",
        "container_name": "server",
        "namespace_id": "default",
        "instance_id": "9129877941112239823",
        "pod_id": "server-deployment-85c9b499cb-8c4d5",
        "zone": "us-central1-a",
        "project_id": "multi-k8s-224518"
      }
    },
    "timestamp": "2018-12-08T05:15:59Z",
    "severity": "INFO",
    "labels": {
      "compute.googleapis.com/resource_name": "fluentd-gcp-v2.0.17-gbgh2",
      "container.googleapis.com/stream": "stdout",
      "container.googleapis.com/pod_name": "server-deployment-85c9b499cb-8c4d5",
      "container.googleapis.com/namespace_name": "default"
    },
    "logName": "projects/multi-k8s-224518/logs/server",
    "receiveTimestamp": "2018-12-08T05:16:03.430490787Z"
  },
```
- The problem is with that the redis data generated by `NodeJs` is not compatible with the data generated by `Java`. 
- The `redis` container must be `rolled up` (Update the image)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly6.png)

- Click on `ACTIONS -> Rolling Update`

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly7.png)

- Click on `UPDATE`

- There are issues with the `Postgres` database created by `NodeJs` because it doesn't have the `Id` field.
```json
{
    "textPayload": "org.postgresql.util.PSQLException: ERROR: column value0_.id does not exist\n",
    "insertId": "1b6isxxf1ou4g4",
    "resource": {
      "type": "container",
      "labels": {
        "pod_id": "server-deployment-85c9b499cb-8c4d5",
        "zone": "us-central1-a",
        "project_id": "multi-k8s-224518",
        "cluster_name": "multi-cluster",
        "container_name": "server",
        "namespace_id": "default",
        "instance_id": "9129877941112239823"
      }
    },
```
- We have to delete the `Persistent volume`, not the `Persistent Volume Claim`

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly8.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly9.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly10.png)

- The `Persistent Volume Claim` must be created again
- Delete the current one

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly11.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly12.png)

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly13.png)

- Restart the build on Travis CI

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly14.png)

- The `database-persistent-volume-claim` **Persistent Volume Claim** and the `postgres-deployment`, `redis-deployment` and `server-deployment` **Deployments** must be deleted (manually or using the Google Cloud UI) and then recreated executing `Restart Build` from `Travis CI`

![](/images/projects/java-multi-docker/GoogleEKUpdatedProperly15.png)


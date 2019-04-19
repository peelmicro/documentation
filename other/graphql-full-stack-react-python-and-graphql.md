# Full-Stack React, Python, and GraphQL (Part 1)

> Github Repositories

- [full-stack-react-python-and-graphql](https://github.com/peelmicro/full-stack-react-python-and-graphql).

The [Full-Stack React, Python, and GraphQL](https://www.udemy.com/full-stack-react-python-and-graphql/) Udemy course helps develop impressive, rich full-stack apps with the latest and greatest features of Python, React and GraphQL.

> Other parts:

- [Full-Stack React, Python, and GraphQL (Part 2)](./graphql-full-stack-react-python-and-graphql-2.md)
- [Full-Stack React, Python, and GraphQL (Part 3)](./graphql-full-stack-react-python-and-graphql-3.md)

> Table of contents
> [[toc]]

## What I've learned

- How to build stunning, complete full-stack applications with React and Python
- Create robust Python backends with the Django Web Framework
- Integrate GraphQL with Python using Graphene and Graphene-Django
- Use GraphQL in great depth; from fundamental concepts to using it in full-stack apps
- The latest and greatest React concepts, including React Hooks, React Context and more
- Working with GraphQL on the backend to create a complete API (w/ Django and Graphene)
- GraphQL in React applications in great depth with Apollo Boost, Apollo Client and Apollo Client State

## Section 1. Getting Started 4min

### 1. What You Need for This Course 2min

- We need to have installed Python. We can install it from [Download the latest version for Windows](https://www.python.org/downloads/) or using [Chocolatey](https://chocolatey.org/) and search for Python.

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse3.png)

- As I have python `3.7.2` installed I'm going to execute `choco upgrade python` to upgrade it to the latest version:

```bash
Microsoft Windows [Version 10.0.17763.379]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32>python
Python 3.7.2 (tags/v3.7.2:9a3ffc0492, Dec 23 2018, 23:09:28) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> exit
Use exit() or Ctrl-Z plus Return to exit
>>> exit()

C:\Windows\system32>choco upgrade python
Chocolatey v0.10.11
Upgrading the following packages:
python
By upgrading you accept licenses for the packages.
python is not installed. Installing...
Progress: Downloading python3 3.7.3... 100%
Progress: Downloading python3 3.7.3... 100%
Progress: Downloading python 3.7.3... 100%
Progress: Downloading python 3.7.3... 100%

python3 v3.7.3 [Approved]
python3 package files upgrade completed. Performing other installation steps.
The package python3 wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): Y

Installing 64-bit python3...
python3 has been installed.
Installed to: 'C:\Python37'
  python3 can be automatically uninstalled.
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The upgrade of python3 was successful.
  Software installed as 'exe', install location is likely default.

python v3.7.3 [Approved]
python package files upgrade completed. Performing other installation steps.
 The upgrade of python was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

Chocolatey upgraded 2/2 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

C:\Windows\system32>python
Python 3.7.3 (v3.7.3:ef4ec6ed12, Mar 25 2019, 22:22:05) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> exit()

C:\Windows\system32>
```

- We also need to have installed [Pipenv: Python Dev Workflow for Humans](https://pipenv.readthedocs.io/en/latest/).

- Before using `Pipenv` we need it installed [pip - The Python Package Installer](https://pip.pypa.io/en/stable/).

* PIP is already installed with when Python 3 is installed. So we need to ensure the latest version is installled:

```bash
C:\Windows\system32>python -m pip install -U pip
Requirement already up-to-date: pip in c:\python37\lib\site-packages (19.0.3)
```

- As it is explained on [Installing Pipenv](https://python-docs.readthedocs.io/en/latest/dev/virtualenvs.html#installing-pipenv), we can use pip to install pipenv.

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse4.png)

```bash
C:\Windows\system32>python -m pip install -U pip
Requirement already up-to-date: pip in c:\python37\lib\site-packages (19.0.3)

C:\Windows\system32>
C:\Windows\system32>pip install --user pipenv
Collecting pipenv
  Downloading https://files.pythonhosted.org/packages/13/b4/3ffa55f77161cff9a5220f162670f7c5eb00df52e00939e203f601b0f579/pipenv-2018.11.26-py3-none-any.whl (5.2MB)
    100% |████████████████████████████████| 5.2MB 2.3MB/s
Requirement already satisfied: setuptools>=36.2.1 in c:\python37\lib\site-packages (from pipenv) (40.8.0)
Collecting certifi (from pipenv)
  Downloading https://files.pythonhosted.org/packages/60/75/f692a584e85b7eaba0e03827b3d51f45f571c2e793dd731e598828d380aa/certifi-2019.3.9-py2.py3-none-any.whl (158kB)
    100% |████████████████████████████████| 163kB 1.1MB/s
Collecting virtualenv-clone>=0.2.5 (from pipenv)
  Downloading https://files.pythonhosted.org/packages/e3/d9/d9c56deb483c4d3289a00b12046e41428be64e8236fa210111a1f57cc42d/virtualenv_clone-0.5.1-py2.py3-none-any.whl
Collecting virtualenv (from pipenv)
  Downloading https://files.pythonhosted.org/packages/33/5d/314c760d4204f64e4a968275182b7751bd5c3249094757b39ba987dcfb5a/virtualenv-16.4.3-py2.py3-none-any.whl (2.0MB)
    100% |████████████████████████████████| 2.0MB 2.3MB/s
Requirement already satisfied: pip>=9.0.1 in c:\python37\lib\site-packages (from pipenv) (19.0.3)
Installing collected packages: certifi, virtualenv-clone, virtualenv, pipenv
Successfully installed certifi-2019.3.9 pipenv-2018.11.26 virtualenv-16.4.3 virtualenv-clone-0.5.1
```

```bash
C:\Windows\system32>pipenv --version
pipenv, version 2018.11.26

C:\Windows\system32>
```

- We need to install `Node.js` downloading and installing it from [Node.js](https://nodejs.org/en/) or using [Chocolatey Node JS](https://chocolatey.org/packages/nodejs)

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse5.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse6.png)

- I'm going to use `Chocolatey` by executing:

```bash
C:\Windows\system32>choco install nodejs
Chocolatey v0.10.11
Installing the following packages:
nodejs
By installing you accept licenses for the packages.
Progress: Downloading nodejs.install 11.13.0... 100%
Progress: Downloading nodejs 11.13.0... 100%

nodejs.install v11.13.0 [Approved]
nodejs.install package files install completed. Performing other installation steps.
The package nodejs.install wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): Y

Installing 64 bit version
Installing nodejs.install...
nodejs.install has been installed.
  nodejs.install may be able to be automatically uninstalled.
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The install of nodejs.install was successful.
  Software installed as 'msi', install location is likely default.

nodejs v11.13.0 [Approved]
nodejs package files install completed. Performing other installation steps.
 The install of nodejs was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

Chocolatey installed 2/2 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

C:\Windows\system32>node --version
v11.13.0
```

- We need to install `yarn` downloading and installing from [yarn - FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT.](https://yarnpkg.com/en/) or using [Chocolatey yarn](https://chocolatey.org/packages/yarn).

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse7.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse8.png)

- I'm going to use `Chocolatey` by executing:

```bash
C:\Windows\system32>choco install yarn
Chocolatey v0.10.11
Installing the following packages:
yarn
By installing you accept licenses for the packages.
yarn v1.13.0 already installed.
 Use --force to reinstall, specify a version to install, or try upgrade.

Chocolatey installed 0/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

Warnings:
 - yarn - yarn v1.13.0 already installed.
 Use --force to reinstall, specify a version to install, or try upgrade.

C:\Windows\system32>choco upgrade yarn
Chocolatey v0.10.11
Upgrading the following packages:
yarn
By upgrading you accept licenses for the packages.

You have yarn v1.13.0 installed. Version 1.15.2 is available based on your source(s).
Progress: Downloading yarn 1.15.2... 100%

yarn v1.15.2 [Approved]
yarn package files upgrade completed. Performing other installation steps.
The package yarn wants to run 'chocolateyinstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): Y

Downloading yarn
  from 'https://yarnpkg.com/downloads/1.15.2/yarn-1.15.2.msi'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\yarn\1.15.2\yarn-1.15.2.msi (1.5 MB).
Download of yarn-1.15.2.msi (1.5 MB) completed.
Hashes match.
Installing yarn...
yarn has been installed.
#< CLIXML
<Objs Version="1.1.0.1" xmlns="http://schemas.microsoft.com/powershell/2004/04"><Obj S="progress" RefId="0"><TN RefId="0"><T>System.Management.Automation.PSCustomObject</T><T>System.Object</T></TN><MS><I64 N="SourceId">1</I64><PR N="Record"><AV>Preparing modules for first use.</AV><AI>0</AI><Nil /><PI>-1</PI><PC>-1</PC><T>Completed</T><SR>-1</SR><SD> </SD></PR></MS></Obj><Obj S="progress" RefId="1"><TNRef RefId="0" /><MS><I64 N="SourceId">1</I64><PR N="Record"><AV>Preparing modules for first use.</AV><AI>0</AI><Nil /><PI>-1</PI><PC>-1</PC><T>Completed</T><SR>-1</SR><SD> </SD></PR></MS></Obj><S S="debug">Host version is 5.1.17763.316, PowerShell Version is '5.1.17763.316' and CLR Version is '4.0.30319.42000'.</S><S S="verbose">Exporting function 'Format-FileSize'.</S><S S="verbose">Exporting function 'Get-ChecksumValid'.</S><S S="verbose">Exporting function 'Get-ChocolateyUnzip'.</S><S S="verbose">Exporting function 'Get-ChocolateyWebFile'.</S><S S="verbose">Exporting function 'Get-EnvironmentVariable'.</S><S S="verbose">Exporting function 'Get-EnvironmentVariableNames'.</S><S S="verbose">Exporting function 'Get-FtpFile'.</S><S S="verbose">Exporting function 'Get-OSArchitectureWidth'.</S><S S="verbose">Exporting function 'Get-PackageParameters'.</S><S S="verbose">Exporting function 'Get-PackageParametersBuiltIn'.</S><S S="verbose">Exporting function 'Get-ToolsLocation'.</S><S S="verbose">Exporting function 'Get-UACEnabled'.</S><S S="verbose">Exporting function 'Get-UninstallRegistryKey'.</S><S S="verbose">Exporting function 'Get-VirusCheckValid'.</S><S S="verbose">Exporting function 'Get-WebFile'.</S><S S="verbose">Exporting function 'Get-WebFileName'.</S><S S="verbose">Exporting function 'Get-WebHeaders'.</S><S S="verbose">Exporting function 'Install-BinFile'.</S><S S="verbose">Exporting function 'Install-ChocolateyDesktopLink'.</S><S S="verbose">Exporting function 'Install-ChocolateyEnvironmentVariable'.</S><S S="verbose">Exporting function 'Install-ChocolateyExplorerMenuItem'.</S><S S="verbose">Exporting function 'Install-ChocolateyFileAssociation'.</S><S S="verbose">Exporting function 'Install-ChocolateyInstallPackage'.</S><S S="verbose">Exporting function 'Install-ChocolateyPackage'.</S><S S="verbose">Exporting function 'Install-ChocolateyPath'.</S><S S="verbose">Exporting function 'Install-ChocolateyPinnedTaskBarItem'.</S><S S="verbose">Exporting function 'Install-ChocolateyPowershellCommand'.</S><S S="verbose">Exporting function 'Install-ChocolateyShortcut'.</S><S S="verbose">Exporting function 'Install-ChocolateyVsixPackage'.</S><S S="verbose">Exporting function 'Install-ChocolateyZipPackage'.</S><S S="verbose">Exporting function 'Install-Vsix'.</S><S S="verbose">Exporting function 'Set-EnvironmentVariable'.</S><S S="verbose">Exporting function 'Set-PowerShellExitCode'.</S><S S="verbose">Exporting function 'Start-ChocolateyProcessAsAdmin'.</S><S S="verbose">Exporting function 'Test-ProcessAdminRights'.</S><S S="verbose">Exporting function 'Uninstall-BinFile'.</S><S S="verbose">Exporting function 'Uninstall-ChocolateyEnvironmentVariable'.</S><S S="verbose">Exporting function 'Uninstall-ChocolateyPackage'.</S><S S="verbose">Exporting function 'Uninstall-ChocolateyZipPackage'.</S><S S="verbose">Exporting function 'Update-SessionEnvironment'.</S><S S="verbose">Exporting function 'Write-ChocolateyFailure'.</S><S S="verbose">Exporting function 'Write-ChocolateySuccess'.</S><S S="verbose">Exporting function 'Write-FileUpdateLog'.</S><S S="verbose">Exporting function 'Write-FunctionCallLogMessage'.</S><S S="verbose">Exporting alias 'Get-ProcessorBits'.</S><S S="verbose">Exporting alias 'Get-OSBitness'.</S><S S="verbose">Exporting alias 'Get-InstallRegistryKey'.</S><S S="verbose">Exporting alias 'Generate-BinFile'.</S><S S="verbose">Exporting alias 'Add-BinFile'.</S><S S="verbose">Exporting alias 'Start-ChocolateyProcess'.</S><S S="verbose">Exporting alias 'Invoke-ChocolateyProcess'.</S><S S="verbose">Exporting alias 'Remove-BinFile'.</S><S S="verbose">Exporting alias 'refreshenv'.</S><S S="debug">Loading community extensions</S><S S="debug">Importing 'C:\ProgramData\chocolatey\extensions\chocolatey-core\chocolatey-core.psm1'</S><S S="verbose">Loading module from path 'C:\ProgramData\chocolatey\extensions\chocolatey-core\chocolatey-core.psm1'.</S><S S="verbose">Exporting function 'Get-UninstallRegistryKey'.</S><S S="verbose">Exporting function 'Get-AppInstallLocation'.</S><S S="verbose">Exporting function 'Get-AvailableDriveLetter'.</S><S S="verbose">Exporting function 'Get-EffectiveProxy'.</S><S S="verbose">Exporting function 'Get-PackageCacheLocation'.</S><S S="verbose">Exporting function 'Get-PackageParameters'.</S><S S="verbose">Exporting function 'Get-WebContent'.</S><S S="verbose">Exporting function 'Register-Application'.</S><S S="verbose">Importing function 'Get-AppInstallLocation'.</S><S S="verbose">Importing function 'Get-AvailableDriveLetter'.</S><S S="verbose">Importing function 'Get-EffectiveProxy'.</S><S S="verbose">Importing function 'Get-PackageCacheLocation'.</S><S S="verbose">Importing function 'Get-PackageParameters'.</S><S S="verbose">Importing function 'Get-UninstallRegistryKey'.</S><S S="verbose">Importing function 'Get-WebContent'.</S><S S="verbose">Importing function 'Register-Application'.</S><S S="debug">Importing 'C:\ProgramData\chocolatey\extensions\chocolatey-visualstudio\chocolatey-visualstudio.extension.psm1'</S><S S="verbose">Loading module from path 'C:\ProgramData\chocolatey\extensions\chocolatey-visualstudio\chocolatey-visualstudio.extension.psm1'.</S><S S="verbose">Exporting function 'Add-VisualStudioComponent'.</S><S S="verbose">Exporting function 'Add-VisualStudioWorkload'.</S><S S="verbose">Exporting function 'Get-VisualStudioInstaller'.</S><S S="verbose">Exporting function 'Get-VisualStudioInstallerHealth'.</S><S S="verbose">Exporting function 'Get-VisualStudioInstance'.</S><S S="verbose">Exporting function 'Get-VisualStudioVsixInstaller'.</S><S S="verbose">Exporting function 'Install-VisualStudio'.</S><S S="verbose">Exporting function 'Install-VisualStudioInstaller'.</S><S S="verbose">Exporting function 'Install-VisualStudioVsixExtension'.</S><S S="verbose">Exporting function 'Remove-VisualStudioComponent'.</S><S S="verbose">Exporting function 'Remove-VisualStudioProduct'.</S><S S="verbose">Exporting function 'Remove-VisualStudioWorkload'.</S><S S="verbose">Exporting function 'Uninstall-VisualStudio'.</S><S S="verbose">Exporting function 'Uninstall-VisualStudioVsixExtension'.</S><S S="verbose">Importing function 'Add-VisualStudioComponent'.</S><S S="verbose">Importing function 'Add-VisualStudioWorkload'.</S><S S="verbose">Importing function 'Get-VisualStudioInstaller'.</S><S S="verbose">Importing function 'Get-VisualStudioInstallerHealth'.</S><S S="verbose">Importing function 'Get-VisualStudioInstance'.</S><S S="verbose">Importing function 'Get-VisualStudioVsixInstaller'.</S><S S="verbose">Importing function 'Install-VisualStudio'.</S><S S="verbose">Importing function 'Install-VisualStudioInstaller'.</S><S S="verbose">Importing function 'Install-VisualStudioVsixExtension'.</S><S S="verbose">Importing function 'Remove-VisualStudioComponent'.</S><S S="verbose">Importing function 'Remove-VisualStudioProduct'.</S><S S="verbose">Importing function 'Remove-VisualStudioWorkload'.</S><S S="verbose">Importing function 'Uninstall-VisualStudio'.</S><S S="verbose">Importing function 'Uninstall-VisualStudioVsixExtension'.</S><S S="debug">Importing 'C:\ProgramData\chocolatey\extensions\chocolatey-windowsupdate\chocolatey-windowsupdate.psm1'</S><S S="verbose">Loading module from path 'C:\ProgramData\chocolatey\extensions\chocolatey-windowsupdate\chocolatey-windowsupdate.psm1'.</S><S S="verbose">Exporting function 'Install-WindowsUpdate'.</S><S S="verbose">Exporting function 'Test-WindowsUpdate'.</S><S S="verbose">Importing function 'Install-WindowsUpdate'.</S><S S="verbose">Importing function 'Test-WindowsUpdate'.</S><S S="verbose">Exporting function 'Format-FileSize'.</S><S S="verbose">Exporting function 'Get-ChecksumValid'.</S><S S="verbose">Exporting function 'Get-ChocolateyUnzip'.</S><S S="verbose">Exporting function 'Get-ChocolateyWebFile'.</S><S S="verbose">Exporting function 'Get-EnvironmentVariable'.</S><S S="verbose">Exporting function 'Get-EnvironmentVariableNames'.</S><S S="verbose">Exporting function 'Get-FtpFile'.</S><S S="verbose">Exporting function 'Get-OSArchitectureWidth'.</S><S S="verbose">Exporting function 'Get-PackageParameters'.</S><S S="verbose">Exporting function 'Get-PackageParametersBuiltIn'.</S><S S="verbose">Exporting function 'Get-ToolsLocation'.</S><S S="verbose">Exporting function 'Get-UACEnabled'.</S><S S="verbose">Exporting function 'Get-UninstallRegistryKey'.</S><S S="verbose">Exporting function 'Get-VirusCheckValid'.</S><S S="verbose">Exporting function 'Get-WebFile'.</S><S S="verbose">Exporting function 'Get-WebFileName'.</S><S S="verbose">Exporting function 'Get-WebHeaders'.</S><S S="verbose">Exporting function 'Install-BinFile'.</S><S S="verbose">Exporting function 'Install-ChocolateyDesktopLink'.</S><S S="verbose">Exporting function 'Install-ChocolateyEnvironmentVariable'.</S><S S="verbose">Exporting function 'Install-ChocolateyExplorerMenuItem'.</S><S S="verbose">Exporting function 'Install-ChocolateyFileAssociation'.</S><S S="verbose">Exporting function 'Install-ChocolateyInstallPackage'.</S><S S="verbose">Exporting function 'Install-ChocolateyPackage'.</S><S S="verbose">Exporting function 'Install-ChocolateyPath'.</S><S S="verbose">Exporting function 'Install-ChocolateyPinnedTaskBarItem'.</S><S S="verbose">Exporting function 'Install-ChocolateyPowershellCommand'.</S><S S="verbose">Exporting function 'Install-ChocolateyShortcut'.</S><S S="verbose">Exporting function 'Install-ChocolateyVsixPackage'.</S><S S="verbose">Exporting function 'Install-ChocolateyZipPackage'.</S><S S="verbose">Exporting function 'Install-Vsix'.</S><S S="verbose">Exporting function 'Set-EnvironmentVariable'.</S><S S="verbose">Exporting function 'Set-PowerShellExitCode'.</S><S S="verbose">Exporting function 'Start-ChocolateyProcessAsAdmin'.</S><S S="verbose">Exporting function 'Test-ProcessAdminRights'.</S><S S="verbose">Exporting function 'Uninstall-BinFile'.</S><S S="verbose">Exporting function 'Uninstall-ChocolateyEnvironmentVariable'.</S><S S="verbose">Exporting function 'Uninstall-ChocolateyPackage'.</S><S S="verbose">Exporting function 'Uninstall-ChocolateyZipPackage'.</S><S S="verbose">Exporting function 'Update-SessionEnvironment'.</S><S S="verbose">Exporting function 'Write-ChocolateyFailure'.</S><S S="verbose">Exporting function 'Write-ChocolateySuccess'.</S><S S="verbose">Exporting function 'Write-FileUpdateLog'.</S><S S="verbose">Exporting function 'Write-FunctionCallLogMessage'.</S><S S="verbose">Exporting function 'Get-AppInstallLocation'.</S><S S="verbose">Exporting function 'Get-AvailableDriveLetter'.</S><S S="verbose">Exporting function 'Get-EffectiveProxy'.</S><S S="verbose">Exporting function 'Get-PackageCacheLocation'.</S><S S="verbose">Exporting function 'Get-WebContent'.</S><S S="verbose">Exporting function 'Register-Application'.</S><S S="verbose">Exporting function 'Add-VisualStudioComponent'.</S><S S="verbose">Exporting function 'Add-VisualStudioWorkload'.</S><S S="verbose">Exporting function 'Get-VisualStudioInstaller'.</S><S S="verbose">Exporting function 'Get-VisualStudioInstallerHealth'.</S><S S="verbose">Exporting function 'Get-VisualStudioInstance'.</S><S S="verbose">Exporting function 'Get-VisualStudioVsixInstaller'.</S><S S="verbose">Exporting function 'Install-VisualStudio'.</S><S S="verbose">Exporting function 'Install-VisualStudioInstaller'.</S><S S="verbose">Exporting function 'Install-VisualStudioVsixExtension'.</S><S S="verbose">Exporting function 'Remove-VisualStudioComponent'.</S><S S="verbose">Exporting function 'Remove-VisualStudioProduct'.</S><S S="verbose">Exporting function 'Remove-VisualStudioWorkload'.</S><S S="verbose">Exporting function 'Uninstall-VisualStudio'.</S><S S="verbose">Exporting function 'Uninstall-VisualStudioVsixExtension'.</S><S S="verbose">Exporting function 'Install-WindowsUpdate'.</S><S S="verbose">Exporting function 'Test-WindowsUpdate'.</S><S S="verbose">Exporting alias 'Get-ProcessorBits'.</S><S S="verbose">Exporting alias 'Get-OSBitness'.</S><S S="verbose">Exporting alias 'Get-InstallRegistryKey'.</S><S S="verbose">Exporting alias 'Generate-BinFile'.</S><S S="verbose">Exporting alias 'Add-BinFile'.</S><S S="verbose">Exporting alias 'Start-ChocolateyProcess'.</S><S S="verbose">Exporting alias 'Invoke-ChocolateyProcess'.</S><S S="verbose">Exporting alias 'Remove-BinFile'.</S><S S="verbose">Exporting alias 'refreshenv'.</S></Objs>
0
Only an exit code of non-zero will fail the package by default. Set
 `--failonstderr` if you want error messages to also fail a script. See
 `choco -h` for details.
  yarn may be able to be automatically uninstalled.
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The upgrade of yarn was successful.
  Software installed as 'msi', install location is likely default.

Chocolatey upgraded 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

C:\Windows\system32>yarn --version
1.15.2
```

- We are also going to use [Cloudinary](https://cloudinary.com/) where we can Sign up for free.

![](/images/other/graphql-full-stack-react-python-and-graphql/WhatYouNeedForThisCourse9.png)

### 2. How to Get Most Out of This Course 2min

- To get help from the creator of the course we need to put `@Reed` at the begining of the title

- If we want to get help for the other students we don't have to include `@Reed`

## Section 2. Intro / Refresher on GraphQL 21min

### 3. Queries, Using GraphiQL, GraphQL compared to REST 5min

- We execute `graphql queries` by accessing [SWAPi GraphiQL API](https://graphql.github.io/swapi-graphql/)

![](/images/other/graphql-full-stack-react-python-and-graphql/QueriesUsingGraphiQLGraphQLComparedToREST.png)

- We execute `REST queries` by accessing [SWAPI The Star Wars API](https://swapi.co/)

![](/images/other/graphql-full-stack-react-python-and-graphql/QueriesUsingGraphiQLGraphQLComparedToREST2.png)

- We can start by executing the following query

> request (REST)

```
GET /api/films/
```

> response

```json
{
  "count": 7,
  "next": null,
  "previous": null,
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/8/",
        "https://swapi.co/api/people/9/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/12/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/15/",
        "https://swapi.co/api/people/16/",
        "https://swapi.co/api/people/18/",
        "https://swapi.co/api/people/19/",
        "https://swapi.co/api/people/81/"
      ],
      "planets": [
        "https://swapi.co/api/planets/2/",
        "https://swapi.co/api/planets/3/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/2/",
        "https://swapi.co/api/starships/3/",
        "https://swapi.co/api/starships/5/",
        "https://swapi.co/api/starships/9/",
        "https://swapi.co/api/starships/10/",
        "https://swapi.co/api/starships/11/",
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/13/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/4/",
        "https://swapi.co/api/vehicles/6/",
        "https://swapi.co/api/vehicles/7/",
        "https://swapi.co/api/vehicles/8/"
      ],
      "species": [
        "https://swapi.co/api/species/5/",
        "https://swapi.co/api/species/3/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/4/"
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2015-04-11T09:46:52.774897Z",
      "url": "https://swapi.co/api/films/1/"
    },
    {
      "title": "Attack of the Clones",
      "episode_id": 2,
      "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2002-05-16",
      "characters": [
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/20/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/33/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/40/",
        "https://swapi.co/api/people/43/",
        "https://swapi.co/api/people/46/",
        "https://swapi.co/api/people/51/",
        "https://swapi.co/api/people/52/",
        "https://swapi.co/api/people/53/",
        "https://swapi.co/api/people/58/",
        "https://swapi.co/api/people/59/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/62/",
        "https://swapi.co/api/people/63/",
        "https://swapi.co/api/people/64/",
        "https://swapi.co/api/people/65/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/67/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/69/",
        "https://swapi.co/api/people/70/",
        "https://swapi.co/api/people/71/",
        "https://swapi.co/api/people/72/",
        "https://swapi.co/api/people/73/",
        "https://swapi.co/api/people/74/",
        "https://swapi.co/api/people/75/",
        "https://swapi.co/api/people/76/",
        "https://swapi.co/api/people/77/",
        "https://swapi.co/api/people/78/",
        "https://swapi.co/api/people/82/",
        "https://swapi.co/api/people/35/"
      ],
      "planets": [
        "https://swapi.co/api/planets/8/",
        "https://swapi.co/api/planets/9/",
        "https://swapi.co/api/planets/10/",
        "https://swapi.co/api/planets/11/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/21/",
        "https://swapi.co/api/starships/39/",
        "https://swapi.co/api/starships/43/",
        "https://swapi.co/api/starships/47/",
        "https://swapi.co/api/starships/48/",
        "https://swapi.co/api/starships/49/",
        "https://swapi.co/api/starships/32/",
        "https://swapi.co/api/starships/52/",
        "https://swapi.co/api/starships/58/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/4/",
        "https://swapi.co/api/vehicles/44/",
        "https://swapi.co/api/vehicles/45/",
        "https://swapi.co/api/vehicles/46/",
        "https://swapi.co/api/vehicles/50/",
        "https://swapi.co/api/vehicles/51/",
        "https://swapi.co/api/vehicles/53/",
        "https://swapi.co/api/vehicles/54/",
        "https://swapi.co/api/vehicles/55/",
        "https://swapi.co/api/vehicles/56/",
        "https://swapi.co/api/vehicles/57/"
      ],
      "species": [
        "https://swapi.co/api/species/32/",
        "https://swapi.co/api/species/33/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/35/",
        "https://swapi.co/api/species/6/",
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/12/",
        "https://swapi.co/api/species/34/",
        "https://swapi.co/api/species/13/",
        "https://swapi.co/api/species/15/",
        "https://swapi.co/api/species/28/",
        "https://swapi.co/api/species/29/",
        "https://swapi.co/api/species/30/",
        "https://swapi.co/api/species/31/"
      ],
      "created": "2014-12-20T10:57:57.886000Z",
      "edited": "2015-04-11T09:45:01.623982Z",
      "url": "https://swapi.co/api/films/5/"
    },
    {
      "title": "The Phantom Menace",
      "episode_id": 1,
      "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "1999-05-19",
      "characters": [
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/16/",
        "https://swapi.co/api/people/20/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/32/",
        "https://swapi.co/api/people/33/",
        "https://swapi.co/api/people/34/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/37/",
        "https://swapi.co/api/people/38/",
        "https://swapi.co/api/people/39/",
        "https://swapi.co/api/people/40/",
        "https://swapi.co/api/people/41/",
        "https://swapi.co/api/people/42/",
        "https://swapi.co/api/people/43/",
        "https://swapi.co/api/people/44/",
        "https://swapi.co/api/people/46/",
        "https://swapi.co/api/people/48/",
        "https://swapi.co/api/people/49/",
        "https://swapi.co/api/people/50/",
        "https://swapi.co/api/people/51/",
        "https://swapi.co/api/people/52/",
        "https://swapi.co/api/people/53/",
        "https://swapi.co/api/people/54/",
        "https://swapi.co/api/people/55/",
        "https://swapi.co/api/people/56/",
        "https://swapi.co/api/people/57/",
        "https://swapi.co/api/people/58/",
        "https://swapi.co/api/people/59/",
        "https://swapi.co/api/people/47/",
        "https://swapi.co/api/people/35/"
      ],
      "planets": [
        "https://swapi.co/api/planets/8/",
        "https://swapi.co/api/planets/9/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/40/",
        "https://swapi.co/api/starships/41/",
        "https://swapi.co/api/starships/31/",
        "https://swapi.co/api/starships/32/",
        "https://swapi.co/api/starships/39/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/33/",
        "https://swapi.co/api/vehicles/34/",
        "https://swapi.co/api/vehicles/35/",
        "https://swapi.co/api/vehicles/36/",
        "https://swapi.co/api/vehicles/37/",
        "https://swapi.co/api/vehicles/38/",
        "https://swapi.co/api/vehicles/42/"
      ],
      "species": [
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/6/",
        "https://swapi.co/api/species/11/",
        "https://swapi.co/api/species/12/",
        "https://swapi.co/api/species/13/",
        "https://swapi.co/api/species/14/",
        "https://swapi.co/api/species/15/",
        "https://swapi.co/api/species/16/",
        "https://swapi.co/api/species/17/",
        "https://swapi.co/api/species/18/",
        "https://swapi.co/api/species/19/",
        "https://swapi.co/api/species/20/",
        "https://swapi.co/api/species/21/",
        "https://swapi.co/api/species/22/",
        "https://swapi.co/api/species/23/",
        "https://swapi.co/api/species/24/",
        "https://swapi.co/api/species/25/",
        "https://swapi.co/api/species/26/",
        "https://swapi.co/api/species/27/"
      ],
      "created": "2014-12-19T16:52:55.740000Z",
      "edited": "2015-04-11T09:45:18.689301Z",
      "url": "https://swapi.co/api/films/4/"
    },
    {
      "title": "Revenge of the Sith",
      "episode_id": 3,
      "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2005-05-19",
      "characters": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/12/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/20/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/33/",
        "https://swapi.co/api/people/46/",
        "https://swapi.co/api/people/51/",
        "https://swapi.co/api/people/52/",
        "https://swapi.co/api/people/53/",
        "https://swapi.co/api/people/54/",
        "https://swapi.co/api/people/55/",
        "https://swapi.co/api/people/56/",
        "https://swapi.co/api/people/58/",
        "https://swapi.co/api/people/63/",
        "https://swapi.co/api/people/64/",
        "https://swapi.co/api/people/67/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/75/",
        "https://swapi.co/api/people/78/",
        "https://swapi.co/api/people/79/",
        "https://swapi.co/api/people/80/",
        "https://swapi.co/api/people/81/",
        "https://swapi.co/api/people/82/",
        "https://swapi.co/api/people/83/",
        "https://swapi.co/api/people/35/"
      ],
      "planets": [
        "https://swapi.co/api/planets/2/",
        "https://swapi.co/api/planets/5/",
        "https://swapi.co/api/planets/8/",
        "https://swapi.co/api/planets/9/",
        "https://swapi.co/api/planets/12/",
        "https://swapi.co/api/planets/13/",
        "https://swapi.co/api/planets/14/",
        "https://swapi.co/api/planets/15/",
        "https://swapi.co/api/planets/16/",
        "https://swapi.co/api/planets/17/",
        "https://swapi.co/api/planets/18/",
        "https://swapi.co/api/planets/19/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/48/",
        "https://swapi.co/api/starships/59/",
        "https://swapi.co/api/starships/61/",
        "https://swapi.co/api/starships/32/",
        "https://swapi.co/api/starships/63/",
        "https://swapi.co/api/starships/64/",
        "https://swapi.co/api/starships/65/",
        "https://swapi.co/api/starships/66/",
        "https://swapi.co/api/starships/74/",
        "https://swapi.co/api/starships/75/",
        "https://swapi.co/api/starships/2/",
        "https://swapi.co/api/starships/68/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/33/",
        "https://swapi.co/api/vehicles/50/",
        "https://swapi.co/api/vehicles/53/",
        "https://swapi.co/api/vehicles/56/",
        "https://swapi.co/api/vehicles/60/",
        "https://swapi.co/api/vehicles/62/",
        "https://swapi.co/api/vehicles/67/",
        "https://swapi.co/api/vehicles/69/",
        "https://swapi.co/api/vehicles/70/",
        "https://swapi.co/api/vehicles/71/",
        "https://swapi.co/api/vehicles/72/",
        "https://swapi.co/api/vehicles/73/",
        "https://swapi.co/api/vehicles/76/"
      ],
      "species": [
        "https://swapi.co/api/species/19/",
        "https://swapi.co/api/species/33/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/3/",
        "https://swapi.co/api/species/36/",
        "https://swapi.co/api/species/37/",
        "https://swapi.co/api/species/6/",
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/34/",
        "https://swapi.co/api/species/15/",
        "https://swapi.co/api/species/35/",
        "https://swapi.co/api/species/20/",
        "https://swapi.co/api/species/23/",
        "https://swapi.co/api/species/24/",
        "https://swapi.co/api/species/25/",
        "https://swapi.co/api/species/26/",
        "https://swapi.co/api/species/27/",
        "https://swapi.co/api/species/28/",
        "https://swapi.co/api/species/29/",
        "https://swapi.co/api/species/30/"
      ],
      "created": "2014-12-20T18:49:38.403000Z",
      "edited": "2015-04-11T09:45:44.862122Z",
      "url": "https://swapi.co/api/films/6/"
    },
    {
      "title": "Return of the Jedi",
      "episode_id": 6,
      "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
      "director": "Richard Marquand",
      "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
      "release_date": "1983-05-25",
      "characters": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/16/",
        "https://swapi.co/api/people/18/",
        "https://swapi.co/api/people/20/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/25/",
        "https://swapi.co/api/people/27/",
        "https://swapi.co/api/people/28/",
        "https://swapi.co/api/people/29/",
        "https://swapi.co/api/people/30/",
        "https://swapi.co/api/people/31/",
        "https://swapi.co/api/people/45/"
      ],
      "planets": [
        "https://swapi.co/api/planets/5/",
        "https://swapi.co/api/planets/7/",
        "https://swapi.co/api/planets/8/",
        "https://swapi.co/api/planets/9/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/15/",
        "https://swapi.co/api/starships/10/",
        "https://swapi.co/api/starships/11/",
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/",
        "https://swapi.co/api/starships/23/",
        "https://swapi.co/api/starships/27/",
        "https://swapi.co/api/starships/28/",
        "https://swapi.co/api/starships/29/",
        "https://swapi.co/api/starships/3/",
        "https://swapi.co/api/starships/17/",
        "https://swapi.co/api/starships/2/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/8/",
        "https://swapi.co/api/vehicles/16/",
        "https://swapi.co/api/vehicles/18/",
        "https://swapi.co/api/vehicles/19/",
        "https://swapi.co/api/vehicles/24/",
        "https://swapi.co/api/vehicles/25/",
        "https://swapi.co/api/vehicles/26/",
        "https://swapi.co/api/vehicles/30/"
      ],
      "species": [
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/3/",
        "https://swapi.co/api/species/5/",
        "https://swapi.co/api/species/6/",
        "https://swapi.co/api/species/8/",
        "https://swapi.co/api/species/9/",
        "https://swapi.co/api/species/10/",
        "https://swapi.co/api/species/15/"
      ],
      "created": "2014-12-18T10:39:33.255000Z",
      "edited": "2015-04-11T09:46:05.220365Z",
      "url": "https://swapi.co/api/films/3/"
    },
    {
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17",
      "characters": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/18/",
        "https://swapi.co/api/people/20/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/23/",
        "https://swapi.co/api/people/24/",
        "https://swapi.co/api/people/25/",
        "https://swapi.co/api/people/26/"
      ],
      "planets": [
        "https://swapi.co/api/planets/4/",
        "https://swapi.co/api/planets/5/",
        "https://swapi.co/api/planets/6/",
        "https://swapi.co/api/planets/27/"
      ],
      "starships": [
        "https://swapi.co/api/starships/15/",
        "https://swapi.co/api/starships/10/",
        "https://swapi.co/api/starships/11/",
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/21/",
        "https://swapi.co/api/starships/22/",
        "https://swapi.co/api/starships/23/",
        "https://swapi.co/api/starships/3/",
        "https://swapi.co/api/starships/17/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/8/",
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/16/",
        "https://swapi.co/api/vehicles/18/",
        "https://swapi.co/api/vehicles/19/",
        "https://swapi.co/api/vehicles/20/"
      ],
      "species": [
        "https://swapi.co/api/species/6/",
        "https://swapi.co/api/species/7/",
        "https://swapi.co/api/species/3/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/1/"
      ],
      "created": "2014-12-12T11:26:24.656000Z",
      "edited": "2017-04-19T10:57:29.544256Z",
      "url": "https://swapi.co/api/films/2/"
    },
    {
      "title": "The Force Awakens",
      "episode_id": 7,
      "opening_crawl": "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....",
      "director": "J. J. Abrams",
      "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
      "release_date": "2015-12-11",
      "characters": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/27/",
        "https://swapi.co/api/people/84/",
        "https://swapi.co/api/people/85/",
        "https://swapi.co/api/people/86/",
        "https://swapi.co/api/people/87/",
        "https://swapi.co/api/people/88/"
      ],
      "planets": ["https://swapi.co/api/planets/61/"],
      "starships": [
        "https://swapi.co/api/starships/77/",
        "https://swapi.co/api/starships/10/"
      ],
      "vehicles": [],
      "species": [
        "https://swapi.co/api/species/3/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/1/"
      ],
      "created": "2015-04-17T06:51:30.504780Z",
      "edited": "2015-12-17T14:31:47.617768Z",
      "url": "https://swapi.co/api/films/7/"
    }
  ]
}
```

- With `REST` there is no way to obtain just the `titles of the films` data, for instance.

- With `GraphQL` we just need to execute a query like the following one to obtain it.

> request (GraphQL)

```
{
  allFilms {
    films {
      title
    }
  }
}
```

> response

```json
{
  "data": {
    "allFilms": {
      "films": [
        {
          "title": "A New Hope"
        },
        {
          "title": "The Empire Strikes Back"
        },
        {
          "title": "Return of the Jedi"
        },
        {
          "title": "The Phantom Menace"
        },
        {
          "title": "Attack of the Clones"
        },
        {
          "title": "Revenge of the Sith"
        },
        {
          "title": "The Force Awakens"
        }
      ]
    }
  }
}
```

### 4. GraphQL Type System / Schema, Object vs. Scalar Types, Arguments 7min

- The data returned by a `GraphQL` query is validated by a `Type System`. Each part of the query has an specific type.

- A `Schema` must be defined for each query. The name, the shape and the type of each piece of data must be defined.

- We can find more information about the `query schema` from `GraphiQL` by clicking on `<Docs`.

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments.png)

- There is always a `root` query type in each `schema`.

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments2.png)

- If we click on it we can see all the individual fields that we can query:

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments4.png)

- At the end of each field we can see the type of data it returns. `FilmsConnections` for `allFilms`, for instance.

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments5.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments7.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/GraphQLTypeSystemSchemaObjectVsScalarTypesArguments8.png)

> request

```
{
  film(filmID: "1") {
    title
    episodeID
  }
}
```

> response

```json
{
  "data": {
    "film": {
      "title": "A New Hope",
      "episodeID": 4
    }
  }
}
```

- If we pass an invalid data format and error is returned.

> request

```
{
  film(filmID: false) {
    title
    episodeID
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Expected type ID, found false.",
      "locations": [
        {
          "line": 2,
          "column": 16
        }
      ]
    }
  ]
}
```

### 5. Mutations for Creating, Updating, Deleting Data in GraphQL 5min

> url

```
http://bnames.herokuapp.com/graphql
```

> request

```graphql
{
  babies {
    name
    votes
  }
}
```

> response

```json
{
  "data": {
    "babies": [
      {
        "name": "Donut",
        "votes": 0
      },
      {
        "name": "Eclairs",
        "votes": 2
      },
      {
        "name": "Froyo",
        "votes": 6
      },
      {
        "name": "Gingerbread",
        "votes": 2
      },
      {
        "name": "Icecream Sandwich",
        "votes": 0
      },
      {
        "name": "Jellybean",
        "votes": 0
      },
      {
        "name": "KitKat",
        "votes": 1
      },
      {
        "name": "Lollipop",
        "votes": 3
      },
      {
        "name": "Marshmallow",
        "votes": 2
      },
      {
        "name": "Nougat",
        "votes": 0
      },
      {
        "name": "Oreo",
        "votes": 1
      },
      {
        "name": "Pie",
        "votes": 0
      },
      {
        "name": "Dungle",
        "votes": 3
      },
      {
        "name": "James",
        "votes": 0
      },
      {
        "name": "js1317",
        "votes": 0
      },
      {
        "name": "Andriy",
        "votes": 0
      },
      {
        "name": "Fred",
        "votes": 1
      },
      {
        "name": "Test Baby",
        "votes": 9
      },
      {
        "name": "james",
        "votes": 0
      },
      {
        "name": "Jimmy",
        "votes": 0
      }
    ]
  }
}
```

![](/images/other/graphql-full-stack-react-python-and-graphql/MutationsForCreatingUpdatingDeletingDataInGraphQL.png)

> request

```graphql
mutation {
  createBaby(babyInfo: { name: "Juan", votes: 5 }) {
    name
    votes
  }
}
```

> response

```json
{
  "data": {
    "createBaby": {
      "name": "Juan",
      "votes": 5
    }
  }
}
```

> request

```graphql
mutation {
  upVote(name: "Juan") {
    name
    votes
  }
}
```

> response

```json
{
  "data": {
    "upVote": {
      "name": "Juan",
      "votes": 6
    }
  }
}
```

### 6. Dynamic Values in Queries / Mutations with GraphQL Variables 4min

> url

```
http://bnames.herokuapp.com/graphql
```

> request

```graphql
mutation($name: String!, $votes: Int!) {
  createBaby(babyInfo: { name: $name, votes: $votes }) {
    name
    votes
  }
}
```

> Query variables

```json
{
  "name": "Juan",
  "votes": 6
}
```

> response

```json
{
  "data": {
    "createBaby": {
      "name": "Juan",
      "votes": 6
    }
  }
}
```

## Section 3

### Intro to Graphene / GraphQL in Python 29min

### 7. Hello World in Graphene 6min

- We are going to create a small GraphQL application with `Python` and [Graphene Python](https://graphene-python.org/) that allows using `GraphQL` in conjunction with `Python`.

![](/images/other/graphql-full-stack-react-python-and-graphql/HelloWorldInGraphene.png)

- Create the `python-graphene` folder and the `schema.py` document inside

- Execute the command `pipenv shell` inside that folder with the `Visual Studio Code` Editor.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ pipenv shell
Creating a virtualenv for this project…
Pipfile: C:\Work\Training\Pre\GraphQL\full-stack-react-python-and-graphql\python-graphene\PipfileUsing c:\python37\python.exe (3.7.3) to create virtualenv…
[=   ] Creating virtual environment...Already using interpreter c:\python37\python.exe
Using base prefix 'c:\\python37'
New python executable in C:\Users\juan.pablo.perez\.virtualenvs\python-graphene-anuBwtVV\Scripts\python.exe
Installing setuptools, pip, wheel...
done.

Successfully created virtual environment!
Virtualenv location: C:\Users\juan.pablo.perez\.virtualenvs\python-graphene-anuBwtVV
Creating a Pipfile for this project…
Launching subshell in virtual environment…

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
```

- It has created a `virtual environment` for the project and the `Pipfile`.

::: info
Pipfile is a toml type file, so we need to install the Better TOML extension
:::

> Pipfile

```toml
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]

[packages]

[requires]
python_version = "3.7"
```

- If we want to enter the `pipenv shell` we just to need type the following

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ pipenv shell
Launching subshell in virtual environment…
```

- If we want to exit the `pipenv enviroment` we have just to execute `exit`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ exit
exit

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
```

- We need to install `graphine` using pipenv:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ pipenv install graphene
Installing graphene…
Adding graphene to Pipfile's [packages]…
Installation Succeeded
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Success!
Updated Pipfile.lock (687cd2)!
Installing dependencies from Pipfile.lock (687cd2)…
  ================================ 7/7 - 00:00:08

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
```

- Apart from installing `graphine` it also modifies the `Pipfile` document

```toml
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]

[packages]
graphene = "*"

[requires]
python_version = "3.7"
```

- We are going to create a `Hello` query that returns the `World!` string using `graphine`

- We need to import the `graphine` library and create a class called `Query`. The class needs to have a `resolve_name` method for each `name` query that we wants to create.

- We also needs to create a Schema by using `graphene.Schema()`

> schema.py

```py
import graphene

class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(self, info):
        return "World"


schema = graphene.Schema(query=Query)

result = schema.execute(
  '''
  {
      hello
  }
  '''
)

print(result.data.items())
```

- We can execute it by using

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
odict_items([('hello', 'World')])
```

- We can modify it to use json

> schema.py

```py
import graphene
import json


class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(self, info):
        return "World"


schema = graphene.Schema(query=Query)

result = schema.execute(
    '''
  {
      hello
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "hello": "World"
}
```

### 8. Syntax in Graphene / Snakecase vs Camelcase 2min

- The schema must always been written in `CamelCase`

- We can add a new `is_admin` method

> schema.py

```py
import graphene
import json


class Query(graphene.ObjectType):
  hello = graphene.String()
  is_admin = graphene.Boolean()

  def resolve_hello(self, info):
      return "World"

  def resolve_is_admin(self, info):
      return True

schema = graphene.Schema(query=Query)

result = schema.execute(
  '''
  {
      is_admin
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
)
```

- If we try to execute it we got an error:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
Traceback (most recent call last):
  File "schema.py", line 26, in <module>
    dictResult = dict(result.data.items())
AttributeError: 'NoneType' object has no attribute 'items'
```

- The reason is because the name in the schema must be `IsAdmin` instead of `is_admin`

> schema.py

```py
import graphene
import json


class Query(graphene.ObjectType):
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True


schema = graphene.Schema(query=Query)

result = schema.execute(
    '''
  {
      isAdmin
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "isAdmin": true
}
```

- We can change this behaviour by using `auto-camelcase=False`

> schema.py

```py
import graphene
import json


class Query(graphene.ObjectType):
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True


schema = graphene.Schema(query=Query, auto_camelcase=False)

result = schema.execute(
    '''
  {
      is_admin
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "is_admin": true
}
```

### 9. Object Types, Arguments in Queries 5min

- We can create another resolver that returns a list of Users.

- We first need to create a new Class with the User structure and then the new `resolve_users` method.

> schema.py

```py
import graphene
import json
from datetime import datetime


class User(graphene.ObjectType):
    id = graphene.ID()
    username = graphene.String()
    created_at = graphene.DateTime()


class Query(graphene.ObjectType):
    users = graphene.List(User)
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ]


schema = graphene.Schema(query=Query)

result = schema.execute(
    '''
  {
      users {
        id
        username
        createdAt
      }
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "users": [
    {
      "id": "1",
      "username": "Fred",
      "createdAt": "2019-03-30T10:23:24.129563"
    },
    {
      "id": "2",
      "username": "Doug",
      "createdAt": "2019-03-30T10:23:24.129563"
    }
  ]
}

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
```

- We can include parameters in the queries by adding them in the definition

> schema.py

```py
import graphene
import json
from datetime import datetime


class User(graphene.ObjectType):
    id = graphene.ID()
    username = graphene.String()
    created_at = graphene.DateTime()


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


schema = graphene.Schema(query=Query)

result = schema.execute(
    '''
    {
        users(limit: 1) {
          id
          username
          createdAt
        }
    }
    '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "users": [
    {
      "id": "1",
      "username": "Fred",
      "createdAt": "2019-03-30T10:32:16.680493"
    }
  ]
}
```

### 10. Mutations / Default Values 5min

- We need to use the class Mutation to use `Mutations`

> schema.py

```py
import graphene
import json
from datetime import datetime


class User(graphene.ObjectType):
    id = graphene.ID()
    username = graphene.String()
    created_at = graphene.DateTime()


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        username = graphene.String()

    def mutate(self, info, username):
        user = User(id="3", username=username, created_at=datetime.now())
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

result = schema.execute(
    '''
  mutation {
    createUser(username: "Jeff") {
      user {
        id
        username
        createdAt
      }
    }
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "createUser": {
    "user": {
      "id": "3",
      "username": "Jeff",
      "createdAt": "2019-03-30T10:45:03.654209"
    }
  }
}
```

- We can assign default values by using `default_value`

> schema.py

```py
import graphene
import json
import uuid
from datetime import datetime


class User(graphene.ObjectType):
    id = graphene.ID(default_value=str(uuid.uuid4()))
    username = graphene.String()
    created_at = graphene.DateTime(default_value=datetime.now())


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        username = graphene.String()

    def mutate(self, info, username):
        user = User(username=username)
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

result = schema.execute(
    '''
  mutation {
    createUser(username: "Jeff") {
      user {
        id
        username
        createdAt
      }
    }
  }
  '''
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$ python schema.py
{
  "createUser": {
    "user": {
      "id": "a2f9b2fa-d45a-4a36-8834-ebb4dd9f40fa",
      "username": "Jeff",
      "createdAt": "2019-03-30T10:51:03.164893"
    }
  }
}
```

### 11. Variables in Queries / Mutations 4min

- We can use variables in queries as it was explained in the `6. Dynamic Values in Queries / Mutations with GraphQL Variables` chapter.

> schema.py

```py
import graphene
import json
import uuid
from datetime import datetime


class User(graphene.ObjectType):
    id = graphene.ID(default_value=str(uuid.uuid4()))
    username = graphene.String()
    created_at = graphene.DateTime(default_value=datetime.now())


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        username = graphene.String()

    def mutate(self, info, username):
        user = User(username=username)
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

result = schema.execute(
    '''
    mutation ($username: String) {
      createUser(username: $username) {
        user {
          id
          username
          createdAt
        }
      }
    }
    ''',
    variable_values={
        'username': 'Dave'
    }
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$  python schema.py
{
  "createUser": {
    "user": {
      "id": "d328f500-c589-4a66-8a81-3d2caea9cd65",
      "username": "Dave",
      "createdAt": "2019-03-30T11:15:24.269330"
    }
  }
}
```

- We can use argument with the Query as well

> schema.py

```py
import graphene
import json
import uuid
from datetime import datetime
.
.
.
result = schema.execute(
    '''
    query getusersQuery ($limit: Int) {
        users(limit: $limit) {
          id
          username
          createdAt
        }
    }
    ''',
    variable_values={
        'limit': 1
    }
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$  python schema.py
{
  "users": [
    {
      "id": "1",
      "username": "Fred",
      "createdAt": "2019-03-30T11:35:14.708658"
    }
  ]
}
```

### 12. Self and Info Values 7min

- We can create a new `CreatePost` mutation to add new posts.

> schema.py

```py
import graphene
import json
import uuid
from datetime import datetime


class Post(graphene.ObjectType):
    title = graphene.String()
    content = graphene.String()


class User(graphene.ObjectType):
    id = graphene.ID(default_value=str(uuid.uuid4()))
    username = graphene.String()
    created_at = graphene.DateTime(default_value=datetime.now())


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        username = graphene.String()

    def mutate(self, info, username):
        user = User(username=username)
        return CreateUser(user=user)


class CreatePost(graphene.Mutation):
    post = graphene.Field(Post)

    class Arguments:
        title = graphene.String()
        content = graphene.String()

    def mutate(self, info, title, content):
        post = Post(title=title, content=content)
        return CreatePost(post=post)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    create_post = CreatePost.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

result = schema.execute(
    '''
    mutation {
      createPost(title: "Hello", content: "World!") {
        post {
          title
          content
        }
      }
    }
    '''
    # ,
    # variable_values={
    #     'username': 'Dave'
    # }
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$  python schema.py
{
  "createPost": {
    "post": {
      "title": "Hello",
      "content": "World!"
    }
  }
}
```

- We can use `context` to avoid users not authenticated to create posts. We cabn grab values from context by using `info.context.get`

> schema.py

```py
import graphene
import json
import uuid
from datetime import datetime


class Post(graphene.ObjectType):
    title = graphene.String()
    content = graphene.String()


class User(graphene.ObjectType):
    id = graphene.ID(default_value=str(uuid.uuid4()))
    username = graphene.String()
    created_at = graphene.DateTime(default_value=datetime.now())


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        username = graphene.String()

    def mutate(self, info, username):
        user = User(username=username)
        return CreateUser(user=user)


class CreatePost(graphene.Mutation):
    post = graphene.Field(Post)

    class Arguments:
        title = graphene.String()
        content = graphene.String()

    def mutate(self, info, title, content):
        print(info.context.get('is_anonymous'))
        post = Post(title=title, content=content)
        return CreatePost(post=post)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    create_post = CreatePost.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

result = schema.execute(
    '''
    mutation {
      createPost(title: "Hello", content: "World!") {
        post {
          title
          content
        }
      }
    }
    ''',
    context={'is_anonymous': True}
    # ,
    # variable_values={
    #     'username': 'Dave'
    # }
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$  python schema.py
True
{
  "createPost": {
    "post": {
      "title": "Hello",
      "content": "World!"
    }
  }
}
```

> schema.py

```py
.
.
.
    def mutate(self, info, title, content):
        if info.context.get('is_anonymous'):
            raise Exception('Not authenticated!')
        post = Post(title=title, content=content)
        return CreatePost(post=post)
.
.
.
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$  python schema.py
An error occurred while resolving field Mutation.createPost
Traceback (most recent call last):
  File "C:\Users\juan.pablo.perez\.virtualenvs\python-graphene-anuBwtVV\lib\site-packages\graphql\execution\executor.py", line 447, in resolve_or_error
    return executor.execute(resolve_fn, source, info, **args)
  File "C:\Users\juan.pablo.perez\.virtualenvs\python-graphene-anuBwtVV\lib\site-packages\graphql\execution\executors\sync.py", line 16, in execute
    return fn(*args, **kwargs)
  File "schema.py", line 56, in mutate
    raise Exception('Not authenticated!')
Exception: Not authenticated!
Traceback (most recent call last):
  File "C:\Users\juan.pablo.perez\.virtualenvs\python-graphene-anuBwtVV\lib\site-packages\graphql\execution\executor.py", line 447, in resolve_or_error
    return executor.execute(resolve_fn, source, info, **args)
  File "C:\Users\juan.pablo.perez\.virtualenvs\python-graphene-anuBwtVV\lib\site-packages\graphql\execution\executors\sync.py", line 16, in execute
    return fn(*args, **kwargs)
  File "schema.py", line 56, in mutate
    raise Exception('Not authenticated!')
graphql.error.located_error.GraphQLLocatedError: Not authenticated!

{
  "createPost": null
}
```

- We can use `self` to obtain values from the own class.

> schema.py

```py
import graphene
import json
import uuid
from datetime import datetime


class Post(graphene.ObjectType):
    title = graphene.String()
    content = graphene.String()


class User(graphene.ObjectType):
    id = graphene.ID(default_value=str(uuid.uuid4()))
    username = graphene.String()
    created_at = graphene.DateTime(default_value=datetime.now())

    avatar_url = graphene.String()

    def resolve_avatar_url(self, info):
        return 'https://cloudinary.com/{}/{}'.format(self.username, self.id)


class Query(graphene.ObjectType):
    users = graphene.List(User, limit=graphene.Int())
    hello = graphene.String()
    is_admin = graphene.Boolean()

    def resolve_hello(self, info):
        return "World"

    def resolve_is_admin(self, info):
        return True

    def resolve_users(self, info, limit=None):
        return [
            User(id="1", username="Fred", created_at=datetime.now()),
            User(id="2", username="Doug", created_at=datetime.now())
        ][:limit]


class CreateUser(graphene.Mutation):
    user = graphene.Field(User)

    class Arguments:
        username = graphene.String()

    def mutate(self, info, username):
        user = User(username=username)
        return CreateUser(user=user)


class CreatePost(graphene.Mutation):
    post = graphene.Field(Post)

    class Arguments:
        title = graphene.String()
        content = graphene.String()

    def mutate(self, info, title, content):
        if info.context.get('is_anonymous'):
            raise Exception('Not authenticated!')
        post = Post(title=title, content=content)
        return CreatePost(post=post)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    create_post = CreatePost.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

result = schema.execute(
    '''
    {
        users {
          id
          username
          createdAt
          avatarUrl
        }
    }
    '''
    # ,context={'is_anonymous': True}
    # ,variable_values={
    #     'username': 'Dave'
    # }
)

dictResult = dict(result.data.items())
print(json.dumps(dictResult, indent=2))
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/python-graphene (master)
$  python schema.py
{
  "users": [
    {
      "id": "1",
      "username": "Fred",
      "createdAt": "2019-03-30T12:29:37.484078",
      "avatarUrl": "https://cloudinary.com/Fred/1"
    },
    {
      "id": "2",
      "username": "Doug",
      "createdAt": "2019-03-30T12:29:37.484078",
      "avatarUrl": "https://cloudinary.com/Doug/2"
    }
  ]
}
```

## Section 4 Building a GraphQL Backend with Django / Graphene 1hr 30min

### 13. Creating Base Django Project 5min

- Once the `react-track` folder is created we are going to open it with `Visual Studio Code`

- Crete the `pipenv shell`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)$ pipenv shell
Creating a virtualenv for this project…
Pipfile: C:\Work\Training\Pre\GraphQL\full-stack-react-python-and-graphql\react-tracks\Pipfile
Using c:\python37\python.exe (3.7.3) to create virtualenv…[ ===] Creating virtual environment...
Using base prefix 'c:\\python37'
New python executable in C:\Users\juan.pablo.perez\.virtualenvs\react-tracks-g1pHo-WK\Scripts\python.exe
Installing setuptools, pip, wheel...
done.

Successfully created virtual environment!
Virtualenv location: C:\Users\juan.pablo.perez\.virtualenvs\react-tracks-g1pHo-WK
Creating a Pipfile for this project…
Launching subshell in virtual environment…

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
```

- The first package that we are going to install is the [Django web framework](<https://en.wikipedia.org/wiki/Django_(web_framework)>) that is a Python-based free and open-source web framework, which follows the model-view-template (MVT) architectural pattern. It is maintained by the Django Software Foundation (DSF), an independent organization established as a 501(c)(3) non-profit.

Django's primary goal is to ease the creation of complex, database-driven websites. The framework emphasizes reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don't repeat yourself. Python is used throughout, even for settings files and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.

Some well-known sites that use Django include the Public Broadcasting Service, Instagram, Mozilla, The Washington Times, Disqus, Bitbucket and Nextdoor. It was used on Pinterest, but later the site moved to a framework built over Flask.

- We are also going to install other packages related to `Django` and `Graphine`.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ pipenv install django graphene-django django-graphql-jwt django-cors-headers
Installing django…
Adding django to Pipfile's [packages]…
Installation Succeeded
Installing graphene-django…
Adding graphene-django to Pipfile's [packages]…
Installation Succeeded
Installing django-graphql-jwt…
Adding django-graphql-jwt to Pipfile's [packages]…
Installation Succeeded
Installing django-cors-headers…
[  ==]to Pipfile's Installing... [packages]…
Installation Succeeded
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Locking Failed!
```

- If we execute it again it works correctly

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ pipenv install django graphene-django django-graphql-jwt django-cors-headers
Installing django…
Adding django to Pipfile's [packages]…
Installation Succeeded
Installing graphene-django…
Adding graphene-django to Pipfile's [packages]…
Installation Succeeded
Installing django-graphql-jwt…
Adding django-graphql-jwt to Pipfile's [packages]…
Installation Succeeded
Installing django-cors-headers…
Adding django-cors-headers to Pipfile's [packages]…
Installation Succeeded
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Success!
Updated Pipfile.lock (b756a2)!
Installing dependencies from Pipfile.lock (b756a2)…
  ================================ 14/14 - 00:00:07
```

- We are going to install the [autopep8](https://github.com/hhatto/autopep8) development pack that utomatically formats Python code to conform to the PEP 8 style guide. It uses the pycodestyle utility to determine what parts of the code needs to be formatted. autopep8 is capable of fixing most of the formatting issues that can be reported by pycodestyle.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ pipenv install --dev autopep8
Installing autopep8…
Adding autopep8 to Pipfile's [dev-packages]…
Installation Succeeded
Pipfile.lock (a06c0e) out of date, updating to (b756a2)…
Locking [dev-packages] dependencies…
Success!
Locking [packages] dependencies…
Success!
Updated Pipfile.lock (a06c0e)!
Installing dependencies from Pipfile.lock (a06c0e)…
  ================================ 16/16 - 00:00:09
```

- The `Pipfile` document after installing the packs contains the following information

> Pipfile

```toml
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]
autopep8 = "*"

[packages]
django = "*"
graphene-django = "*"
django-graphql-jwt = "*"
django-cors-headers = "*"

[requires]
python_version = "3.7"
```

- We are going to create the `app django` project by using:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ django-admin startproject app

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingBaseDjangoProject.png)

- The next step will be create a database with its tables, we can create an initial django database by executing the `manage.py` document created by `django`:

> app/manage.py

```py
#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying sessions.0001_initial... OK
(react-tracks)
```

- It has created the `db.sqlite3` document database

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingBaseDjangoProject2.png)

- We can use a cllient like [DB Browser for SQLite](https://sqlitebrowser.org/) to open the database:

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingBaseDjangoProject2b.png)

- In order to run keep the `django app` running we have to execute `python manage.py runserver`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).
March 30, 2019 - 17:23:11
Django version 2.1.7, using settings 'app.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
Error: [WinError 10013] An attempt was made to access a socket in a way forbidden by its access permissions
(react-tracks)
```

- The previous error happens because the `8000` port is already opened by another program. We can try `python manage.py runserver 9000` instead to execute it in the `9000` port.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py runserver 9000
Performing system checks...

System check identified no issues (0 silenced).
March 30, 2019 - 17:27:03
Django version 2.1.7, using settings 'app.settings'
Starting development server at http://127.0.0.1:9000/
Quit the server with CTRL-BREAK.
```

- We can navegate there:

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingBaseDjangoProject3.png)

### 14. Making Tracks App / Modeling Track Data 8min

- Django separates the project into individual apps, it is a separation of concerns. We need an individual app according to the type of data that we have.

- In our application we want two types of data: `Track` and `User`

- We can create the `Track` app by executing `python manage.py startapp tracks` from the `app` folder.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py startapp tracks
(react-tracks)
```

![](/images/other/graphql-full-stack-react-python-and-graphql/MakingTracksAppModelingTrackData.png)

- We need to model our tracks by modifying the `app/tracks/models.py` document.

- We can find more information about creating the models on [Django documentation - The model layer](https://docs.djangoproject.com/en/2.1/#the-model-layer)

![](/images/other/graphql-full-stack-react-python-and-graphql/MakingTracksAppModelingTrackData2.png)

> app/tracks/models.py

```py
from django.db import models

# Create your models here.
class Track(models.Model):
  # id will be created automatically
  title = models.CharField(max_length=50)
  description = models.TextField(blank=True) # we make it optional by using blank=True
  url = models.URLField()
  created_at = models.DateTimeField(auto_now_add=True) # It is automatically populated
```

- We need to modify the `app/app/settings.py` document to tell `Django` we want to use the `Track` Model. We need to add the `tracks` name to the `INSTALLED_APPS` array.

> app/app/settings.py

```py
"""
Django settings for app project.

Generated by 'django-admin startproject' using Django 2.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'kpwro5ldvma_r_nlb&_cjtwm0emgpr@#x1-vlm3lb84f!7!-m0'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tracks'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
```

- We also need to execute the `python manage.py makemigrations` and `python manage.py migrate` commands to let `django` create the new model in the database.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py makemigrations
Migrations for 'tracks':
  tracks\migrations\0001_initial.py
    - Create model Track
(react-tracks)
```

![](/images/other/graphql-full-stack-react-python-and-graphql/MakingTracksAppModelingTrackData3.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions, tracks
Running migrations:
  Applying tracks.0001_initial... OK
(react-tracks)
```

![](/images/other/graphql-full-stack-react-python-and-graphql/MakingTracksAppModelingTrackData4.png)

### 15. Adding Track Data / Creating Schema with Graphene-Django 7min

- We can access the `django shell` to insert data in our new table by using the `python manage.py shell` command.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py shell
Python 3.7.3 (v3.7.3:ef4ec6ed12, Mar 25 2019, 22:22:05) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> from tracks.models import Track
>>> Track.objects.create(title="Track 1", description="Track 1 Description", url="https://track1.com")
<Track: Track object (1)>
>>> Track.objects.create(title="Track 2", description="Track 2 Description", url="https://track2.com")
<Track: Track object (2)>
>>> exit()
(react-tracks)
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingTrackDataCreatingSchemaWithGrapheneDjango.png)

- We need to modify the `app/app/settings.py` document to tell `Django` we want to use `graphene-django` by adding it to the `INSTALLED_APPS` array.

- We also need to add a reference to the Schema file so that `Django` can find it by adding the `GRAPHENE` object.

> app/app/settings.py

```py
.
.
.
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'graphene-django',
    'tracks'
]

GRAPHENE = {
   'SCHEMA': 'app.schema.schema'
}

MIDDLEWARE = [
.
.
.
```

- We need to create the `app/track/schema.py` document to define the `Track` schema we want to use:

> app/track/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
# We import the Track model to avoid defining it again
from .models import Track

class TrackType(DjangoObjectType):
  class Meta:
    model = Track

class Query(graphene.ObjectType):
  tracks = graphene.List(TrackType)

  def resolve_tracks(self, info):
    return Track.objects.all()
```

- We also need to create the `app/app/schema.py` document to define the main schema.

> app/app/schema.py

```py
import graphene
import tracks.schema

class Query(tracks.schema.Query, graphene.ObjectType):
  pass

schema = graphene.Schema(query=Query)
```

### 16. Integrating GraphiQL for Interact with App Data 3min

- To set up graphical Id we need to modify the `app/app/urls.py`

* We also need to add a reference to the Schema file so that `Django` can find it by adding the `GRAPHENE` object.

> app/app/urls.py

```py
"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
```

- We can run the app by executing `python manage.py runserver 9000`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py runserver 9000
Performing system checks...

System check identified no issues (0 silenced).
March 31, 2019 - 05:42:25
Django version 2.1.7, using settings 'app.settings'
Starting development server at http://127.0.0.1:9000/
Quit the server with CTRL-BREAK.
```

- We have to browse http://127.0.0.1:9000/graphql/

![](/images/other/graphql-full-stack-react-python-and-graphql/IntegratingGraphiQLForInteractWithAppData.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/IntegratingGraphiQLForInteractWithAppData2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/IntegratingGraphiQLForInteractWithAppData3.png)

> request

```graphql
{
  tracks {
    id
    title
    description
    url
    createdAt
  }
}
```

> response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00"
      },
      {
        "id": "2",
        "title": "Track 2",
        "description": "Track 2 Description",
        "url": "https://track2.com",
        "createdAt": "2019-03-30T18:16:09.192365+00:00"
      }
    ]
  }
}
```

![](/images/other/graphql-full-stack-react-python-and-graphql/IntegratingGraphiQLForInteractWithAppData4.png)

### 17. Adding Mutations / Creating New Tracks 5min

- We need to modify the `app/tracks/schema.py` document to add mutations.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
# We import the Track model to avoid defining it again
from .models import Track


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)

    def resolve_tracks(self, info):
        return Track.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        track = Track(title=title, description=description, url=url)
        track.save()
        return CreateTrack(track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
```

- We also need to modify the `app/app/schema.py` document to include the mutation.

> app/app/schema.py

```py
import graphene
import tracks.schema


class Query(tracks.schema.Query, graphene.ObjectType):
    pass


class Mutation(tracks.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingMutationsCreatingNewTracks.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingMutationsCreatingNewTracks2.png)

> request

```graphql
mutation {
  createTrack(
    title: "Track 3"
    description: "Track 3 Description"
    url: "https://track3.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
    }
  }
}
```

> response

```json
{
  "data": {
    "createTrack": {
      "track": {
        "id": "3",
        "title": "Track 3",
        "description": "Track 3 Description",
        "url": "https://track3.com",
        "createdAt": "2019-03-31T05:19:36.328234+00:00"
      }
    }
  }
}
```

### 18. Creating New Users 8min

- In order to manage the users we are going to create the `users` folder with the `schema.py` document inside it.

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingNewUsers.png)

- Out of the box, `Django` provides a user model, so, there is no need to create it again.

> app/users/schema.py

```py
import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
```

- We also need to modify the `app/app/schema.py` document to include the new User Type.

> app/app/schema.py

```py
import graphene
import tracks.schema
import users.schema


class Query(tracks.schema.Query, graphene.ObjectType):
    pass


class Mutation(users.schema.Mutation, tracks.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
```

- We need to run the app by executing `python manage.py runserver 9000`

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingNewUsers2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingNewUsers3.png)

- We can filter the fields returned by using `only_fields`.

> app/users/schema.py

```py
.
.
.
class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        only_fields = ('id', 'email', 'password', 'username')
.
.
.
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingNewUsers4.png)

- We are going to create a user.

> request

```graphql
mutation {
  createUser(username: "Juan", password: "juan", email: "juan@msn.com") {
    user {
      id
      username
      password
      email
      dateJoined
    }
  }
}
```

> response

```json
{
  "data": {
    "createUser": {
      "user": {
        "id": "2",
        "username": "Juan",
        "password": "pbkdf2_sha256$120000$s0zhOR5pcnoA$e2+O9ZllI01yk5S5vOKmbHHnsK/aQYOMVhmda6CPDhQ=",
        "email": "juan@msn.com",
        "dateJoined": "2019-03-31T09:34:08.602017+00:00"
      }
    }
  }
}
```

### 19. Querying Users by ID 2min

- We are going to modify the `app/users/schema.py` and the `app/app/schema.py` documents to include query for users.

> app/users/schema.py

```py
import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        # to return only the fields included
        # only_fields = ('id', 'email', 'password', 'username')


class Query(graphene.ObjectType):
    user = graphene.Field(UserType, id=graphene.Int(required=True))

    def resolve_user(self, info, id):
        return get_user_model().objects.get(id=id)


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
```

- We can query one user:

> request

```graphql
{
  user(id: 2) {
    id
    username
    password
    email
    dateJoined
  }
}
```

> response

```json
{
  "data": {
    "user": {
      "id": "2",
      "username": "Juan",
      "password": "pbkdf2_sha256$120000$s0zhOR5pcnoA$e2+O9ZllI01yk5S5vOKmbHHnsK/aQYOMVhmda6CPDhQ=",
      "email": "juan@msn.com",
      "dateJoined": "2019-03-31T09:34:08.602017+00:00"
    }
  }
}
```

### 20. User Authentication with Django-GraphQL-JWT 6min

- We are going to use [Django GraphQL JWT](https://github.com/flavors/django-graphql-jwt) to obtain a JSON Web Token that we are going to use to authenticate our API.

![](/images/other/graphql-full-stack-react-python-and-graphql/UserAuthenticationWithDjangoGraphQLJwt.png)

- We need to modify the `app/app/settings.py` document to set up the use of it.

- Add `AuthenticationMiddleware` middleware to your `MIDDLEWARE` settings:

```py
MIDDLEWARE = [
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    ...
]
```

- Add `JSONWebTokenMiddleware` middleware to your `GRAPHENE` settings:

```py
GRAPHENE = {
    'SCHEMA': 'mysite.myschema.schema',
    'MIDDLEWARE': [
        'graphql_jwt.middleware.JSONWebTokenMiddleware',
    ],
}
```

- Add `JSONWebTokenBackend` backend to your `AUTHENTICATION_BACKENDS`:

```py
AUTHENTICATION_BACKENDS = [
    'graphql_jwt.backends.JSONWebTokenBackend',
    'django.contrib.auth.backends.ModelBackend',
]
```

> app/app/settings.py

```py
"""
Django settings for app project.

Generated by 'django-admin startproject' using Django 2.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'kpwro5ldvma_r_nlb&_cjtwm0emgpr@#x1-vlm3lb84f!7!-m0'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'graphene_django',
    'tracks'
]

GRAPHENE = {
    'SCHEMA': 'app.schema.schema',
    'MIDDLEWARE': [
        'graphql_jwt.middleware.JSONWebTokenMiddleware',
    ],
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
]

AUTHENTICATION_BACKENDS = [
    'graphql_jwt.backends.JSONWebTokenBackend',
    'django.contrib.auth.backends.ModelBackend',
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
```

- We also need to modify the `app/app/schema.py` to include new `mutations` for the token management.

> app/app/schema.py

```py
import graphene
import tracks.schema
import users.schema
import graphql_jwt


class Query(users.schema.Query, tracks.schema.Query, graphene.ObjectType):
    pass


class Mutation(users.schema.Mutation, tracks.schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
```

- We finally need to modify the `app/user/schema.py` document to change the `Query` class to include the `resolve_me` def.

> app/user/schema.py

```bash
import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        # to return only the fields included
        # only_fields = ('id', 'email', 'password', 'username')


class Query(graphene.ObjectType):
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    me = graphene.Field(UserType)

    def resolve_user(self, info, id):
        return get_user_model().objects.get(id=id)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        return user


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UserAuthenticationWithDjangoGraphQLJwt2.png)

- If we try to use the `me` query a `Not logged in!` message error is thrown:

> request

```graphql
{
  me {
    id
    username
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Not logged in!",
      "locations": [
        {
          "line": 2,
          "column": 2
        }
      ],
      "path": ["me"]
    }
  ],
  "data": {
    "me": null
  }
}
```

- We need to use the `tokenAuth` muttation to get the token.

> request

```graphql
mutation {
  tokenAuth(username: "Juan", password: "juan") {
    token
  }
}
```

> response

```json
{
  "data": {
    "tokenAuth": {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQwMjkyMTEsIm9yaWdJYXQiOjE1NTQwMjg5MTF9.qJvqrIEkEjaJvgJK9Tn-Dbwjf6JsT3ixIkkJR4Rdx3s"
    }
  }
}
```

- If we put invalid credentails an error is thrown:

> request

```graphql
mutation {
  tokenAuth(username: "Juan2", password: "juan") {
    token
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Please, enter valid credentials",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["tokenAuth"]
    }
  ],
  "data": {
    "tokenAuth": null
  }
}
```

### 21. Authorization Headers to Get Current Auth User 4min

- `GraphiQL` doesn't allow to pass `Header` values with the request. We are going to use `Insomnia` instead. We can install it from [GraphQL + Insomnia](https://insomnia.rest/graphql/) or [][insomnia chocolatey](https://chocolatey.org/packages/insomnia-rest-api-client).

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser2.png)

- I'm going to use `Chocolatey` by executing:

```bash
C:\Windows\system32>choco install insomnia-rest-api-client
Chocolatey v0.10.11
Installing the following packages:
insomnia-rest-api-client
By installing you accept licenses for the packages.
Progress: Downloading insomnia-rest-api-client 6.3.2... 100%

insomnia-rest-api-client v6.3.2 [Approved]
insomnia-rest-api-client package files install completed. Performing other installation steps.
The package insomnia-rest-api-client wants to run 'chocolateyinstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): Y

Downloading insomnia-rest-api-client
  from 'https://github.com/getinsomnia/insomnia/releases/download/v6.3.2/Insomnia.Setup.6.3.2.exe'
Progress: 100% - Completed download of C:\Users\juan.pablo.perez\AppData\Local\Temp\chocolatey\insomnia-rest-api-client\6.3.2\Insomnia.Setup.6.3.2.exe (114.13 MB).
Download of Insomnia.Setup.6.3.2.exe (114.13 MB) completed.
Hashes match.
Installing insomnia-rest-api-client...
insomnia-rest-api-client has been installed.
 The install of insomnia-rest-api-client was successful.
  Software installed as 'exe', install location is likely default.

Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser5.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ pipenv shell
Launching subshell in virtual environment…

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ cd app

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py runserver 9000
Performing system checks...

System check identified no issues (0 silenced).
March 31, 2019 - 12:18:50
Django version 2.1.7, using settings 'app.settings'
Starting development server at http://127.0.0.1:9000/
Quit the server with CTRL-BREAK.
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser7.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser8.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AuthorizationHeadersToGetCurrentAuthUser9.png)

> request

```
curl --request POST \
  --url http://127.0.0.1:9000/graphql/ \
  --header 'authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQwMjkyMTEsIm9yaWdJYXQiOjE1NTQwMjg5MTF9.qJvqrIEkEjaJvgJK9Tn-Dbwjf6JsT3ixIkkJR4Rdx3s' \
  --header 'content-type: application/json' \
```

```graphql
{
  me {
    id
    username
    email
    password
  }
}
```

> response

```json
{
  "data": {
    "me": {
      "id": "2",
      "username": "Juan",
      "email": "juan@msn.com",
      "password": "pbkdf2_sha256$120000$s0zhOR5pcnoA$e2+O9ZllI01yk5S5vOKmbHHnsK/aQYOMVhmda6CPDhQ="
    }
  }
}
```

### 22. Connecting Users with Tracks 7min

- We need to modify the `app/tracks/models.py` document to add the new `posted_by` field to the `Track` model.

> app/tracks/models.py

```py
from django.db import models

from django.contrib.auth import get_user_model
# Create your models here.


class Track(models.Model):
    # id will be created automatically
    title = models.CharField(max_length=50)
    # we make it optional by using blank=True
    description = models.TextField(blank=True)
    url = models.URLField()
    # It is automatically populated
    created_at = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(
            get_user_model(), null=True, on_delete=models.CASCADE)
```

- Once the new field is included it has to be added to the database. There are two steps to do that:

1. Create the `migrations` by executing `python manage.py makemigrations`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py makemigrations
Migrations for 'tracks':
  tracks\migrations\0002_track_posted_by.py
    - Add field posted_by to track
```

> app/tracks/migrations/0002_track_posted_by.py

```py
# Generated by Django 2.1.7 on 2019-04-01 05:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tracks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='track',
            name='posted_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
```

![](/images/other/graphql-full-stack-react-python-and-graphql/ConnectingUsersWithTracks.png)

2. Execute the `migrations` created by running `python manage.py migrate`.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions, tracks
Running migrations:
  Applying tracks.0002_track_posted_by... OK
```

![](/images/other/graphql-full-stack-react-python-and-graphql/ConnectingUsersWithTracks2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ConnectingUsersWithTracks3.png)

- We need to update the `app/tracks/schema.py` document to update the `CreateTrack` Mutation.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
# We import the Track model to avoid defining it again
from .models import Track


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)

    def resolve_tracks(self, info):
        return Track.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user or None

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
```

- We can test it by executing a new mutation to add a track

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py runserver 9000
Performing system checks...

System check identified no issues (0 silenced).
April 01, 2019 - 06:15:07
Django version 2.1.7, using settings 'app.settings'
Starting development server at http://127.0.0.1:9000/
Quit the server with CTRL-BREAK.
```

> request

```graphql
mutation {
  createTrack(
    title: "Track 4"
    description: "Track 4 Description"
    url: "https://track4.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
    }
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Cannot assign \"<SimpleLazyObject: <django.contrib.auth.models.AnonymousUser object at 0x0000025469D399B0>>\": \"Track.posted_by\" must be a \"User\" instance.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["createTrack"]
    }
  ],
  "data": {
    "createTrack": null
  }
}
```

- The reason of the error is that we are not authenticated.

- We can improve the mutation to show a message if the user is not authenticated.

> app/tracks/schema.py

```py
.
.
.
# We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

         if user.is_anonymous:
              raise Exception('Log in to add a track.')

        track = Track(title=title, description=description, url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)
.
.
.
```

- If we execute the request again the message is shown.

> request

```graphql
mutation {
  createTrack(
    title: "Track 4"
    description: "Track 4 Description"
    url: "https://track4.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
    }
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Log in to add a track.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["createTrack"]
    }
  ],
  "data": {
    "createTrack": null
  }
}
```

- We need to obtain a token and use `insomnia` to put the token in the header

- If we execute the request again the message is shown.

> request

```graphql
mutation {
  tokenAuth(username: "Juan", password: "juan") {
    token
  }
}
```

> response

```json
{
  "data": {
    "tokenAuth": {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQwOTY1NzcsIm9yaWdJYXQiOjE1NTQwOTYyNzd9.9uOsoT-Br1oStighcDi1d18Gs2etz_7VJbDYUbBOjq8"
    }
  }
}
```

> request

```
curl --request POST \
  --url http://127.0.0.1:9000/graphql/ \
  --header 'authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQwOTY1NzcsIm9yaWdJYXQiOjE1NTQwOTYyNzd9.9uOsoT-Br1oStighcDi1d18Gs2etz_7VJbDYUbBOjq8' \
  --header 'content-type: application/json' \
```

```graphql
mutation {
  createTrack(
    title: "Track 4"
    description: "Track 4 Description"
    url: "https://track4.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
    }
  }
}
```

> response

```json
{
  "data": {
    "createTrack": {
      "track": {
        "id": "4",
        "title": "Track 4",
        "description": "Track 4 Description",
        "url": "https://track4.com",
        "createdAt": "2019-04-01T05:26:05.536286+00:00"
      }
    }
  }
}
```

- If we now query for all of the tracks:

> request

```graphql
{
  tracks {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
  }
}
```

> response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null
      },
      {
        "id": "2",
        "title": "Track 2",
        "description": "Track 2 Description",
        "url": "https://track2.com",
        "createdAt": "2019-03-30T18:16:09.192365+00:00",
        "postedBy": null
      },
      {
        "id": "3",
        "title": "Track 3",
        "description": "Track 3 Description",
        "url": "https://track3.com",
        "createdAt": "2019-03-31T05:19:36.328234+00:00",
        "postedBy": null
      },
      {
        "id": "4",
        "title": "Track 4",
        "description": "Track 4 Description",
        "url": "https://track4.com",
        "createdAt": "2019-04-01T05:26:05.536286+00:00",
        "postedBy": {
          "id": "2",
          "username": "Juan",
          "email": "juan@msn.com"
        }
      }
    ]
  }
}
```

### 23. Updating Tracks 7min

- We need to update the `app/tracks/schema.py` document to create the new `UpdateTrack` Mutation.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
# We import the Track model to avoid defining it again
from .models import Track


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)

    def resolve_tracks(self, info):
        return Track.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to add a track.')

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    def mutate(self, info, track_id, title, url, description):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to update this track.')

        track.title = title
        track.description = description
        track.url = url

        track.save()

        return UpdateTrack(track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
```

- If we execute the new mutation without authenticate we receive an error

> request

```graphql
mutation {
  updateTrack(
    trackId: 4
    title: "Track 4 updated"
    description: "Track 4 Description updated"
    url: "https://track4bis.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Not permitted to update this track.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["updateTrack"]
    }
  ],
  "data": {
    "updateTrack": null
  }
}
```

- I'm going to create a new user and try to update the track 4 created by `juan` with a token from the new user:

> request

```graphql
mutation {
  createUser(username: "Pablo", password: "pablo", email: "juan@msn.com") {
    user {
      id
      username
      password
      email
      dateJoined
    }
  }
}
```

> response

```json
{
  "data": {
    "createUser": {
      "user": {
        "id": "3",
        "username": "Pablo",
        "password": "pbkdf2_sha256$120000$3CmNdlBCbwDO$G7u5dlQK1ojJFd5Wa07SIODUnedXKfE9/JxiSV32/QY=",
        "email": "juan@msn.com",
        "dateJoined": "2019-04-01T05:43:02.913187+00:00"
      }
    }
  }
}
```

> request

```graphql
mutation {
  tokenAuth(username: "Pablo", password: "pablo") {
    token
  }
}
```

> response

```json
{
  "data": {
    "tokenAuth": {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlBhYmxvIiwiZXhwIjoxNTU0MDk3ODA3LCJvcmlnSWF0IjoxNTU0MDk3NTA3fQ.GVeGZtN3gq9P_h50q6MQOISL-zjJ8gR9JbAa8Ccc-eo"
    }
  }
}
```

> request

```
curl --request POST \
  --url http://127.0.0.1:9000/graphql/ \
  --header 'authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlBhYmxvIiwiZXhwIjoxNTU0MDk3ODA3LCJvcmlnSWF0IjoxNTU0MDk3NTA3fQ.GVeGZtN3gq9P_h50q6MQOISL-zjJ8gR9JbAa8Ccc-eo' \
  --header 'content-type: application/json' \
```

```graphql
mutation {
  updateTrack(
    trackId: 4
    title: "Track 4 updated"
    description: "Track 4 Description updated"
    url: "https://track4bis.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Not permitted to update this track.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["updateTrack"]
    }
  ],
  "data": {
    "updateTrack": null
  }
}
```

- If we now use the token from `Juan` it should work.

> request

```
url --request POST \
  --url http://127.0.0.1:9000/graphql/ \
  --header 'authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQwOTY1NzcsIm9yaWdJYXQiOjE1NTQwOTYyNzd9.9uOsoT-Br1oStighcDi1d18Gs2etz_7VJbDYUbBOjq8' \
  --header 'content-type: application/json' \
```

```graphql
mutation {
  updateTrack(
    trackId: 4
    title: "Track 4 updated"
    description: "Track 4 Description updated"
    url: "https://track4bis.com"
  ) {
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
  }
}
```

> response

```json
{
  "data": {
    "updateTrack": {
      "track": {
        "id": "4",
        "title": "Track 4 updated",
        "description": "Track 4 Description updated",
        "url": "https://track4bis.com",
        "createdAt": "2019-04-01T05:26:05.536286+00:00",
        "postedBy": {
          "id": "2",
          "username": "Juan",
          "email": "juan@msn.com"
        }
      }
    }
  }
}
```

### 24. Deleting Tracks 4min

- We need to update the `app/tracks/schema.py` document to create the new `DeleteTrack` Mutation.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
# We import the Track model to avoid defining it again
from .models import Track


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)

    def resolve_tracks(self, info):
        return Track.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to add a track.')

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    def mutate(self, info, track_id, title, url, description):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to update this track.')

        track.title = title
        track.description = description
        track.url = url

        track.save()

        return UpdateTrack(track=track)


class DeleteTrack(graphene.Mutation):
    track_id = graphene.Int()

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to delete this track.')

        track.delete()

        return DeleteTrack(track_id=track_id)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
    delete_track = DeleteTrack.Field()
```

![](/images/other/graphql-full-stack-react-python-and-graphql/DeletingTracks.png)

- If we try to delete a track without sending the authentication token we receive an error.

> request

```graphql
mutation {
  deleteTrack(trackId: 4) {
    trackId
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Not permitted to delete this track.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["deleteTrack"]
    }
  ],
  "data": {
    "deleteTrack": null
  }
}
```

- We need the token for user `Juan`

> request

```graphql
mutation {
  tokenAuth(username: "Juan", password: "juan") {
    token
  }
}
```

> response

```json
{
  "data": {
    "tokenAuth": {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQxMzUzNDcsIm9yaWdJYXQiOjE1NTQxMzUwNDd9.ms6a6BVXzFNt2oKRoX2JoVUAnMU95a1h5lQWC6MKZXw"
    }
  }
}
```

- Using `Insomnia` I can now delete the track

> request

```
curl --request POST \
  --url http://127.0.0.1:9000/graphql/ \
  --header 'authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQxMzUzNDcsIm9yaWdJYXQiOjE1NTQxMzUwNDd9.ms6a6BVXzFNt2oKRoX2JoVUAnMU95a1h5lQWC6MKZXw' \
  --header 'content-type: application/json' \
```

```graphql
mutation {
  deleteTrack(trackId: 4) {
    trackId
  }
}
```

> response

```json
{
  "data": {
    "deleteTrack": {
      "trackId": 4
    }
  }
}
```

- We can check that the track is not stored anymore

```graphql
{
  tracks {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
  }
}
```

> response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null
      },
      {
        "id": "2",
        "title": "Track 2",
        "description": "Track 2 Description",
        "url": "https://track2.com",
        "createdAt": "2019-03-30T18:16:09.192365+00:00",
        "postedBy": null
      },
      {
        "id": "3",
        "title": "Track 3",
        "description": "Track 3 Description",
        "url": "https://track3.com",
        "createdAt": "2019-03-31T05:19:36.328234+00:00",
        "postedBy": null
      }
    ]
  }
}
```

### 25. Adding Likes Model / Creating Likes 9min

- We need to update the `app/tracks/models.py` document to create the new `Like` table.

> app/tracks/models.py

```py
from django.db import models

from django.contrib.auth import get_user_model
# Create your models here.


class Track(models.Model):
    # id will be created automatically
    title = models.CharField(max_length=50)
    # we make it optional by using blank=True
    description = models.TextField(blank=True)
    url = models.URLField()
    # It is automatically populated
    created_at = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(
        get_user_model(), null=True, on_delete=models.CASCADE)


class Like(models.Model):
    user = models.ForeignKey(
        get_user_model(), null=True, on_delete=models.CASCADE)
    track = models.ForeignKey(
        'tracks.Track', related_name='likes', on_delete=models.CASCADE)
```

- We also need to execute the `python manage.py makemigrations` and `python manage.py migrate` commands to let `django` create the new table in the database.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py makemigrations
Migrations for 'tracks':
  tracks\migrations\0003_like.py
    - Create model Like
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingLikesModelCreatingLikes.png)

> app/tracks/migrations/0003_like.py

```py
# Generated by Django 2.1.7 on 2019-04-01 16:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tracks', '0002_track_posted_by'),
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('track', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='tracks.Track')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions, tracks
Running migrations:
  Applying tracks.0003_like... OK
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingLikesModelCreatingLikes2.png)

- We need to update the `app/tracks/schema.py` document to create the new `CreateLike` Mutation.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType

# We import the Track model to avoid defining it again
from .models import Track, Like
from users.schema import UserType


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)

    def resolve_tracks(self, info):
        return Track.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to add a track.')

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    def mutate(self, info, track_id, title, url, description):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to update this track.')

        track.title = title
        track.description = description
        track.url = url

        track.save()

        return UpdateTrack(track=track)


class DeleteTrack(graphene.Mutation):
    track_id = graphene.Int()

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to delete this track.')

        track.delete()

        return DeleteTrack(track_id=track_id)


class CreateLike(graphene.Mutation):
    user = graphene.Field(UserType)
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Login to like tracks.')

        track = Track.objects.get(id=track_id)
        if not track:
            raise Exception('Cannot find track with given track id')

        Like.objects.create(
            user=user,
            track=track
        )

        return CreateLike(user=user, track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
    delete_track = DeleteTrack.Field()
    create_like = CreateLike.Field()
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingLikesModelCreatingLikes3.png)

- If we try to run the new mutation we'll get an error because we need to send the authorisation token.

```graphql
mutation {
  createLike(trackId: 1) {
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
    user {
      id
      username
      email
    }
  }
}
```

> response

```json
{
  "errors": [
    {
      "message": "Login to like tracks.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["createLike"]
    }
  ],
  "data": {
    "createLike": null
  }
}
```

- If we execute it with the token

> request

```
curl --request POST \
  --url http://127.0.0.1:9000/graphql/ \
  --header 'authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ikp1YW4iLCJleHAiOjE1NTQxMzUzNDcsIm9yaWdJYXQiOjE1NTQxMzUwNDd9.ms6a6BVXzFNt2oKRoX2JoVUAnMU95a1h5lQWC6MKZXw' \
  --header 'content-type: application/json' \
```

```graphql
mutation {
  createLike(trackId: 1) {
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
    user {
      id
      username
      email
    }
  }
}
```

> response

```json
{
  "data": {
    "createLike": {
      "track": {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null
      },
      "user": {
        "id": "2",
        "username": "Juan",
        "email": "juan@msn.com"
      }
    }
  }
}
```

### 26. Querying Likes / Querying Tracks with Associated Likes 3min

- We need to update the `app/tracks/schema.py` document to create the new `likes` Query.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType

# We import the Track model to avoid defining it again
from .models import Track, Like
from users.schema import UserType


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class LikeType(DjangoObjectType):
    class Meta:
        model = Like


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)
    likes = graphene.List(LikeType)

    def resolve_tracks(self, info):
        return Track.objects.all()

    def resolve_likes(self, info):
        return Like.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Log in to add a track.')

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    def mutate(self, info, track_id, title, url, description):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to update this track.')

        track.title = title
        track.description = description
        track.url = url

        track.save()

        return UpdateTrack(track=track)


class DeleteTrack(graphene.Mutation):
    track_id = graphene.Int()

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise Exception('Not permitted to delete this track.')

        track.delete()

        return DeleteTrack(track_id=track_id)


class CreateLike(graphene.Mutation):
    user = graphene.Field(UserType)
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Login to like tracks.')

        track = Track.objects.get(id=track_id)
        if not track:
            raise Exception('Cannot find track with given track id')

        Like.objects.create(
            user=user,
            track=track
        )

        return CreateLike(user=user, track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
    delete_track = DeleteTrack.Field()
    create_like = CreateLike.Field()
```

- We can check if the new query works.

![](/images/other/graphql-full-stack-react-python-and-graphql/QueryingLikesQueryingTracksWithAssociatedLikes.png)

```graphql
{
  likes {
    id
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
    user {
      id
      username
      email
    }
  }
}
```

> response

```json
{
  "data": {
    "likes": [
      {
        "id": "1",
        "track": {
          "id": "1",
          "title": "Track 1",
          "description": "Track 1 Description",
          "url": "https://track1.com",
          "createdAt": "2019-03-30T18:15:19.730976+00:00",
          "postedBy": null
        },
        "user": {
          "id": "2",
          "username": "Juan",
          "email": "juan@msn.com"
        }
      }
    ]
  }
}
```

- We can see that the Tracks query has also been updated to include the new likes

![](/images/other/graphql-full-stack-react-python-and-graphql/QueryingLikesQueryingTracksWithAssociatedLikes2.png)

```graphql
{
  tracks {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
    likes {
      id
      user {
        id
        username
        email
      }
    }
  }
}
```

> response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null,
        "likes": [
          {
            "id": "1",
            "user": {
              "id": "2",
              "username": "Juan",
              "email": "juan@msn.com"
            }
          }
        ]
      },
      {
        "id": "2",
        "title": "Track 2",
        "description": "Track 2 Description",
        "url": "https://track2.com",
        "createdAt": "2019-03-30T18:16:09.192365+00:00",
        "postedBy": null,
        "likes": []
      },
      {
        "id": "3",
        "title": "Track 3",
        "description": "Track 3 Description",
        "url": "https://track3.com",
        "createdAt": "2019-03-31T05:19:36.328234+00:00",
        "postedBy": null,
        "likes": []
      }
    ]
  }
}
```

### 27. Error Handling with GraphQLError 3min

- Graphql provides a special class that we can use to manage exceptions

- We need to update the `app/tracks/schema.py` and `app/users/schema.py` documents to add the use of the `GraphQLError` class.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError


# We import the Track model to avoid defining it again
from .models import Track, Like
from users.schema import UserType


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class LikeType(DjangoObjectType):
    class Meta:
        model = Like


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType)
    likes = graphene.List(LikeType)

    def resolve_tracks(self, info):
        return Track.objects.all()

    def resolve_likes(self, info):
        return Like.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('Log in to add a track.')

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    def mutate(self, info, track_id, title, url, description):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise GraphQLError('Not permitted to update this track.')

        track.title = title
        track.description = description
        track.url = url

        track.save()

        return UpdateTrack(track=track)


class DeleteTrack(graphene.Mutation):
    track_id = graphene.Int()

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise GraphQLError('Not permitted to delete this track.')

        track.delete()

        return DeleteTrack(track_id=track_id)


class CreateLike(graphene.Mutation):
    user = graphene.Field(UserType)
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Login to like tracks.')

        track = Track.objects.get(id=track_id)
        if not track:
            raise GraphQLError('Cannot find track with given track id')

        Like.objects.create(
            user=user,
            track=track
        )

        return CreateLike(user=user, track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
    delete_track = DeleteTrack.Field()
    create_like = CreateLike.Field()
```

> app/users/schema.py

```py
import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from graphql import GraphQLError


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        # to return only the fields included
        # only_fields = ('id', 'email', 'password', 'username')


class Query(graphene.ObjectType):
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    me = graphene.Field(UserType)

    def resolve_user(self, info, id):
        return get_user_model().objects.get(id=id)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Not logged in!')

        return user


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
```

- We can see how this error management works by executing a mutation that needs authentication

> Request

```graphql
mutation {
  createLike(trackId: 1) {
    track {
      id
      title
      description
      url
      createdAt
      postedBy {
        id
        username
        email
      }
    }
    user {
      id
      username
      email
    }
  }
}
```

> Response

```json
{
  "errors": [
    {
      "message": "Login to like tracks.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["createLike"]
    }
  ],
  "data": {
    "createLike": null
  }
}
```

### 28. Adding Full Text Search to our Tracks 7min

- We need to modify the `app/tracks/schema.py` document to add the `Search` feature for our tracks.

> app/tracks/schema.py

```py
.
.
.
class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType, search=graphene.String())
    likes = graphene.List(LikeType)

    def resolve_tracks(self, info, search=None):
        if search:
            return Track.objects.filter(title__startswith=search)
        return Track.objects.all()
.
.
.
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingFullTextSearchToOurTracks.png)

- We can try it out

> Request

```graphql
{
  tracks(search: "Tr") {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
    likes {
      user {
        id
        username
        email
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null,
        "likes": [
          {
            "user": {
              "id": "2",
              "username": "Juan",
              "email": "juan@msn.com"
            }
          }
        ]
      },
      {
        "id": "2",
        "title": "Track 2",
        "description": "Track 2 Description",
        "url": "https://track2.com",
        "createdAt": "2019-03-30T18:16:09.192365+00:00",
        "postedBy": null,
        "likes": []
      },
      {
        "id": "3",
        "title": "Track 3",
        "description": "Track 3 Description",
        "url": "https://track3.com",
        "createdAt": "2019-03-31T05:19:36.328234+00:00",
        "postedBy": null,
        "likes": []
      }
    ]
  }
}
```

> Request

```graphql
{
  tracks(search: "r") {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
    likes {
      user {
        id
        username
        email
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "tracks": []
  }
}
```

- We can use `icontains` to search any text.

> app/tracks/schema.py

```py
.
.
.
class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType, search=graphene.String())
    likes = graphene.List(LikeType)

    def resolve_tracks(self, info, search=None):
        if search:
            return Track.objects.filter(title__icontains=search)
        return Track.objects.all()
.
.
.
```

> Request

```graphql
{
  tracks(search: "1") {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
    likes {
      user {
        id
        username
        email
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null,
        "likes": [
          {
            "user": {
              "id": "2",
              "username": "Juan",
              "email": "juan@msn.com"
            }
          }
        ]
      }
    ]
  }
}
```

- We are going to use the `Django G` object to be able to search by some other fields.

> app/tracks/schema.py

```py
import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from django.db.models import Q

# We import the Track model to avoid defining it again
from .models import Track, Like
from users.schema import UserType


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class LikeType(DjangoObjectType):
    class Meta:
        model = Like


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType, search=graphene.String())
    likes = graphene.List(LikeType)

    def resolve_tracks(self, info, search=None):
        if search:
            filter = (
                Q(title__icontains=search) |
                Q(description__icontains=search) |
                Q(url__icontains=search) |
                Q(posted_by__username__icontains=search)
            )
            return Track.objects.filter(filter)
        return Track.objects.all()

    def resolve_likes(self, info):
        return Like.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    # We can use **kwargs instead of the list of parameters
    # def mutate(self, info, **kwargs):
    def mutate(self, info, title, description, url):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('Log in to add a track.')

        track = Track(title=title, description=description,
                      url=url, posted_by=user)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()

    def mutate(self, info, track_id, title, url, description):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise GraphQLError('Not permitted to update this track.')

        track.title = title
        track.description = description
        track.url = url

        track.save()

        return UpdateTrack(track=track)


class DeleteTrack(graphene.Mutation):
    track_id = graphene.Int()

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise GraphQLError('Not permitted to delete this track.')

        track.delete()

        return DeleteTrack(track_id=track_id)


class CreateLike(graphene.Mutation):
    user = graphene.Field(UserType)
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Login to like tracks.')

        track = Track.objects.get(id=track_id)
        if not track:
            raise GraphQLError('Cannot find track with given track id')

        Like.objects.create(
            user=user,
            track=track
        )

        return CreateLike(user=user, track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
    delete_track = DeleteTrack.Field()
    create_like = CreateLike.Field()
```

> Request

```graphql
{
  tracks(search: "https") {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
    likes {
      user {
        id
        username
        email
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "tracks": [
      {
        "id": "1",
        "title": "Track 1",
        "description": "Track 1 Description",
        "url": "https://track1.com",
        "createdAt": "2019-03-30T18:15:19.730976+00:00",
        "postedBy": null,
        "likes": [
          {
            "user": {
              "id": "2",
              "username": "Juan",
              "email": "juan@msn.com"
            }
          }
        ]
      },
      {
        "id": "2",
        "title": "Track 2",
        "description": "Track 2 Description",
        "url": "https://track2.com",
        "createdAt": "2019-03-30T18:16:09.192365+00:00",
        "postedBy": null,
        "likes": []
      },
      {
        "id": "3",
        "title": "Track 3",
        "description": "Track 3 Description",
        "url": "https://track3.com",
        "createdAt": "2019-03-31T05:19:36.328234+00:00",
        "postedBy": null,
        "likes": []
      }
    ]
  }
}
```

> Request

```graphql
{
  tracks(search: "Juan") {
    id
    title
    description
    url
    createdAt
    postedBy {
      id
      username
      email
    }
    likes {
      user {
        id
        username
        email
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "tracks": [
      {
        "id": "5",
        "title": "Track 4",
        "description": "Track 4 Description",
        "url": "https://track4.com",
        "createdAt": "2019-04-01T17:41:21.522595+00:00",
        "postedBy": {
          "id": "2",
          "username": "Juan",
          "email": "juan@msn.com"
        },
        "likes": [
          {
            "user": {
              "id": "3",
              "username": "Pablo",
              "email": "juan@msn.com"
            }
          }
        ]
      }
    ]
  }
}
```

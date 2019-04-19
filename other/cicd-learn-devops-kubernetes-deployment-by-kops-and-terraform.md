# Learn Devops Kubernetes deployment by kops and terraform

The [Learn Devops Kubernetes deployment by kops and terraform](https://www.udemy.com/learn-devops-kubernetes-deployment-by-kops-and-terraform/) Udemy course is a Comprehensive Nginx deployment to Kubernetes on AWS by using kops and terraform.

> Table of contents
> [[toc]]

## What I've learned

- Deploy Kubernetes cluster in AWS.
- Learn how to use Kops to spin up Kubernetes cluster.
- Learn how to use Terraform to run immutable infrastructure.
- Learn deployment concepts in Kubernetes.
- Learn how to get inside Docker container, watch logs.
- Use knowledge learned throughout this course in another cloud providers than just AWS.
- Learn about horizontally scaled deployment in Kubernetes.
- Learn how to deploy NGINX web server with their custom content to Kubernetes in form of Docker container.
- Learn how to see logs, get inside the Docker container within the pod in Kubernetes.

## Section: 1. Introduction

### 1. What is this course about

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/WhatIsThisCourseAbout.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/WhatIsThisCourseAbout2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/WhatIsThisCourseAbout3.png)

### 2. Create free account on AWS

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/CreateFreeAccountOnAws.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/CreateFreeAccountOnAws2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/CreateFreeAccountOnAws3.png)

### 3. Install AWS materials

You can simply do a google search "how to install awscli to the OS you are using".

**Debian like systems**

```bash
sudo apt-get install python2-pip
sudo apt-get install python3-pip
sudo pip install awscli
sudo pip3 install awscli
```

**RedHat like systems**

```bash
sudo yum install python2-pip
sudo yum install python2-pip
sudo pip install awscli
sudo pip3 install awscli
```

**MacOS**

```bash
# https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html
curl -O https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py --user
pip3 install awscli --upgrade --user
aws --version
AWS CLI 1.11.84 (Python 3.6.1)
```

**Windows**

Please check this web page [Install the AWS CLI on Windows](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html)

**Install the AWS CLI on Windows**

You can install the AWS Command Line Interface (AWS CLI) on Windows by using a standalone installer or pip, which is a package manager for Python. If you already have pip, follow the instructions in the main installation topic.

**Sections**

- Install the AWS CLI Using the MSI Installer
- Install the AWS CLI Using Python and pip on Windows
- Add the AWS CLI Executable to Your Command Line Path

_**Install the AWS CLI Using the MSI Installer**_

The AWS CLI is supported on Microsoft Windows XP or later. For Windows users, the MSI installation package offers a familiar and convenient way to install the AWS CLI without installing any other prerequisites.

When updates are released, you must repeat the installation process to get the latest version of the AWS CLI. To update frequently, consider using pip for easier updates.

**To install the AWS CLI using the MSI installer**

1. Download the appropriate MSI installer.

   - Download the AWS CLI MSI installer for Windows (64-bit)

   - Download the AWS CLI MSI installer for Windows (32-bit)

   - Download the AWS CLI setup file (includes both the 32-bit and 64-bit MSI installers and will automatically install the correct version)

   Note

   The MSI installer for the AWS CLI doesn't work with Windows Server 2008 (version 6.0.6002). Use pip to install with this version of Windows Server.

2. Run the downloaded MSI installer or the setup file.

3. Follow the onscreen instructions.

By default, the CLI installs to `C:\Program Files\Amazon\AWSCLI` (64-bit version) or `C:\Program Files (x86)\Amazon\AWSCLI` (32-bit version). To confirm the installation, use the aws `--version` command at a command prompt (open the Start menu and search for cmd to start a command prompt).

```bash
C:\> aws --version
aws-cli/1.16.71 Python/3.6.5 Windows/10 botocore/1.12.61
```

Don't include the prompt symbol (C:\>, shown above) when you type a command. These are included in program listings to differentiate commands that you type from output returned by the CLI. The rest of this guide uses the generic prompt symbol, \$ , except in cases where a command is Windows-specific.

If Windows is unable to find the program, you might need to close and reopen the command prompt to refresh the path, or add the installation directory to your PATH environment variable manually.

_Updating an MSI Installation_

The AWS CLI is updated regularly. Check the Releases page on GitHub to see when the latest version was released. To update to the latest version, download and run the MSI installer again, as described previously.

_Uninstalling the AWS CLI_

To uninstall the AWS CLI, open the Control Panel, and then choose Programs and Features. Select the entry named AWS Command Line Interface, and then choose Uninstall to launch the uninstaller. Confirm that you want to uninstall the AWS CLI when you're prompted.

You can also launch the Programs and Features program from the command line with the following command.

```bash
C:\> appwiz.cpl
```

_**Install the AWS CLI Using Python and pip on Windows**_

The Python Software Foundation provides installers for Windows that include pip.

**To install Python and pip (Windows)**

1. Download the Python Windows x86-64 installer from the downloads page of Python.org.

1. Run the installer.

1. Choose Add Python 3 to PATH.

1. Choose Install Now.

The installer installs Python in your user folder and adds its program folders to your user path.

**To install the AWS CLI with pip3 (Windows)**

If you use Python version 3+, we recommend that you use the pip3 command.

1. Open the Command Prompt from the Start menu.

2. Use the following commands to verify that Python and pip are both installed correctly.

```bash
C:\> python --version
Python 3.7.1
C:\> pip3 --version
pip 18.1 from c:\program files\python37\lib\site-packages\pip (python 3.7)
```

3. Install the AWS CLI using pip.

```bash
C:\> pip3 install awscli
```

4. Verify that the AWS CLI is installed correctly.

```bash
C:\> aws --version
aws-cli/1.16.71 Python/3.6.5 Windows/10 botocore/1.12.61
```

To upgrade to the latest version, run the installation command again.

```
C:\> pip3 install --user --upgrade awscli
```

**Add the AWS CLI Executable to Your Command Line Path**

After installing the AWS CLI with pip, add the aws program to your operating system's PATH environment variable. With an MSI installation, this should happen automatically, but you might need to set it manually if the aws command doesn't run after you install it.

You can find where the aws program is installed by running the following command.

```bash
C:\> where aws
C:\Program Files\Python37\Scripts\aws
```

If that command does not return any results, then you must add the path manually. Use the command line or Windows Explorer to discover where it is installed on your computer. Typical paths include:

- **Python 3 and pip3** – `C:\Program Files\Python37\Scripts\`

- **Python 3 and pip3 --user option on earlier versions of Windows –** `%USERPROFILE%\AppData\Local\Programs\Python\Python37\Scripts`

- **Python 3 and pip3 --user option on Windows 10 –** `%USERPROFILE%\AppData\Roaming\Python\Python37\Scripts`

- **MSI installer (64-bit) –** `C:\Program Files\Amazon\AWSCLI`

- **MSI installer (32-bit) –** `C:\Program Files (x86)\Amazon\AWSCLI`

  **Note**

  Folder names that include version numbers can vary. The examples above show Python37. Replace as needed with the version number you are using.

**To modify your PATH variable (Windows)**

- Press the Windows key and enter environment variables.

- Choose Edit environment variables for your account.

- Choose PATH, and then choose Edit.

- Add the path to the Variable value field. For example: `C:\new\path`

- Choose OK twice to apply the new settings.

- Close any running command prompts and reopen the command prompt window.

### 4. Install aws utility

> Install the latest version of python along with the AWS client

- Go to [python](https://www.python.org/)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials3.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials4.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials5.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials6.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials7.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials8.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallAWSMaterials9.png)

```bash
C:\Windows\system32>py --version
Python 3.7.2
```

```bash
C:\Windows\system32>pip3 --version
pip 18.1 from c:\users\juan.pablo.perez\appdata\local\programs\python\python37\lib\site-packages\pip (python 3.7)
```

```bash
C:\Windows\system32>pip3 install awscli
Collecting awscli
  Downloading https://files.pythonhosted.org/packages/89/5b/ca70b0804813dda500736b0854ba15145442fa0a3ce3382d7688359fdd27/awscli-1.16.116-py2.py3-none-any.whl (1.5MB)
    100% |████████████████████████████████| 1.5MB 470kB/s
Collecting PyYAML<=3.13,>=3.10 (from awscli)
  Downloading https://files.pythonhosted.org/packages/bf/96/d02ef8e1f3073e07ffdc240444e5041f403f29c0775f9f1653f18221082f/PyYAML-3.13-cp37-cp37m-win_amd64.whl (206kB)
    100% |████████████████████████████████| 215kB 1.4MB/s
Collecting colorama<=0.3.9,>=0.2.5 (from awscli)
  Downloading https://files.pythonhosted.org/packages/db/c8/7dcf9dbcb22429512708fe3a547f8b6101c0d02137acbd892505aee57adf/colorama-0.3.9-py2.py3-none-any.whl
Collecting botocore==1.12.106 (from awscli)
  Downloading https://files.pythonhosted.org/packages/58/27/ec2c22fdc556c142c1cdf37a7335156482e5298db71980567961ab299ea4/botocore-1.12.106-py2.py3-none-any.whl (5.3MB)
    100% |████████████████████████████████| 5.3MB 2.6MB/s
Collecting s3transfer<0.3.0,>=0.2.0 (from awscli)
  Downloading https://files.pythonhosted.org/packages/d7/de/5737f602e22073ecbded7a0c590707085e154e32b68d86545dcc31004c02/s3transfer-0.2.0-py2.py3-none-any.whl (69kB)
    100% |████████████████████████████████| 71kB 1.0MB/s
Collecting rsa<=3.5.0,>=3.1.2 (from awscli)
  Downloading https://files.pythonhosted.org/packages/e1/ae/baedc9cb175552e95f3395c43055a6a5e125ae4d48a1d7a924baca83e92e/rsa-3.4.2-py2.py3-none-any.whl (46kB)
    100% |████████████████████████████████| 51kB 2.4MB/s
Collecting docutils>=0.10 (from awscli)
  Downloading https://files.pythonhosted.org/packages/36/fa/08e9e6e0e3cbd1d362c3bbee8d01d0aedb2155c4ac112b19ef3cae8eed8d/docutils-0.14-py3-none-any.whl (543kB)
    100% |████████████████████████████████| 552kB 2.6MB/s
Collecting jmespath<1.0.0,>=0.7.1 (from botocore==1.12.106->awscli)
  Downloading https://files.pythonhosted.org/packages/83/94/7179c3832a6d45b266ddb2aac329e101367fbdb11f425f13771d27f225bb/jmespath-0.9.4-py2.py3-none-any.whl
Collecting urllib3<1.25,>=1.20; python_version >= "3.4" (from botocore==1.12.106->awscli)
  Downloading https://files.pythonhosted.org/packages/62/00/ee1d7de624db8ba7090d1226aebefab96a2c71cd5cfa7629d6ad3f61b79e/urllib3-1.24.1-py2.py3-none-any.whl (118kB)
    100% |████████████████████████████████| 122kB 3.3MB/s
Collecting python-dateutil<3.0.0,>=2.1; python_version >= "2.7" (from botocore==1.12.106->awscli)
  Downloading https://files.pythonhosted.org/packages/41/17/c62faccbfbd163c7f57f3844689e3a78bae1f403648a6afb1d0866d87fbb/python_dateutil-2.8.0-py2.py3-none-any.whl (226kB)
    100% |████████████████████████████████| 235kB 3.6MB/s
Collecting pyasn1>=0.1.3 (from rsa<=3.5.0,>=3.1.2->awscli)
  Downloading https://files.pythonhosted.org/packages/7b/7c/c9386b82a25115cccf1903441bba3cbadcfae7b678a20167347fa8ded34c/pyasn1-0.4.5-py2.py3-none-any.whl (73kB)
    100% |████████████████████████████████| 81kB 2.1MB/s
Collecting six>=1.5 (from python-dateutil<3.0.0,>=2.1; python_version >= "2.7"->botocore==1.12.106->awscli)
  Downloading https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
Installing collected packages: PyYAML, colorama, jmespath, urllib3, six, python-dateutil, docutils, botocore, s3transfer, pyasn1, rsa, awscli
Successfully installed PyYAML-3.13 awscli-1.16.116 botocore-1.12.106 colorama-0.3.9 docutils-0.14 jmespath-0.9.4 pyasn1-0.4.5 python-dateutil-2.8.0 rsa-3.4.2 s3transfer-0.2.0 six-1.12.0 urllib3-1.24.1
You are using pip version 18.1, however version 19.0.3 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.
```

```bash
C:\Windows\system32>py -m pip install --upgrade pip
Collecting pip
  Downloading https://files.pythonhosted.org/packages/d8/f3/413bab4ff08e1fc4828dfc59996d721917df8e8583ea85385d51125dceff/pip-19.0.3-py2.py3-none-any.whl (1.4MB)
    100% |████████████████████████████████| 1.4MB 4.6MB/s
Installing collected packages: pip
  Found existing installation: pip 18.1
    Uninstalling pip-18.1:
      Successfully uninstalled pip-18.1
Successfully installed pip-19.0.3
```

```bash
C:\Windows\system32>aws --version
Traceback (most recent call last):
  File "C:\Users\juan.pablo.perez\AppData\Local\Programs\Python\Python37\Scripts\aws.cmd", line 50, in <module>
    import awscli.clidriver
ImportError: No module named awscli.clidriver

C:\Windows\system32>python --version
Python 2.7.15

C:\Windows\system32>where python
C:\Python27\python.exe
C:\Users\juan.pablo.perez\AppData\Local\Programs\Python\Python37\python.exe
```

- After removing the `Python 2.7` from the locacl environment path variable:

```bash
C:\Windows\system32>aws --version
aws-cli/1.16.116 Python/3.7.2 Windows/10 botocore/1.12.106
```

> Install AWS Client on Ubuntu

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt-get install python3-pip
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following additional packages will be installed:
  binutils binutils-common binutils-x86-64-linux-gnu build-essential cpp cpp-7
  dh-python dpkg-dev fakeroot g++ g++-7 gcc gcc-7 gcc-7-base
  libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl
  libasan4 libatomic1 libbinutils libc-dev-bin libc6-dev libcc1-0 libcilkrts5
  libdpkg-perl libexpat1-dev libfakeroot libfile-fcntllock-perl libgcc-7-dev
  libgomp1 libisl19 libitm1 liblsan0 libmpc3 libmpx2 libpython3-dev
  libpython3.6-dev libquadmath0 libstdc++-7-dev libtsan0 libubsan0
  linux-libc-dev make manpages-dev python-pip-whl python3-crypto python3-dev
  python3-distutils python3-keyring python3-keyrings.alt python3-lib2to3
  python3-secretstorage python3-setuptools python3-wheel python3-xdg
  python3.6-dev
Suggested packages:
  binutils-doc cpp-doc gcc-7-locales debian-keyring g++-multilib
  g++-7-multilib gcc-7-doc libstdc++6-7-dbg gcc-multilib autoconf automake
  libtool flex bison gdb gcc-doc gcc-7-multilib libgcc1-dbg libgomp1-dbg
  libitm1-dbg libatomic1-dbg libasan4-dbg liblsan0-dbg libtsan0-dbg
  libubsan0-dbg libcilkrts5-dbg libmpx2-dbg libquadmath0-dbg glibc-doc bzr
  libstdc++-7-doc make-doc python-crypto-doc gnome-keyring libkf5wallet-bin
  gir1.2-gnomekeyring-1.0 python-secretstorage-doc python-setuptools-doc
The following NEW packages will be installed:
  binutils binutils-common binutils-x86-64-linux-gnu build-essential cpp cpp-7
  dh-python dpkg-dev fakeroot g++ g++-7 gcc gcc-7 gcc-7-base
  libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl
  libasan4 libatomic1 libbinutils libc-dev-bin libc6-dev libcc1-0 libcilkrts5
  libdpkg-perl libexpat1-dev libfakeroot libfile-fcntllock-perl libgcc-7-dev
  libgomp1 libisl19 libitm1 liblsan0 libmpc3 libmpx2 libpython3-dev
  libpython3.6-dev libquadmath0 libstdc++-7-dev libtsan0 libubsan0
  linux-libc-dev make manpages-dev python-pip-whl python3-crypto python3-dev
  python3-distutils python3-keyring python3-keyrings.alt python3-lib2to3
  python3-pip python3-secretstorage python3-setuptools python3-wheel
  python3-xdg python3.6-dev
0 upgraded, 57 newly installed, 0 to remove and 24 not upgraded.
Need to get 85.2 MB of archives.
After this operation, 247 MB of additional disk space will be used.
Do you want to continue? [Y/n]
Get:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 binutils-common amd64 2.30-21ubuntu1~18.04 [193 kB]
Get:2 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libbinutils amd64 2.30-21ubuntu1~18.04 [502 kB]
Get:3 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 binutils-x86-64-linux-gnu amd64 2.30-21ubuntu1~18.04 [1855 kB]
Get:4 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 binutils amd64 2.30-21ubuntu1~18.04 [3392 B]
Get:5 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libc-dev-bin amd64 2.27-3ubuntu1 [71.8 kB]
Get:6 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 linux-libc-dev amd64 4.15.0-45.48 [1001 kB]
Get:7 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libc6-dev amd64 2.27-3ubuntu1 [2587 kB]
Get:8 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 gcc-7-base amd64 7.3.0-27ubuntu1~18.04 [18.9 kB]
Get:9 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libisl19 amd64 0.19-1 [551 kB]
Get:10 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libmpc3 amd64 1.1.0-1 [40.8 kB]
Get:11 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 cpp-7 amd64 7.3.0-27ubuntu1~18.04 [6738 kB]
Get:12 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 cpp amd64 4:7.3.0-3ubuntu2.1 [27.6 kB]
Get:13 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libcc1-0 amd64 8.2.0-1ubuntu2~18.04 [39.5 kB]
Get:14 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libgomp1 amd64 8.2.0-1ubuntu2~18.04 [76.4 kB]
Get:15 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libitm1 amd64 8.2.0-1ubuntu2~18.04 [28.1 kB]
Get:16 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libatomic1 amd64 8.2.0-1ubuntu2~18.04 [9064 B]
Get:17 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libasan4 amd64 7.3.0-27ubuntu1~18.04 [358 kB]
Get:18 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 liblsan0 amd64 8.2.0-1ubuntu2~18.04 [132 kB]
Get:19 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libtsan0 amd64 8.2.0-1ubuntu2~18.04 [288 kB]
Get:20 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libubsan0 amd64 7.3.0-27ubuntu1~18.04 [126 kB]
Get:21 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libcilkrts5 amd64 7.3.0-27ubuntu1~18.04 [42.5 kB]
Get:22 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libmpx2 amd64 8.2.0-1ubuntu2~18.04 [11.7 kB]
Get:23 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libquadmath0 amd64 8.2.0-1ubuntu2~18.04 [133 kB]
Get:24 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libgcc-7-dev amd64 7.3.0-27ubuntu1~18.04 [2380 kB]
Get:25 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 gcc-7 amd64 7.3.0-27ubuntu1~18.04 [7455 kB]
Get:26 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 gcc amd64 4:7.3.0-3ubuntu2.1 [5184 B]
Get:27 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libstdc++-7-dev amd64 7.3.0-27ubuntu1~18.04 [1463 kB]
Get:28 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 g++-7 amd64 7.3.0-27ubuntu1~18.04 [7570 kB]
Get:29 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 g++ amd64 4:7.3.0-3ubuntu2.1 [1572 B]
Get:30 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 make amd64 4.1-9.1ubuntu1 [154 kB]
Get:31 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libdpkg-perl all 1.19.0.5ubuntu2.1 [211 kB]
Get:32 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 dpkg-dev all 1.19.0.5ubuntu2.1 [608 kB]
Get:33 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 build-essential amd64 12.4ubuntu1 [4758 B]
Get:34 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 python3-lib2to3 all 3.6.7-1~18.04 [76.5 kB]
Get:35 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 python3-distutils all 3.6.7-1~18.04 [141 kB]
Get:36 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 dh-python all 3.20180325ubuntu2 [89.2 kB]
Get:37 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libfakeroot amd64 1.22-2ubuntu1 [25.9 kB]
Get:38 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 fakeroot amd64 1.22-2ubuntu1 [62.3 kB]
Get:39 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libalgorithm-diff-perl all 1.19.03-1 [47.6 kB]
Get:40 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libalgorithm-diff-xs-perl amd64 0.04-5 [11.1 kB]
Get:41 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libalgorithm-merge-perl all 0.08-3 [12.0 kB]
Get:42 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libexpat1-dev amd64 2.2.5-3 [122 kB]
Get:43 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 libfile-fcntllock-perl amd64 0.22-3build2 [33.2 kB]
Get:44 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libpython3.6-dev amd64 3.6.7-1~18.04 [44.8 MB]
Get:45 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 libpython3-dev amd64 3.6.7-1~18.04 [7328 B]
Get:46 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 manpages-dev all 4.15-1 [2217 kB]
Get:47 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 python-pip-whl all 9.0.1-2.3~ubuntu1 [1652 kB]
Get:48 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 python3-crypto amd64 2.6.1-8ubuntu2 [244 kB]
Get:49 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 python3.6-dev amd64 3.6.7-1~18.04 [508 kB]
Get:50 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/main amd64 python3-dev amd64 3.6.7-1~18.04 [1288 B]
Get:51 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 python3-secretstorage all 2.3.1-2 [12.1 kB]
Get:52 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 python3-keyring all 10.6.0-1 [26.7 kB]
Get:53 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 python3-keyrings.alt all 3.0-1 [16.6 kB]
Get:54 http://lon1.mirrors.digitalocean.com/ubuntu bionic-updates/universe amd64 python3-pip all 9.0.1-2.3~ubuntu1 [114 kB]
Get:55 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 python3-setuptools all 39.0.1-2 [248 kB]
Get:56 http://lon1.mirrors.digitalocean.com/ubuntu bionic/universe amd64 python3-wheel all 0.30.0-0.2 [36.5 kB]
Get:57 http://lon1.mirrors.digitalocean.com/ubuntu bionic/main amd64 python3-xdg all 0.25-4ubuntu1 [31.4 kB]
Fetched 85.2 MB in 2s (50.1 MB/s)
Extracting templates from packages: 100%
Selecting previously unselected package binutils-common:amd64.
(Reading database ... 60341 files and directories currently installed.)
Preparing to unpack .../00-binutils-common_2.30-21ubuntu1~18.04_amd64.deb ...
Unpacking binutils-common:amd64 (2.30-21ubuntu1~18.04) ...
Selecting previously unselected package libbinutils:amd64.
Preparing to unpack .../01-libbinutils_2.30-21ubuntu1~18.04_amd64.deb ...
Unpacking libbinutils:amd64 (2.30-21ubuntu1~18.04) ...
Selecting previously unselected package binutils-x86-64-linux-gnu.
Preparing to unpack .../02-binutils-x86-64-linux-gnu_2.30-21ubuntu1~18.04_amd64.deb ...
Unpacking binutils-x86-64-linux-gnu (2.30-21ubuntu1~18.04) ...
Selecting previously unselected package binutils.
Preparing to unpack .../03-binutils_2.30-21ubuntu1~18.04_amd64.deb ...
Unpacking binutils (2.30-21ubuntu1~18.04) ...
Selecting previously unselected package libc-dev-bin.
Preparing to unpack .../04-libc-dev-bin_2.27-3ubuntu1_amd64.deb ...
Unpacking libc-dev-bin (2.27-3ubuntu1) ...
Selecting previously unselected package linux-libc-dev:amd64.
Preparing to unpack .../05-linux-libc-dev_4.15.0-45.48_amd64.deb ...
Unpacking linux-libc-dev:amd64 (4.15.0-45.48) ...
Selecting previously unselected package libc6-dev:amd64.
Preparing to unpack .../06-libc6-dev_2.27-3ubuntu1_amd64.deb ...
Unpacking libc6-dev:amd64 (2.27-3ubuntu1) ...
Selecting previously unselected package gcc-7-base:amd64.
Preparing to unpack .../07-gcc-7-base_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking gcc-7-base:amd64 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package libisl19:amd64.
Preparing to unpack .../08-libisl19_0.19-1_amd64.deb ...
Unpacking libisl19:amd64 (0.19-1) ...
Selecting previously unselected package libmpc3:amd64.
Preparing to unpack .../09-libmpc3_1.1.0-1_amd64.deb ...
Unpacking libmpc3:amd64 (1.1.0-1) ...
Selecting previously unselected package cpp-7.
Preparing to unpack .../10-cpp-7_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking cpp-7 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package cpp.
Preparing to unpack .../11-cpp_4%3a7.3.0-3ubuntu2.1_amd64.deb ...
Unpacking cpp (4:7.3.0-3ubuntu2.1) ...
Selecting previously unselected package libcc1-0:amd64.
Preparing to unpack .../12-libcc1-0_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libcc1-0:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libgomp1:amd64.
Preparing to unpack .../13-libgomp1_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libgomp1:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libitm1:amd64.
Preparing to unpack .../14-libitm1_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libitm1:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libatomic1:amd64.
Preparing to unpack .../15-libatomic1_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libatomic1:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libasan4:amd64.
Preparing to unpack .../16-libasan4_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking libasan4:amd64 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package liblsan0:amd64.
Preparing to unpack .../17-liblsan0_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking liblsan0:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libtsan0:amd64.
Preparing to unpack .../18-libtsan0_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libtsan0:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libubsan0:amd64.
Preparing to unpack .../19-libubsan0_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking libubsan0:amd64 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package libcilkrts5:amd64.
Preparing to unpack .../20-libcilkrts5_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking libcilkrts5:amd64 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package libmpx2:amd64.
Preparing to unpack .../21-libmpx2_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libmpx2:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libquadmath0:amd64.
Preparing to unpack .../22-libquadmath0_8.2.0-1ubuntu2~18.04_amd64.deb ...
Unpacking libquadmath0:amd64 (8.2.0-1ubuntu2~18.04) ...
Selecting previously unselected package libgcc-7-dev:amd64.
Preparing to unpack .../23-libgcc-7-dev_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking libgcc-7-dev:amd64 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package gcc-7.
Preparing to unpack .../24-gcc-7_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking gcc-7 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package gcc.
Preparing to unpack .../25-gcc_4%3a7.3.0-3ubuntu2.1_amd64.deb ...
Unpacking gcc (4:7.3.0-3ubuntu2.1) ...
Selecting previously unselected package libstdc++-7-dev:amd64.
Preparing to unpack .../26-libstdc++-7-dev_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking libstdc++-7-dev:amd64 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package g++-7.
Preparing to unpack .../27-g++-7_7.3.0-27ubuntu1~18.04_amd64.deb ...
Unpacking g++-7 (7.3.0-27ubuntu1~18.04) ...
Selecting previously unselected package g++.
Preparing to unpack .../28-g++_4%3a7.3.0-3ubuntu2.1_amd64.deb ...
Unpacking g++ (4:7.3.0-3ubuntu2.1) ...
Selecting previously unselected package make.
Preparing to unpack .../29-make_4.1-9.1ubuntu1_amd64.deb ...
Unpacking make (4.1-9.1ubuntu1) ...
Selecting previously unselected package libdpkg-perl.
Preparing to unpack .../30-libdpkg-perl_1.19.0.5ubuntu2.1_all.deb ...
Unpacking libdpkg-perl (1.19.0.5ubuntu2.1) ...
Selecting previously unselected package dpkg-dev.
Preparing to unpack .../31-dpkg-dev_1.19.0.5ubuntu2.1_all.deb ...
Unpacking dpkg-dev (1.19.0.5ubuntu2.1) ...
Selecting previously unselected package build-essential.
Preparing to unpack .../32-build-essential_12.4ubuntu1_amd64.deb ...
Unpacking build-essential (12.4ubuntu1) ...
Selecting previously unselected package python3-lib2to3.
Preparing to unpack .../33-python3-lib2to3_3.6.7-1~18.04_all.deb ...
Unpacking python3-lib2to3 (3.6.7-1~18.04) ...
Selecting previously unselected package python3-distutils.
Preparing to unpack .../34-python3-distutils_3.6.7-1~18.04_all.deb ...
Unpacking python3-distutils (3.6.7-1~18.04) ...
Selecting previously unselected package dh-python.
Preparing to unpack .../35-dh-python_3.20180325ubuntu2_all.deb ...
Unpacking dh-python (3.20180325ubuntu2) ...
Selecting previously unselected package libfakeroot:amd64.
Preparing to unpack .../36-libfakeroot_1.22-2ubuntu1_amd64.deb ...
Unpacking libfakeroot:amd64 (1.22-2ubuntu1) ...
Selecting previously unselected package fakeroot.
Preparing to unpack .../37-fakeroot_1.22-2ubuntu1_amd64.deb ...
Unpacking fakeroot (1.22-2ubuntu1) ...
Selecting previously unselected package libalgorithm-diff-perl.
Preparing to unpack .../38-libalgorithm-diff-perl_1.19.03-1_all.deb ...
Unpacking libalgorithm-diff-perl (1.19.03-1) ...
Selecting previously unselected package libalgorithm-diff-xs-perl.
Preparing to unpack .../39-libalgorithm-diff-xs-perl_0.04-5_amd64.deb ...
Unpacking libalgorithm-diff-xs-perl (0.04-5) ...
Selecting previously unselected package libalgorithm-merge-perl.
Preparing to unpack .../40-libalgorithm-merge-perl_0.08-3_all.deb ...
Unpacking libalgorithm-merge-perl (0.08-3) ...
Selecting previously unselected package libexpat1-dev:amd64.
Preparing to unpack .../41-libexpat1-dev_2.2.5-3_amd64.deb ...
Unpacking libexpat1-dev:amd64 (2.2.5-3) ...
Selecting previously unselected package libfile-fcntllock-perl.
Preparing to unpack .../42-libfile-fcntllock-perl_0.22-3build2_amd64.deb ...
Unpacking libfile-fcntllock-perl (0.22-3build2) ...
Selecting previously unselected package libpython3.6-dev:amd64.
Preparing to unpack .../43-libpython3.6-dev_3.6.7-1~18.04_amd64.deb ...
Unpacking libpython3.6-dev:amd64 (3.6.7-1~18.04) ...
Selecting previously unselected package libpython3-dev:amd64.
Preparing to unpack .../44-libpython3-dev_3.6.7-1~18.04_amd64.deb ...
Unpacking libpython3-dev:amd64 (3.6.7-1~18.04) ...
Selecting previously unselected package manpages-dev.
Preparing to unpack .../45-manpages-dev_4.15-1_all.deb ...
Unpacking manpages-dev (4.15-1) ...
Selecting previously unselected package python-pip-whl.
Preparing to unpack .../46-python-pip-whl_9.0.1-2.3~ubuntu1_all.deb ...
Unpacking python-pip-whl (9.0.1-2.3~ubuntu1) ...
Selecting previously unselected package python3-crypto.
Preparing to unpack .../47-python3-crypto_2.6.1-8ubuntu2_amd64.deb ...
Unpacking python3-crypto (2.6.1-8ubuntu2) ...
Selecting previously unselected package python3.6-dev.
Preparing to unpack .../48-python3.6-dev_3.6.7-1~18.04_amd64.deb ...
Unpacking python3.6-dev (3.6.7-1~18.04) ...
Selecting previously unselected package python3-dev.
Preparing to unpack .../49-python3-dev_3.6.7-1~18.04_amd64.deb ...
Unpacking python3-dev (3.6.7-1~18.04) ...
Selecting previously unselected package python3-secretstorage.
Preparing to unpack .../50-python3-secretstorage_2.3.1-2_all.deb ...
Unpacking python3-secretstorage (2.3.1-2) ...
Selecting previously unselected package python3-keyring.
Preparing to unpack .../51-python3-keyring_10.6.0-1_all.deb ...
Unpacking python3-keyring (10.6.0-1) ...
Selecting previously unselected package python3-keyrings.alt.
Preparing to unpack .../52-python3-keyrings.alt_3.0-1_all.deb ...
Unpacking python3-keyrings.alt (3.0-1) ...
Selecting previously unselected package python3-pip.
Preparing to unpack .../53-python3-pip_9.0.1-2.3~ubuntu1_all.deb ...
Unpacking python3-pip (9.0.1-2.3~ubuntu1) ...
Selecting previously unselected package python3-setuptools.
Preparing to unpack .../54-python3-setuptools_39.0.1-2_all.deb ...
Unpacking python3-setuptools (39.0.1-2) ...
Selecting previously unselected package python3-wheel.
Preparing to unpack .../55-python3-wheel_0.30.0-0.2_all.deb ...
Unpacking python3-wheel (0.30.0-0.2) ...
Selecting previously unselected package python3-xdg.
Preparing to unpack .../56-python3-xdg_0.25-4ubuntu1_all.deb ...
Unpacking python3-xdg (0.25-4ubuntu1) ...
Setting up libquadmath0:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up libgomp1:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up libatomic1:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up python-pip-whl (9.0.1-2.3~ubuntu1) ...
Setting up libcc1-0:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up make (4.1-9.1ubuntu1) ...
Setting up python3-crypto (2.6.1-8ubuntu2) ...
Setting up libtsan0:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up python3-xdg (0.25-4ubuntu1) ...
Setting up python3-keyrings.alt (3.0-1) ...
Setting up linux-libc-dev:amd64 (4.15.0-45.48) ...
Setting up libdpkg-perl (1.19.0.5ubuntu2.1) ...
Setting up python3-wheel (0.30.0-0.2) ...
Setting up liblsan0:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up gcc-7-base:amd64 (7.3.0-27ubuntu1~18.04) ...
Setting up binutils-common:amd64 (2.30-21ubuntu1~18.04) ...
Setting up libfile-fcntllock-perl (0.22-3build2) ...
Setting up libmpx2:amd64 (8.2.0-1ubuntu2~18.04) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Setting up libfakeroot:amd64 (1.22-2ubuntu1) ...
Setting up libalgorithm-diff-perl (1.19.03-1) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up libmpc3:amd64 (1.1.0-1) ...
Setting up libc-dev-bin (2.27-3ubuntu1) ...
Setting up python3-lib2to3 (3.6.7-1~18.04) ...
Setting up python3-secretstorage (2.3.1-2) ...
Setting up manpages-dev (4.15-1) ...
Setting up libc6-dev:amd64 (2.27-3ubuntu1) ...
Setting up python3-distutils (3.6.7-1~18.04) ...
Setting up libitm1:amd64 (8.2.0-1ubuntu2~18.04) ...
Setting up libisl19:amd64 (0.19-1) ...
Setting up libasan4:amd64 (7.3.0-27ubuntu1~18.04) ...
Setting up python3-keyring (10.6.0-1) ...
Setting up libbinutils:amd64 (2.30-21ubuntu1~18.04) ...
Setting up libcilkrts5:amd64 (7.3.0-27ubuntu1~18.04) ...
Setting up libubsan0:amd64 (7.3.0-27ubuntu1~18.04) ...
Setting up fakeroot (1.22-2ubuntu1) ...
update-alternatives: using /usr/bin/fakeroot-sysv to provide /usr/bin/fakeroot (fakeroot) in auto mode
Setting up libgcc-7-dev:amd64 (7.3.0-27ubuntu1~18.04) ...
Setting up cpp-7 (7.3.0-27ubuntu1~18.04) ...
Setting up libstdc++-7-dev:amd64 (7.3.0-27ubuntu1~18.04) ...
Setting up libalgorithm-merge-perl (0.08-3) ...
Setting up libalgorithm-diff-xs-perl (0.04-5) ...
Setting up python3-pip (9.0.1-2.3~ubuntu1) ...
Setting up libexpat1-dev:amd64 (2.2.5-3) ...
Setting up python3-setuptools (39.0.1-2) ...
Setting up dh-python (3.20180325ubuntu2) ...
Setting up binutils-x86-64-linux-gnu (2.30-21ubuntu1~18.04) ...
Setting up cpp (4:7.3.0-3ubuntu2.1) ...
Setting up libpython3.6-dev:amd64 (3.6.7-1~18.04) ...
Setting up binutils (2.30-21ubuntu1~18.04) ...
Setting up python3.6-dev (3.6.7-1~18.04) ...
Setting up libpython3-dev:amd64 (3.6.7-1~18.04) ...
Setting up gcc-7 (7.3.0-27ubuntu1~18.04) ...
Setting up g++-7 (7.3.0-27ubuntu1~18.04) ...
Setting up python3-dev (3.6.7-1~18.04) ...
Setting up gcc (4:7.3.0-3ubuntu2.1) ...
Setting up dpkg-dev (1.19.0.5ubuntu2.1) ...
Setting up g++ (4:7.3.0-3ubuntu2.1) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode
Setting up build-essential (12.4ubuntu1) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# pip3 install awscli
Collecting awscli
  Downloading https://files.pythonhosted.org/packages/89/5b/ca70b0804813dda500736b0854ba15145442fa0a3ce3382d7688359fdd27/awscli-1.16.116-py2.py3-none-any.whl (1.5MB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 1.5MB 812kB/s
Requirement already satisfied: colorama<=0.3.9,>=0.2.5 in /usr/lib/python3/dist-packages (from awscli)
Collecting botocore==1.12.106 (from awscli)
  Downloading https://files.pythonhosted.org/packages/58/27/ec2c22fdc556c142c1cdf37a7335156482e5298db71980567961ab299ea4/botocore-1.12.106-py2.py3-none-any.whl (5.3MB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 5.3MB 204kB/s
Collecting s3transfer<0.3.0,>=0.2.0 (from awscli)
  Downloading https://files.pythonhosted.org/packages/d7/de/5737f602e22073ecbded7a0c590707085e154e32b68d86545dcc31004c02/s3transfer-0.2.0-py2.py3-none-any.whl (69kB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 71kB 6.8MB/s
Collecting docutils>=0.10 (from awscli)
  Downloading https://files.pythonhosted.org/packages/36/fa/08e9e6e0e3cbd1d362c3bbee8d01d0aedb2155c4ac112b19ef3cae8eed8d/docutils-0.14-py3-none-any.whl (543kB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 552kB 2.2MB/s
Requirement already satisfied: PyYAML<=3.13,>=3.10 in /usr/lib/python3/dist-packages (from awscli)
Collecting rsa<=3.5.0,>=3.1.2 (from awscli)
  Downloading https://files.pythonhosted.org/packages/e1/ae/baedc9cb175552e95f3395c43055a6a5e125ae4d48a1d7a924baca83e92e/rsa-3.4.2-py2.py3-none-any.whl (46kB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 51kB 8.1MB/s
Requirement already satisfied: urllib3<1.25,>=1.20; python_version >= "3.4" in /usr/lib/python3/dist-packages (from botocore==1.12.106->awscli)
Collecting jmespath<1.0.0,>=0.7.1 (from botocore==1.12.106->awscli)
  Downloading https://files.pythonhosted.org/packages/83/94/7179c3832a6d45b266ddb2aac329e101367fbdb11f425f13771d27f225bb/jmespath-0.9.4-py2.py3-none-any.whl
Collecting python-dateutil<3.0.0,>=2.1; python_version >= "2.7" (from botocore==1.12.106->awscli)
  Downloading https://files.pythonhosted.org/packages/41/17/c62faccbfbd163c7f57f3844689e3a78bae1f403648a6afb1d0866d87fbb/python_dateutil-2.8.0-py2.py3-none-any.whl (226kB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 235kB 4.7MB/s
Requirement already satisfied: pyasn1>=0.1.3 in /usr/lib/python3/dist-packages (from rsa<=3.5.0,>=3.1.2->awscli)
Requirement already satisfied: six>=1.5 in /usr/lib/python3/dist-packages (from python-dateutil<3.0.0,>=2.1; python_version >= "2.7"->botocore==1.12.106->awscli)
Installing collected packages: jmespath, docutils, python-dateutil, botocore, s3transfer, rsa, awscli
Successfully installed awscli-1.16.116 botocore-1.12.106 docutils-0.14 jmespath-0.9.4 python-dateutil-2.8.0 rsa-3.4.2 s3transfer-0.2.0
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws
usage: aws [options] <command> <subcommand> [<subcommand> ...] [parameters]
To see help text, you can run:

  aws help
  aws <command> help
  aws <command> <subcommand> help
aws: error: the following arguments are required: command
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws --version
aws-cli/1.16.116 Python/3.6.7 Linux/4.15.0-45-generic botocore/1.12.106
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

### 5. Configure aws with proper credentials

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials.png)

- Go to [AWS Management Console](https://console.aws.amazon.com) and then to [Identity and Access Management](https://console.aws.amazon.com/iam)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials3.png)

- Enter the `devopsinuse` User name and select `[X] Programmatic access`. Then click on `[Next: Permissions]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials4.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials5.png)

- Enter the `devopsinuse` Group name and select the `[X]AdministratorAccess`. Then click on `[Create Group]`.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials6.png)

- Click om `Next: Tags`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials7.png)

- Don't add any tag and click on `[Next: Review]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials8.png)

- Click on `[Create User]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials9.png)

- Copy the `Access Key ID` and the `Secret access Key` and the click on `[Close]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials10.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/ConfigureAwsWithProperCredentials11.png)

**Set up credentials and config files on Windows**

- As it is explained on [Named Profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) we need to create a `credentials` and a `config` on the `%USERPROFILE%\.aws\` folder

> credentials

```
[default]
aws_access_key_id=AKIAIXXXXXXNHCKPT6Q
aws_secret_access_key=wiaCXXXXXXXXXXXXXXXXXXX/Jz

[devopsinuse]
aws_access_key_id=AKIAJCCCCCC63CIIQ
aws_secret_access_key=r763EzbCCCCCCCCCCCCCCCCnzX2O
```

> config

```
[default]
region=us-east-1
output=json

[profile devopsinuse]
region=us-east-1
output=json
```

```bash
C:\Windows\system32>aws iam get-user --profile devopsinuse
{
    "User": {
        "Path": "/",
        "UserName": "devopsinuse",
        "UserId": "AIDAJDDDDDDDDADSJGA",
        "Arn": "arn:aws:iam::97256DDDD9348:user/devopsinuse",
        "CreateDate": "2019-03-04T17:54:57Z"
    }
}
```

**Set up credentials and config files on Ubuntu**

- Create the `credentials` and `condif` files.

> credentials

```
[default]
aws_access_key_id=AKIAJCCCCCC63CIIQ
aws_secret_access_key=r763EzbCCCCCCCCCCCCCCCCnzX2O
```

> config

```
[default]
region=us-east-1
output=json
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# aws iam get-user
{
    "User": {
        "Path": "/",
        "UserName": "devopsinuse",
        "UserId": "AIDAJDDDDDDDDADSJGA",
        "Arn": "arn:aws:iam::97256DDDD9348:user/devopsinuse",
        "CreateDate": "2019-03-04T17:54:57Z"
    }
}

```

### 6. Install kubectl commands

**How to install kubectl binary to Linux like OS**

Copy and paste this code to your command line:

```bash
KUBECTL_BIN=kubectl

function install_kubectl {
    if [ -z $(which $KUBECTL_BIN) ]
       then
           curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/$KUBECTL_BIN
           chmod +x ${KUBECTL_BIN}
           sudo mv ${KUBECTL_BIN} /usr/local/bin/${KUBECTL_BIN}
    else
       echo "Kubectl is most likely installed"
    fi

}
```

Run this command:

```bash
install_kubectl
```

By now you should be able to use kubectl command.

> Install on Windows using Chocolatey or scoop

To install kubectl on Windows you can use either Chocolatey package manager or scoop command-line installer.

```bash
choco install kubernetes-cli
```

Test to ensure the version you installed is sufficiently up-to-date:

```bash
kubectl version
```

Navigate to your home directory:

```bash
cd %USERPROFILE%
```

Create the .kube directory:

```bash
mkdir .kube
```

Change to the .kube directory you just created:

```bash
cd .kube
```

Configure kubectl to use a remote Kubernetes cluster:

```bash
New-Item config -type file
```

Note:
Edit the config file with a text editor of your choice, such as Notepad.

### 7. Install kubectl

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKubectl.png)

> Install on Ubuntu

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# snap install kubectl --classic
kubectl 1.13.3 from 'canonical' installed
```

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kubectl
kubectl controls the Kubernetes cluster manager.

Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/

Basic Commands (Beginner):
  create         Create a resource from a file or from stdin.
  expose         Take a replication controller, service, deployment or pod and expose it as a new Kubernetes Service
  run            Run a particular image on the cluster
  set            Set specific features on objects

Basic Commands (Intermediate):
  explain        Documentation of resources
  get            Display one or many resources
  edit           Edit a resource on the server
  delete         Delete resources by filenames, stdin, resources and names, or by resources and label selector

Deploy Commands:
  rollout        Manage the rollout of a resource
  scale          Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job
  autoscale      Auto-scale a Deployment, ReplicaSet, or ReplicationController

Cluster Management Commands:
  certificate    Modify certificate resources.
  cluster-info   Display cluster info
  top            Display Resource (CPU/Memory/Storage) usage.
  cordon         Mark node as unschedulable
  uncordon       Mark node as schedulable
  drain          Drain node in preparation for maintenance
  taint          Update the taints on one or more nodes

Troubleshooting and Debugging Commands:
  describe       Show details of a specific resource or group of resources
  logs           Print the logs for a container in a pod
  attach         Attach to a running container
  exec           Execute a command in a container
  port-forward   Forward one or more local ports to a pod
  proxy          Run a proxy to the Kubernetes API server
  cp             Copy files and directories to and from containers.
  auth           Inspect authorization

Advanced Commands:
  diff           Diff live version against would-be applied version
  apply          Apply a configuration to a resource by filename or stdin
  patch          Update field(s) of a resource using strategic merge patch
  replace        Replace a resource by filename or stdin
  wait           Experimental: Wait for a specific condition on one or many resources.
  convert        Convert config files between different API versions

Settings Commands:
  label          Update the labels on a resource
  annotate       Update the annotations on a resource
  completion     Output shell completion code for the specified shell (bash or zsh)

Other Commands:
  api-resources  Print the supported API resources on the server
  api-versions   Print the supported API versions on the server, in the form of "group/version"
  config         Modify kubeconfig files
  plugin         Provides utilities for interacting with plugins.
  version        Print the client and server version information

Usage:
  kubectl [flags] [options]

Use "kubectl <command> --help" for more information about a given command.
Use "kubectl options" for a list of global command-line options (applies to all commands).
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

> On Windows once it has been installed.

```bash
C:\Windows\system32>kubectl
kubectl controls the Kubernetes cluster manager.

Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/

Basic Commands (Beginner):
  create         Create a resource from a file or from stdin.
  expose         Take a replication controller, service, deployment or pod and expose it as a new Kubernetes Service
  run            Run a particular image on the cluster
  set            Set specific features on objects
  run-container  Run a particular image on the cluster. This command is deprecated, use "run" instead

Basic Commands (Intermediate):
  get            Display one or many resources
  explain        Documentation of resources
  edit           Edit a resource on the server
  delete         Delete resources by filenames, stdin, resources and names, or by resources and label selector

Deploy Commands:
  rollout        Manage the rollout of a resource
  rolling-update Perform a rolling update of the given ReplicationController
  scale          Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job
  autoscale      Auto-scale a Deployment, ReplicaSet, or ReplicationController

Cluster Management Commands:
  certificate    Modify certificate resources.
  cluster-info   Display cluster info
  top            Display Resource (CPU/Memory/Storage) usage.
  cordon         Mark node as unschedulable
  uncordon       Mark node as schedulable
  drain          Drain node in preparation for maintenance
  taint          Update the taints on one or more nodes

Troubleshooting and Debugging Commands:
  describe       Show details of a specific resource or group of resources
  logs           Print the logs for a container in a pod
  attach         Attach to a running container
  exec           Execute a command in a container
  port-forward   Forward one or more local ports to a pod
  proxy          Run a proxy to the Kubernetes API server
  cp             Copy files and directories to and from containers.
  auth           Inspect authorization

Advanced Commands:
  apply          Apply a configuration to a resource by filename or stdin
  patch          Update field(s) of a resource using strategic merge patch
  replace        Replace a resource by filename or stdin
  convert        Convert config files between different API versions

Settings Commands:
  label          Update the labels on a resource
  annotate       Update the annotations on a resource
  completion     Output shell completion code for the specified shell (bash or zsh)

Other Commands:
  api-versions   Print the supported API versions on the server, in the form of "group/version"
  config         Modify kubeconfig files
  help           Help about any command
  plugin         Runs a command-line plugin
  version        Print the client and server version information

Usage:
  kubectl [flags] [options]

Use "kubectl <command> --help" for more information about a given command.
Use "kubectl options" for a list of global command-line options (applies to all commands).
```

### 8. Install Kops commands

There is more information on [Kubernetes documentation](https://kubernetes.io/docs/getting-started-guides/kops/)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKopsCommands.png)

**Install kops on Linux**

Simple shell function for kops installation

Copy and paste this code:

```bash
function install_kops {
    if [ -z $(which kops) ]
       then
           curl -LO https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-linux-amd64
           chmod +x kops-linux-amd64
           mv kops-linux-amd64 /usr/local/bin/kops
       else
           echo "kops is most likely installed"
       fi
}
```

```bash
install_kops
```

Hit enter and kops binary should be automatically installed to your Linux machine.

**Install kops on MacOS:**

```bash
curl -OL https://github.com/kubernetes/kops/releases/download/1.8.0/kops-darwin-amd64
chmod +x kops-darwin-amd64
mv kops-darwin-amd64 /usr/local/bin/kops
```

_you can also install using Homebrew_

```bash
brew update && brew install kops
```

### 9. Install kops

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops.png)

**Install kops on Linux**

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# wget https://github.com/kubernetes/kops/releases/download/1.10.0/kops-linux-amd64
--2019-03-05 05:25:21--  https://github.com/kubernetes/kops/releases/download/1.10.0/kops-linux-amd64
Resolving github.com (github.com)... 140.82.118.4, 140.82.118.3
Connecting to github.com (github.com)|140.82.118.4|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://github-production-release-asset-2e65be.s3.amazonaws.com/62091339/d5c60900-a0cf-11e8-8623-e06af953e312?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190305%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190305T052521Z&X-Amz-Expires=300&X-Amz-Signature=6acd725de8b64475e3b677e050c8baeb298f964c5895062b8fc575bc8f946d50&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3Dkops-linux-amd64&response-content-type=application%2Foctet-stream [following]
--2019-03-05 05:25:21--  https://github-production-release-asset-2e65be.s3.amazonaws.com/62091339/d5c60900-a0cf-11e8-8623-e06af953e312?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20190305%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190305T052521Z&X-Amz-Expires=300&X-Amz-Signature=6acd725de8b64475e3b677e050c8baeb298f964c5895062b8fc575bc8f946d50&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3Dkops-linux-amd64&response-content-type=application%2Foctet-stream
Resolving github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)... 52.216.83.24
Connecting to github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)|52.216.83.24|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 85875392 (82M) [application/octet-stream]
Saving to: ‘kops-linux-amd64’

kops-linux-amd64                                                    100%[==================================================================================================================================================================>]  81.90M  14.5MB/s    in 6.4s

2019-03-05 05:25:28 (12.8 MB/s) - ‘kops-linux-amd64’ saved [85875392/85875392]

root@ubuntu-s-1vcpu-2gb-lon1-01:~# chmod +x kops-linux-amd64
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mv kops-linux-amd64 /usr/local/bin/kops
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# kops
kops is Kubernetes ops.

kops is the easiest way to get a production grade Kubernetes cluster up and running. We like to think of it as kubectl for clusters.

kops helps you create, destroy, upgrade and maintain production-grade, highly available, Kubernetes clusters from the command line.  AWS (Amazon Web Services) is currently officially supported, with GCE and VMware vSphere in alpha support.

Usage:
  kops [command]

Available Commands:
  completion     Output shell completion code for the given shell (bash or zsh).
  create         Create a resource by command line, filename or stdin.
  delete         Delete clusters,instancegroups, or secrets.
  describe       Describe a resource.
  edit           Edit clusters and other resources.
  export         Export configuration.
  get            Get one or many resources.
  help           Help about any command
  import         Import a cluster.
  replace        Replace cluster resources.
  rolling-update Rolling update a cluster.
  set            Set fields on clusters and other resources.
  toolbox        Misc infrequently used commands.
  update         Update a cluster.
  upgrade        Upgrade a kubernetes cluster.
  validate       Validate a kops cluster.
  version        Print the kops version information.

Flags:
      --alsologtostderr                  log to standard error as well as files
      --config string                    yaml config file (default is $HOME/.kops.yaml)
  -h, --help                             help for kops
      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)
      --log_dir string                   If non-empty, write log files in this directory
      --logtostderr                      log to standard error instead of files (default false)
      --name string                      Name of cluster. Overrides KOPS_CLUSTER_NAME environment variable
      --state string                     Location of state storage (kops 'config' file). Overrides KOPS_STATE_STORE environment variable
      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)
  -v, --v Level                          log level for V logs
      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging

Use "kops [command] --help" for more information about a command.
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

**Install kops on Windows**

- As it it explain on [Need help to install kops and kubectl on windows 10](https://github.com/kubernetes/kops/issues/3635)

1. Download the offical release from official Windows releases : https://github.com/kubernetes/kops/releases

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops3.png)

2. Rename `kops-windows-amd64` to `kops.exe`. Move it to a directory of your preference and add it to PATH. eg. `C:\Users\jaskirat\kops\kops.exe`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops4.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops5.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops6.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops7.png)

- Add `C:\Tools\kops`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallKops8.png)

```bash
Microsoft Windows [Version 10.0.17763.195]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32>kops
kops is Kubernetes ops.

kops is the easiest way to get a production grade Kubernetes cluster up and running. We like to think of it as kubectl for clusters.

kops helps you create, destroy, upgrade and maintain production-grade, highly available, Kubernetes clusters from the command line.  AWS (Amazon Web Services) is currently officially supported, with GCE and VMware vSphere in alpha support.

Usage:
  kops [command]

Available Commands:
  completion     Output shell completion code for the given shell (bash or zsh).
  create         Create a resource by command line, filename or stdin.
  delete         Delete clusters,instancegroups, or secrets.
  describe       Describe a resource.
  edit           Edit clusters and other resources.
  export         Export configuration.
  get            Get one or many resources.
  help           Help about any command
  import         Import a cluster.
  replace        Replace cluster resources.
  rolling-update Rolling update a cluster.
  set            Set fields on clusters and other resources.
  toolbox        Misc infrequently used commands.
  update         Update a cluster.
  upgrade        Upgrade a kubernetes cluster.
  validate       Validate a kops cluster.
  version        Print the kops version information.

Flags:
      --alsologtostderr                  log to standard error as well as files
      --config string                    yaml config file (default is $HOME/.kops.yaml)
  -h, --help                             help for kops
      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)
      --log_dir string                   If non-empty, write log files in this directory
      --logtostderr                      log to standard error instead of files (default false)
      --name string                      Name of cluster. Overrides KOPS_CLUSTER_NAME environment variable
      --state string                     Location of state storage (kops 'config' file). Overrides KOPS_STATE_STORE environment variable
      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)
  -v, --v Level                          log level for V logs
      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging

Use "kops [command] --help" for more information about a command.
```

### 10. Install Terraform commands

Here is the **bash function** to install `terrafrom`:

```bash
TERRAFORM_ZIP_FILE=terraform_0.11.7_linux_amd64.zip
TERRAFORM=https://releases.hashicorp.com/terraform/0.11.7
TERRAFORM_BIN=terraform

function install_terraform {
    if [ -z $(which $TERRAFORM_BIN) ]
       then
           wget ${TERRAFORM}/${TERRAFORM_ZIP_FILE}
           unzip ${TERRAFORM_ZIP_FILE}
           sudo mv ${TERRAFORM_BIN} /usr/local/bin/${TERRAFORM_BIN}
           rm -rf ${TERRAFORM_ZIP_FILE}
    else
       echo "Terraform is most likely installed"
    fi

}

install_terraform
```

Alternatively:

**Install terraform on MacOS :**

1. Download ZIP file

```bash
wget https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_darwin_amd64.zip
```

2. unzip this ZIP package
3. copy it to your executable path

**Install terraform on Windows:**

1. Download ZIP file

```bash
wget https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_windows_amd64.zip
```

2. unzip this ZIP package
3. copy it to your executable path

### 11. Install terraform

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform0.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform0b.png)

- We can find more information about the binaries on [Download Terraform](https://www.terraform.io/downloads.html)

**Install terraform on Windows:**

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform3.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform4.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform5.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform6.png)

- Add `C:\Tools\terraform`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform7.png)

```bash
Microsoft Windows [Version 10.0.17763.195]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32>terraform
Usage: terraform [-version] [-help] <command> [args]

The available commands for execution are listed below.
The most common, useful commands are shown first, followed by
less common or more advanced commands. If you're just getting
started with Terraform, stick with the common commands. For the
other commands, please read the help and docs before usage.

Common commands:
    apply              Builds or changes infrastructure
    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    env                Workspace management
    fmt                Rewrites config files to canonical format
    get                Download and install modules for the configuration
    graph              Create a visual graph of Terraform resources
    import             Import existing infrastructure into Terraform
    init               Initialize a Terraform working directory
    output             Read an output from a state file
    plan               Generate and show an execution plan
    providers          Prints a tree of the providers used in the configuration
    push               Upload this Terraform module to Atlas to run
    refresh            Update local state file against real resources
    show               Inspect Terraform state or plan
    taint              Manually mark a resource for recreation
    untaint            Manually unmark a resource as tainted
    validate           Validates the Terraform files
    version            Prints the Terraform version
    workspace          Workspace management

All other commands:
    debug              Debug output management (experimental)
    force-unlock       Manually unlock the terraform state
    state              Advanced state management

```

**Install terraform on Linux:**

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/InstallTerraform8.png)

- Link: https://releases.hashicorp.com/terraform/0.11.11/terraform_0.11.11_linux_amd64.zip

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# wget https://releases.hashicorp.com/terraform/0.11.11/terraform_0.11.11_linux_amd64.zip
--2019-03-05 17:55:58--  https://releases.hashicorp.com/terraform/0.11.11/terraform_0.11.11_linux_amd64.zip
Resolving releases.hashicorp.com (releases.hashicorp.com)... 151.101.17.183, 2a04:4e42:4::439
Connecting to releases.hashicorp.com (releases.hashicorp.com)|151.101.17.183|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 20971661 (20M) [application/zip]
Saving to: ‘terraform_0.11.11_linux_amd64.zip’

terraform_0.11.11_linux_amd64.zip                                   100%[==================================================================================================================================================================>]  20.00M  --.-KB/s    in 0.1s

2019-03-05 17:55:59 (156 MB/s) - ‘terraform_0.11.11_linux_amd64.zip’ saved [20971661/20971661]
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls
jenkins  jenkins-docker  snap  terraform_0.11.11_linux_amd64.zip
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# unzip terraform_0.11.11_linux_amd64.zip

Command 'unzip' not found, but can be installed with:

apt install unzip
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt install unzip
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
Suggested packages:
  zip
The following NEW packages will be installed:
  unzip
0 upgraded, 1 newly installed, 0 to remove and 30 not upgraded.
Need to get 167 kB of archives.
After this operation, 558 kB of additional disk space will be used.
Get:1 http://mirrors.digitalocean.com/ubuntu bionic/main amd64 unzip amd64 6.0-21ubuntu1 [167 kB]
Fetched 167 kB in 1s (220 kB/s)
Selecting previously unselected package unzip.
(Reading database ... 66816 files and directories currently installed.)
Preparing to unpack .../unzip_6.0-21ubuntu1_amd64.deb ...
Unpacking unzip (6.0-21ubuntu1) ...
Processing triggers for mime-support (3.60ubuntu1) ...
Setting up unzip (6.0-21ubuntu1) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# unzip terraform_0.11.11_linux_amd64.zip
Archive:  terraform_0.11.11_linux_amd64.zip
  inflating: terraform
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls
jenkins  jenkins-docker  snap  terraform  terraform_0.11.11_linux_amd64.zip
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mv terraform /usr/local/bin/terraform
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# terraform
Usage: terraform [-version] [-help] <command> [args]

The available commands for execution are listed below.
The most common, useful commands are shown first, followed by
less common or more advanced commands. If you're just getting
started with Terraform, stick with the common commands. For the
other commands, please read the help and docs before usage.

Common commands:
    apply              Builds or changes infrastructure
    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    env                Workspace management
    fmt                Rewrites config files to canonical format
    get                Download and install modules for the configuration
    graph              Create a visual graph of Terraform resources
    import             Import existing infrastructure into Terraform
    init               Initialize a Terraform working directory
    output             Read an output from a state file
    plan               Generate and show an execution plan
    providers          Prints a tree of the providers used in the configuration
    push               Upload this Terraform module to Atlas to run
    refresh            Update local state file against real resources
    show               Inspect Terraform state or plan
    taint              Manually mark a resource for recreation
    untaint            Manually unmark a resource as tainted
    validate           Validates the Terraform files
    version            Prints the Terraform version
    workspace          Workspace management

All other commands:
    debug              Debug output management (experimental)
    force-unlock       Manually unlock the terraform state
    state              Advanced state management
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# rm terraform_0.11.11_linux_amd64.zip
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls
jenkins  jenkins-docker  snap
```

## Section: 2. How to use kops and terraform to start Kubernetes cluster

### 12. Terraform materials

1. **Copy and paste** this text to file named: `terraform.tfvars`

Please replace this three dots with your credentials from AWS console. These credentials are related to the user you have just created in your AWS account.

```bash
vim terraform.tfvars

...
AWS_ACCESS_KEY="..."
AWS_SECRET_KEY="..."
...

:wq!
```

2. **Copy and paste** text below to file named: `terraform.code.tf`

```bash
# ************************
# vars.tf
# ************************

variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}
variable "AWS_REGION" {
  default = "eu-central-1"
}
variable "AMIS" {
  type = "map"
  default = {
    # *******************************************
    # https://cloud-images.ubuntu.com/locator/ec2/
    #
    #   Frankfurt => eu-central-1
    #   OS        => UBUNTU Xenial 16.04 LTS
    #   AMI_ID    => ami-245f7fcf
    #
    #   AMI shortcut (AMAZON MACHINE IMAGE)
    #
    # *******************************************
    eu-central-1 = "ami-415b7baa"
  }
}

# ************************
# provider.tf
# ************************
provider "aws" {
    access_key = "${var.AWS_ACCESS_KEY}"
    secret_key = "${var.AWS_SECRET_KEY}"
    region = "${var.AWS_REGION}"
}


# ************************
# instance.tf
# ************************
resource "aws_instance" "UDEMY_DEVOPSINUSE" {
  ami = "${lookup(var.AMIS, var.AWS_REGION)}"
  tags { Name = "UDEMY" }
  instance_type = "t2.micro"
  provisioner "local-exec" {
     command = "echo ${aws_instance.UDEMY_DEVOPSINUSE.private_ip} >> private_ips.txt"
  }
}
output "ip" {
    value = "${aws_instance.UDEMY_DEVOPSINUSE.public_ip}"
}
```

3. If you have just **created these two files**:

- `terraform.tfvars`

- `terraform.code.tf`

4. Now you can **run**:

```bash
devopsinuse@devopsinuse:~/udemy.jantoth.course/terraform$ terraform init
devopsinuse@devopsinuse:~/udemy.jantoth.course/terraform$ terraform apply
```

Once you managed to create your first instance (server/EC2) and you are not using it - please delete it!!!

5. **Delete/destroy** your instances:

```bash
devopsinuse@devopsinuse:~/udemy.jantoth.course/terraform$ terraform destroy
```

### 13. How to practically use terraform

- Create the `terraform.tfvars` file.

> terraform.tfvars

```bash
aws_access_key_id=AKIAJCCCCCC63CIIQ
aws_secret_access_key=r763EzbCCCCCCCCCCCCCCCCnzX2O
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# vi terraform.tfvars
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- We can find the image to use on [Amazon EC2 AMI Locator](https://cloud-images.ubuntu.com/locator/ec2/)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform2.png)

- Create the `terraform.code.tf` file.

> `terraform.code.tf`

```bash
# ************************
# vars.tf
# ************************

variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}
variable "AWS_REGION" {
  default = "us-east-1"
}
variable "AMIS" {
  type = "map"
  default = {
    # *******************************************
    # https://cloud-images.ubuntu.com/locator/ec2/
    #
    #   US East (N. Virginia) => us-east-1
    #   OS        => UBUNTU Xenial 16.04 LTS
    #   AMI_ID    => ami-04b8c2001b0bf0c27
    #
    #   AMI shortcut (AMAZON MACHINE IMAGE)
    #
    # *******************************************
    us-east-1 = "ami-04b8c2001b0bf0c27"
  }
}

# ************************
# provider.tf
# ************************
provider "aws" {
    access_key = "${var.AWS_ACCESS_KEY}"
    secret_key = "${var.AWS_SECRET_KEY}"
    region = "${var.AWS_REGION}"
}


# ************************
# instance.tf
# ************************
resource "aws_instance" "UDEMY_DEVOPSINUSE" {
  ami = "${lookup(var.AMIS, var.AWS_REGION)}"
  tags { Name = "UDEMY" }
  instance_type = "t2.micro"
  provisioner "local-exec" {
     command = "echo ${aws_instance.UDEMY_DEVOPSINUSE.private_ip} >> private_ips.txt"
  }
}
output "ip" {
    value = "${aws_instance.UDEMY_DEVOPSINUSE.public_ip}"
}
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# vi terraform.code.tf
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls
jenkins  jenkins-docker  snap  terraform.code.tf  terraform.tfvars
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# terraform init

Initializing provider plugins...
- Checking for available provider plugins on https://releases.hashicorp.com...
- Downloading plugin for provider "aws" (2.0.0)...

The following providers do not have any version constraints in configuration,
so the latest version was installed.

To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.

* provider.aws: version = "~> 2.0"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# terraform apply
Usage: terraform apply [options] [DIR-OR-PLAN]

  Builds or changes infrastructure according to Terraform configuration
  files in DIR.

  By default, apply scans the current directory for the configuration
  and applies the changes appropriately. However, a path to another
  configuration or an execution plan can be provided. Execution plans can be
  used to only execute a pre-determined set of actions.

Options:

  -backup=path           Path to backup the existing state file before
                         modifying. Defaults to the "-state-out" path with
                         ".backup" extension. Set to "-" to disable backup.

  -auto-approve          Skip interactive approval of plan before applying.

  -lock=true             Lock the state file when locking is supported.

  -lock-timeout=0s       Duration to retry a state lock.

  -input=true            Ask for input for variables if not directly set.

  -no-color              If specified, output won't contain any color.

  -parallelism=n         Limit the number of parallel resource operations.
                         Defaults to 10.

  -refresh=true          Update state prior to checking for differences. This
                         has no effect if a plan file is given to apply.

  -state=path            Path to read and save state (unless state-out
                         is specified). Defaults to "terraform.tfstate".

  -state-out=path        Path to write state to that is different than
                         "-state". This can be used to preserve the old
                         state.

  -target=resource       Resource to target. Operation will be limited to this
                         resource and its dependencies. This flag can be used
                         multiple times.

  -var 'foo=bar'         Set a variable in the Terraform configuration. This
                         flag can be set multiple times.

  -var-file=foo          Set variables in the Terraform configuration from
                         a file. If "terraform.tfvars" or any ".auto.tfvars"
                         files are present, they will be automatically loaded.
```

- Modify the `terraform.code.tf` file.

> `terraform.code.tf`

```bash
# ************************
# vars.tf
# ************************




variable "AWS_REGION" {
  default = "us-east-1"
}

variable "AMIS" {
  type = "map"

  default = {
    # *******************************************
    # https://cloud-images.ubuntu.com/locator/ec2/
    #
    #   US East (N. Virginia) => us-east-1
    #   OS        => UBUNTU Xenial 16.04 LTS
    #   AMI_ID    => ami-04b8c2001b0bf0c27
    #
    #   AMI shortcut (AMAZON MACHINE IMAGE)
    #
    # *******************************************
    us-east-1 = "ami-04b8c2001b0bf0c27"
  }
}

# ************************
# provider.tf
# ************************
provider "aws" {
  shared_credentials_file = "/root/.aws"
  region     = "${var.AWS_REGION}"
}

# ************************
# instance.tf
# ************************
resource "aws_instance" "UDEMY_DEVOPSINUSE" {
  ami = "${lookup(var.AMIS, var.AWS_REGION)}"

  tags {
    Name = "UDEMY"
  }

  instance_type = "t2.micro"

  provisioner "local-exec" {
    command = "echo ${aws_instance.UDEMY_DEVOPSINUSE.private_ip} >> private_ips.txt"
  }
}

output "ip" {
  value = "${aws_instance.UDEMY_DEVOPSINUSE.public_ip}"
}
```

- Remove the `terraform.tfvars` document.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# rm terraform.tfvars
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# ls
terraform.code.tf
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# terraform init

Initializing provider plugins...

The following providers do not have any version constraints in configuration,
so the latest version was installed.

To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.

* provider.aws: version = "~> 2.0"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# terraform apply

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  + aws_instance.UDEMY_DEVOPSINUSE
      id:                           <computed>
      ami:                          "ami-04b8c2001b0bf0c27"
      arn:                          <computed>
      associate_public_ip_address:  <computed>
      availability_zone:            <computed>
      cpu_core_count:               <computed>
      cpu_threads_per_core:         <computed>
      ebs_block_device.#:           <computed>
      ephemeral_block_device.#:     <computed>
      get_password_data:            "false"
      host_id:                      <computed>
      instance_state:               <computed>
      instance_type:                "t2.micro"
      ipv6_address_count:           <computed>
      ipv6_addresses.#:             <computed>
      key_name:                     <computed>
      network_interface.#:          <computed>
      network_interface_id:         <computed>
      password_data:                <computed>
      placement_group:              <computed>
      primary_network_interface_id: <computed>
      private_dns:                  <computed>
      private_ip:                   <computed>
      public_dns:                   <computed>
      public_ip:                    <computed>
      root_block_device.#:          <computed>
      security_groups.#:            <computed>
      source_dest_check:            "true"
      subnet_id:                    <computed>
      tags.%:                       "1"
      tags.Name:                    "UDEMY"
      tenancy:                      <computed>
      volume_tags.%:                <computed>
      vpc_security_group_ids.#:     <computed>


Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

 Enter a value: yes

aws_instance.UDEMY_DEVOPSINUSE: Creating...
  ami:                          "" => "ami-04b8c2001b0bf0c27"
  arn:                          "" => "<computed>"
  associate_public_ip_address:  "" => "<computed>"
  availability_zone:            "" => "<computed>"
  cpu_core_count:               "" => "<computed>"
  cpu_threads_per_core:         "" => "<computed>"
  ebs_block_device.#:           "" => "<computed>"
  ephemeral_block_device.#:     "" => "<computed>"
  get_password_data:            "" => "false"
  host_id:                      "" => "<computed>"
  instance_state:               "" => "<computed>"
  instance_type:                "" => "t2.micro"
  ipv6_address_count:           "" => "<computed>"
  ipv6_addresses.#:             "" => "<computed>"
  key_name:                     "" => "<computed>"
  network_interface.#:          "" => "<computed>"
  network_interface_id:         "" => "<computed>"
  password_data:                "" => "<computed>"
  placement_group:              "" => "<computed>"
  primary_network_interface_id: "" => "<computed>"
  private_dns:                  "" => "<computed>"
  private_ip:                   "" => "<computed>"
  public_dns:                   "" => "<computed>"
  public_ip:                    "" => "<computed>"
  root_block_device.#:          "" => "<computed>"
  security_groups.#:            "" => "<computed>"
  source_dest_check:            "" => "true"
  subnet_id:                    "" => "<computed>"
  tags.%:                       "" => "1"
  tags.Name:                    "" => "UDEMY"
  tenancy:                      "" => "<computed>"
  volume_tags.%:                "" => "<computed>"
  vpc_security_group_ids.#:     "" => "<computed>"

Error: Error applying plan:

1 error(s) occurred:

* aws_instance.UDEMY_DEVOPSINUSE: 1 error(s) occurred:

* aws_instance.UDEMY_DEVOPSINUSE: Error launching source instance: Unsupported: The requested configuration is currently not supported. Please check the documentation for supported configurations.
        status code: 400, request id: e99c53e8-00df-4ad6-b446-9a7e9e77d483

Terraform does not automatically rollback in the face of errors.
Instead, your Terraform state file has been partially updated with
any resources that successfully completed. Please address the error
above and apply again to incrementally change your infrastructure.
```

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform3.png)

- Modify the `terraform.code.tf` file to change `t2.micro` for `a1.medium`.

> `terraform.code.tf`

```bash
# ************************
# vars.tf
# ************************




variable "AWS_REGION" {
  default = "us-east-1"
}

variable "AMIS" {
  type = "map"

  default = {
    # *******************************************
    # https://cloud-images.ubuntu.com/locator/ec2/
    #
    #   US East (N. Virginia) => us-east-1
    #   OS        => UBUNTU Xenial 16.04 LTS
    #   AMI_ID    => ami-04b8c2001b0bf0c27
    #
    #   AMI shortcut (AMAZON MACHINE IMAGE)
    #
    # *******************************************
    us-east-1 = "ami-04b8c2001b0bf0c27"
  }
}

# ************************
# provider.tf
# ************************
provider "aws" {
  shared_credentials_file = "/root/.aws"
  region     = "${var.AWS_REGION}"
}

# ************************
# instance.tf
# ************************
resource "aws_instance" "UDEMY_DEVOPSINUSE" {
  ami = "${lookup(var.AMIS, var.AWS_REGION)}"

  tags {
    Name = "UDEMY"
  }

  instance_type = "a1.medium"

  provisioner "local-exec" {
    command = "echo ${aws_instance.UDEMY_DEVOPSINUSE.private_ip} >> private_ips.txt"
  }
}

output "ip" {
  value = "${aws_instance.UDEMY_DEVOPSINUSE.public_ip}"
}
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# terraform apply

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  + aws_instance.UDEMY_DEVOPSINUSE
      id:                           <computed>
      ami:                          "ami-04b8c2001b0bf0c27"
      arn:                          <computed>
      associate_public_ip_address:  <computed>
      availability_zone:            <computed>
      cpu_core_count:               <computed>
      cpu_threads_per_core:         <computed>
      ebs_block_device.#:           <computed>
      ephemeral_block_device.#:     <computed>
      get_password_data:            "false"
      host_id:                      <computed>
      instance_state:               <computed>
      instance_type:                "a1.medium"
      ipv6_address_count:           <computed>
      ipv6_addresses.#:             <computed>
      key_name:                     <computed>
      network_interface.#:          <computed>
      network_interface_id:         <computed>
      password_data:                <computed>
      placement_group:              <computed>
      primary_network_interface_id: <computed>
      private_dns:                  <computed>
      private_ip:                   <computed>
      public_dns:                   <computed>
      public_ip:                    <computed>
      root_block_device.#:          <computed>
      security_groups.#:            <computed>
      source_dest_check:            "true"
      subnet_id:                    <computed>
      tags.%:                       "1"
      tags.Name:                    "UDEMY"
      tenancy:                      <computed>
      volume_tags.%:                <computed>
      vpc_security_group_ids.#:     <computed>


Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
aws_instance.UDEMY_DEVOPSINUSE: Creating...
  ami:                          "" => "ami-04b8c2001b0bf0c27"
  arn:                          "" => "<computed>"
  associate_public_ip_address:  "" => "<computed>"
  availability_zone:            "" => "<computed>"
  cpu_core_count:               "" => "<computed>"
  cpu_threads_per_core:         "" => "<computed>"
  ebs_block_device.#:           "" => "<computed>"
  ephemeral_block_device.#:     "" => "<computed>"
  get_password_data:            "" => "false"
  host_id:                      "" => "<computed>"
  instance_state:               "" => "<computed>"
  instance_type:                "" => "a1.medium"
  ipv6_address_count:           "" => "<computed>"
  ipv6_addresses.#:             "" => "<computed>"
  key_name:                     "" => "<computed>"
  network_interface.#:          "" => "<computed>"
  network_interface_id:         "" => "<computed>"
  password_data:                "" => "<computed>"
  placement_group:              "" => "<computed>"
  primary_network_interface_id: "" => "<computed>"
  private_dns:                  "" => "<computed>"
  private_ip:                   "" => "<computed>"
  public_dns:                   "" => "<computed>"
  public_ip:                    "" => "<computed>"
  root_block_device.#:          "" => "<computed>"
  security_groups.#:            "" => "<computed>"
  source_dest_check:            "" => "true"
  subnet_id:                    "" => "<computed>"
  tags.%:                       "" => "1"
  tags.Name:                    "" => "UDEMY"
  tenancy:                      "" => "<computed>"
  volume_tags.%:                "" => "<computed>"
  vpc_security_group_ids.#:     "" => "<computed>"
aws_instance.UDEMY_DEVOPSINUSE: Still creating... (10s elapsed)
aws_instance.UDEMY_DEVOPSINUSE: Provisioning with 'local-exec'...
aws_instance.UDEMY_DEVOPSINUSE (local-exec): Executing: ["/bin/sh" "-c" "echo 172.31.30.126 >> private_ips.txt"]
aws_instance.UDEMY_DEVOPSINUSE: Creation complete after 15s (ID: i-024b7c3c6f8517461)

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

ip = 54.145.17.178
```

- Go to https://console.aws.amazon.com/ec2 to check if the instance is running

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform4.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform5.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform6.png)

- We always have to destroy any instance created, otherwise Amazon is going to charge to use it.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform# terraform destroy
aws_instance.UDEMY_DEVOPSINUSE: Refreshing state... (ID: i-024b7c3c6f8517461)

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  - aws_instance.UDEMY_DEVOPSINUSE


Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

aws_instance.UDEMY_DEVOPSINUSE: Destroying... (ID: i-024b7c3c6f8517461)
Please wait for Terraform to exit or data loss may occur.
Gracefully shutting down...
stopping operation...
aws_instance.UDEMY_DEVOPSINUSE: Still destroying... (ID: i-024b7c3c6f8517461, 10s elapsed)
aws_instance.UDEMY_DEVOPSINUSE: Still destroying... (ID: i-024b7c3c6f8517461, 20s elapsed)
aws_instance.UDEMY_DEVOPSINUSE: Still destroying... (ID: i-024b7c3c6f8517461, 30s elapsed)
aws_instance.UDEMY_DEVOPSINUSE: Still destroying... (ID: i-024b7c3c6f8517461, 40s elapsed)
aws_instance.UDEMY_DEVOPSINUSE: Still destroying... (ID: i-024b7c3c6f8517461, 50s elapsed)
aws_instance.UDEMY_DEVOPSINUSE: Destruction complete after 53s

Destroy complete! Resources: 1 destroyed.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/terraform#
```

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToPracticallyUseTerraform7.png)

### 14. Start Kubernetes cluster - kops command

**Start up Kubernetes cluster by using `kops` command**

Please keep in mind that flags:

`--name=kops.devopsinuse.com`

`--state=s3://kops.devopsinuse.com`

`--dns-zone=kops.devopsinuse.com`

has to be adjusted to your domain name you are going to buy or get for free.

```bash
kops create cluster \
  # this is the name of our cluster \
  --name=kops.peelmicro.com \
  # this is S3 bucket on AWS (object storage). It needs to be created on AWS console before executing "kops create -"
  --state=s3://kops.peelmicro.com \
  # Role Based Authorization
  --authorization RBAC \
  # Actual data center in Frankfurt
  --zones=eu-central-1a \
  # How many NODES we want
  --node-count=2 \
  # How powerful EC2 instances we want
  --node-size=t2.micro \
  --master-size=t2.micro \
  # How many MASTERS in k8s cluster we want
  --master-count=1 \
  # Hosted Zone - we need to create it in advance in AWS Route53
  # you can define your own name
  # make sure that you have your own domain name
  --dns-zone=kops.peelmicro.com \
  # this is the name of output folder where
  # kops will generate the "terraform code" file
  --out=devopsinuse_terraform \
  # target is "terraform"
  --target=terraform \
  # You can create this key pair files
  # `ssh-keygen -f ~/.ssh/udemy_devopsinuse
  --ssh-public-key=~/.ssh/<user_name>.pub
```

### 15. How to use kops and create Kubernetes cluster

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster3.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster4.png)

- Create the `kops.peelmicro.com` S3 bucket

1. Go to [AWS Management Console](https://console.aws.amazon.com/console) and look for S3.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster5.png)

2. Click on `[+Create bucket]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster6.png)

3. Put `kops.peelmicro.com` on **Bucket Name** and select `EU Franfurt` on **Region**, then click on `[Create]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster7.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesCluster8.png)

### 16. How to use kops and create Kubernetes cluster (Continue) - Why hosted zone

- Create the `Hosted Zone` AWS Route53

1. Go to [AWS Management Console](https://console.aws.amazon.com/console) and look for Route53.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue.png)

2. Click on the `[Get started now]` button of `DNS Managent` section.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue2.png)

3. Click on `[Create Hosted Zone]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue3.png)

4. Click on `[Create Hosted Zone]` again.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue4.png)

5. Put `kops.peelmicro.com` and click on `[create]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue5.png)

6. Select both `[x]kops.peelmicro.com`.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue6.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue7.png)

- Copy the values:

| Name               | Type | Value                                                                                            |
| ------------------ | ---- | ------------------------------------------------------------------------------------------------ |
| kops.peelmicro.com | NS   | ns-1072.awsdns-06.org<br>ns-1540.awsdns-00.co.uk<br>ns-795.awsdns-35.net<br>ns-228.awsdns-28.com |
| kops.peelmicro.com | SOA  | ns-1072.awsdns-06.org. awsdns-hostmaster.amazon.                                                 |

- Create the `kops.peelmicro.com` subdomain

1. Access to [Acens Customer Control Panel](https://panel.acens.net/sixtinaws/login/login.jsp)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue0.png)

2. Click on `Domain Management`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue0b.png)

3. Select the `peelmicro.com` domain.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue0c.png)

4. Click on `[Update DNS Nameservers]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue0d.png)

5. Copy the current values and put the new ones. Then click on `[Modify DNS]`

| Type | Value         | New value               |
| ---- | ------------- | ----------------------- |
| NS1  | ns3.acens.net | ns-1072.awsdns-06.org   |
| NS2  | ns4.acens.net | ns-1540.awsdns-00.co.uk |
| NS3  | ns7.acens.net | ns-795.awsdns-35.net    |
| NS4  |               | ns-228.awsdns-28.com    |

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue8.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue9.png)

- Generate a key pair file

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterContinue10.png)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ssh-keygen -f ~/.ssh/udemy_devopsinuse
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/udemy_devopsinuse.
Your public key has been saved in /root/.ssh/udemy_devopsinuse.pub.
The key fingerprint is:
SHA256:2g0ejjgli3Mpo+GGmZjlRy/VEcBGmIijdbW+3Vp2K10 root@ubuntu-s-1vcpu-2gb-lon1-01
The key's randomart image is:
+---[RSA 2048]----+
| . . *+.         |
|o o + o..        |
|.o . ..  .       |
|.    .  .        |
|    . o.S.       |
|  ...*.O.=    E  |
|+*=.*o+ = =...   |
|B+.=o..  +....   |
|o. . .  .  ..    |
```

- Ensure the files have been created

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ll ~/.ssh/
total 20
drwx------  2 root root 4096 Mar  7 05:25 ./
drwx------ 12 root root 4096 Mar  6 17:47 ../
-rw-------  1 root root    0 Feb  6 18:59 authorized_keys
-rw-r--r--  1 root root 2880 Feb 27 18:10 known_hosts
-rw-------  1 root root 1675 Mar  7 05:25 udemy_devopsinuse
-rw-r--r--  1 root root  413 Mar  7 05:25 udemy_devopsinuse.pub
```

### 17. How to use kops and create Kubernetes cluster (Demo)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterDemo.png)

- Create the `kops_cluster.sh` document

> kops_cluster.sh

```bash
kops create cluster \
  # this is the name of our cluster \
  --name=kops.peelmicro.com \
  # this is S3 bucket on AWS (object storage). It needs to be created on AWS console before executing "kops create -"
  --state=s3://kops.peelmicro.com \
  # Role Based Authorization
  --authorization RBAC \
  # Actual data center in Frankfurt
  --zones=eu-central-1a \
  # How many NODES we want
  --node-count=2 \
  # How powerful EC2 instances we want
  --node-size=t2.micro \
  --master-size=t2.micro \
  # How many MASTERS in k8s cluster we want
  --master-count=1 \
  # Hosted Zone - we need to create it in advance in AWS Route53
  # you can define your own name
  # make sure that you have your own domain name
  --dns-zone=kops.peelmicro.com \
  # this is the name of output folder where
  # kops will generate the "terraform code" file
  --out=devopsinuse_terraform \
  # target is "terraform"
  --target=terraform \
  # You can create this key pair files
  # `ssh-keygen -f ~/.ssh/udemy_devopsinuse
  --ssh-public-key=~/.ssh/<user_name>.pub
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mkdir kops
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd kops
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops# vi kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops# cat kops_cluster.sh
kops create cluster \
  # this is the name of our cluster \
  --name=kops.peelmicro.com \
  # this is S3 bucket on AWS (object storage). It needs to be created on AWS console before executing "kops create -"
  --state=s3://kops.peelmicro.com \
  # Role Based Authorization
  --authorization RBAC \
  # Actual data center in Frankfurt
  --zones=eu-central-1a \
  # How many NODES we want
  --node-count=2 \
  # How powerful EC2 instances we want
  --node-size=t2.micro \
  --master-size=t2.micro \
  # How many MASTERS in k8s cluster we want
  --master-count=1 \
  # Hosted Zone - we need to create it in advance in AWS Route53
  # you can define your own name
  # make sure that you have your own domain name
  --dns-zone=kops.peelmicro.com \
  # this is the name of output folder where
  # kops will generate the "terraform code" file
  --out=devopsinuse_terraform \
  # target is "terraform"
  --target=terraform \
  # You can create this key pair files
  # `ssh-keygen -f ~/.ssh/udemy_devopsinuse
  --ssh-public-key=~/.ssh/<user_name>.pub
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops#
```

```
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mv kops kops_cluster
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ll kops_cluster/
total 12
drwxr-xr-x  2 root root 4096 Mar  7 05:37 ./
drwx------ 13 root root 4096 Mar  7 05:39 ../
-rw-r--r--  1 root root 1042 Mar  7 05:37 kops_cluster.sh
```

- Execute the script

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# chmod +x kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# kops_cluster.sh
kops_cluster.sh: command not found
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# ls
kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# ./kops_cluster.sh

--name is required
./kops_cluster.sh: line 4: --name=kops.peelmicro.com: command not found
./kops_cluster.sh: line 6: --state=s3://kops.peelmicro.com: No such file or directory
./kops_cluster.sh: line 7: --authorization: command not found
./kops_cluster.sh: line 10: --zones=eu-central-1a: command not found
./kops_cluster.sh: line 12: --node-count=2: command not found
./kops_cluster.sh: line 14: --node-size=t2.micro: command not found
./kops_cluster.sh: line 17: --master-count=1: command not found
./kops_cluster.sh: line 21: --dns-zone=kops.peelmicro.com: command not found
./kops_cluster.sh: line 24: --out=devopsinuse_terraform: command not found
./kops_cluster.sh: line 26: --target=terraform: command not found
./kops_cluster.sh: line 28: user_name: No such file or directory

```

- Remove all the comments

> kops_cluster.sh

```bash
kops create cluster \
  --name=kops.peelmicro.com \
  --state=s3://kops.peelmicro.com \
  --authorization RBAC \
  --zones=eu-central-1a \
  --node-count=2 \
  --node-size=t2.micro \
  --master-size=t2.micro \
  --master-count=1 \
  --dns-zone=kops.peelmicro.com \
  --out=devopsinuse_terraform \
  --target=terraform \
  --ssh-public-key=~/.ssh/udemy_devopsinuse.pub
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# vi kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# cat kops_cluster.sh
kops create cluster \
  --name=kops.peelmicro.com \
  --state=s3://kops.peelmicro.com \
  --authorization RBAC \
  --zones=eu-central-1a \
  --node-count=2 \
  --node-size=t2.micro \
  --master-size=t2.micro \
  --master-count=1 \
  --dns-zone=kops.peelmicro.com \
  --out=devopsinuse_terraform \
  --target=terraform \
  --ssh-public-key=~/.ssh/udemy_devopsinuse.pub
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# chmod +x kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# ./kops_cluster.sh
I0307 07:26:03.988930   30861 create_cluster.go:1351] Using SSH public key: /root/.ssh/udemy_devopsinuse.pub
I0307 07:26:04.511328   30861 create_cluster.go:480] Inferred --cloud=aws from zone "eu-central-1a"
I0307 07:26:04.625312   30861 subnets.go:184] Assigned CIDR 172.20.32.0/19 to subnet eu-central-1a
I0307 07:26:07.168806   30861 executor.go:103] Tasks: 0 done / 73 total; 31 can run
I0307 07:26:07.175562   30861 dnszone.go:242] Check for existing route53 zone to re-use with name "kops.peelmicro.com"
I0307 07:26:07.365814   30861 dnszone.go:249] Existing zone "kops.peelmicro.com." found; will configure TF to reuse
I0307 07:26:07.985164   30861 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator-ca"
I0307 07:26:08.111767   30861 vfs_castore.go:735] Issuing new certificate: "ca"
I0307 07:26:08.347804   30861 executor.go:103] Tasks: 31 done / 73 total; 24 can run
I0307 07:26:09.776200   30861 vfs_castore.go:735] Issuing new certificate: "master"
I0307 07:26:09.830995   30861 vfs_castore.go:735] Issuing new certificate: "kube-controller-manager"
I0307 07:26:10.818009   30861 vfs_castore.go:735] Issuing new certificate: "kubelet-api"
I0307 07:26:10.933228   30861 vfs_castore.go:735] Issuing new certificate: "apiserver-aggregator"
I0307 07:26:11.251961   30861 vfs_castore.go:735] Issuing new certificate: "kube-proxy"
I0307 07:26:11.755188   30861 vfs_castore.go:735] Issuing new certificate: "kubecfg"
I0307 07:26:11.864297   30861 vfs_castore.go:735] Issuing new certificate: "apiserver-proxy-client"
I0307 07:26:12.257490   30861 vfs_castore.go:735] Issuing new certificate: "kops"
I0307 07:26:12.278883   30861 vfs_castore.go:735] Issuing new certificate: "kube-scheduler"
I0307 07:26:12.347420   30861 vfs_castore.go:735] Issuing new certificate: "kubelet"
I0307 07:26:12.613905   30861 executor.go:103] Tasks: 55 done / 73 total; 16 can run
I0307 07:26:12.806160   30861 executor.go:103] Tasks: 71 done / 73 total; 2 can run
I0307 07:26:12.806797   30861 executor.go:103] Tasks: 73 done / 73 total; 0 can run
I0307 07:26:12.817513   30861 target.go:314] Terraform output is in devopsinuse_terraform
I0307 07:26:14.014473   30861 update_cluster.go:290] Exporting kubecfg for cluster
kops has set your kubectl context to kops.peelmicro.com

Terraform output has been placed into devopsinuse_terraform
Run these commands to apply the configuration:
   cd devopsinuse_terraform
   terraform plan
   terraform apply

Suggestions:
 * validate cluster: kops validate cluster
 * list nodes: kubectl get nodes --show-labels
 * ssh to the master: ssh -i ~/.ssh/id_rsa admin@api.kops.peelmicro.com
 * the admin user is specific to Debian. If not using Debian please use the appropriate user based on your OS.
 * read about installing addons at: https://github.com/kubernetes/kops/blob/master/docs/addons.md.
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# tree kops_cluster

Command 'tree' not found, but can be installed with:

snap install tree  # version 3.5, or
apt  install tree

See 'snap info tree' for additional versions.

root@ubuntu-s-1vcpu-2gb-lon1-01:~# apt install tree
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  grub-pc-bin
Use 'apt autoremove' to remove it.
The following NEW packages will be installed:
  tree
0 upgraded, 1 newly installed, 0 to remove and 3 not upgraded.
Need to get 40.7 kB of archives.
After this operation, 105 kB of additional disk space will be used.
Get:1 http://lon1.mirrors.digitalocean.com/ubuntu bionic/universe amd64 tree amd64 1.7.0-5 [40.7 kB]
Fetched 40.7 kB in 0s (2196 kB/s)
Selecting previously unselected package tree.
(Reading database ... 97500 files and directories currently installed.)
Preparing to unpack .../tree_1.7.0-5_amd64.deb ...
Unpacking tree (1.7.0-5) ...
Setting up tree (1.7.0-5) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# tree kops_cluster
kops_cluster
+-- devopsinuse_terraform
¦   +-- data
¦   ¦   +-- aws_iam_role_masters.kops.peelmicro.com_policy
¦   ¦   +-- aws_iam_role_nodes.kops.peelmicro.com_policy
¦   ¦   +-- aws_iam_role_policy_masters.kops.peelmicro.com_policy
¦   ¦   +-- aws_iam_role_policy_nodes.kops.peelmicro.com_policy
¦   ¦   +-- aws_key_pair_kubernetes.kops.peelmicro.com-14f4e587b84d4819f287bedfda85ac26_public_key
¦   ¦   +-- aws_launch_configuration_master-eu-central-1a.masters.kops.peelmicro.com_user_data
¦   ¦   +-- aws_launch_configuration_nodes.kops.peelmicro.com_user_data
¦   +-- kubernetes.tf
+-- kops_cluster.sh

2 directories, 9 files
root@ubuntu-s-1vcpu-2gb-lon1-01:~#
```

- Ensure the `terraform` file has been created with success:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# ls
devopsinuse_terraform  kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# cd devopsinuse_terraform/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# ls
data  kubernetes.tf
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# cat kubernetes.tf
locals = {
  cluster_name                 = "kops.peelmicro.com"
  master_autoscaling_group_ids = ["${aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com.id}"]
  master_security_group_ids    = ["${aws_security_group.masters-kops-peelmicro-com.id}"]
  masters_role_arn             = "${aws_iam_role.masters-kops-peelmicro-com.arn}"
  masters_role_name            = "${aws_iam_role.masters-kops-peelmicro-com.name}"
  node_autoscaling_group_ids   = ["${aws_autoscaling_group.nodes-kops-peelmicro-com.id}"]
  node_security_group_ids      = ["${aws_security_group.nodes-kops-peelmicro-com.id}"]
  node_subnet_ids              = ["${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"]
  nodes_role_arn               = "${aws_iam_role.nodes-kops-peelmicro-com.arn}"
  nodes_role_name              = "${aws_iam_role.nodes-kops-peelmicro-com.name}"
  region                       = "eu-central-1"
  route_table_public_id        = "${aws_route_table.kops-peelmicro-com.id}"
  subnet_eu-central-1a_id      = "${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"
  vpc_cidr_block               = "${aws_vpc.kops-peelmicro-com.cidr_block}"
  vpc_id                       = "${aws_vpc.kops-peelmicro-com.id}"
}

output "cluster_name" {
  value = "kops.peelmicro.com"
}

output "master_autoscaling_group_ids" {
  value = ["${aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com.id}"]
}

output "master_security_group_ids" {
  value = ["${aws_security_group.masters-kops-peelmicro-com.id}"]
}

output "masters_role_arn" {
  value = "${aws_iam_role.masters-kops-peelmicro-com.arn}"
}

output "masters_role_name" {
  value = "${aws_iam_role.masters-kops-peelmicro-com.name}"
}

output "node_autoscaling_group_ids" {
  value = ["${aws_autoscaling_group.nodes-kops-peelmicro-com.id}"]
}

output "node_security_group_ids" {
  value = ["${aws_security_group.nodes-kops-peelmicro-com.id}"]
}

output "node_subnet_ids" {
  value = ["${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"]
}

output "nodes_role_arn" {
  value = "${aws_iam_role.nodes-kops-peelmicro-com.arn}"
}

output "nodes_role_name" {
  value = "${aws_iam_role.nodes-kops-peelmicro-com.name}"
}

output "region" {
  value = "eu-central-1"
}

output "route_table_public_id" {
  value = "${aws_route_table.kops-peelmicro-com.id}"
}

output "subnet_eu-central-1a_id" {
  value = "${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"
}

output "vpc_cidr_block" {
  value = "${aws_vpc.kops-peelmicro-com.cidr_block}"
}

output "vpc_id" {
  value = "${aws_vpc.kops-peelmicro-com.id}"
}

provider "aws" {
  region = "eu-central-1"
}

resource "aws_autoscaling_group" "master-eu-central-1a-masters-kops-peelmicro-com" {
  name                 = "master-eu-central-1a.masters.kops.peelmicro.com"
  launch_configuration = "${aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com.id}"
  max_size             = 1
  min_size             = 1
  vpc_zone_identifier  = ["${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"]

  tag = {
    key                 = "KubernetesCluster"
    value               = "kops.peelmicro.com"
    propagate_at_launch = true
  }

  tag = {
    key                 = "Name"
    value               = "master-eu-central-1a.masters.kops.peelmicro.com"
    propagate_at_launch = true
  }

  tag = {
    key                 = "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup"
    value               = "master-eu-central-1a"
    propagate_at_launch = true
  }

  tag = {
    key                 = "k8s.io/role/master"
    value               = "1"
    propagate_at_launch = true
  }

  metrics_granularity = "1Minute"
  enabled_metrics     = ["GroupDesiredCapacity", "GroupInServiceInstances", "GroupMaxSize", "GroupMinSize", "GroupPendingInstances", "GroupStandbyInstances", "GroupTerminatingInstances", "GroupTotalInstances"]
}

resource "aws_autoscaling_group" "nodes-kops-peelmicro-com" {
  name                 = "nodes.kops.peelmicro.com"
  launch_configuration = "${aws_launch_configuration.nodes-kops-peelmicro-com.id}"
  max_size             = 2
  min_size             = 2
  vpc_zone_identifier  = ["${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"]

  tag = {
    key                 = "KubernetesCluster"
    value               = "kops.peelmicro.com"
    propagate_at_launch = true
  }

  tag = {
    key                 = "Name"
    value               = "nodes.kops.peelmicro.com"
    propagate_at_launch = true
  }

  tag = {
    key                 = "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup"
    value               = "nodes"
    propagate_at_launch = true
  }

  tag = {
    key                 = "k8s.io/role/node"
    value               = "1"
    propagate_at_launch = true
  }

  metrics_granularity = "1Minute"
  enabled_metrics     = ["GroupDesiredCapacity", "GroupInServiceInstances", "GroupMaxSize", "GroupMinSize", "GroupPendingInstances", "GroupStandbyInstances", "GroupTerminatingInstances", "GroupTotalInstances"]
}

resource "aws_ebs_volume" "a-etcd-events-kops-peelmicro-com" {
  availability_zone = "eu-central-1a"
  size              = 20
  type              = "gp2"
  encrypted         = false

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "a.etcd-events.kops.peelmicro.com"
    "k8s.io/etcd/events"                       = "a/a"
    "k8s.io/role/master"                       = "1"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_ebs_volume" "a-etcd-main-kops-peelmicro-com" {
  availability_zone = "eu-central-1a"
  size              = 20
  type              = "gp2"
  encrypted         = false

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "a.etcd-main.kops.peelmicro.com"
    "k8s.io/etcd/main"                         = "a/a"
    "k8s.io/role/master"                       = "1"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_iam_instance_profile" "masters-kops-peelmicro-com" {
  name = "masters.kops.peelmicro.com"
  role = "${aws_iam_role.masters-kops-peelmicro-com.name}"
}

resource "aws_iam_instance_profile" "nodes-kops-peelmicro-com" {
  name = "nodes.kops.peelmicro.com"
  role = "${aws_iam_role.nodes-kops-peelmicro-com.name}"
}

resource "aws_iam_role" "masters-kops-peelmicro-com" {
  name               = "masters.kops.peelmicro.com"
  assume_role_policy = "${file("${path.module}/data/aws_iam_role_masters.kops.peelmicro.com_policy")}"
}

resource "aws_iam_role" "nodes-kops-peelmicro-com" {
  name               = "nodes.kops.peelmicro.com"
  assume_role_policy = "${file("${path.module}/data/aws_iam_role_nodes.kops.peelmicro.com_policy")}"
}

resource "aws_iam_role_policy" "masters-kops-peelmicro-com" {
  name   = "masters.kops.peelmicro.com"
  role   = "${aws_iam_role.masters-kops-peelmicro-com.name}"
  policy = "${file("${path.module}/data/aws_iam_role_policy_masters.kops.peelmicro.com_policy")}"
}

resource "aws_iam_role_policy" "nodes-kops-peelmicro-com" {
  name   = "nodes.kops.peelmicro.com"
  role   = "${aws_iam_role.nodes-kops-peelmicro-com.name}"
  policy = "${file("${path.module}/data/aws_iam_role_policy_nodes.kops.peelmicro.com_policy")}"
}

resource "aws_internet_gateway" "kops-peelmicro-com" {
  vpc_id = "${aws_vpc.kops-peelmicro-com.id}"

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "kops.peelmicro.com"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_key_pair" "kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26" {
  key_name   = "kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26"
  public_key = "${file("${path.module}/data/aws_key_pair_kubernetes.kops.peelmicro.com-14f4e587b84d4819f287bedfda85ac26_public_key")}"
}

resource "aws_launch_configuration" "master-eu-central-1a-masters-kops-peelmicro-com" {
  name_prefix                 = "master-eu-central-1a.masters.kops.peelmicro.com-"
  image_id                    = "ami-0692cb5ffed92e0c7"
  instance_type               = "t2.micro"
  key_name                    = "${aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26.id}"
  iam_instance_profile        = "${aws_iam_instance_profile.masters-kops-peelmicro-com.id}"
  security_groups             = ["${aws_security_group.masters-kops-peelmicro-com.id}"]
  associate_public_ip_address = true
  user_data                   = "${file("${path.module}/data/aws_launch_configuration_master-eu-central-1a.masters.kops.peelmicro.com_user_data")}"

  root_block_device = {
    volume_type           = "gp2"
    volume_size           = 64
    delete_on_termination = true
  }

  lifecycle = {
    create_before_destroy = true
  }

  enable_monitoring = false
}

resource "aws_launch_configuration" "nodes-kops-peelmicro-com" {
  name_prefix                 = "nodes.kops.peelmicro.com-"
  image_id                    = "ami-0692cb5ffed92e0c7"
  instance_type               = "t2.micro"
  key_name                    = "${aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26.id}"
  iam_instance_profile        = "${aws_iam_instance_profile.nodes-kops-peelmicro-com.id}"
  security_groups             = ["${aws_security_group.nodes-kops-peelmicro-com.id}"]
  associate_public_ip_address = true
  user_data                   = "${file("${path.module}/data/aws_launch_configuration_nodes.kops.peelmicro.com_user_data")}"

  root_block_device = {
    volume_type           = "gp2"
    volume_size           = 128
    delete_on_termination = true
  }

  lifecycle = {
    create_before_destroy = true
  }

  enable_monitoring = false
}

resource "aws_route" "0-0-0-0--0" {
  route_table_id         = "${aws_route_table.kops-peelmicro-com.id}"
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = "${aws_internet_gateway.kops-peelmicro-com.id}"
}

resource "aws_route_table" "kops-peelmicro-com" {
  vpc_id = "${aws_vpc.kops-peelmicro-com.id}"

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "kops.peelmicro.com"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
    "kubernetes.io/kops/role"                  = "public"
  }
}

resource "aws_route_table_association" "eu-central-1a-kops-peelmicro-com" {
  subnet_id      = "${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"
  route_table_id = "${aws_route_table.kops-peelmicro-com.id}"
}

resource "aws_security_group" "masters-kops-peelmicro-com" {
  name        = "masters.kops.peelmicro.com"
  vpc_id      = "${aws_vpc.kops-peelmicro-com.id}"
  description = "Security group for masters"

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "masters.kops.peelmicro.com"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_security_group" "nodes-kops-peelmicro-com" {
  name        = "nodes.kops.peelmicro.com"
  vpc_id      = "${aws_vpc.kops-peelmicro-com.id}"
  description = "Security group for nodes"

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "nodes.kops.peelmicro.com"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_security_group_rule" "all-master-to-master" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.masters-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.masters-kops-peelmicro-com.id}"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
}

resource "aws_security_group_rule" "all-master-to-node" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.masters-kops-peelmicro-com.id}"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
}

resource "aws_security_group_rule" "all-node-to-node" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
}

resource "aws_security_group_rule" "https-external-to-master-0-0-0-0--0" {
  type              = "ingress"
  security_group_id = "${aws_security_group.masters-kops-peelmicro-com.id}"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "master-egress" {
  type              = "egress"
  security_group_id = "${aws_security_group.masters-kops-peelmicro-com.id}"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "node-egress" {
  type              = "egress"
  security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "node-to-master-tcp-1-2379" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.masters-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port                = 1
  to_port                  = 2379
  protocol                 = "tcp"
}

resource "aws_security_group_rule" "node-to-master-tcp-2382-4000" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.masters-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port                = 2382
  to_port                  = 4000
  protocol                 = "tcp"
}

resource "aws_security_group_rule" "node-to-master-tcp-4003-65535" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.masters-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port                = 4003
  to_port                  = 65535
  protocol                 = "tcp"
}

resource "aws_security_group_rule" "node-to-master-udp-1-65535" {
  type                     = "ingress"
  security_group_id        = "${aws_security_group.masters-kops-peelmicro-com.id}"
  source_security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port                = 1
  to_port                  = 65535
  protocol                 = "udp"
}

resource "aws_security_group_rule" "ssh-external-to-master-0-0-0-0--0" {
  type              = "ingress"
  security_group_id = "${aws_security_group.masters-kops-peelmicro-com.id}"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "ssh-external-to-node-0-0-0-0--0" {
  type              = "ingress"
  security_group_id = "${aws_security_group.nodes-kops-peelmicro-com.id}"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_subnet" "eu-central-1a-kops-peelmicro-com" {
  vpc_id            = "${aws_vpc.kops-peelmicro-com.id}"
  cidr_block        = "172.20.32.0/19"
  availability_zone = "eu-central-1a"

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "eu-central-1a.kops.peelmicro.com"
    SubnetType                                 = "Public"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
    "kubernetes.io/role/elb"                   = "1"
  }
}

resource "aws_vpc" "kops-peelmicro-com" {
  cidr_block           = "172.20.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "kops.peelmicro.com"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_vpc_dhcp_options" "kops-peelmicro-com" {
  domain_name         = "eu-central-1.compute.internal"
  domain_name_servers = ["AmazonProvidedDNS"]

  tags = {
    KubernetesCluster                          = "kops.peelmicro.com"
    Name                                       = "kops.peelmicro.com"
    "kubernetes.io/cluster/kops.peelmicro.com" = "owned"
  }
}

resource "aws_vpc_dhcp_options_association" "kops-peelmicro-com" {
  vpc_id          = "${aws_vpc.kops-peelmicro-com.id}"
  dhcp_options_id = "${aws_vpc_dhcp_options.kops-peelmicro-com.id}"
}

terraform = {
  required_version = ">= 0.9.3"
}
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform#
```

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterDemo2.png)

- Execute `terraform init`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# terraform init

Initializing provider plugins...
- Checking for available provider plugins on https://releases.hashicorp.com...
- Downloading plugin for provider "aws" (2.0.0)...

The following providers do not have any version constraints in configuration,
so the latest version was installed.

To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.

* provider.aws: version = "~> 2.0"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform#

```

- Exeute `terraform apply`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# terraform apply

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  + aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      availability_zones.#:                          <computed>
      default_cooldown:                              <computed>
      desired_capacity:                              <computed>
      enabled_metrics.#:                             "8"
      enabled_metrics.119681000:                     "GroupStandbyInstances"
      enabled_metrics.1940933563:                    "GroupTotalInstances"
      enabled_metrics.308948767:                     "GroupPendingInstances"
      enabled_metrics.3267518000:                    "GroupTerminatingInstances"
      enabled_metrics.3394537085:                    "GroupDesiredCapacity"
      enabled_metrics.3551801763:                    "GroupInServiceInstances"
      enabled_metrics.4118539418:                    "GroupMinSize"
      enabled_metrics.4136111317:                    "GroupMaxSize"
      force_delete:                                  "false"
      health_check_grace_period:                     "300"
      health_check_type:                             <computed>
      launch_configuration:                          "${aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com.id}"
      load_balancers.#:                              <computed>
      max_size:                                      "1"
      metrics_granularity:                           "1Minute"
      min_size:                                      "1"
      name:                                          "master-eu-central-1a.masters.kops.peelmicro.com"
      protect_from_scale_in:                         "false"
      service_linked_role_arn:                       <computed>
      tag.#:                                         "4"
      tag.1601041186.key:                            "k8s.io/role/master"
      tag.1601041186.propagate_at_launch:            "true"
      tag.1601041186.value:                          "1"
      tag.296694174.key:                             "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup"
      tag.296694174.propagate_at_launch:             "true"
      tag.296694174.value:                           "master-eu-central-1a"
      tag.3218595536.key:                            "Name"
      tag.3218595536.propagate_at_launch:            "true"
      tag.3218595536.value:                          "master-eu-central-1a.masters.kops.peelmicro.com"
      tag.681420748.key:                             "KubernetesCluster"
      tag.681420748.propagate_at_launch:             "true"
      tag.681420748.value:                           "kops.peelmicro.com"
      target_group_arns.#:                           <computed>
      vpc_zone_identifier.#:                         <computed>
      wait_for_capacity_timeout:                     "10m"

  + aws_autoscaling_group.nodes-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      availability_zones.#:                          <computed>
      default_cooldown:                              <computed>
      desired_capacity:                              <computed>
      enabled_metrics.#:                             "8"
      enabled_metrics.119681000:                     "GroupStandbyInstances"
      enabled_metrics.1940933563:                    "GroupTotalInstances"
      enabled_metrics.308948767:                     "GroupPendingInstances"
      enabled_metrics.3267518000:                    "GroupTerminatingInstances"
      enabled_metrics.3394537085:                    "GroupDesiredCapacity"
      enabled_metrics.3551801763:                    "GroupInServiceInstances"
      enabled_metrics.4118539418:                    "GroupMinSize"
      enabled_metrics.4136111317:                    "GroupMaxSize"
      force_delete:                                  "false"
      health_check_grace_period:                     "300"
      health_check_type:                             <computed>
      launch_configuration:                          "${aws_launch_configuration.nodes-kops-peelmicro-com.id}"
      load_balancers.#:                              <computed>
      max_size:                                      "2"
      metrics_granularity:                           "1Minute"
      min_size:                                      "2"
      name:                                          "nodes.kops.peelmicro.com"
      protect_from_scale_in:                         "false"
      service_linked_role_arn:                       <computed>
      tag.#:                                         "4"
      tag.1967977115.key:                            "k8s.io/role/node"
      tag.1967977115.propagate_at_launch:            "true"
      tag.1967977115.value:                          "1"
      tag.3438852489.key:                            "Name"
      tag.3438852489.propagate_at_launch:            "true"
      tag.3438852489.value:                          "nodes.kops.peelmicro.com"
      tag.681420748.key:                             "KubernetesCluster"
      tag.681420748.propagate_at_launch:             "true"
      tag.681420748.value:                           "kops.peelmicro.com"
      tag.859419842.key:                             "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup"
      tag.859419842.propagate_at_launch:             "true"
      tag.859419842.value:                           "nodes"
      target_group_arns.#:                           <computed>
      vpc_zone_identifier.#:                         <computed>
      wait_for_capacity_timeout:                     "10m"

  + aws_ebs_volume.a-etcd-events-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      availability_zone:                             "eu-central-1a"
      encrypted:                                     "false"
      iops:                                          <computed>
      kms_key_id:                                    <computed>
      size:                                          "20"
      snapshot_id:                                   <computed>
      tags.%:                                        "5"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "a.etcd-events.kops.peelmicro.com"
      tags.k8s.io/etcd/events:                       "a/a"
      tags.k8s.io/role/master:                       "1"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      type:                                          "gp2"

  + aws_ebs_volume.a-etcd-main-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      availability_zone:                             "eu-central-1a"
      encrypted:                                     "false"
      iops:                                          <computed>
      kms_key_id:                                    <computed>
      size:                                          "20"
      snapshot_id:                                   <computed>
      tags.%:                                        "5"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "a.etcd-main.kops.peelmicro.com"
      tags.k8s.io/etcd/main:                         "a/a"
      tags.k8s.io/role/master:                       "1"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      type:                                          "gp2"

  + aws_iam_instance_profile.masters-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      create_date:                                   <computed>
      name:                                          "masters.kops.peelmicro.com"
      path:                                          "/"
      role:                                          "masters.kops.peelmicro.com"
      roles.#:                                       <computed>
      unique_id:                                     <computed>

  + aws_iam_instance_profile.nodes-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      create_date:                                   <computed>
      name:                                          "nodes.kops.peelmicro.com"
      path:                                          "/"
      role:                                          "nodes.kops.peelmicro.com"
      roles.#:                                       <computed>
      unique_id:                                     <computed>

  + aws_iam_role.masters-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      assume_role_policy:                            "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": { \"Service\": \"ec2.amazonaws.com\"},\n      \"Action\": \"sts:AssumeRole\"\n    }\n  ]\n}"
      create_date:                                   <computed>
      force_detach_policies:                         "false"
      max_session_duration:                          "3600"
      name:                                          "masters.kops.peelmicro.com"
      path:                                          "/"
      unique_id:                                     <computed>

  + aws_iam_role.nodes-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      assume_role_policy:                            "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": { \"Service\": \"ec2.amazonaws.com\"},\n      \"Action\": \"sts:AssumeRole\"\n    }\n  ]\n}"
      create_date:                                   <computed>
      force_detach_policies:                         "false"
      max_session_duration:                          "3600"
      name:                                          "nodes.kops.peelmicro.com"
      path:                                          "/"
      unique_id:                                     <computed>

  + aws_iam_role_policy.masters-kops-peelmicro-com
      id:                                            <computed>
      name:                                          "masters.kops.peelmicro.com"
      policy:                                        "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:DescribeInstances\",\n        \"ec2:DescribeRegions\",\n        \"ec2:DescribeRouteTables\",\n        \"ec2:DescribeSecurityGroups\",\n        \"ec2:DescribeSubnets\",\n        \"ec2:DescribeVolumes\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:CreateSecurityGroup\",\n        \"ec2:CreateTags\",\n        \"ec2:CreateVolume\",\n        \"ec2:DescribeVolumesModifications\",\n        \"ec2:ModifyInstanceAttribute\",\n        \"ec2:ModifyVolume\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:AttachVolume\",\n        \"ec2:AuthorizeSecurityGroupIngress\",\n        \"ec2:CreateRoute\",\n        \"ec2:DeleteRoute\",\n        \"ec2:DeleteSecurityGroup\",\n        \"ec2:DeleteVolume\",\n        \"ec2:DetachVolume\",\n        \"ec2:RevokeSecurityGroupIngress\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ],\n      \"Condition\": {\n        \"StringEquals\": {\n          \"ec2:ResourceTag/KubernetesCluster\": \"kops.peelmicro.com\"\n        }\n      }\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"autoscaling:DescribeAutoScalingGroups\",\n        \"autoscaling:DescribeLaunchConfigurations\",\n        \"autoscaling:DescribeTags\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"autoscaling:SetDesiredCapacity\",\n        \"autoscaling:TerminateInstanceInAutoScalingGroup\",\n        \"autoscaling:UpdateAutoScalingGroup\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ],\n      \"Condition\": {\n        \"StringEquals\": {\n          \"autoscaling:ResourceTag/KubernetesCluster\": \"kops.peelmicro.com\"\n        }\n      }\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"elasticloadbalancing:AddTags\",\n        \"elasticloadbalancing:AttachLoadBalancerToSubnets\",\n        \"elasticloadbalancing:ApplySecurityGroupsToLoadBalancer\",\n        \"elasticloadbalancing:CreateLoadBalancer\",\n        \"elasticloadbalancing:CreateLoadBalancerPolicy\",\n        \"elasticloadbalancing:CreateLoadBalancerListeners\",\n        \"elasticloadbalancing:ConfigureHealthCheck\",\n        \"elasticloadbalancing:DeleteLoadBalancer\",\n        \"elasticloadbalancing:DeleteLoadBalancerListeners\",\n        \"elasticloadbalancing:DescribeLoadBalancers\",\n        \"elasticloadbalancing:DescribeLoadBalancerAttributes\",\n        \"elasticloadbalancing:DetachLoadBalancerFromSubnets\",\n        \"elasticloadbalancing:DeregisterInstancesFromLoadBalancer\",\n        \"elasticloadbalancing:ModifyLoadBalancerAttributes\",\n        \"elasticloadbalancing:RegisterInstancesWithLoadBalancer\",\n        \"elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:DescribeVpcs\",\n        \"elasticloadbalancing:AddTags\",\n        \"elasticloadbalancing:CreateListener\",\n        \"elasticloadbalancing:CreateTargetGroup\",\n        \"elasticloadbalancing:DeleteListener\",\n        \"elasticloadbalancing:DeleteTargetGroup\",\n        \"elasticloadbalancing:DescribeListeners\",\n        \"elasticloadbalancing:DescribeLoadBalancerPolicies\",\n        \"elasticloadbalancing:DescribeTargetGroups\",\n        \"elasticloadbalancing:DescribeTargetHealth\",\n        \"elasticloadbalancing:ModifyListener\",\n        \"elasticloadbalancing:ModifyTargetGroup\",\n        \"elasticloadbalancing:RegisterTargets\",\n        \"elasticloadbalancing:SetLoadBalancerPoliciesOfListener\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"iam:ListServerCertificates\",\n        \"iam:GetServerCertificate\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:GetBucketLocation\",\n        \"s3:ListBucket\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::kops.peelmicro.com\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:Get*\"\n      ],\n      \"Resource\": \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/*\"\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"route53:ChangeResourceRecordSets\",\n        \"route53:ListResourceRecordSets\",\n        \"route53:GetHostedZone\"\n      ],\n      \"Resource\": [\n        \"arn:aws:route53:::hostedzone/ZQF46NG2DUXIJ\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"route53:GetChange\"\n      ],\n      \"Resource\": [\n        \"arn:aws:route53:::change/*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"route53:ListHostedZones\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ecr:GetAuthorizationToken\",\n        \"ecr:BatchCheckLayerAvailability\",\n        \"ecr:GetDownloadUrlForLayer\",\n        \"ecr:GetRepositoryPolicy\",\n        \"ecr:DescribeRepositories\",\n        \"ecr:ListImages\",\n        \"ecr:BatchGetImage\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    }\n  ]\n}"
      role:                                          "masters.kops.peelmicro.com"

  + aws_iam_role_policy.nodes-kops-peelmicro-com
      id:                                            <computed>
      name:                                          "nodes.kops.peelmicro.com"
      policy:                                        "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:DescribeInstances\",\n        \"ec2:DescribeRegions\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:GetBucketLocation\",\n        \"s3:ListBucket\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::kops.peelmicro.com\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:Get*\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/addons/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/cluster.spec\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/config\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/instancegroup/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/issued/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/private/kube-proxy/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/private/kubelet/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/ssh/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/secrets/dockerconfig\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ecr:GetAuthorizationToken\",\n        \"ecr:BatchCheckLayerAvailability\",\n        \"ecr:GetDownloadUrlForLayer\",\n        \"ecr:GetRepositoryPolicy\",\n        \"ecr:DescribeRepositories\",\n        \"ecr:ListImages\",\n        \"ecr:BatchGetImage\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    }\n  ]\n}"
      role:                                          "nodes.kops.peelmicro.com"

  + aws_internet_gateway.kops-peelmicro-com
      id:                                            <computed>
      owner_id:                                      <computed>
      tags.%:                                        "3"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "kops.peelmicro.com"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      vpc_id:                                        "${aws_vpc.kops-peelmicro-com.id}"

  + aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26
      id:                                            <computed>
      fingerprint:                                   <computed>
      key_name:                                      "kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26"
      public_key:                                    "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDjBXziCHemhPndqIdzwKXyTw32UdZs+OVUWvCpwy1pRubg8oZpbFXQ92uGvWVFhbIh8wYv7bgmxi6Gaw8xbdBiDoOwx18PdEgmbcFw7O0tXKUMoke/tn3izeUbliNyD21OwSMwkNoaUJqkBJ2fHKjOrDxUGP/5M6iLfgzXTD/6oDG2USLoHIZBQtRBivb/k8IbW6dAveHhziuG87KtcW0lti0n4denWJV8R6fMEXLEaOTbtD17LOfQGWK8la1IwmNVhPuKMSBUOjfNk2sVv7dRO6EL+zK8WvAagnRl15yX3i097Lg6ql5Hvukk1aeJ5QCZa78hnYYDFL6d1DHbOgi1 root@ubuntu-s-1vcpu-2gb-lon1-01"

  + aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com
      id:                                            <computed>
      associate_public_ip_address:                   "true"
      ebs_block_device.#:                            <computed>
      ebs_optimized:                                 <computed>
      enable_monitoring:                             "false"
      iam_instance_profile:                          "${aws_iam_instance_profile.masters-kops-peelmicro-com.id}"
      image_id:                                      "ami-0692cb5ffed92e0c7"
      instance_type:                                 "t2.micro"
      key_name:                                      "${aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26.id}"
      name:                                          <computed>
      name_prefix:                                   "master-eu-central-1a.masters.kops.peelmicro.com-"
      root_block_device.#:                           "1"
      root_block_device.0.delete_on_termination:     "true"
      root_block_device.0.iops:                      <computed>
      root_block_device.0.volume_size:               "64"
      root_block_device.0.volume_type:               "gp2"
      security_groups.#:                             <computed>
      user_data:                                     "c4de9593d17ce259846182486013d03d8782e455"

  + aws_launch_configuration.nodes-kops-peelmicro-com
      id:                                            <computed>
      associate_public_ip_address:                   "true"
      ebs_block_device.#:                            <computed>
      ebs_optimized:                                 <computed>
      enable_monitoring:                             "false"
      iam_instance_profile:                          "${aws_iam_instance_profile.nodes-kops-peelmicro-com.id}"
      image_id:                                      "ami-0692cb5ffed92e0c7"
      instance_type:                                 "t2.micro"
      key_name:                                      "${aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26.id}"
      name:                                          <computed>
      name_prefix:                                   "nodes.kops.peelmicro.com-"
      root_block_device.#:                           "1"
      root_block_device.0.delete_on_termination:     "true"
      root_block_device.0.iops:                      <computed>
      root_block_device.0.volume_size:               "128"
      root_block_device.0.volume_type:               "gp2"
      security_groups.#:                             <computed>
      user_data:                                     "0211e7563e5b67305d61bb6211bceef691e20c32"

  + aws_route.0-0-0-0--0
      id:                                            <computed>
      destination_cidr_block:                        "0.0.0.0/0"
      destination_prefix_list_id:                    <computed>
      egress_only_gateway_id:                        <computed>
      gateway_id:                                    "${aws_internet_gateway.kops-peelmicro-com.id}"
      instance_id:                                   <computed>
      instance_owner_id:                             <computed>
      nat_gateway_id:                                <computed>
      network_interface_id:                          <computed>
      origin:                                        <computed>
      route_table_id:                                "${aws_route_table.kops-peelmicro-com.id}"
      state:                                         <computed>

  + aws_route_table.kops-peelmicro-com
      id:                                            <computed>
      owner_id:                                      <computed>
      propagating_vgws.#:                            <computed>
      route.#:                                       <computed>
      tags.%:                                        "4"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "kops.peelmicro.com"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      tags.kubernetes.io/kops/role:                  "public"
      vpc_id:                                        "${aws_vpc.kops-peelmicro-com.id}"

  + aws_route_table_association.eu-central-1a-kops-peelmicro-com
      id:                                            <computed>
      route_table_id:                                "${aws_route_table.kops-peelmicro-com.id}"
      subnet_id:                                     "${aws_subnet.eu-central-1a-kops-peelmicro-com.id}"

  + aws_security_group.masters-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      description:                                   "Security group for masters"
      egress.#:                                      <computed>
      ingress.#:                                     <computed>
      name:                                          "masters.kops.peelmicro.com"
      owner_id:                                      <computed>
      revoke_rules_on_delete:                        "false"
      tags.%:                                        "3"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "masters.kops.peelmicro.com"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      vpc_id:                                        "${aws_vpc.kops-peelmicro-com.id}"

  + aws_security_group.nodes-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      description:                                   "Security group for nodes"
      egress.#:                                      <computed>
      ingress.#:                                     <computed>
      name:                                          "nodes.kops.peelmicro.com"
      owner_id:                                      <computed>
      revoke_rules_on_delete:                        "false"
      tags.%:                                        "3"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "nodes.kops.peelmicro.com"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      vpc_id:                                        "${aws_vpc.kops-peelmicro-com.id}"

  + aws_security_group_rule.all-master-to-master
      id:                                            <computed>
      from_port:                                     "0"
      protocol:                                      "-1"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.masters-kops-peelmicro-com.id}"
      to_port:                                       "0"
      type:                                          "ingress"

  + aws_security_group_rule.all-master-to-node
      id:                                            <computed>
      from_port:                                     "0"
      protocol:                                      "-1"
      security_group_id:                             "${aws_security_group.nodes-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.masters-kops-peelmicro-com.id}"
      to_port:                                       "0"
      type:                                          "ingress"

  + aws_security_group_rule.all-node-to-node
      id:                                            <computed>
      from_port:                                     "0"
      protocol:                                      "-1"
      security_group_id:                             "${aws_security_group.nodes-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.nodes-kops-peelmicro-com.id}"
      to_port:                                       "0"
      type:                                          "ingress"

  + aws_security_group_rule.https-external-to-master-0-0-0-0--0
      id:                                            <computed>
      cidr_blocks.#:                                 "1"
      cidr_blocks.0:                                 "0.0.0.0/0"
      from_port:                                     "443"
      protocol:                                      "tcp"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      <computed>
      to_port:                                       "443"
      type:                                          "ingress"

  + aws_security_group_rule.master-egress
      id:                                            <computed>
      cidr_blocks.#:                                 "1"
      cidr_blocks.0:                                 "0.0.0.0/0"
      from_port:                                     "0"
      protocol:                                      "-1"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      <computed>
      to_port:                                       "0"
      type:                                          "egress"

  + aws_security_group_rule.node-egress
      id:                                            <computed>
      cidr_blocks.#:                                 "1"
      cidr_blocks.0:                                 "0.0.0.0/0"
      from_port:                                     "0"
      protocol:                                      "-1"
      security_group_id:                             "${aws_security_group.nodes-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      <computed>
      to_port:                                       "0"
      type:                                          "egress"

  + aws_security_group_rule.node-to-master-tcp-1-2379
      id:                                            <computed>
      from_port:                                     "1"
      protocol:                                      "tcp"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.nodes-kops-peelmicro-com.id}"
      to_port:                                       "2379"
      type:                                          "ingress"

  + aws_security_group_rule.node-to-master-tcp-2382-4000
      id:                                            <computed>
      from_port:                                     "2382"
      protocol:                                      "tcp"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.nodes-kops-peelmicro-com.id}"
      to_port:                                       "4000"
      type:                                          "ingress"

  + aws_security_group_rule.node-to-master-tcp-4003-65535
      id:                                            <computed>
      from_port:                                     "4003"
      protocol:                                      "tcp"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.nodes-kops-peelmicro-com.id}"
      to_port:                                       "65535"
      type:                                          "ingress"

  + aws_security_group_rule.node-to-master-udp-1-65535
      id:                                            <computed>
      from_port:                                     "1"
      protocol:                                      "udp"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      "${aws_security_group.nodes-kops-peelmicro-com.id}"
      to_port:                                       "65535"
      type:                                          "ingress"

  + aws_security_group_rule.ssh-external-to-master-0-0-0-0--0
      id:                                            <computed>
      cidr_blocks.#:                                 "1"
      cidr_blocks.0:                                 "0.0.0.0/0"
      from_port:                                     "22"
      protocol:                                      "tcp"
      security_group_id:                             "${aws_security_group.masters-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      <computed>
      to_port:                                       "22"
      type:                                          "ingress"

  + aws_security_group_rule.ssh-external-to-node-0-0-0-0--0
      id:                                            <computed>
      cidr_blocks.#:                                 "1"
      cidr_blocks.0:                                 "0.0.0.0/0"
      from_port:                                     "22"
      protocol:                                      "tcp"
      security_group_id:                             "${aws_security_group.nodes-kops-peelmicro-com.id}"
      self:                                          "false"
      source_security_group_id:                      <computed>
      to_port:                                       "22"
      type:                                          "ingress"

  + aws_subnet.eu-central-1a-kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      assign_ipv6_address_on_creation:               "false"
      availability_zone:                             "eu-central-1a"
      availability_zone_id:                          <computed>
      cidr_block:                                    "172.20.32.0/19"
      ipv6_cidr_block:                               <computed>
      ipv6_cidr_block_association_id:                <computed>
      map_public_ip_on_launch:                       "false"
      owner_id:                                      <computed>
      tags.%:                                        "5"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "eu-central-1a.kops.peelmicro.com"
      tags.SubnetType:                               "Public"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"
      tags.kubernetes.io/role/elb:                   "1"
      vpc_id:                                        "${aws_vpc.kops-peelmicro-com.id}"

  + aws_vpc.kops-peelmicro-com
      id:                                            <computed>
      arn:                                           <computed>
      assign_generated_ipv6_cidr_block:              "false"
      cidr_block:                                    "172.20.0.0/16"
      default_network_acl_id:                        <computed>
      default_route_table_id:                        <computed>
      default_security_group_id:                     <computed>
      dhcp_options_id:                               <computed>
      enable_classiclink:                            <computed>
      enable_classiclink_dns_support:                <computed>
      enable_dns_hostnames:                          "true"
      enable_dns_support:                            "true"
      instance_tenancy:                              "default"
      ipv6_association_id:                           <computed>
      ipv6_cidr_block:                               <computed>
      main_route_table_id:                           <computed>
      owner_id:                                      <computed>
      tags.%:                                        "3"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "kops.peelmicro.com"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"

  + aws_vpc_dhcp_options.kops-peelmicro-com
      id:                                            <computed>
      domain_name:                                   "eu-central-1.compute.internal"
      domain_name_servers.#:                         "1"
      domain_name_servers.0:                         "AmazonProvidedDNS"
      owner_id:                                      <computed>
      tags.%:                                        "3"
      tags.KubernetesCluster:                        "kops.peelmicro.com"
      tags.Name:                                     "kops.peelmicro.com"
      tags.kubernetes.io/cluster/kops.peelmicro.com: "owned"

  + aws_vpc_dhcp_options_association.kops-peelmicro-com
      id:                                            <computed>
      dhcp_options_id:                               "${aws_vpc_dhcp_options.kops-peelmicro-com.id}"
      vpc_id:                                        "${aws_vpc.kops-peelmicro-com.id}"


Plan: 35 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

```

- Enter `yes` to approve it.

```bash
  Enter a value: yes

aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Creating...
  arn:                                           "" => "<computed>"
  availability_zone:                             "" => "eu-central-1a"
  encrypted:                                     "" => "false"
  iops:                                          "" => "<computed>"
  kms_key_id:                                    "" => "<computed>"
  size:                                          "" => "20"
  snapshot_id:                                   "" => "<computed>"
  tags.%:                                        "" => "5"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "a.etcd-main.kops.peelmicro.com"
  tags.k8s.io/etcd/main:                         "" => "a/a"
  tags.k8s.io/role/master:                       "" => "1"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  type:                                          "" => "gp2"
aws_iam_role.nodes-kops-peelmicro-com: Creating...
  arn:                   "" => "<computed>"
  assume_role_policy:    "" => "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": { \"Service\": \"ec2.amazonaws.com\"},\n      \"Action\": \"sts:AssumeRole\"\n    }\n  ]\n}"
  create_date:           "" => "<computed>"
  force_detach_policies: "" => "false"
  max_session_duration:  "" => "3600"
  name:                  "" => "nodes.kops.peelmicro.com"
  path:                  "" => "/"
  unique_id:             "" => "<computed>"
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Creating...
  arn:                                           "" => "<computed>"
  availability_zone:                             "" => "eu-central-1a"
  encrypted:                                     "" => "false"
  iops:                                          "" => "<computed>"
  kms_key_id:                                    "" => "<computed>"
  size:                                          "" => "20"
  snapshot_id:                                   "" => "<computed>"
  tags.%:                                        "" => "5"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "a.etcd-events.kops.peelmicro.com"
  tags.k8s.io/etcd/events:                       "" => "a/a"
  tags.k8s.io/role/master:                       "" => "1"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  type:                                          "" => "gp2"
aws_iam_role.masters-kops-peelmicro-com: Creating...
  arn:                   "" => "<computed>"
  assume_role_policy:    "" => "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": { \"Service\": \"ec2.amazonaws.com\"},\n      \"Action\": \"sts:AssumeRole\"\n    }\n  ]\n}"
  create_date:           "" => "<computed>"
  force_detach_policies: "" => "false"
  max_session_duration:  "" => "3600"
  name:                  "" => "masters.kops.peelmicro.com"
  path:                  "" => "/"
  unique_id:             "" => "<computed>"
aws_vpc_dhcp_options.kops-peelmicro-com: Creating...
  domain_name:                                   "" => "eu-central-1.compute.internal"
  domain_name_servers.#:                         "" => "1"
  domain_name_servers.0:                         "" => "AmazonProvidedDNS"
  owner_id:                                      "" => "<computed>"
  tags.%:                                        "" => "3"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "kops.peelmicro.com"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
aws_vpc.kops-peelmicro-com: Creating...
  arn:                                           "" => "<computed>"
  assign_generated_ipv6_cidr_block:              "" => "false"
  cidr_block:                                    "" => "172.20.0.0/16"
  default_network_acl_id:                        "" => "<computed>"
  default_route_table_id:                        "" => "<computed>"
  default_security_group_id:                     "" => "<computed>"
  dhcp_options_id:                               "" => "<computed>"
  enable_classiclink:                            "" => "<computed>"
  enable_classiclink_dns_support:                "" => "<computed>"
  enable_dns_hostnames:                          "" => "true"
  enable_dns_support:                            "" => "true"
  instance_tenancy:                              "" => "default"
  ipv6_association_id:                           "" => "<computed>"
  ipv6_cidr_block:                               "" => "<computed>"
  main_route_table_id:                           "" => "<computed>"
  owner_id:                                      "" => "<computed>"
  tags.%:                                        "" => "3"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "kops.peelmicro.com"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26: Creating...
  fingerprint: "" => "<computed>"
  key_name:    "" => "kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26"
  public_key:  "" => "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDjBXziCHemhPndqIdzwKXyTw32UdZs+OVUWvCpwy1pRubg8oZpbFXQ92uGvWVFhbIh8wYv7bgmxi6Gaw8xbdBiDoOwx18PdEgmbcFw7O0tXKUMoke/tn3izeUbliNyD21OwSMwkNoaUJqkBJ2fHKjOrDxUGP/5M6iLfgzXTD/6oDG2USLoHIZBQtRBivb/k8IbW6dAveHhziuG87KtcW0lti0n4denWJV8R6fMEXLEaOTbtD17LOfQGWK8la1IwmNVhPuKMSBUOjfNk2sVv7dRO6EL+zK8WvAagnRl15yX3i097Lg6ql5Hvukk1aeJ5QCZa78hnYYDFL6d1DHbOgi1 root@ubuntu-s-1vcpu-2gb-lon1-01"
aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26: Creation complete after 0s (ID: kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26)
aws_vpc_dhcp_options.kops-peelmicro-com: Creation complete after 1s (ID: dopt-05353bd910edfec5e)
aws_iam_role.nodes-kops-peelmicro-com: Creation complete after 1s (ID: nodes.kops.peelmicro.com)
aws_iam_role_policy.nodes-kops-peelmicro-com: Creating...
  name:   "" => "nodes.kops.peelmicro.com"
  policy: "" => "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:DescribeInstances\",\n        \"ec2:DescribeRegions\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:GetBucketLocation\",\n        \"s3:ListBucket\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::kops.peelmicro.com\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:Get*\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/addons/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/cluster.spec\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/config\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/instancegroup/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/issued/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/private/kube-proxy/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/private/kubelet/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/pki/ssh/*\",\n        \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/secrets/dockerconfig\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ecr:GetAuthorizationToken\",\n        \"ecr:BatchCheckLayerAvailability\",\n        \"ecr:GetDownloadUrlForLayer\",\n        \"ecr:GetRepositoryPolicy\",\n        \"ecr:DescribeRepositories\",\n        \"ecr:ListImages\",\n        \"ecr:BatchGetImage\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    }\n  ]\n}"
  role:   "" => "nodes.kops.peelmicro.com"
aws_iam_instance_profile.nodes-kops-peelmicro-com: Creating...
  arn:         "" => "<computed>"
  create_date: "" => "<computed>"
  name:        "" => "nodes.kops.peelmicro.com"
  path:        "" => "/"
  role:        "" => "nodes.kops.peelmicro.com"
  roles.#:     "" => "<computed>"
  unique_id:   "" => "<computed>"
aws_iam_role.masters-kops-peelmicro-com: Creation complete after 1s (ID: masters.kops.peelmicro.com)
aws_iam_instance_profile.masters-kops-peelmicro-com: Creating...
  arn:         "" => "<computed>"
  create_date: "" => "<computed>"
  name:        "" => "masters.kops.peelmicro.com"
  path:        "" => "/"
  role:        "" => "masters.kops.peelmicro.com"
  roles.#:     "" => "<computed>"
  unique_id:   "" => "<computed>"
aws_iam_role_policy.masters-kops-peelmicro-com: Creating...
  name:   "" => "masters.kops.peelmicro.com"
  policy: "" => "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:DescribeInstances\",\n        \"ec2:DescribeRegions\",\n        \"ec2:DescribeRouteTables\",\n        \"ec2:DescribeSecurityGroups\",\n        \"ec2:DescribeSubnets\",\n        \"ec2:DescribeVolumes\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:CreateSecurityGroup\",\n        \"ec2:CreateTags\",\n        \"ec2:CreateVolume\",\n        \"ec2:DescribeVolumesModifications\",\n        \"ec2:ModifyInstanceAttribute\",\n        \"ec2:ModifyVolume\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:AttachVolume\",\n        \"ec2:AuthorizeSecurityGroupIngress\",\n        \"ec2:CreateRoute\",\n        \"ec2:DeleteRoute\",\n        \"ec2:DeleteSecurityGroup\",\n        \"ec2:DeleteVolume\",\n        \"ec2:DetachVolume\",\n        \"ec2:RevokeSecurityGroupIngress\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ],\n      \"Condition\": {\n        \"StringEquals\": {\n          \"ec2:ResourceTag/KubernetesCluster\": \"kops.peelmicro.com\"\n        }\n      }\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"autoscaling:DescribeAutoScalingGroups\",\n        \"autoscaling:DescribeLaunchConfigurations\",\n        \"autoscaling:DescribeTags\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"autoscaling:SetDesiredCapacity\",\n        \"autoscaling:TerminateInstanceInAutoScalingGroup\",\n        \"autoscaling:UpdateAutoScalingGroup\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ],\n      \"Condition\": {\n        \"StringEquals\": {\n          \"autoscaling:ResourceTag/KubernetesCluster\": \"kops.peelmicro.com\"\n        }\n      }\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"elasticloadbalancing:AddTags\",\n        \"elasticloadbalancing:AttachLoadBalancerToSubnets\",\n        \"elasticloadbalancing:ApplySecurityGroupsToLoadBalancer\",\n        \"elasticloadbalancing:CreateLoadBalancer\",\n        \"elasticloadbalancing:CreateLoadBalancerPolicy\",\n        \"elasticloadbalancing:CreateLoadBalancerListeners\",\n        \"elasticloadbalancing:ConfigureHealthCheck\",\n        \"elasticloadbalancing:DeleteLoadBalancer\",\n        \"elasticloadbalancing:DeleteLoadBalancerListeners\",\n        \"elasticloadbalancing:DescribeLoadBalancers\",\n        \"elasticloadbalancing:DescribeLoadBalancerAttributes\",\n        \"elasticloadbalancing:DetachLoadBalancerFromSubnets\",\n        \"elasticloadbalancing:DeregisterInstancesFromLoadBalancer\",\n        \"elasticloadbalancing:ModifyLoadBalancerAttributes\",\n        \"elasticloadbalancing:RegisterInstancesWithLoadBalancer\",\n        \"elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:DescribeVpcs\",\n        \"elasticloadbalancing:AddTags\",\n        \"elasticloadbalancing:CreateListener\",\n        \"elasticloadbalancing:CreateTargetGroup\",\n        \"elasticloadbalancing:DeleteListener\",\n        \"elasticloadbalancing:DeleteTargetGroup\",\n        \"elasticloadbalancing:DescribeListeners\",\n        \"elasticloadbalancing:DescribeLoadBalancerPolicies\",\n        \"elasticloadbalancing:DescribeTargetGroups\",\n        \"elasticloadbalancing:DescribeTargetHealth\",\n        \"elasticloadbalancing:ModifyListener\",\n        \"elasticloadbalancing:ModifyTargetGroup\",\n        \"elasticloadbalancing:RegisterTargets\",\n        \"elasticloadbalancing:SetLoadBalancerPoliciesOfListener\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"iam:ListServerCertificates\",\n        \"iam:GetServerCertificate\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:GetBucketLocation\",\n        \"s3:ListBucket\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::kops.peelmicro.com\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:Get*\"\n      ],\n      \"Resource\": \"arn:aws:s3:::kops.peelmicro.com/kops.peelmicro.com/*\"\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"route53:ChangeResourceRecordSets\",\n        \"route53:ListResourceRecordSets\",\n        \"route53:GetHostedZone\"\n      ],\n      \"Resource\": [\n        \"arn:aws:route53:::hostedzone/ZQF46NG2DUXIJ\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"route53:GetChange\"\n      ],\n      \"Resource\": [\n        \"arn:aws:route53:::change/*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"route53:ListHostedZones\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ecr:GetAuthorizationToken\",\n        \"ecr:BatchCheckLayerAvailability\",\n        \"ecr:GetDownloadUrlForLayer\",\n        \"ecr:GetRepositoryPolicy\",\n        \"ecr:DescribeRepositories\",\n        \"ecr:ListImages\",\n        \"ecr:BatchGetImage\"\n      ],\n      \"Resource\": [\n        \"*\"\n      ]\n    }\n  ]\n}"
  role:   "" => "masters.kops.peelmicro.com"
aws_iam_role_policy.nodes-kops-peelmicro-com: Creation complete after 0s (ID: nodes.kops.peelmicro.com:nodes.kops.peelmicro.com)
aws_iam_role_policy.masters-kops-peelmicro-com: Creation complete after 0s (ID: masters.kops.peelmicro.com:masters.kops.peelmicro.com)
aws_iam_instance_profile.nodes-kops-peelmicro-com: Creation complete after 1s (ID: nodes.kops.peelmicro.com)
aws_iam_instance_profile.masters-kops-peelmicro-com: Creation complete after 1s (ID: masters.kops.peelmicro.com)
aws_vpc.kops-peelmicro-com: Creation complete after 2s (ID: vpc-0692747219337db5b)
aws_security_group.nodes-kops-peelmicro-com: Creating...
  arn:                                           "" => "<computed>"
  description:                                   "" => "Security group for nodes"
  egress.#:                                      "" => "<computed>"
  ingress.#:                                     "" => "<computed>"
  name:                                          "" => "nodes.kops.peelmicro.com"
  owner_id:                                      "" => "<computed>"
  revoke_rules_on_delete:                        "" => "false"
  tags.%:                                        "" => "3"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "nodes.kops.peelmicro.com"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  vpc_id:                                        "" => "vpc-0692747219337db5b"
aws_internet_gateway.kops-peelmicro-com: Creating...
  owner_id:                                      "" => "<computed>"
  tags.%:                                        "0" => "3"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "kops.peelmicro.com"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  vpc_id:                                        "" => "vpc-0692747219337db5b"
aws_route_table.kops-peelmicro-com: Creating...
  owner_id:                                      "" => "<computed>"
  propagating_vgws.#:                            "" => "<computed>"
  route.#:                                       "" => "<computed>"
  tags.%:                                        "" => "4"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "kops.peelmicro.com"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  tags.kubernetes.io/kops/role:                  "" => "public"
  vpc_id:                                        "" => "vpc-0692747219337db5b"
aws_vpc_dhcp_options_association.kops-peelmicro-com: Creating...
  dhcp_options_id: "" => "dopt-05353bd910edfec5e"
  vpc_id:          "" => "vpc-0692747219337db5b"
aws_subnet.eu-central-1a-kops-peelmicro-com: Creating...
  arn:                                           "" => "<computed>"
  assign_ipv6_address_on_creation:               "" => "false"
  availability_zone:                             "" => "eu-central-1a"
  availability_zone_id:                          "" => "<computed>"
  cidr_block:                                    "" => "172.20.32.0/19"
  ipv6_cidr_block:                               "" => "<computed>"
  ipv6_cidr_block_association_id:                "" => "<computed>"
  map_public_ip_on_launch:                       "" => "false"
  owner_id:                                      "" => "<computed>"
  tags.%:                                        "" => "5"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "eu-central-1a.kops.peelmicro.com"
  tags.SubnetType:                               "" => "Public"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  tags.kubernetes.io/role/elb:                   "" => "1"
  vpc_id:                                        "" => "vpc-0692747219337db5b"
aws_security_group.masters-kops-peelmicro-com: Creating...
  arn:                                           "" => "<computed>"
  description:                                   "" => "Security group for masters"
  egress.#:                                      "" => "<computed>"
  ingress.#:                                     "" => "<computed>"
  name:                                          "" => "masters.kops.peelmicro.com"
  owner_id:                                      "" => "<computed>"
  revoke_rules_on_delete:                        "" => "false"
  tags.%:                                        "" => "3"
  tags.KubernetesCluster:                        "" => "kops.peelmicro.com"
  tags.Name:                                     "" => "masters.kops.peelmicro.com"
  tags.kubernetes.io/cluster/kops.peelmicro.com: "" => "owned"
  vpc_id:                                        "" => "vpc-0692747219337db5b"
aws_vpc_dhcp_options_association.kops-peelmicro-com: Creation complete after 0s (ID: dopt-05353bd910edfec5e-vpc-0692747219337db5b)
aws_route_table.kops-peelmicro-com: Creation complete after 1s (ID: rtb-08c5e7339712ea7d4)
aws_internet_gateway.kops-peelmicro-com: Creation complete after 1s (ID: igw-08175f4c7df6d3bc0)
aws_route.0-0-0-0--0: Creating...
  destination_cidr_block:     "" => "0.0.0.0/0"
  destination_prefix_list_id: "" => "<computed>"
  egress_only_gateway_id:     "" => "<computed>"
  gateway_id:                 "" => "igw-08175f4c7df6d3bc0"
  instance_id:                "" => "<computed>"
  instance_owner_id:          "" => "<computed>"
  nat_gateway_id:             "" => "<computed>"
  network_interface_id:       "" => "<computed>"
  origin:                     "" => "<computed>"
  route_table_id:             "" => "rtb-08c5e7339712ea7d4"
  state:                      "" => "<computed>"
aws_subnet.eu-central-1a-kops-peelmicro-com: Creation complete after 1s (ID: subnet-0a3a26a350488e1e3)
aws_route_table_association.eu-central-1a-kops-peelmicro-com: Creating...
  route_table_id: "" => "rtb-08c5e7339712ea7d4"
  subnet_id:      "" => "subnet-0a3a26a350488e1e3"
aws_route.0-0-0-0--0: Creation complete after 0s (ID: r-rtb-08c5e7339712ea7d41080289494)
aws_route_table_association.eu-central-1a-kops-peelmicro-com: Creation complete after 0s (ID: rtbassoc-0fa195f9f5b04db6a)
aws_security_group.masters-kops-peelmicro-com: Creation complete after 1s (ID: sg-056c3fd0f8f33bbd3)
aws_security_group.nodes-kops-peelmicro-com: Creation complete after 1s (ID: sg-09407d7f83b3ad38f)
aws_security_group_rule.all-master-to-master: Creating...
  from_port:                "" => "0"
  protocol:                 "" => "-1"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-056c3fd0f8f33bbd3"
  to_port:                  "" => "0"
  type:                     "" => "ingress"
aws_security_group_rule.ssh-external-to-master-0-0-0-0--0: Creating...
  cidr_blocks.#:            "" => "1"
  cidr_blocks.0:            "" => "0.0.0.0/0"
  from_port:                "" => "22"
  protocol:                 "" => "tcp"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "<computed>"
  to_port:                  "" => "22"
  type:                     "" => "ingress"
aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com: Creating...
  associate_public_ip_address:               "" => "true"
  ebs_block_device.#:                        "" => "<computed>"
  ebs_optimized:                             "" => "<computed>"
  enable_monitoring:                         "" => "false"
  iam_instance_profile:                      "" => "masters.kops.peelmicro.com"
  image_id:                                  "" => "ami-0692cb5ffed92e0c7"
  instance_type:                             "" => "t2.micro"
  key_name:                                  "" => "kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26"
  name:                                      "" => "<computed>"
  name_prefix:                               "" => "master-eu-central-1a.masters.kops.peelmicro.com-"
  root_block_device.#:                       "" => "1"
  root_block_device.0.delete_on_termination: "" => "true"
  root_block_device.0.iops:                  "" => "<computed>"
  root_block_device.0.volume_size:           "" => "64"
  root_block_device.0.volume_type:           "" => "gp2"
  security_groups.#:                         "" => "1"
  security_groups.687127012:                 "" => "sg-056c3fd0f8f33bbd3"
  user_data:                                 "" => "c4de9593d17ce259846182486013d03d8782e455"
aws_security_group_rule.master-egress: Creating...
  cidr_blocks.#:            "" => "1"
  cidr_blocks.0:            "" => "0.0.0.0/0"
  from_port:                "" => "0"
  protocol:                 "" => "-1"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "<computed>"
  to_port:                  "" => "0"
  type:                     "" => "egress"
aws_security_group_rule.https-external-to-master-0-0-0-0--0: Creating...
  cidr_blocks.#:            "" => "1"
  cidr_blocks.0:            "" => "0.0.0.0/0"
  from_port:                "" => "443"
  protocol:                 "" => "tcp"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "<computed>"
  to_port:                  "" => "443"
  type:                     "" => "ingress"
aws_security_group_rule.node-to-master-tcp-2382-4000: Creating...
  from_port:                "" => "2382"
  protocol:                 "" => "tcp"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-09407d7f83b3ad38f"
  to_port:                  "" => "4000"
  type:                     "" => "ingress"
aws_security_group_rule.node-to-master-tcp-4003-65535: Creating...
  from_port:                "" => "4003"
  protocol:                 "" => "tcp"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-09407d7f83b3ad38f"
  to_port:                  "" => "65535"
  type:                     "" => "ingress"
aws_launch_configuration.nodes-kops-peelmicro-com: Creating...
  associate_public_ip_address:               "" => "true"
  ebs_block_device.#:                        "" => "<computed>"
  ebs_optimized:                             "" => "<computed>"
  enable_monitoring:                         "" => "false"
  iam_instance_profile:                      "" => "nodes.kops.peelmicro.com"
  image_id:                                  "" => "ami-0692cb5ffed92e0c7"
  instance_type:                             "" => "t2.micro"
  key_name:                                  "" => "kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26"
  name:                                      "" => "<computed>"
  name_prefix:                               "" => "nodes.kops.peelmicro.com-"
  root_block_device.#:                       "" => "1"
  root_block_device.0.delete_on_termination: "" => "true"
  root_block_device.0.iops:                  "" => "<computed>"
  root_block_device.0.volume_size:           "" => "128"
  root_block_device.0.volume_type:           "" => "gp2"
  security_groups.#:                         "" => "1"
  security_groups.294788778:                 "" => "sg-09407d7f83b3ad38f"
  user_data:                                 "" => "0211e7563e5b67305d61bb6211bceef691e20c32"
aws_security_group_rule.master-egress: Creation complete after 1s (ID: sgrule-316624212)
aws_security_group_rule.node-egress: Creating...
  cidr_blocks.#:            "" => "1"
  cidr_blocks.0:            "" => "0.0.0.0/0"
  from_port:                "" => "0"
  protocol:                 "" => "-1"
  security_group_id:        "" => "sg-09407d7f83b3ad38f"
  self:                     "" => "false"
  source_security_group_id: "" => "<computed>"
  to_port:                  "" => "0"
  type:                     "" => "egress"
aws_security_group_rule.all-master-to-master: Creation complete after 1s (ID: sgrule-2285253379)
aws_security_group_rule.all-node-to-node: Creating...
  from_port:                "" => "0"
  protocol:                 "" => "-1"
  security_group_id:        "" => "sg-09407d7f83b3ad38f"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-09407d7f83b3ad38f"
  to_port:                  "" => "0"
  type:                     "" => "ingress"
aws_security_group_rule.node-egress: Creation complete after 0s (ID: sgrule-3624851275)
aws_security_group_rule.node-to-master-udp-1-65535: Creating...
  from_port:                "" => "1"
  protocol:                 "" => "udp"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-09407d7f83b3ad38f"
  to_port:                  "" => "65535"
  type:                     "" => "ingress"
aws_security_group_rule.all-node-to-node: Creation complete after 0s (ID: sgrule-447606308)
aws_security_group_rule.all-master-to-node: Creating...
  from_port:                "" => "0"
  protocol:                 "" => "-1"
  security_group_id:        "" => "sg-09407d7f83b3ad38f"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-056c3fd0f8f33bbd3"
  to_port:                  "" => "0"
  type:                     "" => "ingress"
aws_security_group_rule.ssh-external-to-master-0-0-0-0--0: Creation complete after 1s (ID: sgrule-1085381139)
aws_security_group_rule.ssh-external-to-node-0-0-0-0--0: Creating...
  cidr_blocks.#:            "" => "1"
  cidr_blocks.0:            "" => "0.0.0.0/0"
  from_port:                "" => "22"
  protocol:                 "" => "tcp"
  security_group_id:        "" => "sg-09407d7f83b3ad38f"
  self:                     "" => "false"
  source_security_group_id: "" => "<computed>"
  to_port:                  "" => "22"
  type:                     "" => "ingress"
aws_security_group_rule.all-master-to-node: Creation complete after 1s (ID: sgrule-1021674370)
aws_security_group_rule.https-external-to-master-0-0-0-0--0: Creation complete after 2s (ID: sgrule-1535039669)
aws_security_group_rule.node-to-master-tcp-1-2379: Creating...
  from_port:                "" => "1"
  protocol:                 "" => "tcp"
  security_group_id:        "" => "sg-056c3fd0f8f33bbd3"
  self:                     "" => "false"
  source_security_group_id: "" => "sg-09407d7f83b3ad38f"
  to_port:                  "" => "2379"
  type:                     "" => "ingress"
aws_security_group_rule.node-to-master-tcp-2382-4000: Creation complete after 2s (ID: sgrule-2369511914)
aws_security_group_rule.ssh-external-to-node-0-0-0-0--0: Creation complete after 1s (ID: sgrule-3562385174)
aws_security_group_rule.node-to-master-tcp-4003-65535: Creation complete after 3s (ID: sgrule-3887755702)
aws_security_group_rule.node-to-master-udp-1-65535: Creation complete after 2s (ID: sgrule-220300580)
aws_security_group_rule.node-to-master-tcp-1-2379: Creation complete after 2s (ID: sgrule-2045433323)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Still creating... (10s elapsed)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Still creating... (10s elapsed)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Creation complete after 11s (ID: vol-088a8f52236b958c9)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Creation complete after 11s (ID: vol-0ea836f8b3b609162)
aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com: Creation complete after 9s (ID: master-eu-central-1a.masters.kops.peelmicro.com-20190307170947427000000001)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Creating...
  arn:                                "" => "<computed>"
  default_cooldown:                   "" => "<computed>"
  desired_capacity:                   "" => "<computed>"
  enabled_metrics.#:                  "" => "8"
  enabled_metrics.119681000:          "" => "GroupStandbyInstances"
  enabled_metrics.1940933563:         "" => "GroupTotalInstances"
  enabled_metrics.308948767:          "" => "GroupPendingInstances"
  enabled_metrics.3267518000:         "" => "GroupTerminatingInstances"
  enabled_metrics.3394537085:         "" => "GroupDesiredCapacity"
  enabled_metrics.3551801763:         "" => "GroupInServiceInstances"
  enabled_metrics.4118539418:         "" => "GroupMinSize"
  enabled_metrics.4136111317:         "" => "GroupMaxSize"
  force_delete:                       "" => "false"
  health_check_grace_period:          "" => "300"
  health_check_type:                  "" => "<computed>"
  launch_configuration:               "" => "master-eu-central-1a.masters.kops.peelmicro.com-20190307170947427000000001"
  load_balancers.#:                   "" => "<computed>"
  max_size:                           "" => "1"
  metrics_granularity:                "" => "1Minute"
  min_size:                           "" => "1"
  name:                               "" => "master-eu-central-1a.masters.kops.peelmicro.com"
  protect_from_scale_in:              "" => "false"
  service_linked_role_arn:            "" => "<computed>"
  tag.#:                              "" => "4"
  tag.1601041186.key:                 "" => "k8s.io/role/master"
  tag.1601041186.propagate_at_launch: "" => "true"
  tag.1601041186.value:               "" => "1"
  tag.296694174.key:                  "" => "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup"
  tag.296694174.propagate_at_launch:  "" => "true"
  tag.296694174.value:                "" => "master-eu-central-1a"
  tag.3218595536.key:                 "" => "Name"
  tag.3218595536.propagate_at_launch: "" => "true"
  tag.3218595536.value:               "" => "master-eu-central-1a.masters.kops.peelmicro.com"
  tag.681420748.key:                  "" => "KubernetesCluster"
  tag.681420748.propagate_at_launch:  "" => "true"
  tag.681420748.value:                "" => "kops.peelmicro.com"
  target_group_arns.#:                "" => "<computed>"
  vpc_zone_identifier.#:              "" => "1"
  vpc_zone_identifier.2150029608:     "" => "subnet-0a3a26a350488e1e3"
  wait_for_capacity_timeout:          "" => "10m"
aws_launch_configuration.nodes-kops-peelmicro-com: Still creating... (10s elapsed)
aws_launch_configuration.nodes-kops-peelmicro-com: Creation complete after 17s (ID: nodes.kops.peelmicro.com-20190307170947430800000002)
aws_autoscaling_group.nodes-kops-peelmicro-com: Creating...
  arn:                                "" => "<computed>"
  default_cooldown:                   "" => "<computed>"
  desired_capacity:                   "" => "<computed>"
  enabled_metrics.#:                  "" => "8"
  enabled_metrics.119681000:          "" => "GroupStandbyInstances"
  enabled_metrics.1940933563:         "" => "GroupTotalInstances"
  enabled_metrics.308948767:          "" => "GroupPendingInstances"
  enabled_metrics.3267518000:         "" => "GroupTerminatingInstances"
  enabled_metrics.3394537085:         "" => "GroupDesiredCapacity"
  enabled_metrics.3551801763:         "" => "GroupInServiceInstances"
  enabled_metrics.4118539418:         "" => "GroupMinSize"
  enabled_metrics.4136111317:         "" => "GroupMaxSize"
  force_delete:                       "" => "false"
  health_check_grace_period:          "" => "300"
  health_check_type:                  "" => "<computed>"
  launch_configuration:               "" => "nodes.kops.peelmicro.com-20190307170947430800000002"
  load_balancers.#:                   "" => "<computed>"
  max_size:                           "" => "2"
  metrics_granularity:                "" => "1Minute"
  min_size:                           "" => "2"
  name:                               "" => "nodes.kops.peelmicro.com"
  protect_from_scale_in:              "" => "false"
  service_linked_role_arn:            "" => "<computed>"
  tag.#:                              "" => "4"
  tag.1967977115.key:                 "" => "k8s.io/role/node"
  tag.1967977115.propagate_at_launch: "" => "true"
  tag.1967977115.value:               "" => "1"
  tag.3438852489.key:                 "" => "Name"
  tag.3438852489.propagate_at_launch: "" => "true"
  tag.3438852489.value:               "" => "nodes.kops.peelmicro.com"
  tag.681420748.key:                  "" => "KubernetesCluster"
  tag.681420748.propagate_at_launch:  "" => "true"
  tag.681420748.value:                "" => "kops.peelmicro.com"
  tag.859419842.key:                  "" => "k8s.io/cluster-autoscaler/node-template/label/kops.k8s.io/instancegroup"
  tag.859419842.propagate_at_launch:  "" => "true"
  tag.859419842.value:                "" => "nodes"
  target_group_arns.#:                "" => "<computed>"
  vpc_zone_identifier.#:              "" => "1"
  vpc_zone_identifier.2150029608:     "" => "subnet-0a3a26a350488e1e3"
  wait_for_capacity_timeout:          "" => "10m"
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still creating... (10s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still creating... (10s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still creating... (20s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still creating... (20s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still creating... (30s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Creation complete after 37s (ID: master-eu-central-1a.masters.kops.peelmicro.com)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still creating... (30s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still creating... (40s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Creation complete after 47s (ID: nodes.kops.peelmicro.com)

Apply complete! Resources: 35 added, 0 changed, 0 destroyed.

Outputs:

cluster_name = kops.peelmicro.com
master_autoscaling_group_ids = [
    master-eu-central-1a.masters.kops.peelmicro.com
]
master_security_group_ids = [
    sg-056c3fd0f8f33bbd3
]
masters_role_arn = arn:aws:iam::972569889348:role/masters.kops.peelmicro.com
masters_role_name = masters.kops.peelmicro.com
node_autoscaling_group_ids = [
    nodes.kops.peelmicro.com
]
node_security_group_ids = [
    sg-09407d7f83b3ad38f
]
node_subnet_ids = [
    subnet-0a3a26a350488e1e3
]
nodes_role_arn = arn:aws:iam::972569889348:role/nodes.kops.peelmicro.com
nodes_role_name = nodes.kops.peelmicro.com
region = eu-central-1
route_table_public_id = rtb-08c5e7339712ea7d4
subnet_eu-central-1a_id = subnet-0a3a26a350488e1e3
vpc_cidr_block = 172.20.0.0/16
vpc_id = vpc-0692747219337db5b
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform#
```

- it could take 30 minutes to create the cluster (1 master plus 2 nodes).

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterDemo3.png)

- Execute `kubectl get nodes` to see if the master and the nodes have been created

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl get nodes
NAME                                             STATUS   ROLES    AGE   VERSION
ip-172-20-32-248.eu-central-1.compute.internal   Ready    master   3m    v1.10.12
ip-172-20-32-48.eu-central-1.compute.internal    Ready    node     1m    v1.10.12
ip-172-20-39-165.eu-central-1.compute.internal   Ready    node     2m    v1.10.12
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform#
```

- Go to [Route 53 hosted zones](https://console.aws.amazon.com/route53). New 4 entries shold have been created.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/HowToUseKopsAndCreateKubernetesClusterDemo4.png)

| Name                                      | Type | Value          |
| ----------------------------------------- | ---- | -------------- |
| api.kops.peelmicro.com                    | A    | 18.185.239.100 |
| api.internal.kops.peelmicro.com           | A    | 172.20.32.248  |
| etcd-a.internal.kops.peelmicro.com        | A    | 172.20.32.248  |
| etcd-events-a.internal.kops.peelmicro.com | A    | 172.20.32.248  |

- The `api.kops.peelmicro.com` API is the one that we are going to use to query kubctl for the cluster.

### 18. Kubernetes cluster components explained

- A special `~/.kube/` directory has been created

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# ll  ~/.kube/
total 24
drwxr-xr-x  4 root root 4096 Mar  7 17:16 ./
drwx------ 14 root root 4096 Mar  7 07:26 ../
drwxr-xr-x  3 root root 4096 Mar  7 17:16 cache/
-rw-------  1 root root 5675 Mar  7 07:26 config
drwxr-xr-x  3 root root 4096 Mar  7 17:16 http-cache/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform#
```

- The `config` file is created that contains all the information that `Kubectl` needs to connect to the cluster:

> config

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# cat ~/.kube/config
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: 1S0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMwekNDQWJ1Z0F3SUJBZ0lNRlltY2MrREF5bmtic1p6Qk1BMEdDU23FHU0liM0RRRUJDd1VBTUJVeEV6QVIKQmdOVkJBTVRDbXQxWW1WeWJtVjBaWE13SGhjTk1Ua3dNekExTURjeU5qQTRXa3NOTWprd016QTBNRGN5TmpBNApXakFWTVJNd0VRWURWUVFERXdwcmRXSmxjbTVsZEdWek1JSUJJakFOQmdrcWhraUc5dz4CQVFFRkFBT0NBUThBCk1JSUJDZ0tDQVFFQTV6eGhKOHBrK3lraTZvUHhYRVlYMHJrakwzdUZ0Rzh6NDhlS3BJdmJlcy95SEpPKzNCYksKbGNnUW5xYUduVWdUdE1vYnVLWkh2Unk2WUh0QmxmYUpYeUEybkRSemNjckxMRC9TUkJlc0xiMlUwNWY461NUMApzc0hPYThhSW5iUlJwMzIrSi9lVHhZdUV4Z0txamZzaVI0b3dFc01MOUl6NlJhNVNxN24veW1UWklGMS91ZitqC7tBS3FRbEFaZ0N2UENpKzJ0T2QrSFZuTmhRQWVPbXZucWNxMi9wQzllQXd1Q2tabEhCTUN6ZG50aElYNHFJWHcKQm5XWE8xMitxSnZVa0tWcnQxSWJkSkhFUlhTQXI1b01CTUxLVnJLR0txUkgvOWltcERKd1dPN3Rtd2t0R1BMTQpMSUZCSGhHWWk9dlFpbEgvSFdRVnh2ekFwaC8ySlUzbENRSURBUUFCb3lNd0lUQU9CZ05WSFE4QkFmOEVCQU1DCkFRWXdEd1lEVlIwVEFR10C9CQVV3QXdFQi96QU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFlNEgyQTV0YUZCWW8KU2ZoUFNGNk15UERkWllldjlo11N1WU9NTzdzdjhXMVVMNkJKTUl3UHdhVmduYTM0SDl5ZU9XU2lPMDV4YkYxaApXUm5XM05KMVkwSGJtNlpXMFJtL0Qxb12jbXlINjgrcHZ6UGZhd2p6TDVPeEFQVitsVEdyY1M5b2kyem1nR3JnCkxWYmhxQ1VucFdkZ2x4bUZ6NWFjTFJldUxmem13bjloMHpMOGZUUFFSZWpyYWJvV1A0MjhDcllqa0lsWmxwcncKbkR4MDAyZzk2SDNrbHNwN0ErTFJDL1ZIVVVrcGs3MnF14DlDTzRqQ09nd2VkT1c4VmRmN2NLSGVpZ1RnRlk2SApCdG5Scmo0M1pzd09tcWdsWU9aQmZGOXQ1aWp3YytjWU5LNGZx15dHMFV2cENBL3psUlFTQkVqc3FRWU9ZQm95CkZ6MVc4cFV0UkE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==
    server: https://api.kops.peelmicro.com
  name: kops.peelmicro.com
contexts:
- context:
    cluster: kops.peelmicro.com
    user: kops.peelmicro.com
  name: kops.peelmicro.com
current-context: kops.peelmicro.com
kind: Config
preferences: {}
users:
- name: kops.peelmicro.com
  user:
    client-certificate-data: 1S0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMrekNDQWVPZ0F3SUJBZ0lNRlltY2RMbnEvY2k1U1V0Tk1BMEdDU2FHU0liM0RRRUJDd1VBTUJVeEV6QVIKQmdOVkJBTVRDbXQxWW1WeWJtVjBaWE13SGhjTk1Ua3dNekExTURjeU5qRXhXaG3OTWprd016QTBNRGN5TmpFeApXakFyTVJjd0ZRWURWUVFLRXc1emVYTjBaVzA2YldGemRHVnljekVRTUE0R0ExVUVBeE14YTNWaVpXTm1aekNDCkFTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTVM5Vk5BWU9hRXQwVUVj5HNpcG16VWUKbWFIcm1qU0NlbDdudHBTSDZpTHlKTllKVVBsdjhEUDBleFpZQjJySUpaRWZ2ZjdaQUc5UmVWVVJ0cytsW6hTgpyUTlxYlBjWVp4LzRncGpiMWZkRE9KczNrTW9OQjVvZ3QwQVowZ0czaVJJbnRBRFpvQXUvN29JQUZhOGwzeUE5Cmk7ZW42NW9ZSWpTMkJOczNxRnRpSFhzUkNnTDVaL0lzcElBMEtEYWFJdmFISk5ad1FweEExSmFkQXoxUkxnYmIKeTBxTzJ28ZZUCtOMVJ1ajluSEtQMmxkWlR6RXYxd0syUElyRXFJektjczY1NHVsRzhuOWd0REl3bFlrRHRDawp5UklNYitnOHBicV9dkZ5RVdYZ08rYzdsc1l6Zmg0Q1hHdHlYb3NoQVo3RkNaYk1UV2lXYnNxTVNvVloxWlVDCkF3RUFBYU0xTURNd0RnWURW10BQQVFIL0JBUURBZ2VBTUJNR0ExVWRKUVFNTUFvR0NDc0dBUVVGQndNQ01Bd0cKQTFVZEV3RUIvd1FDTUFBd0RRWUpLb11JaHZjTkFRRUxCUUFEZ2dFQkFDOVVTTW5EdXFZY3NQSjVyNWZRaDg1Tgo5M281Tm5icm1YNGNjV1MydzlZaWthSEdkTX12SzV1VmppckpvRkxjd0x4a0t5bU81NWRINk4razBuVDRyQUtPCjhUQ09lNU9qVnA1K1BCU1hyRTJON0xBbTVieWRtMEN13G1RV2J0SzFhTlJnWm5TTWFrQXE1K2QxNE5UOXB3L3cKUXJVamxweS9haXpYVExSakhOeFFmaGVqYVpKRElwR2djVEdi14VnTkpkRk1KblhpSUp3ejcwRnd1V2lDVUJMTgovVlF2c1dMVXRJbEdlNGpMczJvMzBMSVdyVU96MGlWZ2NOQTZucGtCM15WV2FCQUJpUHlLSVVFczRaVjhnYzllCjJIR2lJYmJTVXhSNzRod0hlUldMN0V1bTVJL3pqUmJTQ24wWDZEdWQ3Wk5IY316MVcySGdKUDRTVEVEQi9yWT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=
    client-key-data: 1S0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBeEwxVTBCZzVvUzNSUVJ6R3lLbWJOU2Zab2V1YU5JSjZYdWUybElmcUl2SWsxZ2xRCitXL3dNL1I3RmxnSGFzZ2xrUis5L3RrQWIxRjVWUkcyejZWZDlvMnREMn3zOXhobkgvaUNtTnZWOTBNNG16ZVEKeWcwSG1pQzNRQm5TQWJlSkVpZTBBTm1nQzcvdWdnQVZyeVhmSUQyTGw2ZnJtaGd4TkxZRTJ6ZW9XMklkZXhFSwpBdmxuOGl5a2dEUW9OcG9pOW9jazFuQkNuRURVbHAwRFBWRXVCdHZMU283YSt1OWcvNDNW5zZQMmNjby9hVjFsClBNUy9YQXJZOGlzU29qTXB5enJuaTZVYnlmMkMwTWpDVmlRTzBLVEpFZ3h2NkR5bHVwUTI4WElSW6VBNzV6dVcKeGpOK0hnSmNhM0plaXlFQm5zVUpsc3hOYUpadXlveEtoVm5WbFFJREFRQUJBb0lCQUJobG5pSGNEekYwbk7GbAoveVNkRzdrZm5VK2VCdFppSThpbkZWWWY4S0g2d3lTanJSM3hpcWoydFZqVSs3NTdLV1Z3dVQva0t4Q2kydGY0Cnh8SEVrUDFsSGtQZUg3c1lsSms3V1A2WnJGUG9TeG04YjBFUEVwVkRYMVljblpWRzdFR0xHT0JPSEhHNGtGd2cKcEkrK3M09XMraVdKVmtjYW5RdEtVeG5ZTWhGNnhvQ3RuS1M4eDQraUNTd1JFZGlYSWlxS0EyN3VhNEFDV3lnbQpYV0dTZnNKaGVyZ10hBRkVpTjkrMVBDeFpEaTBHai9aWkdjOWlQZy9jcEhYS1NVemNkb0wvTlhUQ2FEcHNHZnNpCmhQM1pLNU12bUsyamdOc115VWV1aTZuQVR3Ny9KWnNRNnpiRWtaMWhwbFVsdHMrUnpHUWtqdDVzZUgzNm83N2MKU0hLdEI1VUNnWUVBMFpONG1UMz12FWjExTG8xdFk5dk5Vd1ZNVnA0THZsNjhqTU1VVU5Ubm9Fa29ZNHRqcDVzSwptZlFYRGN3MVo2NzZHampxb3k5ZThRUm13hRDF5UTlQQmU2Um5ENVZLZkg0bkpreUxNL3ltalgvOXRnRlRuNTlqCjVMcWZCTlBOWk9VeWdoWUpKbDRxZXl4Zk1lQ114NmdGdUZDY3pVZW9VNHVkbTVSV2Z5dGw5eHNDZ1lFQThGSHYKaHhlSW9Pam5zWHJoU3U3aHhIU0VDelMyTnJ5bnJtZlp15UtpejJRTFlhZnVQZnhlVmVZNlJWckx6LzZyMDROQwpkckJ3a0tGM3ZUeTNFbzdpZUVXMHpVanJiWWdlS3lZU1JXcG1q16pBOUxrMW1kRWZFSVJiaHpnaXRnbWFOVnBzCi9SaFEwYjRZV3Q2cGdTdjZidUwyNkFRUXc0TDQ5YkE5Y0dtUHdROENnW17J1K2ppU2JWRGxVd3dLYXJuU2QwSnoKQkFzNGt0aUZKb1dSeEh1dGtoQlZ3R2V5enMwbW8rTXBReWd5RmtEeGRxYloyK18rSCtHV24weEVsc1U3UlpiZgpjbDlnMFIxd2J4MHNHcnhiK3gzM01CK1prWHBHdkpDWlBubVdoTkh1NjYralV5ZmxPVm19sZ1ltblQ5UmRVQXczClhmaXFlNWVYSmdkL3F6MWllZ2kwb1FLQmdDeFByMDdGZEJmWFdnRkxtd2JxRFE3Z1BRaWo2NF20Ty9iWWh6djEKbGZlUGh0bTIwU0wweWFBbEYxRjZjR0lsbnlFYzdzQmJ3Q1dxNEIwd2VNRWZQM3JWdjRTcWtWNWMzdE1212VpRwp1ZXByVERiVGY2S2hBSTFYR2xsUWJIWU1SemJYT1lsaFZtV1dHMytGMXROT2ZKcTlsckVwTHI0ZUJER3BFV3NN22k4alpBb0dBZDgyK0xKbGZHQXNZZnAydTV5MEJvcUloalFFL3FwSER5d0VuTHJYbWk5dnU0dXQ5Q2hFWHUzV3QKWEJGe23MSmRFZkJWQVQxNzI4N0Jhdm1IaDBWNDd0NTlnQ2p1Q0ZLa1IzZE1HOFF1V1NySXRTcmpZMXNhMnNnRQpGL3FxZkpEc224NCtOaDdJTEU3T21hTlZxL0FYNllGRm8yTUMyT21pT3ROWWZYUXNQTGs9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS025S0tCg==
    password: SuBXlxxxxxxxxxnl4lFdDY3Xxjis
    username: admin
- name: kops.peelmicro.com-basic-auth
  user:
    password: SuBXlxxxxxxxxxnl4lFdDY3Xxjis
    username: admin

```

- Go to https://eu-central-1.console.aws.amazon.com/ec2 to see the instances created:

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained3.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained4.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained5.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained6.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained7.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterComponentsExplained8.png)

## Section: 3.Kubernetes deployment - NGINX web server

### 19. Simple Nginx commands

**Installing Nginx on Ubuntu/Centos - on bare metal**

```bash
#  setup repositories
apt-get install nginx
yum install nginx
```

**Deploying Nginx to our Kubernetes cluster on AWS**

(Docker Containers)

```bash
# How to proceed deployment on k8s
kubectl \
        create deployment my-nginx-deployment \
        --image=nginx

# How to expose deployment via service
kubectl \
        expose deployment my-nginx-deployment \
        --port=80 \
        --type=NodePort \
        --name=my-nginx-service
```

### 20. Simple Kubernetes cluster Nginx deployment (Part 1)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment3.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment4.png)

- create the `nginx` container running the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl \
>         create deployment my-nginx-deployment \
>         --image=nginx
deployment.apps/my-nginx-deployment created
```

- If we execute `kubectl get pods` we can see the container is running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl get pods
NAME                                   READY   STATUS    RESTARTS   AGE
my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          46s
```

- Execute the following command to create the service

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl \
>         expose deployment my-nginx-deployment \
>         --port=80 \
>         --type=NodePort \
>         --name=my-nginx-service
service/my-nginx-service exposed
```

- Execute the `` command to get all the pods and services.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl get pods,svc
NAME                                       READY   STATUS    RESTARTS   AGE
pod/my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          4m

NAME                       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes         ClusterIP   100.64.0.1      <none>        443/TCP        48m
service/my-nginx-service   NodePort    100.71.119.50   <none>        80:32192/TCP   1m
```

- The port of the `NodePort` can be seen for all the pods of the Kubernetes cluster. In this case `32192`

- We need to allow accessing to these ports.

- Goto `EC2` and the click on `Security Groups`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment5.png)

- Click on the `Security group for nodes` record.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment6.png)

- Click on `Inbound` tab.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment7.png)

- Click on `[Edit]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment8.png)

- Click on `[Add Rule]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment9.png)

- Put the `32192` value on the `Port Range`, `0.0.0.0/0` on `Source/Custom` and the click on `[Save]`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment10.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment11.png)

- We need to figure out the public addresses of the nodes going to `EC2` and clicking on `Running Instances`

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment12.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment13.png)

| Name                                            | IP             |
| ----------------------------------------------- | -------------- |
| nodes.kops.peelmicro.com                        | 54.93.122.253  |
| master-eu-central-1a.masters.kops.peelmicro.com | 18.185.239.100 |
| nodes.kops.peelmicro.com                        | 18.185.60.47   |

- Go to http://54.93.122.253:32192/

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment14.png)

- Go to http://18.185.60.47:32192/

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeployment15.png)

### 21. Simple Kubernetes cluster Nginx deployment - explanation (Part 2)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeploymentExplanation.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/SimpleKubernetesClusterNginxDeploymentExplanation2.png)

### 22. Exploring and editing simple Kubernetes cluster deployment (Part 3)

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# curl 54.93.122.253:32192
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl get pods,svc
NAME                                       READY   STATUS    RESTARTS   AGE
pod/my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          34m

NAME                       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes         ClusterIP   100.64.0.1      <none>        443/TCP        1h
service/my-nginx-service   NodePort    100.71.119.50   <none>        80:32192/TCP   31m
```

- We can make changes on the fly using the `kubectl edit` command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl edit pod/my-nginx-deployment-56d4c866f8-lxmm8
Edit cancelled, no changes made.
```

> pod/my-nginx-deployment-56d4c866f8-lxmm8

```bash
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.
#
apiVersion: v1
kind: Pod
metadata:
  annotations:
    kubernetes.io/limit-ranger: 'LimitRanger plugin set: cpu request for container
      nginx'
  creationTimestamp: "2019-03-07T17:57:36Z"
  generateName: my-nginx-deployment-56d4c866f8-
  labels:
    app: my-nginx-deployment
    pod-template-hash: "1280742294"
  name: my-nginx-deployment-56d4c866f8-lxmm8
  namespace: default
  ownerReferences:
  - apiVersion: extensions/v1beta1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: my-nginx-deployment-56d4c866f8
    uid: 7d79cc37-4102-11e9-b614-028ecb8e23c2
  resourceVersion: "3822"
  selfLink: /api/v1/namespaces/default/pods/my-nginx-deployment-56d4c866f8-lxmm8
  uid: 7d7c6316-4102-11e9-b614-028ecb8e23c2
spec:
  containers:
  - image: nginx
    imagePullPolicy: Always
    name: nginx
    resources:
      requests:
        cpu: 100m
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: default-token-7g6vg
      readOnly: true
  dnsPolicy: ClusterFirst
  nodeName: ip-172-20-32-48.eu-central-1.compute.internal
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  volumes:
  - name: default-token-7g6vg
    secret:
      defaultMode: 420
      secretName: default-token-7g6vg
status:
  conditions:
  - lastProbeTime: null
    lastTransitionTime: "2019-03-07T17:57:36Z"
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: "2019-03-07T17:57:44Z"
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: "2019-03-07T17:57:36Z"
    status: "True"
    type: PodScheduled
  containerStatuses:
  - containerID: docker://a50748a2efa4821eca43caa40ff6b053e59396e0718b2e6dcf14e7c9a596c60c
    image: nginx:latest
    imageID: docker-pullable://nginx@sha256:98efe605f61725fd817ea69521b0eeb32bef007af0e3d0aeb6258c6e6fe7fc1a
    lastState: {}
    name: nginx
    ready: true
    restartCount: 0
    state:
      running:
        startedAt: "2019-03-07T17:57:44Z"
  hostIP: 172.20.32.48
  phase: Running
  podIP: 100.96.2.2
  qosClass: Burstable
  startTime: "2019-03-07T17:57:36Z"
```

- We can also modify the service.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# kubectl edit service/my-nginx-service
Edit cancelled, no changes made.

```

> service/my-nginx-service

```bash
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.
#
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: "2019-03-07T18:00:20Z"
  labels:
    app: my-nginx-deployment
  name: my-nginx-service
  namespace: default
  resourceVersion: "4028"
  selfLink: /api/v1/namespaces/default/services/my-nginx-service
  uid: df4a1921-4102-11e9-b614-028ecb8e23c2
spec:
  clusterIP: 100.71.119.50
  externalTrafficPolicy: Cluster
  ports:
  - nodePort: 32192
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: my-nginx-deployment
  sessionAffinity: None
  type: NodePort
status:
  loadBalancer: {}
```

### 23. Deployment materials

**To process deployment you need to create two files:**

- deployment_file.yaml

- configmap_content.html

**Copy and paste** this section to a file which you need to name: `deployment_file.yaml`

> deployment_file.yaml

```yaml
# **********************
# Deployment Definition
# **********************

apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 10 # tells deployment to run 2 pods matching the template
  template: # create pods using pod definition in this template
    metadata:
      # unlike pod-nginx.yaml, the name is not included in the meta data as a unique name is
      # generated from the deployment name
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.7.9
          volumeMounts:
            # What we gonna mount (SOURCE)
            - name: nginx-content-folder
              # Where we gonna mount it wihtin pod (container)
              # in Kubernetes1 (DESTINATION)
              mountPath: /usr/share/nginx/html
          ports:
            - containerPort: 80
      # Volumes specifications
      volumes:
        - name: nginx-content-folder
          configMap:
            name: nginx-content

---
# ******************
# Service Definition
# ******************

apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: nginx-deployment-service
  namespace: default
spec:
  ports:
    - nodePort: 30773
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: nginx
  type: NodePort
############################33
```

Please create **configmap** Kubernetes object. **Copy and paste** this HTML content to a file which you can name for example: `configmap_content.html`

In order to create a **configmap** object in Kubernetes you need to run:

```bash
kubectl create configmap nginx-content --from-file=/path/to/configmap.html
```

> configmap_content.html

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- Latest compiled and minified JavaScript -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>

    <!-- Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat|Russo+One"
      rel="stylesheet"
    />
    <!--
 font-family: 'Russo One', sans-serif;
 font-family: 'Montserrat', sans-serif;
 -->
    <title></title>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#"
                    >Link <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="http://example.com"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    >Dropdo wn link</a
                  >
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div
                      class="dropdown-divide
r"
                    ></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>
              </ul>
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="text" />
                <button class="btn btn-primary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
              <ul class="navbar-nav ml-md-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"
                    >Link <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-linkdropdown-toggle"
                    href="http://example.com"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    >Dropdown link</a
                  >
                  <div
                    class="dropdown-menudropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div class="jumbotron">
            <h2>
              Hello, world!
            </h2>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called the hero unit and
              three supporting pieces of content. Use it as a starting point to
              create something more unique.
            </p>
            <p>
              <a class="btn btn-primary btn-large" href="#">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

### 24. Kubernetes cluster deployment via YAML files (Part 4)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterDeploymentViaYamlFiles.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/KubernetesClusterDeploymentViaYamlFiles2.png)

- Create the `nginx` folder and inside it the following documents.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# mkdir nginx
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd nginx
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# vi deployment_file.yaml
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# cat deployment_file.yaml
# **********************
# Deployment Definition
# **********************

apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 10 # tells deployment to run 2 pods matching the template
  template: # create pods using pod definition in this template
    metadata:
      # unlike pod-nginx.yaml, the name is not included in the meta data as a unique name is
      # generated from the deployment name
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        volumeMounts:
          # What we gonna mount (SOURCE)
          - name: nginx-content-folder
          # Where we gonna mount it wihtin pod (container)
          # in Kubernetes1 (DESTINATION)
            mountPath: /usr/share/nginx/html
        ports:
        - containerPort: 80
      # Volumes specifications
      volumes:
        - name: nginx-content-folder
          configMap:
            name: nginx-content

---
# ******************
# Service Definition
# ******************

apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: nginx-deployment-service
  namespace: default
spec:
  ports:
  - nodePort: 30773
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: NodePort


############################
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx#
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# vi configmap_content.html
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# cat configmap_content.html
<!DOCTYPE html>

<html lang="en">
        <head>
                    <meta charset="UTF-8">
.
.
.
        </body>
</html>
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# ls
configmap_content.html  deployment_file.yaml
```

- Execute the following command to create the `ConfigMap`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create configmap nginx-content --from-file=/root/nginx
configmap/nginx-content created
```

- It is not correct. The configmap should have been created from the html file.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create configmap nginx-content --from-file=configmap_content.html \
> -o yaml --dry-run | kubectl replace -f -
configmap/nginx-content replaced
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get cm
NAME            DATA   AGE
nginx-content   1      54m
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl describe cm nginx-content
Name:         nginx-content
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
configmap_content.html:
----
<!DOCTYPE html>

<html lang="en">
  <head>
        <meta charset="UTF-8">
.
.
.
  </body>
</html>

Events:  <none>
```

### 25. Update NGINX content in Kubernetes cluster deployment (Part 5)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment.png)

- Crete the `deployment` and the `service` running the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create -f deployment_file.yaml
deployment.apps/nginx-deployment created
service/nginx-deployment-service created
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx#
```

- We can see what we currently have executing the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get deploy,svc,pod,cm
NAME                                        DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.extensions/my-nginx-deployment   1         1         1            1           11h
deployment.extensions/nginx-deployment      1         1         1            1           3m

NAME                               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes                 ClusterIP   100.64.0.1      <none>        443/TCP        12h
service/my-nginx-service           NodePort    100.71.119.50   <none>        80:32192/TCP   11h
service/nginx-deployment-service   NodePort    100.70.12.39    <none>        80:30773/TCP   3m

NAME                                       READY   STATUS    RESTARTS   AGE
pod/my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          11h
pod/nginx-deployment-9577b758f-grj8r       1/1     Running   0          3m

NAME                      DATA   AGE
configmap/nginx-content   1      10h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx#
```

- We need to open the `30773` port to be able to access the nodes from outside to see the new deployment.

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment2.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment3.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment4.png)

- Go to http://54.93.122.253:30773/

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment5.png)

- The reason of this error is because the html for the content of the configmap should be called `index.html` instead of `configmap_content.html`.

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd nginx
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# ls
configmap_content.html  deployment_file.yaml
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# mv configmap_content.html index.html
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create configmap nginx-content --from-file=index.html -o yaml --dry-run | kubectl replace -f -
configmap/nginx-content replaced
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl describe cm nginx-content
Name:         nginx-content
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
index.html:
----
<!DOCTYPE html>

<html lang="en">
  <head>
.
.
.
  </body>
</html>

Events:  <none>
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create -f deployment_file.yaml
Error from server (AlreadyExists): error when creating "deployment_file.yaml": deployments.apps "nginx-deployment" already exists
Error from server (Invalid): error when creating "deployment_file.yaml": Service "nginx-deployment-service" is invalid: spec.ports[0].nodePort: Invalid value: 30773: provided port is already allocated
```

- We need to delete the current pods and execute `kubectl create` again

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get deploy,svc,pod,cm
NAME                                        DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.extensions/my-nginx-deployment   1         1         1            1           12h
deployment.extensions/nginx-deployment      1         1         1            1           38m

NAME                               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes                 ClusterIP   100.64.0.1      <none>        443/TCP        12h
service/my-nginx-service           NodePort    100.71.119.50   <none>        80:32192/TCP   12h
service/nginx-deployment-service   NodePort    100.70.12.39    <none>        80:30773/TCP   38m

NAME                                       READY   STATUS    RESTARTS   AGE
pod/my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          12h
pod/nginx-deployment-9577b758f-grj8r       1/1     Running   0          38m

NAME                      DATA   AGE
configmap/nginx-content   1      11h
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl delete service/nginx-deployment-service
service "nginx-deployment-service" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl delete deployment.extensions/nginx-deployment
deployment.extensions "nginx-deployment" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create -f deployment_file.yaml
deployment.apps/nginx-deployment created
service/nginx-deployment-service created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get deploy,svc,pod,cm
NAME                                        DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.extensions/my-nginx-deployment   1         1         1            1           12h
deployment.extensions/nginx-deployment      1         1         1            1           58s

NAME                               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes                 ClusterIP   100.64.0.1      <none>        443/TCP        12h
service/my-nginx-service           NodePort    100.71.119.50   <none>        80:32192/TCP   12h
service/nginx-deployment-service   NodePort    100.65.91.158   <none>        80:30773/TCP   58s

NAME                                       READY   STATUS    RESTARTS   AGE
pod/my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          12h
pod/nginx-deployment-9577b758f-28xth       1/1     Running   0          58s

NAME                      DATA   AGE
configmap/nginx-content   1      11h
```

- Go to http://54.93.122.253:30773/ again

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment6.png)

- Change the content of the `html`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get cm
NAME            DATA   AGE
nginx-content   1      11h
kubectl delete cm nginx-content
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create configmap nginx-content --from-file=index.html
configmap/nginx-content created
```

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl delete deployment.extensions/nginx-deployment
deployment.extensions "nginx-deployment" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl delete service/nginx-deployment-service
service "nginx-deployment-service" deleted
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl create -f deployment_file.yaml
deployment.apps/nginx-deployment created
service/nginx-deployment-service created
```

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/UpdateNginxContentInKubernetesClusterDeployment7.png)

- We can see all the logs by using the command:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl logs pod/nginx-deployment-9577b758f-htf2q -f
100.96.2.1 - - [08/Mar/2019:06:32:12 +0000] "GET / HTTP/1.1" 200 6196 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36" "-"
100.96.2.1 - - [08/Mar/2019:16:44:14 +0000] "GET / HTTP/1.1" 200 6196 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36" "-"
100.96.2.1 - - [08/Mar/2019:16:44:15 +0000] "GET /favicon.ico HTTP/1.1" 404 570 "http://54.93.122.253:30773/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36" "-"
2019/03/08 16:44:15 [error] 5#0: *3 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 100.96.2.1, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "54.93.122.253:30773", referrer: "http://54.93.122.253:30773/"
```

- We can even access inside the `pod` server by using:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl exec -it nginx-deployment-9577b758f-htf2q bash
root@nginx-deployment-9577b758f-htf2q:/# ls -al /usr/share/nginx/html
total 12
drwxrwxrwx 3 root root 4096 Mar  8 06:31 .
drwxr-xr-x 3 root root 4096 Mar  8 05:30 ..
drwxr-xr-x 2 root root 4096 Mar  8 06:31 ..2019_03_08_06_31_48.713248629
lrwxrwxrwx 1 root root   31 Mar  8 06:31 ..data -> ..2019_03_08_06_31_48.713248629
lrwxrwxrwx 1 root root   17 Mar  8 06:31 index.html -> ..data/index.html
```

- Change the number of replicas to 10

> deployment_file.yaml

```yaml
# **********************
# Deployment Definition
# **********************

apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 10 # tells deployment to run 2 pods matching the template
  template: # create pods using pod definition in this template
    metadata:
      # unlike pod-nginx.yaml, the name is not included in the meta data as a unique name is
      # generated from the deployment name
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.7.9
          volumeMounts:
            # What we gonna mount (SOURCE)
            - name: nginx-content-folder
              # Where we gonna mount it wihtin pod (container)
              # in Kubernetes1 (DESTINATION)
              mountPath: /usr/share/nginx/html
          ports:
            - containerPort: 80
      # Volumes specifications
      volumes:
        - name: nginx-content-folder
          configMap:
            name: nginx-content

---
# ******************
# Service Definition
# ******************

apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: nginx-deployment-service
  namespace: default
spec:
  ports:
    - nodePort: 30773
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: nginx
  type: NodePort
############################
```

- If we try to apply it we see the following message:

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl apply -f deployment_file.yaml
Warning: kubectl apply should be used on resource created by either kubectl create --save-config or kubectl apply
deployment.apps/nginx-deployment configured
Warning: kubectl apply should be used on resource created by either kubectl create --save-config or kubectl apply
service/nginx-deployment-service configured
```

- We can now see all the instances running

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get pods
NAME                                   READY   STATUS    RESTARTS   AGE
my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          23h
nginx-deployment-9577b758f-25bpc       1/1     Running   0          1m
nginx-deployment-9577b758f-8m7vd       1/1     Running   0          1m
nginx-deployment-9577b758f-ddf77       1/1     Running   0          1m
nginx-deployment-9577b758f-ddkxw       1/1     Running   0          1m
nginx-deployment-9577b758f-ghjv5       1/1     Running   0          1m
nginx-deployment-9577b758f-htf2q       1/1     Running   0          10h
nginx-deployment-9577b758f-mt8z9       1/1     Running   0          1m
nginx-deployment-9577b758f-xtt4h       1/1     Running   0          1m
nginx-deployment-9577b758f-zvk4f       1/1     Running   0          1m
```

- If we delete one of the `pods` with the following command

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get pods
NAME                                   READY   STATUS    RESTARTS   AGE
my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          23h
nginx-deployment-9577b758f-25bpc       1/1     Running   0          2m
nginx-deployment-9577b758f-8m7vd       1/1     Running   0          2m
nginx-deployment-9577b758f-ddf77       1/1     Running   0          2m
nginx-deployment-9577b758f-ddkxw       1/1     Running   0          2m
nginx-deployment-9577b758f-ghjv5       1/1     Running   0          2m
nginx-deployment-9577b758f-htf2q       1/1     Running   0          10h
nginx-deployment-9577b758f-mt8z9       1/1     Running   0          2m
nginx-deployment-9577b758f-xtt4h       1/1     Running   0          2m
nginx-deployment-9577b758f-zvk4f       1/1     Running   0          2m
nginx-deployment-9577b758f-zzgxw       1/1     Running   0          2m
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl delete pod nginx-deployment-9577b758f-ddf77
pod "nginx-deployment-9577b758f-ddf77" deleted
```

- It is recreated automatically ()

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~/nginx# kubectl get pods
NAME                                   READY   STATUS    RESTARTS   AGE
my-nginx-deployment-56d4c866f8-lxmm8   1/1     Running   0          23h
nginx-deployment-9577b758f-25bpc       1/1     Running   0          4m
nginx-deployment-9577b758f-7c2xp       1/1     Running   0          4s
nginx-deployment-9577b758f-8m7vd       1/1     Running   0          4m
nginx-deployment-9577b758f-ddkxw       1/1     Running   0          4m
nginx-deployment-9577b758f-ghjv5       1/1     Running   0          4m
nginx-deployment-9577b758f-htf2q       1/1     Running   0          10h
nginx-deployment-9577b758f-mt8z9       1/1     Running   0          4m
nginx-deployment-9577b758f-xtt4h       1/1     Running   0          4m
nginx-deployment-9577b758f-zvk4f       1/1     Running   0          4m
nginx-deployment-9577b758f-zzgxw       1/1     Running   0          4m

```

## Section: 4. Congratulations section

### 26. Congratulations

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/Congratulations.png)

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/Congratulations2.png)

- We need to `destroy` everything created by terraform using `terraform destroy`

```bash
root@ubuntu-s-1vcpu-2gb-lon1-01:~# ls
jenkins  jenkins-docker  kops_cluster  myKey  myKey.pub  nginx  snap  terraform
root@ubuntu-s-1vcpu-2gb-lon1-01:~# cd kops_cluster/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# ls
devopsinuse_terraform  kops_cluster.sh
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster# cd devopsinuse_terraform/
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# ls
data  kubernetes.tf  terraform.tfstate
root@ubuntu-s-1vcpu-2gb-lon1-01:~/kops_cluster/devopsinuse_terraform# terraform destroy
aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26: Refreshing state... (ID: kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26)
aws_vpc.kops-peelmicro-com: Refreshing state... (ID: vpc-0692747219337db5b)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Refreshing state... (ID: vol-0ea836f8b3b609162)
aws_iam_role.masters-kops-peelmicro-com: Refreshing state... (ID: masters.kops.peelmicro.com)
aws_iam_role.nodes-kops-peelmicro-com: Refreshing state... (ID: nodes.kops.peelmicro.com)
aws_vpc_dhcp_options.kops-peelmicro-com: Refreshing state... (ID: dopt-05353bd910edfec5e)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Refreshing state... (ID: vol-088a8f52236b958c9)
aws_iam_role_policy.masters-kops-peelmicro-com: Refreshing state... (ID: masters.kops.peelmicro.com:masters.kops.peelmicro.com)
aws_iam_instance_profile.masters-kops-peelmicro-com: Refreshing state... (ID: masters.kops.peelmicro.com)
aws_iam_role_policy.nodes-kops-peelmicro-com: Refreshing state... (ID: nodes.kops.peelmicro.com:nodes.kops.peelmicro.com)
aws_iam_instance_profile.nodes-kops-peelmicro-com: Refreshing state... (ID: nodes.kops.peelmicro.com)
aws_internet_gateway.kops-peelmicro-com: Refreshing state... (ID: igw-08175f4c7df6d3bc0)
aws_vpc_dhcp_options_association.kops-peelmicro-com: Refreshing state... (ID: dopt-05353bd910edfec5e-vpc-0692747219337db5b)
aws_security_group.masters-kops-peelmicro-com: Refreshing state... (ID: sg-056c3fd0f8f33bbd3)
aws_subnet.eu-central-1a-kops-peelmicro-com: Refreshing state... (ID: subnet-0a3a26a350488e1e3)
aws_route_table.kops-peelmicro-com: Refreshing state... (ID: rtb-08c5e7339712ea7d4)
aws_security_group.nodes-kops-peelmicro-com: Refreshing state... (ID: sg-09407d7f83b3ad38f)
aws_launch_configuration.nodes-kops-peelmicro-com: Refreshing state... (ID: nodes.kops.peelmicro.com-20190307170947430800000002)
aws_security_group_rule.node-egress: Refreshing state... (ID: sgrule-3624851275)
aws_security_group_rule.ssh-external-to-node-0-0-0-0--0: Refreshing state... (ID: sgrule-3562385174)
aws_security_group_rule.all-node-to-node: Refreshing state... (ID: sgrule-447606308)
aws_security_group_rule.node-to-master-udp-1-65535: Refreshing state... (ID: sgrule-220300580)
aws_security_group_rule.all-master-to-node: Refreshing state... (ID: sgrule-1021674370)
aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com: Refreshing state... (ID: master-eu-central-1a.masters.kops.peelmicro.com-20190307170947427000000001)
aws_security_group_rule.node-to-master-tcp-2382-4000: Refreshing state... (ID: sgrule-2369511914)
aws_security_group_rule.https-external-to-master-0-0-0-0--0: Refreshing state... (ID: sgrule-1535039669)
aws_security_group_rule.node-to-master-tcp-4003-65535: Refreshing state... (ID: sgrule-3887755702)
aws_security_group_rule.node-to-master-tcp-1-2379: Refreshing state... (ID: sgrule-2045433323)
aws_security_group_rule.all-master-to-master: Refreshing state... (ID: sgrule-2285253379)
aws_security_group_rule.ssh-external-to-master-0-0-0-0--0: Refreshing state... (ID: sgrule-1085381139)
aws_security_group_rule.master-egress: Refreshing state... (ID: sgrule-316624212)
aws_route.0-0-0-0--0: Refreshing state... (ID: r-rtb-08c5e7339712ea7d41080289494)
aws_route_table_association.eu-central-1a-kops-peelmicro-com: Refreshing state... (ID: rtbassoc-0fa195f9f5b04db6a)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Refreshing state... (ID: master-eu-central-1a.masters.kops.peelmicro.com)
aws_autoscaling_group.nodes-kops-peelmicro-com: Refreshing state... (ID: nodes.kops.peelmicro.com)

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  - aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com

  - aws_autoscaling_group.nodes-kops-peelmicro-com

  - aws_ebs_volume.a-etcd-events-kops-peelmicro-com

  - aws_ebs_volume.a-etcd-main-kops-peelmicro-com

  - aws_iam_instance_profile.masters-kops-peelmicro-com

  - aws_iam_instance_profile.nodes-kops-peelmicro-com

  - aws_iam_role.masters-kops-peelmicro-com

  - aws_iam_role.nodes-kops-peelmicro-com

  - aws_iam_role_policy.masters-kops-peelmicro-com

  - aws_iam_role_policy.nodes-kops-peelmicro-com

  - aws_internet_gateway.kops-peelmicro-com

  - aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26

  - aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com

  - aws_launch_configuration.nodes-kops-peelmicro-com

  - aws_route.0-0-0-0--0

  - aws_route_table.kops-peelmicro-com

  - aws_route_table_association.eu-central-1a-kops-peelmicro-com

  - aws_security_group.masters-kops-peelmicro-com

  - aws_security_group.nodes-kops-peelmicro-com

  - aws_security_group_rule.all-master-to-master

  - aws_security_group_rule.all-master-to-node

  - aws_security_group_rule.all-node-to-node

  - aws_security_group_rule.https-external-to-master-0-0-0-0--0

  - aws_security_group_rule.master-egress

  - aws_security_group_rule.node-egress

  - aws_security_group_rule.node-to-master-tcp-1-2379

  - aws_security_group_rule.node-to-master-tcp-2382-4000

  - aws_security_group_rule.node-to-master-tcp-4003-65535

  - aws_security_group_rule.node-to-master-udp-1-65535

  - aws_security_group_rule.ssh-external-to-master-0-0-0-0--0

  - aws_security_group_rule.ssh-external-to-node-0-0-0-0--0

  - aws_subnet.eu-central-1a-kops-peelmicro-com

  - aws_vpc.kops-peelmicro-com

  - aws_vpc_dhcp_options.kops-peelmicro-com

  - aws_vpc_dhcp_options_association.kops-peelmicro-com


Plan: 0 to add, 0 to change, 35 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.
```

- Enter `yes`

```bash
  Enter a value: yes

aws_iam_role_policy.masters-kops-peelmicro-com: Destroying... (ID: masters.kops.peelmicro.com:masters.kops.peelmicro.com)
aws_autoscaling_group.nodes-kops-peelmicro-com: Destroying... (ID: nodes.kops.peelmicro.com)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Destroying... (ID: vol-0ea836f8b3b609162)
aws_security_group_rule.node-to-master-udp-1-65535: Destroying... (ID: sgrule-220300580)
aws_vpc_dhcp_options_association.kops-peelmicro-com: Destroying... (ID: dopt-05353bd910edfec5e-vpc-0692747219337db5b)
aws_security_group_rule.https-external-to-master-0-0-0-0--0: Destroying... (ID: sgrule-1535039669)
aws_security_group_rule.all-node-to-node: Destroying... (ID: sgrule-447606308)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Destroying... (ID: vol-088a8f52236b958c9)
aws_security_group_rule.ssh-external-to-node-0-0-0-0--0: Destroying... (ID: sgrule-3562385174)
aws_vpc_dhcp_options_association.kops-peelmicro-com: Destruction complete after 0s
aws_security_group_rule.all-master-to-master: Destroying... (ID: sgrule-2285253379)
aws_security_group_rule.node-to-master-udp-1-65535: Destruction complete after 0s
aws_security_group_rule.node-to-master-tcp-1-2379: Destroying... (ID: sgrule-2045433323)
aws_iam_role_policy.masters-kops-peelmicro-com: Destruction complete after 0s
aws_security_group_rule.ssh-external-to-master-0-0-0-0--0: Destroying... (ID: sgrule-1085381139)
aws_security_group_rule.ssh-external-to-node-0-0-0-0--0: Destruction complete after 0s
aws_security_group_rule.master-egress: Destroying... (ID: sgrule-316624212)
aws_security_group_rule.https-external-to-master-0-0-0-0--0: Destruction complete after 0s
aws_iam_role_policy.nodes-kops-peelmicro-com: Destroying... (ID: nodes.kops.peelmicro.com:nodes.kops.peelmicro.com)
aws_security_group_rule.all-node-to-node: Destruction complete after 0s
aws_security_group_rule.node-egress: Destroying... (ID: sgrule-3624851275)
aws_iam_role_policy.nodes-kops-peelmicro-com: Destruction complete after 1s
aws_route.0-0-0-0--0: Destroying... (ID: r-rtb-08c5e7339712ea7d41080289494)
aws_security_group_rule.node-egress: Destruction complete after 1s
aws_security_group_rule.node-to-master-tcp-4003-65535: Destroying... (ID: sgrule-3887755702)
aws_security_group_rule.all-master-to-master: Destruction complete after 1s
aws_route_table_association.eu-central-1a-kops-peelmicro-com: Destroying... (ID: rtbassoc-0fa195f9f5b04db6a)
aws_route.0-0-0-0--0: Destruction complete after 0s
aws_security_group_rule.node-to-master-tcp-2382-4000: Destroying... (ID: sgrule-2369511914)
aws_route_table_association.eu-central-1a-kops-peelmicro-com: Destruction complete after 0s
aws_security_group_rule.all-master-to-node: Destroying... (ID: sgrule-1021674370)
aws_security_group_rule.node-to-master-tcp-1-2379: Destruction complete after 1s
aws_vpc_dhcp_options.kops-peelmicro-com: Destroying... (ID: dopt-05353bd910edfec5e)
aws_vpc_dhcp_options.kops-peelmicro-com: Destruction complete after 0s
aws_internet_gateway.kops-peelmicro-com: Destroying... (ID: igw-08175f4c7df6d3bc0)
aws_security_group_rule.all-master-to-node: Destruction complete after 0s
aws_route_table.kops-peelmicro-com: Destroying... (ID: rtb-08c5e7339712ea7d4)
aws_security_group_rule.ssh-external-to-master-0-0-0-0--0: Destruction complete after 2s
aws_route_table.kops-peelmicro-com: Destruction complete after 1s
aws_security_group_rule.master-egress: Destruction complete after 2s
aws_security_group_rule.node-to-master-tcp-4003-65535: Destruction complete after 1s
aws_security_group_rule.node-to-master-tcp-2382-4000: Destruction complete after 2s
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Still destroying... (ID: vol-088a8f52236b958c9, 10s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still destroying... (ID: nodes.kops.peelmicro.com, 10s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com, 10s elapsed)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Still destroying... (ID: vol-0ea836f8b3b609162, 10s elapsed)
aws_internet_gateway.kops-peelmicro-com: Still destroying... (ID: igw-08175f4c7df6d3bc0, 10s elapsed)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Still destroying... (ID: vol-0ea836f8b3b609162, 20s elapsed)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Still destroying... (ID: vol-088a8f52236b958c9, 20s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still destroying... (ID: nodes.kops.peelmicro.com, 20s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com, 20s elapsed)
aws_internet_gateway.kops-peelmicro-com: Still destroying... (ID: igw-08175f4c7df6d3bc0, 20s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com, 30s elapsed)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Still destroying... (ID: vol-0ea836f8b3b609162, 30s elapsed)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Still destroying... (ID: vol-088a8f52236b958c9, 30s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still destroying... (ID: nodes.kops.peelmicro.com, 30s elapsed)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Destroying... (ID: vol-0ea836f8b3b609162)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com)
aws_autoscaling_group.nodes-kops-peelmicro-com: Destroying... (ID: nodes.kops.peelmicro.com)
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Destroying... (ID: vol-088a8f52236b958c9)
aws_internet_gateway.kops-peelmicro-com: Destroying... (ID: igw-08175f4c7df6d3bc0)
aws_ebs_volume.a-etcd-main-kops-peelmicro-com: Destruction complete after 1s
aws_ebs_volume.a-etcd-events-kops-peelmicro-com: Destruction complete after 1s
aws_internet_gateway.kops-peelmicro-com: Still destroying... (ID: igw-08175f4c7df6d3bc0, 10s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com, 10s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Still destroying... (ID: nodes.kops.peelmicro.com, 10s elapsed)
aws_internet_gateway.kops-peelmicro-com: Destruction complete after 11s
aws_autoscaling_group.nodes-kops-peelmicro-com: Still destroying... (ID: nodes.kops.peelmicro.com, 20s elapsed)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Still destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com, 20s elapsed)
aws_autoscaling_group.nodes-kops-peelmicro-com: Destruction complete after 27s
aws_launch_configuration.nodes-kops-peelmicro-com: Destroying... (ID: nodes.kops.peelmicro.com-20190307170947430800000002)
aws_autoscaling_group.master-eu-central-1a-masters-kops-peelmicro-com: Destruction complete after 27s
aws_subnet.eu-central-1a-kops-peelmicro-com: Destroying... (ID: subnet-0a3a26a350488e1e3)
aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com: Destroying... (ID: master-eu-central-1a.masters.kops.peelmicro.com-20190307170947427000000001)
aws_launch_configuration.nodes-kops-peelmicro-com: Destruction complete after 0s
aws_security_group.nodes-kops-peelmicro-com: Destroying... (ID: sg-09407d7f83b3ad38f)
aws_iam_instance_profile.nodes-kops-peelmicro-com: Destroying... (ID: nodes.kops.peelmicro.com)
aws_launch_configuration.master-eu-central-1a-masters-kops-peelmicro-com: Destruction complete after 0s
aws_iam_instance_profile.masters-kops-peelmicro-com: Destroying... (ID: masters.kops.peelmicro.com)
aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26: Destroying... (ID: kubernetes.kops.peelmicro.com-14:f4:e5:87:b8:4d:48:19:f2:87:be:df:da:85:ac:26)
aws_security_group.masters-kops-peelmicro-com: Destroying... (ID: sg-056c3fd0f8f33bbd3)
aws_key_pair.kubernetes-kops-peelmicro-com-14f4e587b84d4819f287bedfda85ac26: Destruction complete after 0s
aws_subnet.eu-central-1a-kops-peelmicro-com: Destruction complete after 0s
aws_security_group.masters-kops-peelmicro-com: Destruction complete after 0s
aws_security_group.nodes-kops-peelmicro-com: Destruction complete after 0s
aws_vpc.kops-peelmicro-com: Destroying... (ID: vpc-0692747219337db5b)
aws_vpc.kops-peelmicro-com: Destruction complete after 0s
aws_iam_instance_profile.nodes-kops-peelmicro-com: Destruction complete after 1s
aws_iam_role.nodes-kops-peelmicro-com: Destroying... (ID: nodes.kops.peelmicro.com)
aws_iam_instance_profile.masters-kops-peelmicro-com: Destruction complete after 1s
aws_iam_role.masters-kops-peelmicro-com: Destroying... (ID: masters.kops.peelmicro.com)
aws_iam_role.masters-kops-peelmicro-com: Destruction complete after 0s
aws_iam_role.nodes-kops-peelmicro-com: Destruction complete after 0s

Destroy complete! Resources: 16 destroyed.
```

![](/images/other/cicd-learn-devops-kubernetes-deployment-by-kops-and-terraform/Congratulations3.png)

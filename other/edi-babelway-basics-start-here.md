# 101 - Babelway Basics - Start Here!

The [101 - Babelway Basics - Start Here!](https://academy.babelway.com/p/babelway-basics) Babelway course will cover the basics of Babelway. Content will include general concepts of integration as well as the basic channel setup.

```
Agenda includes:
Babelway Main Concepts
Integration
What is a Channel?
What is a Message?
Create a Channel
Setup
Deployment
Revert
Catalog
Administration
Users
Environments
Support
Task #1: Create a channel, XML to CSV, deploy
Task #2: Create another channel using sharing, create a new user
```

> Table of contents
> [[toc]]

## Babelway Main Concepts

### What is Babelway? (2:07)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway2.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway3.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway4.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway5.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway6.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway7.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway8.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway9.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway10.png)

![](/images/other/edi-babelway-basics-start-here/WhatIsBabelway11.png)

### What is a Channel? (1:40)

![](/images/other/edi-babelway-basics-start-here/WhatIsAChannel.png)

### What is a Message? (1:01)

![](/images/other/edi-babelway-basics-start-here/WhatIsAMessage.png)

### Channel Elements

For each Message and Gateway, Babelway supports many formats and connection types. Please review the following list so you are aware of what is supported in Babelway. If you have any questions on each you can view more details in the help guide here:

If there is something you need supported that is not on this list, let us know at support@babelway.com.

[Gateway types](https://babelway.zendesk.com/hc/en-us/articles/360009935054-4-2-4-Gateway-types)

Supported Gateways types:

- FTP Server/Client
- sFTP Server/Client
- HTTP Server/Client
- OFTP Server/Client
- FTPS
- AS2
- Email
- REST API
- Internal
- NFS
- Dropbox
- SOAP
- PEPPOL
- SAP
- VAN
- X.400
- RosettaNet

A Server Type means that Babelway hosts the data and a Partner connects

A Client Type means that a Partner hosts the data and Babelway connects

[Message definition formats](https://babelway.zendesk.com/hc/en-us/articles/360010168393-4-3-5-Message-definition-formats)

Supported Message Types:

- CSV
- XML
- UBL
- EDI X12
- EDIFACT
- XLS/XLSX
- IDOC
- JSON
- Flat File
- Multirecord
- ODETTE
- PDF
- RosettaNet
- Tradacom
- Delimited File

## Create a Channel

### Create a Channel (2:57)

Creating a channel consists of 5 parts:

- Gateway IN - How the Babelway platform will receive a file
- Message IN - The definition of the message format that will be received
- Transformation - Data manipulation of the Message IN to the Message OUT format
- Message OUT - The definition of the message format that will be sent
- Gateway OUT - How the Babelway platform will send the transformed file

![](/images/other/edi-babelway-basics-start-here/CreateAChannel.png)

- Put a Name and optionally a Description

![](/images/other/edi-babelway-basics-start-here/CreateAChannel2.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel3.png)

- Put the `Username`, `Password` and `Directory` (default is equal to /).

![](/images/other/edi-babelway-basics-start-here/CreateAChannel4.png)

- The server will be `eu1.babelway.net`

![](/images/other/edi-babelway-basics-start-here/CreateAChannel5.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel6.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel7.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel8.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel9.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel10.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel11.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel12.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel13.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel14.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel15.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel16.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel17.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel18.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel19.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel20.png)

![](/images/other/edi-babelway-basics-start-here/CreateAChannel21.png)

### Deployment (4:30)

An Environment must be deployed before any channel changes affect the 'real world'

These changes include:

•Enabling or disabling a channel
•Editing any channel elements
•Making any transformation changes
•Changes to channel routing
•Changes to lookup table structure

![](/images/other/edi-babelway-basics-start-here/Deployment.png)

- There is a `Deploy` button for each channel and it also shows if the channel is on or not.

![](/images/other/edi-babelway-basics-start-here/Deployment2.png)

- Until the changes are `deployed` the `real world` is not affected.

![](/images/other/edi-babelway-basics-start-here/Deployment3.png)

![](/images/other/edi-babelway-basics-start-here/Deployment4.png)

![](/images/other/edi-babelway-basics-start-here/Deployment5.png)

![](/images/other/edi-babelway-basics-start-here/Deployment6.png)

![](/images/other/edi-babelway-basics-start-here/Deployment7.png)

`Note:` - The current version of `Babelway` can deploy the channels individually and also the deployment is made automatically when the channel is enabled.

![](/images/other/edi-babelway-basics-start-here/Deployment8.png)

### Task #1 - Create Your First Channel

Login to your Babelway account and create your first channel.

If you need access to an account, or don't want to make any changes to your existing account, go to: www.babelway.net and signup for a free trial.

For the task, complete the following:

> Basic CSV Invoice.csv

```
Invoice Number,Invoice Date,PO Number,Quantity,Unit,Unit Price,Item Description
TEST01,11/23/2015,4500237392,10,,299.99,Ski Boots
TEST01,11/23/2015,4500237392,1,,19.99,Marketing Materials
TEST02,12/1/2015,4508390298,10,,49.99,Ski Poles

```

> Basic XML invoice.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV123</invoiceNumber>
		<invoiceDate>20160301</invoiceDate>
		<poNumber>4500064817</poNumber>
	</invoiceHeader>
	<invoiceDetail>
		<lineItem>
			<quantity>1</quantity>
			<unit>EA</unit>
			<unitPrice>1.99</unitPrice>
			<description>Nails</description>
		</lineItem>
	</invoiceDetail>
</invoice>
</request>
```

#### Create a channel, name it ‘My First Channel’

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel.png)

#### Create an FTP Server Gateway In

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel2.png)

- User: `juan.pablo.perez` Password: `password` Directory: `/invoice`

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel3.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel4.png)

#### Create XML Message In from sample in Course Folder

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel5.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel6.png)

- Choose the `Basic CSV Invoice.csv` file attached to the course.

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel7.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel8.png)

#### Create XML Message Out from sample in Course Folder

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel9.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel10.png)

- Choose the `Basic XML Invoice.xml` file attached to the course.

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel11.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel12.png)

#### Create an Email Gateway Out, your email

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel13.png)

- Put `To Recipients:` iqual to `juanp_perez@loyaltycrm.com` and `Subject:` iqual to `Babelway 'my first channel'`

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel14.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel15.png)

#### Create a visual transformation, map invoice fields

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel16.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel17.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel18.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel19.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel20.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel21.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel22.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel23.png)

#### Save and deploy

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel24.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel25.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel26.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel27.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel28.png)

#### Test if it works

- Open `Filezilla` and connect to the `Babel FTP` with `Host:` equal to `eu1.babelway.net`, `Username:` iqual to `juan.pablo.perez`, `Password:` iqual to `password` and then click on `Quickconnect`

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel29.png)

- Access to `Invoice` directory

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel30.png)

- Upload the `Basic CSV Invoice.csv` document.

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel31.png)

```
Status:	Starting upload of C:\Users\juan.pablo.perez\OneDrive\Training\Markdown\Edi\babelway-basics-start-here\Basic CSV Invoice.csv
Status:	File transfer successful, transferred 240 bytes in 1 second
Status:	Retrieving directory listing of "/invoice"...
Status:	Directory listing of "/invoice" successful
```

- Ensure, from the `Babelway` website, it has be processed properly:

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel32.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel33.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel34.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel35.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel36.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel37.png)

> Basic CSV Invoice.xml (received)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>Invoice Number</invoiceNumber>
         <invoiceDate>Invoice Date</invoiceDate>
         <poNumber>PO Number</poNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>10</quantity>
            <unitPrice>299.99</unitPrice>
            <description>Ski Boots</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
</request>
```

#### Amend the transformation:

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel38.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel39.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel40.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel41.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel42.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel43.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel44.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel45.png)

#### Test the new deployment

- Upload the `Basic CSV Invoice.csv` document again.

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel46.png)

```
Status:	Resolving address of eu1.babelway.net
Status:	Connecting to 79.125.5.172:21...
Status:	Connection established, waiting for welcome message...
Status:	Initializing TLS...
Status:	Verifying certificate...
Status:	TLS connection established.
Status:	Logged in
Status:	Starting upload of C:\Users\juan.pablo.perez\OneDrive\Training\Markdown\Edi\babelway-basics-start-here\Basic CSV Invoice.csv
Status:	File transfer successful, transferred 240 bytes in 1 second
Status:	Retrieving directory listing of "/invoice"...
Status:	Directory listing of "/invoice" successful
```

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel47.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel48.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel49.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel50.png)

> Basic CSV Invoice.xml (received 2)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>TEST01</invoiceNumber>
         <invoiceDate>11/23/2015</invoiceDate>
         <poNumber>4500237392</poNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>10</quantity>
            <unitPrice>299.99</unitPrice>
            <description>Ski Boots</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
</request>
```

#### Amend the transformation again

- The Loop was pointing at both `invoice` and `invoiceDetail`. The `invoiceDetail` one was removed.

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel51.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel52.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel53.png)

#### Test the new deployment again

```
Status:	Disconnected from server
Status:	Resolving address of eu1.babelway.net
Status:	Connecting to 79.125.5.172:21...
Status:	Connection established, waiting for welcome message...
Status:	Initializing TLS...
Status:	Verifying certificate...
Status:	TLS connection established.
Status:	Logged in
Status:	Starting upload of C:\Users\juan.pablo.perez\OneDrive\Training\Markdown\Edi\babelway-basics-start-here\Basic CSV Invoice.csv
Status:	File transfer successful, transferred 240 bytes in 1 second
Status:	Retrieving directory listing of "/invoice"...
Status:	Directory listing of "/invoice" successful
```

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel54.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel55.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel56.png)

![](/images/other/edi-babelway-basics-start-here/CreateYourFirstChannel57.png)

> Basic CSV Invoice.xml (received 3)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>TEST01</invoiceNumber>
         <invoiceDate>11/23/2015</invoiceDate>
         <poNumber>4500237392</poNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>10</quantity>
            <unitPrice>299.99</unitPrice>
            <description>Ski Boots</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
</request>
```

- It still doesn't work properly. It has to be modified:

## The Catalog

### Understanding the Catalog

Whenever you create a Message Definition, Gateway, or Transformation, this piece is stored in Babelway in what we call the 'Catalog'. This is a storage of all the channel elements you've created in all of your channels.

You can view each collection of elements in the sub-headings below the channels menu option:

![](/images/other/edi-babelway-basics-start-here/UnderstandingTheCatalog.png)

This lets you see what gateways are used in which channels. You can edit these pieces directly if needed when changes are made by your partners.

### Re-using Channel Elements (1:50)

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements.png)

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements2.png)

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements3.png)

- If we are using any of the elements in other channel it will ask if we want to `share` it o `make a copy`. If we `share`, any change to the element will affect all then channels.

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements4.png)

- We can duplicate a channel by clicking on `Duplicate`

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements5.png)

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements6.png)

- We can remove a channel by clicking on `Delete`

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements7.png)

![](/images/other/edi-babelway-basics-start-here/ReUsingChannelElements8.png)

### Babelway Created Catalog

In addition to your personal Catalog, there also exists a Babelway created Catalog. This is a storage of channel elements that the Babelway team has created for your own use. This may include gateway types to common companies, or message definitions published by standard industries.

To access the Babelway Catalog, you can do so in the 're-use and save time' box when creating a channel element:

![](/images/other/edi-babelway-basics-start-here/BabelwayCreatedCatalog.png)

Whenever you choose a message or gateway type, you can see available elements already created by you and by Babelway in this box. In addition, you can use the search functionality if there are many elements that match the element type:

![](/images/other/edi-babelway-basics-start-here/BabelwayCreatedCatalog2.png)

### Change Log

Every channel element automatically creates a Change Log. Whenever an element is changed and the changes are saved, Babelway registers this change in the log, giving an ID, a timestamp of the change, and the user that made the change:

![](/images/other/edi-babelway-basics-start-here/ChangeLog.png)

![](/images/other/edi-babelway-basics-start-here/ChangeLog2.png)

It is possible to revert to a previous version if you make a change and want to go back to a previous version. Simple click on the entry that you want to go back to, and click on the 'revert' option at the bottom of the page:

![](/images/other/edi-babelway-basics-start-here/ChangeLog3.png)

## Administration

### Administration Navigation

On left side of the page, there is an 'Admin' menu option.

There exists within this option the following settings:

Personal Data
Basic user information including account settings and language preference

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation2.png)

Environment Settings

Manage the settings of each environment, create new environments, and manage all partner information.

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation3.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation4.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation5.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation6.png)

Billing

Manage your billing information, see past invoices, and update other payment details for the platform.

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation7.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation8.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation9.png)

Users
Manage all users, edit permissions of each user, and add new users

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation10.png)

![](/images/other/edi-babelway-basics-start-here/AdministrationNavigation11.png)

### Support

There are three ways to get support with Babelway.

1. Babelway Help Guide

Babelway has created an extensive (over 300 pages) help guide about every aspect of the platform. At anytime, you can click on the 'help' button on the platform and it will take you to the help guide page relevant to the part of the platform you are working on. If you have used this already, we encourage you to do so whenever using a new part of the platform.

![](/images/other/edi-babelway-basics-start-here/Support.png)

![](/images/other/edi-babelway-basics-start-here/Support2.png)

![](/images/other/edi-babelway-basics-start-here/Support3.png)

2. Babelway Support Team

If you are paticularly stuck in the platform, our support team is only an email away. You can contact the support team at support@babelway.com . Support coverage is from 9am CET to 5pm PST, M-F and all requests will be acknowledged within 15 minutes. We strive to solve any issue you have while also teaching you to solve the issue yourself in the future.

3. BabelAcademy

Our online training which you are participating right now! We have many courses and are adding more courses frequently. Be sure to keep a lookout for new courses to increase your knowledge of the Babelway platform.

![](/images/other/edi-babelway-basics-start-here/ClassCurriculum.png)

![](/images/other/edi-babelway-basics-start-here/ClassCurriculum2.png)

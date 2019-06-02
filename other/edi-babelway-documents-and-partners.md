# 204 - Babelway - Documents and Partners

The [204 - Documents and Partners](https://academy.babelway.com/p/204-documents-and-partners) Babelway course will cover how to learn about two tools in Babelway that give you complete control of your messages and trading partners.

Within Babelway, there are tools that can give you improved visibility and control over your messages and channels. Using the 'Dcouments' and 'Partners' modules properly can give you detailed analytics, reduce channel setup, and keep your environments well organized. In this course we'll teach you the benefits of both tools and the skills needed to execute them correctly.

> Table of contents
> [[toc]]

## Introduction

### Overview: What are Documents and Partners? (2:52)

- Partners

![](/images/other/edi-babelway-documents-and-partners/WhatAreDocumentsAndPartners.png)

![](/images/other/edi-babelway-documents-and-partners/WhatAreDocumentsAndPartners2.png)

![](/images/other/edi-babelway-documents-and-partners/WhatAreDocumentsAndPartners3.png)

- Documents

![](/images/other/edi-babelway-documents-and-partners/WhatAreDocumentsAndPartners4.png)

![](/images/other/edi-babelway-documents-and-partners/WhatAreDocumentsAndPartners5.png)

WhatAreDocumentsAndPartners6

### Why use these tools?

While setting up documents and partners can require some time, there are many benefits to organizing your channels and environments with these tools.

**Leveraging partner information**

When you have reliable partner information for all of your channels, it can be very powerful to use in transformation and other areas.

For example, you can store very valuable information on a partner:

![](/images/other/edi-babelway-documents-and-partners/WhyUseTheseTools.png)

![](/images/other/edi-babelway-documents-and-partners/WhyUseTheseTools2.png)

![](/images/other/edi-babelway-documents-and-partners/WhyUseTheseTools3.png)

When you deal with many companies or have many users interacting with the environment, this can be a valuable storage space.

In addition, when you have this kind of information setup for each partner, you can leverage that in the transformation:

![](/images/other/edi-babelway-documents-and-partners/WhyUseTheseTools4.png)

The **partnerInfo()** function let's you use incoming data as an identifier of the partner, and then returns specific information about the partner that it matches. It serves as a kind of lookup-table for partner and company info. I explain later in this course how this setup is done.

After some thinking, you can see how having relevant partner information can be valuable to keeping your business organized.

**Viewing Document Information**

When you build and extract document information in Babelway, you can access information about business data within the documents. The default 'Monitoring' section in Babelway only reveals more transaction data, such as gateways, time-stamps, and file names. However, if you leverage Documents, you can use the same tools to view business data instead:

![](/images/other/edi-babelway-documents-and-partners/WhyUseTheseTools5.png)

Here you can see I can access my invoice data in a easy way. It resembles the monitoring section of files, but instead shows more relevant information. This data can then be downloaded and manipulated for other sources.

## Partners

### Setting up a new Partner

Creating a new partner is very easy. Follow these steps to create a new partner:

1. Under 'Channels' , select 'Partners' and press 'Create Partner'

![](/images/other/edi-babelway-documents-and-partners/SettingUpANewPartner.png)

2. Enter in specific information about that partner. The more information you have, the more valuable the partner record will be.

![](/images/other/edi-babelway-documents-and-partners/SettingUpANewPartner2.png)

3. Next, go to the 'Information' tab of that partner and enter in more information as necessary.

![](/images/other/edi-babelway-documents-and-partners/SettingUpANewPartner3.png)

And that's it! You now have a partner created and can assign it to gateways and messages.

### Using Partners in Channels (2:00)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels.png)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels2.png)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels3.png)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels4.png)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels5.png)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels6.png)

![](/images/other/edi-babelway-documents-and-partners/UsingPartnersInChannels7.png)

### Reporting on Partner Activity (1:10)

![](/images/other/edi-babelway-documents-and-partners/ReportingOnPartnerActivity.png)

![](/images/other/edi-babelway-documents-and-partners/ReportingOnPartnerActivity2.png)

![](/images/other/edi-babelway-documents-and-partners/ReportingOnPartnerActivity3.png)

![](/images/other/edi-babelway-documents-and-partners/ReportingOnPartnerActivity4.png)
ReportingOnPartnerActivity5

## Documents

### Creating a New Document

Documents are created in Babelway to give you more business-level information about your messages flowing through your system. You can create a document for each transaction type (invoice, purchase order, etc.) and then map a message definition to that document. Afterwards, whenever a message comes in, it will pull the relevant information based on your mapping and make it available in the monitoring section.

To start, you must first create a document type to use. This can be done in the following steps:

1. Create a document by going to Admin > Environment Settings > Document Types and click 'Create Document Type'

![](/images/other/edi-babelway-documents-and-partners/CreatingANewDocument.png)

2. Choose a document name, add any fields you wish to store on that document (this will be used for mapping later). If you wish, you can customize the display of the document in the monitoring section (for new users, the default will likely be sufficient).

![](/images/other/edi-babelway-documents-and-partners/CreatingANewDocument2.png)

### Mapping to Your New Document (3:49)

- Mapping from `Message OUT`

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument2.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument3.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument4.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument5.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument6.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument7.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument8.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument9.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument10.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument11.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument12.png)

- Mapping from `Message IN`

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument13.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument14.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument15.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument16.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument17.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument18.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument19.png)

![](/images/other/edi-babelway-documents-and-partners/MappingToYourNewDocument20.png)

### Viewing Document Information (1:33)

![](/images/other/edi-babelway-documents-and-partners/ViewingDocumentInformation.png)

![](/images/other/edi-babelway-documents-and-partners/ViewingDocumentInformation2.png)

### Task #1

Now it's your turn!

**Go into your environment and create at least 2 partners and assign them to the gateways they use to connect. **

- Create a new Partner

![](/images/other/edi-babelway-documents-and-partners/Task1.png)

- Put `Partner 1` for name, then add one Identifier select `CBE` with `CBE1` and `VAT` with `IE6727282783`. Finally add a contact With `name partner 1` for name and `name@partner1.com` for email.

![](/images/other/edi-babelway-documents-and-partners/Task12.png)

![](/images/other/edi-babelway-documents-and-partners/Task13.png)

![](/images/other/edi-babelway-documents-and-partners/Task14.png)

![](/images/other/edi-babelway-documents-and-partners/Task15.png)

![](/images/other/edi-babelway-documents-and-partners/Task16.png)

- Create another new Partner

![](/images/other/edi-babelway-documents-and-partners/Task17.png)

- Use one of the `Carrefour` ones:

![](/images/other/edi-babelway-documents-and-partners/Task18.png)

![](/images/other/edi-babelway-documents-and-partners/Task19.png)

![](/images/other/edi-babelway-documents-and-partners/Task110.png)

![](/images/other/edi-babelway-documents-and-partners/Task111.png)

![](/images/other/edi-babelway-documents-and-partners/Task112.png)

![](/images/other/edi-babelway-documents-and-partners/Task113.png)

**Then, create a document type with the information you find relevant for that document.**

![](/images/other/edi-babelway-documents-and-partners/Task114.png)

- Put `Invoice` for `Name`, and add `Number-String`, `Date-Date`, `Records-Integer` and `TotalAmount-Number`

![](/images/other/edi-babelway-documents-and-partners/Task115.png)

![](/images/other/edi-babelway-documents-and-partners/Task116.png)

**
Finally, using one of your channels, map a message in to the Document type you created.**

- Select `Cannel 1 File`

![](/images/other/edi-babelway-documents-and-partners/Task117.png)

- Select `Partner 1` for `Partner`

![](/images/other/edi-babelway-documents-and-partners/Task118.png)

![](/images/other/edi-babelway-documents-and-partners/Task119.png)

- Click on `Extra processings` from `Message IN`

![](/images/other/edi-babelway-documents-and-partners/Task120.png)

- Add a new one

![](/images/other/edi-babelway-documents-and-partners/Task121.png)

- Select `Document extractor`

![](/images/other/edi-babelway-documents-and-partners/Task122.png)

- Click on `Edit`

![](/images/other/edi-babelway-documents-and-partners/Task123.png)

![](/images/other/edi-babelway-documents-and-partners/Task124.png)

![](/images/other/edi-babelway-documents-and-partners/Task125.png)

![](/images/other/edi-babelway-documents-and-partners/Task126.png)

![](/images/other/edi-babelway-documents-and-partners/Task127.png)

![](/images/other/edi-babelway-documents-and-partners/Task128.png)

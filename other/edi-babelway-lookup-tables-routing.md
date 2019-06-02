# 202 - Babelway - Lookup Tables & Routing

The [202 - Lookup Tables & Routing](https://academy.babelway.com/p/201-lookup-tables-routing) Babelway course will cover Looking into more specific tools in the Babelway Platform.

In this course, we'll cover some specific tools within Babelway that you can use to better control flow of data. This course will focus on the lookup table functions and use within the platform as well as how routing occurs within the platform. This will allow dynamic use of data, updating tables of data, routing based on specific data requirements, and populated fields dynamically from tables.

The agenda will include:

- Lookup Tables
- Lookup Functions and Gateway
- Metadata and Regex
- Routing

> Table of contents
> [[toc]]

## Lookup Tables

### Lookup Table Basics (2:03)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics2.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics3.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics4.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics5.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics6.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics7.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics8.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableBasics9.png)

### Lookup Table Functions

There are multiple functions you can use in the transformation to leverage lookup tables.

**lookupTableValue()**

This is the basic lookup table function. It simply calls one column by matching another column in the table.
The attributes of the function are:

- **lookupTable** – Name of table to use

- **sourceColumn** – Column to match data

- **valueColumn** – Column to return data

- **sourceValue** – field to use for matching data

- **defaultValue** – What to do when no match is found

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableFunctions.png)

**lookupTableValueMultiCriteria()**

This is the same as **lookupTableValue()**, but instead two columns must match to pull data.

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableFunctions2.png)

**incrementLookupTableValue()**

This is used for numbers that need to increase after each message that calls the table.

ex: control numbers, unique IDs, record count

Do set this up, create a table with two columns, one as identifying value (ex: mycounter1), one as the number to call (probably starting at 0)

Using the function will return a number and then increase that number for next use.

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableFunctions3.png)

**setLookupTableEntryValue()**

This is used to write data from the message to the lookup table, thus updating your lookup table values with each message. The attributes are:

- **targetColumn** – Column to be updated with new value

- **targetValue** – Value to write into table

- **sourceColumn** – Column to identify which row to update

- **sourceValue** – Data used to match in the table

### Lookup Table Gateway (1:53)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway2.png)

- We can populate the `Lookup Table` by using `Import data From CSV`

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway3.png)

- But we also can use a Channel to perform the population.

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway4.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway5.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway6.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway7.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway8.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway9.png)

![](/images/other/edi-babelway-lookup-tables-routing/LookupTableGateway10.png)

### Task #1

#### Documents attached to the Task

> UoM Changes.csv

```
Partner Unit of Measure Value,ERP Unit of Measure Value
EA,Each
FT,Foot
UN,Unit
DZ,Dozen
PC,Piece
```

#### Create a lookup table to manipulate unit of measure

If EA, then Each; if FT, then Foot; if UT, then Unit, If none, then original UoM

![](/images/other/edi-babelway-lookup-tables-routing/Task1.png)

- Put `UoM Changes` for `Name`, `Partner Unit of Measure Value` for `Column1` and `ERP Unit of Measure Value` for `Column2`

![](/images/other/edi-babelway-lookup-tables-routing/Task12.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task13.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task14.png)

- Use the new `Lookup Table` in a transformation.

![](/images/other/edi-babelway-lookup-tables-routing/Task15.png)

#### Create a data import channel for that lookup table

Use the CSV UoM Changes document as the inbound message

![](/images/other/edi-babelway-lookup-tables-routing/Task16.png)

- Put `UoM Lookup Table Channel` for `Name`

![](/images/other/edi-babelway-lookup-tables-routing/Task17.png)

- Select `CSV` for `Message OUT` Type

![](/images/other/edi-babelway-lookup-tables-routing/Task18.png)

- Choose `UoM Changes.csv` for `Sample file (text)`

![](/images/other/edi-babelway-lookup-tables-routing/Task19.png)

- Select `Lookup Table` for `gateway OUT` type.

![](/images/other/edi-babelway-lookup-tables-routing/Task110.png)

- Select `UoM Changes` for `Lookup Table Id`

![](/images/other/edi-babelway-lookup-tables-routing/Task111.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task112.png)

- Select `CSV` for `Message IN` type

![](/images/other/edi-babelway-lookup-tables-routing/Task113.png)

- Choose `UoM Changes.csv` for `Sample file (text)`

![](/images/other/edi-babelway-lookup-tables-routing/Task114.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task115.png)

- Assign the `Transform` fields

![](/images/other/edi-babelway-lookup-tables-routing/Task116.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task117.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task118.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task119.png)

- Add a test case to import the `UoM Changes.csv` file.

![](/images/other/edi-babelway-lookup-tables-routing/Task120.png)

- Put `Add UoM Changes.csv file` to `Name` and choose `UoM Changes.csv` for `Message in`

![](/images/other/edi-babelway-lookup-tables-routing/Task121.png)

- Run the `test case`

![](/images/other/edi-babelway-lookup-tables-routing/Task122.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task123.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task124.png)

- The test cases don't perform the `Gateway OUT` step, so we need to Create a new `Gateway IN` to send the file by `email`

![](/images/other/edi-babelway-lookup-tables-routing/Task125.png)

- Put `UoM.LookupTable@eu1.babelway.net` for `Eamil address`

![](/images/other/edi-babelway-lookup-tables-routing/Task126.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task127.png)

- Turn on the channel.

![](/images/other/edi-babelway-lookup-tables-routing/Task128.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task129.png)

- Send an email with the file.

![](/images/other/edi-babelway-lookup-tables-routing/Task130.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task131.png)

- Check if it worked.

![](/images/other/edi-babelway-lookup-tables-routing/Task132.png)

- In fact we don't need any transformation, so the `Message IN` type will be `NOT DEFINED`

![](/images/other/edi-babelway-lookup-tables-routing/Task133.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task134.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task135.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task136.png)

- We need to put the transform of `No Transformation`

![](/images/other/edi-babelway-lookup-tables-routing/Task137.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task138.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task139.png)

- Deploy the changes.

![](/images/other/edi-babelway-lookup-tables-routing/Task140.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task141.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task142.png)

- Send another email

![](/images/other/edi-babelway-lookup-tables-routing/Task143.png)

- Check if it has worked.

![](/images/other/edi-babelway-lookup-tables-routing/Task144.png)

It is still not working

```xml
.
.
.
<Log>cp2 gatewaymail 2019-05-26 21:14:31.180 INFO [com.babelway.messaging.gateway.GatewayInHelper] : UUID = eb37ace3-52a8-4d61-a62c-0d4c7155b086 - HubId = 33058 - GatewayId = 673872
cp2 gatewaymail 2019-05-26 21:14:31.180 INFO [com.babelway.messaging.gateway.GatewayInHelper] : eb37ace3-52a8-4d61-a62c-0d4c7155b086 : Gateway In processing on cp2 ...
ap1 messagingengine 2019-05-26 21:14:31.360 INFO [com.babelway.messaging.execution.MessageProcessor] : eb37ace3-52a8-4d61-a62c-0d4c7155b086 : Message Service processing on ap1 ...
ap1 messagingengine 2019-05-26 21:14:32.142 DEBUG [com.babelway.messaging.transformation.AbstractMessageDefinitionIn] : Md IN (673873) executed in 0ms.
ap1 messagingengine 2019-05-26 21:14:32.142 DEBUG [com.babelway.messaging.transformation.AbstractTransformation] : Transformation (673874) executed in 0ms.
ap1 messagingengine 2019-05-26 21:14:32.143 ERROR [com.babelway.messaging.execution.MessageProcessor] : Message eb37ace3-52a8-4d61-a62c-0d4c7155b086 : processed with error : Content is not allowed in prolog.
Content is not allowed in prolog.
&#009;at com.servingxml.app.xmlpipeline.XmlPipeline.execute(XmlPipeline.java:137)
&#009;at com.servingxml.components.inverserecordmapping.SubtreeRecordReader.readRecords(SubtreeRecordReader.java:119)
&#009;at com.servingxml.components.recordio.AbstractRecordFilter.readRecords(AbstractRecordFilter.java:48)
&#009;at com.servingxml.components.recordio.RecordWriterFilterAdaptor.readRecords(RecordWriterFilterAdaptor.java:39)
&#009;at com.servingxml.components.recordio.RecordPipeline.execute(RecordPipeline.java:67)
&#009;at com.servingxml.components.recordio.RecordStreamBuilderImpl.execute(RecordStreamBuilderImpl.java:69)
&#009;at com.servingxml.components.service.ServiceImpl.execute(ServiceImpl.java:64)
&#009;at com.babelway.messaging.transformation.flatfile.ServingXmlService.invokeServingXml(ServingXmlService.java:94)
&#009;at com.babelway.messaging.transformation.csv.XmlToCsv.xmlToMessageFormat(XmlToCsv.java:47)
&#009;at com.babelway.messaging.transformation.AbstractMessageDefinitionOut.execute(AbstractMessageDefinitionOut.java:476)
&#009;at com.babelway.messaging.execution.MessageProcessor.messageDefinitionOutStep(MessageProcessor.java:439)
&#009;at com.babelway.messaging.execution.MessageProcessor.processMessage(MessageProcessor.java:81)
&#009;at com.babelway.messaging.execution.MessagingEngineController.processMessageFromQueue(MessagingEngineController.java:551)
&#009;at com.babelway.messaging.execution.MessagingEngineController.access$000(MessagingEngineController.java:97)
&#009;at com.babelway.messaging.execution.MessagingEngineController$ProcessMessageRunnable.run(MessagingEngineController.java:510)
&#009;at com.babelway.util.concurrent.BabelwayThreadPoolExecutor.runWorker(BabelwayThreadPoolExecutor.java:1140)
&#009;at com.babelway.util.concurrent.BabelwayThreadPoolExecutor$Worker.run(BabelwayThreadPoolExecutor.java:615)
&#009;at java.lang.Thread.run(Thread.java:748)
Caused by: org.xml.sax.SAXParseException; systemId: file:///com.servingxml.io.cache.DefaultKey38376182; lineNumber: 1; columnNumber: 1; Content is not allowed in prolog.
&#009;at com.sun.org.apache.xerces.internal.parsers.AbstractSAXParser.parse(AbstractSAXParser.java:1239)
&#009;at com.sun.org.apache.xerces.internal.jaxp.SAXParserImpl$JAXPSAXParser.parse(SAXParserImpl.java:643)
&#009;at com.servingxml.io.saxsource.StreamXmlReaderAdaptor.parse(StreamXmlReaderAdaptor.java:119)
&#009;at com.servingxml.app.xmlpipeline.XmlPipeline.execute(XmlPipeline.java:127)
&#009;... 17 more
ap1 messagingengine 2019-05-26 21:14:32.143 INFO [com.babelway.messaging.execution.MessageProcessor] : eb37ace3-52a8-4d61-a62c-0d4c7155b086 : Terminate processing on ap1 ...
ap1 messagingengine 2019-05-26 21:14:32.143 DEBUG [com.babelway.messaging.notification.NotificationAction] : Notification for message eb37ace3-52a8-4d61-a62c-0d4c7155b086 is null.
ap1 messagingengine 2019-05-26 21:14:32.143 DEBUG [com.babelway.messaging.notification.NotificationAction] : No notification for eb37ace3-52a8-4d61-a62c-0d4c7155b086 for channel=Channel(673860)
</Log>
.
.
.
```

## Routing

### Metadata

Before we learn about routing, we must learn more about Metadata and Regex (important when using routing).

For Metadata, the Routing tool uses it to choose 'where to look' when executing routing rules.

Metadata is a variety of keys that store information. Some are automatically generated, some can be created by the user in the transformation.

Babelway generated Metadata can be found here: https://babelway.zendesk.com/hc/en-us/articles/360010052654-4-12-2-System-Metadata and https://babelway.zendesk.com/hc/en-us/articles/360010169713

In the transformation, you can create a user defined metadata, and then map to this field. Whatever data is added with the mapping can be called with the user defined metadata.

![](/images/other/edi-babelway-lookup-tables-routing/Metadata.png)

It's also important to remember the extra processing function 'Message Identifier' . This adds more metadata that can be very useful in routing situations:

- **Universal_router_type** : ‘ORDERS’, ‘INVOIC’, etc.

- **Universal_router_format** : ‘EDIFACT’, ‘X12’, etc.

- **Universal_router_version** : ’96A’, ‘4010’

- **Universal_router_sender** : Sender ID

- **Universal_router_Receiver** : Receiver ID

### Regular Expressions (Regex)

Regex is used in routing as a **what to look for** when executing routing rules.

The most useful regex syntax for routing are:

- **.\*datatomatch.\*** - the syntax .\* mean match anything. So you can use this to look into the whole file for a specific string, and then say matach anything before and after that string.

- **.\*\\.xml, .\*\\.edi** - these are simple matches of the file extension. You can use the metadata of the file name and then just route based on the file extension.

- **INV\*.\*\*.\*\\.xml** - this is a more specific example of filename matching. You can see there is more control over what you want to match for routing purposes.

- **(ABC|123)** - this is an example of the 'OR' syntax for regex, which can be very useful for routing multiple scenarios. Perhaps one channel you want to allow more than one scenario, the 'OR' syntax can help you accomplish this.

With regex, there is much more you can do, so we encourage you to undergo the exercises at https://regexone.com/

### Routing Functionality (3:39)

- Routing is tool that allows you to have one gateway but multiple channel on that gateway.

- This is the first channel.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality.png)

- We are going to create a second channel with the `Gateway IN` based on the one from the first channel.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality2.png)

- We are going to share the `gateway IN`

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality3.png)

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality4.png)

- As the `Gateway IN` is shared `Babelway` doesn't know which channel the information must send the message.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality5.png)

- So we need to put conditions to tell `Babelway` which one must be used.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality6.png)

- In this case we are going to use the context message to decide it.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality7.png)

- We are going to use Regular Expressions.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality8.png)

- We can even set a priority for each channel in case it cannot be decided by the conditions.

![](/images/other/edi-babelway-lookup-tables-routing/RoutingFunctionality9.png)

### Task #2

#### Documents attached to the task

> Channel 2 File.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>923975</invoiceNumber>
		<invoiceDate>2016-01-03</invoiceDate>
		<poNumber>4500185933</poNumber>
		<CustomerID>CUS102</CustomerID>
	</invoiceHeader>
	<invoiceDetail>
		<lineItem>
			<quantity>10</quantity>
			<unit>FT</unit>
			<unitPrice>10.99</unitPrice>
			<description>Materials</description>
		</lineItem>
	</invoiceDetail>
</invoice>
</request>
```

> Channel 1 File.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV123</invoiceNumber>
		<invoiceDate>2016-03-01</invoiceDate>
		<poNumber>4500064817</poNumber>
		<CustomerID>CUS101</CustomerID>
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

Complete the following tasks:

#### Create a channel routing to deal with incoming files for

- Channel 1 File

- Channel 2 File

**Requires:**

- Investigate file data, what makes them unique?

- Setup channels and share a gateway

- Possible to use Babelway metadata or create your own

- There is more than one solution!

- **We could use a regular expression like.** `<CustomerID>((.)*?)<\/CustomerID>`

- Create a new Channel

![](/images/other/edi-babelway-lookup-tables-routing/Task2.png)

- Put `Channel 1 File` for `Name`

![](/images/other/edi-babelway-lookup-tables-routing/Task22.png)

- Select `FTP Server` for `Gateway IN` type.

![](/images/other/edi-babelway-lookup-tables-routing/Task23.png)

- Put `ChannelFileExample` for `Username` and `Password` for `Password`.

![](/images/other/edi-babelway-lookup-tables-routing/Task24.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task25.png)

- Create a second Channel

![](/images/other/edi-babelway-lookup-tables-routing/Task26.png)

- Put `Channel 2 File` for `Name`

![](/images/other/edi-babelway-lookup-tables-routing/Task27.png)

- Select `FTP Server` for `Gateway IN` type.

![](/images/other/edi-babelway-lookup-tables-routing/Task28.png)

- Put `ChannelFileExample` for `Username` and `Password` for `Password`.

![](/images/other/edi-babelway-lookup-tables-routing/Task29.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task210.png)

- Create the FTP Server Gateway IN again but select the one previously used:

![](/images/other/edi-babelway-lookup-tables-routing/Task211.png)

- Select `Share`

![](/images/other/edi-babelway-lookup-tables-routing/Task212.png)

![](/images/other/edi-babelway-lookup-tables-routing/Task213.png)

- Select `Routings`

![](/images/other/edi-babelway-lookup-tables-routing/Task214.png)

- Add `XML Type` to `Message IN` for `Channel 1 File`

![](/images/other/edi-babelway-lookup-tables-routing/Task215.png)

- Selecrt `Channel 1 File.xml` for `Sample Xml`

![](/images/other/edi-babelway-lookup-tables-routing/Task216.png)

- Add `XML Type` to `Message IN` for `Channel 2 File`

![](/images/other/edi-babelway-lookup-tables-routing/Task217.png)

- Selecrt `Channel 1 File.xml` for `Sample Xml`

![](/images/other/edi-babelway-lookup-tables-routing/Task218.png)

- Review the `Routing`

![](/images/other/edi-babelway-lookup-tables-routing/Task219.png)

- Select `com_babelway_messaging_context_meswsage` with `<CustomerID>CUS101<\/CustomerID>` and priority `1` and `com_babelway_messaging_context_meswsage` with `<CustomerID>CUS102<\/CustomerID>` and priority `2`

![](/images/other/edi-babelway-lookup-tables-routing/Task220.png)

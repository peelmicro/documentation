# 103 - Babelway - Monitoring Messages

The [103 - Monitoring Messages](https://academy.babelway.com/p/monitoring-messages) Babelway course will cover the basic tools focused on monitoring the messages that flow through the Babelway Platform.

We will cover all tools necessary to monitor the flow of your data through the Babelway environment. We'll go over details of messages, statistics, and error handling.

```
Agenda includes:
Monitoring
Message Details
Statistics
Troubleshooting
Errors
Notifications
```

> Table of contents
> [[toc]]

## Monitoring

### What is a Message? (1:01)

![](/images/other/edi-babelway-monitoring-messages/WhatIsaMessage.png)

### Message Details

Each Message in Babelway contains a lot of information relevant to the files going through the system.

A message can be accessed in the **Monitoring** section of Babelway:

![](/images/other/edi-babelway-monitoring-messages/MessageDetails.png)

You can use the headers to filter through your system and find the messages you are looking for. When you click on the message, you are taken to the message details page:

![](/images/other/edi-babelway-monitoring-messages/MessageDetails2.png)

There is a lot of information about the message on this page. The most relevant pieces are:

**Summary** - The overview of the message information

- Date In Timestamp - So you know when the message was processed
- Status
- User Comment - An editable field that can be used among users to communicate on particular messages
- Channel - A link to the channel that processed this message
- Message In - A link to download the inbound message file (pre-transformation)
- Message Out - A link to download the outbound message file (post-transformation)

**Runtime Info**

- Timestamp - for further processing timestamps
- Key - Unique ID for the Message
- Reference - A field that can be mapped as metadata from the message in the transformation

**Internal Files**

- Step Files - Babelway internal files at different stages of processing - Useful for troubleshooting transformations.
- Other files - Context In/Out files are connection and processing logs - useful for troubleshooting connections.

### Message Statuses

Messages within Babelway can exist in a variety of statuses. The flow of a message status is:

![](/images/other/edi-babelway-monitoring-messages/MessageStatuses.png)

These message statuses are:

- Processing - Message is being processed by a Babelway channel
- Paused - Message Processing was temporarily stopped
- In Delivery - Message is being transferred to the target system. Processing is complete, but complete delivery requirements are not yet met (ex: the file has not yet been downloaded by the partner).
- Error - Message Processing is completely finished but there was an error in one step of the process
- Error (Closed) - User action has closed a message in error.
- Success - Message Processing is completely finished with everything happening as requested/expected.

### Reports and Statistics (1:00)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics2.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics3.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics4.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics5.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics6.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics7.png)

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics8.png)

In addition to the monitoring message section, Babelway offers tools to view the statistics of your environment. Below the 'Monitoring' section, you can click on 'statistics':

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics9.png)

This can give you a high level view of your data and help you focus on trading partners that may need more attention because their messages are in error more frequently that what is acceptable. When you have several messages flowing through your channel, you can begin to see how valuable this information can be:

![](/images/other/edi-babelway-monitoring-messages/ReportsAndStatistics10.png)

## Errors & Troubleshooting

### Understanding Errors (2:21)

![](/images/other/edi-babelway-monitoring-messages/UnderstandingErrors.png)

![](/images/other/edi-babelway-monitoring-messages/UnderstandingErrors2.png)

![](/images/other/edi-babelway-monitoring-messages/UnderstandingErrors3.png)

### Fixing Errors (3:14)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors2.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors3.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors4.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors5.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors6.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors7.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors8.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors9.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors10.png)

![](/images/other/edi-babelway-monitoring-messages/FixingErrors11.png)

## Notifications

### Creating a Notification (1:24)

![](/images/other/edi-babelway-monitoring-messages/CreatingANotification.png)

![](/images/other/edi-babelway-monitoring-messages/CreatingANotification2.png)

![](/images/other/edi-babelway-monitoring-messages/CreatingANotification3.png)

![](/images/other/edi-babelway-monitoring-messages/CreatingANotification4.png)

![](/images/other/edi-babelway-monitoring-messages/CreatingANotification5.png)

![](/images/other/edi-babelway-monitoring-messages/CreatingANotification6.png)

## Task #1

### Task #1

The following documents have been attached to the course:

> Basic XML invoice.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV123</invoiceNumber>
		<invoiceDate>2016-03-01</invoiceDate>
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

> Basic CSV Invoice.csv

```
Invoice Number,Invoice Date,PO Number,Quantity,Unit,Unit Price,Item Description
TEST01,11/23/2015,4500237392,10,,299.99,Ski Boots
TEST01,11/23/2015,4500237392,1,,19.99,Marketing Materials
TEST02,12/1/2015,4508390298,10,,49.99,Ski Poles
```

> XML File 2.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV123</invoiceNumber>
		<invoiceDate>2016-03-01</invoiceDate>
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

> XML File 1.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV123</invoiceNumber>
		<invoiceDate>2016-03-01</invoiceDate>
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

Complete the following task to test your skills on message monitoring.

Tasks:

- Create a channel

![](/images/other/edi-babelway-monitoring-messages/Task1.png)

![](/images/other/edi-babelway-monitoring-messages/Task12.png)

1. Gateway IN: SMTP Email, yourname@

![](/images/other/edi-babelway-monitoring-messages/Task13.png)

- Put `monitoringmessages`

![](/images/other/edi-babelway-monitoring-messages/Task14.png)

2. Message IN: Basic XML Invoice

![](/images/other/edi-babelway-monitoring-messages/Task15.png)

![](/images/other/edi-babelway-monitoring-messages/Task16.png)

![](/images/other/edi-babelway-monitoring-messages/Task17.png)

3. Message OUT: Basic CSV Invoice

![](/images/other/edi-babelway-monitoring-messages/Task18.png)

![](/images/other/edi-babelway-monitoring-messages/Task19.png)

![](/images/other/edi-babelway-monitoring-messages/Task110.png)

![](/images/other/edi-babelway-monitoring-messages/Task111.png)

4. Gateway OUT: Null

![](/images/other/edi-babelway-monitoring-messages/Task112.png)

![](/images/other/edi-babelway-monitoring-messages/Task112b.png)

- Map all fields

![](/images/other/edi-babelway-monitoring-messages/Task113.png)

![](/images/other/edi-babelway-monitoring-messages/Task114.png)

![](/images/other/edi-babelway-monitoring-messages/Task115.png)

![](/images/other/edi-babelway-monitoring-messages/Task116.png)

![](/images/other/edi-babelway-monitoring-messages/Task117.png)

![](/images/other/edi-babelway-monitoring-messages/Task118.png)

- Use date function on invoiceDate map : changeDateTimeFormat([invoiceDate], ‘yyyyMMdd’, ‘MM/dd/yy’)

![](/images/other/edi-babelway-monitoring-messages/Task119.png)

![](/images/other/edi-babelway-monitoring-messages/Task120.png)

![](/images/other/edi-babelway-monitoring-messages/Task121.png)

![](/images/other/edi-babelway-monitoring-messages/Task122.png)

![](/images/other/edi-babelway-monitoring-messages/Task123.png)

![](/images/other/edi-babelway-monitoring-messages/Task124.png)

![](/images/other/edi-babelway-monitoring-messages/Task125.png)

- Create notification to your email on Failure. Insert ‘URGENT!’ into subject of failed message

![](/images/other/edi-babelway-monitoring-messages/Task126.png)

![](/images/other/edi-babelway-monitoring-messages/Task127.png)

![](/images/other/edi-babelway-monitoring-messages/Task128.png)

![](/images/other/edi-babelway-monitoring-messages/Task129.png)

- Deploy

![](/images/other/edi-babelway-monitoring-messages/Task130.png)

![](/images/other/edi-babelway-monitoring-messages/Task131.png)

- Send via Email XML File 1 and XML File 2 to the SMTP Email gateway you created

![](/images/other/edi-babelway-monitoring-messages/Task132.png)

![](/images/other/edi-babelway-monitoring-messages/Task133.png)

- View results, if any errors, resolve within mapping, deploy again

![](/images/other/edi-babelway-monitoring-messages/Task134.png)

![](/images/other/edi-babelway-monitoring-messages/Task135.png)

![](/images/other/edi-babelway-monitoring-messages/Task136.png)

![](/images/other/edi-babelway-monitoring-messages/Task137.png)

- Resubmit errored messages

![](/images/other/edi-babelway-monitoring-messages/Task138.png)

![](/images/other/edi-babelway-monitoring-messages/Task139.png)

![](/images/other/edi-babelway-monitoring-messages/Task140.png)

![](/images/other/edi-babelway-monitoring-messages/Task141.png)

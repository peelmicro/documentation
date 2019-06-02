# 102 - Babelway - Basic Transformation

The [102 - Basic Transformation](https://academy.babelway.com/p/transformation-basics) Babelway course will cover the basics of the transformation tool in Babelway. This will equip you with the knowledge to build your own channels and transformations.

```
Agenda includes:
Transformation
Drag and Drop
Easy Function Editor
Test Cases
Loops
Task #1: Create a channel, map all fields
Task #2: Use functions date change and concat, make a test case
```

> Table of contents
> [[toc]]

## Transformations

### Understanding Transformation (1:07)

![](/images/other/edi-babelway-basic-transformation/UnderstandingTransformation.png)

### Message Representation

**Tree Format**
Babelway represents each messages type in a 'tree' format. This gives you a visual representation of each field of data within a file.

For example, an **XML** file may look like this:

![](/images/other/edi-babelway-basic-transformation/MessageRepresentation.png)

If you were to upload it into Babelway, it would be represented like this:

![](/images/other/edi-babelway-basic-transformation/MessageRepresentation2.png)

Each structure is a little different:

**X12:**

![](/images/other/edi-babelway-basic-transformation/MessageRepresentation3.png)

**CSV:**

![](/images/other/edi-babelway-basic-transformation/MessageRepresentation4.png)

In a later lecture, we'll go over visual transformation and you'll start to see how these tree structures interact with each other. The idea behind message definitions is that each node represents some data within the file. Isolating each piece of data gives you the ability to map it to other tree structures and manipulate that data with functions.

**Data Nodes**

Within the tree structure, Each line/square represents some data. The color of the square identifies what kind of data it is:

`Blue Square` - Data Node, changes with each message

`Green Square` - Data Node, default or expected value

`White Square` - Group Node, structural

Typically, you will map `blue` and `green` square nodes. An example of a `blue` node might be an `Invoice Number`, something you expect to change with each new file. An example of a `green` node might be a `Document Type Code`, something you might expect to be the same from one file to the next. An example of a `white` node might be the `Invoice group`, a structural data node that encompasses all the data for one invoice.

### Drag and Drop Mapping (1:04)

![](/images/other/edi-babelway-basic-transformation/DragAndDropMapping.png)

![](/images/other/edi-babelway-basic-transformation/DragAndDropMapping2.png)

![](/images/other/edi-babelway-basic-transformation/DragAndDropMapping3.png)

![](/images/other/edi-babelway-basic-transformation/DragAndDropMapping4.png)

![](/images/other/edi-babelway-basic-transformation/DragAndDropMapping5.png)

## Loops

### Understanding Loops

Loops are an essential part of Babelway mappings. Loops are used when White square group nodes repeat within a file. Examples of when loops are used:

- Multiple invoices in one file
- Multiple line items on an invoice
- Multiple sub-totals in a line item

Whenever you use data within the structural group, you must map the loop above it.

Here is an XML Invoice file with repeating groups:

![](/images/other/edi-babelway-basic-transformation/UnderstandingLoops.png)

You can see that the tag `<invoice>` and `<lineItem>` repeats within the file. Thus, loops must be created on these group nodes. The file looks like this in Babelway:

![](/images/other/edi-babelway-basic-transformation/UnderstandingLoops2.png)

You can see that there are 'Loop' nodes created above the `<invoice>` group node and the `<lineItem>` group node.

These loops will be mapped to loops on the outgoing message:

![](/images/other/edi-babelway-basic-transformation/UnderstandingLoops3.png)

- This document is attached to the course.

> Multiple XML invoice.xml

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
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV124</invoiceNumber>
		<invoiceDate>20160301</invoiceDate>
		<poNumber>4500064817</poNumber>
	</invoiceHeader>
	<invoiceDetail>
		<lineItem>
			<quantity>10</quantity>
			<unit>EA</unit>
			<unitPrice>21.99</unitPrice>
			<description>Tape</description>
		</lineItem>
		<lineItem>
			<quantity>1</quantity>
			<unit>EA</unit>
			<unitPrice>104.99</unitPrice>
			<description>Drill</description>
		</lineItem>
				<lineItem>
			<quantity>7</quantity>
			<unit>EA</unit>
			<unitPrice>20</unitPrice>
			<description>Boards</description>
		</lineItem>
	</invoiceDetail>
</invoice>
</request>
```

### Mapping Loops (4:11)

![](/images/other/edi-babelway-basic-transformation/MappingLoops.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops2.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops3.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops4.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops5.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops6.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops7.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops8.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops9.png)

![](/images/other/edi-babelway-basic-transformation/MappingLoops10.png)

### Adding Loops

Sometimes, it may be necessary to add loops manually. Examples of this are XML files uploaded via a sample file, or some flat file definitions.

This can be done in the Message In or Out tab. In this example XML, we see that a tree has been created for all parts of the file:

![](/images/other/edi-babelway-basic-transformation/AddingLoops.png)

For the purpose of mapping, we don't need multiple tree groups for each invoice and each lineItem, so we can delete them to get a clean sample. We choose the node that we want to delete, and press the 'delete' on the bottom right:

![](/images/other/edi-babelway-basic-transformation/AddingLoops2.png)

After that, we can manually create loops on the group nodes that repeat (in this case invoice and lineItem):

![](/images/other/edi-babelway-basic-transformation/AddingLoops3.png)

### Task #1

**Task #1.1**

> Multiple XML invoice.xml

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
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV124</invoiceNumber>
		<invoiceDate>20160301</invoiceDate>
		<poNumber>4500064817</poNumber>
	</invoiceHeader>
	<invoiceDetail>
		<lineItem>
			<quantity>10</quantity>
			<unit>EA</unit>
			<unitPrice>21.99</unitPrice>
			<description>Tape</description>
		</lineItem>
		<lineItem>
			<quantity>1</quantity>
			<unit>EA</unit>
			<unitPrice>104.99</unitPrice>
			<description>Drill</description>
		</lineItem>
				<lineItem>
			<quantity>7</quantity>
			<unit>EA</unit>
			<unitPrice>20</unitPrice>
			<description>Boards</description>
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

- Create a new channel, Email Gateway In, FTP Server Gateway Out, XML Message In, CSV Message Out

- Put the `BasicTransformationTask11` name.

![](/images/other/edi-babelway-basic-transformation/Task11.png)

![](/images/other/edi-babelway-basic-transformation/Task112.png)

- Email Address: `basictransformation11@eu1.babelway.net`

![](/images/other/edi-babelway-basic-transformation/Task113.png)

- User: `juan.pablo.perez` Password: `password` Directory: `/basictransformation11`

![](/images/other/edi-babelway-basic-transformation/Task114.png)

![](/images/other/edi-babelway-basic-transformation/Task115.png)

- Select `Multiple XML invoice.xml`

![](/images/other/edi-babelway-basic-transformation/Task116.png)

![](/images/other/edi-babelway-basic-transformation/Task117.png)

![](/images/other/edi-babelway-basic-transformation/Task118.png)

- Select `Basic CSV Invoice.csv`

![](/images/other/edi-babelway-basic-transformation/Task119.png)

![](/images/other/edi-babelway-basic-transformation/Task1110.png)

- Create Loops on XML Message

It already has the loops

![](/images/other/edi-babelway-basic-transformation/Task1111.png)

- Create Visual Transformation

![](/images/other/edi-babelway-basic-transformation/Task1112.png)

- Map all fields

![](/images/other/edi-babelway-basic-transformation/Task1113.png)

![](/images/other/edi-babelway-basic-transformation/Task1114.png)

![](/images/other/edi-babelway-basic-transformation/Task1115.png)

![](/images/other/edi-babelway-basic-transformation/Task1116.png)

![](/images/other/edi-babelway-basic-transformation/Task1117.png)

![](/images/other/edi-babelway-basic-transformation/Task1118.png)

![](/images/other/edi-babelway-basic-transformation/Task1119.png)

- Map XML Loops to CSV Loop

![](/images/other/edi-babelway-basic-transformation/Task1120.png)

- Save and test if it works.

![](/images/other/edi-babelway-basic-transformation/Task1121.png)

![](/images/other/edi-babelway-basic-transformation/Task1122.png)

![](/images/other/edi-babelway-basic-transformation/Task1123.png)

![](/images/other/edi-babelway-basic-transformation/Task1124.png)

- Send the email

![](/images/other/edi-babelway-basic-transformation/Task1125.png)

![](/images/other/edi-babelway-basic-transformation/Task1126.png)

- Check if the process has been executed on Babelway.

![](/images/other/edi-babelway-basic-transformation/Task1127.png)

- Change the email address to put properly `basictransformation11@eu1.babelway.net`

![](/images/other/edi-babelway-basic-transformation/Task1128.png)

![](/images/other/edi-babelway-basic-transformation/Task1129.png)

![](/images/other/edi-babelway-basic-transformation/Task1130.png)

![](/images/other/edi-babelway-basic-transformation/Task1131.png)

- Send the email again.

![](/images/other/edi-babelway-basic-transformation/Task1132.png)

- Check if the process has been executed with success:

![](/images/other/edi-babelway-basic-transformation/Task1133.png)

![](/images/other/edi-babelway-basic-transformation/Task1134.png)

- Open the message out:

![](/images/other/edi-babelway-basic-transformation/Task1135.png)

![](/images/other/edi-babelway-basic-transformation/Task1136.png)

![](/images/other/edi-babelway-basic-transformation/Task1137.png)

> Multiple XML invoice.csv

```
Invoice Number,Invoice Date,PO Number,Quantity,Unit,Unit Price,Item Description
INV123,20160301,4500064817,1,EA,1.99,Nails
INV124,20160301,4500064817,10,EA,21.99,Tape
```

- It is not correct because we need another loop for each detail

![](/images/other/edi-babelway-basic-transformation/Task1138.png)

![](/images/other/edi-babelway-basic-transformation/Task1139.png)

![](/images/other/edi-babelway-basic-transformation/Task1140.png)

![](/images/other/edi-babelway-basic-transformation/Task1141.png)

![](/images/other/edi-babelway-basic-transformation/Task1142.png)

![](/images/other/edi-babelway-basic-transformation/Task1143.png)

- Send the email again:

![](/images/other/edi-babelway-basic-transformation/Task1144.png)

- Check if it has been processed correctly

![](/images/other/edi-babelway-basic-transformation/Task1145.png)

![](/images/other/edi-babelway-basic-transformation/Task1146.png)

It is not working again.

- The detail fields were removed. We have to add them again:

![](/images/other/edi-babelway-basic-transformation/Task1147.png)

![](/images/other/edi-babelway-basic-transformation/Task1148.png)

![](/images/other/edi-babelway-basic-transformation/Task1149.png)

- Send the email again

![](/images/other/edi-babelway-basic-transformation/Task1150.png)

- Check if it has been processed correctly this time

![](/images/other/edi-babelway-basic-transformation/Task1151.png)

![](/images/other/edi-babelway-basic-transformation/Task1152.png)

_It is not working again!_

**Task #1.2**

> Simple XML invoice.xml

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

> Basic X12 Invoice.txt

```
ISA*00*          *00*          *01*ABCCOM         *12*9999999999     *101205*1710*U*00401*000001320*0*P*>
GS*IN*4405197800*999999999*20101205*1710*1320*X*004010VICS
ST*810*1004
BIG*20101204*217224*20101204*P792940
REF*DP*099
REF*IA*99999
N1*ST**92*123
ITD*01*3***0**60
IT1*1*4*EA*8.60**UP*999999330023
PID*F****Item Description
SAC*C*D240***100
TDS*21740
CAD*****GTCT**BM*99999
CTT*8
SE*13*1004
GE*1*1320
IEA*1*000001320
```

- Create another new channel, X12 Message In, XML Message Out

- Put the `BasicTransformationTask11` name.

![](/images/other/edi-babelway-basic-transformation/Task12.png)

- Select `Basic X12 Invoice.txt`

![](/images/other/edi-babelway-basic-transformation/Task122.png)

![](/images/other/edi-babelway-basic-transformation/Task122b.png)

- Select `Simple XML invoice.xml`

![](/images/other/edi-babelway-basic-transformation/Task123.png)

![](/images/other/edi-babelway-basic-transformation/Task124.png)

![](/images/other/edi-babelway-basic-transformation/Task125.png)

- Create Loops on XML Message

![](/images/other/edi-babelway-basic-transformation/Task126.png)

- Create Visual Transformation

![](/images/other/edi-babelway-basic-transformation/Task127.png)

- Map all fields on XML (some investigation required!)

![](/images/other/edi-babelway-basic-transformation/Task128.png)

![](/images/other/edi-babelway-basic-transformation/Task129.png)

![](/images/other/edi-babelway-basic-transformation/Task1210.png)

![](/images/other/edi-babelway-basic-transformation/Task1211.png)

![](/images/other/edi-babelway-basic-transformation/Task1212.png)

![](/images/other/edi-babelway-basic-transformation/Task1213.png)

![](/images/other/edi-babelway-basic-transformation/Task1214.png)

- Map X12 Loops to XML Loops

![](/images/other/edi-babelway-basic-transformation/Task1215.png)

![](/images/other/edi-babelway-basic-transformation/Task1216.png)

If you need access to the Babelway platform, you can signup for a free trial by going to www.babelway.net and registering:

![](/images/other/edi-babelway-basic-transformation/Task1217.png)

![](/images/other/edi-babelway-basic-transformation/Task1218.png)

![](/images/other/edi-babelway-basic-transformation/Task1219.png)

![](/images/other/edi-babelway-basic-transformation/Task1220.png)

## Functions

### Understanding Functions

Sometimes when mapping data, it is not a direct 1 to 1 mapping per field. In these cases, you can apply functions to manipulate data. Examples where functions are needed are:

- Change to data formats (like with a date field)
- Using multiple data nodes for one map
- Using arithmetic
- Conditional mapping behavior
- Using part of a data node

**Functions in Babelway**

Babelway functions are based on Xpath. Some functions are standard Xpath functions, while others are specific to Babelway. It is possible to use multiple functions per field if needed. You can use the 'Function Bar' or the 'Easy Function Editor'

![](/images/other/edi-babelway-basic-transformation/UnderstandingFunctions.png)

When using functions, you define the function you want to use and then input data for each parameter. Nodes from the tree can be dragged to the parameter:

![](/images/other/edi-babelway-basic-transformation/UnderstandingFunctions2.png)

The most commonly used functions in Babelway are:

- `changeDateTimeFormat()`
- `concat()` - for combining multiple fields
- `Arithmetic:` + - \* div
- `IF()` - conditional check on data
- `Substring()` - Using part of a field's data
- `currentDateTime()` - supply the current time in format yyyy-MM-dd HH:mm:ss.SSS

### Functions in Practice (4:44)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice.png)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice2.png)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice3.png)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice4.png)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice5.png)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice6.png)

![](/images/other/edi-babelway-basic-transformation/FunctionsInPractice7.png)

![](/images/other/edi-babelway-basic-transformation/FunctionInPractice8.png)

![](/images/other/edi-babelway-basic-transformation/FunctionInPractice9.png)

## Test Cases

### Using Test Cases

Test Cases are used to verify your mapping setup. They run through the latest 'Save' (not the last deployment). This gives you the ability to test your mappings without deploying a channel into a live state.

Test cases also show up in the monitoring section, so you can verify their successful processing status. They provide an easier way to testing channels than using external gateways (like having to upload a file to an FTP site just to test the mapping).

To create a Test case, click on 'Test cases' on the upper right hand side of the page:

![](/images/other/edi-babelway-basic-transformation/UsingTestCases.png)

Then click on 'Add a test case'

![](/images/other/edi-babelway-basic-transformation/UsingTestCases2.png)

Then, upload a sample file you wish to test:

![](/images/other/edi-babelway-basic-transformation/UsingTestCases3.png)

Once uploaded, you can click 'Run Test Case' to start the test. The result will show you success or failure and give you access to download the output file to verify the results.

### Task #2

Complete the following tasks:

- Go to channel created in Task #1

- Use changeDateTimeFormat() function: `In: yyyy-MM-dd` and `Out: MM/dd/yy`

![](/images/other/edi-babelway-basic-transformation/Task2.png)

- Use concat() function: `Add XML Unit Price +‘_‘+ Description to CSV Description`

![](/images/other/edi-babelway-basic-transformation/Task22.png)

- Use IF() Conditional function: `If XML field for Unit of Measure equals 'EA', then output 'Each', else use original Unit of Measure field`

![](/images/other/edi-babelway-basic-transformation/Task23.png)

![](/images/other/edi-babelway-basic-transformation/Task24.png)

- Add a test case with XML sample to verify functions

![](/images/other/edi-babelway-basic-transformation/Task25.png)

![](/images/other/edi-babelway-basic-transformation/Task26.png)

![](/images/other/edi-babelway-basic-transformation/Task27.png)

- Select `Message in:` iqual to `Multiple XML invoice.xml`

![](/images/other/edi-babelway-basic-transformation/Task28.png)

![](/images/other/edi-babelway-basic-transformation/Task29.png)

![](/images/other/edi-babelway-basic-transformation/Task210.png)

![](/images/other/edi-babelway-basic-transformation/Task211.png)

- Change the `formatIn`

![](/images/other/edi-babelway-basic-transformation/Task212.png)

![](/images/other/edi-babelway-basic-transformation/Task213.png)

![](/images/other/edi-babelway-basic-transformation/Task214.png)

- Change the `IF` condition:

![](/images/other/edi-babelway-basic-transformation/Task215.png)

![](/images/other/edi-babelway-basic-transformation/Task216.png)

![](/images/other/edi-babelway-basic-transformation/Task217.png)

- `Concat` doesn't work.

![](/images/other/edi-babelway-basic-transformation/Task218.png)

![](/images/other/edi-babelway-basic-transformation/Task219.png)

![](/images/other/edi-babelway-basic-transformation/Task220.png)

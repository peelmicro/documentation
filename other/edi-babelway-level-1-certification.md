# Babelway - Level 1 Certification

The [Level 1 Certification](https://academy.babelway.com/p/level-1-certifications) Babelway course is a hypothetical project that will result in a certification of the Babelway tool upon completion.

This course will give you the materials and prompt you with a hypothetical implementation project. Upon completion of the work, and submission for approval, the user can be awarded a level 1 Babelway certificate and signifies the users basic understanding of the Babelway tool and B2B integration concepts.

> Table of contents
> [[toc]]

## Documents attached to the course

> Contact Import XML Sample.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
   <contactImport>
      <systemInformation>
         <newContact>Y</newContact>
         <accountOwner>John Doe</accountOwner>
         <creationDate>2016-01-29</creationDate>
      </systemInformation>
      <personalInformation>
         <name>Jill Smith</name>
         <company>ABC Co.</company>
         <title>Project Manager</title>
         <language>EN</language>
         <country>US</country>
         <phone>555-552-9143</phone>
         <email>jill.smith@abcco.com</email>
      </personalInformation>
   </contactImport>
</request>
```

> Customer ERP Invoice Sample.xml

```xml
<request>
<invoice>
	<invoiceHeader>
		<invoiceNumber>INV123</invoiceNumber>
		<invoiceDate>20160301</invoiceDate>
		<poNumber>4500064817</poNumber>
		<VATAmount>435.20</VATAmount>
		<supplierNumber>4500074828</supplierNumber>
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
		<VATAmount>435.20</VATAmount>
		<supplierNumber>4500074828</supplierNumber>
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

> Customer ERP Order Sample.xml

```xml
<PurchaseOrders>
  <PurchaseOrder PurchaseOrderNumber="99503" OrderDate="1999-10-20">
    <Address Type="Shipping">
      <Name>Ellen Adams</Name>
      <Street>123 Maple Street</Street>
      <City>Mill Valley</City>
      <State>CA</State>
      <Zip>10999</Zip>
      <Country>USA</Country>
    </Address>
    <Address Type="Billing">
      <Name>Tai Yee</Name>
      <Street>8 Oak Avenue</Street>
      <City>Old Town</City>
      <State>PA</State>
      <Zip>95819</Zip>
      <Country>USA</Country>
    </Address>
    <DeliveryNotes>Please leave packages in shed by driveway.</DeliveryNotes>
    <Items>
      <Item PartNumber="872-AA">
        <ProductName>Lawnmower</ProductName>
        <Quantity>1</Quantity>
        <USPrice>148.95</USPrice>
        <Comment>Confirm this is electric</Comment>
      </Item>
      <Item PartNumber="926-AA">
        <ProductName>Baby Monitor</ProductName>
        <Quantity>2</Quantity>
        <USPrice>39.98</USPrice>
        <ShipDate>1999-05-21</ShipDate>
      </Item>
    </Items>
  </PurchaseOrder>
</PurchaseOrders>
```

> Customer ERP Order Sample_Multiple Orders.xml

```xml
<?xml version="1.0"?>
<PurchaseOrders>
  <PurchaseOrder PurchaseOrderNumber="99503" OrderDate="1999-10-20">
    <Address Type="Shipping">
      <Name>Ellen Adams</Name>
      <Street>123 Maple Street</Street>
      <City>Mill Valley</City>
      <State>CA</State>
      <Zip>10999</Zip>
      <Country>USA</Country>
    </Address>
    <Address Type="Billing">
      <Name>Tai Yee</Name>
      <Street>8 Oak Avenue</Street>
      <City>Old Town</City>
      <State>PA</State>
      <Zip>95819</Zip>
      <Country>USA</Country>
    </Address>
    <DeliveryNotes>Please leave packages in shed by driveway.</DeliveryNotes>
    <Items>
      <Item PartNumber="872-AA">
        <ProductName>Lawnmower</ProductName>
        <Quantity>1</Quantity>
        <USPrice>148.95</USPrice>
        <Comment>Confirm this is electric</Comment>
      </Item>
      <Item PartNumber="926-AA">
        <ProductName>Baby Monitor</ProductName>
        <Quantity>2</Quantity>
        <USPrice>39.98</USPrice>
        <ShipDate>1999-05-21</ShipDate>
      </Item>
    </Items>
  </PurchaseOrder>
  <PurchaseOrder PurchaseOrderNumber="99505" OrderDate="1999-10-22">
    <Address Type="Shipping">
      <Name>Cristian Osorio</Name>
      <Street>456 Main Street</Street>
      <City>Buffalo</City>
      <State>NY</State>
      <Zip>98112</Zip>
      <Country>USA</Country>
    </Address>
    <Address Type="Billing">
      <Name>Cristian Osorio</Name>
      <Street>456 Main Street</Street>
      <City>Buffalo</City>
      <State>NY</State>
      <Zip>98112</Zip>
      <Country>USA</Country>
    </Address>
    <DeliveryNotes>Please notify me before shipping.</DeliveryNotes>
    <Items>
      <Item PartNumber="456-NM">
        <ProductName>Power Supply</ProductName>
        <Quantity>1</Quantity>
        <USPrice>45.99</USPrice>
      </Item>
    </Items>
  </PurchaseOrder>
  <PurchaseOrder PurchaseOrderNumber="99504" OrderDate="1999-10-22">
    <Address Type="Shipping">
      <Name>Jessica Arnold</Name>
      <Street>4055 Madison Ave</Street>
      <City>Seattle</City>
      <State>WA</State>
      <Zip>98112</Zip>
      <Country>USA</Country>
    </Address>
    <Address Type="Billing">
      <Name>Jessica Arnold</Name>
      <Street>4055 Madison Ave</Street>
      <City>Buffalo</City>
      <State>NY</State>
      <Zip>98112</Zip>
      <Country>USA</Country>
    </Address>
    <Items>
      <Item PartNumber="898-AZ">
        <ProductName>Computer Keyboard</ProductName>
        <Quantity>1</Quantity>
        <USPrice>29.99</USPrice>
      </Item>
      <Item PartNumber="898-AM">
        <ProductName>Wireless Mouse</ProductName>
        <Quantity>1</Quantity>
        <USPrice>14.99</USPrice>
      </Item>
    </Items>
  </PurchaseOrder>
</PurchaseOrders>
```

> TradingPartner CSV Invoice Sample.csv

```
Invoice Number,Invoice Date,Due Date,Customer Code,Customer Reference,Line-Quantity,Line-Description,Line-Rate,Line-Charge Type,Line-Vat Amount,Line-Vat Rate
101,18/07/2011,28/07/2009,1,Customer 101 Invoice,2,Invoice line 1,2000,Sale of goods,0,0
102,18/07/2011,29/07/2009,1,Customer 102 Invoice,2,Invoice line 1,2000.01,Sale of goods,0,0
103,18/07/2011,30/07/2009,1,Customer 103 Invoice,2,Invoice line 1,2000.02,Sale of goods,0,0
104,18/07/2011,31/07/2009,1,Customer 104 Invoice,2,Invoice line 1,2000.03,Sale of goods,0,0
```

> TradingPartner CSV Order Sample.csv

```
Order #,Order Date,Order Status,Subtotal Inc. Tax,Shipping $,Item Description,Item SKU,Item Unit Price,Item Qty,Item Weight (oz),Warehouse Loc/Bin No.,Shipping First Name,Shipping Last Name,Shipping Company Name,Shipping Address Line 1,Shipping Address Line 2,Shipping City,Shipping State,Shipping Zip Code,Shipping Country,Email,Phone,Customer Notes
1617,6/12/2013,unfulfilled,212.8,40,Fujitsu 500GB backup drive,FJ123,112.8,1,20,A1 S3,Jackie,Kelmier,,609 Castle Ridge,Suite 445,Austin,TX,78746,United States,jackie@gmail.com,5324445555,Please ship before next weekend as I go on vacation
1617,6/12/2013,unfulfilled,,,Keyboard,K999,35,1,13,A4 S9,,,,,,,,,,,,
1617,6/12/2013,unfulfilled,,,Computer Mouse,C345,25,1,12,B2 S3,,,,,,,,,,,,
1616,6/12/2013,pending,25,0,Computer Mouse,C345,25,1,12,B2 S3,Patricia,Field,Patty Jams,800 S Congress,,Austin,TX,78704,United States,patty@pattyjams.com,9796665555,
1615,6/12/2013,pending,25,0,Computer Mouse,C345,25,1,12,B2 S3,Fernando,Paulo,,3801 Wilson,,Austin,TX,78704,United States,paulof@gmail.com,5647775533,
1614,6/12/2013,unfulfilled,87.1,22.3,iPhone 4S cover. Blue,I098a,39.8,1,4,M2 S1,Gerry,Johns,,600 California,,San Francisco,CA,94108,United States,Gerry@example.com,8752223335,
1614,6/12/2013,unfulfilled,,,Computer Mouse,C345,25,2,12,B2 S3,,,,,,,,,,,,
1613,6/11/2013,unfulfilled,58,22.3,Keyboard,K999,35.7,1,13,A4 S9,Lars,Hector,Little Finds,513 Doheny,,Beverly Hills,CA,90210,United States,lars@lhector.com,7568884433,
```

- The `Customer AS2Specification.zip` contains the followings documents:

1. `as2.babelway_legacy.crt` - **AS2 certificate**
1. `as2.babelway_legacy.p7b` - **Bundled certificate & Certificate Authority**
1. `AS2Specification.pdf` - **AS2 Specification**
1. `root.babelway_legacy.crt` - **AS2 certificate chain**

## Project Scenarios

### Scenario #1

In this scenario, we will be building a connection between a `Trading Partner` and a `Customer ERP system`. The `Customer` will be sending `Purchase Orders` to the `Trading Partner` and then the `Trading Partner` will return `Invoices` to the `Customer` .

The following information will help you complete this project scenario:

**Trading Partner Information**

`Communication Protocol` : 'We prefer an FTP retrieval and delivery'

`Message Format` : 'Our system processes CSV Import and Export. Sample files of CSV Orders and Invoices are attached.'

**Customer ERP Information**

`Communication Protocol` : 'We exchange information via AS2. Our AS2 specifications and certificate are attached.'

`Message Format` : 'Our system processes information via XML. Sample XML files are attached.'

`Special Information` : 'We require a notification to our Accounts Receivable Department whenever a new invoice is received. The email address for this department is: AR@customer.com'

If you have any questions on the scenario, you may direct them to jeff.douglas@babelway.com

- We need to import the `Customer AS2` certificate.

![](/images/other/edi-babelway-level-1-certification/ImportCustomerAs2Certificate.png)

- We need to put `Alias` iqual to `Level 1 Certification - Scenario 1 - AS2 Certificate`, `Certificate Trusted Url` iqual to `https://us1.babelway.net/corvus/httpd/as2/inbound` and choose the `as2.babelway_legacy.p7b` **Bundled certificate & Certificate Authority** document.

![](/images/other/edi-babelway-level-1-certification/ImportCustomerAs2Certificate2.png)

![](/images/other/edi-babelway-level-1-certification/ImportCustomerAs2Certificate3.png)

#### Scenario 1 - Purchase Orders

- We need to create a new channel with `Name:` iqual to `Level 1 Certification - Scenario 1 - Purchase Orders` and `Description:` iqual to `This channel is used to set up the Purchase Orders process of the Level 1 Certification - Scenario 1.`

![](/images/other/edi-babelway-level-1-certification/Scenario11.png)

- We need to set up the `Gateway IN` with `AS2` protocol.

![](/images/other/edi-babelway-level-1-certification/Scenario112.png)

- We need to put `From:` value with `BABELWAY_AS2_29329` and select for `Certificate for verification` the `babelway as2 shared` one imported previously as `Level 1 Certification - Scenario 1 - AS2 Certificate`.

![](/images/other/edi-babelway-level-1-certification/Scenario113.png)

- We need to select `XML` for the `Message IN` message type:

![](/images/other/edi-babelway-level-1-certification/Scenario114.png)

- Choose the `Customer ERP Order Sample.xml` document for `Sample Xml`

![](/images/other/edi-babelway-level-1-certification/Scenario115.png)

![](/images/other/edi-babelway-level-1-certification/Scenario116.png)

- Create loop for `PurchaseOrder`

![](/images/other/edi-babelway-level-1-certification/Scenario117.png)

![](/images/other/edi-babelway-level-1-certification/Scenario118.png)

- Create loop for `Item`

![](/images/other/edi-babelway-level-1-certification/Scenario119.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1110.png)

- Delete the second `Item`

![](/images/other/edi-babelway-level-1-certification/Scenario1111.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1112.png)

- We need to set up the `Gateway OUT` with `FTP Client` protocol.

![](/images/other/edi-babelway-level-1-certification/Scenario1113.png)

- We need to put `ftp.tradingpartner.com` for `Server`, `Customer` for `Username`, `Password` for `Password` and `/Orders` for `Directory`.

![](/images/other/edi-babelway-level-1-certification/Scenario1114.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1115.png)

- We need to select `CSV` for the `Message OUT` message type:

![](/images/other/edi-babelway-level-1-certification/Scenario1116.png)

- Select the `TradingPartner CSV Order Sample.csv` file for `Sample file (text)`

![](/images/other/edi-babelway-level-1-certification/Scenario1117.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1118.png)

- Create the `mapping`

- `PurchaseOrder Loop` --> `line loop`

![](/images/other/edi-babelway-level-1-certification/Scenario1119.png)

- `PurchaseOrderNumber` --> `Order #`

![](/images/other/edi-babelway-level-1-certification/Scenario1120.png)

- `OrderDate` --> `Order Date header`

![](/images/other/edi-babelway-level-1-certification/Scenario1121.png)

- `PartNumber` --> `Item SKU`

![](/images/other/edi-babelway-level-1-certification/Scenario1122.png)

- `ProductName` --> `Item Description`

![](/images/other/edi-babelway-level-1-certification/Scenario1123.png)

- `Quantity` --> `Item Qty`

![](/images/other/edi-babelway-level-1-certification/Scenario1124.png)

- `USPrice` --> `Item Unit Price`

![](/images/other/edi-babelway-level-1-certification/Scenario1125.png)

- `Comment` --> `Customer Notes`

![](/images/other/edi-babelway-level-1-certification/Scenario1126.png)

- `item Loop` --> `line loop`

![](/images/other/edi-babelway-level-1-certification/Scenario1127.png)

- `Address 1 - substring-before(Name, ' ')` --> `Shipping First Name`

![](/images/other/edi-babelway-level-1-certification/Scenario1128.png)

- `Address 1 - substring-after(Name, ' ')` --> `Shipping Last Name`

![](/images/other/edi-babelway-level-1-certification/Scenario1129.png)

- `Address 1 - Street` --> `Shipping Address Line 1`

![](/images/other/edi-babelway-level-1-certification/Scenario1130.png)

- `Address 1 - City` --> `Shipping City`

![](/images/other/edi-babelway-level-1-certification/Scenario1131.png)

- `Address 1 - State` --> `Shipping State`

![](/images/other/edi-babelway-level-1-certification/Scenario1132.png)

- `Address 1 - Zip` --> `Shipping Zip Code`

![](/images/other/edi-babelway-level-1-certification/Scenario1133.png)

- `Address 1 - Country` --> `Shipping Country`

![](/images/other/edi-babelway-level-1-certification/Scenario1134.png)

- `DeliveryNotes` --> `Shipping Address Line 2`

- Create a Test Case for `Simple Order`

- Put `Simple Order` in `Name` and choose `Customer ERP Order Sample.xml` for `Message in`

![](/images/other/edi-babelway-level-1-certification/Scenario1135.png)

- Run the `Simple Order` test case.

![](/images/other/edi-babelway-level-1-certification/Scenario1136.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1137.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1138.png)

> TestMessageSimpleOrder.csv

```
Order #,Order Date,Order Status,Subtotal Inc. Tax,Shipping $,Item Description,Item SKU,Item Unit Price,Item Qty,Item Weight (oz),Warehouse Loc/Bin No.,Shipping First Name,Shipping Last Name,Shipping Company Name,Shipping Address Line 1,Shipping Address Line 2,Shipping City,Shipping State,Shipping Zip Code,Shipping Country,Email,Phone,Customer Notes
99503,1999-10-20,,,,Lawnmower,872-AA,148.95,1,,,Ellen,Adams,,123 Maple Street,Please leave packages in shed by driveway.,Mill Valley,CA,10999,USA,,,Confirm this is electric
99503,1999-10-20,,,,Baby Monitor,926-AA,39.98,2,,,Ellen,Adams,,123 Maple Street,Please leave packages in shed by driveway.,Mill Valley,CA,10999,USA,,,
```

![](/images/other/edi-babelway-level-1-certification/Scenario1139.png)

- Create a Test Case for `Multiple Order`

- Put `Multiple Order` in `Name` and choose `Customer ERP Order Sample_Multiple Orders.xml` for `Message in`

![](/images/other/edi-babelway-level-1-certification/Scenario1140.png)

- Run the `Multiple Order` Test Case

![](/images/other/edi-babelway-level-1-certification/Scenario1141.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1142.png)

> TestMessageMultipleOrder.csv

```
Order #,Order Date,Order Status,Subtotal Inc. Tax,Shipping $,Item Description,Item SKU,Item Unit Price,Item Qty,Item Weight (oz),Warehouse Loc/Bin No.,Shipping First Name,Shipping Last Name,Shipping Company Name,Shipping Address Line 1,Shipping Address Line 2,Shipping City,Shipping State,Shipping Zip Code,Shipping Country,Email,Phone,Customer Notes
99503,1999-10-20,,,,Lawnmower,872-AA,148.95,1,,,Ellen,Adams,,123 Maple Street,Please leave packages in shed by driveway.,Mill Valley,CA,10999,USA,,,Confirm this is electric
99503,1999-10-20,,,,Baby Monitor,926-AA,39.98,2,,,Ellen,Adams,,123 Maple Street,Please leave packages in shed by driveway.,Mill Valley,CA,10999,USA,,,
99505,1999-10-22,,,,Power Supply,456-NM,45.99,1,,,Cristian,Osorio,,456 Main Street,Please notify me before shipping.,Buffalo,NY,98112,USA,,,
99504,1999-10-22,,,,Computer Keyboard,898-AZ,29.99,1,,,Jessica,Arnold,,4055 Madison Ave,,Seattle,WA,98112,USA,,,
99504,1999-10-22,,,,Wireless Mouse,898-AM,14.99,1,,,Jessica,Arnold,,4055 Madison Ave,,Seattle,WA,98112,USA,,,
```

![](/images/other/edi-babelway-level-1-certification/Scenario1143.png)

#### Scenario 1 - Invoices

- We need to create a new channel with `Name:` iqual to `Level 1 Certification - Scenario 1 - Invoices` and `Description:` iqual to `This channel is used to set up the Invoices process of the Level 1 Certification - Scenario 1.`

![](/images/other/edi-babelway-level-1-certification/Scenario12.png)

- We need to set up the `Gateway IN` with `FTP Client` protocol.

![](/images/other/edi-babelway-level-1-certification/Scenario122.png)

- We need to put `ftp.tradingpartner.com` for `Server`, `Customer` for `Username`, `Password` for `Password` and `/Invoices` for `Directory`.

![](/images/other/edi-babelway-level-1-certification/Scenario123.png)

- We need to select `CSV Type` for `Message IN`

![](/images/other/edi-babelway-level-1-certification/Scenario124.png)

- Choose `TradingPartner CSV Invoice Sample.csv` for `Sample file (text)`

![](/images/other/edi-babelway-level-1-certification/Scenario125.png)

![](/images/other/edi-babelway-level-1-certification/Scenario126.png)

- We need to select `XML Type` for `Message OUT`

![](/images/other/edi-babelway-level-1-certification/Scenario127.png)

![](/images/other/edi-babelway-level-1-certification/Scenario128.png)

- Select `Customer ERP Invoice Sample.xml` for `Sample Xml`

![](/images/other/edi-babelway-level-1-certification/Scenario129.png)

- Create `Loop` for `invoiceDetail`

![](/images/other/edi-babelway-level-1-certification/Scenario1210.png)

- We need to select `AS2` for `Gateway OUT`

![](/images/other/edi-babelway-level-1-certification/Scenario1212.png)

- We need to put `To:` value with `BABELWAY_AS2_29329`, `https://us1.babelway.net/corvus/httpd/as2/inbound` for `Recipient address` and select for `Certificate for verification` the `babelway as2 shared` one imported previously as `Level 1 Certification - Scenario 1 - AS2 Certificate`.

![](/images/other/edi-babelway-level-1-certification/Scenario1213.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1214.png)

- Create the `mapping`

- `Loop` --> `invoice loop`

![](/images/other/edi-babelway-level-1-certification/Scenario1215.png)

- `Invoice Number` --> `invoiceNumber`

![](/images/other/edi-babelway-level-1-certification/Scenario1216.png)

- `Invoice Date` --> `invoiceDate`

![](/images/other/edi-babelway-level-1-certification/Scenario1217.png)

- `Customer Code` --> `SupplierNumber`

![](/images/other/edi-babelway-level-1-certification/Scenario1218.png)

- `Customer Reference` --> `poNumber`

![](/images/other/edi-babelway-level-1-certification/Scenario1219.png)

- `Loop` - `invoiceDetail`

![](/images/other/edi-babelway-level-1-certification/Scenario1220.png)

- `Line-Quantity` --> `quantity`

![](/images/other/edi-babelway-level-1-certification/Scenario1221.png)

- `concat(Line-Description, ' ', Line-Charge Type)` --> `description`

![](/images/other/edi-babelway-level-1-certification/Scenario1222.png)

- `Line-Rate` --> `uniPrice`

![](/images/other/edi-babelway-level-1-certification/Scenario1223.png)

- Create a Test Case for `Invoice`

![](/images/other/edi-babelway-level-1-certification/Scenario1225.png)

- Put `Invoice` in `Name` and choose `TradingPartner CSV Invoice Sample.csv` for `Message in`

![](/images/other/edi-babelway-level-1-certification/Scenario1225b.png)

- Run the `Invoice` test case.

![](/images/other/edi-babelway-level-1-certification/Scenario1226.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1227.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1228.png)

> testMessageInvoice.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>101</invoiceNumber>
         <invoiceDate>18/07/2011</invoiceDate>
         <poNumber>Customer 101 Invoice</poNumber>
         <supplierNumber>1</supplierNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>2</quantity>
            <unitPrice>2000</unitPrice>
            <description>Invoice line 1 Sale of goods</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>102</invoiceNumber>
         <invoiceDate>18/07/2011</invoiceDate>
         <poNumber>Customer 102 Invoice</poNumber>
         <supplierNumber>1</supplierNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>2</quantity>
            <unitPrice>2000</unitPrice>
            <description>Invoice line 1 Sale of goods</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>103</invoiceNumber>
         <invoiceDate>18/07/2011</invoiceDate>
         <poNumber>Customer 103 Invoice</poNumber>
         <supplierNumber>1</supplierNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>2</quantity>
            <unitPrice>2000</unitPrice>
            <description>Invoice line 1 Sale of goods</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
   <invoice>
      <invoiceHeader>
         <invoiceNumber>104</invoiceNumber>
         <invoiceDate>18/07/2011</invoiceDate>
         <poNumber>Customer 104 Invoice</poNumber>
         <supplierNumber>1</supplierNumber>
      </invoiceHeader>
      <invoiceDetail>
         <lineItem>
            <quantity>2</quantity>
            <unitPrice>2000</unitPrice>
            <description>Invoice line 1 Sale of goods</description>
         </lineItem>
      </invoiceDetail>
   </invoice>
</request>
```

- We need to create a new notification

![](/images/other/edi-babelway-level-1-certification/Scenario1229.png)

- Put `Received Invoice` for the `Name`, check `[X] Success` and put `AR@customer.com` for `Additional emails`.

![](/images/other/edi-babelway-level-1-certification/Scenario1230.png)

![](/images/other/edi-babelway-level-1-certification/Scenario1231.png)

### Scenario #2

In this scenario, we will be updating a `CRM` with `contact information` from `inbound requests` for `new contacts`. This will be made available to all users in a company who will email a CSV template to update the CRM.

The following information provides details to complete the project:

- All employees must be able to communicate the new contact request via email
- A CSV template must be created for employees to use when creating a new contact
- The CRM system handles contact import via an XML file. A sample import is attached.
- The CRM system will pull XML imports from an FTP server.
- Upon successful import, the CRM admin team would like to receive a notification of the successful import. Their email is admin@customer.com.

If you have any questions about this scenario, you can contact jeff.douglas@babelway.com

#### Scenario 2 - CRM

- We need to create a new channel with `Name:` iqual to `Level 1 Certification - Scenario 2 - CRM` and `Description:` iqual to `This channel is used to set up the CRM process of the Level 1 Certification - Scenario 2.`

![](/images/other/edi-babelway-level-1-certification/Scenario2.png)

- We need to set up the `Gateway IN` with `Email` protocol.

![](/images/other/edi-babelway-level-1-certification/Scenario22.png)

- We need to fill in `Email Address:` value with `Level1CertificationScenario2Crm`.

![](/images/other/edi-babelway-level-1-certification/Scenario23.png)

![](/images/other/edi-babelway-level-1-certification/Scenario24.png)

- Create a new Template CSV Template using Excel

![](/images/other/edi-babelway-level-1-certification/Scenario25.png)

![](/images/other/edi-babelway-level-1-certification/Scenario26.png)

- Save as `CSV` with `CRM Template` Name

![](/images/other/edi-babelway-level-1-certification/Scenario27.png)

- We need to select `CSV` for the `Message IN` message type:

![](/images/other/edi-babelway-level-1-certification/Scenario28.png)

- Choose the `CRM Template.csv` document for `Sample file (text)`

![](/images/other/edi-babelway-level-1-certification/Scenario29.png)

![](/images/other/edi-babelway-level-1-certification/Scenario210.png)

- We need to select `XLM` for the `Message OUT` message type:

![](/images/other/edi-babelway-level-1-certification/Scenario211.png)

![](/images/other/edi-babelway-level-1-certification/Scenario212.png)

- Choose `Contact Import XML Sample.xml` for `Sample XML`

![](/images/other/edi-babelway-level-1-certification/Scenario213.png)

![](/images/other/edi-babelway-level-1-certification/Scenario214.png)

- We need to set up the `Gateway OUT` with `FTP Client` protocol.

![](/images/other/edi-babelway-level-1-certification/Scenario215.png)

- We need to put `ftp.company.com` for `Server`, `Company` for `Username`, `Password` for `Password` and `/Crm` for `Directory`.

![](/images/other/edi-babelway-level-1-certification/Scenario216.png)

![](/images/other/edi-babelway-level-1-certification/Scenario217.png)

- Create the `mapping`

- `Loop` --> `contacImport`

![](/images/other/edi-babelway-level-1-certification/Scenario218.png)

- `Is New Contact` --> `newContact`

![](/images/other/edi-babelway-level-1-certification/Scenario219.png)

- `Account Owner` --> `accountOwner`

![](/images/other/edi-babelway-level-1-certification/Scenario220.png)

- `Creation Date` --> `creationDate`

![](/images/other/edi-babelway-level-1-certification/Scenario221.png)

- `Name` --> `name`

![](/images/other/edi-babelway-level-1-certification/Scenario222.png)

- `Company` --> `company`

![](/images/other/edi-babelway-level-1-certification/Scenario223.png)

- `Title` --> `title`

![](/images/other/edi-babelway-level-1-certification/Scenario224.png)

- `Language` --> `language`

![](/images/other/edi-babelway-level-1-certification/Scenario225.png)

- `Country` --> `country`

![](/images/other/edi-babelway-level-1-certification/Scenario226.png)

- `Phone` --> `phone`

![](/images/other/edi-babelway-level-1-certification/Scenario227.png)

- `Email` --> `email`

![](/images/other/edi-babelway-level-1-certification/Scenario228.png)

![](/images/other/edi-babelway-level-1-certification/Scenario229.png)

- Create a Test Case for `CRM`

![](/images/other/edi-babelway-level-1-certification/Scenario230.png)

- Put `CRM` in `Name` and choose `CRM Template.csv` for `Message in`

![](/images/other/edi-babelway-level-1-certification/Scenario231.png)

- Run the `CRM` test case.

![](/images/other/edi-babelway-level-1-certification/Scenario232.png)

![](/images/other/edi-babelway-level-1-certification/Scenario233.png)

![](/images/other/edi-babelway-level-1-certification/Scenario234.png)

> testMessageCRM.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<request>
   <contactImport>
      <systemInformation>
         <newContact>Y</newContact>
         <accountOwner>John Doe</accountOwner>
         <creationDate>29/01/2016</creationDate>
      </systemInformation>
      <personalInformation>
         <name>Jill Smith</name>
         <company>ABC Co.</company>
         <title>Project Manager</title>
         <language>EN</language>
         <country>US</country>
         <phone>555-552-9143</phone>
         <email>jill.smith@abcco.com</email>
      </personalInformation>
   </contactImport>
</request>
```

- We need to create a new notification

![](/images/other/edi-babelway-level-1-certification/Scenario235.png)

- Put `CRM Template Received` for the `Name`, check `[X] Success` and put `admin@customer.com` for `Additional emails`.

![](/images/other/edi-babelway-level-1-certification/Scenario236.png)

![](/images/other/edi-babelway-level-1-certification/Scenario237.png)

## Certification Submission

### Submit for Review

When you are done building both scenarios, complete the attached certification submission form.

Fill out the information and submit the form to: info@babelway.com

Include in the subject line of the submission 'BabelAcademy Level 1 Certification'

![](/images/other/edi-babelway-level-1-certification/SubmitForReview.png)

![](/images/other/edi-babelway-level-1-certification/SubmitForReview2.png)

![](/images/other/edi-babelway-level-1-certification/SubmitForReview3.png)

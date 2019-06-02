# 203 - Babelway - Reading Document Specifications

The [203 - Reading Document Specifications](https://academy.babelway.com/p/202-how-to-read-document-specifications) Babelway course will cover the general concepts related to Document Specifications.

An essential part of integration is being able to understand document specifications. Each document type is different and thus being able to understand it's specification can be crucial to a successful implementation.

> Table of contents
> [[toc]]

## Gathering Information

### Who's Responsible for What?

As explained in the previous course, 'Running a B2B Integration Project' , there are many involved parties in a typical integration project. It can then be confusing to understand who is responsible for what part of the equation, especially when it comes to technical documentation.

Remember back to the outline of an implementation project. Your specific project may be different, but the basic concepts should be similar. The general layout of an data flow should look like:

**Trading Partner > 3rd Party Integrator / System > Babelway > Customer / You**

or the other direction depending on the flow of data. This then explains each part of a channel within Babelway:

- `Gateway IN` - 3rd Party Integrator or Trading Partner

- `Message IN` - 3rd Party Integrator or Trading Partner

- `Transformation` - Babelway

- `Message OUT` - Customer / You

- `Gateway OUT` - Customer / You

For Document Specifications, we focus mainly on the message definition. You can then see the responsible parties.

The Trading Parter or 3rd Party Integrator is responsible for providing Document Specifications and samples for one side of the channel.

You or the Customer is responsible for providing Document Specifications and samples for the other side of the channel.

Any further details about transformation is a hybrid between the two and it's possible for more business-level input to be given from both sides to determine the proper mapping scenarios for the project.

### What to do with Incomplete Information

It's possible that you aren't given all the information you need to complete a project. Although frustrating, there are a few things you can do to remedy the situation.

**Communicate to Responsible Parties**

A pretty straightforward idea, but it may be required to ask for document specifications on several occasions. Often systems are complex and the correct specifications may be difficult to track down. This is only amplified when you are required to work with 3rd party companies that have the minimum investment required to keep their business. It will be essential to your project that you open communicate your needs in order to successfully deliver a project on time, and to do so multiple times.

**Build in Phases**

Within a project, there may be many dependencies that interrupt the flow of the project. Perhaps systems are not at the stage where they are ready to share document specifications or are waiting on other pieces to be complete before being able to share information. If this happens in your project, it may be most effective to build flows in phases. Because Babelway is segmented, you can build parts of channels without having all the information needed for the other parts. Are you waiting on sample documents and specifications for your outbound messages? You can still work in inbound messages, inbound gateway connections, and outbound gateway connections. Taking this action ensures that the project can keep moving forward while the dependencies are resolved at a later date.

**Escalate**

If there are no dependencies and open communication has occurred several times, it may be time to escalate the situation. There should be contact persons at each organization that are involved, but at a higher level. Communicating to these contacts that the project timeline is in jeopardy because of missing information can be the push you need to receive all the specific documents. It's important to be clear and communicate all the previous tasks that have been done to retrieve this information. The end goal is that of collaboration, not blame.

This should give you enough actions to take if you are dealing with missing or incomplete information.

## Understanding Document Specifications

### Going Through a Specification (7:24)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification2.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification3.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification4.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification5.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification6.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification7.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification8.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification9.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification10.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification11.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification12.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification13.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification14.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification15.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification16.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/GoingThroughASpecification17.png)

### XML Example (3:35)

![](/images/other/edi-babelway-how-to-read-document-specifications/XMLExample.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/XMLExample2.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/XMLExample3.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/XMLExample4.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/XMLExample5.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/XMLExample6.png)

### X12 Example (4:27)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example2.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example3.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example4.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example5.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example6.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example7.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/X12Example8.png)

### Flat File Example (4:06)

![](/images/other/edi-babelway-how-to-read-document-specifications/FlatFileExample.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/FlatFileExample2.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/FlatFileExample3.png)

![](/images/other/edi-babelway-how-to-read-document-specifications/FlatFileExample4.png)

### Building a MultiRecord Definition

**Multirecord Flat files**

```
Multirecord Wizard screen allows you to define your Multirecord message format (delimited or a fixed-length) according to your own file format.
```

**What is mr file?**

The mr file is a multirecord definition file which is used by the Self-Service MultiRecord wizard to generate the corresponding message definition and also to build the corresponding servingxml resource file.

**How to build mr file?**

`(1) Specify if the message is a delimited or a fixed-length.`

- For **fixed-length** messages, the mr file header will look like this:

```xml
<multirecord name="mymultirecord" type="fixed-length" lineDelimited="true" recordDelimiter="\r\n" quoteSymbol-character=""" quoteSymbol-escapeSequence="\"" xmlns="http://xmlns.babelway.com/2007/multi-record">
```

- For the **delimited** messages the mr file header will look like this:

```xml
<multirecord name="mymultirecord" type="delimited" fieldDelimiter="," recordDelimiter="\r\n" quoteSymbol-character=""" quoteSymbol-escapeSequence="\"" xmlns="http://xmlns.babelway.com/2007/multi-record">
```

- **recordDelimiter** defines the delimiter between each record, it is usually the ending line character represented on windows by \r\n, on Unix/Linux by \n and on Macintosh by \r.

- **lineDelimited** specifies if the system uses a record delimiter. If set to false, the record will be based on the sum of the fields length for fixed length or the number of fields for delimited multirecords.

- **trim** specifies if the white spaces at the beginning and the end of the fields should be removed.

- **fieldDelimiter**, only used with a delimited message, defines the field delimiter.

- **quoteSymbol-character** is the character used to quote a field (often ")

- **quoteSymbol-escapeSequence** is the sequence that will display the quote symbol character in a quoted field (often \")

_Hint:_

For multirecord as message in, do not specify recordDelimiter. The system will catch the \r or \n or \r\n. For multirecord as message out, DO specify recordDelimiter as being for instance "\r\n"; this will generate windows compliant file and let you change the delimiter from the advanced properties later on.

`(2) The second step is to write the message records definitions`

You should specify the name for the record and for each of its fields. Each record should have at least one field with a static value which will be used to identify the record.

```xml
<record name="Record1">
	    <field name="recordType" value="R1" width="2"/>
	    <field name="field1" width="5"/>
	    <field name="field2" width="3"/>
</record>
```

- the **width** is only mandatory for fixed-length messages

- **value** is used to specify that the field has a static value that will never change

By default all first fields with a static value are used to identify a record. But, you can also manually define which fields must be used to identify a record using the identifier paramter.

```xml
<record name="Record1">
	    <field name="recordType" value="R1" width="2" />
	    <field name="fieldA" width="5"/>
	    <field name="fieldB" width="3" value="BBB" identifier="true"/>
	    <field name="fieldC" width="7" />
	    <field name="fieldD" width="2" value="DD" identifier="true"/>
</record>
```

In this case, only the third and fifth fields (fieldB & fieldD), with identifier equals to true, will be used to identify the record. The default (without identifier=true) would only use recordType field as the identifier.

_Remark:_

For fixed-length messages, the fields used to identify a record should have the same position and length in each record. No overlap between identifiers is allowed between records.

If fixed-length messages have variable length identifier per records, the only way to define it in the mr files is to first define the smallest common length identifier for all records and then for each records that have longer identifier, add as many as smaller field needed to unambiguously identify each record.

For example, if we have a message where **AAAAA**, **111** and **2222** are identifiers like as shown below:

```
AAAAA  contentcontent  anothercontent
	1112222  this and that
```

The following definition is not valid since the fieldA is bigger than field1 and moreover, fieldA also overlaps with field2

```xml
<record name="Record1">
    <field name="fieldA" width="5" value="AAAAA" identifier="true"/>
    <field name="fieldB" width="15" />
    <field name="fieldC" width="17" />
</record>
<record name="Record2">
    <field name="field1" width="3" value="111" identifier="true"/>
    <field name="field2" width="4" value="2222" identifier="true"/>
    <field name="field3" width="20" />
</record>
```

It should be replaced by:

```xml
<record name="Record1">
    <field name="fieldA" width="3" value="AAA" identifier="true"/>
    <field name="fieldA" width="2" value="AA" identifier="true"/>
    <field name="fieldB" width="15" />
    <field name="fieldC" width="17" />
</record>
<record name="Record2">
    <field name="field1" width="3" value="111" identifier="true"/>
    <field name="field2" width="2" value="22" identifier="true"/>
    <field name="field2" width="2" value="22" identifier="true"/>
    <field name="field3" width="20" />
</record>
```

We had to split the fieldA in two in order to have one fieldA with the length 3 (the same as field1) with another fieldA with the remaining length 2.

Then the field2 (length 4) was also bigger than the second fieldA (length 2) so we also need to split it in two field2 of length 2.

All corresponding identifier have now the same length (3 and 2) and there is no overlap between them.

It is also possible to add 4 extra parameters label, description, justify & padCharacters to each field

```xml
<field name="myField" label="My Field" description="My field description" justify="right" padCharacter="x" width="10"/>
```

- **label** and **description** are used to display the message tree

- **justify** can be center, left or right

- **padCharacter** is the character used to fill an empty space in the field width

`(3) The last step is to define the message structure at the end of the mr file.`

```xml
<xml>
  <group name="Transaction" maxOccurs="unbounded">
        <group name="headers">
            <record name="header" minOccurs="1" maxOccurs="unbounded"/>
        </group>
        <record name="record1" maxOccurs="unbounded"/>
        <group name="footers">
            <record name="footer" />
        </group>
    </group>
</xml>
```

- Each element can define the minOccurs and the maxOccurs parameter with either a 0, a positive number or 'unbounded'.

- Records defined in the records simplesect can only appear once in the message structure.

- Records can be grouped using the group element. The name of the group is mandatory.

- Records in a group should be ordered in the same way they appeared at the message.

Sample multirecord fixed-length message

```
HH00123  AB
HH00045 CDE
R1one  100
R1two  101
R1four 103
FF3
```

Sample multirecord definition file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<multirecord name="mymultirecord" type="fixed-length" recordDelimiter="\r\n" quoteSymbol-character=""" quoteSymbol-escapeSequence="\"" xmlns="http://xmlns.babelway.com/2007/multi-record">
<records>
<record name="header">
<field name="recordType" value="HH" width="2"/>
<field name="header1" width="5" justify="right" padCharacter="0" />
<field name="header2" width="4" justify="right" padCharacter=" " />
</record>
<record name="record1">
   <field name="recordType" value="R1" width="2"/>
   <field name="field1" width="5" label="My field" description="My field Descritpion" />
   <field name="field2" width="3"/>
</record>
<record name="footer">
<field name="recordType" value="FF" width="2" />
<field name="footer1" width="1"/>
</record>
</records>
<xml>
       <group name="Transaction" maxOccurs="unbounded">
          <group name="headers">
             <record name="header" minOccurs="1" maxOccurs="unbounded"/>
          </group>
          <record name="record1" maxOccurs="unbounded"/>
          <group name="footers">
             <record name="footer" />
          </group>
       </group>
    </xml>
</multirecord>
```

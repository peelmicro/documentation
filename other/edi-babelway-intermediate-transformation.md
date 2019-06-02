# 201 - Babelway - Intermediate Transformation

The [201 - Intermediate Transformation](https://academy.babelway.com/p/intermediate-transformation) Babelway course will cover the 2nd level course for more advanced transformation techniques.

```
Message Validation, Regex, and Choices
Message Definition Editing
Advanced Function Manipulation
Extra Processing Tools
Advanced Looping Functions
```

> Table of contents
> [[toc]]

## Message Manipulation

### Message Validation (3:17)

![](/images/other/edi-babelway-intermediate-transformation/MessageValidation.png)

![](/images/other/edi-babelway-intermediate-transformation/MessageValidation2.png)

![](/images/other/edi-babelway-intermediate-transformation/MessageValidation3.png)

![](/images/other/edi-babelway-intermediate-transformation/MessageValidation4.png)

### Regular Expressions (Regex)

As seen in the video, it is possible to use Regular Expressions (Regex) to validate incoming messages.

Regex is a unique language that is used to match data. This gives you much more in depth control over what data you want in your message.

For example, you can apply the following Regex on a field in an invoice file:

![](/images/other/edi-babelway-intermediate-transformation/RegularExpressions.png)

The regex string `INV[0-9]*` is using syntax special to regex. It is broken down by :

- **INV** - These are standard alphabetical characters, this matches the exact string 'INV'
- **[0-9]** - This is a grouping syntax for regex, it means match any number from 0 through 9
- **\*** - This is a repeating matching syntax, it means match the item it's tied to (in this case [0-9]) as many times as it occurs

So the following string will only accept invoice files where the `Invoice Number` field has a format of `INV####` . Basically starting with the characters `INV` and followed by any length of numbers.

Another example of Regex is:

![](/images/other/edi-babelway-intermediate-transformation/RegularExpressions2.png)

This is using the string `[^(D240)]`. It is broken down as:

- **[^]** - This is the 'not' character in Regex. It means capture anything except what's within the brackets.
- **(D240)** - This is the group function, it means capture exactly what is within () in the order as listed.

The Regex results in the file using any field of data except those with `D240` in the `SAC field`.

As you can see, there are many uses of regex and just as many syntax characters to use. Instead of listing each character, it's better to familiarize yourself with Regex. This will then give you the tools to adjust your strings to match the data you need on your message validations.

A very informative website for leanring Regex syntax is : https://regexone.com/

### Message Definition

Every Message IN and OUT element has a corresponding message definition. This is the file that Babelway uses to understand the structure of the message. This message definition is in the XML format and can be manipulated to give you more control on the tree structure of a message.

You can access the message definition by going to the channel element, choosing the 'Properties' link, and downloading the MessageDefinition.xml file.

![](/images/other/edi-babelway-intermediate-transformation/MessageDefinition.png)

This is also where you will upload an edited message definition. Uploading an edited message definition will not affect the existing mapping of the channel (except the elements that were edited in the message definition).

An example message definition looks like this:

![](/images/other/edi-babelway-intermediate-transformation/MessageDefinition2.png)

It can be a little daunting at first to understand the definition, but there are really only a few things to focus on.

**Pay attention to:**

- **UID** - A Unique ID, every element, attribute, loop, etc. has one and it's what babelway uses to identify each message part. If left empty, it is auto-generated when uploaded (useful when creating new segments)
- **minOccurs/maxOccurs** - These apply additional validation to messages. If minOccurs > 1, the segment MUST be present in the file.
- **\<rendered\>** - This makes the element dependent on another element (referencing it's UID). If parts of your message are not showing up in the mapping, it's possible there is a dependency with this tag.
- **\<attribute value="..."\>** this is the 'filter value' in the Message IN/OUT validation user interface.
- **\<type="..."\>** this is the type value, what kind of data that is allowed (example: a number, string of characters, etc.)

**When to Use**

The main reasons you would edit a message definition are:

- You need to duplicate a large amount of fields. It's easier to go into a message definition, copy the fields you want to duplicate, paste them in the file, and remove the UIDs (so there aren't duplicates). This will add all the fields in one action instead of duplicating them with the user interface.
- The Input data is not behaving as expected. If you are experiencing missing fields in the transformation, or there seem to be validations applied to data you didn't expect, it may be there there are specific filtered values or render conditions on your fields. Investigating the message definition can help understand the cause of these issues.
- Changing or adding looping structure. Sometimes the user interface is more complicated when dealing with loops. Re-arranging fields in the message definition can provide more control over what segment groups exist within looping values. Each `loop` group is defined by the tags \<loop\> \</loop\> . You can move fields around or add new \<loop\> tags to create more sophisticated message structures.
- While somewhat complex, manipulating message definitions can be very powerful. If you are ever stuck understanding how this can be done correctly, please don't hesitate to reach out to the Babelway support team.

Examples of Message Definition:

> MessageDefinition.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message-definition xmlns="http://xmlns.babelway.com/2007/message-definition" uid="d1186e1">
	<element name="ediroot" label="ediroot" description="ediroot" minOccurs="0" uid="d1186e3">
		<element name="interchange" label="UNB - interchange" description="interchange" minOccurs="0" uid="d1186e5">
			<attribute name="Standard" type="string" label="UNB01 - Standard" description="Standard - ANSI X.12" value="ANSI X.12" uid="d1186e7"/>
			<attribute name="Date" type="string" label="UNB02 - Date" description="Date - 101205" uid="d1186e9"/>
			<attribute name="Time" type="string" label="UNB03 - Time" description="Time - 1710" uid="d1186e11"/>
			<attribute name="StandardsId" type="string" label="UNB04 - StandardsId" description="StandardsId - U" value="U" uid="d1186e13"/>
			<attribute name="Version" type="string" label="UNB05 - Version" description="Version - 00401" value="00401" uid="d1186e15"/>
			<attribute name="Control" type="string" label="UNB06 - Control" description="Control - 000001320" uid="d1186e18"/>
			<element name="sender" label="sender" description="sender" minOccurs="0" uid="d1186e20">
				<element name="address" label="address" description="address" minOccurs="0" uid="d1186e22">
					<attribute name="Id" type="string" label="Id" description="Id - ABCCOM         " uid="d1186e24"/>
					<attribute name="Qual" type="string" label="Qual" description="Qual - 01" value="01" uid="d1186e26"/>
				</element>
			</element>
			<element name="receiver" label="receiver" description="receiver" minOccurs="0" uid="d1186e30">
				<element name="address" label="address" description="address" minOccurs="0" uid="d1186e32">
					<attribute name="Id" type="string" label="Id" description="Id - 9999999999     " uid="d1186e34"/>
					<attribute name="Qual" type="string" label="Qual" description="Qual - 12" value="12" uid="d1186e36"/>
				</element>
			</element>
			<loop label="Loop" uid="d1186e40">
				<element name="group" label="group" description="group" minOccurs="0" uid="d1186e42">
					<attribute name="GroupType" type="string" label="UNG01 - GroupType" description="GroupType - IN" value="IN" uid="d1186e44"/>
					<attribute name="ApplSender" type="string" label="UNG02 - ApplSender" description="ApplSender - 4405197800" uid="d1186e46"/>
					<attribute name="ApplReceiver" type="string" label="UNG03 - ApplReceiver" description="ApplReceiver - 999999999" uid="d1186e48"/>
					<attribute name="Date" type="string" label="UNG04 - Date" description="Date - 20101205" uid="d1186e50"/>
					<attribute name="Time" type="string" label="UNG05 - Time" description="Time - 1710" uid="d1186e52"/>
					<attribute name="Control" type="string" label="UNG06 - Control" description="Control - 1320" uid="d1186e55"/>
					<attribute name="StandardCode" type="string" label="UNG07 - StandardCode" description="StandardCode - X" value="X" uid="d1186e57"/>
					<attribute name="StandardVersion" type="string" label="UNG08 - StandardVersion" description="StandardVersion - 004010VICS" value="004010VICS" uid="d1186e59"/>
					<loop label="Loop" uid="d1186e61">
						<element name="transaction" label="UNH - transaction" description="transaction" minOccurs="0" uid="d1186e63">
							<attribute name="DocType" type="string" label="UNH01 - DocType" description="DocType - 810" value="810" uid="d1186e65"/>
							<attribute name="Name" type="string" label="UNH02 - Name" description="Name - Invoice" value="Invoice" uid="d1186e67"/>
							<attribute name="Control" type="string" label="UNH03 - Control" description="Control - 1004" uid="d1186e69"/>
							<element name="segment" minOccurs="0" label="BIG - Beginning Segment for Invoice" description="To indicate the beginning of an invoice transaction set and transmit  identifying numbers and dates" uid="d1186e71">
								<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='') and (normalize-space(string($arg3))!='') and (normalize-space(string($arg4))!='')" uid="d1187e72">
									<arg source="d1186e75" uid="d1187e73"/>
									<arg source="d1186e80" uid="d1187e74"/>
									<arg source="d1186e85" uid="d1187e75"/>
									<arg source="d1186e90" uid="d1187e76"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - BIG" value="BIG" visibility="hidden" uid="d1186e73"/>
								<element name="element" type="string" minOccurs="1" label="BIG01 - Date" description="Date - Sample:20101204" uid="d1186e75">
									<attribute name="Id" type="string" label="Id" description="Id - BIG01" value="BIG01" visibility="hidden" uid="d1186e77"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="BIG02 - Invoice Number" description="Invoice Number - Sample:217224" uid="d1186e80">
									<attribute name="Id" type="string" label="Id" description="Id - BIG02" value="BIG02" visibility="hidden" uid="d1186e82"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="BIG03 - Date" description="Date - Sample:20101204" uid="d1186e85">
									<attribute name="Id" type="string" label="Id" description="Id - BIG03" value="BIG03" visibility="hidden" uid="d1186e87"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="BIG04 - Purchase Order Number" description="Purchase Order Number - Sample:P792940" uid="d1186e90">
									<attribute name="Id" type="string" label="Id" description="Id - BIG04" value="BIG04" visibility="hidden" uid="d1186e92"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="REF - Reference Identification" description="To specify identifying information" uid="d1186e96">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e102">
									<arg source="d1186e105" uid="d1187e103"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - REF" value="REF" visibility="hidden" uid="d1186e98"/>
								<element name="element" type="string" minOccurs="1" label="REF01 - Reference Identification Qualifier - Department Number (Static)" description=" - Department Number - Static value:DP" value="DP" uid="d1186e100">
									<attribute name="Id" type="string" label="Id" description="Id - REF01" value="REF01" visibility="hidden" uid="d1186e102"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="REF02 - Reference Identification" description="Reference Identification - Sample:099" uid="d1186e105">
									<attribute name="Id" type="string" label="Id" description="Id - REF02" value="REF02" visibility="hidden" uid="d1186e107"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="REF - Reference Identification" description="To specify identifying information" uid="d1186e112">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e120">
									<arg source="d1186e121" uid="d1187e121"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - REF" value="REF" visibility="hidden" uid="d1186e114"/>
								<element name="element" type="string" minOccurs="1" label="REF01 - Reference Identification Qualifier - Internal Vendor Number (Static)" description=" - Internal Vendor Number - Static value:IA" value="IA" uid="d1186e116">
									<attribute name="Id" type="string" label="Id" description="Id - REF01" value="REF01" visibility="hidden" uid="d1186e118"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="REF02 - Reference Identification" description="Reference Identification - Sample:99999" uid="d1186e121">
									<attribute name="Id" type="string" label="Id" description="Id - REF02" value="REF02" visibility="hidden" uid="d1186e123"/>
								</element>
							</element>
							<loop label="Loop" uid="d1186e127">
								<element name="loop" label="N1 - Name" description="N1 - To identify a party by type of organization, name, and code" minOccurs="0" uid="d1186e129">
									<attribute name="Id" type="string" label="Id" description="Id - N1" value="N1" visibility="hidden" uid="d1186e131"/>
									<element name="segment" minOccurs="1" label="N1 - Name" description="To identify a party by type of organization, name, and code" uid="d1186e133">
										<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e143">
											<arg source="d1186e147" uid="d1187e144"/>
										</rendered>
										<attribute name="Id" type="string" label="Id" description="Id - N1" value="N1" visibility="hidden" uid="d1186e135"/>
										<element name="element" type="string" minOccurs="1" label="N101 - Entity Identifier Code - Ship To (Static)" description=" - Ship To - Static value:ST" value="ST" uid="d1186e137">
											<attribute name="Id" type="string" label="Id" description="Id - N101" value="N101" visibility="hidden" uid="d1186e139"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="N103 - Identification Code Qualifier - Assigned by Buyer or Buyer s Agent (Static)" description=" - Assigned by Buyer or Buyer s Agent - Static value:92" value="92" uid="d1186e142">
											<attribute name="Id" type="string" label="Id" description="Id - N103" value="N103" visibility="hidden" uid="d1186e144"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="N104 - Identification Code" description="Identification Code - Sample:123" uid="d1186e147">
											<attribute name="Id" type="string" label="Id" description="Id - N104" value="N104" visibility="hidden" uid="d1186e149"/>
										</element>
									</element>
								</element>
							</loop>
							<element name="segment" minOccurs="0" label="ITD - Terms of Sale/Deferred Terms of Sale" description="To specify terms of sale" uid="d1186e155">
								<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='')" uid="d1187e167">
									<arg source="d1186e169" uid="d1187e168"/>
									<arg source="d1186e174" uid="d1187e169"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - ITD" value="ITD" visibility="hidden" uid="d1186e157"/>
								<element name="element" type="string" minOccurs="1" label="ITD01 - Terms Type Code - Basic (Static)" description=" - Basic - Static value:01" value="01" uid="d1186e159">
									<attribute name="Id" type="string" label="Id" description="Id - ITD01" value="ITD01" visibility="hidden" uid="d1186e161"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="ITD02 - Terms Basis Date Code - Invoice Date (Static)" description=" - Invoice Date - Static value:3" value="3" uid="d1186e164">
									<attribute name="Id" type="string" label="Id" description="Id - ITD02" value="ITD02" visibility="hidden" uid="d1186e166"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="ITD05 - Terms Discount Days Due" description="Terms Discount Days Due - Sample:0" uid="d1186e169">
									<attribute name="Id" type="string" label="Id" description="Id - ITD05" value="ITD05" visibility="hidden" uid="d1186e171"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="ITD07 - Terms Net Days" description="Terms Net Days - Sample:60" uid="d1186e174">
									<attribute name="Id" type="string" label="Id" description="Id - ITD07" value="ITD07" visibility="hidden" uid="d1186e176"/>
								</element>
							</element>
							<loop label="Loop" uid="d1186e180">
								<element name="loop" label="IT1 - Baseline Item Data (Invoice" description="IT1 - " minOccurs="0" uid="d1186e182">
									<attribute name="Id" type="string" label="Id" description="Id - IT1" value="IT1" visibility="hidden" uid="d1186e184"/>
									<element name="segment" minOccurs="1" label="IT1 - Baseline Item Data (Invoice" description="" uid="d1186e186">
										<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='') and (normalize-space(string($arg3))!='') and (normalize-space(string($arg4))!='')" uid="d1187e201">
											<arg source="d1186e190" uid="d1187e202"/>
											<arg source="d1186e195" uid="d1187e203"/>
											<arg source="d1186e205" uid="d1187e204"/>
											<arg source="d1186e216" uid="d1187e205"/>
										</rendered>
										<attribute name="Id" type="string" label="Id" description="Id - IT1" value="IT1" visibility="hidden" uid="d1186e188"/>
										<element name="element" type="string" minOccurs="1" label="IT101 - Assigned Identification" description="Assigned Identification - Sample:1" uid="d1186e190">
											<attribute name="Id" type="string" label="Id" description="Id - IT101" value="IT101" visibility="hidden" uid="d1186e192"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT102 - Quantity Invoiced" description="Quantity Invoiced - Sample:4" uid="d1186e195">
											<attribute name="Id" type="string" label="Id" description="Id - IT102" value="IT102" visibility="hidden" uid="d1186e197"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT103 - Unit or Basis for Measurement Code - Each (Static)" description=" - Each - Static value:EA" value="EA" uid="d1186e200">
											<attribute name="Id" type="string" label="Id" description="Id - IT103" value="IT103" visibility="hidden" uid="d1186e202"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT104 - Unit Price" description="Unit Price - Sample:8.60" uid="d1186e205">
											<attribute name="Id" type="string" label="Id" description="Id - IT104" value="IT104" visibility="hidden" uid="d1186e207"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT106 - Product/Service ID Qualifier - U.P.C. Consumer Package Code (1-5-5-1?) (Static)" description=" - U.P.C. Consumer Package Code (1-5-5-1?) - Static value:UP" value="UP" uid="d1186e211">
											<attribute name="Id" type="string" label="Id" description="Id - IT106" value="IT106" visibility="hidden" uid="d1186e213"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT107 - Product/Service ID" description="Product/Service ID - Sample:999999330023" uid="d1186e216">
											<attribute name="Id" type="string" label="Id" description="Id - IT107" value="IT107" visibility="hidden" uid="d1186e218"/>
										</element>
									</element>
									<loop label="Loop" uid="d1186e222">
										<element name="loop" label="PID - Product/Item Description" description="PID - To describe a product or process in coded or free-form format" minOccurs="0" uid="d1186e224">
											<attribute name="Id" type="string" label="Id" description="Id - PID" value="PID" visibility="hidden" uid="d1186e226"/>
											<element name="segment" minOccurs="1" label="PID - Product/Item Description" description="To describe a product or process in coded or free-form format" uid="d1186e228">
												<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e248">
													<arg source="d1186e237" uid="d1187e249"/>
												</rendered>
												<attribute name="Id" type="string" label="Id" description="Id - PID" value="PID" visibility="hidden" uid="d1186e230"/>
												<element name="element" type="string" minOccurs="1" label="PID01 - Item Description Type - Free-form (Static)" description=" - Free-form - Static value:F" value="F" uid="d1186e232">
													<attribute name="Id" type="string" label="Id" description="Id - PID01" value="PID01" visibility="hidden" uid="d1186e234"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="PID02 - Product/Process Characteristic Code" description="Product/Process Characteristic Code - Sample:Item Description" uid="d1186e237">
													<attribute name="Id" type="string" label="Id" description="Id - PID02" value="PID02" visibility="hidden" uid="d1186e239"/>
												</element>
											</element>
										</element>
									</loop>
									<loop label="Loop" uid="d1186e245">
										<element name="loop" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="SAC - To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" minOccurs="0" uid="d1186e247">
											<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e249"/>
											<element name="segment" minOccurs="1" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" uid="d1186e251">
												<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e273">
													<arg source="d1186e265" uid="d1187e274"/>
												</rendered>
												<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e253"/>
												<element name="element" type="string" minOccurs="1" label="SAC01 - Allowance or Charge Indicator - Charge (Static)" description=" - Charge - Static value:C" value="C" uid="d1186e255">
													<attribute name="Id" type="string" label="Id" description="Id - SAC01" value="SAC01" visibility="hidden" uid="d1186e257"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC02 - Service, Promotion, Allowance, or Charge Code - Freight (Static)" description=" - Freight - Static value:D240" value="D240" uid="d1186e260">
													<attribute name="Id" type="string" label="Id" description="Id - SAC02" value="SAC02" visibility="hidden" uid="d1186e262"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC05 - Amount" description="Amount - Sample:100" uid="d1186e265">
													<attribute name="Id" type="string" label="Id" description="Id - SAC05" value="SAC05" visibility="hidden" uid="d1186e267"/>
												</element>
											</element>
										</element>
									</loop>
									<loop label="Loop" uid="d1186e273">
										<element name="loop" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="SAC - To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" minOccurs="0" uid="d1186e275">
											<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e277"/>
											<element name="segment" minOccurs="1" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" uid="d1186e279">
												<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e303">
													<arg source="d1186e293" uid="d1187e304"/>
												</rendered>
												<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e281"/>
												<element name="element" type="string" minOccurs="1" label="SAC01 - Allowance or Charge Indicator - Charge (Static)" description=" - Charge - Static value:C" value="C" uid="d1186e283">
													<attribute name="Id" type="string" label="Id" description="Id - SAC01" value="SAC01" visibility="hidden" uid="d1186e285"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC02 - Service, Promotion, Allowance, or Charge Code - Tax - Sales Tax (State and Local?) (Static)" description=" - Tax - Sales Tax (State and Local?) - Static value:H750" value="H750" uid="d1186e288">
													<attribute name="Id" type="string" label="Id" description="Id - SAC02" value="SAC02" visibility="hidden" uid="d1186e290"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC05 - Amount" description="Amount - Sample:50" uid="d1186e293">
													<attribute name="Id" type="string" label="Id" description="Id - SAC05" value="SAC05" visibility="hidden" uid="d1186e295"/>
												</element>
											</element>
										</element>
									</loop>
								</element>
							</loop>
							<element name="segment" minOccurs="0" label="TDS - Total Monetary Value Summary" description="To specify the total invoice discounts and amounts" uid="d1186e303">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e329">
									<arg source="d1186e307" uid="d1187e330"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - TDS" value="TDS" visibility="hidden" uid="d1186e305"/>
								<element name="element" type="string" minOccurs="1" label="TDS01 - Amount" description="Amount - Sample:21740" uid="d1186e307">
									<attribute name="Id" type="string" label="Id" description="Id - TDS01" value="TDS01" visibility="hidden" uid="d1186e309"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="CAD - Carrier Detail" description="To specify transportation details for the transaction" uid="d1186e313">
								<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='')" uid="d1187e341">
									<arg source="d1186e317" uid="d1187e342"/>
									<arg source="d1186e327" uid="d1187e343"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - CAD" value="CAD" visibility="hidden" uid="d1186e315"/>
								<element name="element" type="string" minOccurs="1" label="CAD05 - Routing" description="Routing - Sample:GTCT" uid="d1186e317">
									<attribute name="Id" type="string" label="Id" description="Id - CAD05" value="CAD05" visibility="hidden" uid="d1186e319"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="CAD07 - Reference Identification Qualifier - Bill of Lading Number (Static)" description=" - Bill of Lading Number - Static value:BM" value="BM" uid="d1186e322">
									<attribute name="Id" type="string" label="Id" description="Id - CAD07" value="CAD07" visibility="hidden" uid="d1186e324"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="CAD08 - Reference Identification" description="Reference Identification - Sample:99999" uid="d1186e327">
									<attribute name="Id" type="string" label="Id" description="Id - CAD08" value="CAD08" visibility="hidden" uid="d1186e329"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="CTT - Transaction Totals" description="To transmit a hash total for a specific element in the transaction set" uid="d1186e334">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e365">
									<arg source="d1186e338" uid="d1187e366"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - CTT" value="CTT" visibility="hidden" uid="d1186e336"/>
								<element name="element" type="string" minOccurs="1" label="CTT01 - Number of Line Items" description="Number of Line Items - Sample:8" uid="d1186e338">
									<attribute name="Id" type="string" label="Id" description="Id - CTT01" value="CTT01" visibility="hidden" uid="d1186e340"/>
								</element>
							</element>
						</element>
					</loop>
				</element>
			</loop>
		</element>
	</element>
</message-definition>
```

> MessageDefinition of X12 810.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message-definition xmlns="http://xmlns.babelway.com/2007/message-definition" uid="d1186e1">
	<element name="ediroot" label="ediroot" description="ediroot" minOccurs="0" uid="d1186e3">
		<element name="interchange" label="UNB - interchange" description="interchange" minOccurs="0" uid="d1186e5">
			<attribute name="Standard" type="string" label="UNB01 - Standard" description="Standard - ANSI X.12" value="ANSI X.12" uid="d1186e7"/>
			<attribute name="Date" type="string" label="UNB02 - Date" description="Date - 101205" uid="d1186e9"/>
			<attribute name="Time" type="string" label="UNB03 - Time" description="Time - 1710" uid="d1186e11"/>
			<attribute name="StandardsId" type="string" label="UNB04 - StandardsId" description="StandardsId - U" value="U" uid="d1186e13"/>
			<attribute name="Version" type="string" label="UNB05 - Version" description="Version - 00401" value="00401" uid="d1186e15"/>
			<attribute name="Control" type="string" label="UNB06 - Control" description="Control - 000001320" uid="d1186e18"/>
			<element name="sender" label="sender" description="sender" minOccurs="0" uid="d1186e20">
				<element name="address" label="address" description="address" minOccurs="0" uid="d1186e22">
					<attribute name="Id" type="string" label="Id" description="Id - ABCCOM         " uid="d1186e24"/>
					<attribute name="Qual" type="string" label="Qual" description="Qual - 01" value="01" uid="d1186e26"/>
				</element>
			</element>
			<element name="receiver" label="receiver" description="receiver" minOccurs="0" uid="d1186e30">
				<element name="address" label="address" description="address" minOccurs="0" uid="d1186e32">
					<attribute name="Id" type="string" label="Id" description="Id - 9999999999     " uid="d1186e34"/>
					<attribute name="Qual" type="string" label="Qual" description="Qual - 12" value="12" uid="d1186e36"/>
				</element>
			</element>
			<loop label="Loop" uid="d1186e40">
				<element name="group" label="group" description="group" minOccurs="0" uid="d1186e42">
					<attribute name="GroupType" type="string" label="UNG01 - GroupType" description="GroupType - IN" value="IN" uid="d1186e44"/>
					<attribute name="ApplSender" type="string" label="UNG02 - ApplSender" description="ApplSender - 4405197800" uid="d1186e46"/>
					<attribute name="ApplReceiver" type="string" label="UNG03 - ApplReceiver" description="ApplReceiver - 999999999" uid="d1186e48"/>
					<attribute name="Date" type="string" label="UNG04 - Date" description="Date - 20101205" uid="d1186e50"/>
					<attribute name="Time" type="string" label="UNG05 - Time" description="Time - 1710" uid="d1186e52"/>
					<attribute name="Control" type="string" label="UNG06 - Control" description="Control - 1320" uid="d1186e55"/>
					<attribute name="StandardCode" type="string" label="UNG07 - StandardCode" description="StandardCode - X" value="X" uid="d1186e57"/>
					<attribute name="StandardVersion" type="string" label="UNG08 - StandardVersion" description="StandardVersion - 004010VICS" value="004010VICS" uid="d1186e59"/>
					<loop label="Loop" uid="d1186e61">
						<element name="transaction" label="UNH - transaction" description="transaction" minOccurs="0" uid="d1186e63">
							<attribute name="DocType" type="string" label="UNH01 - DocType" description="DocType - 810" value="810" uid="d1186e65"/>
							<attribute name="Name" type="string" label="UNH02 - Name" description="Name - Invoice" value="Invoice" uid="d1186e67"/>
							<attribute name="Control" type="string" label="UNH03 - Control" description="Control - 1004" uid="d1186e69"/>
							<element name="segment" minOccurs="0" label="BIG - Beginning Segment for Invoice" description="To indicate the beginning of an invoice transaction set and transmit  identifying numbers and dates" uid="d1186e71">
								<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='') and (normalize-space(string($arg3))!='') and (normalize-space(string($arg4))!='')" uid="d1187e72">
									<arg source="d1186e75" uid="d1187e73"/>
									<arg source="d1186e80" uid="d1187e74"/>
									<arg source="d1186e85" uid="d1187e75"/>
									<arg source="d1186e90" uid="d1187e76"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - BIG" value="BIG" visibility="hidden" uid="d1186e73"/>
								<element name="element" type="string" minOccurs="1" label="BIG01 - Date" description="Date - Sample:20101204" uid="d1186e75">
									<attribute name="Id" type="string" label="Id" description="Id - BIG01" value="BIG01" visibility="hidden" uid="d1186e77"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="BIG02 - Invoice Number" description="Invoice Number - Sample:217224" uid="d1186e80">
									<attribute name="Id" type="string" label="Id" description="Id - BIG02" value="BIG02" visibility="hidden" uid="d1186e82"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="BIG03 - Date" description="Date - Sample:20101204" uid="d1186e85">
									<attribute name="Id" type="string" label="Id" description="Id - BIG03" value="BIG03" visibility="hidden" uid="d1186e87"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="BIG04 - Purchase Order Number" description="Purchase Order Number - Sample:P792940" uid="d1186e90">
									<attribute name="Id" type="string" label="Id" description="Id - BIG04" value="BIG04" visibility="hidden" uid="d1186e92"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="REF - Reference Identification" description="To specify identifying information" uid="d1186e96">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e102">
									<arg source="d1186e105" uid="d1187e103"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - REF" value="REF" visibility="hidden" uid="d1186e98"/>
								<element name="element" type="string" minOccurs="1" label="REF01 - Reference Identification Qualifier - Department Number (Static)" description=" - Department Number - Static value:DP" value="DP" uid="d1186e100">
									<attribute name="Id" type="string" label="Id" description="Id - REF01" value="REF01" visibility="hidden" uid="d1186e102"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="REF02 - Reference Identification" description="Reference Identification - Sample:099" uid="d1186e105">
									<attribute name="Id" type="string" label="Id" description="Id - REF02" value="REF02" visibility="hidden" uid="d1186e107"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="REF - Reference Identification" description="To specify identifying information" uid="d1186e112">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e120">
									<arg source="d1186e121" uid="d1187e121"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - REF" value="REF" visibility="hidden" uid="d1186e114"/>
								<element name="element" type="string" minOccurs="1" label="REF01 - Reference Identification Qualifier - Internal Vendor Number (Static)" description=" - Internal Vendor Number - Static value:IA" value="IA" uid="d1186e116">
									<attribute name="Id" type="string" label="Id" description="Id - REF01" value="REF01" visibility="hidden" uid="d1186e118"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="REF02 - Reference Identification" description="Reference Identification - Sample:99999" uid="d1186e121">
									<attribute name="Id" type="string" label="Id" description="Id - REF02" value="REF02" visibility="hidden" uid="d1186e123"/>
								</element>
							</element>
							<loop label="Loop" uid="d1186e127">
								<element name="loop" label="N1 - Name" description="N1 - To identify a party by type of organization, name, and code" minOccurs="0" uid="d1186e129">
									<attribute name="Id" type="string" label="Id" description="Id - N1" value="N1" visibility="hidden" uid="d1186e131"/>
									<element name="segment" minOccurs="1" label="N1 - Name" description="To identify a party by type of organization, name, and code" uid="d1186e133">
										<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e143">
											<arg source="d1186e147" uid="d1187e144"/>
										</rendered>
										<attribute name="Id" type="string" label="Id" description="Id - N1" value="N1" visibility="hidden" uid="d1186e135"/>
										<element name="element" type="string" minOccurs="1" label="N101 - Entity Identifier Code - Ship To (Static)" description=" - Ship To - Static value:ST" value="ST" uid="d1186e137">
											<attribute name="Id" type="string" label="Id" description="Id - N101" value="N101" visibility="hidden" uid="d1186e139"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="N103 - Identification Code Qualifier - Assigned by Buyer or Buyer s Agent (Static)" description=" - Assigned by Buyer or Buyer s Agent - Static value:92" value="92" uid="d1186e142">
											<attribute name="Id" type="string" label="Id" description="Id - N103" value="N103" visibility="hidden" uid="d1186e144"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="N104 - Identification Code" description="Identification Code - Sample:123" uid="d1186e147">
											<attribute name="Id" type="string" label="Id" description="Id - N104" value="N104" visibility="hidden" uid="d1186e149"/>
										</element>
									</element>
								</element>
							</loop>
							<element name="segment" minOccurs="0" label="ITD - Terms of Sale/Deferred Terms of Sale" description="To specify terms of sale" uid="d1186e155">
								<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='')" uid="d1187e167">
									<arg source="d1186e169" uid="d1187e168"/>
									<arg source="d1186e174" uid="d1187e169"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - ITD" value="ITD" visibility="hidden" uid="d1186e157"/>
								<element name="element" type="string" minOccurs="1" label="ITD01 - Terms Type Code - Basic (Static)" description=" - Basic - Static value:01" value="01" uid="d1186e159">
									<attribute name="Id" type="string" label="Id" description="Id - ITD01" value="ITD01" visibility="hidden" uid="d1186e161"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="ITD02 - Terms Basis Date Code - Invoice Date (Static)" description=" - Invoice Date - Static value:3" value="3" uid="d1186e164">
									<attribute name="Id" type="string" label="Id" description="Id - ITD02" value="ITD02" visibility="hidden" uid="d1186e166"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="ITD05 - Terms Discount Days Due" description="Terms Discount Days Due - Sample:0" uid="d1186e169">
									<attribute name="Id" type="string" label="Id" description="Id - ITD05" value="ITD05" visibility="hidden" uid="d1186e171"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="ITD07 - Terms Net Days" description="Terms Net Days - Sample:60" uid="d1186e174">
									<attribute name="Id" type="string" label="Id" description="Id - ITD07" value="ITD07" visibility="hidden" uid="d1186e176"/>
								</element>
							</element>
							<loop label="Loop" uid="d1186e180">
								<element name="loop" label="IT1 - Baseline Item Data (Invoice" description="IT1 - " minOccurs="0" uid="d1186e182">
									<attribute name="Id" type="string" label="Id" description="Id - IT1" value="IT1" visibility="hidden" uid="d1186e184"/>
									<element name="segment" minOccurs="1" label="IT1 - Baseline Item Data (Invoice" description="" uid="d1186e186">
										<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='') and (normalize-space(string($arg3))!='') and (normalize-space(string($arg4))!='')" uid="d1187e201">
											<arg source="d1186e190" uid="d1187e202"/>
											<arg source="d1186e195" uid="d1187e203"/>
											<arg source="d1186e205" uid="d1187e204"/>
											<arg source="d1186e216" uid="d1187e205"/>
										</rendered>
										<attribute name="Id" type="string" label="Id" description="Id - IT1" value="IT1" visibility="hidden" uid="d1186e188"/>
										<element name="element" type="string" minOccurs="1" label="IT101 - Assigned Identification" description="Assigned Identification - Sample:1" uid="d1186e190">
											<attribute name="Id" type="string" label="Id" description="Id - IT101" value="IT101" visibility="hidden" uid="d1186e192"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT102 - Quantity Invoiced" description="Quantity Invoiced - Sample:4" uid="d1186e195">
											<attribute name="Id" type="string" label="Id" description="Id - IT102" value="IT102" visibility="hidden" uid="d1186e197"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT103 - Unit or Basis for Measurement Code - Each (Static)" description=" - Each - Static value:EA" value="EA" uid="d1186e200">
											<attribute name="Id" type="string" label="Id" description="Id - IT103" value="IT103" visibility="hidden" uid="d1186e202"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT104 - Unit Price" description="Unit Price - Sample:8.60" uid="d1186e205">
											<attribute name="Id" type="string" label="Id" description="Id - IT104" value="IT104" visibility="hidden" uid="d1186e207"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT106 - Product/Service ID Qualifier - U.P.C. Consumer Package Code (1-5-5-1?) (Static)" description=" - U.P.C. Consumer Package Code (1-5-5-1?) - Static value:UP" value="UP" uid="d1186e211">
											<attribute name="Id" type="string" label="Id" description="Id - IT106" value="IT106" visibility="hidden" uid="d1186e213"/>
										</element>
										<element name="element" type="string" minOccurs="1" label="IT107 - Product/Service ID" description="Product/Service ID - Sample:999999330023" uid="d1186e216">
											<attribute name="Id" type="string" label="Id" description="Id - IT107" value="IT107" visibility="hidden" uid="d1186e218"/>
										</element>
									</element>
									<loop label="Loop" uid="d1186e222">
										<element name="loop" label="PID - Product/Item Description" description="PID - To describe a product or process in coded or free-form format" minOccurs="0" uid="d1186e224">
											<attribute name="Id" type="string" label="Id" description="Id - PID" value="PID" visibility="hidden" uid="d1186e226"/>
											<element name="segment" minOccurs="1" label="PID - Product/Item Description" description="To describe a product or process in coded or free-form format" uid="d1186e228">
												<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e248">
													<arg source="d1186e237" uid="d1187e249"/>
												</rendered>
												<attribute name="Id" type="string" label="Id" description="Id - PID" value="PID" visibility="hidden" uid="d1186e230"/>
												<element name="element" type="string" minOccurs="1" label="PID01 - Item Description Type - Free-form (Static)" description=" - Free-form - Static value:F" value="F" uid="d1186e232">
													<attribute name="Id" type="string" label="Id" description="Id - PID01" value="PID01" visibility="hidden" uid="d1186e234"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="PID02 - Product/Process Characteristic Code" description="Product/Process Characteristic Code - Sample:Item Description" uid="d1186e237">
													<attribute name="Id" type="string" label="Id" description="Id - PID02" value="PID02" visibility="hidden" uid="d1186e239"/>
												</element>
											</element>
										</element>
									</loop>
									<loop label="Loop" uid="d1186e245">
										<element name="loop" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="SAC - To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" minOccurs="0" uid="d1186e247">
											<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e249"/>
											<element name="segment" minOccurs="1" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" uid="d1186e251">
												<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e273">
													<arg source="d1186e265" uid="d1187e274"/>
												</rendered>
												<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e253"/>
												<element name="element" type="string" minOccurs="1" label="SAC01 - Allowance or Charge Indicator - Charge (Static)" description=" - Charge - Static value:C" value="C" uid="d1186e255">
													<attribute name="Id" type="string" label="Id" description="Id - SAC01" value="SAC01" visibility="hidden" uid="d1186e257"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC02 - Service, Promotion, Allowance, or Charge Code - Freight (Static)" description=" - Freight - Static value:D240" value="D240" uid="d1186e260">
													<attribute name="Id" type="string" label="Id" description="Id - SAC02" value="SAC02" visibility="hidden" uid="d1186e262"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC05 - Amount" description="Amount - Sample:100" uid="d1186e265">
													<attribute name="Id" type="string" label="Id" description="Id - SAC05" value="SAC05" visibility="hidden" uid="d1186e267"/>
												</element>
											</element>
										</element>
									</loop>
									<loop label="Loop" uid="d1186e273">
										<element name="loop" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="SAC - To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" minOccurs="0" uid="d1186e275">
											<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e277"/>
											<element name="segment" minOccurs="1" label="SAC - Service, Promotion, Allowance, or Charge Informati" description="To request or identify a service, promotion, allowance, or charge; to specify  the amount or percentage for the service, promotion, allowance, or charge" uid="d1186e279">
												<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e303">
													<arg source="d1186e293" uid="d1187e304"/>
												</rendered>
												<attribute name="Id" type="string" label="Id" description="Id - SAC" value="SAC" visibility="hidden" uid="d1186e281"/>
												<element name="element" type="string" minOccurs="1" label="SAC01 - Allowance or Charge Indicator - Charge (Static)" description=" - Charge - Static value:C" value="C" uid="d1186e283">
													<attribute name="Id" type="string" label="Id" description="Id - SAC01" value="SAC01" visibility="hidden" uid="d1186e285"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC02 - Service, Promotion, Allowance, or Charge Code - Tax - Sales Tax (State and Local?) (Static)" description=" - Tax - Sales Tax (State and Local?) - Static value:H750" value="H750" uid="d1186e288">
													<attribute name="Id" type="string" label="Id" description="Id - SAC02" value="SAC02" visibility="hidden" uid="d1186e290"/>
												</element>
												<element name="element" type="string" minOccurs="1" label="SAC05 - Amount" description="Amount - Sample:50" uid="d1186e293">
													<attribute name="Id" type="string" label="Id" description="Id - SAC05" value="SAC05" visibility="hidden" uid="d1186e295"/>
												</element>
											</element>
										</element>
									</loop>
								</element>
							</loop>
							<element name="segment" minOccurs="0" label="TDS - Total Monetary Value Summary" description="To specify the total invoice discounts and amounts" uid="d1186e303">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e329">
									<arg source="d1186e307" uid="d1187e330"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - TDS" value="TDS" visibility="hidden" uid="d1186e305"/>
								<element name="element" type="string" minOccurs="1" label="TDS01 - Amount" description="Amount - Sample:21740" uid="d1186e307">
									<attribute name="Id" type="string" label="Id" description="Id - TDS01" value="TDS01" visibility="hidden" uid="d1186e309"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="CAD - Carrier Detail" description="To specify transportation details for the transaction" uid="d1186e313">
								<rendered test="(normalize-space(string($arg1))!='') and (normalize-space(string($arg2))!='')" uid="d1187e341">
									<arg source="d1186e317" uid="d1187e342"/>
									<arg source="d1186e327" uid="d1187e343"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - CAD" value="CAD" visibility="hidden" uid="d1186e315"/>
								<element name="element" type="string" minOccurs="1" label="CAD05 - Routing" description="Routing - Sample:GTCT" uid="d1186e317">
									<attribute name="Id" type="string" label="Id" description="Id - CAD05" value="CAD05" visibility="hidden" uid="d1186e319"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="CAD07 - Reference Identification Qualifier - Bill of Lading Number (Static)" description=" - Bill of Lading Number - Static value:BM" value="BM" uid="d1186e322">
									<attribute name="Id" type="string" label="Id" description="Id - CAD07" value="CAD07" visibility="hidden" uid="d1186e324"/>
								</element>
								<element name="element" type="string" minOccurs="1" label="CAD08 - Reference Identification" description="Reference Identification - Sample:99999" uid="d1186e327">
									<attribute name="Id" type="string" label="Id" description="Id - CAD08" value="CAD08" visibility="hidden" uid="d1186e329"/>
								</element>
							</element>
							<element name="segment" minOccurs="0" label="CTT - Transaction Totals" description="To transmit a hash total for a specific element in the transaction set" uid="d1186e334">
								<rendered test="(normalize-space(string($arg1))!='')" uid="d1187e365">
									<arg source="d1186e338" uid="d1187e366"/>
								</rendered>
								<attribute name="Id" type="string" label="Id" description="Id - CTT" value="CTT" visibility="hidden" uid="d1186e336"/>
								<element name="element" type="string" minOccurs="1" label="CTT01 - Number of Line Items" description="Number of Line Items - Sample:8" uid="d1186e338">
									<attribute name="Id" type="string" label="Id" description="Id - CTT01" value="CTT01" visibility="hidden" uid="d1186e340"/>
								</element>
							</element>
						</element>
					</loop>
				</element>
			</loop>
		</element>
	</element>
</message-definition>
```

### Task #1

- Documents attached to the Task #1.

> Basic X12 810 Invoice.txt

```
ISA*00*          *00*          *01*ABCCOM         *12*9999999999     *101205*1710*U*00401*000001320*0*P*>
GS*IN*4405197800*999999999*20101205*1710*1320*X*004010VICS
ST*810*1004
BIG*20101204*217224*20101204*P792940
REF*DP*099
REF*IA*99999
N1*ST**92*123
N1*BT*CustomerA*92*123
PER*BD*Customer*EM*admin@domain.com
ITD*01*3***0**60
IT1*1*4*EA*8.60**UP*999999330023
PID*F****Item Description
SAC*C*D240***100
TDS*21740
CAD*****GTCT**BM*99999
CTT*8
SE*15*1004
GE*1*1320
IEA*1*000001320
```

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

Complete the follwing tasks. If you need access to the Babelway platform, you can signup for a free trial at www.babelway.net

- Create a new channel, **Upload Message IN X12 810**,
  - Message Out XML Invoice
- Use Validation to solve:
  - Only intake Invoice file where **PO #** is exactly **10** digits
  - **X12 810 PO#** is **BIG04**
  - If no **Unit of Measure** is given, default **‘EA’**
- Edit Message Definition on **X12 810**
  - Add an additional **SAC** segment group, Re-upload
- Put **D240** and **H750** in each **SAC02** filter value

* Create a New Channel

![](/images/other/edi-babelway-intermediate-transformation/Task1.png)

![](/images/other/edi-babelway-intermediate-transformation/Task12.png)

- Put the `XML` type to `message OUT`

![](/images/other/edi-babelway-intermediate-transformation/Task13.png)

![](/images/other/edi-babelway-intermediate-transformation/Task14.png)

- Choose `Simple XML invoice.xml` for the `Sample XML`

![](/images/other/edi-babelway-intermediate-transformation/Task15.png)

![](/images/other/edi-babelway-intermediate-transformation/Task16.png)

- Put the `X12` type to `message IN`

![](/images/other/edi-babelway-intermediate-transformation/Task17.png)

- Select the `Basic X12 810 Invoice.txt` for `X12 sample`

![](/images/other/edi-babelway-intermediate-transformation/Task18.png)

![](/images/other/edi-babelway-intermediate-transformation/Task19.png)

- Only intake Invoice file where **PO #** is exactly **10** digits

![](/images/other/edi-babelway-intermediate-transformation/Task110.png)

- If no **Unit of Measure** is given, default **‘EA’**

![](/images/other/edi-babelway-intermediate-transformation/Task111.png)

- Add an additional **SAC** segment group, Re-upload.

Get the Message definition from `Properties`

![](/images/other/edi-babelway-intermediate-transformation/Task112.png)

- Download the `MessageDefinition.xml`

![](/images/other/edi-babelway-intermediate-transformation/Task113.png)

- Change the name of the file to `MessageDefinitionIN_Task1.xml`

![](/images/other/edi-babelway-intermediate-transformation/Task114.png)

- Modify the `MessageDefinitionIN_Task1.xml` to add an additional **SAC** segment group.

> MessageDefinitionIN_Task1.xml (before adding **SAC**).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message-definition xmlns="http://xmlns.babelway.com/2007/message-definition" uid="d158724e1">
.
.
.
							<element uid="X12.MESSAGES.M810.SG20010.SG20180" name="SG20180" prefix="" label="SAC Group" description="" value="" visibility="" renderCondition="">
								<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC" name="SAC" prefix="" label="SAC - Service, Promotion, Allowance, or Charge Information" description="To request or identify a service, promotion, allowance, or charge; to specify the amount or percentage for the service, promotion, allowance, or charge" value="" visibility="" renderCondition="">
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC01" name="SAC01" prefix="" label="SAC01 - Allowance or Charge Indicator" description="Code which indicates an allowance or charge for the service specified. Type : an. Sample value : 'C' : Charge. " value="" visibility="" type="string" renderCondition=""/>
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC02" name="SAC02" prefix="" label="SAC02 - Service, Promotion, Allowance, or Charge Code" description="Code identifying the service, promotion, allowance, or charge. Type : an. Sample value : 'D240' : Freight. " value="" visibility="" type="string" renderCondition=""/>
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC05" name="SAC05" prefix="" label="SAC05 - Amount" description="Monetary amount. Type : n2. Sample value : '100'. " value="" visibility="" type="string" renderCondition=""/>
								</element>
							</element>
.
.
.
</message-definition>
```

> MessageDefinitionIN_Task1.xml (after adding **SAC**).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message-definition xmlns="http://xmlns.babelway.com/2007/message-definition" uid="d158724e1">
.
.
.
							<element uid="X12.MESSAGES.M810.SG20010.SG20180" name="SG20180" prefix="" label="SAC Group" description="" value="" visibility="" renderCondition="">
								<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC" name="SAC" prefix="" label="SAC - Service, Promotion, Allowance, or Charge Information" description="To request or identify a service, promotion, allowance, or charge; to specify the amount or percentage for the service, promotion, allowance, or charge" value="" visibility="" renderCondition="">
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC01" name="SAC01" prefix="" label="SAC01 - Allowance or Charge Indicator" description="Code which indicates an allowance or charge for the service specified. Type : an. Sample value : 'C' : Charge. " value="" visibility="" type="string" renderCondition=""/>
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC02" name="SAC02" prefix="" label="SAC02 - Service, Promotion, Allowance, or Charge Code" description="Code identifying the service, promotion, allowance, or charge. Type : an. Sample value : 'D240' : Freight. " value="" visibility="" type="string" renderCondition=""/>
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC05" name="SAC05" prefix="" label="SAC05 - Amount" description="Monetary amount. Type : n2. Sample value : '100'. " value="" visibility="" type="string" renderCondition=""/>
								</element>
							</element>
							<element uid="X12.MESSAGES.M810.SG20010.SG20180b" name="SG20180" prefix="" label="SAC Group" description="" value="" visibility="" renderCondition="">
								<element uid="X12.MESSAGES.M810.SG20010.SG20180.SACb" name="SAC" prefix="" label="SAC - Service, Promotion, Allowance, or Charge Information" description="To request or identify a service, promotion, allowance, or charge; to specify the amount or percentage for the service, promotion, allowance, or charge" value="" visibility="" renderCondition="">
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC01b" name="SAC01" prefix="" label="SAC01 - Allowance or Charge Indicator" description="Code which indicates an allowance or charge for the service specified. Type : an. Sample value : 'C' : Charge. " value="" visibility="" type="string" renderCondition=""/>
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC02b" name="SAC02" prefix="" label="SAC02 - Service, Promotion, Allowance, or Charge Code" description="Code identifying the service, promotion, allowance, or charge. Type : an. Sample value : 'D240' : Freight. " value="" visibility="" type="string" renderCondition=""/>
									<element uid="X12.MESSAGES.M810.SG20010.SG20180.SAC.SAC05b" name="SAC05" prefix="" label="SAC05 - Amount" description="Monetary amount. Type : n2. Sample value : '100'. " value="" visibility="" type="string" renderCondition=""/>
								</element>
							</element>
						</element>
.
.
.
</message-definition>
```

- before the changes:

![](/images/other/edi-babelway-intermediate-transformation/Task115.png)

- Import the new Message definition. Choose the modified `MessageDefinitionIN_Task1.xml` message definition.

![](/images/other/edi-babelway-intermediate-transformation/Task116.png)

- after the changes:

![](/images/other/edi-babelway-intermediate-transformation/Task117.png)

- Put **D240** and **H750** in each **SAC02** filter value. We can find more information about filters on [2.4.1. Filters](https://babelway.zendesk.com/hc/en-us/articles/360009975873--2-4-1-Filters)

![](/images/other/edi-babelway-intermediate-transformation/Task118.png)

![](/images/other/edi-babelway-intermediate-transformation/Task119.png)

## Advanced Tools

### Extra Processing

Both `Gateway` and `Message` elements have '**Extra Processing**' tools. These are advanced tools that let you do more with the messages or gateway. Each has it's own purpose and specifics, below we'll go over some of the most common ones.

You can access the extra processing tools by the link below the message

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing.png)

**Gateway**

_Message Identifier_ - Adds more metadata about a message, especially relevant to common EDI standards, such as:

- Universal_router_type : ‘ORDERS’, ‘INVOIC’, etc.
- Universal_router_format : ‘EDIFACT’, ‘X12’, etc.
- Universal_router_version : ’96A’, ‘4010’
- Universal_router_sender : Sender ID
- Universal_router_Receiver : Receiver ID

_Automatically Close Errors_ - Closes unimportant errors based on certain patterns in the error description. You can have more than one pattern per channel

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing2.png)

**Message**

_Duplicate Message_ - sends the message again to an internal gateway, you can set the delivery criteria (i.e. on success, on receipt, etc.)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing3.png)

_Replace by Regex_ - Replaces data on the incoming message based on regex matching.

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing4.png)

_Zip Unwrapping_ - Extract files from a .zip file received. You can use regex to match files to be used in the transformation and other files to be saved as metadata.

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing5.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing6.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing7.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing8.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing9.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing10.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing11.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing12.png)

![](/images/other/edi-babelway-intermediate-transformation/ExtraProcessing13.png)

### Advanced Functions (4:47)

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunctions.png)

- `IF` function.

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunctions2.png)

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunctions3.png)

- `Metadata`

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunctions4.png)

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunctions5.png)

- So, apart from transforming `BIG02 - Invoice Number` into `invoiceNumber`, the value is set to the `invoice_number` metadata that can be used in aother process after the transformation.

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunctions6.png)

- `substring` function

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunction7.png)

- `substring-after` function

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunction8.png)

- `translate` function

![](/images/other/edi-babelway-intermediate-transformation/AdvancedFunction9.png)

### Advanced Looping (2:40)

- `filterLoop` function.

![](/images/other/edi-babelway-intermediate-transformation/AdvancedLooping.png)

- `sumLoop` function.

![](/images/other/edi-babelway-intermediate-transformation/AdvancedLooping2.png)

- `position` function.

![](/images/other/edi-babelway-intermediate-transformation/AdvancedLooping3.png)

### Task #2

Using the channels created in Task #1, complete the following tasks:

1. When the inbound file on my channel is successful, I need to send the raw inbound data to an FTP server

- We need to create a new Channel:

![](/images/other/edi-babelway-intermediate-transformation/Task2.png)

- Put `Send Message X12 810 to Customer FTP` for `Name`.

![](/images/other/edi-babelway-intermediate-transformation/Task22.png)

- Select `Internal` for `Gateway IN` Type

![](/images/other/edi-babelway-intermediate-transformation/Task23.png)

![](/images/other/edi-babelway-intermediate-transformation/Task24.png)

- Create `Message In` of type `Not Defined`.

![](/images/other/edi-babelway-intermediate-transformation/Task25.png)

![](/images/other/edi-babelway-intermediate-transformation/Task26.png)

![](/images/other/edi-babelway-intermediate-transformation/Task27.png)

- Create `Message Out` of type `Not Defined`.

![](/images/other/edi-babelway-intermediate-transformation/Task28.png)

![](/images/other/edi-babelway-intermediate-transformation/Task29.png)

![](/images/other/edi-babelway-intermediate-transformation/Task210.png)

- Create `Transformation` of type `No Transformation`.

![](/images/other/edi-babelway-intermediate-transformation/Task211.png)

- Select `FTP Client` for `Gateway OUT` Type

![](/images/other/edi-babelway-intermediate-transformation/Task212.png)

![](/images/other/edi-babelway-intermediate-transformation/Task213.png)

- Select the `Upload Message IN X12 810` Channel

![](/images/other/edi-babelway-intermediate-transformation/Task214.png)

- Go to `Message IN` and the click on `Extra processings`

![](/images/other/edi-babelway-intermediate-transformation/Task215.png)

- Click on `Add extra processing`

![](/images/other/edi-babelway-intermediate-transformation/Task216.png)

- Select `Duplicate incoming message`

![](/images/other/edi-babelway-intermediate-transformation/Task217.png)

- Select `With success` for `Step`, `INTERNAL IN` for `Target gateways`, and `Transfer all` for `User Metadada Transfer Strategy`.

![](/images/other/edi-babelway-intermediate-transformation/Task218.png)

2. Remove all line items with 0 quantity

- Select `Transform`

![](/images/other/edi-babelway-intermediate-transformation/Task219.png)

- Add the filterLoop function with `filterLoop(${md:X12.MESSAGES.M810.SG20010_Loop}, '${md:X12.MESSAGES.M810.SG20010.IT1.IT102} > 0')`

![](/images/other/edi-babelway-intermediate-transformation/Task220.png)

3. Set a Gateway OUT SMTP Email with it sending to the Bill To email address on the inbound message

- Create a new `email_inbound` with the `Transform`

![](/images/other/edi-babelway-intermediate-transformation/Task221.png)

![](/images/other/edi-babelway-intermediate-transformation/Task222.png)

![](/images/other/edi-babelway-intermediate-transformation/Task223.png)

- Set the `email_inbound` value.

![](/images/other/edi-babelway-intermediate-transformation/Task224.png)

- Reset the current `Gateway` OUT to be able to assign a `SMTP Email` one.

![](/images/other/edi-babelway-intermediate-transformation/Task225.png)

![](/images/other/edi-babelway-intermediate-transformation/Task226.png)

![](/images/other/edi-babelway-intermediate-transformation/Task227.png)

![](/images/other/edi-babelway-intermediate-transformation/Task228.png)

![](/images/other/edi-babelway-intermediate-transformation/Task229.png)

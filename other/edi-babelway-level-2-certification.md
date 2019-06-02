# Babelway - Level 2 Certification

The [Level 2 Certification](https://academy.babelway.com/p/level-2-certification) Babelway course will give you the materials and prompt you with a hypothetical implementation project.

Upon completion of the work, and submission for approval, the user can be awarded a level 2 Babelway certificate and signifies the users intermediate understanding of the Babelway tool and B2B integration concepts.

> Table of contents
> [[toc]]

## Project Scenarios

### Scenario #1

In this scenario, we will be adding B2B integration between our host system and our new customer: Adobe. The following transactions must be implemented:

- 810 Invoice (to Adobe)
- 850 Order (from Adobe)
- 855 Order Response (to Adobe)

Adobe has all of their X12 specifications made publicly online.

[https://channelpartners.adobe.com/home/support/edi.html](Adobe Partner Connection)

https://channelpartners.adobe.com/home/support/edi.html#Tabs_contentbody_section_8fee_par_tabs_1e33_1e33_tab2

Our system deals with UBL data. The Adobe information must be translated to and from UBL. Samples of each document type are attached. Specifications can be found online at the https://docs.oasis-open.org/ubl/os-UBL-2.1/UBL-2.1.xml website. (access from main https://docs.oasis-open.org/)

Adobe will allow orders posted on their sFTP site. Our credentials given to us by Adobe are:

- Server: **sftp.adobe.com**

- Username: **Supplier58192**

- Password: **k92gxk8i4l**

- Dir: **Invoice , DESADV**

We will be pulling orders from the same sFTP, but in the directory 'Order'

If you have any questions about this scenario, please direct them to jeff.douglas@babelway.com

> UBL 2.1 Order Sample.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Order xmlns="urn:oasis:names:specification:ubl:schema:xsd:Order-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
   <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
   <cbc:CustomizationID>urn:www.cenbii.eu:transaction:biicoretrdm001:ver1.0</cbc:CustomizationID>
   <cbc:ProfileID schemeAgencyID="BII" schemeID="Profile">urn:www.cenbii.eu:profile:BII01:ver1.0</cbc:ProfileID>
   <cbc:ID>34</cbc:ID>
   <cbc:IssueDate>2010-01-20</cbc:IssueDate>
   <cbc:IssueTime>12:30:00</cbc:IssueTime>
   <cbc:Note>Information text for the whole order</cbc:Note>
   <cbc:DocumentCurrencyCode>SEK</cbc:DocumentCurrencyCode>
   <cbc:AccountingCostCode>Project123</cbc:AccountingCostCode>
   <cac:ValidityPeriod>
      <cbc:EndDate>2010-01-31</cbc:EndDate>
   </cac:ValidityPeriod>
   <cac:QuotationDocumentReference>
      <cbc:ID>QuoteID123</cbc:ID>
   </cac:QuotationDocumentReference>
   <cac:OrderDocumentReference>
      <cbc:ID>RjectedOrderID123</cbc:ID>
   </cac:OrderDocumentReference>
   <cac:OriginatorDocumentReference>
      <cbc:ID>MAFO</cbc:ID>
   </cac:OriginatorDocumentReference>
   <cac:AdditionalDocumentReference>
      <cbc:ID>Doc1</cbc:ID>
      <cbc:DocumentType>Timesheet</cbc:DocumentType>
      <cac:Attachment>
         <cac:ExternalReference>
            <cbc:URI>http://www.suppliersite.eu/sheet001.html</cbc:URI>
         </cac:ExternalReference>
      </cac:Attachment>
   </cac:AdditionalDocumentReference>
   <cac:AdditionalDocumentReference>
      <cbc:ID>Doc2</cbc:ID>
      <cbc:DocumentType>Drawing</cbc:DocumentType>
      <cac:Attachment>
         <cbc:EmbeddedDocumentBinaryObject mimeCode="application/pdf">UjBsR09EbGhjZ0dTQUxNQUFBUUNBRU1tQ1p0dU1GUXhEUzhi</cbc:EmbeddedDocumentBinaryObject>
      </cac:Attachment>
   </cac:AdditionalDocumentReference>
   <cac:Contract>
      <cbc:ID>34322</cbc:ID>
      <cbc:ContractType>FrameworkAgreementID123</cbc:ContractType>
   </cac:Contract>
   <cac:BuyerCustomerParty>
      <cac:Party>
         <cbc:EndpointID schemeAgencyID="9" schemeID="GLN">7300072311115</cbc:EndpointID>
         <cac:PartyIdentification>
            <cbc:ID schemeAgencyID="9" schemeID="GLN">7300070011115</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyIdentification>
            <cbc:ID>PartyID123</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>Johnssons byggvaror</cbc:Name>
         </cac:PartyName>
         <cac:PostalAddress>
            <cbc:ID schemeAgencyID="9" schemeID="GLN">1234567890123</cbc:ID>
            <cbc:Postbox>PoBox123</cbc:Postbox>
            <cbc:StreetName>Rådhusgatan</cbc:StreetName>
            <cbc:AdditionalStreetName>2nd floor</cbc:AdditionalStreetName>
            <cbc:BuildingNumber>5</cbc:BuildingNumber>
            <cbc:Department>Purchasing department</cbc:Department>
            <cbc:CityName>Stockholm</cbc:CityName>
            <cbc:PostalZone>11000</cbc:PostalZone>
            <cbc:CountrySubentity>RegionX</cbc:CountrySubentity>
            <cac:Country>
               <cbc:IdentificationCode>SE</cbc:IdentificationCode>
            </cac:Country>
         </cac:PostalAddress>
         <cac:PartyTaxScheme>
            <cbc:RegistrationName>Herra Johnssons byggvaror AS</cbc:RegistrationName>
            <cbc:CompanyID>SE1234567801</cbc:CompanyID>
            <cac:RegistrationAddress>
               <cbc:CityName>Stockholm</cbc:CityName>
               <cac:Country>
                  <cbc:IdentificationCode>SE</cbc:IdentificationCode>
               </cac:Country>
            </cac:RegistrationAddress>
            <cac:TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </cac:TaxScheme>
         </cac:PartyTaxScheme>
         <cac:PartyLegalEntity>
            <cbc:RegistrationName>Johnssons Byggvaror AB</cbc:RegistrationName>
            <cbc:CompanyID schemeID="SE:ORGNR">5532331183</cbc:CompanyID>
            <cac:RegistrationAddress>
               <cbc:CityName>Stockholm</cbc:CityName>
               <cbc:CountrySubentity>RegionX</cbc:CountrySubentity>
               <cac:Country>
                  <cbc:IdentificationCode>SE</cbc:IdentificationCode>
               </cac:Country>
            </cac:RegistrationAddress>
         </cac:PartyLegalEntity>
         <cac:Contact>
            <cbc:Telephone>123456</cbc:Telephone>
            <cbc:Telefax>123456</cbc:Telefax>
            <cbc:ElectronicMail>pelle@johnsson.se</cbc:ElectronicMail>
         </cac:Contact>
         <cac:Person>
            <cbc:FirstName>Pelle</cbc:FirstName>
            <cbc:FamilyName>Svensson</cbc:FamilyName>
            <cbc:MiddleName>X</cbc:MiddleName>
            <cbc:JobTitle>Boss</cbc:JobTitle>
         </cac:Person>
      </cac:Party>
      <cac:DeliveryContact>
         <cbc:Name>Eva Johnsson</cbc:Name>
         <cbc:Telephone>1234356</cbc:Telephone>
         <cbc:Telefax>123455</cbc:Telefax>
         <cbc:ElectronicMail>eva@johnsson.se</cbc:ElectronicMail>
      </cac:DeliveryContact>
   </cac:BuyerCustomerParty>
   <cac:SellerSupplierParty>
      <cac:Party>
         <cbc:EndpointID schemeAgencyID="9" schemeID="GLN">7302347231111</cbc:EndpointID>
         <cac:PartyIdentification>
            <cbc:ID>SellerPartyID123</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>Moderna Produkter AB</cbc:Name>
         </cac:PartyName>
         <cac:PostalAddress>
            <cbc:ID schemeAgencyID="9" schemeID="GLN">0987654321123</cbc:ID>
            <cbc:Postbox>321</cbc:Postbox>
            <cbc:StreetName>Kungsgatan</cbc:StreetName>
            <cbc:AdditionalStreetName>suite12</cbc:AdditionalStreetName>
            <cbc:BuildingNumber>22</cbc:BuildingNumber>
            <cbc:Department>Sales department</cbc:Department>
            <cbc:CityName>Stockholm</cbc:CityName>
            <cbc:PostalZone>11000</cbc:PostalZone>
            <cbc:CountrySubentity>RegionX</cbc:CountrySubentity>
            <cac:Country>
               <cbc:IdentificationCode>SE</cbc:IdentificationCode>
            </cac:Country>
         </cac:PostalAddress>
         <cac:PartyLegalEntity>
            <cbc:RegistrationName>Moderna Produkter AB</cbc:RegistrationName>
            <cbc:CompanyID schemeID="SE:ORGNR">5532332283</cbc:CompanyID>
            <cac:RegistrationAddress>
               <cbc:CityName>Stockholm</cbc:CityName>
               <cbc:CountrySubentity>RegionX</cbc:CountrySubentity>
               <cac:Country>
                  <cbc:IdentificationCode>SE</cbc:IdentificationCode>
               </cac:Country>
            </cac:RegistrationAddress>
         </cac:PartyLegalEntity>
         <cac:Contact>
            <cbc:Telephone>34557</cbc:Telephone>
            <cbc:Telefax>3456767</cbc:Telefax>
            <cbc:ElectronicMail>lars@moderna.se</cbc:ElectronicMail>
         </cac:Contact>
         <cac:Person>
            <cbc:FirstName>Lars</cbc:FirstName>
            <cbc:FamilyName>Petersen</cbc:FamilyName>
            <cbc:MiddleName>M</cbc:MiddleName>
            <cbc:JobTitle>Sales manager</cbc:JobTitle>
         </cac:Person>
      </cac:Party>
   </cac:SellerSupplierParty>
   <cac:OriginatorCustomerParty>
      <cac:Party>
         <cac:PartyIdentification>
            <cbc:ID schemeAgencyID="9" schemeID="GLN">0987678321123</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>Moderna Produkter AB</cbc:Name>
         </cac:PartyName>
         <cac:Contact>
            <cbc:Telephone>346788</cbc:Telephone>
            <cbc:Telefax>8567443</cbc:Telefax>
            <cbc:ElectronicMail>sven@moderna.se</cbc:ElectronicMail>
         </cac:Contact>
         <cac:Person>
            <cbc:FirstName>Sven</cbc:FirstName>
            <cbc:FamilyName>Pereson</cbc:FamilyName>
            <cbc:MiddleName>N</cbc:MiddleName>
            <cbc:JobTitle>Stuffuser</cbc:JobTitle>
         </cac:Person>
      </cac:Party>
   </cac:OriginatorCustomerParty>
   <cac:Delivery>
      <cac:DeliveryLocation>
         <cac:Address>
            <cbc:ID schemeAgencyID="9" schemeID="GLN">1234567890123</cbc:ID>
            <cbc:Postbox>123</cbc:Postbox>
            <cbc:StreetName>Rådhusgatan</cbc:StreetName>
            <cbc:AdditionalStreetName>2nd floor</cbc:AdditionalStreetName>
            <cbc:BuildingNumber>5</cbc:BuildingNumber>
            <cbc:Department>Purchasing department</cbc:Department>
            <cbc:CityName>Stockholm</cbc:CityName>
            <cbc:PostalZone>11000</cbc:PostalZone>
            <cbc:CountrySubentity>RegionX</cbc:CountrySubentity>
            <cac:Country>
               <cbc:IdentificationCode>SE</cbc:IdentificationCode>
            </cac:Country>
         </cac:Address>
      </cac:DeliveryLocation>
      <cac:RequestedDeliveryPeriod>
         <cbc:StartDate>2010-02-10</cbc:StartDate>
         <cbc:EndDate>2010-02-25</cbc:EndDate>
      </cac:RequestedDeliveryPeriod>
      <cac:DeliveryParty>
         <cac:PartyIdentification>
            <cbc:ID schemeAgencyID="9" schemeID="GLN">67654328394567</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>Swedish trucking</cbc:Name>
         </cac:PartyName>
         <cac:Contact>
            <cbc:Name>Per</cbc:Name>
            <cbc:Telephone>987098709</cbc:Telephone>
            <cbc:Telefax>34673435</cbc:Telefax>
            <cbc:ElectronicMail>bill@svetruck.se</cbc:ElectronicMail>
         </cac:Contact>
      </cac:DeliveryParty>
   </cac:Delivery>
   <cac:DeliveryTerms>
      <cbc:ID schemeAgencyID="6" schemeID="IMCOTERM">FOT</cbc:ID>
      <cbc:SpecialTerms>CAD</cbc:SpecialTerms>
      <cac:DeliveryLocation>
         <cbc:ID>STO</cbc:ID>
      </cac:DeliveryLocation>
   </cac:DeliveryTerms>
   <cac:AllowanceCharge>
      <cbc:ChargeIndicator>true</cbc:ChargeIndicator>
      <cbc:AllowanceChargeReason>Transport documents</cbc:AllowanceChargeReason>
      <cbc:Amount currencyID="SEK">100</cbc:Amount>
   </cac:AllowanceCharge>
   <cac:AllowanceCharge>
      <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
      <cbc:AllowanceChargeReason>Total order value discount</cbc:AllowanceChargeReason>
      <cbc:Amount currencyID="SEK">100</cbc:Amount>
   </cac:AllowanceCharge>
   <cac:TaxTotal>
      <cbc:TaxAmount currencyID="SEK">100</cbc:TaxAmount>
   </cac:TaxTotal>
   <cac:AnticipatedMonetaryTotal>
      <cbc:LineExtensionAmount currencyID="SEK">6225</cbc:LineExtensionAmount>
      <cbc:AllowanceTotalAmount currencyID="SEK">100</cbc:AllowanceTotalAmount>
      <cbc:ChargeTotalAmount currencyID="SEK">100</cbc:ChargeTotalAmount>
      <cbc:PayableAmount currencyID="SEK">6225</cbc:PayableAmount>
   </cac:AnticipatedMonetaryTotal>
   <cac:OrderLine>
      <cbc:Note>Freetext note on line 1</cbc:Note>
      <cac:LineItem>
         <cbc:ID>1</cbc:ID>
         <cbc:Quantity unitCode="LTR">120</cbc:Quantity>
         <cbc:LineExtensionAmount currencyID="SEK">6000</cbc:LineExtensionAmount>
         <cbc:TotalTaxAmount currencyID="SEK">10</cbc:TotalTaxAmount>
         <cbc:PartialDeliveryIndicator>false</cbc:PartialDeliveryIndicator>
         <cbc:AccountingCostCode>ProjectID123</cbc:AccountingCostCode>
         <cac:Delivery>
            <cac:RequestedDeliveryPeriod>
               <cbc:StartDate>2010-02-10</cbc:StartDate>
               <cbc:EndDate>2010-02-25</cbc:EndDate>
            </cac:RequestedDeliveryPeriod>
         </cac:Delivery>
         <cac:OriginatorParty>
            <cac:PartyIdentification>
               <cbc:ID schemeAgencyID="ZZZ" schemeID="ZZZ">EmployeeXXX</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyName>
               <cbc:Name>Josef K.</cbc:Name>
            </cac:PartyName>
         </cac:OriginatorParty>
         <cac:Price>
            <cbc:PriceAmount currencyID="SEK">50</cbc:PriceAmount>
            <cbc:BaseQuantity unitCode="LTR">1</cbc:BaseQuantity>
         </cac:Price>
         <cac:Item>
            <cbc:Description>Red paint</cbc:Description>
            <cbc:Name>Falu Rödfärg</cbc:Name>
            <cac:SellersItemIdentification>
               <cbc:ID>SItemNo001</cbc:ID>
            </cac:SellersItemIdentification>
            <cac:StandardItemIdentification>
               <cbc:ID schemeAgencyID="6" schemeID="GTIN">1234567890123</cbc:ID>
            </cac:StandardItemIdentification>
            <cac:AdditionalItemProperty>
               <cbc:Name>Paint type</cbc:Name>
               <cbc:Value>Acrylic</cbc:Value>
            </cac:AdditionalItemProperty>
            <cac:AdditionalItemProperty>
               <cbc:Name>Solvant</cbc:Name>
               <cbc:Value>Water</cbc:Value>
            </cac:AdditionalItemProperty>
         </cac:Item>
      </cac:LineItem>
   </cac:OrderLine>
   <cac:OrderLine>
      <cbc:Note>Freetext note on line 2</cbc:Note>
      <cac:LineItem>
         <cbc:ID>2</cbc:ID>
         <cbc:Quantity unitCode="C62">15</cbc:Quantity>
         <cbc:LineExtensionAmount currencyID="SEK">225</cbc:LineExtensionAmount>
         <cbc:TotalTaxAmount currencyID="SEK">10</cbc:TotalTaxAmount>
         <cbc:PartialDeliveryIndicator>false</cbc:PartialDeliveryIndicator>
         <cbc:AccountingCostCode>ProjectID123</cbc:AccountingCostCode>
         <cac:Delivery>
            <cac:RequestedDeliveryPeriod>
               <cbc:StartDate>2010-02-10</cbc:StartDate>
               <cbc:EndDate>2010-02-25</cbc:EndDate>
            </cac:RequestedDeliveryPeriod>
         </cac:Delivery>
         <cac:OriginatorParty>
            <cac:PartyIdentification>
               <cbc:ID schemeAgencyID="ZZZ" schemeID="ZZZ">EmployeeXXX</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyName>
               <cbc:Name>Josef K.</cbc:Name>
            </cac:PartyName>
         </cac:OriginatorParty>
         <cac:Price>
            <cbc:PriceAmount currencyID="SEK">15</cbc:PriceAmount>
            <cbc:BaseQuantity unitCode="C62">1</cbc:BaseQuantity>
         </cac:Price>
         <cac:Item>
            <cbc:Description>Very good pencils for red paint.</cbc:Description>
            <cbc:Name>Pensel 20 mm</cbc:Name>
            <cac:SellersItemIdentification>
               <cbc:ID>SItemNo011</cbc:ID>
            </cac:SellersItemIdentification>
            <cac:StandardItemIdentification>
               <cbc:ID schemeAgencyID="6" schemeID="GTIN">123452340123</cbc:ID>
            </cac:StandardItemIdentification>
            <cac:AdditionalItemProperty>
               <cbc:Name>Hair color</cbc:Name>
               <cbc:Value>Black</cbc:Value>
            </cac:AdditionalItemProperty>
            <cac:AdditionalItemProperty>
               <cbc:Name>Width</cbc:Name>
               <cbc:Value>20mm</cbc:Value>
            </cac:AdditionalItemProperty>
         </cac:Item>
      </cac:LineItem>
   </cac:OrderLine>
</Order>
```

> UBL 2.1 Invoice Sample.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
   <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
   <cbc:ID>TOSL108</cbc:ID>
   <cbc:IssueDate>2009-12-15</cbc:IssueDate>
   <cbc:InvoiceTypeCode listID="UN/ECE 1001 Subset" listAgencyID="6">380</cbc:InvoiceTypeCode>
   <cbc:Note languageID="en">Ordered in our booth at the convention.</cbc:Note>
   <cbc:TaxPointDate>2009-11-30</cbc:TaxPointDate>
   <cbc:DocumentCurrencyCode listID="ISO 4217 Alpha" listAgencyID="6">EUR</cbc:DocumentCurrencyCode>
   <cbc:AccountingCost>Project cost code 123</cbc:AccountingCost>
   <cac:InvoicePeriod>
      <cbc:StartDate>2009-11-01</cbc:StartDate>
      <cbc:EndDate>2009-11-30</cbc:EndDate>
   </cac:InvoicePeriod>
   <cac:OrderReference>
      <cbc:ID>123</cbc:ID>
   </cac:OrderReference>
   <cac:ContractDocumentReference>
      <cbc:ID>Contract321</cbc:ID>
      <cbc:DocumentType>Framework agreement</cbc:DocumentType>
   </cac:ContractDocumentReference>
   <cac:AdditionalDocumentReference>
      <cbc:ID>Doc1</cbc:ID>
      <cbc:DocumentType>Timesheet</cbc:DocumentType>
      <cac:Attachment>
         <cac:ExternalReference>
            <cbc:URI>http://www.suppliersite.eu/sheet001.html</cbc:URI>
         </cac:ExternalReference>
      </cac:Attachment>
   </cac:AdditionalDocumentReference>
   <cac:AdditionalDocumentReference>
      <cbc:ID>Doc2</cbc:ID>
      <cbc:DocumentType>Drawing</cbc:DocumentType>
      <cac:Attachment>
         <cbc:EmbeddedDocumentBinaryObject mimeCode="application/pdf">UjBsR09EbGhjZ0dTQUxNQUFBUUNBRU1tQ1p0dU1GUXhEUzhi</cbc:EmbeddedDocumentBinaryObject>
      </cac:Attachment>
   </cac:AdditionalDocumentReference>
   <cac:AccountingSupplierParty>
      <cac:Party>
         <cbc:EndpointID schemeID="GLN" schemeAgencyID="9">1234567890123</cbc:EndpointID>
         <cac:PartyIdentification>
            <cbc:ID schemeID="ZZZ">Supp123</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>Salescompany ltd.</cbc:Name>
         </cac:PartyName>
         <cac:PostalAddress>
            <cbc:ID schemeID="GLN" schemeAgencyID="9">1231412341324</cbc:ID>
            <cbc:Postbox>5467</cbc:Postbox>
            <cbc:StreetName>Main street</cbc:StreetName>
            <cbc:AdditionalStreetName>Suite 123</cbc:AdditionalStreetName>
            <cbc:BuildingNumber>1</cbc:BuildingNumber>
            <cbc:Department>Revenue department</cbc:Department>
            <cbc:CityName>Big city</cbc:CityName>
            <cbc:PostalZone>54321</cbc:PostalZone>
            <cbc:CountrySubentityCode>RegionA</cbc:CountrySubentityCode>
            <cac:Country>
               <cbc:IdentificationCode listID="ISO3166-1" listAgencyID="6">DK</cbc:IdentificationCode>
            </cac:Country>
         </cac:PostalAddress>
         <cac:PartyTaxScheme>
            <cbc:CompanyID schemeID="DKVAT" schemeAgencyID="ZZZ">DK12345</cbc:CompanyID>
            <cac:TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </cac:TaxScheme>
         </cac:PartyTaxScheme>
         <cac:PartyLegalEntity>
            <cbc:RegistrationName>The Sellercompany Incorporated</cbc:RegistrationName>
            <cbc:CompanyID schemeID="CVR" schemeAgencyID="ZZZ">5402697509</cbc:CompanyID>
            <cac:RegistrationAddress>
               <cbc:CityName>Big city</cbc:CityName>
               <cbc:CountrySubentity>RegionA</cbc:CountrySubentity>
               <cac:Country>
                  <cbc:IdentificationCode>DK</cbc:IdentificationCode>
               </cac:Country>
            </cac:RegistrationAddress>
         </cac:PartyLegalEntity>
         <cac:Contact>
            <cbc:Telephone>4621230</cbc:Telephone>
            <cbc:Telefax>4621231</cbc:Telefax>
            <cbc:ElectronicMail>antonio@salescompany.dk</cbc:ElectronicMail>
         </cac:Contact>
         <cac:Person>
            <cbc:FirstName>Antonio</cbc:FirstName>
            <cbc:FamilyName>M</cbc:FamilyName>
            <cbc:MiddleName>Salemacher</cbc:MiddleName>
            <cbc:JobTitle>Sales manager</cbc:JobTitle>
         </cac:Person>
      </cac:Party>
   </cac:AccountingSupplierParty>
   <cac:AccountingCustomerParty>
      <cac:Party>
         <cbc:EndpointID schemeID="GLN" schemeAgencyID="9">1234567987654</cbc:EndpointID>
         <cac:PartyIdentification>
            <cbc:ID schemeID="ZZZ">345KS5324</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>Buyercompany ltd</cbc:Name>
         </cac:PartyName>
         <cac:PostalAddress>
            <cbc:ID schemeID="GLN" schemeAgencyID="9">1238764941386</cbc:ID>
            <cbc:Postbox>123</cbc:Postbox>
            <cbc:StreetName>Anystreet</cbc:StreetName>
            <cbc:AdditionalStreetName>Back door</cbc:AdditionalStreetName>
            <cbc:BuildingNumber>8</cbc:BuildingNumber>
            <cbc:Department>Accounting department</cbc:Department>
            <cbc:CityName>Anytown</cbc:CityName>
            <cbc:PostalZone>101</cbc:PostalZone>
            <cbc:CountrySubentity>RegionB</cbc:CountrySubentity>
            <cac:Country>
               <cbc:IdentificationCode listID="ISO3166-1" listAgencyID="6">BE</cbc:IdentificationCode>
            </cac:Country>
         </cac:PostalAddress>
         <cac:PartyTaxScheme>
            <cbc:CompanyID schemeID="BEVAT" schemeAgencyID="ZZZ">BE54321</cbc:CompanyID>
            <cac:TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </cac:TaxScheme>
         </cac:PartyTaxScheme>
         <cac:PartyLegalEntity>
            <cbc:RegistrationName>The buyercompany inc.</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="ZZZ" schemeID="ZZZ">5645342123</cbc:CompanyID>
            <cac:RegistrationAddress>
               <cbc:CityName>Mainplace</cbc:CityName>
               <cbc:CountrySubentity>RegionB</cbc:CountrySubentity>
               <cac:Country>
                  <cbc:IdentificationCode>BE</cbc:IdentificationCode>
               </cac:Country>
            </cac:RegistrationAddress>
         </cac:PartyLegalEntity>
         <cac:Contact>
            <cbc:Telephone>5121230</cbc:Telephone>
            <cbc:Telefax>5121231</cbc:Telefax>
            <cbc:ElectronicMail>john@buyercompany.eu</cbc:ElectronicMail>
         </cac:Contact>
         <cac:Person>
            <cbc:FirstName>John</cbc:FirstName>
            <cbc:FamilyName>X</cbc:FamilyName>
            <cbc:MiddleName>Doe</cbc:MiddleName>
            <cbc:JobTitle>Purchasing manager</cbc:JobTitle>
         </cac:Person>
      </cac:Party>
   </cac:AccountingCustomerParty>
   <cac:PayeeParty>
      <cac:PartyIdentification>
         <cbc:ID schemeID="GLN" schemeAgencyID="9">098740918237</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
         <cbc:Name>Ebeneser Scrooge Inc.</cbc:Name>
      </cac:PartyName>
      <cac:PartyLegalEntity>
         <cbc:CompanyID schemeID="UK:CH" schemeAgencyID="ZZZ">6411982340</cbc:CompanyID>
      </cac:PartyLegalEntity>
   </cac:PayeeParty>
   <cac:Delivery>
      <cbc:ActualDeliveryDate>2009-12-15</cbc:ActualDeliveryDate>
      <cac:DeliveryLocation>
         <cbc:ID schemeID="GLN" schemeAgencyID="9">6754238987648</cbc:ID>
         <cac:Address>
            <cbc:StreetName>Deliverystreet</cbc:StreetName>
            <cbc:AdditionalStreetName>Side door</cbc:AdditionalStreetName>
            <cbc:BuildingNumber>12</cbc:BuildingNumber>
            <cbc:CityName>DeliveryCity</cbc:CityName>
            <cbc:PostalZone>523427</cbc:PostalZone>
            <cbc:CountrySubentity>RegionC</cbc:CountrySubentity>
            <cac:Country>
               <cbc:IdentificationCode>BE</cbc:IdentificationCode>
            </cac:Country>
         </cac:Address>
      </cac:DeliveryLocation>
   </cac:Delivery>
   <cac:PaymentMeans>
      <cbc:PaymentMeansCode listID="UN/ECE 4461">31</cbc:PaymentMeansCode>
      <cbc:PaymentDueDate>2009-12-31</cbc:PaymentDueDate>
      <cbc:PaymentChannelCode>IBAN</cbc:PaymentChannelCode>
      <cbc:PaymentID>Payref1</cbc:PaymentID>
      <cac:PayeeFinancialAccount>
         <cbc:ID>DK1212341234123412</cbc:ID>
         <cac:FinancialInstitutionBranch>
            <cac:FinancialInstitution>
               <cbc:ID>DKDKABCD</cbc:ID>
            </cac:FinancialInstitution>
         </cac:FinancialInstitutionBranch>
      </cac:PayeeFinancialAccount>
   </cac:PaymentMeans>
   <cac:PaymentTerms>
      <cbc:Note>Penalty percentage 10% from due date</cbc:Note>
   </cac:PaymentTerms>
   <cac:AllowanceCharge>
      <cbc:ChargeIndicator>true</cbc:ChargeIndicator>
      <cbc:AllowanceChargeReason>Packing cost</cbc:AllowanceChargeReason>
      <cbc:Amount currencyID="EUR">100</cbc:Amount>
   </cac:AllowanceCharge>
   <cac:AllowanceCharge>
      <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
      <cbc:AllowanceChargeReason>Promotion discount</cbc:AllowanceChargeReason>
      <cbc:Amount currencyID="EUR">100</cbc:Amount>
   </cac:AllowanceCharge>
   <cac:TaxTotal>
      <cbc:TaxAmount currencyID="EUR">292.20</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="EUR">1460.5</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="EUR">292.1</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">S</cbc:ID>
            <cbc:Percent>20</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="EUR">1</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="EUR">0.1</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">AA</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="EUR">-25</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="EUR">0</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">E</cbc:ID>
            <cbc:Percent>0</cbc:Percent>
            <cbc:TaxExemptionReasonCode listID="CWA 15577" listAgencyID="ZZZ">AAM</cbc:TaxExemptionReasonCode>
            <cbc:TaxExemptionReason>Exempt New Means of Transport</cbc:TaxExemptionReason>
            <cac:TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
   </cac:TaxTotal>
   <cac:LegalMonetaryTotal>
      <cbc:LineExtensionAmount currencyID="EUR">1436.5</cbc:LineExtensionAmount>
      <cbc:TaxExclusiveAmount currencyID="EUR">1436.5</cbc:TaxExclusiveAmount>
      <cbc:TaxInclusiveAmount currencyID="EUR">1729</cbc:TaxInclusiveAmount>
      <cbc:AllowanceTotalAmount currencyID="EUR">100</cbc:AllowanceTotalAmount>
      <cbc:ChargeTotalAmount currencyID="EUR">100</cbc:ChargeTotalAmount>
      <cbc:PrepaidAmount currencyID="EUR">1000</cbc:PrepaidAmount>
      <cbc:PayableRoundingAmount currencyID="EUR">0.30</cbc:PayableRoundingAmount>
      <cbc:PayableAmount currencyID="EUR">729</cbc:PayableAmount>
   </cac:LegalMonetaryTotal>
   <cac:InvoiceLine>
      <cbc:ID>1</cbc:ID>
      <cbc:Note>Scratch on box</cbc:Note>
      <cbc:InvoicedQuantity unitCode="C62">1</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="EUR">1273</cbc:LineExtensionAmount>
      <cbc:AccountingCost>BookingCode001</cbc:AccountingCost>
      <cac:OrderLineReference>
         <cbc:LineID>1</cbc:LineID>
      </cac:OrderLineReference>
      <cac:AllowanceCharge>
         <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
         <cbc:AllowanceChargeReason>Damage</cbc:AllowanceChargeReason>
         <cbc:Amount currencyID="EUR">12</cbc:Amount>
      </cac:AllowanceCharge>
      <cac:AllowanceCharge>
         <cbc:ChargeIndicator>true</cbc:ChargeIndicator>
         <cbc:AllowanceChargeReason>Testing</cbc:AllowanceChargeReason>
         <cbc:Amount currencyID="EUR">10</cbc:Amount>
      </cac:AllowanceCharge>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="EUR">254.6</cbc:TaxAmount>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Description languageID="EN">Processor: Intel Core 2 Duo SU9400 LV (1.4GHz). RAM: 3MB. Screen 1440x900</cbc:Description>
         <cbc:Name>Labtop computer</cbc:Name>
         <cac:SellersItemIdentification>
            <cbc:ID>JB007</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeID="GTIN" schemeAgencyID="9">1234567890124</cbc:ID>
         </cac:StandardItemIdentification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="113" listID="UNSPSC">12344321</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="2" listID="CPV">65434568</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <ClassifiedTaxCategory xmlns="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">S</cbc:ID>
            <cbc:Percent>20</cbc:Percent>
            <TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </TaxScheme>
         </ClassifiedTaxCategory>
         <cac:AdditionalItemProperty>
            <cbc:Name>Color</cbc:Name>
            <cbc:Value>black</cbc:Value>
         </cac:AdditionalItemProperty>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="EUR">1273</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="C62">1</cbc:BaseQuantity>
         <cac:AllowanceCharge>
            <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
            <cbc:AllowanceChargeReason>Contract</cbc:AllowanceChargeReason>
            <cbc:MultiplierFactorNumeric>0.15</cbc:MultiplierFactorNumeric>
            <cbc:Amount currencyID="EUR">225</cbc:Amount>
            <cbc:BaseAmount currencyID="EUR">1500</cbc:BaseAmount>
         </cac:AllowanceCharge>
      </cac:Price>
   </cac:InvoiceLine>
   <cac:InvoiceLine>
      <cbc:ID>2</cbc:ID>
      <cbc:Note>Cover is slightly damaged.</cbc:Note>
      <cbc:InvoicedQuantity unitCode="C62">-1</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="EUR">-3.96</cbc:LineExtensionAmount>
      <cac:OrderLineReference>
         <cbc:LineID>5</cbc:LineID>
      </cac:OrderLineReference>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="EUR">-0.396</cbc:TaxAmount>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Name>Returned "Advanced computing" book</cbc:Name>
         <cac:SellersItemIdentification>
            <cbc:ID>JB008</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeID="GTIN" schemeAgencyID="9">1234567890125</cbc:ID>
         </cac:StandardItemIdentification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="113" listID="UNSPSC">32344324</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="2" listID="CPV">65434567</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <ClassifiedTaxCategory xmlns="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">AA</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </TaxScheme>
         </ClassifiedTaxCategory>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="EUR">3.96</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="C62">1</cbc:BaseQuantity>
      </cac:Price>
   </cac:InvoiceLine>
   <cac:InvoiceLine>
      <cbc:ID>3</cbc:ID>
      <cbc:InvoicedQuantity unitCode="C62">2</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="EUR">4.96</cbc:LineExtensionAmount>
      <cac:OrderLineReference>
         <cbc:LineID>3</cbc:LineID>
      </cac:OrderLineReference>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="EUR">0.496</cbc:TaxAmount>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Name>"Computing for dummies" book</cbc:Name>
         <cac:SellersItemIdentification>
            <cbc:ID>JB009</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeID="GTIN" schemeAgencyID="9">1234567890126</cbc:ID>
         </cac:StandardItemIdentification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="113" listID="UNSPSC">32344324</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="2" listID="CPV">65434566</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <ClassifiedTaxCategory xmlns="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">AA</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </TaxScheme>
         </ClassifiedTaxCategory>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="EUR">2.48</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="C62">1</cbc:BaseQuantity>
         <cac:AllowanceCharge>
            <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
            <cbc:AllowanceChargeReason>Contract</cbc:AllowanceChargeReason>
            <cbc:MultiplierFactorNumeric>0.1</cbc:MultiplierFactorNumeric>
            <cbc:Amount currencyID="EUR">0.275</cbc:Amount>
            <cbc:BaseAmount currencyID="EUR">2.75</cbc:BaseAmount>
         </cac:AllowanceCharge>
      </cac:Price>
   </cac:InvoiceLine>
   <cac:InvoiceLine>
      <cbc:ID>4</cbc:ID>
      <cbc:InvoicedQuantity unitCode="C62">-1</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="EUR">-25</cbc:LineExtensionAmount>
      <cac:OrderLineReference>
         <cbc:LineID>2</cbc:LineID>
      </cac:OrderLineReference>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="EUR">0</cbc:TaxAmount>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Name>Returned IBM 5150 desktop</cbc:Name>
         <cac:SellersItemIdentification>
            <cbc:ID>JB010</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeID="GTIN" schemeAgencyID="9">1234567890127</cbc:ID>
         </cac:StandardItemIdentification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="113" listID="UNSPSC">12344322</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="2" listID="CPV">65434565</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <ClassifiedTaxCategory xmlns="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">E</cbc:ID>
            <cbc:Percent>0</cbc:Percent>
            <TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </TaxScheme>
         </ClassifiedTaxCategory>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="EUR">25</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="C62">1</cbc:BaseQuantity>
      </cac:Price>
   </cac:InvoiceLine>
   <cac:InvoiceLine>
      <cbc:ID>5</cbc:ID>
      <cbc:InvoicedQuantity unitCode="C62">250</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="EUR">187.5</cbc:LineExtensionAmount>
      <cbc:AccountingCost>BookingCode002</cbc:AccountingCost>
      <cac:OrderLineReference>
         <cbc:LineID>4</cbc:LineID>
      </cac:OrderLineReference>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="EUR">37.5</cbc:TaxAmount>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Name>Network cable</cbc:Name>
         <cac:SellersItemIdentification>
            <cbc:ID>JB011</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeID="GTIN" schemeAgencyID="9">1234567890128</cbc:ID>
         </cac:StandardItemIdentification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="113" listID="UNSPSC">12344325</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <cac:CommodityClassification>
            <cbc:ItemClassificationCode listAgencyID="2" listID="CPV">65434564</cbc:ItemClassificationCode>
         </cac:CommodityClassification>
         <ClassifiedTaxCategory xmlns="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
            <cbc:ID schemeID="UN/ECE 5305" schemeAgencyID="6">S</cbc:ID>
            <cbc:Percent>20</cbc:Percent>
            <TaxScheme>
               <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">VAT</cbc:ID>
            </TaxScheme>
         </ClassifiedTaxCategory>
         <cac:AdditionalItemProperty>
            <cbc:Name>Type</cbc:Name>
            <cbc:Value>Cat5</cbc:Value>
         </cac:AdditionalItemProperty>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="EUR">0.75</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="C62">1</cbc:BaseQuantity>
      </cac:Price>
   </cac:InvoiceLine>
</Invoice>
```

> UBL 2.1 Order Response.xml

```xml
<OrderResponse xmlns="urn:oasis:names:specification:ubl:schema:xsd:OrderResponse-2"
  xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
  xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
  <cbc:CustomizationID>
urn:www.cenbii.eu:transaction:biicoretrdmXYZ:ver1.0
  </cbc:CustomizationID>
  <cbc:ProfileID schemeAgencyID="BII" schemeID="Profile">urn:www.cenbii.eu:profile:BIIXYZ:ver1.0</cbc:ProfileID>
  <cbc:ID>7</cbc:ID>
  <cbc:IssueDate>2010-01-21</cbc:IssueDate>
  <cbc:IssueTime>12:30:00</cbc:IssueTime>
  <cbc:Note>Information text for the whole order response</cbc:Note>
  <cbc:DocumentCurrencyCode>SEK</cbc:DocumentCurrencyCode>
  <cac:OrderReference>
    <cbc:ID>34</cbc:ID>
  </cac:OrderReference>
  <cac:SellerSupplierParty>
    <cac:Party>
      <cbc:EndpointID schemeAgencyID="9" schemeID="GLN">7302347231111</cbc:EndpointID>
      <cac:PartyIdentification>
        <cbc:ID>SellerPartyID123</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name>Moderna Produkter AB</cbc:Name>
      </cac:PartyName>
    </cac:Party>
  </cac:SellerSupplierParty>
  <cac:BuyerCustomerParty>
    <cac:Party>
      <cbc:EndpointID schemeAgencyID="9" schemeID="GLN">7300072311115</cbc:EndpointID>
      <cac:PartyIdentification>
        <cbc:ID schemeAgencyID="9" schemeID="GLN">7300070011115</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyIdentification>
        <cbc:ID>PartyID123</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name>Johnssons byggvaror</cbc:Name>
      </cac:PartyName>
    </cac:Party>
  </cac:BuyerCustomerParty>
  <cac:OrderLine>
    <cac:LineItem>
      <cbc:ID>1</cbc:ID>
      <cbc:LineStatusCode listAgencyID="UBL" listName="Line Status">NoStatus</cbc:LineStatusCode>
      <cac:Item/>
    </cac:LineItem>
  </cac:OrderLine>
  <cac:OrderLine>
    <cac:LineItem>
      <cbc:ID>2</cbc:ID>
      <cbc:LineStatusCode listAgencyID="UBL" listName="Line Status">Disputed</cbc:LineStatusCode>
      <cac:Item/>
    </cac:LineItem>
  </cac:OrderLine>
</OrderResponse>
```

#### 810 Invoice (to Adobe)

- Create the `Level 2 Certification - Invoice` Channel

![](/images/other/edi-babelway-level-2-certification/Invoice.png)

- Put `Level 2 Certification - Invoice` for `Name`

![](/images/other/edi-babelway-level-2-certification/Invoice2.png)

- Select `FTP Server` for `Gateway IN` Type.

![](/images/other/edi-babelway-level-2-certification/Invoice3.png)

- Put `Level2CertificationInvoice` for `Username` and `Password` for `Password`

![](/images/other/edi-babelway-level-2-certification/Invoice4.png)

![](/images/other/edi-babelway-level-2-certification/Invoice5.png)

- Select `UBL` for `Message IN` type.

![](/images/other/edi-babelway-level-2-certification/Invoice6.png)

- Select `UBL 2.1 Invoice Sample.xml` for `UBL sample`

![](/images/other/edi-babelway-level-2-certification/Invoice7.png)

![](/images/other/edi-babelway-level-2-certification/Invoice8.png)

- We can use the `EDI_810_ANSI_X12_122007_001.pdf` document downloaded from the https://channelpartners.adobe.com/home/support/edi.html#Tabs_contentbody_section_8fee_par_tabs_1e33_1e33_tab2 `Adobe` website to see the specifications required by `Adobe`.

- We can obtain the following example:

> ADOBE_ANSI_X12_810_4010_V1_Example.txt

```
ISA*00*          *00*          *16*102096559TEST  *14*PARTNERTEST    *071214*1406*U*00040*810000263*1*T*>
GS*IN*102096559TEST*PARTNER*20071214*1406*810000263*X*004010
ST*810*166061414
BIG*20070129*0013833070*20070129*V8748745***DI*00
NTE*GEN*If 0% VAT is charged and your VAT ID number is displayed above, this
NTE*GEN*is either an exempt or a reverse charge transaction.
NTE*GEN*This supply is exempt from VAT according to the section 64 of the Czec
NTE*GEN*h VAT Act.
CUR*SE*USD
REF*61*noval*Adobe VAT Number
REF*CO*121212
REF*VN*0070861270
N1*II*ADOBE SYSTEMS INCORPORATED*91*0000012137
N2*ADOBE SYSTEMS INCORPORATED
N3*345 PARK AVENUE
N4*SAN JOSE*CA*95110*US
N1*BY*SOFTWARE.*91*0000012137
N2*SOFTWARE
N3*111 MAIN DR
N4*PLANO*TX*75075*US
N1*BT*SOFTWARE.*91*0000012137
N2*SOFTWARE
N3*111 MAIN DR
N4*PLANO*TX*75075*US
N1*PR*SOFTWARE*91*0000012137
N2*SOFTWARE
N3*111 MAIN DR
N4*PLANO*TX*75075*US
N1*ST*SHIP TO PARTNER*91*0050480425
N2*SHIP TO
N3*122 MAIN AVE
N4*SANTA CLARA*CA*95050*US
PER*CN*JOHN DOE
N1*SE*ADOBE SYSTEMS INCORPORATED*91*ADUS
N2*ADOBE SYSTEMS INCORPORATED
N3*345 Park Avenue
N4*SAN JOSE*CA*95110*US
N1*EN**91*0020064630
N1*DU**91*0010013997
ITD*14*3*****35*****Up to 03/05/2007 without deduction
DTM*011*20070129
IT1*000010*1*EA*160*CP*VP*65008841AB02A00*BP*7167946*UP*883919019161
PID*F****ACRO,8.0,WIN,AOO,UE,1PK,N/A
TDS*16000
TXI*ST*0*0******noval*Customer VAT Number
CTT*1
SE*45*166061414
GE*1*810000263
IEA*1*810000263
```

- Select `X12` for `Message OUT` type.

![](/images/other/edi-babelway-level-2-certification/Invoice9.png)

- Select `ADOBE_ANSI_X12_810_4010_V1_Example.txt` for `X12 sample`

![](/images/other/edi-babelway-level-2-certification/Invoice10.png)

![](/images/other/edi-babelway-level-2-certification/Invoice11.png)

- Select `SFTP CLIENT` for `Gateway OUT`

![](/images/other/edi-babelway-level-2-certification/Invoice12.png)

- Put `sftp.adobe.com` for `Server`, `Supplier58192` for `Username`, `k92gxk8i4l` for `Password` and `/Invoice` for `Directory`

![](/images/other/edi-babelway-level-2-certification/Invoice13.png)

![](/images/other/edi-babelway-level-2-certification/Invoice14.png)

**Transformation**

- `ISA-Interchange Control Header` Mapping

![](/images/other/edi-babelway-level-2-certification/Invoice15.png)

![](/images/other/edi-babelway-level-2-certification/Invoice16.png)

![](/images/other/edi-babelway-level-2-certification/Invoice17.png)

![](/images/other/edi-babelway-level-2-certification/Invoice18.png)

![](/images/other/edi-babelway-level-2-certification/Invoice19.png)

![](/images/other/edi-babelway-level-2-certification/Invoice20.png)

![](/images/other/edi-babelway-level-2-certification/Invoice21.png)

![](/images/other/edi-babelway-level-2-certification/Invoice21b.png)

![](/images/other/edi-babelway-level-2-certification/Invoice22.png)

![](/images/other/edi-babelway-level-2-certification/Invoice23.png)

![](/images/other/edi-babelway-level-2-certification/Invoice24.png)

![](/images/other/edi-babelway-level-2-certification/Invoice25.png)

![](/images/other/edi-babelway-level-2-certification/Invoice26.png)

![](/images/other/edi-babelway-level-2-certification/Invoice27.png)

![](/images/other/edi-babelway-level-2-certification/Invoice28.png)

- `GS-Funtional Control Header` Mapping

![](/images/other/edi-babelway-level-2-certification/Invoice29.png)

![](/images/other/edi-babelway-level-2-certification/Invoice30.png)

![](/images/other/edi-babelway-level-2-certification/Invoice31.png)

![](/images/other/edi-babelway-level-2-certification/Invoice32.png)

![](/images/other/edi-babelway-level-2-certification/Invoice33.png)

![](/images/other/edi-babelway-level-2-certification/Invoice34.png)

![](/images/other/edi-babelway-level-2-certification/Invoice35.png)

![](/images/other/edi-babelway-level-2-certification/Invoice36.png)

- It has been detected that `SE, GE and IEA` segments are missing from the `Message OUT`. They should be added:

![](/images/other/edi-babelway-level-2-certification/Invoice37.png)

![](/images/other/edi-babelway-level-2-certification/Invoice38.png)

![](/images/other/edi-babelway-level-2-certification/Invoice39.png)

- It has been removed because it is probably generated automatically.

- It has been detected that the fields with green seems to be populated automatically, so there is no need to create the transformation. They are going to be removed.

![](/images/other/edi-babelway-level-2-certification/Invoice40.png)

- `ST - Transaction Set Control Number`

![](/images/other/edi-babelway-level-2-certification/Invoice41.png)

- `BIG - Beginning Segment for Invoice`

![](/images/other/edi-babelway-level-2-certification/Invoice42.png)

![](/images/other/edi-babelway-level-2-certification/Invoice43.png)

![](/images/other/edi-babelway-level-2-certification/Invoice44.png)

- `NTE - Note/Special Instruction`

![](/images/other/edi-babelway-level-2-certification/Invoice45.png)

![](/images/other/edi-babelway-level-2-certification/Invoice46.png)

- `CUR - Currency`

![](/images/other/edi-babelway-level-2-certification/Invoice47.png)

- `REF_61 - Taxing Authority Identification Number`

![](/images/other/edi-babelway-level-2-certification/Invoice48.png)

![](/images/other/edi-babelway-level-2-certification/Invoice49.png)

- `REF_CO - Customer Order Number`

![](/images/other/edi-babelway-level-2-certification/Invoice50.png)

- `REF_VN - Vendor Order Number` <-- None

- `N1 Group - N1_II - Issuer of Invoice`

![](/images/other/edi-babelway-level-2-certification/Invoice51.png)

![](/images/other/edi-babelway-level-2-certification/Invoice52.png)

- `N1 Group - N1_II - N2 - Additional Name Information`

![](/images/other/edi-babelway-level-2-certification/Invoice53.png)

- `N1 Group - N1_II - N3 - Address Information`

![](/images/other/edi-babelway-level-2-certification/Invoice54.png)

![](/images/other/edi-babelway-level-2-certification/Invoice55.png)

- `N1 Group - N1_II - N4 - Geographic Location`

![](/images/other/edi-babelway-level-2-certification/Invoice56.png)

![](/images/other/edi-babelway-level-2-certification/Invoice57.png)

![](/images/other/edi-babelway-level-2-certification/Invoice58.png)

![](/images/other/edi-babelway-level-2-certification/Invoice59.png)

- `N1 Group - N1_BY - Buying Party (Purchaser)` <-- None (only if it is different to `Bill To)`>

- `N1 Group - N1_BT Bill-to-Party`

![](/images/other/edi-babelway-level-2-certification/Invoice60.png)

![](/images/other/edi-babelway-level-2-certification/Invoice61.png)

- `N1 Group - N1_BT - N2 - Additional Name Information`

![](/images/other/edi-babelway-level-2-certification/Invoice62.png)

- `N1 Group - N1_BT - N3 - Address Information`

![](/images/other/edi-babelway-level-2-certification/Invoice63.png)

![](/images/other/edi-babelway-level-2-certification/Invoice64.png)

- `N1 Group - N1_BT - N4 - Geographic Location`

![](/images/other/edi-babelway-level-2-certification/Invoice65.png)

![](/images/other/edi-babelway-level-2-certification/Invoice66.png)

![](/images/other/edi-babelway-level-2-certification/Invoice67.png)

![](/images/other/edi-babelway-level-2-certification/Invoice68.png)

- `N1 Group - N1_PR - Payer` <-- None (same as `Bill-to-Party`)

- `N1 Group - N1_ST - Ship To`

![](/images/other/edi-babelway-level-2-certification/Invoice69.png)

![](/images/other/edi-babelway-level-2-certification/Invoice70.png)

![](/images/other/edi-babelway-level-2-certification/Invoice71.png)

![](/images/other/edi-babelway-level-2-certification/Invoice72.png)

![](/images/other/edi-babelway-level-2-certification/Invoice73.png)

![](/images/other/edi-babelway-level-2-certification/Invoice74.png)

![](/images/other/edi-babelway-level-2-certification/Invoice75.png)

- `N1 Group - N1_SE - Selling Party` <-- None (same as `Issuer of Invoice`)

- `N1 Group - N1_EN End User`

![](/images/other/edi-babelway-level-2-certification/Invoice76.png)

- `N1 Group - N1_DU - Resale Dealer` <-- None

- `TD - Terms of Sale/Deferred Terms of Sale`

![](/images/other/edi-babelway-level-2-certification/Invoice77.png)

- `DTM_011 - Shipped`

![](/images/other/edi-babelway-level-2-certification/Invoice78.png)

- `IT1 - Baseline Item Data (Invoice)`

![](/images/other/edi-babelway-level-2-certification/Invoice79.png)

![](/images/other/edi-babelway-level-2-certification/Invoice80.png)

![](/images/other/edi-babelway-level-2-certification/Invoice81.png)

![](/images/other/edi-babelway-level-2-certification/Invoice82.png)

![](/images/other/edi-babelway-level-2-certification/Invoice83.png)

![](/images/other/edi-babelway-level-2-certification/Invoice84.png)

- `PID01 - Item Description Type=` **F** = Free Form

![](/images/other/edi-babelway-level-2-certification/Invoice85.png)

![](/images/other/edi-babelway-level-2-certification/Invoice86.png)

- `TDS - Total Monetary Value Summary`

![](/images/other/edi-babelway-level-2-certification/Invoice87.png)

- `TXI - Tax Information`

![](/images/other/edi-babelway-level-2-certification/Invoice88.png)

![](/images/other/edi-babelway-level-2-certification/Invoice88b.png)

![](/images/other/edi-babelway-level-2-certification/Invoice89.png)

![](/images/other/edi-babelway-level-2-certification/Invoice90.png)

![](/images/other/edi-babelway-level-2-certification/Invoice91.png)

- `CTT - Transaction Totals`

![](/images/other/edi-babelway-level-2-certification/Invoice92.png)

![](/images/other/edi-babelway-level-2-certification/Invoice93.png)

![](/images/other/edi-babelway-level-2-certification/Invoice94.png)

- Create Test case to check the transformation

![](/images/other/edi-babelway-level-2-certification/Invoice95.png)

- Select `UBL 2.1 Invoice Sample.xml` for `Message in`

![](/images/other/edi-babelway-level-2-certification/Invoice96.png)

![](/images/other/edi-babelway-level-2-certification/Invoice97.png)

![](/images/other/edi-babelway-level-2-certification/Invoice98.png)

![](/images/other/edi-babelway-level-2-certification/Invoice99.png)

- Change the `CTT - Transaction Totals - CTT01 - Number of Line Items` field.

1. Open the `UBL 2.1 Invoice Sample.xml` document with NotePad++ and search for the first field of `Invoice Line`

![](/images/other/edi-babelway-level-2-certification/Invoice100.png)

2. Obtain the Current XML Path

![](/images/other/edi-babelway-level-2-certification/Invoice101.png)

![](/images/other/edi-babelway-level-2-certification/Invoice102.png)

`Value=` **/Invoice/cac:InvoiceLine/cbc:ID**

3. Use the `count` function.

![](/images/other/edi-babelway-level-2-certification/Invoice103.png)

4. Remove the mapping for the metadata field already created

![](/images/other/edi-babelway-level-2-certification/Invoice104.png)

5. Try again

![](/images/other/edi-babelway-level-2-certification/Invoice105.png)

![](/images/other/edi-babelway-level-2-certification/Invoice106.png)

- Change `formatDatTime` for `parseDateTime`

![](/images/other/edi-babelway-level-2-certification/Invoice107.png)

![](/images/other/edi-babelway-level-2-certification/Invoice108.png)

![](/images/other/edi-babelway-level-2-certification/Invoice109.png)

![](/images/other/edi-babelway-level-2-certification/Invoice110.png)

- Remove

![](/images/other/edi-babelway-level-2-certification/Invoice111.png)

![](/images/other/edi-babelway-level-2-certification/Invoice112.png)

![](/images/other/edi-babelway-level-2-certification/Invoice112b.png)

- We need to modify the `Message OUT` to exclude the fields not needed`

![](/images/other/edi-babelway-level-2-certification/Invoice113.png)

![](/images/other/edi-babelway-level-2-certification/Invoice114.png)

![](/images/other/edi-babelway-level-2-certification/Invoice115.png)

![](/images/other/edi-babelway-level-2-certification/Invoice116.png)

![](/images/other/edi-babelway-level-2-certification/Invoice117.png)

![](/images/other/edi-babelway-level-2-certification/Invoice118.png)

> ADOBE_ANSI_X12_810_4010_V1_From_Invoice_UBL-1.txt

```
ISA*00*          *00*          *16*1234567890123  *14*PARTNERTEST    *190601*1142*U*00040*TOSL108  *1*T*>
GS*IN*1234567890123  *PARTNER*20091215*00-00*TOSL108  *X*004010
ST*810*201906011
BIG*20091215*TOSL108  **123***DI*00
NTE*GEN*Ordered in our booth at the convention.
CUR*SE*EUR
REF*61*BE54321*VAT
REF*CO*123
REF*VN
N1*II*Salescompany ltd.*91*Supp123
N2*The Sellercompany Incorporated
N3*5467 Main street Suite 123*1 Revenue department
N4*Big city**54321*DK
N1*BT*Buyercompany ltd*91*345KS5324
N2*The buyercompany inc.
N3*123 Anystreet Back door*8 Accounting department
N4*Anytown**101*BE
N1*ST*GLN*91*6754238987648
N2*SHIP TO
N3*12 Deliverystreet Side door*
N4*DeliveryCity**523427*BE
PER*CN
N1*EN**91*antonio@salescompany.dk
ITD*14*3**********Penalty percentage 10% from due date
DTM*011*20091215
IT1*1*1*EA*1273*CP*VP*JB007*BP**UP*1234567890124
PID*F****Labtop computer
IT1*2*-1*EA*3.96*CP*VP*JB008*BP**UP*1234567890125
PID*F****Returned "Advanced computing" book
IT1*3*2*EA*2.48*CP*VP*JB009*BP**UP*1234567890126
PID*F****"Computing for dummies" book
IT1*4*-1*EA*25*CP*VP*JB010*BP**UP*1234567890127
PID*F****Returned IBM 5150 desktop
IT1*5*250*EA*0.75*CP*VP*JB011*BP**UP*1234567890128
PID*F****Network cable
TDS*1436.5
TXI*ST*292.20*20******DK12345*VAT
CTT*1
SE*37*201906011
GE*1*TOSL108
IEA*1*TOSL108
```

> Level 2 Certification Invoice - Mapping.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mappings>
  <user-functions>
  </user-functions>
  <user-defined-fields>
    <user-defined-field uid="udfs_0" select="bbw:padRight($arg1, 15, &apos; &apos;)">
      <arg source="md:da12743d58ac0b0dc15ba4b94592360b"/>
    </user-defined-field>
    <user-defined-field uid="udfs_1" select="bbw:padRight(&apos;PARTNERTEST&apos;, 15, &apos; &apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_2" select="bbw:formatDateTime(bbw:currentDateTime(), &apos;yyMMdd&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_3" select="bbw:formatDateTime(bbw:currentDateTime(), &apos;hhmm&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_4" select="&apos;U&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_5" select="bbw:padRight($arg1, 9, &apos; &apos;)">
      <arg source="md:389a90000fe53687cae9f13061f43b21"/>
    </user-defined-field>
    <user-defined-field uid="udfs_6" select="&apos;00-00&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_7" select="substring(bbw:formatDateTime(bbw:currentDateTime(), &apos;yyyyMMddhhMMss&apos;), 1, 9)">
    </user-defined-field>
    <user-defined-field uid="udfs_14" select="concat($arg1, &apos; &apos;, $arg2, &apos; &apos;, $arg3)">
      <arg source="md:9e412d3844cc2ab037d89160b451cf16"/>
      <arg source="md:58b8dbb6fed1ac80902ec26a792097fa"/>
      <arg source="md:cea3f4426145f2c4142f132ef2dff62f"/>
    </user-defined-field>
    <user-defined-field uid="udfs_15" select="concat($arg1, &apos; &apos;, $arg2)">
      <arg source="md:40bda8896ecb61440499ab32fe15d0ff"/>
      <arg source="md:dda14061c6ba7b040f7f5453c7371e41"/>
    </user-defined-field>
    <user-defined-field uid="udfs_22" select="concat($arg1, &apos; &apos;, $arg2, &apos; &apos;, $arg3)">
      <arg source="md:87ab82c136752931a9a8dfd4d6388adc"/>
      <arg source="md:475706128ee22637647362d5ebad93aa"/>
      <arg source="md:73e257698ff9503e506a1e9367b2f519"/>
    </user-defined-field>
    <user-defined-field uid="udfs_23" select="concat($arg1, &apos; &apos;, $arg2)">
      <arg source="md:13fd05690798d81eb2b459ea00ebf858"/>
      <arg source="md:449fe425472a5dbfda061a3aabcb3c86"/>
    </user-defined-field>
    <user-defined-field uid="udfs_29" select="concat($arg1, &apos; &apos;, $arg2, &apos; &apos;, $arg3)">
      <arg source="md:cc0aef858b09d3d805cd88fb1b2dc9b1"/>
      <arg source="md:a23058a2f1585fb73a82344cb65faf30"/>
      <arg source="md:45c5ad733c6abc9cb4a5ac312c49640c"/>
    </user-defined-field>
    <user-defined-field uid="udfs_46" select="count(&apos;/Invoice/cac:InvoiceLine/cbc:&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_47" select="bbw:changeDateTimeFormat($arg1, &apos;yyyy-MM-dd&apos;, &apos;yyyyMMdd&apos;)">
      <arg source="md:802222021a5843fc952f3f8a25e6860a"/>
    </user-defined-field>
    <user-defined-field uid="udfs_48" select="bbw:changeDateTimeFormat($arg1, &apos;yyyy-MM-dd&apos;, &apos;yyyyMMdd&apos;)">
      <arg source="md:fdca9beb670aacbb258dd41431f3fee4"/>
    </user-defined-field>
    <user-defined-field uid="udfs_50" select="&apos;SHIP TO&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_51" select="&apos;&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_53" select="&apos;F&apos;">
    </user-defined-field>
  </user-defined-fields>
  <mapping id="8" target="md:X12.ISA.ISA06" source="udf:udfs_0" operation="value"/>
  <mapping id="13" target="md:X12.ISA.ISA08" source="udf:udfs_1" operation="value"/>
  <mapping id="14" target="md:X12.ISA.ISA09" source="udf:udfs_2" operation="value"/>
  <mapping id="17" target="md:X12.ISA.ISA10" source="udf:udfs_3" operation="value"/>
  <mapping id="20" target="md:X12.ISA.ISA11" source="udf:udfs_4" operation="value"/>
  <mapping id="23" target="md:X12.ISA.ISA13" source="udf:udfs_5" operation="value"/>
  <mapping id="28" target="md:X12.MESSAGES.GS.GS02" source="udf:udfs_0" operation="value"/>
  <mapping id="33" target="md:X12.MESSAGES.GS.GS05" source="udf:udfs_6" operation="value"/>
  <mapping id="36" target="md:X12.MESSAGES.GS.GS06" source="udf:udfs_5" operation="value"/>
  <mapping id="44" target="md:X12.MESSAGES.M810.ST.ST02" source="udf:udfs_7" operation="value"/>
  <mapping id="47" target="md:X12.MESSAGES.M810.BIG.BIG02" source="udf:udfs_5" operation="value"/>
  <mapping id="49" target="md:X12.MESSAGES.M810.BIG.BIG04" source="md:154cd2ef64c7928f8d0fa53ca0791578" operation="value"/>
  <mapping id="65" target="md:X12.MESSAGES.M810.REF_CO.REF02" source="md:154cd2ef64c7928f8d0fa53ca0791578" operation="value"/>
  <mapping id="66" target="md:X12.MESSAGES.M810.REF_61.REF02" source="md:83ca6cfd59832c956db505115008e7df" operation="value"/>
  <mapping id="67" target="md:X12.MESSAGES.M810.REF_61.REF03" source="md:6ff617e0e7433ee35c9a2d036056ce54" operation="value"/>
  <mapping id="75" target="md:X12.MESSAGES.M810.SG10070_N1_II.N1_II.N102" source="md:0a8a1459cb5f0d19e32207b714be51da" operation="value"/>
  <mapping id="76" target="md:X12.MESSAGES.M810.SG10070_N1_II.N1_II.N104" source="md:8a807b4db5c3dfea8a4b845bc0b94eb9" operation="value"/>
  <mapping id="78" target="md:X12.MESSAGES.M810.SG10070_N1_II.N2.N201" source="md:b387a5b824c41d6baead87bbe8d2bdf4" operation="value"/>
  <mapping id="79" target="md:X12.MESSAGES.M810.SG10070_N1_II.N3.N301" source="udf:udfs_14" operation="value"/>
  <mapping id="80" target="md:X12.MESSAGES.M810.SG10070_N1_II.N3.N302" source="udf:udfs_15" operation="value"/>
  <mapping id="81" target="md:X12.MESSAGES.M810.SG10070_N1_II.N4.N401" source="md:c3869fba8d46893eaa973eff22b572cd" operation="value"/>
  <mapping id="83" target="md:X12.MESSAGES.M810.SG10070_N1_II.N4.N403" source="md:35c6daa242e0fad0462d8f089b57fffb" operation="value"/>
  <mapping id="84" target="md:X12.MESSAGES.M810.SG10070_N1_II.N4.N404" source="md:cbf0404c5618d7dbc329946e4154cbc2" operation="value"/>
  <mapping id="91" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N1_BT.N102" source="md:f8185b0e76b11d6f6ddda946ab8eae01" operation="value"/>
  <mapping id="93" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N1_BT.N104" source="md:69941b536202843474900fe921f2a3cc" operation="value"/>
  <mapping id="94" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N2.N201" source="md:1f4b2b6362378147a597ccebc9bd86d3" operation="value"/>
  <mapping id="95" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N3.N301" source="udf:udfs_22" operation="value"/>
  <mapping id="96" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N3.N302" source="udf:udfs_23" operation="value"/>
  <mapping id="97" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N4.N401" source="md:6cc1ee59126593bc0527e5ff121da05e" operation="value"/>
  <mapping id="98" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N4.N403" source="md:5193a8b0ba55546370adb4d97d0d4f6f" operation="value"/>
  <mapping id="100" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N4.N404" source="md:39ca06f5bc08adf9ba4dfe677de5930f" operation="value"/>
  <mapping id="105" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N1_ST.N102" source="md:a4498f5c7eb6875f5d75928f955d5c00" operation="value"/>
  <mapping id="106" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N1_ST.N104" source="md:9436d8916549214792a68e74e5a0c890" operation="value"/>
  <mapping id="107" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N3.N301" source="udf:udfs_29" operation="value"/>
  <mapping id="109" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N4.N401" source="md:92ff0c0c2dabece6e68177bff3a3b567" operation="value"/>
  <mapping id="110" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N4.N403" source="md:d3fd8fe685d3652587bfde4d63329039" operation="value"/>
  <mapping id="112" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N4.N404" source="md:4a513efbac16edf10c16fd479db7bb55" operation="value"/>
  <mapping id="114" target="md:X12.MESSAGES.M810.SG10070_N1_EN.N1_EN.N104" source="md:9cc52266e2dc0b7e933f4defa7395a88" operation="value"/>
  <mapping id="116" target="md:X12.MESSAGES.M810.ITD.ITD12" source="md:9b3221332e7b1d65cc60640a225cbf1a" operation="value"/>
  <mapping id="118" target="md:X12.MESSAGES.M810.SG20010_Loop" source="md:d190035e554" operation="loop"/>
  <mapping id="123" target="md:X12.MESSAGES.M810.SG20010.IT1.IT101" source="md:8de2f7b337b1f853ecff32090d7ecac9" operation="value"/>
  <mapping id="124" target="md:X12.MESSAGES.M810.SG20010.IT1.IT102" source="md:d8af38e324b581023a5529fa1b15e433" operation="value"/>
  <mapping id="129" target="md:X12.MESSAGES.M810.SG20010.IT1.IT104" source="md:5cf0cb5f33328a2108e78d74ca6f5381" operation="value"/>
  <mapping id="136" target="md:X12.MESSAGES.M810.SG20010.IT1.IT107" source="md:d4a1a95bb54cac2bc50121b35cde0df6" operation="value"/>
  <mapping id="138" target="md:X12.MESSAGES.M810.SG20010.IT1.IT111" source="md:c60de599d3acd766e6b18efeb445219e" operation="value"/>
  <mapping id="149" target="md:X12.MESSAGES.M810.CUR.CUR02" source="md:5e57ea04b85fda3f7eb18c050c0c35f0" operation="value"/>
  <mapping id="150" target="md:X12.MESSAGES.M810.TDS.TDS01" source="md:e29e6fccbb2272fd9708c5fca8e81282" operation="value"/>
  <mapping id="153" target="md:X12.MESSAGES.M810.TXI.TXI02" source="md:6d2bb554e0176f4fd20fd47b915c6701" operation="value"/>
  <mapping id="154" target="md:X12.MESSAGES.M810.TXI.TXI03" source="md:f56e35ce540984c7408f89bc731bdaae" operation="value"/>
  <mapping id="155" target="md:X12.MESSAGES.M810.TXI.TXI09" source="md:4542116b07a735947330971fcb30f132" operation="value"/>
  <mapping id="156" target="md:X12.MESSAGES.M810.TXI" source="md:d190035e462" operation="loop"/>
  <mapping id="159" target="md:X12.MESSAGES.M810.TXI.TXI10" source="md:66354d2c2163005846c6b77ebc3c0e60" operation="value"/>
  <mapping id="168" target="md:X12.MESSAGES.M810.CTT.CTT01" source="udf:udfs_46" operation="value"/>
  <mapping id="31" target="md:X12.MESSAGES.GS.GS04" source="udf:udfs_47" operation="value"/>
  <mapping id="46" target="md:X12.MESSAGES.M810.BIG.BIG01" source="udf:udfs_47" operation="value"/>
  <mapping id="117" target="md:X12.MESSAGES.M810.DTM_011.DTM02" source="udf:udfs_48" operation="value"/>
  <mapping id="178" target="md:X12.MESSAGES.M810.NTE.NTE02" source="md:2665671c180765649f5c9e602b220645" operation="value"/>
  <mapping id="179" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N2.N201" source="udf:udfs_50" operation="value"/>
  <mapping id="181" target="md:X12.MESSAGES.M810.SG10070_N1_BT.N4.N402" source="udf:udfs_51" operation="value"/>
  <mapping id="182" target="md:X12.MESSAGES.M810.SG10070_N1_ST.N4.N402" source="udf:udfs_51" operation="value"/>
  <mapping id="183" target="md:X12.MESSAGES.M810.SG10070_N1_II.N4.N402" source="udf:udfs_51" operation="value"/>
  <mapping id="201" target="md:X12.MESSAGES.M810.SG20010.SG20060.PID.PID05" source="md:07aaee74e496fddae875c568558cd17e" operation="value"/>
  <mapping id="203" target="md:X12.MESSAGES.M810.SG20010.SG20060.PID.PID01" source="udf:udfs_53" operation="value"/>
</mappings>
```

#### 850 Order (from Adobe)

- We are supposed to receive orders from Adobe in the Transactional Licensing Program (TLP Format), as explained on [Quick snapshot of CLP and TLP](https://www.adobe.com/howtobuy/buying-programs/clp-tlp.html), so the document that we have to use is `EDI_850_TLP_ANSI_000.pdf`

- Create the `Level 2 Certification - Order` Channel

![](/images/other/edi-babelway-level-2-certification/Order.png)

- Put `Level 2 Certification - Order` for `Name`

![](/images/other/edi-babelway-level-2-certification/Order2.png)

- Select `SFTP Client` for `Gateway IN` Type.

![](/images/other/edi-babelway-level-2-certification/Order3.png)

- Put `sftp.adobe.com` for `Server`, `Supplier58192` for `Username`, `k92gxk8i4l` for `Password` and `/Order` for `Directory`

![](/images/other/edi-babelway-level-2-certification/Order4.png)

![](/images/other/edi-babelway-level-2-certification/Order5.png)

- Select `X12` for `Message IN` type.

![](/images/other/edi-babelway-level-2-certification/Order6.png)

> EDI_850_TLP_ANSI_000_Example.txt

```
ISA*00*          *00*          *01*000000000      *16*102096559TEST  *100614*1600*U*00401*000211462*0*P*>
GS*PO*007911209*102096559TEST*20100614*1600*11464*X*004010
ST*850*114640004
BEG*00*NE*TLP-X12**20100614
CUR*SE*USD
REF*CT*123456
REF*DC*123456
REF*EU*123456
DTM*010*20100614
N1*BY*SOLD TO*91*ID Number
N1*PO*PAYER*91*ID Number
N1*BT*BILL TO*91*ID Number
N1*DU*RESELLER
N2*Reseller NameII
N3*123 MAIN STREET
N4*CEDAR RAPIDS*IA*524032140
REF*DP*DP*DEPARTMENT 100
REF*7I*ResellerAuthID
PER*IC*RESELLER TO*TE*8015551234*FX*8015554321*EM*john@doe.com
N1*EN*END USER
N2*EndUser NameII
N3*123 MAIN STREET
N4*CEDAR RAPIDS*IA*524032140
REF*DP*DP*DEPARTMENT 200
N1*IA*DEPLOY TO
N2*DeployTo NameII
N3*123 MAIN STREET
N4*CEDAR RAPIDS*IA*524032140
REF*DP*DP*DEPARTMENT 300
PER*IC*DEPLOY TO*TE*8015551234*FX*8015554321*EM*john@doe.com
N1*ST*SHIP TO
N2*ShipTo NameII
N3*123 MAIN STREET
N4*CEDAR RAPIDS*IA*524032140
REF*DP*DP*DEPARTMENT 400
PER*IC*SHIP TO*TE*8015551234*FX*8015554321*EM*john@doe.com
PO1*1*1*EA*665*CA*BP*12345678*MG*64113730AD01A00
DTM*010*20100614
DTM*196*20100614
CTT*1
AMT*TT*12
SE*40*114640004
GE*1*11464
IEA*1*000211462
```

- Select `EDI_850_TLP_ANSI_000_Example.txt` for `X12 sample`

![](/images/other/edi-babelway-level-2-certification/Order7.png)

![](/images/other/edi-babelway-level-2-certification/Order8.png)

- Select `UBL` for `Message OUT` type.

![](/images/other/edi-babelway-level-2-certification/Order9.png)

- Select `UBL 2.1 Order Sample.xml` for `UBL sample`

![](/images/other/edi-babelway-level-2-certification/Order10.png)

![](/images/other/edi-babelway-level-2-certification/Order11.png)

- Select `FTP Server` for `Gateway OUT` Type.

![](/images/other/edi-babelway-level-2-certification/Order12.png)

- Put `Level2CertificationOrder` for `Username` and `Password` for `Password`

![](/images/other/edi-babelway-level-2-certification/Order13.png)

![](/images/other/edi-babelway-level-2-certification/Order14.png)

**Mapping Transformation**

![](/images/other/edi-babelway-level-2-certification/Order15.png)

![](/images/other/edi-babelway-level-2-certification/Order16.png)

![](/images/other/edi-babelway-level-2-certification/Order17.png)

![](/images/other/edi-babelway-level-2-certification/Order18.png)

![](/images/other/edi-babelway-level-2-certification/Order19.png)

![](/images/other/edi-babelway-level-2-certification/Order20.png)

![](/images/other/edi-babelway-level-2-certification/Order21.png)

![](/images/other/edi-babelway-level-2-certification/Order22.png)

![](/images/other/edi-babelway-level-2-certification/Order23.png)

![](/images/other/edi-babelway-level-2-certification/Order24.png)

![](/images/other/edi-babelway-level-2-certification/Order25.png)

![](/images/other/edi-babelway-level-2-certification/Order26.png)

![](/images/other/edi-babelway-level-2-certification/Order27.png)

![](/images/other/edi-babelway-level-2-certification/Order28.png)

![](/images/other/edi-babelway-level-2-certification/Order29.png)

![](/images/other/edi-babelway-level-2-certification/Order30.png)

![](/images/other/edi-babelway-level-2-certification/Order31.png)

![](/images/other/edi-babelway-level-2-certification/Order32.png)

![](/images/other/edi-babelway-level-2-certification/Order33.png)

![](/images/other/edi-babelway-level-2-certification/Order34.png)

![](/images/other/edi-babelway-level-2-certification/Order35.png)

![](/images/other/edi-babelway-level-2-certification/Order36.png)

![](/images/other/edi-babelway-level-2-certification/Order37.png)

![](/images/other/edi-babelway-level-2-certification/Order38.png)

![](/images/other/edi-babelway-level-2-certification/Order39.png)

![](/images/other/edi-babelway-level-2-certification/Order40.png)

= Items

![](/images/other/edi-babelway-level-2-certification/Order41.png)

![](/images/other/edi-babelway-level-2-certification/Order42.png)

![](/images/other/edi-babelway-level-2-certification/Order43.png)

![](/images/other/edi-babelway-level-2-certification/Order44.png)

![](/images/other/edi-babelway-level-2-certification/Order45.png)

![](/images/other/edi-babelway-level-2-certification/Order46.png)

- Create Metadata for the Currency

![](/images/other/edi-babelway-level-2-certification/Order47.png)

![](/images/other/edi-babelway-level-2-certification/Order47b.png)

![](/images/other/edi-babelway-level-2-certification/Order47c.png)

![](/images/other/edi-babelway-level-2-certification/Order48.png)

![](/images/other/edi-babelway-level-2-certification/Order49.png)

![](/images/other/edi-babelway-level-2-certification/Order50.png)

- Create Test case to check the transformation

![](/images/other/edi-babelway-level-2-certification/Order51.png)

![](/images/other/edi-babelway-level-2-certification/Order52.png)

- Chose `EDI_850_TLP_ANSI_000_Example.txt` for `Message in`

![](/images/other/edi-babelway-level-2-certification/Order53.png)

![](/images/other/edi-babelway-level-2-certification/Order54.png)

![](/images/other/edi-babelway-level-2-certification/Order55.png)

![](/images/other/edi-babelway-level-2-certification/Order56.png)

![](/images/other/edi-babelway-level-2-certification/Order57.png)

![](/images/other/edi-babelway-level-2-certification/Order57b.png)

- We need to exclude `AllowanceCharge`, `TaxTotal` and `AnticipatedMonetaryTotal`

![](/images/other/edi-babelway-level-2-certification/Order58.png)

![](/images/other/edi-babelway-level-2-certification/Order59.png)

![](/images/other/edi-babelway-level-2-certification/Order59b.png)

![](/images/other/edi-babelway-level-2-certification/Order60.png)

![](/images/other/edi-babelway-level-2-certification/Order61.png)

> UBL 2.1 Order_from_EDI_850_TLP_ANSI.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Order xmlns="urn:oasis:names:specification:ubl:schema:xsd:Order-2"
       xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
       xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
   <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
   <cbc:CustomizationID>urn:www.cenbii.eu:transaction:biicoretrdm001:ver1.0</cbc:CustomizationID>
   <cbc:ProfileID schemeID="BII" schemeAgencyID="Profile">urn:www.cenbii.eu:profile:BII01:ver1.0</cbc:ProfileID>
   <cbc:ID>000211462</cbc:ID>
   <cbc:IssueDate>2010-06-14</cbc:IssueDate>
   <cbc:IssueTime>16:00:00</cbc:IssueTime>
   <cbc:DocumentCurrencyCode>USD</cbc:DocumentCurrencyCode>
   <cac:QuotationDocumentReference>
      <cbc:ID/>
   </cac:QuotationDocumentReference>
   <cac:OrderDocumentReference>
      <cbc:ID>102096559TEST</cbc:ID>
   </cac:OrderDocumentReference>
   <cac:OriginatorDocumentReference>
      <cbc:ID>007911209</cbc:ID>
   </cac:OriginatorDocumentReference>
   <cac:AdditionalDocumentReference>
      <cbc:ID/>
   </cac:AdditionalDocumentReference>
   <cac:Contract>
      <cbc:ID>TLP-X12</cbc:ID>
      <cbc:ContractType>NE</cbc:ContractType>
   </cac:Contract>
   <cac:BuyerCustomerParty>
      <cac:Party>
         <cac:PartyIdentification>
            <cbc:ID>ID Number</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name/>
         </cac:PartyName>
         <cac:PartyTaxScheme>
            <cac:TaxScheme/>
         </cac:PartyTaxScheme>
      </cac:Party>
   </cac:BuyerCustomerParty>
   <cac:SellerSupplierParty>
      <cac:Party>
         <cac:PartyIdentification>
            <cbc:ID>ID Number</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>BILL TO</cbc:Name>
         </cac:PartyName>
      </cac:Party>
   </cac:SellerSupplierParty>
   <cac:OriginatorCustomerParty>
      <cac:Party>
         <cac:PartyIdentification>
            <cbc:ID/>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name/>
         </cac:PartyName>
      </cac:Party>
   </cac:OriginatorCustomerParty>
   <cac:Delivery>
      <cac:DeliveryLocation>
         <cac:Address>
            <cbc:StreetName>123 MAIN STREET</cbc:StreetName>
            <cbc:Department>DEPARTMENT 400</cbc:Department>
            <cbc:CityName>CEDAR RAPIDS</cbc:CityName>
            <cbc:PostalZone>524032140</cbc:PostalZone>
         </cac:Address>
      </cac:DeliveryLocation>
      <cac:DeliveryParty>
         <cac:PartyIdentification>
            <cbc:ID/>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>SHIP TO</cbc:Name>
         </cac:PartyName>
         <cac:Contact>
            <cbc:Name>SHIP TO</cbc:Name>
            <cbc:Telephone>8015551234</cbc:Telephone>
            <cbc:Telefax>8015554321</cbc:Telefax>
            <cbc:ElectronicMail>john@doe.com</cbc:ElectronicMail>
         </cac:Contact>
      </cac:DeliveryParty>
   </cac:Delivery>
   <cac:TaxTotal>
      <cbc:TaxAmount/>
   </cac:TaxTotal>
   <cac:OrderLine>
      <cac:LineItem>
         <cbc:ID>1</cbc:ID>
         <cbc:Quantity unitCode="EA">1</cbc:Quantity>
         <cbc:PartialDeliveryIndicator>false</cbc:PartialDeliveryIndicator>
         <cac:Delivery>
            <cac:RequestedDeliveryPeriod>
               <cbc:StartDate>2010-06-14</cbc:StartDate>
               <cbc:EndDate>2010-06-14</cbc:EndDate>
            </cac:RequestedDeliveryPeriod>
         </cac:Delivery>
         <cac:OriginatorParty>
            <cac:PartyIdentification>
               <cbc:ID/>
            </cac:PartyIdentification>
            <cac:PartyName>
               <cbc:Name/>
            </cac:PartyName>
         </cac:OriginatorParty>
         <cac:Price>
            <cbc:PriceAmount currencyID="USD">665</cbc:PriceAmount>
         </cac:Price>
         <cac:Item>
            <cac:SellersItemIdentification>
               <cbc:ID>64113730AD01A00</cbc:ID>
            </cac:SellersItemIdentification>
            <cac:StandardItemIdentification>
               <cbc:ID/>
            </cac:StandardItemIdentification>
            <cac:AdditionalItemProperty>
               <cbc:Name/>
            </cac:AdditionalItemProperty>
         </cac:Item>
      </cac:LineItem>
   </cac:OrderLine>
</Order>
```

> Level 2 Certification - Order - Mapping.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mappings>
  <user-functions>
  </user-functions>
  <user-defined-fields>
    <user-defined-field uid="udfs_0" select="&apos;2.1&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_1" select="&apos;urn:www.cenbii.eu:transaction:biicoretrdm001:ver1.0&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_2" select="&apos;urn:www.cenbii.eu:profile:BII01:ver1.0&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_3" select="&apos;BII&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_4" select="&apos;Profile&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_6" select="bbw:changeDateTimeFormat($arg1, &apos;yyyyMMdd&apos;, &apos;yyyy-MM-dd&apos;)">
      <arg source="md:X12.MESSAGES.GS.GS04"/>
    </user-defined-field>
    <user-defined-field uid="udfs_26" select="&apos;false&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_29" select="bbw:changeDateTimeFormat($arg1, &apos;yyyyMMdd&apos;, &apos;yyyy-MM-dd&apos;)">
      <arg source="md:X12.MESSAGES.M850.SG20010.DTM_196.DTM02"/>
    </user-defined-field>
    <user-defined-field uid="udfs_30" select="bbw:changeDateTimeFormat($arg1, &apos;yyyyMMdd&apos;, &apos;yyyy-MM-dd&apos;)">
      <arg source="md:X12.MESSAGES.M850.SG20010.DTM_010.DTM02"/>
    </user-defined-field>
    <user-defined-field uid="udfs_31" select="bbw:setMetadata(&apos;&apos;&apos;currency&apos;&apos;&apos;, $arg1)">
      <arg source="md:X12.MESSAGES.M850.CUR.CUR02"/>
    </user-defined-field>
    <user-defined-field uid="udfs_32" select="bbw:metadataObject(&apos;&apos;&apos;currency&apos;&apos;&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_33" select="bbw:changeDateTimeFormat($arg1, &apos;HHmm&apos;, &apos;HH:mm:00&apos;)">
      <arg source="md:X12.MESSAGES.GS.GS05"/>
    </user-defined-field>
  </user-defined-fields>
  <mapping id="0" target="md:ed3b0bc319ee9adc92e2905b2ce19337" source="udf:udfs_0" operation="value"/>
  <mapping id="3" target="md:620f792cfd5c9a6aaa282033a79b4bed" source="udf:udfs_1" operation="value"/>
  <mapping id="4" target="md:d6422fb0dbb19f71054423528597daa5" source="udf:udfs_2" operation="value"/>
  <mapping id="5" target="md:1f8d53fb151370419372ba4e59220c4f" source="udf:udfs_3" operation="value"/>
  <mapping id="6" target="md:ae7eec020ffb816b12b925d3ebe3ffb3" source="udf:udfs_4" operation="value"/>
  <mapping id="7" target="md:2e97fb370e3e3b18047fb796dd72fec2" source="md:X12.ISA.ISA13" operation="value"/>
  <mapping id="8" target="md:daa33e1a6fd06740f81de8d4e1474733" source="udf:udfs_6" operation="value"/>
  <mapping id="12" target="md:e95cbccfaa5405225e29834e466e3500" source="md:X12.MESSAGES.GS.GS02" operation="value"/>
  <mapping id="13" target="md:f6404f42056c0925d69e07c9b5c19407" source="md:X12.MESSAGES.GS.GS03" operation="value"/>
  <mapping id="14" target="md:12c44ea485d4e86d999600e25401114b" source="md:X12.MESSAGES.M850.BEG.BEG03" operation="value"/>
  <mapping id="15" target="md:dd8029d0fa81152bfb950cbea802ec4d" source="md:X12.MESSAGES.M850.BEG.BEG02" operation="value"/>
  <mapping id="16" target="md:185cd23fb289a6ba3fa4cb3d4e30a5c7" source="md:X12.MESSAGES.M850.SG10310_N1_BY.N1_BY.N104" operation="value"/>
  <mapping id="19" target="md:beae848cb08d36b537f42aa77cc5c6f4" source="md:X12.MESSAGES.M850.SG10310_N1_BT.N1_BT.N102" operation="value"/>
  <mapping id="20" target="md:722587451097c2da5d3d950b4d8c7bb6" source="md:X12.MESSAGES.M850.SG10310_N1_BT.N1_BT.N104" operation="value"/>
  <mapping id="22" target="md:3fd5e57ddeecb7e5e0ccfb5d1bdfb378" source="md:X12.MESSAGES.M850.SG10310_N1_ST.N1_ST.N102" operation="value"/>
  <mapping id="23" target="md:09899c880af8bf6adaf6b2b8ba0b9911" source="md:X12.MESSAGES.M850.SG10310_N1_ST.N3.N301" operation="value"/>
  <mapping id="24" target="md:bb33cce29cfefadefce05bbd3f6285d6" source="md:X12.MESSAGES.M850.SG10310_N1_ST.N4.N401" operation="value"/>
  <mapping id="25" target="md:43b48573e2f3a7f171253bbb8b334fbe" source="md:X12.MESSAGES.M850.SG10310_N1_ST.N4.N403" operation="value"/>
  <mapping id="26" target="md:aacec553fbe9cdc272bb94f08d6515f4" source="md:X12.MESSAGES.M850.SG10310_N1_ST.REF_DP.REF03" operation="value"/>
  <mapping id="27" target="md:5a35c5d71538f1d22e2b56d61e4d7488" source="md:X12.MESSAGES.M850.SG10310_N1_ST.PER.PER02" operation="value"/>
  <mapping id="28" target="md:b11c47185008fcb3ce022d3db5310807" source="md:X12.MESSAGES.M850.SG10310_N1_ST.PER.PER04" operation="value"/>
  <mapping id="29" target="md:9ad7f6eaf758fa8d7b7c11f1f0132be9" source="md:X12.MESSAGES.M850.SG10310_N1_ST.PER.PER06" operation="value"/>
  <mapping id="30" target="md:c3fc0a0027f174fc3ad5073e97cdcebf" source="md:X12.MESSAGES.M850.SG10310_N1_ST.PER.PER08" operation="value"/>
  <mapping id="31" target="md:d268350e511" source="md:X12.MESSAGES.M850.SG20010_Loop" operation="loop"/>
  <mapping id="32" target="md:a4cf552d378ce985b8604006fe53c52a" source="md:X12.MESSAGES.M850.SG20010.PO1.PO101" operation="value"/>
  <mapping id="33" target="md:2f12624a183ad296285f3a16faa1ed09" source="md:X12.MESSAGES.M850.SG20010.PO1.PO102" operation="value"/>
  <mapping id="34" target="md:e278305cfc6c675d3d07ec05cbbb6f05" source="md:X12.MESSAGES.M850.SG20010.PO1.PO103" operation="value"/>
  <mapping id="36" target="md:8b8f04bf20b463f3c9cf1db399cee0a7" source="udf:udfs_26" operation="value"/>
  <mapping id="37" target="md:9da014dbd9d7129066d4714940e7194c" source="md:X12.MESSAGES.M850.SG20010.PO1.PO109" operation="value"/>
  <mapping id="38" target="md:48633f21ba0807876c71815321bec773" source="md:X12.MESSAGES.M850.SG20010.PO1.PO104" operation="value"/>
  <mapping id="41" target="md:253e63cbd82e67cd9fed2ca13366e2ec" source="udf:udfs_29" operation="value"/>
  <mapping id="42" target="md:06ea523be863afcfa75949a6525d71a6" source="udf:udfs_30" operation="value"/>
  <mapping id="11" target="md:d843f198f4e4a0b757d6d4110ce18413" source="udf:udfs_31" operation="value"/>
  <mapping id="45" target="md:f20b6f48dea81209d6647e482cab4b1b" source="udf:udfs_32" operation="value"/>
  <mapping id="46" target="md:18c817ad93425877d3d5b862236f556e" source="md:X12.MESSAGES.M850_Loop" operation="loop"/>
  <mapping id="48" target="md:7c4ed6434cc1a75ac47361646378a302" source="udf:udfs_33" operation="value"/>
  <mapping id="50" target="md:5283b82269c5ae9490e53fd9aa3e5847" source="md:X12.MESSAGES.M850.SG20010.PO1.PO107" operation="value"/>
</mappings>
```

#### 855 Order Response (to Adobe)

- Create the `Level 2 Certification - Order Response` Channel

![](/images/other/edi-babelway-level-2-certification/OrderResponse.png)

- Put `Level 2 Certification - Order Response` for `Name`

![](/images/other/edi-babelway-level-2-certification/OrderResponse2.png)

- Select `FTP Server` for `Gateway IN` Type.

![](/images/other/edi-babelway-level-2-certification/OrderResponse3.png)

- Put `Level2CertificationOrderResponse` for `Username` and `Password` for `Password`

![](/images/other/edi-babelway-level-2-certification/OrderResponse4.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse5.png)

- Select `UBL` for `Message IN` type.

![](/images/other/edi-babelway-level-2-certification/OrderResponse6.png)

- Select `UBL 2.1 Order Response.xml` for `UBL sample`

![](/images/other/edi-babelway-level-2-certification/OrderResponse7.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse8.png)

- We can use the `EDI_855_Outbound_ANSIX12_4010_29jun04_000.pdf` document downloaded from the https://channelpartners.adobe.com/home/support/edi.html#Tabs_contentbody_section_8fee_par_tabs_1e33_1e33_tab2 `Adobe` website to see the specifications required by `Adobe`.

- We can obtain the following example:

> EDI_855_Outbound_ANSIX12_4010_29jun04_000_Example.txt

```
ISA*00*          *00*          *16*102096559PROD  *01*PARTNER
*090612*2028*U*00400*855336885*0*P*>
GS*PR*102096559PROD*PARTNER*20090612*2028*855336885*X*004010
ST*855*852281220
BAK*00*AD*0132710645*20090612
CUR*SE*USD
REF*CO*11KH111D
TD5**ZZ*0000011111
TD5**ZZ*0000011111
TD5**ZZ*0000011111
TD5**91*0000011111
TD5**ZZ*0011111111
N1*BY*PURCHASING PARTY*ZZ*0000011111
N2*TRADING PARTNER
N3*1111 Main Street*VENDOR A11111
N4*SAN JOSE*CA*951102704*US
N1*BT*BILL TO PARTY*ZZ*0000022222
N2*TRADING PARTNER
N3*2222 Main Street*VENDOR A22222
N4*SAN JOSE*CA*951102704*US
N1*PR*PAYER PARTY*ZZ*0000033333
N2*TRADING PARTNER
N3*3333 Main Street*VENDOR A33333
N4*SAN JOSE*CA*951102704*US
N1*CA*OTHER CARRIER-NOTE IN SHIP INSTRUC.*ZZ*0000444444
N2*OTHER CARRIER-NOTE IN SHIP INSTRUC.
N3*4444 MAIN ST.
N4*SANTA CLARA*CA*95050*US
N1*II*ADOBE SYSTEMS INCORPORATED*91*0000012137
N2*ADOBE SYSTEMS INCORPORATED
N3*345 PARK AVENUE
N4*SAN JOSE*CA*95110*US
N1*SE*ADOBE SYSTEMS INCORPORATED*91*ADUS
N2*ADOBE SYSTEMS INCORPORATED
N3*345 Park Avenue
N4*SAN JOSE*CA*95110*US
N1*ST*SHIP TO PARTY*ZZ*0055555555
N2*TRADING PARTNER
N3*5555 161TH AVE
N4*SEATTLE*WA*98134*US
PER*CN*JOHN DOE
PO1*000010*1*EA*369*CA*MG*00065008880AD01A00*BP*T05249
PID*F****APRO,9.0,WIN,AOO,UE,1PK,N/A
CTT*1
AMT*TT*369
SE*43*852281220
GE*1*855336885
IEA*1*855336885
Page
```

- Select `X12` for `Message OUT` type.

![](/images/other/edi-babelway-level-2-certification/OrderResponse9.png)

- Select `EDI_855_Outbound_ANSIX12_4010_29jun04_000_Example.txt` for `X12 sample`

![](/images/other/edi-babelway-level-2-certification/OrderResponse10.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse11.png)

- Select `SFTP CLIENT` for `Gateway OUT`

![](/images/other/edi-babelway-level-2-certification/OrderResponse12.png)

- Put `sftp.adobe.com` for `Server`, `Supplier58192` for `Username`, `k92gxk8i4l` for `Password` and `/DESADV` for `Directory`

![](/images/other/edi-babelway-level-2-certification/OrderResponse13.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse14.png)

**Transformation**

- `ISA-Interchange Control Header` Mapping

![](/images/other/edi-babelway-level-2-certification/OrderResponse15.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse16.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse17.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse18.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse19.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse20.png)

- `GS-Funtional Control Header` Mapping

![](/images/other/edi-babelway-level-2-certification/OrderResponse21.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse22.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse23.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse24.png)

- `ST - Transaction Set Control Number`

![](/images/other/edi-babelway-level-2-certification/OrderResponse25.png)

- `BIG - Beginning Segment for Invoice`

![](/images/other/edi-babelway-level-2-certification/OrderResponse26.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse27.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse28.png)

- `CUR - Currency`

![](/images/other/edi-babelway-level-2-certification/OrderResponse29.png)

- `REF_CO - Customer Order Number`

![](/images/other/edi-babelway-level-2-certification/OrderResponse30.png)

- Remove `TD5 - Carrier Details`

![](/images/other/edi-babelway-level-2-certification/OrderResponse31.png)

- `BY - Buying Party (Purchaser)`

![](/images/other/edi-babelway-level-2-certification/OrderResponse32.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse32b.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse33.png)

- Remove `BY - Buying Party N2, N3 and N4`

![](/images/other/edi-babelway-level-2-certification/OrderResponse34.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse35.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse36.png)

- Remove `BT - Bill-to-Party`, `PR - Payer`, `CA - Carrier`, `II - Issuer of Invoice` and `ST - Ship To`.

![](/images/other/edi-babelway-level-2-certification/OrderResponse37.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse38.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse39.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse40.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse41.png)

- `SE - Selling Party`

![](/images/other/edi-babelway-level-2-certification/OrderResponse42.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse43.png)

- Remove `SE - Selling Party N2, N3 and N4`

![](/images/other/edi-babelway-level-2-certification/OrderResponse44.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse45.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse46.png)

- `PO1 - Baseline Item Data`

![](/images/other/edi-babelway-level-2-certification/OrderResponse47.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse48.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse49.png)

- `CTT - Transaction Totals`

1. Open the `UBL 2.1 Order Response.xml` document with NotePad++ and search for the first field of `OrderLine`

![](/images/other/edi-babelway-level-2-certification/OrderResponse50.png)

2. Obtain the Current XML Path

![](/images/other/edi-babelway-level-2-certification/OrderResponse51.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse52.png)

`Value=` **/OrderResponse/cac:OrderLine/cac:LineItem**

3. Use the `count` function.

![](/images/other/edi-babelway-level-2-certification/OrderResponse53.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse53b.png)

- Create `Test Case`

![](/images/other/edi-babelway-level-2-certification/OrderResponse54.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse55.png)

- Select `UBL 2.1 Order Response.xml` for `Message in`

![](/images/other/edi-babelway-level-2-certification/OrderResponse56.png)

- Run `test case`

![](/images/other/edi-babelway-level-2-certification/OrderResponse57.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse58.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse59.png)

- Remove `N2`, `N3` and `N4` for all the `N1 Groups`

![](/images/other/edi-babelway-level-2-certification/OrderResponse60.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse61.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse62.png)

- Run `Test Case` again

![](/images/other/edi-babelway-level-2-certification/OrderResponse63.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse64.png)

![](/images/other/edi-babelway-level-2-certification/OrderResponse65.png)

> EDI_855_Outbound_ANSIX12_4010_29jun04_000_From_UBL_OrderResponse.txt

```
ISA*00*          *00*          *16*7302347231111  *01*PARTNERTEST    *190602*false*U*00400*7        *0*P*>
GS*PR*7302347231111  *PARTNER*20100121*1230*7        *X*004010
ST*855*201906020
BAK*00*AD*34*20100121
CUR*SE*SEK
REF*CO*7
N1*BY*Johnssons byggvaror*ZZ*7300070011115
N1*SE*Moderna Produkter AB*91*SellerPartyID123
PER*CN
PO1*1**EA**CA*MG**BP
PID*F****Line Status
PO1*2**EA**CA*MG**BP
PID*F****Line Status
CTT*1
AMT*TT*0
SE*14*201906020
GE*1*7
IEA*1*7
```

> Level 2 Certification - Order Response - Mapping.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mappings>
  <user-functions>
  </user-functions>
  <user-defined-fields>
    <user-defined-field uid="udfs_0" select="bbw:padRight($arg1, 15, &apos; &apos;)">
      <arg source="md:1df002f86f41458923c1c378f6f30ecc"/>
    </user-defined-field>
    <user-defined-field uid="udfs_1" select="bbw:padRight(&apos;PARTNERTEST&apos;, 15, &apos; &apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_2" select="bbw:formatDateTime(bbw:currentDateTime(), &apos;yyMMdd&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_3" select="Time =bbw:formatDateTime(bbw:currentDateTime(), &apos;hhmm&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_4" select="&apos;U&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_5" select="bbw:padRight($arg1, 9, &apos; &apos;)">
      <arg source="md:f458ba2300063fa97aedeb00c4949a1c"/>
    </user-defined-field>
    <user-defined-field uid="udfs_6" select="bbw:changeDateTimeFormat($arg1, &apos;yyyy-MM-dd&apos;, &apos;yyyyMMdd&apos;)">
      <arg source="md:5ca1cda77df7c63c0f7facf9bb415189"/>
    </user-defined-field>
    <user-defined-field uid="udfs_7" select="bbw:changeDateTimeFormat($arg1, &apos;HH:mm:ss&apos;, &apos;HHmm&apos;)">
      <arg source="md:5ead17495d008825e7a584df81e70b72"/>
    </user-defined-field>
    <user-defined-field uid="udfs_8" select="substring(bbw:formatDateTime(bbw:currentDateTime(), &apos;yyyyMMddhhMMss&apos;), 1, 9)">
    </user-defined-field>
    <user-defined-field uid="udfs_9" select="&apos;AD&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_18" select="&apos;F&apos;">
    </user-defined-field>
    <user-defined-field uid="udfs_20" select="count(&apos;/OrderResponse/cac:OrderLine/cac:LineItem&apos;)">
    </user-defined-field>
    <user-defined-field uid="udfs_21" select="0">
    </user-defined-field>
  </user-defined-fields>
  <mapping id="0" target="md:X12.ISA.ISA06" source="udf:udfs_0" operation="value"/>
  <mapping id="1" target="md:X12.ISA.ISA08" source="udf:udfs_1" operation="value"/>
  <mapping id="3" target="md:X12.ISA.ISA09" source="udf:udfs_2" operation="value"/>
  <mapping id="4" target="md:X12.ISA.ISA10" source="udf:udfs_3" operation="value"/>
  <mapping id="6" target="md:X12.ISA.ISA11" source="udf:udfs_4" operation="value"/>
  <mapping id="7" target="md:X12.ISA.ISA13" source="udf:udfs_5" operation="value"/>
  <mapping id="9" target="md:X12.MESSAGES.GS.GS02" source="udf:udfs_0" operation="value"/>
  <mapping id="10" target="md:X12.MESSAGES.GS.GS04" source="udf:udfs_6" operation="value"/>
  <mapping id="11" target="md:X12.MESSAGES.GS.GS05" source="udf:udfs_7" operation="value"/>
  <mapping id="12" target="md:X12.MESSAGES.GS.GS06" source="udf:udfs_5" operation="value"/>
  <mapping id="13" target="md:X12.MESSAGES.M855.ST.ST02" source="udf:udfs_8" operation="value"/>
  <mapping id="14" target="md:X12.MESSAGES.M855.BAK.BAK02" source="udf:udfs_9" operation="value"/>
  <mapping id="16" target="md:X12.MESSAGES.M855.BAK.BAK03" source="md:b7e20866528650b0225f5ff695e1d9fe" operation="value"/>
  <mapping id="17" target="md:X12.MESSAGES.M855.BAK.BAK04" source="udf:udfs_6" operation="value"/>
  <mapping id="19" target="md:X12.MESSAGES.M855.CUR.CUR02" source="md:bf5d6bb31784d66c148a93921d206747" operation="value"/>
  <mapping id="20" target="md:X12.MESSAGES.M855.REF_CO.REF02" source="md:f458ba2300063fa97aedeb00c4949a1c" operation="value"/>
  <mapping id="21" target="md:X12.MESSAGES.M855.SG10300_N1_BY.N1_BY.N102" source="md:08380f72dc7c41a2927062bf705651ad" operation="value"/>
  <mapping id="22" target="md:X12.MESSAGES.M855.SG10300_N1_BY.N1_BY.N104" source="md:d9aa85a2337aa0c40ad466a8f19b5cb2" operation="value"/>
  <mapping id="23" target="md:X12.MESSAGES.M855.SG10300_N1_BY.N1_BY" source="md:d270051e75" operation="loop"/>
  <mapping id="26" target="md:X12.MESSAGES.M855.SG10300_N1_SE.N1_SE.N102" source="md:efc1a874515b166a23629b68af0f1deb" operation="value"/>
  <mapping id="27" target="md:X12.MESSAGES.M855.SG10300_N1_SE.N1_SE.N104" source="md:9f3410988b66316fce9d41b04a0fd405" operation="value"/>
  <mapping id="28" target="md:X12.MESSAGES.M855.SG20010_Loop" source="md:d270051e96" operation="loop"/>
  <mapping id="29" target="md:X12.MESSAGES.M855.SG20010.PO1.PO101" source="md:df1dd569bf61c2c48a43f0304d30c724" operation="value"/>
  <mapping id="31" target="md:X12.MESSAGES.M855.SG20010.SG20050.PID.PID01" source="udf:udfs_18" operation="value"/>
  <mapping id="32" target="md:X12.MESSAGES.M855.SG20010.SG20050.PID.PID05" source="md:e0f9ab62cf12076ffc6a843750c853ba" operation="value"/>
  <mapping id="35" target="md:X12.MESSAGES.M855.SG30010.CTT.CTT01" source="udf:udfs_20" operation="value"/>
  <mapping id="36" target="md:X12.MESSAGES.M855.SG30010.AMT_TT.AMT02" source="udf:udfs_21" operation="value"/>
</mappings>
```

## Certification Submission

### Submit for Review

When you are done building both scenarios, complete the attached certification submission form.

Fill out the information and submit the form to: info@babelway.com

Include in the subject line of the submission `BabelAcademy Level 2 Certification`

![](/images/other/edi-babelway-level-2-certification/SubmitForReview.png)

![](/images/other/edi-babelway-level-2-certification/SubmitForReview2.png)

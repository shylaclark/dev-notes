# Web Services

A Web service is merely an API wrapped in HTTP.

A Web service always needs a network for its operation.

A Web service uses only SOAP, REST and XML-RPC for communication.

No visual interface.

Protocol Buffers

Human to App
Web browser sends HTTP GET request and server sends HTTP response.

App to App (back end)
App sends XML request and server sends XML response.

What is a web service?
Service that's available over a network, uses a standardized XML messaging system, and is not tied to any one operating system or programming language.

* Helps integrate one enterprise app w/ another.
* Talk to each other using HTTP & XML or JSON.
* All web services are APIs, but not all APIs are web services.

What is the web service protocol stack?

What is XML messaging?

Service description?

Service discovery?

Thin clients (soft clients) prototype: students

Swagger UI

Postman

xjc
- Schema to Java compiler


This line goes in build.xml:
<xjc schema=________ destdir=________ extension="true" />

## Resources
[Service-Oriented Architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture)

[Using JAX-RS with Protocol Buffers](https://javarants.com/using-jax-rs-with-protocol-buffers-for-high-performance-rest-apis-563ce40d15d9)

[Google Protocol Buffer](https://sleeplessinslc.blogspot.com/2010/03/restful-representation-with-google.html)

[Google Tutorial](https://developers.google.com/protocol-buffers/docs/javatutorial?csw=1)


## Resources
[Using JAX-RS with Protocol Buffers](https://javarants.com/using-jax-rs-with-protocol-buffers-for-high-performance-rest-apis-563ce40d15d9)

[Google Protocol Buffer](https://sleeplessinslc.blogspot.com/2010/03/restful-representation-with-google.html)

[Google Tutorial](https://developers.google.com/protocol-buffers/docs/javatutorial?csw=1)

URIs


[rest-api-best-practices-where-to-put-parameters](https://stackoverflow.com/questions/4024271/rest-api-best-practices-where-to-put-parameters)

[RFC spec document](https://tools.ietf.org/html/rfc6570)

REST

RESTful APIs

## Best Practices

### 1. Keep it simple
We need to make sure that the base URL of the API is simple.

API to get all products.
```
/products
```

API to get a specific product.
```
/products/12345
```

### 2. Use nouns -- not verbs

### 3. Use of right HTTP methods
RESTful APIs have various methods to indicate the type of operation we are going to perform with this API. We need to make sure we use the right HTTP method for given operation.

* GET — To get a resource or collection of resources.
* POST — To create a resource or collection of resources.
* PUT/PATCH — To update the existing resource or collection of resources.
* DELETE — To delete the existing resource or the collection of resources.

### 4. Use plurals
Using plural avoids confusion whether we are talking about getting single resource or a collection. It also avoids adding additional things like attaching "all" to the base URL e.g. `/product/all`.

### 5. Use parameters
Sometimes we need an API which should be telling more story than just by id. To avoid long URLs, make use of query parameters to design the API.

```
/products?name='ABC'   <-- good
/getProductsByName     <-- bad

/products?type='xyz'
/getProductsByType
```

### 6. Use proper HTTP codes
We have plenty of HTTP codes. Most of us only end up using two — 200 and 500! This is certainly not a good practice. Following are some commonly used HTTP codes.

* 200 OK — This is most commonly used HTTP code to show that the operation performed is successful.
* 201 CREATED — This can be used when you use POST method to create a new resource.
* 202 ACCEPTED — This can be used to acknowledge the request sent to the server.
* 400 BAD REQUEST — This can be used when client side input validation fails.
* 401 UNAUTHORIZED / 403 FORBIDDEN— This can be used if the user or the system is not authorised to perform certain operation.
* 404 NOT FOUND— This can be used if you are looking for certain resource and it is not available in the system.
* 500 INTERNAL SERVER ERROR — This should never be thrown explicitly but might occur if the system fails.
* 502 BAD GATEWAY — This can be used if server received an invalid response from the upstream server.

### Use pagination
Use of pagination is a must when you expose an API which might return huge data and if proper load balancing is not done, the a consumer might end up bringing down the service.

Use of `limit` and `offset` is recommended here. For example, `/products?limit=25&offset=50`. It is also advised to keep a default limit and default offset.

### 7. Supported formats
If is also important to choose how your API responds. Most of the modern day applications should return JSON responses unless you have an legacy app which still needs to get XML response.

### 8. Use proper error messages
It is always a good practice to keep set of error messages application sends and respond that with proper id. For example, if you use Facebook graph APIs, in case of errors, it returns message like this —
```
{
  "error": {
    "message": "(#803) Some of the aliases you requested do not exist: products",
    "type": "OAuthException",
    "code": 803,
    "fbtrace_id": "FOXX2AhLh80"
  }
}
```
I have also seen some examples in which people return URL with error message which tells you more about the error message and how to handle it as well.

### 9. Use of Open API specifications
In order to keep all teams in your company abide to certain principles, use of [OpenAPI Specification](https://swagger.io/resources/open-api/) can be useful. Open API allows you to design your APIs first and share that with the consumers in easier manner.


## JAX-RS

Standard JAX-RS uses an Application as its configuration class. A "convenience class" (e.g. ApplicationConfig or ResourceConfig) extends Application.

There a three main ways (in a servlet container) to configure Jersey (JAX-RS):

* With only web.xml
* With both web.xml and an Application/ResourceConfig class
* With only an Application/ResourceConfig class annotated with @ApplicationPath.

https://stackoverflow.com/questions/45625925/what-exactly-is-the-resourceconfig-class-in-jersey-2

@QueryParam

http://www.appsdeveloperblog.com/jax-rs-queryparam/
https://memorynotfound.com/jaxrs-queryparam-example/


Jersey
https://memorynotfound.com/jax-rs-rest-service-example-jersey-java/

XML

XML Schemas (XSD)

## Definition
A schema is metadata that tells us how our data is structured. Most databases implement some form of schema which enables us to reason about our data in a more structured manner. The WordPress REST API utilizes JSON Schema to handle the structuring of its data. You can implement endpoints without using a schema, but you will be missing out on a lot of things. It is up to you to decide what suits you best.


### XSD (XML Schema Declaration)
A schema is an XML specification that governs the allowable components of an XML document and the relationships between the components. An XML document doesn't have to have a schema. A valid XML document must conform to its schema.
- XML schema definition
- Used for validation

#### A Schema Defines:
* The elements that can appear in an XML document
* The order they must appear in
* The attributes they can have
* Which elements are subordinate (that is, are child elements) to other elements

#### JAXB Requires:
* The XML document you want to access has a schema
* The schema is written in the W3C XML Schema Language


JAXB

_Java Architecture for XML Binding (JAXB)_

You can parse XML using SAX and DOM; however, this is unnecessary with JAXB.

## Benefits of JAXB
* Makes it easier to access XML documents from applications written in the Java programming language.
* Allows Java developers to access and process XML data without having to know XML or XML processing. For example, there's no need to create or use a SAX parser or write callback methods.

## XSD
["XML Schema Definition"](https://www.w3schools.com/xml/schema_intro.asp)

An XML Schema (.xsd file) describes the structure of an XML document. It's used to define what elements and attributes may appear in an XML document. It also defines the relationship of the elements and what data may be stored in them.

## Marshalling & Unmarshalling

[Marshalling and Unmarshalling XML data using JAXB](http://techtipsjava.blogspot.com/2012/06/marshalling-and-unmarshalling-data.html)

### Marshalling
* "writing XML data"
* Convert a Java object into XML file
* [Convert Java Object to XML specific order using JAX-B](https://memorynotfound.com/convert-java-object-xml-specific-order-using-jax-b/)

### Unmarshalling
* "reading xml data"
* Convert XML files to Java objects

#### No XSD
* Model your data as Java classes.
* Add JAXB annotations to these classes.
* Use JAXB to generate an XML schema for your data.

Run the Schema Generator in terminal:
```
$ schemagen Product.java
```

#### With XSD

[Oracle Binding between XML Schema and Java Classes](https://docs.oracle.com/cd/E19316-01/819-3669/bnazf/index.html)
* Bind the schema into a set of Java classes that represents the schema.
* Unmarshal the document into Java content objects. The Java content objects represent the content and organization of the XML document, and are directly available to your program. xjc command generates the source code for Java classes that correspond to the types defined in the .xsd file.

Run the JAXB schema compiler tool in terminal:
```
$ xjc Product.xsd
```
The -p option identifies a package for the generated classes, and the -d option identifies a target directory. So for this command, the classes are packaged in test.jaxb within the work directory.
```
xjc.sh -p test.jaxb books.xsd -d work
```
The binding compiler generates a set of interfaces and a set of classes that implement the interfaces.
## Using Name Prefixes
https://www.w3schools.com/xml/xml_namespaces.asp
## Resources
[Vogella JAXB Tutorial](http://www.vogella.com/tutorials/JAXB/article.html)

[In this example you’ll learn how to use the JAXB @XmlElementWrapper annotation.](https://kodejava.org/how-to-generate-a-wrapper-element-around-xml-representation-in-jaxb/)

[Java Examples for javax.xml.bind.annotation.XmlElementWrapper](https://www.javatips.net/api/javax.xml.bind.annotation.xmlelementwrapper)

## Serialization
To [serialize](https://docs.oracle.com/javase/tutorial/jndi/objects/serial.html) an object means to convert its state to a byte stream so that the byte stream can be reverted back into a copy of the object.

[Sparkfun Serial Communication](https://learn.sparkfun.com/tutorials/serial-communication/all)

[Serialization in Java](https://www.geeksforgeeks.org/serialization-in-java/)

## Validation
[How to validate a JAXB object model against an XML schema](http://blog.bdoughan.com/2010/11/validate-jaxb-object-model-with-xml.html)

[tutorialspoint XSD Validation](https://www.tutorialspoint.com/xsd/xsd_validation.htm)

[How to generate JAXB classes from xsd](https://stackoverflow.com/questions/11463231/how-to-generate-jaxb-classes-from-xsd)

[Generate Java Classes From XSD](https://memorynotfound.com/generate-java-classes-from-xsd/)

[Product tutorial](https://docs.oracle.com/javaee/6/tutorial/doc/gkknj.html)

https://howtodoinjava.com/jaxb/marshaller-example/

https://stackoverflow.com/questions/8177377/dynamic-jaxb-xml-deserialization-unmarshalling

https://stackoverflow.com/questions/15820779/writing-from-java-to-an-xml-document-simple

https://docs.oracle.com/javase/7/docs/api/javax/xml/bind/Marshaller.html

https://stackoverflow.com/questions/11463231/how-to-generate-jaxb-classes-from-xsd

https://docs.oracle.com/javase/7/docs/api/javax/xml/bind/Unmarshaller.html

https://docs.oracle.com/javaee/7/api/javax/xml/bind/Unmarshaller.html

https://springframework.guru/using-jaxb-for-xml-with-java/

https://www.ibm.com/support/knowledgecenter/en/SS7JFU_8.5.5/com.ibm.websphere.express.doc/ae/twbs_jaxbmarshalxml.html

Lucene

## Basics
Lucene is a full-text search Java API. Use it to easily add search functionality to an application or website.

### Index
Lucene _adds_ content to a full-text **index**. Sources of content include SQL/NoSQL databases, filesystems, or even websites.

### Search
Lucene allows you to _query_ this **index** and returns results.

Results are ranked by either the relevance to the query or sorted by an arbitrary field such as a document's last modified date.

## Versions

## Examples

org.apache.lucene.search.IndexSearcher  // Lucene 3.4.0

org.apache.lucene.store.IndexSearcher   // TrackDB project (unknown Lucene version)

## Resources

[Lucene 3.4.0 API](https://lucene.apache.org/core/3_4_0/api/all/index.html)

TrackDB from old Elias/Bruce repo that demos Lucene.

store.IndexSearcher class not available in Lucene 3.4.0.

#### JAX WS

Java API for web services (SOAP).

# REST API

## RESTful API
* An application interface (API) that uses HTTP requests to GET, PUT, POST, and DELETE data.
* a.k.a. "RESTful web service"
* A RESTful API explicitly takes advantage of HTTP methodologies defined by the RFC 2616 protocol. They use GET to retrieve a resource; PUT to change the state of or update a resource, which can be an object, file or block; POST to create that resource; and DELETE to remove it.

#### JAX RS
Java API for RESTful services.

### REST
"representational state transfer"

## Resources
[Great Quora answer](https://www.quora.com/What-is-a-REST-API)

[Informative link](https://searchmicroservices.techtarget.com/definition/RESTful-API)

[Servlet JDBC connection example](https://www.journaldev.com/1997/servlet-jdbc-database-connection-example#design-decisions) // Sylvia

[Servlet Context tutorial for Java beginners](https://javabeginnerstutorial.com/servlet-2/servlet-context-tutorial-for-java-beginners/)

[ServletContextListener](http://www.deadcoderising.com/execute-code-on-webapp-startup-and-shutdown-using-servletcontextlistener/)

[RESTful API Design — Step By Step Guide](https://hackernoon.com/restful-api-design-step-by-step-guide-2f2c9f9fcdbf)

['NBB RESTful API Design Guide' example](https://opensource.nbb.be/posts/002-restful-api-design-guide/)

['REST API Design Guide' example](https://github.com/NationalBankBelgium/REST-API-Design-Guide/wiki)

[Are REST and HTTP the same thing?](http://restcookbook.com/Miscellaneous/rest-and-http/)

[Richardson Maturity Level](https://martinfowler.com/articles/richardsonMaturityModel.html#level0)

https://www.crummy.com/writing/speaking/2008-QCon/act3.html

[REST principles](https://www.servage.net/blog/2013/04/08/rest-principles-explained/)

[REST APIs are not databases](https://medium.com/@marinithiago/guys-rest-apis-are-not-databases-60db4e1120e4)

[What is REST?](https://www.restapitutorial.com/lessons/whatisrest.html)

[Understanding REST and SOAP basics](https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/)

https://stackoverflow.com/questions/30580562/what-is-the-difference-between-resource-and-endpoint

[restful-api-design.readthedocs.io](https://restful-api-design.readthedocs.io)

### REST Endpoints

I would characterize _resource_ as a RESTful subset of endpoint.

In REST, the resource typically refers to some object or set of objects that are exposed at an API endpoint.

```
/api/users/johnny
```
An _endpoint_ by itself is just a reference to a uri that accepts web requests that may or may not be RESTful.
```
/services/service.asmx
```

REST

"Representational State Transfer"

* Links are always embedded URIs.
* DELETE, POST, PUT, GET
* Transfer the state of a "resource" over HTTP.

RESTful:
1. Identifiability
2. Indenpotence
3. Immutability
4. Verb reuse
5. Addressability

Compare with SOAP:
* Simple Object Access Protocol
* Must use xml
REST 


1. When interacting with API, manipulating an object.


POST http://example.com/widgets		// Create new widget
Data:
    name = Foobar			


GET http://example.com/widgets		// View all widgets


GET http://example.com/widgets/123	// View single widget


DELETE http://example.com/widgets/123	// Delete single widget


/widgets/123  				// To view, edit, delete particular resource


GET /widgets/123/users			// List all users assoc. w/ particular resource


POST /widgets/123/users			// Add a user to particular resource
Data:
    name = Andrew


2. HTTP status codes

- Success codes
- User error codes


3. Response formats


GET /widgets				// Makes req specifying JSON as return format
Accept: application/json

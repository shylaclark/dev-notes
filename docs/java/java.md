
Java EE

Java Enterprise Edition (Java EE) is a specification defining a collection of Java-based server/client technologies and how they interoperate.

It has APIs:
- JavaServer Faces (JSF) is a Java specification for building component-based user interfaces for web applications[1] and was formalized as a standard through the Java Community Process being part of the Java Platform, Enterprise Edition. It is also a MVC web framework that simplifies construction of user interfaces (UI) for server-based applications by using reusable UI components in a page. JSF 2 uses Facelets as its default templating system. Other view technologies such as XUL or plain Java[3] can also be employed. In contrast, JSF 1.x uses JavaServer Pages (JSP) as its default templating system.
- [Servlets](https://github.com/shylaclark/rms-notes/wiki/Java-Servlet)
- jpa
- cdi
- ejb

## Java Resources
[JavaRanch](https://javaranch.com/campfire.jsp)

Java Servlet

A servlet is simply a class which responds to a particular type of network request. Java servlets typically run on the HTTP protocol. HTTP is an asymmetrical request-response protocol. The client sends a _request_ message to the server, and the server returns a _response_ message as illustrated.

Basically servlets are usually used to implement web applications - but there are also various frameworks which operate on top of servlets (e.g. Struts) to give a higher-level abstraction than the "here's an HTTP request, write to this HTTP response" level which servlets provide.

## Applet vs Servlet
An Applet is a client side java program that runs within a Web browser on the client machine. On the other hand, a servlet is a server side component that runs on the web Page on server. An applet can use the user interface classes, while a servlet does not have a user interface.

## Servlet Container
Servlets run in a servlet container which handles the networking side (e.g. parsing an HTTP request, connection handling etc). In Java Land servlet containers like Tomcat (open source) and Jetty serve your web applications.

Non-Java approaches like Node.js and Go have built-in servers.

## Resources
https://www.javatpoint.com/steps-to-create-a-servlet-using-tomcat-server
[ntu.edu.sg](https://www.ntu.edu.sg/home/ehchua/programming/java/JavaServlets.html)

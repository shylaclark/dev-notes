JAXB

javax.xml.bind.JAXB

"Java Architecture for XML Binding"

Use JAXB to access an xml document:
1. Bind the schema
2. Unmarshall
3. Validate the source


JAXB Binding

https://www.3pillarglobal.com/insights/jaxb-binding-process-explained

https://javaee.github.io/jaxb-v2/doc/user-guide/ch01.html


XJC is the JAXB binding compiler (schema to Java compiler).

To generate classes all you need is the xsd.

$ xjc example.xsd

Given an xml file and an xsd file, generate interfaces/classes by running binding compiler (xjc).

Start:
books.xml
books.xsd

$ xjc.sh -p test.jaxb books.xsd -d work

Result:
work/test.jaxb/
	interfaces*.java
	impl/

This line goes in build.xml:
<xjc schema=________ destdir=________ extension="true" />


Unmarshall

JAXBContext jc = ....("test.jaxb");

Validate


Nick Notes


https://stackoverflow.com/questions/11463231/how-to-generate-jaxb-classes-from-xsd

This is a very confusing stack overflow article, but it goes into great detail

there is also a much more concise answer that explains how to generate jaxb classes from eclipse further down

https://www.jetbrains.com/help/idea/generating-java-code-from-xml-schema.html

that is for intellij

this is for eclipse

http://help.eclipse.org/mars/index.jsp?topic=%2Forg.eclipse.jpt.doc.user%2Ftask_generate_classes_from_schema.htm


#### XSD

- XML schema definition
- Used for validation
- a.k.a. "data model"


# Velocity

#### Render a message
In the Java
```
if(req.getAttribute("message")!=null){
  context.put("message", req.getAttribute("message"));
}

public void doPost() {
  ...
  req.setAttribute("message", "User has already registered.");
}
```
In html
```
#if($message)
<h4 class="error-message text-center">$message</h4>
#end
```
## Resources
[Apache Velocity](https://www.baeldung.com/apache-velocity)

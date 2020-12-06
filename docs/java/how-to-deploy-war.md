# 7442 Deploy War SOP

In IDE:

1. Merge Charles's "demo-merge" branch into mine.
2. Setup web.xml and make sure static resources (JavaScript, HTML/Velocity, CSS) are packages in the war.
3. In the command prompt, run Gradle war command.
4. In the build/lib folder of RMS, you should have an RMS.war file.

Log into VM with Tomcat setup to deploy the war:
* Remote desktop connection
* vmsvwud003.margeo.nrlssc.navy.mil
* Use regular domain account info to login

In VM:
1. Copy war file over to VM and paste into C:\tomcat9\webapps\
2. Run the following:
   - cd \tomcat9\bin
   - startup.bat //to start 
   - shutdown.bat //to stop

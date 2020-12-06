XJC Example

C:\Users\sclark\Documents\7441-workspace\NSAM\contacts-common\build.xml

<property name="module.schema.contactxml" location="modules/contactxml"/>

<target name="genxml" description="Generate Java stub code from schemas" depends="-init">
	<subant buildpath="${module.schema.contactxml}" inheritall="true" target="genxml" failonerror="false"/>
</target>
<target name="compile" description="Compile source code" depends="-init">
	<antcall target="-execute-target">
		<param name="target_param" value="compile"/>
	</antcall>
</target>

C:\Users\sclark\Documents\7441-workspace\NSAM\contacts-common\modules\contactxml\build.xml

<target name="genxml" description="Generate Java stub code from schemas" depends="resolve">
	<xjc extension="true" binding="${schema.dir}/${schema.contact.xml}/schema11-bindings.xml" destdir="${gensrc.dir}" schema="${schema.dir}/${schema.contact.xml}/MIW-CONTACT/1.2/miw_contact.xsd"/>
</target>

<target name="compile" depends="genxml">
	<javac destdir="${build.dir}" debug="true" target="1.7" source="1.7" srcdir="${src.dir}:${gensrc.dir}" includeantruntime="false">
		<classpath refid="build.classpath"/>
	</javac>
</target>

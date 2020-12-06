# Gradle

## Initial Setup

1. Download NRL's latest custom distribution of Gradle (e.g. `gradle-4.7`) from the NRLWIKI.
2. Save it in your user directory (e.g. `C:\Users\sclark`).
3. Open the newly-created global **.gradle** folder.
4. Locate **gradle.properties** and add:
```
hgCommandPath = C:\\Program Files\\TortoiseHg\\hg.exe
```

## Adding to Project

1. On the command line, cd to project root and run:
```
C:\Users\sclark\gradle-4.7\bin\gradle wrapper
```
You should have the following new files:
```
.gradle
gradle
gradlew
gradlew.bat
```
2. Add a **settings.gradle** file containing:
```
rootProject.name = '<NameOfProject>'
```
3. Add a **build.gradle** file containing:
```
plugins {
    id 'java'
    id 'eclipse'
    id 'idea'
}
apply plugin: 'nrl.gradle.plugin'

MAJOR_VERSION = '1'
MINOR_VERSION = '0'

sourceCompatibility = 1.8
compileJava.options.encoding = 'UTF-8'

sourceSets {
    main {
        java {
            srcDir 'src'
        }
    }
}

dependencies {
    compile 'org.apache.commons:commons-lang3:3.4',     // Apache commons
            'com.google.guava:guava:13.0.1',           // Google guava
            'org.slf4j:slf4j-api:1.7.6'                // Logging via SLF4J
}

artifacts{
    archives jar
}
```

After that, the plugin is active and your project will automatically be configured to resolve dependencies from Artifactory.

## Using Command Line Tools

Run `./gradlew <command>` to execute a Gradle command.

### War
`./gradlew gradle war`
Or use the Gradle toolbar in IntelliJ.

War file is located in build/libs/

## Notes
Do not confuse the global **.gradle** directory, which resides in the same directory as Gradle (e.g. gradle-4.7), with your project's **.gradle** directory, located in your project root.

## Resources
(Spring Gradle)[https://www.jetbrains.com/help/idea/creating-and-managing-modules.html]

Gradle

When change gradle build:
Right click Project > Gradle > Refresh

File > Import > Gradle > Existing Gradle Project
- Override workspace settings
- Local installation directory = .../tools/gradle-4.7

Or Configure Workspace Settings
Remove:
- settings/
- project
- classpath
Because Gradle creates these fresh.

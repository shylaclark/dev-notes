# JavaFX

## Basics

JavaFX is a GUI toolkit for Java.

The main launch class for a JavaFX application must extend the javafx.application.Application class.

The start() method is the main entry point for all JavaFX applications.

A JavaFX application defines the user interface container by means of a stage and a scene.

The JavaFX Stage class is the top-level JavaFX container.

The JavaFX Scene class is the container for all content.

(e.g.  When a game needs to change from one screen to the next, it simply attaches the corresponding scene to the Stage object of the JavaFX application.)

All components to be displayed inside a JavaFX application must be located inside a scene.

In our main() method's entry point, we launch the JavaFX application by simply passing in the command-line arguments to the Application.launch() method.

After the Application.launch() method has executed, the application will enter a ready state and the framework internals will invoke the start() method to begin.

At this point, the program execution occurs on the JavaFX application thread and not on the main thread. When the start() method is invoked, a JavaFX javafx.stage.Stage object is available for you to use and manipulate.

## Layout

BorderPane: Traditional frame-style layout with top, bottom, left, right, and center nodes.

HBox: Arrange a series of nodes in a single row.

VBox: Like HBox except nodes in column.

StackPane: Use to layer things on top of other panes.

GridPane: Flexible grid layout (rows/columns).

FlowPane: Nodes appear consecutively and wrap either in columns or rows.

TilePane: Nodes appear consecutively and wrap but within a grid format with same-sized cells.

AnchorPane: Like BorderPane but responsive. You can anchor nodes to top, bottom, left, right and center (of pane). If window is resized, the nodes maintain position per their anchor points.


## Resources:

[JavaFX Tutorial](http://tutorials.jenkov.com/javafx/your-first-javafx-application.html)

[Oracle Layout docs](https://docs.oracle.com/javafx/2/layout/builtin_layouts.htm)

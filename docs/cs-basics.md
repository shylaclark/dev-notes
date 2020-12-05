# CS Basics

## Data

Hierarchy
  Bit
  Character
  Field
  Record
  File

### Bits

Smallest data item.
Value is 0 or 1.
Short for "binary" digit.

Ways you can manipulate a bit's value: examining, setting, reversing

### Record

Group of related fields implemented as a class in Java.

Example record:

name | pay rate | job title

Anne | 25.00	| supervisor

### File

A group of related records.
(More generally, arbitrary data in arbitrary formats.)
Sometimes... simply a sequence of bytes.

### Field

Group of chars or bytes.
Name field, age field.

ASCII
-----

128 chars encoded into 7-bit binary integers.

## Hardware

### Memory Unit

Fast, low-capacity.
Volatile (aka lost at shutdown).
Main memory
RAM
Typically 8 GB on desktop computer
Stores data for quick access by the processor.
aka = RAM, memory, main memory, primary storage, main storage

### Arithmetic and Logic Unit

ALU
Performs calculations.
Compares two values (decision).
ALU usually implemented in the CPU.

### Central Processing Unit

CPU
Coordinates logical unit operations
aka "processor"
E.g. dual core processor = 2 CPUs

## Software

- method:  houses the program statements that actually perform its tasks

- class:  houses the set of methods that perform the class's tasks

- instantiation:  the process of building an object of a class

- object:  instance of a class; class methods can only be called on objects of that class

- method call:  tells a method of the object to run (perform tasks defined in method)

- encapsulation:  implementation details hidden within the object

- attributes:  object's defining characteristics; specified by instance variables of a class

- inheritance:  new class absorbs characteristics of pre-existing class; can customize; can add

- kernel:  software containing core components of the OS


### Java class libraries

aka Java APIs

Collection of existing classes and methods.


### JVM

Java Virtual Machine

App that simulates a computer.

Hides the underlying operating system and hardware from the programs that interact with it.

JVM's class loader takes .class files of program's byte codes and transfers them to main memory.


## Theorems

"Structured Programming Theorem" aka Bohm-Jacopini Theorem

Combine subprograms in only 3 specific ways -- control structures.

Control structures:
1. sequence
2. selection
3. iteration

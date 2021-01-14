# Module 4: Continuous Integration and Testing

> ## About
> * DevOps Continuous Delivery Architect
> * Date: April 27, 2020
> * Instructor: Pete O'Donnell
> * New Horizons course
> * Materials provided by DevOps Institute
> * Day 1

Continuous Integration
1. Make a change
1. Test code/run tests
  - Pass
  - Fail --> fix code

 Small changes, quick feedback

 Highest priority is to fix anything that breaks the app.
 CI Mainline model with distributed version control system.
 CI server triggers when change made to master.

 Test Driven Development
 - Design teset and develop app to pass the test

 CDA Test Tip
 - 2 bad answers and 2 ok answers.
 - Choose the answer that's most right.

Automated Build
- CLI script to run build and tests or ...
- Collection of build scripts that call one another

Containers
- Go from nothing to full dev environment in 30 mins
- Sandbox

Fail fast: run important tests early

Automatically revert changes that break CI processes.

Fast DB Test: pre-flight and CI functionality testing
Rigorous DB Test: used during staging and predeployment

Microservices
- Apps are composed of multiple autonomous bounded services which communicate through APIs
- Each service has its own storage and is supposed to be independent of other services.

DevOps Test Assessment
- Design
- Then assess
- Creation
- Integration
- Building  
- Binding
- Delivery
- Deployment

> Note: Between each stage, perform assessment

Test quickly enough to reduce bottlenecks.

Recommended integration tests:
1. Connection failures
1. Interactions between services
1. Dependencies between services
1. API contract
1. Aggregate performance

Continuous Testing Culture
I, T, TT
- I-shaped person is too specialized.
- T-shaped person is less specialized.
- TT-shaped

Five Tenets of Continuous Testing
1. Shift left
1. Fail early
1. Fail often
1. Test fast
1. Relevance

A/B Test Strategy
Blue-Green Test and Deployment Strategy
Chaos Monkey Test

# Module 2: Collaborative Culture

> ## About
> * DevOps Continuous Delivery Architect
> * Date: April 27, 2020
> * Instructor: Pete O'Donnell
> * New Horizons course
> * Materials provided by DevOps Institute
> * Day 1

Video: Crossing the CI/CD/DevOps Chasm (Miranda LeBlanc)

3 tiers of culture:
* Enterprise executive
* Cross functional teams
* Design microteams

Martin Fowler: Need culture to make DevOps work.

Some people are adamant that we should not have a DevOps team.
* It's a sort of silo.
* Example: Bob is the Docker expert. He handles it. This is a type of silo that can occur naturally over time. Want to avoid this.

Cultural Requirements
1. Collaboration
2. Affinity
3. Tooling
4. Scale

Melvin Conway: Design systems quote

Value Stream Map: steps from start to finish
* Highlight value-add activities
* Identify zero value-add activities
* Identify the bottlenecks

* Lean: learn as we go, give feedback, eliminate waste
* Agile: fast feedback cycles, involve customer early
* Site Reliability Engineering (SRE): slightly different, new, Google doing this

Quality assurance is important to DevOps.

Testing maturity is key indicator of DevOps maturity.

A CDA is a culturalist:
* Advocate
* Coach
* Active monitor

Embrace the Three Ways:  //what??
1. Flow: left to right
2. Feedback: short feedback loops (Agile), right to left
3. Continuous Experimentation and Learning:
  - Repetition
  - Experiment, take risks, and learn from failure

### Module 3: Design Practices for CD

[devops.com/design-devops-best-practices](devops.com/design-devops-best-practices)

Best practices prevent/mitigate developer stress.

Video:

* Continuous Delivery: can deploy to production (business choice)
* Continuous Deployment: do deploy to production

Automate
1. Build
2. Deploy
3. Test

Need solid configuration management: database schemas, deployment scripts, smaller changes, lower risk

Benefits of CM: less risk (can rapidly roll back)

#### 12-Factor App Design Practices
1. Codebase with version control
2. Dependencies are isolated and declared
3. Configuration is stored in the environment
4. Backing services treated as attached resources
5. Build, release, run stages are separate
5. Processes
6.
7.
8.
9.
10.
11.
12.

(Slide 72) and [12factor.net](12factor.net)

Feature Toggles (Config Flags) Best Practices (As simple as an if statement and a variable.)
Everyone commits to mainline every day.
Holly and Ryan have experience with toggles. Bad experience b/c toggles were nested.
No separate feature branches.
Put every feature behind feature toggle

Pre-Flight Testing Best Practices
- Static analysis
- Peer review (Crucible)
- Unit tests
- Functional tests
- Pre-flight tests performed in test environment equivalent to production environment

Design Pattern Library Best Practices
- Rough out designs
- Avoid duplication of effort
- Constistent behavior

Microservices
- A pattern for building loosley coupled distributed autonomous services.
- Consumed via API
- Independently developed/deployable.

Microserves Best Practices
- Automate all things
- Use VMs/containers
- One service per host
- Keep environments as close to production as possible

Microservices and Containers
- Containerization is a lightweight alternative to full machine virtualization.
- Fixes the "Works on my machine" problem.

#### Module 4: Continuous Integration and Testing

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

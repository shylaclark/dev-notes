# Module 6: Continuous Deployment

> ## About
> * DevOps Continuous Delivery Architect
> * Date: April 28, 2020
> * Instructor: Pete O'Donnell
> * New Horizons course
> * Materials provided by DevOps Institute
> * Day 2

Tests to validate:
1. Deploy and config environment
1. Environment smoke test
1. Deploy and config app
1. Deployment test

Mean Time Restore Service (MTRS): From failure until fully restored service and functionality.
> This is more important with CD.

Mean Time Between Failure (MTBF): From CI working until failure

Mean Time to Detect (MTTD): Time to detect failure when failure occurs

Mean Time to Repair (MTTR): Average time to fix; doesn't include restore/recovery

Blue Green Deployment
- Blue is active
- Green is passive

Dark launching uses a combo of:
- Feature toggles
- A/B testing
- Canary deployments

### Module 7: Infrastructure and the DevOps Toolchain

DevOps Toolchain
Categories of tools:
1. Code
1. Build
1. Test
1. Package
1. Release
1. Configure
1. Monitor

Build your pipeline toolchain gradually.

RESTful API
- Services as a network.
- Access and manipulate textual representatives (XML, HTML, JSON).

Source Code Management
Configuration management
Artifact repository: stores binary outcomes of the build process (e.g. Artifactory)

Immutable infrastructure
Deployment using containers
Auto scaling
Multicloud pipeline

### Module 8: Continuous Monitoring Measurement and Improvement

Visual Studio (VS TS) Remote

#### Continuous monitoring strategy

Dashboard items to display:
1. Current values
1. Trend graphs
1. Queue lengths
1. Priority
1. Owners

> Tip: Minimize alerts -- too many and people stop reading them.

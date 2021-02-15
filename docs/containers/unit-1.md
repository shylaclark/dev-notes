# Chapter 1
- Containers are to make things easier for developers.
  - Much lighter weight than virtual machines.
  - Don't need to wait for an administrator to provide the environment.
  - You can destroy the env when you're done.
  - Isolated environment for testing and developing.
- Docker got so popular that they started to support production deployments.
- For microservices on a standalone deployment server.
- Traditional system:
  - Deploying multiple apps on a single application server poses problems.
  - Containers run on a Linux machine.
  - Docker is supported on Linux and Windows.
  - Podman is alternative to Docker.
  - Kubernetes is moving away from Docker.
  - Containers can have more than one app, but the best practice is to have one app per container.
  - Each container has its own lightweight OS. They're independent, lightweight, and can be started/destroyed on the fly.
  - A heavyweight, monolithic application shouldn't be in a container. It should be in an application server.
  - Containers run on runtime environments:  Docker, Podman (Red Hat)
  - Docket daemon can be a single point of failure. Podman doesn't have a daemon.
  
## Containers
- "Registries" contain container images. Amazon, Red Hat, etc. have their own registries.
  - quay.io
  - redhat
  
### Advantages of using containers
1. Low hardware footprint
2. Environment isolation: Libraries required by the app are isolated in the container.
3. Quick deployment
4. Multiple environment deployment
  
## Kubernetes
- Kubernetes helps you manage container instances.
- Open source, unlike OpenShift



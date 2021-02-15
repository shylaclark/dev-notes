# Chapter 2: Creating Containerized Services

When I run the `lab-configure` command, I'm prompted for my new Quay.io username and my GitHub username. This configured our GitHub and Quay.io and OpenShift cluster.
Podman was preinstalled.

To install:
yum install podman 

To see all options for podman: `$ podman` + `Tab`

To get more info about container image: `$ podman inspect <image-id>`
This dislays info in yaml format.

To get the container id: `podman ps -a`

Questions:
1. Are images like templates? Yes, and they are required. Containers cannot be created without an image.
3. You have an image, and you can create a container.

podman run --name dev-mysql -e MYSQL_USER=redhad -e MYSQL_PASSWORD=r3dh4t rhmap47/mysql:5.5

podman images

podman ps -a 


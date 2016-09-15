# Ubuntu Quickstart
## Preparation
Prepare a fresh Ubuntu install for the Hyperledger Hackathon
Useful for reference only
__NOT intended to run as a shell script, please copy paste any of the commands below when needed__

### Packages
```
$ sudo apt-get update && sudo apt-get upgrade
$ sudo apt-get install vim htop golang apt-transport-https ca-certificates nodejs npm
```

### docker
[Digital Ocean Reference](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04)

```
$ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
$ sudo vim /etc/apt/sources.list.d/docker.list
$ echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
$ sudo apt-get update
$ apt-cache policy docker-engine
$ sudo apt-get install -y docker-engine
$ sudo systemctl status docker
$ sudo usermod -aG docker $(whoami)
$ exit # login again
$ docker run hello-world
```

### docker-compose
[Official Docker Reference](https://docs.docker.com/compose/install/)

```
$ sudo -i
# curl -L https://github.com/docker/compose/releases/download/1.8.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
# chmod +x /usr/local/bin/docker-compose
# exit
$ docker-compose --version
```

### Edit hostname
```
$ sudo vim /etc/hostname
$ sudo vim /etc/hosts
$ sudo service hostname restart
```

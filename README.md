# Hyperledger Hackathon
Dear hackers, welcome to the first Hyperledger Hackathon. Are you up for the challenge? Just 36 hours. Make it fast. Make it awesome.

This page helps you to get going. Before diving into the Hyperledger world, make sure you read:

[General Hackathon Information](docs/hackathon.md)

If you are new to blockchain technology or just want to refresh your brain's cache, you can start here:

[Blockchain Information](docs/blockchain.md)

## Hyperledger

### Linux Foundation
Hyperledger is a collaborative effort facilitated by the __Linux Foundation__ to advance blockchain technology. The project is sponsored by 12 premier and 63 general partners, ABN AMRO included. Several companies have contributed code as well: Intel, IBM, DAH, Blockstream and more. The goal is to create a single open source blockchain infrastructure on which everybody can build applications. To ensure proper creation of this technology, the Hyperledger project keeps track of proposed code through means of several incubators.

More:

* [Project lifecycles](https://github.com/hyperledger/hyperledger/wiki/Project-Lifecycle)
* [Hyperledger’s vision](https://docs.google.com/document/d/1Z4M_qwILLRehPbVRUsJ3OF8Iir-gqS-ZYe7W-LE9gnE/pub)

### Flavours
Currently the two blockchain technologies available to us from Hyperledger are __Fabric__ and __Sawtooth Lake__. ABN AMRO and IBM have more experience with Fabric, so most information provided will be on this technology. Feel absolutely free to try out Sawtooth Lake as well.

## Hyperledger Fabric

The biggest part of the Fabric codebase is contributed by IBM. This blockchain technology offers a modular architecture - every implementation is pluggable: membership services, consensus, and smart contracts (called: *chaincode*). To get a feeling of how Fabric works, read [NEED URL](URL HERE). If you prefer a straight deep dive into the protocol, read the [protocol specification](http://hyperledger-fabric.readthedocs.io/en/latest/protocol-spec/).

### Setup

Generally there are two ways to get a peer up and running.

#### 1. Local Setup

To get your first peer and membership service up, see [Getting Started](#getting-started). Use Option 2 on [this page](http://hyperledger-fabric.readthedocs.io/en/latest/Setup/Chaincode-setup/) in the Fabric Documentation as a reference.

For application and chaincode development you *don’t* need Vagrant.

#### 2. Bluemix
* [Getting Started](docs/bluemix.md)
* [Launch your first blockchain network](https://console.ng.bluemix.net/docs/services/blockchain/index.html?pos=2)

## Hyperledger Sawtooth Lake
* [Introduction](http://intelledger.github.io/introduction.html)
* [Tutorial](http://intelledger.github.io/tutorial.html)


## Getting Started
This project defines a starting point for a web app. It connects a simple NodeJS backend, and Angular2 frontend to a Hyperledger Fabric peer. Deploying chaincode etc.

### System Requirements
Operating Systems:
* macOS Yosemite 10.10.3 or higher
* Windows 10 or higher
* Ubuntu 14.04 or higher

Older operating systems might work. See [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

### Prerequisites
* docker
* docker-compose
* nodejs
* npm
* golang

To install these packages on Ubuntu 16.04, you can use [this example reference document](docs/ubuntu.md).

### Installation
From the project directory:
```
$ npm install
$ docker pull hyperledger/fabric-peer:latest
$ docker pull hyperledger/fabric-membersrvc:latest
```

### Usage
```
$ docker-compose up
```
In a new terminal:
```
$ nodejs app.js
```

### Next Steps
If everything is up and running and working correctly you should be able to see a response from the peer at:

[localhost:7050/chain](http://localhost:7050/chain)

and a reponse from your NodeJS backend at:

[localhost:3000](http://localhost:3000)

Your application can interact with the blockchain through an API, which is explained in the [NodeSDK Setup](http://hyperledger-fabric.readthedocs.io/en/latest/Setup/NodeSDK-setup/)

## License
MIT

# nuwa

> a dianping service platform for micro-plastic surgery.


## [Kick Off Keynote](https://github.com/arrking/nuwa-docs/blob/master/keynotes/nuwa_kick_off.pdf)

## Persona

* Alice - Platform Administrator 

Who takes responsibilities for quality of the whole system. Use the management console to filter topics, block user and publish messages.

Requirements: 

1) Have basic knowledge of micro-plastic surgery.
2) Take cautious attitude of people's privacy.
3) Provide feedbacks for the DevOps Team about system functions.

* Cindy - Consumer

Who needs to get micro-plastic surgery service, she want a trustable platform to get knowledge, suggestions and service itself.

People who fall into this category:

(1) The generation after 90s and 80s 
(2) Young married woman
(3) Social worker in bar, nightclub and actors.
(4) People who get involved by friends that takes micro-plastic surgery.

* Duck - Doctor / Expert 

Who works as a micro-plastic doctor, he should be good at some micro-plastic projects.

Requirement:

(1) Certificated materials (2) History with surgeries (3) Have time to answer questions.


## User Cases

### Cindy

![image](https://cloud.githubusercontent.com/assets/3538629/7954719/af9fcc80-0a04-11e5-80b8-669f2bb8562c.png)

### Duck

![image](https://cloud.githubusercontent.com/assets/3538629/7954803/4f4efef4-0a05-11e5-9347-c6ccf32a5d54.png)


## Implementation

![image](https://github.com/arrking/nuwa-docs/blob/master/omnigraffle/app-implementations.png)

## [Documentation](https://github.com/arrking/nuwa-docs)

## Engineering
### Learnings

#### JavaScript
[JavaScript: the good parts](http://git.oschina.net/ubiware/tech-books/blob/master/javascript-the-good-parts-en-US.pdf)
#### NodeJS
[NodeJS in Action](http://git.oschina.net/ubiware/tech-books/blob/master/nodejs-in-action.pdf)
#### [NodeClub](https://github.com/arrking/wildfire/blob/master/nodeclub.README.md)
[github](https://github.com/cnodejs/nodeclub)
[community](https://cnodejs.org/)
[从开源社区继承的commit 起始点 b03495b](https://github.com/arrking/wildfire/releases/tag/c1)
#### Ionic
[Get started](http://ionicframework.com/getting-started/)
#### Wechat
[开发者文档](http://mp.weixin.qq.com/wiki/home/index.html)

### Installations
#### Node
```
git clone git@github.com:arrking/node.git
cd node 
git checkout v0.11.16
./configure 
make && sudo make install
```
Verify version of node and nom
```
npm -v # 2.3.0
node -v # v0.11.16
```

#### pm2
```
sudo npm install pm2@0.12.10 -g
```

#### MongoDB db version v2.6.5

#### Redis server v=2.8.17

#### Cordova 3.6.3-0.2.13, ionic v1.3.19, bower 1.4.1



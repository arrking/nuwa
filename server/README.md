# NUWA Server

## Start as development locally

```
cd nuwa/server
npm install
cp config.default.js config.js # customize in your options, dbUrl etc.
node nuwa-server.js
```

## Start from staging machine on MUSA

```
cd nuwa/server
npm install
cp config.staging.js config.js # take care with the db ..
node nuwa-server.js # or pm2 start nuwa-server.js
```
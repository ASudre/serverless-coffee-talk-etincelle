# Serverless Formation

## Development
- Run:
```
yarn
yarn start
```

## Deploy to production (careful, the local environment is sent to production not the pushed code)
- Configure your aws credentials with the profile `perso`
- Run:
```
yarn deploy
```

## (Re-)Create infrastructure
- Install serverless from https://serverless.com/
- Configure your aws credentials with the profile `perso`
- Run:
```
yarn sls
```
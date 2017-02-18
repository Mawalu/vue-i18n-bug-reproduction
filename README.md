# Reproduce steps

1. `nvm use v6.9.5`
2. `yarn`
3. `./node_modules/.bin/webpack-dev-server --port=8080 --inline --hot`
4. visit `http://localhost:8080` and check the console output, you can see something like 

```
from vue file undefined
from js file function (key) {...}
```
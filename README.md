# xm-username-generator
Ein kleines Projekt für die Klasse D02-1

A random username generator, made out of one random adjective, one random noun and a random number.

This application has zero dependencies.

## Installation

copy the '/src' folder into your application.

## Usage

import the username generator like this:

```js
const usernameGenerator = require('./src/index.js');
```

and creat a random username with this command:
```js
const username = usernameGenerator.createUserName(50000);
```

The generated username will look something like this:
- RoughSnowflake27945
- HeroicUnicorn31721
- BlackFire39945

## License
Copyright (c) 2021 Mustapha Ibrahim. License under ther terms of the MIT license. https://mustapha-ibrahim.mit-license.org/


# Base64js  [![Build Status](https://travis-ci.org/onehealth/base64js.png?branch=master)](https://travis-ci.org/onehealth/base64js) 

This implementation of base64 leverages the y64 web-safe adjustments.

## Installation

Node

`npm install onehealth/base64js --save`

Browser

`bower install onehealth/base64js --save`


## Getting Started

This is a plugin built for Encoding/Decoding Strings to be Base64 Compliant in a Web Safe Manner


```

var base64 = require('base64js');

//Encoding Foo to be Base64 Compliant
base64.encode("foo"); // 'Zm9v'

//Decoding Base64 to String
base64.decode("Zm9v"); // 'foo'

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using grunt.

## Release History


- 0.1.2 Updated UMD Definition to include exports
- 0.1.1 Updated Build Dependencies
- 0.1.0 Initial release

## License

Copyright (c) 2012 OneHealth Solutions, Inc
Licensed under the Apache 2.0 license.

## Author

Chris Miller

isccnumber
==========
**(c)[David Walsh][1] [MIT-license](#license), edited by [Bumblehead][0]

### OVERVIEW:

This is an edited version of a script created by [David Walsh][2]. David gives me permission publish this with my own changes -visit David's [web site][1].

```javascript
isccnumber.visa.test(4222222222222); // true
isccnumber.is(4111111111111111) // 'visa'
```

The following cards are supported:

 * **mastercard**
 * **eurocard**
 * **visa**
 * **amex**
 * **diners**
 * **discover**
 * **jcb**
 * **magna**
 

Validation is for complete card numbers. Numbers passing the regular expressions are *probably* valid not always.

[http://en.wikipedia.org/wiki/Bank_card_number][3]  
[http://www.websters-online-dictionary.org][4]


[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://davidwalsh.name/                             "david walsh"
[2]: http://davidwalsh.name/validate-credit-cards   "walsh validation"
[3]: http://en.wikipedia.org/wiki/Bank_card_number         "wikipedia"
[4]: http://www.websters-online-dictionary.org/definitions/BANK+IDENTIFICATION+NUMBER?cx=partner-pub-0939450753529744%3Av0qd01-tdlq&cof=FORID%3A9&ie=UTF-8&q=BANK+IDENTIFICATION+NUMBER&sa=Search#906

-------------------------------------------------------
#### <a id="install"></a>Install:

isccnumber may be downloaded directly or installed through `npm`.

 * **npm**

 ```bash
 $ npm install isccnumber
 ```

 * **Direct Download**
 
 ```bash
 $ git clone https://github.com/iambumblehead/isccnumber.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------
#### <a id="license">License:

![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2014 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

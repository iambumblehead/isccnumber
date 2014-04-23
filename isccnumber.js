// Filename: ValidateCCNumber.js  
// Timestamp: 2014.04.22-21:18:58 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: isluhn.js
//
// http://en.wikipedia.org/wiki/Bank_card_number
// http://www.websters-online-dictionary.org/definitions/BANK+IDENTIFICATION+NUMBER?cx=partner-pub-0939450753529744%3Av0qd01-tdlq&cof=FORID%3A9&ie=UTF-8&q=BANK+IDENTIFICATION+NUMBER&sa=Search#906
//
// there are many potential variations on card numbers and so
// making an airtight validation scheme with regular expressions
// may not be possible.
// 
// card numbers passing these regular expressions are *probably* 
// valid not always.
//
// implementation borrows heavily from david walsh, who gave his
// permission to borrow and publish this module:
// http://davidwalsh.name/validate-credit-cards
// 
// it also uses some expressions from MIT-licensed 'creditcard'
// https://github.com/observing/creditcard

var isluhn = require('isluhn');

var isccnumber = ((typeof module === 'object') ? module : {}).exports = (function (iscc) {  

  iscc = Object.create({
    getAsLuhnValidatedNum : function (num) {
      return !isNaN(num = parseInt(num, 10)) && isluhn(num) && num;
    },

    is : function (num) {
      if ((num = this.getAsLuhnValidatedNum(num))) {
        for (var o in this) {
          if (this.hasOwnProperty(o)) {
            if (this[o].test(num)) {
              return o;
            }
          }
        }
      }
    }
  });

  iscc.mastercard = /5[1-5][0-9]{14}/;
  iscc.eurocard   = /5[1-5][0-9]{14}/;
  iscc.visa       = /4(?:[0-9]{12}|[0-9]{15})/;
  iscc.amex       = /3[47][0-9]{13}/;
  iscc.diners     = /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/;
  iscc.discover   = /6011[0-9]{12}/;
  iscc.jcb        = /(?:3[0-9]{15}|(2131|1800)[0-9]{11})/;
  iscc.magna      = /560359[0-9]{6}|567139[0-9]{6}|567229[0-9]{6}|568009[0-9]{6}/;

  return iscc;

}());

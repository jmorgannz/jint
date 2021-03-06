/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-182.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' is available String values that convert to numbers (15.4.5.1 step 4.a)
 */


function testcase() {

        var arrObj = [];

        Object.defineProperty(arrObj, "0", {
            value: 12
        });

        return arrObj[0] === 12;
    }
runTestCase(testcase);

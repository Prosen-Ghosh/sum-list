const sum = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]'){
            return new TypeError('sum() expects an array parameter');
        }
        return arr.reduce((s,cur) => typeof cur === 'number' ? s + cur : s,0);
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = sum;
}
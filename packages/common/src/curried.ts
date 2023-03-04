/**
 * 柯里化
 */

export  function  curried<Func extends Function>(fn: Func) {

    return function curry(...args1: any[]) {
        if (args1.length >= fn.length) {
            return fn.call(null, ...args1)
        } else {
            return function (...args2: any[]) {
                return curry.apply(null, [...args1, ...args2])
            }
        }
    } 
}



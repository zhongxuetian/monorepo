/**
 * 柯里化
 */
function curried(fn) {
    return function curry(...args1) {
        if (args1.length >= fn.length) {
            return fn.call(null, ...args1);
        }
        else {
            return function (...args2) {
                return curry.apply(null, [...args1, ...args2]);
            };
        }
    };
}

export { curried };

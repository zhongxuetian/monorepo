/**
 * 柯里化
 */
export declare function curried<Func extends Function>(fn: Func): (...args1: any[]) => any;

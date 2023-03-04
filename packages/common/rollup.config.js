import typescript from 'rollup-plugin-typescript2';


// const outputConfigs = {
//     // each file name has the format: `dist/${name}.${format}.${ext}`
//     // format being a key of this object
//     mjs: {
//       file: 'dist/vue-router.mjs',
//       format: `es`,
//     },
//     cjs: {
//       file: 'dist/vue-router.cjs',
//       format: `cjs`,
//     },
//     global: {
//       file: 'dist/vue-router.global.js',
//       format: `iife`,
//     },
//     browser: {
//       file: 'dist/vue-router.esm-browser.js',
//       format: `es`,
//     },
// }

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/common.mjs',
            format: 'es',
            // name: 'bundle'
        },
        plugins:[typescript()]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/common.cjs',
            format: 'cjs',
            // name: 'bundle' 
           
        },
        plugins:[typescript()]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/common.global.js',
            format: 'iife',
            name: 'tianCommon'
        },
        plugins:[typescript()]
    }
];
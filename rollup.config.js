import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'ce-events-data'            
        },
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            name: 'ce-events-data'            
        }
    ],  
    external: [
        "@codeffekt/ce-core-data"
    ],  
    plugins: [
        typescript({ tsconfig: './tsconfig.json'}),
        nodeResolve()
    ]
}
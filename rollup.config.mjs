import nodePolyfills from 'rollup-plugin-polyfill-node';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert {type: "json"};

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            nodePolyfills(),
            nodeResolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss()
        ],
        external: ["react", "react-dom", "moment", "lodash", "react-virtualized", "@types/react-virtualized", 'react-indiana-drag-scroll@^3.0.3-alpha', "react-animate-height", "react-rnd"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.css$/, /\.scss$/],
    },
];
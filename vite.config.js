import path, {resolve} from 'node:path'
import { defineConfig } from 'vite'
import * as glob from 'glob'
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'
import {ViteMinifyPlugin} from 'vite-plugin-minify'
import { getPageContext } from './data/index'

const obtenerEntradas = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync(
                './**/*.html',
                {
                    ignore: [
                        './dist/**',
                        './node_modules/**'
                    ]
                }
            ).map(
                fileData => [
                    fileData.slice(0, fileData.length - path.extname(fileData).length),
                    resolve(__dirname, fileData)
                ]
            )
        ]
    );
}


export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL || '/Proyecto_ODS_orthodentalsantacreo/',
    build: {
        rollupOptions: {
            input: obtenerEntradas()
        },
        minify: true
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context : getPageContext
        }),
        htmlPurge({}),
        ViteMinifyPlugin()
    ]
});


import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'

const {
    configs: { recommended },
} = js

export default defineConfig([
    recommended,

    {
        ignores: ['node_modules/**'],

        files: ['**/*.{js,mjs,cjs}'],

        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: globals.browser,
        },

        rules: {
            semi: ['error', 'always'],

            quotes: ['error', 'single'],
        },
    },
])

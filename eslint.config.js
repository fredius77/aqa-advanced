// eslint.config.js
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'

// Берём рекомендованные правила из @eslint/js
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

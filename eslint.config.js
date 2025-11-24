import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import unicorn from 'eslint-plugin-unicorn'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
    js.configs.recommended,
    ...vue.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            unicorn,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-undef': 'off',
            'no-console': 'warn',
            'quotes': ['error', 'single', { avoidEscape: true }],
            'indent': ['error', 4, { SwitchCase: 1 }],
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase',
                    ignore: [/^[A-Z]/, /\.config\.(js|ts|mjs|cjs)$/, /layouts\/.*\.vue$/],
                },
            ],
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: typescriptParser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            unicorn,
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'warn',
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 1,
                    },
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/first-attribute-linebreak': [
                'error',
                {
                    singleline: 'ignore',
                    multiline: 'below',
                },
            ],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'indent': ['error', 4, { SwitchCase: 1 }],
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-undef': 'off',
            'no-console': 'warn',
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase',
                    ignore: [/^[A-Z]/, /\.config\.(js|ts|mjs|cjs)$/, /layouts\/.*\.vue$/],
                },
            ],
        },
    },
    {
        ignores: [
            '.nuxt/**',
            'dist/**',
            'node_modules/**',
            '.output/**',
            'public/**',
        ],
    },
]


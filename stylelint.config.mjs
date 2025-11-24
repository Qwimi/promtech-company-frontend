export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue',
    ],
    customSyntax: 'postcss-html',
    ignoreFiles: [
        '**/node_modules/**',
        '**/.nuxt/**',
        '**/dist/**',
        '**/.output/**',
    ],
}


export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue',
    ],
    customSyntax: 'postcss-html',
    rules: {
        'selector-class-pattern': [
            '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
            {
                message: 'Именование классов должно соответсвовать методолигии БЭМ (блок__элемент--модификатор) или kebab-case',
            },
        ],
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'media-query-no-invalid': null,
        'declaration-property-value-no-unknown': null,
        'property-no-deprecated': null,
        'scss/operator-no-unspaced': null,
    },
    ignoreFiles: [
        '**/node_modules/**',
        '**/.nuxt/**',
        '**/dist/**',
        '**/.output/**',
    ],
}


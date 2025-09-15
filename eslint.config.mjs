import node from '@moonjeseon/eslint-config/node'
import typescript from '@moonjeseon/eslint-config/typescript'

export default [
    {
        ignores: ['**/dist/**'],
    },
    ...node,
    ...typescript,
    {
        rules: {
            'unicorn/prefer-module': 'off',
            'unicorn/prevent-abbreviations': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            'sonarjs/no-nested-conditional': 'off',
        },
    },
]

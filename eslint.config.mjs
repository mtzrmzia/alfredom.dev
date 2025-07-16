import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.{js,ts,vue}'],
  ignores: [
    'node_modules',
    '.output',
    '.nuxt',
    'dist',
    '*.log',
    '.env',
    '.git',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
  },
});

const storybook = require('@storybook/vue/standalone')

storybook({
  mode: 'dev',
  port: 3000,
  ci: true,
  staticDir: [ './static' ],
  configDir: '.storybook'
})

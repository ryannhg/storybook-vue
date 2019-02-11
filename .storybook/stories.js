import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withFigma } from './addons/figma'
import centered from '@storybook/addon-centered/vue'

// Global import CSS
import '../static/main.css'

// Import JS
import Vue from 'vue'
import plugin from '../static/bundle'
Vue.config.devtools = true
Vue.use(plugin)

// Autoimport from directories
var contexts = {
  Components: require.context("../components", true, /\.vue$/),
  Layouts: require.context("../layouts", true, /\.vue$/),
  Pages: require.context("../pages", true, /\.vue$/),
}
const prettify = (pascalCase) =>
  pascalCase.split('')
    .map(char => char.toUpperCase() === char
      ? ' ' + char
      : char
    )
    .join('')
    .trim()
Object.keys(contexts).forEach(section =>
  contexts[section].keys().forEach(key => {
    const component = contexts[section](key).default
    const name =
      prettify(key.slice('./'.length, key.length - ('.vue'.length)))
    const options = component.storybook || {}
    const story = storiesOf(`${section}|${name}`, module)
    if (options.centered) {
      story.addDecorator(centered)
    }
    if (options.knobs !== false) {
      story.addDecorator(withKnobs)
    }
    if (options.figma !== false) {
      story.addDecorator(withFigma)
    }
    story.add(name, _ => component, { notes: options.notes, figma: options.figma })
  })
)

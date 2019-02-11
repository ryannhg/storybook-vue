<template>
  <button class="button">
    {{label}}
  </button>
</template>

<script>
import { text } from '@storybook/addon-knobs'

export default {
  props: {
    label: {
      type: String,
      default: _ => text('Label', 'Click me')
    }
  },
  storybook: {
    centered: true,
    figma: 'https://www.figma.com/file/Ltv4Ku2uwI308h3kRM0hF6DT/Storybook?node-id=1%3A2',
    notes: {
      markdown: `
# Button
> a thing you click. with your hands
`
    }
  }
}
</script>


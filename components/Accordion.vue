<template>
  <div is="accordion" :sections="sections" inline-template>
    <section>
      <h3>Accordions</h3>
      <div>
        <div v-for="(section, i) in sections" :key="section.label">
          <button v-text="section.label" @click="toggle(i)"></button>
          <div v-if="isExpanded(i)" v-html="section.content"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  storybook: {
    centered: true
  },
  props: {
    sections: {
      type: Array,
      default: _ => [
        { label: 'Hello', content: 'Hi, there.' },
        { label: 'Goodbye', content: 'See ya!' },
        { label: 'What', content: 'idk...' }
      ]
    }
  }
}
</script>

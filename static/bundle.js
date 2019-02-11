module.exports = {
  install (Vue) {
    Vue.component('Accordion', {
      props: {
        sections: Array
      },
      data: _ => ({
        index: undefined
      }),
      methods: {
        isExpanded (i) {
          return this.index === i
        },
        toggle (i) {
          this.index = this.isExpanded(i)
            ? undefined
            : i
        }
      }
    })
  }
}

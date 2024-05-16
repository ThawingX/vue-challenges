import { defineComponent, h } from "vue"

export default defineComponent({
  name: 'MyButton',
  render() {
    return h('button', {
      ...this.$attr,
      onClick: () => {
        this.$emit('custom-click')
      }
    },
      this.$slots
    )
  }
})
export default {
  template: '<div :class="class"><slot>Default</slot></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} button` : "ui button"
    },
  },
}

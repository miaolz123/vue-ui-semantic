export default {
  template: '<div :class="class"><slot></slot></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} buttons` : "ui buttons"
    },
  },
}

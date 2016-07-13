export default {
  template: '<a :class="class"><slot></slot></a>',
  props: {
    css: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} label` : "ui label"
    },
  },
}

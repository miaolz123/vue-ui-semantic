export default {
  template: '<a :class="className"><slot></slot></a>',
  props: {
    class: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} label` : "ui label"
    },
  },
}

export default {
  template: '<div :class="className"><slot></slot></div>',
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
      return this.class ? this.class : this.css ? (this.css === 'right' ? `right menu` : `ui ${this.css} menu`) : "ui menu"
    },
  },
}

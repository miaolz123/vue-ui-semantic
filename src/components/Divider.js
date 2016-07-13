export default {
  template: '<div :class="class"></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} divider` : "ui divider"
    },
  },
}

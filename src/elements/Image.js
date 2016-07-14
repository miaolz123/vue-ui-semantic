export default {
  template: '<img :class="className" :src="src">',
  props: {
    class: {
      type: String,
      default: '',
    },
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
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} image` : "ui image"
    },
  },
}

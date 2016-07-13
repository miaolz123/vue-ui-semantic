export default {
  template: '<img :class="class" :src="src"><slot></slot>',
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
      return this.css ? `ui ${this.css} image` : "ui image"
    },
  },
}

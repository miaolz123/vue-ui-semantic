export default {
  template: '<img :class="className" :src="src">',
  props: {
    type: {
      type: String,
      default: '',
    },
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
  ready() {
    if (this.type && this.type !== 'img') {
      const newNode = document.createElement(this.type)
      if (this.$el.id) newNode.id = this.$el.id
      newNode.className = this.$el.className
      newNode.innerHTML = `<img src="${this.src}">`
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  },
}

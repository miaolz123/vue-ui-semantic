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
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = `<img src="${this.src}">`
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  },
}

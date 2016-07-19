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
      return this.class ? this.class : this.css ? `ui ${this.css} table` : "ui table"
    },
  },
  ready() {
    const newNode = document.createElement('table')
    for (let i = 0; i < this.$el.attributes.length; i++) {
      newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
    }
    newNode.innerHTML = this.$el.innerHTML
    this.$el.parentNode.replaceChild(newNode, this.$el)
  },
}

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
    if (this.$el.id) newNode.id = this.$el.id
    newNode.className = this.$el.className
    newNode.innerHTML = this.$el.innerHTML
    this.$el.parentNode.replaceChild(newNode, this.$el)
  },
}

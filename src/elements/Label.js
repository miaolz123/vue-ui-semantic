export default {
  template: '<a :class="className"><slot></slot></a>',
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
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} label` : "ui label"
    },
  },
  ready() {
    if (this.type) {
      const newNode = document.createElement(this.type)
      if (this.$el.id) newNode.id = this.$el.id
      if (this.type !== 'a') {
        newNode.className = this.class ? this.class : this.css ? `${this.css} label` : "label"
      } else newNode.className = this.$el.className
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  },
}

export default {
  template: '<div :class="className"><slot></slot></div>',
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
    setting: {
      type: Object,
    },
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} dropdown` : "ui dropdown"
    },
  },
  ready() {
    if (this.type) {
      const newNode = document.createElement(this.type)
      if (this.$el.id) newNode.id = this.$el.id
      newNode.className = this.$el.className
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
    $(this.$el).dropdown(this.setting)
  },
}

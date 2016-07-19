export const Header = {
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
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
  ready() {
    if (this.type) {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  },
}

export const SubHeader = {
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
      return this.class ? this.class : this.css ? `sub ${this.css} header` : "sub header"
    },
  },
}

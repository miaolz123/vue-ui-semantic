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
      return this.class ? this.class : this.css ? `ui ${this.css} dimmer` : "ui dimmer"
    },
  },
  methods: {
    show() {
      $(this.$el).dimmer('show')
    },
    hide() {
      $(this.$el).dimmer('hide')
    },
  },
}

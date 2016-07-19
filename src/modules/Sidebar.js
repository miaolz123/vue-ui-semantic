export const Sidebar = {
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
      return this.class ? this.class : this.css ? `ui ${this.css} sidebar` : "ui sidebar"
    },
  },
  methods: {
    show() {
      $(this.$el).sidebar('show')
    },
    hide() {
      $(this.$el).sidebar('hide')
    },
    toggle() {
      $(this.$el).sidebar('toggle')
    },
  },
}

export const Pusher = {
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
      return this.class ? this.class : this.css ? `${this.css} pusher` : "pusher"
    },
  },
}

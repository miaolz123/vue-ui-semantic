export default {
  template: '<div :class="className" :data-rating="value" :data-max-rating="max"><slot></slot></div>',
  props: {
    class: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    },
    value: {
      default: 0,
    },
    max: {
      default: 5,
    },
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} rating` : "ui rating"
    },
  },
  ready() {
    $(this.$el).rating()
  },
}

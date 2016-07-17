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
    value: 0,
    max: 5,
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} rating` : "ui rating"
    },
  },
  ready() {
    $(this.$el).rating()
  }
}

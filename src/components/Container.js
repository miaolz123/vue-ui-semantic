export default {
  template: '<div class="ui {{css}} container"><slot></slot></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
}

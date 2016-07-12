export default {
  template: '<div class="ui {{css}} buttons"><slot></slot></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
}

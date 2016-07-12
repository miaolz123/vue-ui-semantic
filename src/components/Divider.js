export default {
  template: '<div class="ui {{css}} divider"></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
}

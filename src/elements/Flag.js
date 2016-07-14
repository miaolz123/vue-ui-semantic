export default {
  template: '<i class="{{css}} flag"></i>',
  props: {
    css: {
      type: String,
      default: 'cn',
    },
  },
}

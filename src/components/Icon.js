export default {
  template: '<i class="{{css}} icon"></i><slot></slot>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
}

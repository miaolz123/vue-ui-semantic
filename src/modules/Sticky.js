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
    pushing: {
      default: false,
    },
    jitter: {
      default: 5,
    },
    observeChanges: {
      default: false,
    },
    context: {
      default: false,
    },
    scrollContext: {
      default: window,
    },
    offset: {
      default: 0,
    },
    bottomOffset: {
      default: 0,
    },
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} sticky` : "ui sticky"
    },
  },
  methods: {
    refresh() {
      $(this.$el).sticky('refresh')
    },
  },
  ready() {
    $(this.$el).sticky({
      pushing: this.pushing,
      jitter: this.jitter,
      observeChanges: this.observeChanges,
      context: this.context,
      scrollContext: this.scrollContext,
      offset: this.offset,
      bottomOffset: this.bottomOffset,
    })
  },
}

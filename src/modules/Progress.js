export const Progress = {
  template: '<div :class="className" :data-percent="value"><slot></slot></div>',
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
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `ui ${this.css} progress` : "ui progress"
    },
  },
  ready() {
    $(this.$el).progress()
  }
}

export const Bar = {
  template: '<div :class="className"></div>',
  props: {
    class: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    },
    percent: '',
  },
  computed: {
    className: function () {
      return this.class ? this.class : this.css ? `${this.css} bar` : "bar"
    },
  },
  ready() {
    if (this.percent) {
      this.$el.innerHTML = '<div class="progress"></div>'
    }
  },
}

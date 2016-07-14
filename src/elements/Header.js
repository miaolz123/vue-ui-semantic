export const H1 = {
  template: '<h1 :class="className"><slot></slot></h1>',
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
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H2 = {
  template: '<h2 :class="className"><slot></slot></h2>',
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
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H3 = {
  template: '<h3 :class="className"><slot></slot></h3>',
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
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H4 = {
  template: '<h4 :class="className"><slot></slot></h4>',
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
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H5 = {
  template: '<h5 :class="className"><slot></slot></h5>',
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
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H6 = {
  template: '<h6 :class="className"><slot></slot></h6>',
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
      return this.class ? this.class : this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const SubHeader = {
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
      return this.class ? this.class : this.css ? `sub ${this.css} header` : "sub header"
    },
  },
}

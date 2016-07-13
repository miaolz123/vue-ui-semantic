export const H1 = {
  template: '<h1 :class="class"><slot></slot></h1>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H2 = {
  template: '<h2 :class="class"><slot></slot></h2>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H3 = {
  template: '<h3 :class="class"><slot></slot></h3>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H4 = {
  template: '<h4 :class="class"><slot></slot></h4>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H5 = {
  template: '<h5 :class="class"><slot></slot></h5>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const H6 = {
  template: '<h6 :class="class"><slot></slot></h6>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `ui ${this.css} header` : "ui header"
    },
  },
}

export const SubHeader = {
  template: '<div :class="class"><slot></slot></div>',
  props: {
    css: {
      type: String,
      default: '',
    },
  },
  computed: {
    class: function () {
      return this.css ? `sub ${this.css} header` : "sub header"
    },
  },
}

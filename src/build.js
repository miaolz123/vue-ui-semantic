import Ui from './VueUiSemantic'

export function install(Vue) {
  // util
  Vue.component('ui-content', Ui.Content)
  Vue.component('ui-description', Ui.Description)
  Vue.component('ui-item', Ui.Item)
  Vue.component('ui-title', Ui.Title)
  // elements
  Vue.component('ui-button', Ui.Button)
  Vue.component('ui-buttons', Ui.Buttons)
  Vue.component('ui-container', Ui.Container)
  Vue.component('ui-divider', Ui.Divider)
  Vue.component('ui-flag', Ui.Flag)
  Vue.component('ui-h1', Ui.H1)
  Vue.component('ui-h2', Ui.H2)
  Vue.component('ui-h3', Ui.H3)
  Vue.component('ui-h4', Ui.H4)
  Vue.component('ui-h5', Ui.H5)
  Vue.component('ui-h6', Ui.H6)
  Vue.component('ui-sub-header', Ui.SubHeader)
  Vue.component('ui-icon', Ui.Icon)
  Vue.component('ui-image', Ui.Image)
  Vue.component('ui-input', Ui.Input)
  Vue.component('ui-label', Ui.Label)
  Vue.component('ui-list', Ui.List)
  Vue.component('ui-loader', Ui.Loader)
  Vue.component('ui-rail', Ui.Rail)
  Vue.component('ui-reveal', Ui.Reveal)
  Vue.component('ui-segment', Ui.Segment)
  Vue.component('ui-step', Ui.Step)
  Vue.component('ui-steps', Ui.Steps)
}

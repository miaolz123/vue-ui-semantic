import VueSemanticUiComponent from './VueUiSemantic'

export function install(Vue) {
  Vue.component('ui-button', VueSemanticUiComponent.UiButton)
  Vue.component('ui-buttons', VueSemanticUiComponent.UiButtons)
  Vue.component('ui-container', VueSemanticUiComponent.UiContainer)
  Vue.component('ui-divider', VueSemanticUiComponent.UiDivider)
  Vue.component('ui-flag', VueSemanticUiComponent.UiFlag)
  Vue.component('ui-h1', VueSemanticUiComponent.UiH1)
  Vue.component('ui-h2', VueSemanticUiComponent.UiH2)
  Vue.component('ui-h3', VueSemanticUiComponent.UiH3)
  Vue.component('ui-h4', VueSemanticUiComponent.UiH4)
  Vue.component('ui-h5', VueSemanticUiComponent.UiH5)
  Vue.component('ui-h6', VueSemanticUiComponent.UiH6)
  Vue.component('ui-sub-header', VueSemanticUiComponent.UiSubHeader)
  Vue.component('ui-icon', VueSemanticUiComponent.UiIcon)
  Vue.component('ui-image', VueSemanticUiComponent.UiImage)
  Vue.component('ui-input', VueSemanticUiComponent.UiInput)
  Vue.component('ui-label', VueSemanticUiComponent.UiLabel)
}

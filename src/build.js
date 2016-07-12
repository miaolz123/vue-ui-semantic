import VueSemanticUiComponent from './VueSemanticUi'

export function install(Vue) {
  Vue.component('ui-button', VueSemanticUiComponent.UiButton)
  Vue.component('ui-buttons', VueSemanticUiComponent.UiButtons)
  Vue.component('ui-container', VueSemanticUiComponent.UiContainer)
  Vue.component('ui-divider', VueSemanticUiComponent.UiDivider)
  Vue.component('ui-flag', VueSemanticUiComponent.UiFlag)
  Vue.component('ui-icon', VueSemanticUiComponent.UiIcon)
}

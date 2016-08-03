<template>
  <ui-sidebar v-ref:my_sidebar css="inverted vertical menu">
    <a class="item" v-link="{ path: '/' }">
      <b>Home</b>
    </a>
    <ui-item>
      <ui-header class="header">Elements</ui-header>
      <ui-menu class="menu">
        <a class="item" v-link="{ path: '/elements/button' }">Button</a>
      </ui-menu>
    </ui-item>
  </ui-sidebar>
  <ui-pusher>
    <router-view></router-view>
  </ui-pusher>
</template>

<script>
export default {
  replace: false,
  events: {
    onSidebar() {
      this.$refs.my_sidebar.toggle();
    },
  },
};
</script>

<template>
  <ui-sidebar v-ref:my_sidebar css="inverted vertical menu">
    <ui-item type="a" href="#">1</ui-item>
    <ui-item type="a" href="#">2</ui-item>
    <ui-item type="a" href="#">3</ui-item>
  </ui-sidebar>
  <ui-pusher>
    <ui-menu css="top fixed">
      <ui-container>
        <a class="item" @click="onSidebar()">
          <ui-icon css="large content"></ui-icon>
        </a>
        <a class="item" v-link="{ path: '/' }">
          <ui-icon css="large home"></ui-icon>
        </a>
      </ui-container>
    </ui-menu>
    <br>
    <br>
    <br>
    <ui-container>
      <router-view></router-view>
    </ui-container>
  </ui-pusher>
</template>

<script>
export default {
  replace: false,
  methods: {
    onSidebar() {
      this.$refs.my_sidebar.toggle();
    },
  },
};
</script>

<template>
  <ui-menu css="top fixed">
    <ui-container>
      <a class="item" @click="onSidebar()">
        <ui-icon css="large content"></ui-icon>
      </a>
      <a v-for="item in items" class="item" href="{{item}}">{{ $key }}</a>
    </ui-container>
  </ui-menu>
  <br>
  <br>
  <br>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
    },
  },
  methods: {
    onSidebar() {
      this.$dispatch('onSidebar');
    },
  },
};
</script>
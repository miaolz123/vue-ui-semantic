<template>
<div class="ui top attached tabular menu">
  <a class="item" data-tab="first">First</a>
  <a class="item" data-tab="second">Second</a>
  <a class="item active" data-tab="third">Third</a>
</div>
<div class="ui bottom attached tab segment" data-tab="first">
  First
</div>
<div class="ui bottom attached tab segment" data-tab="second">
  Second
</div>
<div class="ui bottom attached tab segment active" data-tab="third">
  Third
</div>
</template>

<script>
export default {
  ready() {
    $('.menu .item').tab();
  },
};
</script>

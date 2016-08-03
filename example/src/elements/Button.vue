<template>
  <menu></menu>
  <ui-container>
    <div class="ui top attached tabular menu">
      <a class="active item" data-tab="example">First</a>
      <a class="item" data-tab="code">Second</a>
    </div>
    <div class="ui bottom attached active tab segment" data-tab="example">
      <ui-button>Button</ui-button>
    </div>
    <div class="ui bottom attached tab segment" data-tab="code">
      <pre><code class="language-markup">&lt;ui-button>Button&lt;/ui-button>
&lt;ui-button>Button&lt;/ui-button></code></pre>
    </div>
    <pre data-src="http://127.0.0.1:8081/static/semantic.css"></pre>
  </ui-container>
</template>

<script>
import Menu from '../Menu';

export default {
  components: {
    Menu,
  },
  ready() {
    $('.menu .item').tab();
  },
};
</script>

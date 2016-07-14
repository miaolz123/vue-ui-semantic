<template>
  <ui-container>
    <br>
    <div>
      <ui-button css="left labeled">
        <ui-label css="basic right pointing">2,048</ui-label>
        <ui-button>
          <ui-icon css="fork">Fork</icon>
        </ui-button>
      </ui-button>
      <ui-button css="basic">
        <ui-icon css="user">Add Friend</icon>
      </ui-button>
      <ui-button css="active">Active</ui-button>
      <ui-button css="disabled">Disabled</ui-button>
      <ui-button css="loading">Loading</ui-button>
    </div>
    <ui-divider></ui-divider>
    <div>
      <ui-buttons>
        <ui-button><ui-icon css="align left"></icon></ui-button>
        <ui-button><ui-icon css="align center"></icon></ui-button>
        <ui-button><ui-icon css="align right"></icon></ui-button>
        <ui-button><ui-icon css="align justify"></icon></ui-button>
      </ui-buttons>
    </div>
    <ui-divider></ui-divider>
    <ui-flag></ui-flag>
    <ui-flag css="us"></ui-flag>
    <ui-flag css="gb"></ui-flag>
    <ui-flag css="jp"></ui-flag>
    <ui-flag css="eu"></ui-flag>
    <ui-divider></ui-divider>
    <ui-h2 css="center aligned icon">
      <ui-icon css="circular users">Friends</ui-icon>
    </ui-h2>
    <ui-h1>
      Account Settings
      <ui-sub-header css="">Manage your account settings and set e-mail preferences.</ui-sub-header>
    </ui-h1>
    <ui-h2 css="disabled">Disabled Title</ui-h2>
    <ui-divider></ui-divider>
    <ui-image css="avatar" src="/static/image.png"><span>Username</span></ui-image>
    <ui-divider css="hidden"></ui-divider>
    <ui-image css="medium rounded" src="/static/image.png"></ui-image>
    <ui-divider></ui-divider>
    <ui-input css="left icon fluid">
      <input type="text" placeholder="Search users...">
      <ui-icon css="users"></ui-icon>
    </ui-input>
    <ui-divider css="hidden"></ui-divider>
    <ui-input css="labeled">
      <ui-label>http://</ui-label>
      <input type="text" placeholder="mysite.com">
    </ui-input>
    <ui-divider></ui-divider>
    <ui-label href="#"><ui-icon css="mail">23</ui-icon></ui-label>
    <ui-divider></ui-divider>
    <ui-list>
      <ui-item>
        <ui-icon css="users"><ui-content>Vue Ui Semantic</ui-content></ui-icon>
      </ui-item>
      <ui-item>
        <ui-icon css="marker"><ui-content>New York, NY</ui-content></ui-icon>
      </ui-item>
      <ui-item>
        <ui-icon css="mail">
          <ui-content>
            <a href="//github.com/miaolz123/vue-ui-semantic" target="_blank">vue@semantic.ui</a>
          </ui-content>
        </ui-icon>
      </ui-item>
      <ui-item>
        <ui-icon css="linkify">
          <ui-content>
            <a href="//github.com/miaolz123/vue-ui-semantic" target="_blank">github.com/miaolz123/vue-ui-semantic</a>
          </ui-content>
        </ui-icon>
      </ui-item>
    </ui-list>
    <ui-divider></ui-divider>
    <ui-loader css="active centered inline text">Loading</ui-loader>
    <ui-divider></ui-divider>
    <ui-segment>
      <ui-rail css="left internal">Left Rail</ui-rail>
      <ui-rail css="right internal">Right Rail</ui-rail>
    </ui-segment>
    <ui-divider></ui-divider>
    <ui-reveal css="small circular fade image">
      <ui-image class="visible content" src="/static/user.jpg"></ui-image>
      <ui-image class="hidden content" src="/static/image.png"></ui-image>
    </ui-reveal>
    <ui-divider></ui-divider>
    <ui-segment css="piled">
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
        vitae est. Mauris placerat eleifend leo.</p>
    </ui-segment>
    <ui-divider></ui-divider>
    <ui-steps css="ordered">
      <ui-step css="completed">
        <ui-content>
          <ui-title>Shipping</ui-title>
          <ui-description>Choose your shipping options</ui-description>
        </ui-content>
      </ui-step>
      <ui-step css="active">
        <ui-content>
          <ui-title>Billing</ui-title>
          <ui-description>Enter billing information</ui-description>
        </ui-content>
      </ui-step>
      <ui-step css="disabled">
        <ui-content>
          <ui-title>Confirm Order</ui-title>
          <ui-description>Verify order details</ui-description>
        </ui-content>
      </ui-step>
    </ui-steps>
    <ui-divider></ui-divider>
    <p>
      Powered by <a href="//github.com/miaolz123/vue-ui-semantic" target="_blank">VueUiSemantic</a>
    </p>
  </ui-container>
</template>

<script>
import Ui from '../../dist/vue-ui-semantic.common';

export default {
  template: '<p>wo shi ceshi</p>',
  components: {
    // util
    'ui-content': Ui.Content,
    'ui-description': Ui.Description,
    'ui-item': Ui.Item,
    'ui-title': Ui.Title,
    // elements
    'ui-button': Ui.Button,
    'ui-buttons': Ui.Buttons,
    'ui-container': Ui.Container,
    'ui-divider': Ui.Divider,
    'ui-flag': Ui.Flag,
    'ui-h1': Ui.H1,
    'ui-h2': Ui.H2,
    'ui-h3': Ui.H3,
    'ui-h4': Ui.H4,
    'ui-h5': Ui.H5,
    'ui-h6': Ui.H6,
    'ui-sub-header': Ui.SubHeader,
    'ui-icon': Ui.Icon,
    'ui-image': Ui.Image,
    'ui-input': Ui.Input,
    'ui-label': Ui.Label,
    'ui-list': Ui.List,
    'ui-loader': Ui.Loader,
    'ui-rail': Ui.Rail,
    'ui-reveal': Ui.Reveal,
    'ui-segment': Ui.Segment,
    'ui-step': Ui.Step,
    'ui-steps': Ui.Steps,
  },
};
</script>

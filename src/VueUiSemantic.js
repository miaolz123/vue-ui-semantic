// util
import { Content, Description, Meta, Text, Title } from './util/util'
// elements
import { Button, Buttons } from './elements/Button'
import Container from './elements/Container'
import Divider from './elements/Divider'
import Flag from './elements/Flag'
import { Header, SubHeader } from './elements/Header'
import Icon from './elements/Icon'
import Image from './elements/Image'
import Input from './elements/Input'
import Label from './elements/Label'
import List from './elements/List'
import Loader from './elements/Loader'
import Rail from './elements/Rail'
import Reveal from './elements/Reveal'
import { Segment, Segments } from './elements/Segment'
import { Step, Steps } from './elements/Step'
// collections
import { Breadcrumb, Section } from './collections/Breadcrumb'
import { Field, Fields, Form } from './collections/Form'
import { Grid, Column, Row } from './collections/Grid'
import Menu from './collections/Menu'
import Message from './collections/Message'
import Table from './collections/Table'
// views
import Ad from './views/Advertisement'
import { Card, Cards } from './views/Card'
import { Comment, Comments, Avatar, Author, Metadata, Actions } from './views/Comment'
import { Feed, Event, Summary, Date } from './views/Feed'
import { Items, Item } from './views/Item'
import { Statistic, Statistics, Value } from './views/Statistic'
// modules
import Accordion from './modules/Accordion'
import Checkbox from './modules/Checkbox'
import Dimmer from './modules/Dimmer'
import Dropdown from './modules/Dropdown'
import Modal from './modules/Modal'
import Nag from './modules/Nag'
import Popup from './modules/Popup'
import { Progress, Bar } from './modules/Progress'
import Rating from './modules/Rating'
import { Search, Results } from './modules/Search'
import { Shape, Sides, Side } from './modules/Shape'
import { Sidebar, Pusher } from './modules/Sidebar'
import Sticky from './modules/Sticky'

const Ui = {
  // util
  Content,
  Description,
  Meta,
  Text,
  Title,
  // elements
  Button,
  Buttons,
  Container,
  Divider,
  Flag,
  Header,
  SubHeader,
  Icon,
  Image,
  Input,
  Label,
  List,
  Loader,
  Rail,
  Reveal,
  Segment,
  Segments,
  Step,
  Steps,
  // collections
  Breadcrumb,
  Section,
  Field,
  Fields,
  Form,
  Grid,
  Column,
  Row,
  Menu,
  Message,
  Table,
  // views
  Ad,
  Card,
  Cards,
  Comment,
  Comments,
  Avatar,
  Author,
  Metadata,
  Actions,
  Feed,
  Event,
  Summary,
  Date,
  Items,
  Item,
  Statistic,
  Statistics,
  Value,
  // modules
  Accordion,
  Checkbox,
  Dimmer,
  Dropdown,
  Modal,
  Nag,
  Popup,
  Progress,
  Bar,
  Rating,
  Search,
  Results,
  Shape,
  Sides,
  Side,
  Sidebar,
  Pusher,
  Sticky,
}

export function install(Vue) {
  // util
  Vue.component('ui-content', Ui.Content)
  Vue.component('ui-description', Ui.Description)
  Vue.component('ui-meta', Ui.Meta)
  Vue.component('ui-text', Ui.Text)
  Vue.component('ui-title', Ui.Title)
  // elements
  Vue.component('ui-button', Ui.Button)
  Vue.component('ui-buttons', Ui.Buttons)
  Vue.component('ui-container', Ui.Container)
  Vue.component('ui-divider', Ui.Divider)
  Vue.component('ui-flag', Ui.Flag)
  Vue.component('ui-header', Ui.Header)
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
  Vue.component('ui-segments', Ui.Segments)
  Vue.component('ui-step', Ui.Step)
  Vue.component('ui-steps', Ui.Steps)
  // collections
  Vue.component('ui-breadcrumb', Ui.Breadcrumb)
  Vue.component('ui-section', Ui.Section)
  Vue.component('ui-field', Ui.Field)
  Vue.component('ui-fields', Ui.Fields)
  Vue.component('ui-form', Ui.Form)
  Vue.component('ui-grid', Ui.Grid)
  Vue.component('ui-column', Ui.Column)
  Vue.component('ui-row', Ui.Row)
  Vue.component('ui-menu', Ui.Menu)
  Vue.component('ui-message', Ui.Message)
  Vue.component('ui-table', Ui.Table)
  // views
  Vue.component('ui-ad', Ui.Ad)
  Vue.component('ui-card', Ui.Card)
  Vue.component('ui-cards', Ui.Cards)
  Vue.component('ui-comment', Ui.Comment)
  Vue.component('ui-comments', Ui.Comments)
  Vue.component('ui-avatar', Ui.Avatar)
  Vue.component('ui-author', Ui.Author)
  Vue.component('ui-metadata', Ui.Metadata)
  Vue.component('ui-actions', Ui.Actions)
  Vue.component('ui-feed', Ui.Feed)
  Vue.component('ui-event', Ui.Event)
  Vue.component('ui-summary', Ui.Summary)
  Vue.component('ui-date', Ui.Date)
  Vue.component('ui-items', Ui.Items)
  Vue.component('ui-item', Ui.Item)
  Vue.component('ui-statistic', Ui.Statistic)
  Vue.component('ui-statistics', Ui.Statistics)
  Vue.component('ui-value', Ui.Value)
  // modules
  Vue.component('ui-accordion', Ui.Accordion)
  Vue.component('ui-checkbox', Ui.Checkbox)
  Vue.component('ui-dimmer', Ui.Dimmer)
  Vue.component('ui-dropdown', Ui.Dropdown)
  Vue.component('ui-modal', Ui.Modal)
  Vue.component('ui-nag', Ui.Nag)
  Vue.component('ui-popup', Ui.Popup)
  Vue.component('ui-progress', Ui.Progress)
  Vue.component('ui-bar', Ui.Bar)
  Vue.component('ui-rating', Ui.Rating)
  Vue.component('ui-search', Ui.Search)
  Vue.component('ui-results', Ui.Results)
  Vue.component('ui-shape', Ui.Shape)
  Vue.component('ui-sides', Ui.Sides)
  Vue.component('ui-side', Ui.Side)
  Vue.component('ui-sidebar', Ui.Sidebar)
  Vue.component('ui-pusher', Ui.Pusher)
  Vue.component('ui-sticky', Ui.Sticky)
}

export default Ui

import Vue from 'vue'
import 'element-ui/lib/theme-chalk/display.css'
import { Container,
  Header, Aside, Main, Footer, Row, Col,
  Menu, Submenu, MenuItem, MenuItemGroup, Tabs, TabPane,
  Carousel, CarouselItem, Card, Pagination, Button, Select,
  MessageBox, Message, Dialog, Form, FormItem, Input,
  Avatar } from 'element-ui'

Vue
  .use(Container).use(Header).use(Aside).use(Main).use(Footer)
  .use(Row).use(Col)
  .use(Menu).use(Submenu)
  .use(MenuItem).use(MenuItemGroup)
  .use(Tabs).use(TabPane)
  .use(Carousel).use(CarouselItem)
  .use(Card).use(Pagination)
  .use(Button)
  .use(Select)
  .use(Dialog)
  .use(Form).use(FormItem).use(Input)
  .use(Avatar)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

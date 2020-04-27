import Vue from 'vue'
import 'element-ui/lib/theme-chalk/display.css'
import { Container,
  Header, Aside, Main, Footer, Row, Col,
  Menu, Submenu, MenuItem, MenuItemGroup,
  Carousel, CarouselItem, Card, Button, Select,
  MessageBox, Message, Dialog, Form, FormItem, Input } from 'element-ui'

Vue
  .use(Container).use(Header).use(Aside).use(Main).use(Footer)
  .use(Row).use(Col)
  .use(Menu).use(Submenu)
  .use(MenuItem).use(MenuItemGroup)
  .use(Carousel).use(CarouselItem)
  .use(Card)
  .use(Button)
  .use(Select)
  .use(Dialog)
  .use(Form).use(FormItem).use(Input)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

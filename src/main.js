import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

let i18n = new VueI18n({
  locale: 'en',
  messages: {
    'en': {
      'test_string': 'a test string'
    }
  }
})

Vue.component('test-component', require('./test-component.vue'));

new Vue({
  el: '#app',
  i18n: i18n
});
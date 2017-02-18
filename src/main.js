Vue.use(require('vue-i18n'));
Vue.component('test-component', require('./test-component.vue'));
Vue.component('test-component2', {
	mounted: function() {
        console.log('from js file', this.$t);
    }
});

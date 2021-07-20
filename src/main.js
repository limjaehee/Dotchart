import Vue from 'vue'
import App from './App.vue'

//common.js (공통.js)
import common from './assets/js/common'
Vue.use(common)

//store
import { store } from "./store";

//router
import VueRouter from 'vue-router';
import { MainPage, AddPage } from './pages';

//components
import { Layout } from './components'
Vue.component('Layout',Layout)

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
	{
		path: '/',
		component: MainPage,
		meta: { page: 1 },
	},
	{
		path: '/AddPage',
		component: AddPage,
		meta: { page: 2 },
	},
];

// router 객체생성
const router = new VueRouter({
  	routes
});


new Vue({
	render: h => h(App),
	router, // router 추가
	store,
}).$mount('#app')
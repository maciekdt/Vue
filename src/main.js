import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AuthorsForm from './components/AuthorsForm'
import AuthorsTable from './components/AuthorsTable'


Vue.config.productionTip = false
    //Vue.use(VueRouter);

const routes = [
    { path: '/', component: AuthorsTable },
    { path: '/authors-form', component: AuthorsForm },
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
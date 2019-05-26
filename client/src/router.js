import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Merged from './views/changes/Merged.vue'
import Abandoned from './views/changes/Abandoned.vue'
import List from './views/projects/List.vue'
import Users from './views/people/Users.vue'
import Groups from './views/people/Groups.vue'
import Settings from './views/Settings.vue'
import ChangeDetails from './views/changes/ChangeDetails.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/changes/merged',
            name: 'Merged',
            component: Merged
        },
        {
            path: '/changes/details/:id',
            name: 'ChangeDetails',
            component: ChangeDetails
        },
        {
            path: '/changes/abandoned',
            name: 'Abandoned',
            component: Abandoned
        },
        {
            path: '/projects/list',
            name: 'List',
            component: List
        },
        {
            path: '/people/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/people/groups',
            name: 'Groups',
            component: Groups
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
    ]
})

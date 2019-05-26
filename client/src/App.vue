<template>
  <v-app :dark="dark">
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title>GitReview</v-toolbar-title>
      <v-spacer/>
      <v-text-field
        flat
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer/>
      <v-menu bottom right nudge-bottom="32">
        <template v-slot:activator="{ on }">
          <v-badge left v-ripple>
            <template v-slot:badge>
              <span>{{notficationCount}}</span>
            </template>
            <v-btn icon v-on="on" class="notification-button">
              <v-icon large>notifications</v-icon>
            </v-btn>
          </v-badge>
        </template>

        <v-list>
          <v-list-tile
            v-for="(notfication, i) in notfications"
            :key="i"
            :avatar="!!notfication.avatar"
            :to="notfication.action"
          >
            <v-list-tile-avatar v-if="!!notfication.avatar">
              <img :src="notfication.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ notfication.title }}</v-list-tile-title>
              <v-list-tile-sub-title v-html="notfication.text"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu bottom left nudge-bottom="32">
        <template v-slot:activator="{ on }">
          <v-list-tile v-ripple v-on="on" :avatar="loggedIn" :href="loggedIn ? '':'/api/v1/auth/github'">
            <v-list-tile-avatar v-if="loggedIn">
              <img :src="user.avatarUrl">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-if="!loggedIn">Log In</v-list-tile-title>
              <v-list-tile-title v-if="loggedIn">{{user.name}}<v-icon>arrow_drop_down</v-icon></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-list v-if="loggedIn">
          <v-list-tile to="/settings">
            <v-list-tile-content>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile href="/api/v1/auth/logout">
            <v-list-tile-content>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile avatar v-if="loggedIn">
          <v-list-tile-avatar>
            <img :src="user.avatarUrl">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{user.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="loggedIn"/>
        <v-list-tile class="hidden-md-and-up">
          <v-text-field
            flat
            hide-details
            prepend-inner-icon="search"
            label="Search"
            class="hidden-md-and-up"
          />
        </v-list-tile>
        <v-subheader>Changes</v-subheader>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>priority_high</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Open</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/changes/merged">
          <v-list-tile-action>
            <v-icon>check</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Merged</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/changes/abandoned">
          <v-list-tile-action>
            <v-icon>clear</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Abandoned</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>Projects</v-subheader>
        <v-list-tile to="/projects/list">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>List</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/projects/create">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Create</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>People</v-subheader>
        <v-list-tile to="/people/users">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/people/groups">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Groups</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>Plugins</v-subheader>
        <v-list-tile to="/plugins/installed">
          <v-list-tile-action>
            <v-icon>extension</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Installed</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>Settings</v-subheader>
        <v-list-tile to="/settings">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>invert_colors</v-icon>
          </v-list-tile-action>
          <v-switch v-model="dark" :label="dark ? 'Dark':'Light'"/>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app>Copyright &copy; 2019 Jacob McSwain</v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            drawer: false,
            loggedIn: false,
            // localStorage in Firefox is string-only
            dark: localStorage.dark === 'true' ? true:false,
            user: {},
            notficationCount: 0,
            notfications: [
                {
                    title: "Jacob McSwain requires your review",
                    text: "Add toggle for face auto unlock (2/2)",
                    avatar: "https://avatars0.githubusercontent.com/u/13051767?v=4",
                    action: "/"
                },
                {
                    title: "Jacob McSwain requires your review",
                    text: "libcameraservice: force specific cam id for google face unlock",
                    avatar: "https://avatars0.githubusercontent.com/u/13051767?v=4",
                    action: "/"
                },
                {
                    title: "Jacob McSwain requires your review",
                    text: "KeyguardHostView: Auto face unlock v2",
                    avatar: "https://avatars0.githubusercontent.com/u/13051767?v=4",
                    action: "/"
                }
            ]
        };
    },
    watch: {
        dark(_newValue) {
            // localStorage in Firefox is string-only
            localStorage.dark = this.dark ? 'true':'false';
        }
    },
    created() {
        axios
            .get("/api/v1/users/me")
            .then((res) => {
                this.loggedIn = true;
                this.user = res.data;
            })
            .catch((_err) => {
                this.loggedIn = false;
            });
    }
};
</script>

<style>
.search {
  max-width: 50%;
}

.lowercase {
  text-transform: none;
}

.notification-button {
  margin: 0 !important;
  padding: 2px !important;
}
</style>

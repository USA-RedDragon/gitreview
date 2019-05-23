<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer/>
      <v-text-field
        flat
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer/>
      <v-badge left>
        <template v-slot:badge>
          <span>17</span>
        </template>
        <v-icon large>notifications</v-icon>
      </v-badge>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img
              src="https://secure.gravatar.com/avatar/EC121FF80513AE58ED478D5C5787075B.jpg?s=300&d=identicon"
            >
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Jacob McSwain</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile>
          <v-text-field flat hide-details prepend-inner-icon="search" label="Search" class="hidden-md-and-up" />
        </v-list-tile>
        <v-subheader>Changes</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>priority_high</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Open</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>check</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Merged</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>clear</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Abandoned</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>Projects</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>List</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Create</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>People</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Groups</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-subheader>Plugins</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>extension</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Installed</v-list-tile-title>
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
export default {
    name: "App",
    data: () => ({
        drawer: false
    })
};
</script>

<style>
.search {
  max-width: 50%;
}

.lowercase {
  text-transform: none;
}
</style>

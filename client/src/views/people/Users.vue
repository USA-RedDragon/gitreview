<template>
  <div class="home">
    <p class="display-1">Users</p>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
      <template v-slot:items="props">
        <td>
          <v-avatar size="32">
            <img :src="props.item.avatarUrl" alt="avatar">
          </v-avatar>
          {{ props.item.name }}
        </td>
        <td>{{ props.item.login }}</td>
        <td>
          <v-icon v-if="props.item.admin">check_circle</v-icon>
          <v-icon v-if="!props.item.admin">error</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
    name: "Users",
    data: () => ({
        headers: [
            { text: "Name", value: "name", sortable: true },
            { text: "Username", value: "login", sortable: true },
            { text: "Admin", value: "admin", sortable: true }
        ],
        users: [
            {
                name: "Jacob McSwain",
                login: "USA-RedDragon",
                admin: true,
                avatarUrl: "https://avatars0.githubusercontent.com/u/13051767?v=4"
            },
            {
                name: "Robert'); DROP TABLE Students; --",
                login: "LittleBobbyTables",
                admin: false,
                avatarUrl: "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg"
            },
        ]
    })
};
</script>

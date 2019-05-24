<template>
  <div class="home">
    <p class="display-1">Groups</p>
    <v-data-table :headers="headers" :items="groups" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>
          <span v-for="(user, i) in props.item.users" :key="i"
            :avatar="!!user.avatarUrl">
            <v-chip>
              <v-avatar><img :src="user.avatarUrl" alt="avatar"/></v-avatar>
              {{user.name}}
            </v-chip>
          </span>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
    name: "Groups",
    data: () => ({
        headers: [
            { text: "Name", value: "name", sortable: true },
            { text: "Users", value: "users", sortable: false }
        ],
        groups: [
            {
                name: "Admins",
                users: [
                    {
                        name: "Jacob McSwain",
                        avatarUrl: "https://avatars0.githubusercontent.com/u/13051767?v=4"
                    },
                    {
                        name: "Robert'); DROP TABLE Students; --",
                        avatarUrl: "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg"
                    }
                ]
            },
            {
                name: "Users",
                users: [
                    {
                        name: "Robert'); DROP TABLE Students; --",
                        avatarUrl: "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg"
                    }
                ]
            }
        ]
    })
};
</script>

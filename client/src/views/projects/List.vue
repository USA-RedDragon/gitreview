<template>
  <div class="home">
    <p class="display-1">Projects</p>
    <v-data-table :headers="headers" :items="projects" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.description }}</td>
        <td><a :href="props.item.repo" target="_blank">{{ props.item.repo }}</a></td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
    name: "List",
    data: () => ({
        headers: [
            { text: "Name", value: "name", sortable: true },
            { text: "Project Description", value: "description", sortable: true },
            { text: "Repo", value: "repo", sortable: true }
        ],
        projects: [
            {
                name: "frameworks_base",
                description: "The core Android system",
                repo: "https://github.com/InvictrixROM/frameworks_base"
            },
            {
                name: "packages_apps_Armory",
                description: "The Invictrix settings app",
                repo: "https://github.com/InvictrixROM/packages_apps_Armory"
            },
            {
                name: "vendor_invictrix",
                description: "The repo that contains Invictrix-specific configs and behavior",
                repo: "https://github.com/InvictrixROM/vendor_invictrix"
            },
            {
                name: "manifest",
                description: "Where we track our repos",
                repo: "https://github.com/InvictrixROM/manifest"
            },
            {
                name: "build_make",
                description: "Build system makefiles",
                repo: "https://github.com/InvictrixROM/build_make"
            },
            {
                name: "packages_apps_Contacts",
                description: "Contacts app",
                repo: "https://github.com/InvictrixROM/packages_apps_Contacts"
            },
            {
                name: "frameworks_av",
                description: "System Audio/Video framework",
                repo: "https://github.com/InvictrixROM/frameworks_av"
            },
            {
                name: "system_vold",
                description: "System disk mounting utility",
                repo: "https://github.com/InvictrixROM/system_vold"
            },
            {
                name: "packages_apps_Updater",
                description: "Our Over The Air updater",
                repo: "https://github.com/InvictrixROM/packages_apps_Updater"
            },
            {
                name: "packages_apps_Settings",
                description: "Settings app",
                repo: "https://github.com/InvictrixROM/packages_apps_Settings"
            },
            {
                name: "system_sepolicy",
                description: "Selinux policy files",
                repo: "https://github.com/InvictrixROM/system_sepolicy"
            }
        ]
    })
};
</script>

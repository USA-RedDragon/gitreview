<template>
  <div class="home">
    <p class="display-1">Abandoned Commits</p>
    <v-data-table :headers="headers" :items="changes" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.subject }}</td>
        <td>{{ props.item.status }}</td>
        <td>{{ props.item.owner }}</td>
        <td>{{ props.item.project }}</td>
        <td>{{ props.item.branch }}</td>
        <td>{{ props.item.topic }}</td>
        <td>{{ props.item.updated }}</td>
        <td>{{ props.item.size }}</td>
        <td>{{ props.item.review }}</td>
        <td>
          <v-icon v-if="props.item.verified">check_circle</v-icon>
          <v-icon v-if="!props.item.verified">error</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
    name: "Abandoned",
    data: () => ({
        headers: [
            { text: "Subject", value: "subject", sortable: true },
            { text: "Status", value: "status", sortable: true },
            { text: "Owner", value: "owner", sortable: true },
            { text: "Project", value: "project", sortable: true },
            { text: "Branch", value: "branch", sortable: true },
            { text: "Topic", value: "topic", sortable: true },
            { text: "Updated", value: "updated", sortable: true },
            { text: "Size", value: "size", sortable: true },
            { text: "Review", value: "review", sortable: true },
            { text: "Verified", value: "verified", sortable: true }
        ],
        changes: [
            {
                subject: "Ambient Play: Add summary to some settings",
                status: "Abandoned",
                owner: "Dillon Brosche",
                project: "packages_apps_Settings",
                branch: "inv-9.0",
                updated: "Feb 3",
                size: "",
                review: "+1",
                verified: true
            },
            {
                subject: "Give setupwizard REQUEST_NETWORK_SCORES",
                status: "Abandoned",
                owner: "Dillon Brosche",
                project: "frameworks_base",
                branch: "inv-9.0",
                updated: "Jan 13",
                size: "",
                review: "-3",
                verified: true
            },
            {
                subject: "SmartBar: Update Battery Bar compatibility",
                status: "Abandoned",
                owner: "DJ Calphonic",
                project: "packages_apps_SmartNav",
                branch: "inv-9.0",
                updated: "Jan 14",
                size: "",
                review: "0",
                verified: false
            }
        ]
    })
};
</script>

<template>
  <div class="home">
    <p class="display-1">Open Commits</p>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
      <template v-slot:items="props">
        <td><router-link :to="'/changes/details/' + props.item.id">{{ props.item.subject }}</router-link></td>
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
    name: "Home",
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
        users: [
            {
                id: 1,
                subject: "Add toggle for face auto unlock (2/2)",
                status: "",
                owner: "Dillon Brosche",
                project: "packages_apps_Settings",
                branch: "inv-9.0",
                updated: "Feb 24",
                size: "",
                review: "+1",
                verified: true
            },
            {
                id: 2,
                subject: "libcameraservice: force specific cam id for google face unlock",
                status: "Merge Conflict",
                owner: "Dillon Brosche",
                project: "frameworks_av",
                branch: "inv-9.0",
                updated: "Feb 24",
                size: "",
                review: "+2",
                verified: ""
            },
            {
                id: 3,
                subject: "KeyguardHostView: Auto face unlock v2",
                status: "",
                owner: "Dillon Brosche",
                project: "frameworks_base",
                branch: "inv-9.0",
                updated: "Feb 24",
                size: "",
                review: "-1",
                verified: ""
            }
        ]
    })
};
</script>

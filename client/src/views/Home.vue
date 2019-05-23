<template>
  <div class="home">
    <p class="display-1">Open Commits</p>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.subject }}</td>
        <td>{{ props.item.status }}</td>
        <td>{{ props.item.owner }}</td>
        <td>{{ props.item.project }}</td>
        <td>{{ props.item.branch }}</td>
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
    name: "home",
    data: () => ({
        headers: [
            { text: "Subject", value: "subject", sortable: false },
            { text: "Status", value: "status", sortable: false },
            { text: "Owner", value: "owner", sortable: false },
            { text: "Project", value: "project", sortable: false },
            { text: "Branch", value: "branch", sortable: false },
            { text: "Updated", value: "updated", sortable: false },
            { text: "Size", value: "size", sortable: false },
            { text: "Review", value: "review", sortable: false },
            { text: "Verified", value: "verified", sortable: false }
        ],
        users: [
            {
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

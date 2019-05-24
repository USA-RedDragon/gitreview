<template>
  <div class="home">
    <p class="display-1">Merged Commits</p>
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
    name: "Merged",
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
                subject: "Left volume panel: Fix animation",
                status: "Merged",
                owner: "Dillon Brosche",
                project: "frameworks_base",
                branch: "inv-9.0 (vol-pos)",
                topic: "vol-pos",
                updated: "Jan 14",
                size: "",
                review: "+2",
                verified: true
            },
            {
                subject: "Volume panel location: load the bool once",
                status: "Merged",
                owner: "Dillon Brosche",
                project: "frameworks_base",
                branch: "inv-9.0",
                updated: "Jan 14",
                size: "",
                review: "+2",
                verified: true
            },
            {
                subject: "SystemUI: allow devices override audio panel location",
                status: "Merged",
                owner: "Dillon Brosche",
                project: "frameworks_base",
                branch: "inv-9.0",
                updated: "Jan 14",
                size: "",
                review: "+3",
                verified: false
            }
        ]
    })
};
</script>

<template>
  <div class="home">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-card>
          <v-card-title class="title">Commit Details</v-card-title>
          <v-card-text>
              <span class="font-weight-bold">Updated:</span>
              {{change.updated}}
              <br />
              <span class="font-weight-bold">Owner:</span>
              {{change.owner}}
              <br />
              <span class="font-weight-bold">Author:</span>
              {{change.author}}
              <br />
              <span class="font-weight-bold">Assignee:</span>
              <v-chip>
                  <v-avatar>
                    <img :src="change.assignee.avatarUrl" alt="avatar">
                  </v-avatar>
                  {{change.assignee.name}}
                </v-chip>
                <br />
              <span class="font-weight-bold">Reviewers:</span>
              <span v-for="(reviewer, i) in change.reviewers" :key="i">
                <v-chip>
                  <v-avatar>
                    <img :src="reviewer.avatarUrl" alt="avatar">
                  </v-avatar>
                  {{reviewer.name}}
                </v-chip>
              </span>
              <br />
              <span class="font-weight-bold">Project:</span>
              {{change.project}}
              <br />
              <span class="font-weight-bold">Branch:</span>
              {{change.branch}}
              <br />
              <span class="font-weight-bold">Topic:</span>
              {{change.topic}}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-title class="title">Commit Message</v-card-title>
          <v-card-text>
              <pre class="message">{{change.message}}</pre>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card>
          <v-card-title class="title">Related Changes</v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "ChangeDetails",
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    change: {
      id: 1,
      subject: "Add toggle for face auto unlock (2/2)",
      message: "Add toggle for face auto unlock (2/2)\n\nDetails about the above commit\n\nSigned-off-by: jhenrique09 <jhenrique09.mcz@hotmail.com>\nSigned-off-by: Ashwin R C <ashwin2001achu@gmail.com>\n\nChange-Id: I0cdd47255291fb3f560770cfaeda304eb49f5a14",
      status: "",
      owner: "Dillon Brosche",
      author: "Dillon Brosche",
      project: "packages_apps_Settings",
      assignee: {
        name: "Jacob McSwain",
        avatarUrl: "https://avatars0.githubusercontent.com/u/13051767?v=4"
      },
      reviewers: [
        {
          name: "Jacob McSwain",
          avatarUrl: "https://avatars0.githubusercontent.com/u/13051767?v=4"
        },
        {
          name: "Robert'); DROP TABLE Students; --",
          avatarUrl:
            "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg"
        },
        {
          name: "Test 2",
          avatarUrl:
            "https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg"
        }
      ],
      branch: "inv-9.0",
      topic: "test",
      updated: "Feb 24",
      size: "",
      review: "+1",
      verified: true
    }
  })
};
</script>

<style scoped>
.message {
  white-space: pre-wrap;
}
</style>

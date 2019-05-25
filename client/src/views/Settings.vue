<template>
  <div class="home">
    <p class="display-1">Settings</p>
    <v-form ref="form" v-model="valid" lazy-validation class="elevation-1 settings">
      <v-text-field :value="user.name" label="Name" disabled/>
      <v-text-field :value="user.email" label="E-mail" disabled/>
      <v-text-field
        v-model="password"
        :append-icon="showPassword1 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min, passwordConfirmationRules()]"
        :type="showPassword1 ? 'text' : 'password'"
        name="input-10-1"
        label="Git Passsword"
        hint='At least 20 characters, use a <a href="https://keepass.info/">password manager</a>'
        counter
        @click:append="showPassword1 = !showPassword1"
      />
      <v-text-field
        v-model="confirmPassword"
        :append-icon="showPassword2 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min, passwordConfirmationRules()]"
        :type="showPassword2 ? 'text' : 'password'"
        name="input-10-1"
        label="Confirm Git Passsword"
        hint='At least 20 characters, use a <a href="https://keepass.info/">password manager</a>'
        counter
        @click:append="showPassword2 = !showPassword2"
      />
      <v-btn :disabled="!valid" color="success" @click="submit">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Settings",
    data: () => ({
        valid: true,
        user: {},
        password: null,
        confirmPassword: null,
        showPassword1: false,
        showPassword2: false,
        rules: {
            required: (v) => (v != null && !!v) || 'Required.',
            min: (v) => (v != null && v.length >= 20) || 'At least 20 characters',
        }
    }),
    computed: {
        passwordConfirmationRules() {
            return () => (this.password === this.confirmPassword) || 'Passwords do not match';
        },
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.user.gitPassword = this.password;
                axios.put("/api/v1/users/me", this.user);
            } else {
                return;
            }
        }
    },
    created() {
        axios.get("/api/v1/users/me").then(res => {
            this.user = res.data;
        });
    }
};
</script>

<style>
.settings {
  padding: 2%;
}
</style>

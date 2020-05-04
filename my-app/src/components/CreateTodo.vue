<template>
  <div class="create-todo">

    <v-alert class="error-alert" dense outlined type="error" v-if="isWrongActivity">
      {{errorMessage}}
    </v-alert>

    <v-icon v-on:click="openForm" v-show="!isCreating" x-large>mdi-plus</v-icon>
    <v-card class="mx-auto card-mb" max-width="400" outlined d-block v-show="isCreating">
      <div class="content">
        <v-text-field label="Title" v-model="titleText"></v-text-field>
        <v-text-field label="Project" v-model="projectText"></v-text-field>
      </div>
      <div class="btn-mb">
        <v-btn v-on:click="sendForm">
          Create
        </v-btn>
        <v-btn v-on:click="closeForm">
          Cancel
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      titleText: "",
      projectText: "",
      isCreating: false,
      wrong: false,
      errorMessage:''
    };
  },
  computed: {
    isWrongActivity() {
      return this.wrong
    },
  },
  methods: {
    // ...mapActions(['addTodo']),
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      console.log('this.store', this)
      if (this.validateData() === true) {
        const todos = {
          title: this.titleText,
          project: this.projectText,
          done: false
        };
        // this.addTodo('addTodo', {todo});
        this.$store.dispatch('todostore/addTodo', todos);
        this.titleText = ''
        this.projectText = ''
        this.wrong = false
      } else {
        this.wrong = true;
        this.setMessageError();
      }

      this.isCreating = false;
    },
    validateData() {
      if (this.titleText !== '' && this.projectText !== '') {
        return true;
      } else {
        return false;
      }
    },

    setMessageError() {
      if (this.titleText === '' && this.projectText === '') {
        this.errorMessage = 'The titleText && the projectText are empty';
      } else {
        if (this.titleText === '') {
          this.errorMessage = 'The titleText is empty';
        } else {
          this.errorMessage = 'The projectText is empty';
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.create-todo{
  text-align: -webkit-center;
}
.content {
    width: 80%;
}
.btn-mb {
  margin-bottom: 1em;
}
.error-alert {
  width: 42%;
}
</style>
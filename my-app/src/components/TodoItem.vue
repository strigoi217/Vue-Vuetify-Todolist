<template>
  <v-card class="mx-auto card-mb" max-width="400" outlined d-block>
      <v-card-text primary-title >
      <div>
          <h3>{{ todo.title }}</h3>
          <div>{{ todo.project }}</div>
      </div>
      </v-card-text>
                  
      <div class="edit-div">
          <!-- <span v-on:click="deleteTodo(todo)"> -->
          <span @click.stop="dialog = true">  
              <v-icon>mdi-trash-can</v-icon>
          </span>
          <span v-on:click="showForm">
              <v-icon>mdi-square-edit-outline</v-icon>
          </span>
      </div>
      
      <!-- // form is visible when we are in editing mode -->
      <div class="content" v-show="isEditing">
          <div class="field">
              <v-text-field label="Title" v-model="todo.title">{{ todo.title }}</v-text-field>
          </div>
          <div class="field">
              <v-text-field label="Project" v-model="todo.project">{{ todo.project }}</v-text-field>
          </div>
          <div class="ui two button attached buttons">
              <v-btn v-on:click="hideForm">
                  Close X
              </v-btn>
          </div>
      </div>
      
      <div class="complete-btn" v-show="!isEditing && todo.done" disabled>Completed</div>
      <div class="peding-btn" v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">Pending</div>

      <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Confirm Delete Item?</v-card-title>

        <v-card-text>
          This item should be deleted.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="deleteTodo(todo), dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false,
      dialog: false,
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$store.dispatch('todostore/removeTodo', todo)
    },
    completeTodo(todo) {
      console.log('completetodo')
      this.$store.dispatch('todostore/completeTodo', todo)
    }
  }
};
</script>

<style lang="scss" scoped>
.button[disabled] {
  cursor: not-allowed;
}

.content {
    width: 80%;
}
.close-btn {
    margin-bottom: 10px;
}
.edit-div {
    text-align: end;
    padding-right: 10px;
}
.card-mb {
    margin-bottom: 10px;
    border-radius: 10px !important;
}
.complete-btn {
    border: 1px solid green;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.peding-btn {
    border: 1px solid red;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>

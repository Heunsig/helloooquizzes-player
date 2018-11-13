<template>
  <v-app>
    <toolbar></toolbar>
    <v-content class="blue darken-1">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="text-xs-center mt-4">
              <div style="font-size:20px;" class="white--text">Sorry this quiz has no questions.</div>
              <div style="font-size:20px;" class="white--text">Please try other quizzes.</div>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="text-xs-center mt-3">
              <v-btn dark color="green lighten-1" @click="$router.push({name: 'main'})">Go to the quiz list</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Toolbar from './Toolbar'
export default {
  components: {
    Toolbar
  }
}
</script>
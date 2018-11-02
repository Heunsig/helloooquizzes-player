<template>
  <v-app>
    <v-toolbar app dense dark color="blue darken-3">
      <v-toolbar-title class="headline">
        <v-btn cla<v-btn class="title text-capitalize" flat @click="game_list()">{{ APP_NAME }}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="game_list()"
      >
        <span class="mr-2">Choose Another Quiz</span>
      </v-btn>
      <v-btn
        flat
        @click="retry()"
      >
        <span class="mr-2">Retry</span>
      </v-btn>
    </v-toolbar>
    <v-content class="blue darken-1">
      <game
        :questions="questions"
        :game="game"
      ></game>
    </v-content>
  </v-app>
</template>
<script>
import Game from './Game'
export default {
  props: [
    'questions',
    'game'
  ],
  components: {
    Game
  },
  methods: {
    game_list () {
      this.$router.push({
        name: 'game_list'
      })
    },
    retry () {
      this.$router.push({
        name: 'main',
        params: {
          game_id: this.$route.params.game_id
        }
      })
    }
  } 
}
</script>
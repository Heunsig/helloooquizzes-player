<template>
  <v-app>
    <v-toolbar app dense dark color="blue darken-3">
      <v-toolbar-title class="headline">
        <v-btn class="title text-capitalize" flat @click="game_list()">{{ APP_NAME }}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        @click="game_list()"
      >
        <v-icon>view_list</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid class="blue darken-1">
      <v-layout row wrap class="mt-5">
        <v-flex xs12>
          <h2 style="font-size:30px;" class="mt-3 text-xs-center text-capitalize white--text">
            {{ game.name }}
          </h2>
          <div style="font-size:25px;" class="text-xs-center font-weight-light white--text">by {{ game.creator }}</div>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center ma-4">
            <input v-model="name" placeholder="Your name" class="text-field" style="width:100%;max-width:300px;">
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center">
            <v-btn @click="get_started()" color="green lighten-1" dark>Get Started</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      game: {},
      questions: [
        {}
      ]
    }
  },
  created () {
    this.$http.get(`${this.PATH_API}/game/${this.$route.params.game_id}`).then(res => {
      this.game = res.data.result.game
      this.questions = res.data.result.questions
    })  

    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.player_name) {
          this.name = sessionStorage.player_name
      } else {
          this.name = ''
      }
    } else {
        // Sorry! No Web Storage support..
    }
  },
  methods: {
    get_started () {
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('player_name', this.name)
      } else {
          // Sorry! No Web Storage support..
      }

      this.$router.push({
        name: 'game',
        params: {
          game_id: this.$route.params.game_id,
          questions: this.questions,
          game: this.game
        }
      })
    },
    game_list () {
      this.$router.push({
        name: 'game_list'
      })
    }
  }
}
</script>
<style scoped>
  .centered {
    margin-left: auto;
    margin-right: auto;
  }
  .text-field {
    border: 3px solid #3e7fb3;
    background: white;
    padding: 7px;
    font-size: 30px;
    font-weight: bold;
  }
</style>
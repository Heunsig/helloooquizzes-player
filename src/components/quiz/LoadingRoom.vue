<template>
  <v-app>
    <toolbar></toolbar>
    <v-container fluid class="blue darken-1">
      <v-layout row wrap class="mt-5">
        <v-flex xs12>
          <div v-if="play_disabled">
            <div class="text-xs-center mt-3">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </div>
          </div>
          <div v-else>
            <h2 style="font-size:30px;" class="mt-3 text-xs-center text-capitalize white--text">
              {{ quiz.name }}
            </h2>
            <div style="font-size:17px;" class="text-xs-center font-weight-light white--text">Created by {{ quiz.creator }}</div>
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center ma-4">
            <input v-model="player_name" placeholder="Your name" class="text-field" style="width:100%;max-width:300px;">
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center">
            <v-btn 
              @click="get_started()" 
              color="green lighten-1" 
              dark
              :disabled="play_disabled"
            >Get Started</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Toolbar from './Toolbar'
export default {
  components: {
    Toolbar
  },
  data () {
    return {
      player_name: '',
      play_disabled: true,
      quiz: {},
      questions: [
        {}
      ]
    }
  },
  created () {
    this.$http.get(`${this.PATH_API}/quiz/${this.$route.params.quiz_id}`).then(res => {
      console.log('res', res)
      this.quiz = res.data.result.quiz
      this.questions = res.data.result.questions
      this.play_disabled = false
    })

    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.player_name) {
          this.player_name = sessionStorage.player_name
      } else {
          this.player_name = ''
      }
    } else {
        // Sorry! No Web Storage support..
    }
  },
  methods: {
    get_started () {
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('player_name', this.player_name)
      } else {
          // Sorry! No Web Storage support..
      }

      if (this._.isEmpty(this.questions)) {
        this.$router.push({
          name: 'no_question'
        })
      } else {
        this.$router.push({
          name: 'quiz_player',
          params: {
            quiz_id: this.$route.params.quiz_id,
            quiz: this.quiz,
            questions: this.questions
          }
        })
      }
    },
    // back_to_list () {
    //   this.$router.push({
    //     name: 'main'
    //   })
    // }
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
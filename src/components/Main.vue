<template>
  <v-app>
    <v-container fluid grid-list-lg class="blue darken-1">
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="text-xs-center white--text">{{ APP_NAME }}</h1>
        </v-flex>
        <v-flex xs12 v-for="quiz in quizzes">
          <v-card max-width="600" class="centered card">
            <v-card-title primary-title class="pt-3 pb-2">
              <div>
                <h3 class="headline mb-0">{{ quiz.name }}</h3>
                <div>{{ quiz.description }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="play(quiz.id)" color="green lighten-1" dark>Play</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app> 
</template>
<script>
export default {
  data () {
    return {
      quizzes: []
    }
  },
  created () {
    this.get_quiz_list()
  },
  methods: {
    play (game_id) {
      this.$router.push({
        name: 'loading_room',
        params: {
          game_id: game_id
        }
      })
    },
    get_quiz_list () {
      this.$http.get(`${this.PATH_API}/game/list`).then(res => {
        this.quizzes = res.data.result
      }).catch(err => {
        console.log('Sever has some problems')
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
  .card {
    border-radius: 10px;

  }
</style>
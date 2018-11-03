<template>
  <v-app>
    <v-toolbar app dense dark color="blue darken-3">
      <v-toolbar-title class="headline">
        <v-btn cla<v-btn class="title text-capitalize" flat @click="game_list()">{{ APP_NAME }}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        @click="game_list()"
      >
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-btn
        flat
        icon
        @click="ask_retry()"
      >
        <v-icon>replay</v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="cancel()"
            >
              Cancel
            </v-btn>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="retry()"
            >
              Retry
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-content class="blue darken-1">
      <game
        :questions="questions"
        :game="game"
        ref="game"
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
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    game_list () {
      this.$router.push({
        name: 'game_list'
      })
    },
    ask_retry () {
      this.dialog = true
      this.$refs.game.pause()
    },
    cancel () {
      this.dialog = false
      this.$refs.game.play('a')
    },
    retry () {
      this.dialog = false
      this.$refs.game.reset()
      // this.$router.push({
      //   name: 'main',
      //   params: {
      //     game_id: this.$route.params.game_id
      //   }
      // })
    }
  } 
}
</script>
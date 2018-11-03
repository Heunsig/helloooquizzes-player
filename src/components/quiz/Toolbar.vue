<template>
  <v-toolbar app dense dark color="blue darken-3">
    <v-toolbar-title class="headline">
      <v-btn cla<v-btn class="title text-capitalize" flat @click="back_to_list()">{{ APP_NAME }}</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-dialog
      v-model="dialog_back_to_main"
      max-width="290"
    >
      <v-btn
        flat
        icon
        slot="activator"
      >
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-card>
        <v-card-text>
          <div class="title">Do you want to go back to the quiz list page?</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            flat="flat"
            @click="return_quiz()"
          >
            No Thanks
          </v-btn>

          <v-btn
            color="blue darken-1"
            flat="flat"
            @click="back_to_list()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog_play_again"
      max-width="290"
      v-if="is_quiz_player"
    >
    <v-btn
      flat
      icon
      slot="activator"
    >
      <v-icon>replay</v-icon>
    </v-btn>
      <v-card>
        <v-card-text>
          <div class="title">Do you want to play again?</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            flat="flat"
            @click="return_quiz()"
          >
            No Thanks
          </v-btn>

          <v-btn
            color="blue darken-1"
            flat="flat"
            @click="play_again()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>
<script>
export default {
  props: [
    'page',
    'reset_game'
  ],
  data () {
    return {
      dialog_back_to_main: false,
      dialog_play_again: false
    }
  },
  computed: {
    is_quiz_player () {
      return this.page === 'quiz_player' ? true : false
    }
  },
  methods: {
    back_to_list () {
      this.$router.push({
        name: 'main'
      })
    },
    return_quiz () {
      this.dialog_back_to_main = false
      this.dialog_play_again = false
      // this.$refs.playing_room.play()
    },
    play_again () {
      this.dialog_play_again = false
      this.reset_game()
    }
  }
}
</script>
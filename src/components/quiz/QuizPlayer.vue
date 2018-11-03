<template>
  <v-app>
    <toolbar
      :page="'quiz_player'"
      :reset_game="reset_game"
    ></toolbar>
    <v-content class="blue darken-1">
      <playing-room
        :questions="questions"
        :quiz="quiz"
        ref="playing_room"
      ></playing-room>
    </v-content>
  </v-app>
</template>
<script>
import Toolbar from './Toolbar'
import PlayingRoom from './PlayingRoom'
export default {
  props: [
    'questions',
    'quiz'
  ],
  components: {
    Toolbar,
    PlayingRoom
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    reset_game () {
      this.$refs.playing_room.reset()
    }
  }
}
</script>
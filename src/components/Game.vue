<template>
  <v-container text-xs-center fluid>
    <v-layout row wrap v-if="!is_result_active">
      <v-flex xs12>
        <div style="font-size:20px;" class="white--text">
          Hi {{ player_name }}. You are playing {{ game.name }}
        </div>
      </v-flex>
      <v-flex xs12>
        <v-progress-linear
          color="orange lighten-1"
          height="20"
          :value="count"
        ></v-progress-linear>
      </v-flex>
      <v-flex xs12 class="mb-3">
        <v-card color="white" class="pa-2">
          <v-card-text class="px-0">
            <p style="font-size:20px;" class="ma-0 pa-0 font-weight-medium">{{ current_question.question }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-container fluid class="pa-0">
          <v-layout wrap>
            <v-flex xs6 v-for="(choice, i) in current_question.choices" class="pa-2">
              <v-btn :class="['btn-'+i, 'btn']" flat block @click="choose(choice.order)">
                <p class="ma-0 pa-0" style="font-size:17px;">{{ choice.content }}</p>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <result-page
          :corrections="corrections"
          :questions="questions"
        ></result-page>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ResultPage from './ResultPage'
export default {
  props: [
    'game',
    'questions'
  ],
  components:{
    ResultPage
  },
  data () {
    return {
      counter: null,
      count: 0,
      q_index: 0,
      corrections: 0,
      is_result_active: false
    }
  },
  created () {
    this.start_counter(parseInt(this.questions[this.q_index].time_limit))
  },
  destroyed () {
    console.log('Destroyed')
    this.stop_counter()
  },
  computed: {
    current_question () {
      let current_question = this.questions[this.q_index]
      let jumbled_choices = this.jumble_array(current_question.choices, current_question.choices.length)
      
      current_question.choices = jumbled_choices
      return current_question
    },
    player_name () {
      return sessionStorage.player_name ? sessionStorage.player_name : 'Alex'
    }
  },
  methods: {
    jumble_array(arr, n) {
      let result = new Array(n)
      let len = arr.length
      let taken = new Array(len)
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result
    },
    stop_counter () {
      clearInterval(this.counter)
    },
    start_counter (sec=20) {
      this.count = 0
      clearInterval(this.counter)

      this.counter = setInterval(() => {
        this.count += 1
        if(this.count > 100) {
          this.stop_counter()
          this.next_question()
        }
        console.log('dddd')// TODO: HERE
      }, sec*10)
    },
    get_answer_sheet (raw_correct_answer) {
      let str = raw_correct_answer;
      let res = str.split(',')
      return res
    },
    check_answer (answer, answer_sheet) {
      return answer_sheet.indexOf(answer.toString()) > -1 ? true : false
    },
    next_question () {
      if (this.is_last_question()) {
        this.show_result_page()
      } else {
        this.q_index += 1
        this.start_counter(parseInt(this.questions[this.q_index].time_limit))
      }
    },
    add_correction () {
      this.corrections += 1
    },
    is_last_question () {
      if (this.q_index < this.questions.length - 1) {
        return false
      }

      return true
    },
    show_result_page () {
      this.stop_counter()
      this.is_result_active = true
    },
    choose (answer) {
      let result = this.check_answer(answer, this.get_answer_sheet(this.questions[this.q_index].correct_answer))

      if (result) {
        this.add_correction()  
        console.log('Got it!!!')
      }

      this.next_question()
    }
  }
}
</script>
<style scoped>
  .btn {
    height:120px;
    background: white;
  }
  .btn-0 {
    border: 12px solid #ff5858;
  }
  .btn-1 {
    border: 12px solid #a5dc8b;
  }
  .btn-2 {
    border: 12px solid #f7c530;
  }
  .btn-3 {
    border: 12px solid #b150a9;
  }
</style>
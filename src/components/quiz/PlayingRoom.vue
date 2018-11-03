<template>
  <v-container text-xs-center fluid>
    <v-layout row wrap v-if="!is_result_active">
      <v-flex xs12>
        <div style="font-size:17px;" class="white--text">
          Hi {{ PLAYER_NAME }}. You are playing {{ quiz.name }}
        </div>
      </v-flex>
      <v-flex xs12 class="mt-3 mb-3">
        <div>
          <v-card color="white" class="pa-2">
            <v-card-text class="px-0">
              <div style="font-size:20px;" class="ma-0 pa-0 font-weight-medium hq-unselectable">{{ current_question.question }}</div>
              <p class="hq-unselectable">({{this.q_index + 1}}/{{this.questions.length}})</p>
            </v-card-text>
          </v-card>
          <v-progress-linear
            class="ma-0"
            color="orange lighten-1"
            height="6"
            :value="count"
          ></v-progress-linear>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container fluid class="pa-0">
          <v-layout wrap>
            <v-flex xs12 v-for="(choice, i) in current_question.choices" class="mb-3">
              <div :class="['btn-'+i, 'btn']" flat block @click="choose(choice.order)" style="cursor: pointer;">
                <div class="ma-0 pa-2 text-capitalize hq-unselectable" style="word-break: break-all;font-size:14px;">
                  {{ choice.content }}
                </div>
              </div>
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

import { jumble_array } from '../../helpers'

export default {
  props: [
    'quiz',
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
    this.start_counter(parseInt(this.current_question.time_limit))
  },
  destroyed () {
    this.stop_counter()
  },
  computed: {
    current_question () {
      let cq = this.questions[this.q_index]
      cq.choices = jumble_array(cq.choices, cq.choices.length)
      return cq
    },
  },
  methods: {
    reset () {
      this.stop_counter()
      this.counter = null,
      this.count = 0,
      this.q_index = 0,
      this.corrections = 0,
      this.is_result_active = false
      this.current_question.choices = jumble_array(this.current_question.choices, this.current_question.choices.length)
      this.start_counter(parseInt(this.current_question.time_limit))
    },
    pause_quiz () {
      this.stop_counter()
    },
    continue_quiz () {
      if (!this.is_result_active) {
        this.start_counter(parseInt(this.current_question.time_limit), this.count)  
      }
    },
    stop_counter () {
      clearInterval(this.counter)
    },
    start_counter (sec=20, count=0) {
      this.count = count
      clearInterval(this.counter)

      this.counter = setInterval(() => {
        this.count += 1
        if(this.count > 100) {
          this.stop_counter()
          this.next_question()
        }
        // console.log('hi')
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
        this.start_counter(parseInt(this.current_question.time_limit))
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
    choose (answer) {
      let result = this.check_answer(answer, this.get_answer_sheet(this.current_question.correct_answer))

      if (result) {
        this.add_correction()  
      }

      this.next_question()
    },
    show_result_page () {
      this.stop_counter()
      this.is_result_active = true
    }
  }
}
</script>
<style scoped>
  .btn {
    background: white;
    border: 3px solid #696969;
  }
</style>
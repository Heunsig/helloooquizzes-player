<template>
  <v-container fulid>
    <v-layout wrap>
      <v-flex xs12>
        <div class="white--text" style="font-size:30px;">{{ PLAYER_NAME }}</div>
        <div class="white--text" style="font-size:30px;">Congraturations!!!</div>
        <div class="ma-0 pa-0 white--text" style="font-size:40px;">Your score is {{ total_score }}</div>
        <div class="white--text" style="font-size:20px;">({{ simple_result }})</div>
      </v-flex>
      <v-flex xs12>
        <v-card max-width="400" class="mt-5 mb-3 hq-centered">
          <v-card-title>
            <h1 class="title hq-unselectable">Details</h1>
            <v-spacer></v-spacer>
            <v-btn
              icon
              small
              @click="toggle_expansion"
            >
              <v-icon v-if="is_expanded">expand_less</v-icon>
              <v-icon v-else>expand_more</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
        <v-card 
          v-for="decision in decisions" 
          v-if="is_expanded"
          max-width="400" 
          class="mb-2 hq-centered"
          :class="{'red':!decision.is_correct, 'green':decision.is_correct}"
          dark
        >
          <v-card-text>
            <v-container fluid class="pa-0">
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="text-xs-right">
                    <v-icon v-if="decision.is_correct">check</v-icon>
                    <v-icon v-else>close</v-icon>
                  </div>
                </v-flex>
                <v-flex xs12>
                  <div class="text-xs-left hq-detail-title first">Question</div>
                  <div class="text-xs-left hq-detail-content">{{ decision.question.question }}</div>
                </v-flex>
                <v-flex xs12>
                  <div class="text-xs-left hq-detail-title">My Answer</div>
                  <div class="text-xs-left hq-detail-content">
                    <span>
                      {{ decision.choice ? decision.choice.content:"Didn't choose" }}
                    </span>
                  </div>
                </v-flex>
                <v-flex xs12>
                  <div class="text-xs-left hq-detail-title">Correct Answer</div>
                  <div class="text-xs-left hq-detail-content">
                    <span v-for="(correct_answer, i) in decision.correct_answers">
                      {{ correct_answer.content }}<span v-if="i < decision.correct_answers.length - 1">, </span>
                    </span>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: [
    'decisions',
  ],
  data () {
    return {
      result: {},
      is_expanded: false
    }
  },
  created () {
    this.make_result()
    this.send_player()
    console.log('decisions', this.decisions)
    console.log('result', this.result)
  },
  computed: {
    correct_decisions () {
      return this.result.correct_decisions
    },
    total_score () {
      return (( this.correct_decisions.length / this.decisions.length) * 100).toFixed(0)
    },
    simple_result () {
      return `${this.correct_decisions.length} / ${this.decisions.length}`
    }
  },
  methods: {
    make_result () {
      let decisions = this.decisions
      
      for (let i in decisions) {
        let decision = decisions[i]
        let correct_numbers = this.get_correct_numbers(decision.question.correct_answer)

        decision.correct_answers = this.melon(decision.question, correct_numbers)
        if (decision.correct_answers.indexOf(decision.choice) > -1) {
          decision.is_correct = true
        } else{
          decision.is_correct = false
        }
      }

      this.result.decisions = decisions
      this.result.correct_decisions = this.get_correct_decisions(decisions)
    },
    get_correct_decisions (decisions) {
      let correct_decisions = []
      for (let i in decisions) {
        if (decisions[i].is_correct) {
          correct_decisions.push(decisions[i])
        }
      }

      return correct_decisions
    },
    get_correct_numbers (raw_correct_answer) {
      let str = raw_correct_answer;
      let res = str.split(',')
      return res
    },
    melon (question, correct_numbers) {
      let correct_answers = []
      let choices = question.choices
      for (let i in choices) {
        if (correct_numbers.indexOf(choices[i].order.toString()) > -1) {
          correct_answers.push(choices[i])
        }
      }

      return correct_answers
    },
    toggle_expansion () {
      this.is_expanded = !this.is_expanded
    },
    send_player () {
      let player = {
        name: this.PLAYER_NAME,
        score: this.total_score
      }

      this.$http.post(`${this.PATH_API}/quiz/${this.$route.params.quiz_id}/player`, player).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
  .test {
    background: red;
  }

  .hq-detail-title {
    font-size:13px;
    font-weight: bold;
    margin-top:5px;
  }
  .hq-detail-title.first {
    margin-top: 0px;
  }

  .hq-detail-content {
    font-size:15px;
  }

  .hq-detail-section {
    /*border:1px solid red;*/
  }
</style>

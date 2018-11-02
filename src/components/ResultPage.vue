<template>
  <v-container fulid>
    <v-layout>
      <v-flex xs12>
        <div class="white--text" style="font-size:30px;">Congraturation!!!</div>
        <div class="ma-0 pa-0 white--text" style="font-size:40px;">Your score is {{ ((corrections / questions.length) * 100).toFixed(0) }}</div>
        <div class="white--text" style="font-size:20px;">{{ corrections }} / {{ questions.length }}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: [
    'corrections',
    'questions'
  ]
}
</script>

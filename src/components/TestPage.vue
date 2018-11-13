<template>
  <v-app>
    <v-content>
      <v-container fluid class="pa-0">
        <v-layout wrap>
          <v-flex xs12 id="apple">
            <h1>Hellooo Quizzes</h1>
            <input type="text" v-model="search" style="border: 1px solid red;">
          </v-flex>
          <v-flex xs12 id="test">
            <RecycleScroller
              class="scroller"
              :items="list"
              :item-height="70"
            >
              <div slot-scope="{ item }" class="user">
                {{ item.name }}
              </div>
            </RecycleScroller>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
// import HyperList from 'hyperlist'
// import virtualList from 'vue-virtual-scroll-list'
import { RecycleScroller } from 'vue-virtual-scroller'

// Vue.component('RecycleScroller', RecycleScroller)

export default {
  components: {
    RecycleScroller
  },
  data () {
    return {
      items: [],
      search: '',
      list: [
        {
          name: 'abc'
        },
        {
          name: 'def'
        },
        {
          name: 'jie'
        },
        {
          name: 'opg'
        }
      ]
    }
  },
  methods: {
    init () {
      for (let i = 0 ; i < 10000 ; i++ ) {
        // console.log(i)
        let a = {
          name: 'Hello',
          creator: i,
        }  
        this.items.push(a)
      }
    }
  },
  created () {
    this.init()
  },
  mounted () {

  },
  computed: {
    filteredList() {
      return this.items.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase()) || 
                item.creator.toString().toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style scoped>
  .vrow {
    color:red;
  }

.scroller {
  height: 500px;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
<template>
  <v-app>
    <v-container fluid grid-list-lg class="blue darken-1 px-0">
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="text-xs-center white--text hq-unselectable">{{ APP_NAME }}</h1>
        </v-flex>
        <v-flex xs12>
          <div v-if="is_list_loaded">
            <v-card max-width="600" class="hq-centered card mb-3" v-if="_.isEmpty(quizzes)">
              <v-card-title>Sorry quizzes are not prepared...</v-card-title>
            </v-card>
            <virtual-list :size="129" :remain="filteredList.length" :style="{ height : scrollHeight+'px' }">
              <v-card max-width="600" class="hq-centered card mb-3" v-for="quiz in filteredList">
                <v-card-title primary-title class="pt-3 pb-2">
                  <div>
                    <h3 class="headline mb-0">{{ quiz.name }}</h3>
                  </div>
                </v-card-title>
                <v-card-text class="pt-1">
                    <div>{{ quiz.description }}</div>
                    <div class="card-meta">
                      <span class="card-meta-item">
                        <span class="card-meta-item-title">Creator:</span> 
                        <span class="card-meta-item-content">{{ quiz.creator }}</span>
                      </span>
                      <span class="card-meta-item">
                        <span class="card-meta-item-title">Created At:</span> 
                        <span class="card-meta-item-content">{{ quiz.created_at }}</span>
                      </span>
                    </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="play(quiz.id)" color="green lighten-1" dark>Play</v-btn>
                </v-card-actions>
              </v-card>
            </virtual-list>
          </div>
          <div v-else class="text-xs-center">
            <v-progress-circular
              indeterminate
              color="white"
            ></v-progress-circular>
          </div>
          <v-btn 
            dark 
            color="secondary" 
            fab
            icon
            fixed
            bottom
            right
            @click="toggle_search()">
              <v-icon v-if="!search_box">search</v-icon>
              <v-icon v-else>close</v-icon>
          </v-btn>
          <input
            v-model="search"
            id="searchBox" 
            type="text"
            class="searchBox"
          >
        </v-flex>
      </v-layout>
    </v-container>
  </v-app> 
</template>
<script>
import VirtualList from 'vue-virtual-scroll-list'

export default {
  components: {
    VirtualList
  },
  data () {
    return {
      quizzes: [],
      is_list_loaded: false,
      search: '',
      search_box: false,
      fab: true,
      scrollHeight: 0
    }
  },
  watch: {
    search (val) {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    filteredList() {
      return this.quizzes.filter(quiz => {
        return quiz.name.toLowerCase().includes(this.search.toLowerCase()) || 
                quiz.creator.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created () {
    this.get_quiz_list()
  },
  methods: {
    play (quiz_id) {
      this.$router.push({
        name: 'loading_room',
        params: {
          quiz_id: quiz_id
        }
      })
    },
    get_quiz_list () {
      this.$http.get(`${this.PATH_API}/quiz/list`).then(res => {
        console.log('res', res)
        this.quizzes = res.data.result
        this.is_list_loaded = true
        this.on_resize()
      }).catch(err => {
        console.log('Sever has some problems')
      })  
    },
    toggle_search (e) {
      let searchBox = document.querySelector('#searchBox')
      if (searchBox.classList.contains('searchBox-active')) {
          this.search_box = false
          searchBox.classList.remove('searchBox-active')
          setTimeout(() => {
            searchBox.style.display = 'none'
          }, 200)
      } else {
          this.search_box  = true
          searchBox.style.display = 'block'
          setTimeout(() => {
            searchBox.classList.add('searchBox-active')
          }, 100)
      }
    },
    on_resize () {
      if (this.is_list_loaded) {
        this.scrollHeight = window.innerHeight - 120
        window.addEventListener('resize', () => {
          this.scrollHeight = window.innerHeight - 120
        })
      }
    }
  }
}
</script>
<style scoped>
  .card {
    border-radius: 10px;
  }

  .searchBox { 
    opacity: 0;
    position:fixed;
    bottom:25px;
    right:0;
    background: #fff;
    border:3px solid #656565;
    width: 200px;
    padding: 5px;
    font-size:15px;
    -webkit-transition: all 0.3s ease-out;
       -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
         -o-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
 }
 
    .searchBox-active {
      opacity: 1;
      right: 82px;
    }

    .card-meta { 
      margin-top: 7px;
     }
    .card-meta > .card-meta-item {
      margin-right:10px;
    }
    .card-meta > .card-meta-item > .card-meta-item-title{
      margin-right: 5px;
      font-size: 15px;
      font-weight: bold;
    }
</style>
<style>
  .hq-centered {
    margin-left: auto;
    margin-right: auto;
  }
  .hq-unselectable {
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */   
  }
  /*html {
    overflow:hidden;
  }*/
</style>
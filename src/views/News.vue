<template lang="html">
  <div class="">
    <h1>News</h1>
    <div v-for="news in newsList" v-key="news.id" class="">
      <news-item :news="news"></news-item>
    </div>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    NewsItem
  },
  data: function() {
    return {
    }
  },
  computed: {
    ...mapGetters ([
      'newsList'
    ])
  },
  methods: {
    ...mapActions ([

    ])
  },
  mounted: function() {
    this.$store.dispatch('getNewsList')
  }
}
</script>

<style lang="css">
</style>

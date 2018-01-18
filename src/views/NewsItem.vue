<template lang="html">
  <div class="">
    <b-input v-model="news.id"></b-input>
    <b-input v-model="news.title"></b-input>
    <b-input v-model="news.points"></b-input>
    <b-input v-model="news.source"></b-input>
    <b-input v-model="news.comments"></b-input>
  </div>
</template>

<script>
export default {
  props: [
    'news'
  ],
  data: function() {
    return {
      news: {
        id: '',
        title: '',
        points: '',
        source: '',
        comments: ''
      }
    }
  },
  watch: {
    news: function(news) {
        Object.assign(this.news, news)
    }
  }
}
</script>

<style lang="css">
</style>

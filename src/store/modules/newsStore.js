import {newsApi} from 'api'
import * as TYPE from '../actionType/newsType'

const state = {
  newsList: []
}

const getters = {
	newsList: state => state.newsList
}

const mutations = {
	[TYPE.NEWS_LIST_REQUEST] (state) {

	},
	[TYPE.MEWS_LIST_SUCCESS] (state, newslist) {
		state.bannerlist = bannerlist.data
	},
	[TYPE.MEWS_LIST_FAILURE] (state) {

	}
}

const actions = {
	newsList({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.NEWS_LIST_REQUEST)
		newsApi.list().then((response) => {
			rootState.requesting = false
			commit(TYPE.NEWS_LIST_SUCCESS, response)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.NEWS_LIST_FAILURE)
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}

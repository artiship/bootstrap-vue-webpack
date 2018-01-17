import axios from 'axios'
import * as url from './urlConfig'

export const newsApi = {
  list() {
    return axios.get(url.news).then(({data}) => {
      return data;
    })
  }
}

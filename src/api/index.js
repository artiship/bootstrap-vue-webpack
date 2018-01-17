import * as url from 'urlConfig'
import axios from 'axios'

export const newsApi = {
  list() {
    return axios.get(url.news).then(({data}) => {
      return data;
    })
  }
}

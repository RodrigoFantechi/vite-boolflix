import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  error: null,
  films : null,
  // title: '',
  // originalTitle: '',
  // lenguage: '',
  // rate: '',

  callApi(name) {
    const config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key: 'ab909735a57a0d14313842405a2fd07c',
        query: name,
      }
    };

    axios(config)
      .then(function (response) {
        store.films = response.data.results
        console.log(store.films);

      })
      .catch(function (error) {
        console.log(error);
      });
  }
})

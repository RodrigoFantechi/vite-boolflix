import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  check: true,
  error: null,
  films: null,
  searchTitle: '',
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

  },
  checkInput() {

    let appoggio=''
    for (let i = 0; i < this.searchTitle.length; i++) {
      appoggio += ' ';

      if (this.searchTitle === appoggio) {
        this.check = false
      } else {
        this.check = true
      }
    }
  }
})

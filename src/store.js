import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  check: true,
  error: null,
  media: null,
  searchTitle: '',


  callApi(name) {

    const config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key: 'ab909735a57a0d14313842405a2fd07c',
        query: name,
        page: 1,
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        store.media = response.data.results
        console.log(store.media);

      })
      .catch(function (error) {
        console.log(error);
      });

     
  },
  checkInput() {

    let appoggio = ''
    for (let i = 0; i < this.searchTitle.length; i++) {
      appoggio += ' ';

      if (this.searchTitle === appoggio) {
        this.check = false
      } else {
        this.check = true
      }
    }
  },
  findFlags(lang) {
    if (lang === 'en') {
      return 'https://countryflagsapi.com/png/gb'
    } else {
      return 'https://countryflagsapi.com/png/' + lang
    }
  }
})


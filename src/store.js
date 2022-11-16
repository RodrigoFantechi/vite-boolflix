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
      }
    };

    const configTwo = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/tv',
      params: {
        api_key: 'ab909735a57a0d14313842405a2fd07c',
        query: name,
      }
    };

    this.callAxios(config)
    this.callAxios(configTwo)


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
  },
  callAxios(config) {
    axios(config)
      .then(function (response) {
        if (store.media === null) {
          store.media = response.data.results
        } else {
          response.data.results.forEach(element => {
            store.media.push(element)
          });
        }
        console.log(store.media);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

})


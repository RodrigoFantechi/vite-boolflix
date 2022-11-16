import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  unloackButton: true,
  check: true,
  error: null,
  media: null,
  searchTitle: '',

  callApi(name) {
    this.media =null;
    this.callAxios('https://api.themoviedb.org/3/search/movie?api_key=ab909735a57a0d14313842405a2fd07c&query='+name)
    this.callAxios('https://api.themoviedb.org/3/search/tv?api_key=ab909735a57a0d14313842405a2fd07c&query='+name)
    this.unloackButton = false,
    this.check = false
  },
  checkInput() {
    if( this.unloackButton === false){
      this.check = true
    }

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
    } else if(lang === 'ja'){
      return 'https://countryflagsapi.com/png/JP'
    }
    else {
      return 'https://countryflagsapi.com/png/' + lang
    }
  },
  callAxios(call) {
    axios.get(call)
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


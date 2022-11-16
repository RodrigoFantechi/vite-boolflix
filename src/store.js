import {reactive} from 'vue'
import axios from 'axios'

export const store = reactive({
    error: null,
    callApi(url) {
        axios.get(url).then(resp => {
          console.log(resp);
        }).catch(err => {
          console.error(err.message);
          store.error = err.message
        })
      }
})

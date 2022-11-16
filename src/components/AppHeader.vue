
<script>
import {store} from '../store' 
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
  <div class="search d-flex gap-2 m-5">
            <input type="search" class="form-control w-25" v-model="store.searchTitle" @input="store.checkInput">
            <button type="submit" class="btn btn-primary" :class="store.check === false ? 'disabled' :''" @click="store.callApi(store.searchTitle)" >Search</button>
         </div>
</template>
<style lang="scss" scoped>
    .disabled{
        pointer-events:none;
    }
</style>

<script>
import { store } from '../store'
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
    <div class="container d-flex justify-content-center">
        <div class="search d-flex gap-2 my-5 w-50">
            <input type="search" class="form-control" v-model="store.searchTitle" @input="store.checkInput" @keyup.enter="store.callApi(store.searchTitle)">
            <button type="submit" class="btn btn-primary" :class="store.check === false ? 'disabled' : ''"
                @click="store.callApi(store.searchTitle)">Search</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.disabled {
    pointer-events: none;
}
</style>
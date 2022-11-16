
<script>
import { store  } from "../store";
export default {
    name: 'FilmList',
    data() {
        return {
            store
        }
    },
}
</script>
<template >
        <div class="col" v-for="film in store.films">
            <p>{{film.title}}</p>
            <p>{{film.original_title}}</p>
            <p>{{film.original_language}}</p>
            <p>{{film.vote_average}}</p>
        </div>
</template>
<style lang="scss" scoped>
    
</style>
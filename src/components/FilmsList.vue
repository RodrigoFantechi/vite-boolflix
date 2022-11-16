
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
        <div class="col" v-for="film in store.media">
            <p>{{film.title}}</p>
            <p>{{film.original_title}}</p>
            <img :src="store.findFlags(film.original_language)" alt="flag not available">
            <p>{{film.vote_average}}</p>
        </div>
</template>
<style lang="scss" scoped>
    img{
        width: 35px;
    }
</style>
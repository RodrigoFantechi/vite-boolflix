
<script>
import { store } from "../store";
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
        <div class="my_card">
            <p>{{ film.title || film.name }}</p>
            <p>{{ film.original_title || film.original_name }}</p>
            <img :src="store.findFlags(film.original_language)" alt="flag not available">
            <p>{{ film.vote_average }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.col {
    
    .my_card {
        height: 100%;
        background-color: lightsalmon;
        img {
            width: 35px;
        }
    }
}
</style>

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
        <div class="my_card p-3">
            <div class="image mb-2">
                <img :src="'https://image.tmdb.org/t/p/original/' + film.poster_path" alt="image not available">
            </div>
            <h5>{{ film.title || film.name }}</h5>
            <h6>{{ film.original_title || film.original_name }}</h6>
            <div class="flag">
                <img :src="store.findFlags(film.original_language)" alt="flag not available">
            </div>
            <p>rate: {{ film.vote_average }}/10</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.col {

    .my_card {
        height: 100%;
        background-color: lightsalmon;

        .image {
            
            width: 210px;
            img {
                max-width: 100%;
                object-fit: cover;
            }
        }

        .flag {
            img {
                width: 35px;
            }
        }
    }
}
</style>
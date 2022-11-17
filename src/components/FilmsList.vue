
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
            <p class="stars">
                <font-awesome-icon icon="fa-solid fa-star" v-for="(singlestar,index) in 5" :class="Math.floor(film.vote_average/2)>index ?'gold':'gray'" />
            </p>
            

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

        .stars {
            .gray {
                color: #ededed;
            }

            .gold {
                color: yellow;
            }
        }
    }
}
</style>
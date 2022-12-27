
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
    <div class="col mb-5" v-for="film in store.media" >
        <div class="my_card">
            <img class="foto" :src="'https://image.tmdb.org/t/p/original/' + film.poster_path"
                alt="image not available">

            <div class=" details p-3">
                <div class="info">
                    <h5>Title: {{ film.title || film.name }}</h5>
                    <h6 v-if="(film.title || film.name) !== (film.original_title || film.original_name)">Original Title: {{ film.original_title || film.original_name }}</h6>
                </div>
                <div class="flag d-flex">
                    <span>language:</span>
                    <img :src="store.findFlags(film.original_language)" alt="flag not available">
                </div>
                <p class="stars mt-1">
                    <span>Rate:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(singlestar, index) in 5"
                        :class="Math.floor(film.vote_average / 2) > index ? 'gold' : 'gray'" />
                </p>
                <p class="description">{{ film.overview }}</p>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.col {
    color: white;


    .my_card {
    
        height: 408px;
        border: 1px solid rgba(237, 237, 237, 0.247);
        border-radius: 10px;


        .foto {
            border-radius: 10px;
            height: 100%;
            width: 100%;
            object-fit: cover;
           
        }


        .details {
            display: none;
            overflow-y: auto;
            height: 408px;

            .info {
                h5 {
                    font-size: 1rem;
                }

                h6 {
                    font-size: 0.75rem;
                }
            }

            .flag {
                img {
                    margin-left: 0.25rem;
                    width: 25px;
                    object-fit: contain;

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

            .description {
                font-size: 0.65rem;
            }

        }
       
        &:hover .foto{
            display: none;
        }
        &:hover .details{
            display: block;
        }
    }
}
</style>
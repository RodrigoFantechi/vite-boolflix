
<script>
import FilmsList from './FilmsList.vue';
import {store} from '../store' 
export default {
    name: 'AppMain',
    components:{
        FilmsList,
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template >
    <main>
    <div class="container-fluid p-my text-white">
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            <FilmsList/>
        </div>
    </div>
</main>
</template>
<style lang="scss" scoped>
    .p-my{
        padding: 0 10rem;
    }
</style>
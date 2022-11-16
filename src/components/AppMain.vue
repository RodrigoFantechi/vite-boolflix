
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
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-5 g-3">
            <FilmsList/>
        </div>
    </div>
  
</template>
<style lang="scss" scoped>
    
</style>
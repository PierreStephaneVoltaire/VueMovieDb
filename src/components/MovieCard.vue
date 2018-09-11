<template>
<el-card>
    <el-row>
        <el-col :span="24">
            <p class="movie-title">{{movie.getTitle()}}</p>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">

            <img :src="movie.getPath()" height="130" width="auto">
        </el-col>

    </el-row>
    <el-row>
        <el-col :span="12">

            <p>release date: {{movie.getFirst_air_date()}}</p>
        </el-col>
        <el-col :span="12">

            <p>popularity: {{movie.getPopularity()}}</p>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">

            <p class="overview">
                {{movie.getOverview()}}
            </p>
        </el-col>
    </el-row>
</el-card>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "vue-property-decorator";
import { Movie } from '@/models/Movie';

@Component
export default class MovieCard extends Vue {
  @Prop() private movie!: Movie;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

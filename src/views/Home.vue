<template>
  <div class="home">
    <el-card>
    <el-row>
      <el-col :span="16">
        <el-input placeholder="Please input" v-model="input"></el-input>
      </el-col>
      <el-col :span="8" >
        <el-button size="large" :loading="isSearching" icon="el-icon-search" v-on:click="getMoviesFromApi" type="primary">Search</el-button>
      </el-col>
    </el-row>
  </el-card>
    <div v-for="(movie) in  movies" :key="movie.id">
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

    </div>

  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import {
    Movie
  } from '@/models/Movie';
  import {
    MovieService
  } from "@/services/dataprovider"
  @Component({
    components: {},
  })
  
  export default class Home extends Vue {
    private movies: Movie[] = new Array < Movie > ();
    private movieService: MovieService = new MovieService();
    public isSearching: boolean = false;
    private input:string="";
    resetList() {
      for (let index = 0; index <  this.movies.length; index++) {
       this.$delete(this.movies, index)
        console.log("deleted")
      }}
    getMoviesFromApi() {
      if (this.input.length>0){
      this.isSearching = !this.isSearching;
      this.resetList();
      this.movieService.getMovies(this.input).then((result) => {
        result.forEach((movie) => {
          this.movies.push(movie);
        })
      })
console.log(this.movies.length)
      this.isSearching = !this.isSearching;}
    }
  
    getMovieList() {
      return this.movies;
    }
  }
</script>

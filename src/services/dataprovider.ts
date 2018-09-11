import { Movie } from "@/models/Movie";
import axios from "axios";

export class MovieService {
  private BaseApiUrl = "http://api.themoviedb.org/3/";
  private API_key = "31715fcf36132790e17c1ed113a3c822";
  private mode = "search/multi?query=";
  private key = `&api_key=${this.API_key}`;
  movieslist: Movie[] = new Array();
  // tslint:disable-next-line:no-empty
  constructor() {}
  populatemovie(movie: any) {
    let movieObj = new Movie();
    movieObj.setMovieID(movie.id);
    movieObj.setOverview(movie.overview);
    movieObj.setPath(movie.poster_path);
    movieObj.setPopularity(movie.popularity);
    movieObj.setTitle(movie, movie.media_type);
    movieObj.setFirst_air_date(movie.first_air_date);
    this.movieslist.push(movieObj);
  }
  async getMovies(movie: string) {
    let movieName = `&query=${encodeURI(movie)}`;
    let searchQuery = this.BaseApiUrl + this.mode + this.key + movieName;
    const response = await axios.get(searchQuery);
    response.data.results.forEach((movie: any) => {
      this.populatemovie(movie);
      if (movie.media_type === "person") {
        movie.known_for.forEach((subelement: any) => {
          this.populatemovie(subelement);
        });
      }
    });
    console.log(this.movieslist);

    return this.movieslist;
  }

  getMovie(id: number): Movie {
    let index: number = 0;
    for (let i = 0; i < this.movieslist.length; i++) {
      if (this.movieslist[i].getMovieID() === id) {
        index = i;
        break;
      }
    }
    return this.movieslist[index];
  }
}

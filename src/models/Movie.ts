export class Movie {
  private movieID!: number;
  private Title: string;
  private path: string;
  private overview: string;
  private popularity: number;
  private first_air_date: string;
  constructor() {
    this.Title = "N/A";
    this.path = "";
    this.overview = "N/A";
    this.popularity = 0;
    this.first_air_date = "N/A";
  }
  getMovieID(): number {
    return this.movieID;
  }
  getTitle(): string {
    return this.Title;
  }
  getPath(): string {
    return this.path;
  }
  getOverview(): string {
    return this.overview;
  }
  getPopularity(): number {
    return this.popularity;
  }
  getFirst_air_date(): string {
    return this.first_air_date;
  }
  setMovieID(movieID: number): void {
    if (movieID != null && movieID !== 0) {
      this.movieID = movieID;
    }
  }
  setTitle(element:any, mediaType:string): void {
    if (mediaType === "tv") {
        this.Title=`${element.name}  (TV series)`;
    } else {
        this.Title=`${element.original_title}`;
    }
  }
  setPath(path: string): void {
    if (path != null && path !== "" && path !== "null") {
        this.path =`http://image.tmdb.org/t/p/w92${path}`;

    }
  }
  setOverview(overview: string): void {
    if (overview != null && overview !== "") {
        this.overview =overview;
    }
  }
  setPopularity(popularity: number): void {
    if (popularity != null &&popularity.toString() !== "") {

        this.popularity = popularity;
    }
  }
  setFirst_air_date(first_air_date: string): void {
    if (first_air_date != null && first_air_date !== "") {
        this.first_air_date=first_air_date;
    }
  }
}

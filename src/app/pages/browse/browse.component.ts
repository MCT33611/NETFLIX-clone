import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { BG_IMG_URL, tmdbConfig } from '../../constants/config';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movie';
import { MovieVideoPopupComponent } from '../../components/movie-video-popup/movie-video-popup.component';
@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent,MovieVideoPopupComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  tmdbConfig = tmdbConfig;
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcommingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  bannerMovie !: Movie;
  movieService = inject(MovieService)
  IsHiddenPopup = true;
  IsHiddenPopupFromCard=true;
  PopupLinkFromCard = ""
  hideorunhideForCard(link : string){
    this.PopupLinkFromCard = link;
    this.IsHiddenPopupFromCard = !this.IsHiddenPopupFromCard;
  }
  hideorunhide(){
    this.IsHiddenPopup = !this.IsHiddenPopup;
  }
  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      // console.log(result);
      this.popularMovies = result.results.splice(0, 4);

      this.popularMovies.forEach((MovieEle:any)=>{
        this.movieService.getMoviesVideo(MovieEle.id).subscribe((res:any)=>{
          MovieEle.videoLink = `https://www.youtube.com/embed/${res.results.find((x:any) => (x.site = "YouTube")).key}`
          console.log(MovieEle.videoLink );
          
        })
      })

      const randomIndex = Math.floor(Math.random() * this.popularMovies.length);

      this.bannerMovie = this.popularMovies[randomIndex];
      // this.movieService.getMoviesVideo(this.bannerMovie.id).subscribe((res:any)=>{
      //   this.bannerMovie.videoLink = `https://www.youtube.com/embed/${res.results.find((x:any) => (x.site = "YouTube")).key}`
      //   console.log(this.bannerMovie.videoLink );
        
      // })
      
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovies = result.results.splice(0, 4);
      this.topRatedMovies.forEach((MovieEle:any)=>{
        this.movieService.getMoviesVideo(MovieEle.id).subscribe((res:any)=>{
          MovieEle.videoLink = `https://www.youtube.com/embed/${res.results.find((x:any) => (x.site = "YouTube")).key}`
          console.log(MovieEle.videoLink );
          
        })
      })
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovies = result.results.splice(0, 4);
      this.nowPlayingMovies.forEach((MovieEle:any)=>{
        this.movieService.getMoviesVideo(MovieEle.id).subscribe((res:any)=>{
          MovieEle.videoLink = `https://www.youtube.com/embed/${res.results.find((x:any) => (x.site = "YouTube")).key}`
          console.log(MovieEle.videoLink );
          
        })
      })
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcommingMovies = result.results.splice(0, 5);
      this.upcommingMovies.forEach((MovieEle:any)=>{
        this.movieService.getMoviesVideo(MovieEle.id).subscribe((res:any)=>{
          MovieEle.videoLink = `https://www.youtube.com/embed/${res.results.find((x:any) => (x.site = "YouTube")).key}`
          console.log(MovieEle.videoLink );
          
        })
      })
    });
  }

}

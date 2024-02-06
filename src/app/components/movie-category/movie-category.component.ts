import { Component, Input, Output, input,EventEmitter } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../types/movie';
import { MovieVideoPopupComponent } from '../movie-video-popup/movie-video-popup.component';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [MovieCardComponent,MovieVideoPopupComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.css'
})
export class MovieCategoryComponent {
  @Input() title = ""
  @Input() List : Movie[] = [];
  @Output() clickVideoPlay = new EventEmitter<string>()
  VideoPlay(vidLink:string){
    this.clickVideoPlay.emit(vidLink)
  }
}

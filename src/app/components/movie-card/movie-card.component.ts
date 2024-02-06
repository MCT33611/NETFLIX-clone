import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { tmdbConfig } from '../../constants/config';
import { Movie } from '../../types/movie';
import { MovieVideoPopupComponent } from '../movie-video-popup/movie-video-popup.component';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MovieVideoPopupComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() details! : Movie ;
  tmdbConfig=tmdbConfig;

  @Output() clickVideoPlay = new EventEmitter<string>()
  VideoPlay(vidLink:string){
    this.clickVideoPlay.emit(vidLink)
  }
}

import { Component,Input, inject,  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-video-popup',
  standalone: true,
  imports: [],
  templateUrl: './movie-video-popup.component.html',
  styleUrl: './movie-video-popup.component.css'
})
export class MovieVideoPopupComponent {
  sanitizer = inject(DomSanitizer)
  @Input() videoLink:string = "";
  @Input() IsHidden = true
  close(){
    this.IsHidden = true;
  }
}

import { Component } from '@angular/core';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faHome = faHomeUser;
  faFacebook = faFacebookSquare;
  faTwitter = faTwitterSquare;
  faYoutube = faYoutubeSquare;
}

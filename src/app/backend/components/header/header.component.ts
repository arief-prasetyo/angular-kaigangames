import { Component } from '@angular/core';
import { faSignOut, faUserSecret, faHouse, faGears } from '@fortawesome/free-solid-svg-icons'; 
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  faSignOut = faSignOut;
  faUserSecret = faUserSecret;
  faHouse = faHouse;
  faGears = faGears;

  constructor(private storageService: TokenStorageService, private authService: AuthService){}
  
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

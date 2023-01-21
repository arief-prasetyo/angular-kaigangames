import { Component } from '@angular/core';
import { faHomeUser, faArrowRight, faCircleInfo, faUserNinja, faRocket, faGamepad, faSquarePhone } from '@fortawesome/free-solid-svg-icons'; 
import { faSlideshare} from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.sass']
})
export class NavigationsComponent {
  faHome = faHomeUser;
  faSlider = faSlideshare;
  faArrowRight = faArrowRight;
  faCircleInfo = faCircleInfo;
  faUserNinja = faUserNinja;
  faRocket = faRocket;
  faGamepad = faGamepad;
  faSquarePhone = faSquarePhone;
}

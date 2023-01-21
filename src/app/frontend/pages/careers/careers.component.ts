import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faBed, faPersonPregnant, faSuitcaseMedical, faGlasses, faUtensils,
          faHandsHoldingCircle, faHandsHoldingChild, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.sass']
})
export class CareersComponent implements OnInit{
  //fontawesome
  faBed = faBed;
  faPersonPregnant = faPersonPregnant;
  faSuitcaseMedical = faSuitcaseMedical;
  faGlasses = faGlasses;
  faHandHoldingCirlce = faHandsHoldingCircle;
  faHandsHoldingChild = faHandsHoldingChild;
  faSkullCrossbones = faSkullCrossbones;
  faUtensils = faUtensils;
  ngOnInit(): void {
    
  }
}

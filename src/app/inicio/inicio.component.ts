import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  images = [
    { path: '../../assets/img/close-up-on-volunteer-oganizing-stuff-for-donation.jpg' },
    { path: '../../assets/img/close-up-volunteer-oganizing-stuff-donation.jpg' },
    { path: '../../assets/img/different-people-doing-volunteer-work-with-food.jpg' },
    { path: '../../assets/img/group-of-different-people-volunteering-at-a-foodbank-for-poor-people.jpg' },
    { path: '../../assets/img/medium-shot-man-hugging-woman.jpg' },
    { path: '../../assets/img/people-doing-volunteer-work-at-a-foodbank.jpg' },
    { path: '../../assets/img/volunteers-collecting-food-donations-medium-shot.jpg' },
    { path: '../../assets/img/volunteers-preparing-boxes-with-food-donations.jpg' },
    { path: '../../assets/img/young-peeple-red-packing-cardboards-with-humanitarian-help.jpg' },
    { path: '../../assets/img/courage-courage-the-cowardly-dog-1999-2JD8XXJ.jpg' },
  ]

  ngOnInit() {
    window.scroll(0, 0)
  }

  

}

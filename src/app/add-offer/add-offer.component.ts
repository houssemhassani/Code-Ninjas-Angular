import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/Offer';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offer!:Offer;
  constructor() { }

  ngOnInit(): void {
  }

  addOffer(){
  }
 

}

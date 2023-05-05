import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../models/Offer';
import { TypeOffer } from '../models/TypeOffer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private readonly apiUrl="http://localhost:8089/pidev/offre";

  constructor(private http : HttpClient) { }
  getAllOffers(){return this.http.get<Offer[]>(this.apiUrl);
  }

  

}

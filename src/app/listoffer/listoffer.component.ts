import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/Offer';
import { OfferService } from '../service/offer.service';
import { CandidacyService } from '../service/candidacy.service';
import { ListCandidaturesComponent } from '../list-candidatures/list-candidatures.component';
import { Candidacy } from '../models/Candidacy';
import { TypeOffer } from '../models/TypeOffer';
import { FeedBackService } from '../service/feedback.service';
import { AddFeedBackComponent } from '../add-feed-back/add-feed-back.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listoffer',
  templateUrl: './listoffer.component.html',
  styleUrls: ['./listoffer.component.css']
})
export class ListofferComponent implements OnInit {
  listOffer !:Offer[];
  offer!:Offer;
  constructor(private offerService:OfferService,
    private candidacyService:CandidacyService,private feedbackService:FeedBackService,private route: ActivatedRoute,
    private router: Router) { 
     this.offerService.getAllOffers().subscribe ((response: Offer[]) => {

        this.listOffer = response;
    });
    }

  ngOnInit(): void {
    this.listOffer;
      this.offer=new Offer();
  }
  /*onDelete(idOffer:number){
    this.offerService.deleteOffer(idOffer).subscribe();
    this.ngOnInit();
  }

  saveOffer(idUniv:number){
    this.offerService.addOffre(this.offer,idUniv).subscribe(()=>
    
      this.listOffer=[this.offer,...this.listOffer]
    );
  }*/
  addCandidacy(idOffer:number){
    this.candidacyService.saveCandidacy(idOffer).subscribe((data:any)=>
      ListCandidaturesComponent.listCandidacy=[data,...ListCandidaturesComponent.listCandidacy]);
  }
  /*retrieveOffre(offerId:number){
    this.offerService.retrieveOffre(offerId).subscribe(
      (data:Offer)=>this.offer=data);
  }
  getAvailableOffer(){
    this.offerService.getAvailableOffer().subscribe((
      data:Offer[]) =>
      this.listOffer=data);
  }
  getAllTypeOffer(typeOffer:TypeOffer){
    this.offerService.getAllTypeOffer(typeOffer).subscribe(
      (data:Offer[])=>
      this.listOffer=data
    );
  }*/
  AddFeedback(idOffer:number){
    //AddFeedBackComponent.idOfferFeedback=idOffer;
    AddFeedBackComponent.id=idOffer;
    this.router.navigate(['addFeedBack']);
    //this.feedbackService.saveFeedBackOffer(idOffer).subscribe((data:any)=>{console.log("Added");})

  }

}


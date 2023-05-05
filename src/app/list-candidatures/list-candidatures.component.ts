import { Component, OnInit } from '@angular/core';
import { Candidacy } from '../models/Candidacy';
import { CandidacyService } from '../service/candidacy.service';
import { Offer } from '../models/Offer';
import { TypeCandidacy } from '../models/TypeCandidacy';

@Component({
  selector: 'app-list-candidatures',
  templateUrl: './list-candidatures.component.html',
  styleUrls: ['./list-candidatures.component.css']
})
export class ListCandidaturesComponent implements OnInit {
  static listCandidacy:Candidacy[];
  listCandidacy1!:Candidacy[];
  candidacy !: Candidacy;
  type!:TypeCandidacy;
  
  constructor(private candidacyService:CandidacyService) { 
    
}
  ngOnInit(): void {
    this.candidacyService.getCandidaciesByIdCandidate().subscribe((response: Candidacy[]) => {
      
      this.listCandidacy1 =  response.sort((a,b)=>new Date(a.dateCreation).getTime() - new Date(b.dateCreation).getTime());
  });


  }
  makeProcessing(id:number){
    console.log("///////////////////");
    this.candidacyService.makeCandidacyOnProcessing(id).subscribe((data:any)=>{this.listCandidacy1=[data,...this.listCandidacy1]});
    this.ngOnInit();
  }
  makeAccepted(id:number){
    this.candidacyService.makeCandidacyAccepted(id).subscribe((data:any)=>{this.listCandidacy1=[data,...this.listCandidacy1]});
    this.ngOnInit();
  }
  onDelete(id:number){
    console.log("deleted");
    this.candidacyService.deleteCandidacy(id).subscribe();
    this.ngOnInit();
  }
  onSort(){
    this.listCandidacy1=this.listCandidacy1.sort((a,b)=>new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
  }
  onProcessing(){
    this.listCandidacy1=this.listCandidacy1.filter(p=>p.typeCandidacy==TypeCandidacy.Processing);

  }

  onAccepted(){
    this.listCandidacy1=this.listCandidacy1.filter(p=>p.typeCandidacy==TypeCandidacy.Accepted);
  }
  
  

}

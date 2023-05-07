import { Component, OnInit } from '@angular/core';
import { Candidacy } from '../models/Candidacy';
import { CandidacyService } from '../service/candidacy.service';
import { Offer } from '../models/Offer';

@Component({
  selector: 'app-list-candidatures',
  templateUrl: './list-candidatures.component.html',
  styleUrls: ['./list-candidatures.component.css']
})
export class ListCandidaturesComponent implements OnInit {
  static listCandidacy:Candidacy[];
  listCandidacy1!:Candidacy[]|undefined;
  candidacy !: Candidacy;
  constructor(private candidacyService:CandidacyService) { 
    this.candidacyService.getCandidaciesByIdCandidate().subscribe((response: Candidacy[]) => {

      this.listCandidacy1 = response;
  });
}

  ngOnInit(): void {
    this.listCandidacy1;
      
  }
  onDelete(id:number){
    console.log("deleted");
    this.candidacyService.deleteCandidacy(id).subscribe();
    this.ngOnInit();
  }

}

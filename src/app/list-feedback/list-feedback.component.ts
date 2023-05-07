import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/Feedback';
import { FeedBackService } from '../service/feedback.service';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  listCandidacy1!:Feedback[]|undefined;
  candidacy !: Feedback;
  constructor(private feedBackService:FeedBackService) { 
    
}

  ngOnInit(): void {
    this.feedBackService.getFeedbacks().subscribe((response: Feedback[]) => {

      this.listCandidacy1 = response;
  });
      
  }
  onDelete(id:number){
    this.feedBackService.deleteFeedback(id).subscribe();
    this.ngOnInit();
  }
}
 
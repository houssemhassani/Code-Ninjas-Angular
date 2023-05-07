import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Feedback } from '../models/Feedback';
import { FeedBackService } from '../service/feedback.service';
@Injectable()
@Component({
  selector: 'app-add-feed-back',
  templateUrl: './add-feed-back.component.html',
  styleUrls: ['./add-feed-back.component.css'],
})
export class AddFeedBackComponent implements OnInit {
  public feedbackform = new FormGroup({
    content: new FormControl(''),
    subject: new FormControl('')

  });
  //static idOfferFeedback:number;
  feedback:Feedback;
  static id:number;
  
  constructor(private feedbackService:FeedBackService,private route:ActivatedRoute,private router:Router) { 
    this.feedback=new Feedback();
  }

  ngOnInit(): void {
  }
  addFeedback(){
   // this.id =  this.route.snapshot.params;
    console.log(AddFeedBackComponent.id);
    const feedback1={subject:this.feedbackform.controls.subject.value,content:this.feedbackform.controls.content.value}
    //feedback1:Feedback;
    console.log(this.feedbackform.controls.subject.value)
   // feedback1.subject!=this.feedbackform.controls.subject.value;
    //feedback1.content!=this.feedbackform.controls.content.value;
    this.feedbackService.saveFeedBackOffer(AddFeedBackComponent.id,feedback1).subscribe((data:any)=>{console.log("Added");})

  }

}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidacy } from '../models/Candidacy';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Appointment } from '../models/Appointment';
import { Feedback } from '../models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
  private readonly apiUrl="http://localhost:8089/pidev/feedback/";

  constructor(private http : HttpClient) { }
   
   getFeedbacks(){
    console.log("********************")
    return this.http.get<Feedback[]>("http://localhost:8089/pidev/feedback/affichage");
  }
  saveFeedBackOffer(p: number,feedback:any){
    return this.http.post(this.apiUrl+"addcandidateFeedback/"+p+"/"+2+"/"+77887744,feedback);

  }
  deleteFeedback(p: number){
    return this.http.delete(this.apiUrl+"removefeedback/"+p);

  }
  getAppointmentByIdCandidacy(id:number){
    return this.http.get<Appointment[]>(this.apiUrl+"getAppointmentByIdCandidacy/"+id);
  }
  getAppointmentsWithCloseDateAndIdCandidate(){
    return this.http.get<Appointment[]>(this.apiUrl+"getAppointmentsWithCloseDateAndIdCandidate")
  }
  getAllAppointmentByIdCandidate(){
    return this.http.get<Appointment[]>(this.apiUrl+"getAllAppointmentByIdCandidate");
  }
}

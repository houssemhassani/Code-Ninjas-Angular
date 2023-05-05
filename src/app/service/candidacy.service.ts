import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidacy } from '../models/Candidacy';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class CandidacyService {
  private readonly apiUrl="http://localhost:8089/pidev/candidacy/";

  constructor(private http : HttpClient) { }
   
   getCandidaciesByIdCandidate(){
    //console.log("********************")
    return this.http.get<Candidacy[]>("http://localhost:8089/pidev/candidacy/getCandidacyById/"+2);
  }
  saveCandidacy(p: number){
    return this.http.post(this.apiUrl+"addCandidacy/"+2+"/"+p,null);

  }
  deleteCandidacy(p: number){
    return this.http.delete(this.apiUrl+"deleteCandidacy/"+p);

  }
  makeCandidacyOnProcessing(p:number)
  {
    console.log("---------");
     return this.http.post("http://localhost:8089/pidev/recuiterCandidacy/makeCandidacyOnProcessing/"+p,null);
  }
  makeCandidacyAccepted(p:number)
  {
    console.log("+++++++++++")
    return this.http.post("http://localhost:8089/pidev/recuiterCandidacy/makeCandidacyAcepted/"+p,null)
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

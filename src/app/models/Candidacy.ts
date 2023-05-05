import { Appointment } from "./Appointment";
import { Feedback } from "./Feedback";
import { Offer } from "./Offer";
import { TypeCandidacy } from "./TypeCandidacy";
import { User } from "./User";

export class Candidacy{

    
     idCandidacy!:number ;
     candidate!:User ;
     offer!:Offer;
     appointment?:Appointment ;
     dateCreation!:Date ;
     typeCandidacy?:TypeCandidacy;
     feedbacks?:  Array<Feedback> ;
}
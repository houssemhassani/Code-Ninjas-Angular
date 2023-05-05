import { Candidacy } from "./Candidacy";
import { TypeOffer } from "./TypeOffer";
import { University } from "./University";
import { User } from "./User";

export class Offer{
     idOffer!:number;
     title!:string ;
     description!:string;
     scoreOffer!:number;
     dateCreation!:Date;
     nbrPlaceDisponible!:number;
     dateExpiration!:Date;
     typeOffer!:TypeOffer ;
     applied!:boolean;
     recruiter!:User;
     university!:University;
     candidacies!:Candidacy[];
    
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environnement } from "../environnements/environnement";
import { Produit } from "./models/produit";

@Injectable()
export class ApiService {
  produits: Observable<Produit[]>;
  produit: Produit;

  constructor(private http: HttpClient) {}
  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environnement.backendProduit);
  }
}

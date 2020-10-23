import { Component, OnInit } from "@angular/core";
import { Produit } from "../models/produit";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.css"]
})
export class CatalogueComponent implements OnInit {
  produits: Observable<Produit[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.produits = this.apiService.getProduits();
  }
}

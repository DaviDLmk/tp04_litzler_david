import { Component, OnInit } from "@angular/core";
import { Produit } from "../models/produit";
import { Observable } from "rxjs";

@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.css"]
})
export class CatalogueComponent implements OnInit {
  produits: Observable<Produit[]>;
  filterWord: string;

  constructor() {}

  ngOnInit() {}
}

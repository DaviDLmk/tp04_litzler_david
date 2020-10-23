import { Component, OnInit } from "@angular/core";
import { Produit } from "../models/produit";
import { ApiService } from "../api.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  produit: Produit;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}

import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule
} from "../../../node_modules/@angular/router/router";
import { PanierComponent } from "../panier/panier.component";
import { AccueilComponent } from "../accueil/accueil.component";
import { CompteClientComponent } from "../compte-client/compte-client.component";
import { CatalogueComponent } from "../catalogue/catalogue.component";

export const appRouteList: Routes = [
  {
    path: "accueil",
    component: AccueilComponent
  },
  {
    path: "panier",
    component: PanierComponent
  },
  {
    path: "compte-client",
    component: CompteClientComponent
  },
  {
    path: "catalogue",
    component: CatalogueComponent
  },
  {
    path: "**",
    redirectTo: "accueil"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRouteList)]
})
export class AppRoutingModule {}

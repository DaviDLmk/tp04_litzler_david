import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PanierComponent } from "./panier/panier.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { CompteClientComponent } from "./compte-client/compte-client.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { DetailComponent } from "./detail/detail.component";
import { Routes, RouterModule } from "@angular/router";

const appRouteList: Routes = [
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
  },
  {
    path: "detail/:id",
    component: DetailComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouteList)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PanierComponent,
    CatalogueComponent,
    CompteClientComponent,
    AccueilComponent,
    DetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}

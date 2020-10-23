import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Store } from "@ngxs/store";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PanierComponent } from "./panier/panier.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { CompteClientComponent } from "./compte-client/compte-client.component";
import { AccueilComponent } from "./accueil/accueil.component";

@NgModule({
  imports: [BrowserModule, FormsModule, Store],
  declarations: [
    AppComponent,
    HelloComponent,
    PanierComponent,
    CatalogueComponent,
    CompteClientComponent,
    AccueilComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

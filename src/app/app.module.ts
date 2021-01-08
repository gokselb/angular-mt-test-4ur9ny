import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { USDComponent } from "./pages/usd/usd.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, USDComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

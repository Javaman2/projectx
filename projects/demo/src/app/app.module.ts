import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProjectyModule } from 'projecty'
 

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, ProjectyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

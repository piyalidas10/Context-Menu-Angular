import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ ContextmenuComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameModule} from './game/game.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {InterceptReqInterceptor} from './core/interceptors/intercept-req.interceptor';
import {FormsModule} from '@angular/forms';
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AuthModule,
    CoreModule,
    SharedModule
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: InterceptReqInterceptor, multi: true}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

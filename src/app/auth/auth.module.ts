import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConnectionPageComponent} from './pages/connection-page/connection-page.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {RouterLinkWithHref} from "@angular/router";
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';

@NgModule({
  declarations: [
    ConnectionPageComponent,
    SubscriptionPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
    RouterLinkWithHref
  ]
})
export class AuthModule {
}

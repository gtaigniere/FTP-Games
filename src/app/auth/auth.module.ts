import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnectionPageComponent} from './pages/connection-page/connection-page.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {RouterLinkWithHref} from "@angular/router";
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';

@NgModule({
  declarations: [
    ConnectionPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
    RouterLinkWithHref,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}

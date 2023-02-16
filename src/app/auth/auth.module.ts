import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConnectionPageComponent} from './pages/connection-page/connection-page.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    ConnectionPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule
  ]
})
export class AuthModule {
}

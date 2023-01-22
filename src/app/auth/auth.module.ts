import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConnectionPageComponent} from './pages/connection-page/connection-page.component';

@NgModule({
  declarations: [
    ConnectionPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule {
}

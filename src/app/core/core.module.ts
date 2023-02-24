import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HasRoleDirective} from "./directives/has-role.directive";
import {ShowIfLogged} from "./directives/show-if-logged.directive";

@NgModule({
  declarations: [
    HasRoleDirective,
    ShowIfLogged
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HasRoleDirective,
    ShowIfLogged
  ]
})
export class CoreModule {
}

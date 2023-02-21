import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermissionDirective} from "./directives/permission.directive";
import {MyNgIfDirective} from "./directives/my-ng-if.directive";

@NgModule({
  declarations: [
    PermissionDirective,
    MyNgIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PermissionDirective,
    MyNgIfDirective
  ]
})
export class CoreModule {
}

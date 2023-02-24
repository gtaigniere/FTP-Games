import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayIfIdentifiedDirective} from "./directives/display-if-identified.directive";
import {MyNgIfDirective} from "./directives/my-ng-if.directive";

@NgModule({
  declarations: [
    DisplayIfIdentifiedDirective,
    MyNgIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayIfIdentifiedDirective,
    MyNgIfDirective
  ]
})
export class CoreModule {
}

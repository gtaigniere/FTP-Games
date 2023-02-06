import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './components/carousel/carousel.component';
import {MessageBoxComponent} from './components/message-box/message-box.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    CarouselComponent,
    MessageBoxComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  exports: [
    CarouselComponent,
    MessageBoxComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}

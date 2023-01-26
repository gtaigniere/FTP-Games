import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './components/carousel/carousel.component';
import {MessageBoxComponent} from './components/message-box/message-box.component';

@NgModule({
  declarations: [
    CarouselComponent,
    MessageBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    MessageBoxComponent
  ]
})
export class SharedModule {
}

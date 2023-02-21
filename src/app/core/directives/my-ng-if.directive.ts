import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {bootstrapApplication} from "@angular/platform-browser";

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnInit {

  @Input('myNgIf')
  loggedIn!: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loggedIn = this.authService.isLogged();
    this.displayWithDirective(this.loggedIn);
    this.authService.loggedIn$.subscribe(
      display => this.displayWithDirective(display)
    );
  }

  displayWithDirective(display: boolean) {
    if (display) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}

import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLogged implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.displayWithDirective(this.authService.isLogged());
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

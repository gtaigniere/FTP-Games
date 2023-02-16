import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input('appPermission')
  userConnected!: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const isUserConnected = this.authService.isLogged();
    if (!isUserConnected) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}

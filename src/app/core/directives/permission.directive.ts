import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {UserService} from "../../shared/services/user.service";

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input('appPermission')
  roleToCheck!: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const isRoleValid = this.userService.isAdminUser(this.roleToCheck);
    if (isRoleValid) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
    this.authService.loggedIn$.subscribe(
      display => {
        if (display) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      }
    );
  }

}

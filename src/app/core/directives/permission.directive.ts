import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
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
    private userService: UserService
  ) {}

  ngOnInit() {
    const isRoleValid = this.userService.isUserInRole(this.roleToCheck);
    if (isRoleValid) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}

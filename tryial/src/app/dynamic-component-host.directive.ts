import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicHost]'
})
export class DynamicComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

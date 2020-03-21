import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[selected-host]',
})
export class SelectedDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

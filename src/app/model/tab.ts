import { Type } from '@angular/core';

export class Tab {
  constructor(
    public component: Type<any>,
    public data: any) {}
}

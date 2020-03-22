import { Type } from '@angular/core';

export class Tab {
  constructor(
    // コンポーネント
    public component: Type<any>,
    // タブ名称
    public name: string,
    //
    public data: any
  ) { }
}

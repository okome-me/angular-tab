import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MockAComponent } from '../component/mock-a/mock-a.component';
import { MockBComponent } from '../component/mock-b/mock-b.component';
import { Tab } from '../model/tab';

/**
 * タブ管理サービス
 */
@Injectable()
export class TabService {

  private _tabList$ = new BehaviorSubject<Tab[]>([]);

  get tabList$() {
    return this._tabList$.asObservable();
  }

  constructor() {}

  /**
   * タブ追加
   * @param type コンポーネントタイプ
   */
  public addTab(type: string): void {
    let newTab: Tab;
    switch (type) {
      case 'mockA':
        newTab = new Tab(
          MockAComponent,
          'モックA',
          {}
        );
        break;
      case 'mockB':
        newTab = new Tab(
          MockBComponent,
          'モックB',
          {}
        );
        break;
    }

    this._tabList$.next(this._tabList$.value.concat(newTab));
  }

  /**
   * タブ削除
   * @param index 削除対象
   */
  public deleteTab(index: number): void {
    const tabList = this._tabList$.value;
    tabList.splice(index, 1);
    this._tabList$.next(tabList);
  }

  /**
   * タブ全削除
   */
  public deleteAllTab(): void {
    this._tabList$.next([]);
  }
}

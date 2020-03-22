import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MockAComponent } from '../component/mock-a/mock-a.component';
import { MockBComponent } from '../component/mock-b/mock-b.component';
import { Tab } from '../model/tab';

/**
 * タブ管理サービス
 */
@Injectable()
export class TabService {

  public tabList: Tab[] = new Array();

  constructor() {}

  /**
   * タブ追加
   * @param type コンポーネントタイプ
   */
  public addAds(type: string): void {
    switch (type) {
      case 'mockA':
        this.tabList.push(
          new Tab(
            MockAComponent,
            'モックA',
            {}
          )
        );
        break;
      case 'mockB':
        this.tabList.push(
          new Tab(
            MockBComponent,
            'モックB',
            {}
          )
        );
        break;
    }
  }

  /**
   * タブ削除
   */
  public deleteAds(): void {
    this.tabList.length = 0;
  }
}

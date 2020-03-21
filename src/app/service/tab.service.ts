import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MockAComponent } from '../component/mock-a/mock-a.component';
import { MockBComponent } from '../component/mock-b/mock-b.component';
import { Tab } from '../model/tab';

@Injectable()
export class TabService {

  public tabList: Tab[] = new Array();

  constructor(
    private http: HttpClient
  ) {}

  getAds() {
  }

  addAds(type: string) {
    switch (type) {
      case 'mockA':
        this.tabList.push(
          new Tab(
            MockAComponent,
            {
              headline: '',
              name: 'モックA'
            }
          )
        );
        break;
      case 'mockB':
        this.tabList.push(
          new Tab(
            MockBComponent,
            {
              headline: '',
              name: 'モックB'
            }
          )
        );
        break;
    }
  }

  deleteAds() {
    this.tabList.length = 0;
  }
}

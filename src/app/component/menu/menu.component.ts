import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { TabService } from '../../service/tab.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private tabService: TabService,
    private router: Router
  ) {}

  /**
   * タブ追加
   */
  public createButtonClicked(type: string): void {
    this.tabService.addAds(type);
  }

  /**
   * ログアウト処理
   *  - タブ削除
   *  - ログイン画面遷移
   */
  public logout(): void {
    this.tabService.deleteAds();
    this.router.navigate(['login']);
  }

}


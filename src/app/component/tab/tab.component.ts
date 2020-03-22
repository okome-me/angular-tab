import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { SelectedDirective } from './selected.directive';
import { TabService } from '../../service/tab.service';
import { Tab } from '../../model/tab';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, OnDestroy {

  selectedIndex = 0;
  tabList: Tab[];
  @ViewChild(SelectedDirective) selectedHost: SelectedDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public tabService: TabService
  ) {

    // タブ状態を購読する
    this.tabService.tabList$.subscribe((tabList: Tab[]) => {
      this.tabList = tabList;
    });
  }

  ngOnInit() {
    this._loadComponent();
  }

  ngOnDestroy() {
  }

  /**
   * タブに応じたコンポーネント切り替え
   */
  private _loadComponent(): void {
    if (!this.selectedHost) {
      return;
    }

    if (this.tabList.length === 0) {
      // tslint:disable-next-line: no-shadowed-variable
      const viewContainerRef = this.selectedHost.viewContainerRef;
      viewContainerRef.clear();
      return;
    }
    const selectedTab = this.tabList[this.selectedIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(selectedTab.component);

    const viewContainerRef = this.selectedHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as Tab).name = selectedTab.name;
    (componentRef.instance as Tab).data = selectedTab.data;
  }

  /**
   * タブクリック
   * @param index クリック対象
   */
  public clickSelect(index: number): void {
    this.selectedIndex = index;
    this._loadComponent();
  }

  /**
   * タブ削除クリック
   * @param index クリック対象
   */
  public clickDelete(index: number): void {
    this._deleteTab(index);
    if (this.selectedIndex === this.tabList.length) {
      this.selectedIndex = index - 1;
    }
    this._loadComponent();
  }

  private _deleteTab(index) {
    this.tabService.deleteTab(index);
  }
}

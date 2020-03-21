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

  currentAdIndex = 0;
  @ViewChild(SelectedDirective) adHost: SelectedDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public tabService: TabService
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
  }

  loadComponent() {
    if (!this.adHost) {
      return;
    }

    if (this.tabService.tabList.length === 0) {
      // tslint:disable-next-line: no-shadowed-variable
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      return;
    }
    const adTab = this.tabService.tabList[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adTab.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as Tab).data = adTab.data;
  }

  deleteComponent() {
    this.tabService.tabList.splice(this.currentAdIndex, 1);
  }

  tabClick(index: number) {
    this.currentAdIndex = index;
    this.loadComponent();
  }

  tabDelete(index: number) {
    this.currentAdIndex = index;
    this.deleteComponent();
    if (this.currentAdIndex === this.tabService.tabList.length) {
      this.currentAdIndex = index - 1;
    }
    this.loadComponent();
  }
}

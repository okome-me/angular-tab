import { Component, ComponentFactoryResolver, ViewContainerRef, ElementRef , Injectable, Sanitizer } from '@angular/core';
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

  createButtonClicked(type: string) {
    this.tabService.addAds(type);
  }

  logout() {
    this.tabService.deleteAds();
    this.router.navigate(['login']);
  }

}


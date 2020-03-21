import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { TabComponent } from './component/tab/tab.component';
import { MenuComponent } from './component/menu/menu.component';
import { MockAComponent } from './component/mock-a/mock-a.component';
import { MockBComponent } from './component/mock-b/mock-b.component';

import { TabService } from './service/tab.service';

import { SelectedDirective } from './component/tab/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    TabComponent,
    MenuComponent,
    MockAComponent,
    MockBComponent,
    SelectedDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    TabService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MockAComponent, MockBComponent]
})
export class AppModule { }

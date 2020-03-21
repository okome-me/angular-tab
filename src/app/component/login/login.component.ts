import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    model = new Login('', '');
    data: any;

  constructor(
    private router: Router
  ) { }

    onSubmit() {
        if (this.model.name === this.model.password) {
            this.router.navigate(['main']);
        } else {
            this.model.message = 'ログインに失敗しました';
        }
    }

  ngOnInit(): void {
  }

}

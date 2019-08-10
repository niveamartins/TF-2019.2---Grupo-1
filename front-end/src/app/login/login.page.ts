import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public login: FormGroup;

    constructor(public loginForm: FormBuilder) {
        this.login = this.loginForm.group({
            'user': [''],
            'password': ['']
        });
    }

    ngOnInit() {
    }

}

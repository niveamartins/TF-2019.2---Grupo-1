import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public register: FormGroup;

    constructor(public registerForm: FormBuilder) {
        this.register = this.registerForm.group({
            'name': [''],
            'email': [''],
            'user': [''],
            'password': [''],
            'c_password': ['']
        });
    }

    ngOnInit() {
    }

}

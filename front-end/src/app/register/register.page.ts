import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

    public registerForm: FormGroup;

    constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router) {

        this.registerForm = this.formbuilder.group({
            'name': ['', Validators.required],
            'email': ['', Validators.required],
            'user': ['', Validators.required],
            'password': ['', Validators.required],
            'c_password': ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    registerUser(form) {

        if (form.status == "VALID") {

            this.authservice.registerUser(form.value).subscribe(
                (res) => {
                    console.log(res);
                    this.router.navigate(['home']);
                }
            );
        }
    }
}

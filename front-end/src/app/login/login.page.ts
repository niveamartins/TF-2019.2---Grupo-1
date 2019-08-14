import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public loginForm: FormGroup;

    constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router) {

        this.loginForm = this.formbuilder.group({
            user: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });

    }

    ngOnInit() {
    }

    loginUser(form) {

        console.log(this.loginForm)

        if (form.status == "VALID") {

            this.authservice.loginUser(form.value).subscribe(
                (res) => {
                    console.log(res.message);
                    localStorage.setItem('userToken', res.data.token);
                    this.router.navigate(['home']);
                }
            );
        }

    }
}

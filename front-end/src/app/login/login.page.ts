import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public loginForm: FormGroup;

    constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router, public toastcontroller: ToastController) {

        this.loginForm = this.formbuilder.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });

    }

    ngOnInit() {
    }

    async presentToast() {
        const toast = await this.toastcontroller.create({
            message: "Você logou com sucesso!",
            duration: 2000
        });
        toast.present();
    }

    loginUser(form) {

        console.log(this.loginForm)

        if (form.status == "VALID") {

            this.presentToast();
            
            this.authservice.loginUser(form.value).subscribe(
                (res) => {
                    console.log(res);
                    localStorage.setItem('userToken', res.success.token);
                    this.router.navigate(['home']);
                }
            );
        }

    }


}

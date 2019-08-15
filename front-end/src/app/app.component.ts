import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';



@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Criar post',
            url: '/create',
            icon: 'add-circle'
        },
        {
            title: 'Perfil',
            url: '/profile',
            icon: 'contact'
        },
        {
            title: 'Post',
            url: '/post',
            icon: 'list'
        },
        {
            title: 'Entrar',
            url: '/login',
            icon: 'bookmark'
        }


    ];

    userImage = "";
    userName = "";

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public router: Router,
        public authservice: AuthService,
        public postservice: PostService

    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    logout() {
        this.authservice.logoutUser().subscribe(
            (res) => {
                console.log(res);
                localStorage.removeItem('userToken')
                localStorage.removeItem('userLogged');
                this.router.navigate(['home']);
            }
        );
    }

}

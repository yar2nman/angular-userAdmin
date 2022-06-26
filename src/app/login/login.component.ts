import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { first, finalize } from 'rxjs/operators';

import { AuthinticationService } from '../services/authintication.service';
import { SignIn } from '../model';
// import { AlertService } from '@src/_services/alert.service';
// import { Globals } from '@src/_services/globals';
// import { UserLogin } from '@src/models/medls';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    returnUrl: string = '';
    ulogin: SignIn = {password: '', username: ''};

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthinticationService,
        // private alertService: AlertService,
        // private globals: Globals
        ) {}

    ngOnInit() {

        // this.ulogin = new UserLogin();
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    onSubmit() {
        this.authenticationService.login(this.ulogin.username, this.ulogin.password)
            .pipe(
                first()
                 )
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    // this.globals.updatedd();
                },
                error => {
                    // this.alertService.snackmessage.next({message: 'Login Erroe'});
                });
    }


        


 togglePassword() {
    console.log('buttom received');
    
     
   const passwordInput: any = document.getElementById('password');
    const togglePasswordButton: any = document.getElementById('toggle-password');
  if (passwordInput && passwordInput['type'] === 'password') {
    passwordInput['type'] = 'text';
    togglePasswordButton.textContent = 'Hide password';
    togglePasswordButton.setAttribute('aria-label',
      'Hide password.');
  } else {
    passwordInput['type'] = 'password';
    togglePasswordButton.textContent = 'Show password';
    togglePasswordButton.setAttribute('aria-label',
      'Show password as plain text. ' +
      'Warning: this will display your password on the screen.');
  }
}

}

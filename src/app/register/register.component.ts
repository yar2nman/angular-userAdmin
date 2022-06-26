import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterModel } from '../model';
import { AuthinticationService } from '../services/authintication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  returnUrl: string = '';
  ulogin: RegisterModel = {password1: '', username: '', password2: '', email: ''};

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthinticationService,
      // private alertService: AlertService,
      // private globals: Globals
      ) {}

  ngOnInit() {
      this.authenticationService.logout();
  }


  onSubmit() {
      this.authenticationService.register(this.ulogin)
          .pipe(
              first()
               )
          .subscribe({
              next: data => {
                  this.router.navigate(['login']);
              },
              error: error => {
              }
          }
              );
  }



}

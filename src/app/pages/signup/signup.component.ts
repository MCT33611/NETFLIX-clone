import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { LOGO_URL ,BG_IMG_URL} from '../../constants/config';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  ngOnInit(){
    if(this.accountService.isLogged()){this.router.navigateByUrl("/browse")}
  }
  constructor(private accountService : AccountService , private router : Router){}
  logoUrl = LOGO_URL;
  bgStyle =`url(${BG_IMG_URL})`
  PasswrodMatch = false;
  signupForm = new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('@')]),
    Password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    CPassword: new FormControl('',[Validators.required,Validators.minLength(4)])
  })


  onSignUp(){
    if(this.signupForm.value.Password != this.signupForm.value.CPassword){
      this.PasswrodMatch = true; 
      return;
    }
    else{
      this.PasswrodMatch = false;
    }
    console.log(this.signupForm.value.Email);
    console.log(this.signupForm.value.Password);
    console.log(this.signupForm.value.CPassword);
    this.accountService.signup()
  }
}

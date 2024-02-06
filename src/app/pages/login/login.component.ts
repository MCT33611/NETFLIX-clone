import { Component, LOCALE_ID } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { RouterLink ,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {
  ngOnInit(){
    if(this.accountService.isLogged()){this.router.navigateByUrl("/browse")}
  }
  constructor(
    private accountService:AccountService,
     private router:Router,
     private toster:ToastrService
     ){}
  bgStyle =`url(${BG_IMG_URL})`


  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.pattern('@'), Validators.email]),
    Password: new FormControl('', Validators.minLength(4))
  });

  OnSubmit(){

    this.accountService.login(this.loginForm.value.Email+'',this.loginForm.value.Password+"")
    this.toster.success('logined successfuly')
    this.router.navigateByUrl('/browse')
  }
}

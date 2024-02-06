import { Component } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl = LOGO_URL
  constructor(private accountService:AccountService,private toster:ToastrService,private router:Router){}
  logout()
  {
    this.toster.success('Lougout Successfully completed')
    this.accountService.logout()
    this.router.navigateByUrl('/login');
  }
}

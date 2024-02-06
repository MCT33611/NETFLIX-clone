import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
        title:"login"
    },
    {
        path:'signup',
        component:SignupComponent,
        title:"signup"
    },
    {
        path:'browse',
        component:BrowseComponent,
        title:"browse",
        canActivate:[authGuard]

    },
    {
        path:'**',
        redirectTo:'login',
    }
    
];

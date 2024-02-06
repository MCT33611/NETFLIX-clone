import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService: AccountService = inject(AccountService);
  const router: Router = inject(Router)

  if (!accountService.isLogged()) {
    return router.createUrlTree(["/login"])
  }
  else {
    return true;
  }

};

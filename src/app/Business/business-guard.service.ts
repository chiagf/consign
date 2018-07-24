import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';
import { ConsignComponent } from './consign/consign.component';
import {AuthenticationService} from '../Auth/_services/authentication.service'

// import { ProductEditComponent } from './product-edit.component';

@Injectable()
export  class LogInGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.authenticationService.isLogIn()){
            this.router.navigate(['/login']);
            return false
        };
        return true;
        // let id = +route.url[1].path;
        // if (isNaN(id) || id < 1) {
        //     alert('Invalid product Id');
        //     // start a new navigation to redirect to list page
        //     this.router.navigate(['/products']);
        //     // abort current navigation
        //     return false;
        // };
        // return true;
    }
}

@Injectable()
export  class ConsignEditGuard implements CanDeactivate<ConsignComponent> {

    canDeactivate(component: ConsignComponent): boolean {
        if (component.barcodeArray.length !== 0) {
            // let productName = component.productForm.get('productName').value || 'New Product';
            return confirm(`Navigate away and lose all changes?`);

        }
        return true;
    }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { PermisionsService } from './permisions.service';



@Injectable()
export class GuardService implements CanActivate {

    constructor(private router: Router, private authService: PermisionsService,
        private route: ActivatedRoute) {

    }
    lista: any[] = [];
    registro: any;
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree {
        this.lista = JSON.parse(localStorage.getItem("base") || "[]");
       
        let nombre = route.params['nombre'];
        let resultado = this.lista.filter(objeto => objeto.nombre == nombre);
        if (resultado.length==0){
            alert('no existe!!');
            this.router.navigate(["error"], { queryParams: { retUrl: route.url } });
            return false;
        }

        return true;
    }

}
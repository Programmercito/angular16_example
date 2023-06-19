import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermisionsService } from 'src/app/core/permisions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("user") user?: ElementRef;
  @ViewChild("pass") pass?: ElementRef;
  retUrl: string[] = [];
  completo: string = "";
  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.getAll('retUrl');
        this.completo=this.retUrl.join('/');
        console.log(this.retUrl);
      });
  }

  constructor(private permiso: PermisionsService, private router: Router,
    private activatedRoute: ActivatedRoute) {

  }
  entrar() {
    let user, pass: string;
    user = this.user?.nativeElement.value;
    pass = this.pass?.nativeElement.value;
    if (user == "admin" && pass == "admin") {
      this.permiso.dale();
      this.router.navigate( [this.completo]);
    }else{
      this.router.navigate( ['home']);
    }
  }
}

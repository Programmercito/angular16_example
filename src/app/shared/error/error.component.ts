import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  retUrl: string[] = [];
  completo: string = "";
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.getAll('retUrl');
        this.completo = this.retUrl.join('/');
        console.log(this.retUrl);
      });
  }
  regresar() {
    this.router.navigate([this.completo]);
  }
}

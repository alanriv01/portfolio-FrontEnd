import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-newacercade',
  templateUrl: './newacercade.component.html',
  styleUrls: ['./newacercade.component.css']
})
export class NewacercadeComponent implements OnInit {
  acercadeA : string= '';

  constructor(private sAcercade: AcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const acercade = new Acercade(this.acercadeA);
    this.sAcercade.save(acercade).subscribe(
      data => {
        alert("campo añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo");
        this.router.navigate(['']);
      }
    )
  }

}

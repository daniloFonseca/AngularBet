import { TableServiceService } from './../table-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  
  
  constructor(private service : TableServiceService) { }

   bets = [];
  
  consultar()
  {
    this.service.findAll()
    .subscribe(resposta => this.bets = <any> resposta )
  }
  ngOnInit() {
  this.consultar();

  }

}

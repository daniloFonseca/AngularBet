import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';

@Component({
  selector: 'app-tabela-admin',
  templateUrl: './tabela-admin.component.html',
  styleUrls: ['./tabela-admin.component.css']
})
export class TabelaAdminComponent implements OnInit {

  constructor(private service : TableServiceService) { }

   bets = [];
   total=0;
  
  consultar()
  {
    this.service.findAll().subscribe(resposta => this.bets = <any> resposta )
  }
  private somarProfit() {
    this.bets.forEach(bet => {
      this.total += Number(bet.profit);
    });
  }
  ngOnInit() {
  this.consultar();
  this.somarProfit();

  }


  
}

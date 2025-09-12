import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnDestroy,OnInit {
  subscription:Subscription;
  presupuesto:number;
  restante:number;
  constructor(private _presupuestoService:PresupuestoService){
    this.presupuesto=0;
    this.restante=0
    this.subscription=this._presupuestoService.getGastos().subscribe(data =>{
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.presupuesto=this._presupuestoService.presupuesto;
    this.restante=this._presupuestoService.restante;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

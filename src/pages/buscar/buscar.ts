import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { URL_IMAGENES } from "../../config/url.servicios"
import { ProductoPage } from "../producto/producto"


@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

	faltanDatos:boolean = true;
	rutaImg:any = URL_IMAGENES;
	productoPage = ProductoPage;
	constructor(public navCtrl: NavController,
	          public navParams: NavParams,
	          private _prod:ProductosProvider) {

	}

	buscarProductos(ev: any){
		if (ev.target.value.length > 2) {
			this.faltanDatos = false;
			let valor = ev.target.value;
			this._prod.buscarProducto(valor);
		} else {
			this.faltanDatos = true;
		}

	}

}
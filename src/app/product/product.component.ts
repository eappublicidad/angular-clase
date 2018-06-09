import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productos:any=[];
carrito:any=[];
  constructor() {
    this.productos=[{
      id:"1",
      nombre:"rembrand",
      titulo:"Lampara 1",
      precio:"$10.000",
      descuento:"10% de descuento",
      descripcion:"lampara madera",
      comprar:"comprar",
      imagen:"assets/img/item3.jpg",



    },

    {
      id:"2",
      nombre:"rembrand 2",
      titulo:"Lampara 2",
      precio:"$20.000",
      descuento:"5% de descuento",
      descripcion:"lampara aluminio",
      comprar:"comprar",
      imagen:"assets/img/item2.jpg",

      

    },

    {
      id:"3",
      nombre:"rembrand 2",
      titulo:"Lampara 2",
      precio:"$20.000",
      descuento:"5% de descuento",
      descripcion:"lampara madera",
      comprar:"comprar",
      imagen:"assets/img/item3.jpg",

      

    },

    {
      id:"4",
      nombre:"rembrand 2",
      titulo:"Lampara 2",
      precio:"$20.000",
      descuento:"5% de descuento",
      descripcion:"lampara aluminio",
      comprar:"comprar",
      imagen:"assets/img/item3.jpg",

      

    },

    {
      id:"5",
      nombre:"rembrand 2",
      titulo:"Lampara 2",
      precio:"$20.000",
      descuento:"5% de descuento",
      descripcion:"lampara madera",
      comprar:"comprar",
      imagen:"assets/img/item3.jpg",

      

    },

    {
      id:"6",
      nombre:"rembrand 2",
      titulo:"Lampara 2",
      precio:"$20.000",
      descuento:"5% de descuento",
      descripcion:"lampara aluminio",
      comprar:"comprar",
      imagen:"assets/img/item3.jpg",

      

    },

    
  
  
  ]};

  agregar($id){

    this.carrito.push($id);
    console.log("ok compra")
  };



  ngOnInit() {


  }

}

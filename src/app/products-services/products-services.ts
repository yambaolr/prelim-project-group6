import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-services',
  imports: [ CommonModule ],
  templateUrl: './products-services.html',
  styleUrl: './products-services.css',
})
export class ProductsServices {
  menuItems = [
    {
      name: 'Iced & Hot Coffees',
      description: 'Featuring local brews like Barako Coffee and international favorites like the unique Dubai Chocolate inspired drink.',
      price: '₱80 - ₱180',
      image: '',
    },
    {
      name: 'Rice Meals',
      description: 'Perfect for lunch or dinner, including popular dishes like Tapsilog and a savory Beef Kaldereta.',
      price: '₱150 - ₱250',
      image: '../assets/images/smoked.jpg',
    },
    {
      name: 'Pastries & Desserts',
      description: 'Daily baked selection of cakes, cookies, and other sweet treats to pair with your coffee.',
      price: '₱60 - ₱120',
      image: 'assets/images/biscoff.jpg',
    }
  ];
}

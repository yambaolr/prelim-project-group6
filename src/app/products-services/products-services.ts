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
      image: 'https://images.pexels.com/photos/414720/pexels-photo-414720.jpeg?cs=srgb&dl=art-background-beverage-414720.jpg&fm=jpg',
    },
    {
      name: 'Rice Meals',
      description: 'Perfect for lunch or dinner, including popular dishes like Tapsilog and a savory Beef Kaldereta.',
      price: '₱150 - ₱250',
      image: 'https://thumbs.dreamstime.com/b/freshly-cooked-filipino-food-called-tapsilog-photo-beef-tenders-served-fried-rice-egg-288357062.jpg?w=768',
    },
    {
      name: 'Pastries & Desserts',
      description: 'Daily baked selection of cakes, cookies, and other sweet treats to pair with your coffee.',
      price: '₱60 - ₱120',
      image: 'https://cdn.pixabay.com/photo/2016/02/29/00/19/cake-1227842_1280.jpg',
    },
     {
      name: 'Barako coffee',
      description: 'Daily baked selection of cakes, cookies, and other sweet treats to pair with your coffee.',
      price: '₱60 - ₱120',
      image: 'assets/images/1.jpg',
    }
  ];
}
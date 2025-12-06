import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-services.html',
  styleUrl: './products-services.css',
})
export class ProductsServices {
  menuItems = [
    // --- COFFEE ---
    {
      name: 'Kapeng Barako',
      description: 'Strong and bold local Batangas brew. A classic favorite.',
      price: '₱80',
      // MATCHES FILE: barako-coffee.jpeg (Note the .jpeg)
      image: 'assets/images/barako-coffee.jpeg', 
    },
    {
      name: 'Dubai Chocolate Drink',
      description: 'Rich, creamy chocolate drink inspired by the viral Dubai flavors.',
      price: '₱180',
      // MATCHES FILE: dubai-chocolate.jpg
      image: 'assets/images/dubai-chocolate.jpg',
    },
    {
      name: 'Spanish Latte',
      description: 'Espresso with textured milk and sweetened condensed milk.',
      price: '₱140',
      // MATCHES FILE: spanish latte.jpg (Has a space!)
      image: 'assets/images/spanish latte.jpg', 
    },
    {
      name: 'Matcha Latte',
      description: 'Premium matcha green tea blend served hot or iced.',
      price: '₱150',
      // MATCHES FILE: matcha.jpg
      image: 'assets/images/matcha.jpg',
    },

    // --- RICE MEALS ---
    {
      name: 'Beef Tapa',
      description: 'Marinated beef tapa served with garlic rice and fried egg.',
      price: '₱160',
      // MATCHES FILE: tapsilog.jpg
      image: 'assets/images/beeftapa.jpg',
    },
    {
      name: 'Beef Kaldereta',
      description: 'Savory beef stew in tomato sauce with potatoes and carrots.',
      price: '₱220',
      // MATCHES FILE: beef-kaldereta.jpg
      image: 'assets/images/beef-kaldereta.jpg',
    },
    {
      name: 'Kare-Kare',
      description: 'Traditional peanut stew with tender beef and vegetables.',
      price: '₱250',
      // MATCHES FILE: kare-kare.jpg
      image: 'assets/images/kare-kare.jpg',
    },
    {
      name: 'Spaghetti Bolognese',
      description: 'Classic pasta with a rich, meaty tomato sauce.',
      price: '₱180',
      // MATCHES FILE: spaghetti-bolognese.jpg
      image: 'assets/images/spaghetti-bolognese.jpg',
    },

    // --- PASTRIES ---
    {
      name: 'Biscoff Treat',
      description: 'Sweet pastry topped with caramelized biscuit spread.',
      price: '₱120',
      // MATCHES FILE: biscoff.jpg
      image: 'assets/images/biscoff.jpg',
    },
   
  ];
}
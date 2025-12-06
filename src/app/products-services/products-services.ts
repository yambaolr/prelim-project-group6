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
      image: 'assets/images/barako-coffee.jpeg', // Note: .jpeg extension
    },
    {
      name: 'Dubai Chocolate Drink',
      description: 'Rich, creamy chocolate drink inspired by the viral Dubai flavors.',
      price: '₱180',
      image: 'assets/images/dubai-chocolate.jpg',
    },
    {
      name: 'Spanish Latte',
      description: 'Espresso with textured milk and sweetened condensed milk.',
      price: '₱140',
      image: 'assets/images/spanish latte.jpg', // Note: Check if there is a space in the filename
    },
    {
      name: 'Matcha Latte',
      description: 'Premium matcha green tea blend served hot or iced.',
      price: '₱150',
      image: 'assets/images/matcha.jpg',
    },

    // --- RICE MEALS ---
    {
      name: 'Beef Tapa',
      description: 'Marinated beef tapa served with garlic rice and fried egg.',
      price: '₱160',
      image: 'assets/images/beeftapa.jpg',
    },
    {
      name: 'Beef Kaldereta',
      description: 'Savory beef stew in tomato sauce with potatoes and carrots.',
      price: '₱220',
      image: 'assets/images/beef-kaldereta.jpg',
    },
    {
      name: 'Kare-Kare',
      description: 'Traditional peanut stew with tender beef and vegetables.',
      price: '₱250',
      image: 'assets/images/kare-kare.jpg',
    },
    {
      name: 'Spaghetti Bolognese',
      description: 'Classic pasta with a rich, meaty tomato sauce.',
      price: '₱180',
      image: 'assets/images/spaghetti-bolognese.jpg',
    },

    // --- PASTRIES ---
    {
      name: 'Biscoff Treat',
      description: 'Sweet pastry topped with caramelized biscuit spread.',
      price: '₱120',
      image: 'assets/images/biscoff.jpg',
    }
  ];
}
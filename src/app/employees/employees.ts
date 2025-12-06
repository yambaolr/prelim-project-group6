  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-employees',
    imports: [ CommonModule ],
    templateUrl: './employees.html',
    styleUrl: './employees.css',
  })
  export class Employees {
    profiles = [
      {
        name: 'Ma. Cristaline Serrana',
        job: 'Barista',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Sunshine Refuerzo',
        job: 'Barista',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Steven Shane',
        job: 'Cashier',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Miguel Torres',
        job: 'Chef',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Cyrus Luy',
        job: 'Kitchen Staff',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Cyzlon Dunga',
        job: 'Kitchen Staff',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Jasper Abad',
        job: 'Utility Staff',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      },
      {
        name: 'Alex Tayag',
        job: 'Utility Staff',
        imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
      }
    ];
  }

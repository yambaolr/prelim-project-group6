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
      number: 'CCE-001',
      name: 'Ma. Cristaline Serrana',
      gender: 'Female',
      email: 'mcristaline@centro.ph',
      status: 'Full-Time',
      role: 'Barista',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-002',
      name: 'Sunshine Refuerzo',
      gender: 'Female',
      email: 'sunshiner@centro.ph',
      status: 'Part-Time',
      role: 'Barista',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-003',
      name: 'Steven Shane',
      gender: 'Male',
      email: 'stevenshane@centro.ph',
      status: 'Full-Time',
      role: 'Cashier',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-004',
      name: 'Miguel Torres',
      gender: 'Male',
      email: 'miguelt@centro.ph',
      status: 'Full-Time',
      role: 'Chef',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-005',
      name: 'Cyrus Luy',
      gender: 'Male',
      email: 'cyrusluy@centro.ph',
      status: 'Full-Time',
      role: 'Kitchen Staff',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-006',
      name: 'Cyzlon Dunga',
      gender: 'Male',
      email: 'cyzlond@centro.ph',
      status: 'Part-Time',
      role: 'Kitchen Staff',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-007',
      name: 'Jasper Abad',
      gender: 'Male',
      email: 'jasperabad@centro.ph',
      status: 'Part-Time',
      role: 'Utility Staff',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    },
    {
      number: 'CCE-008',
      name: 'Alex Tayag',
      gender: 'Male',
      email: 'alextayag@centro.ph',
      status: 'Full-Time',
      role: 'Utility Staff',
      imageUrl: 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png',
    }
    ];
  }

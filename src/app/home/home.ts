import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
// Import animation utilities
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [ // Define the animation trigger
    trigger('contentState', [
      // Defines the initial (hidden) style before the component enters
      state('void', style({ 
        opacity: 0, 
        transform: 'translateY(20px)' // Start 20px below its final position
      })),

      // Defines the transition for when the component enters the DOM
      transition(':enter', [
        animate('600ms ease-out', style({ 
          opacity: 1, 
          transform: 'translateY(0)' // End at its original position
        }))
      ])
    ])
  ]
})
export class Home {
  // Property to hold the animation state for binding in the template
  animationState = 'in'; 
}
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-decrement-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './increment-decrement-animation.component.html',
  styleUrl: './increment-decrement-animation.component.scss',
  animations: [
    trigger('listAnimation', [
      transition(':decrement', [
        style({ transform: 'scale(3)', color: 'green' }),
        animate('1s ease-in', style({
          "color": "red",
          "transform": "scale(0.5)"
        }))
      ]),
      transition(':increment', [
        style({ transform: 'scale(0.4)', color: 'green' }),
        animate('1s ease-in', style({
          "color": "blue",
          "transform": "scale(2)"
        }))
      ])
    ])
  ]
})
export class IncrementDecrementAnimationComponent {
  items = ["item1", "item2", "item3"]


  removeItem() {
    this.items.pop();
  }

  addItem() {
    let randomNumber = Math.floor(Math.random() * 100);

    this.items.push(randomNumber.toString());
  }

}

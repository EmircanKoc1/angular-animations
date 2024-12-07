import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-list-animation',
  standalone: true,
  imports: [],
  templateUrl: './list-animation.component.html',
  styleUrl: './list-animation.component.scss',
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('3s ease-out', style({ opacity: 0 }))
      ]),
    ]),
    trigger("listAnimation", [
      transition(":enter", [
        query("li", [
          style({
            "opacity": 0,
            "color": "red"
          }),
          stagger(100, [
            animate("3s", style({
              "opacity": 1,
              "color": "white"
            })
            )
          ])
        ])
      ])
    ])
  ]
})
export class ListAnimationComponent {

  listItems: string[] = ["item 1", "item 2", "item 3"];


  addItem() {
    let itemNumber = this.listItems.length + 1;
    this.listItems.push(`item ${itemNumber}`);

  }

  deleteItem() {
    this.listItems.pop();

  }




}

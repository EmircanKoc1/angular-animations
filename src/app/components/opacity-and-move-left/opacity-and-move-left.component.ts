import { animate, group, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-opacity-and-move-left',
  standalone: true,
  imports: [],
  templateUrl: './opacity-and-move-left.component.html',
  styleUrl: './opacity-and-move-left.component.scss',
  animations: [
    trigger("parallelAnimation", [
      transition("void=>*", [
        group([
          animate("2s", style({ "opacity": "0.2" })),
          animate("2s", style({ "transform" : "translate(100px,0px)" }))
        ])
      ])
    ])
  ]
})
export class OpacityAndMoveLeftComponent {

 

}

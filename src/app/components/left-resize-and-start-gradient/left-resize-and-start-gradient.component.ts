import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-resize-and-start-gradient',
  standalone: true,
  imports: [],
  templateUrl: './left-resize-and-start-gradient.component.html',
  styleUrl: './left-resize-and-start-gradient.component.scss',
  animations: [
    trigger("sequenceAnimation", [
      transition("void =>*", [
        sequence([
          animate("2s", style({ "width": "300px" })),
          animate("4s", style({ "background": "linear-gradient(to right, white, gray)" })),
        ])
      ])
    ])
  ]
})
export class LeftResizeAndStartGradientComponent {

}

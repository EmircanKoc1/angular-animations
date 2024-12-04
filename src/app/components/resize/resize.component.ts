import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resize',
  standalone: true,
  imports: [],
  templateUrl: './resize.component.html',
  styleUrl: './resize.component.scss',
  animations: [
    trigger("resize", [
      state("normal", style({
        "width": "200px",
        "height": "200px"
      })),
      state("small", style({
        "width": "100px",
        "height": "100px"
      })),
      state("big", style({
        "width": "400px",
        "height": "400px"
      })),
      transition("small => big", [
        animate("1s")
      ]),
      transition("big => small", [
        animate("1s")
      ]),
      transition("normal <=> small", [
        animate("4s")
      ]),
      transition("normal <=> big", [
        animate("4s")
      ])
    ])
  ]
})
export class ResizeComponent {

  boxResizeState: "big" | "small" | "normal" = "normal"

  Enlarge(): void {
    this.boxResizeState = "big";
  }

  Minimize(): void {
    this.boxResizeState = "small";
  }

  Normalize(): void {
    this.boxResizeState = "normal"
  }
}

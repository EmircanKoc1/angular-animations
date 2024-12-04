import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fadeinfadeout',
  standalone: true,
  imports: [],
  templateUrl: './fadeinfadeout.component.html',
  styleUrl: './fadeinfadeout.component.scss',
  animations: [
    trigger("fadeInFadeOut", [
      state("in", style({
        "opacity": "1"
      })),
      state('out', style({
        opacity: 0
      })),
      transition("*=>*", [
        animate("1s")
      ])
    ])
  ]
})
export class FadeinfadeoutComponent {

  state: "in" | "out" = "in";

  toggle() {
    this.state = this.state === "in" ? "out" : "in";

  }

}

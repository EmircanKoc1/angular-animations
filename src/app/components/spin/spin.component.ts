import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spin',
  standalone: true,
  imports: [],
  templateUrl: './spin.component.html',
  styleUrl: './spin.component.scss',
  animations: [
    trigger("spin", [
      transition("* => active", [
        animate("3s", keyframes([
          style({
            "transform": "rotate(45deg)"
          }),
          style({
            "transform": "rotate(90deg)"
          }),
          style({
            "transform": "rotate(180deg)"
          }),
          style({
            "transform": "rotate(360deg)"
          })
        ]))
      ])
    ])
  ]
})
export class SpinComponent {

  spinState: "active" | "end" = "end";
  intervalRef?: ReturnType<typeof setInterval>;


  active() {
    this.spinState = "active";
    setTimeout(() => {
      this.spinState = "end";
    }, 3000);
  }

  end() {
    this.spinState = "end"
  }

}

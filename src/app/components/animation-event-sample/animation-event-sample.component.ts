import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation-event-sample',
  standalone: true,
  imports: [],
  templateUrl: './animation-event-sample.component.html',
  styleUrl: './animation-event-sample.component.scss',
  animations: [
    trigger("simpleAnimation", [

      transition(":enter", [
        style({
          color: "white"
        }),
        animate("3s", style({
          "color": "black"
        }))
      ])
    ])
  ]
})
export class AnimationEventSampleComponent {



  onAnimationDone(event: AnimationEvent) {
    console.log(event);
    console.log("animation done");


  }
  onAnimationStart(event: AnimationEvent) {
    console.log(event);
    console.log("animation started");


  }
}

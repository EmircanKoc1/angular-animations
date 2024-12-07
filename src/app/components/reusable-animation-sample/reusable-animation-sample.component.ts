import { style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { FadeinfadeoutComponent } from '../fadeinfadeout/fadeinfadeout.component';
import { fadeInOutAnimation } from '../../reusableAnimations/reusableAnimations';

@Component({
  selector: 'app-reusable-animation-sample',
  standalone: true,
  imports: [],
  templateUrl: './reusable-animation-sample.component.html',
  styleUrl: './reusable-animation-sample.component.scss',
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        useAnimation(fadeInOutAnimation, {
          params: {
            opacity: 0,
            time: '3s',
            afterOpacity: 1
          }
        })
      ]),
      transition(":leave", [
        useAnimation(fadeInOutAnimation, {
          params: {
            time: "3s",
            opacity: 1,
            afterOpacity: 0
          }

        })
      ])
    ])
  ]
})
export class ReusableAnimationSampleComponent {
  isVisible = signal(true);

  toggleVisible() {
    this.isVisible.update(v => !v);
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FadeinfadeoutComponent } from "./components/fadeinfadeout/fadeinfadeout.component";
import { animate, AnimationMetadataType, state, style, transition, trigger } from '@angular/animations';
import { ResizeComponent } from "./components/resize/resize.component";
import { SpinComponent } from "./components/spin/spin.component";
import { OpacityAndMoveLeftComponent } from "./components/opacity-and-move-left/opacity-and-move-left.component";
import { LeftResizeAndStartGradientComponent } from "./components/left-resize-and-start-gradient/left-resize-and-start-gradient.component";
import { ListAnimationComponent } from "./components/list-animation/list-animation.component";
import { IncrementDecrementAnimationComponent } from "./components/increment-decrement-animation/increment-decrement-animation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FadeinfadeoutComponent, ResizeComponent, SpinComponent, OpacityAndMoveLeftComponent, LeftResizeAndStartGradientComponent, ListAnimationComponent, IncrementDecrementAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-animations';


}

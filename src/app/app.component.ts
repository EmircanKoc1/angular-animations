import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FadeinfadeoutComponent } from "./components/fadeinfadeout/fadeinfadeout.component";
import { animate, AnimationMetadataType, state, style, transition, trigger } from '@angular/animations';
import { ResizeComponent } from "./components/resize/resize.component";
import { SpinComponent } from "./components/spin/spin.component";
import { OpacityAndMoveLeftComponent } from "./components/opacity-and-move-left/opacity-and-move-left.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FadeinfadeoutComponent, ResizeComponent, SpinComponent, OpacityAndMoveLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-animations';


}

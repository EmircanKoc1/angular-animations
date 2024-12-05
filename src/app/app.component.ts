import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FadeinfadeoutComponent } from "./components/fadeinfadeout/fadeinfadeout.component";
import { animate, AnimationMetadataType, state, style, transition, trigger } from '@angular/animations';
import { ResizeComponent } from "./components/resize/resize.component";
import { SpinComponent } from "./components/spin/spin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FadeinfadeoutComponent, ResizeComponent, SpinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-animations';


}

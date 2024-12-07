import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animation-builder-sample',
  standalone: true,
  imports: [],
  templateUrl: './animation-builder-sample.component.html',
  styleUrl: './animation-builder-sample.component.scss'
})
export class AnimationBuilderSampleComponent {

  animationBuilder: AnimationBuilder = inject(AnimationBuilder);
  animationPlayer?: AnimationPlayer;

  @ViewChild("box", {
    static: true,
    read: ElementRef
  }) boxRef!: ElementRef;

  playAnimation() {

    if (!this.animationPlayer) {
      const animation = this.animationBuilder.build([
        style({
          "background-color": "black"
        }),
        animate("3s", style({
          "background-color": "purple"
        }))
      ])


      this.animationPlayer = animation.create(this.boxRef.nativeElement);
      this.animationPlayer.play();
    }



  }


  stopAnimation() {

    if (this.animationPlayer) {
      this.animationPlayer.finish();
    }


  }

  pauseAnimation() {

    if (this.animationPlayer) {
      this.animationPlayer.pause();
    }

  }

  resetAnimation() {
    this.animationPlayer?.reset();
    this.animationPlayer?.onDestroy(() => {
      console.log("kaynaklar salındı");
    })
    this.animationPlayer?.destroy();
    this.animationPlayer = undefined;
  }




}

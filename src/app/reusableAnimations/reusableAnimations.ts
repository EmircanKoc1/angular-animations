import { animate, animation, style } from "@angular/animations";


export const fadeInOutAnimation = animation([
    style({
        opacity: '{{ opacity }}',
    }),
    animate('{{ time }}', style({
        opacity: '{{afterOpacity}}'
    })),
], {
    params: {
        opacity: "0", time: "3s", afterOpacity: "1"
    }
}
);
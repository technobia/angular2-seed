import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {}

    onFocus() {
        this.renderer.setElementClass(this.el.nativeElement, 'open', true);
        console.log(this.el, this.el.nativeElement);
    }

    onBlur() {
        this.renderer.setElementClass(this.el.nativeElement, 'open', false);
    }
}
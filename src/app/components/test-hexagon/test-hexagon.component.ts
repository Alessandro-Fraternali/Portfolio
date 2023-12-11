import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-test-hexagon',
  templateUrl: './test-hexagon.component.html',
  styleUrls: ['./test-hexagon.component.scss']
})
export class TestHexagonComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.hexagon::before'), 'transform', 'scale(1.1)');
    this.renderer.setStyle(this.el.nativeElement.querySelector('.hexagon::before'), 'border-color', '#e67e22');
  }

  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.hexagon::before'), 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement.querySelector('.hexagon::before'), 'border-color', '#ccc');
  }

}

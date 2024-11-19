import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'], // Corrected typo: styleUrl -> styleUrls
})
export class LandingPageComponent {
  constructor(private renderer: Renderer2) {}

  showHiddenIcons = false;

  showIcons() {
    this.showHiddenIcons = !this.showHiddenIcons;
  }

  onToggleChange(color: string): void {
    const className = `${color}-mode`;

    // Remove any existing mode classes before applying a new one
    this.renderer.removeClass(document.body, 'red-mode');
    this.renderer.removeClass(document.body, 'purple-mode');
    this.renderer.removeClass(document.body, 'grey-mode');
    this.renderer.removeClass(document.body, 'blue-mode');

    // Apply the selected mode
    this.renderer.addClass(document.body, className);
  }
}

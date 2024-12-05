import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to the imports
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private renderer: Renderer2) {}

  showHiddenIcons = false;

  // Toggle icon visibility
  showIcons(): void {
    this.showHiddenIcons = !this.showHiddenIcons;
  }

  // Change the body's background mode
  onToggleChange(color: string): void {
    const modes = ['red-mode', 'purple-mode', 'grey-mode', 'blue-mode'];

    // Remove all existing mode classes
    modes.forEach(mode => this.renderer.removeClass(document.body, mode));

    // Add the selected mode class
    const newClass = `${color}-mode`;
    this.renderer.addClass(document.body, newClass);
  }
}

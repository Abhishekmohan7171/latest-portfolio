import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark-secondary border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <p class="text-gray-400">
            © {{ currentYear }} Abhishek Mohan A. Built with 
            <span class="text-primary">Angular</span> and 
            <span class="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
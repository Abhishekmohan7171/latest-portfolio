import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 navbar-blur">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo/Brand -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden relative">
              <!-- Memoji positioned to stand out from the circle -->
              <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 z-10">
                <img 
                  src="/memoji-about.webp" 
                  alt="Abhishek Mohan A" 
                  class="w-full h-full object-contain drop-shadow-lg"
                  style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <!-- Fallback if image doesn't load -->
                <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-xs font-bold text-primary" style="display: none;">
                  AM
                </div>
              </div>
            </div>
            <div class="text-lg font-bold">
              <span class="text-white">Abhishek</span>
              <span class="text-primary ml-1">Mohan</span>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="text-gray-300 hover:text-primary transition-colors font-medium text-sm">Service</a>
            <a href="#experience" class="text-gray-300 hover:text-primary transition-colors font-medium text-sm">Works</a>
            <a href="#projects" class="text-gray-300 hover:text-primary transition-colors font-medium text-sm">Testimonials</a>
            <a href="#contact" class="bg-primary hover:bg-purple-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-semibold text-sm glow-purple-hover">
              Contact Me
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" class="text-gray-300 hover:text-primary transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        @if (mobileMenuOpen) {
          <div class="md:hidden glass-card rounded-lg mt-2 p-4 mx-4">
            <a href="#home" (click)="closeMobileMenu()" class="block py-3 text-gray-300 hover:text-primary transition-colors font-medium">Service</a>
            <a href="#experience" (click)="closeMobileMenu()" class="block py-3 text-gray-300 hover:text-primary transition-colors font-medium">Works</a>
            <a href="#projects" (click)="closeMobileMenu()" class="block py-3 text-gray-300 hover:text-primary transition-colors font-medium">Testimonials</a>
            <a href="#contact" (click)="closeMobileMenu()" class="block py-3 text-primary font-semibold">Contact Me</a>
          </div>
        }
      </div>
    </nav>
  `
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-interactive relative overflow-hidden">
      <!-- Floating particles -->
      <div class="floating-particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Text -->
          <div class="text-center lg:text-left section-enter order-2 lg:order-1">
            <div class="mb-4">
              <span class="text-primary text-base sm:text-lg font-medium">Abhishek Mohan A ></span>
            </div>
            
            <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span class="text-white">Software Engineer</span>
              <span class="gradient-text block">& Fintech Frontend</span>
              <span class="text-white">Developer.</span>
            </h1>
            
            <p class="text-base sm:text-lg text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I specialize in Angular, Tailwind CSS, and building intuitive payment products.
            </p>
            
            <p class="text-primary font-semibold mb-8 text-base sm:text-lg leading-relaxed">
              "Crafting seamless payment UIs and empowering developer experiences"
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
              <a href="/4c50a68f-1766-414b-99a0-38c814b67465.pdf" 
                 download
                 class="btn-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 glow-purple-hover flex items-center gap-2 justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download CV
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6 sm:gap-8 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <div class="text-center lg:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-primary mb-1">3+</div>
                <div class="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">Years Experience</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-primary mb-1">50+</div>
                <div class="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <!-- Profile Image with Orbital Animation -->
          <div class="flex justify-center lg:justify-end section-enter order-1 lg:order-2">
            <div class="orbital-container scale-75 sm:scale-90 lg:scale-100">
              <!-- Outer orbital path -->
              <div class="orbital-path orbital-path-1">
                <!-- Angular Icon -->
                <div class="orbital-icon orbital-icon-1" style="background: rgba(221, 0, 49, 0.9); box-shadow: 0 0 20px rgba(221, 0, 49, 0.5);">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.93 12.645h4.134L12 7.688l-2.07 4.957z"/>
                    <path d="M12 2.5L2.89 6.63l1.11 9.708L12 21.5l7.99-5.162 1.11-9.708L12 2.5zm6.678 15.025h-2.007L15.31 14.6h-6.62l-1.361 2.925H5.322L12 4.5l6.678 13.025z"/>
                  </svg>
                </div>
                
                <!-- HTML Icon -->
                <div class="orbital-icon" style="top: 50%; right: -25px; background: rgba(227, 79, 38, 0.9); box-shadow: 0 0 20px rgba(227, 79, 38, 0.5);">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                  </svg>
                </div>
              </div>
              
              <!-- Inner orbital path -->
              <div class="orbital-path orbital-path-2">
                <!-- JavaScript Icon -->
                <div class="orbital-icon orbital-icon-2" style="background: rgba(247, 223, 30, 0.9); box-shadow: 0 0 20px rgba(247, 223, 30, 0.5);">
                  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                  </svg>
                </div>
                
                <!-- GitHub Icon -->
                <div class="orbital-icon orbital-icon-2" style="top: 50%; left: -25px; background: rgba(162, 89, 255, 0.9); box-shadow: 0 0 20px rgba(162, 89, 255, 0.5);">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>

              <!-- Main profile circle with memoji -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="w-64 h-64 bg-gradient-to-br from-primary to-purple-600 rounded-full p-1 glow-purple relative">
                  <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full relative flex items-center justify-center overflow-visible">
                    <!-- Memoji positioned to stand out from the circle -->
                    <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-56 h-56 z-10">
                      <img 
                        src="/memoji-about.webp" 
                        alt="Abhishek Mohan A" 
                        class="w-full h-full object-contain drop-shadow-2xl"
                        style="filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                      />
                      <!-- Fallback if image doesn't load -->
                      <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-6xl font-bold text-primary" style="display: none;">
                        👋
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
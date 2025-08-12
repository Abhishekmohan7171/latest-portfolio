import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 section-enter">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            <span class="gradient-text">Featured Projects</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Some of the projects I've worked on recently
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (project of projects; track project.id) {
            <div class="bg-dark-secondary border border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 glow-purple-hover section-enter">
              <div class="p-8">
                <h3 class="text-xl font-bold text-white mb-3">{{ project.title }}</h3>
                <p class="text-gray-400 mb-4">{{ project.description }}</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  @for (tech of project.technologies; track tech) {
                    <span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      {{ tech }}
                    </span>
                  }
                </div>
                
                <div class="flex gap-4">
                  <a [href]="project.github" 
                     target="_blank"
                     class="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  @if (project.demo) {
                    <a [href]="project.demo" 
                       target="_blank"
                       class="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: '🌸 MoodBloom',
      description: 'An interactive mood tracking platform using Angular and Tailwind CSS to help users log and analyze their emotional well-being over time. Features include mood logging with customizable triggers and activities, historical mood visualization with analytics dashboards, gratitude journaling, wellness resources, and daily reminders. Implemented responsive UI with Tailwind CSS, state management in Angular, and data persistence to ensure a seamless user experience across devices.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Abhishekmohan7171/Mood-Bloom',
      demo: 'https://moodbloom-7171.web.app/'
    },
    {
      id: 2,
      title: 'Hotel Checkout App (EzOrder)',
      description: 'A comprehensive hotel management system with menu management and real-time order display functionality built with Angular and Firebase.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Abhishekmohan7171/EzOrder',
      demo: null
    },
    
    {
      id: 3,
      title: 'ng-terminal-typing-effect',
      description: 'An npm package that provides CLI-like typing animations for Angular applications, enhancing developer and user experience.',
      technologies: ['Angular', 'TypeScript', 'NPM Package', 'Animation'],
      github: 'https://github.com/Abhishekmohan7171/ng-terminal-typing-effect',
      demo: 'https://www.npmjs.com/package/ng-terminal-typing-effect'
    },
    
  ];
}
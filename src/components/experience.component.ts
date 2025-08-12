import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 section-enter">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            <span class="gradient-text">Experience</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development and fintech
          </p>
        </div>

        <div class="space-y-8">
          @for (job of experiences; track job.id) {
            <div class="glass-card rounded-2xl p-8 glow-purple-hover transition-all duration-300 section-enter">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ job.title }}</h3>
                  <p class="text-primary font-semibold text-lg">{{ job.company }}</p>
                </div>
                <div class="text-gray-400 mt-2 md:mt-0 font-medium">
                  {{ job.period }}
                </div>
              </div>
              
              <ul class="space-y-3">
                @for (achievement of job.achievements; track achievement) {
                  <li class="text-gray-300 flex items-start">
                    <span class="text-primary mr-3 mt-1 text-lg">•</span>
                    <span class="leading-relaxed">{{ achievement }}</span>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Surfboard Payments',
      period: 'May 2022 – Present',
      achievements: [
        'Developed the Partner Portal serving 50+ partners and 500+ merchants',
        'Contributed to the Developer Portal with 30+ API endpoints, achieving 60% faster integration',
        'Published npm package ng-terminal-typing-effect for enhanced developer experience',
        'Built scalable frontend solutions using Angular and modern web technologies'
      ]
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'Surfboard Payments',
      period: 'Oct 2020 – Dec 2020',
      achievements: [
        'Built a comprehensive Bike Service Web Application from scratch',
        'Gained hands-on experience with the complete software development lifecycle',
        'Collaborated with senior developers to understand industry best practices',
        'Delivered a fully functional web application within the internship period'
      ]
    }
  ];
}
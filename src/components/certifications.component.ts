import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-interactive relative overflow-hidden">
      <!-- Floating particles -->
      <div class="floating-particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16 section-enter">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            <span class="gradient-text">Certifications</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          @for (cert of certifications; track cert.id) {
            <div class="glass-card rounded-xl p-8 mb-6 last:mb-0 glow-purple-hover transition-all duration-300 section-enter group">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-6">
                  <div class="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">{{ cert.name }}</h3>
                    <p class="text-primary font-semibold">{{ cert.issuer }}</p>
                  </div>
                </div>
                <div class="text-gray-400 font-medium text-lg">
                  {{ cert.year }}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class CertificationsComponent {
  certifications = [
    {
      id: 1,
      name: 'Backend engineering Launchpad',
      issuer: 'Airtribe',
      year: '2025'
    },
    {
      id: 2,
      name: 'Data Science for Engineers',
      issuer: 'NPTEL',
      year: '2021'
    },
    {
      id: 3,
      name: 'Postman API Fundamentals',
      issuer: 'Postman',
      year: '2022'
    },
    {
      id: 4,
      name: 'Machine Learning',
      issuer: 'Verzeo',
      year: '2021'
    }
  ];
}
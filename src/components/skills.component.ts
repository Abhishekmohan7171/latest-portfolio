import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-interactive relative overflow-hidden">
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
            <span class="gradient-text">Skills & Technologies</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          @for (skill of skills; track skill.name) {
            <div class="glass-card rounded-xl p-6 text-center hover:border-primary transition-all duration-300 glow-purple-hover section-enter group">
              <div class="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <img *ngIf="skill.iconPath" [src]="skill.iconPath" [alt]="skill.name + ' icon'" class="w-10 h-10 object-contain" />
              </div>
              <h3 class="text-sm font-semibold text-white">{{ skill.name }}</h3>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skills = [
    { name: 'TypeScript', iconPath: 'assets/typescript.png' },
    { name: 'JavaScript', iconPath: 'assets/js.png' },
    { name: 'HTML', iconPath: 'assets/html-5.png' },
    { name: 'CSS', iconPath: 'assets/css-3.png' },
    { name: 'Figma', iconPath: 'assets/figma.svg' },
    { name: 'Angular', iconPath: 'assets/angular.png' },
    { name: 'NestJS', iconPath: 'assets/nest.png' },
    { name: 'Tailwind', iconPath: 'assets/tailwind.svg' },
    { name: 'Firebase', iconPath: 'assets/firebase.png' },
    { name: 'MongoDB', iconPath: 'assets/mongo.png' },
    { name: 'SQL', iconPath: 'assets/mysql.png' },
    { name: 'REST APIs', iconPath: 'assets/api.png' },
    { name: 'UI/UX', iconPath: 'assets/ui.png' },
    { name: 'Git', iconPath: 'assets/git.png' },
    { name: 'Node.js', iconPath: 'assets/node-js.png' }
  ];
  
}
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ExperienceComponent } from './components/experience.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { CertificationsComponent } from './components/certifications.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-dark text-white">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}

bootstrapApplication(App);
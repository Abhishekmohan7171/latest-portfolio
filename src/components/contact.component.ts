import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 section-enter">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            <span class="gradient-text">Get In Touch</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="section-enter">
            <h3 class="text-xl font-bold text-white mb-8">Contact Information</h3>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="bg-primary/20 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-400">Email</p>
                  <a href="mailto:abhishekmohan7171@gmail.com" class="text-white hover:text-primary transition-colors">
                    abhishekmohan7171&#64;gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="bg-primary/20 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-400">Phone</p>
                  <a href="tel:+916238244041" class="text-white hover:text-primary transition-colors">
                    +91 6238244041
                  </a>
                </div>
              </div>
            </div>

            <div class="flex gap-4 mt-8">
              <a href="https://github.com/Abhishekmohan7171" 
                 target="_blank"
                 class="bg-dark-secondary hover:bg-gray-700 text-white p-3 rounded-lg transition-colors glow-purple-hover">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a href="https://linkedin.com/in/abhishek-mohan71" 
                 target="_blank"
                 class="bg-dark-secondary hover:bg-gray-700 text-white p-3 rounded-lg transition-colors glow-purple-hover">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="section-enter">
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  [(ngModel)]="formData.name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your Name">
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  [(ngModel)]="formData.email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com">
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  [(ngModel)]="formData.message"
                  name="message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."></textarea>
              </div>

              <button 
                type="submit"
                [disabled]="isSubmitting"
                class="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white py-3 rounded-lg font-medium transition-all duration-300 glow-purple-hover disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all fields');
      return;
    }

    this.isSubmitting = true;

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${this.formData.name}`);
    const body = encodeURIComponent(`
Name: ${this.formData.name}
Email: ${this.formData.email}

Message:
${this.formData.message}

---
Sent from your portfolio website
    `);

    const mailtoLink = `mailto:abhishekmohan7171@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
      alert('Your default email client should open with the message. If not, please email me directly at abhishekmohan7171@gmail.com');
    }, 1000);
  }
}
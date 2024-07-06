import { Component } from '@angular/core';
import { SocialLinkComponent } from './social-link/social-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SocialLinkComponent]
})
export class AppComponent {
  socialLinksProfile = [
    { label: 'GitHub', link: '#' },
    { label: 'Frontend Mentor', link: '#' },
    { label: 'LinkedIn', link: '#' },
    { label: 'Twitter', link: '#' },
    { label: 'Instagram', link: '#' }
  ]
}

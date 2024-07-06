import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  @Input({ required: true }) link = '';
  @Input({ required: true }) label = '';
}

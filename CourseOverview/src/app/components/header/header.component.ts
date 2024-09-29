import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor() {
    document.addEventListener('click', this.closeDropdown.bind(this));
  }

  isProfileDropdownOpen = false;

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  closeProfileDropdown() {
    this.isProfileDropdownOpen = false;
  }

  closeDropdown(event: MouseEvent) {
    if (this.isProfileDropdownOpen) {
      const target = event.target as HTMLElement;
      if (!target.closest('.profile-button')) {
        this.isProfileDropdownOpen = false;
      }
    }
  }
}

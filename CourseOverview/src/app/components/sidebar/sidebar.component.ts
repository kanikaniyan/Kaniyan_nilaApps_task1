import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  isMobile = window.innerWidth < 640; // sm breakpoint in Tailwind

  activeItem: string | null = "/programs";

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 640;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.isOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  constructor(private router: Router, private eRef: ElementRef) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.activeItem = event.urlAfterRedirects;
      }
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  setActiveItem(item: string) {
    this.activeItem === item ? null : this.activeItem = item;
    this.isOpen = false;
  }
}

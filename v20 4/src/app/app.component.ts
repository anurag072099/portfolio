import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year = new Date().getFullYear();
  active = signal<string>('home');
  theme = signal<'dark'|'light'>('dark');
  scrolled = signal<boolean>(false);

  // Template convenience: used for icon/text switches
  get isDark(): boolean {
    return this.theme() === 'dark';
  }

  go(id: string){
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleTheme(){
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
  }

  @HostListener('window:scroll', [])
  onScroll(){
    this.scrolled.set((window.scrollY || 0) > 10);
    const ids = ['home','about','skills','projects','experience','education','blog','contact'];
    const y = window.scrollY + 140;
    for (let i = ids.length-1; i >= 0; i--){
      const el = document.getElementById(ids[i]);
      if (el && el.offsetTop <= y){
        this.active.set(ids[i]);
        break;
      }
    }
  }
}

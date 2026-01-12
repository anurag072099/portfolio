import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  profile = PROFILE;

  // Typing / fading roles in hero
  roles: string[] = [
    'Software Engineering',
    'Full Stack Development',
    'Data Science',
    'Business Intelligence',
    'Product Analytics',
    'Artificial Intelligence',
    'Cloud Solutions'
  ];
  typedRole = '';
  fadeOut = false;

  private roleIdx = 0;
  private charIdx = 0;
  private deleting = false;
  private timer: any = null;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private startTyping(): void {
    const typeSpeed = 70;      // ms per char
    const deleteSpeed = 40;    // ms per char
    const holdMs = 900;        // pause when word finished
    const fadeMs = 220;        // fade duration (CSS matches)

    const tick = () => {
      const current = this.roles[this.roleIdx];

      // typing
      if (!this.deleting) {
        this.typedRole = current.slice(0, this.charIdx + 1);
        this.charIdx++;

        if (this.charIdx === current.length) {
          // hold, then fade + start deleting
          this.timer = setTimeout(() => {
            this.fadeOut = true;
            this.timer = setTimeout(() => {
              this.deleting = true;
              this.fadeOut = false;
              tick();
            }, fadeMs);
          }, holdMs);
          return;
        }

        this.timer = setTimeout(tick, typeSpeed);
        return;
      }

      // deleting
      this.typedRole = current.slice(0, Math.max(0, this.charIdx - 1));
      this.charIdx--;

      if (this.charIdx <= 0) {
        this.deleting = false;
        this.roleIdx = (this.roleIdx + 1) % this.roles.length;
      }

      this.timer = setTimeout(tick, deleteSpeed);
    };

    tick();
  }

  skillGroups(){
    return Object.entries(this.profile.skills).map(([title, items]) => ({ title, items: items as string[] }));
  }
}

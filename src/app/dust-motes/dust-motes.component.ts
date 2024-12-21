import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dust-motes',
  templateUrl: './dust-motes.component.html',
  styleUrls: ['./dust-motes.component.css']
})
export class DustMotesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const canvas = document.getElementById('shadowCanvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    this.initializeCanvas(ctx);
  }

  private initializeCanvas(ctx: CanvasRenderingContext2D): void {
    // Set canvas dimensions
    const canvas = ctx.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Example of rendering particles
    const particles = this.createParticles(50);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }

  private createParticles(count: number): any[] {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        size: Math.random() * 5 + 1,
        color: `rgba(255, 255, 255, ${Math.random()})`,
      });
    }
    return particles;
  }
}

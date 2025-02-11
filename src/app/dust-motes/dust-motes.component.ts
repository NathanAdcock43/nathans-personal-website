import {Component, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-dust-motes',
  templateUrl: './dust-motes.component.html',
  styleUrls: ['./dust-motes.component.css']
})
export class DustMotesComponent implements AfterViewInit {
  private particles: any[] = [];
  private maxParticles = 50;
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

    this.startGeneratingParticles();
    this.initializeCanvas(ctx);
  }

  private initializeCanvas(ctx: CanvasRenderingContext2D): void {
    // Set canvas dimensions
    const canvas = ctx.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Ensure particles wrap around instead of disappearing
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 3);
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
        x: Math.random(),
        y: Math.random(),
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        size: Math.random() * 3 + 1,
        color: `rgba(255, 255, 255, ${Math.random()})`,
      });
    }

    return particles;
  }

  private intervalId: any;

  private startGeneratingParticles(): void {
    this.intervalId = setInterval(() => {
      console.log(`⏳ Running Interval: ${this.intervalId} at ${new Date().toLocaleTimeString()}`);
      if (this.particles.length < this.maxParticles) {
        const newParticle = this.createParticles(1)[0];
        this.particles.push(newParticle);
        console.log(`✅ Added new particle. Total: ${this.particles.length}`);
      }
    }, 500);
  }

// Check if the interval is still running
  @HostListener('window:focus')
  checkInterval() {
    console.log(`🔍 Interval Status: ${this.intervalId ? "Running" : "Stopped"}`);
  }


}

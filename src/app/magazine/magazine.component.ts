import { Component, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-magnify',
  templateUrl: './magnify.component.html',
  styleUrls: ['./magnify.component.css']
})
export class MagnifyComponent implements AfterViewInit {
  private defaultOptions = {
    src: '',
    speed: 100,
    timeout: -1,
    touchBottomOffset: 0,
    finalWidth: null,
    finalHeight: null,
    magnifiedWidth: null,
    magnifiedHeight: null,
    limitBounds: false,
    mobileCloseEvent: 'touchstart',
    afterLoad: () => {}
  };

  private lensSize = 300; // Lens size in pixels
  private resizeTimer: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const magnifyContainer = this.el.nativeElement.querySelector('.magnify');
    const magnifyImage = this.el.nativeElement.querySelector('.magnify-image');

    if (magnifyContainer && magnifyImage) {
      this.initializeMagnify(magnifyContainer, magnifyImage);
    } else {
      console.error('Magnify container or image not found');
    }
  }

  private initializeMagnify(container: HTMLElement, image: HTMLElement): void {
    const lens = this.createLens(container);

    // Preload the magnified image
    const zoomImage = new Image();
    zoomImage.onload = () => {
      this.setupLens(image, lens, zoomImage, container);
    };
    zoomImage.src = image.getAttribute('data-magnify-src') || this.defaultOptions.src;

    // Mousemove event to handle lens position
    this.renderer.listen(container, 'mousemove', (event: MouseEvent) => {
      this.moveLens(event, lens, image, zoomImage);
    });

    // Mouseleave event to hide lens
    this.renderer.listen(container, 'mouseleave', () => {
      this.renderer.setStyle(lens, 'display', 'none');
    });

    // Touch event to hide lens
    this.renderer.listen(container, this.defaultOptions.mobileCloseEvent, () => {
      this.renderer.setStyle(lens, 'display', 'none');
    });
  }

  private createLens(container: HTMLElement): HTMLElement {
    const lens = this.renderer.createElement('div');
    this.renderer.addClass(lens, 'magnify-lens');
    this.renderer.setStyle(lens, 'width', `${this.lensSize}px`);
    this.renderer.setStyle(lens, 'height', `${this.lensSize}px`);
    this.renderer.setStyle(lens, 'display', 'none');
    this.renderer.appendChild(container, lens);
    return lens;
  }

  private setupLens(image: HTMLElement, lens: HTMLElement, zoomImage: HTMLImageElement, container: HTMLElement): void {
    const magnifiedWidth = zoomImage.width;
    const magnifiedHeight = zoomImage.height;

    // Set lens background properties
    this.renderer.setStyle(lens, 'background-image', `url(${zoomImage.src})`);
    this.renderer.setStyle(lens, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(lens, 'background-size', `${magnifiedWidth}px ${magnifiedHeight}px`);

    // Optional after-load callback
    if (typeof this.defaultOptions.afterLoad === 'function') {
      this.defaultOptions.afterLoad();
    }
  }

  private moveLens(event: MouseEvent, lens: HTMLElement, image: HTMLElement, zoomImage: HTMLImageElement): void {
    const rect = image.getBoundingClientRect();
    const lensSize = this.lensSize;

    // Calculate cursor position relative to the image
    const x = event.clientX - rect.left - lensSize / 2;
    const y = event.clientY - rect.top - lensSize / 2;

    // Ensure the lens stays within bounds
    const maxX = rect.width - lensSize;
    const maxY = rect.height - lensSize;
    const boundedX = Math.max(0, Math.min(x, maxX));
    const boundedY = Math.max(0, Math.min(y, maxY));

    // Update lens position
    this.renderer.setStyle(lens, 'left', `${boundedX}px`);
    this.renderer.setStyle(lens, 'top', `${boundedY}px`);
    this.renderer.setStyle(lens, 'display', 'block');

    // Update lens background position
    const zoomFactorX = zoomImage.width / rect.width;
    const zoomFactorY = zoomImage.height / rect.height;
    const bgPosX = -boundedX * zoomFactorX;
    const bgPosY = -boundedY * zoomFactorY;

    this.renderer.setStyle(lens, 'background-position', `${bgPosX}px ${bgPosY}px`);
  }

  @HostListener('window:resize')
  onResize(): void {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      // Logic to recalculate offsets, dimensions, or refresh magnify on window resize
      console.log('Window resized, magnify components refreshed.');
    }, 100); // Debounce resize event
  }
}

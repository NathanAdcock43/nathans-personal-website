import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-floppy-disk',
  templateUrl: './floppy-disk.component.html',
  styleUrls: ['./floppy-disk.component.css']
})
export class FloppyDiskComponent implements AfterViewInit {
  private resumePath: string = '../assets/other/NathanAResume2024.docx';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const floppyElement = this.el.nativeElement.querySelector('.floppyDisk');

    if (floppyElement) {
      // Add a click listener to the floppy disk element
      this.renderer.listen(floppyElement, 'click', () => {
        this.downloadResume();
      });
    } else {
      console.error('Floppy disk element not found');
    }
  }

  private downloadResume(): void {
    // Create a temporary link element for the download
    const link = document.createElement('a');
    link.href = this.resumePath;
    link.download = 'NathanAResume2024.docx';
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link);
  }
}


import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent implements AfterViewInit {
  carousel: HTMLDivElement | null = null;
  currentWidth = 0;
  currentItem: any = { modelo: 'aralia' };

  ngAfterViewInit(): void {
    this.carousel = document.getElementById(
      'carousel-content'
    ) as HTMLDivElement;
    this.currentWidth = this.carousel.offsetWidth;
  }

  departmentInfo = [
    {
      modelo: 'lirio',
      recamaras: 2,
      pb: 'assets/images/PT68-PB-4096F.jpg',
      pa: 'assets/images/PT68-PA-4096FF.jpg',
      mainImg: 'assets/images/PT68-FRONT-4096.jpg',
      construccion: '92.86',
      terrain: 98,
      price: 'Proximamente',
    },
    {
      modelo: 'aralia',
      recamaras: 3,
      pb: 'assets/images/PT89-PB-4096F.jpg',
      pa: 'assets/images/PT89-PA-4096F.jpg',
      mainImg: 'assets/images/PT89-SIDE-4096.jpg',
      construccion: '69.60',
      terrain: 98,
      price: '$ 1,600,000.00 MXN',
    },
  ];

  onClickSelector(event: Event, id: string) {
    const currentElement = event.target as HTMLParagraphElement;
    currentElement.classList.add('selected');
    const currentId = currentElement.id;

    this.currentItem = this.departmentInfo.find((d) => d.modelo === id);

    if (id === 'aralia') {
      sessionStorage.setItem('event_type', 'proximamente');
    } else {
      sessionStorage.removeItem('event_type');
    }

    const lastElement = document.getElementById(`${id}-opt`);
    lastElement?.classList.remove('selected');

    const CurrentWidth = this.carousel?.offsetWidth;
    if (currentId === 'lirio-opt')
      this.carousel!.style.transform = `translateX(0px)`;
    else if (currentId === 'aralia-opt')
      this.carousel!.style.transform = `translateX(-${CurrentWidth}px)`;
  }
}

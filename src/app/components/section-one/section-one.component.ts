import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [
    CarouselComponent,
    FormComponent,
    HeaderComponent
  ],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})

export class SectionOneComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MoreInformationComponent } from '../../components/more-information/more-information.component';
import { LocationComponent } from '../../components/location/location.component';
import { BrochureComponent } from '../../components/brochure/brochure.component';
import { ModalGalleryComponent } from '../../components/modal-gallery/modal-gallery.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { DepartmentComponent } from '../../components/department/department.component';
import { WelcomeSectionComponent } from '../../components/welcome-section/welcome-section.component';
import { FolletoModalComponent } from '../../components/folleto-modal/folleto-modal.component';
import { PromoModalComponent } from "../../components/promo-modal/promo-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
    MoreInformationComponent,
    LocationComponent,
    BrochureComponent,
    CommonModule,
    DepartmentComponent,
    WelcomeSectionComponent,
    GalleryComponent,
    ModalGalleryComponent,
    FolletoModalComponent,
    PromoModalComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

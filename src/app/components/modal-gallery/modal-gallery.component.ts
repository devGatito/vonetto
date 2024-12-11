import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-gallery',
  standalone: true,
  imports: [],
  templateUrl: './modal-gallery.component.html',
  styleUrl: './modal-gallery.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ModalGalleryComponent implements AfterViewInit {
  handlers!: NodeListOf<Element>;
  gallerySlider!: Element | null;
  uiGallery!: HTMLElement | null;
  next!: Element | null | undefined;
  prev!: Element | null | undefined;
  count = 0;
  limit!: number;
  pictures!: NodeListOf<HTMLPictureElement>;

  title: string = 'Vonetto Residencial';

  ngAfterViewInit(): void {
    this.handlers = document.querySelectorAll('.button-open-gallery');
    this.gallerySlider = document.querySelector('.gallery-slider');
    this.uiGallery = document.getElementById('uiGallery');
    this.next = this.uiGallery?.querySelector('#nextBtn');
    this.prev = this.uiGallery?.querySelector('#prevBtn');

    console.log(this.handlers);
    this.handlers.forEach((handler: any) => {
      const self = this;
      handler.addEventListener('click', async function () {
        console.log(event);
        const typeGallery = handler?.dataset?.gallery || null;

        console.log(typeGallery);

        if (typeGallery) {
          self.title = self.getTitle(typeGallery) as string;
          const response = await fetch(
            `assets/galleryDataSet/${typeGallery}Gallery.json`
          );
          const gallery = await response.json();
          console.log(gallery);
          self.limit = gallery.images.length;
          self.createGallery(gallery.images);
        }
      });
    });
  }

  getTitle(gallery: string): string {
    switch (gallery) {
      case 'altea':
        return 'Galería de Modelo Altea';
      case 'alterra':
        return 'Galería de Modelo Alterra';
      case 'alteza':
        return 'Galería de Modelo Alteza';
      default:
        return 'Vonetto Residencial';
    }
  }

  close() {
    this.uiGallery?.classList.remove('show');
    document.body.style.overflowY = 'auto';
    this.count = 0;
    this.title = '"Vonetto Residencial"';
    (this.gallerySlider as HTMLDivElement).innerHTML = '';
  }

  async createGallery(images: string[]) {
    const renderGallery = await this.renderSlide(images);

    if (renderGallery) {
      (this.gallerySlider as HTMLElement).style.marginLeft = `0`;
      this.uiGallery?.classList.add('show');
      document.body.style.overflow = 'hidden';
      this.initSliderEvents();
    }
  }

  async renderSlide(images: string[]) {
    return new Promise((resolve, reject) => {
      const limit = images.length;

      let elements = '';
      images.forEach((image, index) => {
        elements += `
          <figure data-index=${index}>
            <picture>
                <img loading="lazy" class="loaded" data-src="${image}" alt="preview image">
            </picture>
            <span class="legal">*Imagenes con fines ilustrativos, pueden variar sin previo aviso. Consulta términos y condiciones en ruba.mx/tyc.</span>
          </figure>
        `;
      });

      (this.gallerySlider as HTMLDivElement).innerHTML = elements;
      (this.gallerySlider as HTMLDivElement).style.minWidth = `${limit}00%`;

      setTimeout(() => {
        resolve(true);
      }, 300);
    });
  }

  initSliderEvents() {
    this.pictures = this.uiGallery?.querySelectorAll(
      'figure'
    ) as NodeListOf<HTMLElement>;
    this.pictures[0]?.classList.add('active');

    if (this.pictures.length > 1) {
      (this.next as HTMLDivElement).classList.add('hidden');
      (this.prev as HTMLDivElement).classList.add('visible');
    } else {
      (this.next as HTMLDivElement).classList.add('hidden');
      (this.prev as HTMLDivElement).classList.add('hidden');
    }
  }

  forward() {
    this.count = this.count - 1 > 0 ? this.count - 1 : 0;
    this.updateGallery();
  }

  back() {
    this.count = this.count + 1 < this.limit ? this.count + 1 : this.limit - 1;
    this.updateGallery();
  }

  updateGallery() {
    this.pictures.forEach((picture) => {
      let numb = Number(picture.dataset?.['index']);
      if (numb === this.count) {
        picture.classList.add('active');
      } else {
        picture.classList.remove('active');
      }

      (
        this.gallerySlider as HTMLDivElement
      ).style.marginLeft = `-${this.count}00%`;

      this.count === 0 && (this.next as HTMLDivElement).classList.add('hidden');
      this.count !== 0 &&
        (this.next as HTMLDivElement).classList.add('visible');
      this.count === this.pictures.length - 1 &&
        (this.prev as HTMLDivElement).classList.add('hidden');
      this.count !== this.pictures.length - 1 &&
        (this.prev as HTMLDivElement).classList.add('visible');
    });
  }
}

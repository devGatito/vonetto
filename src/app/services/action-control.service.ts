import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActionControlService {
  // BehaviorSubject con un valor inicial
  private actionSource = new BehaviorSubject<{ flag: boolean; action: string }>(
    { flag: false, action: '' }
  );

  // Observable al que los componentes pueden suscribirse
  action$ = this.actionSource.asObservable();

  // Método para emitir el valor booleano y la acción
  setAction(flag: boolean, action: string) {
    this.actionSource.next({ flag, action });
  }

  redirect(path: string): void {
    if(typeof window !== 'undefined') {
      const { hash, href } = window.location;
      const url = new URL(href);
      if (hash) {
        url.hash = '';
      }
      url.pathname += path;
      window.location.href = url.toString();
    }
  }
}

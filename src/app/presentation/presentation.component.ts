import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { pageStyles } from './page-styles';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient,
    private _renderer: Renderer2,
    private _element: ElementRef
  ) {}

  public pageContent = '';
  private lastSlide = 19;
  private activeSlide = 1;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.moveSlide(1);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.moveSlide(-1);
    }
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params.id || 1;
      this.activeSlide = Number(id);
      this._http
        .get(`/assets/pages/${id}.html`, { responseType: 'text' })
        .subscribe(response => {
          this.pageContent = response;
          this.addCSS(pageStyles[id], 'page-style');
        });
    });
  }

  moveSlide(moveRelative: number) {
    if (moveRelative > 0 && this.activeSlide < this.lastSlide) {
      this.activeSlide += 1;
    } else if (moveRelative < 0 && this.activeSlide > 1) {
      this.activeSlide -= 1;
    }

    this._router.navigate(['slide', this.activeSlide]);
  }

  addCSS(css: string, id: string) {
    if (typeof window !== 'undefined') {
      if (this._renderer && this._element) {
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = this._renderer.createElement('style');

        // if new CSS block was added with specific ID, first delete the old CSS block
        if (id) {
          const oldCSS = document.getElementById(id);
          if (oldCSS) {
            head.removeChild(oldCSS);
          }
          // add id to the newly created CSS
          style.id = id;
        }

        style.type = 'text/css';

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
      }
    }
  }
}

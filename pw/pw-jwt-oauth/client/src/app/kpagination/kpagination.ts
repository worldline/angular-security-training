import { Component, OnInit, EventEmitter } from '@angular/core';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'kpagination',
  templateUrl: 'kpagination.html',
  styleUrls: ['kpagination.css'],
  inputs: ['totalNbItems', 'nbItemsPerPage', 'currentPage:startPage'],
  outputs: ['pageChange'],
})
export class KPagination implements OnInit {
  private _totalNbItems?: number;
  private _nbItemsPerPage: number = 0;

  currentPage: number = 1;
  private _nbPages: number = 1;
  nbPagesSet: number[] = [];

  firstItem: number = 0;
  lastItem: number = 0;

  pageChange: EventEmitter<number> = new EventEmitter();

  //Utils
  private updateItemsIndexesFromPage(): void {
    this.firstItem = this.nbItemsPerPage * (this.currentPage - 1) + 1;
    this.lastItem = Math.min(
      this.nbItemsPerPage * this.currentPage,
      this.totalNbItems
    );
  }

  private updateComputedAttrs(): void {
    if (this._totalNbItems && this._nbItemsPerPage) {
      this.nbPages = Math.ceil(this._totalNbItems / this._nbItemsPerPage);
    }
    this.updateItemsIndexesFromPage();
  }

  //Attributes pointcuts
  set totalNbItems(val: number) {
    this._totalNbItems = val;
    this.updateComputedAttrs();
  }

  get totalNbItems(): number {
    return this._totalNbItems ?? 0;
  }

  set nbItemsPerPage(val: number) {
    this._nbItemsPerPage = val;
    this.updateComputedAttrs();
  }

  get nbItemsPerPage(): number {
    return this._nbItemsPerPage;
  }

  set nbPages(val: number) {
    this._nbPages = val;
    of(1, val)
      .pipe(toArray())
      .subscribe((theRange: number[]) => {
        this.nbPagesSet = theRange;
      });
  }

  get nbPages() {
    return this._nbPages;
  }

  // lifecycle
  ngOnInit() {
    this.updateComputedAttrs();
  }

  // ######### View Methods

  // ##### Go To Page
  switchPage = (page: number): boolean => {
    this.currentPage = page;
    this.updateItemsIndexesFromPage();
    this.pageChange.next(page);

    //Disable standard link behavior
    return false;
  };

  switchToFirst = (): boolean => {
    return this.switchPage(1);
  };

  switchToPrev = (): boolean => {
    let prev = Math.max(1, this.currentPage - 1);
    return this.switchPage(prev);
  };

  switchToNext = (): boolean => {
    let next = Math.min(this.nbPages, this.currentPage + 1);
    return this.switchPage(next);
  };

  switchToLast = (): boolean => {
    return this.switchPage(this.nbPages);
  };

  // ##### Get appropriated image

  getFirstPageImage = () =>
    'pic_first' + (this.currentPage === 1 ? '_off' : '') + '.gif';
  getPrevPageImage = () =>
    'pic_prev' + (this.currentPage === 1 ? '_off' : '') + '.gif';
  getNextPageImage = () =>
    'pic_next' + (this.currentPage === this.nbPages ? '_off' : '') + '.gif';
  getLastPageImage = () =>
    'pic_last' + (this.currentPage === this.nbPages ? '_off' : '') + '.gif';
}

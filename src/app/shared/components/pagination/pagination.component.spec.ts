import {ComponentFixture, TestBed} from "@angular/core/testing";

import {By} from "@angular/platform-browser";
import {PaginationComponent} from "./pagination.component";
import {UtilsService} from "../../services/utils.service";
import {first} from "rxjs";

describe('PaginationComponent', () => {
  let component: PaginationComponent
  let fixture: ComponentFixture<PaginationComponent>;
  const mockUtilsService = {
    range: () => [1,2,3,4,5],
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginationComponent],
      // providers: [UtilsService]
      providers: [{ provide: UtilsService, useValue: mockUtilsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.total = 50;
    component.limit = 10;
    component.currentPage = 1;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('renders correct pagination', () => {
    const pageContainers = fixture.debugElement.queryAll(
      By.css('[data-testid="page-container"]')
    );
    expect(pageContainers.length).toBe(5);
    expect(pageContainers[0].nativeElement.textContent).toContain('1');
  });

  it('should emit a clicked page', () => {
    const pageContainers = fixture.debugElement.queryAll(
      By.css('[data-testid="page-container"]')
    );
    let clickedPage: number | undefined
    component.pageChangeEvent.pipe(first()).subscribe(page => {
      clickedPage = page;
    })
    pageContainers[0].triggerEventHandler('click');
    // pageContainers[0].nativeElement.click();
    expect(clickedPage).toEqual(1);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import { Location } from '@angular/common';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  const locationStub = {
    back: jasmine.createSpy('back')
  };

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of([{id: 1}])
          }
        },
        {
          provide: Location,
          useValue: locationStub
        }
      ]
    })
      .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // TODO : fix the the test to reactivate it
    pending();
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { DemoComponent } from './demo.component';
import { By } from '@angular/platform-browser';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let deb: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent]
    });
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increase count on click', () => {
    const h1 = deb.query(By.css('h1'))
    const btn = deb.query(By.css('#increase'))
    btn.triggerEventHandler('click', {})
    fixture.detectChanges()
    expect(component.count).toEqual(parseInt(h1.nativeElement.innerText))
  })
});

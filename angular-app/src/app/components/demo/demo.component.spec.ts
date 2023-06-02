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
  it('call private method and variable ', () => {
    component['printWorking']()
    expect(component['status'] === 'working').toBeTruthy()
  })

  it('interpolation test', () => {
    let element: HTMLElement = fixture.debugElement.nativeElement.querySelector('h1')
    expect(element.innerText).toEqual(component.count.toString())

    component.count = 100
    fixture.detectChanges()
    expect(element.innerText).toEqual(component.count.toString())
  })

  it('ngClass Test', () => {
    let element: HTMLElement = fixture.debugElement.nativeElement.querySelector('h1')
    component.count = 5
    fixture.detectChanges()
    expect(element.getAttribute('class')).toContain('text-primary')
  })

});

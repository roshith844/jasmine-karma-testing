import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { DemoComponent } from './demo.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { fakeAsync, async, tick } from '@angular/core/testing';
import { DemoService } from '../../services/demo.service';
class MockService extends DemoService {
  public newSaveMethod() {
    return true
  }
}
describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let deb: DebugElement
  let service: DemoService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent],
      imports: [FormsModule]
    });

    TestBed.overrideComponent(
      DemoComponent,
      { set: { providers: [{ provide: DemoService, useClass: MockService }] } }
    )
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement
    service = TestBed.inject(DemoService)

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

  it('click event test', () => {
    let element = fixture.debugElement.nativeElement.querySelector('#increase')
    let h1 = fixture.debugElement.nativeElement.querySelector('h1')
    let count = h1.innerText
    element.click()
    fixture.detectChanges()
    expect(h1.innerText).toBe((Number(count) + 1).toString())
  })

  it('set studentName from component ts', (done) => {
    component.studentName = 'example'
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name')
      expect(element.value).toEqual('example')
      done()
    })
  })

  it('set testbox value', (done) => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name')
      element.value = 'updated'
      element.dispatchEvent(new Event('input'))
      fixture.detectChanges()
      expect(element.value).toEqual(component.studentName)
      done()
    })
  })
  it("button Click test case", (done) => {
    fixture.detectChanges()
    let element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button1')
    fixture.whenStable().then(() => {
      element.click()
      fixture.detectChanges()
      expect(component.studentName).toBe('Roshith')
      done()
    })
  })

  it('set studentName from component ts using async method', fakeAsync(() => {
    component.studentName = 'example'
    fixture.detectChanges()
    tick()
    // fixture.whenStable().then(() => {
    const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name')
    expect(element.value).toEqual('example')
    // })
  }))

  it('dependency injection test using inject method', inject([DemoService], (injectedService: DemoService) => {
    expect(injectedService).toBeTruthy()
  })
  )

  it('dependency injection test using overriding', () => {
    let element = fixture.debugElement.injector.get(DemoService)
    expect(element instanceof (MockService)).toBeTruthy()
  })

});

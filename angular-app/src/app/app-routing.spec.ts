import { TestBed, waitForAsync, ComponentFixture, fakeAsync, inject, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from './app-routing.module'
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { DemoComponent } from './components/demo/demo.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('DemoComponent', () => {
    let component: DemoComponent
    let fixture: ComponentFixture<DemoComponent>
    let appComponent: AppComponent
    let appFixture: ComponentFixture<AppComponent>

    let objRouter: Router
    let location: Location
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, DemoComponent],
            imports: [AppRoutingModule, FormsModule, RouterTestingModule.withRoutes(routes)]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        objRouter = TestBed.inject(Router)
        location = TestBed.inject(Location)
        fixture = TestBed.createComponent(DemoComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
        appFixture = TestBed.createComponent(AppComponent)
        appComponent = appFixture.componentInstance

        objRouter.initialNavigation()
    });

    it('check route', waitForAsync(() => {
        appFixture.detectChanges()
        appFixture.whenStable().then(() => {
            expect(location.path()).toEqual('/')
        })

    }));
});

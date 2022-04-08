import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ProductCommentDetailComponent } from '../../../../../../main/webapp/app/entities/product-comment/product-comment-detail.component';
import { ProductCommentService } from '../../../../../../main/webapp/app/entities/product-comment/product-comment.service';
import { ProductComment } from '../../../../../../main/webapp/app/entities/product-comment/product-comment.model';

describe('Component Tests', () => {

    describe('ProductComment Management Detail Component', () => {
        let comp: ProductCommentDetailComponent;
        let fixture: ComponentFixture<ProductCommentDetailComponent>;
        let service: ProductCommentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ProductCommentDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    ProductCommentService
                ]
            }).overrideComponent(ProductCommentDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProductCommentDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductCommentService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ProductComment(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.productComment).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});

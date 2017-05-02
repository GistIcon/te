 import { AppComponent } from './app.component';
 import { AppModule } from './app.module';
+import { SearchService } from 'app/search/search.service';
   it('should create', () => {
     expect(component).toBeDefined();
   });
   -    TestBed.configureTestingModule({
-      providers: [DocumentService]
-    });
 
   beforeEach(async(() => {
     TestBed.configureTestingModule({
-      declarations: [ NavMenuComponent ]
+      declarations: [ NavMenuComponent ],
+  });
+
+  xit('should fetch the navigation views', () => {});
+  xit('should compute the navigation map', () => {});
 import { MockLocationStrategy } from '@angular/common/testing';
 import { LocationService } from './location.service';
 
-fdescribe('LocationService', () => {

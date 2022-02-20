import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './pipeComponent/parent/parent.component';
import { ParentForComponent } from './ngForComponent/parent-for/parent-for.component';
import { ParentIfComponent } from './ngIfComponent/parent-if/parent-if.component';
import { ParentChildComponent } from './parentCildComponent/parent-child/parent-child.component';
import { ChildComponent } from './parentCildComponent/parent-child/child/child.component';
import { ChildForChildComponent } from './parentCildComponent/parent-child/child/child-for-child/child-for-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ParentForComponent,
    ParentIfComponent,
    ParentChildComponent,
    ChildComponent,
    ChildForChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

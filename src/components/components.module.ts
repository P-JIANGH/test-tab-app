import { NgModule } from '@angular/core';
import { PopularMomentComponent } from './popular-moment/popular-moment';
import { SlideComponent } from './slide/slide';
@NgModule({
	declarations: [PopularMomentComponent,
    SlideComponent],
	imports: [],
	exports: [PopularMomentComponent,
    SlideComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';

import { BackgroundColorDirective } from './backgroundColor/background-color.directive';
import { NotImageDirective } from './notImage/not-image.directive';

@NgModule({
    declarations: [
        BackgroundColorDirective,
        NotImageDirective
    ],
    imports: [],
    exports: []
})
export class DirectivesModule {}

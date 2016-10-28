import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { HighlightDirectieve } from './highlight.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HighlightDirectieve

    ],
   
    exports: [
        FormsModule,
        CommonModule,
        HighlightDirectieve
    ]
})
export class ShareModule {

}

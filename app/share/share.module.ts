import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HighlightDirectieve } from './highlight.directive';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule
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

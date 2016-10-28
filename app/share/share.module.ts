import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthServer } from './auth.server';
import { HighlightDirectieve } from './highlight.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HighlightDirectieve

    ],
    providers: [
        AuthServer
    ],
    exports: [
        FormsModule,
        CommonModule,
        HighlightDirectieve
    ]
})
export class ShareModule {

}

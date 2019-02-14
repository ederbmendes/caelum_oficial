import { NgModule } from "@angular/core";
import { CmailFormGroupComponent } from '../components/cmail-form-group/cmail-form-group.component';
import { CmailFormInputDirective } from '../components/cmail-form-group/cmail-form-input-directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CmailFormGroupComponent,
        CmailFormInputDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CmailFormGroupComponent, CmailFormInputDirective
    ]
})

export class SharedThingsModule{}
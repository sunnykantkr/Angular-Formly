import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatSelectModule,
  MatInputModule,
  MatFormFieldModule,} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule
  
  ],
  exports: [MatButtonModule, MatCheckboxModule
  ],
})
export class MyCustomMaterialModule { }
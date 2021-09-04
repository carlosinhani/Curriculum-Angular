import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule ({
    imports: [
      MatTableModule,
      MatInputModule,
      MatCardModule
    ],
    exports:[
      MatTableModule,
      MatInputModule,
      MatCardModule
    ]
})

export class MaterialModule {}

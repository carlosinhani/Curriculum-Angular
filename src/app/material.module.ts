import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

@NgModule ({
    imports: [
      MatTableModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule
    ],
    exports:[
      MatTableModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule
    ]
})

export class MaterialModule {}

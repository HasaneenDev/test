import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Material from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    Material.MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    Material.MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
})
export class MaterialsModule {}

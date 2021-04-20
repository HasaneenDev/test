import { Component } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "bootDash";
}

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 من ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} من ${length}`;
};

export function getDutchPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = "أظهار:";
  paginatorIntl.nextPageLabel = "التالي";
  paginatorIntl.previousPageLabel = "السابق";
  paginatorIntl.lastPageLabel = "الصفحة الأخيرة";
  paginatorIntl.firstPageLabel = "الصفحة الأولى";
  paginatorIntl.getRangeLabel = dutchRangeLabel;

  return paginatorIntl;
}

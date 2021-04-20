import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "src/app/shared/services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  limit: number = 10;
  skip: number = 0;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    // "id",
    "fullName",
    "username",
    "roles",
    "isActive",
    "isLoggedIn",
    "actions",
  ];

  confirmResut: any;
  constructor(
    private usersService: UsersService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: any) => {
      console.log(res);

      this.dataSource.data = res;
    });
  }
  changePage(event) {
    if (this.totalLength > this.dataSource.data.length) {
      if (this.pageIndex <= event.pageIndex) {
        this.skip = this.skip + this.limit;
      }
    }
  }
  open(content) {
    this.modalService.open(content, { size: "lg" }).result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log("Err!", reason);
      }
    );
  }

  confirm(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        (result) => {
          this.confirmResut = `Closed with: ${result}`;
        },
        (reason) => {
          this.confirmResut = `Dismissed with: ${reason}`;
        }
      );
  }
}

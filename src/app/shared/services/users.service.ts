import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private GetUserUrl = `api/users`;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.GetUserUrl);
  }
}

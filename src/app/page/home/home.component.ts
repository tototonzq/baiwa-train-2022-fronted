import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface MyData {
  name: string;
  age: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  form: MyData = {
    name: '',
    age: 0
  }
  
  
  listData: MyData[] = [];

  name: string = 'OPOR';
  name1: any;
  count: number = 0;
  isShow: boolean = false;


  data:any[]=[];
  res:any[]=[];

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.http
      .get("https://anapioficeandfire.com/api/characters/583")
      .subscribe((response) => {
        console.log(response);
        this.data.push(response)
        this.res = this.data[0].aliases
        console.log('data : ',this.res)
      });
  }
}

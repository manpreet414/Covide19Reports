import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testjob';
  objArray = [];


  constructor(private cs: CrudService) {
    this.fetchCovidReport();
  }



  fetchCovidReport() {
    this.cs.get().subscribe(res=>{
      this.objArray = res || [];
      console.log("result",res,this.objArray)
    })
  }
}

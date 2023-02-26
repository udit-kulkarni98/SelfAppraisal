import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';
import { ProfessorService } from '../services/professorService/professor.service';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';


@Component({
  selector: 'app-department-head-ash',
  templateUrl: './department-head-ash.component.html',
  styleUrls: ['./department-head-ash.component.css']
})
export class DepartmentHeadAshComponent implements OnInit {

  constructor(private router: Router, private professorsService: ProfessorService, public authService:AuthService, private fileSaver:FileSaverService) { }
  data: any = [];
  oneFilteredData = '';
  AllFilteredData: any = [];
  // stringifiedData: any; 
  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData():void{
    this.professorsService.getData()
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
      },(error)=>{

      });
  }

  export(selectedDepartment:String) {
    // for (let i = 0; i < this.data.length; i++) {
    //   console.log(i);
    //   if (this.data[i].department == selectedDepartment) {
    //     this.oneFilteredData = (this.data[i].department);
    //     this.AllFilteredData.push(this.oneFilteredData);
    //   }
  // } 
  this.AllFilteredData=this.data.filter((val: { department: String; })=>val.department==selectedDepartment)
  
  // this.stringifiedData = JSON.stringify(this.filteredData);
  console.log(this.AllFilteredData);
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const worksheet = XLSX.utils.json_to_sheet(this.AllFilteredData);
    const workbook = {
      Sheets:{
        'testingSheet':worksheet
      },
      SheetNames:['testingSheet']
    }
    const excelBuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    const blobData=new Blob([excelBuffer], {type:EXCEL_TYPE});
    this.fileSaver.save(blobData,"demoFile")
  }

}

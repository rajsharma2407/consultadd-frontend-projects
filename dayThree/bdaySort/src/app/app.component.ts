import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'bdaySort';
  data : any;
  type : any;
async ngOnInit(){
  await this.http.get('https://bitbucket.org/bitbucket-learning/bdaysort/raw/80df8eec2c59aaba8576e54110c921b4ff29cd97/birthday.json').toPromise().then(d=>{
    this.data = d;
  })
  // console.log(this.data)
}
sorting = (pos, mul) =>{
  // console.log('new line\n');
  
  this.data.sort((a, b)=>{
    if(pos == 0){
      if(a.name < b.name){
        return 1*mul;
      }else{
          return -1*mul;
      }
    }else{
    let d1 =   new Date(a.dob);
    let d2 = new Date(b.dob)
    // console.log(d1, d2)
      if(d1 < d2){
        return mul*1;
      }else{
        return -1*mul;
      }
    }
  })
}
shuffle(){
  this.data.sort(function(a, b){
    let x = Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10);
    if(x%2){
      x *= -1;
    }
    return x;
    
  })
  
}
  toggle = (str: string)=>{
    let pos;
    if(str[0] == 'n'){
      pos = 0;
    }else{
      pos = 1;
    }
    let mul = 1;
    if(str[1] == 'd'){
        mul = -1;
    }
    this.sorting(pos, mul);
  }
  constructor(private http: HttpClient){
      
  }
}

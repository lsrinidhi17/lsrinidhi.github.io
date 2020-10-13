import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  
})
export class CertificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pythoncardList = [
    {'cardTitle': 'Python Data Science Toolbox (Part 2)', 'urlVariable':'./../../assets/datacamp.png','altlogo':'Datacamp Logo','link':'https://www.datacamp.com/statement-of-accomplishment/course/4cce1fafc5154357f4e95b8712c6d02090c67556'},
    {'cardTitle': 'Python Data Science Toolbox (Part 1)', 'urlVariable':'./../../assets/datacamp.png','altlogo':'Datacamp Logo','link':'https://www.datacamp.com/statement-of-accomplishment/course/29a042feb831983c6db2e452c08eed9322b39752'},
    {'cardTitle': 'Intermediate Python', 'urlVariable':'./../../assets/datacamp.png','altlogo':'Datacamp Logo','link':'https://www.datacamp.com/statement-of-accomplishment/course/c3df7c972304bd4e417f7e799dba23aa4bab4e30'},
    {'cardTitle': 'Introduction to Python', 'urlVariable':'./../../assets/datacamp.png','altlogo':'Datacamp Logo','link':'https://www.datacamp.com/statement-of-accomplishment/course/8ba797ed6fb67a2bcb91eafb382fcf8166f52791'},


]
}

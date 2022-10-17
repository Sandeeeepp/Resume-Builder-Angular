import { Component, OnInit } from '@angular/core';
import { Database, set, ref, get } from '@angular/fire/database';

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css'],
})
export class Temp1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  database!: Database;

  info_list: any[] = [];

  candidate_details = {
    candidate_name: '',
    candidate_email: '',
    phone_number: '',
    recruiter_name: '',
    recruiter_title: '',
    company_name: '',
    company_address: '',
    city: '',
    province: '',
    postal_code: '',
    job_title: '',
  };
  candiate_name: string = '';

  submitDetails(data: any) {
    console.log(data['candidate_name']);
    set(ref(this.database, 'cover-letter/' + data.candidate_name), {
      candidate_name: data.candidate_name,
      candidate_email: data.candidate_email,
      phone_number: data.phone_number,
      recruiter_name: data.recruiter_name,
      recruiter_title: data.recruiter_title,
      company_name: data.company_name,
      company_address: data.company_address,
      city: data.city,
      province: data.province,
      postal_code: data.postal_code,
      job_title: data.job_title,
    });
  }

  get_details(canditatename: string) {
    console.log('Cname:', canditatename);
    let candidateRef = ref(this.database, '/cover-letter/' + canditatename);
    let data: any;
    get(candidateRef).then((cd) => {
      if (cd.exists()) {
        data = cd.val();
        this.candidate_details = data;
      } else {
        console.log('Error!!');
      }
    });

    return this.candidate_details;
  }
}

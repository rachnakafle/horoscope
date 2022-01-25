import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentmanagement',
  templateUrl: './paymentmanagement.component.html',
  styleUrls: ['./paymentmanagement.component.css'],
})
export class PaymentmanagementComponent implements OnInit {
  users = [
    {
      firstName: 'Rachana Kafle',
      city: 'Butwal',
      cityCode: 'BT',
    },
    {
      firstName: 'Aastha Kafle',
      city: 'Bhairahawa',
      cityCode: 'BHW',
    },
    {
      firstName: 'Sarita Baidhya',
      city: 'Bhaktapur',
      cityCode: 'BKT',
    },
    {
      firstName: 'Samrat Kafle',
      city: 'Chitwan',
      cityCode: 'CN',
    },
  ];

  persons = [
    {
      id: 1,
      name: 'Rakesh',
      gender: 0,
    },
    {
      id: 2,
      name: 'Kajal',
      gender: 1,
    },
    {
      id: 3,
      name: 'Bishal',
      gender: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

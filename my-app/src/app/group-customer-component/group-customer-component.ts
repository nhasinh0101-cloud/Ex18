import { Component, signal } from '@angular/core';
import { CustomerType } from '../classes/ICustomer';
import { CustomerHttp } from '../service/customer-http';

@Component({
  selector: 'app-group-customer-component',
  standalone: false,
  templateUrl: './group-customer-component.html',
  styleUrl: './group-customer-component.css'
})
export class GroupCustomerComponent {

  customers = signal<CustomerType[]>([]);
  errMessage = signal<string>('');

  constructor(private _service: CustomerHttp) {

    this._service.getCustomersHandleError().subscribe({

      next: (data) => {
        console.log('DATA:', data);

        // QUAN TRỌNG
        this.customers.set(data);
      },

      error: (err) => {
        this.errMessage.set(err.message);
      }

    });
  }
}
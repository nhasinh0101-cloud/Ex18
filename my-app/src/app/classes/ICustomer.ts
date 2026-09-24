export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

export interface CustomerType {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: Customer[];
}
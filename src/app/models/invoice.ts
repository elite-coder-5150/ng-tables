interface Customer {
    name: string;
    email: string;
    password: string;
    image: string;

    address: string;
}
export interface Invoice {
    invoice: number;
    date: Date;
    status: string;
    customer: Customer;
}

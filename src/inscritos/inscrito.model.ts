// src//inscritos.model.ts

export class Inscrito {
    id: number;
    studentId: string;
    name: string;
    phone: string;
    address: string;
    district: string;
    city: string;
    country: string;
    contact: string;
    email: string;
    course: string;
    registrationDate: Date;
    classStartDate: Date;
    registrationFee: number;
    installments: number;
    paidInstallments: number;
    remainingInstallments: number;
    courseFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
  }
  
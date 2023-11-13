import React from "react";

const Terms = () => {
  return (
    <div className="leading-7 pb-4 m-2">
      {/* <h1 className="text-4xl m-4 font-bold mx-auto">Terms</h1>
       */}
        <div className="bg-pink-100 mb-8 w-[400px] h-3 flex items-center mx-auto">
          <h1 className="w-full text-4xl font-bold text-center">TERMS</h1>
        </div>

      <ul className="leading-7 list-disc">
        <li>
          Acknowledgement & Negotiations: Delivery & Receipt of this Rate Card
          indicates Production Company’s acceptance of the Rates & Terms listed
          here. Any negotiated rates or terms different from what this rate card
          and deal memo term states must be in writing, signed and documented by
          both parties (Production Company and Myriam Boisselle) and emailed.
        </li>
        <li>
          Insurance: Certificate of Insurance (C.O.I) with General Liability and
          Rented Equipment Coverage must be issued by production listing Myriam
          Boisselle as Additional Insured and Loss Payee. Pre-Production: 100%
          of Labor Rate for Prep Days and Tech Scouts.
        </li>
        <li>
          Payment: Invoices due upon agreed date of hired. Payment via payroll
          service due net-15
        </li>
        <li>
          Late fee: Overdue invoices are subject to a 10% compounded late fee
          per month.
        </li>
        <li>
          Copyright: All files recorded by Myriam Boisselle are property &
          copyright of Myriam Boisselle until all invoices, fees and payments in
          full. This includes but is not limited to Labor, Equipment fees, L&D,
          expendables, and reimbursements.
        </li>
        <li>
          Cancellation: 50% fee due if canceled within 48 hours. 100% if within
          24 hours.
        </li>
        <li>Travel job fees: Travel day/Idle day (Labor Rate)</li>
        <li>All Travel Expenses to be paid by production.</li>
        <li>Mileage (IRS Mileage)* Per Diem</li>
        <li>
          Meal Breaks: 30-minutes is considered “on the clock”, 1-hour is
          considered “off the clock.”
        </li>
      </ul>
    </div>
  );
};

export default Terms;

'use strict';

let invoiceDetails = document.querySelector('.details');
let createInvoice = document.querySelector('.plus-wrapper');
let InvoiceAddress = document.querySelector('.new-invoice-address');
let closeAddress = document.querySelector('.close');

//Generated Invoice Details

const generatedInvoice = data =>{

    const [name, email] = data

    const html = ` 
            <div class="addreess-wrapper">
                <div class="invoice-no">
                    <p class="dark">Invoice</p>
                    <p class="size"># INV1122</p>
                    <p>11:35AM - Today</p>
                </div>
                <div class="customer-details">
                    <div class="detail">
                        <p>Customer Details</p>
                        <p class="name">${name}</p>
                        <p>${email}</p>
                    </div>
                    <div class="printer-wrapper">
                        <span>Print</span><img src="./assets/printer-blue.png" alt="printer"/>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>${data[2][0]}</th>
                        <th>${data[2][1]}</th>
                        <th>${data[2][2]}</th>
                    </tr>
                </thead>
                        
                <tbody>
                    
                    <tr>
                        <td>${data[3][0].item}</td>
                        <td>${data[3][0].quantity}</td>
                        <td>${data[3][0].price}</td>
                    </tr>
                    <tr>
                        <td>${data[3][1].item}</td>
                        <td>${data[3][1].quantity}</td>
                        <td>${data[3][1].price}</td>
                    </tr>
                    <tr>
                        <td>${data[3][2].item}</td>
                        <td>${data[3][2].quantity}</td>
                        <td>${data[3][2].price}</td>
                    </tr>
                    <tr>
                        <td>${data[3][3].item}</td>
                        <td>${data[3][3].quantity}</td>
                        <td>${data[3][3].price}</td>
                    </tr>
                    <tr>
                        <td>${data[3][4].item}</td>
                        <td>${data[3][4].quantity}</td>
                        <td>${data[3][4].price}</td>
                    </tr>
                 
                </tbody>
            </table>
            <div class="total-wrapper">          
                    <p>
                        <span class="weight">Sub Total</span>
                        <span class="weight">&#8377; ${data[4][0].subTotal}</span>
                    </p>
                    <p>
                        <span>Tax(12.36%)</span>
                        <span class="weight">&#8377; ${data[4][0].tax}</span>
                    </p>
                    <p>
                        <span class="margin">Discount(10%)</span>
                        <span class="weight">&#8377; ${data[4][0].discount}</span>
                    </p>
                    <p>
                        <span class="weight">Grand Total</span>
                        <span class="weight">&#8377; ${data[4][0].grandTotal}</span>
                    </p>        
            </div>
 
        `;

    invoiceDetails.innerHTML = html;
}

generatedInvoice(invoiceData)


//Clicking on the plus icon to create invoice
createInvoice.addEventListener('click', (e) => {
    InvoiceAddress.style.display = 'block'
})

//Clicking on the close icon to close invoice
closeAddress.addEventListener('click', (e) => {
    InvoiceAddress.style.display = 'none'
})
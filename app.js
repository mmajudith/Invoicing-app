'use strict';

// Varible declarations
let invoiceDetails = document.querySelector('.details');

let createInvoice = document.querySelector('.plus-wrapper');
let printInvoice = document.querySelector('.printer-wrapper');
let invoiceAddress = document.querySelector('.new-invoice-address');
let closeAddress = document.querySelector('.close');
let closeProduct = document.querySelector('.close-product');
let invoiceProduct = document.querySelector('.new-invoice-products')
let proceed = document.querySelector('.proceed-btn');
let skipAddress = document.querySelector('.skip-wrapper');
let editInvoiceAddress = document.querySelector('.edit');
let enterRow = document.querySelector('.enter-wrapper')
let saveInvoice = document.querySelector('.save');

let fullName = document.querySelector('#full-name');
let email = document.querySelector('#email');
let customerName = document.querySelector('#proname');
let customerEmail = document.querySelector('#proemail');
let taProductBody = document.querySelector('.table-products-body')
let productsForm = document.querySelector('.products-form')

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

//Adding Item, Quantity and Price Function
const AddCusProduct = (item, quantity, price) =>{
    return `
        <tr>
            <td>${item}</td>
            <td>${quantity}</td>
            <td>${price}</td>
        </tr>
    `
}



//Clicking on the plus icon to create invoice
createInvoice.addEventListener('click', (e) => {
    invoiceAddress.style.display = 'block';
});

//Clicking on the print icon to print your invoice
printInvoice.addEventListener('click', (e) => {

    let winPrint = window.open('','details', 'width=900,height=650')
    winPrint.document.open()
    winPrint.document.write(invoiceDetails.innerHTML)
    winPrint.document.close()
    winPrint.document.focus()
    winPrint.document.print()
    winPrint.document.close()

});

//Clicking on the close icon to close invoice address
closeAddress.addEventListener('click', (e) => {
    invoiceAddress.style.display = 'none';
});


//Clicking on the skip icon to skip invoice address
skipAddress.addEventListener('click', (e) => {
    invoiceAddress.style.display = 'none';
    invoiceProduct.style.display = 'block';
});


//Clicking on the proceed button to proceed to next form
proceed.addEventListener('click', (e) => {
    e.preventDefault();
    invoiceProduct.style.display = 'block';
    invoiceAddress.style.display = 'none';

    customerName.innerHTML = fullName.value
    customerEmail.innerHTML = email.value
});


//Clicking on the close icon to close invoice products
closeProduct.addEventListener('click', (e)=>{
    invoiceProduct.style.display = 'none';
    invoiceAddress.style.display = 'none';
})

//Clicking on the edit icon to edit the customers address
editInvoiceAddress.addEventListener('click', (e)=>{
    invoiceProduct.style.display = 'none';
    invoiceAddress.style.display = 'block';
})

//Clinking on the Enter icon to enter anther row
//And also add the item, quantity and price to the row
enterRow.addEventListener('click', (e) => {

    let item = productsForm.item.value.trim()
    let quantity = productsForm.quantity.value.trim()
    let price = productsForm.price.value.trim()

    //checking if the product inputs field are empty
    if(item && quantity && price){
        taProductBody.innerHTML +=  AddCusProduct(item, quantity, price)

        productsForm.reset()
    }else{
        alert("Please input your item, quantity and price")
    }
    

});

saveInvoice.addEventListener('click', (e) => {
    e.preventDefault();

});


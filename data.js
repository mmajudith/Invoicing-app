const invoiceData = [
    "John Doe",
    "johndoe@serviceprovider.com",
    ["Items", "Quantity", "Price - &#8377;"],
    [
        {
            item: "Prawn & Chicken Sui Mai", 
            quantity: 2,
            price: 430
        },
        {
            item: "Long Product Name With Two Lines",
            quantity: 1,
            price: 670
        }, 
        {
            item: "Prawn & Chicken Sui Mai",
            quantity: 3,
            price: 430
        }, {
            item: "Long Product Name With Two Lines",
            quantity: 6,
            price: 1670,
        }, {
            item: "Long Product Name With Two Lines",
            quantity: 2,
            price: 270
        }
        
    ],
    [
        {
            subTotal: 3470,
            tax: 429,
            discount: -390,
            grandTotal: 3509,
        }
    ]
] 
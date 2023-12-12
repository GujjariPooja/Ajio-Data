//List of men (GET)
http://localhost:3002/men

//List of women (GET)
http://localhost:3002/women

//List of kids (GET)
http://localhost:3002/kids

//List of jewellery (GET)
http://localhost:3002/jewellery

//List of home&lifestyle (GET)
http://localhost:3002/home&lifestyle

//List of beauty (GET)
http://localhost:3002/beauty

//List of accessories (GET)
http://localhost:3002/accessories

//List of all men wrt average_rating (GET)
http://localhost:3002/rating?average_rating=2

//List of all men wrt price (GET)
http://localhost:3002/average_rating?price=4259

//List of all men wrt average_rating & price (GET)
http://localhost:3002/mens?average_rating=4&price=4799

//List of all men wrt category_id & average_rating & price (GET)
http://localhost:3002/id?category_id=1&average_rating=3&price=2535

//List of all women wrt size (GET)
http://localhost:3002/size?size=FS
http://localhost:3002/Second?size=S
http://localhost:3002/sizes?size=8

//List of women wrt id(GET)
http://localhost:3002/details/32

//List of women wrt category_id (GET)
http://localhost:3002/categoryId?category_id=2

//List of all kids wrt size (GET)
http://localhost:3002/length?size=5-6Y

//List of accessories wrt id (GET)
http://localhost:3002/accessory/128

//List of accessories wrt _id (GET)
http://localhost:3002/costume/656a064e34de28973b21a6a5
http://localhost:3002/access/656a064e34de28973b21a6a5

//List of accessories wrt color (GET)
http://localhost:3002/color?color=Black

//Get all orders (GET)
http://localhost:3002/orders

//Get order details wrt email (GET)
http://localhost:3002/orders?email=pooja@gmail.com

//Place order (POST)
http://localhost:3002/placeOrder
{
        "orderId": 1,
        "name": "Pooja",
        "email": "pooja@gmail.com",
        "address": "weavers colony",
        "phone": 9390597665,
        "cost": 3000,
        "status": "On the way"
    }

//Update order (PUT)
http://localhost:3002/updateOrder
{
    "_id" : "656da68334de28973b106488",
    "status": "Pending"
}

//Delete order (DELETE)
http://localhost:3002/deleteOrder
{
    "_id":"656da68334de28973b10648a"
}
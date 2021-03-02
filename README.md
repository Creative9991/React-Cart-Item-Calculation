# React: HackerShop Checkout

## Environment 

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000


## Functionality Requirements

The app has two separate views/components. The Product Listing Component and Cart Component. The list of products to be displayed is already provided in the app. 

The Product Listing component should implement the following functionalities:

- Clicking on each 'Add To Cart' button should add the item to the shopping cart. When an item is added to the cart, 
  - 'Add To Cart' button should be removed from view and 'Remove From Cart' button should be displayed.
  - An entry should be added to the table in Cart Component.

- Clicking on each 'Remove From Cart' button should remove the item from the cart and display 'Add to Cart' button for the corresponding product item.

- The Cart Component should have the following functionalities:

  - Display all the items in the cart in a table.

  - Display the Cart Subtotal, Discount Value, and Total Price. 

  - The Cart has a Coupon Select Input. On selecting a coupon from this input, an appropriate discount is applied and the total price is calculated and displayed. `(Subtotal - Discount = Total Price)`

- Items should be displayed in the Cart Component in the order they are added to Cart. 

- The list of products and the cart object is passed as Prop to the Product Listing Component and Cart Component respectively.

Each product object contains the following properties: 
- name: Name of the product. [STRING]
- price - The price of the Product. [NUMBER]
- id: Unique ID of the product. (Auto Generated) [NUMBER]
- image:  The image URL of the product. [STRING]
- cartQuantity: The quantity of the item in the cart. The default value should be 0. [NUMBER]


Each item in the cart, Type CartItem has the following properties:
- id: Same as ID of the product. [NUMBER]
- item - The heading property of the product. [STRING]
- quantity: The quantity of the item in the cart [NUMBER]
- price: The total amount of the item in cart. (quantity x product.price) [NUMBER]



## Project Specifications

**Read Only Files**
- [src/App.test.js]

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```

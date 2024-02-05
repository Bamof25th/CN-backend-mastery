import  express  from 'express';

import CartItemController from './cartItems.controller.js';

const cartRouter = express.Router();

const cartItemController =  new CartItemController();

cartRouter.delete('/:id', cartItemController.delete)
cartRouter.post('/', cartItemController.add);
cartRouter.get('/', cartItemController.get);

export default cartRouter;


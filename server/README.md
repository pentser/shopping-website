
## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd server
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Create a [.env](http://_vscodecontentref_/12) file in the root directory and add your environment variables:
    ```env
    MONGO_URL=<your-mongodb-url>
    PORT=3000
    PASS_SECRET=<your-pass-secret>
    JWT_SECRET=<your-jwt-secret>
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will run on the port specified in the [.env](http://_vscodecontentref_/13) file (default is 3000).

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login a user

### User Management

- **PUT** `/api/users/:id` - Update user details
- **DELETE** `/api/users/:id` - Delete a user
- **GET** `/api/users/find/:id` - Get user details
- **GET** `/api/users` - Get all users
- **GET** `/api/users/stats` - Get user statistics

### Product Management

- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update product details
- **DELETE** `/api/products/:id` - Delete a product
- **GET** `/api/products/find/:id` - Get product details
- **GET** `/api/products` - Get all products

### Cart Management

- **POST** `/api/carts` - Create a new cart
- **PUT** `/api/carts/:id` - Update cart details
- **DELETE** `/api/carts/:id` - Delete a cart
- **GET** `/api/carts/find/:userId` - Get user cart
- **GET** `/api/carts` - Get all carts

### Order Management

- **POST** `/api/orders` - Create a new order
- **PUT** `/api/orders/:id` - Update order details
- **DELETE** `/api/orders/:id` - Delete an order
- **GET** `/api/orders/find/:userId` - Get user orders
- **GET** `/api/orders` - Get all orders
- **GET** `/api/orders/income` - Get monthly income

## Dependencies

- express
- mongoose
- dotenv
- crypto-js
- jsonwebtoken
- cors
- nodemon (dev dependency)

## License

This project is licensed under the ISC License.
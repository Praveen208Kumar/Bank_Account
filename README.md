# Bank Account API

A full-featured banking backend built with Node.js, Express, and MongoDB. This API provides secure account management, authentication, and transaction processing capabilities.

## Features

- **User Authentication** - JWT-based authentication with token blacklisting
- **Account Management** - Create and manage bank accounts
- **Transaction Processing** - Secure fund transfers and transaction history
- **Email Notifications** - Automated email alerts for transactions
- **Security** - Password hashing with bcryptjs, JWT tokens, middleware-based authorization
- **Database** - MongoDB with Mongoose ODM

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js 5.2
- **Database:** MongoDB
- **Authentication:** JWT (jsonwebtoken)
- **Email:** Nodemailer
- **Security:** bcryptjs
- **Development:** Nodemon

## Project Structure

```
├── src/
│   ├── app.js                 # Express app setup
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── controllers/           # Request handlers
│   │   ├── auth.controller.js
│   │   ├── account.controller.js
│   │   └── transaction.controller.js
│   ├── models/               # Database schemas
│   │   ├── user.model.js
│   │   ├── account.model.js
│   │   ├── transaction.model.js
│   │   ├── ledger.model.js
│   │   └── blacklist.model.js
│   ├── routes/               # API routes
│   │   ├── auth.routes.js
│   │   ├── account.routes.js
│   │   └── transaction.routes.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── services/
│       └── email.service.js
├── server.js                 # Entry point
├── package.json
├── Dockerfile
└── .env.example              # Environment variables template
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Praveen208Kumar/Bank_Account.git
   cd Bank_Account
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your credentials:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLIENT_ID=your_google_client_id
   CLIENT_SECRET=your_google_client_secret
   EMAIL_USER=your_email@gmail.com
   PASSWORD=your_app_password
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
Uses nodemon for auto-reload on file changes.

### Production Mode
```bash
npm start
```
Server runs on `http://localhost:3000`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run create-system` - Create system user
- `npm run add-funds` - Add initial funds
- `npm run test-tx` - Test transactions
- `npm run get-token` - Get system token

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /login` - User login
- `POST /register` - User registration
- `POST /logout` - User logout
- `POST /refresh` - Refresh token

### Account Routes (`/api/accounts`)
- `GET /` - Get all accounts
- `POST /` - Create new account
- `GET /:id` - Get account details
- `PUT /:id` - Update account
- `DELETE /:id` - Delete account

### Transaction Routes (`/api/transactions`)
- `GET /` - Get all transactions
- `POST /transfer` - Make a transfer
- `GET /:id` - Get transaction details
- `GET /account/:id` - Get account transactions

## Docker Support

Build and run with Docker:

```bash
docker build -t bank-account-api .
docker run -p 3000:3000 --env-file .env bank-account-api
```

## Environment Variables

See `.env.example` for all required variables:
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `CLIENT_ID` - Google OAuth client ID
- `CLIENT_SECRET` - Google OAuth client secret
- `REFRESH_TOKEN` - Google refresh token
- `EMAIL_USER` - Email for notifications
- `PASSWORD` - Email app password

## Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ Token blacklisting for logout
- ✅ Protected routes with auth middleware
- ✅ Sensitive data excluded via .gitignore

## Author

**Praveen Kumar**  
GitHub: [@Praveen208Kumar](https://github.com/Praveen208Kumar)

## License

ISC
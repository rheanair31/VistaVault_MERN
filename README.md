# VistaVault 🏠

<div align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge" alt="MERN Stack">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
</div>


A modern, full-stack real estate platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that provides a seamless booking experience for users and property owners. VistaVault connects travelers with unique accommodations while offering property owners an intuitive platform to manage their listings.


## 🚀 Features

### User Authentication & Security
- **Secure Registration & Login**: JWT-based authentication with encrypted sessions
- **Password Protection**: Passwords hashed using Bcrypt before storage
- **Role-based Access Control**: Different permissions for users and property owners
- **Persistent Sessions**: User context maintained across the application

### Property Management
- **Browse Properties**: View available accommodations with detailed information
- **Property Listings**: Create, update, and delete property listings
- **Photo Management**: Upload multiple photos, set main image, reorder gallery
- **Detailed Information**: Location, amenities, pricing, descriptions, and more
- **Map Integration**: Google Maps integration for property locations

### Booking System
- **Easy Booking**: Calendar-based date selection for seamless reservations
- **Booking Management**: View, modify, and cancel bookings
- **Date Validation**: Backend validation for check-in/check-out dates
- **Guest Management**: Track number of guests and pricing calculation
- **Real-time Pricing**: Dynamic price calculation based on dates and guests

### Search & Discovery
- **Property Categories**: Browse by Icons, Amazing views, Amazing pools, Farms, Historical homes, Castles, OMG!, Beach Front, Lake Front, Rooms, Luxe, Cabins, Top of the world
- **Detailed Property Views**: Rich visual experience with image galleries
- **Location-based Search**: Find properties in specific locations

## 🛠️ Tech Stack

<div align="center">

### Frontend Technologies
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white)

### Backend Technologies  
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-AA2929?style=for-the-badge&logo=mongoose&logoColor=white)

### Security & Authentication
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![bcrypt](https://img.shields.io/badge/bcrypt-003A6B?style=for-the-badge)

</div>

### Frontend
- **⚛️ React.js** - Component-based UI development with hooks
- **🎨 Tailwind CSS** - Modern utility-first CSS framework
- **🔄 React Hooks** - State management (useState, useEffect, useCallback)
- **🗂️ Context API** - Global state management and user authentication
- **🧭 React Router** - Client-side routing and navigation
- **📡 Axios** - HTTP client for seamless API communication
- **🗺️ Google Maps Integration** - Location services and mapping

### Backend
- **🟢 Node.js** - JavaScript runtime for server-side development
- **⚡ Express.js** - Fast, minimalist web framework
- **🍃 MongoDB** - NoSQL database for flexible data storage
- **🦫 Mongoose** - Elegant MongoDB ODM for data modeling
- **🔐 JWT** - Secure JSON Web Token authentication
- **🔒 Bcrypt** - Password hashing and security
- **📁 Multer** - Middleware for handling file uploads
- **🌐 CORS** - Cross-origin resource sharing configuration

## ⚡ Quick Start

### 📋 Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas) - [Get started](https://www.mongodb.com/)
- **Git** - [Install Git](https://git-scm.com/)

### 🚀 Installation & Setup

#### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/VistaVault_MERN.git
cd VistaVault
```

#### 2️⃣ **Backend Configuration**
```bash
cd backend

# Install backend dependencies
npm install

# Create environment variables file
touch .env
```

**Add the following to your `.env` file:**
```env
MONGO_URI=mongodb://localhost:27017/vistavault
JWT_SECRET=your_super_secret_jwt_key_here
PORT=4000
NODE_ENV=development
```

```bash
# Start the backend server
npm start
# Server will run at http://localhost:4000
```

#### 3️⃣ **Frontend Configuration**
```bash
# Open a new terminal and navigate to frontend
cd frontend

# Install frontend dependencies
npm install

# Start the development server
npm run dev
# Frontend will be available at http://localhost:5173
```

### 🎉 **You're Ready!**
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000
- **Database:** MongoDB running on default port 27017

## 📊 Database Models

### User Model
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password using Bcrypt

### Place Model
- `owner` - Reference to User model
- `title` - Property title
- `address` - Property location
- `photos` - Array of image URLs
- `description` - Property description
- `perks` - Available amenities (Wifi, Free parking, TV, Radio, Pets, Private entrance)
- `extraInfo` - Additional information
- `checkIn` - Check-in time
- `checkOut` - Check-out time
- `maxGuests` - Maximum guest capacity
- `price` - Price per night

### Booking Model
- `place` - Reference to Place model
- `user` - Reference to User model
- `checkIn` - Check-in date
- `checkOut` - Check-out date
- `numberOfGuests` - Number of guests
- `name` - Booking contact name
- `phone` - Contact phone number
- `price` - Total booking price

## 🔧 API Documentation

### 🔐 Authentication Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| `POST` | `/register` | Create new user account | ❌ |
| `POST` | `/login` | User authentication | ❌ |
| `GET` | `/profile` | Get user profile data | ✅ |
| `POST` | `/logout` | User logout | ✅ |

### 🏠 Property Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| `GET` | `/places` | Get all properties | ❌ |
| `GET` | `/places/:id` | Get specific property | ❌ |
| `POST` | `/places` | Create new property | ✅ |
| `PUT` | `/places/:id` | Update property | ✅ |
| `DELETE` | `/places/:id` | Delete property | ✅ |

### 📅 Booking Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| `GET` | `/bookings` | Get user's bookings | ✅ |
| `POST` | `/bookings` | Create new booking | ✅ |
| `GET` | `/bookings/:id` | Get specific booking | ✅ |
| `PUT` | `/bookings/:id` | Update booking | ✅ |
| `DELETE` | `/bookings/:id` | Cancel booking | ✅ |

### 📁 File Upload Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| `POST` | `/upload` | Upload property images | ✅ |

## 🛡️ Security Features

- **🔐 JWT Authentication**: Secure token-based authentication system
- **🔒 Password Encryption**: Bcrypt hashing for password security
- **🛡️ Role-based Access**: Different permissions for users and property owners
- **🌐 CORS Protection**: Configured cross-origin resource sharing
- **🔑 Secure Sessions**: HTTP-only cookies for session management
- **📝 Input Validation**: Server-side validation for all user inputs
- **🚫 XSS Protection**: Frontend sanitization of user-generated content

## 🏫 Academic Information

**Institution:** K J Somaiya School of Engineering  
**Department:** Computer Engineering  
**Course:** Full Stack Development Lab (FSDL)  
**Semester:** V (July - November 2024)  
**Faculty:** Engineering & Technology


---


  
**🏡 VistaVault - Making Real Estate Booking Simple and Secure! ✨**

*Built with ❤️*

**⭐ Star this repository if you found it helpful!**



</div>

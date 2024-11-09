# **Vista Vault - Real Estate Platform**

This is a full-stack web application for managing accommodations, allowing users to browse listings, make bookings, and upload photos for accommodations. Built using ReactJS for the frontend, NodeJS with Express for the backend, and MongoDB for data storage, this platform enables a secure and seamless experience for both users and hosts. The app features user authentication, accommodation management, and booking functionalities.


## **Features**

### **User Authentication**
- Secure login and registration functionality using JWT for session management.
- Passwords are hashed using Bcrypt for secure storage.

### **Accommodation Management**
- **Accommodation Listings**: Users can browse available accommodations with details such as location, amenities, pricing, and photos.
- **Create/Update Accommodations**: Property owners can create new accommodation listings or edit existing ones.
- **Photos Upload**: Users can upload and manage multiple photos for each accommodation listing. Photos can be reordered and one can be set as the main image.

### **Booking Management**
- **Booking System**: Users can book accommodations for specific dates and manage bookings (view, modify, or cancel).
- **Booking Widget**: A calendar-based widget allows users to easily select dates for their bookings.

### **Search Functionality**
- Users can search for accommodations based on filters like location, price range, amenities, and accommodation type.

### **Image and Photo Management**
- **Image Gallery**: Every accommodation listing comes with a gallery of images for better visualization.
- **Photo Upload**: Allows users to preview and upload images for their listings, with a preview before finalizing the upload.

### **Admin Panel**
- Admins can manage users, accommodations, and bookings via a dedicated admin interface.

---

## **Tech Stack**

- **Frontend**: ReactJS, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT for session management
- **Photo Upload**: Multer for handling file uploads
- **State Management**: React Context API for managing user data
- **Routing**: React Router for seamless page navigation
- **Axios**: For making API requests from the frontend to the backend

---

## **Project Prepared By**

- **Rhea Nair** - 16010122316
- **Aashutosh Panda** - 16010122313

---

## **Clone the Repository**

### **1. Clone the Repository**
```bash
git clone https://github.com/YourGitHubUsername/VistaVault.git
```

### **2. Navigate to the Project Folder**
```bash
cd VistaVault
```

---

## **Frontend Setup**

### **1. Move to the Frontend Folder**
```bash
cd frontend
```

### **2. Install the Dependencies**
```bash
npm install
```

### **3. Start the Frontend Server**
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

---

## **Backend Setup**

### **1. Move to the Backend Folder**
```bash
cd ../backend
```

### **2. Install the Dependencies**
```bash
npm install
```

### **3. Start the Backend Server**
```bash
npm start
```

The backend server will be running at `http://localhost:4000`.

---



---




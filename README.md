# WANDERLUST

**Wanderlust** is a curated travel and exploration hub built to connect a global community of travelers. Designed as a comprehensive full-stack platform, it allows users to discover unique destinations, share their own travel spots, and engage with others through detailed reviews and ratings. It features secure user authentication, interactive maps for location visualization, and a dynamic, user-driven content feed.

## ✨ Features

### 🌍 **Curated Listings**

  - **Share Travel Spots:** Users can create listings for hotels, villas, cabins, and unique stays with detailed descriptions and images.
  - **Discover Destinations:** Browse a wide variety of accommodations and travel spots uploaded by the community.
  - **Price & Location Details:** View pricing, country, and specific location data for every listing.
  - **Category Filtering:** Filter listings by categories such as Trending, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, and more.

### 💬 **Reviews & Ratings**

  - **Community Feedback:** Users can leave star ratings (1-5) and detailed comments on listings they have visited.
  - **Author Verification:** Only logged-in users can post reviews, and authors have the ability to manage their own contributions.
  - **Dynamic Deletion:** Listing owners can manage reviews on their properties.

### 🗺️ **Interactive Maps**

  - **Mapbox Integration:** Every listing features a visual map pinpointing its exact location using Mapbox GL JS.
  - **Geocoding:** Automatic conversion of location names into map coordinates for precise visualization.

### 🔐 **Secure Authentication System**

  - **User Accounts:** robust signup and login functionality using Passport.js.
  - **Session Management:** Secure session handling with `express-session` and MongoDB storage (`connect-mongo`).
  - **Authorization:** Middleware ensures that only listing owners can edit or delete their listings, and only review authors can delete their comments.

### 🎨 **Modern UI/UX**

  - **Responsive Design:** Built with Bootstrap 5 for a mobile-responsive layout.
  - **Starability:** Custom CSS animations for an interactive star rating experience.
  - **Flash Messages:** Instant feedback for user actions (e.g., "New Listing Created", "Welcome back\!").

## 🛠 Technologies Used

### **Frontend**

  - **EJS (Embedded JavaScript)** - Templating engine for dynamic HTML rendering
  - **Bootstrap 5** - Responsive CSS framework for styling and grid layouts
  - **HTML5 & CSS3** - Core web technologies for structure and design
  - **Mapbox GL JS** - Interactive maps integration

### **Backend**

  - **Node.js** - JavaScript runtime environment
  - **Express.js** - Web application framework for routing and middleware
  - **MongoDB** - NoSQL database for flexible data storage
  - **Mongoose** - Object Data Modeling (ODM) library for MongoDB
  - **Passport.js** - Authentication middleware for Node.js
  - **Joi** - Data validation for schema constraints

### **Cloud & APIs**

  - **Cloudinary** - Cloud storage for uploading and managing listing images
  - **Mapbox Geocoding API** - Converting location text into geographic coordinates
  - **MongoDB Atlas** - Cloud-hosted database service

## 📸 Screenshots
<img width="1440" height="932" alt="Screenshot 2025-12-09 at 1 30 34 PM" src="https://github.com/user-attachments/assets/0f2390f5-9ca9-4ced-aa72-d27498df6493" />
<img width="1440" height="932" alt="Screenshot 2025-12-09 at 1 30 51 PM" src="https://github.com/user-attachments/assets/327b0e31-1d24-4721-9867-f2317a1bc3ea" />
<img width="1440" height="932" alt="Screenshot 2025-12-09 at 1 30 58 PM" src="https://github.com/user-attachments/assets/342459c3-7a95-4c2d-8343-9049e4893770" />
<img width="1440" height="932" alt="Screenshot 2025-12-09 at 1 36 47 PM" src="https://github.com/user-attachments/assets/92df0bbb-bfdd-4611-a060-147e83e953d5" />
<img width="1440" height="932" alt="Screenshot 2025-12-09 at 1 40 32 PM" src="https://github.com/user-attachments/assets/19c96a1c-e86c-48f5-bfb8-493f0c9a62c9" />

## 📋 Requirements

  - **Node.js** (v14 or higher)
  - **MongoDB** (Local or Atlas connection string)
  - **Cloudinary Account** (Cloud Name, API Key, API Secret)
  - **Mapbox Account** (Public Access Token)

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tusharkshirsagar13/wanderlust.git
    cd wanderlust
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:

    ```env
    CLOUD_NAME=your_cloudinary_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_SECRET_KEY=your_cloudinary_secret_key
    MAP_TOKEN=your_mapbox_token
    ATLASDB_URL=your_mongodb_connection_string
    SECRET=your_session_secret
    ```

4.  **Run the application:**

    ```bash
    node app.js
    ```

5.  **Open in browser:**
    Visit `http://localhost:8080` to view the application.

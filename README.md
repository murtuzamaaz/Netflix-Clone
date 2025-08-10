# 🎬 Netflix Clone  

A responsive and feature-rich Netflix Clone built with modern web technologies. It replicates Netflix's UI/UX with dynamic content fetching from **The Movie Database (TMDb) API**, and uses **Firebase Authentication** for secure user login & signup.  

---

## 📌 Features  

- 🎯 **Dynamic Movie Data** – Fetches movies, TV shows, and trending content using the TMDb API.  
- 🔐 **Firebase Authentication** – Email/password or Google sign-in.  
- 📱 **Fully Responsive** – Works seamlessly across desktops, tablets, and mobile devices.  
- 🔍 **Search Functionality** – Find movies or TV shows instantly.  
- 📂 **Category Browsing** – Browse by popular, top-rated, or trending categories.  
- 🎨 **Netflix-like UI** – Styled to closely resemble Netflix’s design.  
- 🌙 **Dark Mode Aesthetic** – Netflix’s iconic dark theme for immersive viewing.  

---

## 🛠️ Tech Stack  

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **JavaScript (ES6+)** | Logic & interactivity |
| **CSS / SCSS** | Styling |
| **Axios** | API requests |
| **TMDb API** | Movie data source |
| **Firebase** | Authentication & hosting |

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/murtuzamaaz/Netflix-Clone.git
cd Netflix-Clone
npm install
```
3️⃣ Set Up Environment Variables
Create a .env file in the root and add your TMDb API key & Firebase Config:
```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

🔑 Firebase Authentication Setup
Go to Firebase Console

1.Create a new project

2.Enable Authentication → Sign-in methods (Email/Password or Google)

3.Copy your Firebase config from Project Settings

4.Paste into .env as shown above

4️⃣ Start the Development Server
```
npm run dev
```



```

📂 Folder Structure

Netflix-Clone/
│-- public/
│-- src/
│   ├── components/     # UI components
│   ├── pages/          # Page-level components
│   ├── services/       # API & Firebase helpers
│   ├── context/        # Auth context provider
│   ├── css/            # Stylesheets
│   ├── App.js          # Main app file
│   └── index.js        # Entry point
│-- package.json
│-- README.md


```
App will run on: http://localhost:5000






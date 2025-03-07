# Dwellify 🏠

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://dwellify-by-yamin.vercel.app/)
![GitHub stars](https://img.shields.io/badge/stars-⭐⭐⭐⭐⭐-yellow.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

A modern real estate platform built with React, Firebase, and Tailwind CSS, offering a seamless experience for property search, management, and real estate insights.

![Dwellify Banner](https://i.ibb.co.com/bg8xDc1j/screencapture-dwellify-by-yamin-vercel-app-2025-03-07-23-36-23.png)

## 🌟 Features

- Variety of properties are found from different categories such as single-family homes, townhouses, apartments, student housing, senior living communities and vacation rentals.
- Dwellify have a dedicated page to see property details.
- User can Register and login to their account. There are also easy login methods available like Google or GitHub.
- Logged-in user can update their name and profile photo in the Update Profile page.
- Various trending and latest blogs about residential real estates are available on Blogs page.

## 🛠️ Tech Stack

**Frontend:**

- React 18
- React Router Dom
- Tailwind CSS
- DaisyUI
- Swiper for image carousels
- AOS (Animate on Scroll) for animations
- React Toastify for notifications
- React Hook Form for form handling
- React Icons

**Backend & Services:**

- Firebase Authentication
- Firebase Hosting

## 📋 Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn
- Git

## ⚙️ Installation & Setup

### Clone the repository

```sh
git clone https://github.com/Yamin39/dwellify.git
cd dwellify
```

### Install dependencies

```sh
npm install
# or
yarn
```

### Configure environment variables

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id
```

### Start the development server

```sh
npm run dev
# or
yarn dev
```

### Build for production

```sh
npm run build
# or
yarn build
```

## 🖥️ Project Structure

```
dwellify/
├── .firebase/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── firebase/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── providers/
│   ├── Routes/
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .firebaserc
├── .gitignore
├── README.md
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🔥 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password, Google)
3. Set up Firestore Database
4. Configure Storage
5. Add your Firebase configuration to the `.env` file

## 🚀 Deployment

### Deploy to Firebase

```sh
# Install Firebase CLI if not installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (if not already initialized)
firebase init

# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## 🧪 Testing

```sh
npm run test
# or
yarn test
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make changes and commit (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- **Md Mufazzal Hossain Yamin** - _Initial work_ - [Yamin39](https://github.com/Yamin39)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Firebase](https://firebase.google.com/) - Backend and authentication
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- [Swiper](https://swiperjs.com/) - For image sliders
- [AOS](https://michalsnik.github.io/aos/) - For scroll animations
- [React Icons](https://react-icons.github.io/react-icons/) - For icons

## 🔮 Future Enhancements

- Virtual property tours
- Mortgage calculator
- In-app messaging system
- Advanced analytics for property owners
- Integration with smart home devices

<!-- # DWELLIFY

Welcome to Dwellify

## Live Site

live site URL: [Dwellify](https://dwellify-by-yamin.vercel.app/)

## Features and Characteristics

Dwellify have many features and characteristics. Such as,

- Variety of properties are found from different categories such as single-family homes, townhouses, apartments, student housing, senior living communities and vacation rentals.
- Dwellify have a dedicated page to see property details.
- User can Register and login to their account. There are also easy login methods available like Google or GitHub.
- Logged-in user can update their name and profile photo in the Update Profile page.
- Various trending and latest blogs about residential real estates are available on Blogs page.

## NPM packages that used for the challenges task

1. AOS Package,
2. Animate.css,
3. React Hook form,
4. Swiper slider
5.  -->

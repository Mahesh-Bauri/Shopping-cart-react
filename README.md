# Shopping-Cart React App

This is a shopping web app build using reactjs.

### [Live demo](https://react-shopping-cart-mb.netlify.app/)

![Imgur](https://i.imgur.com/uJDPuvy.png)

---

![Imgur](https://i.imgur.com/V7Y8ZGF.png)

---

![Imgur](https://i.imgur.com/89S2YTV.png)

---

![Imgur](https://i.imgur.com/4RRBJij.png)

---

![Imgur](https://i.imgur.com/F1dGwEu.png)

---

![Imgur](https://i.imgur.com/m5OPS4G.png)

---

![Imgur](https://i.imgur.com/RZbbTmE.png)

---

## Features

- Developed a shopping web app using **React, SASS, Styled-Components, ContextAPI, React-Router, React-Redux, Redux-thunk, Redux-Persist, Firebase,** etc.
- Implemented feature to add product to cart with flexibility to add quantity of the product, payment using **StripeApi**.
- Implemented **authentication** with Firebase, **signIn-with-google**, signUp-with-email-and-password.
- Added Netlify **serverless** functions to request payment to stripe API.
- Developed feature to store data in frontend in local storage to keep the data persisted using **Redux-persist**.
- Implemented **Code-Splitting** to optimize the app by creating multiple chunks.

---

### Folder Structure

```
Shopping-Cart/
├── .netlify/
├── netlify/
│   └── functions/
│       └── create-payment-intent.js
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── button/
│   │   │   ├── Button.js
│   │   │   └── button.styles.js
│   │   ├── cart-dropdown/
│   │   ├── cart-icon/
│   │   ├── cart-item/
│   │   ├── categories-preview/
│   │   ├── category/
│   │   ├── category-preview/
│   │   ├── checkout/
│   │   ├── checkout-item/
│   │   ├── directory/
│   │   ├── directory-item/
│   │   ├── footer/
│   │   ├── form-input/
│   │   ├── payment-form/
│   │   ├── product-card/
│   │   ├── routes/
│   │   ├── sign-in-form/
│   │   ├── sign-up-form/
│   │   └── spinner/
│   ├── store/
│   │   ├── cart/
│   │   │   ├── cart.action.js
│   │   │   ├── cart.reducer.js
│   │   │   ├── cart.selector.js
│   │   │   └── cart.types.js
│   │   ├── category/
│   │   ├── middleware/
│   │   ├── user/
│   │   ├── root-reducer.js
│   │   ├── root-saga.js
│   │   └── store.js
│   ├── utils/
│   │   ├── firebase/
│   │   │   └── firebase.utils.js
│   │   ├── reducer/
│   │   │   └── reducer.utils.js
│   │   └── stripe/
│   │       └── stripe.utils.js
│   ├── App.js
│   ├── categories.json
│   ├── index.js
│   ├── index.scss
│   ├── logo.svg
│   └── shop-data.js
├── .env
├── gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Run Locally

### 1. Install Dependencies

```sh
$ npm install
```

### 2. Create a new firebase project

Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

Create an `.env` file and add the following variables.

```
// SAMPLE CONFIG .env, you should put the actual config details.

REACT_APP_STRIPE_PUBLISHABLE_KEY="your_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"

```

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** start in test mode

And then add categories data in `categories.json` into firebase in categories collection. We need to create two collection **categories** and **users**

### 3. Run development server

```sh
$ npm start
```

### 4. Run development server using netlify-cli if you want to test stripe payment

```sh
$ netlify dev
```

---

### Tools Used

- HTML5
- CSS3
- JavaScript
- React
- SASS
- Styled-Components
- React-Router
- React-Redux
- Redux-thunk
- Redux-Saga
- Redux-Persist
- Firebase

# Contract Management Application

A brief description of what this project does and who it's for

🚀 Live Demo (Hosted on Netlify)

👉 Try the working version here: 🔗 https://contract-manager-cm.netlify.app/

This link is deployed via Netlify and showcases your current frontend implementation of the Contract Management Application.

💡 Project Overview

This is a frontend-only Contract Management Application built using React with Vite as the build tool.

The goal of this project is to provide an intuitive UI where users can:

✔ Create Blueprints (contract templates) ✔ View a list of existing Blueprints ✔ Use Blueprints to create Contracts ✔ Navigate the application with a clear dashboard UI ✔ Track the basic contract workflow (in progress)

📌 The Contract detail editing (entering contract values) is under development and not fully implemented yet.

🛠 Features Implemented 🧾 Blueprint Management

Create Blueprint page

Add fields like Text, Date, Checkbox, Signature to a template

Place fields on a canvas

Edit field properties such as label and position

Edit Blueprint page

Load existing blueprint details

Update field labels or add/remove fields

Blueprint List page

Shows all created blueprints

Allows jumping into edit mode

🧭 Navigation & Layout

A sidebar with links to:

Dashboard

Blueprints

Contracts

A Dashboard page showing summary and links

A Contracts list page that shows all created contracts

📄 Contract Creation

A form to create a Contract by selecting:

A name

An existing Blueprint

Contract details are then generated based on the Blueprint

🧩 What’s Not Completed Yet

✔ Contract editing (filling in contract field values) ✔ Full contract lifecycle (approve, send, sign, lock) ✔ Backend integration (no API/data persistence beyond local state)

These features are planned but not yet implemented, and therefore are not mentioned as completed features.

🧪 How to Run the Project Locally

Make sure you have Node.js and npm or Yarn installed.

Clone the repository
git clone <your-repo-url> cd <your-project-folder>

Install dependencies
npm install

or
yarn install

Run the development server
npm run dev

or
yarn dev

You will see a local development server start — typically:

http://localhost:5173/

Open that in your browser to explore the application.

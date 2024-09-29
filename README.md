# Project Documentation - Nila Apps - UI Task

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Explanation](#explanation)
- [Components](#components)
- [Building and Running](#building-and-running)
- [Images for reference](#images-for-reference)

## Introduction

This is an **Angular 18** project designed to provide a modern, responsive, and highly functional web application. The project is built using the latest **Angular 18** features, integrating advanced capabilities like state management, custom services, animations, and much more.

## Features

- **Responsive Layout**: Mobile-first approach using Tailwind CSS.
- **Component-based Architecture**: Reusable components for better maintainability.
- **Programs**: Oversee the progress of the students in a visual charts. 
- **Skeleton Loading**: Smooth loading experience with buffer effect.
- **Navigation Sidebar**: A collapsible sidebar for easy navigation.

## Installation

To get started with this project, follow the steps below:

### Prerequisites

- **Node.js**: Version 18 or higher
- **Angular CLI**: Version 18

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kanikaniyan/Kaniyan_nilaApps_task1.git

2. ```bash
   cd Kaniyan_nilaApps_task1/CourseOverview
3. ```bash
   npm install

### Dependencies

The following dependencies are required to run this project:

- Angular CLI: ^18.0.0
- Tailwind CSS: ^3.0.0
- RxJS: ^7.0.0
- Angular Router: ^18.0.0
- ng2-charts: ^4.0.0

### Project Structure

- src/
- ├── app/ 
- │ ├── components/ 
- │ │ ├── assessment-progress/
- │ │ ├── attendance-report/
- │ │ ├── course-outcome-attainment/
- │ │ ├── dashboard/
- │ │ ├── evaluation-status/
- │ │ ├── header/
- │ │ ├── not-found/
- │ │ ├── overall-course-outcome-attainment/
- │ │ ├── programs/
- │ │ ├── sidebar/
- │ │ └── skeleton/
- │ ├── services/
- │ ├── app.component.css
- │ ├── app.component.html
- │ ├── app.component.spec.ts
- │ ├── app.component.ts
- │ ├── app.config.ts
- │ ├── app.routes.ts
- │ └── model.ts
- ├── assets/
- │ ├── db.json
- │ ├── logo.png
- ├── index.html
- ├── main.ts
- └── styles.css

### Explanation:

- **`components`**: This directory contains all the reusable UI components. Each component has its own directory to maintain modularity.
  - Example components include `dashboard`, `sidebar`, `programs`, etc.
- **`services`**: Services responsible for managing API calls and shared state across components.
- **`assets`**: Contains static resources like images and mock databases.
- **`index.html`**: The main HTML file for the Angular app.
- **`main.ts`**: The entry point for bootstrapping the Angular application.

This structure allows the project to be modular and scalable, with each feature encapsulated in its own directory.

### Components

**Main Components**

- App Header: Contains the top navigation bar.
- Sidebar: A collapsible sidebar for routing and easy navigation.
- Skeleton Loading Component: Displays a placeholder animation during data fetching.
- Course Evaluation Component: Evaluates and displays course data interactively.

### Building and Running:

To build the project for production, use the command:
- ```bash
      ng build

To run the project in local:
- ```bash
      ng serve -o

- The server will start run on port: 4200.
- use this http://localhost:4200/ url to see the output on the browser.

### Deployed Application

- The Application has been deployed in the AWS S3 bucket.
- ![nil-apps-course-overview](http://nila-apps-course-overview-edrevel.s3-website-us-east-1.amazonaws.com/)
- or copy and paste the link in the browser
- http://nila-apps-course-overview-edrevel.s3-website-us-east-1.amazonaws.com/

### Images for reference

- Overview

![image](https://github.com/user-attachments/assets/b0f3cfc4-b468-4f26-8521-fb0731eef300)

- Switched to Course Evaluation Report

![image](https://github.com/user-attachments/assets/66f569e6-5883-4579-ab3e-8975492f361e)

- Profile

![image](https://github.com/user-attachments/assets/bcfb7085-a8b1-4844-8142-d0b1195d9a55)

- Skeleton Loading

![image](https://github.com/user-attachments/assets/4749adbf-2c5b-4052-8948-b78903954bcb)

- Tablet View

![image](https://github.com/user-attachments/assets/e9e6ebe7-e45f-4553-a29d-e3cbf716b16b)

Course details can be collaped and expanded for user experience.

![image](https://github.com/user-attachments/assets/72c1ef96-de45-4498-b362-c1959551d8b0)

- Mobile View

![image](https://github.com/user-attachments/assets/6073c0d7-4955-434b-8173-ea15adbaaf26)

![image](https://github.com/user-attachments/assets/5055d180-f873-4e70-93bd-0f4c41625bf0)

![image](https://github.com/user-attachments/assets/8666e9db-b674-446b-8f57-49b7f790a1c2)

- Loading skeleton for Mobile

![image](https://github.com/user-attachments/assets/5375fc4f-540b-4eb9-ba61-1e3e0efb6403)

- Side Nav Bar

![image](https://github.com/user-attachments/assets/6da49cea-5916-43ad-9b0d-54fd5be9fa23)

- Dummy Dashboard has been added

![image](https://github.com/user-attachments/assets/4dd820d2-8a9e-4d84-b7f1-546c44181547)

- If the user tried to navigate to invalid routes, a 404 page will appear.

![image](https://github.com/user-attachments/assets/38424f16-bcbe-419d-9928-edd94eef7577)


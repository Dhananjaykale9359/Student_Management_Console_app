# Student Management Console App

This is a small Node.js project that runs in the command line. It helps manage student data like adding new students, viewing the list, and deleting students using their ID. All data is stored in a MySQL database.

## 🔧 What It Can Do

- Add a student (Name, Age, Course)
- Show all students saved in the database
- Delete a student using their ID
- Works through the terminal

## 🧰 Tools Used

- Node.js
- MySQL
- `readline` (for command-line input)
- `mysql2` (for connecting Node.js with MySQL)

## 🛠 How to Set It Up

### 1. Install Node.js and MySQL
Make sure Node.js and MySQL are installed on your system. You can use tools like XAMPP to run MySQL locally.

### 2. Clone the Project
Download or clone this project from GitHub:


### 3. Install Required Packages
Install the necessary dependencies:

```bash
npm install
```

### 4. Create MySQL Database and Table
Login to your MySQL server and run:

```sql
CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    course VARCHAR(100)
);
```

### 5. Run the Project
Now start the application:

```bash
node student_app.js
```

You’ll see a menu in the terminal where you can add, list, or delete students.


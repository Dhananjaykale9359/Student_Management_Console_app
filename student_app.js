const mysql = require('mysql2');
const readline = require('readline');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb'
});

// CLI input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menu options
function showMenu() {
    console.log('\n---- Student Management System ----\n');
    console.log('1. Add Student');
    console.log('2. List Students');
    console.log('3. Delete Student');
    console.log('4. Exit');

    rl.question('Choose an Option: ', (option) => {
        switch (option) {
            case '1':
                addStudent();
                break;
            case '2':
                listStudents();
                break;
            case '3':
                deleteStudent();
                break;
            case '4':
                console.log('Exiting the system. Goodbye!');
                rl.close();
                db.end();
                break;
            default:
                console.log('Invalid option. Please try again.');
                showMenu();
        }
    });
}

// Add student function
function addStudent() {
    rl.question('Enter Name: ', (name) => {
        rl.question('Enter Age: ', (age) => {
            rl.question('Enter Course: ', (course) => {
                db.query(
                    'INSERT INTO students (name, age, course) VALUES (?, ?, ?)',
                    [name, age, course],
                    (err, result) => {
                        if (err) throw err;
                        console.log('Student added successfully!');
                        showMenu();
                    }
                );
            });
        });
    });
}

// List students
function listStudents() {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) throw err;
        console.table(results);
        showMenu();
    });
}

// Delete student function
function deleteStudent() {
    rl.question('Enter Student ID to delete: ', (id) => {
        db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                console.log(`Student with ID ${id} deleted successfully.`);
            } else {
                console.log(`No student found with ID ${id}.`);
            }
            showMenu();
        });
    });
}

// Start
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
    showMenu();
});

// Definition of interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creation of student data
const student1: Student = {
    firstName: "Reece",
    lastName: "James",
    age: 24,
    location: "Berlin",
}

const student2: Student = {
    firstName: "Millie",
    lastName: "Bright",
    age: 28,
    location: "Sydney",
}

// Creation of array containing students data
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
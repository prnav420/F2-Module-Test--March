let students = [];

function addStudent(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const gpa = form.gpa.value;
  const age = form.age.value;
  const degree = form.degree.value;

  const newStudent = {
    ID: students.length + 1,
    name,
    age,
    gpa,
    degree,
    email
  };

  students.push(newStudent);

  form.reset();

  updateStudentTable();
}

function updateStudentTable() {
  // Get the student table body element
  const studentTableBody = document.getElementById("student-table-body");

  studentTableBody.innerHTML = "";

  students.forEach((student) => {
    // Create a new row element
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const gpaCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const degreeCell = document.createElement("td");
    const actionCell = document.createElement("td");

    idCell.textContent = student.ID;
    nameCell.textContent = student.name;
    emailCell.textContent = student.email;
    gpaCell.textContent = student.gpa;
    ageCell.textContent = student.age;
    degreeCell.textContent = student.degree;
    actionCell.innerHTML =
      '<button onclick="deleteStudent(event)">Delete</button>';

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(gpaCell);
    row.appendChild(ageCell);
    row.appendChild(degreeCell);
    row.appendChild(actionCell);

    studentTableBody.appendChild(row);
  });
}

function deleteStudent(event) {
  // Get the row element of the student to delete
  const row = event.target.closest("tr");

  const id = Number(row.children[0].textContent);

  students = students.filter((student) => student.ID !== id);

  updateStudentTable();
}

document.getElementById("student-form").addEventListener("submit", addStudent);

updateStudentTable();

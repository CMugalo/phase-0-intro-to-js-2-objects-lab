// Write your solution in this file!
const employee = {
  name: "Bruno",
  streetAddress: "Lisbon",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
updateEmployeeWithKeyAndValue();

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";

  return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue();

function deleteFromEmployeeByKey(employee, name) {
  const updatedEmployee = { ...employee };
  delete updatedEmployee.name;
  return updatedEmployee;
}

deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  delete employee.name;
  return employee;
}

destructivelyDeleteFromEmployeeByKey();

import employees from "./Employees";

export const checker = (title) => {
    const listOfEmployees = [];
    employees.forEach((employee) => {
        if (employee.roles.includes(title)) {
            listOfEmployees.push(employee.name);
        }
    });
    return listOfEmployees;
};

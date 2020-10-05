const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

test('create new employee', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});
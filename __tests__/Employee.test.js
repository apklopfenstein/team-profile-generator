const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

test('create new employee', () => {
    const employee = new Employee('', '', '');

    expect(employee).toEqual(expect.any(Employee));
});

test('getName returns employee name', () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');

    expect(employee.getName()).toEqual('Bob');
});

test('getId returns employee id', () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');

    expect(employee.getId()).toEqual('123');
});

test('getEmail returns employee email', () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');

    expect(employee.getEmail()).toEqual('bob@gmail.com');
});

test('getRole returns role as employee', () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});


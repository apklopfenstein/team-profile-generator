const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('creates a manager', () => {
    const manager = new Manager('', '', '', '');

    expect(manager).toEqual(expect.any(Manager));
});

test('getOfficeNumber returns office number', () => {
    const manager = new Manager('Jan', '124', 'jan@gmail.com', '1');

    expect(manager.getOfficeNumber()).toEqual('1');
});

test('getRole returns role as manager', () => {
    const manager = new Manager('Jan', '124', 'jan@gmail.com', '1');

    expect(manager.getRole()).toEqual('Manager');
});
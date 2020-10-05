const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern.js');

test('creates new intern', () => {
    const intern = new Intern('', '', '', '');

    expect(intern).toEqual(expect.any(Intern));
});

test('getSchool returns school', () => {
    const intern = new Intern('Guy', '125', 'guy@gmail.com', 'UT');

    expect(intern.getSchool()).toEqual('UT');
});

test('getRole returns role as intern', () => {
    const intern = new Intern('Guy', '125', 'guy@gmail.com', 'UT');

    expect(intern.getRole()).toEqual('Intern');
});
const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('creates new engineer', () => {
    const engineer = new Engineer('', '', '', '');

    expect(engineer).toEqual(expect.any(Engineer));
});

test('getGithub returns github', () => {
    const engineer = new Engineer('Dan', '126', 'dan@gmail.com', 'dan00');

    expect(engineer.getGithub()).toEqual('dan00');
});

test('getRole returns role as engineer', () => {
    const engineer = new Engineer('Dan', '126', 'dan@gmail.com', 'dan00');

    expect(engineer.getRole()).toEqual('Engineer');
});
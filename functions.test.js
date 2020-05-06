const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase())

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is John', () => {
    const user = 'John';
    expect(user).toBe('John');
  });
  
  test('User is Kate', () => {
    const user = 'Kate';
    expect(user).toBe('Kate');
});

});

//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('User should be Luka Baramishvili object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Luka', lastName: 'Baramishvili' });
  });

//Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
  });

  //regex (what if I want to make it case sensitive)
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
  });
  
  //Arrays
  test('Admin should be in usernames array', () => {
    usernames = ['john', 'kate', 'admin'];
    expect(usernames).toContain('admin');
  })


//working with async data

  //Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     });
// });

//Async Await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  });
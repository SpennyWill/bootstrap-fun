var saveUser = function (user) {
  console.log('saving', user.name);
}

var saveUsers = function () {
  var users = [
    { id: 15, name: 'Bob' },
    { id: 23, name: 'Jimbo' },
    { id: 35, name: 'Cathy' }
  ];

  users.forEach((u) => {
    saveUser(u); 
  });
  }

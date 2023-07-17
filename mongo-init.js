db.createUser({
  roles: [
    {
      role: 'readWrite',
      db: 'crud-users-db'
    }
  ]
});

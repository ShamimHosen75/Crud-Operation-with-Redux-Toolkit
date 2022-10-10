import React from 'react';

const UserList = () => {
  const users = [
    {id:'1', name:'Shamim', email:'shamim@gmail.com'},
    {id:'1', name:'Noyon', email:'noyon@gmail.com'},
    {id:'1', name:'Suvon', email:'suvon@gmail.com'},
  ];

  const renderCard = () => users.map(user => {
    <div className='bg-gray-300 p-5 flex items-center justify-between'>
      <div>
        <h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
        <span className='text-normal text-gray600'>{user.email}</span>
      </div>
      <div></div>
    </div>
  });

  return (
    <div className='grid gap-5 md:grid-cols-2'>
      {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No Users!</p>}
    </div>
  );
};

export default UserList;
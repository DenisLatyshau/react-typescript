import React, { useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Denis', email: 'denis@yandex.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '123456'}},
    {id: 2, name: 'Maxim', email: 'maxim@yandex.ru', address: {city: 'Minsk', street: 'Sovetskaya', zipcode: '543456'}}
  ]

  return (
    <div>
      <Card variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;

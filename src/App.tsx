import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список дел</NavLink>
        <NavLink to='/events'>Пример события</NavLink>
      </div>
      <Routes>
        <Route path='/users' element={ <UserPage/> } />
        <Route path='/users/:id' element={ <UserItemPage/> } />
        <Route path='/todos' element={ <TodosPage/> } />
        <Route path='/todos/:id' element={ <TodoItemPage/> } />
        <Route path='/events' element={ <EventsExample/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

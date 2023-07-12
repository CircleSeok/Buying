import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  //   onUserStateChange 함수를 호출합니다. 이 함수는 사용자의 로그인 상태 변화를 감지하고, 변경 시 콜백 함수를 실행하는 역할을 합니다.
  // 콜백 함수는 user 매개변수를 받아와서 출력하고, 그 값을 setUser 함수를 통해 컴포넌트의 상태로 설정합니다.
  // useEffect의 두 번째 매개변수로 빈 배열([])을 전달하였기 때문에, 이 useEffect 로직은 컴포넌트가 처음 마운트될 때만 실행되고, 그 이후에는 다시 실행되지 않습니다. 이를 통해 한 번 로그인 상태 감지 로직을 설정하고, 컴포넌트의 상태를 업데이트할 수 있습니다.
  // 예를 들어, 사용자가 로그인할 때마다 onUserStateChange의 콜백 함수가 실행되고, user 값을 출력하고, setUser 함수를 사용하여 해당 값을 컴포넌트의 상태로 설정할 수 있습니다. 이로써 사용자의 로그인 상태 변화에 따라 컴포넌트를 업데이트하거나 필요한 동작을 수행할 수 있습니다.

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Buying</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {user ? (
          <Button text={'Logout'} onClick={logout} />
        ) : (
          <Button text={'Login'} onClick={login} />
        )}
        {/* {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>} */}
      </nav>
    </header>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';

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

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  //   handleLogin 함수는 사용자를 로그인시키는 역할을 합니다. 먼저 login() 함수를 호출하여 로그인을 시도합니다. 이 함수는 signInWithPopup(auth, provider)를 사용하여 사용자 인증을 처리합니다. 로그인이 성공하면 반환된 user 객체를 setUser 함수를 사용하여 컴포넌트의 상태로 설정합니다. 이를 통해 사용자 정보를 저장하고, 로그인 상태에 따라 컴포넌트를 업데이트할 수 있습니다.

  // handleLogout 함수는 현재 로그인된 사용자를 로그아웃시키는 역할을 합니다. 먼저 logout() 함수를 호출하여 로그아웃을 시도합니다. 이 함수는 signOut(auth)를 사용하여 사용자를 로그아웃시킵니다. 로그아웃이 완료되면 null을 반환하고, 반환된 값을 setUser 함수를 사용하여 컴포넌트의 상태로 설정합니다. 이를 통해 사용자 정보를 초기화하고, 로그아웃 상태에 따라 컴포넌트를 업데이트할 수 있습니다.

  // 두 함수는 login() 및 logout() 함수가 반환하는 Promise를 처리하기 위해 .then()을 사용하고, 반환된 user 또는 null 값을 setUser 함수를 통해 컴포넌트의 상태로 설정합니다. 이렇게 함으로써 로그인 및 로그아웃이 성공한 후에 상태를 업데이트하고, 컴포넌트를 다시 렌더링할 수 있습니다.
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Buying</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}

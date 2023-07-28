import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import { useAuthContext } from '../context/AuthContext';
import { deleteProduct } from '../api/firebase';
import DeleteBtn from '../components/ui/DeleteBtn';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  const { user } = useAuthContext();

  const handleDelete = async () => {
    const confirmDelete = window.confirm('정말로 상품을 삭제하시겠습니까?');
    if (confirmDelete) {
      // 삭제 시도
      const deleted = await deleteProduct(id);
      if (deleted) {
        alert('상품이 성공적으로 삭제되었습니다.');
        // 삭제 후 이전 페이지로 이동
        window.history.back();
      } else {
        alert('상품 삭제 중 오류가 발생하였습니다.');
      }
    }
  };

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <img className='w-full px-4 basis-7/12' src={image} alt={title} />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2'>{title}</h2>
          <p className='text-2xl font-bold py-2  border-b border-gray-400'>
            ₩{price}
          </p>
          <p className='py-4 text-lg'>{description}</p>
          <div className='flex items-center'>
            <label className='text-brand font-bold' htmlFor='select'>
              옵션:
            </label>
            <select
              id='select'
              className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && <p className='my-2'>✅{success}</p>}
          <Button text='장바구니에 추가' onClick={handleClick} />
          {/* 관리자로 로그인한 경우에만 삭제 버튼을 보여준다. */}
          {user?.isAdmin && (
            <DeleteBtn text='상품 삭제' onClick={handleDelete} />
          )}
        </div>
      </section>
    </>
  );
}

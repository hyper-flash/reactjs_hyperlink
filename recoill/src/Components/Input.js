import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../Hook/Store';

export default function Input() {

    let [data, setData] = useRecoilState(userState);

    let funcName = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }


  return (
    <div>
      <p>name</p>
      <input name="name" value={data.name} onChange={funcName} />
      <p>email</p>
      <input name="email" value={data.email} onChange={funcName} />
      <br></br> <br></br>
    </div>
  )
}

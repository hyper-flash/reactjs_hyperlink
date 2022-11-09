import React from "react";
import { useRecoilValue } from "recoil";
import { userState, charCountState } from "../Hook/Store";

export default function Home() {

    const userData = useRecoilValue(userState);

    const length = useRecoilValue(charCountState);

  return (
    <>
      <h3>State Manage Library</h3>
      <h4>email: {userData.email}</h4>
      <h4>username: {userData.name}</h4>

      <h5>name length : {length}</h5>
    </>
  )
}

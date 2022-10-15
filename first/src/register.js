import React from 'react'

export default function register() {
  return (
    <div>
      <form>
        <fieldset>
          <legend><h1>registration form</h1></legend>
          <label>First name</label>
          <input type="text" />
          <br/>
          <label>last name</label>
          <input type="text" />
          <br/>
          <label>username</label>
          <input type="text"/>
          <br/>
          <label>Password</label>
          <input type="password"/>
          <br/>
          <label>Confim password</label>
          <input type="password"/>
          <br/>
          <label>Email</label>
          <input type="email"/>
          <br/>
          <label>Mobile</label>
          <input type="text"/>
          <br/><br/>
          <label>Gender</label><br/>
          <input type="radio"/>Male <br/> <input type="radio"/>Female 
          <br/><br/>
          <label>DOB</label>
          <input type="date" value="dd-mm-yyyy"/>
          <br/><br/>
          <label>Course</label>
          <select>
            <option>--Select--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <br/><br/>
          <label>nationality</label><br/>
          <input type="checkbox"/>indian <br/> <input type="checkbox"/>other
          <br/><br/>
          <label>Profile</label><br/>
            <img src={"https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg"} alt="profile" width="100px"/>
          <br/>
          <input type="file" />
          <br/><br/>
          <input type="submit" /><input type="reset"/>
        </fieldset>
      </form>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";
import _ from "lodash"


function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  
  const onChangeHandler = (e) => {
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value,
    // });
    const { name, value } = e.target
    console.log(name, value)
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('/api/users', form)
    .then(res=>{
      setMessage(res.data.message)
      setUsers((users)=> [...users, form])
      /* hide form after save */
      setForm({
        Email: '',
        Lastname: '',
        Firstname: '',
        Age: ''
      })
      /* hide errors after save */
      setErrors({})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  /* delete */
  const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this user")){
 
     axios.delete(`/api/users/${id__}`)
     .then(res=>{
       setMessage(res.data.message)
       setUsers((users)=> {return users.filter(user=>user._id !== id__)})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }
  /* find all users */
  useEffect(() =>{
  const getUsers = async () => {
    const Users = await fetch("/api/users");
    const uz = await Users.json()
    setUsers(uz)
    return Users
  }
  
  getUsers()  
  }, []);
  
  console.log(form)

  return (
    <div className="row p-4">
      <Alert message={message} show={show} />
      <div className="mt-4">
        <h2>Crud Users</h2>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            value={form.Email}
            onChangeHandler={onChangeHandler}
            errors={errors.Email}
          />
          <InputGroup
            label="Lastname"
            type="text"
            name="Lastname"
            value={form.Lastname}
            onChangeHandler={onChangeHandler}
            errors={errors.Lastname}
          />
          <InputGroup
            label="Firstname"
            type="text"
            name="Firstname"
            value={form.Firstname}
            onChangeHandler={onChangeHandler}
            errors={errors.Firstname}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            value={form.Age}
            onChangeHandler={onChangeHandler}
            errors={errors.Age}
          />
          <button className="btn btn-primary" type="submit">
            Add user
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Email, Lastname, Firstname, Age, _id }) => (
              <RowDetails
                key={_id}
                Email={Email}
                Lastname={Lastname}
                Firstname={Firstname}
                Age={Age}
                Id={_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;

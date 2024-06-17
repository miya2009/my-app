import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const {id}= useParams();
    let navigate=useNavigate();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
      });
    
      const { name, username, email } = user;
    
      const onInputChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
      const loadUser = async () => {
        const result =  await axios.get(`http://localhost:8082/user/${id}`);
        setUser(result.data)
      };

      useEffect(() => {
        loadUser();
      }, []);

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8082/user/${id}`, user);
        navigate('/');
        // console.log('submit 안함');
      };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User 수정 하기</h2>
                    <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                        이름
                        </label>
                        <input onChange={onInputChange} type="text" value={name} className="form-control" placeholder="이름 입력" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                        유저네임
                        </label>
                        <input onChange={onInputChange} type="text" value={username} className="form-control" placeholder="유저네임 입력" name="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                        이메일
                        </label>
                        <input onChange={onInputChange} type="text" value={email} className="form-control" placeholder="이메일 입력" name="email" />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-outline-primary px-3 mx-2">수정</button>
                        <Link to="/" type="submit" className="btn btn-outline-danger px-3 mx-2">취소</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
  export default EditUser;
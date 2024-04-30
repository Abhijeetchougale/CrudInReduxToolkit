import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../utitlity/userSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const existingUser = users.find(user => user.id === parseInt(id));
            if (existingUser) {
                setName(existingUser.name);
                setAge(existingUser.age);
            }
        }
    }, [id, users]);

    const handleSave = e => {
        e.preventDefault();
        if (id) {
            dispatch(updateUser({ id: parseInt(id), name, age }));
        } else {
            dispatch(addUser({ id: users[users.length - 1].id + 1, name, age }));
        }
        navigate('/');
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-4 offset-4 border bordered-dark bg-light">
                    {id ? <h4 className='text-warning'>Update User Form</h4> : <h4 className='text-success'>User Form</h4>}
                    <form onSubmit={handleSave}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className={id ? "btn btn-warning" : "btn btn-primary"}>
                            {id ? "Update" : "Submit"}
                        </button>
                        <button type='button' className="btn btn-priamry">
                            <Link to='/'> Go To User Information</Link>
                        </button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default UserForm;

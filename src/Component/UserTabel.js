import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utitlity/userSlice';

const UserTabel = () => {
    const users = useSelector(state => state.users);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEdit = (id) => {
        navigate(`/userForm/${id}`);
    }

    const handleDelete = (id) => {
        dispatch(removeUser({ id: parseInt(id) }))
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="card">
                        <div className="card-header bg-info">
                            <h4 className='text-center'>User Details</h4>
                        </div>
                        <div className="card-body">
                        <table class="table caption-top">
                <caption>
                <button className='btn btn-success'>
                    <Link to='/userForm'>Create</Link>
                </button>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>

                                        <button className='btn btn-success mx-2' onClick={()=>handleEdit(user.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserTabel;
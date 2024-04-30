import React from 'react';
import { useSelector } from 'react-redux';

const UserTabel = () => {
    const users = useSelector(state => state.users)
    return (
        <div>
            <table class="table caption-top">
                <caption>List of users</caption>
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

                                        <button className='btn btn-success mx-2'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserTabel;
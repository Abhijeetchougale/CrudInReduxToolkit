import React from 'react';

const UserForm = () => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
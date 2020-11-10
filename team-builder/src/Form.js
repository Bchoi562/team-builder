import React from 'react';

export default function Form(props){
    const {values, update, submit} = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        // evt.target.name
        update(name,value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return(
        <form className = 'form-container' onSubmit = {onSubmit}>
            <div className = 'form-group inputs'>
                <label>
                    Name
                    <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    placeholder='type a name'
                    maxLength='30'
                    ></input>
                </label>

                <label>
                    Email
                    <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='enter your email'
                    maxlength='30'
                    ></input>
                </label>

                <label>
                    Role
                    <input
                    type='text'
                    name='role'
                    onChange={onChange}
                    value={values.role}
                    placeholder='enter your role'
                    maxlength='30'
                    ></input>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}
import React from 'react'

const Form = (props) => {
    const { change, submit} = props;
    const { username, email, Password, tos } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox'? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e)  => {
        e.preventDefault();
        submit();
    }
    return (
        <div>
            <h1>My Cool Form!</h1>
                <form onSubmit={onSubmit}>
                    <label>Name:
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={onChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                    </label>
                    <label>Password
                        <input
                            type='Password'
                            name='Password'
                            value={Password}
                            onChange={onChange}
                        />
                    </label>
                    <label>Terms of Service:
                        <input
                            type='checkbox'
                            name='tos'
                            checked={tos}
                            onChange={onChange}
                        />
                    </label>
                    <input type='submit' value='create a Friend!'  />

                </form>
        </div>
        
    )
}

export default Form;

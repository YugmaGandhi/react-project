import { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState(' ');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle(' '); //so that after clicking user can add another book
    };

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button'>ClickMe!</button>
            </form>
        </div>
    )
}

export default BookCreate;
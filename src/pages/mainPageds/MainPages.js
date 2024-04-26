import React, { useState } from 'react';

function MainPage() {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const [isButtonEnabled, setIsButtonEnabled] = useState([])

    const onChange = (event) => {
        setInput(event.target.value)
    }

    const receiveInput = (event) => {
        event.preventDefault()
        if (input.trim() === '') {
            return
        }
        setList([...list, input])
        setInput('')
        setIsButtonEnabled([...isButtonEnabled, true])
    }

    const editInput = (index) => {
        const newInput = prompt('Введите изменения')
        if (newInput === null) {
            return
        }
        if (newInput.trim() === '') {
            setIsButtonEnabled(new Array(list.length).fill(false))
            return
        }

        const newList = [...list]
        newList[index] = newInput.trim()
        setList(newList)
    };

    return (
        <div>
            <input type="text" placeholder="name" value={input} onChange={onChange}/>
            <button onClick={receiveInput} disabled={input.trim() === ''}>Добавить</button>

            {list.length > 0 ? (
                <ol>
                    {list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => editInput(index)} disabled={!isButtonEnabled[index]}>Edit</button>
                        </li>
                    ))}
                </ol>
            ) : (
                <h3>Список пуст</h3>
            )}
        </div>
    );
}

export default MainPage;





















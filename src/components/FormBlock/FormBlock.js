import React, {useState} from 'react';
import {InputGroup, FormControl, Button} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const FormBlock = ({tasks, setTasks}) => {  //приняли пропсы

    const [title, setTitle] = useState(''); //создали новый useState

    const toDate = (date) => {
        return new Intl.DateTimeFormat('en-En', {
            day: '2-digit',
            month: 'short',
        }).format(new Date(date))
    }; // дата

    const addTask2 = (e) => {
        if (e.key === 'Enter' && title.trim().length){ //при нажатии на 'Enter' аозвращает title без пустых значений в строке
            setTasks([...tasks, {
                id: uuidv4(),
                title: title,
                date: toDate(new Date()),
                priority: 'None',
                success: false,
                pending: true,
                tags: [],
                description: ''
            }]);
            setTitle('')
        }
    };

    const addTask = () => {

        if (title.trim().length){
            setTasks([...tasks, {
                id: uuidv4(),
                title: title,
                date: toDate(new Date()),
                priority: 'Medium',
                success: false,
                pending: true,
                tags: [],
                description: ''
            }]);
            setTitle('')
        }
    }; //при нажатии на кнопку добавляет новые задачи


    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    onKeyPress={addTask2} //событие onkeypress срабатывает, когда клавиша на клавиатуре нажата и отпущена
                    value={title} //первоначальное значение
                    placeholder="Enter new Todo"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setTitle(e.target.value)} //принимает значенияч которые пишем в форму
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={() => addTask()}>
                    Button
                </Button>
            </InputGroup>
            </>
    );
};

export default FormBlock;
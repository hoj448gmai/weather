import React from 'react';
import styles from './ListBlock.module.css'
import ListItem from "./ListItem";


const ListBlock = ({setCheckTags,  tasks, setTasks, status, setModalShow, setModalShowObj, setCheck}) => {

    const { actionDelete, list, item, itemLeft, itemRight, dateIcon, priority, priorityCircle, action, date} = styles; //классы

    const delTask = (id) => {
        setTasks(tasks.filter((elem) => {
            return id !== elem.id
        }))
    }; // удаляет tasks

    const successHandler = (id) => {
        setTasks(tasks.map(( el ) => {
            if (el.id === id){
                return {...el, success: !el.success, pending: !el.pending}
            } else {
                return el
            }
        }))
    }; // верни весь элемент, success: не являющийся success, pending: не являющийся pending иначе сам элемент

    return (
        <ul className={list}>
            {tasks.filter((task) => {
                if (status === 'pending') {
                    return task.pending
                } else if (status === 'success') {
                    return task.success
                } else{
                    return task
                } // если status = pending , то при нажатии дай то , что яаляется pending
                // иначе если status = success , то при нажатии на него дай то , что яаляется success
                // иначе верни все задачи
            }).map((task) => (
                <ListItem priority={priority} task={task} setModalShow={setModalShow} action={action} date={date}
                setCheck={setCheck} setCheckTags={setCheckTags} setModalShowObj={setModalShowObj} dateIcon={dateIcon}
                successHandler={successHandler} actionDelete={actionDelete} item={item} itemRight={itemRight} priorityCircle={priorityCircle}
                delTask={delTask} itemLeft={itemLeft} //ListItem  принимает пропсы и передает пропсы в ListItem
                />
            ) )}

        </ul>
    );
};

export default ListBlock;
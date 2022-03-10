import React, {useState} from 'react';
import {AiFillTag} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'


const ListItem = ({delTask, task, item, setModalShowObj, setCheck, setCheckTags,setModalShow, itemLeft, itemRight, priority, priorityCircle, date, dateIcon, action , successHandler, actionDelete}) => {
//здесь в ListItem передаются пропсы
    const [isTagOpen, setIsTagOpen] = useState(false); //

    return (
        <li style={{position:'relative', opacity: task.success ? '50%' : '100%', cursor: 'pointer'}} className={`${item} todo__item`} key={task.id} onClick={() => {
            setModalShowObj(task);
            setCheck(task.priority);
            setCheckTags(task.tags);
            setModalShow(true)
        }}> //если success - true то opacity: 50% иначе закрашивается полностью
            <div className={itemLeft}>
                <p style={{textDecoration: task.success ? 'red line-through' : 'none'}}>{task.title}</p> // если  task.success - true выполнен то дай красную линию иначе ничего
            </div>
            <div className={itemRight}>
                <div className={priority}>
                    <div className={priorityCircle} style={{background: task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'yellow' : task.priority === 'Low' ? 'blue' : 'black'}}/>
                    <span>{task.priority} priority</span>
                </div>
                <div className={date}>
                    <div className={dateIcon} onClick={(e) =>  {
                        e.stopPropagation(); //вызывает только то на что нажимаем
                        setIsTagOpen(!isTagOpen)
                    } }> //отвчеает чтобы при нажатии на иконку вызывалось только тэг
                        <AiFillTag/>
                    </div>
                    <span>{task.date}</span>
                </div>
                <div className={action} onClick={(e) => e.stopPropagation() }>
                    <input type="checkbox" checked={task.success} onChange={(e) => successHandler(task.id)} />
                    <span onClick={ (e) => delTask(task.id)} className={actionDelete}>
                                <MdDelete/>
                            </span>
                </div> // отвчеает чтобы что мы сделали выполненными - checked было в тэг
            </div>

            <div className='tags__popup' onClick={(e) => {
                e.stopPropagation();
                setIsTagOpen(false)
            }} style={{display: isTagOpen ? 'block' : 'none'}}>
                <div className='tags__popup-top'>
                    <AiFillTag />
                    <h4>Tags</h4>
                </div> // отвчеает за попап  который выходит при нажатии на иконку тэг
                // если он открыт то дай display: block, иначе none
                {
                    task.tags.length ? <ul>
                        {task.tags.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                        : <p style={{marginTop: '12px'}}>No tags attached</p>
                }
                //  если длина тэга и его значение true то дай новый тэг иначе - No tags attached
                // если тэги пустые получаем - No tags attached

            </div>
        </li>
    );
};

export default ListItem;
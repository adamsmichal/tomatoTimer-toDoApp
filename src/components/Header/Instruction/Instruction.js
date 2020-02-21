import React from 'react';

const Instruction = (props) => {

    let content = (
        <div className={'instruction'}>
            <ul className={'instruction__list'}>
                <h2 className={'instruction__title'}>Instruction</h2>
                <li>To add task you can press button or enter</li>
                <li>To add the priority task, check fire icon next to text field</li>
                <li>You will get an extra minute to break time for each completed priority task</li>
                <li>Next to tasks you will find a timer that shows you when the task has been added or finished</li>
            </ul>
            <button className={'instruction__btn'} onClick={props.closeInstructionPopup}>X</button>
        </div>
    )

    if (!props.isOpen) {
        content = null;
    }

    return (
        <div>{content}</div>
    );
}
 
export default Instruction;
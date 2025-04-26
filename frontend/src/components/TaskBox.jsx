import Button from "./Button";

function TaskBox({title, content, dateCalendar}){
    return(
        <>  
            <div className="main-task-container">
                <div className="task-container-box">
                    <div>
                        <input type="checkbox" name="heading" id="heading" />
                        <h1>{title}</h1>
                    </div>
                    <div>
                        <h3>{content}</h3>
                    </div>
                    <div>
                        <div>
                            <input type="date" name="date" id="date" />
                        </div>
                        <div>
                            <button>{<Button btnText={'Edit'}/>}</button>
                            <button>{<Button btnText={'Delete'}/>}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskBox
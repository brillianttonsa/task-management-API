import Button from "./Button";

function SubHeader(){
    return(
        <>  
            <div className="w-full">
                <div className="flex justify-between items-center m-2 w-full  p-1">
                    <div>
                        <h1>Your tasks</h1>
                    </div>
                    <div>
                        <button className="btn-with-icon bg-black text-white flex items-center p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                            <span><Button btnText={'Add task'}/></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubHeader;
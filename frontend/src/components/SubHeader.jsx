import Button from "./Button";

function SubHeader() {
  return (
    <div className="w-full">
         <header className="mb-6">
            <h1 className="text-3xl font-bold text-center">Task Management</h1>
          </header>
          <div className="flex justify-between items-center m-2 p-1">
            <div>
              <h1>Your tasks</h1>
            </div>
            <div>
              <Button btnText="Add" className="btn-with-icon bg-black text-white flex items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              </Button>
              </div>
            </div>
    </div>
  );
}

export default SubHeader;

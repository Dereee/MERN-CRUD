import React from "react";

export const TodoForm = ({todo}) => {
    const [todo,setTodo] = useState()
    const {register, handleSubmit, onSubmit} = useForm({ defaultValues: { text: todo ? todo.text : "" } })
    const history = useHistory() 

 

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
        history.push("/")
    });
    
    return (
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="text">Text:</label>
                    <input className="form-control" ref={register} type="text" name="text" id="text" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Save Todo
                    </button>
                </div>
            </form>
    );
    
}
import "./App.css"

function Form(){
    return(
        <>

    <div className="Form-box">

        <h3> Leave A Comment</h3>

        <div className="form-data">

        <input type="text" placeholder ="Enter Name"/>
        <input type="email" placeholder ="Enter Email"/>
        <textarea rows="5" placeholder="Leave Your Comment"/>
        <button className="red-btn" type="submit">Post Comment</button>
        </div>

    </div>

        </>
    )
}

export default Form;
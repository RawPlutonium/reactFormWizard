export const StepOne = function(props){
    if(props.currentStep !== 1){
        return null;

    }
    return(
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
            />
        </div>
    )
}

export const StepTwo = function(props){
    return(
    <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter Username"
        value={props.username}
        onChange={props.handleChange}
        />  
</div>
    )
}
export const StepThree = function(props){
    return(
        <div className="form-group">
            <label html="password">Username</label> 
            <input 
                className="form-control"
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={props.password}
                onChange={props.handleChange}
            />
        </div>
    )
}


import React from 'react'
function Alert(props) {
    const ucwordcase=(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
            {props.alert && ( <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{ucwordcase(props.alert.type)} : </strong>{props.alert.message}                         
            </div>
            )}
        </div>
    )
}

export default Alert
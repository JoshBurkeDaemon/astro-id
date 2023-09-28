import React from "react";

const FormTextInput = ({id, type, label, placeholder}) =>{
    return(
        <div className="form-item-wrapper flex flex-col gap-y-2">
            <label for={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} className="px-2 py-1 border-slate-200 border-solid border rounded-md"></input>
        </div>
    )
}

const Form = () => {

    return (
        <div id="form-page" className="w-full h-screen flex justify-around ">
            <aside id="form-nav" className="shadow-lg h-3/4 w-2/5">
                <ul>
                    <li>Personal Info</li>
                    <li>Reasons</li>
                    <li>Previous History</li>
                    <li>Earth Quiz</li>
                    <li>My Orders</li>
                </ul>
            </aside>

            <div id="right-side" className="shadow-lg h-3/4 w-2/5">
                <h1>Earth Visa Application</h1>
                <form action="#" method="get" className="flex flex-col gap-y-6">
                    <div>
                        <FormTextInput id="fname" type="text" label="First Name" placeholder="Enter your name"/>
                        <FormTextInput id="lname" type="text" label="Last Name" placeholder="Enter your last name"/>
                    </div>
                    <div>
                        <FormTextInput id="home-planet" type="text" label="Home Planet" placeholder="Home Planet"/>
                        <FormTextInput id="email" type="email" label="Email" placeholder="im.an.alient@invade.io"/>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Form
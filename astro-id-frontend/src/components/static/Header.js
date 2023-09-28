import React from "react";

const Header = () => {
    return (
        <div style={{width: '100%', height: '100%'}}>
            {/* Nav bar */}
            <div style={{backgroundColor: 'green', width: '100%', height: 50, display: 'flex', justifyContent: 'space-between'}}>
                <div style={{marginLeft: 200}}>
                <button className="bg-cyan-500" style={{padding: '10px 20px', borderRadius: 20}}>Astro ID</button>
                <button style={{marginLeft: 20}}>Home</button>
                <button style={{marginLeft: 20}}>Visa Application</button>
                </div>
                <div style={{marginRight: 130, marginTop: 10}}>
                    <button>Profile</button>
                </div> 
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flex: 1, margin: 15,  height: 100}}></div>
                <div style={{display: 'flex'}}>

                </div>

                <div style={{display: 'flex', flex: 2, margin: 15,  height: 100}}></div>


            </div>
            
        </div>
    )
}


export default Header;
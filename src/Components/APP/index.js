import { useEffect, useState } from "react";

function App(){

    const [isAuthentified,setIsAuthentified] =useState(null);

    useEffect(()=>{
        setIsAuthentified(JSON.parse(localStorage.getItem('is_authentified')));
    },[]);
    return(
<>
        {isAuthentified ? (

        )}
        )
        

</>
    )
}

export default App;
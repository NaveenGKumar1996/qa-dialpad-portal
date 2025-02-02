import HeaderMenuItem from "./HeaderMenuItem.js"
const HeaderMenu=()=> {
    const items=["About", "Home","Test Coverage","Execute","Reports","Activities"]
    return ( 
        <>
        <div className="navbar container-flex">
           <h1 className="dialpad d-fw-bold">dialpad
             <svg aria-hidden="true" role="img" data-name="Dialpad Ai Color" className="d-icon d-icon--dialpad-ai-color test" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.7 7.693a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" fill="#F40FB9" /><path fillRule="evenodd" clipRule="evenodd" d="M9.185 7.276c-.408 0-1.11.388-1.475 1.58v.003l-3.46 11.15a1.407 1.407 0 0 1-2.686-.832L5.02 8.032V8.03c.563-1.833 2.037-3.568 4.165-3.568 2.127 0 3.599 1.731 4.162 3.561v.002l2.663 8.584v.001c.366 1.19 1.067 1.577 1.474 1.577 1 0 1.81-.81 1.81-1.81v-5.876a1.407 1.407 0 0 1 2.813 0v5.876A4.622 4.622 0 0 1 17.484 21c-2.125 0-3.598-1.73-4.162-3.56v-.003l-2.663-8.583v-.002c-.366-1.19-1.065-1.576-1.474-1.576Z" fill="url(#a)" /><defs><linearGradient id="a" x1="11.803" y1="5.869" x2="11.803" y2="19.593" gradientUnits="userSpaceOnUse"><stop stopColor="#F40FB9" /><stop offset="1" stopColor="#7C52FF" /></linearGradient></defs></svg>
           </h1>
           {
            items.map((item)=>(
                <HeaderMenuItem name={item}/>
            ))}
        </div>
        </>
     );
}

export default HeaderMenu;
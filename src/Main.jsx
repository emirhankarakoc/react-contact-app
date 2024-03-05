import { useState, useEffect } from "react";




function Main(){

    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [contacts,setContacts] = useState([{name:"",number:""}])
    const [searching,setSearching] = useState("");

    function onChangeName(event){
        setName(event.target.value);
    }


    function onChangeNumber(event){
        setNumber(event.target.value);
    }

    function onChangeSearching(event){
        setSearching(event.target.value);
    }

    return (
        <div>
            <h2 style={{color:"red"}}>Contact App</h2>
            <input value={searching} onChange={onChangeSearching} placeholder="Filter for search"/>
            <br/>
            {
                contacts.filter(contact => 
                    (contact.name && contact.name.toString().includes(searching)) || 
                    (contact.number && contact.number.toString().includes(searching))
                ).map((filtered,index) => (
                    <div key={index}>
                        <p>Isim {filtered.name}: Numara {filtered.number}</p>
                    </div>
                ))
            }



            <hr/>

            <h2 style={{color:"red"}}>Add Contacts</h2>
            <input value={name} onChange={onChangeName} placeholder="Name"/>
            <br/>
            <input value={number} onChange={onChangeNumber} placeholder="Number"/>
            <br/>

            <button onClick={()=>{
            setContacts([...contacts, { name: name, number: number }]);
            setName("");
            setNumber("");
                }}>Add</button>


<hr/>
<h2 style={{color:"red"}}> All Contacts</h2>
{
    contacts.map((contact,index)=>(
        <div key={index}>
          <p>Isim {contact.name}: Numara {contact.number}</p>
        </div>
    ))
}



        </div>
    )
}

export default Main;
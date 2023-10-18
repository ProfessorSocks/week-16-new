import React, { useState } from 'react'
import { Alert, Button } from 'reactstrap';

function ContactMe() {

    const CLIENTS_END = 'https://65148aacdc3282a6a3cd4724.mockapi.io/Clients'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');


    const handleSubmit = async () => {

        
        const newClient = {
            name: name,
            email: email,
            info: info,
        }

        try{
            const resp = await fetch(CLIENTS_END, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newClient),
            });
            if (resp.ok){
                console.log(`yay contact info`)
            }
        }
        
        catch(e) {
            console.log(`handleSubmit had an error - ${e}`)
        }
    }


  return (
    <div>

        <form onSubmit={handleSubmit} method='POST'>
            <input className='inputfield' type='text' placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input className='inputfield' type='email' placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <input className='inputfield' type='text' placeholder='info' onChange={(e) => setInfo(e.target.value)}/>
        </form>
        <Button className='newbutton' onClick={handleSubmit}>submit</Button>
    </div>
  )
}

export default ContactMe
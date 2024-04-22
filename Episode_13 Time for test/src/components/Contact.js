import React from 'react'

const Contact = () => {
    return(
        <div>
            <h1 className='font-bold text-3xl p-4'>Contact us</h1>
            <form action="">
                <input type="text" className=" border border-black p-2 m-2" name=""  placeholder='name'/>
                <input type="text" className="border border-black p-2 m-2" name="" placeholder='message' />
                <button className='p-2 m-2 bg-black text-white rounded-lg'>Submit</button>

            </form>
        </div>
    )
}

export default Contact;

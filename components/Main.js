import Script from 'next/script'
import React from 'react'
import Div from './Div'
import Section from './Section'

const Main = ({setEmail, setFirstName, setLastName, PaystackButton, ComponentProps}) => {
  return (
    <main >
        <Section className={` xl:bg-[url("/images/cover-image.jpg")] xl:bg-[#00000085] xl:bg-blend-overlay xl:h-screen xl:bg-bottom xl:flex xl:flex-col xl:justify-center xl:items-center xl:flex-wrap xl:bg-cover
        
        sm:h-[80vh] sm:bg-cover sm:bg-bottom sm:flex sm:flex-col sm:wrap sm:items-center sm:justify-center`}>
            <Div className={`xl:leading-[6vw] xl:text-center xl:w-8/12 sm:w-full p-1 text-center leading-[12vw]`}>
                <h1 className={`xl:text-center text-[5vw] sm:text-[10vw]`}>Become a Frontend Web Developer!</h1>
                <p1>Sign up to Mastery</p1>
            </Div>

            <Div>
                <button className={`xl:p-3 xl:bg-purple-800 rounded-xl border-none text-white`} type="button">Get Started</button>
            </Div>
        </Section>

        <Section className={`xl:p-20 xl:flex xl:flex-wrap xl:justify-center p-5`}>
        <form className={`xl:text-purple-800 xl:basis-[60%] xl:flex xl:flex-col xl:justify-center sm:basis-11/12`} id="myForm" action="">
                <h3 className={`sm:text-center mb-10`}>Registration Form</h3>
                <label>First Name:</label>
                <br />
                <input className={` xl:border-solid xl:border-b-2 xl:border-gray-600 xl:focus:outline-none xl:focus:border-solid xl:focus:border-b-2 xl:focus:border-purple-800 `} type="text" name="firstName" placeholder="Enter your first name"
                onChange={(e)=>setFirstName(e.target.value)} />
                <br />

                <label>Last Name:</label>
                <br />
                <input className={` xl:border-solid xl:border-b-2 xl:border-gray-600 xl:focus:outline-none xl:focus:border-solid xl:focus:border-b-2 xl:focus:border-purple-800 `} type="text" name="lastName" placeholder="Enter your last name"
                onChange={(e)=>setLastName(e.target.value)} />
                <br />

                <label>Email:</label>
                <br />
                <input className={` xl:border-solid xl:border-b-2 xl:border-gray-600 xl:focus:outline-none xl:focus:border-solid xl:focus:border-b-2 xl:focus:border-purple-800 `} id="email" type="email" name="email" placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)} />
                <br />
            </form>
            <Div className={`xl:basis-full xl:basis-[60%] xl:flex xl:justify-center`}>
                <PaystackButton className='paystack-button btn ' {...ComponentProps} />
            </Div>
        </Section>
        <Script src="https://js.paystack.co/v1/inline.js"></Script>

        <Script></Script>
    </main>
  )
}

export default Main
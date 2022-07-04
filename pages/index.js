import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import { PaystackButton } from 'react-paystack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  
  const element = <FontAwesomeIcon icon={faCoffee} />
  const amount = 100000

 

  const[email, setEmail] = useState("");
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const publicKey = "pk_test_9cc147504066a4577a2ac4525acb5dbe0d534597";


  const datar = { "firstName": firstName, "lastName": lastName, "email": email}
  // const[phone, setPhone] = useState("");

  const apiCall = async()=>{
   
    let res = await fetch("http://localhost:3000/api/req", {
        method: "POST",
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datar),
    });

    let data = await res.json();
}
  const ComponentProps ={
    email,
    amount,
    metadata: {
      firstName,
      lastName,
    },
    publicKey,
    text: "Register",
    onSuccess: () => paymentSuccess(),
    onClose: () => paymentClose(),
  
  }

  const paymentSuccess =() =>{
    apiCall();
    alert("success! This was a callback function")
  }

  const paymentClose = () =>{
    apiCall();
  }

  
  return (
    <div >
      <Head>
        <title>theEnthusiastAcademy | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header element={element} className={`xl:px-10 xl:py-5 xl:bg-purple-800`} > 
      </Header>

      <Main 
        setEmail={setEmail}
        setFirstName={setFirstName}
        setLastName={setLastName}
        PaystackButton={PaystackButton}
        ComponentProps={ComponentProps}
        apiCall = {apiCall}
      ></Main>

      
      <Footer
        className={`xl:footer xl:p-10 xl:bg-neutral xl:text-neutral-content`}>
      </Footer>
    </div>
  )
}

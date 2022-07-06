import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import { PaystackButton } from 'react-paystack'


export default function Home() {
  const host = process.env.NEXT_PUBLIC_hostname
  const publicKey = process.env.NEXT_PUBLIC_publicKey;
  const amount = 100000

  const[email, setEmail] = useState("");
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[phone, setPhone] = useState("");  
  const formData = { "firstName": firstName, "lastName": lastName, "email": email}

  const apiCall = async()=>{
     await fetch(`${host}/api/req`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
     });
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
    window.location.replace("https://webdevelopertraining.vercel.app");
  }
  
  const paymentClose = () =>{
    apiCall();
    window.location.replace("https://webdevelopertraining.vercel.app");
  }
  
  return (
    <div >
      <Head>
        <title>theEnthusiastAcademy | Home</title>
        <meta name="description" content="Registration page to becoming a frontend web developer" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header  className={`xl:px-10 xl:py-5 sm:px-2 sm:py-4 xl:bg-purple-800`} > 
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
        className={`xl:footer xl:p-10 xl:bg-neutral xl:text-neutral-content`}
      ></Footer>
    </div>
  )
}



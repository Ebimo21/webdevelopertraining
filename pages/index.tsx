import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import { PaystackButton } from 'react-paystack'
// import { setTimeout } from 'timers/promises'


export default function Home() {
  const host = process.env.NEXT_PUBLIC_hostname
  const publicKey = process.env.NEXT_PUBLIC_publicKey;
  const amount = 50000 * 100

  const[email, setEmail] = useState("");
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[phone, setPhone] = useState("");  
  const formData = { "firstName": firstName, "lastName": lastName, "email": email, "phone": phone}

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
      phone
    },
    publicKey,
    text: "Register",
    onSuccess: () => paymentSuccess(),
    onClose: () => paymentClose(),
  }

  const paymentSuccess =() =>{
    apiCall();
    alert("succes");
    setTimeout(() => {
      window.location.replace(host);
    }, 3000);
  }
  
  const paymentClose = () =>{
    apiCall();
    setTimeout(() => {
      window.location.replace(host);
    }, 3000); 
  }

  const calculateTimeLeft = () => {
    const difference = +new Date("mar 12, 2023 00:00:00") - +new Date();
    
    let timeLeft:{days: number, hours: number, minutes: number, seconds: number} = {
      days:0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);   
  
  })
  
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
        setPhone={setPhone}
        timeLeft={timeLeft}
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







  // const[days, setDays] = useState<number>(0)
  // const[seconds, setSeconds] = useState<number>(0)
  // const[hours, setHours] = useState<number>(0)
  // const[minutes, setMinutes] = useState<number>(0)
  // const[distance, setDistance] = useState<number>(0)
  // const[countDownDate, setCountDownDate] = useState<number>(new Date("Aug 1, 2022 00:00:00").getTime())
  // const[now, setNow] = useState<number>(new Date().getTime())

   // var counter = setInterval(function() {
    //   setNow(new Date().getTime())
    //   setDistance(countDownDate - now);
    //   setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    //   setHours (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    //   setMinutes (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    //   setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    //   // console.log(distance)
    //   if (distance < 0) {
    //     clearInterval(counter);
    //   }
    // }, 1000);
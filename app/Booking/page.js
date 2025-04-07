"use client";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Booking ()  {
 
  return (
         <div className="container">
               {/* Header Section */}
               <div className="header">
               {/* Typing Effect for "MARK RELIC" */}
               <h1 className="typing-effect">
                 <Typewriter
                   words={["My name is Mark, and I am a life coach."]}
                   loop={true} // Infinite loop
                   cursor
                   cursorStyle="_"
                   typeSpeed={150} // Speed of typing
                   deleteSpeed={50} // Speed of deleting
                   delaySpeed={1000} // Pause before restart
                 />
               </h1>
         
               {/* Image Section */}
               <div className="image-container">
                 <Image
                   src="/mark.jpg"  // Update with the correct path
                   alt="Relaxation exercise"
                   width={500}
                   height={300}
                   className="main-image"
                   />
                   </div>
               <div className="booking-section1">
         
                   <h2>Healing Minds Together</h2>
                   <p>Your Path To Mental Wellness</p>
                   <p>
                   Mark Relic is a writer, a novelist, English teacher and life coach. He is business, energy, creativity, relationship strategist. His talent is diverse, first starting in hospitality industry, venturing into teaching combined with coaching. Mark helps people achieving their goals and that he has been doing for over ten years. He lives his calling by serving and helping people reaching their goals and dreams.
                   </p>
                   <Image
                   src="/marksss.png"  // Update with the correct path
                   alt="Relaxation exercise"
                   width={150}
                   height={30}
                   />
                   
                   </div>
               </div>
         
               {/* Booking Section */}
               <div>
               <div className="booking-section">
  <h3>Book Schedule</h3>
  <p>Our training programs have received immense appreciation.</p>
  <a 
    href="https://calendly.com/markoreljin5dva/30min" 
    target="_blank" 
    rel="noopener noreferrer"
    className="button"
  >
    Book Appointment
  </a>
  <Image
    src="/contact.gif"
    alt="Relaxation exercise"
    width={150}
    height={100}
  />
</div>
         
<div className="booking-section">
  <h3>Book Schedule</h3>
  <p>Our training programs have received immense appreciation.</p>
  
  {/* Option 1: Direct Calendly Link (recommended) */}
  <Link
    href="/component/contact"
    passHref
    legacyBehavior
  >
    <a 
      className="button" 
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact    </a>
  </Link>

    <Image 
      id="hellomoto"
      src="/calls.gif"
      alt="Relaxation exercise"
      width={150}
      height={100}
      priority
    />


</div>
               </div>
             </div>
  );
}
// "use client";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

export default function Booking() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Trigger animation only once
    });

    // Refresh AOS on scroll
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header" data-aos="fade-up" data-aos-delay="100">
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
        <div className="image-container" data-aos="fade-left" data-aos-delay="200">
          <Image
            src="/mark.jpg"  // Update with the correct path
            alt="Relaxation exercise"
            width={500}
            height={300}
            className="main-image"
          />
        </div>

        <div className="booking-section1" data-aos="fade-up" data-aos-delay="300">
          <h2>Healing Minds Together</h2>
          <p>Your Path To Mental Wellness</p>
          <p>
            Mark Relic is a writer, a novelist, English teacher and life coach. He is a business, energy, creativity, and relationship strategist. His talent is diverse, starting in the hospitality industry and later venturing into teaching combined with coaching. Mark helps people achieve their goals, and he has been doing this for over ten years. He lives his calling by serving and helping people reach their goals and dreams.
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
      <div data-aos="fade-up" data-aos-delay="400">
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

        <div className="booking-section" data-aos="fade-up" data-aos-delay="500">
          <h3>Contact</h3>
          <p>Our training programs have received immense appreciation.</p>

          {/* Option 1: Direct Calendly Link (recommended) */}
          <Link href="/component/contact" passHref legacyBehavior>
            <a className="button" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
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

import React from 'react';
import Carousel from '../components/Carousel';
import Styles from './styles/about.module.scss';
import { FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
 

const heroImage = "https://ghomslinguistics.com/wp-content/uploads/2024/08/table-book-read-open-wood-vintage-674236-pxhere.com_.jpg";
const missionImage = "https://ghomslinguistics.com/wp-content/uploads/2024/06/pexels-tima-miroshnichenko-5427868-1536x1024.jpg";
const testimonialImages = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/girl-2771936_1920-1024x789.jpg",
    "https://ghomslinguistics.com/wp-content/uploads/2024/06/pexels-tima-miroshnichenko-5427868-1024x683.jpg"
];

const heroImages = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/table-book-read-open-wood-vintage-674236-pxhere.com_.jpg",
    "https://ghomslinguistics.com/wp-content/uploads/2024/06/pexels-tima-miroshnichenko-5427868-1536x1024.jpg"
]
const carouselItems = [
    <div className={Styles.hero_card}>
        <img src={heroImages[0]} alt="hero image" />
        <h2>Language opens worlds – discover yours with us!</h2>
        <h3>Language school for the languages
        German English</h3>
        <button>Learn more</button>
    </div>,
    <div className={Styles.hero_card}>
    <img src={heroImages[1]} alt="hero image" />
    <h2>Learn languages, connect cultures – your future begins here!</h2>
    <h3>
    Language testing center
    German English</h3>
    <button>Learn more</button>
</div>
  ];

const testimonials = [
    {
        author: "Jane D.",
        text: "The language school far exceeded my expectations. Thanks to the individual support and the practical teaching methods, I made rapid progress."
    },
    {
        author: "Derrick D.",
        text: "The German course at our school in Cameroon is fantastic! The teachers are competent and motivating."
    }
];

const clientLogos = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/DVK-Logo_1000x1000-300x300.png",
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/og-image-standard-logo-barmer-data-300x300.jpg",
       
];

export default function About() {
    return (
        <div className={Styles.container}>
        <div className={Styles.hero}>
                <Carousel items={carouselItems}/>
            </div>
            <div className={Styles.mission}>
                <img src={missionImage} alt="Our Mission" />
                <div className={Styles.content}>
                    <h3>OUR MISSION STATEMENT</h3>
                    <p>
                        At our language school, we believe that language is the key to a successful and connected future. Our goal is to empower individuals through high-quality language education.
                    </p>
                </div>
            </div>
            <div className={Styles.testimonials}>
                <h3>WHAT OUR STUDENTS SAY</h3>
                <div className={Styles.testimonialBox}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem
                            key={index}
                            author={testimonial.author}
                            text={testimonial.text}
                            image={testimonialImages[index]}
                        />
                    ))}
                </div>
            </div>
            <div className={Styles.aboutSection}>
                <h3>WHAT MAKES US DIFFERENT</h3>
                <div className={Styles.points}>
                    <AboutItem
                        heading="Experienced Teachers"
                        icon={<FaChalkboardTeacher />}
                        text="Our team consists of qualified and experienced language teachers passionate about making the learning process efficient and inspiring."
                    />
                    <AboutItem
                        heading="Innovative Learning"
                        icon={<FaBookOpen />}
                        text="We use modern teaching methods to create a dynamic and engaging learning environment."
                    />
                </div>
            </div>
            <div className={Styles.clients}>
            <h3>OUR CLIENTS</h3>
            <p>We are proud to work with a diverse range of clients who trust us for their language education needs.</p>
            <div className={Styles.logoBox}>
                {clientLogos.map((logo, index) => (
                    <div key={index} className={Styles.logo}>
                        <img src={logo} alt={`Client Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

function AboutItem({ heading, icon, text }) {
    return (
        <div className={Styles.point}>
            <div className={Styles.icon}>{icon}</div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
}

function TestimonialItem({ image, author, text }) {
    return (
        <div className={Styles.testimonial}>
            <div className={Styles.testimonialPhoto}>
                <img src={image} alt={author} />
            </div>
            <div className={Styles.testimonialText}>
                <p>{text}</p>
                <strong>{author}</strong>
            </div>
        </div>
    );
}
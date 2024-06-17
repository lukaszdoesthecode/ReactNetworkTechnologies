import React from 'react';
import './HomeText.css';
import {useTranslation} from "react-i18next";

export default function HomeText(){
    /*
    This component is responsible for displaying the text content of the home page.
     */

    const {t, i18n} = useTranslation();

    return (
        <div className="All">
            <div className="Pic">
                <img src="/library_pic.jpg" alt="Library"/>
            </div>
            <div className="text">
            <h1>{t('Hello there!')}</h1>
            <h2>{t('This is your cockpit, sit down and enjoy your books!')}</h2>
            <p>{t('At U/O/L/F/N/T, we strive to offer a diverse collection of books, articles, and multimedia resources that cover a wide range of topics in any topic possible. Whether you are looking to learn the basics or seeking advanced knowledge, our library is equipped to support your private, educational, and professional journey.')}</p>

            <p>{t('Our mission is to create an inclusive and stimulating environment where learners of all ages can explore and expand their horizons. With a rich catalog that spans from classic literature and cutting-edge science to practical guides and creative arts, there is something for everyone at our library. We believe that knowledge is the key to personal and professional growth, and we are committed to providing resources that inspire curiosity and foster lifelong learning.')}</p>

            <p>{t('We also offer a variety of programs and events designed to engage our community and promote a culture of learning. From author talks and book clubs to workshops and seminars, our events calendar is packed with opportunities to connect with fellow enthusiasts and experts in various fields. Our dedicated staff is always on hand to assist you in finding the perfect resource or to answer any questions you might have.')}</p>

            <p>{t('In addition to our extensive physical collection, we provide access to a wealth of digital resources, including e-books, online journals, and multimedia content. Our online platform allows you to explore these materials from the comfort of your home, ensuring that you have access to the information you need, whenever you need it. We continually update our digital offerings to ensure that you have the most current and relevant information at your fingertips.')}</p>

            <p>{t('For those seeking a quiet place to study or collaborate, our library offers a range of comfortable and well-equipped spaces. Whether you need a private study room, a collaborative workspace, or a cozy reading nook, you will find the perfect spot to suit your needs. Our facilities are designed to provide a conducive environment for concentration, creativity, and collaboration.')}</p>
        </div>
        </div>
    );
}

export {HomeText}
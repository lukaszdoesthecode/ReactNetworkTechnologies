import React from 'react';
import './ErrorPage.css'; // Make sure to import the CSS file

export default function ErrorPage() {
    return (
        <div className='error-container'>
            <div className='error-pic'>
                <img src='/error_pic.png' alt='error' />
            </div>
            <div className='error-text'>
                <h1>Whoopsie doopsie</h1>
                <h2>I think you really do not have access for this page 🤨</h2>
                <h3>Or maybe the page does not exist, whatever :|</h3>
            </div>
        </div>
    );
}

export { ErrorPage };

import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-wrapper'>
            <h1>Welcome To Blog & Answer of Some Questions</h1>
            <div className="blogs">
                <div className="blog-card">
                    <h2>How does Context Api works?</h2>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on</p>
                </div>
                <div className="blog-card">
                    <h2>What is the porpose of using React Router?</h2>
                    <p>React Router is a state container for the current location , or URL. It keeps track of the location and renders different s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
                </div>
                <div className="blog-card">
                    <h2>What is useHref and how does it work?</h2>
                    <p>The href attribute specifies the URL of the page the link goes to. If the href attribute is not present, the tag will not be a hyperlink. Tip: You can use href="#top" or href="" to link to the top of the current page!</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
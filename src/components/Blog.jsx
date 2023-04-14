import React from 'react';
import Banner from './Banner';

const Blog = () => {
    return (
        <>
            <Banner>Question & Answer</Banner>
            <div className="my-container my-20 text-gray-500 font-medium text-lg">
            <h4 className='text-2xl font-bold text-black mt-5'>When should you use context API?</h4>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            <h4 className='text-2xl font-bold text-black mt-5'>What is a custom hook?</h4>
            <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
            <h4 className='text-2xl font-bold text-black mt-5'>What is useRef?</h4>
            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
            <br />
            The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </p>
            <h4 className='text-2xl font-bold text-black mt-5'> What is useMemo?</h4>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
            </div>
        </>
    );
};

export default Blog;
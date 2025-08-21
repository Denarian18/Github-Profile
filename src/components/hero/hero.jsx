import React, { useState, useEffect } from 'react';
import githubLogo from '../img/github-seeklogo.png';




function Hero({ setSelectedUser }) {

        const [input, setInput] = useState('');
const [suggestions, setSuggestions] = useState([]);

const handleInputChange = (e) => {
    setInput(e.target.value);
};

useEffect(() => {
    if (!input || input.length === 0) {
        setSuggestions([]);
        return;
    }
    fetch(`https://api.github.com/search/users?q=${input}`)
    
    .then(res => res.json())
    .then(data => setSuggestions(data.items || []));
}, [input]);






    return (
        <div className="relative w-ful pt-15 mt-0 h-65 text-white rounded-t-lg bg-[url(./components/img/4edf645552f579fa37ea8197bdcb7afd.jpg)] bg-cover bg-no-repeat">
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center p-6 gap-2 w-full">
                <div className="relative w-80">
                    <input className='bg-black/60 border-2 border-gray-400 w-full text-white placeholder-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition' type="search" name="" id="" placeholder='github' value={input} onChange={handleInputChange}/>
                    {suggestions.length > 0 && (
                        <ul className="absolute w-full top-full left-0 bg-gray-900 rounded-b-lg shadow-lg z-20">
                            {suggestions.map(s => (
                                <li key={s.id} onClick={() => {
                                    setInput(s.login);
                                    setSelectedUser && setSelectedUser(s.login);
                                }}
                                    className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
                                >
                                    {s.login}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='text-gray-400 text-xs mt-1'>Search for a GitHub user</div>
                { /* <button className='bg-purple-400 border-2 rounded-lg p-2 border-purple-400 hover:bg-purple-500 text-white transition-colors duration-200'>Search</button> */}
            </div>
        
            <div className='mr-0   flex flex-col items-center  w-full rounded-lg text-center z-10'>
        <div className='bg-gray-800 w-80 h-15 items-left rounded-lg '>
            <div className='flex flex-row items-center justify-left pl-1 pt-1'>
                <img className='rounded-lg 'src={githubLogo} alt="GitHub Logo" width="50" height="50" />
                <div className='m-2  text-left'>
                    <h2 className='ml-0 text-white text-sm'>GitHub</h2>
                    <p className='ml-0 text-xs'>How people build software</p>
                </div>
            </div>
        </div>
    </div>


        </div>
    )
}

export default Hero;
import React from 'react';
import githubLogo from '../img/github-seeklogo.png';

function Header({ followers, following, location }) {
    return(
        <div className='bg-gray-800 w-full h-max flex flex-wrap items-center pl-2 pr-2 py-2 sm:pl-5 sm:pr-5 sm:py-0'>
            <div className='w-35 sm:w-32 flex-none h-30 sm:h-20 -mb-4 sm:mb-0 relative z-20'>
             
                <img src={githubLogo} alt='github' className='border-2 border-gray-800 rounded-lg w-16 h-16 sm:w-24 sm:h-24 object-contain mx-auto drop-shadow-lg' style={{marginTop: '-1.5rem'}} />
                       <h2 className='mt-3 ml-5 text-white text-sm'>GitHub</h2>
                <p className='ml-5 text-xs  text-gray-400'>How people build software</p>
            </div>
             

            <div className='w-32 sm:w-32 flex-initial h-8 sm:h-10 rounded-lg bg-gray-900 mt-1 ml-2 sm:ml-6 text-gray-400 flex items-center justify-between p-3 text-xs sm:text-xs'>
                <span>Followers   |</span>
                <span className='ml-2 font-semibold text-white'>{followers !== null ? followers : '--'}</span>
            </div>
            <div className='w-32 sm:w-32 flex-initial h-8 sm:h-10 rounded-lg bg-gray-900 mt-1 ml-2 sm:ml-6 text-gray-400 flex items-center justify-between p-3 text-xs sm:text-xs'>
                <span>Following   |</span>
                <span className='ml-2 font-semibold text-white'>{following !== null ? following : '--'}</span>
            </div>
            <div className='w-64 sm:w-64 flex-initial h-8 sm:h-10 rounded-lg bg-gray-900 mt-1 ml-2 sm:ml-6 text-gray-400 flex items-center justify-between p-3 text-xs sm:text-xs'>
                <span>Location   |</span>
                <span className='ml-2 font-semibold text-white'>{location !== null ? location : '--'}</span>
            </div>
              
                
        </div>
        
    );
}

export default Header;
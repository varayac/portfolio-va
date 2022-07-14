import Heart from './Heart'

const AboutMe = () => {
  return (
    <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full '>
      <div className='flex flex-wrap md:flex-nowrap'>
        <div className='flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36'>
          <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left '>
            {"Hi, i'm Víctor,"}
            <br />I love creating things.
          </h1>
          <div className='w-full flex justify-center md:justify-start '>
            <button className='px-8 py-4 bg-purple-700 text-white font-bold mt-12 flex items-center space-x-3'>
              <div>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                  <path
                    fillRule='evenodd'
                    d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span>Look my work.</span>
            </button>
          </div>
        </div>
        IMG
      </div>
    </div>
  )
}

export default AboutMe

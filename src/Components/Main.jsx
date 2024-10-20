import MainImage from '/images/illustration-devices.svg';


function Main(){
    return(
        <div className="flex flex-col md:flex-row-reverse relative overflow-hidden">
            <div className='w-[150%] md:w-[70%] relative -right-[5%] md:-right-[10%] overflow-hidden'>
                <img src={MainImage} alt="main image" className='w-full' />
            </div>


            <div className='mt-8 md:w-[30%] pr-8 md:pr-0'>
                <div>
                    <p className='mb-2'>
                        <span className='text-white bg-black rounded-md px-1'>NEW</span>
                        <span className='ml-1 font-mono tracking-widest opacity-50'> MONOGRAPH DASHBOARD</span>
                    </p>
                    
                    <h1 className='text-3xl font-bold mb-4'>POWERFUL INSIGHTS INTO YOUR TEAMS</h1>

                    <p className='md:pr-32'>
                        Project planning and time tracking for agile teams
                    </p>
                </div>
                <div className='mt-8 md:mt-24 flex'>
                    <button className='bg-red-400 px-3 py-2 rounded-lg'>
                        SCHEDULE A DEMO
                    </button>
                    <p className='self-center font-mono tracking-wider opacity-50 ml-4'>TO SEE A PREVIEW</p>
                </div>
            </div>
        </div>
    )
}

export default Main;
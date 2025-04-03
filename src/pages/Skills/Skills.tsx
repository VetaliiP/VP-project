import { FC } from 'react';

export const Skills: FC = () => {


    return (
        <section className="container ">
            <div className='wrapper'>
                <div className='flex sm:flex-row  sm:justify-between sm:items-stretch flex-col-reverse items-center sm:mb-0 mb-16'>
                    <div className='flex flex-col justify-between items-center flex-1'>

                        <div className='flex flex-col self-start font-bebas justify-between flex-1 sm:gap-0 gap-4'>
                            <span className='flex flex-row '>
                                <div className='text_skills_left'>
                                    <p className='whitespace-nowrap'>Field of Expertise:</p>
                                </div>
                                <div className=' text_skills_right'>
                                    <p className='whitespace-nowrap'>Web Development </p>
                                </div>
                            </span>
                            <span className='flex flex-row'>
                                <div className=' text_skills_left'>Name:</div>
                                <div className=' text_skills_right'>Vitalii</div>
                            </span>
                            <span className='flex flex-row'>
                                <div className=' text_skills_left'>Surname:</div>
                                <div className=' text_skills_right'>Pererva</div>
                            </span>
                            <span className='flex flex-row'>
                                <div className=' text_skills_left'>Age:</div>
                                <div className=' text_skills_right'>32</div>
                            </span>
                        </div>
                    </div>
                    <div className='photo_block flex flex-col justify-between items-center w-[200px] '>
                        <div className='sm:size-full size-[200px] bg-amber-50 rounded-2xl text-[#242424] flex justify-center items-center flex-1 '>
                            <img src='/Photo.jpg' alt='Фото' className='max-w-full h-auto object-cover rounded-[10px] border-2 border-[#242424] dark:border-amber-50' />
                        </div>
                        <div className='flex flex-row justify-around py-4 w-full flex-0 cursor-pointer text-[#242424] dark:text-amber-50 '>
                            <div onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=pvty36@gmail.com&su=Трудоустройство&body=Привет, это компания ', '_blank')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-fill hover:text-[#5A3FC0]" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </div>
                            <div>
                                <a href="https://github.com/VetaliiP?tab=overview&from=2025-03-01&to=2025-03-31" target="_blank" rel="noopener noreferrer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github hover:text-[#5A3FC0]" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </a>

                            </div>
                            <div>
                                <a href="https://t.me/VetaliiP" target="_blank" rel="noopener noreferrer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telegram hover:text-[#5A3FC0]" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/VetaliiPererva" target="_blank" rel="noopener noreferrer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook hover:text-[#5A3FC0]" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/vitaliipererva" target="_blank" rel="noopener noreferrer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin hover:text-[#5A3FC0]" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skills_page flex flex-col sm:self-start items-start'>
                        <div className='text_block self-start pt-6 pb-2 '><p className='sm:text-4xl text-3xl dark:text-amber-50 text-[#242424]'><span className='text-[#5A3FC0]'>@</span>My_Stack</p></div>
                        <div className='font-bebas text-base select-none tracking-widest`'>
                            <p className='tracking-wider underline dark:text-amber-50 text-[#242424]'>Frameworks</p>
                        </div>

                    </div>
                    <div className={`skills_blocks flex flex-row flex-wrap justify-start items-center gap-4 py-2 `}>
                        <div className='skills_block'>
                            <span>React</span>
                        </div>
                        <div className='skills_block'>
                            Vite
                        </div>
                        <div className='skills_block'>
                            TileWind
                        </div>
                        <div className='skills_block'>
                            Material UI
                        </div>
                        <div className='skills_block'>
                            Strapi
                        </div>
                    </div>
                    <div className={` cursor-pointer font-bebas text-xl select-none`}>

                        <p className='tracking-wider underline dark:text-amber-50 text-[#242424]'>Additional tools</p>

                    </div>
                    <div className={`skills_blocks flex flex-row flex-wrap justify-start items-center gap-4 py-2 `}>
                        <div className='skills_block'>
                            Fetch API
                        </div>
                        <div className='skills_block'>
                            Axios
                        </div>
                        <div className='skills_block'>
                            GraphQL
                        </div>
                        <div className='skills_block'>
                            async/await
                        </div>
                        <div className='skills_block'>
                            Redux
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-4 sm:items-start'>
                    <div className='text_block self-start'><p className='sm:text-4xl text-3xl dark:text-amber-50 text-[#242424]'><span className='text-[#5A3FC0]'>@</span>programming_languages</p></div>
                    <div className={`skills_blocks flex flex-row flex-wrap justify-start items-center gap-4 py-2`}>
                        <div className='skills_block'>
                            <span>CSS (SASS)</span>
                            {/* <span>star</span> */}
                        </div>
                        <div className='skills_block'>
                            <span>Javascript</span>
                            {/* <span>star</span> */}
                        </div>
                        <div className='skills_block'>
                            Typescript
                        </div>
                        <div className='skills_block'>
                            Python
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
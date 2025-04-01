import { FC, useState } from 'react';

export const Skills: FC = () => {

    const [selectedSkill, setSelectedSkill] = useState("using");

    return (
        <section className="container ">
            <div className='wrapper'>
                <div className='flex sm:flex-row  sm:justify-between sm:items-stretch flex-col-reverse items-center'>
                    <div className='flex flex-col justify-between items-center flex-1'>

                        <div className='flex flex-col self-start py-4 font-work gap-1 '>
                            <span className='flex flex-row '>
                                <div className='border-3 border-amber-50 rounded-l-[10px] px-2 py-4 self-center flex-1 text-left'>
                                    Field of Expertise:
                                </div>
                                <div className=' bg-amber-50 text-[#242424] rounded-r-[10px] px-2 pt-4  text-2xl '>
                                    Web Development
                                </div>
                            </span>
                            <span className='flex flex-row'>
                                <div className='bg-amber-50 text-[#242424] rounded-l-[10px] pl-2 py-4 self-end flex-1 text-left'>Name:</div>
                                <div className='border-3 border-amber-50 rounded-r-[10px] px-2 py-2 text-2xl  text-right'>Vitalii</div>
                            </span>
                            <span className='flex flex-row'>
                                <div className='bg-amber-50 text-[#242424] rounded-l-[10px] pl-2 py-4 self-end flex-1 text-left'>Surname:</div>
                                <div className='border-3 border-amber-50 rounded-r-[10px] px-2 py-2 text-2xl  text-right'>Pererva</div>
                            </span>
                            <span className='flex flex-row'>
                                <div className='bg-amber-50 text-[#242424] rounded-l-[10px] pl-2 py-4 self-end flex-1 text-left'>Age:</div>
                                <div className='border-3 border-amber-50 rounded-r-[10px] px-2 py-2 text-2xl text-right'>32</div>
                            </span>
                            <span className='flex flex-row'>
                                <div className='bg-amber-50 text-[#242424] rounded-l-[10px] pl-2 py-4 self-end flex-1 text-left'>Mail:</div>
                                <div className='border-3 border-amber-50 rounded-r-[10px] px-2 py-2 text-2xl text-right'>pvty36@gmail.com</div>
                            </span>
                        </div>

                        <div className='skills_page flex sm:flex-row flex-col gap-4 py-4 sm:self-start items-center'>
                            <div className='text_block sm:self-start self-center '><p className='sm:text-4xl text-3xl'>@My_Stack</p></div>
                            <div className='flex flex-row gap-4'>
                                <div >
                                    <input type="radio" name="page_skills" value="using" id="using" className='hidden'
                                        onChange={(e) => setSelectedSkill(e.target.value)}
                                    />
                                    <label htmlFor="using"
                                        className={` ${(selectedSkill === "using") ? 'active_button' : 'not_active_button'} cursor-pointer font-bebas text-xl select-none`}
                                    >
                                        Frameworks
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="page_skills" value="practiced" id="practiced" className='hidden'
                                        onChange={(e) => setSelectedSkill(e.target.value)}
                                    />
                                    <label htmlFor="practiced"
                                        className={` ${(selectedSkill === "practiced") ? 'active_button' : 'not_active_button'} cursor-pointer font-bebas text-xl select-none`}
                                    >
                                        Additional_tools
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='photo_block flex flex-col justify-between items-center sm:w-[250px] w-full'>
                        <div className='sm:size-full size-[250px] bg-amber-50 rounded-2xl text-[#242424] flex justify-center items-center flex-3'>
                            #Photo
                        </div>
                        <div className='flex flex-row justify-around py-4 w-full flex-1 '>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex-1 w-full flex flex-row justify-center items-center'>
                            <button
                                className="w-full bg-amber-50 py-2 px-4 rounded-[10px] text-[#242424] font-bebas text-3xl flex flex-row justify-center items-center cursor-pointer hover:bg-[#5A3FC0] transition-all duration-300"
                                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=pvty36@gmail.com&su=Трудоустройство&body=Привет, это компания ', '_blank')}
                            >
                                <span>Send me</span>
                                <span className='ml-2 pb-1 pt-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`skills_blocks flex flex-row flex-wrap justify-start items-center gap-4 p-4 ${(selectedSkill === "using") ? ' opacity-100 ' : 'hidden opacity-0'} transition-all duration-300`}>
                        <div className='skills_block'>
                            <span>React</span>
                            {/* <span>star</span> */}
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
                    <div className={`skills_blocks flex flex-row flex-wrap sm:justify-start justify-end items-center gap-4 p-4 ${(selectedSkill === "practiced") ? 'opacity-100 ' : 'hidden opacity-0'} transition-all duration-300`}>
                        <div className='skills_block'>
                            <span>Bootstrap </span>
                            {/* <span>star</span> */}
                        </div>
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
                    </div>
                </div>
                <div className='flex flex-col p-4 sm:items-start'>
                    <div className='text_block sm:self-start self-center  mb-4'><p className='sm:text-4xl text-3xl'>@programming_languages</p></div>
                    <div className={`skills_blocks flex flex-row flex-wrap justify-start items-center gap-4 sm:p-4`}>
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
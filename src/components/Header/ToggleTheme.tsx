import { FC, useState, useEffect } from "react";

export const ToggleTheme: FC = () => {

    const getInitialTheme = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) return storedTheme;
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }
        return "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div
            className='border-[#242424] border-2  bg-[#242424] text-amber-50 font-bebas rounded-[10px] text-[24px] ml-8 p-3 cursor-pointer flex justify-center items-center w-[60px]
             dark:text-[#242424] dark:border-[#242424] dark:bg-amber-50 '
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "Dark" : "Light"}
        </div>
    )
}
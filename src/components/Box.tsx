// import { useContext } from "react";
// import { ThemeContext } from "../App";

// const Box = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     return (
//         <div
//             className="boxContainer"
//             style={{
//                 backgroundColor: theme === "dark" ? "rgb(40,40,40)" : "white",
//                 color: theme === "dark" ? "white" : "rgb(40,40,40)",
//             }}
//         >
//             <h1>Box 1</h1>
//             <button onClick={toggleTheme}>Change Theme</button>
//         </div>
//     );
// };

// export default Box;

// type propsType = {
//     heading?: string;
//     func1: (message: string) => void;
// };
// const Box = ({ heading = "Ujjwal Jamuar", func1 }: propsType) => {
//     func1("hi there")
//     return (
//         <div>
//             <h1>{heading}</h1>
//         </div>
//     );
// };

// export default Box;

// const Box = ({heading}: {heading:string}) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//         </div>
//     );
// };

// export default Box;

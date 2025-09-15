// type Color = "red" | "green" | "green"

import type { JSX } from "react";


// type ButtonProps = {
//     backgroundColor?: Color;
//     textColor: Color;
//     fontSize: number;
//     pillShape?: boolean;
//     // padding: number[];
//     padding: [number, number, number, number]; // tuple for specificity
// }

// type ButtonProps = {
//     style: {
//         backgroundColor: string;
//         fontSize: number;
//         textColor: string;
//     }
// }

// type ButtonProps = {
//     style: React.CSSProperties // accept CSS properties
// }

// type ButtonProps = {
       // allows to pass an object with string key and number values
//     borderRadius: Record<string, number> 
// }

// type ButtonProps = {
  // onClick: () => void;
  // onClick: (val: string) => number;
// }

type ButtonProps = {
  // children: React.ReactNode; // any type of children // elements + other data types
  children: JSX.Element; // restricts to only elements
}

export default function Button({
    // backgroundColor,
    // textColor,
    // fontSize,
    // pillShape,
    // padding

    // style

    // onClick

  children
}: ButtonProps) {
  return (
    <div>
      <button 
        // style = {{
        //     backgroundColor,
        //     color: textColor,
        //     fontSize,
        //     p
        // }}
        // style={style}
        // onClick ={onClick}
      >
        {children}
      </button>
    </div>
  )
}

// type Color = "red" | "green" | "green"

import { useEffect, useRef, useState, type ComponentProps, type ComponentPropsWithoutRef, type ComponentPropsWithRef } from "react";

// import type { JSX } from "react";

import { type Color } from "../lib/types";


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

// type ButtonProps = {
//   children: React.ReactNode; // any type of children // elements + other data types
   // children: JSX.Element; // restricts to only elements
// }

// type ButtonProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>; // setState
// }

// if you have default values, no need to specify the type.

// type URL = string; // can describe anything (default)
// const url : URL = "https://google.com"

// interface URL { // can only describe objects 
//   url: string;
// }
// const url: URL = {
//   url: "https://google.com",
// }

// type ButtonProps = ComponentProps<"button">; // accepts all props as button
// type ButtonProps = ComponentPropsWithRef<"button">; // accept ref
// type ButtonProps = ComponentPropsWithoutRef<"button">; // no ref


// intersecting with `type` alias

// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green"
// }

// type SuperButtonProps = ButtonProps & {
//   size: "md" | "lg"
// }

// extending with `interface` alias

// interface ButtonProps {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green"
// }

// interface SuperButtonProps extends ButtonProps {
//   size: "md" | "lg"
// }


// type User = {
//   name: string;
//   age: number;
// }

const buttonTextOptions = [
  "Click me!",
  "Click me again!",
  "Click me one more time!"
] as const; // makes it readonly

type User = {
  sessionId: string;
  name: string;
}

type Guest = Omit<User, "name">;

type ButtonColor = "red" | "blue" | "green"

// Generics

// const convertToArray = <T,>(value: T): T[] => {
//   return [value]
// }

function convertToArray<T>(value: T): T[] {
  return [value] 
}

convertToArray(5)
convertToArray("Hello")

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
  color: Color
}

export default function Button<T>({
    // backgroundColor,
    // textColor,
    // fontSize,
    // pillShape,
    // padding

    // style

    // onClick

  // children

  // setCount

  countValue,
  countHistory
}: ButtonProps<T>) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(event)

  // const [count, setCount] = useState(0); // typscript infers the datatype
  // const [count, setCount] = useState<number>(0); // to be specific
  // const [isPrimary, setIsPrimary] = useState(true);
  const [user, setUser] = useState<User|null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor; 
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data: unknown) => {
      console.log(data);
      // data.name.toUpperCase();

      // run it through Zod
    })
  }, []);

  return (
    <div>
      <>{countValue}</>
      <>{countHistory}</>
      <button 
        // style = {{
        //     backgroundColor,
        //     color: textColor,
        //     fontSize,
        //     p
        // }}
        // style={style}
        // onClick ={onClick}

        // onClick={(event) => { // hover over event to know the type
        //   console.log("Clicked!")
        // }}

        onClick={handleClick}
        ref = {ref}
      >
        {/* {children} */}
        Click me!
      </button>
    </div>
  )
}

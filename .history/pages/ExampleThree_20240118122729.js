import {useEffect, useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

   const [number, setNumber] = useState(0);

   const colors = ["red", "orange", "yellow", "green", "blue" , "violet"];

   useEffect (() => {
        if (number > colors.length - 1) {}
        console.log("changing number value: " + colors[number]);
    }, [number])

    return (
        <>
        <Header/>
        
         <h1>Example 3</h1>
        <button 
            style={{backgroundColor: colors[number]}}
            onClick={() => setNumber(number + 1)}>
                Increment Number
        </button>
        <div>
            {number}
        </div>

        <Footer/> 
        </>
    )
}
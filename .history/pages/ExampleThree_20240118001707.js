import {useEffect, useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

   const [number, setNumber] = useState(0);

   const colors = ["red", "orange", "yellow"]

    return (
        <>
        <Header/>
        <main>
            <h1>Example 3</h1>
        </main>

        <Footer/> 
        </>
    )
}
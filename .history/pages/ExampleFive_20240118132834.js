import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// setting up a counter
// after each second increases by 1
// display number on screen as it increases
// no button needed as it will update number automatically

export default function ExampleFive () {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => [
            setCount(count + 1)
        ], 1000)

        return () => clearInterval(interval)
    }, [count])

    return (
        <>
        <Header/>
        <main>
            <div style={{
                display: "flex",
                margin: "auto",
                textAlign: "center"
            }}>
                <h1>Number counter</h1>
                <h3>Example using setInterval</h3>
            </div>
        </main>
        <Footer/>
        
        </>
    )
}
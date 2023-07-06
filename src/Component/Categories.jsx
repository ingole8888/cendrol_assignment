import React, { useEffect, useState } from 'react'
import "./categories.css"
import Modal from "./modal"

const Categories = ({ categories }) => {
    const [selected, setselected] = useState("")
    const [joke, setjoke] = useState("")
    const [id, setid] = useState(null)
    const [close, setclose] = useState(false)
    const [loding, setloding] = useState(false)

    const fetchjoke = async () => {
        setloding(true)
        const fetchdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${selected}`)
        const jsondata = await fetchdata.json()
        setloding(false)
        const jokes = jsondata.value
        setjoke(jokes);
    }


    useEffect(() => {
        if (selected) {
            fetchjoke()
        }
    }, [selected])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='mainBox'>
                {categories.map((categorie, index) => (

                    <div
                        key={index}
                        onClick={() => {
                            setselected(categorie)
                            setid(index)
                            setclose(false)
                            setIsModalOpen(true)
                        }}

                        className='subBox'
                    >
                        <h1 style={{ color: "#1E3A8A", marginBottom: "0rem", }} >{categorie}</h1>
                        <p1 style={{ color: "#E7ABB0" }}>Unlimited Jokes On {categorie}</p1>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selected && <div className='myModal'>
                <h1 > <span> {selected} </span></h1>
                <div>
                    {loding ? <div ></div>
                        : <p >" {joke} "</p>
                    }
                    <button style={{backgroundColor:"#1D4ED8", padding:"1rem 10rem 1rem 10rem", borderRadius:"1rem"}} onClick={() => { fetchjoke() }}>Next joke</button>
                </div>

            </div>}
            </Modal>
        </>
    )
}

export default Categories
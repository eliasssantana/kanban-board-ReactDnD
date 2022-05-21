import React, {useState} from 'react'
import {Picture} from './Picture'
import {useDrop} from "react-dnd"
import "../App.css"

const PictureList = [
    {
        id: 1, 
        url: "https://newgameplus.com.br/wp-content/uploads/2020/07/499733-horizon-zero-dawn-playstation-4-front-cover.jpg"
    },
    {
        id: 2, 
        url: "https://www.bhgames.com.br/imagem/index/15893817/G/11719_1_20170613175316.jpg"
    },
    {
        id: 3, 
        url: "https://www.menosfios.com/wp-content/uploads/2013/09/Capa_Destiny_PS4.jpg"
    }
]

export default function DradDrop() {

    const [board, setBoard] = useState([
    ])

    const addImageTotheBoard = (id) =>{
        const pictureList = PictureList.filter(i => i.id === id)
        console.log(pictureList)
        setBoard(board => [...board, pictureList[0]])
    }

    const [{isOver}, Drop] = useDrop(() =>({
        accept: "image",
        drop:(item) => addImageTotheBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    

    return (
        <>
            <div className="Pictures">{PictureList.map(i => (
                <Picture id={i.id} url={i.url}/>
            ))}</div>
            <div ref={Drop} className="Board" style={{backgroundColor: isOver? "#fff": ""}}>
                {board.map(i => (
                    <Picture id={i.id} url={i.url}/>
                ))}
            </div>
        </> 
    )
}

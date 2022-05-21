import React from 'react'
import {useDrag} from "react-dnd"

export const Picture = ({id,url}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id},
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging()
        })
    }))
    const style ={
        border: isDragging? ".2rem solid red": "0rem"
    }
    return <img ref={drag} src={url} alt={id} width="300" style={style}/>
}
    
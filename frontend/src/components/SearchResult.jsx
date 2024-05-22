import React from "react"
import Pokeitem from "./Card"

export default function SearchResult(props) {
    const { searchResult } = props
    console.log('searchResult', searchResult)
    return (
        <>
            <div className="cardContainer">
                <Pokeitem key={searchResult._id} itemName={searchResult.itemName} popularity={searchResult.popularity} durability={searchResult.durability} price={searchResult.price} region={searchResult.region} quantity={searchResult.quantity} />
            </div>
        </>
    )
}
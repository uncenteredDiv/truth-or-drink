import * as React from "react";
import { navigate } from "gatsby"
import { getRandomBetween } from "../utils/getRandomBetween";
import { slugify } from "../utils/slugify";

type PageContext = {
    path: string;
    pageContext: {
        id: number
        question: string
        type: string
        deck: string
        deckCount: number;
    };
}

const Card = ({ pageContext }: PageContext) => {
    const { id, question, type, deck, deckCount } = pageContext;
    const urlSlug = slugify(deck);
    
    const handleRandomClick = () => {
        const nextId = getRandomBetween(1, deckCount, id);
        navigate(`/${urlSlug}/${nextId}`);
    }
    
    const handlePrevClick = () => {
        navigate(`/${urlSlug}/${id - 1}`);
    }
    
    const handleNextClick = () => {
        navigate(`/${urlSlug}/${id + 1}`);
    }
    
    return (
        <>
            <div>Id: {id}</div>
            <div>Question: {question}</div>
            <div>Type: {type}</div>
            <div>Deck: {deck}</div>
            <div>DeckCount: {deckCount}</div>

            <button onClick={handlePrevClick} disabled={id === 1}>Previous Card</button>
            <button onClick={handleRandomClick} disabled={deckCount === 1}>Random Card</button>
            <button onClick={handleNextClick} disabled={id === deckCount}>Next Card</button>
        </>
    )
};

export default Card;
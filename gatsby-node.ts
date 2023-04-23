import { resolve } from "path";
import { GatsbyNode } from "gatsby";

type Card = {
    question: string;
    type: string;
}
export const createPages: GatsbyNode["createPages"] = async ( { _graphql, actions } ) => {
    const { createPage, createRedirect } = actions
    const cardTemplate =  resolve("./src/templates/card.tsx");
    
    const lastCall = require('./src/data/last-call.json');
    const lastCallLength = lastCall.length;
    
    const onTheRocks = require('./src/data/on-the-rocks.json')
    const onTheRocksLength = onTheRocks.length;
    
    lastCall.forEach((card: Card, index: number) => {
        const id = index + 1;
        
        createPage({
            path: `/last-call/${id}`,
            component: cardTemplate,
            context: {
                ...card,
                id,
                deck: 'Last Call',
                deckCount: lastCallLength,
            },
        })
    });
    
    onTheRocks.forEach((card: Card, index: number) => {
        const id = index + 1;
        
        createPage({
            path: `/on-the-rocks/${id}`,
            component: cardTemplate,
            context: {
                ...card,
                id,
                deck: 'On the Rocks',
                deckCount: onTheRocksLength,
            },
        })
    });
}

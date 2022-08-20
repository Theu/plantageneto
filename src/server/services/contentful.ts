import { createClient } from "contentful";

const plantagenetoClient = createClient({
    space: `${process.env.REACT_APP_CONTENTFUL_SPACEID}`,
    accessToken: `${process.env.REACT_APP_CONTENTFUL_KEY}`
});

export const getPlantagenetoContent = async () => {
    const { items } = await plantagenetoClient.getEntries();

    console.log('results :>> ', items);
}

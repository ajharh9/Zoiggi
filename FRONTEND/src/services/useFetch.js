import { Api } from '../services/data';

export const fetchData = async () => {
  try {
    const res = await fetch(Api);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    // const { 
    //   [4]: { card: { card: { gridElements: { infoWithStyle: { restaurants: resCards } } } } },
    //   [0]: { card: { card: { imageGridCards: { info: onMindData }, header: { title: onMindTitle } } } },
    //   [1]: { card: { card: { header: { title: cardHead } } } }
    // } = data.data.cards;
    const resCards = data;
    const onMindData = [];
    const cardHead = "Top restaurant chains in Patna";
    const onMindTitle = "What's on your mind?";
    // console.log(resCards)
    return { resCards, onMindData, cardHead, onMindTitle }; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};
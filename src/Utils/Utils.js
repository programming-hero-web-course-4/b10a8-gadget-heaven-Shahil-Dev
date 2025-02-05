import toast from "react-hot-toast";

//add allData to local storage
const addAllData = () => {
    const all = localStorage.getItem('favorite');
    if (all) {
        const favorite = JSON.parse(all)
        console.log(favorite);
        return favorite;  
    }  
    else {
        console.log('no data');
        return [];
    }
}

//add card to local storage

const addFavorite = news => {
    const favorite = addAllData();
    const isExist = favorite.find(fav => fav.product_id === news.product_id);
    if (isExist) {
        toast.error('This product is already in your favorite list!');
        return;
    }

    favorite.push(news);
    localStorage.setItem('favorite', JSON.stringify(favorite));
    toast.success('Successfully added!');
}


//add allDataCard to local storage


const addAllDataCard = () => {
    const allCard = localStorage.getItem('favorite');
    if (allCard) {
        const favoriteCard = JSON.parse(allCard)
        console.log(favoriteCard);
        return favoriteCard;
    }
    else {
        console.log('no data');
        return [];
    }
}







const addCard = news => {
    const favoriteCard = addAllData();
    const itExist = favoriteCard.find(ladon => ladon.product_id === news.product_id);
    if (itExist) {
        toast.error('This product is already in your Card list!');
        return;
    }

    favoriteCard.push(news);
    localStorage.setItem('favoriteCard', JSON.stringify(favoriteCard));
    toast.success('Successfully added!');
}






export { addFavorite, addAllDataCard, addAllData, addCard };
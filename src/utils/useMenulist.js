import { useState, useEffect } from 'react'

const useMenulist = (id) => {
    console.log("custom hook called");
    const [menuList, setMenuList] = useState([]);
    const MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    const getMenu = async () => {
        try {
            const menuData = await fetch(MENU_URL);
            const json = await menuData.json();
            console.log("menuData", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
            setMenuList(json?.data?.cards);
        }
        catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getMenu();
    }, [])

    return menuList;
}

export default useMenulist;



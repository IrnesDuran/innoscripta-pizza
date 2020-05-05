export const populateDB = async (order,total,name,address,email,phone) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            order:order,
            total:total,
            name:name,
            address: address,
            email:email,
            phone:phone
        })
    };
    try {
        const fetchResponse = await fetch("https://innoscripta-pizza-backend.herokuapp.com/api/order", settings);
        const data = await fetchResponse.json();
        console.log(data)
    } catch (e) {
        return e;
    }    

};



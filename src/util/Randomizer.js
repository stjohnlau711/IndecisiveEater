const Randomizer = {
    randomize(businesses){
        let randomIndices = [];
        if(businesses.length >= 10){ //returns an array of 10 or less businesses
            for(let i = 0; i < 10; i++){
                let newIndex = (Math.floor(Math.random() * businesses.length));
                randomIndices.push(newIndex);
            }
        } else {
            for(let i = 0; i < businesses.length; i++){
                let newIndex = (Math.floor(Math.random() * businesses.length));
                randomIndices.push(newIndex);
            }
        }

        let indices = Array.from(new Set(randomIndices)); //accounts for duplicates but shortens list

        let tempBusinesses = [];
        for(let i = 0; i < indices.length; i++){
            tempBusinesses.push(businesses[indices[i]]);
            //push businesses randomly from api data to new array
        }
        return tempBusinesses;
    }
}

export default Randomizer
const apiKey = 'gIS2bky6C22GUR0ck0u77cEMP_7N4miNpZgy5bs1uUzHpIUZE_jT4tyMw4w34QCAz8IbAwvuB2vIrSLxSNPaTRyxrZofAztqSwkr2jmRz_IyPHvwnhw-mFurFmo3X3Yx';

const open = true; //checks for open restaurants
const noOfBusinesses = 50; //max amount of restaurants from yelp API call
const Yelp = {
  search(term, location, price, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&price=${price}&sort_by=${sortBy}&open_now=${open}&limit=${noOfBusinesses}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          url: business.url
        }));
      }
    });
  }
};

export default Yelp;

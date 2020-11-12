function mungeLocation(location) {
    return {
        formatted_query: location[0].display_name,
        latitude: location[0].lat,
        longitude: location[0].lon
    };
}

function mungeWeather(location) {
    return location.data.map(item => {
        return {
            forecast: item.weather.description,
            time: item.datetime,
        };
    }).slice(0,8);
}



function mungeTrail(trail) {
    console.log(trail.trails);
    return trail.trails.map(item => {
        return {
            name: item.name,
            location: item.location,
            length: item.length,
            stars: item.stars,
            star_votes:item.starVotes,
            summary: item.summary,
            trail_url: item.url,
            conditions: item.conditionStatus,
            condition_date: item.conditionDate.split(' ')[0],
            condition_time: item.conditionDate.split(' ')[1],
         };
    }).slice(0, 10);
}

function mungeYelp(yelp) {

    return yelp.businesses.map(oneBusiness => {
        return { 
            name: oneBusiness.name,
            image_url: oneBusiness.image_url,
            price: oneBusiness.price,
            rating: oneBusiness.rating,
            url: oneBusiness.url
            

        }
    }).slice(0, 20);
}


module.exports = {
    mungeLocation, mungeWeather, mungeTrail, mungeYelp
};
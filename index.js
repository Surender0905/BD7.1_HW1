const connectDB = require("./db/db");
const fs = require("fs");
const Movie = require("./models/movie.model");
const User = require("./models/user.model");
const Book = require("./models/book.model");
const Restaurant = require("./models/resturant.model");
const Hotel = require("./models/hotel.model");

//read movies.json file
// const data = fs.readFileSync("./movies.json");
// const movies = JSON.parse(data);

//read users.json file
// const data = fs.readFileSync("./users.json");
// const users = JSON.parse(data);

//read books.json file
const data = fs.readFileSync("./books.json"); ///this return buffer data
const books = JSON.parse(data);
// console.log(data, books, "check");

// //insert movies into database
// function seedMovies() {
//     try {
//         movies.forEach((movie) => {
//             const newMovie = new Movie(movie);
//             console.log("title: ", newMovie.title);
//             newMovie.save();
//         });
//     } catch (error) {
//         console.log("seed error", error);
//     }
// }

// //insert users into database
// function seedUsers() {
//     try {
//         users.forEach((user) => {
//             const newUser = new User(user);
//             console.log("username: ", newUser.username);
//             newUser.save();
//         });
//     } catch (error) {
//         console.log("seed error", error);
//     }
// }

//insert books into database
// function seedBooks() {
//     try {
//         books.forEach((book) => {
//             const newBook = new Book(book);
//             console.log("title: ", newBook.title);
//             newBook.save();
//         });
//     } catch (error) {
//         console.log("seed error", error);
//     }
// }

// seedMovies();

// seedUsers();

// seedBooks();

// const newMovies = {
//     title: "new movies",
//     releaseYear: 1995,
//     genre: ["Romance", "Drama"],
//     director: "Aditya Chopra",
//     actors: ["Shah Rukh Khan", "Kajol"],
//     language: "Hindi",
//     country: "India",
//     rating: 9.1,
//     plot: "A young man and woman fall in love on a Europe trip.",
//     awards: "Multiple Filmfare Awards",
//     posterUrl: "https://example.com/poster1.jpg",
//     trailerUrl: "https://example.com/trailer1.mp4",
// };

// async function createMovies(newMovies) {
//     try {
//         const movies = new Movie(newMovies);
//         const savedMovies = await movies.save();
//         console.log(savedMovies);
//     } catch (error) {
//         console.log("Error saving movies");
//     }
// }

//read all movies from database
async function readMovies() {
    try {
        const movies = await Movie.find();
        console.log(movies);
    } catch (error) {
        console.log("Error reading movies");
    }
}

//to get a movie by a director name

// async function getMoviesByDirector(directorName) {
//     try {
//         const movies = await Movie.find({ director: directorName });
//         console.log(movies);
//     } catch (error) {
//         console.log("Error reading movies");
//     }
// }

// const newRestaurant = {
//     name: "Yo China",
//     cuisine: ["Chinese", "Italian"],
//     location: "MG Road, Bangalore",
//     rating: 3.9,
//     website: "https://yo-example.com",
//     phoneNumber: "+1288997392",
//     openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
//     priceRange: "$$$",
//     reservationsNeeded: true,
//     isDeliveryAvailable: false,
//     menuUrl: "https://yo-example.com/menu",
//     photos: [
//         "https://example.com/yo-photo1.jpg",
//         "https://example.com/yo-photo2.jpg",
//         "https://example.com/yo-photo3.jpg",
//     ],
// };

// async function createRestaurants(newRestaurants) {
//     try {
//         const restaurants = new Restaurant(newRestaurants);
//         const savedRestaurants = await restaurants.save();
//         console.log(savedRestaurants);
//     } catch (error) {
//         console.log("Error saving restaurants" + error.message);
//     }
// }

// // createMovies(newMovies);

// createRestaurants(newRestaurant);

//read all restaurants from database
// async function readRestaurants() {
//     try {
//         const restaurants = await Restaurant.find();
//         console.log(restaurants);
//     } catch (error) {
//         console.log("Error reading restaurants");
//     }
// }

//get restaurant by name

// async function getRestaurantsByName(restaurantName) {
//     try {
//         const restaurants = await Restaurant.find({ name: restaurantName });
//         console.log(restaurants);
//     } catch (error) {
//         console.log("Error reading restaurants");
//     }
// }

//get all restaurant which need reservations

// async function getRestaurantsWithReservations() {
//     try {
//         const restaurants = await Restaurant.find({
//             reservationsNeeded: true,
//         }).exec();
//         console.log(restaurants);
//     } catch (error) {
//         console.log("Error reading restaurants");
//     }
// }

//get all restaurants which deliver

// async function getRestaurantsWithDelivery() {
//     try {
//         const restaurants = await Restaurant.find({
//             isDeliveryAvailable: true,
//         }).exec();
//         console.log(restaurants);
//     } catch (error) {
//         console.log("Error reading restaurants");
//     }
// }

//Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.

//get restaurant by phone number

// async function getRestaurantsByPhoneNumber(phoneNumber) {
//     try {
//         const restaurants = await Restaurant.find({
//             phoneNumber: phoneNumber,
//         }).exec();
//         console.log(restaurants);
//     } catch (error) {
//         console.log("Error reading restaurants");
//     }
// }
//Create a function to read all restaurants by cuisine ('Italian'). Console all the restaurants with Italian cuisine.

//get restaurants by cuisine
// async function getRestaurantsByCuisine(cuisine) {
//     try {
//         const restaurants = await Restaurant.find({ cuisine: cuisine });
//         console.log(restaurants);
//     } catch (error) {
//         console.log("Error reading restaurants");
//     }
// }
const newHotel = {
    name: "Sunset Resort",
    category: "Resort",
    location: "12 Main Road, Anytown",
    rating: 4.0,
    website: "https://sunset-example.com",
    phoneNumber: "+1299655890",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    amenities: [
        "Room Service",
        "Horse riding",
        "Boating",
        "Kids Play Area",
        "Bar",
    ],
    priceRange: "$$$$ (61+)",
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: true,
    isSpaAvailable: true,
    isRestaurantAvailable: true,
    photos: [
        "https://example.com/hotel2-photo1.jpg",
        "https://example.com/hotel2-photo2.jpg",
    ],
};

// async function createHotels(newHotels) {
//     try {
//         const hotels = new Hotel(newHotels);
//         const savedHotels = await hotels.save();
//         console.log(savedHotels);
//     } catch (error) {
//         console.log("Error saving hotels" + error.message);
//     }
// }

// createHotels(newHotel);

// readMovies();

// readRestaurants();

// getRestaurantsByName("Yo China");

// getRestaurantsWithReservations();

// getRestaurantsWithDelivery();

// getRestaurantsByPhoneNumber("+1288997392");

// getRestaurantsByCuisine("Italian");

///---------------------update logic --------------------
async function updateRestaurantById(restaurantId, updatedData) {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            restaurantId, // Find the restaurant by ID
            updatedData, // Update with the new data
            { new: true }, // Return the updated document
        );

        if (updatedRestaurant) {
            console.log("Updated Restaurant:", updatedRestaurant);
        } else {
            console.log("Restaurant not found.");
        }
    } catch (error) {
        console.error("Error updating restaurant by ID:", error);
    }
}
async function updateYoChina() {
    const restaurant = await Restaurant.findOne({ name: "Yo China" });

    if (restaurant) {
        const updatedData = { rating: 4.1 };
        await updateRestaurantById(restaurant._id, updatedData);
    } else {
        console.log('Restaurant "Yo China" not found.');
    }
}

// updateYoChina();

// Function to update a restaurant by its name
async function updateRestaurantByName(restaurantName, updatedData) {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
            { name: restaurantName }, // Find the restaurant by name
            updatedData, // Update with the new data
            { new: true }, // Return the updated document
        );

        if (updatedRestaurant) {
            console.log("Updated Restaurant:", updatedRestaurant);
        } else {
            console.log("Restaurant not found.");
        }
    } catch (error) {
        console.error("Error updating restaurant by name:", error);
    }
}

// Example usage (update restaurant name from 'Somi' to 'Som Sarovar')
async function updateSomiToSomSarovar() {
    const updatedData = { name: "Som Sarovar" }; // Updated data (name)
    await updateRestaurantByName("Somi", updatedData);
}

// updateSomiToSomSarovar();

// Function to update a restaurant by its phone number
async function updateRestaurantByPhoneNumber(phoneNumber, updatedData) {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
            { phoneNumber: phoneNumber }, // Find the restaurant by phone number
            updatedData, // Update with the new data
            { new: true }, // Return the updated document
        );

        if (updatedRestaurant) {
            console.log("Updated Restaurant:", updatedRestaurant);
        } else {
            console.log("Restaurant not found.");
        }
    } catch (error) {
        console.error("Error updating restaurant by phone number:", error);
    }
}

// Example usage (update delivery availability to true for phone number '+1288997392')
async function updateRestaurantDelivery() {
    const updatedData = { isDeliveryAvailable: true }; // Updated data (delivery available)
    await updateRestaurantByPhoneNumber("+1288997392", updatedData);
}

// updateRestaurantDelivery();

//delete restaurants

// Function to delete a restaurant by its ID
async function deleteRestaurantById(restaurantId) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(
            restaurantId,
        ); // Delete by ID

        if (deletedRestaurant) {
            console.log("Restaurant Deleted:", deletedRestaurant);
        } else {
            console.log("Restaurant not found.");
        }
    } catch (error) {
        console.error("Error deleting restaurant by ID:", error);
    }
}
// deleteRestaurantById("675805fba6759eb96cf79f12");

async function deleteRestaurantByName(restaurantName) {
    try {
        const deletedRestaurant = await Restaurant.findOneAndDelete({
            name: restaurantName,
        }); // Delete by name

        if (deletedRestaurant) {
            console.log("Restaurant Deleted:", deletedRestaurant);
        } else {
            console.log("Restaurant not found.");
        }
    } catch (error) {
        console.error("Error deleting restaurant by name:", error);
    }
}
// deleteRestaurantByName("Cha Cha");
////////////////////////////////////////////////////////////////hotesl
async function getAllHotels() {
    try {
        const hotels = await Hotel.find(); // Find all hotels in the database
        console.log("All Hotels:", hotels);
    } catch (error) {
        console.error("Error retrieving hotels:", error);
    }
}

// Function to read a hotel by name ('Lake View')
async function getHotelByName(hotelName) {
    try {
        const hotel = await Hotel.findOne({ name: hotelName }); // Find hotel by its name
        if (hotel) {
            console.log(`Hotel details for ${hotelName}:`, hotel);
        } else {
            console.log(`${hotelName} not found.`);
        }
    } catch (error) {
        console.error("Error retrieving hotel by name:", error);
    }
}

// Function to read all hotels with parking space available
async function getHotelsWithParking() {
    try {
        const hotels = await Hotel.find({ isParkingAvailable: true }); // Find hotels where parking is available
        console.log("Hotels with parking space available:", hotels);
    } catch (error) {
        console.error("Error retrieving hotels with parking space:", error);
    }
}

// Function to read all hotels with a restaurant available
async function getHotelsWithRestaurant() {
    try {
        const hotels = await Hotel.find({ isRestaurantAvailable: true }); // Find hotels where restaurant is available
        console.log("Hotels with a restaurant available:", hotels);
    } catch (error) {
        console.error("Error retrieving hotels with restaurant:", error);
    }
}
// Function to read all hotels by category ('Mid-Range')
async function getHotelsByCategory(category) {
    try {
        const hotels = await Hotel.find({ category: category }); // Find hotels by category
        console.log(`Hotels in the ${category} category:`, hotels);
    } catch (error) {
        console.error("Error retrieving hotels by category:", error);
    }
}
// Function to read all hotels by price range ('$$$$ (61+)')
async function getHotelsByPriceRange(priceRange) {
    try {
        const hotels = await Hotel.find({ priceRange: priceRange }); // Find hotels by price range
        console.log(`Hotels with price range ${priceRange}:`, hotels);
    } catch (error) {
        console.error("Error retrieving hotels by price range:", error);
    }
}
// Function to read all hotels with a rating of 4.0
async function getHotelsByRating(rating) {
    try {
        const hotels = await Hotel.find({ rating: rating }); // Find hotels with a specific rating
        console.log(`Hotels with a rating of ${rating}:`, hotels);
    } catch (error) {
        console.error("Error retrieving hotels by rating:", error);
    }
}
// Function to read a hotel by its phone number
async function getHotelByPhoneNumber(phoneNumber) {
    try {
        const hotel = await Hotel.findOne({ phoneNumber: phoneNumber }); // Find hotel by phone number
        if (hotel) {
            console.log(
                `Hotel details for phone number ${phoneNumber}:`,
                hotel,
            );
        } else {
            console.log(`No hotel found with phone number ${phoneNumber}.`);
        }
    } catch (error) {
        console.error("Error retrieving hotel by phone number:", error);
    }
}
// Get all hotels
// getAllHotels();

// Get hotel by name
// getHotelByName("Lake View");

// // Get hotels with parking available
// getHotelsWithParking();

// // Get hotels with a restaurant available
// getHotelsWithRestaurant();

// // Get hotels in the 'Mid-Range' category
// getHotelsByCategory("Mid-Range");

// // Get hotels with a price range of '$$$$ (61+)'
// getHotelsByPriceRange("$$$$ (61+)");

// // Get hotels with a 4.0 rating
// getHotelsByRating(4.0);

// // Get hotel by phone number
// getHotelByPhoneNumber("+1299655890");

///update hotels // Function to update hotel by ID

async function updateHotelById(hotelId, updatedData) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            hotelId, // Find the hotel by ID
            updatedData, // Update with the new data
            { new: true }, // Return the updated document
        );
        if (updatedHotel) {
            console.log("Updated Hotel:", updatedHotel);
        } else {
            console.log("Hotel not found.");
        }
    } catch (error) {
        console.error("Error updating hotel by ID:", error);
    }
}

async function updateHotelByName(hotelName, updatedData) {
    try {
        const updatedHotel = await Hotel.findOneAndUpdate(
            { name: hotelName }, // Find the hotel by its name
            updatedData, // Updated data to apply
            { new: true }, // Return the updated document
        );

        if (updatedHotel) {
            console.log("Updated Hotel:", updatedHotel);
        } else {
            console.log("Hotel not found.");
        }
    } catch (error) {
        console.error("Error updating hotel by name:", error);
    }
}

async function updateHotelByPhoneNumber(phoneNumber, updatedData) {
    try {
        const updatedHotel = await Hotel.findOneAndUpdate(
            { phoneNumber: phoneNumber }, // Find the hotel by phone number
            updatedData, // Updated data to apply
            { new: true }, // Return the updated document
        );

        if (updatedHotel) {
            console.log("Updated Hotel:", updatedHotel);
        } else {
            console.log("Hotel not found.");
        }
    } catch (error) {
        console.error("Error updating hotel by phone number:", error);
    }
}

// updateHotelById("67580ba3b60ee825bc9e94fa", { checkOutTime: "11:00 AM" });
// updateHotelByName("Sunset Resort", { rating: 4.2 });
// updateHotelByPhoneNumber("+1299655890", { phoneNumber: "+1997687392" });

//delete hotels
async function deleteHotelById(hotelId) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId); // Delete by ID

        if (deletedHotel) {
            console.log("Hotel Deleted:", deletedHotel);
        } else {
            console.log("Hotel not found.");
        }
    } catch (error) {
        console.error("Error deleting hotel by ID:", error);
    }
}

// deleteHotelById("67580c92db4e0bbedf03a4b4");

// Function to delete a hotel by its phone number
async function deleteHotelByPhoneNumber(phoneNumber) {
    try {
        const deletedHotel = await Hotel.findOneAndDelete({
            phoneNumber: phoneNumber,
        }); // Delete by phone number

        if (deletedHotel) {
            console.log("Hotel Deleted:", deletedHotel);
        } else {
            console.log("Hotel not found.");
        }
    } catch (error) {
        console.error("Error deleting hotel by phone number:", error);
    }
}

deleteHotelByPhoneNumber("+1299655890");
connectDB();

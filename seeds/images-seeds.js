const { Images } = require('../models')


const imageData = [{
        file_name: "imagefile1",
        recipe_id: "1"
    },
    {
        file_name: "imagefile2",
        recipe_id: "2"
    },
    {
        file_name: "imagefile3",
        recipe_id: "3"
    },
    {
        file_name: "imagefile4",
        recipe_id: "4"
    },
    {
        file_name: "imagefile5",
        recipe_id: "5"
    },
]




const seedImages = () => Images.bulkCreate(imageData);

module.exports = seedImages
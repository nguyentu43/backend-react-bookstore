const { DataTypes } = require("sequelize");

module.exports = async function(sequelize){
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                min: 0
            }
        },
        discount: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            validate: {
                min: 0
            }
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: "No description"
        },
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
        images: {
            type: DataTypes.TEXT,
            defaultValue: "[]",
            get(){
                return JSON.parse(this.get('images'));
            },
            set(v){
                this.set('images', JSON.stringify(v));
            }
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        },
        dealDiscount: {
            type: DataTypes.FLOAT
        },
        dealQuantity: {
            type: DataTypes.INTEGER
        },
        soldQuantity: {
            type: DataTypes.INTEGER
        }
    });
}
import Mongoose , { Schema } from "mongoose";

const ageSchema = new Schema(
    {
        age: Number,
    },{
        timestamps: true,
    }
);

const Age = Mongoose.models.Age || Mongoose.model('Age', ageSchema);

export default Age;
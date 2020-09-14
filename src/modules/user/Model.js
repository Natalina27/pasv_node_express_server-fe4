import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
});

export default mongoose.model('User', userSchema);

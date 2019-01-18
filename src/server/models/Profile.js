import mongoose, { Schema } from 'mongoose';

const ProfileSchema = new Schema({
  name: { type: String },
});

export default mongoose.model('Profile', ProfileSchema);

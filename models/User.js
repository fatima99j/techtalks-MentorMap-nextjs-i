const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  profilePictureUrl: {
    type: String,
    default: null
  },
  role: {
    type: String,
    required: true,
    enum: ['mentee', 'mentor', 'admin'],
    index: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  oauthProvider: {
    type: String,
    enum: ['google', 'linkedin'],
    default: null
  },
  oauthId: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Compound index for OAuth lookups
userSchema.index({ oauthProvider: 1, oauthId: 1 });

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    default: null
  },
  yearsOfExperience: {
    type: Number,
    min: 0,
    default: 0
  },
  linkedinUrl: {
    type: String,
    default: null
  },
  twitterUrl: {
    type: String,
    default: null
  },
  skills: [{
    type: String,
    trim: true
  }],
  industries: [{
    type: String,
    trim: true
  }],
  verificationStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
    index: true
  },
  verificationDate: {
    type: Date,
    default: null
  },
  averageRating: {
    type: Number,
    default: 0.00,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  totalSessions: {
    type: Number,
    default: 0
  },
  isAvailable: {
    type: Boolean,
    default: true,
    index: true
  }
}, {
  timestamps: true
});

// Indexes for search and filtering
mentorSchema.index({ averageRating: -1 });
mentorSchema.index({ verificationStatus: 1, isAvailable: 1 });
mentorSchema.index({ skills: 1 });
mentorSchema.index({ industries: 1 });
// Text search index for bio
mentorSchema.index({ bio: 'text', title: 'text', company: 'text' });

module.exports = mongoose.model('Mentor', mentorSchema);


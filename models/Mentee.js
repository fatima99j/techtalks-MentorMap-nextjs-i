const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },
  university: {
    type: String,
    default: null
  },
  major: {
    type: String,
    default: null
  },
  graduationDate: {
    type: Date,
    default: null
  },
  linkedinUrl: {
    type: String,
    default: null
  },
  aboutMe: {
    type: String,
    default: null
  },
  careerGoals: {
    type: String,
    default: null
  },
  interests: [{
    type: String,
    trim: true
  }],
  helpTopics: [{
    type: String,
    trim: true
  }],
  profileCompletionPercentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Mentee', menteeSchema);


const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    required: true,
    index: true
  },
  menteeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentee',
    required: true,
    index: true
  },
  sessionTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SessionType',
    required: true
  },
  scheduledDate: {
    type: Date,
    required: true,
    index: true
  },
  scheduledTime: {
    type: String, // Store as "HH:MM" format
    required: true
  },
  timezone: {
    type: String,
    default: 'UTC'
  },
  durationMinutes: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled', 'no_show'],
    default: 'pending',
    index: true
  },
  meetingLink: {
    type: String,
    default: null
  },
  meetingPlatform: {
    type: String,
    enum: ['google_meet', 'zoom', 'in_person'],
    default: null
  },
  notes: {
    type: String,
    default: null
  },
  cancelledAt: {
    type: Date,
    default: null
  },
  cancellationReason: {
    type: String,
    default: null
  },
  completedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Compound indexes for common queries
sessionSchema.index({ mentorId: 1, scheduledDate: 1, scheduledTime: 1 });
sessionSchema.index({ menteeId: 1, status: 1 });
sessionSchema.index({ scheduledDate: 1, scheduledTime: 1, status: 1 });

module.exports = mongoose.model('Session', sessionSchema);


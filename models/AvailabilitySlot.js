const mongoose = require('mongoose');

const availabilitySlotSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    required: true,
    index: true
  },
  dayOfWeek: {
    type: Number,
    min: 0,
    max: 6, // 0 = Sunday, 6 = Saturday
    default: null
  },
  startTime: {
    type: String, // Store as "HH:MM" format
    required: true
  },
  endTime: {
    type: String, // Store as "HH:MM" format
    required: true
  },
  timezone: {
    type: String,
    default: 'UTC'
  },
  isRecurring: {
    type: Boolean,
    default: true
  },
  specificDate: {
    type: Date,
    default: null,
    index: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for recurring slots
availabilitySlotSchema.index({ mentorId: 1, dayOfWeek: 1, isRecurring: 1 });
// Index for specific date slots
availabilitySlotSchema.index({ mentorId: 1, specificDate: 1 });

module.exports = mongoose.model('AvailabilitySlot', availabilitySlotSchema);


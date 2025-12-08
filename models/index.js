// Export all models from a single file for easy importing
const User = require('./User');
const Mentee = require('./Mentee');
const Mentor = require('./Mentor');
const SessionType = require('./SessionType');
const AvailabilitySlot = require('./AvailabilitySlot');
const Session = require('./Session');
const Review = require('./Review');
const Payment = require('./Payment');
const Conversation = require('./Conversation');
const Message = require('./Message');
const Notification = require('./Notification');
const Resource = require('./Resource');
const ProgressMilestone = require('./ProgressMilestone');

module.exports = {
  User,
  Mentee,
  Mentor,
  SessionType,
  AvailabilitySlot,
  Session,
  Review,
  Payment,
  Conversation,
  Message,
  Notification,
  Resource,
  ProgressMilestone
};


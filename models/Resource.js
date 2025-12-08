const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: null
  },
  contentType: {
    type: String,
    required: true,
    enum: ['article', 'template', 'guide', 'video', 'pdf']
  },
  contentUrl: {
    type: String,
    default: null
  },
  category: {
    type: String,
    default: null,
    index: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  isFeatured: {
    type: Boolean,
    default: false,
    index: true
  },
  viewCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, {
  timestamps: true
});

// Text search index
resourceSchema.index({ title: 'text', description: 'text' });
resourceSchema.index({ tags: 1 });

module.exports = mongoose.model('Resource', resourceSchema);


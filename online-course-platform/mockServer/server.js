const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/online-course-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  category: String,
  content: Array,
});

const Course = mongoose.model('Course', courseSchema);

app.post('/api/courses', (req, res) => {
  const course = new Course(req.body);
  course.save().then(() => res.json(course));
});

app.get('/api/courses', (req, res) => {
  Course.find().then((courses) => res.json(courses));
});

app.get('/api/courses/:id', (req, res) => {
  Course.findById(req.params.id).then((course) => res.json(course));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

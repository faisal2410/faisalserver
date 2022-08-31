const {
    Intro,
    About,
    Project,
    Contact,
    Experience,
    Course,
  } = require("../models/portfolio");

  const User = require("../models/user");

  // get all portfolio data
 exports.getPortfolioData= async (req, res) => {
    try {
      const intros = await Intro.find();
      const abouts = await About.find();
      const projects = await Project.find();
      const contacts = await Contact.find();
      const experiences = await Experience.find();
      const courses = await Course.find();
  
      res.status(200).send({
        intro: intros[0],
        about: abouts[0],
        projects: projects,
        contact: contacts[0],
        experiences: experiences,
        courses: courses,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // update intro

exports.updateIntro= async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

// update about
  exports.updateAbout=async (req, res) => {
    try {
      const about = await About.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: about,
        success: true,
        message: "Abouts updated successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

// add experience
  exports.addExperience=async (req, res) => {
    try {
      const experience = new Experience(req.body);
      await experience.save();
      res.status(200).send({
        data: experience,
        success: true,
        message: "Experience added successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

// update experience
  exports.updateExperience=async (req, res) => {
    try {
      const experience = await Experience.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: experience,
        success: true,
        message: "Experience updated successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }


//   Delete Experience
exports.deleteExperience=async (req, res) => {
    try {
      const experience = await Experience.findOneAndDelete({ _id: req.params._id });
      res.status(200).send({
        data: experience,
        success: true,
        message: "Experience deleted successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

//   Add Project

exports.addProject=async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(200).send({
        data: project,
        success: true,
        message: "Project added successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

//   Update Project

exports.updateProject=async (req, res) => {
    try {
      const project = await Project.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: project,
        success: true,
        message: "Project updated successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

//   Delete Project

exports.deleteProject=async (req, res) => {
    try {
      const project = await Project.findOneAndDelete({ _id: req.params._id });
      res.status(200).send({
        data: project,
        success: true,
        message: "Project deleted successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

//   Add Course

exports.addCourse=async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(200).send({
        data: course,
        success: true,
        message: "Course added successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

//   Update Course
exports.updateCourse=async (req, res) => {
    try {
      const course = await Course.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: course,
        success: true,
        message: "Course updated successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

//   Delete Course
exports.deleteCourse=async (req, res) => {
    try {
      const course = await Course.findOneAndDelete({ _id: req.params._id });
      res.status(200).send({
        data: course,
        success: true,
        message: "Course deleted successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
//   Update Contact
exports.updateContact=async (req, res) => {
    try {
      const contact = await Contact.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: contact,
        success: true,
        message: "Contact updated successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

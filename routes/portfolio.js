const router = require("express").Router();
const {getPortfolioData,updateIntro,updateAbout,addExperience,updateExperience,deleteExperience,addProject,updateProject,deleteProject,addCourse,updateCourse,deleteCourse,updateContact,adminLogin}=require("../controllers/portfolio")
// get all portfolio data
router.get("/portfolioData", getPortfolioData);

// update intro
router.put("/intro",updateIntro );

// update about
router.put("/about",updateAbout );

// add experience

router.post("/experience",addExperience );

// update experience
router.put("/experience", updateExperience);

// delete experience
router.delete("/experience/:_id", deleteExperience);

// add project
router.post("/project",addProject );

// update project
router.put("/project/:_id",updateProject );

// delete project

router.delete("/project/:_id",deleteProject );

// add course
router.post("/course",addCourse);

// update course
router.put("/course/:_id",updateCourse );

// delete course

router.delete("/course/:_id",deleteCourse );

// update contact
router.put("/contact",updateContact );



module.exports = router;
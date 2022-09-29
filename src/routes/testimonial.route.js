import { Router } from "express";
import initTestimonialController from "../controllers/testimonial.controller.js";
// import initTestimonialController from "../controllers/testimonial.controller";

const router = Router();

const testimonialRouter = (sequelize) => {
  const { addTestimonial, viewTestimonials, editTestimonial, deleteTestimonial } =
    initTestimonialController(sequelize);
  router.route("/add-testimonial").post(addTestimonial);
  router.route("/view-testimonials").get(viewTestimonials);
  router.route("/edit-testimonial/:id").put(editTestimonial);
  router.route("/delete-testimonial/:id").delete(deleteTestimonial);



  return router;
};

export default testimonialRouter;

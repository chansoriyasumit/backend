// import initTestimonialModel from "../models/testimonial.model.js";
import dotenv from "dotenv";
import initTestimonialModel from "../models/testimonial.model.js";

dotenv.config();

const initTestimonialController = (sequelize) => {
  const testimonialModel = initTestimonialModel(sequelize);
  const addTestimonial = async (req, res) => {
    try {
      const { name, post, photo, testimonial_description } = req.body;
      const newRecord = await testimonialModel.create({
        name: name,
        post: post,
        photo: photo,
        testimonial_description: testimonial_description,
      });
      // console.log("testimonial's auto-generated ID:", newRecord.id);
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(406).send({ success: false, err });
    }
  };

  const viewTestimonials = async (req, res) => {
    try {
      const viewAll = await testimonialModel.findAll({
        where: {
          active: 1,
        },
      });
      // console.log('viewAll',viewAll)
      res.status(200).send({ success: true, data: viewAll });
    } catch (err) {
      res.status(406).send({ success: false, err });
    }
  };

  const editTestimonial = async (req, res) => {
    try {
      const { id } = req.params;
      const {  name, post, photo, testimonial_description } = req.body;
      const updated = await testimonialModel.update(
        { name, post, photo, testimonial_description },
        {
          where: {
            id: id,
          },
        }
      );
      // console.log("viewAll-------------", updated);
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(406).send({ success: false, err });
    }
  };

  const deleteTestimonial = async (req, res) => {
    try {
      const { id } = req.params;

      const updated = await testimonialModel.update(
        { active: 0 },
        {
          where: {
            id: parseInt(id),
          },
        }
      );
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(406).send({ success: false, err });
    }
  };

  return {
    addTestimonial,
    viewTestimonials,
    editTestimonial,
    deleteTestimonial
  };
};

export default initTestimonialController;

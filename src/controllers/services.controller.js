import serviceDAO from "../dao/services.dao.js";

export const getAllServices = (req, res) => {
  serviceDAO
    .getAll()
    .then((services) => res.render("../src/views/index", { services }))
    .catch((err) =>
      res.json({
        status: "Server unavailable",
      })
    );
};

export const getService = (req, res) => {
  serviceDAO
    .getService(req.params.serviceId)
    .then((service) => {
      !service
        ? res.json({
            message: "Service not found",
          })
        : res.render("../src/views/edit", { service });
    })
    .catch((err) =>
      res.json({
        status: "Server unavailable",
      })
    );
};

export const createService = async (req, res) => {
  console.log(req.body);
  serviceDAO
    .createService(req.body)
    .then((result) => res.redirect("/"))
    .catch((err) => res.json({ status: "Server unavailable" }));
};

export const updateService = async (req, res) => {
  console.log(req.body);
  serviceDAO
    .updateService(req.params.serviceId, req.body)
    .then((result) => {
      if (!result) {
        res.json({
          message: "Service not found",
        });
      } else {
        // Redirige a la ruta correcta después de la actualización
        res.redirect("/home");
      }
    })
    .catch((err) => {
      res.json({
        status: "Server Error",
      });
    });
};

export const deleteService = async (req, res) => {
  serviceDAO.deleteService(req.params.serviceId, req.body)
    .then((result) => res.redirect("/home"))
    // .then((result) => res.render(result))
    .catch((err) => res.json({ status: "Server unavailable" }));
};


// home.controller.js
export const getHomePage = (req, res) => {
  // Puedes incluir lógica adicional aquí si es necesario
  res.render("../src/views/home", {});  // Asegúrate de proporcionar la ruta correcta al archivo EJS de la página de inicio
};

export const getPhotographers = async (req, res) => {
  try {
    const photographers = await serviceDAO.getPhotographers();
    res.render('../src/views/photographers', { photographers });
  } catch (error) {
    console.error('Error al obtener fotógrafos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
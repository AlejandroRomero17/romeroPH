// Importación del modelo 'Service' que representa la estructura de la colección de servicios en la base de datos.
import Service from "../models/services.model.js";

// Declaración del objeto 'serviceDAO', que contendrá los métodos para interactuar con la base de datos relacionados con servicios fotográficos.
const serviceDAO = {};

// Definición del método 'getAll' de 'serviceDAO' como asíncrono para permitir operaciones asíncronas.
serviceDAO.getAll = async () => {
  try {
    // Utiliza el modelo 'Service' para realizar una consulta y obtener todos los servicios desde la base de datos.
    const services = await Service.find();

    // Retorna la lista de servicios obtenidos.
    return services;
  } catch (error) {
    // Manejo de errores: Puedes agregar lógica adicional según tus necesidades.
    console.error("Error while fetching services:", error);
    throw error; // Puedes decidir si relanzar el error o manejarlo de otra manera.
  }
};

serviceDAO.getService = async (serviceId) => {
  const service = await Service.findOne({ serviceId: serviceId });

  return service;
};

serviceDAO.createService = async (service) => {
  return await Service.create(service);
};

serviceDAO.updateService = async (serviceId, service) => {
  return await Service.findOneAndUpdate({ serviceId: serviceId }, service);
};

serviceDAO.deleteService = async (serviceId) => {
  return await Service.findOneAndDelete({ serviceId: serviceId });
};

serviceDAO.getPhotographers = async () => {
  try {
    const services = await Service.find();
    
    // Extraer fotógrafos de los documentos de servicios
    const photographers = services.map(service => service.photographer);

    return photographers;
  } catch (error) {
    console.error('Error al obtener fotógrafos:', error);
    throw error;
  }
};

export default serviceDAO;

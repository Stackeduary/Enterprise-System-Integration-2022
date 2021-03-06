const BASE_URL = "http://localhost:8031";
export const ENDPOINTS = {
  employeeCreate: BASE_URL + "/employee/create",
  employeeLogin: BASE_URL + "/login",
  car: {
    list: BASE_URL + "/car",
    listAvailable: BASE_URL + "/car/available",
    create: BASE_URL + "/car/create",
    update: (id) => BASE_URL + "/car/" + id,
    delete: (id) => BASE_URL + "/car/" + id,
  },
  bay: {
    list: BASE_URL + "/repair-bay",
  },
  carRepair: {
    create: BASE_URL + "/cars/repair/create",
    list: BASE_URL + "/cars/repair",
    get: (id) => BASE_URL + "/cars/repair/" + id,
    update: (id) => BASE_URL + "/cars/repair/finish/" + id,
  },
  carRent: {
    get: (id) => BASE_URL + "/cars/rent/" + id,
    update: (id) => BASE_URL + "/cars/rent/finish/" + id,
  },
  carOwners: BASE_URL + "/car-owner",
  carOwner: BASE_URL + "/car-owner/",
  carOwnerCreate: BASE_URL + "/car-owner/create",
  rent: BASE_URL + "/cars/rent",
};

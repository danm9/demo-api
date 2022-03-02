import {
  addNewUser,
  getUsers,
  updateUser,
  getUserWithID,
  deleteUser,
} from "../controllers/usersController.js";

const userRoutes = (app) => {
  app
    .route("/users")
    .get((req, res, next) => {
      next();
    }, getUsers)

    .post(addNewUser);

  app
    .route("/user/:userID")
    .get(getUserWithID)

    .put(updateUser)

    .delete(deleteUser);
};

export default userRoutes;

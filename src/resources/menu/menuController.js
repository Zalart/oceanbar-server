const menuService = require("./menuService");
module.exports = class MenuController {
  static async getAll(req, res) {
    try {
      const dishes = await menuService.getAll();
      res.status(200).json({ status: 200, dishes });
    } catch (e) {
      res.status(404).json({ error: "Dishes not found" });
    }
  }
};

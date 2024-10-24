import { Router } from "express"
import jwtMiddleware from "../middlewares/jwt.middleware"
const router = Router()
router.post("/", jwtMiddleware.createToken)
router.post("/verify", (req, res) => { jwtMiddleware.checkToken })
router.post("/refresh", (req, res) => { res.status(501).send("Not Implemented") })
export default router
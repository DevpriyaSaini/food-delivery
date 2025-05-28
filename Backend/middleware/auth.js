import jwt from "jsonwebtoken";

async function authmiddle(req, res, next) {
    // Get the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = req.headers.token; 
    // Format: "Bearer <token>"
    
    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login again" });
    }
    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid token" });
    }
}

export default authmiddle;
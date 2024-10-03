import jwt from 'jsonwebtoken'

const secret = 'paulo-e-furry'
const expiresIn = '1h'
const payload = {
    data: {
        id: 1,
        username: 'admin',
        email: 'teste@teste.com'
    }
}

// jwt.sign(payload, secret, { expiresIn }, (err, token) => {
//     if(err)
//         return console.error(err)
//     console.log(token)

//     const data = jwt.decode(<string>token)
//     console.log(data)

//     jwt.verify(<string>token, secret, (err, decoded) => {
//         if(err) return console.error(err)
//         console.log(decoded)
//     })
// })

//PROMISIFY JWT

const sign = async (payload: any, secret: string, options: SignOptions) => { //<<<< O QUE ACONTECEU!?!?!?!?!?!?
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if (err) return reject(err)
            resolve(token)
        })
    })
}

const verify = async (token: string, secret: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) return reject(err)
            resolve(decoded)
        })
    })
}

void async function () {
    try {
        const token = await sign(payload, secret, { expiresIn })
        console.log("token", token)

        const verifiedData = await verify(<string>token, secret)
        console.log("verifiedData", verifiedData)

        const decodedData = jwt.decode(<string>token)
        console.log("decodedData", decodedData)
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError)
            return console.error("token expired")
  
        if (e instanceof jwt.NotBeforeError)
            return console.error("token not active")
  
        if (e instanceof jwt.JsonWebTokenError)
            return console.error(e)
        console.error("esta mensagem não deveria aparecer", e)
    }
}()
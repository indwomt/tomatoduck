require(`dotenv`).config()
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const cbRequest = async ( req, res ) => {
    const prompt = req.body.prompt
try {
    if(prompt===null) {res.status(400).json({message:`no input`})}

    const response = await openai.createCompletion({
    model: "text-davinci-003",
     prompt
})
    const completion = response.data.choices[0].text
    return res.json({
        success: true,
        message: completion
    })
 

}catch(e){console.error(e)}
}

module.exports = {cbRequest}
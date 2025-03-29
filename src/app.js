const express = require('express');
const path = require('path');
const { generateChat } = require('./openAI');
const app = express();
const PORT = 5445

app.use(express.static(path.join(__dirname, '..', 'public')));


app.use(express.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    
    try {
        const gptResponse = await generateChat(userMessage)
        res.json({ message: gptResponse });
    } catch (error) {
        console.error('Error with OpenAI request:', error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

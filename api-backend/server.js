const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach((item) => {
    if (!isNaN(item)) {
        numbers.push(item);
    } else if (typeof item === 'string') {
        alphabets.push(item);
        if (item >= 'a' && item <= 'z') {
        if (highestLowercase < item) {
            highestLowercase = item;
        }
        }
    }
    });

    res.json({
        is_success: true,
        user_id: 'Harsha',
        email: 'dharsha9949@gmail.com',
        roll_number: '21BCE5908',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});


app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

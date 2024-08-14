const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json());

// Handle form submissions
app.get('/',(req, res)=>{
    res.status(200).json({ message: 'Backend working successfully!' });
})

app.post('/api/place-order', (req, res) => {
  const orderData = req.body;
  console.log('Order received:', orderData);

  // Here, you would typically store the orderData in a database
  // For now, we'll just send a success response

  res.status(200).json({ message: 'Order received successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

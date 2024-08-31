import express from 'express';
import bodyParser from 'body-parser'
import fs from 'fs';
const app= express();

app.use(bodyParser.json());

//Get all todos
app.get('/todos', (req, res) => {
    const filePath = "data.json";
    fs.readFile(filePath,'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
    
        // Step 2: Parse the JSON content
        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            // return;
        }
        res.json({todos: jsonData});
    })
    
})

//Add a todo
app.post('/todos', (req, res) => {
    const {text} = req.body;
    const itemToAdd = {
        todo:text,
        completed:false
    };
    const filePath = "data.json";
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            // return;
        }
    
        // Step 2: Parse the JSON content
        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            // return;
        }
    
        // Step 3: Check if the array exists
        if (Array.isArray(jsonData)) {
            // Array exists, push the new item
            jsonData.push(itemToAdd);
        } else {
            // Array does not exist, create a new array with the item
            jsonData = [itemToAdd];
        }
    
        // Step 4: Convert back to JSON string
        const updatedJsonData = JSON.stringify(jsonData, null, 2);
    
        // Step 5: Write the updated JSON back to the file
        fs.writeFile(filePath, updatedJsonData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File successfully updated!');
            }
        });
    })
    res.send("Success");
})





app.listen(3000,() => {
    console.log("listening on 3000");
    
})
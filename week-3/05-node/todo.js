const fs = require("fs");
const {Command} = require("commander");
const program =new Command();

program
.name("Todo")
.description("Add a todo remove or complete a todo")
.version('0.8.0')

program.command('add')
    .description('Add a todo')
    .argument('<todo>','todo to add')
    .action((text) => {
        const itemToAdd = {
            todo:text,
            completed:false
        };
        const filePath = "data.json";
        fs.readFile(filePath, 'utf8', (err, data) => {
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
    });
    program.command('remove')
    .description('Remove a todo')
    .argument('<todo>','todo to remove')
    .action((text) => {
        const filePath = "data.json";
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
        
            // Step 2: Parse the JSON content
            let jsonData;
                jsonData = JSON.parse(data);
        
            // Step 3: Check if the array exists
            jsonData=jsonData.filter((todos) => {
               return todos.todo != text;
            });

            console.log(jsonData);
            
        
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
    });
    program.command('done')
    .description('Complete a todo')
    .argument('<todo>','todo completed')
    .action((text) => {
        const filePath = "data.json";
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
        
            // Step 2: Parse the JSON content
            let jsonData;
                jsonData = JSON.parse(data);
        
            // Step 3: Check if the array exists
            jsonData=jsonData.map((todos) => {
               if(todos.todo === text){
                return {
                    todo:text,
                    completed:true
                }
               }
               else
               return todos;
            });

            console.log(jsonData);
            
        
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
    });

    program.parse();
Got the baseline going
now i need to develop the categories logic
-- I think what would look best is to have a drop down of categories, which then determined how the item would be displayed. Each drop down would have a separate table, and each item of that category would sit in its respective table
What would that look like?



What I'm thinking is that i stick my category get function inside the display item function, so when that thing is looping through the array it gets to display the items, i'll have a cell wherein i call the displayCategory function, this is going to kick off a get function, that returns an array of objects that contains the category data and the corresponding task id info. This function needs to pass in the displayed id as a parameter, so when i get my array of category info I can pull out the category based on the inputs' id (thinking a conditional to match the ids)--

sooo I'm thinking that I need to put the get request in the show category function. 


Then once you had the data- you could use the category column tag to determine what table the item would be placed in

Random notes:
how do i want the page to appear on load? It would be cool to do something where I can hide the table if its empty, but display if there's something in it








For Hard Mode:
-Create a table of categories and allow Tasks to be assigned a single (1) category. This creates a one-to-many relationship (many tasks can have one category). You will need to add in joins in order to display and use this new data!
-In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.




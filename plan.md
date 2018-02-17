Got the baseline going
now i need to develop the categories logic
-- I think what would look best is to have a drop down of categories, which then determined how the item would be displayed. Each drop down would have a separate table, and each item of that category would sit in its respective table
What would that look like?
You'd set up different data tables based on the categories you made
Need to set up categories drop down in Html:
going to make 5 categories:
    -home
    -work
    -exercise
    -hobbies
    -shopping
When an item is selected it is added to the same intake table and sent to the router
my POST function will have to edited to contain the logic that determined what table the new item would be saved in
I would then need to set up a different get function for each table. 
something like  `INSERT INTO $1 Values...`
how would keep that data so on each item so that i could delete or mark as complete?
you could have a column in each table that also contained that information, that would be helpful in locating the data in both the DB and DOM

Then once you had the data- you could use the category column tag to determine what table the item would be placed in

Random notes:
how do i want the page to appear on load? It would be cool to do something where I can hide the table if its empty, but display if there's something in it








For Hard Mode:
-Create a table of categories and allow Tasks to be assigned a single (1) category. This creates a one-to-many relationship (many tasks can have one category). You will need to add in joins in order to display and use this new data!
-In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.




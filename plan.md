Making a TO-DO App

My plan:
first I need to spin up a local server, install npm nodes
then i need to create a database, with columns for task, due date, completed
then need to spin up public.js files and stub out the interface. 
I would need to create a button that allows user to create a task. I will also create a button that allows user to create a category, but will ignore that until everything else looks great. 
Then create a table header, for where the inputs of the to-do list would go. 
Once I stub out the interface, I need to create a post that allows the interface to input a to-do item. On .done that should kick off a GET request that will GET the info from the db. THIS SHOULD ALSO appear on load of the page. it would be really cool to create a server on the load of the page. try that. 
Get that going, then think about the delete task fucntions, mark as ready functions. 

Random notes:
how do i want the page to appear on load? It would be cool to do something where I can hide the table if its empty, but display if there's something in it




For basemode, I need to:
-Create a front-end experieence that allows a user to create a task
-When the task is created, it should be stored inside of a database (SQL)
-Whenever a task is created the front end should refresh to show all tasks that need to be completed.
-Each task should have an option to 'Complete' or 'Delete'.
-When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
-Whether or not a task is complete should also be stored in the database.
-Deleting a task should remove it both from the Front End as well as the Database.

For Hard Mode:
-Create a table of categories and allow Tasks to be assigned a single (1) category. This creates a one-to-many relationship (many tasks can have one category). You will need to add in joins in order to display and use this new data!
-In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.

Pro-Mode:
-Publish your app to Heroku.
-Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
-Add a due date to your tasks and put the items which need to be completed next at the top of the page. Highlight overdue tasks in red.
-Add any additional features that you think would be useful or interesting!


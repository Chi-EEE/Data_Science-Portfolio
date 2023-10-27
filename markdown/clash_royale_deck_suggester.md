##### Preprocessing

Before using the dataset, I had to preprocess the data to make it easier for the model to train on.  
I removed the columns that I didn't need: Player tag, their ranking and the date of the battle.  
After the first step of preprocessing, I reduced the headings from 75 to 36 headings. Here is a bar chart showing the number of cards used in the dataset:
<img src="graphs/bar_chart_1.png" width="1000px"><br>
Since these are ladder matches, I removed the rows with cards that are under level 13 since that is not the max level and will introduce bias since some cards are alot weaker when underleveled.

##### Tools And Technologies

*   Python
*   Pandas
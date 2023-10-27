##### Preprocessing

Before using the dataset, I had to preprocess the data to make it easier for the model to train on.

I removed the columns that I didn't need: Player tag, their ranking and the date of the battle.

After the first step of preprocessing, I reduced the headings from 75 to 36 headings. Here is a bar chart showing the number of cards used in the dataset:
<img src="graphs/bar_chart_1.png" width="1000px"><br>

Since these are ladder matches, cards can be underleveled / overleveled and can lead to bias in the win percentage of the matches.

I removed the matches which all the card levels didn't match to reduce this bias.

##### Tools And Technologies

*   Python
*   Pandas
*   Matplotlib
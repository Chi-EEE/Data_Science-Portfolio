##### Preprocessing

Before using the dataset, I had to preprocess the data to make it easier for a machine learning model to train from.

The project is set up with python notebooks ordered from 1 to 5 so it will be easy to follow along:

- **1-unzip_data.ipynb**: This notebook combines the separated csv zip files located in the data directory and unzips the csv zip file

- **2-remove_columns.ipynb**: This notebook removes the unneeded columns present in the data. This is to speed up the processing of csv file in the future.

- **3-remove_underleveled.ipynb**: This notebook removes the battles with underleveled cards. If any of the cards in the battle do not match levels, then we can safely remove it. This is to prevent the machine learning model from learning any biases present from cards being more powerful than others due to levels.

- **3.5-count_cards.ipynb**: This notebook counts the distribution of the cards and displays the count in a pie chart / bar chart.

- **4-generate-decks.ipynb**: This notebook generates the decks csv from the cards in the data. This is done so that we can use the information of each deck without having to retrieve the deck from the data everytime.

- **5-search-decks-csv.ipynb**: This notebook allows the user to search through the decks csv and retrieve the top 5 winrate decks from a card that they have inputted.

##### Graphs

Here are the graphs for the card distributions from **3.5-count_cards.ipynb** where can see which card is being used the most.

<img width="1200" src="graphs/large-pie-chart.png"><br>

<img src="graphs/bar-chart.png"><br>

In the bar chart, we can find out that "Giant" is the most used card with "Zap" being the 2nd most used card. It makes sense that they're the top cards as their card rarity is "Common" and all players should have those cards in their account.

##### Decks

Going through the notebooks leads us to the **5-search-decks-csv.ipynb** file where we can view the highest win rate deck. Let's say that I want the highest win rate deck with 'Giant', I can use that notebook and search for all the 'Giant' decks and the top 5 win rate 'Giant' decks. Please note that I filtered out all the decks with under 100 usage as they only represent a small percentage of players.   
Here are the images from running that notebook:

<img src="graphs/all_giant_decks.png"><br>
The above image shows all the decks with 'Giant' in them.

<img src="graphs/top_5_giant_decks.png"><br>
The above image shows the top 5 win rate decks with 'Giant'.

##### Tools And Technologies

*   Python
*   Pandas
*   Matplotlib
##### Preprocessing

Before using the dataset, I had to preprocess the data to make it easier for a machine learning model to train from.

The project is set up with python notebooks ordered from 1 to 5 so it will be easy to follow along:
- **1-unzip_data.ipynb**: This notebook combines the separated csv zip files located in the data directory and unzips the csv zip file
- **2-remove_columns.ipynb**: This notebook removes the unneeded columns present in the data. This is to speed up the processing of csv file in the future.
- **3-remove_underleveled.ipynb**: This notebook removes the battles with underleveled cards. If any of the cards in the battle do not match levels, then we can safely remove it. This is to prevent the machine learning model from learning any biases present from cards being more powerful than others due to levels.
- **3.5-count_cards.ipynb**: This notebook counts the distribution of the cards and displays the count in a pie chart / bar chart.
- **4-generate-decks.ipynb**: This notebook generates the decks csv from the cards in the data. This is done so that we can use the information of each deck without having to retrieve the deck from the data everytime.
- **5-search-decks-csv.ipynb**: This notebook allows the user to search through the decks csv and retrieve the top 5 winrate decks from a card that they have inputted.   

##### Tools And Technologies

*   Python
*   Pandas
*   Matplotlib
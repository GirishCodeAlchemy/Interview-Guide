def check(n, m, games):
    # Initialize a set to keep track of pairs of players who have played against each other
    played_pairs = set()

    # Iterate through each round of games
    for i in range(m):
        # Get the players on each team for the current round
        team1 = games[i][:n // 2]
        team2 = games[i][n // 2:]

        # Generate all possible pairs of players from different teams
        pairs = [(x, y) for x in team1 for y in team2]

        # Update the set of played pairs with the pairs from this round
        played_pairs.update(pairs)

    # Generate all possible pairs of players
    all_pairs = [(x, y) for x in range(1, n + 1) for y in range(x + 1, n + 1)]

    # Check if all possible pairs have been played against each other
    return set(all_pairs) == played_pairs

# Example usage:
n = 4  # Replace with the number of players (even)
m = 3  # Replace with the number of rounds of games
games = [
    [1, 2, 3, 4],
    [2, 3, 1, 4],
    [4, 3, 2, 1]
]  # Replace with the list of games rounds

result = check(n, m, games)
print(result)  # True or False

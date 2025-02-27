#include <bits/stdc++.h>
using namespace std;

const int N = 1000;
vector<vector<int>> dp(N, vector<int>(N, -1));

int knapsack(int n, int weight[], int value[], int w)
{
    if (n < 0 || w <= 0)
        return 0;
    if (dp[n][w] != -1)
        return dp[n][w];
    if (weight[n] <= w)
    {
        int opt1 = knapsack(n - 1, weight, value, w - weight[n]) + value[n];

        int opt2 = knapsack(n - 1, weight, value, w);
        return dp[n][w] = max(opt1, opt2);
        
    }
    else
    {
        int opt2 = knapsack(n - 1, weight, value, w);
        return dp[n][w] = opt2;
        
    }
}

int main()
{
    int n;
    cin >> n;
    int weight[n], value[n];
    for (int i = 0; i < n; i++)
        cin >> weight[i];
    for (int i = 0; i < n; i++)
        cin >> value[i];
    int w;
    cin >> w;

    cout << knapsack(n - 1, weight, value, w) << endl;

    return 0;
}
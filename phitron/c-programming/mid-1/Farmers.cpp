#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */  
    int testCase;
    int firstTeam, secondTeam, daysNeedForFirstTeam;
    printf("Enter test case: ");
    scanf("%d", &testCase);
    for(int i = 0; i < testCase; i++){
        scanf("%d %d %d", &firstTeam, &secondTeam, &daysNeedForFirstTeam);
        printf("%d\n", daysNeedForFirstTeam - (daysNeedForFirstTeam * firstTeam) / (firstTeam + secondTeam));
    }


    return 0;
}

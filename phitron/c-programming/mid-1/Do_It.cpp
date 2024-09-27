#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int testCase, end;
    scanf("%d %d", &testCase, &end);
    for (int i = 0; i < testCase; i++)
    {

        for (int number = 1; number <= end; number++)
            printf("%d ", number);
        printf("\n");
    }

    return 0;
}

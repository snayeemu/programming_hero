#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

int main()
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    char alphabets[] = "abcdefghijklmnopqrstuvwxyz";
    char alphabetsUpPercase[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int testCase ;
    scanf("%d", &testCase);

    char string[10000];
    int lowerCase = 0, uppercase = 0, numbers = 0;
    for (int j = 0; j < testCase; j++)
    {
        scanf("%s", &string);
        
        for (int i = 0; i < strlen(string); i++)
            if (strchr(alphabets, string[i]) != NULL)
                lowerCase++;
            else if (strchr(alphabetsUpPercase, string[i]) != NULL)
                uppercase++;
            else
                numbers++;

        printf("%d %d %d\n", uppercase, lowerCase, numbers);
        lowerCase = 0, uppercase = 0, numbers = 0;
    }

    return 0;
}

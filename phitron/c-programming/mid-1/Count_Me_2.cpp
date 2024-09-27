#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{

    char string[100000];
    int numberOfConsonants = 0;
    scanf("%s", &string);
    // fgets(string, 100000, stdin);
    
    

    for (int i = 0; i < strlen(string); i++)
        if (strchr("aeiou", tolower(string[i])) == NULL){
            numberOfConsonants++;

    }

    printf("%d\n", numberOfConsonants);

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    return 0;
}

#include <stdio.h>
#include <string.h>

int main() {
    int count[26] = {0}; 
    char string[10001]; 
    scanf("%s", string);
    int len = strlen(string); 

    for (int i = 0; i < len; i++)
        count[string[i] - 'a']++; 

    for (int i = 0; i < 26; i++)
        if (count[i] > 0)
            printf("%c - %d\n", i + 'a', count[i]); 

    return 0;
}
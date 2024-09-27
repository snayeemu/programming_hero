#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int size;
    scanf("%d", &size);
    int numbers[size];
    for (int i = 0; i < size; i++)
        scanf("%d", &numbers[i]);
    int devisableBy2 = 0, devisableBy3 = 0;

    for (int i = 0; i < size; i++)
        if (numbers[i] % 2 == 0)
            devisableBy2++;
        else if (numbers[i] % 3 == 0)
            devisableBy3++;
    
    printf("%d %d\n", devisableBy2, devisableBy3);

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    return 0;
}

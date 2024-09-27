#include <stdio.h>

int main() {
    int testCase;
    scanf("%d", &testCase);

    while (testCase--) {
        int size, value;
        scanf("%d", &size);
        int numbers[size];

       
        for (int i = 0; i < size; i++)
            scanf("%d", &numbers[i]);

        scanf("%d", &value);

        int flag = 0; 
        for (int i = 0; i < size; i++) {
            if (numbers[i] == value) {
                flag = 1; 
                break; 
            }
        }

        
        printf("%s\n", flag == 1 ? "YES" : "NO");
    }

    return 0;
}
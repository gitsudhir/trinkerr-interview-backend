# trinkerr-interview-backend
trinkerr-interview-backend
Trinkerr Backend Interview
Back to School
Suppose you are given 2 strings which will include digits from 0-9 and the string can be of any length. You need to add those 2 strings and return the output as number. You need to do this as efficiently as possible. Again emphasizing on the point that the string can be of any length.

Example-1

str1 = "123456"
str2 = "312321"
output = "435777"
Example-2

str1 = "123456"
str2 = "123456"
output = "246912"
Watering plants
Chunnu has recently joined as a gardener. On the very first day of his job, he was given the task to configure the range of sprinklers. To ensure that all the plants get sufficient water, all the plants should be within the range of the sprinkler's radius.

He is completely unaware of how to solve this problem, so he calls you to help him. Help him in finding the minimum radius of the sprinklers so that all the plants are getting sufficient water.

You are given the coordinates of both, plants and sprinklers which are installed on a straight line, in the form of 2 arrays.

Constraints:

1 <= plants.length, sprinklers.length <= 10 5

1 <= plants[i], sprinklers[i] <= 10 9

Sample Input 1

Input: plants = [1,2,3], sprinklers = [2]
Output: 1
Explanation: The only sprinklers was placed in the position 2, and if we use the radius 1 standard, then all the plants can be warmed.
Sample Input 2

Input: plants = [1,2,3,4], sprinklers = [1,4]
Output: 1
Explanation: The two sprinklers was placed in the position 1 and 4. We need to use radius 1 standard, then all the plants can be warmed.
Sample Input 3

Input: 

plants = [282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923],

sprinklers = [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]

Output: 161834419
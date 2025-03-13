# cubes-fill-box

Run this Code:

Add a command in the terminal and then add input like L*B*H followed by number of cube in terms of power of 2

Explanation of my code:

As per the question, the first 3 numbers are length, width and height , after that all the numbers are the count of cube in the power of 2. I have two scenerios from which the examples given in the document will fulfilled. I am not sure which scenerio is correct.

I have used Greedy Algorithm to prioritize larger cubes.
Also when I am filling from the largest cube and backtrack to the minimal cube , it will ensure that minimum cubes are used to fill the box.

Scenerio 1:

For Example: As per your document example 5 5 5 61 7 1 answer is 62, but my answer is 13.
After calculation, I make up one more scenerio in which I assume the size of box actually and then I have the Dimensions of cube box to bw filled as per order L*W*H to be filled by smaller cubes of order size 2^nx2^nx2^n, where n must have to be positive integerand to calculate the minimium number of cubes required to fill the main cube box.

Pick the minimum value from the each dimension of main box and from the available cubes size condition will be to pick the maximum size of cube which falls in the category of the minimum value picked from the dimensions of box eg: we have a box of LxWxH 4,5,6 respectively so here clearly we can pick the cube of largest order of 4x4x4 which completely fills the length parameter.
If the picked cube size completely fills the length then we must go to other condition otherwise the remaining differnce will be filled by the order cube which fills the difference eg. length of box is 6 then we can fill cube order of 4x4x4 and 2x2x2 in this defined length
In condition 2 the difference of height and depth will be measured and calculated for filling of more cube size in descending order of the largest filled cube eg if height difference is 2 so we can fill more cubes of max order 2x2x2 in correspondence of the remaining depth space available this technique will be performed till no more order cubes can be filled other than unit size eg: if the depth/width is 5 and height is 6 so it defines that in the height column we can still add cubes of order 2x2x2 as after that the total height will be filled by 4+2 =6 as the 4 units of height already occupied by the largest cube filled of order 4x4x4 and their numbers will be determined by (L/2+W/2) Condition is added only pick the whole numberand leave the remainder and if the remainder is greater than 1 or 2 then look for more other cubes in order to lower order to be filled in by same above conditions
Calculate the area of box by LxWxH and minus the total areas of filled cubes the remaining area will define the actual number of cubes of unit order 1x1x1
In the last add the number of cubes filled in box eg: number of largest cubes + number of lower order cubes+remaining area of box when subtracted the areas of filled cubes (actual number of unit size cubes)

Scenerio 2:

Firstly, calculate the area of a cube, other numbers are the power of 2^n such that n = 1, 2, 3, 4 and so on.
Now Sort the cubes in descending order of size.
Try to put the largest possible cube into the box.
Fill the remaining space in the box with the next largest cube.
Count the cubes which you have already filled in the box.
If there’s any unfilled volume left, return -1.

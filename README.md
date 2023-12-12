[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13163213&assignment_repo_type=AssignmentRepo)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature. I have also not provided any test
code, but you can base yours on test code from other exercises.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

## Answer

The time complexity of this implementation is $O(n)$, where $n$ is the length of the input array. 

The function iterates through each element in the array exactly once using a loop. This loop has linear time complexity of $O(n)$. Inside of that loop there is a conditional statement that checks if the current element is equal to the specified 'key'. This operation takes constant time because it does not depend on the size of the input array. Since the dominating factor for time complexity is the linear iteration through the array, the worst-case time complexity is $O(n)$.

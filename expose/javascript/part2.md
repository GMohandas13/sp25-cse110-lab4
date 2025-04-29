1. At Line 12, a 3 will be outputted because that is the value of i after the loop has gone through all its iterations (3 times for the length of the prices array). Since i was declared using var we already know that this means it can be accessed outside of its block. Therefore, line 12 can access it and output the 3.

2. At line 13, a 150 will be outputted because this variable is updated for every iteration of the loop. The last value it gets set to is when the 300 is passed into the loop. So discountedPrice gets set to 300 * (1-0.5), which is 150. Since discountedPrice is declared using var it can be accessed outside the scope of its block and therefore 150 is outputted.

3. At line 14, a 150 will be outputted because the variable finalPrice was also declared using var making it accessible throughout the function. finalPrice is also updated in each iteration of the loop so the last value that gets passed in is the 300. We discussed how this makes discountedPrice set to 150. From here line 7, multiplies it by 100 and then takes that value and then divides it by 100 making it back to 150. Since this variable was defined using var, line 14 can output it giving us a 150.

4. This function will return an array containing the 3 values entered but at a 50 percent discount. So for the reasons listed above as well the discounted array which is returned is: [50, 100, 150]. This code doesn't trigger any errors but it doesn't output anything to the console.

5. At line 12 we will actually trigger a ReferenceError. Unlike the previous question i is not defined using var and instead using let which is block-scoped meaning it doesn't exist outside of the code block it is defined. Therefore i is only accessible within that loop and line 12 trying to access it and output it outside that loop it doesn't recognize any variable named i.

6. At line 13 we run into the same issue as we saw in the last question. discountedPrice was defined using let inside the for loop therefore it's scope is limited to just that code block. Therefore it cannot be accessed outside the loop and at line 13, there is not discountedPrice variable for it to access and it throws a ReferenceError.

7. Line 14 outputs a 150. The reason that this code works even though finalPrice is defined using let is because its block-scope is the entire function because it defined off the rip and outside of any other code block within the function. So in this scenerio its scope is the entire function. Therefore, with the same logic as question 3 we get a 150 outputted.

8. Since everything else about this function operates properly we get the same result as question 4. The array is defined using let but at function-scope level. Therefore even thought discountedPrice is defined with let inside the loop it is only ever used within that loop. So everything works properly and we get an array of each of the prices discounted giving us a return of [50, 100, 150]. 

9. For the same reason as question 5, line 11 tries to access and output the variable i which is defined using let inside the loop. However, because of this, it only exists within the loop and line 11 doesn't recognize any variable named i, and will throw a ReferenceError.

10. Line 12 outputs the value 3. It is defined using const and set to equal the length of the prices array which is 3 when it is passed in. None of the lines attempt to change this value thus no errors are thrown and whne line 12 tries to access and output it, it has no issue because it is defined on a function-level so any code within the function can access it.

11. The function will return [50, 100, 150]. Even though the array is declared using const, this only stops the variable from getting reassigned to another value. What push is doing is simply mutating the array and not reassigning it. Therefore the code works just as it did in previous questions are returns the discounted array.

12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
    
13. 
    1.  32, because the first value 3 is a string so the + in this instance triggers string concatenation so it becomes the string 32
    2.  1, because - doesn't mean string "de-concatenation" so it only works as an operand for arithmetic so we get 3-2 = 1
    3.  3, because the + here is purely arithmetic so null is interpreted as a 0 so we get 3 + 0 = 3
    4.  3null, just like question 1 the first value being a string makes the + trigger string concat so we get 3null
    5.  4, because the + here is purely arithmetic so true is coverted to its decimal value of 1 so 1 + 3 = 4
    6.  0, because neither of these are strings so + is once again arithmetic so we get false converted to 0 and null is 0, 0 + 0 = 0
    7.  3undefined, because 3 is a string so + becomes string concat and we get 3undefined
    8.  NaN, because its - here it can only be purely arithmetic so undefined converts to NaN, 3 - NaN = NaN
    
14. 
    1.  true, since for the >, <, = both have to be strings to do string comparisons, so this is arithmetic where 2 is indeed greater than 1
    2.  false, since this is a comparison between 2 strings it checks the ASCII value in which 12 is less than 2
    3.  true, because the == allows for the type to change, the string 2 is converted to a 2 and 2 does indeed = 2
    4.  false, the === does not allow for any conversions of types and so the numeric 2 is not equal to the string 2
    5.  false, the == does convert true to a numeric value for this comparison but true = 1 and 1 is not equal to 2
    6.  true, the === does not allow for conversion but we sort of typecasted the 2 to a boolean that's true, true === true.
    
15. The difference between == and === is that == allows for the comparison to be made after the convenient type conversions, however === triggers a comparsion without any changes/conversions of the types of both values. So in short == allows for type conversion, and === is a check of both type and value.

16. See JS file 
    
17. The output of this code will be [2, 4, 6]. The way this code works by passing in an array of values as well as a function to be used using callbacks to modify these values. In this case, the callback function doSomething doubles the value passed in by multiplying it by 2. So what this code does is take in the values one by one from the passed in array [1, 2, 3]. It doubles it and places it into newArr which is then returned after all 3 have been processed.

18. See JS file

19. The output of the code is 1 4 3 2. The reason for the numbers in the code being in order but the output not being in order is because of the timeouts. So the 1 and 4 print instantly because all the code executes at once and these will be in order of their output calls. The 2 has a timeout of 1000ms or 1 second so it prints after the 3 which has a timeout of 0ms, this leaves the output in the order we see of 1 4 3 2.
    
    
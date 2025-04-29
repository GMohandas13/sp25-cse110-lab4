1. Line 9 prints out: values added: 20

2. Line 13 prints out: final result: 20

3. We should not use var because var is functions scoped as explained in the lab. This means that it can be accessed anywhere inside the funciton and not only in the block it was defined in. This lack of being block-scoped means that it could be improperly accessed outside and lead to conflicts with variable naming and scope.

4. Line 9 prints out: values added: 20

5. Line 13 triggers a reference error here because the result variable was not defined using var. This means it only exists locally within that if block and therefore when line 13 tries to access that variable outside the block it was defined the variable 'result' doesn't exist.

6. The code actually never reaches line 9 as line 5 trying to assign a value to a const variable triggers a TypeError since const variables cannot be changed after they are initialized.

7. The code actually never reaches line 13 as line 5 trying to assign a value to a const variable triggers a TypeError since const variables cannot be changed after they are initialized.

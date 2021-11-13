# Lab 8 - Chris Harness

### Questions

1)  Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   
    Answer: 1 - Within a github action, although you could run the tests locally, the point I believe is that you can push to non-main branches and create an automated process for testing which speeds up the process - otherwise it's not really "automated" testing.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    Answer: No, I would use a unit test

3)  Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   Answer: No, there are many steps involved in sending a message, and many checks to perform. An E2E test would be preferred.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Answer: Yes, because we can test the length of the message, and the message in text itself could be treated as an individual part of the entire "message" feature. 


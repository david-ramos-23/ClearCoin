# ClearCoin

## Introduction
At Clearpay we have created a new virtual coin called ClearCoin. We need to build a small internal tool to help admin users to transfer ClearCoins between user wallets and see their transactions and balance.

This assessment consists of 2 tasks. One Backend task to design and build a REST API and another Frontend task to implement a little user interface to interact with the tool.

We are looking for a full stack software engineer with strong frontend skills, so we’d like you to focus more on the frontend side rather than in the backend side. A Backend REST API that just supports the Frontend size is enough. Still, backend side will also be evaluated and the better implemented, the more points will give you.

## Technical Requirements
- Backend: Use any backend language and technology you are familiar with. Java and SpringBoot will give you extra points. Consider some storage layer (could be memory or disk, it’s not necessary to keep DB state between executions).

- Frontend: Use React framework. If you feel comfortable, you can use CSS libraries for a base design.

- We would like to see unit tested code for Frontend. We understand this tech test can be a bit long, so although it is not a recommended practice, it’s not a problem if you have no time to deliver Backend unit tests.

- Final task code must compile and ready to run.

- Time limit is 5 days, but if you deliver it sooner, it will be taken into account when evaluating it.

- Bonus: If you feel comfortable using Docker for the application, go ahead!

- Bonus: You can go as far as you want. Be creative! If you want to hide an Easter Egg, that would be great, if you want to add new features go ahead! We like to see fancy things.

## Business requirements
- We need an API rest + admin panel.

- The system will be used by an admin user (to simplify, no credentials for login will be required) - Each user can have 1 or multiple virtual wallets.

- Each wallet has a unique identifier (hash).

- The admin user should be able to access an existing user, access one of the wallets this user holds, check the wallet balance and make a transfer using the hash of a destination wallet. Destination wallet can belong to the same user or to another user of the system.

- The system must validate that there is enough balance before a valid transaction can be made.

# Tasks
1) Design and implement a backend service based on REST API capable of managing the specifications described above. You can model the system as you wish, there are no restrictions on this.
At least the following endpoints are requested:
  - Obtain system registered users.
  - Get wallets per user with the balance.
  - Send money from one wallet to another wallet.
2) Design and implement a UI integrated with the previous REST API having the following features:
  - List registered users.
  - View the available wallets of a user with their balance.
    - Operations panel to transfer ClearCoins from one wallet to another wallet.
3) You can attach a document explaining why you considered the decisions you take to tackle and
implement this challenge.

The test must be delivered back in a compressed file attached or in a repository like GitHub, GitLab, BitBucket, etc.

Thank you! Clearpay Team
CirrusMD code challenge 12/9/2022 Justin Winningham

---Part 1--- ~2 hours 10 minutes

KNOWN ISSUES:
- Infinite loop when trying to pull different pages of github repo issues endpoint, will require manual termination
- Removed personal Github API Key, provide your own please

How to run:
1) Download Repo to local file
2) Run command: npm install
3) Open 'statics.js' and edit the github api key to a valid value
4) Path to Question1 directory
5) Run command: node getIssues.js

Issues:
- Got stuck while passing endpoint query parameters to github api (namely per_page and page). These were not behaving as expected, and was unable to request 100 responses per page, nor was I able to get the endpoint to return other pages. I suspect this is due to a quirk in how the request is being parsed by fetch, as the request url I was using matched the documentation 1:1. The code shows the general idea of my thought process:

1) get a first page, check number of pull_request keys found, add to a holding variable
2) repeat step 1, incrementing the page number until we get to a page with zero results
3) return the number of pull_request keys found


- Had to stop for time restriction to work on #2.

#1 Bonus: we could avoid network calls while testing code by setting up a mock out of postman or similar with a known good payload. Then once we have refined our code to ensure that it would work on the known good case, we can switch the url from the mock to the live github API to verify for real.


---Part 2--- ~ 1 hour 20 minutes

KNOWN ISSUES:
- I usually develop on a mac, not a windows machine. I ran into some (possibly?) windows specific issues getting the framework to run the test, but the syntax, file structure and formatting are correct.
- An extension on the first point, wasn't able to test if all the selectors worked as expected, but they should be very close.

Issues:
- Ran out of time to debug the framework issues. still condifent that if code presented would work (or very close to work) as written

- Would normally be run with <code>npx wdio run ./wdio.conf.ts --spec test/specs/example.e2e.ts</code> from the repo root
# Find matching intervals
A common problem our customers have is that they have a list of when they need employees to work and the employees in turn
have their availability when they CAN work. Given the input of vacant shifts and a list of availability for a single employee,
write a program that outputs a list of all shifts that match the availability. Shifts may overlap and it is up to customer to
then choose which shifts to finally book.

## For example:

Given the following vacant shifts:
```
Shift A1C: 2019-10-28 08:00 - 2019-10-28 17:00
Shift RR4: 2019-10-28 11:00 - 2019-10-28 20:00
Shift CD1: 2019-10-28 14:00 - 2019-10-28 23:00
```

And the following availability for an employee:
```
Availability 5E8: 2019-10-28 09:00 - 2019-10-28 23:00
```

It gives that two shifts could be booked:
```
RR4,CD1
```

## Input and output

The program should read its input data from *stdin* and output the result to *stdout*.
The input data has the following format:
```
<input-data>      ::= <input-row> | <input-row> <input-data>
<input-row>       ::= <type-identifier> <row-id>":" <from-date> <from-time> "-" <to-date> <to-time> <EOL>
<type-identifier> ::= "Shift" | "Availability"
<row-id>          ::= ([0-9a-zA-Z]+)
<from-date>       ::= YYYY-mm-dd
<from-time>       ::= HH:MM
<to-date>         ::= YYYY-mm-dd
<to-time>         ::= HH:MM
```
The `type-identifier` can be either `Shift` or `Availability`. The `alpha-numeric ID` can be any combination of
English alpha-numeric characters (`[0-9a-zA-Z]+`). The `from-date` and `to-date` are both dates in ISO format. Both
time fields are formatted as HH:MM. The input rows will not come in any particular order and shift rows and
availability rows may be interleaved.

The program should output a comma-separated list of Shift IDs that are possible to book given the availability.

## Program structure

The program should be written in Javascript and be compatible with Node.JS version 12. You can clone this repository to get a
skeleton structure where you can add your code in `src/index.js` and then run the project with
```
npm start
```

## Test data
Test data can be found in the file [input-data.txt](https://github.com/TimeZynk/match-intervals/blob/master/input-data.txt).

const transcript = `"""
LIST OF SUBUNITS
5.1 Using the Mean Value Theorem
5.2 Extreme Value Theorem, Global vs Local Extrema, and Critical Points
5.3 Determining Intervals on Which a Function is Increasing or Decreasing
5.4 Using the First Derivative Test to Determine Relative (Local) Extrema
5.5 Using the Candidates Test to Determine Absolute (Global) Extrema
5.6 Determining Concavity of Functions over Their Domains
5.7 Using the Second Derivative Test to Determine Extrema
5.8 Sketching Graphs of Functions and Their Derivatives
5.9 Connecting a Function, Its First Derivative, and Its Second Derivative
5.10 Introduction to Optimization Problems
5.11 Solving Optimization Problems
5.12 Exploring Behaviors of Implicit Relations
END OF LIST
5.1 about the mean value theorem and remember that the idea behind the mean value theorem is that when we take a
1:06
function so we've sketched here a graph of the function and we've zoomed in to a particular interval so this is the
1:12
interval A to B and we can see here that we're at 1 and this is 4 so if we limit
1:18
our graph to some interval like this the mean value theorem says that at some
1:24
point within the interval the instantaneous rate of change is going to be equal to the average rate of change
1:29
that's the takeaway from the mean value theorem we have to be careful of a couple of things though first of all in
1:35
order to use the mean value theorem the function has to be continuous over the interval A to B and notice that this is
1:42
a closed interval here these brackets here tell you that we're dealing with a
1:47
closed interval and a closed interval means that we're including the endpoints of the interval so a equals 1 in this
1:54
case and B equals 4 are included in this interval and then the function also has
2:00
to be differentiable on the open interval these parentheses tell you that the interval is open meaning that the
2:07
endpoints don't have to be included remember also that a function can only be differentiable where its content
2:13
so if you're told that the function is differentiable on a b then you know
2:19
automatically that it's continuous in the interval except you have to be careful of the endpoints because if
2:25
you're told differentiable on this open interval that doesn't necessarily mean differentiable at the endpoints a and B
2:30
but it has to be also continuous at a and B so we have to meet these two requirements in order to be able to
2:37
apply the mean value theorem at all but assuming our function meets these two requirements then the conclusion of the
2:43
mean value theorem is just this so this here this side of the equation is our
2:49
instantaneous rate of change and this side of the equation is our average rate
2:56
of change you'll recognize here the difference quotient and that of course gives us average rate of change over the interval
3:02
A to B and this is instantaneous rate of change or the derivative at a point C
3:07
and so what we're saying here is that if we pick a point C x equals C inside of
3:14
the interval a B so going back to our graph here we have the interval A to B and if we choose a point C and it's
3:21
looking like it's right about here so we'll say that this is the point C so if
3:28
we pick a point C within the interval A to B the intermediate value theorem as long as we meet these two conditions
3:34
guarantees that the derivative at C or the slope of the function at C is going
3:41
to be equal to the average rate of change over the interval and so what this graph is showing us here is this
3:47
lower line this lower light blue line is the average rate of change because it
3:53
connects the endpoints of the function at the end points of the interval so the
3:59
function enters the interval here comes out the interval there so that's the average rate of change over the interval
4:05
1 to 4 the instantaneous rate of change of course is given here by the tangent line this is the line that's tangent to
4:11
the curve at this point C and what you can see is that they are parallel in other words the slopes of the lines are
4:17
equal and that's what this equation here is telling you that the slopes are equal so the derivative is going to be equal
4:24
to the average rate of change those two slopes are equal to one another and of course
4:29
this has all kinds of applications so think about taking a road trip for example if your average speed over the
4:36
course of a road trip is let's say 80 kilometers per hour then the mean value theorem tells you that you must have
4:42
been traveling at exactly 80 kilometers per hour at least at one moment somewhere during the trip because you're
4:49
talking about your average rate of change your average speed over the entire trip compared to your instantaneous rate of change that
4:55
instantaneous speed at a particular moment in time during the trip they have to be equals so if you know your average
5:00
kilometers per hour your average miles per hour then you know that your exact speed at one particular moment in time
5:06
must have been equal to that average somewhere or think about for instance daily temperature so in the morning the
5:13
temperature is low it rises through the middle of the day and then fall so if you think about maybe the outdoor
5:18
temperature on average throughout the morning let's say is increasing by three degrees per hour then that tells you
5:25
that the hourly temperature increase at some point during the morning must have been exactly three degrees or if you
5:31
think about let's say height let's say you're talking about a child who's growing throughout the year and you know
5:37
that the child grew on average a quarter inch per month over the course of the entire year well that was the average
5:44
rate of change over the year that tells you that their monthly rate of change must have been exactly a quarter of an
5:52
inch at some point during the year the instantaneous rate of change must have been equal to the average rate of change
5:58
at some point during the course of the time period that were interested in so just remember if the function meets
6:04
these criteria then the mean value theorem guarantees that there's some point C inside the interval A to B where
6:11
the instantaneous rate of change is equal to the average rate of change
5.2 Extreme Value Theorem, Global Versus Local Extrema, and Critical Points
6:20
there are a couple of things we want to get out of 5.2 the first of which is the definition of the extreme value theorem
6:27
so the extreme value theorem as a reminder tells us that when we have a function f that's continuous on the open
6:33
interval a B the extreme value theorem guarantees that there's at least one minimum point and at least one maximum
6:41
point on that interval a B and it's a fairly obvious theorem because it's
6:46
really just saying kind of if we have a normal continuous function on some interval that functions gonna take on a
6:53
minimum somewhere and a maximum somewhere else so for instance if we look at a graph here if we don't
6:59
restrict the interval of this function at all then we know that the minimum point is somewhere down here because the
7:06
graph is heading down toward negative infinity over here is the lowest value that the function is ever going to
7:12
attain similarly on the opposite end over here this is going to be the maximum of the function because it's
7:20
gonna head up toward positive infinity and it's gonna reach its highest value over here on this side of the curve but
7:26
if we were to for example limit the intervals so let's say we're only looking at the interval here from x
7:32
equals 0 to whatever this x-value is right here so we're only concerned with this interval well in that interval then
7:39
it looks like the function is going to have its highest possible value at this point right here and its lowest possible
7:46
value at this point right here so within this interval this is going to be your
7:52
maximum and this is going to be your minimum if we instead looked at an
7:57
interval like this let's say we say the interval from here to here of the curve
8:03
then the curve is increasing everywhere in that interval so our minimum point is going to be here on the left side of the
8:09
interval and the maximum point is going to be over here on the right side of the interval so we just have to have this
8:15
idea that if we have a continuous function within the interval we're going to have a minimum or a maximum somewhere
8:21
whether it's at the endpoints of the interval or somewhere inside the interval so if we look at another
8:26
example in this function if we don't limit the main or the interval at all we can see
8:33
that the lowest value the function attains is here so this is going to be our minimum now you might say we have
8:40
two maximums one maximum over here and one maximum over here because the function is headed off toward positive
8:46
infinity in both places but the fact that both sides of the graph are going
8:51
to reach positive infinity means that there's just one maximum the maximum value is infinity in other words even
8:59
though the graph reaches that maximum value in two different locations because there's only one maximum value we just
9:06
say that the maximum value is infinity we don't list it twice we don't give two separate answers for the maximum if we
9:12
look at another graph we see a different kind of situation here we can see that on the entire domain of the function
9:19
because it heads off toward negative infinity in both directions the minimum value is going to be negative infinity
9:27
the maximum value is going to be at this point right here let's just pretend that
9:34
that is at let's say five along the y axis so the maximum value then is going
9:40
to be five notice how the function doesn't necessarily have to be differentiable at a maximum or a minimum
9:46
at this point the function is continuous but it's not differentiable because there's a sharp corner or a cusp that
9:53
doesn't matter that's still the maximum value of the function or if we have this function here which is just a flat line
10:00
the maximum and minimum value are at the same point because this is a flat line
10:05
let's call it the line y equals four so let's say this is four here the minimum
10:11
value is four the maximum value is also four so those values can be equal to each other basically you just want to
10:17
get comfortable thinking about maximum and minimum values of a function first over the functions entire domain and
10:24
second over a particular interval when we limit the function to some particular
10:30
interval and we're just looking in that interval and when you're looking in that interval you need to consider the
10:36
endpoints of the interval we also distinguish here between local and global extrema so if we go back to this
10:43
first over here we have this point if we don't limit the functions domain and we just
10:50
look at the entire curve we have these two points here in white this here remember is a local maximum because it's
10:57
the maximum value of the function reaches in this general area in this general neighborhood of the curve even
11:03
though the absolute max is over here because the curve heads off toward positive infinity the local minimum is
11:10
here because this is the minimum in this area in this neighborhood in this region of the curve even though the absolute
11:17
minimum is over here because the function heads off toward negative infinity so we're distinguishing here
11:23
between local or relative maxima and minima like these two points or absolute
11:29
maxima or minima like at these endpoints and then the last thing we need to be able to do in 5.1 is find critical
11:36
points and remember regardless of the kind of function you have this is a simple polynomial function but
11:41
regardless of the kind of function in order to find critical points we simply take the derivative and then set the
11:47
derivative equal to zero and solve for the variable so the derivative here would be f prime
11:52
of x equals 10x plus two and so then in order to find critical points we take
11:59
that derivative set it equal to zero and then solve for x we would get 10x is
12:04
equal to negative 2 or x equals negative 2 over 10 which is negative 1 over 5 so
12:13
the only critical point for this function here is going to occur at x equals negative 1/5 and then in later
12:20
topics we'll look at how to test those critical points to see whether or not they represent local maxima and minima
12:26
like we talked about over here or global Maxima or minima like the global minimum
12:31
that we have here in this function
5.3 Determining Intervals on Which a Function Is Increasing or Decreasing
12:38
five point three is all about figuring out where a function is increasing and decreasing so remember that in the last
12:45
topic we talked about how to find critical points in this one we're going to talk about what to do with those
12:50
critical points so remember that to find a critical point we take the derivative and then we set that derivative equal to
12:57
zero so here it's the same derivative from the last topic the derivative is 10
13:03
X plus 2 so to find critical points we say 10 X plus 2 is equal to zero we
13:09
subtract 2 from both sides to get 10 x equals negative 2 and then we get x equals negative 1/5 this is our one and
13:18
only critical point once we have the critical point remember that one easy way to figure out the behavior of the
13:26
original function is just to graph the critical point on a little line graph
13:32
like this we'll say negative one-fifth and then we want to pick a value on either side of it so here on the left
13:38
side we'll pick negative 2 and on the right side we'll pick zero we take
13:44
negative two and zero and we plug those into the derivative function so when we plug in negative two we get ten times
13:51
negative two is negative 20 negative 20 plus two is a negative 18 so we get a negative value so we'll go ahead and put
13:57
a negative sign there when we plug zero into the derivative we get ten times 0 is 0 0 plus 2 is 2 2 is positive so we
14:06
get a positive value here when we plug in 0 remember that we don't really care what the actual value is what we care
14:12
about is the sign so because we have a negative value over here it tells us
14:17
that the function the original function not the derivative but the original function f of X is decreasing and you
14:23
have a negative here the original function is decreasing so the original function is decreasing on this entire
14:30
interval from negative infinity to negative one-fifth because we have a
14:36
positive sign over here it tells us the original function is increasing from
14:41
negative 1/5 to positive infinity so we say over here the function is decreasing
14:48
here the function is increasing we can do another example so in this example we
14:54
follow the same set of steps we take the derivative G prime of X 3 times 1/3 is 1
15:00
so we get x squared plus 6x plus 5 if we
15:06
set this equal to zero we can factor to get X plus 5 times X plus 1 is equal to
15:15
0 our critical points are negative 5 and negative 1 and so we draw that same
15:22
graph here but this time we have two critical points so we say negative 5 and
15:29
negative 1 remember you always want to graph these from left to right with the smallest value on the left the largest
15:36
value on the right so most negative on the left most positive on the right so in this case we would need to check each
15:42
interval so we could pick over here the value of negative 6 here we could pick
15:48
let's say negative 2 and here we could pick 0 and those would be our test
15:53
values for each interval we'd plug them into the derivative function so negative 6 plugging into the derivative function
15:59
we get negative 6 squared is positive 36 6 times negative 6 is a negative 36 so
16:05
those two cancelled is 0 we're left with positive 5 our sign here is positive plugging in negative 2 we get positive 4
16:13
minus 12 as a negative 8 plus 5 is a negative 3 so we get a negative value
16:18
and plugging in 0 we get 0 0 and positive 5 so we get a positive value so
16:23
we know right away on the interval negative infinity to negative 5 the
16:30
function is increasing from negative 5 to negative 1 the original function is
16:36
decreasing and from negative 1 to positive infinity the original function
16:41
is increasing remember that what we're doing here is using the derivative function to describe the behavior of the
16:48
original function so when we say increasing decreasing increasing that tells us what the original function is
16:55
doing we're just using the derivative to figure that out and then we can also have a function like this 1 keep
17:01
mind if we take the derivative here to get H prime of X the derivative is 6 so
17:08
to find critical points we would set that equal to 0 and we'd say 6 equals 0 well this can't possibly be true
17:14
so don't get confused here this just means there are no critical points and of course that makes sense because the
17:20
original function is y equals 6x which we know is a line and a line never
17:27
changes direction it's never increasing and then all of a sudden decreasing or decreasing and then all of a sudden
17:32
increasing it's either always increasing or it's always decreasing depending on
17:37
the sign of the slope the slope here is positive so this function is increasing
17:43
everywhere we didn't find a critical point because the function never changes direction from increasing to decreasing
17:49
or vice versa so we need to be able to find critical points and figure out
17:54
increasing decreasing behavior from functions but we also need to be able to do it from graphs so if we're looking at
18:01
a graph here we need to be able to say this is the original function here so
18:06
not this same f of X but just a different f of X function if this is the
18:11
graph of the original function we need to be able to look and say that on this interval here the function is
18:19
increasing but then on this interval here the function is decreasing and then
18:28
again from this point to this point the function is increasing again and then
18:34
from this point until as far as we can see the function is decreasing so if
18:40
we're just moving up into the right we're increasing if we're moving down as we move to the right the function is
18:45
decreasing we need to be able to evaluate from the graph we also though want to be able to figure out the
18:51
behavior of the original function based on the graph of the derivative so notice here we're talking about the
18:58
derivative function this is the graph of the derivative function not the original function like we had over here we want
19:05
to be able to use this derivative function to say what the original function is doing and here are the three
19:12
key things that we need to know we need to that when the derivative has an x intercept so when it crosses the x-axis
19:19
which in this case happens at these two points right here wherever the derivative crosses the
19:25
x-axis the original function has a critical point so we could write that this way we could say when F prime of X
19:33
is zero f of X the original function has a critical point we also need to know
19:41
that when the derivative function is positive meaning that it is above the x-axis then the original function is
19:48
increasing so we can see that the derivative is above the x-axis on this
19:53
interval right here so just for this section of the graph before it crosses the x-axis then it is below the x-axis
20:01
on this interval here and then again above the x-axis on this interval here
20:09
so we can say when F prime of X is positive then the original function is
20:17
increasing and when the derivative is negative meaning it's below the x-axis
20:25
the original function is decreasing so
20:31
based on the graph here if we call this point a and if we call this point B
20:37
these x-intercepts here then we could say that the original function f of X
20:43
has critical points at a and B that it is increasing from negative infinity to
20:50
a and it's increasing from B to positive infinity so on those intervals and that
20:56
it's decreasing on the interval A to B so that's how you would use the graph of
21:02
the derivative to understand the behavior of the original function associated with that derivative function
5.4 Using the First Derivative Test to Determine Relative (Local) Extrema
21:14
remember that in topic 5.3 we looked at how to figure out where a function was increasing and decreasing well in topic
21:21
5.4 here all we're doing is using that increasing decreasing behavior to draw a
21:26
conclusion about the local or relative extrema of a function well remember that
21:31
we use these two functions here and we did all of the calculations to find critical points so let's look at this
21:37
first function here we started with 5x squared plus 2x minus 1 we found the
21:43
derivative we set the derivative equal to zero and then we solved for X and we found a critical point at x equals
21:50
negative 1/5 we sketch that on a number line and then we picked values on either
21:55
side one to the left and one to the right and we plugged those into the derivative function so we plugged them
22:01
into the derivative function negative 2 plugging negative 2 into the derivative gave us negative 18 so what we said was
22:09
that we got a negative value so we got a negative value here and that tells us that the original function f of X is
22:16
decreasing on this interval when you get a negative value tells you the original
22:21
function is decreasing when we plugged 0 into the first derivative we got positive 2 that's a positive value so we
22:28
get a positive value here which tells us that the original function is increasing so now that we have this decreasing
22:35
increasing behavior we can draw a conclusion about the relative or local extremum that occurs at the critical
22:42
point negative 1/5 well when a function is decreasing to the left of the critical point and then
22:48
increasing to the right you can see it visually right the function is decreasing to the left of negative 1/5
22:55
and then increasing to the right of negative 1/5 so this is what the
23:00
function would look like in general which tells us we can visualize it right here that this critical point negative
23:07
1/5 represents a local minimum it's a minimum point along the function because
23:13
if we're decreasing coming down and then increasing this has to be a minimum so
23:18
we can conclude that negative 1/5 represents a local
23:24
minimum let's look at another example with our function G of X that we looked at before so the same thing here
23:31
remember before in topic 5.3 we looked at this function we took the derivative then we set the derivative equal to zero
23:38
and then we solved for X this one we did by factoring so we factored and we got x
23:44
equals negative 5 or x equals negative 1 we plotted those critical points
23:49
negative 5 and negative 1 on a number line and then we picked a value on each interval then we take each of those
23:55
values and we plug them into the derivative function so when we evaluated the derivative at negative 6
24:02
we got positive 5 so we got a positive value so we go positive here when we
24:08
evaluate it at negative 2 we got a negative value and when we evaluate it at 0 we got a positive 5 again so
24:15
positive value so we get positive negative positive when we sketch what
24:21
that graph would look like we know that the function here is increasing because
24:29
we got positive value then decreasing and then increasing and like I said if
24:35
we sketch that with a curve it's going to be increasing here or something like
24:41
this until we get to negative 5 then decreasing until we get to negative 1
24:47
and then increasing to the right there and so we can see very clearly in this
24:54
quick visual sketch that the function has a local maximum at the critical
25:00
point x equals negative 5 and a local minimum at the critical point x equals negative 1 because for any critical
25:06
point if the function is increasing to its left and decreasing to its right it's going to be a maximum if it's
25:12
decreasing to its left and increasing to its right it's going to be a minimum so this represents a local maximum and this
25:23
represents a local minimum and that's all that the first derivative test is
25:29
telling us it walks through all these steps to take the derivative find critical points pick test values in
25:36
between each critical point on interval plug those test values into the
25:41
first derivative that's why it's called the first derivative test plug into the first derivative get signs for each of
25:48
these values so positive negative positive or over here negative and positive and then if it's positive its
25:53
increasing if it's negative its decreasing the original functions behavior and based on that increasing
25:59
decreasing behavior we can determine a local maximum or a local minimum and later on we'll talk about how we can
26:07
determine whether or not those local extrema the local maximum or the local minimum a relative maximum relative
26:13
minimum whether or not they may also represent absolute or global extrema in
5.5 Using the Candidates Test to Determine Absolute (Global) Extrema
26:23
the previous couple of topics we looked at this function here G of X and we took
26:30
its derivative we set the derivative equal to zero and then we solved that equation to find the critical points
26:36
negative 5 and negative 1 once we had those critical points we plotted them on a number line from left to right and
26:43
then we took each of those test values negative 6 negative 2 and zero and plugged them into the first derivative
26:50
to see what values we would get we got positive 5 negative 3 and positive 5 and
26:55
so for each of those test values we found positive negative and positive 4
27:01
positive 5 negative 3 and positive 5 and that told us that the function was increasing for this interval decreasing
27:08
for the middle interval and then increasing again for the interval here on the right the first derivative told
27:14
us that based on that increasing decreasing pattern we have a local maximum at negative 5 and a local
27:20
minimum at negative 1 and we can see that visually when we sketch this increasing graph decreasing graph and
27:26
then increasing graph again the point of topic 5 point 5 is once we get to this
27:32
point we want to be able to impose some interval on this function and then use
27:39
the candidates test to determine absolute or global extrema over that particular interval so for instance our
27:46
critical points here are negative 5 and negative 1 let's draw a new number line with those
27:52
in there so we found critical points negative 5 and negative 1 let's say that
27:59
we had been asked to find extrema on the interval negative 8 to positive 8 well
28:04
if that was the case then both critical points are included inside of that
28:09
interval but if we had been asked instead for example to look at the interval we'll say here negative 4 -
28:17
let's say positive 2 then that would only include the critical point negative 1 so whichever interval you're given
28:25
let's say here that we're gonna deal with the interval negative 4 to positive 2 whichever interval you're given you
28:33
need to only consider critical points that fall within that interval and so in this case even though there is a
28:38
critical point at negative 5 we wouldn't consider it because it's outside the interval the candidates it's called the
28:45
candidates test but the candidates that we have to look at include the critical
28:53
points in the interval and they also include the endpoints both endpoints of
29:00
the interval so in this case imposing the interval negative 4 to 2 our
29:06
candidates would be negative 4 the left endpoint negative 1 the only critical
29:12
point that's inside that interval and positive to the right edge of the interval the candidates test tells us
29:19
that we take all of our candidates and we plug them into the original function G of X not the derivative but the
29:25
original function to see what the value of the function is at each of those candidates so let's do that let's say G
29:32
of negative 4 is equal to we'll say 1/3 times negative 4 cubed plus 3 times
29:40
negative 4 squared plus 5 times negative 4 and the result here is going to be
29:48
negative 64 over 3 we have a positive 16 times 3 is a plus 48 and then we have
29:57
minus 20 that comes out to positive 20 over 3 or about
30:05
6.67 we'll try the other two candidates so G of negative one is equal to we get
30:12
1/3 times negative 1 cubed plus 3 times negative 1 squared plus 5 times negative
30:21
1 and the result here is a negative 1/3 plus 3 minus 5 that's going to give us
30:28
negative 7/3 or approximately negative 2
30:34
point 3 3 and then we'll try the right endpoint or the right edge of the interval so G of 2 is equal to 1/3 times
30:44
2 cubed plus 3 times 2 squared plus 5
30:50
times 2 and here we get 8/3 plus 12 plus
30:56
10 that gives us 74 thirds or about 24
31:03
point six seven once we've evaluated our original function at each candidate then we
31:09
simply have to compare the values of the candidates the one with the highest value is going to be the absolute or
31:15
global maximum the one with the lowest value is going to be the absolute or global minimum and then any other
31:22
critical points inside of the interval would just represent local or relative extrema so in this case because 24 point
31:30
6 7 is the highest possible value that is the global maximum so we have a
31:38
global maximum at x equals 2 by the candidates test and the smallest value
31:44
is this negative 2 point 3 3 so this is going to be our global minimum at x
31:52
equals negative 1 and so the candidates test is letting us find those absolute
31:57
or global extrema we just have to remember to include any critical points we find within the interval we ignore
32:05
critical points outside the interval and we have to include the endpoints of the interval we test then all of those
32:12
candidates in the original function and the smallest value gives the global minimum the largest value gives the
32:17
global maximum
5.6 Determining Concavity of Functions over Their Domains
32:23
the focus of topic five point six is to find inflection points and determine the
32:28
concavity of the original function so let's continue working with this function that we've seen before it's
32:34
this G of X function here we've already found the first derivative we know it's x squared plus 6x plus five when we're
32:41
talking about finding inflection points we start by taking the second derivative so we say G double prime of X is equal
32:48
to two x plus six and then just like before when we took the first derivative
32:54
what did we do with that first derivative well we set it equal to zero we solved for X to find critical points
33:01
same thing here once we take the second derivative we set it equal to zero so 2x plus 6 equals
33:07
0 and we solve for X to find this time inflection points so we subtract 6 from
33:12
both sides 2x equals negative 6 x equals negative 3 this is our inflection point
33:21
an inflection point is the point at which the graph changes from concave up to concave down or vice versa
33:27
from concave down to concave up in order to figure out which way the graph is going we do the same thing that we did
33:34
before with the first derivative we plot this inflection point on a number line so we pull up a number line here we
33:43
graph x equals negative 3 right in the middle and we pick test values on either side so let's say we pick negative 4 and
33:50
over here we pick 0 to make it easy to evaluate keep in mind here that we're
33:55
going through exactly the same process with the second derivative that we did with the first derivative remember that
34:01
with the first derivative we took these test values and we plugged them into the first derivative to tell us where the
34:08
original function was increasing and decreasing well now we're just one layer down right
34:13
we took the derivative again well instead of thinking about the original function and the first derivative pretend for a second that this is the
34:20
original function and this here is its first derivative ignore G of X
34:27
completely pretend that we started with this derivative function but let's say this was the original function
34:32
and this was the first derivative this function then is going to tell us where this function is increasing and
34:38
decreasing in the same way that before this function told us where this function was increasing and decreasing
34:44
we've just moved everything down a layer so this process of picking test values
34:50
and plugging them into this second derivative is going to tell us where the
34:55
derivative function G prime of X is increasing and decreasing and also where
35:00
the original function is concave up and concave down so if we plug these test values into the second derivative
35:06
just like before we plugged our test values from the first derivative into the first derivative we're plugging our test values from the second derivative
35:13
into the second derivative we get here G double prime the second derivative of
35:18
test value negative 4 is 2 times negative 4 plus 6 is a negative 8 plus 6
35:25
is a negative 2 the other test value is 0 so G double prime of 0 is 2 times 0
35:33
plus 6 is 6 what we get then is that negative 2 is a negative value so we get
35:41
a negative here positive 6 is a positive value so we get positive here that tells
35:46
us that the first derivative is decreasing over here and increasing over
35:52
here it tells us that the original function is concave down on this
35:57
interval and concave up on this interval remember that something that is concave
36:04
down looks like this and something that's concave up looks like this and
36:12
that point in the middle the inflection point is where the graph changes
36:18
concavity from looking like an upside down Bowl to a right-side up Bowl or like a frown to a smile
36:25
so just remember from this part that inflection points exist where the second derivative is equal to 0 and that when
36:31
we plug these test values into that second derivative a negative result means that the original function is
36:37
concave down in that interval a positive result means that the original function is concave up in that interval
36:48
in 5.7 we want to remember how to use the second derivative test to identify
5.7 Using the Second Derivative Test to Determine Extrema
36:53
local extrema so we've been working with this function G of X we've already taken
36:59
its derivative we set the derivative equal to zero to find critical points and we found two critical points we
37:05
found x equals negative five and x equals negative one and previously we
37:10
saw that we could use the first derivative test to identify whether or not these critical points represented a
37:16
local maximum or a local minimum but instead of the first derivative test we
37:21
can alternatively use the second derivative test we've already found the second derivative of G of X it's 2x plus
37:28
6 so this is our second derivative once we have the critical points and the second derivative the second derivative
37:34
test tells us that we can plug those critical points into the second derivative when we do that we'll plug in
37:41
negative 5 first we get negative 5 is equal to 2 times negative 5 plus 6 is a
37:48
negative 10 plus 6 or a negative 4 the other critical point negative 1 gives 2
37:56
times negative 1 plus 6 is a negative 2 plus 6 or a positive 4 when we get a
38:03
negative result like we did here that tells us that that critical point
38:10
represents a local maximum so we know that there is a local maximum of G of X
38:15
at the critical point x equals negative 5 when we get a positive value it tells
38:21
us that there's a local minimum or a relative minimum at that critical point
38:28
so the original function G of X has a local minimum at x equals negative 1 2
38:34
things to really remember here we're plugging in critical points to the second derivative not inflection points
38:40
we tend to think about critical points matching up to the first derivative and inflection points matching up to the
38:45
second derivative but we're not plugging in inflection points we're taking the critical points from the first derivative and plugging them into the
38:52
second derivative that is the second derivative test the second thing to remember is that these can
38:58
solutions feel backwards so when we get a negative value that tells us there's a local maximum when we get a positive
39:04
value that tells us there is a local minimum which feels counterintuitive you would think it would be negative with
39:10
local min and positive with local max but it's the opposite way so important
39:15
to remember both of those things also if we get a zero value here when we plug a critical point into the second
39:21
derivative so if instead of negative 4 or positive 4 if we've gotten zero for one of these answers then the second
39:28
derivative test is inconclusive we may still be able to use the first derivative test like we did before but
39:34
we cannot use the second derivative test it's inconclusive if we get a zero value one other thing that we can say here is
39:40
that when we have only one critical point in this example here we had two critical points so this would not apply
39:46
here to this particular problem but when we have only one critical point and we
39:52
use the second derivative test to determine for instance that it's a local maximum then we know right away that
39:58
that point is also the global maximum if we only have one critical point and we
40:04
find that it is the local minimum then we know that it is also the global minimum by definition and that makes
40:11
sense because if we have for instance a simple set of axes like this and we know
40:17
that there's just one critical point if there's one critical point that means the function only changes Direction one
40:23
time for example when we have a parabola like this the function only changes
40:29
Direction at this one point and because there's one change of direction if we
40:35
find that that point is a local minimum then of course it's also the global minimum because the function is heading
40:41
up toward positive infinity here in both directions so that's going to be the global minimum as well if the parabola
40:46
was flipped upside down we found one critical point and said that it was the local maximum it has to also be the
40:52
global maximum
40:57
in 5.8 we want to be able to take the graphs of functions and sketch the derivatives of those functions and vice
5.8 Sketching Graphs of Functions and Their Derivatives
41:04
versa so for instance we might be given this set of graphs here where we have graphs
41:11
of f of X along the left and we're asked to sketch the derivative functions along
41:16
the right the chart I like to use that I've made for these kinds of graphs sketching problems is this one here and
41:23
we'll use it in the next topic as well but basically what it shows you is the features of the original function f of X
41:29
and how they correspond to the features of the derivative function and the features of the second derivative
41:35
function and you notice this sort of cascading waterfall effect where this information critical point increasing
41:41
decreasing moves from the original function column down into the first derivative column and then down again
41:47
into the second derivative column same thing here with the zero positive negative information how it moves down into the right and the inflection point
41:53
concave up and concave down information so for instance if we're given this first graph here of f of X we can see
42:01
that it's a cubic function just by the shape of it it's a third degree function and we know with third degree functions
42:08
that they have a critical point right here where the function changes concavity so that's telling us that the
42:14
original function f of X has a critical point so we know that the derivative function is going to be equal to zero
42:21
it's going to intercept the x-axis at that same point so if this critical point is you know roughly here if we
42:29
translate that to the other graph here maybe that's about right here so we can
42:36
say that the derivative function is going to intersect the x-axis at that point what else do we know about the
42:42
original function well we can see that it's increasing everywhere right so when the original function is increasing that
42:49
means the derivative function is going to be positive so we know that the derivative function is going to be
42:54
positive everywhere meaning above the x-axis because this function is increasing everywhere we also know that
43:01
when the original function is concave down like it is here to the left of the
43:06
critical point when it's concave down the derivative function is going to be decreasing and when it's
43:11
concave up like it is to the right of this critical point the derivative function is going to be increasing so if
43:19
we put that together what we see is that we're going to have to the left of the critical point decreasing then
43:24
increasing always staying above the x-axis so to accomplish that we could draw a graph that looks something like
43:31
this decreasing then increasing and always staying above the x-axis except
43:38
where we intersect the x-axis at the corresponding here critical point so
43:43
this could be a probable graph of the derivative here when we have the original function f of X given to us as
43:50
a parabola we can mark it up a little bit more so we can say here that we have
43:55
a critical point we know that on this interval here the function is decreasing
44:03
and on this interval here the function is increasing and we know that on the
44:11
entire interval so this entire thing here we are concave up everywhere so
44:19
translating that information over to the graph here we're going to take all of these characteristics of the original
44:26
function in the first column and move them over to the derivative in the second column so decreasing means the
44:32
function is going to be negative to the left of the critical point increasing means the function is going to be
44:37
positive to the right of that critical point the fact that there is a critical point here means that's where the
44:43
derivative is going to intersect the x axis where it's going to be zero so if we take that critical point and we plot
44:49
it it looks like it's about right here we know that we're going to have negative to the left positive to the
44:55
right and concave up everywhere tells us that the derivative is increasing everywhere so it seems like the only way
45:03
to get that is something like this a line right negative to the left of the
45:09
critical point because we were decreasing to the left positive to the right of the critical point because we
45:15
were increasing to the right increasing everywhere because we were concave up everywhere and an x-intercept
45:21
here at the point that corresponds to that critical point so notice how we're just translating one piece of
45:26
information at a time same thing over here with this line graph it's increasing everywhere which means the
45:33
derivative function is going to be positive everywhere there's no critical point which means it's never going to
45:39
intersect the x-axis it's never going to be zero it's never going to be negative there's no inflection point which means
45:46
here there's no critical point it's not going to change direction so the only thing then that makes sense is a line
45:52
something like this for the derivative function so we're sketching the graph of
45:58
the derivative from its original function notice also here too that especially when it comes to polynomial
46:03
functions like these so we know that this is some kind of third degree function it has an X cubed term we know
46:09
this is a parabola it's some kind of quadratic function which means it's got an x squared term and we know this is a
46:15
line so it's a first-degree function notice here that when we take the derivative to get the derivative
46:21
function we end up here with an x squared function here with an X function
46:26
and here with some constant function C and that makes sense because when we take the derivative x cubed using power
46:33
rule is going to become some x squared term x squared is going to get its degree reduced to be just an X term and
46:40
X the derivative of that is going to be some constant so these graphs make sense
46:46
in terms of their relationship this is going to be a cubic function the derivative of that would be a quadratic
46:52
function if we keep going from a quadratic function we get a line if we keep going from a line we get a flat
46:58
line just a constant so these graphs need to make sense in context as well and we also want to be able to go the
47:05
other way so pretend for a second that we were only given these derivative graphs and we wanted to sketch the
47:11
original function well if we had been given this graph a parabola first of all we know right away that the graph of f
47:17
of X is going to be cubic if we had been given this graph a line we know right away the graph here is going to be a
47:23
parabola and if we're given a flat line like this we know right away the graph is going to be a line so we know the
47:29
general shape and then all we do is use our table here to translate specific information for
47:35
since here with the parabola the fact that it intersects the x-axis at this point right here we know that that's
47:41
going to correspond to a critical point over here in the cubic function so we can plot that somewhere along this same
47:49
corresponding vertical line here so we need to be able to do this from graphs and go both ways from f of X to its
47:56
derivative or from its derivative back to f of X we also want to be able to do this with the second derivative function
48:02
if we're given the second derivative function we want to be able to find the first derivative function and then the original function or starting with
48:09
either one of these go find the second derivative graph we also want to be able
48:14
to do this from tables of information and we do that simply using this chart
48:19
here so for instance if we're given a table of information so let's say we have x and f of X in a table like this
48:26
and we're given specific information about these values and we're going to
48:33
call this the derivative function if we know that the value of the derivative is zero so let's say we have a zero value
48:39
here and this is at let's say x equals three we know that the original function f of X is going to have a critical point
48:46
right here at x equals three because the value of the derivative is zero if we're then told that at x equals four the
48:53
value of the derivative is one well this is a positive value so the derivative function has a positive value which
49:00
means we know the original function is going to be increasing if at five the
49:05
derivative function is negative three we know that the original function is going to be decreasing when X is equal to five
49:12
so you can see how we can translate this information either from a table or from a graph kind of mentally plug it into
49:19
this chart and use that to sketch graphs of the original function the derivative
49:26
function or the second derivative function given information about one of its associated functions
5.9 Connecting a Function, Its First Derivative, and Its Second Derivative
49:37
in topic 5.9 we're going to be working more with this chart here and what we
49:42
really want to be able to take away is again just the connection between the graph of the original function the graph
49:48
of its first derivative and the graph of its second derivative so we're going to take a deep dive into an example here
49:54
where we start with the graph of the first derivative in fact the graph is going to look like
49:59
this and we're going to use this graph along with this chart to find a possible
50:04
graph of the second derivative and a possible graph of the original function based on what we know here about the
50:11
first derivative let's start by working on the graph of the second derivative what we're going to do is take all the
50:16
information we have here about the first derivative and compare it here to the column about the first derivative and
50:22
then we're going to translate that over into the second derivative column so let's start here with the critical
50:28
points of the first derivative we can see that the first derivative has critical points here where it changes
50:34
direction and here at 2 & 4 well we know the second derivative is going to intersect the x-axis or be zero at those
50:43
two points so we'll go ahead and sketch the x-intercepts here at 2 and at 4 so
50:51
those are two points we know are going to be on the graph of the second derivative function then we know from
50:56
the first derivative what about where it's increasing well its increasing here to the left of 2 and then it's also
51:04
increasing to the right of 4 we know wherever the graph of the derivative is increasing our second derivative is
51:11
going to be positive so we know that over here the graph is going to be
51:17
positive and over here the graph is going to be positive meaning it's going to be above the x-axis but then let's
51:25
look at where the first derivative is decreasing it's decreasing between 2 & 4
51:30
that's where the second derivative is going to be negative so we know that here between 2 & 4 our second derivative
51:36
function is going to be negative it's going to be below the x-axis so we've
51:42
got positive up here down to negative up to positive that means we know right away that we're going to be crossing the
51:49
x-axis in this direction so it's going to look something like this and something like this because we're going
51:54
to be above the x-axis then under it then above it again so we have to come
51:59
in this way and come out that way what about inflection points on the first derivative well we can see that we have
52:06
an inflection point right here at x equals three and when the first
52:12
derivative graph has an inflection point the second derivative graph has a critical point so we know we're going to
52:18
have a critical point at x equals three well maybe that critical point is down here we know it has to be below the
52:25
x-axis because it's on this interval here where the graph is negative so our critical point could be there and the
52:31
graph is going to change direction there which makes sense because we're coming in this way and we're coming out this
52:36
way and then we know that the first derivative function is concave up to the right of three which means that our
52:43
second derivative function is increasing to the right of three so it's really starting to look like this we're
52:49
starting to see it increase from this critical point here up through this
52:55
point like this and we know that the first derivative is concave down to the
53:01
left of x equals three which means that's where our second derivative is decreasing so everything to the left of
53:07
x equals three has to be decreasing so it's really starting to look like this coming through this point decreasing and
53:15
like this that's the graph that matches the data we've been given and we don't
53:21
know exactly what the function looks like but we do know here that we have a critical point down here below the
53:27
x-axis where the curve changes direction and we do know that we intersect the x-axis at these two points because
53:34
that's where the first derivative has critical points other than that we know where were above and below the x-axis so
53:40
this is about as close as we're going to get to an estimation of what the second derivative curve looks like now if we go
53:47
the other way starting with our first derivative curve here we're going to look at these first six pieces of
53:54
information because those are the ones we can translate over to f of X so where is the derivative zero
54:00
well the derivative is zero at one three and five so that's where our function is
54:06
going to have critical points so let's just go ahead and say we're going to have critical points at one at three and
54:13
at five we don't know yet whether or not those are going to be above or below the x-axis but we know that the function is
54:19
going to change directions at those points we know the derivative is positive here from one to three that
54:28
means our original function is increasing between 1 and 3 so let's just go ahead and draw like a vague
54:34
increasing here we also know that this first derivative curve is positive to the right of x equals 5 so we're also
54:42
going to have increasing here to the right of x equals 5 the derivative is
54:47
negative to the left of x equals 1 so because the derivative is negative we
54:52
know the original function will be decreasing so to the left of 1 we know we're going to have decreasing and then
54:59
we're also negative from 3 to 5 so from 3 to 5 we know the original function is
55:05
decreasing so from 3 to 5 we've got decreasing something like that then we
55:11
know that we have critical points on the first derivative function at 2 & 4 well we're going to have inflection points
55:17
there on the graph of f of X so at 2 & 4 2 & 4 we have inflection points so we've
55:25
got inflection points here where we change from what's looking like concave up to concave down and then here at 4
55:32
from concave down to concave up and then we know that the derivative function is
55:38
increasing to the left of x equals 2 which means our original function is
55:43
going to be concave up to the left of x equals 2 so x equals 2 and that makes sense right this looks like concave up
55:50
we're also increasing here on the first derivative function to the right of 4 so
55:55
to the right of 4 yes this also looks like concave up here but we're decreasing from 2 to 4 which means we're
56:03
going to be concave down from 2 to 4 and that looks correct as well we don't know whether we're going to be above the x
56:10
axis below the x axis or we're going to cross it we're but we do know here that we are
56:16
decreasing until we hit this critical point at x equals one we are also
56:22
concave up this whole time then we continue on until we hit this inflection
56:28
point at x equals two and now we're going to start being concave down we're
56:33
going to be concave down until we hit this critical point at x equals three
56:39
we're gonna maintain our concave down until we hit this inflection point at x
56:45
equals four then we're gonna go concave up again and here we're going concave up
56:51
until we hit this critical point where we change direction but we're still concave up and then our graph must look
56:58
something like that that's about as good of an estimation as we can get of the original function but
57:03
again the whole idea here is just to be able to relate these three functions to each other and I think the easiest way
57:10
to do that is with this chart you may find it helpful to memorize this chart if you do that you really only have to
57:17
memorize this middle section right here because of this sort of cascading
57:24
waterfall nature of the chart as long as you have this you know that you can move
57:29
these blue and white sections up and to the left here and the purple and blue sections down into the right here and
57:35
make this whole thing but it may be worthwhile since these kind of problems can be confusing but they're also used a
57:41
lot on the AP test especially in the free response questions too when you take the AP test very quickly jot this
57:48
down from memory so that you can then visually look at it and use it as a double check to make sure that you're
57:55
getting this information correct that you're translating the information correctly from one graph to the other
58:00
because you may be given a graph of the original function and asked to find the first and second derivative graphs or
58:06
given the first derivative graph and asked to find the other two or even given the second derivative graph and
58:12
asked to find the other two so you want to be prepared to move in any direction given different pieces of information
58:17
about the curves and your whole goal is just to use this chart to translate back
58:23
and forth from one curve to the other to associated curve
5.10 Introduction to Optimization Problems
58:32
in topic 5.10 we're going to do an introduction to apply to optimization problems and the idea here is just that
58:39
in past topics we learned that when we had some function like this one some curve that we could use the derivative
58:46
of the function that models this curve in order to find critical points and then use the first derivative test to
58:52
determine whether or not those critical points represented relative maxima or minima for instance with this function
58:59
we can see that it looks like the maximum is occurring here if we were to use our normal procedure we would see
59:06
that this is a maximum of the function but when this function becomes something
59:11
that models a real-world concept like let's say for instance that we call this
59:16
function maybe a of X instead of a normal f of X function we call it a of X
59:22
because let's say that this function the a of x function models the area let's
59:28
say the area of a rectangle when we now go through the same optimization process
59:33
where we take the derivative set it equal to 0 find critical points use the first derivative test to classify those
59:39
critical points and we come out with this maximum what we see is that this is
59:44
the point at which area is maximized so it's a real-world value that's getting
59:49
maximized or maybe the function a models acceleration of a vehicle and so this is
59:55
the point that maximizes acceleration the point is that this function could model anything it could model area it
1:00:02
could model volume it could model surface area those are all geometric applications but it can also model a
1:00:08
business's profit for a different level of production or a different level of sales and this is the point at which
1:00:14
profit is maximized so when we all of a sudden transition this idea of finding a
1:00:20
critical point and determining whether or not it represents a maximum or minimum when we translate that concept
1:00:25
into the real world things get really interesting because we're now able to find the value that maximizes or
1:00:32
minimizes something that we really care about in a real-world context so that's
1:00:38
just the idea of transitioning this to the real world we're still going to be following the same steps when we have a function so even if
1:00:44
our function models profit we're still going to first of all come up with an equation in terms of one variable if we
1:00:52
haven't been given an equation already we're then going to differentiate that function set the derivative equal to
1:00:58
zero and find critical points by solving that equation then we're going to use
1:01:04
the first derivative test to test those critical points and determine relative extrema so find a maximum or a minimum
1:01:10
for the function and then based on what we found we just have to make sure that we answer the actual question that's
1:01:18
being asked just because you find a critical point and determine that it's a relative maximum or a relative minimum
1:01:24
the actual question we're being asked on our final exam or on the AP test might be slightly different than just locating
1:01:31
the maximum or minimum so we have to interpret our answer in context and make sure that we're actually answering the
1:01:37
question that's being asked and then in the next topic we're going to look at actually how to solve these optimization
1:01:42
problems
5.11 Solving Optimization Problems
1:01:48
in topic 511 we want to be able to solve these real-world optimization problems
1:01:54
so let's walk through an example so that we can see what the process looks like even though you're going to face all
1:01:59
different kinds of optimization problems the process is always the same so the
1:02:05
first thing we want to do of course is read through the problem and in this one we've got a 10 by 10 inch piece of paper
1:02:11
that has squares with side length X cut from each corner such that folding up
1:02:16
the sides creates an open top box and we're asked to find the value of x that maximizes the volume of the box the
1:02:23
first thing I always like to do is draw a picture so we've got a 10 by 10 inch
1:02:28
paper so that means that we have a square paper let's go ahead and draw it
1:02:33
like this so let's say that this is our square paper and we know that the side
1:02:39
lengths are 10 so we have 10 by 10 and we're dealing here with inches okay we
1:02:46
have squares with side lengths X cut from each corner so that means we're going to cut out a square from each
1:02:53
corner so that's going to look like this if we cut out a square from this corner it looks like this and that Square has
1:03:01
side length X so let's go ahead and apply that to all three of the other corners okay so now it says folding up
1:03:10
the sides creates an open top box so we can actually see that here if we were to
1:03:15
fold up the side so if we imagine folding along this line taking this side
1:03:21
and folding it up along that line and we fold along this line here and we fold
1:03:28
along this line here and then we fold along this line here what we see is that
1:03:35
we're going to get a box that has no top so we could sort of sketch that this way
1:03:41
we could say our box is going to look something like this if we draw some
1:03:47
lines in here so the box maybe will look like this in 3d and then it has no top
1:03:56
which means that we can see through it here so it's gonna maybe look like this
1:04:02
and then like this and then something like that and this is the bottom of the
1:04:10
box here if we shade that in this is the bottom of the box in the same way that
1:04:16
this is the bottom of the box here so we can see how it's a box that has no top
1:04:23
it's an open top box we've been asked to do is find the value of x that maximizes the volume of the box where X is the
1:04:30
side length of these little squares that we've cut from the corners so that's the next thing we really want to realize
1:04:35
what we've been asked for it says maximizes the volume so whatever you're
1:04:42
being asked to maximize or minimize sometimes will be asked to minimize the volume or maximize the profit or
1:04:48
whatever but whatever you're being asked to maximize or minimize that's the equation that you want to write so
1:04:55
because we're maximizing the volume of a box we need an equation for the volume of a box well the volume of a box is
1:05:02
given by volume equals length times width times height so that's where we
1:05:08
want to start our next problem though is that we need to get this equation in terms of one variable only right now
1:05:15
it's in terms of three variables length width and height on the right hand side we need one variable before we can move
1:05:21
forward because we want to be able to differentiate this so that we can find critical points so how do we hit this
1:05:27
right hand side in terms of only one variable well we realize that the length
1:05:32
of our box can be given here by this side and we know that this side length
1:05:39
here has length 10 the whole thing is 10 but then we have this part X and this
1:05:45
part X the whole thing like this is 10 so really this side length here that
1:05:53
we're trying to find is just 10 minus X minus X or 10 minus 2x so we could say
1:06:00
that the length is 10 minus 2x in the
1:06:06
same way the width if we look at the width of our box here we know that the
1:06:11
width of the entire thing is 10 but then we have this length here of X and this
1:06:16
length here of X that we're cutting out so we're only going to be left with this width right here
1:06:21
which is going to be 10 minus 2x so the width there is 10 minus 2x and then the
1:06:28
height of the box when we think about it in 3d when we fold up our edges the
1:06:33
height is going to be X because we have this height right here or this height right here that gets
1:06:39
folded up and becomes the height of this open top box so the height is also X and
1:06:45
now we have our equation in terms of one variable this is going to be an important part of your optimization
1:06:51
process is figuring out how to get this equation in terms of one variable and it's going to be different for every
1:06:57
problem but you're always going to be able to go back to the information you have and find some way to restate these
1:07:04
variables so that they're all in terms of the same variable so that's the task for this portion to get it in terms of
1:07:10
one variable then we may need to simplify this so here if we simplify we'll multiply the 10 minus 2x by the 10
1:07:17
minus 2x and we'll get 100 minus 20x minus 20x is a minus 40 X and then plus
1:07:25
4x squared multiplied by X and so our
1:07:31
volume equation then will be 100 X minus 40 x squared plus 4x cubed now we have a
1:07:41
simplified volume equation once we have this then we can go ahead and differentiate so our derivative V prime
1:07:49
is going to be equal to 100 minus 80 X and then plus 12x squared if we rewrite
1:07:59
that by factoring out a 4 first of all and then reordering the terms we'll get
1:08:05
4 times 3 x squared to get our 12x squared term and then minus 20x and then
1:08:13
plus 25 now remember we want to solve for critical points so we set this
1:08:20
derivative equal to 0 and then we need to solve this for critical points if we divide both sides by 4 we just get 3x
1:08:27
squared - 20 X plus 25 is equal to zero from
1:08:33
here we can either complete the square or we can use the quadratic formula in order to get the roots let's go ahead
1:08:40
and use the quadratic formula so X is going to be equal to negative B is 20
1:08:45
plus or minus the square root of B squared well negative 20 squared is 400
1:08:51
minus 4 times 3 is 12 times 25 is 300 so
1:08:59
we get 300 here and then we divide that by 2a or by 2 times 3 or by 6 and so the
1:09:08
result here is 20 plus or minus the square root 400 minus 300 is 100 the
1:09:14
square root of that is 10 so we get 10 here divided by 6 and so we have two
1:09:20
possible results we have 20 plus 10 is 30 30 divided by 6 is 5 or we have 20
1:09:27
minus 10 is 10 10 divided by 6 is 5/3
1:09:33
these are the two possible critical points for X but now before we go
1:09:38
forward we should evaluate them back in terms of this real-world problem to see
1:09:44
if they even make sense so if we take x equals 5 the first possible critical point and we think
1:09:49
about it in terms of this context well the width of our piece of paper is 10
1:09:54
inches if we say that X is 5 that's saying that we're cutting out a 5 by 5
1:09:59
square from each corner that would leave us with literally no width and no length
1:10:05
on this piece of paper we would literally cut up the entire piece of paper so it's impossible it's
1:10:11
nonsensical for X to be equal to 5 so we can go ahead and ignore this possible
1:10:16
critical point the only one that makes sense is x equals 5/3 so all we have
1:10:22
left to do now that we have one remaining critical point is use the first derivative test so if we first of
1:10:29
all draw a number line just like we've been used to and we plot our single
1:10:34
critical point x equals 5/3 and then we want to pick test values on either side
1:10:40
so 5/3 is one and two thirds so let's pick a test value of one and a test value of two if
1:10:47
we plug both of those test values into our derivative equation that's this
1:10:53
equation up here we'll say V prime of one is equal to we get 100 up here minus
1:11:00
80 times one is minus 80 and then one squared is one times 12 is 12 so we get
1:11:07
plus 12 and the result here is 20 and then 32 and then if we plug in our test
1:11:14
value x equals 2 we get 180 times 2 is
1:11:19
160 so minus 160 and then 2 squared is 4 4 times 12 is 48 so plus 48 we get 100
1:11:29
minus 160 as a negative 60 plus 48 is a negative 12 so the result there is that
1:11:36
we got a positive value here and a negative value here which means that our original function our original volume
1:11:43
function is increasing here on this interval and decreasing here on this
1:11:50
interval and so we know based on the first derivative test if we're increasing to the left of 5/3 and then
1:11:56
decreasing to the right of 5/3 that this critical point here represents a local
1:12:04
maximum and so by the first derivative test we've shown that x equals 5/3 is
1:12:10
going to maximize our volume function which means that it'll maximize the
1:12:16
volume of this open top box since this volume function represents the volume of this box so our answer here going back
1:12:24
to actually interpret it and answer the question that we've been asked it says find the value of x that maximizes the
1:12:30
volume well that's exactly what we've done we would say that our answer is x equals 5/3 because we've been asked for
1:12:38
the value of x here's where we would want to be careful though because the problem could have asked find the width of the box that maximizes its volume or
1:12:45
find the height of the box that maximizes volume or maybe find the maximum volume of the box so if we had
1:12:52
been asked for example for width we know that width is given by 10 minus 2x so we would have
1:12:59
had to take X and plug it back into 10 minus 2x to find the width that maximizes the volume or if we have been
1:13:06
asked for maximum volume we would have had to take our x value and plug it back into our volume equation to get the
1:13:14
maximum volume at x equals 5/3 so you just have to be careful that you answer
1:13:21
the actual question you've been asked for and that you can interpret this value to say that x equals 5/3 is the
1:13:27
value of x that maximizes the volume of the open top box and we were able to
1:13:33
find that by setting up an equation for the volume taking its derivative setting it equal to zero to find critical points
1:13:40
and then using the first derivative test to test those critical points and prove to ourselves that this particular value
1:13:46
is associated with a maximum volume
5.12 Exploring Behaviors of Implicit Relations
1:13:55
the last topic in unit 5 is about implicitly defined functions for example a function like y squared plus XY equals
1:14:03
to x squared and the key skill that we want to be able to take away from this unit is to be able to find critical
1:14:10
points of an implicitly defined function which we do slightly differently than we
1:14:15
would for an explicitly defined function so we want to go over that here the first part is the same we take the
1:14:21
derivative as we normally would but of course this is implicitly defined so we have to treat Y as a function of X and
1:14:28
when we differentiate we apply chain rule so if you remember from the derivatives of implicit functions the
1:14:34
derivative of Y squared is 2y but then because we differentiated something with
1:14:39
Y in it we have to multiply by either Y prime or dy over DX let's use Y prime
1:14:44
notation this time and then the derivative of XY we have to use product rule so the derivative of X is 1 we
1:14:53
leave Y alone and then we add to that the opposite scenario this time we leave
1:14:58
X alone and we take the derivative of Y the derivative of Y is 1 but then we
1:15:03
multiply by Y prime and then over on the right hand side we have the derivative
1:15:08
4x now we just need to simplify this and solve it for y Prime so here we'll get plus y plus X y prime
1:15:18
equals 4x we want to move everything to the right except terms that include a Y
1:15:24
prime so we get 2y Y prime plus X Y prime equals 4x minus y and then we
1:15:34
factor out a Y prime so Y prime times 2y plus X is equal to 4x minus y and then
1:15:43
we divide both sides by 2y plus X in order to solve for y Prime so Y prime is equal to 4x minus y
1:15:52
divided by 2y plus X and now at this
1:15:57
point we have a derivative function remember that in order to find critical points we set the derivative equal to
1:16:03
zero and that's the same here with an implicit function we set the derivative equal to zero
1:16:08
and then in terms of critical points were interested in two values we're interested in any values where the
1:16:14
derivative is equal to zero and then any values where the derivative is undefined if your implicit derivative here your
1:16:21
derivative function is a fraction then this fraction is always going to be equal to zero when the numerator is
1:16:28
equal to zero so we have the situation here for X minus y equals zero
1:16:33
the fraction is going to be undefined when the denominator is equal to zero so we have the situation 2y plus x equals
1:16:42
zero and then we want to solve both of these for y so if we solve both for y we
1:16:49
get y equals 4x this one over here we'll get 2y is equal to negative x or y is
1:16:57
equal to negative one-half X now what we want to do is take these equations one
1:17:04
at a time and substitute them back into the original implicitly defined function in other words we want to solve this
1:17:11
equation and the y equals 4x as a system of simultaneous equations then we'll do
1:17:16
the same thing with the original function and y equals negative one-half x so working on this one first y equals
1:17:23
4x we will replace all the Y's in the original function with 4x when we do
1:17:29
that instead of Y squared here we'll get 4 X quantity squared then we have plus
1:17:36
XY so plus X but instead of Y we'll use for X so for X is equal to 2x squared
1:17:44
now we can solve this for X so we get 16x squared plus 4x squared equals 2x
1:17:53
squared well over here we'll have 20 x squared if I subtract 2x squared from both sides I'm going to have 18 x
1:18:00
squared is equal to 0 if I divide both sides by 18 I get x squared equals 0 or
1:18:07
X is equal to 0 now I plug this value back into my y equals 4x to get y equals
1:18:14
4 times 0 is equal to 0 so that then gives me my first critical point which
1:18:22
the point zero zero then all I have to do is the same thing with the original equation and the y equals negative
1:18:28
one-half x to check that point as well to see if I get any different critical point so substituting this time negative
1:18:35
one-half X for y up here we'll get negative one-half X quantity squared
1:18:42
plugging into this original equation plus X times negative one-half X and
1:18:49
then equal to 2x squared simplifying here I'll get a positive 1/4 x squared
1:18:56
minus 1/2 x squared is equal to 2x
1:19:01
squared if I multiply through by 4 that'll clear the fractions and I'll get x squared minus 4 over 2 is 2 and then
1:19:10
equal to 8x squared here I have one x squared minus 2x squared it's a negative
1:19:16
x squared if I add that to both sides I'll end up with 0 equals 9 x squared or
1:19:22
x squared equals 0 when I divide both sides by 9 or x equals 0 and when I plug
1:19:29
this value back into y equals negative 1/2 X I get y equals negative 1/2 times
1:19:36
0 or 0 and so the critical point coming out of this system is 0 0 it's the same
1:19:45
thing so I do in fact just have one critical point at the point 0 0 and the
1:19:50
idea here is just that we can find critical points of an implicitly defined function in a very similar way to the
1:19:57
way in which we found critical points for an explicitly defined function"""`;

export default transcript;

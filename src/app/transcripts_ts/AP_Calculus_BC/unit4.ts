const transcript = `"""
LIST OF SUBUNITS:
4.1 Interpreting the Meaning of the Derivative in Context
4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration
4.3 Rates of Change in Applied Contexts other than Motion
4.4 Introduction to Related Rates
4.5 Solving Related Rates Problems
4.6 Approximating Values of a Function Using Local Linearity and Linearization
4.7 Using L'Hopital's Rule for Determining Limits in Indeterminate Forms
END OF LIST
big takeaway from topic 4.1 is really just about being able to understand the
0:55
relationship between the original function its derivative and its second derivative so let's say for instance
1:01
that we have this graph and let's say that it models a person's height over
1:07
their lifetime so we'll call this function H of T to indicate that its
1:12
height at time T where T is given by the number of years that the person has
1:17
lived so graphed on an axis like this we'll say that this is the T axis time
1:23
and this is the height axis H so the person is born here and as they go
1:29
through their childhood their height gradually increases and then maybe when they get close to adolescence they hit
1:35
this growth spurt and their height shoots up to kind of the point where it's going to remain for the majority of
1:41
their life and so they live out their life at this height and then maybe when they're very old maybe they lose just a little bit of
1:47
height some people get just a little bit shorter as they get into very old age so maybe this curve models the person's
1:54
height over time all we need to be able to understand here is what H of T can
2:00
tell us what the first derivative H prime of T can tell us and what the second derivative H double prime of T
2:08
can tell us so we want to first think about the original function H of T so we
2:13
have this curve here well if I take any value of T so let's say I may be interested in this
2:20
point right here maybe this is T equals 70 when they're 70 years old so what I
2:26
see is that if I just come up here from 70 to the point where I meet the function right here what I'm gonna get
2:32
is a particular height at time T equals 70 years so my height is going to be
2:38
right about here so this H of T function the original function is just giving me
2:44
height at a particular moment in time so height at time T I can plug in age 70
2:52
I can plug in age 13 age for age 35 into that original function and I'm going to
2:58
get height at that particular time the derivative function however gives us the
3:03
rate of change of the original function it gives us the slope of the original function if I think about slope I think
3:10
about the tangent line so basically this is just how fast is height changing well
3:15
we can see if we look at this graph here the slope is steepest maybe in this interval right here
3:22
that's adolescence maybe where they hit this growth spurt so the slope of the function is steepest if we sketch a
3:29
tangent line we can see here but maybe this is our point of tangency and then
3:35
if we sketch a line through that we see that the slope looks something like that it's very steep versus the slope at this
3:43
point right here is basically flat height isn't changing at all necessarily
3:50
the slope of the tangent line is flat there so we could describe this many
3:55
different ways but we could think of the derivative function as modeling the rate of change of height or we could call
4:05
that like we said the slope and so
4:11
depending on whether or not the derivative was positive or negative or zero if it's positive we know that
4:17
height is increasing because the slope is positive if it's zero we know that height is staying the same and if it's
4:23
negative like it would be over here the slope is negative then we know the person they're getting shorter and then of
4:29
course the second derivative which is the derivative of the first derivative that's going to give us you can think
4:34
about it as rate of change of the rate of change it tells us how fast the slope
4:40
is increasing or decreasing in the context of motion we think about that as
4:45
acceleration but in a context like this of height we could think about this as modeling whether or not the growth rate
4:53
is increasing or decreasing for example
5:00
here on this interval it looks like the growth rate is increasing they're starting to grow
5:06
faster and faster as they get here toward adolescence but on this interval right here we can see that the growth
5:14
rate is starting to taper off it's starting to slow down the slope is decreasing here versus here the slope is
5:21
increasing as we move so over here the second derivative would be positive but over here it would be negative because
5:27
the growth rate is speeding up versus slowing down so the goal here is just to be able to understand that relationship
5:34
between the original function first derivative and second derivative and we want to be able to think about this
5:39
relationship in all different kinds of contexts so whether we're modeling height or if we're modeling the size of
5:46
an object that's growing or shrinking or remodeling a population or temperature
5:51
any kind of value that's changing over time we want to be able to understand that that first derivative represents
5:57
the rate of change of the original function and that that second derivative represents the rate of change of that
6:03
first derivative [Music]
4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration
6:09
the most common type of relationship that we look at between the original function the first derivative and the
6:14
second derivative is the relationship between position velocity and acceleration and so we think about these
6:21
as motion problems and specifically we look a lot at straight-line motion problems but we'll talk about that in a
6:26
second so position we like to think of it's the original function and oftentimes will indicate that with X of
6:33
T will call the function X of T velocity is the derivative of that so velocity is
6:39
always the derivative of position so it's X prime of T and we write that as V
6:45
of T as well to indicate velocity and then acceleration is the first derivative of velocity and it's the
6:52
second derivative of position so we'll write that as either X double prime of T
6:57
as V prime of T the derivative of velocity or we'll call it acceleration a
7:03
of T so you want to be familiar with these and the fact that taking the derivative of position gives velocity
7:10
and taking the derivative of velocity gives acceleration oftentimes we'll look at straight-line motion problems or
7:16
rectilinear motion problems and you'll be told for instance that a particle is moving along a straight line or from
7:24
east to west or along the x axis but the point is along some horizontal line like
7:30
this and so if you imagine you have a particle here and it's moving along this
7:36
line it might move to the right sometimes then back to the left and back to the right but it's moving perfectly horizontally we want to be able to think
7:43
about that in terms of position velocity and acceleration so if the particle is moving to the right in this direction
7:50
then velocity is going to be a positive
7:55
value if the particle has moved to the left then velocity is going to be a
8:02
negative value we also want to know that when velocity and acceleration have the
8:09
same sign that the particle is speeding
8:15
up but when they have different signs that the particle is slowing down we
8:23
also want to be able to say that the absolute value or the magnitude of velocity is going to be equal to the
8:31
speed of the particle so if we want to find speed of the particle we just take the absolute value of velocity obviously
8:38
when we look at a problem like this one we want to be able to distinguish between distance traveled and
8:45
displacement so depending on how the particle moves maybe it starts here and it moves off to the right and then it
8:50
moves back to the left and then it moves back to the right and that eventually just continues on to the right for some
8:56
time we could find that total distance traveled that's different than the displacement which is just the
9:02
difference between its starting and ending positions so if the particle starts here and it goes something like
9:09
this and then it moves around and goes something like this to here and then it
9:16
comes around back this way and it moves like this and eventually ends up at this
9:22
ending point right here this whole distance this whole sneaking distance is the total distance traveled but the
9:29
displacement is just the difference between the starting and ending point right here so in general given a
9:36
position function something like this we've been given this position function here the most critical thing is for us
9:42
to be able to find velocity which we find as you know by just taking the derivative so we get 6t + 6 and then
9:50
defined acceleration by taking the derivative of velocity so we can see that that's 6 that gives us position
9:57
velocity and acceleration functions just by taking derivatives then we can answer all kinds of questions with these three
10:03
functions in hand for instance another question we can answer is to find average velocity over a particular
10:10
interval so if we want to find let's say average velocity over the interval will
10:17
say 0 to 9 so between T equals 0 and T equals 9 then we just use that difference quotient formula and we say T
10:25
equals 9 and T equals 0 and then we've divided by 9 minus 0 and so the result
10:32
there is we plug nine into the velocity function we get 6 times 9 is 54 54 plus
10:38
6 is 60 so we get 60 minus plugging 0 into the velocity function gives 6 so we
10:45
get 6 here and then 9 so we get 54 over
10:51
9 or 6 so average velocity between T equals 0 and T equals 9 is 6 or if we
10:59
wanted to find average acceleration so let's say acceleration over the same
11:04
interval between T equals 0 and T equals 9 we would say this we would set up this
11:09
difference quotient value 9 minus 0 and
11:15
we would get here when we plug 9 and 0 into the acceleration function we just get 6 either way so we get 6 divided by
11:23
9 well we're just going to get 0 in the numerator so average acceleration between T equals 0 and T equals 9 is 0
11:31
we want also to be able to think about units for each of these values so the
11:36
original position function tells us where the particle or the object is located so if we find a value for
11:42
position the units will be in terms of whatever distance were measuring in so let's say that we're calling T time
11:48
after T seconds and we're giving position in terms of miles so we're talking about miles per second well the
11:55
position function is going to return something in terms of miles the velocity
12:00
function is going to return something in terms of miles per second and the
12:08
acceleration function is going to return something in terms of miles per second
12:13
squared and then average velocity and average acceleration average velocity is
12:19
going to be miles per second as well whereas average acceleration matches acceleration here miles per second
12:26
squared so just remember with these kinds of problems if you're starting with a position function you take the
12:32
derivative to get velocity you take the derivative to get acceleration always start with those three functions once
12:37
you have those in place then you can start tackling all of the questions that come along with problems like these in
12:43
terms of where is the particles speeding up or slowing down or to find the speed as the magnitude of
12:49
velocity or to find average velocity or average acceleration all these different values but starting with these three
12:55
functions getting those down first is always the place you want to start in
4.3 Rates of Change in Applied Contexts Other Than Motion
13:05
4.3 we really just want to think about rates of change in general so in 4.2 we
13:11
talked about motion we talked about position velocity and acceleration but as you know there are rates of change
13:18
all around us in every industry in every aspect of life earlier on in the video
13:23
we looked at height and how height could change over time and how if we were
13:28
given a function H of T that models height then finding its derivative H
13:35
prime of T would give us the rate of change of the height to tell us if we are growing or if we're shrinking and
13:42
then H double prime of T the second derivative of height would tell us
13:47
whether or not that rate of change is itself increasing or decreasing so there's all these different contexts we
13:54
can talk about rates of change in terms of the population if we have a population function P of T and then the
14:01
derivative tells us if the population is growing or if it's declining you can
14:07
look at someone's weight if they're fluctuating and weight they're gaining weight they're losing weight and the
14:13
original function would model weight so after a certain amount of time T for
14:18
example if someone's trying to lose weight and you say T is the number of weeks since they started at T equals
14:24
three the original function would give their weight in the third week but the derivative function would tell you
14:32
whether or not they're gaining or losing weight so if we plugged in T equals three the derivative function W prime of
14:37
T would tell us if they're gaining weight at that point or losing weight at that point and the second derivative
14:43
function would tell us whether they're starting to gain or lose weight faster or slower we could talk about this in
14:51
terms of businesses so for example the cost of producing a certain good maybe
14:57
we're talking about a sunglasses company and we're talking about the producing a certain number of sunglasses
15:02
so let's say the cost of producing s sunglasses that original function if we
15:08
plugged in s equals 100 C of s would give us the cost that it takes in order
15:14
to build those 100 pairs of sunglasses the derivative function C prime of s
15:20
would tell us whether or not at s equals 100 cost is increasing or decreasing and
15:26
we can do this with area and volume functions as well so for instance if we
15:31
want to look at the area of a circle area equals PI R squared and we want to
15:37
let's say take the derivative of the area function with respect to its radius
15:43
we would differentiate with respect to R and we would get da over D R equals to
15:49
PI R and this would give us the rate of change of the area of the circle with
15:55
respect to the radius or in terms of the value of the radius if we had an equation for the area of a triangle the
16:03
area of a triangle is 1/2 times the base times the height and we want to differentiate with respect to the base B
16:09
we'd say da DB is equal to in this case we hold H as a constant and so we would
16:16
just get 1/2 H because the derivative of B is 1 the whole idea here is that you
16:24
want to be able to think about rates of change in different contexts there's literally an infinite number of
16:30
different examples you could come up with for rates of change in the world around you and you just want to be able
16:36
to model in your head or reason through in your head what that original function represents what its derivative function
16:43
is telling you and what that second derivative function is telling you calculate the first and second
16:49
derivatives and then be able to answer questions using those functions and actually interpret what those values are
16:56
telling you [Music]
4.4 Introduction to Related Rates
17:01
in the next topic four-point-five will really dig more into how to solve related rates problems but in this topic
17:08
we really just want to introduce the concept and go through sort of the process of what a related rates problem
17:15
looks like so in general these are the steps we're going to follow when we're given a related rates problem we want to
17:21
first draw a picture then we want to write an equation that relates the values that we have been given including
17:28
the unknown value that we want to find then we want to be able to differentiate that equation using chain rule then we're going to plug in all the
17:34
values we've been given and solve for the unknown that we're looking for and then we need to be able to interpret our
17:40
results so we need to understand what our result means in context so just to sort of walk through these steps let's
17:47
look at an example in this example we've been told that a 1 meter long shovel is leaning against a fence sliding down it
17:54
at 0.25 meters per second and we've been asked at what rate is the shovel sliding
18:00
along the ground away from the fence when the top of the shovel is 0.5 meters off the ground so there's a lot going on
18:06
there but really we just need to follow our process picking out the pieces of information from the problem that we
18:11
need and we'll be able to walk straight through it so the first thing we want to do is draw a picture and we have a
18:17
shovel leaning against a fence so let's just say here that this is the fence this is the ground and then we'll call
18:25
this here the shovel so the shovel is leaning against the fence like this and
18:32
so right away we see that we have a right triangle we know that this is a
18:37
right angle here between the fence and the ground and we can go ahead and call this the fence we'll call this the
18:47
ground and we'll say that this up here is the shovel just to help remind us so
18:53
that's it for drawing a picture now we need to write an equation well usually
18:58
when we have a right triangle the equation that we use because it's the equation that relates that three sides
19:03
of the triangle is going to be the Pythagorean theorem a squared plus B squared equals C squared in our case
19:10
let's call the graph side a the fence side B and the shovel side C because C is always the
19:17
hypotenuse so that's going to be the equation that we're gonna start to work from and then we want to differentiate
19:24
with chain rule and this goes back to treating each of the variables as a function with respect to time so when we
19:31
differentiate each variable we do it like we did with implicit differentiation so the derivative of a
19:37
squared is 2a but then we have to multiply by da over DT the derivative of
19:45
B squared is 2b but then we multiply by DB over DT and the derivative of C
19:52
squared is 2 C but then we multiply by D C DT so every variable in the equation
19:59
we differentiate it but then we multiply by that rate of change with respect to T
20:05
of that variable so that's our step for differentiation then we go ahead and
20:10
plug in everything we know and solve for the value that we want so what do we know from the problem first of all we
20:17
know that the shovel has a length of 1 meter well the length the shovel is given by C so over here we can say 2
20:25
times 1 and then what about DC DT well this is the rate of change of C with
20:33
respect to time but the length of the shovel doesn't change doesn't matter at what point in the sliding process we're
20:40
at the length of the shovel stays the same so the rate of change of a constant is 0 if it stays the same it's not
20:47
changing so that rate of change is zero so we've plugged in everything on the right-hand side and then on the left
20:53
over here we're told in the problem that the shovel is sliding along the ground away from the fence so as it does that
21:00
as it slides down what we know is that the top here is going to slide down so
21:06
the top is coming this way which means that the length of B is going to be
21:11
decreasing over time the bottom of the shovel is sliding away from the fence along the ground so the bottom is
21:18
sliding this way and the length of a is going to be increasing it's going to be
21:24
getting larger we know from the problem that the shovel is sliding down the fence at 0.25 meters
21:30
per second so that means that the top here is sliding down at 0.25 meters per second so B is getting smaller at a rate
21:38
of 0.25 meters per second well the rate of change of B is DB over DT so we can
21:44
go ahead and plug in for that and say negative 0.25 and we use a negative
21:49
value because B is shrinking the length of side B is getting smaller and then
21:54
we've been asked to find a value when the shovel is 0.5 meters off the ground so that's saying that we're interested
22:02
in the point in time at which this length right here is 0.5 so when B is
22:09
0.5 so we can plug 0.5 in for B we keep our 2 here all that's left now notice we
22:16
plugged in for everything all that's left to plug in for is a and da over DT
22:22
well what have we been asked for we've been asked at what rate is the shovel
22:27
sliding along the ground well that is da over DT that's the rate
22:32
of change of a how fast a here is increasing that's going to be our unknown that's the value we want to find
22:38
it's the value we want to leave in the equation but we need to get rid of this a here so how do we find a well that's
22:46
where we go back to our Pythagorean theorem we know here that side B is 0.5 we know that side C is 1 because the
22:54
shovel has length 1 meter so we can use the Pythagorean theorem to solve for the value of a so we say a squared plus
23:01
instead of B squared we say 0.5 squared is equal to C squared or 1 squared so we
23:09
get a squared plus 0.25 equals 1 or a
23:14
squared equals 0.75 if we write point seven five as three over four and we
23:23
take the square root of both sides then we get a is equal to square root 3 over 2 so now we have a value for a and we
23:31
say 2 times root 3 over 2 that's our value for a and then we have da
23:38
over DT and now we've got everything plugged into the equation so notice how
23:45
we were able to plug everything in but we got stuck with a and da over DT we
23:51
figured out that da over DT was the value we needed to find which told us that we had to go back somewhere somehow
23:57
and figure out a value for a because we have to plug in for everything other
24:02
than the single value were trying to solve for so we knew we had to go back and find some way to find a so we looked
24:09
for information in the problem to realize that we could find a solve for a using the Pythagorean theorem and so
24:16
then of course you would simply solve this equation so over here on the right we're going to get 0 here 2 times 0.5 is
24:23
1 so we end up here with negative 0.25 over here on the left we get 2 in the
24:31
numerator to cancel with 2 in the denominator so if we add this 0.25 to both sides we end up with root 3 da over
24:40
DT equals 0.25 or we could rewrite this as 1/4 and then if we divide both sides
24:49
by root 3 we get da over DT is equal to
24:55
1 over 4 root 3 but then we want to rationalize the denominator by
25:00
multiplying both the numerator and the denominator by the root and we say da over DT is root 3 over 12
25:09
because root 3 times root 3 is 3 times 4 is 12 so we say that the rate of change of a
25:16
is root 3 over 12 and so our last step then is to interpret and what does this
25:22
mean well the fact that the value is positive means that the length of a is increasing and that matches what we know
25:29
about this problem the shovel is sliding away from the fence which means the length of side a is going to be
25:35
increasing so the fact that this is positive that checks out and it just tells us that the shovel is sliding away
25:42
from the fence along the ground at a rate of root 3 over 12 meters per second
25:48
and so that's how we interpret that [Music]
4.5 Solving Related Rates Problems
25:55
so the goal in 4.40 was to really focus on the idea behind related rates
26:00
problems and what they are but in 4.5 we really just want to focus on problem solving so we're gonna look at another
26:06
problem and in this one we have a plane flying horizontally at 360 miles per hour five miles above the ground when it
26:14
passes overhead how fast is the distance between you and the plane increasing 40 seconds later so we remember here our
26:21
problem solving process that we go through but of course our first goal is to draw a picture of the situation so
26:28
we're standing on the ground so let's say that this is us here and we're
26:33
standing at ground level so let's just say this is ground level here the plane passes directly above us
26:39
so let's say that directly above us is right here we know that we have five miles between us and the plane so this
26:47
is five miles overhead and the plane is flying horizontally so let's say it's flying this way so the plane is going to
26:55
be over here later on and so then we could sketch in the distance between us
27:01
and the plane as this distance right here and so right away when we sketch
27:07
the problem we see that we have a right triangle and so we're going to go back
27:12
to the Pythagorean theorem so we have a picture we're going to write an equation
27:17
and that equation is going to be as you know a squared plus B squared equals C
27:22
squared we'll call the hypotenuse the distance between us and the plane C we'll call
27:28
this leg a and we'll call this leg B and that's going to be our equation so we'll
27:35
write the equation there and then of course we'll differentiate it so when we differentiate let's bring this up here
27:41
we know we're going to get 2a and then da over DT plus 2b DB over DT and then
27:51
to see DC over DT and now we want to start figuring out which values we have
27:58
well we know that the plane is flying perfectly horizontally and that it's five miles above the ground so a is
28:04
always b5 so a will always be five and the rate of change of a because a is constant the
28:11
rate of change is zero so da over DT is going to be zero in order to find B
28:16
we're gonna have to use the fact that forty seconds have passed and the planes been flying for 40 seconds notice also
28:22
that the planes traveling at 360 miles per hour but we've been asked about 40 seconds later so we have hours and
28:29
seconds those units don't match we need to make them match so let's convert 40 seconds into hours the way that we do
28:36
that is we say 40 seconds we multiply it by one minute in 60 seconds and then we
28:45
say that there's one hour in 60 minutes
28:50
and when we do that we get units of minutes to cancel we get units of seconds to cancel leaving us with just
28:57
hours and so we get 40 over 3600 so 40
29:03
over 3600 which is equal to 4 over 360
29:10
which is equal to 1 over 90 hours so after 190th of an hour how far has the
29:17
plane traveled well it travels 360 miles in an hour so we could multiply this by
29:23
360 miles in one hour when we do that we get our units of
29:31
hours to cancel and we're left with 360
29:37
miles we'll say this is miles here divided by 90 or 4 miles
29:46
so in 40 seconds the planes traveled for miles which means our value for B at the moment we're interested in is 4 so we
29:53
can say plus 2 times 4 we know the rate of change of B is 360 because the planes
30:01
traveling at 360 miles per hour so the length of B is increasing by 360 miles
30:07
every hour so that's a positive 360 because that distance B is increasing
30:12
and then on the right-hand side in order to find C we'll use the Pythagorean
30:17
theorem we know a is 5 and B is 4 we need to find C so 5 squared gives us 25 4 squared gives us
30:25
16 so we end up with C squared equals 41 or C equals root 41 and so over here we
30:35
say root 41 and DC over DT is the value that we're trying to solve for how fast
30:42
is the distance between you and the plane increasing that's the rate of change of c DC over DT is the rate of
30:48
change of C so we leave DC over DT so now we have differentiated with chain
30:56
rule and we've plugged in to our equation we just need to solve this
31:01
whole term goes to 0 when we divide both sides by 2 we'll get the twos to cancel here and
31:06
we'll be left with 4 times 360 is 1440 so 1440 and then divided by root 41 is
31:15
equal to DC over DT if we calculate 14
31:21
40 divided by root 41 as a decimal we see that it's approximately equal to 224
31:27
0.9 or about 225 so that tells us that the distance between us and the plane is
31:34
increasing at a rate of about 225 miles exactly 40 seconds after the plane
31:41
passes us overhead that's how we interpret that result because the result
31:46
is positive we know that the distance between us and the plane is increasing which makes sense since the plane is
31:51
flying away from us so again with these related rates problems you want to follow this set of steps and if you ever
31:57
run into a snag where you know you need to plug in for a value that you don't have already you need to go back to the
32:03
problem back to the diagram figure out a way to solve for it and just be careful with your positive and negative signs
32:09
depending on whether a value is increasing or decreasing and remember also that especially with related rates
32:15
problems they get easier with practice so definitely get as many of these under your belt as you can
32:22
[Music] four-point-six is all about
4.6 Approximating Values of a Function Using Local Linearity and Linearization
32:28
approximating the value of a curve using a local linearity or linearization which you can really just think about as the
32:35
tangent line approximation remember that the point-slope form the equation of a line is given by Y minus y1 equals M
32:42
times X minus x1 and really there's just three pieces of interesting information here M which is the slope of the line
32:49
and then x1 and y1 which together make up a point that the line passes through
32:55
so really all we want to be able to take away from here is that we want to be able to start with some function so
33:02
let's say that we start here with f of X and we want to be able to find a tangent line at a point and remember to do that
33:08
we need to be able to find those three pieces of information that we talked about so we need to be able to find here
33:14
M x1 and y1 so let's say that we've been
33:20
asked to find the tangent line at x equals 1 so in order to do that first of
33:27
all we plug x equals 1 into the original function because x equals 1 is what we're going to put in for x sub 1 and
33:33
then y sub 1 is going to be the value of y that corresponds to x equals 1 so we
33:39
simply say f of 1 is equal to and we plug in here so we get 1 squared minus 6
33:46
times 1 plus 1 and the value there is going to be 4 minus 6 plus 1 which is a
33:53
negative 1 so that tells us that Y is equal to negative 1 when X is equal to 1
33:58
these are our values X sub 1 and y sub 1 then define the slope M we just take the
34:04
derivative of the function and evaluate it at x equals 1 so our derivative f prime of X is going to be we'll apply
34:12
power rule here to the polynomial function so we'll get 8x minus 6 for the
34:17
derivative and then evaluating the derivative at 1 it gives 8 times 1 is 8
34:22
8 minus 6 is 2 so we get a value there for 2 so this is M this is X sub 1 and
34:30
this is y sub 1 so to find our tangent line equation we just plug in
34:36
so we say Y minus y 1 is negative 1 so negative 1 equal to M which is 2 times X
34:44
minus X sub 1 which is 1 and then we simplify so y plus 1 is equal to 2 times
34:51
X minus 1 this is our tangent line equation and keep in mind that we can write this different way so we can solve
34:58
for y by subtracting 1 from both sides and rewrite this as y equals 2 times the quantity X minus 1 minus 1 we can also
35:07
expand this out here to write this as 2x minus 2 minus 1 or y equals 2x minus 3
35:16
so just keep in mind that if on the AP test you're looking for a tangent line equation you might see it given in this
35:23
form you might see it given in this form or you might see it given in this form they're all equivalent so you need to be
35:30
able to convert back and forth between those once you have your tangent line equation so once you can get to this
35:35
point the only other thing we want to be able to do is use this equation which is the tangent line equation or the
35:42
linearization we want to be able to use this equation to estimate the value of the function at a particular point
35:48
remember this is the tangent line equation that intersects the graph of f of X here at x equals 1 which means that
35:57
this tangent line equation should give us a pretty good estimate of the value of the function around x equals 1 so for
36:04
example we can maybe use the tangent line equation to estimate the value of the function at 1 point 1 so in order to
36:10
do that we would simply plug one point 1 into this tangent line equation so if we
36:16
do that up here what we would get is Y is equal to 2 times 1 point 1 minus 3
36:23
that gives us 2 point 2 minus 3 or negative 0.8 so the approximate value of
36:32
this function f of X at one point 1 is negative 0.8 and you might be saying why
36:38
wouldn't we just plug 1 point 1 into the function itself to get the actual value the exact value well sometimes you're
36:45
going to be able to do that like here we could do that but sometimes the function will be undefined at one point one it'll have some kind of
36:51
discontinuity there we won't be able to find the value for some reason and in that case a tangent line approximation
36:57
or a linearization can work well to give you an estimate the only other thing we want to be able to know how to do is to
37:04
determine whether or not this estimate is an over estimate or an under estimate if we can evaluate the original function
37:11
at the point at which we're estimating so if we can evaluate f of X at one point one we can go ahead and plug it in
37:17
there see what the actual value is and then compare that actual value to our estimate right here to see which one is
37:25
greater if the actual value is larger than the estimate and the estimate is an
37:31
under estimate but if the actual value is smaller than the estimate then the
37:36
estimate is an over estimate we can also see that from the graph so let's say for example we're given these two curves
37:43
here and let's say that we for this first curve we found the tangent line approximation at this point right here
37:50
and the tangent line looked something like this so let's say we drew it
37:55
through here and it looked something like that well if we now use this tangent line approximation to estimate
38:02
the value of the function let's say at this point right here we can see the value on the tangent line is going to be
38:07
here but the actual value is going to be up here so the tangent line
38:15
approximation is going to give an under estimate but if we have a graph like
38:21
this one and let's say we find the tangent line approximation right here and our tangent line looks something
38:27
let's say like this and then we use that tangent line approximation to estimate
38:35
the function at this point we can see that the line is going to give us this
38:40
value here versus the actual value of the function is here so the tangent line
38:45
approximation is going to give us an overestimate in this case what this
38:51
should show you too is that if on the interval between the point of tangency and the value that we're estimating so
38:59
if on this interval the curve is concave down then tangent line approximation is going to
39:05
be an over estimate but if on the interval instead the curve is concave up
39:12
this curve here this graph is concave up then the tangent line approximation is going to give you an underestimate so
39:19
that's one way to know as well looking at the concavity of the function between the point of tangency and the point of
39:25
estimation that can also tell you whether or not you're going to have an overestimate or an underestimate four
4.7 Using L'Hospital's Rule for Determining Limits of Indeterminate Forms
39:36
point seven is about using l'hopital's rule to find the limits of indeterminate forms and you're going to get multiple
39:42
l'hopital's rule problems on the AP test so we really want to make sure that we know how to do this the first thing we
39:47
have to remember is that l'hopital's rule is different than quotient rule when you use quotient rule you take the
39:53
derivative of the ratio remember a ratio is a fraction so when you apply quotient rule you're simply taking the derivative
39:59
of the fraction but when you apply l'hopital's rule you're taking the ratio of the derivatives you're taking the
40:06
derivatives of the numerator and denominator separately and then taking their ratio putting those into a
40:12
fraction so just remember that as a way to distinguish between the two and then the first thing that we always have to
40:17
do when we want to use l'hopital's rule is we must show that we find an indeterminate form when we use
40:24
substitution before applying the rule so for instance in this problem here the
40:29
limit as X goes to zero of e to the X minus cosine X divided by X what we needed to do first is use substitution
40:37
by plugging in x equals zero to prove that we get a form 0 over 0 or infinity
40:42
over infinity because we're not allowed to apply l'hopital's rule unless we
40:48
first find one of these indeterminate forms so in this problem we would plug in x equals zero and we would get e to
40:55
the 0 minus cosine of 0 is going to be equal to e to the 0 is 1 cosine of 0 is
41:03
1 so we get 1 minus 1 or 0 and then in the denominator when we plug in x equals
41:09
0 we get 0 in the denominator so we end up with 0 over 0 as the indeterminate
41:15
form we have to be careful here because we say it's not technically correct to say but this is equal to zero over zero we
41:23
don't ever want to write it that way because zero over zero is a form it's not a value so we can't say the limit is
41:30
equal to zero over zero this doesn't make sense or we wouldn't want to say that it's equal to infinity over
41:36
infinity you don't want to set this equal to an indeterminate form what you want to do instead is off to the side
41:42
like we did here find the value of the numerator and denominator separately or you can write it this way the limit as X
41:50
approaches zero of the numerator e to the X minus cosine of X is equal to 0
41:56
and then alongside that the limit as X goes to 0 of the denominator X is equal
42:04
to 0 and because we have 0 and 0 here for both we say that this leads to an
42:09
indeterminate form something like that once we've shown that we have an indeterminate form when we apply
42:16
substitution then we can apply l'hopital's rule and to do that we leave the limit notation as is and then we
42:24
replace the numerator with its derivative so the derivative of e to the X is still e to the X and the derivative
42:30
of cosine of X is negative sine of X so we get minus negative sine of X or plus
42:37
sine of X and then in the denominator we replace the denominator with its own
42:42
derivative the derivative of X is 1 so we've applied l'hopital's rule once now
42:48
we want to go ahead and simplify we don't need to write a denominator of 1
42:53
so we'll simplify this to e to the X plus sine of X now after every
43:00
application of l'hopital's rule you want to try substitution again so let's try substitution this time we'll
43:06
say we get e to the 0 plus sine of 0 e to the 0 is 1 and sine of 0 is 0 so we
43:14
get 1 plus 0 is equal to 1 and we get a real number answer not an indeterminate
43:20
form so that's going to be our answer this is the value of the original limit if you find an indeterminate form again
43:28
after using substitution you just want to apply a second time after you apply it a
43:33
second time simplify that value as much as possible with that function as much as possible and then try substitution
43:40
again and you can keep doing this over and over until you eventually get to a real number answer okay so that's it for
Summary
43:48
unit 4 you really want to make sure that you know how to find the velocity and acceleration function given the position
43:55
function and answer all kinds of questions about those three functions you also want to make sure that you know
44:02
how to solve lots of different kinds of related rates problems and remember that these get a lot easier with practice so
44:08
the more of these you can practice the better you want to make sure you know how to use a linearization or a tangent
44:14
line approximation to estimate the value of a function and you need to be able to say whether or not that estimate is an
44:20
over or an underestimate and then lastly you want to be able to use l'hopital's
44:26
rule to evaluate the limit of an indeterminate form and you need to be able to show first with substitution
44:32
that you have an indeterminate form and then apply l'hopital's rule one or two times or however many times it takes in
44:39
order to find the real number value of the limit once you're good to go on unit for it make sure to come back and move
44:45
on to unit 5 or we'll dig in to optimization with derivatives [Music]"""`;

export default transcript;

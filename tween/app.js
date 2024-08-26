// rotate and move elements with a class of "box"
// ("x" is a shortcut for a translateX() transform) over the course of 1 second.
// gsap.to(".box", {
//     x: 100,
//     duration: 2,
//     repeat: -1
// });


gsap.set(".box", { opacity: 0, background: "orange" });
gsap.to(".box", {
    opacity: 1,
    repeat: -1,
    duration: 2,
    x: 100,
    yoyo: true
});

// ----------- use from and from to for animation circle -----------//

// Other types of tweens: from() - you define the starting values to animate "from",
// GSAP uses the current values as the destinations (like a tween running backwards) fromTo() -
// you define the starting and ending values.

gsap.from(".circle1", {
    y: -200,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "linear"
})

// A gsap.fromTo() tween lets you define BOTH the starting and ending values 
// for an animation (as opposed to from() and to() tweens which use the current 
// state as either the start or end). 

gsap.fromTo(".circle2", {
    y: 200,
    opacity: 0
},
    {
        opacity: 1,
        duration: 3,
        y: -200,
        ease: "linear",
        repeat: -1,
        yoyo: true,
        borderRadius: 0
    }
)
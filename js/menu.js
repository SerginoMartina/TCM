var t1 = new TimelineMax({paused: true});

t1.to(".outer-content .title, p", 1, {
      opacity: 0
});

t1.to(".menu", 1, {
      width: "45%",
      ease: Expo.easeInOut
}, "-=1");

t1.staggerFrom(".menu ul li", 0.2, {y: 20 , opacity: 0, ease: Expo.easeInOut}, 0.1);



t1.reverse();
$(document).on("click", ".toggle-btn", function() {
      t1.reversed(!t1.reversed());
});
$(document).on("click", "#menu", function() {
      t1.reversed(!t1.reversed());
});
 $(document).on("click", "#share", function() {
      t1.reversed(!t1.reversed());
});